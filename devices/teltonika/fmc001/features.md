---
slug: /teltonika/fmc001/features
id: fmc001-features
sidebar_label: Features
title: Teltonika - FMC001 Features
sidebar_class_name: menu_item_tracker
description: Feature overview of the Teltonika FMC001 GPS tracker and how its OBD and telemetry functions integrate with Plaspy
keywords:
  - Teltonika FMC001 features
  - Teltonika FMC001 GPS tracker
  - FMC001 Plaspy
  - OBD II tracker
  - GNSS vehicle tracker
  - Bluetooth Low Energy tracker
  - accelerometer driving behavior
  - fleet management FMC001
  - vehicle telematics FMC001
  - FMC001 sleep modes
---

# Teltonika - FMC001 Features

This page provides a public feature overview for the Teltonika FMC001 and how those features are used with Plaspy. It summarizes the FMC001 capabilities that are relevant to fleet tracking and telematics inside Plaspy, and describes how the device can contribute to vehicle visibility, driver monitoring, and operational workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific technical details, configuration steps, and the latest firmware behavior consult the official Teltonika documentation.

## Feature Overview

The Teltonika FMC001 is an OBD centric GPS tracker designed for quick installation and vehicle telematics. It combines GNSS positioning, OBD II parameter reading, Bluetooth Low Energy connectivity, and driving behavior data from an onboard accelerometer to deliver practical information for fleet and vehicle managers.

- Reads OBD II parameters for vehicle diagnostics and fuel related metrics via the vehicle interface.
- GNSS based location reporting for real time position and route history inside Plaspy.
- Bluetooth Low Energy support for external sensors and beacons to extend functionality and asset association.
- Detailed accelerometer telemetry to detect driving events such as harsh events, towing, unplugging, and crash-like impacts.
- Multiple power management sleep modes to balance reporting frequency and device power usage.

## Core Features of Teltonika - FMC001

- OBD II parameter reading including fuel monitoring related metrics and engine RPM where available from the vehicle port.
- GNSS positioning for continuous and periodic location tracking.
- Bluetooth Low Energy connectivity for pairing sensors and beacons.
- Accelerometer based driving data enabling detection of overspeeding scenarios, excessive idling indicators, towing/unplugging signals, and crash detection events.
- Multiple sleep modes: GPS Sleep, Online Deep Sleep, Deep Sleep, and Ultra Deep Sleep for optimized power management.
- Ignition state detection using accelerometer input, external power voltage and engine RPM signals when available.
- Time synchronization options via GPS, NITZ, and NTP.
- Configuration and firmware update support through FOTA Web, FOTA, Teltonika Configurator (USB and Bluetooth), and the FMBT mobile application.

## How These Features Work with Plaspy

Plaspy ingests the FMC001 telemetry so fleet operators can see position, vehicle status, and event data from a central dashboard. Plaspy automatically detects the tracker protocol and accepts device connections configured for the Plaspy server, allowing the FMC001 to deliver its supported telemetry into maps, reports, and event views.

- Location updates and route history from the FMC001 appear in Plaspy mapping and tracking views for real time and historical playback.
- OBD II parameters reported by the device are available in Plaspy as vehicle diagnostics and operational metrics where the platform supports those fields.
- Driving events derived from accelerometer data (for example crash detection or towing alerts) surface as events in Plaspy for review and notifications.
- Sleep modes affect reporting cadence and can be reflected in Plaspy as reduced update frequency or offline intervals, helping operators understand device availability.
- Bluetooth Low Energy sensor associations from the device can be represented in Plaspy as linked sensor data or asset tags when configured.
- Plaspy supports standard device connectivity patterns and will accept FMC001 devices configured to send data to the Plaspy server domain; Plaspy also auto-detects tracker protocol details to simplify device onboarding.

## Typical Use Cases

- Fleet monitoring for light commercial vehicles using OBD II data and GNSS tracking for route and utilization oversight.
- Driver log books and behavior analysis using accelerometer events and OBD derived parameters.
- Car rental and leasing operations tracking vehicle location, ignition state, and basic diagnostics.
- Insurance telematics and usage based insurance workflows that rely on driving behavior analytics and mileage reporting.
- Towing and theft awareness via accelerometer detection and unplugging indicators.
- Asset association and proximity monitoring using Bluetooth Low Energy beacons and sensors.

## Feature Availability Notes

- Some OBD II parameters and fuel related readings depend on the vehicle make, model, and the OBD II data the vehicle exposes.
- Firmware version and hardware revision can change available functions, event detection thresholds, and power management behavior.
- Installation type and wiring (for example presence of external power or constant ignition feed) influence ignition detection and external voltage reporting.
- Bluetooth sensor behavior and supported beacon types may vary; pairing and sensor data handling is dependent on firmware and local configuration.
- Always verify how a particular feature is implemented for your device firmware and regional hardware variant by consulting manufacturer resources.

## Why Use Plaspy with These Features

Combining the Teltonika FMC001 with Plaspy gives organizations a practical path to centralized vehicle visibility, behavioral insights, and operational oversight. The FMC001 supplies position, OBD derived metrics, and accelerometer events that Plaspy can present in maps, reports, and event streams to support decision making and fleet workflows.

To learn more about how Plaspy can work with devices like the FMC001 visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer implementation details verify information at the official Teltonika website https://www.teltonika-gps.com/
