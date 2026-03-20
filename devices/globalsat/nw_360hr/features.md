---
slug: /globalsat/nw_360hr/features
id: nw_360hr-features
sidebar_label: Features
title: GlobalSat - NW-360HR Features
sidebar_class_name: menu_item_tracker
description: Practical feature overview of the GlobalSat NW-360HR wearable GPS tracker and how it integrates with Plaspy for tracking and safety monitoring
keywords:
  - GlobalSat NW-360HR
  - NW-360HR features
  - GlobalSat wearable GPS
  - NW-360HR Plaspy
  - wearable tracker heart rate
  - SOS fall detection
  - LTE M1 NB IoT tracker
  - BLE beacon tracking
  - elder care GPS tracker
  - lone worker safety tracker
---

# GlobalSat - NW-360HR Features

This page describes the public feature context for using the GlobalSat NW-360HR wearable GPS tracker with Plaspy. It covers the device capabilities that are relevant for real-time tracking, safety monitoring, and telemetry ingestion into Plaspy dashboards and workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific commands, limits, and the latest technical details consult the manufacturer documentation and release notes.

## Feature Overview

The NW-360HR is a compact wearable watch designed to provide location, emergency reporting, and continuous physiological telemetry. It combines low-power wide-area cellular connectivity with GPS and BLE beacon support, plus on-device sensors and an SOS control to deliver timely alerts and periodic or motion-triggered reports to backend platforms.

- Wearable GPS tracking for outdoor position reporting and continuous location updates.
- LTE‑M1 and NB‑IoT connectivity for low power wide area data uplink and continuous reporting.
- BLE beacon support to assist indoor positioning and proximity detection where GPS is limited.
- Integrated SOS Help button and fall advisory to trigger emergency notifications and incident events.
- Physiological telemetry including optical heart rate and skin temperature alongside motion detection.
- Motion-triggered and periodic reporting modes to balance responsiveness and power consumption.

## Core Features of GlobalSat - NW-360HR

- Wearable form factor built for personal safety and continuous monitoring.
- GPS for outdoor location and positioning updates.
- BLE beacon support to improve indoor localization and proximity awareness.
- LTE‑M1 and NB‑IoT connectivity for reliable low-power reporting.
- SOS Help button to send immediate emergency notifications.
- Fall advisory and motion-triggered reporting based on the device G-sensor.
- Optical heart rate and skin temperature telemetry for contextual monitoring.

## How These Features Work with Plaspy

When configured with Plaspy, the NW-360HR transmits location, sensor telemetry, and event notifications so operators can monitor people and portable assets in real time. Plaspy ingests the device data stream and presents location and event context alongside other monitored assets.

- Real-time location points and movement history appear in Plaspy maps and position reports.
- SOS Help button activations create immediate alerts and location sharing for rapid response workflows.
- Fall advisory and motion-triggered reports are surfaced as incident events for operator review.
- Physiological telemetry such as heart rate and skin temperature is available in telemetry panels alongside location context.
- BLE beacon and proximity events can be used to improve indoor positioning or trigger proximity-based notifications.

## Typical Use Cases

- Elder care and assisted living monitoring where continuous location and vital signs are required.
- Lone-worker safety programs that need SOS notifications and fall detection for field staff.
- Personal security and rapid response scenarios using a wearable SOS button with location and health context.
- Health and activity monitoring programs combining telemetry with position data for analysis.
- Multi-purpose IoT deployments that require compact wearable telemetry alongside location awareness.

## Feature Availability Notes

- Feature sets and behavior may differ between firmware versions and hardware revisions; capabilities listed here reflect commonly published functions.
- Installation, regional variants, and network availability can affect GNSS, LTE‑M1, and NB‑IoT performance and reporting behavior.
- Some reporting modes and sensor thresholds may be configurable on the device or via backend settings; check manufacturer documentation for configuration options.
- Plaspy detects compatible trackers and ingests supported telemetry, but the exact fields presented depend on the device firmware and data provided by the tracker.

## Why Use Plaspy with These Features

Using the NW-360HR with Plaspy gives organizations a centralized way to combine location, emergency events, and physiological telemetry in one monitoring platform. Plaspy helps visualize movement, manage alerts such as SOS activations and fall advisories, and correlate vital-sign data with location for operational oversight.

To learn more about Plaspy and how it supports wearable trackers like the NW-360HR visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance verify information on the GlobalSat website https://www.globalsat.com.tw/ as device features and firmware behavior can change over time.
