---
slug: /autofon/d_maiak/features
id: d_maiak-features
sidebar_label: Features
title: AutoFon - D-Маяк Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the AutoFon D-Маяк GPS beacon and how it integrates with Plaspy for tracking and alerts
keywords:
  - AutoFon D-Маяк
  - AutoFon D Beacon features
  - D-Маяк GPS tracker
  - AutoFon GPS beacon
  - D-Маяк Plaspy compatibility
  - covert vehicle tracker
  - long life GPS tracker
  - black box buffer
  - GLONASS GPS tracker
  - GPRS SMS reporting
---

# AutoFon - D-Маяк Features

This page summarizes the public feature context for using the AutoFon D‑Маяк (D‑Beacon) with Plaspy. It describes the tracker’s practical capabilities, how those capabilities appear in Plaspy, and typical scenarios where the unit is useful. The content focuses on non-sensitive, user-facing details to help you decide if this model fits your monitoring or anti-theft needs with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer implementation. Where relevant, confirm device-specific functions, firmware behavior, and configuration options with AutoFon documentation before deployment.

## Feature Overview

The AutoFon D‑Маяк is a compact, low-power GSM/GPRS tracker with combined GLONASS and GPS positioning designed for discreet and long-duration deployments. It supports multiple reporting modes and has robust on-device buffering and event detection to preserve telemetry during connectivity gaps.

- Long autonomous operation suitable for covert installations and remote assets.
- Combined GLONASS and GPS navigation for improved positional reliability.
- Configurable reporting over GPRS with SMS fallback to maintain connectivity.
- Onboard event detection via a digital accelerometer and dedicated inputs for alarms and SOS.
- Large black box buffer to store unsent telemetry during network outages.

## Core Features of AutoFon - D-Маяк

- Long battery endurance when used with two CR123A cells, designed for extended covert operation.
- Dual constellation navigation combining GLONASS and GPS for better fix performance.
- GPRS monitoring with configurable SMS reporting as an alternate channel.
- Digital accelerometer with event detection for movement start, impacts, and other motion events.
- SOS microbutton and external alarm input for immediate alerting.
- Universal auxiliary channel to support remote control actions where installed.
- Built-in black box buffer capable of storing a large number of unsent GPRS packets.
- Built-in microphone and RF owner-presence tag for additional situational telemetry.

## How These Features Work with Plaspy

When integrated with Plaspy, the D‑Маяк reports position and event telemetry to the Plaspy monitoring platform so operators can view live location, history, and alerts on dashboards and timelines. Plaspy automatically detects supported tracker messages and presents the device status and events alongside other fleet assets.

- Real-time location updates and history appear in Plaspy maps and timelines according to the device’s configured reporting intervals.
- Alarm, SOS, and accelerometer events are forwarded to Plaspy as alerts for operator notification and incident workflows.
- Buffered packets stored on the device are delivered to Plaspy after connectivity restoration, preserving continuity in historical records.
- Remote auxiliary channel commands and control actions can be issued from Plaspy where device configuration and installation allow.
- Audio monitoring status and RF tag presence, when enabled, are available in Plaspy as supplementary telemetry for situational awareness.

## Typical Use Cases

- Covert vehicle anti-theft and rapid recovery installations that require discreet placement and long battery life.
- Protection of valuable cargo and containers where extended offline buffering prevents data loss during transit.
- Remote asset guarding for sites without reliable external power.
- Discreet safety monitoring for personal items or animals where a compact tracker is needed.
- Supplementary unit-level tracking within broader fleet monitoring setups that use Plaspy dashboards.

## Feature Availability Notes

- Function set depends on device firmware and hardware revision; features listed may vary by production batch.
- Some functions require specific installation wiring or external power and may not be available in all placements.
- Regional cellular and regulatory differences can affect SMS and GPRS behavior; confirm compatibility for your service area.
- Manufacturer configuration options such as reporting intervals, alarm thresholds, and remote command permissions determine how features behave in practice.
- Always consult the official AutoFon documentation for the most current technical and safety details.

## Why Use Plaspy with These Features

Pairing the AutoFon D‑Маяк with Plaspy gives organizations a practical way to turn long-endurance, event-aware beacon telemetry into actionable monitoring. Plaspy consolidates location updates, alarm events, and buffered history into unified dashboards, making it easier to track recovery events, review incident timelines, and coordinate responses across teams.

To learn more about how this tracker integrates into fleet and asset monitoring workflows, visit the Plaspy website at https://www.plaspy.com. For the latest device-specific features, firmware behavior, and implementation details, verify information on the manufacturer site https://www.autofon.ru/.
