---
slug: /gotop/r18/protocol
id: r18-protocol
sidebar_label: Protocol
title: GOTOP - R18 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP R18 GPS tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP R18 protocol
  - GOTOP R18 GPS protocol
  - GOTOP R18 Plaspy
  - GOTOP R18 tracking protocol
  - GOTOP GPS tracker protocol
  - R18 GPS tracker
  - fleet management protocol
  - Plaspy tracker compatibility
  - vehicle tracking protocol
  - GPS tracker communication
---

# GOTOP - R18 Protocol

This page covers the public protocol context for using the GOTOP R18 tracker with Plaspy. It describes how the device reports location and event data to the Plaspy endpoint and what role the device reporting protocol plays in enabling real time tracking, alarms, and telemetry in the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, non sensitive protocol context that helps with setup and troubleshooting.

## Protocol Overview

The tracker protocol is the device level communication method that carries GPS positions, telemetry, and event alerts from the R18 to Plaspy and allows Plaspy to interpret location and alarm data for dashboards and reports. It defines how the tracker identifies itself, reports periodic and event driven messages, and supplies the telemetry inputs that Plaspy normalizes for fleet and security workflows.

- Enables delivery of location updates and telemetry such as ignition state, analog inputs, and alarm events to Plaspy.
- Supports identification and device reporting so Plaspy can correlate incoming messages with the registered R18 unit.
- Carries event notifications used for SOS, geo fence, power loss, and other alarm workflows in Plaspy.
- Provides the telemetry used for real time tracking, historical playback, and automated reporting.
- Works with OTA firmware and device management flows where supported by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and uses automatic detection to identify the tracker protocol so users usually do not need to select a protocol manually. If the R18 is configured to report to the Plaspy endpoint, the platform will attempt to match incoming device messages with known supported formats and route data for processing.

- Plaspy exposes a single public endpoint for devices to report to and automatically detects the tracker protocol.
- When the R18 is configured to send telemetry to the Plaspy endpoint, no manual protocol selection in Plaspy is typically required.
- Proper device identification and consistent reporting intervals help Plaspy recognize and maintain a stable device session.
- Differences in firmware variants or manufacturer settings can affect how messages are presented to Plaspy and may require validation.
- If automatic detection does not occur, reviewing device configuration and manufacturer documentation is recommended.

## Transport and Connection Context

The R18 can be configured to use standard cellular packet transport to deliver telemetry to Plaspy. Devices may be set to report over UDP or TCP according to device capability and configuration, and Plaspy provides a consistent network endpoint to receive those reports.

- Plaspy server domain for reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and Plaspy listens on port 8888.
- The device may be configured using UDP or TCP on port 8888 depending on device support and local configuration choices.
- All devices in Plaspy use the same port to simplify device setup and centralize inbound traffic.
- Choose UDP or TCP on the device according to the tracker documentation and network reliability requirements.

## Protocol Compatibility Notes

- Firmware versions may alter message timing, supported alarms, or optional fields that affect how data arrives at Plaspy.
- Hardware revisions or regional variants can change available bands or peripheral behavior that impacts reporting.
- Manufacturer configuration parameters control transport selection and destination settings that must point to the Plaspy endpoint.
- Optional features such as relay based engine stop or additional sensor inputs may require explicit enablement in device firmware.
- Validate compatibility with the official GOTOP documentation and release notes for device specific behavior.
- Confirm that the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure connectivity.

## Why Protocol Understanding Matters

Understanding how the R18 communicates helps ensure a successful setup, reliable reporting, and faster troubleshooting when integrating with Plaspy. Practical knowledge of the protocol and connection context reduces downtime and supports consistent event handling across the fleet.

- Ensures correct destination settings so the device reports to d.plaspy.com or 54.85.159.138 on port 8888.
- Helps diagnose missed reports or alarms by checking transport choice and firmware behavior.
- Allows operators to match device capabilities such as analog inputs and ignition detection with Plaspy data fields.
- Supports validation of event flows like SOS, geo fence, and power cut reporting for alerting and escalation.
- Aids in planning deployments that rely on OTA updates and other device management features.

## Why Use Plaspy with This Protocol

Using the GOTOP R18 with Plaspy gives organizations a compact 4G tracker option that supplies the core telemetry and alarm inputs required for fleet visibility, anti theft workflows, and operational reporting. The R18’s wide power range, internal antennas, and flexible telemetry modes make it suitable for motorcycles, cars, marine assets, and general asset protection while Plaspy normalizes and presents the incoming data for real world workflows.

To learn more about how Plaspy works with compatible trackers and to explore deployment options, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, please verify information with GOTOP at https://www.gotop.cc/. Protocol support and firmware behavior can change over time so consulting the official manufacturer documentation helps ensure accurate device configuration and expected behavior.
