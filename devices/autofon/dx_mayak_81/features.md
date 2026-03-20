---
slug: /autofon/dx_mayak_81/features
id: dx_mayak_81-features
sidebar_label: Features
title: AutoFon - DX Mayak 8.1 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the AutoFon DX Mayak 8.1 GPS tracker and how it integrates with Plaspy for long term asset tracking
keywords:
  - AutoFon DX Mayak 8.1
  - AutoFon GPS tracker
  - DX Mayak 8.1 features
  - DX Mayak 8.1 GPS tracker
  - AutoFon Plaspy compatibility
  - battery powered tracker
  - long term tracking
  - GLONASS GPS tracker
  - BLE presence tracking
  - movement crash SOS alerts
---

# AutoFon - DX Mayak 8.1 Features

This page provides a public summary of the AutoFon DX Mayak 8.1 features relevant to using the device with Plaspy. It focuses on practical, non sensitive capabilities and explains how the tracker reports location, telemetry and alarms into Plaspy powered monitoring environments.

Exact feature availability can vary by firmware version, hardware revision, installation type and manufacturer implementation. For device specific configuration details, advanced behavior and firmware release notes consult the manufacturer documentation and release materials.

## Feature Overview

The DX Mayak 8.1 is a compact, battery powered tracker designed for discreet anti theft protection and long term asset monitoring. It combines dual GNSS positioning with low power modes, event driven alarms and close range owner detection to keep vehicles and portable assets visible while conserving battery life.

- Dual GNSS positioning with GLONASS and GPS plus AGPS assistance for reliable location fixes.
- Low power interval tracking for multi year deployments and long battery standby in concealed installations.
- Event driven alerts including movement detection, crash detection and SOS alarm reporting.
- Rich telemetry sent with each message including battery level, internal temperature, satellite count and GSM signal.
- BLE based owner presence and close range locating via smartphone app for easy retrieval and proximity status.
- Robust offline handling with large non volatile packet storage and automatic retransmission after connection restores.

## Core Features of AutoFon - DX Mayak 8.1

- Plaspy compatible out of the box with standard GPRS reporting to monitoring servers and SMS fallback for redundancy.
- GLONASS plus GPS receiver with AGPS support and logical position correction for improved fix reliability.
- Low power modes and configurable tracking intervals designed for long term deployments on CR123A cell power.
- Built in accelerometer for movement, tilt and crash detection, and an internal SOS button for immediate alarm signals.
- BLE module for owner presence tagging and close range locating using a companion smartphone app.
- Non volatile message buffer sufficient to retain thousands of unsent GPRS packets and retransmit when connection returns.
- Compact form factor with IP54 and optional hermetic IP67 enclosure variants for concealed or exposed installations.
- Remote management options including server side updates, SMS commands and local configuration interfaces as provided by the manufacturer.

## How These Features Work with Plaspy

When integrated with Plaspy, the DX Mayak 8.1 reports location, telemetry and alarm events into centralized dashboards and notification workflows. Plaspy receives structured location updates and telemetry, preserves event history, and surfaces alerts for operator action and reporting.

- Real time location and telemetry updates appear in Plaspy maps and device dashboards for continuous visibility.
- Movement, crash and SOS events are represented as alarm events and can trigger notifications and workflows inside Plaspy.
- Battery level, satellite count, temperature and GSM signal are shown as telemetry fields to support maintenance planning and diagnostics.
- Stored packet retransmission ensures historical events are delivered to Plaspy after network outages to preserve continuity.
- BLE owner presence and close range locating can be reflected in Plaspy as proximity or presence indicators when the device reports those states.
- Plaspy automatically detects supported tracker protocols and accepts standard GPRS reporting to its monitoring endpoint for streamlined integration.

## Typical Use Cases

- Discreet vehicle anti theft protection where concealed mounting and long standby are required.
- Long term asset monitoring for trailers, containers and portable equipment with infrequent check ins.
- Fleet oversight for light vehicles and support equipment requiring periodic telemetry and event alerts.
- Personal emergency and vulnerable person monitoring when discreet location and SOS alerts are needed.
- Two wheel and off road vehicle tracking where compact form factor and concealment matter.
- Close range locating of assets in yards or depots using BLE assisted retrieval.

## Feature Availability Notes

- Feature availability depends on firmware version and hardware revision. Capabilities described here reflect typical device behavior but can vary by production batch.
- Installation and mounting location affect GNSS reception and battery life. Concealed installations may reduce satellite visibility and change reporting performance.
- BLE presence requires the companion smartphone app and appropriate user configuration to report owner proximity.
- SMS fallback depends on regional GSM coverage and SIM provisioning and is a useful redundancy when GPRS is unavailable.
- The DX Mayak 8.1 focuses on satellite and GSM positioning plus accelerometer based event detection. It does not include built in fuel sensors ignition inputs or immobilizer outputs.

## Why Use Plaspy with These Features

Using the DX Mayak 8.1 with Plaspy gives organizations a practical way to combine long battery standby, reliable positioning and event driven alarms with centralized monitoring and notification workflows. Plaspy collects location and telemetry, preserves event history during outages, and presents alarms in dashboards that help operations teams respond faster and maintain service continuity.

Learn more about how Plaspy can support deployments with trackers like the DX Mayak 8.1 at https://www.plaspy.com. For the latest device specific feature lists, firmware behavior and manufacturer implementation details verify information on the official AutoFon website https://www.autofon.ru/.
