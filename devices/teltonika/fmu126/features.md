---
slug: /teltonika/fmu126/features
id: fmu126-features
sidebar_label: Features
title: Teltonika - FMU126 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMU126 tracker and how it integrates with Plaspy for vehicle tracking and telematics
keywords:
  - Teltonika FMU126 features
  - Teltonika FMU126 GPS tracker
  - FMU126 capabilities
  - FMU126 BLE sensors
  - FMU126 RS232 interface
  - FMU126 CAN adapter support
  - FMU126 fuel monitoring
  - FMU126 ignition detection
  - FMU126 Plaspy compatibility
  - vehicle tracking FMU126
---

# Teltonika - FMU126 Features

This page provides a public feature overview of the Teltonika FMU126 GPS tracker and explains how its capabilities map to Plaspy for real world vehicle tracking and telematics. The content focuses on user facing functions, practical uses in Plaspy, and which tracker capabilities are relevant for fleet and asset monitoring.

Exact feature availability and behavior can vary by device firmware, hardware revision, regional variant, installation choices, and manufacturer implementation. For the most current device specific details consult official Teltonika documentation and firmware release notes.

## Feature Overview

The FMU126 is a compact 3G capable tracker with integrated GNSS and Bluetooth and a set of interfaces for external peripherals. It is designed to support continuous position reporting, sensor integrations, and vehicle data collection for telematics providers.

- Real time GNSS positioning with 3G connectivity and fallback to 2G for broad network coverage.
- Bluetooth Low Energy support for external sensors and beacons to extend telemetry.
- RS232 interface and modes for connecting magnetic card readers and third party devices.
- Support for CAN adapter integration to capture vehicle bus data where adapters are used.
- Onboard conveniences like a +5V peripheral output and PCB buzzer to simplify installations.
- Long internal battery life suitable for continuous record collection intervals such as one second logging.

## Core Features of Teltonika - FMU126

- GNSS positioning combined with Bluetooth for flexible location and peripheral sensor support.
- 3G network connectivity with fallback to 2G for extended coverage.
- RS232 interface supporting multiple modes and external devices including magnetic card readers.
- BLE sensor and beacon support to capture additional telemetry and presence events.
- CAN adapter compatibility to bring vehicle bus data into telematics workflows.
- +5V output and integrated PCB buzzer to streamline peripheral power and installation feedback.
- Long battery operation that enables high frequency logging for short term deployments.
- Built in support for configuration, firmware update options, SMS and GPRS command handling, time synchronization, fuel monitoring, ignition detection, and configurable sleep modes and scenarios.

## How These Features Work with Plaspy

Plaspy receives and interprets the FMU126's location and telemetry, making that data available for real time monitoring, historical analysis, and event reporting. The platform automatically detects common tracker protocols and presents device state and events in a consistent interface.

- Position updates and movement history appear on Plaspy maps and timeline views for tracking and route reconstruction.
- BLE sensor and beacon events from the FMU126 can be surfaced as telemetry or custom attributes where supported by connected sensors.
- RS232 attached devices such as magnetic card readers can be represented in Plaspy as external inputs or event records when the device forwards those events.
- CAN adapter and fuel monitoring data can be mapped to Plaspy channels for fuel level, consumption indicators, or vehicle-specific metrics when provided by the device and adapter.
- Ignition state, sleep mode transitions, and battery or power events are shown as status indicators to support operational monitoring and alerts.
- Remote configuration and command capabilities available on the FMU126 (SMS, GPRS, or equivalent) can be used alongside Plaspy workflows where supported by the deployment.

## Typical Use Cases

- Fleet location tracking and compliance reporting for regulated transport operations.
- Driver identification and activity logging using RS232 connected card readers.
- Fuel monitoring and vehicle diagnostics where CAN adapter data is required.
- Short term asset or vehicle monitoring using the device internal battery and high frequency logging.
- Extending telemetry with BLE sensors for cargo conditions, presence detection, or proximity workflows.
- Integrating custom third party devices via RS232 for industry specific sensors or inputs.

## Feature Availability Notes

- Firmware version, hardware revision, and regional variants may affect which features are available or the exact behavior of features described here.
- Some capabilities such as CAN data capture, BLE sensor reading, or magnetic card reader support require additional accessories or adapters.
- Installation and wiring choices (for power, CAN adapters, and external devices) influence which functions are active and how the device reports to Plaspy.
- Manufacturer configuration options and supported command channels determine how remote configuration and updates are performed.
- Always review Teltonika product documentation and the device firmware changelog for the most accurate, up to date feature information.

## Why Use Plaspy with These Features

Using the FMU126 with Plaspy gives organizations a centralized way to visualize and act on location, sensor, and vehicle data. Plaspy brings together position history, event visibility, and telemetry channels so operators can monitor vehicle status, track assets, and integrate device-sourced events into operational workflows.

To learn more about how Plaspy supports trackers like the FMU126 visit https://www.plaspy.com. For the latest device specific technical details, firmware behavior, and manufacturer documentation consult Teltonika at https://www.teltonika-gps.com/ as features and implementations can change over time.
