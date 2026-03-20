---
slug: /teltonika/fmm003/features
id: fmm003-features
sidebar_label: Features
title: Teltonika - FMM003 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Teltonika FMM003 GPS tracker and how it works with Plaspy for fleet monitoring
keywords:
  - Teltonika FMM003
  - Teltonika FMM003 features
  - Teltonika FMM003 GPS tracker
  - FMM003 OBD data
  - FMM003 LTE Cat M1 tracker
  - FMM003 fleet management
  - FMM003 Plaspy compatibility
  - OBD II tracker Teltonika
  - FMM003 GNSS support
  - Teltonika FMM003 functions
---

# Teltonika - FMM003 Features

This page provides a public, non-sensitive feature overview of the Teltonika FMM003 and how its capabilities are used with Plaspy for fleet monitoring and operational visibility. It describes the device functions that are relevant to Plaspy users and how reported telemetry and events can be interpreted inside the Plaspy platform.

Exact feature availability and behavior may vary by firmware version, hardware revision, vehicle make and model, and installation method. The information here is grounded in the device description and is intended as a practical guide; always verify feature sets and current behavior with the device manufacturer and by checking the installed firmware on your units.

## Feature Overview

The FMM003 is an OBD plug‑and‑play tracker designed for fleet use, combining cellular connectivity options with vehicle parameter reading and a set of built‑in event detections. It focuses on delivering location, vehicle state, and event visibility while simplifying installation via the OBD‑II interface.

- OBD OEM parameter reading for odometer and fuel level reporting to improve fleet monitoring accuracy
- Cellular connectivity with LTE Cat M1 and NB IoT plus fallback to 2G for wide area coverage
- Multi‑constellation GNSS support for robust positioning in varied environments
- Compact plug‑and‑play OBD‑II installation for fast deployment in compatible vehicles
- Built‑in event detections such as overspeed, towing, unplug, crash, excessive idling, and jamming detection
- Local data storage capability for temporary buffering when cellular is unavailable

## Core Features of Teltonika - FMM003

- OBD OEM data reading including direct access to odometer and fuel level where the vehicle and manufacturer support those parameters
- LTE Cat M1 and NB IoT cellular connectivity with fallback to 2G for broader coverage
- Support for multiple GNSS systems to improve fix reliability and accuracy
- Plug‑and‑play connection via the vehicle OBD‑II port for simple installation
- Internal flash memory for buffering position and event data during connectivity outages
- Built‑in event and driving detections including overspeed, excessive idling, unplug/tamper, towing, crash detection, and jamming detection
- Support for configuration and firmware updates via Teltonika tools and FOTA methods, and mobile configuration with the manufacturer app

## How These Features Work with Plaspy

Plaspy ingests device reports and presents location and event information in a consolidated fleet view. The FMM003's combination of OBD data and event detections provides richer telemetry that Plaspy can surface for operational use.

- Real‑time and historical GPS positions are displayed in Plaspy for route visibility and location awareness
- OBD‑sourced odometer and fuel level values reported by the device can be recorded and shown in vehicle telemetry panels
- Detected events such as overspeed, towing, unplug, crash, and excessive idling are reported as events or alerts in Plaspy for operational follow up
- Devices can be pointed at Plaspy servers (for example the Plaspy server host) and Plaspy automatically detects the tracker protocol to accept incoming reports
- Local buffering on the device helps ensure that position and OBD records reach Plaspy after temporary coverage loss

## Typical Use Cases

- Tracking vehicle location and collecting odometer data for maintenance scheduling and mileage accounting
- Monitoring fuel level trends and basic fuel visibility when supported by the vehicle OBD data
- Detecting and alerting on events like unplugging, towing, jamming, or crash to improve security and response
- Reducing installation time for large fleets through OBD‑II plug‑and‑play deployment
- Improving route management and operational oversight with combined GNSS and vehicle telemetry
- Supporting operations in areas with variable cellular coverage by using NB IoT or LTE Cat M1 and fallback options

## Feature Availability Notes

- OBD parameter availability depends on the vehicle make, model, and the manufacturer OEM parameter list supported by the device
- Some detections and telemetry rely on specific firmware capabilities and may change across firmware or hardware revisions
- Cellular behavior and coverage depend on local operator support for LTE Cat M1 and NB IoT in your region and device SIM configuration
- Installation type and physical access to the OBD‑II port can affect which parameters are available and how reliably the device reports
- Confirm supported vehicle models and parameter lists with the official Teltonika supported vehicle information and by testing on the target vehicles

## Why Use Plaspy with These Features

Using the Teltonika FMM003 with Plaspy gives organizations unified visibility into location, odometer, and select vehicle parameters reported via OBD. Plaspy collects position and event reports and presents them alongside other fleet data, enabling operational oversight, alerts, and reporting that make it easier to manage vehicles at scale.

To learn more about Plaspy and how the platform ingests and displays tracker data, visit https://www.plaspy.com. For the most current device specifications, firmware details, supported vehicle lists, and manufacturer guidance, verify features on the official Teltonika website https://www.teltonika-gps.com/
