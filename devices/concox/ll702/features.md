---
slug: /concox/ll702/features
id: ll702-features
sidebar_label: Features
title: Concox - LL702 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Concox LL702 GPS tracker and how it integrates with Plaspy for long term asset and fleet monitoring
keywords:
  - Concox LL702
  - Concox LL702 features
  - Concox LL702 GPS tracker
  - LL702 Plaspy compatibility
  - LL702 battery life
  - LL702 multi source positioning
  - covert GPS tracker
  - long term asset tracker
  - LTE Cat1 tracker
  - vehicle tracking LL702
---

# Concox - LL702 Features

This page documents the public feature context for using the Concox LL702 with Plaspy. It describes the device capabilities that matter for tracking, alerting, and long term asset monitoring when the LL702 is integrated into Plaspy’s platform. The focus is on practical, non-sensitive information about what the tracker reports and how those reports are used inside Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, and installation method. Battery life, reporting cadence, sensor availability, and alert behavior depend on the device configuration and manufacturer implementation, so check the device settings and official Concox documentation for the most current details.

## Feature Overview

The Concox LL702 is a compact industrial tracker designed for long standby deployments and covert installation. It combines multi‑source positioning with cellular connectivity and onboard buffering so assets remain locatable even across coverage gaps.

- Multi-source positioning using GPS, BDS, LBS and Wi‑Fi hotspots to improve fix reliability in varied environments.
- LTE Cat 1 cellular with 2G GSM fallback for broad coverage across networks and regions.
- Industrial 4,200 mAh Li‑Manganese battery engineered for extended standby life in low reporting modes.
- Low‑profile, magnetic mounting for discreet installation on metal assets and vehicles.
- Configurable working modes including tracking, power‑saving, week‑based, and alarm‑based operation to balance reporting and battery life.
- Onboard storage that buffers position fixes during cellular outages and uploads queued data when connectivity is restored.

## Core Features of Concox - LL702

- Multi‑source positioning: GPS, BDS, LBS and Wi‑Fi hotspot assistance for more consistent location fixes.
- Cellular connectivity with LTE Cat 1 plus 2G GSM fallback for extended area coverage.
- Large 4,200 mAh industrial battery designed for long standby intervals and minimal maintenance.
- Covert mechanical design with a strong magnetic base for secure mounting on metal surfaces.
- Multiple working modes to tailor reporting cadence and power consumption.
- Immediate event reporting for tamper detection via light sensor and low battery alerts.
- Movement and impact related alerts such as abnormal vibration and device fall or removal notifications.
- Local data buffering and queued upload to preserve position history during network gaps; includes onboard storage for logs.

## How These Features Work with Plaspy

When the LL702 is connected to Plaspy, its location and event messages feed into the platform to provide visibility, alerts, and history for assets and fleets. Plaspy reads multi‑source position reports and event notifications to present a continuous activity trail and to trigger workflows based on device events.

- Real‑time location updates and map visibility when the device is operating in tracking mode and connected to cellular networks.
- Tamper and light‑sensor alerts forwarded to Plaspy for anti‑theft workflows and operational monitoring.
- Geofence entry and exit events, abnormal vibration, and fall or removal alerts delivered into Plaspy for immediate handling.
- Buffered positions uploaded after connectivity is restored, so historical tracks remain complete in Plaspy.
- Reporting cadence and working mode choices reflected in Plaspy as differences in update frequency, helping balance data usage and battery life.

## Typical Use Cases

- Covert asset tracking for rental fleets and shared vehicles where discreet mounting and long standby matter.
- Auto finance and repossession monitoring that benefits from tamper notifications and persistent tracking.
- Dealership and inventory monitoring for used car yards and vehicle traders requiring low‑maintenance telemetry.
- Long term equipment and asset management programs that need multi‑year standby and reliable geofence reporting.
- Remote or intermittent‑coverage deployments that rely on onboard buffering to preserve location history.
- Anti‑theft and recovery workflows using tamper and movement alerts to escalate events in Plaspy.

## Feature Availability Notes

- Feature support and alert behavior can vary by firmware version and hardware revision; consult manufacturer release notes for precise behavior.
- Battery life depends strongly on configured reporting cadence, working mode, and environmental factors rather than a single fixed metric.
- Some alerts and positioning behavior require specific sensors or firmware features to be enabled by the manufacturer or during installation.
- Regional cellular support and fallback behavior depend on the hardware variant and local mobile network operator availability.
- Onboard storage and buffering preserve fixes during outages but are bounded by the device’s storage capacity and configuration.

## Why Use Plaspy with These Features

Pairing the Concox LL702 with Plaspy gives organizations practical visibility and event awareness for long‑term and covert asset monitoring. The LL702’s multi‑source positioning and buffering help maintain location continuity, while Plaspy consolidates real‑time updates, alerts, and historical playback into dashboards and workflows that support fleet oversight and anti‑theft operations.

To learn more about how Plaspy supports devices like the LL702, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer details please verify information on the official Concox site https://www.iconcox.com/ as features and firmware behavior can change over time.
