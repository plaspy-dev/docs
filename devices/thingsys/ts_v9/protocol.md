---
slug: /thingsys/ts_v9/protocol
id: ts_v9-protocol
sidebar_label: Protocol
title: ThingSys - TS-V9 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ThingSys TS V9 and how it communicates with Plaspy for real time tracking
keywords:
  - ThingSys TS V9 protocol
  - ThingSys TS V9 GPS protocol
  - ThingSys TS V9 protocol for Plaspy
  - TS V9 communication protocol
  - TS V9 tracking protocol
  - ThingSys vehicle tracker protocol
  - Plaspy device compatibility
  - GPS tracker protocol integration
  - vehicle telematics protocol
  - fleet tracking protocol
---

# ThingSys - TS-V9 Protocol

This page describes the public protocol context for using the ThingSys TS-V9 vehicle tracker with Plaspy. It explains how the tracker communicates with Plaspy in general, what role the tracker reporting protocol plays in delivering usable location and telemetry, and which connection settings are relevant for integrating the TS-V9 into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is pointed at the Plaspy endpoint. Exact protocol behavior for the TS-V9 can vary depending on firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, implementation safe information and integration context rather than device internals.

## Protocol Overview

The TS-V9 reporting protocol is the mechanism the tracker uses to send position fixes, telemetry and alarms to a remote server. For integration with Plaspy, the protocol determines how the device identifies itself, how often it reports, and what telemetry fields are delivered so Plaspy can present real time location, alerts and historical data.

- The protocol carries GNSS position, time, and commonly used vehicle telemetry such as ignition state, mileage, and alert events.
- It provides identity information so Plaspy can associate incoming messages with the correct device record.
- Reporting behavior is influenced by device configuration settings on the tracker such as reporting intervals and event triggers.
- The protocol format enables Plaspy to parse and store usable positions and telemetry for dashboards, notifications and reports.
- Protocol-level behavior can be affected by carrier connectivity and the device firmware version.

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker reports on a single shared endpoint and port and automatically detects the tracker protocol when data arrives. In most cases you do not need to select a protocol inside Plaspy if the TS-V9 is configured to report to the Plaspy endpoint and the device is properly identified on the network.

- Point the TS-V9 at the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device reporting target.
- Plaspy listens on port 8888 and all devices supported by Plaspy use the same port for reporting.
- The TS-V9 may be configured to use UDP or TCP to send data to Plaspy depending on device settings and network conditions.
- When the device reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device.
- Users typically only need to confirm the device is configured to report to the Plaspy endpoint and that the device identity matches the record in their Plaspy account.

## Transport and Connection Context

Connection context covers how the TS-V9 sends data to Plaspy and which addressing options are commonly used. For Plaspy integration, the TS-V9 can use either of the standard transport modes supported by the device and should point at the shared Plaspy endpoint.

- The TS-V9 may be configured to use UDP or TCP on port 8888 depending on device support and installer preference.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the reporting destination.
- All devices in Plaspy use the same port, simplifying device configuration across fleets.
- Use the transport mode that matches your network and device firmware recommendations, and verify connectivity from the device to the Plaspy endpoint.
- Transport selection affects delivery characteristics but not the fact that Plaspy will receive and detect the tracker protocol automatically.

## Protocol Compatibility Notes

- Firmware differences can change message fields, reporting triggers, or optional telemetry. Verify the TS-V9 firmware release notes when precise fields matter.
- Hardware revisions or optional interfaces (for example external fuel sensors or CAN integration) can affect what telemetry is available to Plaspy.
- Some manufacturer deployments offer both platform reporting and SMS or phone control options; ensure you choose the reporting mode intended for Plaspy ingestion.
- Transport selection (UDP versus TCP) may be constrained by carrier or regional network behavior; confirm the device transport is compatible with your connectivity plan.
- Always validate the device identity and reporting target after configuration to ensure messages reach d.plaspy.com or 54.85.159.138 on port 8888.
- When integrating many devices, standardizing firmware and configuration reduces variability and improves reliability.

## Why Protocol Understanding Matters

Understanding the TS-V9 communication protocol helps ensure successful setup and reliable operation in Plaspy, while keeping troubleshooting time and integration friction low. Knowing what the device sends and how it connects lets you confirm that positions, alarms and telemetry appear as expected.

- Verifying reporting intervals and event triggers reduces false alarms and ensures useful data density for tracking and reporting.
- Confirming required telemetry fields are present helps Plaspy present accurate ignition, mileage, fuel and alarm data.
- Awareness of firmware and hardware differences speeds diagnosis when a device sends unexpected or incomplete data.
- Understanding transport and destination settings avoids misdirected reports and simplifies fleet wide configuration.
- Clear protocol expectations support smoother OTA update planning and long term device maintenance.

## Why Use Plaspy with This Protocol

Pairing the TS-V9 with Plaspy provides a practical, professional vehicle tracking solution. The TS-V9’s multi generation cellular connectivity, vehicle telemetry interfaces and rugged design make it suitable for fleet, rental and specialized vehicle use, while Plaspy ingests position and telemetry so operators can monitor real time location, receive alerts, and generate historical reports.

To learn more about how Plaspy supports device integration and to review platform options, visit https://www.plaspy.com. For the most current device specific protocol notes, firmware details and technical manuals for the TS-V9, consult the manufacturer at https://www.thingsys.com/ to verify protocol support and device behavior over time.
