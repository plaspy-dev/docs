---
slug: /teltonika/fmc00a/features
id: fmc00a-features
sidebar_label: Features
title: Teltonika - FMC00A Features
sidebar_class_name: menu_item_tracker
description: Overview of Teltonika FMC00A tracker features and how it integrates with Plaspy for OBD data and real time vehicle monitoring
keywords:
  - Teltonika FMC00A features
  - Teltonika FMC00A GPS tracker
  - FMC00A OBD II tracker
  - FMC00A Plaspy compatibility
  - OBD vehicle tracking
  - LTE Cat 1 tracker
  - vehicle telematics tracker
  - real time vehicle monitoring
  - geofence and trip reporting
  - Teltonika tracker capabilities
---

# Teltonika - FMC00A Features

This page describes the public feature context of the Teltonika FMC00A and how those capabilities can be used with Plaspy for vehicle tracking and monitoring. It focuses on practical, non-sensitive information about what the FMC00A provides and how those data and events appear in a fleet management environment managed by Plaspy.

Exact feature availability and behavior can vary by device firmware, hardware revision, vehicle make and model, and installation type. For device specific details such as supported OBD parameters for a particular vehicle, firmware change logs, or hardware variant differences, consult the official Teltonika documentation.

## Feature Overview

The FMC00A is a plug and play OBD-II tracker designed for North America with LTE Cat 1 connectivity and fallback to 3G. It delivers location tracking, readout of OBD OEM parameters, and a set of built-in detection and reporting features intended to support fleet visibility and basic driver and vehicle monitoring.

- Plug and play OBD II installation for quick deployment in compatible vehicles
- LTE Cat 1 connectivity with 3G fallback to maintain network availability
- Reading OBD OEM parameters including odometer and fuel level where supported by the vehicle
- Multi constellation GNSS support for reliable positioning across global systems
- Onboard detections such as accelerometer based driving events, jamming detection, and unplug or towing alerts

## Core Features of Teltonika - FMC00A

- Plug and play OBD II form factor for simple installation and removal
- LTE Cat 1 cellular data with fallback to 3G for wider coverage in North America
- OBD OEM parameter readout enabling odometer and fuel level reporting when available from the vehicle
- Multi GNSS support including GPS, GLONASS, GALILEO, BEIDOU and assisted positioning options for improved accuracy
- Accelerometer based events used for green driving metrics and over speeding detection scenarios
- Jamming detection and other tamper related monitoring
- Geofencing support including auto geofence and manual geofence scenarios
- Support for firmware updates and configuration using FOTA WEB, FOTA, Teltonika Configurator, or the FMBT mobile app

## How These Features Work with Plaspy

Plaspy ingests the FMC00A data to provide real time location, telemetry, and event visibility in fleet dashboards. Plaspy automatically detects supported tracker protocols to simplify device onboarding and reporting.

- Real time GPS position and movement history visible in Plaspy maps and trip reports
- OBD derived metrics such as odometer readings and reported fuel level shown when available from the vehicle
- Event visibility for accelerometer triggers, unplug or towing detection, jamming alerts, and geofence entries and exits
- Trip scenarios and excessive idling or driving event summaries available for operational review
- Devices can be configured to report to the Plaspy server and Plaspy will surface device status and firmware update state where available

## Typical Use Cases

- Fleet location monitoring with OBD based odometer and fuel level insight
- Maintenance and mileage tracking based on odometer readouts reported from the vehicle
- Monitoring driver behavior and green driving indicators using accelerometer driven events
- Tamper and theft awareness via unplug detection, towing detection, and jamming alerts
- Quick deployment for rental or shared vehicle fleets through the plug and play OBD interface
- Geofence based site access control and automated trip recording for billing or compliance

## Feature Availability Notes

- OBD parameter availability depends on the vehicle manufacturer and model; some OEM parameters may not be exposed on all vehicles
- Firmware version and hardware revision can enable or change certain detections and reporting behavior
- Regional variants and certification focus the FMC00A on North America; confirm region specific approvals with the manufacturer
- Some advanced features require configuration or firmware updates via Teltonika tools such as FOTA WEB or the Teltonika Configurator
- Installation type and placement (for example direct OBD port connection) affects which vehicle parameters are readable

## Why Use Plaspy with These Features

Using the FMC00A with Plaspy gives organizations a straightforward way to combine OBD sourced vehicle data with location and event reporting in a single fleet management view. Plaspy’s device onboarding and automatic protocol detection reduce setup friction, while dashboards and alerts make it easier to act on odometer, fuel level, geofence, and safety related events reported by the tracker.

If you want to learn more about how Plaspy can work with Teltonika trackers, visit https://www.plaspy.com. Please verify the latest device specific feature details, firmware behavior, and manufacturer documentation at https://www.teltonika-gps.com/ since features and implementations can change over time.
