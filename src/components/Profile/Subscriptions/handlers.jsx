/* eslint-disable no-unsafe-optional-chaining */
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import useStyle from '../../../hooks/useStyle';
import bc from '../../../services/breathecode';
import useSignup from '../../../store/actions/signupAction';
import { toCapitalize, unSlugify } from '../../../utils';
import { currenciesSymbols } from '../../../utils/variables';
import useCustomToast from '../../../hooks/useCustomToast';

function profileHandlers() {
  const { t, lang } = useTranslation('profile');
  const { reverseFontColor, fontColor, lightColor } = useStyle();
  const { createToast } = useCustomToast({ toastId: 'getting-plan-offer-error' });
  const router = useRouter();
  const { setPaymentStatus } = useSignup();

  const getPlanProps = async (slug) => {
    const resp = await bc.payment().getPlanProps(encodeURIComponent(slug));
    const data = await resp?.data;
    return data;
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const parsedDate = new Date(date);
    return format(parsedDate, 'dd MMM yy', { locale: lang === 'en' || lang === 'us' ? enUS : es });
  };

  const statusLabel = {
    free_trial: t('subscription.status.free_trial'),
    fully_paid: t('subscription.status.fully_paid'),
    active: t('subscription.status.active'),
    expired: t('subscription.status.expired'),
    payment_issue: t('subscription.status.payment_issue'),
    cancelled: t('subscription.status.cancelled'),
    completed: t('subscription.status.completed'),
    error: t('subscription.status.error'),
  };
  const statusStyles = {
    free_trial: {
      color: fontColor,
      border: '1px solid',
      borderColor: lightColor,
    },
    fully_paid: {
      color: 'green.400',
      background: 'green.light',
    },
    active: {
      color: 'green.400',
      background: 'green.light',
    },
    expired: {
      color: fontColor,
      background: 'transparent',
      border: '1px solid',
    },
    error: {
      color: fontColor,
      background: 'transparent',
      border: '1px solid',
    },
    payment_issue: {
      color: 'danger',
      background: 'red.light',
    },
    cancelled: {
      color: reverseFontColor,
      background: 'gray.default',
    },
    completed: {
      color: 'blue.default',
      border: '1px solid',
      borderColor: 'blue.default',
    },
  };

  return {
    statusStyles,
    statusLabel,
    getLocaleDate: (date) => {
      const newDate = new Date(date);
      return newDate.toLocaleDateString();
    },
    durationFormated: (DurFormat) => {
      const duration = DurFormat?.duration;
      const days = duration?.days;
      const hours = duration?.hours;
      const daysLabel = t('days');
      const dayLabel = t('day');
      const monthsLabel = t('months');
      const monthLabel = t('month');
      const andLabel = t('and');
      const hoursLabel = t('hours');

      if (DurFormat.status === 'expired') return t('expired');
      if (duration?.months > 0) return `${duration?.months} ${duration?.months <= 1 ? monthLabel : monthsLabel}`;
      if (days === 0 && hours > 0) return `${hours}h ${andLabel} ${duration?.minutes}min`;
      if (days > 7) return `${days} ${daysLabel}`;
      if (days <= 7 && hours < 0) return `${days} ${days > 1 ? daysLabel : dayLabel} ${duration?.hours > 0 ? `${andLabel} ${duration?.hours} ${hoursLabel}` : ''}`;
      return DurFormat?.formated;
    },
    payUnitString: (payUnit) => {
      if (payUnit === 'MONTH') return t('monthly');
      if (payUnit === 'HALF') return t('half-year');
      if (payUnit === 'QUARTER') return t('quarterly');
      if (payUnit === 'YEAR') return t('yearly');
      return payUnit;
    },
    getPlan: ({ slug, onOpenUpgrade = () => { }, disableRedirects = false }) => new Promise((resolve, reject) => {
      bc.payment().getPlan(encodeURIComponent(slug))
        .then(async (res) => {
          const data = res?.data;

          const bullets = await getPlanProps(slug);
          const outOfConsumables = data?.service_items.some((item) => item?.how_many === 0);

          if (data && data?.slug) {
            const planData = data;
            // const outOfConsumables = currentPlan?.service_items.some((item) => item?.how_many === 0);

            // -------------------------------------------------- PREPARING PRICES --------------------------------------------------
            const existsAmountPerHalf = data?.amount_per_half > 0 || data?.price_per_half > 0;
            const existsAmountPerMonth = data?.amount_per_month > 0 || data?.price_per_month > 0;
            const existsAmountPerQuarter = data?.amount_per_quarter > 0 || data?.price_per_quarter > 0;
            const existsAmountPerYear = data?.amount_per_year > 0 || data?.price_per_year > 0;

            const isNotTrial = existsAmountPerHalf || existsAmountPerMonth || existsAmountPerQuarter || existsAmountPerYear;
            const financingOptionsExists = planData?.financing_options?.length > 0;
            const financingOptionsManyMonthsExists = financingOptionsExists && planData?.financing_options?.some((l) => l?.monthly_price > 0 && l?.how_many_months > 1);
            const financingOptionsOnePaymentExists = financingOptionsExists && planData?.financing_options?.some((l) => l?.monthly_price > 0 && l?.how_many_months === 1);

            const isTotallyFree = !isNotTrial && planData?.trial_duration === 0 && !financingOptionsExists;

            const financingOptionsManyMonths = financingOptionsManyMonthsExists
              ? planData?.financing_options
                .filter((l) => l?.monthly_price > 0 && l?.how_many_months > 1)
                .sort((a, b) => a?.monthly_price - b?.monthly_price)
              : [];

            const financingOptionsOnePayment = financingOptionsOnePaymentExists
              ? planData?.financing_options
                .filter((l) => l?.monthly_price > 0 && l?.how_many_months === 1)
                .sort((a, b) => a?.monthly_price - b?.monthly_price)
              : [];

            const getTrialLabel = () => {
              if (isTotallyFree) {
                return {
                  priceText: t('subscription.upgrade-modal.free-course'),
                  description: t('subscription.upgrade-modal.full_access'),
                };
              }
              if (planData?.trial_duration_unit === 'WEEK') {
                const weekDays = planData?.trial_duration * 7;
                return {
                  priceText: `${t('subscription.upgrade-modal.duration_days', { duration: weekDays })} ${t('subscription.upgrade-modal.connector_duration_trial')}`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_days', { duration: weekDays })}`,
                };
              }
              if (planData?.trial_duration_unit === 'DAY') {
                return {
                  priceText: `${t('subscription.upgrade-modal.duration_days', { duration: planData?.trial_duration })} ${t('subscription.upgrade-modal.connector_duration_trial')}`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_days', { duration: planData?.trial_duration })}`,
                };
              }
              if (planData?.trial_duration_unit === 'MONTH') {
                return {
                  priceText: `${planData?.trial_duration} month trial`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_month', { duration: planData?.trial_duration })}`,
                };
              }
              return {
                priceText: t('subscription.upgrade-modal.free_trial'),
                description: '',
              };
            };

            const onePaymentFinancing = financingOptionsOnePaymentExists ? financingOptionsOnePayment.map((item) => ({
              title: t('subscription.upgrade-modal.one_payment'),
              price: item?.monthly_price,
              priceText: `$${Number(item?.monthly_price) % 1 === 0 ? Number(item?.monthly_price).toFixed(0) : Number(item?.monthly_price).toFixed(2)}`,
              period: 'FINANCING',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `f-${item?.monthly_price}-${item?.how_many_months}`,
              how_many_months: item?.how_many_months,
              suggested_plan: planData,
              type: 'PAYMENT',
              show: true,
            })) : [];

            const trialPlan = (!financingOptionsExists && !isNotTrial) ? {
              title: t('subscription.upgrade-modal.free_trial'),
              price: 0,
              priceText: getTrialLabel().priceText,
              trialDuration: planData?.trial_duration,
              period: planData?.trial_duration_unit,
              description: getTrialLabel().description,
              plan_id: `p-${planData?.trial_duration}-trial`,
              suggested_plan: planData,
              type: isTotallyFree ? 'FREE' : 'TRIAL',
              isFreeTier: true,
              show: true,
            } : {};

            const monthPlan = !financingOptionsOnePaymentExists && existsAmountPerMonth ? [{
              title: t('subscription.upgrade-modal.monthly_payment'),
              price: planData?.price_per_month,
              priceText: `$${Number(planData?.price_per_month) % 1 === 0 ? Number(planData?.price_per_month).toFixed(0) : Number(planData?.price_per_month).toFixed(2)}`,
              period: 'MONTH',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `p-${planData?.price_per_month}`,
              suggested_plan: planData,
              type: 'PAYMENT',
              show: true,
            }] : onePaymentFinancing;

            const yearPlan = existsAmountPerYear ? {
              title: t('subscription.upgrade-modal.yearly_payment'),
              price: planData?.price_per_year,
              priceText: `$${Number(planData?.price_per_year) % 1 === 0 ? Number(planData?.price_per_year).toFixed(0) : Number(planData?.price_per_year).toFixed(2)}`,
              period: 'YEAR',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `p-${planData?.price_per_year}`,
              suggested_plan: planData,
              type: 'PAYMENT',
              show: true,
            } : {};

            const financingOption = financingOptionsManyMonthsExists ? financingOptionsManyMonths.map((item) => ({
              title: t('subscription.upgrade-modal.many_months_payment', { qty: item?.how_many_months }),
              price: item?.monthly_price,
              priceText: `$${Number(item?.monthly_price) % 1 === 0 ? Number(item?.monthly_price).toFixed(0) : Number(item?.monthly_price).toFixed(2)} x ${item?.how_many_months}`,
              period: 'FINANCING',
              description: t('subscription.upgrade-modal.many_months_description', { monthly_price: item?.monthly_price, many_months: item?.how_many_months }),
              plan_id: `f-${item?.monthly_price}-${item?.how_many_months}`,
              how_many_months: item?.how_many_months,
              suggested_plan: planData,
              type: 'PAYMENT',
              show: true,
            })) : [];

            const paymentList = [...monthPlan, yearPlan, trialPlan].filter((plan) => Object.keys(plan).length > 0);
            const financingList = financingOption?.filter((plan) => Object.keys(plan).length > 0);

            const finalData = {
              title: toCapitalize(unSlugify(String(planData?.slug))),
              slug: planData?.slug,
              isTotallyFree,
              details: planData?.details,
              expires_at: planData?.expires_at,
              pricing_exists: isNotTrial || financingOptionsExists,
              paymentOptions: paymentList,
              financingOptions: financingList,
              outOfConsumables,
              consumableOptions: [],
              bullets,
            };
            // -------------------------------------------------- END PREPARING PRICES --------------------------------------------------
            resolve(finalData);
            if (data?.show_modal && !disableRedirects) {
              onOpenUpgrade(finalData);
            }

            if (data?.show_modal === false && planData && !disableRedirects) {
              router.push(`/checkout?plan=${planData?.slug}`);
            }
          } else {
            createToast({
              position: 'top',
              title: t('alert-message:error-getting-plan'),
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
            resolve({});
          }
        })
        .catch(() => {
          reject();
          createToast({
            position: 'top',
            title: t('alert-message:error-getting-plan'),
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });
    }),
    getPlanOffer: ({ slug, onOpenUpgrade = () => { }, disableRedirects = false, withCurrentPlan = false }) => new Promise((resolve, reject) => {
      bc.payment({
        original_plan: slug,
      }).planOffer()
        .then(async (res) => {
          const data = res?.data;
          const currentOffer = data.find((item) => item?.original_plan?.slug === slug);
          // necesito saber si plan financing tiene un plan offer
          const currentSuggestedPlan = withCurrentPlan ? currentOffer?.original_plan : currentOffer?.suggested_plan;
          if (currentOffer && currentSuggestedPlan?.slug) {
            const offerData = currentSuggestedPlan;
            const bullets = await getPlanProps(offerData?.slug);
            const outOfConsumables = currentOffer?.original_plan?.service_items.some((item) => item?.how_many === 0);

            // -------------------------------------------------- PREPARING PRICES --------------------------------------------------
            const existsAmountPerHalf = offerData?.price_per_half > 0;
            const existsAmountPerMonth = offerData?.price_per_month > 0;
            const existsAmountPerQuarter = offerData?.price_per_quarter > 0;
            const existsAmountPerYear = offerData?.price_per_year > 0;

            const isNotTrial = existsAmountPerHalf || existsAmountPerMonth || existsAmountPerQuarter || existsAmountPerYear;
            const financingOptionsExists = offerData?.financing_options?.length > 0;
            const financingOptionsManyMonthsExists = financingOptionsExists && offerData?.financing_options?.some((l) => l?.monthly_price > 0 && l?.how_many_months > 1);
            const financingOptionsOnePaymentExists = financingOptionsExists && offerData?.financing_options?.some((l) => l?.monthly_price > 0 && l?.how_many_months === 1);

            const isTotallyFree = !isNotTrial && offerData?.trial_duration === 0 && !financingOptionsExists;

            const financingOptionsManyMonths = financingOptionsManyMonthsExists
              ? offerData?.financing_options
                .filter((l) => l?.monthly_price > 0 && l?.how_many_months > 1)
                .sort((a, b) => a?.monthly_price - b?.monthly_price)
              : [];

            const financingOptionsOnePayment = financingOptionsOnePaymentExists
              ? offerData?.financing_options
                .filter((l) => l?.monthly_price > 0 && l?.how_many_months === 1)
                .sort((a, b) => a?.monthly_price - b?.monthly_price)
              : [];

            const getTrialLabel = () => {
              if (isTotallyFree) {
                return {
                  priceText: t('subscription.upgrade-modal.free-course'),
                  description: t('subscription.upgrade-modal.full_access'),
                };
              }
              if (offerData?.trial_duration_unit === 'WEEK') {
                const weekDays = offerData?.trial_duration * 7;
                return {
                  priceText: `${t('subscription.upgrade-modal.duration_days', { duration: weekDays })} ${t('subscription.upgrade-modal.connector_duration_trial')}`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_days', { duration: weekDays })}`,
                };
              }
              if (offerData?.trial_duration_unit === 'DAY') {
                return {
                  priceText: `${t('subscription.upgrade-modal.duration_days', { duration: offerData?.trial_duration })} ${t('subscription.upgrade-modal.connector_duration_trial')}`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_days', { duration: offerData?.trial_duration })}`,
                };
              }
              if (offerData?.trial_duration_unit === 'MONTH') {
                return {
                  priceText: `${offerData?.trial_duration} month trial`,
                  description: `${t('subscription.upgrade-modal.no_card_needed')} ${t('subscription.upgrade-modal.duration_month', { duration: offerData?.trial_duration })}`,
                };
              }
              return {
                priceText: t('subscription.upgrade-modal.free_trial'),
                description: '',
              };
            };

            const onePaymentFinancing = financingOptionsOnePaymentExists ? financingOptionsOnePayment.map((item) => ({
              title: t('subscription.upgrade-modal.one_payment'),
              price: item?.monthly_price,
              priceText: `$${Number(item?.monthly_price) % 1 === 0 ? Number(item?.monthly_price).toFixed(0) : Number(item?.monthly_price).toFixed(2)}`,
              period: 'FINANCING',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `f-${item?.monthly_price}-${item?.how_many_months}`,
              how_many_months: item?.how_many_months,
              suggested_plan: offerData,
              type: 'PAYMENT',
              show: true,
            })) : [];

            const trialPlan = (!financingOptionsExists && !isNotTrial) ? {
              title: t('subscription.upgrade-modal.free_trial'),
              price: 0,
              priceText: getTrialLabel().priceText,
              trialDuration: offerData?.trial_duration,
              period: offerData?.trial_duration_unit,
              description: getTrialLabel().description,
              plan_id: `p-${offerData?.trial_duration}-trial`,
              suggested_plan: offerData,
              type: isTotallyFree ? 'FREE' : 'TRIAL',
              isFreeTier: true,
              show: true,
            } : {};

            const monthPlan = !financingOptionsOnePaymentExists && existsAmountPerMonth ? [{
              title: t('subscription.upgrade-modal.monthly_payment'),
              price: offerData?.price_per_month,
              priceText: `$${Number(offerData?.price_per_month) % 1 === 0 ? Number(offerData?.price_per_month).toFixed(0) : Number(offerData?.price_per_month).toFixed(2)}`,
              period: 'MONTH',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `p-${offerData?.price_per_month}`,
              suggested_plan: offerData,
              type: 'PAYMENT',
              show: true,
            }] : onePaymentFinancing;

            const yearPlan = existsAmountPerYear ? {
              title: t('subscription.upgrade-modal.yearly_payment'),
              price: offerData?.price_per_year,
              priceText: `$${Number(offerData?.price_per_year) % 1 === 0 ? Number(offerData?.price_per_year).toFixed(0) : Number(offerData?.price_per_year).toFixed(2)}`,
              period: 'YEAR',
              description: t('subscription.upgrade-modal.full_access'),
              plan_id: `p-${offerData?.price_per_year}`,
              suggested_plan: offerData,
              type: 'PAYMENT',
              show: true,
            } : {};

            const financingOption = financingOptionsManyMonthsExists ? financingOptionsManyMonths.map((item) => ({
              title: t('subscription.upgrade-modal.many_months_payment', { qty: item?.how_many_months }),
              price: item?.monthly_price,
              priceText: `$${Number(item?.monthly_price) % 1 === 0 ? Number(item?.monthly_price).toFixed(0) : Number(item?.monthly_price).toFixed(2)} x ${item?.how_many_months}`,
              period: 'FINANCING',
              description: t('subscription.upgrade-modal.many_months_description', { monthly_price: item?.monthly_price, many_months: item?.how_many_months }),
              plan_id: `f-${item?.monthly_price}-${item?.how_many_months}`,
              how_many_months: item?.how_many_months,
              suggested_plan: offerData,
              type: 'PAYMENT',
              show: true,
            })) : [];

            // const consumableOption = outOfConsumables && offerData?.service_items?.length > 0
            //   ? offerData?.service_items.map((item) => ({
            //     title: toCapitalize(unSlugify(String(item?.service?.slug))),
            //     price: item?.service?.price_per_unit,
            //     how_many: item?.how_many,
            //     suggested_plan: offerData,
            //     type: 'CONSUMABLE',
            //     show: true,
            //   }))
            //   : {};

            const paymentList = [...monthPlan, yearPlan, trialPlan].filter((plan) => Object.keys(plan).length > 0);
            const financingList = financingOption?.filter((plan) => Object.keys(plan).length > 0);
            // const consumableList = [consumableOption].filter((plan) => Object.keys(plan).length > 0);

            const finalData = {
              title: toCapitalize(unSlugify(String(offerData?.slug))),
              slug: offerData?.slug,
              isTotallyFree,
              details: offerData?.details,
              expires_at: offerData?.expires_at,
              show_modal: currentOffer?.show_modal,
              pricing_exists: isNotTrial || financingOptionsExists,
              paymentOptions: paymentList,
              financingOptions: financingList,
              outOfConsumables,
              consumableOptions: [],
              bullets,
            };
            // -------------------------------------------------- END PREPARING PRICES --------------------------------------------------
            resolve(finalData);
            if (currentOffer?.show_modal && !disableRedirects) {
              onOpenUpgrade(finalData);
            }

            if (currentOffer?.show_modal === false && offerData && !disableRedirects) {
              router.push(`/checkout?plan=${offerData?.slug}`);
            }
          } else {
            resolve({
              status: 'error-getting-plan-offer',
            });
          }
        })
        .catch(() => {
          reject();
          createToast({
            position: 'top',
            title: t('alert-message:error-getting-offer'),
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });
    }),
    reactivatePlan: (planSlug, planStatus) => {
      if (planStatus === 'CANCELLED') {
        setPaymentStatus('idle');
        router.push(`/checkout?plan=${planSlug}`);
      }
    },
    getSubscriptionDetails: (sub) => {
      const status = sub?.status?.toLowerCase();
      const isPlanFinancing = sub?.type === 'plan_financing';
      const fullFilledInvoicesAmount = sub?.invoices?.filter((invo) => invo.status === 'FULFILLED').length;
      const isPlanFinancingFullyPaid = fullFilledInvoicesAmount === sub?.how_many_installments;
      const nextPaymentDate = formatDate(sub?.next_payment_at);
      const expirationDate = formatDate(sub?.plan_expires_at || sub?.next_payment_at);
      const activeSince = formatDate(sub?.created_at);
      const subCurrency = currenciesSymbols[sub?.currency?.code] || '$';
      const invoiceAmount = sub?.invoices[0]?.amount;
      const monthlyPrice = sub?.monthly_price;
      const totalPrice = sub?.how_many_installments * monthlyPrice;
      const payEveryUnit = sub?.pay_every_unit;
      const statusMessage = sub?.status_message;
      const paymentText = (amount, date) => t('subscription.next-payment-with-price', { amount, date, currencySymbol: subCurrency });
      const renewalDateText = (date) => t('subscription.renewal-date', { date });
      const expirationDateText = (date) => t('subscription.expiration-date', { date });
      const expiredOnText = (date) => t('subscription.expired-on', { date });
      const activeSinceText = (date) => t('subscription.active-since', { date });
      const totallyPaidText = (amount) => t('subscription.totally-paid', { amount, currencySymbol: subCurrency });
      const totalPaidText = (paidAmount, pendingAmount) => t('subscription.total-paid', { paidAmount, pendingAmount, currencySymbol: subCurrency });
      const paymentInfoText = (amount, unit) => t('subscription.payment', { payment: `${subCurrency}${amount}/${t(`subscription.payment_unit_short.${unit.toLowerCase()}`)}` });
      const errorMessageText = (error) => t('subscription.error-message', { error: error || 'Something went wrong' });
      const noPaymentsLeft = () => t('subscription.no-payment-left');

      // Use the functions in statusConfig
      const statusConfig = {
        active: () => {
          if (isPlanFinancing) {
            return {
              renewalDate: expirationDateText(expirationDate),
              paymentInfo: isPlanFinancingFullyPaid
                ? totallyPaidText(fullFilledInvoicesAmount * monthlyPrice)
                : totalPaidText(fullFilledInvoicesAmount * monthlyPrice, totalPrice),
              nextPayment: isPlanFinancingFullyPaid ? noPaymentsLeft() : paymentText(monthlyPrice, nextPaymentDate),
            };
          }
          return {
            renewalDate: renewalDateText(nextPaymentDate),
            renewability: activeSince ? activeSinceText(activeSince) : false,
            paymentInfo: invoiceAmount === 0 ? t('subscription.payment', { payment: t('common:free') }) : paymentInfoText(invoiceAmount, payEveryUnit),
          };
        },
        expired: () => ({
          renewalDate: expiredOnText(expirationDate),
          paymentInfo: isPlanFinancing ? totallyPaidText(fullFilledInvoicesAmount * monthlyPrice) : paymentInfoText(invoiceAmount, payEveryUnit),
        }),
        error: () => ({
          errorMessage: errorMessageText(statusMessage),
          paymentInfo: invoiceAmount ? paymentInfoText(invoiceAmount, payEveryUnit) : 'Error',
        }),
        payment_issue: () => {
          if (isPlanFinancing) {
            return {
              renewalDate: expirationDateText(expirationDate),
              nextPayment: isPlanFinancingFullyPaid ? noPaymentsLeft() : paymentText(monthlyPrice, nextPaymentDate),
              paymentInfo: isPlanFinancingFullyPaid ? totallyPaidText(monthlyPrice) : totalPaidText(fullFilledInvoicesAmount * monthlyPrice, totalPrice),
            };
          }
          return {
            errorMessage: errorMessageText(statusMessage),
            paymentInfo: paymentInfoText(invoiceAmount, payEveryUnit),
          };
        },
        cancelled: () => {
          if (isPlanFinancing) {
            return {
              renewalDate: expirationDateText(expirationDate),
              nextPayment: isPlanFinancingFullyPaid ? noPaymentsLeft() : paymentText(monthlyPrice, nextPaymentDate),
              paymentInfo: isPlanFinancingFullyPaid ? totallyPaidText(monthlyPrice) : totalPaidText(fullFilledInvoicesAmount * monthlyPrice, totalPrice),
            };
          }
          return {
            paymentInfo: paymentInfoText(invoiceAmount, payEveryUnit),
          };
        },
        free_trial: () => ({
          renewalDate: renewalDateText(nextPaymentDate),
          renewability: activeSince ? activeSinceText(activeSince) : false,
          paymentInfo: t('subscription.payment', { payment: t('common:free') }),
        }),
      };

      return statusConfig[status] ? statusConfig[status]() : {
        renewalDate: '',
        paymentInfo: '',
        nextPayment: '',
        errorMessage: '',
        renewability: '',
      };
    },
  };
}

profileHandlers.propTypes = {
  translations: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

profileHandlers.defaultProps = {
  translations: {},
};

export default profileHandlers;
