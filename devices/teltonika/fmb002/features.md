---
slug: /teltonika/fmb002/features
id: fmb002-features
sidebar_label: Features
title: Teltonika - FMB002 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Teltonika FMB002 OBDII tracker and how its capabilities integrate with Plaspy
keywords:
  - Teltonika FMB002
  - Teltonika FMB002 features
  - FMB002 GPS tracker
  - FMB002 OBDII
  - Teltonika BLE OBDII
  - FMB002 fleet tracking
  - Teltonika FMB002 Plaspy
  - vehicle tracking FMB002
  - FMB002 firmware updates
  - OBDII vehicle data
---

# Teltonika - FMB002 Features

This page provides a public, features-oriented overview of the Teltonika FMB002 and how its capabilities are used with Plaspy. It focuses on practical, non-sensitive details about the device as an ultra small OBDII plug and play tracker and explains what telemetry and functions you can expect to surface in the Plaspy platform.

Exact availability and behavior of individual features can vary by device firmware version, hardware revision, installation method, and manufacturer implementation choices. For device configuration, advanced diagnostics, and the latest technical details refer to the official Teltonika documentation.

## Feature Overview

The FMB002 is an ultra small OBDII plug and play tracker designed to read vehicle data and report location and event information. Its compact form and OBDII connectivity make it straightforward to install on compatible light vehicles, while built in GNSS, cellular connectivity, and Bluetooth support expand how it can collect and relay data.

- Plug and play OBDII connection for direct access to vehicle onboard computer data
- GNSS positioning and cellular reporting for continuous location tracking
- Bluetooth Low Energy support for external sensors, beacons, and accessory connectivity
- Built in accelerometer enabling event detection such as crash, towing, or unplug events
- Multiple power and sleep modes to minimize impact on vehicle battery when idle

## Core Features of Teltonika - FMB002

- OBDII standard data reading for vehicle diagnostics and parameters accessible via the vehicle bus
- GNSS for position fixes and time synchronization
- GSM cellular connectivity for sending telemetry to a server
- Bluetooth Low Energy 4.0 for pairing sensors, beacons, and hands free peripherals
- CAN bus data reading capability for accessing additional vehicle network information
- Integrated accelerometer for motion and impact detection use cases
- Multiple sleep modes including GPS sleep and deeper power saving states to conserve vehicle power
- Support for firmware and configuration updates through Teltonika tools and Bluetooth

## How These Features Work with Plaspy

Plaspy receives the tracker reports and exposes location, event, and vehicle data in a unified fleet view. When the FMB002 is configured to report to Plaspy, the platform processes incoming messages and makes device-reported data available for monitoring and reporting.

- Real time and historical location tracking visible in Plaspy maps and trip logs
- Device-reported OBDII and CAN bus parameters shown as vehicle data fields when available
- Event visibility for accelerometer based alerts such as crash, towing, unplug, and excessive idling as reported by the device
- BLE sensor and beacon detections surfaced in Plaspy if the tracker forwards those events
- Firmware and configuration metadata reported by the device for inventory and maintenance tracking

## Typical Use Cases

- Fleet management for light commercial vehicles where quick OBDII installation reduces downtime
- Driver log book and trip tracking for mileage reporting and operational oversight
- Usage based insurance workflows that rely on vehicle data and event detection
- Car rental and leasing fleets requiring simple installation and remote monitoring
- Vehicle health and diagnostics monitoring by reading OBDII and CAN parameters
- Asset integrity monitoring using accelerometer events for towing or crash detection

## Feature Availability Notes

- Specific OBDII and CAN parameters available depend on the vehicle make, model, and OBDII implementation
- Bluetooth features and supported external sensors depend on firmware capabilities and how the device is configured
- Some event detection thresholds and sleep mode behavior can change between firmware versions or hardware revisions
- Installation method and wiring can affect which signals the device can access; plug and play OBDII access is generally simpler
- Always verify regional variants and firmware release notes for features that may differ by market

## Why Use Plaspy with These Features

Using the Teltonika FMB002 with Plaspy gives organizations a way to combine compact OBDII based vehicle telemetry with centralized monitoring and reporting. Plaspy ingests the device reports so fleets can view location, trip histories, and device‑reported vehicle data alongside alerts and events for better operational oversight.

To learn more about Plaspy and how the platform works with devices like the FMB002, visit https://www.plaspy.com. For the most current device features, firmware behavior, and manufacturer details confirm specifications on the official Teltonika website https://www.teltonika-gps.com/
