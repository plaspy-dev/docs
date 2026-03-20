---
slug: /cantrack/c32plus/features
id: c32plus-features
sidebar_label: Features
title: CanTrack - C32Plus Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the CanTrack C32Plus GPS tracker and how it integrates with Plaspy for real time vehicle tracking and telemetry
keywords:
  - CanTrack C32Plus features
  - CanTrack C32Plus GPS tracker
  - C32Plus features
  - C32Plus Plaspy compatibility
  - CanTrack GPS tracker features
  - C32Plus GT06 tracker
  - vehicle tracking C32Plus
  - e bike tracker CanTrack
  - motorcycle GPS tracker C32Plus
  - fleet management C32Plus
---

# CanTrack - C32Plus Features

This page provides a public feature overview for the CanTrack C32Plus and how it can be used with Plaspy for vehicle and asset tracking. It focuses on practical, non sensitive capabilities you can expect when the C32Plus is configured to forward position and event data into Plaspy for monitoring and operational use.

Exact feature availability depends on device firmware, hardware revision, installation wiring and manufacturer implementation. The information below is based on the C32Plus feature set as described by the manufacturer and should be used as a general guide for integration and planning.

## Feature Overview

The C32Plus is a compact hard wired tracker designed for 9–90 V vehicle systems and optimized for low power operation. It provides GNSS positioning, quad band GSM GPRS connectivity, offline buffering, and a range of alarm and control options that make it suitable for light vehicle and small fleet tracking when paired with Plaspy.

- Real time GNSS location reporting with sub 10 meter CEP accuracy for consistent positioning.
- Quad band GSM GPRS connectivity for broad cellular coverage and live updates.
- Offline data buffering that stores location records for later upload after connectivity is restored.
- Low power draw suitable for e bikes, motorcycles and other small vehicles with constrained electrical systems.
- Support for GT06 protocol and OTA firmware updates to simplify integration and remote maintenance.

## Core Features of CanTrack - C32Plus

- Compatibility with GT06 protocol for TCP IP reporting into tracking platforms.
- High sensitivity MTK GNSS chipset delivering sub 10 meter positioning accuracy.
- Broad input voltage range suitable for 9 to 90 volt vehicle electrical systems.
- Low power consumption designed to reduce battery drain on small vehicles.
- Internal buffer capable of storing multiple location records when GPRS is unavailable.
- Support for OTA firmware updates for remote device maintenance.
- Configurable alarm inputs including power removal, ignition detection and vibration alerts.
- Optional remote engine cut and resume functionality where enabled by the installer and manufacturer.

## How These Features Work with Plaspy

When configured to report into Plaspy, the C32Plus forwards location, event and telemetry data so Plaspy can present a continuous operational view. Plaspy can automatically detect common tracker protocols and map the incoming messages to its dashboard and reporting tools.

- Live location updates appear on Plaspy maps for real time monitoring and route visibility.
- Alarms such as power removal, ignition changes and vibration are shown as events for immediate attention.
- Buffered records stored during coverage gaps are uploaded to Plaspy when connectivity returns to preserve historical routes.
- OTA update status and basic device health indicators can be monitored to assist device maintenance at scale.
- Where remote immobilizer features are enabled and authorized, Plaspy can reflect command outcomes and status updates.

## Typical Use Cases

- Fleet management for light vehicles and mixed vehicle types requiring low power trackers.
- Anti theft monitoring with vibration and power removal alarms plus optional engine cut support.
- Scooter and motorcycle protection where compact form factor and small power draw are priorities.
- E bike and small vehicle monitoring to track usage and external voltage status.
- Remote sites or regions with intermittent cellular coverage where offline buffering preserves data.
- Remote device maintenance scenarios using OTA firmware updates to minimize onsite visits.

## Feature Availability Notes

- Firmware version can change available features and behaviors such as alarm formats and buffering rules.
- Hardware revisions and regional variants may alter supported inputs or cellular band behavior.
- Installation wiring and chosen inputs determine which alarms and telemetry fields are available at each site.
- Optional functions like remote engine cut are dependent on manufacturer enablement, local regulations and installer configuration.
- Always consult the manufacturer documentation for device specific wiring diagrams and supported firmware capabilities.

## Why Use Plaspy with These Features

Using the CanTrack C32Plus with Plaspy provides a compact, low power solution for teams that need continuous location awareness, event driven alerts and consolidated telemetry. Plaspy brings those device signals into a single operational view, making it easier to monitor routes, respond to alarms and manage devices across a mixed vehicle fleet.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specifications, firmware behavior and manufacturer details on the CanTrack site https://www.cantrackgps.com/. Device features and implementation details can change over time so checking the manufacturer documentation will ensure you have the latest information.
