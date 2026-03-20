---
slug: /arknav/r_35/protocol
id: r_35-protocol
sidebar_label: Protocol
title: ArkNav - R-35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ArkNav R-35 GPS tracker and its communication with Plaspy for reliable tracking
keywords:
  - ArkNav R-35 protocol
  - ArkNav R-35 GPS protocol
  - R-35 tracking protocol
  - ArkNav Plaspy compatibility
  - R-35 GPS tracker protocol
  - vehicle tracking R-35
  - asset tracking R-35
  - tracker communication R-35
  - ArkNav protocol guide
  - Plaspy tracker compatibility
---

# ArkNav - R-35 Protocol

This page provides a public protocol overview for using the ArkNav R-35 GPS tracker with Plaspy. It focuses on the communication context and operational considerations that matter when integrating the R-35 into a Plaspy deployment, without exposing private or vendor restricted implementation details.

The ArkNav R-35 is a compact, quadband GSM tracker with internal GPS and GSM antennas, backup battery support, and the ability to communicate via GSM, GPRS, and TCP. Plaspy uses a shared connection endpoint and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and how the manufacturer implements reporting settings.

## Protocol Overview

At a high level, the tracker protocol is the set of rules and message behavior that lets the R-35 report location, status, and event data to a remote server. For Plaspy, understanding the public aspects of that communication helps ensure reliable reporting and correct handling of the device data in the platform.

- The protocol defines how the device identifies itself and delivers telemetry such as position, time, and status indicators.
- It governs periodic reports, alarms, and any optional status messages used for monitoring battery and connectivity.
- The tracker protocol determines what transport methods the device can use to reach the server and how reporting intervals are expressed.
- Proper configuration of server address and transport on the device is required so reports reach Plaspy consistently.
- On the server side, the protocol enables Plaspy to map incoming messages to a device identity and translate them into usable tracking records.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports on a single shared endpoint and to detect the device protocol automatically so users typically do not need to pick a protocol inside the platform. Correct device configuration to point at the Plaspy endpoint is the usual requirement for successful detection and onboarding.

- Plaspy uses the shared server domain d.plaspy.com and the public server IP 54.85.159.138 as reachable endpoints for device reporting.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when a properly configured device reports.
- When an R-35 is configured to send data to the Plaspy endpoint, the platform identifies the message pattern and associates it with the device record.
- In most cases you will not need to manually select a protocol in Plaspy if the device is configured to report to the correct endpoint and transport.
- If a device does not appear to report correctly, checking device configuration, transport type, and firmware version is the recommended first step.

## Transport and Connection Context

The R-35 supports multiple transport modes and can be configured to use the network method that best fits the deployment. For connecting to Plaspy, the transport settings and server address are the critical connection-level details.

- The R-35 may be configured to use either UDP or TCP on port 8888 depending on device support and configuration choices.
- Plaspy accepts device reports on port 8888 and that same port is used across all supported devices for consistency.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the public IP 54.85.159.138 when DNS resolution is not available.
- Selecting UDP or TCP on the device affects delivery characteristics such as retransmission and session behavior but does not change how Plaspy detects protocol type.
- Confirm the device transport setting (UDP or TCP) and the target address to ensure messages reach Plaspy reliably.

## Protocol Compatibility Notes

- Firmware differences between R-35 units can change available features and the exact structure of reported messages; check the device firmware release notes when troubleshooting.
- Hardware revisions or regional variants may affect supported network bands, reporting options, or power management behavior.
- Some deployments prefer TCP for session establishment while others use UDP for lower overhead; the R-35 supports both in many configurations.
- Manufacturer default settings may point to a vendor server; reconfigure the server address to d.plaspy.com or 54.85.159.138 and confirm transport and port 8888.
- Validate device identifiers and IMEI reporting so Plaspy can consistently map incoming messages to the correct tracker record.
- Always cross reference manufacturer documentation for the specific hardware and firmware revision of your unit.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure dependable setup, efficient troubleshooting, and predictable long term operation of R-35 trackers with Plaspy. Clear expectations about what the device sends and how the server accepts it reduce downtime and simplify support.

- Faster setup when you know which transport and server address to configure on the device.
- More effective troubleshooting when you can distinguish between network, transport, and protocol level issues.
- Better battery and connectivity planning based on how often the device reports and what status messages it uses.
- Clearer validation of device identity so tracking data is attributed to the correct asset or person.
- Improved operational reliability as you align device firmware and settings with Plaspy connection expectations.

## Why Use Plaspy with This Protocol

Using the ArkNav R-35 with Plaspy gives organizations a practical way to centralize location data from portable vehicle, personal, or asset trackers into a single monitoring and reporting platform. The R-35’s compact form, internal antennas, and backup battery make it suitable for concealed or mobile deployments, and Plaspy’s shared endpoint approach simplifies onboarding.

Plaspy provides a single consistent endpoint for device reporting and automatic protocol detection to reduce configuration complexity. To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance for the ArkNav R-35, verify information on the official ArkNav site https://www.arknavgps.com.tw/.
