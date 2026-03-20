---
slug: /autofon/se_beacon/features
id: se_beacon-features
sidebar_label: Features
title: AutoFon - SE+ Beacon Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the AutoFon SE+ Beacon and how it integrates with Plaspy for discreet long term tracking
keywords:
  - AutoFon SE+ Beacon features
  - AutoFon SE+ Beacon GPS tracker
  - SE+ Beacon Plaspy compatibility
  - AutoFon GPS tracker features
  - covert vehicle tracking
  - long battery GPS tracker
  - impact detection tracker
  - tilt detection tracker
  - auxiliary channel tracker
  - GPRS SMS backup tracker
---

# AutoFon - SE+ Beacon Features

This page provides a public feature overview for the AutoFon SE+ Beacon as a Plaspy compatible GPS tracker. It explains the main capabilities you can expect when integrating this model with Plaspy and highlights how device signals are typically used on the Plaspy platform for monitoring and alerting.

Exact feature availability may vary by firmware version, hardware revision, installation method and the manufacturer's configuration choices. For deployment planning, use this overview together with the device manufacturer documentation and your current device firmware notes to confirm what is active on any specific unit.

## Feature Overview

The SE+ Beacon is a compact, low profile tracker built to provide reliable position reporting and event-driven alerts while optimizing battery life. It combines GNSS positioning with GPRS reporting and SMS fallback, plus motion and impact sensing, to support discreet long-duration monitoring tasks.

- GNSS positioning using GPS and GLONASS for dependable location fixes.
- GPRS as the primary reporting channel with SMS available as a fallback for alerts and notifications.
- Long battery operation on two CR123A cells with an option for external power to extend runtime.
- Motion, tilt and impact detection for event-based reporting and theft or safety alerts.
- Large internal buffer to store unsent data during network outages so Plaspy receives historical packets when connectivity resumes.
- Auxiliary control and alarm input for remote actions and basic external device control when configured.

## Core Features of AutoFon - SE+ Beacon

- GPS + GLONASS positioning via the device GNSS module for accurate location updates.
- GPRS data reporting with SMS fallback to ensure alert delivery when data connectivity is limited.
- Motion detection, tilt detection (including >90° events) and impact/crash detection for event-driven monitoring.
- SOS micro-button to generate immediate alerts that can be surfaced in Plaspy.
- Auxiliary channel and alarm input to trigger or control external devices where supported by installation.
- Built-in microphone for remote audio monitoring when enabled by the installer or configuration.
- Large offline "black box" buffer (about 98,000 GPRS packets) to retain telemetry while offline.
- Remote firmware update capability over the air to keep deployed devices up to date.

## How These Features Work with Plaspy

Plaspy ingests GNSS positions and event telemetry from the SE+ Beacon to provide live tracking, historical playback and alerting. The platform maps device reports to dashboards, event timelines and notifications so operators can maintain situational awareness.

- Real-time location updates and map tracking in Plaspy when the device reports via GPRS.
- Event alerts (motion start/stop, tilt events, impact and SOS) forwarded into Plaspy alerting and timeline views.
- Offline buffer delivery ensures Plaspy receives queued position and event packets after temporary connectivity loss.
- Auxiliary channel and alarm input events are available in Plaspy for operator workflows and remote actions if configured and authorized.
- Plaspy automatically detects many tracker protocols and accepts reporting to its server domain; devices may be configured to use UDP or TCP on the same Plaspy port where required.

## Typical Use Cases

- Covert long-term vehicle monitoring where low detectability and extended battery life are priorities.
- Asset tracking for trailers, containers or stored goods with motion and impact alerting during transit or storage.
- Remote monitoring of stationary objects such as cabins, gates or equipment that only need occasional check-ins.
- Personal or pet location monitoring combined with SOS alert capability for simple emergency signaling.
- Small equipment or trailer fleet oversight when discreet telemetry and event alerts are sufficient without full telematics hardware.

## Feature Availability Notes

- Some features depend on the device firmware and hardware revision; not every unit may support every capability listed here.
- Installation choices and wiring (for example connecting external power or alarm lines) affect which inputs and auxiliary functions are available.
- Regional variants or regulatory differences can influence GSM band support and message delivery behavior.
- Microphone and remote audio monitoring are dependent on how the device is configured and on local privacy rules; enable only where permitted.
- Always confirm supported features for a specific serial number and firmware version with the official manufacturer documentation.

## Why Use Plaspy with These Features

Using the SE+ Beacon with Plaspy gives organizations practical location visibility and event-driven alerts without the footprint of larger telematics hardware. Plaspy surfaces position history, alert timelines and operational maps that make it straightforward to act on motion, tilt, impact and SOS signals from this compact tracker. The device's offline buffer and dual-path reporting help preserve telemetry continuity, which supports reliable incident reconstruction and ongoing monitoring.

Learn more about how Plaspy can manage devices like the AutoFon SE+ Beacon on the Plaspy website https://www.plaspy.com. Device features, firmware behavior and manufacturer details can change over time, so please verify the most current device specifications and configuration guidance on the official manufacturer site https://www.autofon.ru/.
