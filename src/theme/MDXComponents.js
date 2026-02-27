import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Link from '@docusaurus/Link';
import { getFromUrlOrLocalStorage } from '@site/src/utils/domain';

function replaceDomain(url) {
    const clientDomain = getFromUrlOrLocalStorage('f');
    if (!clientDomain)
        return url;
    if (url?.startsWith('https://app.plaspy.com')) {
        return url.replace('https://app.plaspy.com', `${clientDomain}`);
    }

    return url;
}

export default {
    ...MDXComponents,
    em: (props) => {
        if (props.children?.startsWith && props.children?.startsWith("fa-"))
            return <span className={`fa ${props.children}`}></span>;
        return <em {...props} />;
    },
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