---
slug: /neomatica/adm500/features
id: adm500-features
sidebar_label: Features
title: Neomatica - ADM500 Features
sidebar_class_name: menu_item_tracker
description: Public features and Plaspy compatibility of the Neomatica ADM500 GPS tracker for fleet telemetry and sensor monitoring
keywords:
  - Neomatica ADM500 features
  - ADM500 Plaspy compatibility
  - Neomatica ADM500 GPS tracker
  - ADM500 multi constellation GNSS
  - ADM500 LTE tracker
  - ADM500 BLE sensors
  - ADM500 fuel monitoring
  - ADM500 vehicle tracking
  - ADM500 telemetry
  - ADM500 anti theft
---

# Neomatica - ADM500 Features

This page describes the public feature context for using the Neomatica ADM500 with Plaspy. It highlights the tracker capabilities that are relevant when integrating the device into Plaspy for live tracking, telemetry, and operational monitoring without presenting private or device management instructions.

The ADM500 includes multi constellation GNSS positioning, cellular connectivity, dual SIM support, a backup battery, and a broad set of wired and wireless sensor interfaces. Exact feature availability and behavior can vary depending on firmware version, hardware revision, installation method, and how the manufacturer implements specific functions.

## Feature Overview

The ADM500 is a compact professional tracker designed for vehicles and assets that need persistent location accuracy and flexible telemetry. When used with Plaspy, the device sends location, sensor data, and event messages to support mapping, reporting, and operational workflows.

- Multi constellation GNSS for improved position accuracy and stable tracking across environments.
- Cellular connectivity with dual SIM slots for redundant network coverage and continuous telemetry.
- Broad sensor support including wired fuel sensors, BLE peripherals, 1-Wire temperature probes, and RS-485 devices.
- Backup battery and on-device route storage to preserve data during power interruptions and maintain historical tracking.
- Multiple digital and analog I O channels for ignition detection, pulse counting, and remote control outputs.

## Core Features of Neomatica - ADM500

- Multi constellation GNSS support for GPS GLONASS BDS and Galileo positioning.
- LTE and legacy cellular connectivity with dual nanoSIM slots for redundant operation.
- Built in backup battery for autonomous operation during power loss and on device memory for extensive route logging.
- Wired sensor interfaces including analog and pulse inputs plus RS 485 support and 1 Wire temperature probes.
- Bluetooth Low Energy support for configuration and up to multiple BLE sensors and beacon reporting.
- Multiple I O channels including ignition input and open collector outputs for remote control scenarios.
- Security features such as a three axis accelerometer and signal jamming detection for tamper and movement awareness.
- Remote management options including OTA firmware updates, Bluetooth updates, and configuration via platform or tools.

## How These Features Work with Plaspy

Plaspy receives standardized location and telemetry packets from the ADM500 so operators can monitor vehicles and assets in real time and review historical records. Plaspy automatically detects tracker protocols and can accept device data over the common reporting port using TCP or UDP as configured.

- Live GPS coordinates and route traces displayed on Plaspy maps for real time location awareness.
- Event driven messages such as ignition on off, movement alerts, and tamper notifications shown in dashboards and event logs.
- Sensor telemetry from analog inputs RS 485 fuel devices BLE sensors and 1 Wire temperature probes available for monitoring and reports.
- Historical playback of routes and stored records for post trip analysis using the device memory when cellular coverage was interrupted.
- Remote configuration and command workflows supported so Plaspy can help manage device settings notifications and firmware state where device and platform tools permit.

## Typical Use Cases

- Fleet tracking for trucks vans and mixed vehicle fleets requiring continuous positional and operational visibility.
- Anti theft and security monitoring using movement detection jamming alerts and remote control outputs.
- Temperature controlled transport monitoring with BLE sensors and 1 Wire temperature probes for cargo condition oversight.
- Fuel monitoring and consumption analytics using wired or wireless fuel sensors and RS 485 fuel devices.
- Long haul or intermittent coverage scenarios where dual SIM redundancy and onboard storage preserve continuity.
- Stationary asset monitoring that benefits from battery backed operation and BLE sensor inputs.

## Feature Availability Notes

- Exact telemetry fields and sensor counts depend on the ADM500 firmware version and hardware revision supplied by the manufacturer.
- Some interfaces and sensor behaviors can vary by regional product variants and installation wiring, which affects what Plaspy receives.
- Remote management capabilities such as OTA updates depend on network conditions device configuration and manufacturer support.
- Verify supported protocol options and compatibility when integrating with Plaspy as device firmware changes can alter available features.
- For device specific electrical and installation details consult the official Neomatica documentation and installation guides.

## Why Use Plaspy with These Features

Combining the ADM500 with Plaspy gives organizations a unified view of location, sensor telemetry, and event history across their fleet and assets. Plaspy ingesting standardized tracker data allows operators to build dashboards alerts and reports that reflect ignition events fuel levels BLE sensor readings and route history for operational decision making.

To learn more about Plaspy and how the platform can receive and present ADM500 telemetry please visit https://www.plaspy.com. Device features firmware behavior and manufacturer implementation can change over time so verify the latest device specific details on the official Neomatica site https://neomatica.com/.
