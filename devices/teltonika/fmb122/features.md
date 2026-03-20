---
slug: /teltonika/fmb122/features
id: fmb122-features
sidebar_label: Features
title: Teltonika - FMB122 Features
sidebar_class_name: menu_item_tracker
description: Overview of Teltonika FMB122 tracker features and Plaspy compatibility for fleet tracking BLE sensors 1-Wire and dual SIM resilience
keywords:
  - Teltonika FMB122
  - FMB122 features
  - Teltonika FMB122 GPS tracker
  - FMB122 BLE sensor support
  - FMB122 1-Wire
  - FMB122 dual SIM
  - FMB122 Plaspy
  - Teltonika fleet tracking
  - FMB122 GNSS antenna
  - FMB122 CAN adapter
---

# Teltonika - FMB122 Features

This page provides a public overview of the Teltonika FMB122 features as they relate to use with Plaspy. It describes the practical capabilities you can expect when integrating the FMB122 into a Plaspy deployment and highlights how the device’s telemetry and sensor inputs are commonly used in fleet management and anti theft workflows.

Exact feature availability and behavior depend on device firmware, hardware revision, installation choices, and manufacturer implementation. Because Teltonika publishes multiple variants and updates, confirm feature details for your specific unit and firmware before deployment.

## Feature Overview

The Teltonika FMB122 is a compact 2G GPS tracker targeted at vehicle fleet and asset tracking where reliable GSM connectivity is acceptable. It focuses on delivering location updates and supporting a small ecosystem of sensors and identification interfaces that extend its usefulness beyond GPS position alone.

- Real time GPS position reporting for fleet tracking and asset visibility
- Dual SIM cellular support to improve connection resilience and reduce roaming exposure
- Bluetooth Low Energy support for external sensors and beacon integration
- 1-Wire interface for RFID iButton style identification and compatible 1-Wire sensors
- Optional external GNSS antenna to improve satellite reception in difficult installations

## Core Features of Teltonika - FMB122

- 2G GSM based cellular telemetry with dual SIM capability for failover and cost control
- GNSS positioning with support for an optional external antenna to enhance reception
- Bluetooth Low Energy support for integrating compatible wireless sensors and beacons
- 1-Wire interface for RFID iButton identification and compatible 1-Wire temperature sensors
- Compact vehicle focused form factor suitable for discreet installations
- Compatibility with Teltonika management utilities such as FOTA WEB and configurator tools
- Support for accessory ecosystem including external antennas, power cables, and CAN adapter compatibility where required
- Real time telemetry oriented toward fleet management and anti theft monitoring

## How These Features Work with Plaspy

When configured to report to Plaspy, the FMB122 sends GNSS positions and supported sensor inputs to the platform so operators can monitor location and events in near real time. Plaspy automatically detects common tracker protocols and accepts connections from standard Teltonika devices, making onboarding straightforward for compatible units.

- GNSS position updates show in Plaspy for live location, trip history, and map visibility
- BLE sensor readings and beacon events can be captured and presented as sensor values or alerts in Plaspy when the device and sensors are installed together
- 1-Wire inputs such as RFID iButton IDs and compatible 1-Wire temperature sensors are reported to Plaspy for driver identification logs and environmental monitoring
- Dual SIM operation helps maintain a continuous telemetry stream to Plaspy during roaming or coverage changes
- Device configuration and firmware updates can be managed using Teltonika tools in parallel with Plaspy monitoring for operational continuity

## Typical Use Cases

- Fleet tracking for route oversight, dispatch coordination, and location based visibility
- Anti theft monitoring with continuous location reporting and sensor driven tamper or movement awareness
- Driver or operator identification using RFID iButton for driver logs and accountability
- Cold chain or asset condition monitoring using 1-Wire temperature sensors and BLE environmental sensors
- Service vehicle tracking where compact installation and accessory support are required
- Asset tracking for high value items that benefit from BLE and 1-Wire integrations

## Feature Availability Notes

- Feature sets can vary by device hardware revision and firmware version; verify the capabilities present in your specific unit before deployment
- BLE and 1-Wire functionality require appropriate external sensors and correct wiring or accessory installation
- Support for CAN data or other vehicle bus integration depends on optional adapters and the specific accessory set used with the device
- External GNSS antenna support improves reception in difficult mounts but requires appropriate antenna hardware and routing
- Some FMB122 variants or regional models may be marked End of Life on manufacturer pages while still remaining functional for existing deployments

## Why Use Plaspy with These Features

Using the Teltonika FMB122 with Plaspy gives organizations a straightforward path to consolidate location and sensor telemetry into a single monitoring and reporting platform. Plaspy turns position updates, BLE sensor inputs, and 1-Wire identification events into operational insights, alerts, and historical records that help teams respond faster and maintain oversight.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer details verify the official Teltonika documentation at https://www.teltonika-gps.com/ since features and implementations can change over time.
