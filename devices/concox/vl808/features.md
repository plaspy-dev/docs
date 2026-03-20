---
slug: /concox/vl808/features
id: vl808-features
sidebar_label: Features
title: Concox - VL808 Features
sidebar_class_name: menu_item_tracker
description: Public overview of Concox VL808 GPS tracker features and how it integrates with Plaspy for reliable fleet tracking
keywords:
  - Concox VL808
  - VL808 features
  - Concox GPS tracker
  - VL808 GPS tracker
  - VL808 Plaspy compatibility
  - vehicle tracker VL808
  - fleet tracking VL808
  - VL808 multi GNSS
  - VL808 BLE 5.0
  - VL808 IP67
---

# Concox - VL808 Features

This page provides a public, feature-oriented overview of the Concox VL808 and how the device is used with Plaspy for fleet and vehicle tracking. It focuses on the practical capabilities you can expect to see on the Plaspy platform and how those capabilities support monitoring, reporting, and operational workflows.

Exact availability and behavior of particular functions can vary by firmware version, hardware revision, regional model, and installation choices. For device-specific details such as configuration procedures, compatibility with particular vehicle wiring, or the most recent firmware behavior, consult the manufacturer documentation or your installer.

## Feature Overview

The Concox VL808 is a hardwired LTE vehicle GNSS terminal designed for continuous vehicle visibility and integration with fleet platforms like Plaspy. It combines precise GNSS positioning, cellular connectivity, durable packaging, and flexible inputs so vehicle data and events are available for monitoring and automation.

- Reliable real time tracking over cellular networks with fallback for broader coverage
- Multi GNSS positioning with high accuracy for precise vehicle locations
- Rugged IP67 enclosure and wide input voltage range suited for vehicle installations
- Flexible I O and BLE support for sensors, ignition and door monitoring, and accessory pairing
- Onboard accelerometer for driving behavior and harsh event detection
- Offline logging and internal backup battery to preserve data during network gaps

## Core Features of Concox - VL808

- LTE Cat 1 connectivity with GSM fallback for consistent data transmission and real time updates
- Multi GNSS support including GPS, BDS and GLONASS with positioning accuracy under 2.5 m CEP
- BLE 5.0 support for accessory pairing and beacon or peripheral integrations
- Onboard accelerometer enabling telemetry and driving behavior events such as harsh acceleration or collision detection
- Wide vehicle power compatibility with internal LiPo backup battery to maintain short term operation when vehicle power is interrupted
- Multiple digital and analog inputs plus 1 Wire support to connect sensors, ignition or door signals
- Digital outputs to support accessory control and workflows that can be used for immobilization or remote control where configured
- Offline logging capacity to retain thousands of entries and sync to the platform when connectivity returns

## How These Features Work with Plaspy

When connected to Plaspy, the VL808 reports location, telemetry, and event data so operators can monitor fleets and respond to incidents. Plaspy ingests GNSS positions, I O changes, accelerometer events and BLE accessory data and makes them available in maps, histories, alerts, and reports.

- Live location and history feed based on multi GNSS fixes for route reconstruction and real time tracking
- Driving behavior and harsh event alerts derived from accelerometer telemetry to help assess safety and incidents
- Input state visibility for ignition, doors and analog sensors to enable trip segmentation, fuel monitoring, or battery health checks
- BLE accessory data and beacon presence shown as sensor inputs or proximity events for temperature monitoring, driver ID, or asset proximity workflows
- Offline log synchronization so events recorded during connectivity gaps are uploaded to Plaspy when the device reconnects
- Digital output control and event driven rules in Plaspy can be used together to implement response workflows based on tracker inputs

## Typical Use Cases

- Commercial fleet tracking and route monitoring with driver behavior insight and trip reports
- Vehicle anti theft monitoring and remote immobilization workflows when outputs are wired and configured
- Fuel and battery monitoring using analog inputs and wide voltage detection for operational oversight
- Insurance telematics and usage based programs using accelerometer events and trip histories
- Temperature or proximity monitoring for refrigerated cargo via BLE sensors and beacons
- Small vehicle or motorcycle installations where compact hardwired terminals and multi GNSS accuracy are required

## Feature Availability Notes

- Feature sets and supported bands can differ by hardware revision and regional model; check the model sticker or manufacturer documentation for exact radio bands
- Firmware version affects available functions and configuration options; some features may require a specific firmware release
- Physical installation and wiring determine which I O functions are available and how outputs behave in a vehicle
- BLE accessory behavior, peripheral support, and pairing procedures can vary with firmware and accessory models
- Offline logging capacity and position accuracy depend on GNSS reception conditions and device configuration

## Why Use Plaspy with These Features

Using the VL808 with Plaspy delivers a practical combination of rugged hardware and platform visibility. The device supplies precise positioning, telemetry, and event streams while Plaspy translates that data into maps, alerts, reports, and rule driven workflows that help operators manage fleets, respond to incidents, and analyze operational performance.

To learn more about how Plaspy can work with Concox trackers visit https://www.plaspy.com. For the most current device specific information, firmware notes, and technical documentation consult the manufacturer at https://www.iconcox.com/ as implementations and feature behavior can change over time.
