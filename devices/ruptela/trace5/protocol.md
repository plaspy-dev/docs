---
slug: /ruptela/trace5/protocol
id: trace5-protocol
sidebar_label: Protocol
title: Ruptela - Trace5 Protocol
sidebar_class_name: menu_item_tracker
description: Overview of Ruptela Trace5 communication protocol and how the device connects with Plaspy for reliable fleet tracking
keywords:
  - Ruptela Trace5 protocol
  - Ruptela Trace5 GPS protocol
  - Ruptela Trace5 communication protocol
  - Trace5 tracker Plaspy compatibility
  - Ruptela vehicle tracker protocol
  - Trace5 fleet tracking protocol
  - Plaspy device protocol
  - Trace5 4G GNSS tracker
  - Ruptela tracking integration
  - Trace5 protocol guide
---

# Ruptela - Trace5 Protocol

This page describes the public protocol context for using the Ruptela Trace5 tracker with Plaspy. It summarizes how the Trace5 communicates in broad terms, which connection endpoints Plaspy provides for device reporting, and what to consider when integrating the device for fleet tracking and operational monitoring. The content focuses on non-sensitive, public information to help implementation planning and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available security features can vary by device firmware, hardware revision, and manufacturer implementation, so real-world behavior for an individual Trace5 unit may differ slightly from this general overview.

## Protocol Overview

The Trace5 tracker uses its communication protocol to report GNSS position, movement, and device status to a remote server. The protocol defines how the tracker identifies itself, packages telemetry data, and transmits messages to a backend such as Plaspy so that position, IO states, and diagnostic information become usable in fleet workflows.

- Enables the Trace5 to send periodic and event driven location and status reports to a remote endpoint
- Carries device identity information so Plaspy can associate messages with a specific tracker
- Transmits telemetry and diagnostic data that Plaspy uses for location, alerts, and historical playback
- May include encrypted channels depending on firmware and device variant for data security
- Works over standard IP transport so cellular connectivity and network routing determine reachability

## How Plaspy Detects the Protocol

Plaspy receives device messages on a shared endpoint and port and uses automatic protocol detection to recognize the tracker type when a properly configured device reports in. In most deployments, end users do not need to select a protocol manually inside Plaspy provided the tracker is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and is available for device reporting
- Plaspy server IP is 54.85.159.138 which can be used as an alternative endpoint
- The platform listens on port 8888 for incoming tracker connections
- Plaspy automatically detects the tracker protocol when a device connects and reports
- All devices in Plaspy use the same port for reporting which simplifies tracker configuration

## Transport and Connection Context

Trace5 devices support standard IP transport over cellular networks and can be configured to report to Plaspy using either UDP or TCP depending on device capabilities and user configuration. Connection parameters are a practical detail when pointing the device to Plaspy for the first time and during troubleshooting.

- Device may be configured using UDP or TCP on port 8888 to report to Plaspy
- Devices may be directed to the domain d.plaspy.com or to the IP address 54.85.159.138
- The listening port for Plaspy is 8888 and is the same for all supported devices
- Choice of UDP versus TCP affects delivery semantics and may be constrained by firmware or network conditions
- When available and enabled, TLS support provides encrypted transport for compatible device variants

## Protocol Compatibility Notes

- Firmware versions can change message formats, available fields, or security options; verify behavior against the installed firmware release
- Hardware revisions or regional variants of the Trace5 may expose different transport or configuration options
- Some Trace5 variants support TLS v1.2 for encrypted communication while others do not; check the specific model and firmware
- Transport selection between UDP and TCP is often configurable on the device and may impact delivery and latency
- Manufacturer tools such as device center or installation assistant are useful to validate reporting settings before deployment
- Confirm that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy integration

## Why Protocol Understanding Matters

A practical understanding of the Trace5 communication protocol helps ensure smooth setup, reliable data flow, and faster troubleshooting when integrating with Plaspy. Knowing the transport options, where the device should report, and the role of firmware and security settings reduces integration time and improves operational reliability.

- Ensures the device is configured to use the correct endpoint and port for Plaspy reporting
- Helps interpret why messages are not arriving when network or transport settings differ
- Aids in selecting appropriate security settings where device TLS support is available
- Supports validation of firmware compatibility and feature availability during rollouts
- Improves collaboration with manufacturer support by using consistent terminology

## Why Use Plaspy with This Protocol

Using the Ruptela Trace5 with Plaspy gives organizations centralized visibility into vehicle locations, status, and event history while leveraging Plaspy's automatic protocol detection and unified connection settings. The Trace5 hardware characteristics such as robust GNSS performance, 4G connectivity, and durable IP67 housing make it suitable for demanding fleet use, and Plaspy provides the backend to ingest, normalize, and present that data for operational use.

For more details about Plaspy capabilities and how it supports device integration, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and model variants, verify current information on the manufacturer website https://ruptela.com/ as protocol support and firmware behavior can change over time.
