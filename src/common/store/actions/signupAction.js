import { useSelector, useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import {
  NEXT_STEP, PREV_STEP, HANDLE_STEP, SET_DATE_PROPS, SET_CHECKOUT_DATA, SET_LOCATION, SET_PAYMENT_INFO,
  SET_PLAN_DATA, SET_LOADER, SET_PLAN_CHECKOUT_DATA, SET_PLAN_PROPS,
} from '../types';
import { getTimeProps, toCapitalize, unSlugify } from '../../../utils';
import bc from '../../services/breathecode';

const useSignup = () => {
  const state = useSelector((sl) => sl.signupReducer);
  const { t } = useTranslation(['alert-message']);
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    stepIndex,
    checkoutData,
    selectedPlanCheckoutData,
    dateProps,
  } = state;
  // const isSecondStep = stepIndex === 1; // Choose your class
  // const isThirdStep = stepIndex === 2; // Payment info
  // const isFourthStep = stepIndex === 3; // Summary
  const isFirstStep = stepIndex === 0; // Contact
  const isSecondStep = stepIndex === 1; // Choose your class
  const isThirdStep = stepIndex === 2; // Summary
  const isFourthStep = stepIndex === 3; // Payment

  const nextStep = () => dispatch({
    type: NEXT_STEP,
  });
  const prevStep = () => dispatch({
    type: PREV_STEP,
  });
  const handleStep = (step) => dispatch({
    type: HANDLE_STEP,
    payload: step,
  });

  const setDateProps = (payload) => dispatch({
    type: SET_DATE_PROPS,
    payload,
  });
  const setCheckoutData = (payload) => dispatch({
    type: SET_CHECKOUT_DATA,
    payload,
  });

  const setLocation = (payload) => dispatch({
    type: SET_LOCATION,
    payload,
  });

  const setPaymentInfo = (payload, value) => dispatch({
    type: SET_PAYMENT_INFO,
    payload,
    value,
  });

  const setPlanData = (payload) => dispatch({
    type: SET_PLAN_DATA,
    payload,
  });
  const setSelectedPlanCheckoutData = (payload) => dispatch({
    type: SET_PLAN_CHECKOUT_DATA,
    payload,
  });

  const setLoader = (payload, value) => dispatch({
    type: SET_LOADER,
    payload,
    value,
  });

  const setPlanProps = (payload) => dispatch({
    type: SET_PLAN_PROPS,
    payload,
  });

  const handlePayment = () => new Promise((resolve, reject) => {
    bc.payment().pay({
      type: checkoutData.type,
      token: checkoutData.token,
      // chosen_period: selectedPlanCheckoutData.chosen_period,
      chosen_period: 'HALF',
    })
      .then((response) => {
        console.log('Payment_response:', response);
        if (response?.data?.status === 'FULFILLED') {
          router.push('/choose-program');
        }
        resolve(response);
      })
      .catch(() => {
        toast({
          title: t('alert-message:payment-error'),
          status: 'error',
          duration: 7000,
          isClosable: true,
        });
        reject();
      });
  });

  const getUnitDescription = ({ plan, isNotTrial }) => {
    const everyNumber = plan.pay_every;

    if (isNotTrial) {
      if (plan.pay_every_unit === 'YEAR') {
        return t('common:payment.pay-per-year', { value: everyNumber === 1 ? t('common:each', { value: everyNumber }) : everyNumber });
      }
      if (plan.pay_every_unit === 'QUARTER') {
        return t('common:payment.pay-per-quarter', { value: everyNumber === 1 ? t('common:each', { value: everyNumber }) : everyNumber });
        // return `Pay ${everyNumber === 1 ? 'each' : everyNumber} quarter`;
      }
      if (plan.pay_every_unit === 'MONTH') {
        return t('common:payment.pay-per-month', { value: everyNumber === 1 ? t('common:each', { value: everyNumber }) : everyNumber });
        // return `Pay ${everyNumber === 1 ? 'each' : everyNumber} month`;
      }
      if (plan.pay_every_unit === 'HALF') {
        return t('common:payment.pay-per-half', { value: everyNumber === 1 ? t('common:each', { value: everyNumber }) : everyNumber });
        // return `Pay ${everyNumber === 1 ? 'each' : everyNumber} half`;
      }
    }
    return '';
  };
  const getUnitPrice = ({ plan, isNotTrial, data }) => {
    if (isNotTrial) {
      if (plan.pay_every_unit === 'YEAR') {
        return {
          payEvery: plan.pay_every,
          amount: data.amount_per_year,
          period: 'YEAR',
        };
      }
      if (plan.pay_every_unit === 'QUARTER') {
        return {
          payEvery: plan.pay_every,
          amount: data.amount_per_quarter,
          period: 'QUARTER',
        };
      }
      if (plan.pay_every_unit === 'MONTH') {
        return {
          payEvery: plan.pay_every,
          amount: data.amount_per_month,
          period: 'MONTH',
        };
      }
      if (plan.pay_every_unit === 'HALF') {
        return {
          payEvery: plan.pay_every,
          amount: data.amount_per_half,
          period: 'HALF',
        };
      }
    }
    return {
      amount: 0,
      payEvery: plan.pay_every,
      period: plan.pay_every_unit,
    };
  };
  const getPaymentProps = ({ plan, isNotTrial, data }) => {
    const { amount, period, payEvery } = getUnitPrice({ plan, isNotTrial, data });
    const description = getUnitDescription({ plan, isNotTrial });
    const price = amount;

    return {
      payEvery,
      price,
      period,
      description,
    };
  };

  const handleChecking = (cohortData) => new Promise((resolve, reject) => {
    const selectedPlan = selectedPlanCheckoutData?.slug ? selectedPlanCheckoutData.slug : null;
    bc.payment().checking({
      type: 'PREVIEW',
      cohort: dateProps?.id || cohortData.id,
      academy: dateProps?.academy?.id || cohortData?.academy.id,
      plans: selectedPlan,
    })
      .then((response) => {
        const { data } = response;
        const existsAmountPerHalf = data?.amount_per_half > 0;
        const existsAmountPerMonth = data?.amount_per_month > 0;
        const existsAmountPerQuarter = data?.amount_per_quarter > 0;
        const existsAmountPerYear = data?.amount_per_year > 0;

        const isNotTrial = existsAmountPerHalf || existsAmountPerMonth || existsAmountPerQuarter || existsAmountPerYear;

        const plans = data?.plans.map((plan) => {
          const { price, period, description } = getPaymentProps({ plan, isNotTrial, data });
          const title = plan?.title ? plan?.title : toCapitalize(unSlugify(String(plan?.slug)));
          return {
            ...plan,
            price,
            period,
            title,
            description,
          };
        });
        const finalData = {
          ...response.data,
          isTrial: !isNotTrial,
          plans,
        };
        if (response.status < 400) {
          setCheckoutData(finalData);
          resolve();
        }
      })
      .catch(() => {
        reject();
      })
      .finally(() => {
        setLoader('date', false);
      });
  });

  const handleChooseDate = (cohortData) => new Promise((resolve, reject) => {
    setLoader('date', true);
    const { kickoffDate, weekDays, availableTime } = getTimeProps(cohortData);
    setDateProps({
      ...cohortData,
      kickoffDate,
      weekDays,
      availableTime,
    });

    handleChecking(cohortData)
      .then(() => {
        resolve();
        handleStep(2);
      })
      .catch(() => {
        reject();
        toast({
          title: t('alert-message:something-went-wrong-choosing-date'),
          status: 'error',
          duration: 7000,
          isClosable: true,
        });
      });
  });

  return {
    state,
    isFirstStep,
    isSecondStep,
    isThirdStep,
    isFourthStep,
    nextStep,
    prevStep,
    setLoader,
    handleStep,
    setDateProps,
    setCheckoutData,
    setLocation,
    setPaymentInfo,
    handlePayment,
    setPlanData,
    setSelectedPlanCheckoutData,
    handleChooseDate,
    handleChecking,
    setPlanProps,
  };
};

export default useSignup;