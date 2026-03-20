---
slug: /coban/bn_403c/features
id: bn_403c-features
sidebar_label: Features
title: Coban - BN-403C Features
sidebar_class_name: menu_item_tracker
description: Public summary of Coban BN-403C GPS tracker features and how it integrates with Plaspy for vehicle tracking and alerts
keywords:
  - Coban BN-403C features
  - Coban BN-403C GPS tracker
  - BN-403C Plaspy
  - BN-403C features
  - vehicle GPS tracker Coban
  - Coban BN403C alarms
  - Coban GPS tracker features
  - BN-403C battery backup
  - BN-403C LTE 4G tracker
  - Coban vehicle tracking
---

# Coban - BN-403C Features

This page provides a public feature overview for the Coban BN-403C and how those capabilities are exposed when the device is used with Plaspy. It focuses on user–facing functions, operational value, and practical workflows that fleet operators and vehicle managers can expect when integrating the BN-403C into Plaspy.

Exact feature availability and behavior can vary by device firmware version, hardware revision, installation method, and manufacturer implementation. For the most current device specifics consult the manufacturer documentation and release notes before deployment.

## Feature Overview

The BN-403C is a compact vehicle tracker designed for concealed installation and continuous monitoring. Its combination of cellular connectivity, GNSS performance, and wired vehicle power with a backup battery supports reliable position reporting and event notification for fleet and anti-theft use.

- Real-time location reporting using LTE 4G with 2G fallback to maintain connectivity across networks.
- High sensitivity GNSS positioning with typical accuracy around five meters for practical vehicle tracking.
- Wired 12V–24V installation plus a rechargeable 3.7V 300mAh backup battery to continue reporting during power interruptions.
- Suite of alarms and event inputs including ignition (ACC), door open, shock, overspeed, movement, geo-fence, SOS, and low battery.
- Remote control options including immobilizer and remote fuel or power cut via relay accessories for anti-theft response.
- Bluetooth configuration and automatic induction arming/disarming to simplify setup and support proximity based workflows.

## Core Features of Coban - BN-403C

- LTE 4G connectivity with 2G fallback for broader cellular coverage and real-time telemetry.
- GNSS receiver with high sensitivity (reported −165 dBm) and typical position accuracy near 5 meters.
- Wired vehicle power support for 12V–24V systems with an onboard 3.7V 300mAh backup battery.
- Discrete alarm inputs and outputs: ACC ignition monitoring, door-open detection, shock alarm, SOS input, and low-battery alert.
- Remote immobilizer and remote fuel or power cut support via relay or relay accessory for theft response.
- Bluetooth on-board for local configuration and automatic induction arming/disarming workflows.
- Support for TCP, UDP, and SMS transport methods allowing flexible telemetry delivery to backend platforms.
- Compact form factor intended for concealed vehicle installation and continuous fleet operation.

## How These Features Work with Plaspy

When connected to Plaspy, the BN-403C streams location and event data that Plaspy uses to build live maps, alerts, and history playback. Plaspy ingests positions and discrete alarm events to support monitoring, notifications, and operational workflows. Device configuration can be handled locally by Bluetooth or managed centrally depending on deployment choices.

- Live position updates appear on Plaspy maps for real-time vehicle visibility and monitoring.
- Alarm events such as ignition, door-open, shock, geo-fence, and SOS are reported to Plaspy for notifications and automated workflows.
- Backup battery reporting keeps Plaspy informed during vehicle power loss so history and alerts remain continuous.
- Remote control actions such as immobilizer or relay-based power cut can be issued from Plaspy where supported by the installation and accessories.
- Historical tracks and event timelines in Plaspy let operators review past movements and alarm sequences for investigations and reporting.

## Typical Use Cases

- Fleet management with continuous tracking, utilization monitoring, and route history playback.
- Anti-theft protection for private cars, rental fleets, and finance recovery with alarms and remote immobilizer control.
- Logistics visibility where reliable GNSS positioning and cellular fallback help maintain location awareness.
- Rental and finance monitoring with movement detection and geo-fence alerts to support asset control.
- Remote incident response using SOS reporting and alarm notifications routed through Plaspy.
- Deployments requiring concealed installation and battery backup to maintain reporting during tamper or power loss events.

## Feature Availability Notes

- Manufacturer firmware versions and hardware revisions can change available features or alarm behavior.
- Some functions require optional accessories such as relays or external sensors for fuel monitoring or siren support.
- Regional cellular band variants and network availability may affect LTE coverage and 2G fallback behavior.
- Installation wiring and vehicle integration determine which inputs and remote-control features are available.
- Consult manufacturer release notes and documentation for exact command syntax, accessory compatibility, and configuration steps.

## Why Use Plaspy with These Features

Using the Coban BN-403C with Plaspy combines the tracker’s vehicle-focused telemetry and alarm set with a centralized platform for visibility, alerting, and historical analysis. Plaspy presents real-time location, discrete events, and historical tracks on web and mobile interfaces so operators can monitor fleets, respond to alarms, and execute remote control actions from a single place.

If you want to learn more about Plaspy and how it can manage BN-403C devices, visit https://www.plaspy.com. For the latest manufacturer details, firmware notes, and accessory compatibility confirm specifications on the official Coban website https://www.coban.net/ as device features and firmware behavior can change over time.
