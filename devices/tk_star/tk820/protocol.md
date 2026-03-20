---
slug: /tk_star/tk820/protocol
id: tk820-protocol
sidebar_label: Protocol
title: TK-Star - TK820 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TK-Star TK820 usage with Plaspy including connection settings and compatibility notes
keywords:
  - TK-Star TK820 protocol
  - TK820 GPS protocol
  - TK-Star TK820 Plaspy
  - TK820 communication protocol
  - TK820 tracking protocol
  - TK-Star GPS tracker protocol
  - Plaspy compatible trackers
  - 4G GPS tracker protocol
  - asset tracking protocol
  - vehicle tracking protocol
---

# TK-Star - TK820 Protocol

This page describes the public communication context for using the TK-Star TK820 with Plaspy. It focuses on how the device reports location and event data to Plaspy and what parts of the connection are relevant for successful integration, without exposing private implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects each tracker protocol when devices are properly pointed to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, practical protocol context and compatibility considerations.

## Protocol Overview

The protocol that a tracker uses is the mechanism by which it identifies itself to a server, transmits GNSS and sensor data, and reports events such as SOS, movement, or geofence breaches. For the TK820, the protocol enables Plaspy to receive multi-constellation GNSS fixes as well as LBS and WiFi assisted positions, vibration and movement alerts, and SOS notifications to support real-time monitoring and historical route storage.

- Enables the device to transmit location fixes, timestamps, and basic status fields to Plaspy for mapping and playback.
- Carries event notifications such as SOS button presses, vibration or movement alerts, geofence breaches, and low battery warnings.
- Allows the server to correlate periodic telemetry with device identity so Plaspy can store route history and present actionable alerts.
- Supports both continuous real-time reporting and less frequent heartbeat or sleep reporting depending on device configuration and power modes.
- Acts as the public contract between device and server; manufacturer firmware determines exact fields and reporting cadence.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared server endpoint and determines the appropriate handling for each device without requiring users to pick a protocol manually in most cases. When a TK820 is configured to report to Plaspy, the platform inspects the incoming device identification and message pattern to match it with the correct parser and processing pipeline.

- Plaspy listens on the same server endpoint for all supported devices and automatically detects the tracker protocol.
- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 so the platform receives telemetry directly.
- If a device is correctly pointed to the Plaspy endpoint, manual protocol selection in Plaspy is typically not necessary.
- Automatic detection speeds up onboarding and reduces configuration errors when devices use standard reporting behavior.
- For troubleshooting, confirming the device is sending to the correct Plaspy endpoint and port is often the first practical step.

## Transport and Connection Context

Connection transport and destination are important because they determine how the TK820 reaches Plaspy. The TK820 can be configured to use either UDP or TCP reporting depending on firmware and provisioning choices. Plaspy accepts both transport types on the shared port, so device configuration should match the network and reliability requirements of the deployment.

- The Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The server port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- The TK820 may be configured to use UDP or TCP on port 8888 depending on device support and settings.
- Using UDP can reduce overhead for frequent short reports, while TCP provides a connection oriented option where supported by the device.
- Ensure APN and outbound firewall rules allow the tracker to reach d.plaspy.com or the IP address on port 8888 from the device network.

## Protocol Compatibility Notes

- Protocol behavior can differ by firmware version; newer or regional firmware revisions may change reporting fields or event names.
- Hardware revisions or optional regional builds can lead to subtle differences in which GNSS constellations or assisted positioning methods are reported.
- Transport selection (UDP versus TCP) is a device configuration choice and must align with how the tracker was provisioned on the mobile network and in the field.
- Manufacturer customizations or service center provisioning can enable or disable certain event reporting such as SOS voice routing or vibration alerts.
- Confirm the device is pointed to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) and using port 8888 to avoid connectivity issues.
- Always validate compatibility against the most current manufacturer documentation when in doubt.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and administrators set up the TK820 correctly, troubleshoot connectivity problems, and ensure long term reliability when the device reports to Plaspy.

- Verifying the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 eliminates a common source of onboarding issues.
- Knowing whether the device uses UDP or TCP helps diagnose network related failures and firewall rules.
- Awareness of firmware and hardware variation guides realistic expectations for which events and fields the tracker will send to Plaspy.
- Understanding reporting cadence and power modes helps balance battery life with real time visibility needs.
- Protocol awareness simplifies communication with device manufacturers or resellers when seeking firmware updates or behavior clarifications.

## Why Use Plaspy with This Protocol

Using the TK-Star TK820 with Plaspy provides a practical solution for organizations and families that need reliable location visibility, alerting, and historical route data. Plaspy ingests the TK820’s multi-constellation GNSS data along with LBS and WiFi assisted fixes, converts event notifications into actionable alerts, and stores route history for later review on app and web dashboards.

To learn more about Plaspy and how it integrates with devices like the TK820, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, or hardware revisions, verify current information on the manufacturer site at https://www.tk-star.com/ since protocol support and firmware behavior can change over time.
