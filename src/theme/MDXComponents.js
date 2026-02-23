import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Link from '@docusaurus/Link';

function replaceDomain(url) {
    // if (typeof window === 'undefined') return url;
    const clientDomain = localStorage.getItem('client-domain');
    if (!clientDomain) return url;
    // solo reemplazar si es el dominio oficial
    if (url?.startsWith('https://app.plaspy.com')) {
        return url.replace('https://app.plaspy.com', `${clientDomain}`);
    }

    return url;
}

export default {
    ...MDXComponents,

    a: (props) => {
        const href = props.href || '';
        const newHref = replaceDomain(href);

        const isExternal = newHref.startsWith('http');

        return (
            <Link
                {...props}
                href={newHref}
                target={isExternal ? '_blank' : undefined}
            />
        );
    },
};