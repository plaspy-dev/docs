---
slug: /atrack/ax11/features
id: ax11-features
sidebar_label: Features
title: ATrack - AX11 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the ATrack AX11 OBDII GPS tracker and how it integrates with Plaspy for fleet telematics and vehicle monitoring
keywords:
  - ATrack AX11 features
  - ATrack AX11 GPS tracker
  - AX11 OBDII tracker
  - AX11 Plaspy compatibility
  - OBDII plug and play tracker
  - AX11 vehicle telemetry
  - AX11 GNSS tracking
  - AX11 LTE tracker
  - fleet tracking AX11
  - AX11 driving behavior
---

# ATrack - AX11 Features

This page describes the public feature context for using the ATrack AX11 with Plaspy. It summarizes the AX11's practical capabilities as an OBDII plug‑and‑play tracker, highlights how its telemetry and sensor data map to fleet and vehicle monitoring workflows, and explains what users can expect when deploying the device with Plaspy for live tracking and reporting.

Exact feature availability for any individual unit can vary by device firmware, hardware revision, regional variant, installation method and the vehicle's own bus implementation. For the most current device specific details, always consult the official manufacturer documentation and release notes.

## Feature Overview

The AX11 is designed for fast deployment and vehicle centric telematics. It provides location tracking, vehicle bus telemetry, local logging and motion events in a compact OBDII form factor that integrates with fleet platforms such as Plaspy.

- Plug-and-play OBDII installation for rapid deployment across passenger cars and commercial vehicles.
- LTE cellular connectivity with support for common transport methods to deliver real-time updates to telematics platforms.
- Integrated GNSS positioning for consistent location fixes and historical route replay.
- Vehicle bus telemetry support that enables capture of OBDII and heavy vehicle protocols where available.
- Local flash storage to buffer logs and upload batches after reconnects or coverage gaps.
- Built-in motion sensors for driving behavior and harsh event detection, plus optional BLE support for peripheral sensors.

## Core Features of ATrack - AX11

- OBDII SAE J1962 Type B plug-and-play form factor for fast installation without hardwiring.
- LTE cellular connectivity with both mainstream and low power module variants for network coverage.
- Integrated GPS/GLONASS GNSS engine to provide vehicle location and route history.
- Broad vehicle-bus protocol compatibility including OBDII and heavy vehicle protocols where supported by the vehicle.
- Local log storage for buffered data when cellular coverage is intermittent.
- Onboard motion sensing with accelerometer and gyroscope for harsh event detection and driver scoring.
- Optional Bluetooth Low Energy support for connecting compatible accessories and sensors.
- Remote device management capabilities including over-the-air firmware updates and remote configuration.

## How These Features Work with Plaspy

When used with Plaspy, the AX11 streams vehicle position, vehicle-bus telemetry and sensor events to the platform so fleet managers and operators can monitor assets and analyze behavior. Plaspy ingests the device data to present live maps, event timelines and historical reports.

- Real-time GNSS location and movement data appear on Plaspy maps and vehicle histories for monitoring and dispatch.
- OBDII and heavy vehicle telemetry received from the device can be surfaced in Plaspy reports where the vehicle exposes those parameters.
- Local logs stored on the device are uploaded to Plaspy after reconnects to ensure continuity of historical data.
- Driving behavior events derived from accelerometer and gyroscope readings can be shown in Plaspy for coaching and safety analysis.
- Optional BLE sensor data can extend telemetry in Plaspy when BLE peripherals are paired with the device.

## Typical Use Cases

- Fleet management for route visibility, asset utilization and basic vehicle health indicators.
- Usage based insurance and driver scoring programs that combine vehicle-bus data with motion events.
- Car rental and shared mobility services that need quick installation and reliable location reporting.
- Parental and teen driver monitoring with event reporting for harsh braking and location history.
- Vocational and heavy-duty vehicle telemetry when used with compatible adapters and vehicle interfaces.
- Vehicle centric IoT deployments that require local logging and remote device management.

## Feature Availability Notes

- Some functions depend on vehicle support; OBDII and CAN parameters are only available if the vehicle exposes them.
- Firmware version and hardware variant determine exact behavior for GNSS sensitivity, power modes and telemetry sets.
- Regional cellular variants and carrier certification affect which LTE bands and module options are supplied.
- Optional features such as BLE peripherals, adapters for heavy vehicle buses, and backup battery behavior may differ by model and accessory choice.
- Consult the manufacturer for details about supported accessory lists, firmware releases and configuration methods.

## Why Use Plaspy with These Features

Combining the AX11 with Plaspy gives organizations practical visibility into vehicle location, basic vehicle-bus telemetry and motion events without complex installations. Plaspy organizes incoming device data into live maps, historical reports and event timelines so teams can monitor operations, analyze driver behavior and respond to incidents efficiently.

If you want to learn more about how Plaspy can work with compatible trackers like the AX11, visit https://www.plaspy.com. For the most current device specifications, firmware notes and accessory information, please verify details with the manufacturer at https://www.atrack.com.tw/. Device features and firmware behavior can change over time so refer to official manufacturer documentation for the latest information.
