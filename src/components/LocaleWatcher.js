import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LocaleWatcher() {
    const { i18n } = useDocusaurusContext();
    const { currentLocale } = i18n;

    useEffect(() => {
        localStorage.setItem('preferred-lang', currentLocale);
    }, [currentLocale]);

    return null;
}