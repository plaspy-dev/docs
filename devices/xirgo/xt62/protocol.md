---
slug: /xirgo/xt62/protocol
id: xt62-protocol
sidebar_label: Protocol
title: Xirgo - XT62 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Xirgo XT62 and how it communicates with Plaspy for cold chain telemetry and location reporting
keywords:
  - Xirgo XT62 protocol
  - Xirgo XT62 GPS protocol
  - XT62 Plaspy compatibility
  - Xirgo cold chain tracker protocol
  - XT62 communication protocol
  - XT62 tracking protocol
  - Xirgo asset module protocol
  - Plaspy compatible trackers
  - GPS tracker protocol guide
  - refrigerated trailer tracking
---

# Xirgo - XT62 Protocol

This page describes the public protocol context for using the Xirgo XT62 asset module with Plaspy. It focuses on the observable communication behavior and the role of the tracker protocol in delivering location and condition telemetry from refrigerated trailers and cargo containers into Plaspy for unified monitoring, alerts, and reporting.

Plaspy receives XT62 telemetry using shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. The XT62 is typically configured to report temperature, door status, remote I O signals and location over cellular links. Exact protocol behavior and message content can vary with firmware version, hardware revision, and manufacturer implementation, so deployment validation and firmware awareness are recommended.

## Protocol Overview

The tracker communication protocol defines how the XT62 reports identity, location, and sensor telemetry to a backend service such as Plaspy. At a high level the protocol enables the device to deliver timely condition and position data that Plaspy can normalize and present in dashboards, alerts, and APIs.

- Device identification and registration information to associate the asset with an account in Plaspy.
- Periodic location reporting so assets appear on maps and support route monitoring.
- Sensor telemetry delivery including temperature readings, door and roll up sensor events, and remote I O status for condition monitoring.
- Event reporting for notable conditions such as temperature excursions or access events that trigger alerts and rules.
- Support for remote control and I O interactions when configured through Plaspy commands and the device firmware.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models while minimizing per‑device setup. When an XT62 is configured to send data to the Plaspy endpoint, the platform uses the incoming connection and message patterns to determine how to parse the feed and map telemetry into Plaspy records.

- Devices should be pointed to the Plaspy server at d.plaspy.com or the server IP 54.85.159.138.
- All devices report to the same Plaspy listening port, which is 8888.
- The XT62 may be configured to use either UDP or TCP on port 8888 depending on device settings and network behavior.
- When configured correctly, users typically do not need to manually select a protocol inside Plaspy because the platform automatically detects the tracker protocol.
- Confirm device reporting settings and APN or SIM configuration so messages reach the Plaspy endpoint for automatic detection.

## Transport and Connection Context

Connection context covers how the XT62 reaches the Plaspy endpoint and what transport options are commonly used. Understanding transport helps ensure reliable delivery of real time telemetry and event notifications for refrigerated assets.

- The XT62 can be configured to communicate using either UDP or TCP on port 8888.
- Plaspy accepts connections addressed to d.plaspy.com or directly to the IP 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices, simplifying server configuration for trackers in a mixed fleet.
- Cellular data connectivity is required for in transit reporting; network carrier settings and APN configuration can affect delivery.
- Network conditions such as NAT, carrier session timeouts, or firewall rules can influence whether UDP or TCP is preferable for a particular deployment.

## Protocol Compatibility Notes

- Firmware versions can change message behavior, field order, or available sensor reporting; check firmware notes when validating compatibility.
- Hardware revisions or optional I O modules may add or remove sensor channels, which affects the telemetry payload seen by Plaspy.
- Manufacturer configuration options may allow the XT62 to use different transports or reporting intervals; confirm device configuration when integrating.
- Transport selection between UDP and TCP can affect delivery guarantees and firewall requirements in the mobile network path.
- Test a representative unit before wide scale deployment to confirm Plaspy receives expected sensor and event data.
- For any device specific questions consult the manufacturer documentation to confirm compatibility considerations.

## Why Protocol Understanding Matters

Knowing how the XT62 communicates with Plaspy helps ensure correct setup, faster troubleshooting, and dependable long term operation for cold chain assets. A clear view of protocol behavior reduces integration friction and supports predictable alerting and reporting.

- Faster identification of connectivity problems by confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Improved troubleshooting of sensor or event mapping by understanding which telemetry the device sends and when.
- Better planning for firmware updates that may change telemetry behavior or introduce new fields.
- More reliable alerting and compliance reporting by verifying event formats and reporting intervals.
- Easier validation of remote I O and control workflows when device responses and command paths are understood.

## Why Use Plaspy with This Protocol

Using the Xirgo XT62 with Plaspy brings refrigerated asset telemetry and location together in a single platform. For operations teams managing reefers, cold chain pharmaceuticals, or high value cargo, that unified view supports route optimization, condition based alerts, and faster incident response without bespoke server integration work.

To learn more about Plaspy and platform features for asset and fleet visibility visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify information with Xirgo at https://xirgo.com/ as implementations and firmware can change over time.
