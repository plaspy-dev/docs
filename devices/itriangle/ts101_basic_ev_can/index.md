---
slug: /itriangle/ts101_basic_ev_can
id: ts101_basic_ev_can
sidebar_label: TS101 Basic EV CAN
sidebar_class_name: menu_item_tracker
---
# iTriangle - TS101 Basic EV CAN

![TS101 Basic EV CAN](./tracker.png)

The TS101 Basic EV CAN is a compact, rugged telematics device designed for dependable vehicle tracking and data logging. Built for both electric vehicles and conventional fleets, the TS101 Basic EV CAN is Plaspy compatible and delivers real-time tracking, reliable telemetry, and offline logging to keep operations moving even in weak-network environments.

With a single-channel CAN interface, multiple I/O ports, BLE 3.0, and internal GNSS supporting GPS, GLONASS, Galileo and BeiDou, this unit is optimized for fleet management, anti-theft protection, and EV-specific telemetry. Its IP65-rated enclosure, wide 9–90V DC input range, and low-power design make the TS101 Basic EV CAN a practical choice for mixed fleets that require durable, easy-to-integrate Plaspy compatible trackers.

## Key Highlights

- Plaspy compatible real-time tracking with multi-constellation GNSS \(GPS, GLONASS, Galileo, BeiDou\) for accurate positioning.
- Single-channel CAN interface for EV and vehicle telemetry, enabling fleet management and diagnostic data collection.
- Compact, IP65-rated housing and wide 9–90V DC input for reliable operation across EVs and conventional vehicles.
- BLE 3.0 and internal antennas for short-range sensor connectivity and simplified installations.
- Robust offline capability with up to 6,000 data records stored locally to prevent data loss in poor coverage areas.
- Low-power sleep current \(\<15 mA\) and internal 500 mAh backup battery to preserve tracking during power interruptions.
- Multiple I/O \(1 analog in, 2 digital in, 1 digital out\) and accelerometer-based motion detection for anti-theft and event monitoring.

## How It Works with Plaspy

The TS101 Basic EV CAN integrates seamlessly with Plaspy to deliver continuous location updates, vehicle telemetry, and event-driven alerts. Data collected by the device — including GNSS location, CAN bus telemetry, I/O events and accelerometer motion — is transmitted to Plaspy via the cellular link. When network coverage is limited, the device buffers up to 6,000 records and uploads them automatically once connectivity is restored, ensuring no gaps in fleet management or anti-theft records.

- Real-time location and telemetry updates to Plaspy for live tracking and route replay.
- Vehicle status and event detection via CAN and digital inputs \(ignition/door/alarm states can be reported where configured\).
- Telemetry logging for EV metrics and conventional vehicle diagnostics through CAN data integration.
- Remote immobilizer or control actions can be implemented via the digital output when supported by your integration.
- Bluetooth sensors and beacons \(BLE 3.0\) for short-range telemetry such as driver identification, temperature sensors, or accessory sensors.

## Technical Overview

| Model | TS101 Basic EV CAN |
| --- | --- |
| Connectivity | Cellular \(GSM indicated by internal GSM antenna\), BLE 3.0, USB, SMS, TCP/IP |
| GNSS | GPS, GLONASS, Galileo, BeiDou \(internal GNSS antenna\) |
| CAN Interface | Single-channel CAN |
| Interfaces | 1 analog input, 2 digital inputs, 1 digital output, 1 debug-only RS232 |
| Power & Battery | Wide 9–90V DC input; internal 500 mAh backup battery; sleep mode \<15 mA |
| Storage | Up to 6,000 data records for offline logging |
| Enclosure & Durability | IP65-rated housing, operating temperature -25°C to +85°C |
| Alerts & Sensors | Tamper alerts, accelerometer-based motion detection |
| Firmware & Configuration | Configuration and updates via USB, SMS, TCP/IP, Bluetooth; OTA/FOTA supported |
| Dimensions & Weight | 96 mm × 84 mm × 31 mm; approximately 145 g |
| Antennas | Internal antennas for GSM, GNSS and BLE |

## Use Cases

- Fleet management for mixed EV and ICE vehicle fleets — monitor location, routes, and CAN-sourced telemetry for operational insights.
- Anti-theft and immobilization workflows — accelerometer motion alerts, tamper detection and digital-output-based remote control support rapid response.
- EV telemetry logging — capture CAN bus metrics and forward EV-specific data to Plaspy for battery and performance monitoring.
- Short-range sensor hubs — BLE connectivity enables driver ID, temperature monitoring, or accessory sensor data to be associated with vehicle records.
- Rugged field operations — IP65 rating and wide voltage support make the device suitable for commercial vehicles operating in harsh environments.

## Why Choose This Tracker with Plaspy

Choosing the TS101 Basic EV CAN for Plaspy integration gives fleets a balance of rugged hardware and flexible connectivity. Its CAN interface provides a direct path for EV and vehicle telemetry into Plaspy, while BLE and digital I/O expand sensor and control options such as driver identification or remote immobilizer workflows. The device’s offline storage, tamper detection, and low-power design reduce data loss and increase reliability for fleet management and anti-theft applications. With OTA/FOTA support and multiple configuration channels \(USB, SMS, TCP/IP, Bluetooth\), the TS101 Basic EV CAN is straightforward to deploy at scale and keep updated through Plaspy’s management tools.

