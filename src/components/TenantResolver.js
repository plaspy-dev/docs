import { useEffect } from 'react';
import './TenantResolver.css';
import { getFromUrlOrLocalStorage } from '@site/src/utils/domain';

export default function TenantResolver() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        if (params.get('f') || params.get('l'))
            window.history.replaceState({}, document.title, window.location.pathname);

        let obs = null;
        let isPlaspyHost = !getFromUrlOrLocalStorage('f');

        document.body.classList.add(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host');
        obs = new MutationObserver((muts) => {
            for (const m of muts) {
                if (m.type === "attributes"
                    && m.attributeName === "class"
                    && !document.body.classList.contains(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host')) {
                    document.body.classList.add(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host');
                    document.body.classList.remove(isPlaspyHost ? 'not-plaspy-host' : 'plaspy-host');
                }
            }
        });

        obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => {
            obs?.disconnect();
            document.body.classList.remove(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host');
        }
    }, []);

    return null;
}