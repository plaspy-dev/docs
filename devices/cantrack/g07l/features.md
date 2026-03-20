---
slug: /cantrack/g07l/features
id: g07l-features
sidebar_label: Features
title: CanTrack - G07L Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the CanTrack G07L 4G vehicle tracker and how it integrates with Plaspy for fleet tracking and anti theft
keywords:
  - CanTrack G07L features
  - CanTrack G07L GPS tracker
  - G07L Plaspy compatibility
  - 4G GPS tracker
  - vehicle tracker features
  - movement vibration alarm
  - ignition status detection
  - power cut alert
  - offline data buffering
  - fleet management tracker
---

# CanTrack - G07L Features

This page provides a public feature summary for the CanTrack G07L and how its reported capabilities map to Plaspy for live tracking, event reporting, and fleet workflows. It focuses on practical, non sensitive information about the tracker that operators and integrators commonly use when deploying devices with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and manufacturer implementation. For device specific configuration, firmware notes and the latest technical details consult the manufacturer documentation and release notes.

## Feature Overview

The G07L is a compact hard wired vehicle tracker designed for broad voltage ranges and continuous position reporting over 4G with GSM fallback. It combines standard telemetry, event alarms and offline buffering to support reliable tracking across coverage gaps.

- Real time location tracking over 4G with GSM fallback for continuity in mixed coverage areas.
- Wide 9 to 90 V working range suitable for motorcycles, cars, vans and heavier vehicles.
- Movement and vibration alarm using an onboard G sensor for tamper and anti theft detection.
- Ignition status detection to report engine on and off events for runtime and usage reporting.
- Power cut alarm and optional internal backup battery to preserve last known state during power loss.
- Local memory buffer for offline record storage with automatic upload when connectivity returns.

## Core Features of CanTrack - G07L

- 4G LTE connectivity with GSM fallback for continuous telemetry reporting across cellular networks.
- Wide input voltage support 9–90 V for flexible vehicle installations across mixed fleets.
- Onboard G sensor providing movement and vibration alarm capabilities for tamper detection.
- Ignition input to detect engine status and enable engine runtime and trip reporting.
- Power cut alarm plus an optional internal backup battery to retain position and alarm state.
- Local storage buffer capable of holding device records while offline and syncing post reconnection.
- Configurable sleep and parking stabilization modes to reduce GPS drift after parking.
- Remote management options including USB, SMS and over the air updates for configuration and firmware maintenance.

## How These Features Work with Plaspy

Plaspy ingests the G07L telemetry and event streams and presents them within tracking dashboards, reports and alerting workflows. Device events are mapped to platform actions to support operational monitoring and incident response.

- Live position updates and frequent GPS fixes appear in Plaspy maps for real time vehicle visibility.
- Movement and vibration alarms are presented as events so operators can trigger alerts or investigations.
- Ignition on and off signals feed engine runtime, trip detection and utilization reporting in Plaspy.
- Power cut and backup battery events are surfaced to help identify tampering or power issues.
- Offline buffered records are uploaded after reconnection so historical tracks and reports remain complete.
- Remote configuration and firmware update capabilities can be coordinated from Plaspy alongside field operations.

## Typical Use Cases

- Mixed fleet tracking for motorcycles, cars, vans and trucks where a wide voltage range is required.
- Anti theft and tamper detection using movement and power cut alarms integrated into alert workflows.
- Engine runtime and trip reporting based on ignition status for billing, maintenance and utilization.
- Long term monitoring across coverage gaps with offline buffering to preserve historical data.
- Rental fleet oversight and shared vehicle programs needing reliable position and event history.

## Feature Availability Notes

- Firmware versions can enable, modify or disable specific behaviors such as reporting intervals and alarm sensitivity.
- Hardware revisions and regional variants may differ in supported LTE bands and available interfaces.
- Installation wiring and the chosen ignition input method affect the accuracy of engine on off detection.
- Optional components such as the internal backup battery might not be present on all units or variants.
- Always refer to the manufacturer documentation and release notes for up to date technical and installation guidance.

## Why Use Plaspy with These Features

Using the CanTrack G07L with Plaspy provides a straightforward path to operational visibility and event driven monitoring. The device supplies location and status events that Plaspy turns into live map views, alert notifications and historical reports useful for fleet operations, anti theft workflows and utilization analytics.

To learn more about how Plaspy works with compatible trackers and to explore platform capabilities visit https://www.plaspy.com. For the most current device specific details including firmware behavior and manufacturer implementation verify information with CanTrack at https://www.cantrackgps.com/
