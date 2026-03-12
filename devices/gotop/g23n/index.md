---
slug: /gotop/g23n
id: g23n
sidebar_label: G23N
sidebar_class_name: menu_item_tracker
---
# GOTOP - G23N

![G23N](./tracker.jpg)

The G23N NB‑IoT GPS tracker is a compact, vehicle‑grade GPS tracker designed for seamless Plaspy compatible integration. Built around the Quectel BC26 LTE Cat NB1 module and a ZKMicro GNSS engine, the G23N combines GPS + BDS + LBS positioning to deliver reliable real‑time tracking and telemetry for cars, motorcycles, e‑bikes and broader fleet management deployments.

Engineered for low power consumption and easy installation, the G23N supports a wide DC input \(9V–95V\), ACC detection, remote power/fuel cut output and multiple alarm conditions useful for anti‑theft workflows. The device’s small form factor and internal antennas simplify fitting while Plaspy integration unlocks location, status, alarms and remote control through a single platform.

## Key Highlights

- Plaspy compatible for real‑time tracking and fleet management dashboards.
- NB‑IoT connectivity \(Quectel BC26\) for low‑power, wide‑area telemetry and long deployment life.
- Multi‑constellation positioning \(GPS + BDS + LBS\) with ~5 m accuracy for precise location reporting.
- Vehicle‑grade inputs and outputs: ACC detection, DC/power detection and a low output for remote power/fuel cut \(immobilizer‑style control\).
- Compact, weather‑tolerant housing \(77 × 28 × 15 mm, ABS\) suitable for discreet installations on cars, motorcycles and light commercial vehicles.
- Optional backup battery \(80 mAh, 3.7V\) and power‑loss alarms to support anti‑theft and short offline operation.
- Fast GNSS reacquisition \(hot start ~1 s\) and high tracking sensitivity \(−162 dBm\) to maintain locks in challenging environments.

## How It Works with Plaspy

When connected to Plaspy, the G23N streams positioning and vehicle event data over NB‑IoT to deliver continuous operational visibility. Plaspy ingests location, telemetry and alarm messages and presents them as live markers, routes and reports for fleet managers. The device’s inputs and outputs map directly to common Plaspy features for anti‑theft actions, ignition monitoring and remote cut‑off control.

- Real‑time location and telemetry updates via NB‑IoT \(Quectel BC26\) — compatible with Plaspy’s tracking feeds.
- ACC/ignition status via H‑IN for ignition and runtime monitoring and event rules.
- Power/power‑loss detection and power‑off alarm for unattended vehicle protection and automatic alerts.
- Remote power/fuel cut output to trigger immobilizer‑style interventions from Plaspy when authorized.
- Backup battery support for short‑term operation and offline alarms when external power is removed — Plaspy flags these events for anti‑theft response.

## Technical Overview

| Connectivity | NB‑IoT \(Quectel BC26, LTE Cat NB1\) |
| --- | --- |
| Bands | B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66 |
| Power & Battery | DC input 9V–95V; Work current @12V: 30–60 mA; Sleep current @12V: 5–15 mA; Optional backup battery 80 mAh, 3.7V |
| Interfaces | 1 × low output \(power/fuel cut\), 1 × H‑IN \(ACC detection\), 1 × UART‑TTL \(5V\) for configuration and integration |
| GNSS | GPS + BDS + LBS; GNSS module ZKMicro AT6558D; Positioning accuracy ~5 m; Cold start ~32 s; Hot start ~1 s; Tracking sensitivity −162 dBm |
| Environmental | Operating temperature −30°C to 75°C; Storage −30°C to 80°C; Humidity 5%–95% |
| Form Factor | 77 × 28 × 15 mm; Housing ABS plastic; Weight 32 g |
| Remote Management | Configuration and integration via UART‑TTL \(5V\). No FOTA or cloud management method specified in device description. |

## Use Cases

- Fleet management for small to mid‑size vehicle fleets — continuous location, telemetry and runtime data on Plaspy dashboards.
- Rental and credit vehicle monitoring — anti‑theft alarms, power‑off notifications and remote immobilization capability via the low output.
- Taxis, passenger cars and motorcycles — compact installation, ACC detection and fast GNSS reacquisition for urban operation.
- Light commercial trucks and delivery vehicles — long DC input range \(9V–95V\) supports varied vehicle electrical systems and reduces maintenance visits.
- Asset security where low‑power NB‑IoT connectivity and minimal upkeep are priorities — ideal for long deployments with periodic reporting.

## Why Choose This Tracker with Plaspy

The G23N offers an optimized mix of low‑power NB‑IoT telemetry, multi‑constellation positioning and practical vehicle I/O that integrates naturally with Plaspy’s real‑time tracking and fleet management features. For operators seeking anti‑theft controls, the device’s power/fuel cut output and power‑loss alarms enable decisive remote actions while ACC detection provides clear ignition and runtime signals for telemetry and driver behavior reports.

Choose the G23N with Plaspy when you need a compact GPS tracker that emphasizes reliability, long deployment life and straightforward integration. The unit’s NB‑IoT connectivity reduces cellular power draw and operational cost in many deployments, the GNSS performance delivers accurate location for routing and recovery workflows, and the physical inputs/outputs support essential vehicle controls such as ignition monitoring and immobilizer‑style cut‑off. Note that the G23N focuses on NB‑IoT telemetry and does not include Bluetooth sensors; integration via the UART‑TTL port enables configuration and system pairing where needed.

