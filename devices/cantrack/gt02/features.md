---
slug: /cantrack/gt02/features
id: gt02-features
sidebar_label: Features
title: CanTrack - GT02 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the CanTrack GT02 GPS tracker and how its tracking functions work with Plaspy for vehicle monitoring
keywords:
  - CanTrack GT02 features
  - CanTrack GT02 GPS tracker
  - GT02 features Plaspy
  - GT02 GPS tracker features
  - vehicle tracking GT02
  - GT02 real time tracking
  - GT02 SMS GPRS tracking
  - fleet management GT02
  - CanTrack GT02 capabilities
  - GT02 voice monitoring
---

# CanTrack - GT02 Features

This page provides a public-facing summary of the CanTrack GT02 feature set and how those features are used when the device is paired with the Plaspy platform. It is intended to help fleet managers, installers, and technical reviewers understand the tracker’s capabilities in a Plaspy deployment without replacing manufacturer documentation or installation guides.

Exact feature availability and behavior for any individual GT02 unit can vary by firmware version, hardware revision, the device variant installed, the chosen installation method, and how the manufacturer implemented specific options. Always verify feature details for your unit and firmware with official manufacturer resources when precise behavior is required.

## Feature Overview

The CanTrack GT02 is a compact vehicle tracker designed to provide location and monitoring data over cellular networks. It supports both SMS delivery of location information and real-time transmission over mobile data, plus a set of configurable alarms and control options suitable for vehicle security and fleet oversight.

- Real-time location reporting via GPRS for continuous tracking on a server or platform.
- Location and alerts sent by SMS to authorized mobile numbers for immediate updates.
- Voice monitoring capability to listen to the unit’s surroundings when supported by the firmware and installation.
- Configurable alarms including overspeed, power failure, and ACC anti-theft alerts.
- Optional hardware features such as an external relay interface for vehicle circuit control and a built-in backup battery for power-failure alerts.

## Core Features of CanTrack - GT02

- GSM quad-band support for broad regional cellular compatibility.
- Real-time tracking over mobile data (GPRS) for server-side monitoring.
- SMS-based location reporting to specified authorized numbers.
- Voice monitoring function where enabled by the device firmware and installer.
- Overspeed alert configuration to notify on-speed threshold events.
- Power failure alarm with optional internal backup battery for offline alerts.
- ACC anti-theft alarm support to detect ignition or accessory power changes.
- Support for setting authorized phone numbers and remote password recovery functions.

## How These Features Work with Plaspy

Plaspy automatically detects many common tracker protocols and can display the GT02’s location and events within its monitoring interface. When a GT02 is configured to send data to Plaspy, Plaspy will surface location points, status updates, and supported alarm events so operators can monitor devices centrally.

- Real-time location updates received by Plaspy appear on maps for route replay and live tracking.
- Alarm events such as power loss, overspeed, and ACC changes are shown as events in Plaspy for prompt operator attention.
- SMS-originated alerts remain useful for direct phone notifications while Plaspy aggregates GPRS reporting for centralized oversight.
- Voice monitoring events supported by the device can be noted in Plaspy as a recorded or logged event depending on local setup and permissions.
- Plaspy’s device handling simplifies onboarding by recognizing the GT02 protocol and applying appropriate parsing and display logic.

## Typical Use Cases

- Fleet management and dispatch visibility for light commercial vehicles.
- Vehicle rental monitoring to track location and receive tamper or power alerts.
- Asset protection and recovery workflows where location updates and alarms assist response.
- Personnel vehicle oversight for organizations tracking staff vehicle usage.
- Remote monitoring where SMS provides a low bandwidth fallback for critical alerts.
- Small logistics operations needing affordable real-time tracking and event notification.

## Feature Availability Notes

- Some capabilities such as voice monitoring and relay control may depend on the specific GT02 hardware variant and whether optional wiring or modules were installed.
- Built-in backup battery and external relay functions are optional on certain GT02 models and may require a specific four-wire variant or installer configuration.
- SMS vs GPRS behavior depends on SIM card data availability and carrier coverage; SMS can be a fallback when data connectivity is limited.
- Firmware revisions can change menu options, command formats, and how events are reported; features described here reflect common GT02 behavior but can vary.
- Regional or regulatory restrictions may affect the use of voice monitoring or certain remote-control features in some jurisdictions.

## Why Use Plaspy with These Features

Using the CanTrack GT02 with Plaspy gives organizations a way to centralize location and event information from GT02 units into a managed monitoring environment. Plaspy collects incoming location reports and alarm signals, presents them on maps and timelines, and helps teams correlate device events with operational actions for better oversight and response.

To learn more about Plaspy and how it can integrate with trackers like the CanTrack GT02, visit https://www.plaspy.com. For the most current and authoritative device specifications, firmware notes, and variant details, please consult the manufacturer at https://www.cantrackgps.com/ as feature sets and firmware behavior can change over time.
