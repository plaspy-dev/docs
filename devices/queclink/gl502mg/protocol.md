---
slug: /queclink/gl502mg/protocol
id: gl502mg-protocol
sidebar_label: Protocol
title: QuecLink - GL502MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and Plaspy integration guidance for the QuecLink GL502MG GPS tracker
keywords:
  - QuecLink GL502MG protocol
  - GL502MG GPS tracker
  - QuecLink GL502MG Plaspy
  - QuecLink GL502MG communication
  - QuecLink tracker protocol
  - asset tracker protocol
  - GPS tracker compatibility
  - fleet tracking protocol
  - container tracker protocol
  - GPS tracker Plaspy compatibility
---

# QuecLink - GL502MG Protocol

This page describes the public protocol context for using the QuecLink GL502MG tracker with the Plaspy platform. It focuses on how the device communicates with a remote server in general terms and what you need to know to ensure the GL502MG can report location and status to Plaspy. The content highlights connection points, transport options, and practical compatibility considerations without exposing sensitive implementation details.

The GL502MG is a rugged IP68 tracker built for asset, trailer, and container tracking with long battery life and modern connectivity options. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 with port 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.

## Protocol Overview

The tracker protocol defines how the GL502MG exchanges status, position, and diagnostic information with a backend server. For Plaspy, this means the device must be configured to report to the Plaspy endpoint and use one of the supported transport methods. The protocol's role is to make telemetry meaningful to the platform while remaining resilient for long term battery powered and intermittent connections.

- Enables the GL502MG to send periodic location and event reports to Plaspy for asset visibility.
- Carries identification and status metadata that lets Plaspy associate messages with the correct device record.
- Supports transmission over cellular networks including LTE Cat M1 and NB2 with fallback to legacy networks for coverage continuity.
- Works with on device sensors and positioning aids such as GNSS, WiFi positioning, and BLE to deliver richer location data.
- Allows the platform to receive battery and health indicators needed for long life deployments and maintenance planning.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a shared endpoint and automatically determines the correct handling for a wide range of tracker implementations. In most deployments you only need to point the GL502MG to the Plaspy server and choose the appropriate transport protocol on the device side.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 with port 8888.
- Devices may be configured to use either UDP or TCP for reporting depending on device support and preferred reliability characteristics.
- All devices in Plaspy use the same port so you do not need different ports per device model.
- Plaspy automatically detects the tracker protocol when the device reports to the platform endpoint.
- In typical setups users do not select a protocol inside Plaspy manually if the GL502MG is configured correctly to report to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the GL502MG reaches Plaspy across the network. The tracker supports modern low power cellular links and standard TCP or UDP transports, and it should be configured to point to the Plaspy host and port used by all devices.

- The device may be configured using UDP or TCP on port 8888 per device capability and network conditions.
- Devices may point to d.plaspy.com or to the numeric server address 54.85.159.138 when DNS or routing requires it.
- Using TCP can provide more reliable delivery in networks that support long lived connections, while UDP can be beneficial for lower overhead in constrained scenarios.
- Ensure the device APN and cellular settings allow outbound connections to the Plaspy server and the chosen transport protocol.
- Keep firmware updated and follow QuecLink guidelines for network and power management to maintain reliable connectivity.

## Protocol Compatibility Notes

- Firmware differences can affect which reporting modes, message intervals, or optional features are available on a GL502MG device.
- Hardware revisions or optional accessories such as external antennas or magnetic holders do not generally change the reported protocol but can influence radio performance and positioning quality.
- Manufacturer configuration menus may allow switching transport, server address, and reporting intervals which will change how the device behaves with Plaspy.
- Transport selection (UDP versus TCP) should match network conditions and device capability for optimal battery life and delivery reliability.
- Validate any device-specific settings using the official QuecLink documentation and release notes before large scale deployment.
- If you rely on BLE or WiFi assisted positioning, confirm how those data points are included by the device firmware in uplink reports.

## Why Protocol Understanding Matters

Knowing how the GL502MG communicates with Plaspy helps ensure successful setup, predictable behavior in the field, and efficient troubleshooting when devices do not appear on the platform.

- Helps confirm that the device is pointed at the correct Plaspy endpoint and using port 8888 so messages reach the server.
- Aids in selecting the appropriate transport for your deployment to balance reliability and battery consumption.
- Makes it easier to interpret device reported status and battery indicators for long term maintenance planning.
- Reduces time spent diagnosing connectivity issues by narrowing investigation to network, APN, or firmware configuration.
- Supports planning for scale by understanding how devices behave under different reporting intervals and network conditions.

## Why Use Plaspy with This Protocol

Using the QuecLink GL502MG with Plaspy provides a practical path to asset level visibility for containers, trailers, and other remote equipment. The GL502MG hardware is designed for long life and harsh conditions, while Plaspy receives and normalizes telemetry so teams can monitor location, battery state, and operational events without managing low level protocol parsing.

Plaspy's shared endpoint model simplifies deployments: point the GL502MG at d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP, and Plaspy will automatically detect the tracker protocol and process incoming reports. To learn more about Plaspy visit https://www.plaspy.com and for the most current device and firmware details consult the manufacturer at https://www.queclink.com/. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be verified against official QuecLink documentation.
