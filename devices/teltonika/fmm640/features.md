---
slug: /teltonika/fmm640/features
id: fmm640-features
sidebar_label: Features
title: Teltonika - FMM640 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMM640 GPS tracker and how its capabilities map to Plaspy monitoring and fleet workflows
keywords:
  - Teltonika FMM640 features
  - Teltonika FMM640 GPS tracker
  - FMM640 capabilities
  - FMM640 Plaspy
  - vehicle tracking
  - fleet management
  - geofencing
  - tachograph DDD
  - fuel monitoring
  - driver behavior
---

# Teltonika - FMM640 Features

This page summarizes the public feature context for using the Teltonika FMM640 with the Plaspy platform. It focuses on the device capabilities you can expect to monitor and manage through Plaspy, and how those capabilities translate into practical visibility for fleet and asset operations.

Exact feature availability and behavior can vary by device firmware, hardware revision, installed peripherals, and how the unit is fitted and configured. Always verify device-specific details and the latest firmware behavior with the manufacturer documentation and your installer when planning a deployment.

## Feature Overview

The FMM640 is a professional tracker built for wide area cellular connectivity and extensive peripheral support. It is designed to deliver location, movement, and event data for a range of vehicle and asset applications while supporting modern low power wide area network technologies.

- Global cellular connectivity using LTE CAT M1 and NB IoT technologies for efficient data transfer over wide areas.
- Movement detection and accelerometer based event reporting for driving behavior, towing, and crash detection scenarios.
- Built-in support for geofencing, trip detection, odometer and offline tracking to maintain continuity of location history.
- Fuel and level monitoring options through multiple interfaces and compatible sensors for operational fuel oversight.
- Support for tacho DDD download and online tacho data to assist compliance and driver hours workflows.
- Wide peripheral compatibility including RFID, iButton, temperature sensors, CAN interfaces, BLE sensors, and third party modules.

## Core Features of Teltonika - FMM640

- LTE CAT M1 and NB IoT connectivity for efficient global telemetry transmission.
- Movement detection and accelerometer functionality for event detection such as towing and crash reporting.
- Geofencing modes with automatic and manual geofence support and trip detection for route tracking.
- Odometer and offline logging to preserve distance and location history when connectivity is interrupted.
- Fuel counter and multiple fuel sensor interfaces including analog and digital level sensor support.
- Tacho features including DDD file download and online tacho data handling for regulatory workflows.
- Wide peripheral and protocol support such as RFID, iButton, temperature sensors, CAN interfaces, BLE sensors, and integration modules.

## How These Features Work with Plaspy

Plaspy receives and normalizes the telemetry and events sent by the FMM640 so you can view location, movement, and peripheral-derived data in dashboards and reports. Plaspy automatically detects the tracker protocol and maps reported events to platform features for visibility and operational use.

- Location and movement events appear in Plaspy as live positions, history trails, and trip records for operational tracking.
- Geofence crossings and trip starts/stops are surfaced as events and can be used in alerts, reports, and workflow automation.
- Driver and vehicle behavior events derived from accelerometer movement detection (for example crash or towing alerts) can be reviewed in incident logs.
- Fuel and level data reported by compatible sensors are displayed as monitoring metrics and can be included in fuel reports and audits.
- Tacho DDD files and online tacho data reported by the device can be associated with vehicle records to support compliance workflows in Plaspy.
- Offline tracking and device logs allow Plaspy to reconstruct missed intervals when connectivity is restored.

## Typical Use Cases

- International logistics operations requiring low power wide area cellular connectivity and continuous tracking.
- Refrigerated transport and temperature sensitive cargo monitoring using 1-Wire temperature inputs and peripherals.
- Fleet fuel monitoring and odometer-based maintenance planning with fuel counters and odometer reporting.
- Driver behavior and safety oversight using movement detection, crash and towing alerts.
- Asset tracking in construction, agriculture, or mining where rugged peripherals and offline logging are important.
- Regulatory tacho data retrieval and storage for fleets that require driver hours and tachograph file management.

## Feature Availability Notes

- Feature availability depends on firmware version and hardware revision; some functions may require specific firmware or accessory modules.
- Peripheral support and sensor compatibility vary by installed modules and wiring at time of installation.
- Regional device variants and cellular band support can affect connectivity options such as LTE CAT M1 or NB IoT availability.
- Certain advanced features such as DDD download, CAN data access, or third party integrations require proper configuration and authorized peripherals.
- For installation and configuration details consult the official Teltonika documentation and your integration installer.

## Why Use Plaspy with These Features

Pairing the Teltonika FMM640 with Plaspy provides a practical way to turn device telemetry into operational insight. Plaspy consolidates location, event, sensor and tacho data into unified views and reports that help fleets manage routes, monitor fuel and vehicle health, and respond to incidents more quickly.

To learn more about Plaspy and how it can display and manage data from the Teltonika FMM640 visit https://www.plaspy.com. For the most current device specific specifications, firmware behavior, and peripheral compatibility, please verify details with the manufacturer at https://www.teltonika-gps.com/.
