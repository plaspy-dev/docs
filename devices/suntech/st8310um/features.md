---
slug: /suntech/st8310um/features
id: st8310um-features
sidebar_label: Features
title: Suntech - ST8310UM Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Suntech ST8310UM GPS tracker and how it integrates with Plaspy for fleet tracking and anti theft
keywords:
  - Suntech ST8310UM features
  - Suntech ST8310UM GPS tracker
  - ST8310UM Plaspy compatibility
  - Suntech tracker features
  - LTE Cat 1 GPS tracker
  - IP67 asset tracker
  - vehicle tracking ST8310UM
  - geofence ST8310UM
  - accelerometer harsh event
  - backup battery GPS tracker
---

# Suntech - ST8310UM Features

This page summarizes the public feature context for using the Suntech ST8310UM tracker with Plaspy. It focuses on practical capabilities, how those capabilities are reflected inside Plaspy, and common operational uses for fleet and asset management. The ST8310UM is an ultra compact LTE Cat 1 tracker with 2G fallback, GNSS positioning, IP67 protection and built in telemetry that is Plaspy compatible out of the box.

Exact feature availability and behavior can vary by firmware revision, hardware variant, installation wiring, and manufacturer implementation. Where the tracker description lists capabilities such as virtual ignition detection, accelerometer events, geofences, tamper detection, backup battery support and low power modes, individual units or deployments may expose subsets of those features depending on configuration and firmware. Consult manufacturer documentation for device specific limits and setup details.

## Feature Overview

The ST8310UM delivers compact, rugged tracking hardware intended for exposed vehicle and asset installations and integrations with fleet platforms such as Plaspy. It emphasizes reliable GNSS location, cellular connectivity for continuous reporting, and low power operation for parked or long term assets.

- Real time GNSS tracking with integrated LTE Cat 1 connectivity and 2G fallback to maintain coverage in mixed network areas.
- Small IP67 rated enclosure for exposed or harsh installations where size and environmental protection matter.
- Event driven reporting including virtual ignition detection using voltage and motion and accelerometer based harsh event alerts.
- Configurable geofencing with circular and polygonal regions for perimeter and route based alerts.
- Rechargeable backup battery and wide DC input range to support vehicle power variations and power loss reporting.

## Core Features of Suntech - ST8310UM

- LTE Cat 1 cellular connectivity with 2G fallback for broad network reach and telemetry transmission.
- GNSS positioning with multi constellation support for accurate location fixes suitable for real time tracking.
- IP67 environmental protection in a compact form factor designed for exposed installations.
- Virtual ignition detection using voltage and motion information to determine ignition state.
- Built in 3 axis accelerometer for motion detection and harsh driving or impact event reporting.
- Rechargeable backup battery (3.7 V, 220 mAh) plus wide DC input range for resilient power handling.
- Configurable geofence support including circular and polygonal zones for enter and exit events.
- Tamper detection and optional jamming detection for anti theft and perimeter protection workflows.

## How These Features Work with Plaspy

Plaspy ingests the ST8310UM telemetry and converts location fixes and events into map views, alerts, and historical reports. Plaspy automatically detects compatible tracker protocols and accepts telemetry over standard transport methods, enabling the ST8310UM to stream position and status data into the platform with minimal configuration.

- Real time location updates appear on Plaspy maps and dashboards as GNSS fixes are received from the device.
- Ignition and trip status derived from voltage and motion reporting can be used to generate trip summaries and ignition based alerts.
- Accelerometer driven events are presented as incident or harsh driving records for review and driver coaching.
- Geofence enter and exit events are surfaced as automated alerts or rule triggers for perimeter control and route compliance.
- Tamper and jamming notifications forward to Plaspy for immediate attention and recovery workflows.
- Power loss, backup battery status, and power state changes are reported into Plaspy to help monitor vehicle health and support response actions.

## Typical Use Cases

- Fleet tracking and route monitoring for real time operational visibility and dispatch coordination.
- Anti theft monitoring and rapid recovery workflows using tamper alerts, jamming detection, and continuous GNSS tracking.
- Small asset and equipment monitoring in exposed locations where IP67 protection and compact size are required.
- Driver safety and incident analysis using accelerometer events and trip summaries.
- Long term parked vehicle surveillance using low power and deep sleep modes with backup battery support.
- Mixed fleet deployments where devices need to integrate with a centralized platform for reporting and alerting.

## Feature Availability Notes

- Firmware revision, regional hardware variants, and device configuration can affect which features are available on a given unit.
- Virtual ignition detection may depend on installation wiring and how voltage or motion inputs are presented during setup.
- Optional features such as jamming detection or advanced sensor behaviors may require specific firmware or factory options.
- Geofence behavior and event frequency can be influenced by reporting intervals configured on the device and in Plaspy.
- Always check manufacturer documentation and the device configuration used in your deployment to confirm supported behaviors.

## Why Use Plaspy with These Features

Using the ST8310UM with Plaspy centralizes location, event, and power state telemetry so teams can monitor fleets and assets from a single platform. Plaspy translates device events into actionable dashboards, alerts, and historical reports that support dispatch, recovery, safety review, and preventive maintenance planning. The combination of rugged hardware and platform level visibility helps reduce downtime and simplifies operational oversight across mixed fleets.

To learn more about Plaspy and how it integrates with compatible trackers visit https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and manufacturer documentation please verify information on the official Suntech website http://www.suntechint.com/ .
