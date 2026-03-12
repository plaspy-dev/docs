---
slug: /topfly/torchx_310
id: torchx_310
sidebar_label: TorchX 310
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 310

![TorchX 310](./tracker.jpg)

The TorchX 310 is a plug-and-play OBD-II GPS tracker built for easy fleet deployment and individual vehicle use. Plaspy compatible out of the box, the TorchX 310 delivers CAN-bus telemetry, real-time tracking, BLE sensor support and built-in driver alerts so fleet managers get precise location, vehicle diagnostics and behavioral data without complex installation.

The compact device connects directly to the vehicle OBD-II port and reads VIN, true odometer, fuel level, diagnostic trouble codes \(DTC\), ignition status and other CAN parameters. With LTE Cat-M1 connectivity \(with NB2/2G fallback where applicable\), internal multi-constellation GNSS and BLE 5.0 for accessory pairing, the TorchX 310 provides reliable telemetry and secure reporting suitable for Plaspy-based fleet management, anti-theft workflows and usage-based insurance \(UBI\) programs.

## Key Highlights

- Plug-and-play OBD-II installation for fast rollouts and minimal downtime.
- Plaspy compatible for seamless real-time tracking, reporting and dashboarding.
- Direct CAN-bus reads of VIN, odometer, fuel level and DTCs for accurate telemetry.
- BLE 5.0 support to pair temperature sensors, door sensors, wireless relays and key fobs.
- LTE Cat‑M1 connectivity with NB2/2G fallback and worldwide band coverage for global fleets.
- High-frequency updates \(configurable down to every 3 seconds\) and 49,000 point buffer for reliable offline logging.
- Driver safety features with crash detection, harsh driving event monitoring and an internal buzzer for in-cab alerts.

## How It Works with Plaspy

When paired with Plaspy, the TorchX 310 sends vehicle GNSS and CAN-derived telemetry into your Plaspy instance using standard transport protocols. Plaspy ingests location, VIN and diagnostic data to produce live maps, automated reports and alerting workflows for fleet management, anti-theft monitoring and driver behavior analysis.

- Real-time location and telemetry updates \(configurable reporting intervals, down to 3 seconds\).
- Vehicle state: VIN, true odometer, fuel level and diagnostic trouble codes \(DTC\) from the CAN bus.
- Ignition status and driving behavior: harsh acceleration, harsh braking, sharp turning, speeding and crash events.
- Buffered data: up to 49,000 location points stored when out of network coverage and forwarded to Plaspy when connectivity resumes.
- BLE accessory integration: temperature sensors, door sensors, wireless relays and key fobs for extended telemetry and remote control scenarios.
- Secure transports: TCP/UDP/MQTT/SMS reporting with MD5 and AES128 encryption options to protect telemetry in transit.

## Technical Overview

| Connectivity | 4G LTE Cat‑M1 with NB2/2G fallback \(where applicable\); TCP/UDP/MQTT/SMS reporting |
| --- | --- |
| Bands | Worldwide band coverage \(regional band support varies by model\) |
| GNSS | Internal GNSS supporting GPS, BeiDou, Galileo and QZSS; internal antenna |
| Bluetooth | BLE 5.0 for pairing external sensors, wireless relays and key fobs |
| Power & Battery | Operating voltage 7–32 V DC; internal Li‑Polymer backup battery 100 mAh for disconnection alerts |
| Interfaces & Protocols | Plugs into OBD-II; supports legislated OBDII/CAN protocols \(ISO 15765, SAE J1939, ISO 14230/KWP2000, ISO9142-2, SAE J1708\); nano SIM slot; USB for debugging/configuration |
| Data & Reporting | Configurable reporting intervals \(as frequent as 3 seconds\); up to 49,000 GPS point buffer; encryption options MD5 and AES128 |
| Indicators & Ports | LED indicators for network, diagnostics and GNSS; mini USB port for debugging; nano SIM slot |
| Safety & Monitoring | Crash detection, driving behavior monitoring \(harsh acceleration/braking/turning\), speeding and network-jamming alerts; internal buzzer for driver warnings |
| Form Factor & Environment | Dimensions 52.8 × 47.8 × 24.8 mm; weight 70 g; operating temperature -30°C to +80°C; storage -40°C to +85°C |

## Use Cases

- Fleet management: plug-and-play GPS tracker for vehicle location, fuel monitoring and CAN-based diagnostics in commercial fleets.
- UBI and driver behavior: capture harsh driving events, speeding and crash detection for usage-based insurance or driver coaching programs.
- Anti-theft and tamper alerts: disconnection alerts via backup battery and network-jamming detection help protect high-value vehicles.
- Cold-chain and asset monitoring: BLE sensors for temperature and door status integrated with vehicle telemetry for refrigerated transport.
- Remote relay control and access: pair wireless relays or key fobs via BLE to enable external immobilizer or remote control workflows when required.

## Why Choose This Tracker with Plaspy

Choosing the TorchX 310 as a Plaspy compatible GPS tracker delivers a practical mix of vehicle-level telemetry and modern connectivity. Its OBD-II integration gives you accurate VIN, odometer, fuel level and DTC information without additional wiring, while LTE Cat‑M1 connectivity and a large offline buffer maintain continuity for real-time tracking and fleet management. BLE 5.0 support extends telemetry with temperature and door sensors or wireless relays for immobilization and access control, and the internal buzzer provides immediate in-cab warnings to help reduce reckless driving.

For operations running Plaspy, the TorchX 310 offers dependable data flows \(TCP/UDP/MQTT/SMS\), encryption choices \(MD5, AES128\) and over-the-air firmware updates to keep devices secure and up to date. That combination makes the TorchX 310 a reliable, scalable choice for organizations seeking a compact GPS tracker that balances CAN-bus diagnostics, real-time tracking, anti-theft alerts and BLE sensor integration under a Plaspy-enabled management platform.

