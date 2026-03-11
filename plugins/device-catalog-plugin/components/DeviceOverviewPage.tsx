import React from "react";
import DevicePageLayout from "./DevicePageLayout";

export default function DeviceOverviewPage({ device, devicesSidebar }: { device: any, devicesSidebar: any }) {
    const toc = [
        { value: 'Protocol', id: 'protocol', level: 2 },
        { value: 'Port', id: 'port', level: 2 },
        { value: 'General steps', id: 'general-steps', level: 2 }
    ];

    return (
        <DevicePageLayout
            title={`${device.title} server configuration`}
            description={`${device.publicSummary}`}
            devicesSidebar={devicesSidebar}
            currentBrandSlug={device.brandSlug}
            currentBrandName={device.brand}
            sidebarPath={`/devices/${device.brandSlug}/${device.modelSlug}`}
            breadcrumbs={[
                { label: device.brandSlug, href: `/devices/${device.brandSlug}` },
                { label: device.title }
            ]}
            toc={toc}
        >
            <h1>{device.title}</h1>
            <p>{device.publicSummary}</p>

            <h2 id="protocol">Protocol</h2>
            <p>{device.protocol}</p>

            <h2 id="port">Port</h2>
            <p>{device.port}</p>

            <h2 id="general-steps">General steps</h2>
            <ol>
                {device.publicSteps.map((step: string) => <li key={step}>{step}</li>)}
            </ol>
        </DevicePageLayout>
    );
}
