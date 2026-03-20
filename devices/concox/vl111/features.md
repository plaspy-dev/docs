---
slug: /concox/vl111/features
id: vl111-features
sidebar_label: Features
title: Concox - VL111 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Concox VL111 GPS tracker and how it integrates with Plaspy for real-time tracking and telemetry
keywords:
  - Concox VL111 features
  - Concox VL111 GPS tracker
  - VL111 Plaspy compatibility
  - VL111 features
  - Concox VL111 immobilizer
  - VL111 BLE 5.0 tracker
  - VL111 vehicle tracking
  - VL111 GNSS GPS BeiDou GLONASS
  - VL111 fleet tracking
  - Concox VL111 telemetry
---

# Concox - VL111 Features

This page provides a public, non-sensitive overview of the Concox VL111 GPS tracker and the practical features relevant to using the device with Plaspy. It explains the tracker capabilities that Plaspy can surface for fleet managers, dealers, and administrators while keeping installation and platform integration context clear and platform-focused.

Exact feature availability and behavior can vary by device variant, firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a guide to the VL111's common capabilities with Plaspy and consult the official Concox documentation for the most current, device-specific details.

## Feature Overview

The VL111 is a compact, rugged 4G LTE vehicle tracker designed for motorcycles and light vehicles, combining multi-constellation GNSS positioning, cellular connectivity with fallback, local Bluetooth support, and relay-based immobilization. It emphasizes reliable location reporting, event detection, and basic remote control in a discreet form factor that fits a range of vehicle installations.

- Accurate multi-constellation GNSS positioning suitable for real-time tracking and trip playback.
- Cellular connectivity with fallback to older networks for reliable telemetry reporting in varied coverage areas.
- Onboard relay for remote immobilization and support for vehicle voltage monitoring and internal battery fallback.
- BLE 5.0 for local sensor or proximity extensions and small-form-factor installations with IP66 protection.
- Built-in accelerometer for driving behavior and collision event detection to support safety and coaching workflows.

## Core Features of Concox - VL111

- Multi-constellation GNSS support (GPS, BeiDou BDS, GLONASS) with AGPS and LBS fallback for improved positioning.
- Cellular data connectivity designed around LTE Cat 1 with 2G fallback to maintain reporting where available.
- Built-in PCB relay enabling remote cut-off or immobilizer workflows where the device and platform connection permit.
- BLE 5.0 radio for local pairing with sensors or proximity beacons and low-power local interactions.
- Vehicle voltage monitoring range and an internal backup battery with automatic power-disconnect to protect vehicle power.
- Onboard accelerometer for detecting harsh driving events and collision-type alerts to feed safety programs.
- Rugged IP66 housing and a compact form factor for discreet mounting on motorcycles and light vehicles.
- Local storage buffering for offline data retention and later upload when connectivity is restored.

## How These Features Work with Plaspy

When paired with Plaspy, the VL111's position, telemetry, and event streams are mapped into Plaspy's real-time views and historical reports so operators can monitor assets, review trips, and act on critical events. Plaspy automatically detects many common tracker protocols and integrates VL111 telemetry into platform dashboards and alerts.

- Real-time location updates and trip playback: GNSS positions and timestamped history appear in Plaspy for live monitoring and route review.
- Event and safety reporting: accelerometer-based harsh driving and collision events are presented in Plaspy for coaching and incident analysis.
- Immobilizer and remote actions: the onboard relay can be used from Plaspy to issue immobilization commands where the device connection and configuration allow.
- Power and battery visibility: voltage monitoring and internal battery fallback information help Plaspy surface low-power alerts and vehicle health signals.
- Local BLE and sensor context: BLE-based proximity or sensor context can be associated with vehicle records in Plaspy when those integrations are configured.

## Typical Use Cases

- Real-time fleet tracking for motorcycles and light vehicles with concise trip playback for operations teams.
- Anti-theft programs using remote immobilizer control combined with location and tamper or vibration alerts.
- Vehicle battery protection workflows that use automatic power-disconnect and internal backup reporting to avoid deep discharge.
- Driver behavior and safety monitoring using accelerometer events to support coaching and compliance.
- Discreet installs for dealer inventory or rental fleets that require compact, rugged tracking hardware.
- Offline-capable tracking where on-board buffering preserves data until connectivity is restored.

## Feature Availability Notes

- Feature sets can differ between VL111 variants and regional hardware revisions; regional LTE bands and combinations may vary.
- Firmware version affects behavior and available telematics; some event formats, thresholds, and remote commands depend on installed firmware.
- Installation choices (hardwired, accessory power, mounting location) influence voltage monitoring, tamper detection, and relay behavior.
- BLE integrations and Bluetooth sensor support require compatible accessories and specific configuration on the device and platform side.
- Confirm supported remote management channels for your unit; some units are managed via vendor tools or SMS, while platform-driven commands depend on device firmware and configuration.

## Why Use Plaspy with These Features

Using the Concox VL111 with Plaspy provides a practical combination of compact hardware and a centralized platform for visibility and operational oversight. Plaspy brings the VL111's location, event, and power-telemetry into unified dashboards and alerting workflows so teams can reduce theft risk, monitor vehicle health, and analyze driver behavior without juggling multiple tools.

To learn more about Plaspy and how the VL111 can be integrated into your tracking deployment, visit https://www.plaspy.com. For the latest device specifications, firmware behavior, and manufacturer details verify current information on the Concox website https://www.iconcox.com/.
