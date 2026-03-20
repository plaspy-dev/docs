const ctaRules = [
    {
        id: 'docs-home-banner',
        test: /^\/docs\/.*?$/i,
    },
    {
        id: 'devices-root',
        test: /^\/devices\/?$/i,
    },
    {
        id: 'device-brand',
        test: /^\/devices\/[^/]+\/?$/i,
    },
    {
        id: 'device-configuration',
        test: /^\/devices\/[^/]+\/[^/]+\/configuration\/?$/i,
    },
    {
        id: 'device-features',
        test: /^\/devices\/[^/]+\/[^/]+\/features\/?$/i,
    },
    {
        id: 'device-protocol',
        test: /^\/devices\/[^/]+\/[^/]+\/protocol\/?$/i,
    },
    {
        id: 'device-model',
        test: /^\/devices\/[^/]+\/[^/]+\/?$/i,
    }
];

export default ctaRules;