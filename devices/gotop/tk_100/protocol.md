---
slug: /gotop/tk_100/protocol
id: tk_100-protocol
sidebar_label: Protocol
title: GOTOP - TK-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP TK-100 and how it communicates with Plaspy for pet tracking and device integration
keywords:
  - GOTOP TK-100 protocol
  - GOTOP TK-100 GPS
  - GOTOP TK-100 Plaspy compatibility
  - GOTOP TK-100 communication
  - pet GPS tracker protocol
  - GOTOP tracker integration
  - GPS tracker protocol guide
  - Plaspy device integration
  - TK-100 tracking protocol
  - GOTOP protocol documentation
---

# GOTOP - TK-100 Protocol

This page provides a public protocol context for using the GOTOP TK-100 tracker with Plaspy. It explains how the TK-100, a pet GPS tracker that supports SMS and GPRS reporting and offers features such as geo fencing, low battery alerts, vibration and movement alarms, and waterproof design, communicates to a remote tracking platform. The intent is to give clear, non sensitive information about the communication and connection expectations when integrating the device with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary depending on the TK-100 firmware version, hardware revision, and manufacturer configuration, so this page focuses on public, practical context rather than device internal implementation details.

## Protocol Overview

The tracker protocol is the set of communication behaviors the device uses to identify itself, report location and status, and receive configuration. For a TK-100 used with Plaspy, the protocol role is to reliably move usable telemetry from the device over the mobile network to the Plaspy platform so owners can monitor pets and receive alerts.

- Provide device identity information so the remote server can associate reports with a specific TK-100 unit.
- Report location coordinates and associated status such as movement, low battery, and geofence events.
- Transport alarm and status notifications that enable timely alerts for pet protection use cases.
- Support cellular data reporting via GPRS so the device can reach Plaspy over IP networks in addition to SMS options.
- Allow remote configuration when the device firmware and manufacturer settings support over the air updates or command frames.

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker connections on a shared endpoint and automatically detects the device protocol so users generally do not need to select a protocol manually inside Plaspy. Proper device configuration to point to Plaspy is the primary requirement for automatic detection and integration.

- Plaspy server endpoint is d.plaspy.com which resolves to the platform backend.
- Plaspy server IP is 54.85.159.138 for cases where a numeric address is used.
- The Plaspy listening port is 8888 which is used for tracker reporting.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and network conditions.
- All devices in Plaspy use the same port and Plaspy's platform automatically detects the tracker protocol when the device reports to the endpoint.
- If the device is configured correctly to report to d.plaspy.com or the listed IP and port, manual protocol selection in Plaspy is typically unnecessary.

## Transport and Connection Context

The TK-100 commonly uses the cellular network to send telemetry over IP using GPRS. When integrating with Plaspy, the connection context focuses on how the tracker reaches the Plaspy endpoint and which transport options are available.

- The device may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- Configure the TK-100 to point to d.plaspy.com or directly to 54.85.159.138 if required by the device settings.
- Port 8888 is used consistently across all Plaspy supported devices to simplify configuration and detection.
- Because TK-100 supports SMS reporting as well, confirm whether you intend to use SMS for commands or GPRS for continuous server reporting when planning integration.
- Ensure APN and cellular settings on the TK-100 are correct so GPRS sessions can establish to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change how the TK-100 structures reports and which fields are included; always note firmware version when troubleshooting.
- Hardware revisions and regional variants may affect available transports or default reporting modes such as SMS versus GPRS.
- Manufacturer configuration options often control whether the device uses TCP or UDP; verify the device configuration before attempting integration.
- Devices set to SMS only will not send IP reports to Plaspy until changed to use GPRS data reporting.
- Network operators and APN settings can impact the tracker ability to reach d.plaspy.com over GPRS.
- Validate compatibility against the official manufacturer documentation and release notes for device specific behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a successful setup, effective troubleshooting, and stable long term operation when using a TK-100 with Plaspy. Awareness of what the device sends and how the platform receives it reduces guesswork during integration.

- Ensures the correct server and transport settings are applied on the device for reliable reporting.
- Helps diagnose connectivity issues such as APN misconfiguration or blocked ports on the operator side.
- Clarifies how alarms and status messages are delivered so alerting and geofence behavior works as expected.
- Supports decisions about using UDP versus TCP based on network reliability and device capabilities.
- Enables better coordination with manufacturer support by providing clear environment and firmware details.

## Why Use Plaspy with This Protocol

Using the GOTOP TK-100 with Plaspy provides a practical way to centralize pet location, alarms, and history in a single platform. For organizations or owners who need continuous visibility and timely alerts, Plaspy can receive the TK-100 reports and present them alongside other tracked assets, simplifying monitoring and response.

Learn more about Plaspy at https://www.plaspy.com and review the latest device specific protocol and firmware information on the manufacturer site https://www.gotop.cc/. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verifying current information with the official manufacturer documentation is recommended.
