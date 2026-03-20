---
slug: /careu/ua1_p/protocol
id: ua1_p-protocol
sidebar_label: Protocol
title: CAREU - UA1-P Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for using the CAREU UA1-P GPS tracker with Plaspy. Connection and compatibility guidance for tracking deployments
keywords:
  - CAREU UA1-P protocol
  - CAREU UA1-P GPS tracker
  - UA1-P Plaspy compatibility
  - Plaspy tracker protocol
  - CAREU GPS protocol
  - UA1-P tracking protocol
  - asset tracking protocol UA1-P
  - GPS tracker Plaspy integration
  - parcel tracking UA1-P
  - CAREU device communication
---

# CAREU - UA1-P Protocol

This page provides the public protocol context for using the CAREU UA1-P tracker with Plaspy. It outlines how the device communicates with Plaspy in general terms, what connection settings are commonly used, and what to consider when integrating the UA1-P into centralized tracking workflows. The intent is to describe publicly observable communication and compatibility points without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is sending data to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ slightly from one unit to another.

## Protocol Overview

The UA1-P reporting protocol allows the device to transmit GNSS fixes, environmental sensor telemetry, and device state messages to a cloud endpoint where Plaspy ingests and presents that information. The public view of the protocol centers on what kinds of data are reported and how that data is made available to a fleet management platform rather than on internal packet encoding or parsing internals.

- Enables delivery of location fixes and timestamps from the tracker to Plaspy for real time and historical views.
- Transports environmental telemetry such as temperature, ambient light, and barometric pressure for condition based alerts.
- Conveys device state information useful for battery management and reporting profile selection.
- Supports configurable reporting profiles that balance reporting frequency with battery life and connectivity costs.
- Facilitates remote parameter updates and firmware maintenance workflows when supported by the manufacturer.
- Works over standard cellular IP connectivity so Plaspy can aggregate telemetry from many devices into a single platform.

## How Plaspy Detects the Protocol

Plaspy relies on a shared, centralized endpoint to receive reports from supported trackers and uses automated detection to identify the sender protocol. In common deployments you do not need to select a protocol manually in Plaspy when the device is configured to report to the Plaspy endpoint using the documented connection settings.

- Plaspy receives device reports at the centralized endpoint d.plaspy.com and at the public server IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when telemetry arrives to the shared endpoint.
- All devices in Plaspy use the same port, so the platform aggregates incoming data on a single listening port.
- When a device is properly configured to send to the Plaspy endpoint, no manual protocol choice is typically required inside the Plaspy system.
- If a tracker fails to appear in Plaspy, common checks include network reachability to d.plaspy.com, correct server address settings, and ensuring the tracker is configured for the expected transport type.

## Transport and Connection Context

Connection and transport are separate from protocol semantics but are essential for reliable delivery. The UA1-P can be pointed at Plaspy using standard IP transports supported by the tracker and its firmware. Understanding the transport context helps with basic connectivity checks and device onboarding.

- The device may be configured to use UDP or TCP on port 8888 depending on the device firmware and carrier environment.
- Devices may point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when configuring the reporting endpoint.
- Plaspy uses the same port for all supported devices, simplifying configuration and firewall rules on the receiver side.
- Choose UDP for minimal overhead where the device and network support it, or TCP when reliable delivery and session behavior are preferred and supported.
- Verify that the device firmware and local network allow outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change how and when the UA1-P reports specific telemetry fields; always check firmware release notes for behavior changes.
- Hardware variants and regional cellular band variants may influence which transport choices or APN settings work best in a given deployment.
- Manufacturer side configuration options may enable or disable specific telemetry channels or reporting profiles; confirm desired channels are active.
- Transport selection between UDP and TCP may affect battery use and report reliability depending on signal conditions and network behavior.
- Testing a small set of devices in your target geography helps validate reporting intervals, battery life, and message delivery before full rollout.
- Always validate compatibility against the official CAREU documentation for the exact model and firmware revision.

## Why Protocol Understanding Matters

Understanding the UA1-P communication protocol in practical terms helps ensure successful setup, reliable data ingestion into Plaspy, and predictable long term operation. Knowing what the tracker reports and how it connects reduces troubleshooting time and helps optimize configurations for cost and battery life.

- Speeds troubleshooting by narrowing whether issues are connectivity, configuration, or firmware related.
- Helps tune reporting intervals and profiles to balance telemetry needs with battery life and data costs.
- Informs firewall and network configuration so devices can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Supports planning for firmware update strategies and remote device management workflows.
- Enables clearer expectations for what telemetry will be available in Plaspy for alerts and reporting.

## Why Use Plaspy with This Protocol

Using the CAREU UA1-P with Plaspy provides a centralized way to collect real time location and environmental telemetry for parcel and asset monitoring. Plaspy aggregates the UA1-P’s GNSS fixes, sensor readings, and device states to provide visibility for logistics teams, security operations, and asset owners without requiring users to manage protocol parsing or multiple endpoints.

Plaspy’s shared endpoint approach simplifies deployment: devices report to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP as supported, and Plaspy automatically detects the tracker protocol so administrators typically do not need to manually select protocol handlers. To learn more about Plaspy and how it handles device compatibility, visit https://www.plaspy.com. For the latest device specific protocol and firmware details, please verify information with the manufacturer at https://www.systech-iot.com/ because protocol support and firmware behavior can change over time.
