import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Crossing section boundaries must load the other Docusaurus application.
export default function SiteLink({ to, href, ...props }) {
  const { i18n, siteConfig } = useDocusaurusContext();
  let destination = to || href || '';
  const sectionMatch = destination.match(/^\/(?:es\/)?(docs|devices)(?:\/|$)/);
  if (sectionMatch) {
    if (i18n.currentLocale === 'es' && !destination.startsWith('/es/')) {
      destination = `/es${destination}`;
    }
    if (sectionMatch[1] !== siteConfig.customFields.section) {
      return <a {...props} href={destination} />;
    }
    return <Link {...props} to={destination} autoAddBaseUrl={false} />;
  }
  return <Link {...props} to={destination} />;
}
