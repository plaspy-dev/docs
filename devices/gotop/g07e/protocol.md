---
slug: /gotop/g07e/protocol
id: g07e-protocol
sidebar_label: Protocol
title: GOTOP - G07E Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for GOTOP G07E integration with Plaspy including connection and transport context
keywords:
  - GOTOP G07E protocol
  - GOTOP G07E GPS protocol
  - GOTOP G07E communication protocol
  - GOTOP G07E tracking protocol
  - GOTOP G07E Plaspy compatibility
  - GOTOP GPS tracker protocol
  - solar magnet GPS tracker protocol
  - asset tracking protocol Plaspy
  - vehicle tracking protocol GOTOP
  - fleet tracking G07E protocol
---

# GOTOP - G07E Protocol

This page summarizes the public protocol context for using the GOTOP G07E tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are required, and practical considerations for reliable reporting without exposing firmware internals or private parser details.

The G07E is a solar powered magnet GPS tracker designed for long term outdoor asset monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact on device behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so treat this page as protocol context rather than a firmware reference.

## Protocol Overview

At a high level, the tracker reporting protocol governs how the G07E identifies itself to a server, transmits position and event data, and updates status such as battery and alarms. For integration with Plaspy the protocol carries location, telemetry, and event messages that Plaspy interprets for live maps, alerts, and history.

- Carries position updates and timestamps so Plaspy can place the device on live maps and in historical playback.
- Reports event data such as motion, drop trigger, SOS, and power status for alerting and telemetry.
- Includes supplemental positioning inputs like Wi Fi assisted fixes or GSM location that Plaspy can use when GNSS is limited.
- Enables remote reporting over cellular data or fallback SMS reporting for link resilience.
- Supports offline logging on the device that Plaspy can reconcile when the tracker resumes connectivity.

## How Plaspy Detects the Protocol

Plaspy receives tracker connections at a shared endpoint and automatically determines which tracker protocol is being used so users typically do not need to select a protocol manually. Proper device configuration to report to the Plaspy endpoint is the primary requirement for automatic detection.

- Plaspy listens for device traffic at the public hostname d.plaspy.com and the public server IP 54.85.159.138.
- All supported devices use the same Plaspy port, and Plaspy automatically detects the tracker protocol when the device reports to the endpoint.
- If the tracker is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is usually unnecessary.
- Automatic detection simplifies onboarding for mixed fleets and reduces configuration errors when adding G07E units.
- For troubleshooting, confirm the device is reporting to d.plaspy.com or the server IP and using the shared Plaspy port.

## Transport and Connection Context

The G07E can be configured to use standard transport mechanisms to deliver its reporting data. Connection choices affect how the device establishes and maintains a session with Plaspy but do not change the public role of the protocol in reporting location and events.

- The device may be configured to use either UDP or TCP on the Plaspy port depending on device support and configuration preferences.
- Plaspy accepts device connections to the hostname d.plaspy.com or directly to 54.85.159.138 using the shared port.
- All devices in Plaspy use the same port which simplifies firewall and NAT configuration for deployments.
- Transport selection (UDP vs TCP) can affect delivery semantics and network behavior but Plaspy supports both options on the shared port.
- Verify that network routing and outbound rules allow the tracker to reach d.plaspy.com or the server IP on the Plaspy port.

## Protocol Compatibility Notes

- Firmware version differences can change message frequency, available event types, or optional fields; verify behavior against the device firmware revision.
- Hardware revisions and optional modules (for example Wi Fi assistance or different GNSS modules) can affect the available positioning inputs and event signals.
- Manufacturer configuration tools or SMS commands may be required to set the device to report to the Plaspy endpoint and correct transport.
- Transport choice between UDP and TCP should be consistent with network constraints and device configuration options.
- Offline logging to microSD means the tracker can provide historical positions after connectivity resumes; ensure Plaspy ingest expectations align with this behavior.
- Always validate protocol details and command sets with the manufacturer documentation to account for model specific variants.

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps ensure a smooth setup, reliable ongoing operation, and more effective troubleshooting when integrating the G07E with Plaspy. Awareness of what the protocol carries and how the device connects reduces time to value for monitoring and recovery workflows.

- Enables correct network and firewall configuration so the tracker can reach d.plaspy.com or the Plaspy server IP.
- Helps troubleshoot missing or delayed reports by checking transport settings and whether the device is pointed to the Plaspy endpoint.
- Clarifies which device events will be available in Plaspy for alerting and automation such as SOS, drop detection, and power state.
- Assists with planning for offline logging behavior and how Plaspy will handle late-arriving position history.
- Supports predictable maintenance by aligning firmware and hardware revision checks with expected protocol behavior.

## Why Use Plaspy with This Protocol

Using the GOTOP G07E with Plaspy gives organizations a practical way to turn the device’s hybrid positioning and event telemetry into actionable monitoring and alerting. Plaspy ingests GPRS based real time updates, supplemental Wi Fi assisted fixes, and event messages so teams can monitor assets on live maps, receive geofence and SOS alerts, and analyze historical movement for operational improvements.

Plaspy simplifies onboarding by using a single shared port and automatic protocol detection. Configure the G07E to report to d.plaspy.com or 54.85.159.138 on the Plaspy port and Plaspy will identify and process the device messages for mapping, history, and alert workflows. To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information on the official GOTOP site https://www.gotop.cc/.
