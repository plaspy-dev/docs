---
slug: /neomatica/adm333
id: adm333
sidebar_label: ADM333
sidebar_class_name: menu_item_tracker
---
# Neomatica - ADM333

![ADM333](./tracker.png)

The ADM333 v2 is an ultra-compact, Russian-made GPS tracker designed for vehicles and stationary assets that need reliable Plaspy compatible real-time tracking and telemetry. The modernized 2021 revision combines features from the ADM333 and ADM333BLE lines, bringing Bluetooth Low Energy sensor support, robust GNSS performance and multi-network cellular connectivity into a tiny form factor for fleet management, anti-theft protection and asset telemetry.

Designed for straightforward integration with telematics platforms, the ADM333 v2 sends GPRS telemetry to popular servers \(Wialon, BARS‑GLONASS, Pilot, Navixy and others\) and uses an open protocol for third-party integration — making it easy to add to Plaspy-compatible deployments. Its built-in battery, jamming detection and broad peripheral support \(BLE sensors, RS‑485, 1‑wire, analog inputs and an external immobilizer\) deliver a practical balance of real-time tracking, fuel monitoring and remote control in a compact package.

## Key Highlights

- Plaspy compatible real-time tracking via GPRS and open protocol — quick integration with telematics servers and Plaspy-based workflows.
- Ultra-compact form factor \(55 × 49 × 20 mm, 39 g\) with built-in antennas and internal 250 mAh battery for up to three hours autonomous operation.
- Comprehensive telemetry: GNSS location, three-axis accelerometer movement detection, driver identification and jamming-detection alerts.
- Broad sensor ecosystem — Bluetooth Low Energy 4.0 \(up to 5 BLE sensors\), 1‑wire DS18B20 support, RS‑485 for Modbus/ADM20/CanLog devices and multiple fuel sensor options.
- Dual nanoSIM cellular modem \(GSM 850/900/1800/1900\) with GPRS Multi-slot Class 12 for stable data uplink and remote firmware updates over GPRS or Bluetooth.
- Low-power operation for long-term vehicle installations: nominal current ~30 mA \(average\) with a maximum draw up to 200 mA at 12 V.
- Flexible configuration and management: Windows/Android configurator, SMS commands, Bluetooth setup and server-side configuration.

## How It Works with Plaspy

The ADM333 v2 transmits GNSS position and telemetry over GPRS using an open protocol, so Plaspy can ingest location, status and sensor data in real time. Integration is straightforward: the device can be configured to send packets to Plaspy’s endpoint or to an intermediary telematics server. Plaspy-compatible deployments will benefit from location updates, event-driven alerts and historical route data stored on the device when connectivity is intermittent.

- Real-time location and telemetry updates \(GNSS coordinates with up to 3 m accuracy in 95% of operating time\).
- Ignition and analog input status for engine on/off events and integration with fleet workflows.
- Fuel monitoring support — up to three wired or wireless fuel-level sensors and RS‑485 fuel sensor connectivity.
- Remote immobilizer control — compatible with the ADM33 wireless relay for anti-theft and immobilization actions.
- Bluetooth sensors and beacons — BLE 4.0 supports temperature, humidity, light, tilt and Hall sensors; sequential reading of BLE beacons with a queue of 20 tags.
- Event alerts — accelerometer-triggered movement alarms, jamming detection and driver identification events forwardable to Plaspy for automated responses.

## Technical Overview

| Model | ADM333 v2 |
| --- | --- |
| Manufacturer | Russian-made \(ADM family\) |
| Connectivity | GSM/GPRS \(GPRS Multi-slot Class 12\) |
| Bands | GSM 850 / 900 / 1800 / 1900 |
| SIM | 2 × nanoSIM \(dual‑SIM\) |
| GNSS | GNSS sensitivity −167 dBm, 132 channels, ~3 m accuracy \(95% operating time\) |
| Sensor Interface | Bluetooth Low Energy 4.0 \(up to 5 BLE sensors\); 1‑wire \(up to 8 DS18B20 + 1 i‑button\); RS‑485 \(Modbus/ADM20/CanLog\) |
| Analog Inputs | 2 analog inputs \(including ignition\) |
| Power & Battery | +8…+45 V supply; built-in 250 mAh battery \(~3 hours autonomy\) |
| Current Consumption \(12 V\) | Up to 200 mA \(max\), ~30 mA \(average\) |
| Memory | Up to 63,000 route records onboard |
| Accelerometer | 3‑axis accelerometer for movement/event detection |
| Bluetooth Beacons | Sequential reading, queue size 20 tags |
| Firmware & Configuration | Windows/Android configurator, SMS commands, Bluetooth updates and remote updates over GPRS |
| Interfaces & Peripherals | RS‑485 \(multi-device\), 1‑wire, analog I/O, support for ADM33 immobilizer relay |
| Dimensions & Weight | 55 × 49 × 20 mm; 39 g |

## Use Cases

- Fleet management — GPS tracker for trucks, delivery vans and public transport with ignition monitoring, driver identification and route memory for reliable telemetry.
- Anti-theft & immobilization — remote immobilizer support \(ADM33\) and jamming detection to reduce vehicle theft risk and enable remote shutdown workflows through Plaspy.
- Fuel monitoring & telemetry — connect wired or wireless fuel sensors \(including RS‑485 devices\) to capture fuel levels and reduce loss or theft.
- Cold chain and environmental monitoring — BLE temperature sensors or 1‑wire DS18B20 probes for temperature telemetry on refrigerated trailers and stationary assets.
- Asset tracking for mixed fleets — compact, low-cost GPS tracker for agricultural machinery, stationary equipment and auxiliary assets requiring real-time location and event alerts.

## Why Choose This Tracker with Plaspy

The ADM333 v2 offers a compact, cost-effective option for Plaspy compatible deployments that require robust real-time tracking, telemetry and peripheral flexibility. Its open protocol and GPRS uplink make integration predictable and fast, while BLE and RS‑485 support expand telemetry options for fuel monitoring, temperature sensing and CAN/Modbus devices. Built-in battery backup, jamming detection and a sizeable onboard route buffer ensure continuity of data even during short power interruptions or temporary loss of cellular coverage.

For fleet operators and integrators, the ADM333 v2 balances low power consumption with rich I/O and sensor options, enabling Plaspy-driven workflows for route optimization, anti-theft immobilization, fuel control and condition monitoring — all from a compact module that’s easy to install. Manufacturer-listed retail price: 6,900 RUB \(see manufacturer page for current pricing and availability\).

