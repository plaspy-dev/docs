import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Link from '@docusaurus/Link';
import { getFromUrlOrLocalStorage } from '@site/src/utils/domain';
import CodeBlock from "@theme/CodeBlock";
import CodeInline from '@theme/CodeInline';

function replaceDomain(url) {
    const clientDomain = getFromUrlOrLocalStorage('f');
    if (!clientDomain)
        return url;
    if (url?.startsWith('https://app.plaspy.com')) {
        return url.replace('https://app.plaspy.com', `${clientDomain}`);
    }

    return url;
}

function shouldBeInline(props) {
    return (
        typeof props.children !== 'undefined' &&
        React.Children.toArray(props.children).every(
            (el) => typeof el === 'string' && !el.includes('\n'),
        )
    );
}

export default {
    ...MDXComponents,
    em: (props) => {
        if (typeof props.children === "string" && props.children?.startsWith("fa-"))
            return <span className={`fa ${props.children}`}></span>;
        return <em {...props} />;
    },
    code: (props) => {
        let children = props.children;

        if (typeof children === "string" && children.includes("api.plaspy.com")) {
            const host = (getFromUrlOrLocalStorage("f") ?? "api.plaspy.com")
                .replace("https://", "")
                .replace("http://", "");

            children = children.replaceAll("api.plaspy.com", host);
        }

        const nextProps = { ...props, children };

        return shouldBeInline(nextProps) ? (
            <CodeInline {...nextProps} />
        ) : (
            <CodeBlock {...nextProps} />
        );
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