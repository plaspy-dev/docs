---
slug: /autofon/se_maiak/protocol
id: se_maiak-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon SE+ Маяк GPS tracker and how it communicates with Plaspy for reliable location reporting
keywords:
  - AutoFon SE+ Маяк protocol
  - AutoFon SE+ Маяk GPS protocol
  - AutoFon SE Mayak communication
  - SE+ Маяк tracking protocol
  - AutoFon GPRS tracker
  - AutoFon GLONASS GPS tracker
  - Plaspy tracker compatibility
  - vehicle tracking AutoFon
  - AutoFon tracker integration
  - Plaspy monitoring server
---

# AutoFon - SE+ Маяк Protocol

This page summarizes the public protocol context for using the AutoFon SE+ Маяк tracker with Plaspy. It focuses on how the device typically reports location and event data to a monitoring server and what that means for integration with Plaspy. The content is intentionally high level and suitable for administrators and integrators preparing devices for connection to a third party monitoring service.

The AutoFon SE+ Маяк is a compact GPRS GPS tracker that can also report via SMS. Built on the v.6.x platform, it combines GLONASS and GPS positioning modules and supports features such as motion detection, impact sensing, remote firmware updates, and an internal black box for GPRS packets. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the SE+ Маяк defines how the tracker identifies itself and delivers position and event data over the carrier network to a remote monitoring endpoint. For GSM GPRS reporting, the protocol governs session initiation, device identifiers, positioning payloads, and periodic or event-driven reports. For SMS reporting, the payload is delivered directly to a phone number. Understanding these roles helps ensure correct server addressing and expected device behavior in Plaspy.

- Enables the tracker to send location and sensor events from the field to a remote monitoring endpoint
- Carries identifying information so the server can associate reports with the correct device record
- Supports periodic position updates as well as event triggered reports such as movement, impact, or SOS
- Allows for remote configuration and firmware updates when supported over GPRS
- Works over either UDP or TCP transport depending on device configuration and network conditions

## How Plaspy Detects the Protocol

Plaspy is designed to operate with a wide range of tracker protocols using a single shared endpoint and port. When a properly configured SE+ Маяк reports to Plaspy, the platform automatically recognizes the device communication pattern and processes incoming reports without manual selection by the user in most cases.

- Plaspy listens on a shared endpoint d.plaspy.com and IP 54.85.159.138 using port 8888
- The platform automatically detects the tracker protocol when a device reports to the Plaspy endpoint
- Users typically do not need to select a protocol inside Plaspy if the device points to the correct server and port
- Plaspy supports UDP and TCP transports on the same port so devices can use whichever is supported by the tracker and network
- Automatic detection simplifies onboarding and reduces configuration steps for common devices

## Transport and Connection Context

Connection context is about how the SE+ Маяк reaches Plaspy on the network rather than the low level payload contents. The device can be set to send via GPRS to a monitoring server or deliver location data via SMS to a phone number. For GPRS reporting, point the device to the Plaspy endpoint and ensure the network ACL and APN are configured correctly for data delivery.

- Devices may be configured to report to d.plaspy.com or to the server IP 54.85.159.138
- The port used by Plaspy is 8888 and all devices in Plaspy use the same port
- The device may be configured using UDP or TCP on port 8888 depending on device support and operator network behavior
- Choose UDP when the tracker firmware recommends lightweight reporting and low latency
- Choose TCP when a persistent session or delivery confirmation is preferred by the device firmware
- Verify APN and GPRS settings on the SIM to ensure successful server connectivity

## Protocol Compatibility Notes

- Firmware revisions on the SE+ Маяк can change message content, supported features, and available transport options
- Hardware revisions or optional modules such as external power or expansion modules may affect available channels and reporting behavior
- Manufacturer configuration menus and remote configuration commands vary; always confirm configuration options for GPRS reporting and SMS fallbacks
- Transport selection between UDP and TCP can influence delivery characteristics and may require matching server-side expectations
- Plaspy automatically detects the protocol but correct server address and port must be set on the device for detection to occur
- Validate specific capabilities such as remote firmware update support and black box behavior against the manufacturer documentation

## Why Protocol Understanding Matters

A basic understanding of the SE+ Маяк communication protocol helps ensure reliable onboarding, accurate diagnostics, and predictable device behavior on Plaspy. Knowing what the tracker sends and when enables faster troubleshooting and better configuration of reporting intervals and event thresholds.

- Faster diagnosis of connectivity issues by checking server address, transport, and APN settings
- Better configuration of reporting intervals to balance battery or data usage with tracking needs
- Clearer expectations for event-driven reports such as SOS, movement, or impact alerts
- Improved planning for firmware updates and feature availability that depend on protocol support
- Easier validation that reports received by Plaspy match the device identifiers and expected events

## Why Use Plaspy with This Protocol

Using AutoFon SE+ Маяк devices with Plaspy provides organizations with centralized visibility and operational oversight across deployed assets. The device's compact form factor, GLONASS plus GPS positioning, motion and impact sensors, and SMS fallback make it a flexible choice for tracking vehicles, cargo, or remote objects while Plaspy handles data ingestion and fleet-level monitoring.

To learn more about Plaspy and how the platform integrates with a broad set of trackers including the AutoFon SE+ Маяк, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions consult the manufacturer documentation at https://www.autofon.ru/ since protocol support and firmware behavior can change over time.
