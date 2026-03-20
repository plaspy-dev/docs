---
slug: /flextrack/lommy_capture/features
id: lommy_capture-features
sidebar_label: Features
title: Flextrack - Lommy Capture Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Flextrack Lommy Capture and how it integrates with Plaspy for trailer and towed asset tracking
keywords:
  - Flextrack Lommy Capture
  - Flextrack Lommy Capture features
  - Lommy Capture GPS tracker
  - Flextrack GPS tracker
  - Lommy Capture Plaspy
  - Lommy Capture features Plaspy
  - trailer GPS tracker
  - towed asset tracking
  - energy harvesting tracker
  - fleet tracking device
---

# Flextrack - Lommy Capture Features

This page provides a public overview of the Flextrack Lommy Capture features and how the device is used with Plaspy for persistent monitoring of trailers, caravans and other towed assets. It focuses on practical capabilities, supported telemetry types, and the operational value you can expect when Lommy Capture is integrated into Plaspy for tracking, alerts, and reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method and the manufacturer's implementation. Where useful, this page highlights common operational characteristics such as energy harvesting from lighting circuits, multi constellation GNSS, cellular fallback and onboard motion logging, but you should reference the manufacturer for the most current, device specific details.

## Feature Overview

Lommy Capture is designed for discreet, low maintenance installation inside light housings to deliver continuous location awareness for towed assets. Its emphasis is on energy harvesting operation, resilient positioning and event logging so fleets can maintain oversight without frequent battery maintenance or large retrofits.

- Discreet internal installation that fits inside light housings for tamper resistant placement and reduced visibility.
- Energy harvesting from tail brake and indicator circuits to maintain operation without a dedicated battery.
- Real time location tracking and historical route retrieval for fleet oversight and compliance.
- Motion sensing and event logging to detect movement and generate alerts in Plaspy.
- Resilient connectivity with LTE Cat M1 and 2G fallback to keep telemetry flowing in varied coverage conditions.

## Core Features of Flextrack - Lommy Capture

- Plaspy compatible via open APIs and industry standard data protocols for straightforward ingestion of position and event messages.
- Energy harvesting design using vehicle lighting circuits and super capacitor storage to avoid a fixed battery.
- Persistent reporting when powered by tail lights with frequent updates down to approximately two minute intervals.
- Limited fallback reporting when disconnected from power to provide some visibility after a trailer is unplugged.
- Multi constellation GNSS with SBAS and assisted positioning for faster and more reliable fixes.
- Cellular connectivity with LTE Cat M1 and 2G fallback plus cellular based location fallback when GNSS is unavailable.
- Built in 3 axis G sensor and local flash storage for motion event logging and later upload to Plaspy.
- Compact IP65 rated housing and ruggedized form factor intended for in housing installation on towed assets.

## How These Features Work with Plaspy

When Lommy Capture is registered in Plaspy, its position, motion and alarm messages become visible in Plaspy dashboards and reports. Plaspy ingests device messages and maps them to tracking objects, timelines and configurable alerts to support operational workflows.

- Real time location updates and map tracking reflecting frequent fixes when the unit is powered by lighting circuits.
- Motion and alarm events from the G sensor show up as event markers and can trigger notifications or workflows in Plaspy.
- Historical route retrieval from the device flash is uploaded and made available for playback, analysis and reporting.
- Power disconnection and fallback reports allow Plaspy to flag potential tampering or theft and notify operators.
- Plaspy automatically detects common tracker protocols and can parse UDP or SMS based messages for seamless integration.

## Typical Use Cases

- Anti theft monitoring and recovery for trailers and towed equipment with discreet internal installation.
- Trailer utilization and route monitoring to optimize fleet allocation and reduce empty miles.
- Maintenance scheduling driven by actual usage and motion based activity rather than calendar time.
- Geofencing and stop monitoring for logistical oversight and delivery performance tracking.
- Keeping intermittent power assets visible through energy harvesting and fallback reporting.
- Low maintenance tracking for assets where replacing batteries is impractical or costly.

## Feature Availability Notes

- Feature behavior can vary with firmware release and hardware revision from the manufacturer; not all capabilities are guaranteed on every unit.
- Installation method and wiring inside a light housing affect power harvesting performance and reporting intervals.
- Regional cellular band support and network availability influence connectivity and fallback behavior.
- Fallback reporting durations depend on energy stored in super capacitors and the specific device configuration.
- Consult Flextrack documentation and release notes for the device serial number or SKU you plan to deploy.

## Why Use Plaspy with These Features

Pairing Lommy Capture with Plaspy gives fleet managers a practical, low maintenance tracking solution for towed assets that need persistent visibility without extensive hardware changes. Plaspy brings those device feeds into a unified platform for mapping, event alerts, geofencing and historical reporting so operators can act on movement and power events quickly.

To learn more about Plaspy and how compatible trackers like Lommy Capture fit into broader fleet workflows, visit https://www.plaspy.com. Device features, firmware behavior and implementation details can change over time, so please verify the latest device specifications and installation guidance on the manufacturer site https://flextrack.dk.
