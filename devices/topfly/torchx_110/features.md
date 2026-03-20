---
slug: /topfly/torchx_110/features
id: torchx_110-features
sidebar_label: Features
title: TopFly - TorchX 110 Features
sidebar_class_name: menu_item_tracker
description: Overview of TorchX 110 features and how this TopFly OBDII tracker works with Plaspy for fleet tracking and telemetry
keywords:
  - TopFly TorchX 110 features
  - TorchX 110 GPS tracker
  - TopFly OBDII tracker
  - TorchX 110 Plaspy compatibility
  - CAN bus telemetry OBDII
  - BLE sensor support tracker
  - 4G Cat 1 vehicle tracker
  - high resolution real time tracking
  - vehicle diagnostics telemetry
  - offline buffering location storage
---

# TopFly - TorchX 110 Features

This page provides a public feature overview for the TopFly TorchX 110 and how its capabilities map to the Plaspy platform. It focuses on non sensitive, operational details that help fleet managers, telematics integrators, and technical evaluators understand what the device can deliver when used with Plaspy.

Exact feature availability and behavior vary by firmware version, hardware revision, regional variant and installation. Features listed here reflect the device description and common configurations; always confirm device specifics and current firmware behavior with the manufacturer and release notes prior to deployment.

## Feature Overview

The TorchX 110 is a plug‑and‑play OBDII telematics unit designed to deliver frequent location updates, vehicle CAN data, and support for Bluetooth sensors. Its compact OBDII form factor simplifies installation across mixed fleets while providing the telemetry needed for fleet management, usage based insurance, and diagnostics workflows.

- Plug and play OBDII installation for fast fleet deployment and minimal vehicle intrusion.
- High resolution real time tracking with updates as frequent as every 3 seconds for detailed route and behavior analysis.
- CAN bus telemetry including ignition state, VIN, true odometer, fuel level and Diagnostic Trouble Codes for maintenance and verification.
- BLE 5.0 support for external sensors such as temperature and door sensors to extend telematics use cases.
- Hybrid positioning using GNSS plus Wi Fi positioning and Bluetooth to improve fixes in urban and challenging environments.
- Large offline buffer to store many location points during out of network operation to prevent data loss.

## Core Features of TopFly - TorchX 110

- OBDII plug‑and‑play form factor designed for quick installation in compatible vehicles.
- 4G Cat‑1 cellular connectivity with fallback options for wide area coverage and frequent reporting.
- High frequency position reporting capable of updates as fast as every 3 seconds for detailed telemetry.
- CAN bus data access providing ignition, VIN, true odometer, fuel level and DTCs over the vehicle OBDII interface.
- BLE 5.0 accessory support enabling integration of temperature, humidity, door and similar sensors.
- Onboard buffering to retain location history during temporary loss of network connectivity.
- Crash detection and event collection to capture incident data for reconstruction and reporting.
- Remote maintenance features including FOTA and USB debug access for firmware updates and diagnostics.

## How These Features Work with Plaspy

When integrated with Plaspy, TorchX 110 streams location and vehicle telemetry into the platform so operators can monitor fleets, trigger alerts, and run reports. Plaspy automatically detects supported tracker protocols and presents data fields derived from the device’s CAN and positioning inputs.

- Real time locations and CAN telemetry appear in Plaspy dashboards and live maps for operational visibility.
- Ignition, VIN, odometer and DTCs parsed from CAN data can be used in Plaspy reports, maintenance rules and asset identification.
- BLE sensor values and accessory events can be surfaced as telemetry points and tied to Plaspy alerting rules.
- Crash and incident data forwarded into Plaspy enable event reconstruction, notifications and historical playback.
- Plaspy accepts device connections over standard transport options; the platform automatically matches the tracker protocol for seamless data ingestion.

## Typical Use Cases

- Fleet management with live tracking, route replay and driver behavior monitoring for operational efficiency.
- Usage based insurance workflows where accurate odometer, VIN and event telemetry support policy validation and risk scoring.
- Vehicle diagnostics and maintenance scheduling driven by DTC, fuel and odometer data.
- Anti theft and recovery workflows using ignition and power disconnection alerts combined with live tracking.
- Cold chain or asset condition monitoring using BLE temperature and door sensors integrated into telematics rules.
- Incident reconstruction and safety reporting using crash detection data and event playback.

## Feature Availability Notes

- Firmware differences can enable or restrict specific features; update state may affect telemetry fields and reporting frequency.
- Hardware revisions and regional cellular variants may change supported bands and fallback behavior; confirm regional compatibility for cellular coverage.
- OBDII protocol support can vary between vehicle makes and models; some CAN parameters may not be available on all vehicles.
- BLE accessory compatibility and sensor support depend on manufacturer firmware and accessory profiles.
- Manufacturer documentation and release notes should be consulted for the latest specifications, certifications and planned updates.

## Why Use Plaspy with These Features

Using TorchX 110 with Plaspy gives organizations a straightforward path from hardware to operational visibility. The OBDII form factor reduces installation time across large fleets while CAN telemetry and high frequency tracking give Plaspy the inputs needed for monitoring, maintenance workflows, and usage based analytics. BLE sensor support and offline buffering help extend telematics into auxiliary use cases such as cold chain monitoring and resilient data collection during connectivity gaps.

To learn more about how Plaspy supports TopFly devices and fleet telematics, visit https://www.plaspy.com. For the most current device specifications, firmware notes and manufacturer details, please verify information on the TopFly website https://www.topflytech.com/ as features and implementation details may change over time.
