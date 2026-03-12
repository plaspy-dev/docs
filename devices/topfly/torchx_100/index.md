---
slug: /topfly/torchx_100
id: torchx_100
sidebar_label: TorchX 100
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 100

![TorchX 100](./tracker.png)

The TorchX 100 by TorchX is a Plaspy compatible, plug-and-play OBDII GPS tracker engineered for reliable real-time tracking and deep vehicle telemetry. Designed for heavy and light duty vehicles, the TorchX 100 delivers frequent location updates, full CAN BUS data reading \(including ignition status, VIN, true odometer, fuel level and diagnostic trouble codes\), and ELD support for hours-of-service compliance — all fully reportable inside Plaspy for fleet management and passenger transport operations.

Built on a global 4G Cat-4 platform with fallback to 3G/2G, the TorchX 100 is optimized for fleet management, anti-theft monitoring, and value-added services like onboard WiFi and Bluetooth sensors. Its compact OBDII form factor makes installation simple, while robust telemetry and safety features \(driving behavior detection, network jamming alerts, and large local data buffering\) ensure continuous tracking and compliance when used with Plaspy’s dashboards and alerting workflows.

## Key Highlights

- Plug-and-play OBDII GPS tracker with full CAN BUS reading for VIN, true odometer, fuel level, ignition status and DTCs — ideal for accurate telemetry and diagnostics.
- Plaspy compatible for real-time tracking, scheduled reporting and fleet management workflows; supports location updates as fast as every 3 seconds.
- Global 4G LTE Cat-4 connectivity with automatic fallback to 3G/2G and buffering of up to 49,000 location points when offline.
- Built-in dual-band WiFi hotspot \(5 GHz + 2.4 GHz\) to provide passenger internet access and additional on-board services.
- ELD functionality for RODS/HOS compliance — automatic driving-time recording that integrates into Plaspy reporting for regulatory workflows.
- High-accuracy Qualcomm Gen 8C GNSS \(GPS/GLONASS/Beidou\) with autonomous position accuracy under 2 m \(CEP-50\) and fast TTFF performance.
- BLE 4.2 support for external Bluetooth sensors and extensive safety features, including driving behavior detection and network jamming detection.

## How It Works with Plaspy

The TorchX 100 transmits vehicle location and CAN BUS telemetry to Plaspy using standard protocols \(TCP/UDP/MQTT/SMS\), enabling real-time tracking, alerts, and historical reporting. Plaspy ingests location points, ELD logs and diagnostic data to present actionable dashboards for fleet managers, dispatchers, and compliance officers.

- Real-time location and telemetry updates \(configurable, up to every 3 seconds\) with automatic buffering of up to 49,000 points when out of network coverage.
- Ignition on/off alerts, true odometer and VIN reporting for accurate asset identification and ignition-based workflows.
- Fuel monitoring and diagnostic trouble code \(DTC\) reporting via CAN BUS for telemetry-driven maintenance and fuel monitoring use cases.
- ELD \(electronic logging device\) logs for RODS/HOS compliance visible within Plaspy reports and driver-hours tracking.
- BLE 4.2 integration for Bluetooth sensors and beacons; device health and WiFi hotspot state are also reported for operational visibility.

## Technical Overview

| Connectivity | 4G LTE Cat-4 with fallback to 3G/2G \(global Cat-4 platform\) |
| --- | --- |
| Bands | Extensive LTE FDD/TDD bands plus legacy WCDMA/GSM \(global band support\) |
| GNSS | Qualcomm Gen 8C receiver; GPS, GLONASS, Beidou |
| Accuracy & TTFF | Autonomous position accuracy &lt; 2 m \(CEP-50\); TTFF cold &lt;29s, warm &lt;27s, hot &lt;1s |
| OBDII / CAN BUS | OBDII connector with full CAN data reading; supports ISO 15765, SAE J1939, ISO 14230 KWP2000, ISO 9142-2, SAE J1708 |
| Interfaces | Internal LTE/GNSS/BLE/WiFi antennas; Nano SIM slot; USB for debug/configuration/FOTA; indicator LEDs; internal buzzer |
| Bluetooth | BLE 4.2 for external sensors/beacons |
| WiFi | Built-in hotspot 5 GHz + 2.4 GHz for passenger internet access |
| Power & Battery | Operating voltage 7–32 V DC; Li-Polymer 100 mAh backup battery \(supports limited operation/last-gasp reporting\) |
| Protocols & Security | TCP, UDP, MQTT, SMS; optional security: MD5/AES128 |
| Storage & Buffering | Local buffer up to 49,000 location points when out of network coverage |
| Environmental & Physical | Dimensions 52.8 x 47.8 x 24.8 mm; weight 73 g; operating temperature -30°C to +80°C |
| Features | ELD support for RODS/HOS, driving behavior detection \(harsh acceleration/braking/turning, crash detection\), DTC read/erase, scheduled reporting, network jamming detection, data roaming control |

## Use Cases

- Fleet management: real-time GPS tracker and CAN telemetry to monitor routes, fuel usage, odometer, and driver behavior in Plaspy dashboards.
- Passenger transport and shuttle services: onboard WiFi hotspot and frequent location updates improve passenger experience and operational visibility.
- Car rental and shared mobility: VIN, true odometer and ignition reporting simplify check-in/check-out workflows and anti-theft monitoring.
- Regulatory compliance: ELD functionality provides RODS/HOS records for commercial drivers and integrates with Plaspy reporting for audits.
- Vehicle diagnostics and maintenance: DTC reporting and fuel monitoring help prioritize repairs and control operating costs.

## Why Choose This Tracker with Plaspy

The TorchX 100 offers a compelling balance of accurate GPS tracking, deep CAN BUS telemetry and fleet-grade connectivity that integrates smoothly with Plaspy for enterprise telematics. Its plug-and-play OBDII form factor reduces installation time while Qualcomm GNSS accuracy and fast TTFF deliver dependable real-time tracking for route optimization and anti-theft monitoring. Built-in ELD functionality, WiFi hotspot and BLE sensor support expand the device’s value beyond basic location — enabling fuel monitoring, driver-hours compliance, passenger connectivity and telemetry-driven maintenance.

When paired with Plaspy, managers get scalable, secure telemetry \(TCP/UDP/MQTT/SMS with optional MD5/AES128\), buffered offline data for continuity, and configurable alerts for ignition, DTCs, low battery, and jamming events. The result is a trustworthy GPS tracker that enhances fleet management, improves safety and simplifies compliance, while providing the extensibility to add BLE sensors and passenger services without extra in-vehicle gateways.

