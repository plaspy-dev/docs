---
slug: /ulbotech/t371/features
id: t371-features
sidebar_label: Features
title: Ulbotech - T371 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Ulbotech T371 OBD II GPS tracker and how its telemetry integrates with Plaspy for fleet monitoring
keywords:
  - Ulbotech T371
  - Ulbotech T371 features
  - Ulbotech T371 GPS tracker
  - T371 OBD II tracker
  - T371 vehicle telemetry
  - Plaspy compatible tracker
  - fleet tracking T371
  - T371 immobilizer
  - T371 FOTA updates
  - T371 GNSS positioning
---

# Ulbotech - T371 Features

This page provides a public feature overview of the Ulbotech T371 and how its capabilities are used with Plaspy for centralized tracking and fleet management. It summarizes the device functions that are relevant to integration, monitoring, and operational use inside the Plaspy platform.

Exact feature availability and behaviour can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific instructions and the most current technical details consult the official Ulbotech documentation and firmware release notes.

## Feature Overview

The Ulbotech T371 is a plug and play OBD II tracker designed for vehicle fleet use and integration with Plaspy. It combines GNSS positioning, cellular connectivity, and vehicle OBD telemetry to provide location, diagnostic, and security related data to a central platform for monitoring and reporting.

- Plug and play OBD II connection for quick installation and immediate telemetry access.
- GNSS positioning with assisted features for fast time to first fix and reliable location reporting.
- Cellular connectivity for continuous real time data upload to Plaspy.
- Vehicle telemetry via OBD and CAN protocols including engine and diagnostic parameters.
- Security and event detection through an internal immobilizer output and accelerometer events.

## Core Features of Ulbotech - T371

- OBD II form factor for direct vehicle connection and access to OBD parameters and CAN bus data.
- GNSS positioning using a u blox based engine with multi constellation support and AGPS assistance for faster fixes.
- Cellular modem for global connectivity, enabling real time location and telemetry uplink.
- Support for multiple OBD and CAN protocols including SAE J1939 for heavy vehicle compatibility.
- Internal immobilizer output for remote engine cut coordination.
- 3 axis accelerometer based event detection for motion and driving behaviour events.
- Firmware over the air updates for remote device maintenance and feature rollout.
- Onboard data buffering for temporary offline logging when cellular coverage is unavailable.

## How These Features Work with Plaspy

When the T371 is connected to a vehicle and the cellular link is active, it reports positions, OBD parameters, and event flags into Plaspy. Plaspy ingests that data to provide real time visibility, historical playback, alerts, and reporting tailored to fleet and vehicle management workflows.

- Real time location updates and GNSS fixes visible on Plaspy maps and live monitoring dashboards.
- Engine and diagnostic parameters such as RPM, speed, coolant status, fuel related telemetry and DTCs shown in Plaspy telemetry panels.
- Motion and accelerometer events available for driver behaviour scoring and alert generation inside Plaspy.
- Immobilizer output can be coordinated from Plaspy workflows to support anti theft responses and remote control actions.
- Device management benefits such as FOTA and APN/time zone detection are reflected in Plaspy device status and remote update logs.

## Typical Use Cases

- Fleet tracking and operations monitoring for route optimization and asset oversight.
- Rental and shared vehicle programs requiring automated mileage and usage records.
- Insurance telematics for usage based reporting, trip logs, and diagnostic evidence.
- Anti theft monitoring and remote immobilization workflows coordinated through Plaspy.
- Roadside assistance and service prioritization using location plus diagnostic context.
- Driver behaviour monitoring and safety coaching using accelerometer events and telemetry.

## Feature Availability Notes

- Feature sets such as available OBD parameters and CAN messages can vary by vehicle make, model year, and vehicle ECU implementation.
- Firmware versions and hardware revisions may enable or change specific capabilities such as additional telemetry, tracking modes, or FOTA behavior.
- Some security or control functions require correct installation and may need optional accessories or professional setup to meet vehicle wiring and safety requirements.
- Regional cellular band support and certification may affect connectivity options in different markets.
- Always verify feature lists and firmware notes from Ulbotech for the exact behavior shipped with a device.

## Why Use Plaspy with These Features

Pairing the Ulbotech T371 with Plaspy gives organizations centralized access to location, vehicle telemetry, and event data in a single platform. Plaspy helps turn the T371 data into operational insights by visualizing trips, surfacing diagnostic alerts, and enabling workflows for security and maintenance.

To learn more about how Plaspy works with compatible trackers like the T371 visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time so verify the latest device specific information on the manufacturer site http://www.ulbotech.com/.
