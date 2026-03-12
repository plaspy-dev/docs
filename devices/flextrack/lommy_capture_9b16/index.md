---
slug: /flextrack/lommy_capture_9b16
id: lommy_capture_9b16
sidebar_label: Lommy Capture 9B16
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Capture 9B16

![Lommy Capture 9B16](./tracker.jpg)

Lommy Capture 9B16 is a compact, battery-less GPS tracker purpose-built for discreet, Plaspy compatible real-time tracking of trailers, caravans and other towed assets. Designed to be installed inside light housings, the Lommy Capture uses harvested energy from a vehicle’s lighting circuits to deliver continuous GNSS positions and motion telemetry without a dedicated battery, making it ideal for long-term fleet management and anti-theft deployments where low maintenance and concealment matter.

As a Plaspy compatible tracker, Lommy Capture 9B16 sends location and activity data in formats and over channels that integrate with monitoring platforms and APIs. Its adaptive reporting, robust GNSS stack, IP65 protection and small form factor let fleet managers and integrators add reliable trailer visibility and tamper-resistant tracking to their Plaspy-powered solutions with minimal wiring and installation effort.

## Key Highlights

- Battery-less energy harvesting from tail, brake and indicator circuits for long-term operation and reduced maintenance.
- Plaspy compatible real-time tracking and telemetry via cellular uplink \(LTE Cat M1 + 2G\) using UDP or SMS.
- Robust multi-constellation GNSS \(GPS, GLONASS, GALILEO, BEIDOU, QZSS\) with SBAS support for fast and accurate fixes.
- Adaptive reporting: as often as every 2 minutes when charging from tail lights; lower-frequency or periodic reports when power is limited.
- Discreet, tamper-resistant IP65 housing sized for installation inside light housings \(54 x 44 x 19 mm, 42 g\).
- Built-in 3-axis motion sensor to detect movement and optimize reporting to conserve stored charge.
- Local flash storage \(2 MB\) for buffered reporting when connectivity is unavailable.
- Designed for wide vehicle voltage ranges \(4 V to 40 V\) and harsh temperatures \(-30 to +60 °C\).

## How It Works with Plaspy

Lommy Capture 9B16 integrates into Plaspy-based monitoring and fleet management environments by transmitting GNSS fixes, motion-based activity signals and stored telemetry over cellular networks. Data is sent using UDP or SMS and can be consumed by Plaspy via standard API/system integration or white-label platform connectors. The result is near real-time tracking of towed assets, automated alarms and historical route logging for analytics and utilization reporting.

- Real-time location and telemetry updates sent to Plaspy-compatible servers \(UDP or SMS\).
- Motion detection \(3-axis G sensor\) triggers adaptive reporting to conserve energy and improve anti-theft responsiveness.
- Adaptive reporting intervals: frequent updates while charging from tail lights, activity-triggered bursts when brake/indicator power is present, and low-power periodic reporting when no external power exists.
- Local buffering in 2 MB flash memory ensures position reports are retained and forwarded when connectivity or power conditions permit.
- Multi-constellation GNSS + SBAS and assisted GNSS support for faster fixes and reliable positioning in challenging environments.

## Technical Overview

| Connectivity | FDD LTE Cat M1 and GSM quad-band 2G \(fallback\). Data transport via UDP or SMS. |
| --- | --- |
| Bands | LTE Cat M1: B3 / B8 / B20. GSM 2G: 850 / 900 / 1800 / 1900 MHz. |
| Power & Battery | Battery-less design using super capacitors; energy harvested from tail/brake/indicator circuits \(operates on 4 V to 40 V systems\). Adaptive reporting based on harvested charge. |
| Interfaces | Wiring suggested: black = chassis ground, brown = tail lights, red = brake lights, green = indicator lights. No dedicated onboard battery; motion input via built-in accelerometer. |
| GNSS | GPS, GLONASS, GALILEO, BEIDOU, QZSS; SBAS \(WAAS, EGNOS, MSAS, GAGAN\); assisted GNSS support; tracking sensitivity to -166 dBm; 33 tracking channels. |
| Bluetooth | Not listed in product description \(no onboard Bluetooth sensors specified\). |
| Local Storage | 2 MB flash memory for buffered position/telemetry storage. |
| Environmental & Compliance | IP65 enclosure; operating temperature -30 °C to +60 °C; CE, RoHS, WEEE compliant. |
| Form Factor | Compact housing for in-lamp installation — 54 x 44 x 19 mm, 42 g; internal GNSS and LTE/GSM antennas. |
| Installation Notes | Recommended sealing of wire connections against water and moisture to maintain long-term operation and warranty. |
| Platform Integration | Compatible with LommyFleet and TrackEye; supports white-label solutions and API/system integration for Plaspy-enabled deployments. |

## Use Cases

- Fleet management for trailers and caravans — add Plaspy compatible GPS tracker visibility to monitor location, utilization and route history without battery maintenance.
- Anti-theft protection for towed assets — concealed installation inside light housings makes the device hard to locate and remove.
- Utilization and maintenance planning — historical tracking data helps schedule servicing and optimize asset use across fleets.
- Geofencing and custom alarms — trigger Plaspy alerts when trailers enter/exit defined areas or when movement is detected outside expected conditions.
- Low-maintenance deployments where frequent physical access for battery replacement is impractical — energy harvesting extends service intervals.

## Why Choose This Tracker with Plaspy

Lommy Capture 9B16 is a practical choice when you need a discreet, Plaspy compatible GPS tracker that minimizes maintenance while delivering reliable real-time tracking and telemetry. Its energy-harvesting design removes the need for battery swaps, reducing lifecycle costs and downtime for large fleets of trailers or caravans. The unit’s multi-constellation GNSS, SBAS support and assisted GNSS provide accurate positioning, while LTE Cat M1 with 2G fallback ensures wide cellular coverage for telemetry delivery into Plaspy-managed dashboards and alerts.

For integrators and fleet managers who require broader vehicle telemetry—such as fuel monitoring, ignition status or immobilizer control—Lommy Capture’s position and motion data can be combined within Plaspy with other sensor inputs or vehicle interfaces in your ecosystem. Although the device does not list onboard Bluetooth sensors, Plaspy can correlate Lommy Capture data with external BLE or CAN-based telemetry sources when available, giving you a full fleet management and anti-theft solution.

In summary, Lommy Capture 9B16 offers a low-profile, rugged option to expand Plaspy-compatible asset tracking across towed equipment: dependable GNSS positioning, adaptive reporting based on harvested power, offline buffering, and platform-ready integration for real-time tracking, fleet management and anti-theft monitoring.

