import { Avatar, Box, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Text from '../Text';
import useStyle from '../../hooks/useStyle';
import HeadInfo from './HeadInfo';
import FeatureIndicator from './FeatureIndicator';
import { types } from './card-types';
import useFormatDate from './useFormatDate';
import { adjustNumberBeetwenMinMax, isValidDate, syncInterval } from '../../../utils';
import { BREATHECODE_HOST } from '../../../utils/variables';
import Icon from '../Icon';

function DynamicContentCard({ data, type, technologies, usersWorkedHere, ...rest }) {
  const { t, lang } = useTranslation('live-event');
  const { featuredColor, borderColor } = useStyle();
  const [date, setDate] = useState({});
  const language = data?.lang;
  const { formattedTime } = useFormatDate();
  const maxUsers = 5;
  const usersWithPicture = usersWorkedHere?.length > maxUsers ? usersWorkedHere.slice(0, maxUsers) : usersWorkedHere;
  const remainingUsers = usersWorkedHere?.length > maxUsers ? usersWorkedHere.length - maxUsers : '';
  const languageConnector = (language === 'us' || language === 'en' || language === null) ? '' : `/${language}`;
  const startedButNotEnded = date?.started && date?.ended === false;
  const isWorkshop = type === types.workshop;
  const isWorkshopStarted = isWorkshop && startedButNotEnded;

  const getFormatedDate = () => {
    const endDate = data?.ended_at || data?.ending_at;
    const startingAtDate = isValidDate(data?.starting_at) && new Date(data?.starting_at);
    const endingAtDate = isValidDate(endDate) && new Date(endDate);
    const formattedDate = formattedTime(startingAtDate, endingAtDate);
    return formattedDate;
  };

  useEffect(() => {
    if (isWorkshop) {
      const formattedDate = getFormatedDate();
      setDate(formattedDate);

      syncInterval(() => {
        setDate(formattedDate);
      });
    }
  }, []);
  useEffect(() => {
    if (isWorkshop) {
      const formattedDate = getFormatedDate();
      setDate(formattedDate);
    }
  }, [lang]);

  return (
    <Flex flexDirection="column" border={isWorkshopStarted ? 'solid 2px' : 'solid 1px'} borderColor={isWorkshopStarted ? 'blue.default' : borderColor} padding="16px" gridGap="16px" minWidth="310px" maxWidth="410px" background={isWorkshopStarted ? featuredColor : 'inherit'} borderRadius="10px" position="relative" {...rest}>
      {/* Head conctent */}
      <HeadInfo
        technologies={technologies}
        date={date}
        duration={data?.duration}
        type={type}
      />
      <Flex flexDirection="column" gridGap="16px">
        <Heading as="h2" size="18px" lineHeight="normal">
          {data?.title}
        </Heading>
        {(data?.excerpt || data?.description) && (
          <Text size="14px" lineHeight="normal">
            {data?.excerpt || data?.description}
            {/* {data.description} */}
          </Text>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" gridGap="10px">
        <Flex>
          {isWorkshop && (
          <Flex alignItems="center" gridGap="12px">
            {/* host info */}
            <Avatar
              width="35px"
              height="35px"
              src={data?.host_user?.avatar_url || ''}
            />
            <Flex flexDirection="column" gridGap="8px">
              <Text size="14px" lineHeight="normal">
                {`By ${data?.host_user?.first_name} ${data?.host_user?.last_name}`}
              </Text>
              {data?.host_user?.profesion && (
              <Text fontSize="12px" lineHeight="normal">
                {data.host_user.profesion}
              </Text>
              )}
            </Flex>
          </Flex>
          )}
          {type === types.project && data?.difficulty && (
            <Text size="13px" color="red" padding="5px 7px" borderRadius="18px" background="red.light">
              {data.difficulty}
            </Text>
          )}
        </Flex>

        <FeatureIndicator
          data={data}
          type={type}
        />
      </Flex>

      <Box display={[types.workshop, types.project].includes(type) ? 'block' : 'none'}>
        <Divider mb={isWorkshop ? '0px' : '16px'} />
        {isWorkshop ? (
          <>
            {date?.ended ? (
              <Text size="17px" padding="10px 0 0 0" lineHeight="normal" textAlign="center" fontWeight={700}>
                {/* {t('event-ended')} */}
                {date?.text}
              </Text>
            ) : (
              <Link
                href={`${languageConnector}/workshops/${data?.slug}`}
                color="blue.default"
                fontSize="17px"
                fontWeight={700}
                letterSpacing="0.05em"
                height="40px"
                display="flex"
                alignItems="center"
                width="fit-content"
                margin="0 auto"
                gridGap="10px"
                _after={{
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                }}
              >
                {date?.started
                  ? t('join-workshop')
                  : t('register-workshop')}
                {date?.started && (
                  <Icon icon="longArrowRight" width="24px" height="10px" color="currentColor" />
                )}
              </Link>
            )}
          </>
        ) : (
          <>
            {type === types.project && usersWorkedHere?.length > 0 && (
              <Flex gridGap="8px" alignItems="center">
                {usersWithPicture?.map((user, index) => {
                  const avatarNumber = adjustNumberBeetwenMinMax({
                    number: user?.id,
                    min: 1,
                    max: 20,
                  });
                  const avatar = user?.profile?.avatar_url || `${BREATHECODE_HOST}/static/img/avatar-${avatarNumber}.png`;
                  return (
                    <Avatar
                      key={user?.id}
                      width="32px"
                      height="32px"
                      style={{ userSelect: 'none' }}
                      src={avatar}
                      marginLeft={index !== 0 && usersWorkedHere.length > index ? '-24px' : '0px'}
                      zIndex={index}
                    />
                  );
                })}
                {remainingUsers && (
                  <Text size="12px">
                    {t('students-worked-here', { count: remainingUsers })}
                  </Text>
                )}
              </Flex>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
}

DynamicContentCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  type: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  usersWorkedHere: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any]))),
};

DynamicContentCard.defaultProps = {
  data: {},
  usersWorkedHere: [],
};

export default DynamicContentCard;
