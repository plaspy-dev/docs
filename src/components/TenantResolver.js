import { useEffect } from 'react';
import './TenantResolver.css';
import { getFromUrlOrLocalStorage, saveAllFromUrl } from '@site/src/utils/domain';

export default function TenantResolver() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        saveAllFromUrl();

        const params = new URLSearchParams(window.location.search);
        if (params.get('f') || params.get('l') || params.get('n')) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        let isPlaspyHost = !getFromUrlOrLocalStorage('f');

        document.body.classList.add(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host');
        const obs = new MutationObserver((muts) => {
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
        let obsTitle = null;

        if (!isPlaspyHost) {
            const appName = getFromUrlOrLocalStorage('n');
            const title = document.querySelector('title');
            title.text = title.text.replace("Plaspy", appName);
            obsTitle = new MutationObserver(() => {
                if (title.text.indexOf("Plaspy") > -1)
                    title.text = title.text.replace("Plaspy", appName);
            });

            obsTitle.observe(title, {
                childList: true,
            });
        }

        return () => {
            obs.disconnect();
            obsTitle?.disconnect();
            document.body.classList.remove(isPlaspyHost ? 'plaspy-host' : 'not-plaspy-host');
        }
    }, []);

    return null;
}