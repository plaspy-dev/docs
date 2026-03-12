---
slug: /xirgo/xg37
id: xg37
sidebar_label: XG37
sidebar_class_name: menu_item_tracker
---
# Xirgo - XG37

![XG37](./tracker.webp)

The XG37 is a rugged fleet vehicle telematics GPS tracker designed for professional fleet management and compliance workflows. A proven predecessor to the LX40, the XG37 delivers full CANBUS telemetry, instant geofence notifications, and an SDK for custom scenarios — all packaged for seamless integration as a Plaspy compatible GPS tracker for real-time tracking and operational visibility.

Built for fleets that require reliable location, vehicle data and secure transmission, the XG37 supports LTE Cat M1 \(with 2G fallback\) or LTE Cat 1 \(with 3G UMTS/HSPA and 2G fallback\) depending on the model. Its MQTT-based data transfer and TLS 1.2 support make it straightforward to stream location and CANBUS telemetry into Plaspy for live monitoring, reporting and compliance checks.

## Key Highlights

- Plaspy compatible GPS tracker: designed to feed real-time tracking and telemetry into Plaspy for fleet management and reporting.
- Full CANBUS data access: capture engine, fuel and diagnostic signals where available for richer telemetry and fuel monitoring.
- Secure, lightweight telemetry: MQTT-based data transfer with TLS 1.2 for encrypted, low-latency communications.
- Remote tachograph download: supports remote tachograph data retrieval to simplify driver hours and compliance workflows.
- Instant geofence notifications: configurable alerts for route compliance, yard entry/exit and anti-theft monitoring.
- Flexible power options: optional batteries \(1800 mAh, 850 mAh, 210 mAh\) to support backup operation or varying installation needs.
- SDK and custom algorithms: built-in SDK enables unique scenarios and device-side algorithms to reduce data noise and support edge logic.

## How It Works with Plaspy

Integration with Plaspy is optimized for fleets that need real-time tracking, CANBUS telemetry and compliance data in one platform. The XG37 pushes GPS position and vehicle data using MQTT, and with TLS 1.2 the device secures the channel between tracker and Plaspy. The device’s SDK allows you to tailor message formats or trigger device-side rules so Plaspy receives only the events and telemetry you need.

- Real-time location and telemetry updates: GNSS position sent to Plaspy for mapping and live monitoring.
- CANBUS telemetry \(engine/ignition/fuel where available\): vehicle diagnostics and fuel monitoring data can be forwarded to Plaspy for analysis.
- Geofence and event alerts: instant geofence notifications arrive in Plaspy for route compliance and anti-theft awareness.
- Remote tachograph downloads: tachograph data can be collected and delivered to Plaspy for compliance and reporting.
- Secure transport: MQTT protocol with TLS 1.2 protects telemetry in transit to Plaspy servers.
- Custom scenarios via SDK: implement device-side logic \(e.g., smart sampling, driver event detection\) that feeds tailored telemetry into Plaspy.
- Immobilizer / accessory control where supported: can integrate with vehicle interfaces to support immobilizer workflows or external accessories when deployed with the appropriate wiring and vehicle support.

## Technical Overview

| Connectivity | LTE Cat M1 with 2G fallback, or LTE Cat 1 with 3G UMTS/HSPA and 2G GSM fallback \(model-dependent\) |
| --- | --- |
| Bands | Varies by model — consult manufacturer or device label for regional band support |
| Power & Battery | Optional battery configurations: 1800 mAh, 850 mAh or 210 mAh \(model-dependent\) |
| Interfaces | Full CANBUS data, numerous vehicle interfaces and I/O; remote tachograph data download supported; SDK for custom integrations |
| GNSS | Integrated GNSS engine and GNSS antenna for position and heading |
| Bluetooth | Not specified in available device description — consult product documentation for BLE sensor support |
| Remote Management & Security | MQTT-based data transfer protocol; supports TLS 1.2. SDK enables device-side scenarios and algorithms. |
| Form Factor | Vehicle telematics unit designed for fleet installations; predecessor to LX40 |
| Certifications | IEC, CE/RED, E-Mark E24, TRA, SASO, ICASA, ANRT, OSTST, ANATEL |

## Use Cases

- Fleet management and route optimization — real-time tracking in Plaspy combined with CANBUS telemetry to improve utilization and reduce idle time.
- Regulatory compliance and driver hours — remote tachograph downloads streamline audits and driver log maintenance.
- Anti-theft and geofence enforcement — instant geofence alerts and live position data in Plaspy help detect unauthorized movement and trigger rapid response.
- Telemetry-driven maintenance and fuel monitoring — feed CANBUS fuel and engine data into Plaspy to identify inefficiencies and plan preventive service.

## Why Choose This Tracker with Plaspy

The XG37 is a practical choice for operators who need a Plaspy compatible GPS tracker that balances full vehicle telemetry, compliance features and secure telemetry transport. Its CANBUS capabilities and remote tachograph download reduce administrative overhead, while the MQTT/TLS stack keeps data delivery efficient and secure. The device SDK and optional battery choices make the XG37 flexible for different fleet scenarios, from long-haul trucks to urban delivery vehicles.

By pairing the XG37 with Plaspy you gain reliable real-time tracking, enriched telemetry \(engine, ignition and fuel where available\), and a configurable platform for alerts and reports. For fleets focused on operational visibility, regulatory compliance and anti-theft monitoring, the XG37 offers a mature telematics foundation that integrates cleanly into your Plaspy workflows.

