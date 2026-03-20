---
slug: /teltonika/fmu130/features
id: fmu130-features
sidebar_label: Features
title: Teltonika - FMU130 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of Teltonika FMU130 and how its tracking capabilities integrate with Plaspy for vehicle monitoring and fleet use
keywords:
  - Teltonika FMU130
  - FMU130 features
  - Teltonika FMU130 GPS tracker
  - FMU130 Plaspy compatibility
  - FMU130 fleet tracking
  - Teltonika FMU130 functions
  - FMU130 accelerometer
  - FMU130 sleep modes
  - FMU130 fuel monitoring
  - FMU130 configuration methods
---

# Teltonika - FMU130 Features

This page provides a public feature overview for the Teltonika FMU130 and explains how those capabilities are used when the device is paired with Plaspy. The focus is on operational features, event scenarios, and practical ways the tracker can contribute to location awareness and fleet operations inside Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installed accessories, and how the device is configured during installation. For device specific technical details and the latest firmware notes consult the official Teltonika documentation.

## Feature Overview

The FMU130 is a compact real time tracking terminal designed for vehicle and asset monitoring with GNSS and 3G/GSM connectivity, built in antennas, a backup battery, and a flexible set of inputs and outputs. Its onboard sensors and supported scenarios provide event detection and driver or vehicle behavior monitoring that can be surfaced in fleet platforms like Plaspy.

- Real time GNSS position reporting combined with cellular connectivity for continuous tracking.
- Integrated backup battery to maintain reporting and event detection during power interruptions.
- Configurable digital, analog, negative, and impulse inputs plus digital outputs for external device control and status monitoring.
- Built in accelerometer and a selection of scenario driven features for motion based events such as crash detection, towing detection, excessive idling, and over speeding detection.
- Multiple power saving sleep modes to balance reporting frequency and battery life for different installation needs.

## Core Features of Teltonika - FMU130

- GNSS location tracking paired with 3G/GSM connectivity and internal antennas for compact installation.
- Backup battery to support operation when external power is removed.
- Configurable I O including digital inputs, analog inputs, impulse inputs, negative input, and digital outputs.
- Onboard accelerometer supporting motion related scenarios such as crash detection and towing detection.
- Scenario engine with built in scenarios including Green Driving, Over Speeding detection, GNSS Fuel Counter, Excessive Idling detection, Immobilizer, iButton Read Notification, Unplug detection, Auto Geofence and Manual Geofence, Trip scenarios, and more.
- Multiple sleep modes including GPS Sleep, Online Deep Sleep, Deep Sleep, and Ultra Deep Sleep to optimize power consumption.
- Flexible configuration and update methods including FOTA Web, FOTA, Teltonika Configurator via USB or Bluetooth, and the FMBT mobile application; also supports SMS and GPRS commands for configuration, event control, DOUT control, and debugging.
- Time synchronization options via GNSS, NITZ, and NTP and support for fuel and vehicle data collection through LLS Analog, LV CAN adapter LV CAN200, ALL CAN300, CAN CONTROL, and OBDII dongle options where available.

## How These Features Work with Plaspy

Plaspy collects position and event reports from compatible trackers and automatically detects the tracker protocol to integrate incoming data into monitoring dashboards. When an FMU130 is connected to Plaspy, its telemetry and configured scenarios translate into visible items and events within the platform.

- GNSS positions and movement events appear on Plaspy maps and in historical route logs for fleet oversight.
- I O states and digital input events reported by the device are presented as inputs or status indicators inside Plaspy for remote visibility.
- Scenario driven alerts such as over speeding, excessive idling, crash or towing detection become events or notifications that can be used in rules and reporting workflows.
- Fuel monitoring and CAN or OBDII sourced data are available in Plaspy when the FMU130 is configured to report those inputs, enabling consumption and vehicle status visibility.
- Power and sleep mode behavior affects reporting cadence and availability inside Plaspy and should be configured according to operational needs to balance battery life and real time visibility.

## Typical Use Cases

- Fleet management and real time vehicle location tracking for logistics operators.
- Car rental and shared vehicle monitoring including trip logging and unplug detection.
- Taxi and public transport tracking with incident and idling detection.
- Preventive monitoring for towing and crash events for roadside response.
- Fuel level and vehicle data monitoring when used with supported CAN adapters or OBDII dongles.
- Remote device configuration and firmware updates to maintain updated behavior across a vehicle fleet.

## Feature Availability Notes

- Feature availability depends on firmware version and device hardware revision; not all scenarios or inputs may be present on every unit.
- Some capabilities require optional peripherals such as CAN adapters or OBDII dongles to provide CAN or engine RPM based data.
- Sleep modes and reporting cadence should be configured to match installation power sources and reporting requirements to ensure consistent visibility.
- Regional cellular variants and local network compatibility can affect connectivity and should be verified for the intended deployment area.
- Always confirm exact behavior and supported commands by reviewing the official manufacturer documentation for the device and firmware revision.

## Why Use Plaspy with These Features

Using the FMU130 with Plaspy provides a centralized view of location, motion events, and input states so operations teams can monitor vehicle fleets, respond to incidents, and analyze driver or vehicle behavior. Plaspy surfaces reported scenarios and I O states as events and status indicators that support alerts, reporting, and operational workflows.

To learn more about how to use Plaspy with compatible devices visit https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and manufacturer guidance please verify information at https://www.teltonika-gps.com/ since device features and implementation details can change over time.
