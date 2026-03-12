---
slug: /autofon/se_beacon
id: se_beacon
sidebar_label: SE+ Beacon
sidebar_class_name: menu_item_tracker
---
# AutoFon - SE+ Beacon

![SE+ Beacon](./tracker.png)

### AutoFon SE+ Beacon

The AutoFon SE+ Beacon is a compact, Plaspy compatible GPS tracker engineered for long-term, covert tracking of vehicles and mobile or stationary assets. Combining GPS/GLONASS positioning with GSM SMS and GPRS reporting, the SE+ Beacon delivers reliable location telemetry and event alerts while preserving battery life — ideal when you need discreet, maintenance-light monitoring integrated into the Plaspy platform.

Designed on a v.6.x hardware platform with a SIM800H GSM module and a SIM68M GNSS module, the SE+ Beacon supports real-time tracking via GPRS, SMS fallback, motion and impact detection, and a configurable auxiliary channel for remote control tasks such as immobilizer activation. Its miniature 69×51×22 mm form factor and up to two years of battery life \(depending on configuration\) make it a practical choice for long deployments managed through Plaspy.

## Key Highlights

- Plaspy compatible GPS tracker with GPS + GLONASS positioning for dependable location data.
- Long battery life: runs on two CR123A 3.0V \(1500 mAh\) cells with option for external power.
- Dual reporting: GPRS for real-time tracking and SMS for alerts or backup communications.
- Multi-sensor safety: digital accelerometer, tilt detection, impact/crash detection, and SOS micro-button for immediate alerts.
- Auxiliary channel and alarm input enable remote control of external devices \(for example, engine immobilizer, relay or siren\).
- Built-in microphone for remote audio monitoring and PIN/owner-number protection for secure operation.
- Large offline buffer \(98,000 GPRS packets\) and remote firmware updates over GPRS to keep devices synchronized and resilient to connectivity gaps.

## How It Works with Plaspy

The SE+ Beacon integrates with Plaspy by delivering GNSS positions and event telemetry to Plaspy’s server over GPRS, with SMS used as a fallback notification method. Plaspy ingests those packets to provide live maps, geofencing alerts, and historical playback. Configurable life-signal \(heartbeat\) messages and the device’s large “black box” buffer ensure Plaspy receives consistent position and event data even through temporary network outages.

- Real-time location and telemetry updates via GPRS for continuous tracking on Plaspy dashboards.
- Event reporting: motion start/stop, tilt \(>90°\), high-impact events \(acceleration >8G\) and SOS button presses are forwarded as alerts.
- Alarm input reporting and auxiliary channel control available for remote actions \(e.g., immobilizer or relay control\) when authorized through Plaspy.
- SMS notifications and SMS-to-map link modes provide alternative alerting and quick link-based position sharing where needed.
- Robust offline strategy: a 98,000-packet buffer stores unsent data until Plaspy server connectivity is restored.

## Technical Overview

| Connectivity | GSM \(SIM800H\) with GPRS data and SMS support |
| --- | --- |
| Bands | GSM module used \(SIM800H\); specific frequency bands not specified in device description |
| Power & Battery | Two CR123A 3.0V lithium batteries \(1500 mAh each\); option to connect external power; up to two years battery life depending on configuration and usage |
| Interfaces | One alarm input; one auxiliary channel for remote control \(e.g., immobilizer or relay\); SOS micro-button; PIN and owner-number controls |
| GNSS | GPS + GLONASS positioning via SIM68M GNSS module \(AGPS not present\) |
| Sensors | Digital accelerometer for motion detection, tilt detection \(>90°\), impact/crash detection \(>8G\), configurable sensitivity and reactivation intervals |
| Audio | Integrated microphone for remote audio monitoring |
| Data Resilience | 98,000-packet “black box” buffer for unsent GPRS packets; configurable heartbeat messages |
| Remote Management | Remote firmware updates over GPRS \(FOTA\) supported |
| Form Factor | Compact: 69 × 51 × 22 mm; intended for covert installation in vehicles, assets or stationary objects |
| Localization | Messages and configuration in Russian or English |
| Bluetooth | No Bluetooth support indicated in description |

## Use Cases

- Covert long-term vehicle monitoring — cars, motorcycles and boats where low detectability and long battery life are essential.
- Asset tracking for containers, trailers and valuable cargo during transit or storage with impact and motion alerts.
- Remote stationary object monitoring — garages, cottages or utility boxes where infrequent check-ins preserve battery.
- Personal or pet tracking for discreet location monitoring combined with SOS alerting.
- Small equipment and trailer fleet oversight where discreet telemetry and event alerts are sufficient without full vehicle telematics hardware.

## Why Choose This Tracker with Plaspy

The AutoFon SE+ Beacon pairs well with Plaspy when you need a low-profile GPS tracker that prioritizes battery life, resilience and event-driven telemetry. Its GPRS + SMS dual-path reporting and large offline buffer reduce data loss, while accelerometer-based motion, tilt and crash detection provide actionable alerts for anti-theft and safety workflows. Plaspy customers can leverage these signals for real-time tracking, historical playback and automated alerting.

For operations that require additional telemetry such as fuel monitoring or ignition status, the SE+ Beacon can be part of a broader Plaspy solution where external sensors or integrations supply those specific signals. The auxiliary channel enables remote control actions \(for example, immobilizer activation\) under Plaspy-managed policies, making it practical for basic anti-theft response without complex wiring. Remote firmware updates over GPRS and multi-language configuration keep deployments current and easy to maintain at scale.

