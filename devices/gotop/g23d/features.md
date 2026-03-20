---
slug: /gotop/g23d/features
id: g23d-features
sidebar_label: Features
title: GOTOP - G23D Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the GOTOP G23D GPS tracker and how it works with Plaspy for vehicle monitoring and location visibility
keywords:
  - GOTOP G23D
  - GOTOP G23D features
  - GOTOP G23D GPS tracker
  - GOTOP G23D Plaspy
  - G23D tracking capabilities
  - GOTOP GPS BDS LBS
  - CDMA GPS tracker G23D
  - vehicle tracker G23D features
  - GOTOP G23D ACC detection
  - GOTOP G23D overspeed alarm
---

# GOTOP - G23D Features

This page provides a public feature summary for the GOTOP G23D GPS tracker and how those features are presented when the device is used with Plaspy. It focuses on practical, non-sensitive capabilities you can expect from the device and how Plaspy can surface position and event information for operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, cellular network region, and manufacturer implementation. Use this page as a compatibility and capability overview; consult the device manufacturer for the most current technical details and installation guidance.

## Feature Overview

The GOTOP G23D is a compact CDMA GPS tracker designed for a broad range of vehicles, offering multi‑constellation positioning and basic vehicle monitoring functions that are useful for fleet and individual tracking scenarios.

- Multi-mode positioning using GPS, BDS, and LBS for improved location reliability.
- Positioning accuracy specified around 5 meters for routine location tracking.
- Wide input voltage support from 9 V to 95 V to accommodate many vehicle types.
- Vehicle state monitoring including ACC detection, DC detection, and power off alarm.
- Operational controls and alerts such as remote power or fuel off and overspeed alarm.

## Core Features of GOTOP - G23D

- CDMA cellular connectivity supported by a ZTE MC8618 module for CDMA2000 1X 800 MHz networks.
- GPS + BDS + LBS positioning system with typical positioning accuracy around 5 meters.
- Wide voltage input range of 9 V to 95 V suitable for cars, taxis, trucks, motorcycles, and e-bikes.
- Vehicle monitoring features including ACC detection and DC detection to indicate ignition or power state.
- Remote power/fuel off capability and a power off alarm for theft response or remote disabling where supported.
- Overspeed alarm to notify when configured speed thresholds are exceeded.
- Micro SIM card slot and internal aerial for cellular communication.
- External I/O ports including channels for power/fuel off and ACC detection, plus a UART-TTL interface for integrations and diagnostics.

## How These Features Work with Plaspy

Plaspy aggregates location and event data from compatible trackers such as the G23D and presents them in dashboards, maps, and event streams for operational use. Plaspy automatically detects supported tracker protocols and accepts device reports for visualization and alerting.

- Real‑time location updates and breadcrumb trails appear on Plaspy maps so you can monitor movement and location history.
- Vehicle state events such as ACC on/off, power off alarms, and overspeed alarms are represented as timeline events and alerts inside Plaspy.
- Remote control functions reported by the device, like remote power or fuel off status, can be tracked from Plaspy when the device and installation support command execution.
- Plaspy accepts device connections over standard transport methods (UDP or TCP) and auto-detects the tracker protocol for straightforward integration.
- Data from the G23D feeds into Plaspy reporting and notifications so fleet managers can filter and act on events consistently.

## Typical Use Cases

- Fleet vehicle tracking for cars, taxis, and light trucks to improve routing and monitoring.
- Rental or leased vehicle oversight where compact installation and wide voltage tolerance are helpful.
- Motorcycle and e-bike tracking for location recovery and basic status monitoring.
- Remote detection of vehicle ignition or power status for operational audits.
- Overspeed monitoring to support driver behavior programs and safety oversight.
- Theft response workflows using power off alarm and remote power/fuel off where supported by hardware and installation.

## Feature Availability Notes

- Firmware version and hardware revision can change feature behavior; some functions may be added or restricted in later updates.
- Installation matters: ACC and DC detection depend on correct wiring to vehicle circuits and proper configuration during setup.
- Regional cellular network support varies; CDMA network availability should be confirmed for your deployment area.
- Remote power or fuel off capability depends on compatible wiring, external relay or cutoff hardware, and local regulations.
- Always consult the official GOTOP documentation for device-specific wiring diagrams, configuration procedures, and firmware release notes.

## Why Use Plaspy with These Features

Using Plaspy together with the GOTOP G23D provides a practical way to turn the device's positioning and vehicle state signals into operational visibility. Plaspy presents location data on maps, correlates state events like ACC and power alarms with movement, and offers centralized tools for alerting and historical reporting. For organizations managing mixed vehicle fleets or lightweight vehicles such as motorcycles and e-bikes, this combination helps improve situational awareness and supports timely responses to events.

To learn more about Plaspy and how it works with compatible trackers, visit https://www.plaspy.com. For the most current device specifications, firmware behavior, and manufacturer details for the GOTOP G23D, verify information on the official manufacturer site https://www.gotop.cc/.
