---
slug: /eelink/tk121_s/protocol
id: tk121_s-protocol
sidebar_label: Protocol
title: EElink - TK121‑S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for EElink TK121 S and Plaspy compatibility with connection and transport context
keywords:
  - EElink TK121 S protocol
  - EElink TK121 S GPS protocol
  - MoveLink protocol 1.9
  - MoveLink protocol 2.0
  - TK121 S tracking protocol
  - EElink Plaspy compatibility
  - GPS tracker communication
  - vehicle tracking protocol
  - TK121 S telemetry
  - fleet tracking Plaspy
---

# EElink - TK121‑S Protocol

This page describes the public protocol context for using the EElink TK121‑S tracker with Plaspy. It focuses on how the device communicates typical telemetry and event data to the Plaspy platform, what role the tracker protocol plays in that exchange, and practical connection details you should know when integrating the device.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so treat this page as protocol context rather than a complete protocol specification.

## Protocol Overview

The TK121‑S communicates location, status, and alarm events using the tracker protocol supported by the device. In practice this means the tracker sends periodic position updates, event-triggered messages (for ACC, movement, geofence, and alarms), and can accept remote configuration commands when enabled by the manufacturer and firmware.

- The device protocol defines the format and cadence of GPS and LBS position reports used by Plaspy to display real time location.
- Protocol messages carry event flags such as ACC ignition state, displacement and speed alarms, and geofence triggers so Plaspy can generate alerts.
- Remote configuration and command support in MoveLink 1.9/2.0 allows platform-driven settings changes and management where the firmware exposes those capabilities.
- The protocol enables device identification and association so Plaspy can map incoming data to the correct vehicle or asset record.
- Proper protocol and transport configuration ensures reliable delivery of telemetry and supports historical reporting and route playback in Plaspy.

## How Plaspy Detects the Protocol

Plaspy is designed to accept data from many tracker models and automatically identify the incoming protocol when a device reports to the platform. For most deployments you do not need to select a protocol manually inside Plaspy as long as the tracker is configured to report to the correct Plaspy endpoint.

- Plaspy listens on a single shared endpoint and port for all supported devices to simplify device setup and reduce configuration errors.
- When the TK121‑S is configured to report to Plaspy, the platform will detect that the tracker uses MoveLink 1.9/2.0 or a compatible reporting mode and process messages accordingly.
- Automatic detection removes the need to preconfigure a protocol in most cases, provided the device sends recognizable telemetry to the Plaspy endpoint.
- If a device does not register or report as expected, checking device firmware, APN configuration, and transport selection (TCP vs UDP) is the normal troubleshooting path.
- Plaspy’s automatic detection is intended to streamline onboarding while still allowing manual overrides for unusual or custom deployments.

## Transport and Connection Context

Transport configuration determines how the TK121‑S delivers its protocol messages to Plaspy. The tracker supports standard IP transport modes and can be pointed at Plaspy using the documented host or IP address and port.

- The TK121‑S may be configured to use UDP or TCP depending on the device firmware and settings; both transports are supported for reporting to Plaspy.
- Plaspy accepts device reports at the domain d.plaspy.com and also at the numeric address 54.85.159.138 for environments that require a direct IP.
- Plaspy uses port 8888 for device connections and all devices in Plaspy use the same port to simplify configuration.
- Configure the tracker’s APN and reporting server settings so that periodic and event-driven messages reach the Plaspy endpoint reliably.
- When choosing UDP or TCP, consider your network characteristics and any carrier or firewall policies that might impact packet delivery.

## Protocol Compatibility Notes

- MoveLink protocol 1.9/2.0 is the documented reporting mode for TK121‑S in the supplied description; device behavior depends on the firmware that implements MoveLink.
- Firmware updates can change message types, supported commands, and remote configuration options, so verify behavior after firmware changes.
- Hardware revisions and region-specific variants may alter available I/O or radio bands but typically use the same reporting protocol family.
- Transport choice (TCP vs UDP) may affect delivery guarantees and how retransmissions are handled by the device and network.
- Manufacturer-side configuration or operator customizations can introduce compatibility differences that require validation before mass deployment.
- Always validate the device’s APN, server address, and transport settings before relying on long‑running production workflows.

## Why Protocol Understanding Matters

Understanding how the TK121‑S communicates helps ensure successful onboarding, dependable operations, and efficient troubleshooting when using Plaspy. A clear grasp of the protocol and transport context reduces time to deployment and helps identify the root cause when data is missing or events are not reported.

- Helps you confirm that position, ACC state, and alarm events are being delivered to Plaspy as expected.
- Makes it easier to determine whether an issue is network related, transport related, or due to device firmware.
- Supports planning for remote configuration and command workflows that depend on MoveLink support in the installed firmware.
- Guides decisions about choosing UDP or TCP depending on coverage, carrier behavior, and message delivery needs.
- Reduces integration time by aligning device configuration with Plaspy’s shared endpoint and automatic protocol detection.

## Why Use Plaspy with This Protocol

Using the TK121‑S with Plaspy gives fleet and asset managers an efficient path to real time tracking, ignition monitoring, and event alerts without complex per-device configuration. The tracker’s MoveLink support combined with Plaspy’s shared endpoint model and automatic protocol detection simplifies large scale deployments and ongoing device management.

To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, verify information on the manufacturer site https://www.eelink.com.cn/ as protocol support and firmware behavior can change over time.
