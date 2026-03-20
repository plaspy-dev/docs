---
slug: /topshine/vt111/protocol
id: vt111-protocol
sidebar_label: Protocol
title: TopShine - VT111 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine VT111 GPS tracker and how it communicates with Plaspy for fleet tracking and vehicle security
keywords:
  - TopShine VT111 protocol
  - TopShine VT111 GPS protocol
  - TopShine VT111 communication protocol
  - TopShine VT111 tracking protocol
  - TopShine VT111 Plaspy compatibility
  - TopShine GPS tracker protocol
  - VT111 vehicle tracker protocol
  - VT111 tracking integration
  - GPS tracker Plaspy setup
  - vehicle tracking protocol guide
---

# TopShine - VT111 Protocol

This page summarizes the public protocol context for using the TopShine VT111 mini GPS vehicle tracker with the Plaspy platform. It covers how the device commonly reports location and status to a tracking server, the role of the tracker reporting protocol in integration, and practical notes to help fleet and security users understand connectivity with Plaspy. The VT111 description above is the basis for this overview, including its tracking, alerting, and optional RFID features.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the VT111 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context rather than firmware internals or private packet formats.

## Protocol Overview

The VT111 communicates with a remote tracking platform to report location, movement, alarms, and basic status. The tracker reporting protocol defines how the device sends its identity, telemetry, and alarm events so the platform can present usable data for monitoring and control.

- Enables periodic and event driven position reports for vehicle tracking and geofence alerts
- Carries identity and session information so a server like Plaspy can associate messages with a specific device
- Communicates alarm and status events such as movement alerts, power loss, and optional ACC or door signals
- Supports remote control actions initiated from a platform or SMS center when the device and firmware allow it
- Provides both GPS based positioning and cellular based fallback positioning for improved coverage

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and automatically determines the tracker protocol used by the device. In most cases users do not need to select a protocol manually inside Plaspy if the VT111 is configured to report to Plaspy's endpoint.

- Plaspy listens for incoming tracker connections on the shared server endpoint at d.plaspy.com
- The platform endpoint resolves to 54.85.159.138 and uses port 8888 for device traffic
- All devices on Plaspy use the same port, which simplifies device configuration
- Plaspy supports both UDP and TCP reporting when devices are configured to use either transport
- If the VT111 is pointed to the Plaspy endpoint and authorized by device identity, Plaspy will automatically detect the reporting format

## Transport and Connection Context

Understanding transport and connection settings helps ensure the VT111 can reach Plaspy reliably. The VT111 supports reporting over GPRS and SMS modes, and when used with a tracking server it can be configured for network reporting via UDP or TCP.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can point to the domain d.plaspy.com or the IP address 54.85.159.138 as the reporting server
- Plaspy uses the same port 8888 for all supported devices, making configuration uniform across hardware
- Choose UDP for lower overhead on lossy links or TCP if session reliability is preferred and supported by the device
- Confirm mobile network APN settings and GPRS connectivity on the VT111 when enabling platform reporting

## Protocol Compatibility Notes

- Firmware variations can change which messages and fields the VT111 sends; always check the device firmware release notes
- Hardware revisions or optional modules such as RFID may introduce additional messages or fields not present on every unit
- Some features such as remote cut off, voice monitoring, or address lookup may rely on platform support in addition to device capability
- Transport selection between UDP and TCP should match what the device firmware supports and what the operator prefers
- Manufacturer default server settings may differ from Plaspy requirements, so update the reporting endpoint to d.plaspy.com or 54.85.159.138 when integrating
- Validate behavior in a controlled test before wide deployment to ensure alarms, geofence events, and immobilization controls work as expected

## Why Protocol Understanding Matters

A practical understanding of the VT111 communication protocol helps ensure reliable device onboarding, effective troubleshooting, and predictable operation in Plaspy. Knowing how the device reports and what the platform expects reduces integration time and improves overall fleet visibility.

- Ensures correct device addressing so reports reach the Plaspy server and are associated with the right vehicle
- Helps troubleshoot connectivity issues by checking transport, APN, and endpoint settings
- Clarifies what events and telemetry will be available in Plaspy based on the installed firmware and hardware options
- Guides decisions about transport selection and network configurations for reliable reporting
- Supports planning for optional features such as immobilization or RFID based arming that may require additional platform configuration

## Why Use Plaspy with This Protocol

Using the TopShine VT111 with Plaspy provides a practical path to vehicle visibility, security monitoring, and operational oversight without requiring per device port configuration. Plaspy’s automatic detection and shared endpoint simplify setup for operators who deploy many small trackers like the VT111 across a fleet.

Plaspy is designed to accept VT111 reports when the device is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 and when the device uses either UDP or TCP as supported by its firmware. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance from the manufacturer, please verify information on the official TopShine site at https://www.gztopshine.com/.

Editorial accuracy note The information on this page describes public protocol context and common transport settings. Protocol support, firmware behavior, and manufacturer implementation details can change over time so always confirm current device specifics with the official manufacturer documentation.
