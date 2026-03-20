---
slug: /careu/ez2/features
id: ez2-features
sidebar_label: Features
title: CAREU - EZ2 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the CAREU EZ2 GPS tracker and how it integrates with Plaspy for vehicle tracking, telemetry and fleet control
keywords:
  - CAREU EZ2 features
  - CAREU EZ2 GPS tracker
  - EZ2 Plaspy compatibility
  - vehicle telemetry
  - CAN OBD II integration
  - remote immobilization
  - geofencing features
  - fleet tracking hardware
  - onboard data logging
  - RS-232 1-Wire accessories
---

# CAREU - EZ2 Features

This page provides a public feature overview of the CAREU EZ2 GPS tracker and how its capabilities are used with Plaspy for fleet management and vehicle monitoring. It summarizes the practical functions that the EZ2 delivers when integrated into Plaspy, including real-time tracking, CAN/OBD II telemetry, anti-theft controls, and accessory support.

Exact feature availability can vary by firmware version, hardware revision, installation method and regional model selection. Manufacturer implementation choices and optional accessories can affect which functions appear in your Plaspy deployment, so treat the content below as general, user-facing feature context rather than a definitive technical reference.

## Feature Overview

The CAREU EZ2 is a compact vehicle tracker designed to feed location and vehicle-state data into Plaspy for operational visibility and control. It combines cellular connectivity, CAN/OBD II telemetry, anti-theft control and accessory ports to give fleet operators a useful set of monitoring and control tools.

- Real-time GPS tracking and continuous telemetry streaming into Plaspy for live vehicle visibility.
- CAN/OBD II data reading to surface odometer, RPM, fuel level indications and engine temperature in Plaspy dashboards.
- Remote immobilization to help prevent unauthorized vehicle movement as part of Plaspy-managed workflows.
- Advanced geofencing with configurable zones and speed-limit notifications to support operational rules.
- Large onboard log capacity to retain data during connectivity gaps and upload to Plaspy when the connection resumes.
- RS-232 and optional 1-Wire accessory support for driver identification and additional sensor inputs.

## Core Features of CAREU - EZ2

- 4G LTE Cat 1 connectivity with 2G fallback and regional or global module options for broad carrier coverage.
- U1Lite+ CAN/OBD II integration for reading vehicle telemetry such as fuel level, odometer, RPM and engine temperature.
- Remote engine immobilizer for anti-theft control and management through Plaspy workflows.
- Advanced geofencing with support for multiple geofences and configurable speed-limit alerts.
- Large onboard data logging capacity, suitable for storing extended records while offline.
- RS-232 port for accessories like RFID or barcode readers and an optional 1-Wire port for i-Button or temperature sensor attachments.
- Remote configuration and FOTA firmware update capability for fleet scale management and maintenance.
- Power-loss and tamper related alarms to support theft and tamper detection scenarios.

## How These Features Work with Plaspy

When connected to Plaspy, the EZ2 supplies location and vehicle-state information that Plaspy surfaces via maps, alerts and reports. Plaspy can consume the EZ2 telemetry to create operational insights, event-driven workflows and historical analytics for fleet teams.

- Live location and telemetry appear in Plaspy dashboards for real-time monitoring and dispatch decisions.
- CAN/OBD II metrics such as odometer, RPM and engine temperature are available for reporting and trend analysis inside Plaspy.
- Fuel-related telemetry enables fuel monitoring reports and event alerts where CAN data is present.
- Geofence events and speed-limit breaches trigger notifications and can be used to automate workflows within Plaspy.
- Remote immobilization commands issued from Plaspy can be used as part of anti-theft and recovery procedures.
- Accessory events from RS-232 or 1-Wire devices (for example driver ID reads) can be reported into Plaspy for driver or asset association.

## Typical Use Cases

- Real-time fleet tracking for logistics and delivery operations to improve routing and dispatcher visibility.
- Anti-theft management using remote immobilization and tamper/power-loss alerts for rapid response.
- Fuel monitoring and operational efficiency programs that combine CAN/OBD II telemetry with GPS traces.
- Driver and asset identification workflows using RS-232 or 1-Wire attachments for shift logging and delivery verification.
- Geofence-based site control to enforce operational boundaries and speed policies.
- Offline logging for regulatory compliance and later upload to Plaspy when connectivity is restored.
- Remote device maintenance and firmware updates to simplify large-scale deployments.

## Feature Availability Notes

- Feature availability may differ by firmware version and hardware revision; some telemetry fields or behaviors depend on installed firmware.
- Regional or global cellular module variants may affect which network bands are supported in a given market.
- Optional accessories and ports such as RS-232 or 1-Wire must be present and configured to report accessory events to the platform.
- Installation and wiring practices can affect which CAN/OBD II signals are available for the EZ2 to read.
- Plaspy automatically detects supported tracker protocols during setup, which helps simplify device onboarding.
- Always consult the device manufacturer for the most current, device specific configuration and accessory compatibility.

## Why Use Plaspy with These Features

Pairing the CAREU EZ2 with Plaspy gives organizations a practical path to unify vehicle location, CAN/OBD II telemetry and anti-theft controls in a single fleet management environment. The EZ2 supplies the raw location and vehicle-state data while Plaspy provides the dashboards, alerts and reporting needed for operational oversight, dispatching and fleet analytics.

To learn more about Plaspy and how it can work with compatible trackers such as the CAREU EZ2, visit https://www.plaspy.com. Device features, firmware behavior and manufacturer implementation can change over time; please verify the latest device-specific details with the manufacturer at https://www.systech-iot.com/
