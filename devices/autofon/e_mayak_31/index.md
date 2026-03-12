---
slug: /autofon/e_mayak_31
id: e_mayak_31
sidebar_label: E-Mayak 3.1
sidebar_class_name: menu_item_tracker
---
# AutoFon - E-Mayak 3.1

![E-Mayak 3.1](./tracker.png)

# AvtoFon E-Mayak 3.1

The AvtoFon E-Mayak 3.1 is a compact, autonomous GPS tracker designed for long-term, low-maintenance tracking where concealment and battery life matter. Built around a Quectel L10 GPS module and a Quectel M10 GSM module, the E-Mayak 3.1 communicates location and status via SMS. As a Plaspy compatible tracker, it is ideal for use cases that value on-demand real-time tracking and anti-theft recovery without continuous GPRS telemetry or subscription fees.

This small beacon is optimized for covert installations in vehicles, motorcycles, boats, containers, and on people or animals when extended autonomy is required. Its SMS control model and deep-sleep autonomy make it difficult to detect with radio scanners, while standard SMS map links and position messages allow integration with Plaspy workflows for visualization and reporting.

## Key Highlights

- Long autonomous operation — configurable life/sleep cycles with up to two years standby on 2 × CR123A batteries.
- Plaspy compatible for on-demand real-time tracking via SMS-based coordinate links and manual/SMS gateway integration.
- Covert, compact form factor \(70 × 50 × 21 mm\) for discreet placement in vehicles, containers, or personal tracking use.
- Resilient to temporary GSM/GPS jamming by staying in deep-sleep autonomy and resuming communication when signals return.
- Simple SMS control and PIN-protected configuration — no subscription fees, only outgoing SMS costs.
- GPS positioning plus extended LBS \(cell-tower\) fallback for improved coverage in marginal GPS conditions.
- Essential telemetry: battery discharge monitoring, temperature sensing, SIM balance alerts, and heartbeat \(life signal\) SMS.

## How It Works with Plaspy

The AvtoFon E-Mayak 3.1 communicates location and telemetry primarily via SMS. When used with Plaspy, these SMS messages can be integrated into Plaspy in one of two common ways: by forwarding the SMS content into Plaspy’s input channels \(manual entry or SMS-to-API gateway\) or by pasting the included map links/coordinates into the Plaspy platform for mapping and reporting. This makes the device Plaspy compatible for workflows that require on-demand, near-real-time location checks rather than continuous GPRS streaming.

- Real-time location and telemetry updates on demand via SMS \(GPS coordinates and two SMS map link formats\).
- Battery status and temperature telemetry reported by SMS for basic remote monitoring and maintenance alerts.
- Configurable heartbeat \("life signal"\) SMS to confirm device health on a schedule compatible with Plaspy reporting intervals.
- Security notifications — PIN protection, alerts on incorrect password attempts and owner number changes.
- Sequential SMS numbering and balance monitoring to help correlate messages in Plaspy logs and dashboards.

## Technical Overview

| Connectivity | GSM SMS control and reporting \(Quectel M10\). No GPRS or continuous IP monitoring. |
| --- | --- |
| Bands | GSM module: Quectel M10 \(specific network bands not listed in product brief\). |
| Power & Battery | 2 × CR123A 3.0V lithium batteries \(total listed capacity 1500 mAh\). No external power input or external battery option. |
| Interfaces | SMS-based control and configuration. No external I/O, no ignition input, and no immobilizer/relay outputs. |
| GNSS | GPS \(Quectel L10\) with a 25 × 25 × 4 mm GPS antenna. No AGPS support. |
| Bluetooth | No Bluetooth or BLE sensor support reported. |
| Remote Management | Configuration and commands via SMS. No firmware updates over GPRS or FOTA reported. |
| Form Factor | Compact screw case, 70 × 50 × 21 mm — suited for covert vehicle/asset placement. |
| Additional Sensors & Features | Temperature sensing, battery discharge monitoring, real-time clock, sequential SMS numbering, SIM balance monitoring, PIN protection. |

## Use Cases

- Covert vehicle and motorcycle anti-theft tracking — discreet placement with long battery life for recovery operations.
- Monitoring and recovery of boats or trailers where external power is not practical and long autonomous operation is required.
- Tracking valuable shipments and cargo containers during storage or transport where minimal detectability is desired.
- Long-term personal or animal tracking for temporary monitoring \(children, elders, pets\) where periodic location checks suffice.

## Why Choose This Tracker with Plaspy

The AvtoFon E-Mayak 3.1 is a pragmatic choice when you need a Plaspy compatible GPS tracker that prioritizes battery life, concealment, and simple SMS-driven workflows. Its strength is autonomous, low-detectability operation and straightforward integration into Plaspy workflows where on-demand location updates and SMS telemetry are acceptable. For asset owners and managers focused on anti-theft recovery and long-term unattended monitoring, E-Mayak 3.1 offers reliable position reporting without subscription fees or continuous data costs.

It is important to match capabilities to needs: the E-Mayak 3.1 does not provide continuous GPRS telemetry, audio monitoring, AGPS, built-in accelerometer, ignition input, remote immobilizer, fuel monitoring, or Bluetooth sensors. If your fleet management or telematics use case requires real-time continuous tracking, ignition/immobilizer control, fuel telemetry, or BLE sensor integration, consider those requirements before selecting this SMS-first device. For low-maintenance, high-autonomy scenarios — covert recovery, periodic telemetry, and SMS-based alerts — the AvtoFon E-Mayak 3.1 integrates cleanly with Plaspy workflows and provides a cost-effective, long-life tracking option.

