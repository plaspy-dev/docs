---
slug: /cantrack/g500l/features
id: g500l-features
sidebar_label: Features
title: CanTrack - G500L Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the CanTrack G500L OBD GPS tracker and how it integrates with Plaspy for vehicle tracking and telemetry
keywords:
  - CanTrack G500L
  - CanTrack G500L features
  - CanTrack G500L GPS tracker
  - CanTrack OBD II tracker
  - G500L features Plaspy
  - G500L OBD telemetry
  - G500L 4G tracker
  - vehicle tracking G500L
  - fleet management G500L
  - G500L DTC reporting
---

# CanTrack - G500L Features

This page provides a public, feature-focused overview of the CanTrack G500L and how it is used with Plaspy for vehicle tracking and telemetry. It summarizes the device capabilities that matter for deployment and monitoring in Plaspy, and highlights which functions are commonly available to fleet managers and vehicle owners using Plaspy dashboards.

Exact feature availability can vary by firmware version, hardware revision, vehicle OBD implementation, and manufacturer configuration. Where appropriate this page notes practical limitations and encourages verification against the manufacturer documentation for device specific behavior and supported OBD PIDs.

## Feature Overview

The G500L is a plug-and-play 4G OBD-II GPS tracker designed to provide fast installation, continuous location updates, and OBD-level telemetry into Plaspy without complex wiring. Its focus is on delivering position data together with vehicle parameters and diagnostic information to support real-time monitoring, preventive maintenance, and anti-tamper workflows.

- Fast OBD-II plug-and-play installation for quick deployments without vehicle wiring changes.
- Hybrid positioning using GPS, AGPS, and LBS for fast fixes and reliable location reporting.
- Industrial 4G global connectivity to keep telemetry flowing across wide geographic areas.
- Remote readout of OBD-II parameters including fuel consumption, temperature, and DTCs for maintenance insights.
- Built-in anti-tamper alarm and a small backup battery to report during brief power interruptions.

## Core Features of CanTrack - G500L

- OBD-II plug form factor for direct vehicle connection and access to supported PIDs and DTCs.
- Hybrid GNSS positioning combining GPS, AGPS, and LBS for consistent location updates.
- Global 4G cellular communications designed for wide area coverage and dependable reporting.
- Remote diagnostic trouble code (DTC) reporting and readout of vehicle parameters such as fuel consumption and temperature.
- Anti-tamper violent demolition alarm that reports unauthorized removal attempts.
- Small internal backup battery to allow limited reporting during power loss or disconnection.
- Ignition ACC status detection for trip segmentation and event classification.
- Compatibility with common OBD-II protocols to support a broad range of vehicle models.

## How These Features Work with Plaspy

Plaspy ingests the G500L telemetry to provide live maps, telemetry views, alerts, and historical reports useful for operations and maintenance. Plaspy automatically detects the incoming tracker protocol and displays location and OBD data alongside event notifications for fleet oversight.

- Live location updates and position history visible on Plaspy maps using GNSS plus AGPS and LBS fixes.
- Vehicle OBD-II telemetry such as fuel consumption, temperature, and DTCs available in Plaspy reports and event feeds.
- Trip and idle segmentation driven by ignition ACC status to support operational reporting and driver metrics.
- Tamper and anti-theft alerts reported into Plaspy for near real time notifications and incident workflows.
- Backup battery status and brief power interruption reports surfaced in Plaspy for device health awareness.

## Typical Use Cases

- Fleet management for real-time vehicle tracking, trip history, and fuel/maintenance oversight using Plaspy dashboards.
- Remote diagnostics and DTC monitoring to plan preventive maintenance and reduce unplanned downtime.
- Anti-theft and tamper detection to notify operators of unauthorized removal attempts or suspicious events.
- Fuel monitoring programs to track consumption patterns and support cost control initiatives.
- Rapid deployment programs such as rentals or temporary fleets where plug-and-play installation is required.
- Operational monitoring where ignition state and diagnostic visibility support workflow automation.

## Feature Availability Notes

- Feature availability depends on device firmware version and manufacturer configuration; capabilities can vary across shipments.
- Supported OBD-II PIDs and DTC detail depend on the vehicle ECU and the specific OBD protocol the vehicle implements.
- Regional cellular band variants and operator coverage affect 4G connectivity and may influence performance in some areas.
- Installation environment and the vehicle OBD port wiring can affect which telemetry items are available to the device.
- Always consult the device firmware release notes and the manufacturer for the most current specification and limitations.

## Why Use Plaspy with These Features

Using the CanTrack G500L with Plaspy gives organizations a straightforward path to combine plug-and-play OBD telemetry with a fleet management platform for operational visibility. The G500L’s OBD-level data complements position reporting to provide context for maintenance planning, fuel analysis, trip auditing, and tamper detection, while Plaspy surfaces those inputs in maps, alerts, and historical reports.

To learn more about how Plaspy can display and act on G500L telemetry visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance verify features and supported behaviors on the official CanTrack website https://www.cantrackgps.com/ as device features and firmware behavior can change over time.
