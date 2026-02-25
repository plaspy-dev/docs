import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import { getFromUrlOrLocalStorage } from '@site/src/utils/domain';

function getLogoUrl() {
  let logo = getFromUrlOrLocalStorage('l');
  if (!logo)
    return null;
  return `https://s.trackservers.net/img/logo/${logo}`;
}

export default function Logo(props) {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const [sources, setSources] = useState({
    light: useBaseUrl('img/empty.svg'),
    dark: useBaseUrl('img/empty.svg')
  });

  logo.src = useBaseUrl(logo.src);
  logo.srcDark = logo.srcDark ? useBaseUrl(logo.srcDark) : null;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      logo.src = getLogoUrl() || logo.src;
      setSources({
        light: logo.src,
        dark: logo.srcDark || logo.src
      });
    }, 0);
    return () => {
      clearTimeout(timeOut);
    }
  }, [logo]);

  function LogoThemedImage({ logo, alt, imageClassName }) {

    const themedImage = (
      <>
        <ThemedImage
          className={logo.className}
          sources={sources}
          height={logo.height}
          width={logo.width}
          alt={alt}
          style={logo.style}
        />
      </>
    );
    // Is this extra div really necessary?
    // introduced in https://github.com/facebook/docusaurus/pull/5666
    return imageClassName ? (
      <div className={imageClassName}>{themedImage}</div>
    ) : (
      themedImage
    );
  }

  const { imageClassName, titleClassName, ...propsRest } = props;
  const logoLink = useBaseUrl(logo?.href || '/');
  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? '' : title;
  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;
  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && { target: logo.target })}>
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
