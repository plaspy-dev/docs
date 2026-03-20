---
slug: /concox/vl505/features
id: vl505-features
sidebar_label: Features
title: Concox - VL505 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox VL505 OBD II 4G GNSS tracker and how it works with Plaspy
keywords:
  - Concox VL505 features
  - Concox VL505 GPS tracker
  - VL505 OBD II tracker
  - VL505 LTE Cat 1
  - VL505 Plaspy compatibility
  - VL505 multi constellation GNSS
  - VL505 vehicle tracking
  - VL505 fleet management
  - VL505 telemetry and alerts
  - Concox VL505 capabilities
---

# Concox - VL505 Features

This page provides a public feature overview for the Concox VL505 and how that device can be used with Plaspy. It focuses on non sensitive, user facing capabilities such as plug and play OBD II installation, continuous real time tracking over LTE, multi source GNSS positioning, event alerts, and how those data streams are presented and useful inside Plaspy.

Exact feature availability and behavior can vary by device firmware, hardware revision, regional variant, and the way the device is installed or configured. For device specific commands, limits and the latest technical details consult the manufacturer documentation when required.

## Feature Overview

The VL505 is an ultra compact OBD II GNSS tracker designed for quick installation and persistent vehicle monitoring. It combines cellular data connectivity, multi constellation positioning and onboard sensors to provide location, movement events and configurable alerts useful for fleet oversight and vehicle security.

- Plug and play OBD II installation for rapid deployment and reliable vehicle power
- Real time tracking over 4G LTE for low latency position updates and telemetry
- Multi constellation GNSS including GPS and BDS with A GPS assistance and LBS for position resilience
- Onboard sensors including an accelerometer and microphone to report movement events and support incident investigation
- Configurable alert set including geofence, vibration, speeding related events and power disconnection notifications

## Core Features of Concox - VL505

- OBD II form factor for easy installation without hard wiring
- 4G LTE Cat 1 cellular connectivity for continuous data uplink
- Multi source GNSS support GPS BDS A GPS and LBS for improved positioning
- Onboard accelerometer for movement and collision related event detection
- Built in microphone for remote voice monitoring where configured and permitted
- Small internal backup battery and temporary edge logging for short power interruptions
- eSIM support remote configuration via SMS or supported cloud platforms and LED indicators for installation checks
- Regional variants and certifications including FCC and CE for market specific deployment

## How These Features Work with Plaspy

When a VL505 is connected and reporting, Plaspy ingests position updates movement events and device alerts so operators can monitor vehicles on a live map and respond to incidents. Plaspy automatically handles common tracker protocols to present incoming telemetry without requiring manual protocol selection in most cases.

- Real time position updates and historical replay using GNSS and assisted position sources
- Event alerts visible in Plaspy dashboards for geofence entry and exit vibration power disconnection and speeding related notifications
- Driving and movement events derived from accelerometer data surfaced for safety monitoring and review
- Microphone and accelerometer events available for incident investigation where the device and local rules allow such features
- Temporary on device logging is synced into Plaspy after connectivity is restored to preserve recent points and events

## Typical Use Cases

- Fleet management and dispatching for live vehicle location and routing oversight
- Vehicle anti theft monitoring with power disconnection and geofence alerts to enable faster recovery
- Usage based insurance and risk assessment that rely on driving behavior analytics
- Driver safety and coaching using event reports for harsh maneuvers and collisions
- Private vehicle and family fleet tracking for continuous location sharing and alerts
- Rental or shared vehicle monitoring for simplified installation and quick device turnover

## Feature Availability Notes

- Firmware and hardware revision differences can change which alerts sensors or diagnostic PIDs are available
- Regional VL505 variants may differ in cellular band support and some feature behavior
- OBD II data availability depends on the vehicle make model and whether specific PIDs are exposed by the vehicle
- Microphone and voice monitoring features may be restricted by regional regulation and by device firmware settings
- Remote configuration options depend on whether the device is managed by SMS local tools or a supported cloud provisioning service

## Why Use Plaspy with These Features

Pairing the VL505 with Plaspy provides a practical path from compact plug and play hardware to fleet grade visibility and operational oversight. The VL505 supplies continuous positioning movement events and alerts while Plaspy organizes those inputs into maps alerts and reports so teams can monitor assets respond to incidents and analyze trends across a fleet.

To learn more about how Plaspy can use data from devices like the Concox VL505 visit https://www.plaspy.com. For the most current device specific specifications firmware notes and regulatory information consult the manufacturer site https://www.iconcox.com/ since features and implementation details can change over time.
