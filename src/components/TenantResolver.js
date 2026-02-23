import { useEffect } from 'react';

export default function TenantResolver() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        const f = params.get('f');

        if (f && f.includes('.')) {
            localStorage.setItem('client-domain', f);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return null;
}