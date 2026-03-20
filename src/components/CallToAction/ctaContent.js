import { translate } from '@docusaurus/Translate';

export function getCtaContent(ctaId) {
    const map = {
        'docs-home-banner': {
            eyebrow: translate({
                id: 'cta.docsHomeBanner.eyebrow',
                message: 'Plaspy GPS Tracking Platform',
            }),
            title: translate({
                id: 'cta.docsHomeBanner.title',
                message: 'Explore the Plaspy platform and compatible GPS devices',
            }),
            text: translate({
                id: 'cta.docsHomeBanner.text',
                message:
                    'Browse technical guides, application documentation, compatible trackers, and setup resources to get more value from Plaspy.',
            }),
            primary: {
                label: translate({
                    id: 'cta.docsHomeBanner.primary',
                    message: 'Visit Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
            secondary: {
                label: translate({
                    id: 'cta.docsHomeBanner.secondary',
                    message: 'Browse compatible devices',
                }),
                href: '/devices',
                external: false,
            },
        },

        'devices-root': {
            eyebrow: translate({
                id: 'cta.devicesRoot.eyebrow',
                message: 'Compatible GPS Devices',
            }),
            title: translate({
                id: 'cta.devicesRoot.title',
                message: 'Use compatible trackers with Plaspy',
            }),
            text: translate({
                id: 'cta.devicesRoot.text',
                message:
                    'Explore GPS tracker brands and models that can be used with Plaspy for vehicle tracking, fleet visibility, and operational monitoring.',
            }),
            primary: {
                label: translate({
                    id: 'cta.devicesRoot.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
            secondary: {
                label: translate({
                    id: 'cta.devicesRoot.secondary',
                    message: 'Open device catalog',
                }),
                href: '/devices',
                external: false,
            },
        },

        'device-brand': {
            eyebrow: translate({
                id: 'cta.deviceBrand.eyebrow',
                message: 'Brand Compatibility',
            }),
            title: translate({
                id: 'cta.deviceBrand.title',
                message: 'Monitor compatible brand devices with Plaspy',
            }),
            text: translate({
                id: 'cta.deviceBrand.text',
                message:
                    'Plaspy helps businesses work with compatible GPS trackers for visibility, reporting, and daily operational control across vehicle and asset tracking workflows.',
            }),
            primary: {
                label: translate({
                    id: 'cta.deviceBrand.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
            secondary: {
                label: translate({
                    id: 'cta.deviceBrand.secondary',
                    message: 'Browse compatible devices',
                }),
                href: '/devices',
                external: false,
            },
        },

        'device-model': {
            eyebrow: translate({
                id: 'cta.deviceModel.eyebrow',
                message: 'Plaspy GPS Tracking Platform',
            }),
            title: translate({
                id: 'cta.deviceModel.title',
                message: 'Use compatible trackers with Plaspy',
            }),
            text: translate({
                id: 'cta.deviceModel.text',
                message:
                    'Monitor vehicles, assets, and operational activity from a single platform. Plaspy helps you work with compatible GPS trackers for visibility, reporting, and day-to-day fleet monitoring.',
            }),
            primary: {
                label: translate({
                    id: 'cta.deviceModel.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
            secondary: {
                label: translate({
                    id: 'cta.deviceModel.secondary',
                    message: 'Browse compatible devices',
                }),
                href: '/devices',
                external: false,
            },
        },

        'device-configuration': {
            eyebrow: translate({
                id: 'cta.deviceConfiguration.eyebrow',
                message: 'Tracker Configuration',
            }),
            title: translate({
                id: 'cta.deviceConfiguration.title',
                message: 'Need a platform for this tracker setup',
            }),
            text: translate({
                id: 'cta.deviceConfiguration.text',
                message:
                    'Plaspy helps you connect compatible trackers, receive device data, and centralize monitoring from one GPS tracking platform.',
            }),
            primary: {
                label: translate({
                    id: 'cta.deviceConfiguration.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
        },

        'device-features': {
            eyebrow: translate({
                id: 'cta.deviceFeatures.eyebrow',
                message: 'Tracker Capabilities',
            }),
            title: translate({
                id: 'cta.deviceFeatures.title',
                message: 'See how these features fit into Plaspy',
            }),
            text: translate({
                id: 'cta.deviceFeatures.text',
                message:
                    'Plaspy helps turn compatible tracker capabilities into useful visibility, monitoring, and operational workflows across vehicles and assets.',
            }),
            primary: {
                label: translate({
                    id: 'cta.deviceFeatures.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
        },

        'device-protocol': {
            eyebrow: translate({
                id: 'cta.deviceProtocol.eyebrow',
                message: 'Tracker Communication',
            }),
            title: translate({
                id: 'cta.deviceProtocol.title',
                message: 'Looking for a platform that works with compatible protocols',
            }),
            text: translate({
                id: 'cta.deviceProtocol.text',
                message:
                    'Plaspy helps receive data from supported trackers and organize monitoring, visibility, and reporting in one place.',
            }),
            primary: {
                label: translate({
                    id: 'cta.deviceProtocol.primary',
                    message: 'Learn more about Plaspy',
                }),
                href: 'https://www.plaspy.com',
                external: true,
            },
        },
    };

    return map[ctaId];
}