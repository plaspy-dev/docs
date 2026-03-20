---
slug: /trackerking/ec35/protocol
id: ec35-protocol
sidebar_label: Protocol
title: TrackerKing - EC35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for connecting the TrackerKing EC35 to Plaspy with shared server settings and automatic protocol detection
keywords:
  - TrackerKing EC35 protocol
  - TrackerKing EC35 GPS protocol
  - TrackerKing EC35 Plaspy
  - EC35 GT06 compatibility
  - EC35 JT808 compatibility
  - EC35 Tianqin compatibility
  - EC35 fleet tracking
  - EC35 telemetry protocol
  - TrackerKing GPS compatibility
  - EC35 immobilizer tracking
---

# TrackerKing - EC35 Protocol

This page describes the public protocol context for using the TrackerKing EC35 with Plaspy. It focuses on how the EC35 reports location and telemetry to Plaspy and how Plaspy receives those reports. The content is intended for technical users who need to understand connection and compatibility considerations without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior for the EC35 can vary depending on firmware version, hardware revision, and manufacturer configuration, so verify device specifics with TrackerKing when in doubt.

## Protocol Overview

The EC35 uses standard GPS tracking protocols supported by many fleet platforms to deliver position, sensor telemetry, and event reports to a back end like Plaspy. Those protocols provide a common language for the device to identify itself, report status, and transmit sensor values that Plaspy can display and act upon.

- The EC35 is reported to support GT06, JT808, and Tianqin style tracking protocols for interoperability with telematics platforms.
- Protocols carry GPS coordinates, timestamped events, ignition and sensor status, and telemetry such as fuel and temperature readings.
- Protocol-level identification helps Plaspy map incoming reports to a specific device and present consistent live and historical data.
- The communication protocol determines how the EC35 encodes data and what fields Plaspy can extract for dashboards and alerts.
- Protocol compatibility enables Plaspy to expose device features such as immobilizer control, driver ID, and external sensor telemetry when supported by the device firmware.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a shared server endpoint and port and performs automatic protocol detection so most devices do not require manual protocol selection in the platform. Proper device configuration to point at Plaspy is the primary requirement for automatic detection and onboarding.

- Plaspy listens on a single shared port for all supported devices, which simplifies device configuration.
- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol from incoming reports when a device is correctly pointed at the Plaspy endpoint.
- In typical setups the user does not need to select a protocol inside Plaspy once the EC35 is reporting to the Plaspy endpoint.
- If a device uses a firmware variant or nonstandard reporting behavior, verification against the manufacturer documentation can help resolve detection issues.

## Transport and Connection Context

Connection context describes how the EC35 sends its protocol reports to Plaspy rather than protocol internals. The EC35 supports common transport modes and should be configured to reach Plaspy using the shared server settings.

- The EC35 may be configured to use UDP or TCP transport to send reports to Plaspy depending on device support and configuration.
- Point the device to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 and use port 8888 for reporting.
- All devices in Plaspy use the same port, which simplifies deployment and reduces the need for per-device port changes.
- Use the transport mode (UDP or TCP) that matches your device firmware and network reliability needs; some installations prefer TCP for delivery guarantees while others use UDP for lower overhead.
- Ensure network routing and firewall rules allow outbound connections from devices to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Protocol support can depend on the specific EC35 firmware build; GT06, JT808, and Tianqin are commonly supported but behavior may differ with firmware revisions.
- Hardware revisions across production batches can introduce small differences in feature support and sensor wiring; confirm the device revision if precise behavior matters.
- Some advanced features such as remote immobilizer control, driver ID, or Bluetooth relay integration require both firmware support and correct mapping in Plaspy.
- Transport selection (TCP vs UDP) must match the configuration on the device; mismatched transport will prevent the device from reporting successfully.
- Manufacturer-side customizations or regional variants may alter reporting fields or optional message types; always cross-check with TrackerKing documentation.
- Validate compatibility and feature availability against official TrackerKing resources when planning deployments or integrating new firmware releases.

## Why Protocol Understanding Matters

Knowing how the EC35 communicates and which protocol it uses helps ensure a smooth setup, reliable operations, and faster troubleshooting when integrating with Plaspy. Awareness of protocol behavior reduces time to first fix and improves confidence in device data quality.

- Proper protocol configuration ensures Plaspy can identify the device and map incoming telemetry to the correct vehicle or asset.
- Understanding transport choices and server settings helps avoid common connectivity issues caused by incorrect server addresses or blocked ports.
- Awareness of firmware and hardware differences reduces surprises when enabling features like fuel sensors, ACC detection, or remote cut-off.
- Protocol familiarity speeds up troubleshooting of missed reports, incorrect sensor values, or intermittent connections by narrowing likely causes.
- Clear expectations about what data a protocol exposes help administrators design alerts, rules, and dashboards that reflect the device capabilities.

## Why Use Plaspy with This Protocol

Using the TrackerKing EC35 with Plaspy gives fleets and operators reliable visibility into vehicle location, status, and sensor telemetry. The EC35’s rugged design, wide voltage range, and internal battery make it well suited for demanding vehicle environments where continuous reporting and resilience matter. When the EC35 is configured to report to Plaspy, operators can use live maps, historical playback, alerts, and remote control features to improve security and operational oversight.

To get started, configure the EC35 to report to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 and choose the transport mode supported by your unit (UDP or TCP). Learn more about Plaspy on the main website https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information with TrackerKing at https://trackerking.cn/.
