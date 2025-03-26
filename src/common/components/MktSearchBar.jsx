import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Box, Input, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import Icon from './Icon';
import Heading from './Heading';
import useStyle from '../hooks/useStyle';

function MktSearchBar({ id, headingTop, headingBottom, subtitle, popularSearches, background, popularSearchesTitle, ...rest }) {
  const [search, setSearch] = useState('');
  const timeoutRef = useRef(null);
  const { hexColor, fontColor } = useStyle();
  const router = useRouter();
  const { t } = useTranslation('workshops');

  const updateQueryParams = (newParams) => {
    const currentQuery = new URLSearchParams(router.query);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        currentQuery.set(key, value);
      } else {
        currentQuery.delete(key);
      }
    });

    const queryString = currentQuery.toString();
    router.replace(`${router.pathname}?${queryString}`, undefined, { shallow: true });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search) {
      updateQueryParams({ search });
    } else {
      updateQueryParams({ search: null });
    }
  };

  const handlePopularSearchClick = (term) => {
    setSearch(term);
    updateQueryParams({ search: term });
  };

  const clearSearch = () => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Clear the input
    setSearch('');
    // Clear URL parameter
    updateQueryParams({ search: null });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (value === '') {
      clearSearch();
      return;
    }
    // Set a timeout to update the URL after typing stops
    timeoutRef.current = setTimeout(() => {
      updateQueryParams({ search: value });
    }, 500);
  };

  // Sync search input with URL on mount and when URL changes
  useEffect(() => {
    const searchParam = router.query.search;
    if (searchParam !== undefined && searchParam !== search) {
      setSearch(searchParam || '');
    }
  }, [router.query.search]);

  // Clean up timeouts on unmount
  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <Box id={id} padding={{ base: '10px 0', md: '60px 80px' }} {...rest}>
      <Box width="auto" maxWidth="961px" margin="0 auto">
        <Heading fontSize="38px" fontWeight="bold" mb={2} textAlign="center">
          {headingTop}
          <br />
          {headingBottom}
        </Heading>
        <Text fontSize="21px" color={useColorModeValue('gray.600')} mb={4} textAlign="center">
          {subtitle}
        </Text>
        <Box padding="24px" background={hexColor.white2} borderRadius="10px" margin={{ base: '10px', md: 'none' }} color={useColorModeValue('gray.600', 'white')}>
          <form onSubmit={handleSearchSubmit}>
            <Flex
              bg={hexColor.white2}
              borderRadius="4px"
              border="1px solid #DADADA"
              alignItems="center"
              padding="2px 2px 2px 16px"
              gap={2}
              position="relative"
            >
              <Icon icon="search" color={fontColor} boxSize={5} />
              <Input
                value={search}
                onChange={handleInputChange}
                placeholder={t('search-workshops')}
                variant="unstyled"
                _placeholder={{ color: useColorModeValue('gray.600', 'white') }}
                flex="1"
              />
              {search && (
                <Button
                  variant="ghost"
                  p={1}
                  minW="auto"
                  onClick={clearSearch}
                  position="absolute"
                  right="60px"
                  color="red.500"
                  fontSize="sm"
                  _hover={{ bg: 'transparent' }}
                >
                  {t('clear-search')}
                </Button>
              )}
              <Button type="submit" borderRadius="4px" bg="blue.500" _hover={{ bg: 'blue.600' }}>
                <Icon icon="longArrowRight" color="white" />
              </Button>
            </Flex>
          </form>
          <Box mt={4}>
            {popularSearches && (
              <>
                <Text fontSize="sm" mb={2}>
                  {popularSearchesTitle}
                </Text>
                <Flex gap={2} flexWrap="wrap">
                  {popularSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      border="1px solid #DADADA"
                      fontSize="13px"
                      height="26px"
                      padding="5px 7px"
                      borderRadius="full"
                      color={useColorModeValue('gray.600', 'white')}
                      onClick={() => handlePopularSearchClick(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </Flex>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MktSearchBar.propTypes = {
  headingTop: PropTypes.string.isRequired,
  headingBottom: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  popularSearches: PropTypes.arrayOf(PropTypes.string).isRequired,
  background: PropTypes.string,
  id: PropTypes.string,
  popularSearchesTitle: PropTypes.string,
};

MktSearchBar.defaultProps = {
  background: 'auto',
  popularSearchesTitle: 'Popular searches',
  id: '',
};

export default MktSearchBar;
