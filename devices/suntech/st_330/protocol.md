---
slug: /suntech/st_330/protocol
id: st_330-protocol
sidebar_label: Protocol
title: Suntech - ST 330 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST 330 and how it communicates with Plaspy for container and asset tracking
keywords:
  - Suntech ST 330 protocol
  - Suntech ST 330 GPS protocol
  - Suntech ST 330 tracking protocol
  - Suntech GPS tracker compatibility
  - ST 330 Plaspy compatibility
  - container GPS tracker
  - asset tracking Suntech
  - Plaspy device protocol
  - fleet tracking Suntech
  - IP67 asset tracker
---

# Suntech - ST 330 Protocol

This page describes the public protocol context for using the Suntech ST 330 tracker with Plaspy. It focuses on how the tracker reports location and status to the Plaspy platform in general terms, and how that communication is used for container and dry box monitoring. The ST 330 is optimized for long deployments with features such as a long lasting battery, position reporting intervals like every 15 minutes, strong magnets for metal mounting, and IP67 resistance for harsh environments.

Plaspy uses a shared connection approach across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Plaspy accepts device connections at d.plaspy.com and at the public server IP 54.85.159.138 using port 8888. The ST 330 may be configured to use UDP or TCP on port 8888 and exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The ST 330 device protocol provides the rules and message patterns the tracker uses to deliver usable telemetry to a server such as Plaspy. At a high level, the protocol's role is to convey periodic position reports and device status while allowing the server to associate those messages with a specific tracker and session.

- Enable the tracker to identify itself so Plaspy can associate incoming messages with an asset or device record.
- Deliver periodic position reports and timing information for route and parking monitoring consistent with the device reporting interval.
- Communicate device status such as battery and basic health indicators relevant to long term deployments.
- Support optional event reporting and status messages as implemented by the device firmware.
- Allow both UDP and TCP transport to accommodate different network and configuration requirements.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically determines which supported tracker protocol is in use when a device sends data. In most deployments you do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.

- Use the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the reporting address.
- Send data to port 8888, which is the common port Plaspy uses for all devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capabilities and network conditions.
- When a properly formatted report arrives Plaspy will associate the message with the corresponding device record and begin processing telemetry.
- Typical user action is limited to ensuring the device reporting address and transport match the chosen network configuration.

## Transport and Connection Context

Connection and transport choices determine how ST 330 messages reach the Plaspy server. The ST 330 supports energy efficient reporting suitable for long battery life, so transport behavior and reporting intervals can affect both battery consumption and message reliability.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen settings.
- Devices may point to d.plaspy.com or to 54.85.159.138 as the Plaspy destination.
- Using UDP can be appropriate for low overhead periodic reports while TCP can be chosen where delivery confirmation is required by the device configuration.
- Ensure network firewalls and NAT allow outbound traffic to port 8888 to reach the Plaspy endpoint.
- For battery powered trackers like the ST 330, connection patterns are often optimized to minimize active radio time while still delivering scheduled position reports.

## Protocol Compatibility Notes

- Firmware revisions may change message content, available fields, and timing. Verify the tracker firmware version when troubleshooting behavior differences.
- Hardware revisions and product variants can alter power management and reporting behavior even for the same model name.
- Manufacturer configuration options determine whether the device uses UDP or TCP and how often it reports; these affect how the device interacts with Plaspy.
- Transport selection (UDP vs TCP) can influence delivery characteristics and should match the device configuration sent to Plaspy.
- Confirm the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure Plaspy receives data.
- Always validate compatibility against the official Suntech documentation for the ST 330 for firmware and feature specific details.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable operation, optimal battery life, and predictable behavior when integrating ST 330 trackers with Plaspy. Clear expectations about how the device reports and what the server requires reduces setup time and eases troubleshooting.

- Verifies the device is pointed at the correct Plaspy endpoint and port so data reaches the platform.
- Helps interpret intermittent reports versus gaps caused by power saving or network coverage.
- Informs choices about transport and reporting intervals to balance battery life and positional freshness.
- Provides context when cross checking device reports against server logs and device diagnostics.
- Supports planning for large scale deployments where consistent device configuration reduces operational overhead.

## Why Use Plaspy with This Protocol

Using the Suntech ST 330 with Plaspy provides a practical solution for organizations that need persistent visibility of containers and dry box assets. The ST 330's long battery life, rugged IP67 construction, and easy magnetic mounting make it well suited to low maintenance asset tracking, while Plaspy's unified endpoint approach simplifies fleet scale data ingestion.

If you want to learn more about how Plaspy works with devices like the Suntech ST 330, visit https://www.plaspy.com for platform details and deployment guidance. Please note that protocol support, firmware behavior, and manufacturer implementation can change over time; verify the latest device specific protocol and firmware information with the manufacturer at http://www.suntechint.com/.
