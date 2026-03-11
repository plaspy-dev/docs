import React from "react";
import DevicePageLayout from "./DevicePageLayout";

export default function DeviceBrand({ brand, devicesSidebar }: { brand: any, devicesSidebar: any }) {
    return (
        <DevicePageLayout
            title={`${brand.brandSlug} server configuration`}
            description={`${brand.publicSummary}`}
            devicesSidebar={devicesSidebar}
            currentBrandSlug={brand.brandSlug}
            currentBrandName={brand.brand}
            sidebarPath={`/devices/${brand.brandSlug}`}
            breadcrumbs={[
                { label: brand.brandSlug }
            ]}
        >
            <h1>Esta es la marca {brand.brandSlug}</h1>
            <img src={brand.image} alt={brand.title} />
            <p>{brand.publicSummary}</p>

            {brand.devices.map((device: any) => (
                <div key={device.modelSlug}>
                    <h2>{device.title}</h2>
                    <p>{device.publicSummary}</p>
                </div>
            ))}
        </DevicePageLayout>
    );
}