---
slug: /concox/jm_bl11/features
id: jm_bl11-features
sidebar_label: Features
title: Concox - JM-BL11 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Concox JM-BL11 bike lock tracker and how it integrates with Plaspy for fleet tracking and anti theft management
keywords:
  - Concox JM-BL11
  - Concox JM-BL11 features
  - Concox JM-BL11 GPS tracker
  - JM-BL11 bike lock tracker
  - micro mobility GPS tracker
  - Plaspy compatible tracker
  - GNSS A-GPS LBS tracking
  - Bluetooth 4.0 LE unlocking
  - solar assisted bike tracker
  - tamper resistant GPS lock
---

# Concox - JM-BL11 Features

This page provides a public, non-sensitive overview of the Concox JM-BL11 feature set as it relates to use with Plaspy. It is intended to help operators and integrators understand the tracker’s practical capabilities, how those capabilities map to fleet monitoring and event workflows in Plaspy, and what to expect when deploying JM-BL11 units at scale.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and installation choices. For device-specific technical details, configuration guides, and the latest firmware notes consult the manufacturer documentation and release notes.

## Feature Overview

The JM-BL11 is a purpose-built, rugged bike-sharing lock tracker that combines GNSS positioning, long field runtime, and local user unlocking to support large distributed micro-mobility fleets. It is designed to provide continuous location and event telemetry while offering anti-theft and operational features that integrate with fleet management platforms such as Plaspy.

- GNSS positioning with GPS, A-GPS, and LBS fallback to maintain location awareness in urban and mixed environments.
- LTE Cat M1 / NB2 connectivity with cellular fallback options for wide area telemetry and event reporting.
- Long-life internal battery with an optional solar charging option to reduce maintenance visits.
- Bluetooth 4.0 LE and QR-code based local unlocking for rider interactions and app-driven workflows.
- Tamper-resistant mechanics with motion and vibration alerts for anti-theft detection and incident reporting.

## Core Features of Concox - JM-BL11

- GNSS positioning including GPS and A-GPS plus LBS fallback for consistent location fixes.
- LTE Cat M1 / NB2 cellular connectivity with fallback options for network resilience.
- Long-capacity battery with optional solar charging to extend field uptime.
- Bluetooth 4.0 LE support for local unlocking and device interactions.
- Tamper resistance and motion detection with accelerometer-driven alerts.
- TLS secured communications for encrypted telemetry and event reporting.
- On-device storage and buffering to preserve data during temporary network outages.
- Compact, IP66-rated rugged enclosure designed for outdoor micro-mobility use.

## How These Features Work with Plaspy

When integrated with Plaspy, JM-BL11 devices send location, telemetry, and event data that Plaspy ingests to provide live visibility and historical reporting. Plaspy automatically detects supported tracker protocols and surfaces the device data in fleet dashboards and maps to help operators manage availability and incidents.

- Live GNSS location updates and fallback positioning presented on Plaspy maps and device history.
- Motion and tamper events flagged in Plaspy as alerts for operator review and response.
- Battery level and solar charge indicators visible in device telemetry to support maintenance scheduling.
- Bluetooth unlocking events and QR-code interactions logged as operational events in Plaspy.
- Geo-fence and zone-based events supported in Plaspy for location-based enforcement and monitoring.

## Typical Use Cases

- Stationless or dockless bike-sharing fleets requiring real-time location and availability monitoring.
- Anti-theft detection and recovery workflows using tamper and motion alerts combined with location reporting.
- Solar-assisted deployments in areas where extended battery life reduces field service visits.
- User-facing unlocking flows that combine QR-code or Bluetooth unlock with backend event logging.
- Operational maintenance planning driven by battery and event telemetry for large distributed fleets.

## Feature Availability Notes

- Feature presence and behavior depend on the device firmware version and any regional hardware variants.
- Installation method and mounting location can affect GNSS reception, motion detection sensitivity, and solar charging performance.
- Manufacturer configuration options or carrier provisioning may change how cellular connectivity and fallback operate.
- Some telemetry fields and event names shown in Plaspy depend on the data the device firmware transmits.
- For the most current technical specifications, always consult the official manufacturer documentation.

## Why Use Plaspy with These Features

Using the Concox JM-BL11 with Plaspy gives operators a practical path to combine rugged, micro-mobility hardware with fleet-grade visibility. Plaspy surfaces real-time location, tamper and motion alerts, battery and charge telemetry, and unlocking events so teams can monitor availability, respond to incidents, and prioritize maintenance across large deployments.

Learn more about how Plaspy can work with devices like the JM-BL11 at https://www.plaspy.com. For the latest device specifications, firmware information, and manufacturer implementation details verify current information on the official Concox website https://www.iconcox.com/.
