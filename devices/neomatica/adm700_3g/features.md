---
slug: /neomatica/adm700_3g/features
id: adm700_3g-features
sidebar_label: Features
title: Neomatica - ADM700 3G Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Neomatica ADM700 3G and how it integrates with Plaspy for fleet and industrial tracking
keywords:
  - Neomatica ADM700 3G
  - ADM700 3G features
  - Neomatica GPS tracker
  - ADM700 3G Plaspy
  - ADM700 3G GPS GLONASS
  - ADM700 3G CAN FMS
  - ADM700 3G IP65 IK07
  - ADM700 3G dual SIM
  - ADM700 3G telemetry
  - vehicle tracking Plaspy
---

# Neomatica - ADM700 3G Features

This page describes the public feature context for using the Neomatica ADM700 3G GPS tracker with Plaspy. It explains the ADM700 3G capabilities that are relevant when integrating devices into Plaspy for live tracking, telemetry, and fleet monitoring without providing sensitive configuration details.

Exact feature availability can vary by firmware version, hardware revision, installation type, and manufacturer implementation. Where the ADM700 3G supports specific functions such as GPS plus GLONASS positioning, EGTS and open protocol connectivity, CAN bus telemetry, or remote firmware updates, Plaspy can surface those capabilities as reported by the device and supported by the deployed firmware.

## Feature Overview

The ADM700 3G is a rugged telematics unit designed for vehicle and industrial deployments and is compatible with Plaspy for real time location and telemetry reporting. It combines high sensitivity GNSS, cellular data connectivity, extensive inputs and outputs, and industrial protection to support continuous tracking and operational oversight.

- High accuracy positioning with combined GPS and GLONASS support and a high sensitivity GNSS receiver for faster fixes.
- Industrial ready enclosure with IP65 dust and water resistance and IK07 impact protection for harsh environments.
- Cellular connectivity on 3G UMTS bands with GPRS EDGE and HSDPA data transmission plus dual SIM for network resilience.
- Extensive I O and CAN support for vehicle telemetry, sensor inputs, event capture and control outputs.
- Internal logging and microSD support for offline record buffering and later upload to Plaspy.

## Core Features of Neomatica - ADM700 3G

- Combined GPS and GLONASS positioning with a high sensitivity multi channel GNSS receiver.
- 3G UMTS cellular data with GPRS EDGE HSDPA support and dual SIM capability for redundancy.
- EGTS support and an open protocol that facilitate server side integration with platforms such as Plaspy.
- Multiple analog and discrete inputs, pulse inputs, open collector outputs, and CAN support including FMS J1939.
- Remote firmware update capability over cellular data to simplify fleet maintenance.
- Internal non volatile logging up to large record counts and microSD card support for expanded offline storage.
- Rugged power design with wide operating voltage tolerance and built in surge protections for vehicle use.
- Environmental protection rated to IP65 with IK07 impact resistance for industrial installations.

## How These Features Work with Plaspy

When an ADM700 3G device is deployed, it reports GNSS fixes, inputs and event records into Plaspy so operators can monitor vehicles and assets in real time and review historical data. Plaspy automatically detects supported tracker protocols and ingests the telemetry the device sends for visualization and alerts.

- Location fixes and periodic position updates appear on Plaspy maps and support route playback and history review.
- CAN bus messages and analog or discrete input events reported by the device are available in Plaspy for diagnostics and custom reporting.
- Offline records stored in internal memory or on microSD are uploaded to Plaspy when connectivity resumes, preserving continuity of historical data.
- Remote firmware updates reported as supported by the device simplify fleet maintenance and can be coordinated alongside Plaspy deployments.
- Plaspy supports standard device connectivity patterns and will accept device traffic addressed to the Plaspy server domain for integration and routing.

## Typical Use Cases

- Fleet management for vans trucks and mixed fleets requiring real time tracking, route history and telemetry.
- Heavy equipment monitoring where rugged protection and wide voltage tolerance are required.
- Logistics and trailer tracking using internal logging to capture events when cellular coverage is intermittent.
- Anti theft and security monitoring that uses event inputs accelerometer events and remote outputs for response workflows.
- Sensor and temperature monitoring using supported 1 Wire or other analog inputs for cargo sensitive shipments.
- Long term deployments where remote firmware updates and dual SIM resilience reduce maintenance overhead.

## Feature Availability Notes

- Feature presence depends on the unit firmware and specific hardware revision installed by the manufacturer or integrator.
- Regional cellular band support and certification vary by market and may affect available network connectivity.
- Some features such as CAN message sets or 1 Wire sensor support require matching vehicle wiring and correct configuration during installation.
- Offline logging capacity and microSD compatibility are subject to file system and card size limits described by the manufacturer.
- For device control outputs and safety relevant integrations follow installation best practices and manufacturer guidance.

## Why Use Plaspy with These Features

Using the ADM700 3G with Plaspy gives organizations a way to centralize location awareness and telemetry for vehicles and industrial assets. Plaspy collects GNSS positions, device reported inputs, CAN telemetry and logged records to provide operational visibility, configurable alerts, and historical reports that help with dispatching maintenance and analyzing fleet behavior.

If you want to explore how Plaspy can ingest telemetry from Neomatica devices and present it in dashboards and reports, learn more about Plaspy at https://www.plaspy.com. Please verify the latest device specific features firmware behavior and manufacturer implementation details on the Neomatica website https://neomatica.com/ since device capabilities and firmware can change over time.
