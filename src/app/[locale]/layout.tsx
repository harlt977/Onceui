import '@/once-ui/styles/index.scss';
import '@/once-ui/tokens/index.scss';
import { Analytics } from '@vercel/analytics/react';

import classNames from 'classnames';

import { Footer, Header, RouteGuard } from '@/components';
import { baseURL, effects, style } from '@/app/resources';

import { Roboto } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';

import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { renderContent } from '@/app/resources';
import { Background, Flex } from '@/once-ui/components';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { person, home } = renderContent(t);

  return {
    metadataBase: new URL(`https://${baseURL}/${locale}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: 'Portfolio website showcasing my work.',
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const primary = Roboto({
  weight: ['400', '700'],
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function getThemeFromLocalStorage() {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || style.theme;
  }
  return style.theme;
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Flex
        as="html"
        lang="en"
        background="page"
        data-neutral={style.neutral}
        data-brand={style.brand}
        data-accent={style.accent}
        data-solid={style.solid}
        data-solid-style={style.solidStyle}
        data-theme={style.theme}
        data-border={style.border}
        data-surface={style.surface}
        data-transition={style.transition}
        className={classNames(
          primary.variable,
          secondary ? secondary.variable : '',
          tertiary ? tertiary.variable : '',
          code.variable
        )}
      >
        <Flex
          style={{ minHeight: '100vh' }}
          as="body"
          fillWidth
          margin="0"
          padding="0"
          direction="column"
        >
          <Background
            mask={effects.mask as any}
            gradient={effects.gradient as any}
            dots={effects.dots as any}
            lines={effects.lines as any}
          />
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <Flex
            zIndex={0}
            fillWidth
            paddingY="l"
            paddingX="l"
            justifyContent="center"
            flex={1}
          >
            <Flex justifyContent="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
            <Analytics />
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </NextIntlClientProvider>
  );
}
