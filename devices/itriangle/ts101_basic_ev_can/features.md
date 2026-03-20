---
slug: /itriangle/ts101_basic_ev_can/features
id: ts101_basic_ev_can-features
sidebar_label: Features
title: iTriangle - TS101 Basic EV CAN Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the iTriangle TS101 Basic EV CAN tracker and how its capabilities integrate with Plaspy for fleet tracking and telemetry
keywords:
  - iTriangle TS101 Basic EV CAN
  - TS101 Basic EV CAN features
  - iTriangle TS101 tracker
  - TS101 EV CAN GPS tracker
  - iTriangle GPS tracker features
  - Plaspy compatible tracker
  - fleet tracking TS101
  - vehicle telemetry TS101
  - TS101 BLE CAN tracker
  - rugged GPS tracker iTriangle
---

# iTriangle - TS101 Basic EV CAN Features

This page provides a public, non-sensitive feature overview of the iTriangle TS101 Basic EV CAN and explains how the device can be used with Plaspy for fleet tracking, telemetry collection, and event monitoring. It is intended to describe practical capabilities and typical operational value when the TS101 Basic EV CAN is paired with the Plaspy platform.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation type, and manufacturer implementation. For the most current, device-specific technical details consult the official manufacturer documentation and release notes from iTriangle.

## Feature Overview

The TS101 Basic EV CAN is a compact, rugged telematics unit built to deliver dependable tracking and data logging for mixed EV and conventional fleets. It combines multi-constellation GNSS positioning, a single-channel CAN interface, BLE connectivity, and local storage to maintain continuity of records in weak network conditions.

- Multi-constellation GNSS support for accurate positioning across GPS GLONASS Galileo and BeiDou.
- Single-channel CAN interface to capture vehicle and EV telemetry where available.
- BLE 3.0 for short-range sensor and accessory connectivity.
- Local offline logging with capacity for thousands of records to prevent data gaps.
- Rugged IP65 housing and wide voltage input to support varied vehicle installations.

## Core Features of iTriangle - TS101 Basic EV CAN

- Internal GNSS supporting GPS GLONASS Galileo and BeiDou for location accuracy.
- Single-channel CAN interface for collection of vehicle and EV telemetry.
- BLE 3.0 for short-range wireless sensors and accessory integration.
- Offline data buffering with approximately 6,000 record storage to protect against coverage loss.
- Multiple I O ports including one analog input two digital inputs and one digital output for event monitoring and control.
- Internal backup battery and low-power sleep behavior to maintain logging during power interruptions.
- IP65-rated enclosure and wide 9–90V DC input range for rugged fleet deployments.
- Accelerometer-based motion detection and tamper alert capabilities for anti-theft awareness.

## How These Features Work with Plaspy

When used with Plaspy, the TS101 Basic EV CAN can forward location updates telemetry and event records to give operators real-time visibility and historical context. Plaspy receives device data and presents it in maps reports and event timelines to support operational decisions.

- Real-time location updates and historical route replay inside Plaspy.
- CAN-sourced telemetry and vehicle status visible in Plaspy dashboards where CAN data is available and mapped.
- Event records from digital inputs accelerometer motion and tamper alerts presented as incidents or notifications.
- Offline stored records uploaded to Plaspy after connectivity is restored to preserve continuity of tracking and logs.
- BLE sensor events and short-range accessory data associated with vehicle records for enriched context.

## Typical Use Cases

- Mixed fleet tracking combining electric and conventional vehicles with shared visibility.
- EV telemetry collection for integration of CAN-sourced metrics into fleet operations.
- Anti-theft monitoring using motion detection tamper alerts and event logging.
- Short-range sensor association for driver identification temperature probes or accessory sensors via BLE.
- Rugged deployment for commercial vehicles operating in harsh or remote environments.

## Feature Availability Notes

- Some features are firmware dependent and may vary between device firmware versions or updates.
- Hardware revisions and regional variants may change available interfaces or supported bands and sensors.
- Installation wiring and integration choices affect which I O and CAN signals are present and reported.
- BLE sensor support and how BLE data is exposed can depend on firmware and configuration.
- Verify the exact set of capabilities and supported commands in the official iTriangle documentation for your device revision.

## Why Use Plaspy with These Features

Pairing the TS101 Basic EV CAN with Plaspy provides fleets and operators with a consolidated platform to monitor location telemetry and device-generated events. Plaspy’s fleet management tools translate GNSS CAN I O and sensor data into actionable insights for routing maintenance and security workflows while preserving historical logs for analysis.

To learn more about how Plaspy can use the TS101 Basic EV CAN in your operations visit https://www.plaspy.com. For final device specifications firmware release notes and manufacturer guidance verify details on the official iTriangle website https://www.itriangle.net/ as device features and firmware behavior can change over time.
