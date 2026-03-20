---
slug: /teltonika/fmm800/features
id: fmm800-features
sidebar_label: Features
title: Teltonika - FMM800 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMM800 OBD II GPS tracker and how it works with Plaspy for vehicle tracking and telemetry
keywords:
  - Teltonika FMM800
  - FMM800 features
  - Teltonika GPS tracker
  - OBD II tracker
  - FMM800 Plaspy
  - vehicle tracking
  - fleet telematics
  - BLE sensor tracker
  - accelerometer tracking
  - NB IoT LTE Cat M1
---

# Teltonika - FMM800 Features

This page provides a public overview of the Teltonika FMM800 feature set and how those features are used with Plaspy for vehicle tracking, telemetry, and fleet monitoring. The content focuses on practical, non sensitive details that help fleet managers and integrators understand what the FMM800 can deliver when reporting into Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. For device specific technical details, firmware change notes, and accessory compatibility please consult Teltonika product documentation and release notes.

## Feature Overview

The FMM800 is a plug and play OBD II tracker designed for quick installation and continuous vehicle reporting. It combines cellular connectivity, onboard motion sensing, and Bluetooth Low Energy to stream location and vehicle telemetry into cloud platforms such as Plaspy.

- Plug and play OBD II installation for rapid deployment without complex wiring.
- Cellular connectivity optimized for low power wide area networks with multi mode fallback for broad coverage.
- Built in 3 axis accelerometer to generate motion and impact related events.
- Bluetooth Low Energy support for pairing external sensors and beacons for environmental and movement monitoring.
- OBD II derived vehicle data used for fuel related telemetry and ignition state reporting.
- Remote firmware and configuration management through Teltonika provisioning tools.

## Core Features of Teltonika - FMM800

- OBD II plug and play interface for power and vehicle data access.
- Multi mode cellular connectivity including LTE Cat M1 and NB IoT with 2G fallback.
- Onboard 3 axis accelerometer to detect harsh events and impacts.
- Bluetooth Low Energy support for external sensors and beacons.
- Support for OBD II telemetry including ignition and vehicle diagnostics data useful for fleet analytics.
- Integration with Teltonika remote management tools for FOTA and provisioning.
- Compact OBD II form factor suitable for discreet installation in passenger vehicles.

## How These Features Work with Plaspy

Plaspy ingests location and telemetry from the FMM800 to provide live maps, alerts, and historical reports. The device streams GPS and OBD II derived data to Plaspy where it becomes part of vehicle histories, event triggers, and operational dashboards.

- Real time location updates appear on Plaspy live maps and feeds for dispatch and monitoring.
- Accelerometer events can be translated into alert triggers for harsh braking, collision detection, and other motion incidents.
- OBD II telemetry such as ignition state and engine derived metrics are available to support fuel monitoring and driver behavior insights.
- BLE sensor data forwarded from the device can populate sensor readings and environmental alerts in Plaspy when configured.
- Devices register and report into Plaspy using standard device transport methods; Plaspy automatically detects the supported tracker protocol for ingestion.
- Remote firmware and configuration workflows remain managed by Teltonika tools while Plaspy focuses on visualization, rules, and integrations.

## Typical Use Cases

- Fleet management with continuous location tracking, route replay, and driver behavior monitoring.
- Car sharing and rental services using quick OBD II deployments and usage records for billing and security.
- Logistics and delivery operations requiring live tracking and accelerometer based incident detection.
- Environmental and cabin monitoring via paired BLE sensors for temperature or movement alerting.
- Asset security and anti theft workflows using position history and OBD II ignition state to support recovery processes.
- Scaling telematics programs where remote provisioning and FOTA reduce on site maintenance.

## Feature Availability Notes

- Firmware differences may enable or limit specific telemetry fields, BLE profiles, or event logic. Check firmware release notes for details.
- Hardware revisions and regional variants can affect supported cellular bands and accessory compatibility.
- OBD II data availability depends on vehicle make model and the specific parameters exposed by the vehicle ECU.
- BLE sensor support requires compatible sensors and may depend on device firmware and configuration.
- Manufacturer configuration tools such as Teltonika Configurator and FOTA WEB are the primary methods for provisioning and updating device firmware.

## Why Use Plaspy with These Features

Using the Teltonika FMM800 with Plaspy provides a practical path to rapid vehicle onboarding, continuous location visibility, and consolidated telemetry for operational oversight. The OBD II form factor lowers installation friction while BLE and accelerometer data extend event detection and sensor workflows that Plaspy can convert into alerts and reports.

Learn more about how Plaspy can use FMM800 telemetry and sensor data to improve fleet visibility at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time; verify the latest device specific information and accessory compatibility on the manufacturer site https://www.teltonika-gps.com/.
