---
slug: /careu/ut1/features
id: ut1-features
sidebar_label: Features
title: CAREU - UT1 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the CAREU UT1 GPS tracker and how it integrates with Plaspy for rugged asset tracking and telemetry
keywords:
  - CAREU UT1
  - CAREU UT1 features
  - CAREU UT1 GPS tracker
  - UT1 features Plaspy
  - Plaspy compatible tracker
  - rugged asset tracker
  - LTE Cat 1 tracker
  - industrial asset tracking
  - trailer tracking
  - anti theft tracker
---

# CAREU - UT1 Features

This page summarizes the public feature context for the CAREU UT1 GPS tracker and how the device is used with Plaspy for location, telemetry and operational visibility. It focuses on practical capabilities and how those capabilities are reflected in Plaspy dashboards, alerts and reporting for fleet, asset and security workflows.

Exact feature availability can vary by firmware version, hardware revision, factory options and the specifics of an installation. Where manufacturer options or regional variants exist they can change device behavior; consult manufacturer documentation and release notes for device specific details before planning deployment.

## Feature Overview

The CAREU UT1 is a powered asset tracker built for harsh environments, offering robust cellular connectivity, onboard logging and flexible sensor and I/O options. It is designed to keep Plaspy dashboards updated with location and telemetry for industrial fleets, trailers and secured assets.

- Real time tracking over LTE Cat 1 with fallback to 3G/2G for resilient coverage in varied sites.
- Rugged IP67 enclosure and vibration tolerant design for construction, mining and industrial use.
- Internal backup battery options with super deep sleep and large on device logging capacity for long autonomy.
- Anti theft capabilities including tamper and power loss alerts plus remote immobilization and ignition control.
- Flexible sensor and interface support such as 1‑Wire and RS‑232 with optional CAN for expanded telemetry.
- Remote configuration and firmware updates via FOTA plus SMS, FTP and USSD command support.

## Core Features of CAREU - UT1

- LTE Cat 1 primary cellular connectivity with fallback to 3G and 2G networks for persistent reporting.
- IP67 rated rugged enclosure designed for dust and water exposure and heavy vibration environments.
- Internal battery backup options (approximately 5.2 Ah or 10.4 Ah) and super deep sleep for extended offline operation.
- Large onboard position logger capable of storing up to 200,000 records for later sync.
- GNSS positioning using GPS, GLONASS and QZSS to support reliable location fixes.
- Flexible I/O and sensor interfaces including 1‑Wire and RS‑232 with optional CAN support for vehicle data and fuel telemetry.
- Event and security features such as tamper detection, GSM jamming detection, geofence reporting and accelerometer event detection.
- Remote management capabilities including remote configuration and FOTA over FTP plus SMS and USSD command paths.

## How These Features Work with Plaspy

Plaspy ingests the UT1's location and telemetry streams so operations and security teams can monitor live status, respond to events and analyze historical activity. The UT1's telemetry and event reporting translate into actionable items inside Plaspy for dispatch, fleet oversight and security response.

- Real time location feeds and periodic position updates appear in Plaspy maps and tracking views for live asset visibility.
- Event alerts such as tamper, power loss, geofence breach and accelerometer events surface as notifications and activity log entries.
- Onboard logs stored by the UT1 can be synced into Plaspy to reconstruct historical routes and events when connectivity is restored.
- Sensor and I/O data from 1‑Wire, RS‑232 and optional CAN devices are presented in Plaspy as telemetry fields for monitoring and rule creation.
- Remote commands and configuration workflows enabled by FOTA and remote configuration let administrators apply settings and firmware updates at scale through backend systems interfacing with Plaspy.

## Typical Use Cases

- Fleet anti theft and immobilization management with tamper and power loss alerts forwarded to security teams.
- Heavy machinery and construction equipment monitoring for position awareness and event detection in harsh sites.
- Trailer and non powered asset tracking where long autonomy and deep sleep modes reduce maintenance visits.
- Secure asset protection for ATMs, safes and mobile equipment requiring environmental sealing and vibration resistance.
- Industrial and mining vehicle telemetry with optional CAN integration for fuel and vehicle data when fitted.

## Feature Availability Notes

- Some features such as optional CAN interfaces, 6‑axis accelerometer upgrades or specific I/O arrangements may be factory options or require different hardware revisions.
- Firmware versions affect behavior for logging, report intervals, power modes and remote update capabilities; check release notes for exact behavior.
- Installation and wiring (for example external ignition inputs or external power arrangements) influence which features are available in a given deployment.
- Regional cellular variants may differ by supported bands and fallback behavior; verify the units supplied for your region.
- Plaspy can automatically detect tracker protocol and ingest compatible device data, but configuration and provisioning steps are required before device data appears in Plaspy.

## Why Use Plaspy with These Features

Using the CAREU UT1 together with Plaspy provides a single place to collect location, security and sensor telemetry for rugged assets and industrial fleets. Plaspy centralizes alerts, historical logs and telemetry so teams can monitor field assets, react to incidents and run operational reports without having to aggregate raw device data manually.

To learn more about how Plaspy supports devices like the CAREU UT1 visit https://www.plaspy.com. For the most current device specifications, firmware notes and manufacturer options refer to CAREU's official documentation at https://www.systech-iot.com/ as device features and firmware behavior can change over time.
