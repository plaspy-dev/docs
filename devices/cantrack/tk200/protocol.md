---
slug: /cantrack/tk200/protocol
id: tk200-protocol
sidebar_label: Protocol
title: CanTrack - TK200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack TK200 compatibility with Plaspy server settings and connection context
keywords:
  - CanTrack TK200 protocol
  - CanTrack TK200 GPS
  - TK200 protocol Plaspy
  - TK200 communication protocol
  - CanTrack GPS tracker protocol
  - TK200 tracking protocol
  - vehicle tracking TK200
  - Plaspy device compatibility
  - TK200 GPRS GPS protocol
  - CanTrack tracker integration
---

# CanTrack - TK200 Protocol

This page provides public, non sensitive protocol context for using the CanTrack TK200 GPS tracker with Plaspy. It explains how the tracker typically communicates over mobile data and how those communications map to the Plaspy platform without revealing private parser or vendor internal details.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behaviour, available report types, and command handling for the TK200 can vary by firmware, hardware revision, and manufacturer implementation, so this page focuses on high level protocol and transport context useful for integration and troubleshooting.

## Protocol Overview

At a high level, the TK200 uses cellular data and GPS information to produce location and status reports that can be forwarded to a remote server. The device supports standard tracking features such as periodic position reports, alarms, and remote monitoring, and these reports are what Plaspy consumes to provide location, history, and alerts.

- The protocol defines how the device packages GPS, GSM signal, and status information for delivery to a server.
- Report messages allow Plaspy to map incoming data to vehicle location, alarms, and telemetry fields.
- Identification fields in the tracker messages let Plaspy associate a stream of reports with a specific device.
- Transport choices determine delivery behaviour and reliability when forwarding data to Plaspy.
- Alarm and event reports in the tracker protocol enable real time notifications and geofence workflows in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the tracker protocol used by a device reporting to that endpoint. In most cases a properly configured TK200 will not require manual protocol selection inside Plaspy; the platform maps the device stream to the appropriate parser and device record automatically.

- Plaspy accepts connections at d.plaspy.com and also at the public IP 54.85.159.138.
- The platform uses port 8888 for incoming tracker traffic and the same port is used for all supported devices.
- Devices can be configured to use either UDP or TCP transport targeting the Plaspy endpoint on port 8888.
- Automatic detection removes the need for users to pick a protocol in many typical setups when the device is pointed to the Plaspy endpoint.
- If a device does not appear, checking that the tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 is a common first step.

## Transport and Connection Context

Connection and transport settings determine how reliably tracker messages arrive at Plaspy and which network behaviour to expect. The TK200 supports reporting over GSM GPRS and can be set to deliver data via TCP or UDP; selecting the right transport depends on network conditions and expected delivery characteristics.

- The TK200 may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy listens on port 8888 for all device traffic; all devices in Plaspy use this same port.
- Devices may use UDP or TCP on port 8888 depending on device capabilities and configuration choices.
- TCP provides connection oriented delivery while UDP can be lower overhead; the tracker configuration controls which is used.
- Ensure APN and GPRS settings on the SIM are correct so the TK200 can establish data sessions and reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message contents, available report types, and command behavior; check the TK200 firmware version when diagnosing differences.
- Hardware revisions or variant SKUs of the TK200 family may implement slightly different reporting options or feature sets.
- Manufacturer configuration defaults may cause the device to report to SMS or a different server address unless explicitly set to the Plaspy endpoint.
- Transport selection (UDP vs TCP) affects delivery and should match the device configuration and network environment.
- Verify that the device identification sent by the tracker matches the value expected by your Plaspy device record to ensure reports are associated correctly.
- Always validate compatibility against the most recent manufacturer documentation for device specific notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable tracking, faster troubleshooting, and correct mapping of tracker data into Plaspy. Even high level knowledge about how and when the device reports improves setup and operations for fleets or personal deployments.

- Confirms the device is pointing at d.plaspy.com or 54.85.159.138 on port 8888 and using an appropriate transport.
- Helps interpret device behaviour such as periodic reports, alarm triggers, and remote monitoring events.
- Guides configuration choices for APN, transport, and server address so data arrives consistently at Plaspy.
- Speeds up troubleshooting by narrowing issues to network, transport, or firmware differences rather than platform configuration.
- Supports long term reliability planning by clarifying how firmware updates or variant devices might affect reporting.

## Why Use Plaspy with This Protocol

Using the CanTrack TK200 with Plaspy provides a straightforward way to bring GPS location, alarms, and telemetry into a single fleet or asset management platform. Organizations can gain real time visibility, historical tracking, and event driven alerts while relying on Plaspy to manage the common endpoint and protocol detection for many device types.

If you want to learn more about how Plaspy works with trackers like the TK200 and to review deployment options, visit https://www.plaspy.com. For the most current device and firmware specific protocol details, configuration guides, and technical specifications consult the manufacturer documentation at https://www.cantrackgps.com/ as device protocol support and firmware behavior can change over time.
