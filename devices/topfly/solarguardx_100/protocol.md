---
slug: /topfly/solarguardx_100/protocol
id: solarguardx_100-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly SolarGuardX 100 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - TopFly SolarGuardX 100 protocol
  - TopFly SolarGuardX 100 GPS protocol
  - SolarGuardX 100 Plaspy compatibility
  - SolarGuardX 100 communication protocol
  - SolarGuardX 100 tracking protocol
  - TopFly asset tracker Plaspy
  - Solar powered GPS tracker Plaspy
  - cargo GPS tracker protocol
  - SolarGuardX 100 LTE tracker
  - fleet tracking protocol Plaspy
---

# TopFly - SolarGuardX 100 Protocol

This page provides a public protocol overview for using the TopFly SolarGuardX 100 with Plaspy. It focuses on high level, non sensitive details about how the device communicates with Plaspy so fleet operators and integrators can understand connection and reporting behavior without exposing implementation internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can still vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the common communication context and practical compatibility considerations rather than device firmware internals.

## Protocol Overview

At a high level the SolarGuardX 100 reporting protocol governs how the tracker packages and sends GNSS positions, events, alarms, and BLE sensor telemetry to a backend service such as Plaspy. The protocol's role is to enable reliable identification, delivery, and buffering of usable data so Plaspy can ingest location and status updates for fleet and security workflows.

- Enables periodic and event driven transmission of GPS position, motion state, geofence events, and security alarms to Plaspy.
- Carries auxiliary telemetry such as BLE sensor readings and device status so Plaspy can present enriched asset data.
- Supports local buffering so historical points are preserved when coverage is lost and uploaded later to Plaspy.
- Uses standard IoT transports supported by the device to reach the Plaspy endpoint with secure transport options provided by the device firmware.
- Provides device identification and reporting cadence information so Plaspy can associate incoming streams with the correct asset record.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects the tracker protocol based on the data that the device submits. In most cases, when the SolarGuardX 100 is configured to report to Plaspy it will be recognized and processed without requiring the user to manually select a protocol inside the platform.

- Plaspy listens on the public endpoint d.plaspy.com for device reports.
- The Plaspy server is reachable at the public IP 54.85.159.138 for direct IP configuration.
- Plaspy uses the same port for all devices which simplifies device configuration and reduces setup errors.
- Plaspy automatically detects the tracker protocol when a properly configured device connects to the endpoint.
- Users typically only need to ensure the device reports to d.plaspy.com or 54.85.159.138 and uses the correct transport and port.

## Transport and Connection Context

SolarGuardX 100 is designed to work over common IoT transports and can be configured to use either UDP or TCP on the shared Plaspy port. Choosing transport depends on the device firmware configuration and the desired trade offs between latency, reliability, and power consumption.

- Devices may be configured to use UDP or TCP on port 8888 to report to Plaspy.
- The device can point to the DNS name d.plaspy.com or directly to the IP address 54.85.159.138.
- All devices supported by Plaspy use the same port which simplifies fleet wide configuration.
- Some deployments prefer TCP for reliable delivery while others choose UDP for lower latency and battery savings depending on device settings.
- Transport selection should match the device firmware options and any carrier or network considerations for LTE Cat M1, NB2, or fallback networks.

## Protocol Compatibility Notes

- Firmware revisions can change how certain events are reported or which transports are available; always check the device firmware release notes.
- Hardware revisions or different regional SKUs may alter available network bands or accessory integrations that affect reporting behavior.
- Manufacturer side configuration options such as secure payload settings can affect how the device encrypts or signs telemetry before sending.
- Transport choice (TCP versus UDP) may change retry behavior and buffering characteristics on the device.
- Buffered upload behavior can vary by firmware and should be tested for your operational patterns to confirm expected recovery after outages.
- Validate any remote command, BLE accessory forwarding, or SMS fallback behavior against the latest TopFly documentation.

## Why Protocol Understanding Matters

Understanding how the SolarGuardX 100 communicates helps ensure successful registration, reliable reporting, and quicker troubleshooting when integrating devices with Plaspy. A practical awareness of transport choices, buffering behavior, and firmware variation reduces downtime and improves operational confidence.

- Simplifies initial setup by aligning device reporting settings with Plaspy endpoint and port expectations.
- Helps diagnose connectivity issues by checking whether the device is using the expected transport and destination.
- Guides firmware update and configuration decisions that impact how events and telemetry are delivered to Plaspy.
- Enables informed choices about reporting intervals and buffering to balance battery life and data freshness.
- Improves security posture by confirming which secure transport or payload options are active on deployed devices.

## Why Use Plaspy with This Protocol

Using the SolarGuardX 100 with Plaspy provides a practical solution for persistent cargo and trailer visibility. The device's long life battery with solar assist, rugged enclosure, GNSS performance, and BLE accessory support make it well suited for outdoor asset protection, while Plaspy ingests and normalizes incoming location, alarm, and telemetry streams for operational workflows.

If you want to learn more about Plaspy and how it can work with devices like the SolarGuardX 100, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer website https://www.topflytech.com/.
