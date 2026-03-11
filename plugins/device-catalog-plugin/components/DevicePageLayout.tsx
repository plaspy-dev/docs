import React from 'react';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import Link from '@docusaurus/Link';
import TOC from '@theme/TOC';

interface BreadcrumbItem {
    label: string | React.ReactNode;
    href?: string;
}

interface TocItem {
    value: string;
    id: string;
    level: number;
}

interface DevicePageLayoutProps {
    title: string;
    description: string;
    devicesSidebar: any[];
    currentBrandSlug?: string;
    currentBrandName?: string;
    sidebarPath: string;
    breadcrumbs?: BreadcrumbItem[];
    toc?: TocItem[];
    children: React.ReactNode;
}

export default function DevicePageLayout({
    title,
    description,
    devicesSidebar,
    currentBrandSlug,
    currentBrandName,
    sidebarPath,
    breadcrumbs = [],
    toc = [],
    children
}: DevicePageLayoutProps) {
    // Modify collapse state for the current brand if needed
    const sidebar = devicesSidebar.map((category: any) => {
        if (
            (currentBrandSlug && category.href === `/devices/${currentBrandSlug}`) ||
            (currentBrandSlug && category.label === currentBrandSlug) ||
            (currentBrandName && category.label === currentBrandName)
        ) {
            return { ...category, collapsed: false };
        }
        return category;
    });

    return (
        <Layout title={title} description={description}>
            <div className="row">
                <aside className="col col--3 theme-doc-sidebar-container">
                    <DocSidebar sidebar={sidebar} path={sidebarPath} onCollapse={() => { }} isHidden={false} />
                </aside>
                <main className={toc.length > 0 ? "col col--7" : "col col--9"}>
                    <div className="container margin-vert--lg">
                        <nav aria-label="breadcrumbs" className="margin-bottom--md">
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs__item">
                                    <Link href="/" className="breadcrumbs__link">
                                        <svg viewBox="0 0 24 24" width="20" height="20" aria-label="Home page">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className={`breadcrumbs__item ${breadcrumbs.length === 0 ? 'breadcrumbs__item--active' : ''}`}>
                                    {breadcrumbs.length > 0 ? (
                                        <Link href="/devices" className="breadcrumbs__link">Dispositivos</Link>
                                    ) : (
                                        <span className="breadcrumbs__link" itemProp="name">Dispositivos</span>
                                    )}
                                </li>
                                {breadcrumbs.map((b, i) => {
                                    const isLast = i === breadcrumbs.length - 1;
                                    return (
                                        <li key={i} className={`breadcrumbs__item ${isLast ? 'breadcrumbs__item--active' : ''}`}>
                                            {b.href ? (
                                                <Link href={b.href} className="breadcrumbs__link">{b.label}</Link>
                                            ) : (
                                                <span className="breadcrumbs__link" itemProp="name">{b.label}</span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        {children}
                    </div>
                </main>
                {toc && toc.length > 0 && (
                    <div className="col col--2">
                        <TOC toc={toc} minHeadingLevel={2} maxHeadingLevel={3} />
                    </div>
                )}
            </div>
        </Layout>
    );
}
