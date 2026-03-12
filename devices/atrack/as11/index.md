---
slug: /atrack/as11
id: as11
sidebar_label: AS11
sidebar_class_name: menu_item_tracker
---
# ATrack - AS11

![AS11](./tracker.jpg)

The AS11 is a rugged LTE GPS tracker built for long-term asset management in harsh environments and is Plaspy compatible out of the box. Designed for containers, heavy equipment, trailers and other high-value assets, the AS11 combines industrial-grade protection \(IP68, MIL-STD-810H\) with long battery life and flexible connectivity options so you can deploy reliable real-time tracking and telemetry where maintenance access is limited.

The AS11 supports 4G LTE Cat.1 and Cat.M1 cellular variants and includes embedded GNSS and cellular antennas, with an optional external GPS/GLONASS antenna for challenging reception. With onboard Bluetooth Low Energy for local sensors, extensive I/O for ignition and alarms, and queued logging for intermittent networks, the AS11 provides the data Plaspy needs for accurate location, telemetry and anti-theft workflows.

## Key Highlights

- Plaspy compatible asset tracking — delivers location and telemetry via TCP/UDP/SMS for easy integration into Plaspy dashboards and alerts.
- Rugged IP68 enclosure and MIL-STD-810H compliance — engineered for water, dust, vibration and shock in industrial deployments.
- Long-life rechargeable battery — 3.7V Li‑ion 6,400 mAh provides up to 2 months of operation on hourly reporting intervals for low-maintenance tracking.
- Dual LTE options — 4G LTE Cat.1 and Cat.M1 variants for broad carrier support and low-power wide-area deployments.
- High-sensitivity GNSS with 2.5 m CEP typical accuracy — reliable GPS/GLONASS positioning supported by SBAS \(WAAS/EGNOS/GAGAN/MSAS\).
- Extensive I/O and sensor support — ignition input, digital I/O, analog input, RS232, accelerometer and 1‑Wire for iButton/temperature sensors.
- Bluetooth Low Energy v4.2 for local sensors — enables temperature, proximity and accessory pairing with long-range BLE support.
- Robust offline logging and queued messaging — internal flash stores large log volumes until connectivity is available.

## How It Works with Plaspy

The AS11 streams the telemetry Plaspy needs for real-time tracking, fleet management and anti-theft workflows. Using TCP/UDP or SMS over IMS, the tracker sends GNSS fixes, sensor readings and I/O events to Plaspy endpoints; when connectivity drops the AS11 stores logs and queued messages locally and uploads them automatically when the network returns. This behavior makes the AS11 ideal for remote or intermittently connected assets that still require near real-time insights.

- Real-time location and telemetry updates: GPS/GLONASS fixes, speed and heading for accurate GPS tracker reporting.
- Ignition and digital input events: configurable ignition input and digital inputs report vehicle state changes for fleet management and geofencing.
- Analog telemetry \(0–40 V\): supports external analog sensors and can be used for fuel monitoring or other analog telemetry integrations where applicable.
- Remote control via outputs: configurable digital outputs \(max sink 500 mA\) can be used to implement immobilizer or other remote control actions where supported by the vehicle installation.
- Bluetooth sensors: BLE v4.2 enables pairing with temperature, proximity or asset sensors to enrich telemetry in Plaspy.
- Queued logs and retransmission: up to 125,000 logs and 23,000 queued messages stored in internal flash for deferred upload.

## Technical Overview

| Connectivity | 4G LTE Cat.1 and Cat.M1 \(variants available\) |
| --- | --- |
| Bands / Variants | Hardware variants for NA, Japan/EMEA, Global and Canada \(carrier support depends on variant\) |
| Power & Battery | Built-in rechargeable 3.7V Li‑ion, 6,400 mAh; up to ~2 months battery life on hourly reporting intervals |
| Interfaces | RS232 serial, configurable digital ignition input, up to 2 configurable digital inputs, 2 configurable digital outputs \(max sink 500 mA\), 1 configurable analog input \(0–40 V, 12-bit\), 1‑Wire \(iButton/temperature\), optional vehicle bus via external adapter |
| GNSS | GPS & GLONASS \(99 Tracking engine\); SBAS support \(WAAS, EGNOS, GAGAN, MSAS\); typical accuracy 2.5 m CEP; tracking sensitivity -167 dBm; acquisition -149 dBm |
| Bluetooth | Bluetooth Low Energy v4.2, Class 2 with long-range support for sensors and beacons |
| Remote Management & Protocols | UDP/IP, TCP/IP, SMS over IMS; ADM \(ATrack Device Management\), FOTA, RS232 configuration |
| Memory | Internal flash 64 Mbits; up to 125,000 logs and up to 23,000 queued messages |
| Environmental & Certifications | IP68 rated enclosure; operating temp –20°C to +60°C with battery \(–40°C to +70°C without battery\); MIL‑STD‑810H vibration/shock/drop; carrier certifications: FCC, IC, PTCRB, TELEC; RoHS compliant |
| Form Factor | 120 × 80 × 36 mm; ≈250 g; built for vehicle and fixed asset mounting |

## Use Cases

- Fleet management for non-powered trailers and equipment — monitor location, ignition state and movement to optimize utilization.
- Logistics containers and remote assets — IP68 enclosure and long battery life enable long-duration deployments with intermittent connectivity.
- Anti-theft and recovery — real-time tracking, accelerometer events and configurable outputs enable alarm workflows and remote immobilizer implementations.
- Telemetry and fuel monitoring integrations — analog input and queued logging support external sensors for fuel or equipment telemetry.
- Cold chain or environment-sensitive assets — BLE-connected temperature sensors via 1‑Wire or BLE for condition monitoring.

## Why Choose This Tracker with Plaspy

The AS11 delivers a balance of ruggedness, battery endurance and flexible I/O that makes it an effective GPS tracker for demanding asset and fleet management projects. As a Plaspy compatible device, it reliably supplies the telemetry and event data Plaspy needs—GNSS fixes, ignition and input events, analog telemetry and BLE sensor data—while handling offline storage and bulk uploads for remote deployments. Industrial-grade certifications, carrier variant options and remote management via FOTA and ADM simplify large-scale rollouts, reduce maintenance overhead and increase uptime. Choose the AS11 when your Plaspy deployment requires durable hardware, rich telemetry and proven field performance for anti-theft, fleet management and long-term asset monitoring.

