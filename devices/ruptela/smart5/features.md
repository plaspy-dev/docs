---
slug: /ruptela/smart5/features
id: smart5-features
sidebar_label: Features
title: Ruptela - Smart5 Features
sidebar_class_name: menu_item_tracker
description: Overview of Ruptela Smart5 GPS tracker features and how it works with Plaspy for fleet tracking diagnostics and security
keywords:
  - Ruptela Smart5 features
  - Ruptela Smart5 GPS tracker
  - Smart5 Plaspy compatibility
  - Ruptela Smart5 capabilities
  - Smart5 CANbus OBD
  - Smart5 Bluetooth LE
  - fleet tracking Smart5
  - Smart5 anti theft
  - Smart5 telemetry
  - Smart5 vehicle diagnostics
---

# Ruptela - Smart5 Features

This page describes the public feature context for using the Ruptela Smart5 tracker with Plaspy. It summarizes the model's practical capabilities and explains how those capabilities are typically used inside Plaspy for live maps, telemetry dashboards, alerts and fleet oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation wiring and manufacturer implementation. For the most current device specific details consult the official Ruptela documentation and release notes.

## Feature Overview

The Smart5 is a compact, rugged vehicle tracker designed for reliable position reporting and vehicle telemetry. Its combination of cellular connectivity, multi constellation GNSS, CANbus and OBD data support, Bluetooth LE and vehicle I O options make it useful for mixed fleet operations, diagnostics and security workflows when paired with Plaspy.

- Real time GNSS location tracking using a multi constellation u blox receiver for improved position accuracy and time to first fix.
- Cellular connectivity with modern LTE and fall back to legacy networks for broad coverage and continuous reporting.
- CANbus and OBD data reading including CustomCAN support to surface engine and diagnostic information in Plaspy.
- Bluetooth LE 5.0 for connecting wireless sensors and accessories to combine location with auxiliary telemetry.
- Two form factors for installation flexibility with slim IP54 and rugged IP68 housings for harsh environments.
- Security oriented features like jamming detection and power disruption alerts to feed anti theft workflows in Plaspy.

## Core Features of Ruptela - Smart5

- LTE Cat 1 cellular modem with fallback to 2G for persistent connectivity across coverage conditions.
- CANbus and OBD interface support including CustomCAN for vehicle diagnostics and data extraction.
- Bluetooth LE 5.0 support to integrate wireless sensors and accessory devices.
- Multi constellation GNSS module from u blox for GPS GLONASS and Galileo positioning.
- Compact and rugged housings with IP54 and IP68 options for different installation needs.
- Built in 8 MB local memory for buffering records during temporary connectivity loss.
- Security monitoring including jamming detection and alerts for power disruption.
- Low power modes and an internal backup battery to maintain minimal reporting and resilience.

## How These Features Work with Plaspy

When Smart5 is deployed with Plaspy it streams location and telemetry where Plaspy ingests and presents position, event and diagnostic data for monitoring and reporting. Plaspy uses the incoming GNSS fixes, CAN and OBD frames, Bluetooth sensor readings and security events to create actionable views for operations teams.

- Live map positions and historical tracks for fleet visibility and route analysis in Plaspy.
- Vehicle diagnostics and fault code visibility from CANbus and OBD data shown in reports and dashboards.
- Fuel and consumption insights derived from CAN or analog inputs presented in Plaspy telemetry reports.
- Bluetooth sensor data such as temperature or door state available alongside location for cargo monitoring.
- Security events including jamming and power disruption surfaced as alerts for rapid response in Plaspy.
- Local buffering ensures records captured during connectivity gaps are uploaded to Plaspy after reconnection.

## Typical Use Cases

- Anti theft monitoring and fast response workflows using security alerts and configurable outputs.
- Mixed fleet vehicle monitoring where CANbus and OBD telemetry provide diagnostics across vehicle types.
- Fuel monitoring and consumption analysis using CAN and analog inputs to support cost control.
- Temperature sensitive cargo tracking by combining Bluetooth sensor telemetry with GPS location.
- Preventive maintenance and fault monitoring using diagnostic data from vehicle networks.
- Rental and construction fleet management where rugged hardware and local buffering ensure continuity.

## Feature Availability Notes

- Feature availability depends on the device firmware and hardware revision shipped by Ruptela for a given unit.
- Some telemetry functions require proper vehicle wiring or CAN/OBD connections and may vary by vehicle model.
- Bluetooth sensor support depends on compatible accessories and their firmware behavior.
- Regional cellular band support and certification can affect network performance and should be checked for your location.
- Plaspy automatically detects many tracker protocols to simplify setup but confirm device settings and firmware with Ruptela documentation.

## Why Use Plaspy with These Features

Using the Ruptela Smart5 with Plaspy gives organizations a combined solution for location visibility, vehicle diagnostics and operational oversight. Smart5 supplies position fixes, CANbus and OBD telemetry, Bluetooth sensor readings and security events, while Plaspy aggregates those inputs into maps, alerts and reports that help manage fleets, improve uptime and streamline maintenance workflows.

To learn more about how Plaspy works with compatible trackers visit https://www.plaspy.com. For the latest device specific specifications firmware notes and installation guidance confirm current details on the manufacturer site https://ruptela.com/ as features and behavior can change over time.
