---
slug: /autofon/e_ip
id: e_ip
sidebar_label: E-Маяк IP
sidebar_class_name: menu_item_tracker
---
# AutoFon - E-Маяк IP

![E-Маяк IP](./tracker.jpg)

The AvtoFon E‑Mayak IP \(АвтоФон E‑Маяк IP\) is a compact, autonomous GSM/GPS tracker designed for discreet, long‑term location monitoring and alarm reporting. Plaspy compatible out of the box for SMS‑based position updates and protocol integration, the E‑Mayak IP delivers reliable real‑time tracking and on‑demand audio monitoring for vehicles, valuable cargo, and remote objects that require anti‑theft protection and simple fleet oversight.

The device combines a small sealed enclosure with low‑power electronics and a capacious battery, enabling up to two years of autonomous operation depending on configuration. Key safety features include an integrated microphone, a built‑in SOS button, a digital accelerometer with advanced motion and accident detection modes, and a universal control channel suitable for immobilizer/engine cut‑off or other remote actions—making it a practical choice for telemetry, anti‑theft and long‑range asset tracking when used with Plaspy.

## Key Highlights

- Plaspy compatible via SMS and protocol messages for real‑time tracking and alerting.
- Compact, sealed \(hermetic\) enclosure for covert installation in vehicles, boats, containers and other assets.
- Long autonomous operation on 2 × CR123A lithium cells — up to 2 years depending on settings.
- Integrated microphone and SOS button for remote audio monitoring and immediate alarm signaling.
- Advanced digital accelerometer with six modes: movement start, tipping \(>90°\), impacts and accident \(high g\) detection.
- One external alarm input plus a universal additional channel for remote control of external devices \(engine cut‑off, starter control, siren, pre‑heater, etc.\).
- Rich SMS formatting with map links, message retry/queue memory and configurable heartbeat/liveness messages.

## How It Works with Plaspy

Plaspy ingests the E‑Mayak IP’s location and alarm messages whether you use SMS forwarding or configure protocol messages to a server endpoint. Because the E‑Mayak transmits precise GPS coordinates via SMS and supports protocol messaging over GPRS \(firmware supports GPRS updates though the manufacturer does not provide a hosted monitoring server\), Plaspy can present real‑time tracking, alarms and telemetry on maps and dashboards once configured to receive the device’s output.

- Real‑time location and telemetry updates delivered via SMS \(and protocol messages where GPRS is enabled\).
- Movement, tipping and impact \(accident\) alerts from the built‑in accelerometer forwarded to Plaspy for immediate notification.
- External alarm input and universal control channel status available as digital telemetry \(used for door/alarm events or immobilizer controls\).
- SOS button presses and remote audio monitor events transmitted to authorized numbers and processed by Plaspy for incident response.
- Device liveness \(heartbeat\) and battery/temperature telemetry sent to Plaspy to support fleet management and preventative maintenance.

## Technical Overview

| Connectivity | GSM cellular \(QUECTEL M12 module\) for SMS and protocol messaging; GPRS used for firmware update and protocol where configured |
| --- | --- |
| Bands | Module: QUECTEL M12 \(see manufacturer documentation for supported GSM bands\) |
| Power & Battery | 2 × CR123A lithium cells \(3.0 V\), total capacity listed as 1500 mAh; autonomy up to 2 years depending on configuration and reporting intervals; external power supported; beacon mode on external power loss |
| Interfaces | One external alarm input; one universal additional channel for remote control of external devices \(engine cut‑off/immobilizer, starter control, siren, pre‑heater, etc.\); SOS button; SMS remote control from authorized numbers with PIN protection |
| GNSS | Quectel L10 GPS chipset; extended LBS positioning supported; AGPS not supported |
| Bluetooth | No Bluetooth connectivity \(no BLE sensors included\) |
| Remote Management | Firmware update capability via GPRS; device supports configurable SMS commands, heartbeat messages and remote parameter adjustment |
| Other Features | Integrated microphone for remote audio monitoring, SOS button, accelerometer with multi‑mode detection, memory for unsent alarms/messages with retry, real‑time clock, temperature measurement and battery discharge monitoring |
| Form Factor | Compact main enclosure 70 × 50 × 21 mm; hermetic enclosure supplied: 79 × 55 × 27 mm; GPS antenna 25 × 25 × 4 mm |

## Use Cases

- Covert vehicle or motorcycle tracking for anti‑theft response and discreet monitoring.
- Container and cargo escort with movement and impact notifications during transit.
- Remote object protection: garages, summer houses and standalone equipment where long battery life and hermetic enclosure are advantageous.
- Asset tracking for boats or trailers where sealed housing and SMS reporting are required.
- Personnel or pet tracking in scenarios that require an SOS button and occasional audio monitoring.

## Why Choose This Tracker with Plaspy

The AvtoFon E‑Mayak IP is a purpose‑built Plaspy compatible tracker when you need long‑term, low‑maintenance monitoring combined with discrete installation and robust alarm features. Its SMS‑centric reporting and protocol options allow Plaspy to ingest location and event data without relying on a manufacturer‑hosted server, while the accelerometer, SOS and remote control channel provide tangible anti‑theft and immobilizer functionality. For fleet management, telemetry and real‑time tracking, the E‑Mayak IP adds dependable battery life and sealed protection to Plaspy’s dashboards and alerts.

Note on connectivity and integrations: the unit does not include Bluetooth sensors, and AGPS is not supported. Plaspy can still integrate the E‑Mayak IP’s SMS coordinate messages and protocol outputs for mapping, alarm routing and reporting. For fuel monitoring or additional BLE sensor telemetry, pair Plaspy with dedicated sensor modules or a different tracker model that explicitly supports those interfaces.

