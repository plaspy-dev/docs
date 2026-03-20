---
slug: /sinotrack/st_901/features
id: st_901-features
sidebar_label: Features
title: SinoTrack - ST-901 Features
sidebar_class_name: menu_item_tracker
description: Practical feature overview of the SinoTrack ST-901 and how it works with Plaspy for vehicle tracking and immobilization
keywords:
  - SinoTrack ST-901
  - ST-901 features
  - SinoTrack GPS tracker
  - ST-901 Plaspy compatibility
  - motorcycle GPS tracker
  - vehicle tracker waterproof
  - remote immobilizer tracker
  - geo fence over speed alerts
  - ACC ignition detection
  - SMS GPRS tracker
---

# SinoTrack - ST-901 Features

This page describes the public feature context for using the SinoTrack ST-901 tracker with Plaspy. It focuses on the user facing capabilities that matter when integrating the ST-901 into a fleet or vehicle security deployment monitored in Plaspy, including positioning, alarms, and remote immobilizer support.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer implementation. For device activation steps, regional compliance such as IMEI registration, and the latest command set refer to the manufacturer documentation or the device label where applicable.

## Feature Overview

The ST-901 is a compact, waterproof wired tracker designed for motorcycles, scooters, cars and light trucks. It provides position reporting and core vehicle alarms, with simple wiring and optional relay control for remote immobilization. When configured to report to a third party server, the tracker can forward location and event messages to Plaspy for consolidated monitoring.

- Real time GPS position reporting over cellular data or SMS for redundant notifications.
- Geo fence and over speed alarm reporting to notify on boundary breaches and speed events.
- ACC ignition detection and main power loss alarm using a built in backup battery for power off alerts.
- Simple 4 PIN wired installation with external relay support to enable remote engine cut off for anti theft response.
- Compact waterproof form factor suitable for discreet mounting on two wheel and four wheel vehicles.

## Core Features of SinoTrack - ST-901

- GPS position reporting with GPRS and SMS reporting modes for flexible connectivity.
- Geo fence alert generation for entry and exit events around defined areas.
- Over speed alerting to surface speed violations as configured on the device.
- ACC ignition detection that reports ignition on and off status.
- Internal backup battery to trigger a main power off alarm when vehicle power is removed.
- 4 PIN wired interface with support for an external relay to allow remote immobilizer control.
- Compact waterproof enclosure targeted at motorcycles, scooters, cars and light trucks.

## How These Features Work with Plaspy

When the ST-901 is pointed at Plaspy servers, position and alarm messages arrive in Plaspy and are displayed alongside other fleet telemetry for monitoring and response. Configuration to send data to Plaspy is typically done via the device SMS commands to set the server address and APN according to the manufacturer guide.

- Location updates and GPS coordinates appear in Plaspy for live tracking and historical playback.
- Geo fence and over speed events create alerts that can be routed to operators for investigation.
- Ignition state and main power loss alarms are visible in Plaspy to support operational workflows.
- Remote immobilizer events triggered via relay control can be tracked as device actions or alarms in Plaspy.
- SMS alerts remain available as a secondary notification channel when data connectivity is limited.

## Typical Use Cases

- Real time fleet tracking for light commercial vehicles where discreet installation is required.
- Anti theft workflows using remote immobilizer activation combined with location reporting.
- Motorcycle and scooter security where waterproof small form factor trackers are needed.
- Incident response using geo fence and over speed alerts to detect unauthorized movement.
- Backup notification through SMS with location links when GPRS connectivity is unavailable.

## Feature Availability Notes

- Firmware and hardware revisions can change available command sets and alarm behavior; verify the version installed on each unit.
- Regional variants may differ in cellular bands and SMS behavior; confirm the specific model variant for your market.
- Installation type and wiring quality affect ACC detection and main power alarm reliability.
- Some actions such as remote immobilizer wiring require professional installation and adherence to local regulations.
- Manufacturer documentation and IMEI registration rules should be reviewed before deploying devices at scale.

## Why Use Plaspy with These Features

Using Plaspy together with the ST-901 lets organizations centralize position reporting, alarms, and immobilizer events in a single fleet management platform. Plaspy can collect the tracker messages and present them alongside other assets for consolidated monitoring, alerting, and operational oversight. This helps teams maintain situational awareness, respond to security events, and keep a historical record of location and alarm data.

Learn more about how Plaspy can work with vehicle trackers like the SinoTrack ST-901 by visiting https://www.plaspy.com. For the most current device specific feature details, firmware notes, and manufacturer commands consult the official SinoTrack site at https://www.sinotrackgps.com/ since features and firmware behavior can change over time.
