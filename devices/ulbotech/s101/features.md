---
slug: /ulbotech/s101/features
id: s101-features
sidebar_label: Features
title: Ulbotech - S101 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Ulbotech S101 OBD II BLE adapter and how it complements Plaspy tracking with vehicle telemetry
keywords:
  - Ulbotech S101
  - Ulbotech S101 features
  - S101 OBD II adapter
  - S101 BLE adapter
  - OBD II telemetry
  - Plaspy compatible tracker
  - vehicle diagnostics Plaspy
  - fuel monitoring S101
  - ELM327 BLE adapter
  - vehicle telemetry for Plaspy
---

# Ulbotech - S101 Features

This page provides a public feature overview for the Ulbotech S101 OBD II BLE adapter and how it is used with Plaspy. It describes practical capabilities, what the adapter delivers to Plaspy when paired with a BLE enabled smartphone, tablet, or PC, and how that telemetry complements GPS tracking inside the Plaspy platform.

Exact feature availability for any given S101 unit can vary by firmware version, hardware revision, installation type, and the manufacturer implementation present on a specific device. Customers and integrators should treat this page as a high level feature summary and consult manufacturer documentation for device specific behavior.

## Feature Overview

The Ulbotech S101 is a compact ELM327 based OBD II adapter that streams standard OBD PIDs over Bluetooth 4.0 BLE to Plaspy compatible apps. It is not a standalone GPS tracker but is intended to extend Plaspy tracking with engine diagnostics, fuel related telemetry, and denser live parameter graphs for richer reports and event detection.

- Forwards OBD II engine and sensor telemetry to Plaspy via a BLE connected device to enrich GPS tracking views
- Exposes common PIDs such as engine RPM, coolant temperature, fuel trims, MAF, throttle position and vehicle speed
- Supports broad OBD II protocol coverage for compatibility with many vehicles
- Designed for low power consumption so the adapter can remain plugged into the vehicle OBD port
- Compact form factor and cross platform support for Android, Windows, and legacy devices running Plaspy compatible apps

## Core Features of Ulbotech - S101

- ELM327 based OBD II adapter that interprets standard diagnostic PIDs
- Bluetooth 4.0 BLE link for live telemetry to smartphones, tablets, or PCs
- Broad OBD II protocol support including J1850 PWM VPW ISO 9141 2 ISO 14230 KWP2000 and ISO 15765 4 CAN
- Exposes engine RPM coolant temperature fuel trims MAF throttle position and vehicle speed for diagnostics and fuel analysis
- Low typical power draw suitable for continuous plug in use
- On demand read and clear of MIL Check Engine codes when supported by the connected app
- Ultra compact OBD II plug profile for minimal intrusion into the driver area

## How These Features Work with Plaspy

When the S101 is plugged into the vehicle OBD II port it streams standard OBD telemetry over BLE to a Plaspy compatible app running on a nearby device. Plaspy combines that telemetry with GPS location from the device or a Plaspy GPS tracker to present unified vehicle status and diagnostics alongside location information.

- Live telemetry appears in Plaspy as additional vehicle parameters alongside position data for richer situational awareness
- Diagnostic trouble codes can be surfaced in Plaspy interfaces and used to drive maintenance workflows when the app supports code read and clear
- Fuel related PIDs feed Plaspy reports for fuel monitoring and efficiency analysis
- Event driven alerts in Plaspy can incorporate OBD triggers such as high coolant temperature or fault codes alongside geofencing and movement events
- Denser live parameter graphs are supported because the S101 is optimized for faster updates over BLE

## Typical Use Cases

- Augmenting GPS position tracking with engine diagnostics for fleet maintenance prioritization
- On site code reading and clearing for technicians using Plaspy connected tools
- Fuel monitoring and driver coaching using fuel trims and related PIDs in Plaspy reports
- Live data graphing for mechanics and tuners requiring denser telemetry streams
- Anti theft and incident investigations by correlating engine activity with GPS location
- Supporting service operations with telemetry driven alerts and maintenance scheduling

## Feature Availability Notes

- Feature set can differ by S101 firmware release and manufacturer updates so capabilities may change over time
- Hardware revisions and regional variants may affect supported OBD II protocols and telemetry coverage
- Some functions such as clearing fault codes depend on the app implementation and vehicle support
- Installation context such as vehicle wiring and OBD II port access can affect connected device behavior
- Always verify which PIDs and diagnostic functions are supported on a specific vehicle before relying on them operationally

## Why Use Plaspy with These Features

Pairing the Ulbotech S101 with Plaspy is useful for organizations and technicians that need to combine location awareness with vehicle health data. The S101 supplies standard OBD II telemetry that Plaspy can present as live parameters, historical graphs, and event triggers to help teams manage maintenance, analyze fuel usage, and respond more effectively to fault conditions.

To learn more about Plaspy and how it can integrate with vehicle telemetry like the S101 visit https://www.plaspy.com. For the latest device specific feature details firmware notes and manufacturer guidance consult Ulbotech official documentation at http://www.ulbotech.com/ as features and implementation details can change over time.
