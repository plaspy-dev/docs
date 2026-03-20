---
slug: /topfly/warriorx_100/protocol
id: warriorx_100-protocol
sidebar_label: Protocol
title: TopFly - WarriorX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for connecting the TopFly WarriorX 100 tracker to Plaspy servers
keywords:
  - TopFly WarriorX 100 protocol
  - WarriorX 100 GPS protocol
  - TopFly protocol for Plaspy
  - WarriorX 100 communication protocol
  - WarriorX 100 tracking protocol
  - Plaspy compatible trackers
  - GPS tracker protocol integration
  - asset tracking protocol TopFly
  - fleet tracking WarriorX 100
  - TopFly Plaspy compatibility
---

# TopFly - WarriorX 100 Protocol

This page describes the public protocol context for using the TopFly WarriorX 100 tracker with the Plaspy platform. It summarizes how the device communicates with Plaspy in non sensitive terms, what connection options are commonly used, and what to check when integrating the tracker for live location, telemetry, and event reporting.

The WarriorX 100 is a low power, battery powered outdoor asset tracker built for long life and rugged deployments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer documentation when you need firmware specific or model revision details.

## Protocol Overview

The device communication protocol defines how the WarriorX 100 formats and sends telemetry and event data so Plaspy can ingest it reliably. The public context on this page focuses on the role of that protocol rather than implementation internals.

- Enables GNSS fixes, sensor readings, and event notifications to be transmitted from the tracker to Plaspy for mapping and alerting.
- Provides device identification and state details so Plaspy can associate incoming messages with the correct asset and configuration.
- Supports configurable reporting profiles so the device can balance update frequency against battery life for different operational needs.
- Carries event types such as removal alerts, temperature readings, geo fence transitions, and battery state for automated workflows.
- Works over standard transports supported by the WarriorX 100 so Plaspy can ingest data from diverse network conditions.

## How Plaspy Detects the Protocol

Plaspy collects incoming telemetry at a shared endpoint and automatically determines the tracker protocol from the incoming connection and message characteristics. In most cases users do not need to pick a protocol manually inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

- Plaspy listens on a single consistent port for device traffic so behavior is the same across supported trackers.
- Devices pointing to the Plaspy endpoint and reporting data are automatically identified and matched to the appropriate protocol handler.
- Proper device configuration to report to the Plaspy endpoint is the usual requirement for automatic detection to work.
- If a tracker is not detected automatically, confirm network routing, endpoint, and device transport settings with your device provisioning tools.
- Plaspy does not require per device port configuration because all devices use the same ingest port and shared endpoint model.

## Transport and Connection Context

Transport setup determines how the WarriorX 100 establishes and maintains a link to Plaspy. The tracker supports multiple transports depending on firmware and configuration, and Plaspy accepts device traffic on its public ingest endpoint.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and deployment needs.
- Devices can point to the Plaspy server domain d.plaspy.com or the public server IP 54.85.159.138 when configuring their reporting endpoint.
- Plaspy uses port 8888 for ingestion and all devices supported by Plaspy use the same port to simplify provisioning.
- Other transports supported by the WarriorX 100 such as MQTT or SMS are handled by the device and can be used in parallel where supported by carrier and firmware.
- Transport selection affects connection behavior and battery use, so choose the option that matches your deployment requirements and the device firmware capabilities.

## Protocol Compatibility Notes

- Firmware variations can change available transports, message cadence options, and optional encryption settings that affect integration.
- Hardware revisions or accessory support can introduce differences in sensor reporting or peripheral interfaces.
- Some features such as FOTA, optional encryption, or BLE peripheral support may require specific firmware builds or provisioning steps.
- Transport choice between UDP, TCP, or MQTT can affect reliability and battery life; validate the recommended transport for your workflow.
- Manufacturer configuration defaults may differ from what Plaspy expects; confirm the reporting endpoint and port during provisioning.
- Always validate compatibility for critical workflows like anti theft alerts and temperature monitoring against current manufacturer release notes.

## Why Protocol Understanding Matters

Knowing how the WarriorX 100 communicates helps ensure reliable setup, efficient troubleshooting, and predictable behavior over the life of a deployment. A clear view of protocol and transport choices reduces downtime and supports better battery and reporting tradeoffs.

- Faster root cause identification when a device stops reporting or sends unexpected telemetry.
- Better battery life planning by selecting reporting profiles and transports that match operational needs.
- More reliable alerting and event handling for anti theft, geofencing, and cold chain monitoring.
- Easier coordination of firmware updates and feature enablement that depend on protocol support.
- Improved device provisioning and mass deployment workflows when the endpoint and port are standardized.

## Why Use Plaspy with This Protocol

Using the WarriorX 100 with Plaspy provides centralized visibility for long life outdoor asset tracking, combining the device’s rugged hardware and parallel GNSS accuracy with Plaspy’s ingestion and mapping capabilities. Organizations gain consistent telemetry collection, event processing, and historic playback while minimizing field maintenance thanks to the device’s battery focused design and flexible reporting modes.

To learn more about Plaspy and how it ingests and manages device telemetry, visit https://www.plaspy.com. For the most current device specific protocol, firmware behavior, and implementation details consult the manufacturer documentation at https://www.topflytech.com/ as device support and firmware features can change over time.
