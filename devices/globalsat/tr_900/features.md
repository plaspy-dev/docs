---
slug: /globalsat/tr_900/features
id: tr_900-features
sidebar_label: Features
title: GlobalSat - TR-900 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the GlobalSat TR-900 OBDII GPS tracker and how its capabilities map into Plaspy for vehicle tracking and diagnostics
keywords:
  - GlobalSat TR-900
  - TR-900 features
  - GlobalSat GPS tracker
  - TR-900 OBDII
  - TR-900 diagnostics
  - TR-900 Plaspy
  - vehicle tracking OBDII
  - GPS OBDII tracker
  - harsh driving detection
  - mileage reporting
---

# GlobalSat - TR-900 Features

This page provides a public feature summary for the GlobalSat TR-900 and describes how its capabilities can be used with Plaspy for vehicle tracking and diagnostics. It focuses on user facing functions and practical value when the TR-900 is deployed with Plaspy to provide location awareness, event reports, and OBDII based vehicle data.

Exact feature availability and behavior can vary by firmware version, hardware revision, vehicle make and year, installation method, and manufacturer implementation. Users should treat this page as feature context for Plaspy integration and review manufacturer documentation for device specific details.

## Feature Overview

The GlobalSat TR-900 is a plug and play OBDII dongle tracker that combines GNSS positioning and vehicle diagnostic data reporting. It is designed for straightforward installation, continuous power from the vehicle OBDII port, and configurable event reporting that links OBDII parameters with GPS location.

- Plug and play OBDII dongle for quick installation in compatible passenger vehicles
- GPS positioning for location tracking and route history
- Captures OBDII diagnostic data including DTCs and vehicle status parameters
- 3G UMTS and GPRS network connectivity for regular data transmission
- High sensitivity G sensor to detect harsh driving and impact events
- Configurable event based reporting for combining OBDII data and GPS context

## Core Features of GlobalSat - TR-900

- OBDII dongle form factor for powering the device and accessing vehicle diagnostics
- GPS location reporting for real time and historical position tracking
- 3G capable connectivity to transmit data over UMTS and GPRS networks
- High sensitive G sensor for measuring G force and identifying harsh driving or impacts
- Diagnostic Trouble Code (DTC) capture and MIL status reporting
- Event based protocol allowing custom alerts that combine OBDII values and GPS context
- Alerts for over speeding, RPM over revving, and coolant temperature as supported by the vehicle OBDII data
- Mileage accumulation reporting based on tracked movement and reported vehicle data

## How These Features Work with Plaspy

When connected to Plaspy, the TR-900's combined GPS and OBDII capabilities provide a unified view of vehicle location and diagnostic state. Plaspy ingests the device reports and surfaces location, events, and vehicle data for monitoring and reporting.

- Live and historical GPS tracking shown on Plaspy maps and timelines
- Event alerts such as speeding, harsh driving, and impact reports appear in Plaspy event lists when emitted by the device
- OBDII derived information like DTCs, MIL status, RPM related alerts, and coolant temperature alerts are displayed when the tracker supplies those fields
- Mileage accumulation and trip summaries reported by the device can be used in Plaspy reports and logs
- Custom event combinations configured at the device level can translate into custom alerts and records in Plaspy

## Typical Use Cases

- Fleet location tracking combined with vehicle diagnostic visibility for operational oversight
- Driver behavior monitoring using G sensor based harsh driving and impact reports
- Preventive maintenance workflows triggered by DTCs or coolant temperature alerts
- Accurate mileage logging for billing, routing, or vehicle usage reporting
- Event based alerts for overspeeding and RPM over revving to improve safety and compliance

## Feature Availability Notes

- The exact set of OBDII parameters accessible depends on vehicle make, model, and supported OBDII PIDs
- Firmware level and hardware revisions of the TR-900 influence available alerts, reporting intervals, and event customization
- 3G network availability and carrier support vary by region and may affect data transmission reliability
- Installation location and vehicle wiring can affect sensor performance and OBDII data access
- Always consult the manufacturer documentation for the device firmware notes and detailed specifications

## Why Use Plaspy with These Features

Using the GlobalSat TR-900 with Plaspy lets organizations combine GPS location and vehicle diagnostic data in a single monitoring platform. That combination helps teams monitor routes, detect and investigate harsh driving or impacts, track mileage, and surface diagnostic events that can inform maintenance and safety programs.

To learn more about how Plaspy can work with compatible trackers like the TR-900 visit https://www.plaspy.com. For the most current device specific feature details, firmware notes, and manufacturer guidance please verify information on the GlobalSat website https://www.globalsat.com.tw/.
