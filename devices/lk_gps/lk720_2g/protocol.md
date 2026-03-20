---
slug: /lk_gps/lk720_2g/protocol
id: lk720_2g-protocol
sidebar_label: Protocol
title: LK-GPS - LK720-2G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for using the LK GPS LK720 2G tracker with Plaspy for tracking and telemetry integration
keywords:
  - LK GPS LK720 2G protocol
  - LK GPS LK720 2G GPS protocol
  - LK720 2G protocol Plaspy
  - LK720 2G communication protocol
  - LK720 2G tracking protocol
  - Plaspy LK720 2G compatibility
  - LK GPS tracker protocol
  - vehicle tracking LK720 2G
  - LK GPS immobilizer relay tracker
  - LK720 2G SMS configuration
---

# LK-GPS - LK720-2G Protocol

This page covers the public protocol context for using the LK-GPS LK720-2G Mini Relay GPS Tracker with the Plaspy platform. It explains how the tracker communicates with Plaspy in broad, non-sensitive terms so integrators and fleet managers can understand what to configure and verify for successful reporting and remote control workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the LK720-2G can vary depending on firmware version, hardware revision, and manufacturer implementation. This page focuses on what to expect in common deployments and what to verify when integrating the device with Plaspy.

## Protocol Overview

The protocol for the LK720-2G defines how the tracker sends positional data, telemetry, status alerts, and basic command acknowledgements to a cloud endpoint. For Plaspy compatibility, the public view of the protocol centers on reliable delivery of GPS coordinates, battery and alarm states, shock and movement notifications, and optional SMS fallback for configuration and queries.

- Enables the tracker to report location, time, and diagnostic telemetry to the Plaspy endpoint for live tracking and history.
- Transmits alarm and shock events so Plaspy can surface alerts to users and trigger workflows.
- Carries simple remote control signals and relay state changes for immobilizer workflows when supported by the device and Plaspy.
- Supports SMS parameter configuration and query as a fallback when data connectivity is limited.
- Works over common transport channels so the tracker can reach Plaspy from 2G GSM networks to provide persistent telemetry.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports at a unified endpoint and automatically determines the appropriate tracker protocol based on the incoming connection and payload patterns. In most cases, when the LK720-2G is pointed at Plaspy and correctly configured, no manual protocol selection inside Plaspy is required.

- Plaspy server domain is d.plaspy.com which devices can use as their reporting host.
- Plaspy server IP is 54.85.159.138 and is available as an alternate destination for device configuration.
- The port is 8888 and Plaspy uses this same port for all supported devices.
- The tracker may be configured to use UDP or TCP on port 8888 depending on device capability and user configuration.
- Plaspy automatically detects the tracker protocol when the device sends data to the platform endpoint.

## Transport and Connection Context

Connection choices affect how reliably the LK720-2G reaches Plaspy and how fallbacks operate. The unit can send its telemetry over the cellular data channel to Plaspy or use SMS for configuration and limited queries if data is unavailable.

- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting host depending on installer preference.
- The device may be configured using UDP or TCP on port 8888; choose the transport that fits network and carrier behavior.
- All devices in Plaspy use the same port which simplifies configuration across a fleet.
- SMS fallback is commonly used for parameter configuration and status queries when 2G data is intermittent or unavailable.
- Verify network compatibility for 2G GSM in your region to ensure connectivity to Plaspy from the device.

## Protocol Compatibility Notes

- Firmware differences across LK720-2G units can change available fields, alarm behavior, and supported commands; confirm the device firmware level when diagnosing issues.
- Hardware revisions sometimes alter peripheral behavior such as relay timings or input wiring; refer to the device wiring guide for installation specifics.
- Manufacturer parameter sets and SMS command names can vary by firmware and regional builds; always cross check with manufacturer documentation.
- Transport selection between UDP and TCP can affect delivery semantics and retry behavior on cellular networks.
- Plaspy compatibility depends on the device reporting to the correct host and port and on the tracker exposing expected telemetry fields.
- For advanced remote commands or immobilizer workflows, confirm that the target device firmware exposes the necessary controls and that these features are permitted by local regulations.

## Why Protocol Understanding Matters

Knowing the communication protocol helps installers and administrators set up the LK720-2G to reliably report to Plaspy, troubleshoot connectivity, and understand how telemetry and alarms will appear in the dashboard. A basic grasp of the protocol reduces integration time and improves long term operational reliability.

- Ensures the device is pointed to the correct Plaspy endpoint and transport settings so data is received consistently.
- Helps troubleshoot common issues such as missing telemetry, absent alarms, or relay control failures by narrowing problems to network, firmware, or configuration.
- Clarifies the role of SMS fallback for configuration and diagnostics when data channels are unavailable.
- Guides firmware and hardware validation steps before large scale deployment.
- Reduces misconfiguration by aligning installer expectations with what Plaspy requires for automatic protocol detection.

## Why Use Plaspy with This Protocol

Using the LK720-2G with Plaspy provides a straightforward path to real time location, alarm handling, and basic remote control for small vehicle fleets and individual owners. Plaspy’s platform ingests the tracker telemetry and presents live tracking, historical routes, battery status, and alarm notifications through web and mobile interfaces, while SMS fallback keeps essential configuration and queries available in low connectivity scenarios.

To learn more about Plaspy and how it supports LK-GPS trackers, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol documentation and firmware notes at the manufacturer site https://www.lk-gps.com.
