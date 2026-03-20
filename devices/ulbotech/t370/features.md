---
slug: /ulbotech/t370/features
id: t370-features
sidebar_label: Features
title: Ulbotech - T370 Features
sidebar_class_name: menu_item_tracker
description: Overview of Ulbotech T370 GPS tracker features and Plaspy compatibility for vehicle tracking, telemetry, immobilizer control and fleet management
keywords:
  - Ulbotech T370 features
  - Ulbotech T370 GPS tracker
  - T370 features
  - T370 Plaspy compatibility
  - Ulbotech T370 capabilities
  - T370 OBD tracker
  - Plaspy compatible tracker
  - vehicle tracking T370
  - T370 immobilizer
  - T370 FOTA support
---

# Ulbotech - T370 Features

This page describes the public feature context for using the Ulbotech T370 with Plaspy. It focuses on the T370’s practical capabilities, the kinds of telemetry and events the device supplies, and how those elements are surfaced and used inside Plaspy for monitoring, alerts, and reporting.

Exact feature availability can vary by firmware version, hardware revision, regional module variant, installation type and how the device is implemented in a specific vehicle. For device-specific technical details and the latest specifications consult the manufacturer documentation linked at the end of this page.

## Feature Overview

The Ulbotech T370 is a compact OBD form factor tracker designed for plug-and-play vehicle deployment and telematics integration with Plaspy. It is intended to deliver location fixes, movement events, and OBD-sourced vehicle parameters that Plaspy can ingest for real-time monitoring, reporting and automated workflows.

- Plug-and-play OBD installation for fast rollout across vehicle fleets.
- High-performance GNSS positioning using a u‑blox MAX‑7 receiver for reliable fixes and accurate location reporting.
- Cellular connectivity with Telit xE910 family modem variants to provide broad mobile network coverage.
- Internal 3-axis accelerometer to detect movement events and driver behavior indicators.
- Built-in digital immobilizer output to support remote immobilization workflows when used with Plaspy.
- FOTA-capable modem for remote firmware maintenance and updates.

## Core Features of Ulbotech - T370

- Plaspy compatibility for immediate integration of location and telemetry into dashboards, alerts, and reports.
- OBD port interface for power and vehicle-sourced parameters where supported by the vehicle.
- u‑blox MAX‑7 GNSS for fast satellite acquisition and improved positioning performance.
- Telit xE910 family cellular modem available in variants that support common GSM WCDMA and LTE bands.
- Internal 3-axis accelerometer for event detection such as crash or harsh driving indicators.
- Internal immobilizer digital output for engine cut or secure immobilization workflows.
- FOTA support for remote firmware updates via the modem and supported update channels.
- Compact OBD form factor with internal antennas and onboard backup battery for short power interruptions.

## How These Features Work with Plaspy

When the T370 is connected to Plaspy, its location fixes, movement events and available OBD parameters are processed into Plaspy’s monitoring and automation features. Plaspy uses incoming telemetry to populate device status, route history, events and rule triggers so operators can act from a single platform.

- Real-time location updates and historical route playback displayed in Plaspy maps and timelines.
- Accelerometer events and movement alerts translated into driver behavior or incident events for scoring and reporting.
- OBD-sourced vehicle parameters (when available) shown in Plaspy telemetry panels and used in custom reports.
- Geofence alerts and zone events fed into Plaspy rules for notifications and automated actions.
- Remote immobilizer control integrated into Plaspy workflows where device output and operational procedures permit.

## Typical Use Cases

- Fleet operations and dispatch monitoring for route visibility and vehicle utilization.
- Anti-theft monitoring and immobilization workflows tied to alerts and operator approval.
- Insurance telematics and driver profiling using accelerometer and OBD-derived data.
- Rental and shared mobility fleets requiring fast, noninvasive OBD installation and centralized oversight.
- Roadside assistance and vehicle recovery with accurate location and status reporting.

## Feature Availability Notes

- OBD-sourced data availability depends on the vehicle make, model and which parameters the vehicle exposes via the OBD interface.
- Cellular modem capabilities depend on the specific Telit xE910 variant installed and regional network support.
- Some features such as immobilizer control and FOTA require correct configuration, enabled workflows in Plaspy, and adherence to local operational procedures.
- Firmware version and hardware revision affect exact behavior and supported commands; manufacturers may change feature sets between releases.
- Installation quality and vehicle diagnostic wiring can influence which telemetry values are available to the device.

## Why Use Plaspy with These Features

Using the Ulbotech T370 with Plaspy gives organizations a fast way to add vehicle visibility, event monitoring and telemetry-driven workflows without extensive installation work. Plaspy consolidates the device’s location, accelerometer events and available OBD parameters into dashboards, alerts and reports that support operational oversight, incident response and analytics.

To learn more about how Plaspy can work with the T370 and other compatible trackers, visit https://www.plaspy.com. For the latest, device specific technical details, firmware notes and official specifications consult Ulbotech’s documentation at http://www.ulbotech.com/ since device features, firmware behavior, and manufacturer implementation details can change over time.
