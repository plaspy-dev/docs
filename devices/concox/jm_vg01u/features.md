---
slug: /concox/jm_vg01u/features
id: jm_vg01u-features
sidebar_label: Features
title: Concox - JM-VG01U Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for Concox JM-VG01U GPS tracker and how its INS GNSS mileage and immobilizer features work with Plaspy
keywords:
  - Concox JM-VG01U
  - JM-VG01U features
  - Concox GPS tracker
  - JM-VG01U Plaspy compatibility
  - vehicle GNSS tracker
  - INS GNSS tracker
  - relay immobilizer
  - mileage reporting GPS
  - driver behavior detection
  - fleet tracking Plaspy
---

# Concox - JM-VG01U Features

This page describes the public feature context for the Concox JM-VG01U when used with Plaspy. It summarizes the tracker’s capabilities that are relevant to fleet managers, usage-based insurance programs, and auto finance deployments and explains how those capabilities map to monitoring, alerts, and reporting in Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Use this page for general compatibility and capability guidance and consult official Concox documentation for device-specific and up-to-date technical details.

## Feature Overview

The JM-VG01U is an INS-aided vehicle GNSS tracker designed to provide continuous positioning and rich motion telemetry for professional fleet use. It blends multi-constellation GNSS, inertial navigation, and LBS assistance to improve positioning in urban and GPS-challenged environments while delivering event and trip information useful for safety and operations.

- INS-aided GNSS positioning with LBS assistance to maintain location updates in difficult reception areas.
- 6-axis motion sensing (3-axis accelerometer and 3-axis gyroscope) for driving-behavior detection and event classification.
- Accurate mileage reporting with a low stated error margin for usage-based billing and operational metrics.
- Integrated vehicle inputs including ignition (ACC) detection and an in-cabin SOS button for trip and emergency events.
- Relay-based remote cut-off (immobilizer) support for anti-theft control and recovery workflows.

## Core Features of Concox - JM-VG01U

- INS-aided navigation combined with multi-constellation GNSS for improved continuity of position.
- 6-axis inertial sensing enabling detection of multiple unsafe driving behaviors.
- Mileage calculation using onboard algorithms with published low error expectations.
- Digital inputs for ACC ignition state and an in-cabin SOS button for event logging.
- Relay output to support remote immobilizer or cut-off actions.
- Ruggedized hardware with IP65 environmental protection and industrial temperature range.
- GSM quad-band cellular connectivity for broad network coverage.
- LED indicators for GNSS, cellular, and power status to aid installation diagnostics.

## How These Features Work with Plaspy

Plaspy ingests telemetry from Plaspy-compatible trackers such as the JM-VG01U and converts GNSS positions, inertial events, and digital input signals into live maps, event streams, and historical reports. Plaspy’s device handling maps device-sent events to platform records so fleet managers can monitor trips, safety events, and device state from a single interface.

- Real-time location and position continuity displayed on Plaspy maps for live fleet visibility.
- Driving behavior and motion events are captured as safety alerts and available in Plaspy analytics.
- Ignition (ACC) events and SOS button presses are mapped to trip records and can trigger immediate notifications.
- Mileage telemetry feeds utilization and mileage reports used for billing, maintenance planning, and analytics.
- Relay immobilizer status and remote cut-off actions can be represented in Plaspy dashboards as device outputs or control events.
- Plaspy automatically detects compatible tracker protocols and normalizes incoming telemetry for display and reporting.

## Typical Use Cases

- Fleet management and route oversight where continuous location and driver behavior insight improve operations.
- Anti-theft monitoring with SOS alerts and remote immobilizer capability for recovery workflows.
- Usage-based insurance and auto finance programs that require accurate mileage and event logs.
- Urban delivery and logistics where INS and LBS assistance reduce location gaps in urban canyons and tunnels.
- Safety programs that rely on automated detection of harsh driving behaviors and collision-like events.
- Maintenance and utilization reporting driven by ignition and mileage telemetry.

## Feature Availability Notes

- Manufacturer firmware versions can enable, change, or refine behavior for features such as event thresholds, mileage algorithms, and INS processing.
- Hardware revisions and regional variants may affect available inputs, supported cellular bands, or enclosure ratings.
- Correct installation and wiring (for ACC, SOS, and relay) are required for those features to report reliably to Plaspy.
- Some advanced event detection or reporting options may be configurable on the device or via manufacturer tools; Plaspy presents the telemetry the device emits.
- Always confirm the exact feature set and configuration options for a specific unit and firmware build with the manufacturer documentation.

## Why Use Plaspy with These Features

Using the Concox JM-VG01U with Plaspy brings device-level positioning and motion telemetry into a centralized monitoring and reporting environment. Plaspy turns GNSS and inertial data into actionable live tracking, safety alerts, and historical analytics so fleet operators can reduce risk, verify usage, and streamline operational reporting.

To learn more about Plaspy and how it integrates device feeds into fleet workflows visit https://www.plaspy.com. For the latest, device-specific specifications, firmware notes, and manufacturer implementation details verify information on the official Concox site https://www.iconcox.com/ since device features and firmware behavior can change over time.
