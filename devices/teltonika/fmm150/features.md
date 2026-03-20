---
slug: /teltonika/fmm150/features
id: fmm150-features
sidebar_label: Features
title: Teltonika - FMM150 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMM150 GPS tracker and how it works with Plaspy for fleet telemetry and CAN diagnostics
keywords:
  - Teltonika FMM150
  - FMM150 features
  - Teltonika FMM150 GPS tracker
  - FMM150 Plaspy compatibility
  - FMM150 CAN bus
  - fleet telemetry FMM150
  - EV telemetry FMM150
  - Teltonika GPS tracker features
  - FMM150 LTE Cat M1
  - vehicle diagnostics FMM150
---

# Teltonika - FMM150 Features

This page provides a public, feature-oriented overview of the Teltonika FMM150 and how its capabilities are presented when used with Plaspy. It focuses on practical device functions relevant to fleet management, vehicle telemetry, and CAN bus diagnostics without exposing private configuration details.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer implementation. For device specific parameters, configuration options, and the latest technical details please consult Teltonika documentation and release notes.

## Feature Overview

The FMM150 is a compact vehicle tracker that combines modern cellular connectivity with integrated CAN bus processing to deliver location and deep vehicle telemetry suitable for fleet operations. When connected to Plaspy, the device streams location and CAN-derived parameters to provide richer context for monitoring and reporting.

- LTE Cat M1 with NB‑IoT and 2G fallback for broad network reach and low power telemetry where supported
- Integrated CAN data processor that reads over 100 vehicle parameters including odometer, fuel level, consumption, and EV battery metrics
- Accessory compatibility including Teltonika CAN adapters, RFID readers, and BLE beacons to extend identification and sensor workflows
- Remote device management support via Teltonika tools for configuration and firmware updates
- Multiple product variants and global band options to support diverse regional deployments

## Core Features of Teltonika - FMM150

- Cellular connectivity with LTE Cat M1 and NB‑IoT support plus 2G fallback for continuity
- Integrated CAN bus processing capable of extracting 100 plus vehicle parameters
- Native access to fuel level, fuel consumption, and odometer data when available on the vehicle CAN
- EV battery and power related signals available where the vehicle exposes those parameters on CAN
- Compatibility with accessory modules such as CAN adapters, RFID readers, and BLE beacons
- Support for Teltonika remote management tools to simplify configuration and updates
- Compact vehicle-mounted form factor with multiple order code variants for global use

## How These Features Work with Plaspy

Plaspy ingests the FMM150’s location and telemetry so that dispatchers and fleet teams can view real time position and CAN-derived diagnostics together. Plaspy automatically detects the tracker protocol and surfaces the available signals in maps, alerts, and reports.

- Real time and historical location tracking combined with CAN telemetry for richer incident context inside Plaspy
- Fuel level, consumption, and odometer readings imported from CAN to enable fuel reporting and efficiency analysis
- EV battery metrics available in Plaspy for trend monitoring where vehicle CAN exposes those signals
- Accessory driven inputs such as RFID or BLE presence shown as identification or proximity events in the platform
- Devices may be configured to communicate with Plaspy’s ingestion endpoint such as d.plaspy.com using standard transport options and Plaspy will detect the device protocol automatically

## Typical Use Cases

- Fleet operations monitoring that combines GPS location with vehicle diagnostics for route compliance and uptime
- Fuel monitoring and cost control using CAN sourced fuel level and consumption data for analysis and alerts
- Preventive maintenance planning driven by odometer and CAN diagnostic signals to reduce downtime
- EV fleet management tracking battery related parameters alongside location for charging and range planning
- Rentals and shared mobility workflows using RFID or BLE accessory integrations for check in and identification
- Heavy machinery and special vehicle telemetry where deep CAN visibility aids servicing and fleet readiness

## Feature Availability Notes

- CAN parameter availability depends on the vehicle make, model and the signals the vehicle ECU exposes on the bus
- Firmware version and hardware order code affect supported cellular bands, accessory compatibility, and available features
- Regional device variants may differ in radio band support and regulatory approvals; choose the correct order code for your region
- Accessory features such as RFID or BLE require the corresponding Teltonika modules and proper installation
- Always verify which CAN PIDs and parameters are enabled for your vehicle and whether additional configuration is required

## Why Use Plaspy with These Features

Using the Teltonika FMM150 with Plaspy gives organizations a single view that combines precise location with in-vehicle signals. This combination supports better operational decisions, from monitoring fuel usage and odometer trends to tracking EV battery metrics and managing preventive maintenance. The FMM150’s integrated CAN processing reduces the need for separate gateways and allows Plaspy to present actionable telemetry alongside maps and reports.

To learn more about Plaspy and how it can work with compatible trackers like the Teltonika FMM150 visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time, so please verify the latest device specific information on the manufacturer site https://www.teltonika-gps.com/.
