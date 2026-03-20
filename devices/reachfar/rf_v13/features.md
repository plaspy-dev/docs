---
slug: /reachfar/rf_v13/features
id: rf_v13-features
sidebar_label: Features
title: Reachfar - RF-V13 Features
sidebar_class_name: menu_item_tracker
description: Features and Plaspy compatibility for the Reachfar RF-V13 door and window GSM alarm tracker
keywords:
  - Reachfar RF-V13
  - Reachfar RF-V13 features
  - Reachfar RF-V13 GPS tracker
  - door window alarm tracker
  - GSM alarm system
  - magnet sensor tracker
  - GPRS TCP IP tracker
  - LBS positioning
  - two way voice alarm
  - Plaspy compatible tracker
---

# Reachfar - RF-V13 Features

This page summarizes the public feature context for using the Reachfar RF-V13 door and window alarm device with Plaspy. It focuses on the practical capabilities you can expect when integrating the RF-V13 with Plaspy for event logging, alerting, and basic location awareness.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation style, and the manufacturer's implementation. For device-specific configuration, performance characteristics, and the latest firmware notes, consult the official Reachfar documentation and product resources.

## Feature Overview

The RF-V13 is a compact magnetic door/window alarm and GSM alarm communicator that reports intrusion events and basic location information to remote platforms. It is intended for discreet perimeter security and integrates with Plaspy when configured to send GPRS/TCP-IP reports or formatted SMS messages.

- Door and window intrusion detection via a dedicated magnet sensor box for open/close event reporting.
- GSM reporting over quad-band frequencies for remote SMS alerts and GPRS TCP/IP reporting to platforms.
- Basic location awareness using LBS and GPS positioning-time characteristics to provide contextual location data when available.
- Two-way voice alarm verification to allow immediate confirmation of alarm events by voice call.
- Compact, rechargeable design intended for low-visibility mounting on doors, windows, and small assets.

## Core Features of Reachfar - RF-V13

- Magnet sensor door/window intrusion detection with immediate alarm reporting.
- Quad-band GSM support for broad cellular connectivity and SMS alerts.
- GPRS Class 12 TCP/IP reporting capability to send events and location to online platforms.
- LBS positioning for coarse location (approximate 200–800 m accuracy) plus GPS positioning-time characteristics when GPS is available.
- Two-way voice call functionality for alarm verification and response coordination.
- Rechargeable internal battery and compact host suitable for discreet mounting.
- Remote configuration options via SMS commands and the Reachfar mobile app.

## How These Features Work with Plaspy

When the RF-V13 is configured to report to Plaspy, alarm events, device status, and available location information are ingested and presented for monitoring and response. Plaspy consolidates incoming reports into timestamped events, location displays, and alerting rules so teams can act on perimeter alarms quickly.

- Alarm events from the magnet sensor are logged and can trigger notifications inside Plaspy according to account rules.
- LBS and GPS-based location data are shown as contextual positions on the Plaspy map; LBS provides coarse location when GPS is unavailable.
- SMS and GPRS/TCP-IP reports from the RF-V13 are accepted by Plaspy for event capture; Plaspy detects common tracker protocols automatically.
- Battery and connectivity status reported by the device can be recorded for device health monitoring.
- Two-way voice verification remains a device-level feature while Plaspy provides centralized history and alert delivery.
- Plaspy can correlate RF-V13 events with other Plaspy-compatible devices to provide broader situational awareness.

## Typical Use Cases

- Home and apartment perimeter monitoring with immediate alerts and voice verification for potential intrusions.
- Small retail or kiosk security where discreet door/window sensors notify owners or staff remotely.
- Remote property or storage monitoring where coarse location and intrusion alerts are sufficient.
- Temporary or mobile locations needing an unobtrusive alarm device with cellular reporting.
- Entrances requiring verified alarms to reduce false dispatches through two-way voice confirmation.

## Feature Availability Notes

- Functionality depends on the device firmware and hardware revision; feature names and behaviors may vary between releases.
- Installation method and local cellular coverage will affect reporting reliability and LBS positioning accuracy.
- Manufacturer regional variants or carrier settings may change supported reporting modes or SMS formats.
- The RF-V13 has been listed out of production by the manufacturer in some sources; confirm availability and support status before large deployments.
- Always verify the specific device firmware, configuration commands, and compatibility with Plaspy prior to operational use.

## Why Use Plaspy with These Features

Pairing the RF-V13 with Plaspy centralizes alarm events, location context, and historical logs in one platform so teams can monitor perimeter security alongside other tracked assets. Plaspy's event rules and notification options help ensure that intrusion reports and device health information are routed to the right people quickly, while the platform retains a timestamped record of activity for auditing and response analysis.

To learn more about how Plaspy can manage alarm and location reports from devices like the RF-V13, visit https://www.plaspy.com. For the latest device specifications, firmware behavior, and manufacturer implementation details, check Reachfar's official resources at https://www.reachfargps.com/ to verify current information.
