/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Box, Button, Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import bc from '../../services/breathecode';
import useSignup from '../../store/actions/signupAction';
import 'react-datepicker/dist/react-datepicker.css';
import useStyle from '../../hooks/useStyle';
import useAuth from '../../hooks/useAuth';
import { reportDatalayer } from '../../utils/requests';
import { getQueryString, getStorageItem, getBrowserInfo } from '../../utils';
import useCohortHandler from '../../hooks/useCohortHandler';
import { getCohort } from '../../handlers/cohorts';
import { getAllMySubscriptions } from '../../handlers/subscriptions';
import { SILENT_CODE } from '../../utils/variables';
import CardForm from './CardForm';
import Icon from '../Icon';
import Text from '../Text';
import AcordionList from '../AcordionList';
import LoaderScreen from '../LoaderScreen';
import NextChakraLink from '../NextChakraLink';
import useCustomToast from '../../hooks/useCustomToast';

function PaymentInfo({ setShowPaymentDetails }) {
  const { t, lang } = useTranslation('signup');
  const { isAuthenticated, reSetUserAndCohorts } = useAuth();

  const {
    state, handlePayment, setSelectedPlanCheckoutData, setIsSubmittingCard, setIsSubmittingPayment, getPaymentMethods, setPaymentStatus, setPaymentInfo,
  } = useSignup();
  const {
    checkoutData, selectedPlanCheckoutData, cohortPlans, paymentMethods, loader, isSubmittingPayment, paymentStatus,
  } = state;
  const { cohortsAssignments, getCohortsModules, startDay } = useCohortHandler();
  const [readyToRedirect, setReadyToRedirect] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(undefined);
  const cohortId = Number(getQueryString('cohort'));
  const [openDeclinedModal, setOpenDeclinedModal] = useState(false);
  const [declinedModalProps, setDeclinedModalProps] = useState({
    title: '',
    description: '',
  });
  const [readyToRefetch, setReadyToRefetch] = useState(false);
  const [cohortFound, setCohortFound] = useState(undefined);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { createToast } = useCustomToast({ toastId: 'payment-info-data-detail' });
  const redirect = getStorageItem('redirect');
  const redirectedFrom = getStorageItem('redirected-from');
  const router = useRouter();
  const { backgroundColor, fontColor, hexColor } = useStyle();

  const isPaymentSuccess = paymentStatus === 'success';
  const isPaymentIdle = paymentStatus === 'idle';
  const paymentStatusBgColor = isPaymentSuccess ? 'green.light' : '#ffefef';

  const openSyllabusAndRedirect = () => {
    const langLink = lang !== 'en' ? `/${lang}` : '';

    const modules = cohortsAssignments[cohortFound.slug]?.modules;

    const firstAssigment = modules[0].content[0];
    const firstAssigmentSlug = firstAssigment.slug;
    const firstAssigmentType = firstAssigment.type.toLowerCase();
    const syllabusRedirectURL = `${langLink}/syllabus/${cohortFound?.slug}/${firstAssigmentType}/${firstAssigmentSlug}`;

    const updatedTasks = (modules[0].content || [])?.map((l) => ({
      ...l,
      title: l.title,
      associated_slug: l?.slug?.slug || l.slug,
      description: '',
      task_type: l.task_type,
      cohort: cohortFound.id,
    }));
    reportDatalayer({
      dataLayer: {
        event: 'open_syllabus_module',
        tasks: updatedTasks,
        cohort_id: cohortFound.id,
        agent: getBrowserInfo(),
      },
    });
    startDay({
      cohort: cohortFound,
      newTasks: updatedTasks,
    });

    router.push(syllabusRedirectURL);
  };

  const startRedirection = async () => {
    if (!isPaymentSuccess) {
      setPaymentStatus('idle');
      setShowPaymentDetails(true);
      return;
    }
    setIsRedirecting(true);
    const syllabusVersion = cohortFound?.syllabus_version;
    const cohortDashboardLink = `/cohort/${cohortFound?.slug}/${syllabusVersion?.slug}/v${syllabusVersion?.version}`;

    if (cohortFound?.micro_cohorts?.length > 0 || !(cohortFound.slug in cohortsAssignments)) {
      router.push(cohortDashboardLink);
      return;
    }

    openSyllabusAndRedirect();
  };

  useEffect(() => {
    if (!cohortFound || (cohortFound.micro_cohorts.length === 0 && !(cohortFound.slug in cohortsAssignments))) return undefined;

    const timer = setTimeout(() => {
      setReadyToRedirect(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cohortsAssignments, cohortFound]);

  useEffect(() => {
    if (cohortFound?.micro_cohorts.length === 0) {
      getCohortsModules([cohortFound]);
    }
  }, [updatedUser]);

  useEffect(() => {
    const fetchMyCohorts = async () => {
      try {
        const { userData } = await reSetUserAndCohorts();

        setUpdatedUser(userData);
      } catch (err) {
        console.error('Error fetching my cohorts:', err);
      }
    };
    fetchMyCohorts();
  }, [cohortFound]);

  const joinCohort = async (cohort) => {
    try {
      reportDatalayer({
        dataLayer: {
          event: 'join_cohort',
          cohort_id: cohort?.id,
          agent: getBrowserInfo(),
        },
      });
      const resp = await bc.cohort().join(cohort?.id);
      const dataRequested = await resp.json();
      if (resp.status >= 400) {
        createToast({
          position: 'top',
          title: dataRequested?.detail,
          status: 'info',
          duration: 5000,
          isClosable: true,
        });
        setReadyToRefetch(false);
      }
      if (dataRequested?.status === 'ACTIVE') {
        setCohortFound(cohort);
      }
    } catch (error) {
      console.error('Error al unirse a la cohorte:', error);
      setIsSubmittingPayment(false);
      setTimeout(() => {
        setReadyToRefetch(false);
      }, 600);
    }
  };

  useEffect(() => {
    reportDatalayer({
      dataLayer: {
        event: 'checkout_payment_info_rendered',
        value: state?.selectedPlanCheckoutData?.price,
        agent: getBrowserInfo(),
      },
    });
  }, []);

  useEffect(() => {
    let interval;
    if (readyToRefetch && timeElapsed < 10 && isPaymentSuccess) {
      interval = setInterval(async () => {
        try {
          const subscriptions = await getAllMySubscriptions();
          const currentSubscription = subscriptions?.find(
            (subscription) => checkoutData?.plans[0]?.plan_slug === subscription.plans[0]?.slug,
          );
          const isPurchasedPlanFound = subscriptions?.length > 0 && subscriptions.some(
            (subscription) => checkoutData?.plans[0]?.plan_slug === subscription.plans[0]?.slug,
          );
          const cohortsForSubscription = currentSubscription?.selected_cohort_set.cohorts;
          const foundCohort = cohortsForSubscription?.find(
            (cohort) => cohort?.id === cohortId,
          );

          if (isPurchasedPlanFound) {
            if (foundCohort?.id) {
              const cohort = await getCohort(foundCohort?.id);
              joinCohort(cohort);

              clearInterval(interval);
              setReadyToRefetch(false);
            } else {
              clearInterval(interval);
              if ((redirect && redirect?.length > 0) || (redirectedFrom && redirectedFrom.length > 0)) {
                router.push(redirect || redirectedFrom);
                localStorage.removeItem('redirect');
                localStorage.removeItem('redirected-from');
              } else {
                router.push('/choose-program');
              }
            }
          }
        } finally {
          setTimeElapsed((prevTime) => prevTime + 1);
        }
      }, 2000);
    } else {
      clearInterval(interval);
      setReadyToRefetch(false);
      setIsSubmittingPayment(false);
      setTimeElapsed(0);
    }
    return () => clearInterval(interval);
  }, [readyToRefetch, timeElapsed]);

  useEffect(() => {
    if (!isPaymentSuccess) return;
    setIsSubmittingPayment(true);
    setReadyToRefetch(true);
  }, [isPaymentSuccess]);

  useEffect(() => {
    if (selectedPlanCheckoutData?.owner?.id) getPaymentMethods(selectedPlanCheckoutData.owner.id);
  }, [isAuthenticated]);

  const handlePaymentErrors = (data, actions = {}, callback = () => { }) => {
    const silentCode = data?.silent_code;
    setIsSubmittingPayment(false);
    actions?.setSubmitting(false);
    callback();
    if (silentCode === SILENT_CODE.CARD_ERROR) {
      setOpenDeclinedModal(true);
      setDeclinedModalProps({
        title: t('transaction-denied'),
        description: t('card-declined'),
      });
    }
    if (SILENT_CODE.LIST_PROCESSING_ERRORS.includes(silentCode)) {
      setOpenDeclinedModal(true);
      setDeclinedModalProps({
        title: t('transaction-denied'),
        description: t('payment-not-processed'),
      });
    }
    if (silentCode === SILENT_CODE.UNEXPECTED_EXCEPTION) {
      setOpenDeclinedModal(true);
      setDeclinedModalProps({
        title: t('transaction-denied'),
        description: t('payment-error'),
      });
    }
  };

  const handleSubmit = async (actions, values) => {
    const resp = await bc.payment().addCard({
      ...values,
      academy: selectedPlanCheckoutData?.owner?.id,
    });
    const data = await resp.json();
    setIsSubmittingCard(false);

    if (resp.ok) {
      const currency = cohortPlans[0]?.plan?.currency?.code;
      reportDatalayer({
        dataLayer: {
          event: 'add_payment_info',
          path: '/checkout',
          value: state?.selectedPlanCheckoutData?.price,
          currency,
          payment_type: 'Credit card',
          plan: state?.selectedPlanCheckoutData?.plan_slug,
          period_label: state?.selectedPlanCheckoutData?.period_label,
          agent: getBrowserInfo(),
        },
      });
      await handlePayment({}, true)
        .then((respPayment) => {
          if (respPayment.status === 'FULFILLED') {
            setPaymentStatus('success');
            setSelectedPlanCheckoutData({
              ...selectedPlanCheckoutData,
              payment_success: true,
            });
            setIsSubmittingPayment(false);
          } else {
            setPaymentStatus('error');
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    } else {
      setPaymentStatus('error');
      setPaymentInfo('cvc', '');
      handlePaymentErrors(data, actions);
    }
  };

  const onSubmitCard = (values, actions, stateCard) => {
    setIsSubmittingPayment(true);
    setIsSubmittingCard(true);
    const monthAndYear = values.exp?.split('/');
    const expMonth = monthAndYear[0];
    const expYear = monthAndYear[1];

    const allValues = {
      card_number: stateCard.card_number,
      exp_month: expMonth,
      exp_year: expYear,
      cvc: values.cvc,
    };

    handleSubmit(actions, allValues);
    setShowPaymentDetails(false);
  };

  const handleTryAgain = () => {
    setOpenDeclinedModal(false);
  };

  return (
    <Box display="flex" height="100%" flexDirection="column" gridGap="30px" margin={{ base: isPaymentSuccess ? '' : '0 1rem', lg: '0 auto' }} position="relative">
      <Box display="flex" width={{ base: 'auto', lg: '490px' }} height="auto" flexDirection="column" minWidth={{ base: 'auto', md: '100%' }} background={!isPaymentIdle ? paymentStatusBgColor : backgroundColor} p={{ base: '20px 0', md: '30px 0' }} borderRadius="15px">
        {!isPaymentIdle ? (
          <Flex flexDirection="column" gridGap="24px" borderRadius="3px" alignItems="center" padding="16px 8px">
            <Icon icon={isPaymentSuccess ? 'feedback-like' : 'feedback-dislike'} width="60px" height="60px" />
            <Text size="14px" fontWeight={700} textAlign="center" color="black">
              {isPaymentSuccess ? 'Payment successful' : 'Payment failed'}
            </Text>
          </Flex>
        ) : (
          <>
            <Heading size="18px">{t('payment-methods')}</Heading>
            <Box
              as="hr"
              width="20%"
              margin="12px 0 18px 0"
              border="0px"
              h="1px"
              background={fontColor}
            />
            {loader.paymentMethods && (
              <LoaderScreen />
            )}
            <Flex flexDirection="column" gridGap="4px" width="100%" mt="1rem">
              <AcordionList
                width="100%"
                list={paymentMethods.map((method) => {
                  if (!method.is_credit_card) {
                    return {
                      ...method,
                      onClick: (e) => {
                        setTimeout(() => {
                          e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 100);
                      },
                      description: (
                        <Box padding="0 17px">
                          <Text
                            size="md"
                            className="method-description"
                            sx={{
                              a: {
                                color: hexColor.blueDefault,
                              },
                              'a:hover': {
                                opacity: 0.7,
                              },
                            }}
                            dangerouslySetInnerHTML={{ __html: method.description }}
                          />
                          {method.third_party_link && (
                            <Text mt="10px" color={hexColor.blueDefault}>
                              <NextChakraLink target="_blank" href={method.third_party_link}>
                                {t('click-here')}
                              </NextChakraLink>
                            </Text>
                          )}
                        </Box>
                      ),
                    };
                  }
                  return {
                    ...method,
                    description: (
                      <CardForm
                        modalCardErrorProps={{
                          declinedModalProps,
                          openDeclinedModal,
                          setOpenDeclinedModal,
                          handleTryAgain,
                          disableClose: true,
                        }}
                        onSubmit={onSubmitCard}
                      />
                    ),
                  };
                })}
                paddingButton="10px 17px"
                unstyled
                gridGap="0"
                containerStyles={{
                  gridGap: '8px',
                  allowToggle: true,
                }}
                descriptionStyle={{ padding: '10px 0 0 0' }}
                defaultIndex={paymentMethods?.findIndex((method) => method.is_credit_card)}
              />
            </Flex>
          </>
        )}
      </Box>
      {!isPaymentIdle && (
        <Button
          width="100%"
          height="45px"
          variant="default"
          // mt="12px"
          isDisabled={isPaymentSuccess && (!cohortFound || !readyToRedirect)}
          isLoading={isSubmittingPayment || isRedirecting}
          onClick={startRedirection}
        >
          {isPaymentSuccess ? 'Start learning' : 'Try again'}
        </Button>
      )}
    </Box>
  );
}

PaymentInfo.propTypes = {
  setShowPaymentDetails: PropTypes.func,
};

PaymentInfo.defaultProps = {
  setShowPaymentDetails: () => { },
};

export default PaymentInfo;
