import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import { cleanObject, isDevMode } from '../utils';
import { ORIGIN_HOST } from '../utils/variables';

const usedPageId = ['home'];

function Page({ page }) {
  const router = useRouter();
  const landingUrl = page?.data?.landing_url;

  useEffect(() => {
    if (!page?.id) {
      router.push('/404');
    }
    if (landingUrl?.length > 0) {
      router.push(landingUrl);
    }
  }, []);

  return (
    <>
      {page?.structuredData?.name && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(page.structuredData) }}
          />
        </Head>
      )}
      <Box className="prismic-body" pt="3rem">
        <SliceZone slices={page?.data?.slices} components={components} />
      </Box>
    </>
  );
}

Page.propTypes = {
  page: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};
Page.defaultProps = {
  page: {},
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const { uid } = params;
  const prismicRef = process.env.PRISMIC_REF;
  const prismicApi = process.env.PRISMIC_API;

  if (!prismicRef && !prismicApi) {
    return {
      notFound: true,
    };
  }

  const languages = {
    en: 'en-us',
    es: 'es-es',
  };

  const page = await client?.getByUID('page', uid, { lang: languages[locale] })
    .then((response) => response)
    .catch(() => null);

  const isCurrenLang = page?.lang?.split('-')?.[0] === locale;
  const alreadyUsedPageId = usedPageId.includes(page.uid);

  if (isDevMode === false && (!page || !isCurrenLang || alreadyUsedPageId)) {
    return {
      notFound: true,
    };
  }

  const data = page?.data;
  const alternateLanguages = Array.isArray(page?.alternate_languages) ? page?.alternate_languages : [];

  const languagesArr = [
    ...alternateLanguages,
    {
      id: page?.id,
      type: page?.type,
      lang: page?.lang,
      uid: page?.uid,
    },
  ];

  const translationsArr = languagesArr?.map((tr) => ({
    [tr.lang.split('-')[0]]: tr.uid,
  }));

  const translations = {
    ...translationsArr?.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  };

  const { title, description, image, type } = page.data;
  const translationInEnglish = translations?.en || translations?.us;
  const translationArray = [
    {
      value: 'en',
      lang: 'en',
      slug: (page?.lang === 'en' || page?.lang === 'us') ? page?.uid : translationInEnglish,
      link: `/${translations?.en}`,
    },
    {
      value: 'es',
      lang: 'es',
      slug: page?.lang === 'es' ? page.uid : translations?.es,
      link: `/es/${page?.lang === 'es' ? page.uid : translations?.es}`,
    },
  ].filter((item) => item?.slug !== undefined);

  const translationsExists = Object.keys(translations).length > 0;

  const structuredData = data?.id ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${ORIGIN_HOST}/${page.uid}`,
    },
    name: data?.title,
    description: data?.description,
    image: data?.image?.url && {
      '@type': 'ImageObject',
      url: data?.image?.url,
      height: data.image.dimensions?.width,
      width: data.image.dimensions?.height,
    },
    datePublished: page?.first_publication_date,
    dateModified: page?.last_publication_date,
    author: {
      '@type': 'Organization',
      name: '4Geeks',
    },
    publisher: {
      '@type': 'Organization',
      name: '4Geeks',
      logo: {
        '@type': 'ImageObject',
        url: `${ORIGIN_HOST}/static/images/4geeks.png`,
        width: '284',
        height: '220',
      },
    },
  } : {};

  const cleanedStructuredData = cleanObject(structuredData);

  return {
    props: {
      page: {
        ...page,
        structuredData: cleanedStructuredData,
      },
      seo: {
        title: title || '',
        description: description || '',
        image: prismicH.asImageSrc(image) || '',
        pathConnector: translationsExists ? '' : `/${uid}`,
        slug: uid,
        url: `/${uid}`,
        translations: translationArray,
        locale,
        publishedTime: page?.first_publication_date || '',
        modifiedTime: page?.last_publication_date || '',
        type: type || null,
        keywords: page?.tags,
      },
      translations: translationArray,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const documents = await client.getAllByType('page', { lang: '*' });
  const pagePaths = documents.filter((doc) => !usedPageId.includes(doc.uid))
    .map((doc) => ({ params: { uid: doc.uid }, locale: doc.lang.split('-')[0] }));

  return {
    paths: pagePaths,
    fallback: true,
  };
}
