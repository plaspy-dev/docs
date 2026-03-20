---
slug: /eelink/tk119/features
id: tk119-features
sidebar_label: Features
title: EElink - TK119 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the EElink TK119 3G GPS tracker and how it integrates with Plaspy for vehicle and asset tracking
keywords:
  - EElink TK119
  - EElink TK119 features
  - TK119 GPS tracker
  - TK119-3G
  - EElink GPS tracker
  - 3G GPS tracker
  - waterproof GPS tracker
  - vehicle tracking
  - fleet management
  - Plaspy compatible tracker
---

# EElink - TK119 Features

This page provides a public feature overview of the EElink TK119 GPS tracker and how its capabilities map into Plaspy for tracking, monitoring, and operational oversight. It focuses on user facing features and practical functions that are relevant when using the TK119 with the Plaspy platform.

Exact feature availability and behaviour can vary by device firmware, hardware revision, installation type, and manufacturer implementation. Where appropriate this page references the TK119-3G feature set as described by the manufacturer, and encourages verification against official EElink documentation for device specific details.

## Feature Overview

The EElink TK119-3G is a compact, IP67 rated GPS tracker built for vehicle and asset tracking over cellular networks. It provides real-time location reporting, a set of configurable alerts, and remote configuration options that make it suitable for fleet and asset monitoring projects when paired with Plaspy.

- 3G WCDMA cellular connectivity for broad network coverage and real-time reporting.
- IP67 waterproof enclosure suitable for exposed installations.
- GPS and LBS hybrid positioning with real-time tracking capability.
- GPIO extension for added input and output options and optional relay control for engine cut functions.
- Built-in backup battery to preserve basic reporting during external power loss.
- Remote configuration via server, app, or SMS and support for EELINK Protocol 2.0.

## Core Features of EElink - TK119

- 3G WCDMA network support with models also noting compatibility with both 3G and 4G network environments.
- IP67 rated water and dust protection for outdoor or exposed use.
- GPS and LBS double way tracking enabling continuous position updates and fallback positioning.
- Real-time tracking and reporting suitable for live monitoring.
- GPIO extension for additional external inputs and outputs and optional relay control for engine cutting.
- ACC detection capability for ignition status awareness.
- Alerts for collision events, abnormal vibration, speed limit violations, and geofence enter and leave events.
- Remote configuration and management through server, dedicated app, or SMS using EELINK Protocol 2.0.

## How These Features Work with Plaspy

Plaspy ingests position, status, and alert messages from compatible trackers and presents them through dashboard, map, and event views. When a TK119 is configured to report to Plaspy, its core tracking and alert features become visible to fleet managers and operators for operational decisions.

- Real-time location points and breadcrumb trails appear on Plaspy maps for active monitoring.
- Device alerts such as collisions, vibration events, speed violations, and geofence triggers are surfaced as events in Plaspy for notification and historical review.
- Power and ACC status feed into Plaspy device status so teams can see recent connectivity and power state.
- Remote configuration workflows are supported by directing the device to the Plaspy server domain and using the platform to manage device parameters; Plaspy automatically detects tracker protocol to simplify setup.
- Built-in battery and device health indicators are reported to Plaspy so temporary power losses or offline states can be tracked.

Note: Plaspy accepts connections from compatible trackers and supports common transport methods used with EElink devices. Devices may be configured to point to the Plaspy server domain for reporting and management.

## Typical Use Cases

- Rental vehicle tracking and status monitoring with real-time location and ignition detection.
- Fleet logistics and route oversight using live tracking and speed event visibility.
- Motorcycle and light vehicle protection where compact weatherproof hardware is required.
- Asset monitoring in exposed or maritime adjacent environments leveraging IP67 protection.
- Risk management for distributed IoT devices with event alerts and remote configuration.
- Situations requiring remote engine cut control and external input monitoring via GPIO.

## Feature Availability Notes

- Feature sets such as relay control, ACC detection, and specific alert types may be optional or dependent on the hardware revision and firmware build installed on a given unit.
- Regional cellular compatibility and certification can affect which network bands are supported; check the exact model variant for 3G or 4G support in your region.
- Remote configuration methods and supported commands reflect manufacturer firmware and the EELINK Protocol 2.0 implementation; available commands may change with firmware updates.
- Physical specifications such as dimensions, LED indicators, battery capacity, voltage range, and environmental ratings come from manufacturer documentation and may vary by production batch.
- For mission critical deployments, verify installed firmware version and perform acceptance checks to ensure the device behaves as expected in your installation context.

## Why Use Plaspy with These Features

Pairing the EElink TK119 with Plaspy provides a practical path to turn the tracker’s real-time location, event alerts, and remote management capabilities into operational insight. Plaspy centralizes device data, surfaces important events, and helps teams maintain visibility across fleets and distributed assets.

To learn more about how Plaspy can be used with EElink devices visit https://www.plaspy.com. For the most current and authoritative device specifications, firmware details, and implementation guidance consult the manufacturer at https://www.eelink.com.cn/.
