---
slug: /totemtech/at21_4g
id: at21_4g
sidebar_label: AT21-4G
sidebar_class_name: menu_item_tracker
---
# Totemtech - AT21-4G

![AT21-4G](./tracker.jpg)

# AT21-4G

The AT21-4G is a rugged, solar-powered 4G GPS tracker engineered for long-term remote asset monitoring and is fully Plaspy compatible. Built for trailers, containers, boxcars, mining equipment and other stationary or remote assets, the AT21-4G combines durable IP67 protection, a large integrated solar panel and a 10,000 mAh Li‑polymer battery to deliver continuous, low-maintenance telematics where permanent DC power is not available. When paired with Plaspy, the AT21-4G provides reliable real-time tracking, telemetry and event alerts that fleet managers and asset custodians depend on.

Designed for simple installation and efficient power management, the AT21-4G supports DC input \(9–45 V\) and solar-only operation, with optional magnets for metal-surface mounting. The device streams location and sensor data over LTE Cat 1 \(with automatic fallback to WCDMA/EDGE/GPRS\) via UDP, TCP or SMS, and stores offline logs on its internal flash. Integrated multi-GNSS positioning and low-power modes make it ideal for long-term deployments that require accurate positioning, anti-theft monitoring and remote immobilizer or ignition status via configurable I/O — all easily visualized and managed in Plaspy.

## Key Highlights

- Solar-powered autonomy with integrated large panel and 10,000 mAh Li‑polymer battery for long deployments without DC power.
- Plaspy compatible for real-time tracking, telemetry, event alerts and historical playback via UDP/TCP/SMS data feeds.
- Rugged IP67 PC+ABS enclosure with optional removable magnets for quick rooftop or exposed-surface installation.
- Multi-GNSS \(GPS/BeiDou/GLONASS/Galileo/SBAS/QZSS\) for faster fixes and improved accuracy \(~2.0 m CEP, -167 dBm sensitivity\).
- Ultra-low power MCU and multi-mode sleep logic \(normal, sleep, deep sleep, beacon\) to minimize current draw and extend autonomous life.
- Flexible telemetry and sensor support: 1-wire temperature sensor, optional TPMS, long-range RFID and analog/digital I/O for fuel, ignition or immobilizer control.
- Reliable cellular connectivity: LTE Cat 1 with regional band kits and automatic fallback when 4G is unavailable.

## How It Works with Plaspy

The AT21-4G integrates with Plaspy by sending location, sensor and event data over UDP, TCP or SMS to Plaspy’s ingestion endpoints. Plaspy parses incoming packets and combines them with the platform’s mapping, alerting and reporting features to deliver real-time tracking and fleet management insights. Internal offline logs \(16 MB\) and configurable reporting intervals let the device optimize power consumption while ensuring Plaspy receives the data it needs for situational awareness.

- Real-time location and telemetry updates transmitted to Plaspy for live tracking and route playback.
- Digitally monitored ignition and digital I/O can be used for alarm events, ignition status and remote immobilizer control when configured.
- Fuel monitoring and analog-sensor telemetry via the analog input to support fuel-level reporting and consumption analysis.
- Offline logging and store-and-forward on the device allow Plaspy to reconstruct historical tracks after connectivity gaps.
- Sensor integration: DS18B20 1-wire temperature monitoring, optional TPMS for tire pressure telemetry and long-range RFID for tag-based asset ID — Plaspy aggregates these inputs alongside GPS data. For Bluetooth sensors, Plaspy can correlate BLE data when a separate BLE gateway is present in the deployment.

## Technical Overview

| Connectivity | LTE Cat 1 with automatic fallback to WCDMA/EDGE/GPRS; data via UDP, TCP or SMS |
| --- | --- |
| Bands | Multiple regional configurations \(e.g., B1/B3/B8/B28 LTE FDD; B1/B8 WCDMA for EMEA\). Other North American band kits available. |
| Power & Battery | Integrated 10,000 mAh Li‑polymer \(two 5,000 mAh cells\); DC input 9–45 V; integrated solar panel \(~1000 mA max output, 310 × 195 mm\); standby consumption &lt;1 mA \(long standby\), ~14 mA \(sleep\), ~25 mA \(standby\), peak ~50 mA during transmission. |
| Interfaces | Micro SIM socket, micro USB port for firmware/configuration, 1-wire port \(DS18B20 temperature sensors\), one analog input, digital I/O. Optional magnets and mounting hardware included. |
| GNSS | Multi-GNSS: GPS, BeiDou, GLONASS, Galileo, SBAS, QZSS. Position accuracy ≈ 2.0 m CEP; tracking sensitivity -167 dBm. |
| Bluetooth | Not specified / no built-in BLE listed. Plaspy can integrate BLE sensor data if a separate gateway is used in the deployment. |
| Remote Management | Configuration via SMS, GPRS/3G provisioning or vendor configuration software; micro USB for local firmware/configuration access. |
| Form Factor | Rugged IP67 PC+ABS enclosure; approximate size 30 × 23 × 5 cm; integrated solar panel 310 × 195 mm; optional removable bottom magnets for metal mounting. |

## Use Cases

- Trailer and container tracking where long battery life and solar charging eliminate the need for wired power.
- Boxcar and rail asset supervision requiring multi-GNSS accuracy and durable IP67 protection against weather and dust.
- Mining equipment and remote machinery monitoring where DC power is intermittent and telemetry must continue through long gaps.
- Fleet anti-theft and immobilization: monitor ignition and use digital I/O for immobilizer control as part of Plaspy-triggered theft-response workflows.
- Cold-chain or environmental monitoring with DS18B20 temperature sensors and optional TPMS for trailer tire condition reporting.

## Why Choose This Tracker with Plaspy

Choosing the AT21-4G for Plaspy deployments delivers a reliable, low-maintenance telematics solution for remote assets. Its integrated solar charging and large battery capacity reduce maintenance visits, while ultra-low-power MCU modes extend field life. Multi-GNSS accuracy and LTE Cat 1 connectivity ensure consistent real-time tracking and telemetry for fleet management, anti-theft monitoring and operational reporting. The device’s configurable analog and digital I/O, 1-wire sensor support and offline logging make it flexible for fuel monitoring, temperature telemetry and immobilizer use cases. When combined with Plaspy’s mapping, alerts and reporting, the AT21-4G becomes a powerful building block for scalable, resilient asset-tracking programs.

