---
slug: /eelink/tk319h
id: tk319h
sidebar_label: TK319‑H
sidebar_class_name: menu_item_tracker
---
# EElink - TK319‑H

![TK319‑H](./tracker.jpg)

The TK319‑H is a compact 3G GPS tracker engineered for reliable vehicle tracking and telemetry. Plaspy compatible out of the box, the TK319‑H delivers real-time tracking, ACC/ignition detection, and a suite of motion and safety alarms that integrate directly with Plaspy’s fleet management platform for streamlined monitoring and rapid incident response.

Designed for fleets, rental vehicles, and high-value assets, the TK319‑H combines GPS/LBS positioning with AGPS support, serial/GPIO expansion and optional relay and temperature sensor interfaces. Its small form factor and broad DC input range make it suitable for diverse vehicle types while keeping installation and integration with Plaspy straightforward.

## Key Highlights

- Plaspy compatible: sends location and telemetry using MoveLink/EELINK protocol for fast integration with Plaspy dashboards and APIs.
- Real-time tracking: GPS/LBS positioning with AGPS support provides continuous location updates for fleet management and anti-theft monitoring.
- Comprehensive alarms: built-in crash, acceleration, deceleration, vibration and overspeed alarms for safety and incident detection.
- Ignition and telemetry inputs: ACC detection \(ignition status\) and serial/GPIO expansion for custom telemetry and sensors.
- Remote cut-off option: optional relay supports remote fuel or power cut-off \(useful for immobilizer/anti-theft workflows managed through Plaspy\).
- Power resilience: wide 9–72 V DC input and a 140 mAh backup battery with low-battery and cut-off alerts when external power is lost.
- Compact and lightweight: discreet installation with minimal space impact \(89 × 37 × 12 mm, 46 g\).

## How It Works with Plaspy

Integration with Plaspy is straightforward: TK319‑H transmits location and telemetry over GSM/WCDMA networks using the MoveLink/EELINK protocol, allowing Plaspy to display live positions, generate alerts, and record historical trips. Plaspy ingests the device’s alarms and status messages to power fleet workflows, anti-theft actions, and compliance reporting.

- Real-time location and telemetry updates sent to Plaspy via MoveLink/EELINK for map visualization and routing.
- ACC/ignition detection enables Plaspy to distinguish driving vs. parked states and trigger ignition-based reports or alerts.
- Crash, overspeed, vibration, acceleration and deceleration alarms are forwarded to Plaspy for immediate notification and incident logging.
- Optional relay can be controlled through Plaspy workflows to implement remote immobilizer or fuel/power cut-off when authorized.
- LBS \(base-station\) fallback maintains location visibility when GPS signals are unavailable, helping Plaspy maintain continuity of tracking.

## Technical Overview

| Connectivity | GSM and WCDMA \(3G\) cellular networks |
| --- | --- |
| Bands | Specific frequency bands depend on model/region and should be confirmed with vendor |
| Power & Battery | 9–72 V DC input; 140 mAh backup battery. Sends low-battery and external-power cut-off alerts. |
| Interfaces | ACC \(ignition\) detection; optional relay for remote fuel/power cut-off; serial and GPIO expansion; optional temperature sensor support |
| GNSS | GPS with AGPS support; positioning accuracy ~5–15 m \(GPS\) and ~200 m \(base-station/LBS\) |
| Bluetooth | Not specified in supplied device description |
| Remote Management & Protocol | Integration via MoveLink / EELINK protocol \(used to relay location, alarms and telemetry to backend platforms\) |
| Form Factor | 89 × 37 × 12 mm; 46 g — compact vehicle tracker |

## Use Cases

- Fleet management — continuous GPS tracker data and ACC status help Plaspy optimize routing, driver behavior reports, and utilization metrics.
- Anti-theft and immobilization — optional relay supports remote fuel/power cut-off workflows that Plaspy can trigger after verified alerts or theft detection.
- Crash and safety monitoring — built-in crash, overspeed, and vibration alarms provide immediate incident data to dispatchers through Plaspy.
- Fuel and power protection — loss-of-power alerts and relay control help secure assets and enable intervention via Plaspy notifications.
- Cold-chain or temperature-aware installs \(optional\) — where the temperature sensor is fitted, Plaspy can record and alert on temperature thresholds for sensitive cargo.

## Why Choose This Tracker with Plaspy

For organizations seeking a compact, Plaspy compatible GPS tracker with proven 3G connectivity and flexible I/O, the TK319‑H is a practical choice. Its blend of real-time tracking, robust alarm signals \(crash, overspeed, vibration\), ACC detection, and optional relay/temperature sensor support makes it well suited for fleet management, anti-theft measures, and basic telemetry needs. The wide 9–72 V input and backup battery ensure continuity of monitoring, while the MoveLink/EELINK integration simplifies onboarding into Plaspy for immediate visibility and control.

Plaspy’s platform also supports additional peripherals and sensors where required; if your deployment needs Bluetooth sensors or other specialized telemetry, discuss integration options with your Plaspy account team or device vendor to confirm available expansion paths. Together, TK319‑H and Plaspy deliver dependable real-time tracking, actionable telemetry, and remote control capabilities to protect assets and improve operational efficiency.

