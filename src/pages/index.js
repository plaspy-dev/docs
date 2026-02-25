import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { saveAllFromUrl } from '../utils/domain';

export default function Home() {
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM)
      return;

    saveAllFromUrl();

    const fallback = '/docs/welcome_to_plaspy_help';
    const urlLang = i18n.locales.find(locale => window.location.pathname.startsWith(`/${locale}/`));
    const savedLang = urlLang || localStorage.getItem('preferred-lang');

    let matchedLocale = savedLang;

    if (!matchedLocale) {
      const browserLang =
        navigator.languages?.[0] ||
        navigator.language ||
        i18n.defaultLocale;

      const shortLang = browserLang.toLowerCase().split('-')[0];

      matchedLocale = i18n.locales.includes(shortLang)
        ? shortLang
        : i18n.defaultLocale;
    }
    const target =
      matchedLocale === i18n.defaultLocale
        ? fallback
        : `/${matchedLocale}${fallback}`;

    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, [i18n]);

  return null;
}