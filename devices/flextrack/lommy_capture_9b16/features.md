---
slug: /flextrack/lommy_capture_9b16/features
id: lommy_capture_9b16-features
sidebar_label: Features
title: Flextrack - Lommy Capture 9B16 Features
sidebar_class_name: menu_item_tracker
description: Battery less trailer and caravan GPS tracker features and Plaspy compatibility for discreet real time asset visibility
keywords:
  - Flextrack Lommy Capture 9B16
  - Lommy Capture features
  - Lommy Capture Plaspy compatible
  - trailer GPS tracker
  - caravan tracking device
  - energy harvesting tracker
  - adaptive reporting GNSS
  - IP65 discreet tracker
  - motion detection tracking
  - Plaspy fleet tracking
---

# Flextrack - Lommy Capture 9B16 Features

This page summarizes the public feature context for using the Flextrack Lommy Capture 9B16 with Plaspy. It focuses on practical capabilities, typical operational behavior, and how the device can integrate into Plaspy powered fleet monitoring and asset tracking workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, country variant, and the details of each installation. For final device specs, configuration instructions, and regulatory details please refer to the manufacturer documentation and release notes.

## Feature Overview

The Lommy Capture 9B16 is a compact, battery less GPS tracker designed for concealed installation in light housings on trailers, caravans and other towed assets. Its core value is low maintenance, discreet positioning, and Plaspy compatibility for real time asset visibility.

- Battery less operation using harvested energy from tail brake and indicator circuits to enable long term deployment without battery swaps.
- Cellular uplink with LTE Cat M1 and 2G fallback supporting UDP or SMS reporting into Plaspy compatible backends.
- Multi constellation GNSS with SBAS and assisted GNSS for faster and more reliable position fixes.
- Built in motion sensing to detect movement and trigger adaptive reporting to conserve harvested charge.
- Local flash buffering to store position and telemetry when connectivity is unavailable and forward later.
- IP65 rated discreet housing sized for in lamp installations for tamper resistant placement.

## Core Features of Flextrack - Lommy Capture 9B16

- Energy harvesting from vehicle lighting circuits for battery free operation when external power is present.
- Cellular data transport with support for UDP or SMS reporting to monitoring platforms.
- Multi constellation GNSS including GPS GLONASS GALILEO BEIDOU and QZSS plus SBAS assistance.
- Adaptive reporting logic that increases update frequency when charging and reduces frequency when power is limited.
- Integrated 3 axis motion sensor to detect movement and optimize reporting behavior.
- Local 2 MB flash storage for buffering positions and telemetry during outages.
- Compact IP65 enclosure intended for inside light housing installations to reduce visibility and tampering.

## How These Features Work with Plaspy

When integrated with Plaspy, the Lommy Capture 9B16 delivers location and activity signals that Plaspy can display, log, and use for alerting and analytics. Plaspy automatically detects common tracker protocols and ingests the device data for monitoring and historical reporting.

- Device reports GNSS fixes and motion activity into Plaspy using UDP or SMS so location updates appear on Plaspy dashboards.
- Adaptive reporting reduces unnecessary messages when the tracker is unpowered or stationary and increases cadence when motion or external power is detected.
- Buffered reports stored in local flash are forwarded to Plaspy once connectivity or power resumes, preserving route history.
- Motion sensor events translate into activity indicators and can trigger Plaspy alerts for potential movement or tampering.
- Plaspy accepts standard telemetry formats and can correlate Lommy Capture data with other assets in fleet views or historical exports.
- Plaspy endpoints such as d.plaspy.com can receive device traffic and the platform will help surface location, activity, and buffered data across your fleet.

## Typical Use Cases

- Discreet trailer and caravan tracking where concealed installation and low maintenance are priorities.
- Anti theft monitoring for towed assets using motion detection and concealed placement inside light housings.
- Long term fleet asset visibility where battery replacements would be impractical or costly.
- Route history collection and utilization reporting for trailers and rental caravans.
- Integrations where position and motion data from Lommy Capture are combined with other telematics or business systems via Plaspy.

## Feature Availability Notes

- Firmware and software revisions can change reporting behavior, available diagnostic outputs, and energy management strategies.
- Hardware revisions or regional variants may affect supported cellular bands and fallback behavior.
- Installation details such as wiring, sealing, and mounting location influence harvested energy and reporting cadence.
- Local regulatory approvals and carrier availability can affect cellular connectivity and SMS delivery.
- Always consult the manufacturer documentation for the exact feature set for a specific serial number and firmware level.

## Why Use Plaspy with These Features

Using Lommy Capture 9B16 with Plaspy gives fleet managers and integrators a low maintenance option to add real time location and activity visibility for towed assets. The combination of energy harvesting, motion triggered reporting, and local buffering helps maintain useful position history with minimal physical intervention and discreet installation.

Learn more about how Plaspy can incorporate Lommy Capture telemetry and other fleet data on the Plaspy website https://www.plaspy.com. Device features firmware behavior and manufacturer implementation details can change over time so please verify current specifications and installation guidance at the manufacturer site https://flextrack.dk.
