---
slug: /topfly/herox_100/protocol
id: herox_100-protocol
sidebar_label: Protocol
title: TopFly - HeroX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the TopFly HeroX 100 with Plaspy including connection and compatibility notes
keywords:
  - TopFly HeroX 100 protocol
  - HeroX 100 GPS protocol
  - TopFly GPS tracker protocol
  - HeroX 100 communication protocol
  - TopFly tracker Plaspy compatibility
  - HeroX 100 tracking protocol
  - TopFly vehicle tracking protocol
  - HeroX 100 telemetry protocol
  - Plaspy device protocol
  - GPS tracker protocol TopFly
---

# TopFly - HeroX 100 Protocol

This page covers the public protocol context for using the TopFly HeroX 100 GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general, what connection settings are commonly used, and what to consider when planning integration or troubleshooting. The content is intentionally high level and avoids exposing manufacturer private implementation details.

The HeroX 100 is a Plaspy compatible hardwired tracker built for vehicle and asset deployments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so always confirm device specific details with the manufacturer documentation when needed.

## Protocol Overview

The tracker reporting protocol defines how the HeroX 100 sends location, telemetry, and event data to a remote server and how the server can send commands back to the device. In the context of Plaspy, the protocol enables device identification, reliable telemetry delivery, and actionable events for fleet workflows.

- Translates GNSS fixes, CAN BUS telemetry, I/O events, and BLE sensor data into messages that a backend can ingest.
- Provides device identification and status information so Plaspy can map incoming data to the correct asset and configuration.
- Supports periodic reporting and event driven messages to balance real time tracking needs with bandwidth and power considerations.
- Enables remote control and configuration commands from the server when the device firmware supports bidirectional transport.
- Helps preserve history during outages by defining how buffered points are sent after reconnection.
- Works alongside transport layers such as UDP or TCP to reliably deliver data to the Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared, public endpoint and uses automatic detection to recognize the tracker reporting format. When a HeroX 100 is configured to report to Plaspy, users normally do not need to select a specific protocol inside Plaspy as long as the device is pointed to the standard Plaspy endpoint and port.

- Plaspy listens for device reports at the public server domain d.plaspy.com and the public server IP 54.85.159.138.
- All Plaspy devices use the same port for reporting, port 8888, simplifying device configuration.
- Devices may be configured to use UDP or TCP on port 8888 depending on tracker support and network considerations.
- When the HeroX 100 points to the Plaspy endpoint, Plaspy inspects incoming messages and associates them with the correct device and data model.
- Proper device configuration to the Plaspy endpoint typically removes the need for manual protocol selection in the platform.

## Transport and Connection Context

Successful communication depends on network transport and correct endpoint settings. The HeroX 100 supports multiple transports and can be configured to reach the Plaspy server over the common Plaspy endpoint and port.

- Devices can be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on network setup.
- The HeroX 100 may use either UDP or TCP on port 8888; choose the transport that matches your firmware and network reliability needs.
- Plaspy uses the same port 8888 for all supported devices, ensuring a consistent destination regardless of device model.
- Network elements such as firewalls and NAT should allow outbound device connections to port 8888 to ensure delivery.
- If you require DNS based routing or IP based routing, both the domain and the IP are publicly noted for configuration.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or supported transports; verify the firmware level when validating compatibility.
- Hardware revisions and optional accessory modules may alter which telemetry channels are available or the format of certain sensor reports.
- Manufacturer side configuration menus or tools may expose options to switch between TCP and UDP or to select reporting intervals that affect server behavior.
- Transport selection between UDP and TCP affects delivery semantics and may influence retransmission or command response behavior.
- Always test device reporting to the Plaspy endpoint in a controlled environment before large scale deployment.
- Consult manufacturer release notes for firmware specific protocol changes that could affect integration.

## Why Protocol Understanding Matters

Understanding how the HeroX 100 communicates helps ensure reliable data flow into Plaspy, speeds troubleshooting, and reduces integration time. Clear knowledge of the protocol and transport context helps operations teams maintain consistent tracking and respond quickly to device or network issues.

- Ensures correct endpoint and transport configuration so devices report successfully to Plaspy.
- Helps interpret device behavior during outages by knowing how buffered data and reconnection are handled.
- Facilitates targeted troubleshooting when messages do not appear in Plaspy or arrive with unexpected fields.
- Guides decisions about reporting intervals and event filters to balance data granularity and cellular usage.
- Supports planning for remote command and control capabilities such as remote immobilizer actions when firmware supports outbound commands.

## Why Use Plaspy with This Protocol

Using the HeroX 100 with Plaspy provides organizations with a streamlined path from device telemetry to operational insights. The device delivers precise GNSS positioning, CAN BUS telemetry, rich I/O and BLE sensor data that Plaspy can ingest for live maps, alerts, reporting, and automated fleet workflows. That combination is useful for fleet tracking, anti theft, fuel monitoring, cold chain oversight, and driver identification scenarios.

To learn more about Plaspy and how it ingests and uses tracker data visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions always verify information with the manufacturer at https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
