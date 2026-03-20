---
slug: /arusnavi/integral_4/features
id: integral_4-features
sidebar_label: Features
title: Arusnavi - Integral 4 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Arusnavi Integral 4 GPS tracker and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - Arusnavi Integral 4 features
  - Arusnavi Integral 4 GPS tracker
  - Integral 4 Plaspy compatibility
  - Integral 4 GPS functions
  - Arusnavi GPS tracker features
  - Integral 4 telemetry capabilities
  - Integral 4 fleet tracking
  - Integral 4 BLE sensors
  - Integral 4 RS485 CAN support
  - Arusnavi vehicle monitoring
---

# Arusnavi - Integral 4 Features

This page provides a public, non-sensitive feature overview of the Arusnavi Integral 4 and how its capabilities are used with Plaspy for centralized monitoring, reporting, and fleet operations. It focuses on practical functionality relevant to Plaspy users and describes how the tracker’s telemetry, location, and event data can appear in the Plaspy platform.

Exact feature availability and behavior can vary by firmware revision, hardware variant, installation method, regional model, and manufacturer configuration. For device specific technical limits and the most recent details, consult the official Arusnavi documentation.

## Feature Overview

The Integral 4 is a compact GNSS tracker designed for constrained installations that need reliable real-time location plus flexible telemetry options. It combines multi-constellation positioning, cellular connectivity, BLE sensor support, and a variety of wired interfaces to feed vehicle and asset data into Plaspy for live tracking and historical analysis.

- Multi GNSS support for consistent position fixes across GPS GLONASS Galileo BeiDou and QZSS providing better coverage in varied conditions
- Dual SIM 2G GSM connectivity with internal antennas for simplified installation and continuous reporting
- Internal BLE capable of pairing with multiple sensors to extend telemetry for temperature proximity and auxiliary data
- Wired interfaces including USB 1-WIRE RS-485 CAN and optional UART RS-232 to collect vehicle and sensor telemetry
- Onboard black box logging of a large number of records to preserve history when cellular connectivity is interrupted
- Compact form factor and wide operating voltage range suited to vehicle and equipment installations

## Core Features of Arusnavi - Integral 4

- Multi constellation GNSS positioning supporting GPS GLONASS Galileo BeiDou and QZSS for reliable location data
- Dual SIM 2G GSM modem with internal antennas to help maintain connectivity in mobile environments
- Internal Bluetooth Low Energy with support for pairing multiple BLE devices for auxiliary telemetry
- Multiple wired interfaces including USB 1-WIRE RS-485 CAN and optional UART RS-232 depending on variant
- Onboard black box storage that preserves records locally and forwards them when connectivity returns
- Configurable discrete inputs and outputs plus an analog ADC input for event detection and control integration
- Enterprise power handling with a wide operating voltage range and internal backup battery options
- Compact low profile enclosure designed for installation in space constrained environments

## How These Features Work with Plaspy

Integral 4 transmits GNSS positions telemetry and discrete events to Plaspy where they become visible in dashboards alerts and historical reports. Plaspy automatically detects compatible tracker protocols and devices, and the Integral 4 can be configured to report to Plaspy’s monitoring server settings using common TCP or UDP options.

- Real time location updates from multi GNSS streams appear on Plaspy maps and route playback
- Telemetry from CAN and RS-485 connected sensors is forwarded into Plaspy for diagnostics and analytics
- BLE sensor readings paired with the device are ingested as auxiliary telemetry and shown alongside vehicle data
- Black box logs stored locally on the device are uploaded to Plaspy when the cellular link is restored to preserve continuity
- Discrete input and output events are available in Plaspy as triggers for alerts rules and operational workflows
- Plaspy supports configuring the monitoring server domain and protocol and automatically recognizes supported device protocols

## Typical Use Cases

- Fleet management and route history for trucks vans and light vehicles where compact installation is required
- Fuel and telemetry monitoring using RS-485 or CAN sensors to track consumption and sensor trends
- Passenger transport control integrating BLE beacons RFID or passenger counters for occupancy and operations visibility
- Security and anti-theft monitoring using ignition and door event detection together with remote alerting
- Asset and equipment telemetry for trailers containers or mobile machinery needing flexible power and logging
- Remote diagnostics and scheduled maintenance workflows using vehicle bus and sensor telemetry

## Feature Availability Notes

- Feature sets can vary by hardware variant and factory configuration; some interfaces such as CAN or UART may be optional on specific models
- Firmware version affects supported functions and command sets; manufacturer firmware updates can add or change behavior
- Regional models may differ in cellular band support and regulatory approvals for 2G connectivity
- The number and type of supported BLE devices can depend on firmware and certified device lists provided by Arusnavi
- Installation choices and wiring may change which I O ports and sensors are available to the tracker

## Why Use Plaspy with These Features

Using the Integral 4 with Plaspy gives organizations a practical path to unify location and sensor data in a single monitoring platform. The combination of multi GNSS positioning flexible I O and BLE sensor support provides operators with the visibility needed for route management asset supervision and event driven alerts, while onboard logging reduces gaps in historical data when connectivity is intermittent.

If you want to learn more about how Plaspy can work with devices like the Arusnavi Integral 4 visit https://www.plaspy.com. For the most current device specific feature lists firmware notes and implementation details consult the manufacturer documentation at https://www.arusnavi.ru.
