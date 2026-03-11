import fs from 'fs/promises';
import path from 'path';

export default function deviceCatalogPlugin(context, options) {
    return {
        name: 'device-catalog-plugin',

        async loadContent() {
            const raw = await fs.readFile(path.resolve(options.dataFile), 'utf8');
            const devices = JSON.parse(raw);
            return { devices };
        },

        async contentLoaded({ content, actions }) {
            const { createData, addRoute } = actions;

            const devicesSidebar = [];
            const brands = [...new Set(content.devices.map(d => d.brandSlug))];
            
            for (const brandSlug of brands) {
                const brandDevices = content.devices.filter(d => d.brandSlug === brandSlug);
                const brandName = brandDevices[0].brand || brandSlug;
                devicesSidebar.push({
                    type: 'category',
                    label: brandName,
                    href: `/devices/${brandSlug}`,
                    collapsible: true,
                    collapsed: true,
                    items: brandDevices.map(d => ({
                        type: 'link',
                        label: d.title || d.modelSlug,
                        href: `/devices/${brandSlug}/${d.modelSlug}`
                    }))
                });
            }

            const devicesSidebarPath = await createData(
                'devicesSidebar.json',
                JSON.stringify(devicesSidebar)
            );

            const devicesDataPath = await createData(
                'devices.json',
                JSON.stringify(content.devices)
            );

            addRoute({
                path: '/devices',
                component: '@site/plugins/device-catalog-plugin/components/DeviceCatalogPage.tsx',
                modules: {
                    devices: devicesDataPath,
                    devicesSidebar: devicesSidebarPath,
                },
                exact: true,
            });

            for (const brandSlug of brands) {
                const brandDataPath = await createData(
                    `${brandSlug}.json`,
                    JSON.stringify({ brandSlug: brandSlug, devices: content.devices.filter(d => d.brandSlug === brandSlug) })
                );

                addRoute({
                    path: `/devices/${brandSlug}`,
                    component: '@site/plugins/device-catalog-plugin/components/DeviceBrand.tsx',
                    modules: {
                        brand: brandDataPath,
                        devicesSidebar: devicesSidebarPath,
                    },
                    exact: true,
                });
            }

            for (const device of content.devices) {
                const deviceDataPath = await createData(
                    `${device.brandSlug}-${device.modelSlug}.json`,
                    JSON.stringify(device)
                );

                addRoute({
                    path: `/devices/${device.brandSlug}/${device.modelSlug}`,
                    component: '@site/plugins/device-catalog-plugin/components/DeviceOverviewPage.tsx',
                    modules: {
                        device: deviceDataPath,
                        devicesSidebar: devicesSidebarPath,
                    },
                    exact: true,
                });

                addRoute({
                    path: `/devices/${device.brandSlug}/${device.modelSlug}/troubleshooting`,
                    component: '@site/plugins/device-catalog-plugin/components/DeviceTroubleshootingPage.tsx',
                    modules: {
                        device: deviceDataPath,
                        devicesSidebar: devicesSidebarPath,
                    },
                    exact: true,
                });
            }
        },
    };
}