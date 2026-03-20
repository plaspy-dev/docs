---
slug: /itriangle/ts101_basic_4g/features
id: ts101_basic_4g-features
sidebar_label: Features
title: iTriangle - TS101 Basic 4G Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the iTriangle TS101 Basic 4G tracker and how its capabilities integrate with Plaspy for fleet tracking and telemetry
keywords:
  - iTriangle TS101 Basic 4G features
  - iTriangle TS101 Basic 4G GPS tracker
  - TS101 Basic 4G Plaspy compatibility
  - iTriangle GPS tracker features
  - TS101 Basic 4G capabilities
  - TS101 Basic 4G functions
  - vehicle tracking TS101
  - fleet management TS101 Basic
  - TS101 4G telemetry
  - Plaspy compatible trackers
---

# iTriangle - TS101 Basic 4G Features

This page provides a public feature summary for the iTriangle TS101 Basic 4G and explains how its capabilities are used with Plaspy for vehicle telematics, asset monitoring, and fleet oversight. It focuses on user-facing features and practical value when the device is integrated with Plaspy platform workflows and dashboards.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation wiring, and manufacturer implementation. The descriptions below reflect the device capabilities reported by the manufacturer and how those capabilities typically map into Plaspy, but you should confirm specifics against official iTriangle documentation for your device variant.

## Feature Overview

The TS101 Basic 4G is a compact vehicle tracker built for mixed fleets. It combines LTE Cat 1 connectivity with multi GNSS reception and local data storage to provide continuous location and telemetry feeds. Onboard power tolerances and short range wireless support allow installation in a wide range of vehicles while maintaining visibility during transient power events.

- Real time GNSS positioning using GPS, GLONASS, and BeiDou for improved fix reliability in challenging environments.
- LTE Cat 1 cellular connectivity for continuous telemetry and location updates to Plaspy.
- Wide 9–90V DC input range plus an internal backup battery to preserve tracking during primary power loss.
- Onboard edge storage that caches tracking records when coverage is unavailable and uploads when connectivity returns.
- BLE 5.0 support for short range sensors and local provisioning.
- Configurable I O and optional RS485 and CAN interfaces to integrate vehicle signals and external sensors.

## Core Features of iTriangle - TS101 Basic 4G

- Multi GNSS receiver supporting GPS, GLONASS, and BeiDou for wider satellite visibility.
- LTE Cat 1 cellular modem for reliable data transport to cloud platforms such as Plaspy.
- Wide input voltage range 9–90V DC to suit diverse vehicle electrical systems.
- Internal backup battery to maintain basic tracking when main power is removed.
- BLE 5.0 for accessory connectivity and local configuration tasks.
- Onboard persistent storage (approx 16 MB) for offline logging of tracking records.
- Configurable digital and analog I O with optional RS485 and CAN expansion for vehicle telemetry inputs.
- Support for OTA FOTA firmware updates and multiple configuration channels for remote management.

## How These Features Work with Plaspy

When connected to Plaspy, the TS101 Basic 4G streams location and telemetry so fleet managers can monitor vehicle position, status, and events in near real time. Plaspy receives GNSS fixes and device-reported signals, associates them with the vehicle record, and preserves offline records uploaded from the device once connectivity is restored.

- Real time location and trajectory plotting in Plaspy using GNSS fixes reported by the device.
- Telemetry fields such as ignition state, analog sensor readings, and digital inputs are reflected as device events or telemetry points in the Plaspy interface.
- Offline logs stored on the device are automatically uploaded and reconciled into history when network coverage returns, preserving continuity in Plaspy.
- BLE connected accessories and short range sensors can be correlated with location history to enrich Plaspy reports.
- Remote firmware and configuration updates help maintain consistent behavior across a fleet when managed through supported remote channels.

## Typical Use Cases

- Fleet location tracking for route monitoring and dispatch across mixed electric and conventional vehicles.
- Anti theft workflows using digital outputs to control immobilizer relays together with Plaspy alerts and status monitoring.
- Fuel and vehicle telemetry collection via analog inputs, 1 Wire or optional CAN for consumption analysis and anomaly detection.
- Cargo and asset monitoring augmented by BLE sensors for short range condition monitoring.
- Offline resilient tracking for assets that pass through coverage gaps, with automatic sync to Plaspy when online.
- Scalable remote device management and firmware maintenance for fleet deployments.

## Feature Availability Notes

- Specific features such as optional CAN or RS485 interfaces may depend on the purchased hardware variant or accessory options.
- Function behavior and available telemetry fields can change between firmware revisions; firmware level affects which features are exposed.
- Installation wiring and vehicle integration choices determine which I O and sensor inputs are active in a given deployment.
- Regional cellular band support and certification vary by regional device variants; confirm supported bands for your market with the manufacturer.
- For full and current technical specifications consult official iTriangle documentation and release notes.

## Why Use Plaspy with These Features

Using the TS101 Basic 4G with Plaspy gives organizations a straightforward way to centralize vehicle position, status, and event data into a single operational view. Plaspy captures GNSS positions, I O events, and offline records from the device, enabling timeline reconstruction, alerting, and reporting across a mixed fleet without requiring bespoke integrations.

To learn more about Plaspy and how it supports devices like the TS101 Basic 4G, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and variant information, please verify specifications on the manufacturer website https://www.itriangle.net/ as features and firmware behavior can change over time.
