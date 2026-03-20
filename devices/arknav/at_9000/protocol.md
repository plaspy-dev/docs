---
slug: /arknav/at_9000/protocol
id: at_9000-protocol
sidebar_label: Protocol
title: ArkNav - AT-9000 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ArkNav AT-9000 tracker and Plaspy compatibility with connection guidance and integration notes
keywords:
  - ArkNav AT-9000 protocol
  - AT-9000 GPS protocol
  - AT 9000 Plaspy compatibility
  - ArkNav tracker protocol
  - AT-9000 communication protocol
  - AT-9000 tracking protocol
  - ArkNav Plaspy integration
  - container tracker protocol
  - asset tracking protocol
  - fleet management GPS protocol
---

# ArkNav - AT-9000 Protocol

This page provides a public protocol overview for using the ArkNav AT-9000 tracker with Plaspy. It focuses on the communication context that matters for integration, describing how the tracker reports telemetry to Plaspy and what to consider when configuring devices for reliable reporting and long deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact behavior and available commands can vary by AT-9000 firmware version, hardware revision, and manufacturer implementation, so this page aims to explain the general protocol context that governs device to server communication without exposing firmware internals.

## Protocol Overview

The AT-9000 reporting protocol is the mechanism by which the device transmits location, movement events, and status to a remote server. In practical terms, the protocol determines how the tracker identifies itself, how telemetry is packaged for transport, and how the server interprets that telemetry for display, alerts, and historical reporting.

- Enables the AT-9000 to transmit AGPS and cell derived positions to a remote endpoint for processing.
- Carries movement event flags and status indicators that let Plaspy generate alerts and wake device reporting when needed.
- Provides a structure for periodic telemetry uploads and on demand retrievals such as SMS based queries.
- Allows the device to fall back to cell based location when GPS is unreliable, improving availability in stacked containers and metal enclosures.
- Supports buffering of telemetry in local storage so uploads resume when connectivity returns.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by a device. In most deployments you only need to configure the AT-9000 to report to the Plaspy endpoint; the platform will handle protocol identification and route telemetry into the correct processing pipeline.

- Devices should be pointed at the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy listens on port 8888 and uses that same port for all supported devices.
- The AT-9000 may be configured to use UDP or TCP to reach Plaspy on port 8888 depending on device capability and chosen transport.
- When the device actively reports to the Plaspy endpoint, the platform attempts to identify the incoming protocol and map telemetry fields automatically.
- In most cases users do not need to select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the AT-9000 reaches Plaspy over the cellular network and which transport options are commonly used. Proper transport selection and server addressing are essential for stable reporting and battery efficient operation in long deployments.

- The AT-9000 may be configured using UDP or TCP on port 8888 to send telemetry to Plaspy.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138.
- All devices in Plaspy use the same port, so port configuration is consistent across models and simplifies fleet provisioning.
- Choice of UDP versus TCP can affect battery, retransmission behavior, and how the device handles intermittent connectivity; select the transport supported by your AT-9000 firmware and deployment goals.
- Ensure APN and SIM settings on the AT-9000 allow outbound connections to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Protocol features and command availability can vary by AT-9000 firmware version; confirm the firmware level when validating compatibility.
- Hardware revisions and regional variants may change default reporting behavior or supported transports.
- Transport selection (UDP versus TCP) should match what the device firmware supports and what you configure in the device profile.
- Some capabilities such as SMS retrieval or specific remote commands depend on manufacturer firmware and configuration options.
- Local data buffering behavior can differ by firmware and affects how long telemetry is retained during coverage gaps.
- Always validate device settings with official ArkNav documentation for firmware specific details before wide deployment.

## Why Protocol Understanding Matters

Knowing how the AT-9000 communicates helps ensure stable setup, accurate troubleshooting, and predictable long term operation when integrated with Plaspy. A practical understanding reduces configuration errors and helps teams tune reporting profiles for battery life and operational needs.

- Speeds troubleshooting by clarifying whether issues are transport, addressing, or device configuration related.
- Helps choose reporting profiles and movement thresholds that balance battery life against visibility needs.
- Reduces integration time by aligning device settings with Plaspy connection requirements and server addressing.
- Improves reliability by ensuring devices use the correct transport and endpoint for uninterrupted telemetry uploads.
- Supports better planning for remote retrieval options such as SMS and handling of local data upload after outages.

## Why Use Plaspy with This Protocol

Integrating the AT-9000 with Plaspy provides persistent asset visibility and operational oversight for container, trailer, and heavy equipment use cases. The combination of long battery life, rugged design, AGPS with cell fallback, and Plaspy’s fleet management features makes the AT-9000 a practical choice for long deployments where maintenance windows are limited.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device protocol details, firmware behavior, and manufacturer documentation for the AT-9000, please verify information on the ArkNav official website https://www.arknavgps.com.tw/. Protocol support and firmware implementations can change over time, so check manufacturer resources for device specific updates.
