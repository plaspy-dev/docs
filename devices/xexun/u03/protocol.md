---
slug: /xexun/u03/protocol
id: u03-protocol
sidebar_label: Protocol
title: Xexun - U03 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Xexun U03 UWB badge and how it communicates with Plaspy for indoor positioning and telemetry
keywords:
  - Xexun U03 protocol
  - Xexun U03 GPS protocol
  - Xexun U03 communication protocol
  - U03 tracking protocol
  - Xexun U03 Plaspy compatibility
  - UWB positioning protocol
  - indoor positioning protocol
  - U03 badge protocol
  - U03 Plaspy integration
  - UWB badge Plaspy
---

# Xexun - U03 Protocol

This page describes the public protocol context for using the Xexun U03 UWB High Precision Positioning Badge with Plaspy. It summarizes how the badge reports location and telemetry to Plaspy, the role of the device communication protocol in that exchange, and the connection settings Plaspy accepts for device reporting. The goal is to provide clear, non sensitive protocol guidance to help integrate and operate U03 badges in Plaspy deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. U03 devices can be configured to report to the Plaspy endpoint at d.plaspy.com or to the Plaspy server IP 54.85.159.138 on port 8888. Devices may use either UDP or TCP on port 8888 depending on device support and configuration, and all devices in Plaspy use the same port. Exact behavior can vary by firmware, hardware revision, and manufacturer implementation, so this page focuses on public, high level protocol context rather than firmware internals.

## Protocol Overview

The U03 badge uses wireless ranging and short message exchanges to deliver precise indoor position fixes and device state to a Plaspy-managed positioning backend. The communication protocol coordinates identification, telemetry delivery, and optional bidirectional messages such as alerts and remote notifications so Plaspy can process live location, generate events, and store historical tracks.

- The protocol enables the badge to identify itself and its current status so Plaspy can associate messages with a device record.
- Position and ranging data from UWB anchors and the badge are reported to Plaspy for real time mapping and historical playback.
- Telemetry fields such as battery level, motion sensor state, tamper or SOS events are carried alongside location updates.
- Bidirectional messaging supports push notifications, vibration alerts, and remote commands routed from Plaspy to the badge.
- Remote firmware upgrade notices and device management signals are coordinated through the same reporting channel and platform workflows.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports at a shared endpoint and port and automatically determines the appropriate tracker protocol based on the data it receives. In typical deployments you do not need to select a protocol inside Plaspy if the U03 badge is correctly configured to send its reports to the Plaspy endpoint; the platform handles protocol detection and routing.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- The port used for device reporting is 8888 and Plaspy uses the same port for all supported devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capabilities and network considerations.
- When a properly configured device reports to the Plaspy endpoint, the platform will automatically detect the tracker protocol and process incoming data.
- Manual protocol selection in Plaspy is usually unnecessary provided the badge points to the correct Plaspy address and port.

## Transport and Connection Context

Connection and transport for the U03 are primarily a matter of how the badge is configured to submit its reports to Plaspy. For Plaspy integration you should verify which transport the device supports and confirm the device is set to report to the Plaspy endpoint or IP on the shared port.

- The device may be configured to use UDP or TCP on port 8888 depending on firmware and deployment choices.
- Devices can point to d.plaspy.com or to 54.85.159.138 as the Plaspy target address for reporting.
- Plaspy uses the same port for all supported devices, simplifying device configuration and network rules.
- Choose UDP for lower latency broadcast style reporting where supported, or TCP where reliable delivery and session management are preferred by the device firmware.
- Ensure network firewalls and NAT rules allow outbound traffic to the Plaspy endpoint on port 8888 from badge gateways or anchor bridges as required.

## Protocol Compatibility Notes

- Firmware revisions and hardware variants of the U03 can influence which transport modes and message features are available.
- Manufacturer implementation choices may alter which telemetry fields or optional messages are present in reports.
- Some deployments use gateway or anchor intermediaries to translate UWB and RFID data into the device reporting stream; confirm how the badge is integrated in your architecture.
- Transport selection (UDP vs TCP) should match the badge firmware and any on site network policies for best results.
- Plaspy automatically detects the protocol once the device reports to the shared endpoint, but device-side configuration must be correct.
- Always validate compatibility and configuration steps against current manufacturer and deployment documentation.

## Why Protocol Understanding Matters

Understanding how the U03 communicates with Plaspy helps ensure reliable location fixes, timely alerts, and predictable device management over the life of the deployment. Awareness of transport, reporting endpoints, and device firmware behavior reduces setup time and makes troubleshooting more efficient.

- Correct endpoint and transport configuration prevents failed reports and missed events in Plaspy.
- Knowing which telemetry and alert fields the badge supplies helps map device signals to Plaspy dashboards and workflows.
- Awareness of firmware differences aids planning for remote updates and feature availability.
- Proper network rules and port usage reduce connectivity issues and support stable, continuous tracking.
- Protocol awareness speeds troubleshooting when location or telemetry data appear inconsistent.

## Why Use Plaspy with This Protocol

Using the Xexun U03 badge together with Plaspy provides high precision indoor location and a unified platform for alerts, telemetry, and historical playback. Organizations that require centimetre level positioning for safety, access control, attendance, or operational oversight benefit from combining U03 hardware capabilities with Plaspy mapping, event processing, and device management.

To learn more about Plaspy and how it can integrate with U03 deployments, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions refer to the manufacturer documentation at https://www.xexun.com/ as protocol support and firmware behavior can change over time.
