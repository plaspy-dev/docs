---
slug: /teltonika/fmm001/features
id: fmm001-features
sidebar_label: Features
title: Teltonika - FMM001 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Teltonika FMM001 and how its OBD GNSS and Bluetooth capabilities work with Plaspy for fleet tracking
keywords:
  - Teltonika FMM001 features
  - Teltonika FMM001 GPS tracker
  - FMM001 OBD tracker
  - FMM001 Bluetooth GPS
  - FMM001 GNSS features
  - Teltonika FMM001 Plaspy
  - FMM001 fleet tracking
  - Teltonika OBD II tracker
  - FMM001 telematics features
  - FMM001 sleep modes
---

# Teltonika - FMM001 Features

This page provides a public feature summary for the Teltonika FMM001 and explains how those features relate to use with Plaspy. It is intended to help fleet managers, integrators, and technical evaluators understand the practical capabilities you can expect when the FMM001 is used with Plaspy for tracking, telematics, and basic vehicle monitoring.

Exact feature availability and behavior can vary by device firmware version, hardware revision, installation method, and how the manufacturer implements specific functions. For device specific configuration, advanced diagnostics, and the latest feature set please consult the manufacturer documentation as noted below.

## Feature Overview

The Teltonika FMM001 is a plug and track OBD device that combines GNSS location, Bluetooth Low Energy connectivity, OBD II data access, and motion sensing to provide a compact telematics solution. It is designed to deliver location awareness, driver and vehicle event detection, and basic vehicle parameter reading for common fleet and mobility workflows.

- Plug and Track OBD form factor for quick installation in compatible vehicles
- GNSS location reporting for continuous position awareness and trip tracking
- OBD II parameter reading to surface vehicle data relevant to fuel and engine metrics
- Bluetooth Low Energy support for sensors and beacon integration
- Detailed accelerometer data for motion events such as towing, crash, and unplug detection
- Multiple configurable sleep modes to reduce power draw during idle periods

## Core Features of Teltonika - FMM001

- OBD II parameter reading for vehicle telemetry and fuel-related monitoring
- GNSS positioning for location, trip recording, and geofence events
- Bluetooth Low Energy support for external sensors and beacons
- Built in accelerometer data for motion detection and event classification
- Plug and Track LTE CAT M1 ready design for cellular connectivity
- Multiple sleep modes including GPS sleep and deep sleep options
- Time synchronization support using GNSS, NITZ, or NTP methods
- Configuration and firmware updates via FOTA Web, FOTA, Teltonika Configurator, and FMBT app

## How These Features Work with Plaspy

Plaspy can ingest and surface the FMM001 data to provide operational visibility, event monitoring, and historical location records. When the device reports to Plaspy, its supported capabilities can be mapped to common platform views for monitoring and analysis.

- Location and trip data from GNSS appear in Plaspy for real time tracking and route history
- OBD II parameters reported by the device can be used for fuel monitoring and vehicle performance insight within Plaspy dashboards
- Accelerometer driven events such as towing, crash, or unplug detection show up as events for alerting and investigation
- Bluetooth sensor presence and beacon activity can be represented in the platform when the device reports those inputs
- Device configuration and firmware state reported by the tracker can be recorded in Plaspy to aid device management and troubleshooting

## Typical Use Cases

- Fleet tracking and route history for delivery, service, and field teams
- Car rental and leasing programs requiring plug and play installation and trip records
- Driver behavior monitoring workflows such as overspeed and idling analysis using accelerometer and OBD data
- Insurance telematics programs leveraging OBD parameters and movement events
- Equipment or vehicle anti-tamper detection using unplug and towing alerts
- Integrating BLE sensors or beacons for additional asset or cabin monitoring

## Feature Availability Notes

- Some features depend on the FMM001 firmware version; newer firmware may add or refine capabilities
- Hardware revisions and regional device variants can change supported cellular bands or options
- Certain vehicle models may limit available OBD II parameters depending on manufacturer implementation
- Installation type and wiring can affect ignition detection and external power reporting behavior
- Bluetooth sensor support requires compatible BLE devices and appropriate configuration

## Why Use Plaspy with These Features

Using the Teltonika FMM001 with Plaspy gives organizations a compact, install-and-go telematics option that combines vehicle-derived OBD data, GNSS location, and motion events into a single stream of insights. Plaspy can centralize the tracker data for fleet visibility, event-driven alerts, and historical reporting, helping teams make operational decisions with clearer vehicle context.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and manufacturer implementation details please verify with the official Teltonika documentation at https://www.teltonika-gps.com/ .
