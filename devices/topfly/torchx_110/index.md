---
slug: /topfly/torchx_110
id: torchx_110
sidebar_label: TorchX 110
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 110

![TorchX 110](./tracker.jpg)

The TorchX 110 \(4G Cat-1\) is a plug-and-play OBDII GPS tracker designed for fleets, usage‑based insurance \(UBI\) programs, and vehicle diagnostics. As a Plaspy compatible GPS tracker, TorchX 110 brings high-resolution real-time tracking, CAN bus telemetry, and BLE sensor support together in a compact OBD‑II form factor to simplify installation and accelerate deployment across mixed vehicle fleets.

Built for global cellular coverage and engineered for vehicle telematics, TorchX 110 delivers frequent position updates \(as often as every 3 seconds\), CAN‑level vehicle parameters \(ignition, VIN, true odometer, fuel level, and DTCs\), and onboard buffering for extended out‑of‑network operation. Integrating GNSS, Wi‑Fi positioning, and Bluetooth Low Energy 5.0, the unit provides robust location fixes in open sky and urban environments while enabling extended telemetry and cold‑chain monitoring through Bluetooth sensors and accessories.

## Key Highlights

- Plaspy compatible GPS tracker — plug-and-play OBDII connection for fast integration with Plaspy platforms and APIs.
- High-resolution real-time tracking — location updates as frequent as every 3 seconds for detailed route analysis and driver monitoring.
- Rich CAN bus telemetry — reads ignition status, VIN, true odometer, fuel level and Diagnostic Trouble Codes \(DTC\) over OBDII/CAN.
- Hybrid positioning — GNSS plus Wi‑Fi positioning and BLE for reliable fixes in urban canyons and indoor perimeters.
- Large offline buffer — stores up to 49,000 location points when the device is out of network coverage to prevent data loss.
- BLE 5.0 sensor support — connects to temperature/humidity sensors, door sensors and wireless relays for extended telematics and cold‑chain use cases.
- Vehicle safety features — crash detection with accident data collection, speeding alarms, ignition/power disconnection alerts and network jamming detection.
- Remote maintenance — FOTA support and USB debug port for firmware updates and remote device management.

## How It Works with Plaspy

When integrated with Plaspy, TorchX 110 streams position and vehicle telemetry to the Plaspy platform using standard transport options and delivers actionable events and reports. The device’s OBDII CAN data is parsed into rich telematics fields \(ignition, VIN, odometer, fuel level, DTCs\) while GNSS/Wi‑Fi/BLE positioning supplies precise location context. Plaspy reads these inputs to provide live dashboards, alerts, historical playback and analytical reports for fleet management and UBI use cases.

- Real-time location and telemetry updates via 4G LTE Cat‑1 \(with 2G fallback\) using TCP, UDP, MQTT or SMS transport.
- Ignition on/off and power disconnection alerts delivered immediately to Plaspy for anti‑theft and operational monitoring.
- Vehicle diagnostics and DTC forwarding for maintenance workflows, VIN identification and mileage verification.
- Crash detection and accident data collection forwarded to Plaspy for reconstruction and incident reporting.
- Bluetooth sensors and BLE accessory integration \(temperature, door, wireless relays\) for cold‑chain monitoring and auxiliary control inputs tied into Plaspy rules and alerts.

## Technical Overview

| Connectivity | 4G LTE Cat‑1 with fallback to 2G; TCP/UDP/MQTT/SMS data transport |
| --- | --- |
| Bands | 4G LTE Cat‑1 and 2G fallbacks \(specific regional band variants available\) |
| Power & Battery | Operating voltage 7 V to 32 V DC; internal Li‑Polymer backup battery 100 mAh \(3.7 V\) for disconnection alerts |
| Interfaces | Standard OBDII connector supporting ISO 15765, SAE J1939, ISO 14230 \(KWP2000\), ISO9141‑2 and SAE J1708; Nano SIM slot; USB port for debug/configuration; LED indicators |
| GNSS | All‑In‑One GNSS receiver \(GPS + BeiDou + Galileo + QZSS\); position accuracy under 2 m CEP in open sky; fast TTFF |
| Bluetooth | BLE 5.0 for connection to accessories and third‑party sensors |
| Remote Management | FOTA support for firmware updates and remote maintenance |
| Security | MD5 and AES128 options for data integrity and encryption; roaming controls |
| Form Factor | Compact OBDII plug design; dimensions 52.8 × 47.8 × 24.8 mm; weight 70 g |
| Environmental | Operating temperature –30°C to +80°C |
| Certifications \(Planned\) | CE, RCM, FCC, TDRA, NBTC, CITC and Anatel \(certification plans noted\) |

## Use Cases

- Fleet management — real‑time tracking, route replay and driving behavior monitoring to reduce fuel and operating costs.
- Usage‑based insurance \(UBI\) — accurate odometer, VIN and driving event telemetry to support risk‑based pricing and policy validation.
- Anti‑theft and security — ignition alerts, power disconnection notifications and crash detection for rapid incident response.
- Cold‑chain and asset monitoring — BLE temperature/humidity sensors and door sensors integrated with Plaspy for compliance and spoilage prevention.
- Vehicle diagnostics & maintenance — DTCs, fuel level and true odometer reporting to trigger preventive servicing and streamline repair workflows.

## Why Choose This Tracker with Plaspy

TorchX 110 is built to deliver dependable telematics data and seamless integration into the Plaspy ecosystem. Its plug‑and‑play OBDII form factor shortens installation time and reduces deployment complexity across large vehicle fleets, while 4G LTE Cat‑1 connectivity and extensive buffering ensure continuous data delivery and minimal gaps in tracking history. CAN bus access provides validated vehicle telemetry — ignition, VIN, odometer, fuel level and DTCs — that Plaspy can use for fleet management, UBI scoring, maintenance scheduling and anti‑theft workflows.

Combined with BLE 5.0 support for external sensors and accessories, FOTA for lifecycle management, and configurable security options \(MD5/AES128\), TorchX 110 provides a balanced solution for operators seeking accurate GPS tracker performance, comprehensive telemetry and easy Plaspy compatibility. Whether you need high‑frequency real‑time tracking, robust offline buffering, or expanded telemetry via Bluetooth sensors, TorchX 110 offers the key capabilities to scale your telematics and fleet management use cases.

