---
slug: /thingsys/j16
id: j16
sidebar_label: J16
sidebar_class_name: menu_item_tracker
---
# ThingSys - J16

![J16](./tracker.jpg)

The J16 is a compact, Plaspy compatible vehicle GPS tracker built around the SIMCOM 7670SA module. With 4G LTE \(CAT1\) connectivity and 2G fallback, the J16 delivers reliable real-time tracking and vehicle telemetry for fleet management, anti-theft monitoring, and general vehicle telematics. Two variants—J16A \(ACC detection and relay\) and J16B \(relay, microphone and SOS\)—let you choose the feature set that fits your deployment.

The device is optimized for easy integration with Plaspy: it communicates over TCP/IP and supports common tracking modes \(GPRS tracking and SMS polling\), defaulting to GT06/CRX3 protocols while offering optional JT808, Tianqin and Tianhe profiles via SMS. Its compact size, internal backup battery, motion/G-sensor and blind-area message storage make the J16 a practical choice for mixed fleets operating across cars, buses, trucks and motorcycles.

## Key Highlights

- Plaspy compatible 4G LTE \(CAT1\) GPS tracker with 2G fallback for broad cellular coverage and reliable real-time tracking.
- Two variants: J16A with ACC detection and relay control; J16B adds relay, built-in microphone and SOS for advanced monitoring and emergency signaling.
- Worldwide cellular bands \(LTE-FDD and GSM\) and TCP/IP communications for fleet management and telemetry reporting.
- Compact, low-weight form factor \(80 × 39 × 17 mm, 51 g\) with internal backup battery \(140–150 mAh\) to support short power-loss scenarios and anti-theft use cases.
- High-sensitivity GPS chip with fast hot-start \(≤2 s\) and robust cold-start performance \(avg ≤32 s\), location accuracy ≤30 m.
- Motion/G-sensor, sleep power mode for low energy consumption, and blind-area coverage with storage for up to 8,000 messages.
- Wide operating voltage \(DC 9V–90V\) suitable for cars, buses, trucks and motorcycles; optional relay accessories enable remote cut/restore \(immobilizer\) functions.

## How It Works with Plaspy

Integrating the J16 with Plaspy gives you continuous, actionable vehicle data in your Plaspy dashboard. The tracker sends positional and telemetry packets via TCP/IP or GPRS to Plaspy servers using standard protocols, allowing Plaspy to display live location, generate alerts, and store history for reporting. Plaspy supports the default GT06/CRX3 messages and can be configured to accept optional protocol profiles where needed.

- Real-time location and telemetry updates sent over TCP/IP \(GPRS\) for smooth tracking and mapping in Plaspy.
- ACC \(ignition\) detection—virtual and physical ACC inputs are supported—so Plaspy can report ignition on/off events and run business logic \(e.g., driver hours\).
- Blind-area coverage: the J16 stores up to 8,000 messages when out of coverage and forwards them to Plaspy once connectivity is restored.
- Remote immobilizer capability: relay control allows Plaspy to trigger cut/restore power actions when a relay accessory is fitted \(extra relay required\).
- Microphone and SOS \(J16B\): optional audio and emergency signaling events are reported to Plaspy for incident handling where available.
- Telemetry integration for fuel monitoring and other sensors when paired with vehicle CAN or external sensors—Plaspy can combine these inputs with J16 location data for richer fleet insights.
- Plaspy can correlate J16 data with other sources \(for example, Bluetooth sensor feeds managed separately\) to provide a comprehensive telematics view across your deployments.

## Technical Overview

| Connectivity | 4G LTE \(CAT1\) via SIMCOM 7670SA module; fallback to 2G GSM; TCP/IP, GPRS tracking and SMS polling supported |
| --- | --- |
| Bands | GSM850/900/1800/1900; LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66 |
| Power & Battery | Wide operating voltage DC 9V–90V; internal backup battery 140–150 mAh \(3.7V\) for short-term power-loss operation |
| Interfaces | Virtual and physical ACC \(ignition\) detection; relay control \(cut/restore requires extra relay\); optional microphone and SOS on J16B; relay control available on both variants |
| GNSS | High-sensitivity GPS chip; hot start ≤2 s, avg cold start ≤32 s; location accuracy ≤30 m |
| Protocols & Remote Management | Default GT06/CRX3 protocols; optional JT808, Tianqin, Tianhe via SMS; TCP/IP communications for cloud reporting |
| Storage & Sensors | Blind-area message storage up to 8,000 messages; built-in motion/G-sensor; sleep power mode for energy savings |
| Operating Range & Durability | Operating temperature -20°C to +55°C; compact form factor 80 × 39 × 17 mm; weight 51 g |

## Use Cases

- Fleet management and route monitoring: live tracking, ignition events and message history for route optimization and compliance reporting.
- Anti-theft and remote immobilization: Plaspy-controlled relay commands can cut or restore power \(with optional relay\) to immobilize stolen vehicles.
- Buses, trucks and motorcycles: the 9V–90V input range supports mixed-vehicle deployments across large fleets.
- Driver and vehicle telemetry: motion/G-sensor and ignition data feed into Plaspy for driver behavior analysis and event-based alerts.
- Blind-area logging: stores up to 8,000 messages when offline and forwards them to Plaspy for uninterrupted historical records.

## Why Choose This Tracker with Plaspy

The J16 is a practical, Plaspy compatible GPS tracker for organizations that need a compact, capable device with global cellular support and rugged vehicle voltage tolerance. Its CAT1 LTE performance with 2G fallback, quick positioning and blind-area message buffering ensure continuous real-time tracking and reliable telemetry delivery. Variant options \(J16A/J16B\) let you choose ACC detection, relay control, microphone and SOS features, while optional relay accessories enable remote immobilizer functions—key for anti-theft deployments.

When paired with Plaspy, the J16 becomes part of a scalable fleet management solution: Plaspy ingests GPS and telemetry data, triggers alarms for ignition or SOS events, supports fuel monitoring workflows when external sensors are integrated, and presents long-term reports for operational decisions. If you require Bluetooth sensors or additional BLE data, Plaspy can incorporate those feeds alongside J16 tracking data to deliver a complete telematics picture across vehicles and assets.

