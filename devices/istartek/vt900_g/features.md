---
slug: /istartek/vt900_g/features
id: vt900_g-features
sidebar_label: Features
title: iStartek - VT900-G Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the iStartek VT900-G GPS tracker and how it integrates with Plaspy for fleet tracking and vehicle security
keywords:
  - iStartek VT900-G features
  - iStartek VT900-G GPS tracker
  - VT900-G Plaspy compatibility
  - VT900-G features
  - vehicle tracking
  - fleet management tracker
  - OBD CANBUS tracker
  - fuel monitoring GPS
  - RFID vehicle tracker
  - real time tracking Plaspy
---

# iStartek - VT900-G Features

This page provides a public overview of the iStartek VT900-G features relevant to deployment with Plaspy. It summarizes the device capabilities that matter to fleet managers, rental operators, and vehicle security teams and explains how those capabilities map to monitoring and reporting inside Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installed peripheral options, and how the unit is integrated into a vehicle. For device-specific configuration, firmware details, and official technical limits please review the manufacturer documentation listed at the end of this page.

## Feature Overview

The VT900-G is a vehicle-grade GPS tracker designed to deliver consistent location, telemetry, and event reporting for fleet and security workflows. Its combination of GNSS positioning, cellular connectivity, onboard buffering, and multiple I/O options makes it suitable for continuous tracking, sensor integration, and recovery workflows where reliable reporting into Plaspy is required.

- High-sensitivity GNSS positioning with multi-constellation support for accurate location reporting to Plaspy.
- Cellular communications using 3G/2G networks to forward real-time location, telemetry, and alerts.
- Local flash memory to buffer coordinates and events during network outages and forward them to Plaspy when connectivity returns.
- Built-in interfaces including OBD/CANBUS support and RS232 for external peripherals such as RFID readers.
- Inputs for external sensors including optional ultrasonic or capacitive fuel sensors and temperature monitoring for cargo oversight.

## Core Features of iStartek - VT900-G

- Accurate GNSS positioning with support for GPS and Beidou for consistent fixes in varied environments.
- UMTS/HSDPA and GSM/GPRS cellular connectivity for broad network coverage and reporting.
- OBD/CANBUS diagnostics support to capture vehicle telemetry where available.
- Multiple external sensor and peripheral interfaces including RS232 for RFID/MSR integration.
- Internal flash memory buffer to store tracking records during connectivity loss and upload later.
- Digital and analog I/O for event detection, sensor inputs, and remote control actions.
- Extensive event and alarm set for driver behavior, security alerts, and operational monitoring.

## How These Features Work with Plaspy

When paired with Plaspy, the VT900-G delivers location fixes, vehicle telemetry, and configured events into the Plaspy platform for visualization, alerts, and reporting. Plaspy automatically detects compatible trackers and begins ingesting supported data so fleets can maintain continuous visibility.

- Live position updates and historical trip reconstruction in Plaspy dashboards using GNSS fixes reported by the device.
- Vehicle diagnostics and OBD/CANBUS data shown as telemetry fields or in reports when provided by the unit.
- Sensor and input events such as door or ignition status, temperature readings, and RFID access logs mapped to Plaspy alerts and event timelines.
- Buffered data upload ensures that coordinates and events collected offline are synchronized to Plaspy once the device regains network connectivity.
- Digital outputs available on the device can be used to trigger remote control actions and corresponding events can be recorded inside Plaspy.

## Typical Use Cases

- Fleet management and dispatch with real-time location, route history, and aggregated reports.
- Anti-theft monitoring and recovery workflows leveraging alerts and remote control outputs.
- Fuel monitoring and consumption oversight using OBD/CANBUS and optional external fuel sensors.
- Cold-chain and temperature-sensitive cargo tracking with external temperature inputs and alerts.
- Access control and driver identification using RS232 connected RFID or MSR readers.
- Rental vehicle tracking and audit trails for usage and incidents.

## Feature Availability Notes

- Some features require specific firmware versions or optional hardware modules; availability depends on the exact unit and configuration.
- OBD/CANBUS data depends on vehicle compatibility and how the device is connected to the vehicle diagnostics port.
- Optional fuel sensors and additional peripherals may be sold separately and require professional installation.
- Regional cellular band variants affect network coverage; verify the model variant for your deployment region.
- Always check the installed firmware release notes for supported event types and parameter names that Plaspy will display.

## Why Use Plaspy with These Features

Using the VT900-G with Plaspy provides a practical route to turn device-level telemetry and events into operational insights. Plaspy aggregates live location data, buffered history, diagnostics, and sensor events into a single view so operators can monitor fleets, respond to security events, and generate routine reports without needing to manually consolidate raw device output.

To learn more about how Plaspy can work with trackers like the VT900-G, visit https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer guidance please confirm details on the official iStartek website https://istartek.com/ as features and implementations can change over time.
