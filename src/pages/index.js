import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const params = new URLSearchParams(window.location.search);
    const f = params.get('f');

    if (f && f.includes('.')) {
      localStorage.setItem('client-domain', f);
    }

    const fallback = '/docs/welcome_to_plaspy_help';

    // 1️⃣ primero: ver si el usuario ya eligió idioma antes
    const savedLang = localStorage.getItem('preferred-lang');

    let matchedLocale = savedLang;

    // 2️⃣ si nunca ha elegido idioma → detectar navegador
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

    // 3️⃣ construir la URL correcta
    const target =
      matchedLocale === i18n.defaultLocale
        ? fallback
        : `/${matchedLocale}${fallback}`;

    // 4️⃣ evitar loops infinitos
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, [i18n]);

  return null;
}