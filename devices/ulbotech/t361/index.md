---
slug: /ulbotech/t361
id: t361
sidebar_label: T361
sidebar_class_name: menu_item_tracker
---
# Ulbotech - T361

![T361](./tracker.jpg)

# Ulbotech T361 OBD-II GPS Tracker

The Ulbotech T361 is a Plaspy compatible GPS tracker engineered for fast, reliable plug-and-play deployment via a vehicle’s OBD-II port. Designed for fleet management, security and driver behavior monitoring, the T361 exposes engine data, CAN/J1939 diagnostics and real-time telemetry so you can add vehicle-level insight to your Plaspy platform quickly and without wiring changes.

Compact and robust, the T361 combines a quad-band GSM/GPRS modem with a u-blox 6M GNSS module, an internal immobilizer \(engine cut output\), and a 3-axis accelerometer to support real-time tracking, anti-theft functions and detailed driving-event analysis. Its integration with Plaspy enables configurable alerts, reports and remote firmware updates for scalable vehicle and fleet telematics.

## Key Highlights

- Plug-and-play OBD-II installation for fast deployment across fleets and rental vehicles.
- Quad-band GSM/GPRS connectivity \(850/900/1800/1900 MHz\) for wide network compatibility and real-time tracking.
- High-sensitivity positioning with u-blox 6M GNSS and A-GPS for quick TTFF and autonomous position accuracy under 3 m.
- Direct access to engine data and diagnostics \(OBD protocols plus SAE J1939 CANBUS\) to deliver rich telemetry and ECU-sourced events.
- Built-in immobilizer/engine cut digital output for anti-theft and remote immobilization workflows.
- On-device accelerometer for driver behavior detection \(harsh braking, rapid acceleration, harsh cornering\) and collision/motion alerts.
- Remote firmware updates \(FOTA\) and auto APN/time zone detection to simplify large-scale rollouts and maintenance.

## How It Works with Plaspy

When paired with Plaspy, the T361 delivers continuous location and vehicle telemetry into your platform so you can run real-time tracking, event-driven alerts and scheduled reports. Plaspy ingests the device’s OBD and sensor streams, normalizes diagnostic PIDs and combines them with GPS fixes to enable fleet management, safety monitoring and anti-theft response.

- Real-time location and telemetry updates sent over GPRS for live tracking dashboards and history playback.
- Vehicle diagnostic data \(OBD-II PIDs and SAE J1939\) available to Plaspy for engine status, fault codes and telemetry-driven rules.
- Ignition status and a single digital output for remote engine cut/immobilizer control to support anti-theft workflows.
- Configurable alerts in Plaspy for geo-fence crossings, unplug/disconnect events, low battery and driver behavior events \(rapid acceleration, harsh braking, high RPM, long idling\).
- Remote firmware updates \(FOTA\) via GPRS from an FTP server for centralized device management through Plaspy’s provisioning tools.
- Engine/ECU data exposed by the T361 can be used by Plaspy to enable fuel monitoring and consumption analysis where the vehicle ECU provides the necessary PIDs.

## Technical Overview

| Connectivity | Quad-band GSM/GPRS \(850 / 900 / 1800 / 1900 MHz\), GPRS multi-slot class 12 \(MS Class B\) |
| --- | --- |
| Bands / RF | GSM850/900/1800/1900; typical RF output ~33 dBm \(GSM850/900\) and ~30 dBm \(DCS/PCS\) |
| Power & Battery | Operating voltage 8–32 V DC; internal Li-Polymer backup 3.7 V, 180 mAh; typical active current ~70 mA, sleep ~10 mA |
| Interfaces | OBD-II \(J1850 PWM/VPW, ISO 9141-2, ISO 14230 KWP2000, ISO15765-4 CAN\), SAE J1939; micro USB port for configuration; LED indicators; single digital output \(engine cut\) |
| GNSS | u-blox 6M with A-GPS; autonomous accuracy &lt; 3 m; TTFF hot &lt;1 s, cold ~25 s |
| Bluetooth | Not reported / not included in device spec |
| Remote Management | FOTA \(firmware updates\) via GPRS from FTP server; auto APN and time zone identification |
| Memory | On-board storage for roughly 15,000 records \(local buffering during connectivity loss\) |
| Form Factor & Weight | Two reported form factors depending on connector clearance: approx. 62×50×23 mm or 45×50×23 mm \(excluding J1962 connector\); ~50 g |
| Environmental | Operating range: -30°C to +80°C \(without battery\); extended storage range reported |

## Use Cases

- Fleet management — centralized real-time tracking, ECU telemetry and scheduled reports to optimize routes and utilization.
- Anti-theft & immobilization — quick removal detection, remote engine cut and recovery workflows with Plaspy alerts.
- Insurance telematics and driver scoring — capture harsh events, idling, high RPM and driving patterns for scoring and premiums.
- Rental, roadside assistance and vehicle remarketing — plug-and-play OBD-II install allows rapid onboarding and diagnostics tracking.

## Why Choose This Tracker with Plaspy

The Ulbotech T361 combines the simplicity of OBD-II plug-and-play installation with the telemetry depth fleets and service providers need. As a Plaspy compatible GPS tracker, it delivers ECU-level data, reliable real-time location and built-in immobilizer control so you can deploy anti-theft, fleet management and insurance telematics solutions without complex installs. Remote FOTA, auto APN/time zone setup and on-device memory reduce maintenance overhead and downtime, while the u-blox GNSS and GSM/GPRS radio ensure consistent connectivity and accurate tracking. If your deployment requires compact OBD-II hardware that feeds rich telemetry into Plaspy for alerts, reports and remote management, the T361 is a practical, proven option.

