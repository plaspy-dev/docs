import React from "react";
import DevicePageLayout from "./DevicePageLayout";

export default function DeviceCatalogPage({ devices, devicesSidebar }: { devices: any, devicesSidebar: any }) {
    const totalDevices = devices.length;
    const totalBrands = [...new Set(devices.map((d: any) => d.brand))].length;
    
    return (
        <DevicePageLayout
            title={`${totalDevices} Total devices`}
            description={`${totalBrands} Total brands`}
            devicesSidebar={devicesSidebar}
            sidebarPath="/devices"
        >
            <h1>Estos son todos los dispositivos compatibles con Plaspy</h1>
            <p>Total devices: {totalDevices}</p>
            <p>Total brands: {totalBrands}</p>
            
            {/* Si devices no es un objeto, sino un arreglo, esta imagen/summary fallará a menos que lo manejes (estaba en tu código original) */}
            {devices.image && <img src={devices.image} alt={devices.title} />}
            {devices.publicSummary && <p>{devices.publicSummary}</p>}
            
            {devices.protocol && (
                <>
                    <h2>Protocol</h2>
                    <p>{devices.protocol}</p>
                </>
            )}

            {devices.port && (
                <>
                    <h2>Port</h2>
                    <p>{devices.port}</p>
                </>
            )}
        </DevicePageLayout>
    );
}