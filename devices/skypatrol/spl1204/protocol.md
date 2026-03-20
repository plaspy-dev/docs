---
slug: /skypatrol/spl1204/protocol
id: spl1204-protocol
sidebar_label: Protocol
title: SkyPatrol - SPL1204 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for SkyPatrol SPL1204 and Plaspy compatibility
keywords:
  - SkyPatrol SPL1204 protocol
  - SkyPatrol SPL1204 GPS protocol
  - SPL1204 Plaspy compatibility
  - SPL1204 tracking protocol
  - SkyPatrol GPS tracker protocol
  - Plaspy device protocol
  - lock tracker protocol
  - asset protection tracker
  - RFID unlock events tracking
  - tamper alert GPS tracker
---

# SkyPatrol - SPL1204 Protocol

This page describes the public protocol context for using the SkyPatrol SPL1204 with Plaspy. It focuses on how the device reports location and event telemetry into Plaspy and what to know about the communication path between the lock tracker and the Plaspy platform.

The SPL1204 is a rugged lock tracker that reports GPS position, tampering alerts, RFID unlock events, and battery state. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general, publicly safe guidance rather than firmware level specifics.

## Protocol Overview

The device reporting protocol defines how the SPL1204 sends positional and event data to a server and how that data is interpreted by a fleet platform. For Plaspy integrations this protocol enables identification of the device, continuous location updates, and the transmission of event telemetry that is useful for anti theft and chain of custody workflows.

- Enables GPS position reports and time stamped telemetry to reach Plaspy for mapping and alerting.
- Carries event records such as tamper alerts, RFID unlock events, and battery status for audit and alarm workflows.
- Allows the tracker to identify itself so Plaspy can associate messages with the correct asset or lock.
- Supports periodic and event driven reporting so operators receive relevant updates without constant polling.
- Provides the basic handshake and session behavior required for reliable message delivery over cellular transport.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a shared Plaspy endpoint and uses those messages to identify the device protocol and type. In most deployments users do not need to manually pick a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy receives tracker reports at the public domain d.plaspy.com.
- Plaspy also accepts connections to the server IP 54.85.159.138 when that addressing is used.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol so correct parsing is applied when the device reports.
- With correct reporting settings on the device, manual protocol selection in Plaspy is typically unnecessary.
- Detection is focused on publicly observable message patterns and identification fields rather than firmware internals.

## Transport and Connection Context

The SPL1204 communicates over cellular networks and may use either UDP or TCP transport depending on device configuration and carrier behavior. When configuring the device to report to Plaspy, use the shared Plaspy endpoint and keep transport settings consistent with network and firewall rules for reliable delivery.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device can use UDP or TCP on port 8888 depending on the model configuration and network setup.
- The Plaspy platform listens on port 8888 for all supported devices which standardizes connectivity.
- Choosing UDP or TCP can affect delivery semantics and network traversal but does not change the public protocol intent.
- Ensure carrier and firewall rules allow outbound connections to the Plaspy endpoint and port for the tracker to report reliably.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available telemetry fields, and event names; always confirm behavior for the specific firmware on your units.
- Hardware revisions or regional variants of the SPL1204 may include different radios or sensor sets that affect what data is reported.
- Transport selection between UDP and TCP may be configurable on the device and should match network constraints and carrier recommendations.
- Manufacturer configuration commands and server addressing must be applied on the device to point it at the Plaspy endpoint.
- When mixing device types in a deployment, remember that Plaspy uses a common port and automatic detection to handle protocol differences.
- Validate compatibility against SkyPatrol documentation for firmware specific notes and any manufacturer advisories.

## Why Protocol Understanding Matters

Understanding how the SPL1204 communicates helps ensure a smooth setup, effective troubleshooting, and reliable long term operation with Plaspy. Visibility into the communication context makes it easier to confirm the device is reporting the right events and to correlate those events with operational processes.

- Simplifies initial device configuration so the tracker reports to d.plaspy.com or 54.85.159.138 on port 8888 as required.
- Reduces time to resolve connectivity issues by focusing on transport and endpoint settings first.
- Helps map reported events like tamper alerts and RFID unlocks to Plaspy dashboards and alarm workflows.
- Aids decision making about choosing UDP or TCP transport based on network reliability and carrier behavior.
- Encourages verification of device firmware and hardware versions when unexpected telemetry changes appear.

## Why Use Plaspy with This Protocol

Using the SPL1204 with Plaspy gives organizations practical visibility and event awareness for high value cargo and sealed shipments. When the tracker is configured to report to Plaspy, operators can monitor location, respond to tampering alerts, and audit RFID unlock events within a unified fleet management environment.

Plaspy centralizes lock derived telemetry alongside vehicle and fleet data to support anti theft workflows, chain of custody reporting, and operational oversight. To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information with the manufacturer at https://www.skypatrol.com/.
