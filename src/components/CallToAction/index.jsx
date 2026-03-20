import React, { useMemo } from 'react';
import './styles.css';
import ctaRules from './ctaRules';
import { getCtaContent } from './ctaContent';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function CallToAction() {
    function resolveCtaId(pathname) {
        const match = ctaRules.find((rule) => rule.test.test(pathname));
        return match?.id;
    }

    function CtaButton({ button, className }) {
        if (!button) return null;
        if (button.external) {
            return (
                <a
                    className={className}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {button.label}
                </a>
            );
        }

        return (
            <Link className={className} to={button.href}>
                {button.label}
            </Link>
        );
    }

    const location = useLocation();

    const ctaId = useMemo(() => resolveCtaId(location.pathname), [location.pathname]);
    const cta = useMemo(() => getCtaContent(ctaId), [ctaId]);
    if (!ctaId || !cta)
        return null;

    return (
        <div className="plaspy-docs-cta show-only-plaspy">
            <div className="plaspy-docs-cta__content">
                <p className="plaspy-docs-cta__eyebrow">{cta.eyebrow}</p>
                <h3 className="plaspy-docs-cta__title">{cta.title}</h3>
                <p className="plaspy-docs-cta__text">{cta.text}</p>

                <div className="plaspy-docs-cta__actions">
                    <CtaButton
                        button={cta.primary}
                        className="plaspy-docs-cta__button plaspy-docs-cta__button--primary"
                    />
                    <CtaButton
                        button={cta.secondary}
                        className="plaspy-docs-cta__button plaspy-docs-cta__button--secondary"
                    />
                </div>
            </div>
        </div>
    );
}