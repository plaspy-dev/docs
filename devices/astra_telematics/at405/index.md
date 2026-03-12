---
slug: /astra_telematics/at405
id: at405
sidebar_label: AT405
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT405

![AT405](./tracker.jpg)

The AT405 is a compact, IP65-rated GPS tracker and IoT telematics unit designed for moto-sharing and connected vehicle projects. Plaspy compatible out of the box, the AT405 combines LTE Cat 1 cellular communications, multi-constellation GNSS and onboard BLE to deliver reliable real-time tracking, vehicle telemetry and short-range Bluetooth sensor integration for fleet management and anti-theft workflows.

The AT405 was engineered for straightforward vehicle integration and low-power operation. With automotive connector options, CANBus access, digital inputs/outputs and a 510mAh backup battery, the AT405 provides a practical balance of capability and efficiency—making it a strong choice for operators that need Plaspy compatible hardware that supports remote monitoring, immobilization control and customizable reporting.

## Key Highlights

- Plaspy compatible GPS tracker with LTE Cat 1 cellular connectivity for reliable real-time tracking across supported networks.
- Multi-constellation GNSS \(GPS, Galileo, GLONASS and BeiDou\) with an internal 15mm antenna for improved positioning accuracy.
- Vehicle-grade integration via CANBus plus two digital inputs and two digital outputs for ignition monitoring and remote control functions \(e.g., immobilizer control\).
- Bluetooth Low Energy \(BLE\) for short-range connectivity to Bluetooth sensors and beacons—useful for proximity, access control or additional telemetry.
- Robust low-power design using an STM32L4 microcontroller and a 510mAh internal backup battery—around six days in low-power mode with 24-hour reporting on a 24V system.
- IP65 enclosure and a wide operating voltage range \(6.0V to 60.0V\) for flexible deployment across motorcycles, scooters and light vehicle fleets.
- Automotive connector options and downloadable datasheets, user guides and installation instructions to simplify fleet rollout and aftermarket installs.

## How It Works with Plaspy

The AT405 integrates with Plaspy to stream location, status and telemetry for real-time monitoring, alerts and historical reporting. Data from the onboard GNSS and vehicle interfaces is transmitted over LTE Cat 1 to Plaspy servers where it can be visualized, analyzed and acted upon. Plaspy-compatible reporting options and customizable payloads let you include the exact telemetry you need without custom firmware development.

- Real-time location and telemetry updates delivered over LTE Cat 1 for live map tracking and geofencing in Plaspy.
- Ignition and vehicle status monitoring via digital inputs and CANBus messages—supporting event-driven alerts and driver behavior analytics.
- Vehicle telemetry \(engine parameters, fuel level, diagnostic data\) accessible through CANBus where those messages are exposed by the vehicle.
- Remote immobilizer control and other actuator functions using the device's digital outputs for anti-theft workflows.
- Bluetooth sensors integration for proximity checks, temperature or accessory sensors through BLE—visible alongside GPS and CAN data in Plaspy dashboards.

## Technical Overview

| Connectivity | LTE Cat 1 \(4G\) with Micro SIM; internal GSM cellular antenna |
| --- | --- |
| Bands | Region-dependent LTE Cat 1 bands \(refer to product datasheet for supported regional band plans\) |
| Power & Battery | Operating voltage 6.0V–60.0V; internal 510mAh backup battery; ~6 days in low-power mode with 24‑hour reporting \(24V system\) |
| Interfaces | 2 × digital inputs, 2 × digital outputs, 1-Wire / Dallas interface, RS232 port, CANBus |
| GNSS | Multi-constellation GNSS: GPS, Galileo, GLONASS, BeiDou; internal GNSS antenna \(15mm\) |
| Bluetooth | Bluetooth Low Energy \(BLE\) for short-range sensors and beacons |
| Remote Management | Five-year warranty; ongoing system updates; hardware and reporting customization available; downloadable datasheets and installation guides |
| Processor & Efficiency | Low-power STM32L4 microcontroller for balanced performance and battery life |
| Form Factor & Durability | Compact IP65-rated enclosure with automotive connector options for fleet and OEM installations |

## Use Cases

- Fleet management for scooters and motorcycles: real-time tracking, route history and driver behavior monitoring via CANBus and accelerometer inputs.
- Anti-theft and immobilization: detect unauthorized movement with the MEMS accelerometer and remotely disable vehicles using digital outputs.
- Telemetry and fuel monitoring: collect engine and fuel-related CAN messages where available and surface them in Plaspy dashboards for efficiency programs.
- Last-mile and shared-mobility operations: BLE-enabled check-in/check-out, proximity sensing and short-range sensor integration for dockless or station-based services.
- Aftermarket retrofit: compact IP65 design and broad voltage range simplify installations into existing wiring looms using automotive connectors.

## Why Choose This Tracker with Plaspy

Choosing the AT405 for your Plaspy integration delivers a reliable, Plaspy compatible GPS tracker that balances real-time tracking, vehicle telemetry and practical installation features. The combination of LTE Cat 1 connectivity, multi-constellation GNSS, CANBus access and BLE provides the core building blocks for fleet management, anti-theft and connected vehicle services. With automotive connector options, a robust warranty, available documentation and no-cost reporting customization, the AT405 lowers integration friction and scales from small pilots to larger rollouts.

