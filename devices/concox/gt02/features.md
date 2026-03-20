---
slug: /concox/gt02/features
id: gt02-features
sidebar_label: Features
title: Concox - GT02 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox GT02 GPS tracker and how its capabilities integrate with Plaspy for vehicle and asset tracking
keywords:
  - Concox GT02 features
  - Concox GT02 GPS tracker
  - GT02 features Plaspy
  - Concox GT02 capabilities
  - GT02 vehicle tracking
  - GT02 real-time tracking
  - Concox tracker Plaspy compatibility
  - GT02 acceleration sensor
  - GT02 quad-band GPS tracker
  - Concox GT02 installation
---

# Concox - GT02 Features

This page provides a public feature overview of the Concox GT02 and how its capabilities are used with Plaspy for tracking, monitoring, and operational visibility. It covers the main, non-sensitive device functions reported in manufacturer materials and describes practical uses inside Plaspy rather than step by step configuration procedures.

Exact feature availability can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Where possible this page reflects capabilities described by the device documentation; for device-specific programming, firmware behavior, or the latest specifications consult the manufacturer documentation.

## Feature Overview

The Concox GT02 combines GPS positioning and cellular communication to provide real-time location reporting and basic motion-aware behavior. Its design focuses on continuous tracking for vehicles and assets with flexible installation options.

- Real-time GPS tracking for position monitoring and map-based visibility.
- Quad-band GSM cellular support for broad regional compatibility.
- Built-in high-sensitivity GPS and integrated antennas to support reliable location fixes.
- Auto start when external power is connected to enable continuous operation after installation.
- Built-in watchdog and auto-reboot behavior to improve uptime after faults.
- Acceleration sensor to support intelligent power saving and improve resistance to static drift.

## Core Features of Concox - GT02

- GPS plus GSM and GPRS support for position reporting and cellular data transmission.
- Quad-band GSM frequency support for use across multiple regions.
- High-sensitive GPS chipset and integrated GPS and GSM antennas for reliable positioning.
- Real-time tracking capability for live location updates.
- Auto start on power connection to resume tracking without manual intervention.
- Built-in watchdog function that can automatically reboot the device in certain error conditions.
- Built-in acceleration sensor that aids power saving and helps detect movement versus idle state.
- Three LED indicators for onsite status: GPS (blue), GSM (green), and power (red).

## How These Features Work with Plaspy

Plaspy ingests and presents the device's position and status data to give operators visibility into assets and vehicles. The GT02's core capabilities translate into map views, status indicators, and historical tracking inside the Plaspy platform.

- Live location updates appear on Plaspy maps when the GT02 reports position data.
- Movement and idle information inferred from the acceleration sensor can be used by Plaspy to show whether a device is in motion or stationary.
- Device uptime and reconnects driven by the watchdog and auto start behaviors are reflected as online or offline status in Plaspy.
- Basic installation and status indicators such as LED feedback help technicians validate installs before finalizing monitoring in Plaspy.
- Plaspy automatically detects common tracker protocols and presents reported data without requiring users to specify low-level protocol details.

## Typical Use Cases

- Fleet vehicle location tracking for route oversight and operational coordination.
- Asset monitoring where periodic or continuous position visibility is required.
- Covert or open installations where hidden or visible mounting is needed depending on the operation.
- Long term location history review for route analysis and operational auditing.
- Remote monitoring where automatic restart and reliable cellular reporting improve resilience.

## Feature Availability Notes

- Feature behavior can change with different firmware versions; manufacturers occasionally update behavior or available settings.
- Hardware revisions and regional variants may alter supported cellular bands or other minor capabilities.
- Installation choices such as covert versus open mounting can affect GPS reception and cellular signal quality.
- Power wiring and supply characteristics may affect auto start and watchdog behavior; follow installation guidance.
- Always check the manufacturer documentation for the most current device-specific details and configuration options.

## Why Use Plaspy with These Features

Using the Concox GT02 with Plaspy provides a practical way to turn the device's position and motion reports into operational visibility. Plaspy's map interface, device status views, and historical playback help teams manage assets and monitor locations without needing to interpret raw device streams.

To learn more about how Plaspy can display and manage data from trackers like the GT02 visit https://www.plaspy.com. For the latest device specifications, firmware notes, and official manufacturer documentation verify details at https://www.iconcox.com/. Device features, firmware behavior, and implementation details can change over time so consult manufacturer resources for the most current information.
