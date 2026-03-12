---
slug: /queclink/wts100
id: wts100
sidebar_label: WTS100
sidebar_class_name: menu_item_tracker
---
# QuecLink - WTS100

![WTS100](./tracker.png)

The Queclink WTS100 is a compact, battery-powered wireless temperature sensor designed for cold chain logistics, asset monitoring, and other temperature-sensitive deployments. Plaspy compatible when integrated via supported Queclink receivers or gateways, the WTS100 brings continuous temperature telemetry into your Plaspy environment so teams can monitor conditions in refrigerated trucks, containers, warehouses, and field assets alongside their existing fleet and asset data.

The WTS100 is built for field durability and long unattended operation: it runs on two AA batteries, offers very low power consumption with up to three years of standby life under typical reporting intervals, and transmits temperature data over 433.92 MHz FSK to compatible receivers. While the WTS100 is not a GPS tracker, it complements GPS tracker and fleet management deployments by feeding reliable temperature telemetry into Plaspy for unified monitoring, alerts, and historical reporting.

## Key Highlights

- Plaspy compatible via Queclink receivers/gateways — integrates temperature telemetry into your Plaspy dashboard and alerting workflows.
- Long battery life — two AA cells and up to three years standby when reporting once per minute reduces maintenance and replacement costs.
- Purpose-built for cold chain and asset temperature monitoring — operates from -20°C to +60°C to cover most refrigerated transport and storage needs.
- Compact, lightweight design \(70 × 61 × 23 mm; ~117 g\) for discreet mounting on pallets, containers, or equipment.
- Reliable RF link — 433.92 MHz FSK communication with receiver sensitivity of -105 dBm @ 1 kb/s for robust telemetry in typical deployments.
- Simple in-field pairing and status feedback — side pairing button and LED indicator speed installation and troubleshooting.
- EOL notice and migration guidance — Queclink has announced End-of-Life for RF433 accessories including WTS100; WTH301 is recommended as the replacement and BLE alternatives are suggested for future deployments.

## How It Works with Plaspy

The WTS100 transmits periodic or condition-triggered temperature reports over 433.92 MHz to compatible Queclink receivers or gateways. Those receivers forward the sensor telemetry to backend systems. When you configure that gateway to forward sensor data into Plaspy, temperature measurements, device health, and alarm events become available in Plaspy for real-time monitoring, historical analysis, and alerting.

- Real-time telemetry updates: temperature readings are delivered to Plaspy as they are received by the gateway, enabling near real-time condition monitoring.
- Battery and device health: Plaspy can display battery status and RF link quality reported by the gateway so you can schedule maintenance before failures occur.
- Alerting and thresholds: temperature threshold breaches reported by the WTS100 via gateway trigger Plaspy alerts for immediate action on cold chain exceptions.
- Device identification and pairing: the WTS100’s side button and LED make it straightforward to pair and map a sensor to a Plaspy device record through the gateway.
- Migration planning support: because WTS100 is EOL, Plaspy users should plan migrations to recommended replacements \(e.g., WTH301\) or BLE-based sensors in coordination with Queclink and Plaspy integration guidance.

## Technical Overview

| Connectivity | 433.92 MHz FSK \(wireless temperature telemetry to compatible Queclink receivers/gateways\) |
| --- | --- |
| Bands / Frequency | 433.92 MHz |
| Receiver Sensitivity | -105 dBm @ 1 kb/s \(FSK\) |
| Power & Battery | 2 × AA batteries; up to three years standby when reporting once per minute \(typical ambient conditions\) |
| Interfaces | Side pairing/configuration button; LED indicator for pairing and transmission status |
| Operating Temperature | -20°C to +60°C |
| GNSS | None \(device is a temperature sensor, not a GPS tracker\) |
| Bluetooth | Not included — Queclink recommends BLE accessory alternatives for future deployments |
| Remote Management | Integration and forwarding handled via compatible Queclink receivers/gateways; no direct FOTA/remote config specified for WTS100 |
| Form Factor | Compact, rugged field sensor — 70 × 61 × 23 mm; ~117 g; suitable for refrigerated trucks, containers, and warehouse assets |
| Warranty & Support | Queclink EOL notice; one-year guarantee and one-year warranty on RF433 accessories; lifetime technical support per manufacturer notice |

## Use Cases

- Cold chain monitoring for refrigerated trucks and containers — continuous temperature telemetry to detect excursions and trigger Plaspy alerts.
- Warehouse asset and pallet temperature tracking — monitor specific goods or zones without adding heavy power or GPS hardware.
- Field asset environmental sensing — low-power battery operation for remote or intermittent access locations where continuous mains power is unavailable.
- Equipment and goods surveillance — integrate temperature data with fleet management systems in Plaspy to correlate environmental conditions with shipments or equipment use.

## Why Choose This Tracker with Plaspy

Choosing the WTS100 for Plaspy integration delivers focused, low-power temperature telemetry that complements GPS tracker data in fleet management and logistics workflows. Its long battery life and compact form reduce maintenance and ease deployment across trucks, containers, and warehouses, while the RF link and simple pairing speed integration via existing Queclink receivers and gateways. In Plaspy, teams gain centralized visibility of temperature telemetry alongside location and vehicle data for faster incident response and clearer audit trails for cold chain compliance.

Note on lifecycle: Queclink has announced the End-of-Life for RF433 accessories including the WTS100, with End of Support dated 2025-08-15. Customers should plan migration to recommended replacements \(WTH301\) or BLE sensor alternatives and contact Queclink support for guidance on migration and Plaspy integration. While the WTS100 is not a GPS tracker and does not provide fuel monitoring, ignition, or immobilizer functions, it integrates cleanly into broader fleet and asset monitoring solutions that do by feeding temperature telemetry into your Plaspy platform.

