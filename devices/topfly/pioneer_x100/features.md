---
slug: /topfly/pioneer_x100/features
id: pioneer_x100-features
sidebar_label: Features
title: TopFly - Pioneer X100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the TopFly Pioneer X100 and how it integrates with Plaspy for fleet tracking and monitoring
keywords:
  - TopFly Pioneer X100 features
  - TopFly Pioneer X100 GPS tracker
  - Pioneer X100 Plaspy
  - TopFly GPS tracker features
  - Pioneer X100 capabilities
  - Pioneer X100 BLE sensors
  - Pioneer X100 crash detection
  - TopFly vehicle tracker
  - Pioneer X100 FOTA support
  - Pioneer X100 LTE Cat 1
---

# TopFly - Pioneer X100 Features

This page provides a public, non sensitive feature overview of the TopFly Pioneer X100 and how its capabilities are used with Plaspy for location awareness, event monitoring, and operational oversight. It summarizes the device functions described by the manufacturer and explains the practical value these features bring when the tracker reports into Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. Wherever possible this page sticks to the manufacturer supplied feature set; for the latest device specific details and installation instructions consult TopFly documentation.

## Feature Overview

The Pioneer X100 is a compact wired GNSS tracker designed for fleet and vehicle security applications. It pairs global cellular connectivity and multi constellation GNSS positioning with input and accessory support to deliver real time location and event reporting useful for fleet operators and asset managers.

- Global LTE Cat 1 connectivity with 2G fallback for broader network coverage and consistent reporting
- Multi constellation GNSS support for reliable position fixes across regions
- Multiple digital inputs and outputs to report engine ignition, relay states, and accessory switches such as SOS buttons
- BLE 4.2 compatibility to integrate optional sensors for temperature, humidity, and door status
- Driver behavior detection and aggressive driving alerts combined with crash detection for incident awareness and reconstruction
- Remote firmware updates via FOTA to keep device behavior up to date without physical access

## Core Features of TopFly - Pioneer X100

- Wired GNSS tracking with multi constellation support for improved positioning
- Global cellular support using LTE Cat 1 with 2G fallback for areas with limited coverage
- Multiple digital inputs and outputs to monitor common vehicle signals and accessories
- Bluetooth Low Energy 4.2 support to connect external sensor accessories
- Driver behavior monitoring including detection of harsh events and aggressive driving alerts
- Crash detection and incident data collection to support post event analysis
- Over the air firmware update support for remote maintenance
- Compact form factor with options for IP41 standard protection and IP67 optional rating

## How These Features Work with Plaspy

When a Pioneer X100 is connected and reporting, Plaspy receives location and event data and surfaces it to operators for monitoring and decision making. Plaspy automatically recognizes common tracker protocols and ingests the telemetry that the device sends, so incoming location, input state, and event reports become immediately useful within the platform.

- Real time positions appear on Plaspy maps and are available for route playback and historical review
- Digital input events such as ignition on/off, relay activation, or accessory triggers can be shown as events or used to drive rules and notifications
- Driver behavior and crash detection reports can be surfaced as incidents or alerts for safety review and follow up
- BLE sensor readings reported by the device may be visible in Plaspy as additional sensor telemetry when the tracker is configured to forward that data
- Geo fence and alert logic in Plaspy can act on incoming location and event reports to notify teams about predefined conditions

## Typical Use Cases

- Fleet location tracking and route monitoring for commercial vehicles
- Driver safety programs using behavior alerts and incident reports to coach drivers
- Incident reconstruction using crash detection data and historical GPS traces
- Asset monitoring with BLE sensors for temperature sensitive loads or door status
- Security monitoring for vehicles that require wired installations with continuous power
- Operations that need remote firmware maintenance to keep device software current

## Feature Availability Notes

- Feature availability can differ by device firmware release and hardware revision; some behavior or sensor support may be updated over time
- Installation method and wiring determine which digital inputs and outputs are usable and how they are mapped to vehicle signals
- BLE sensor integration requires compatible accessories and local configuration to expose sensor data to the tracker
- Optional device variants or regional models may alter water resistance rating or supported cellular bands
- Plaspy visibility for specific events depends on the tracker reporting configuration and the data fields the device sends

## Why Use Plaspy with These Features

Using the Pioneer X100 with Plaspy gives organizations a single place to view live locations, receive event alerts, and analyze historical data. Plaspy consolidates incoming position reports, digital input events, and behavioral alerts so operations teams can monitor fleets, respond to incidents more quickly, and extract actionable insights from device telemetry.

If you want to learn more about how Plaspy works with devices like the Pioneer X100, visit https://www.plaspy.com. For the most current and detailed device specifications, firmware notes, and implementation guidance consult the manufacturer at https://www.topflytech.com/ as device features and firmware behavior can change over time.
