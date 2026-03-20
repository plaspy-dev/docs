---
slug: /teltonika/fmm650/protocol
id: fmm650-protocol
sidebar_label: Protocol
title: Teltonika - FMM650 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Teltonika FMM650 communication with Plaspy including connection settings and compatibility notes
keywords:
  - Teltonika FMM650 protocol
  - Teltonika FMM650 GPS protocol
  - FMM650 communication protocol
  - FMM650 tracking protocol
  - Teltonika protocol Plaspy
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - vehicle telematics protocol
  - CAN J1939 telemetry
  - tachograph integration
---

# Teltonika - FMM650 Protocol

This page summarizes the public protocol context for using the Teltonika FMM650 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a connection and protocol level without exposing sensitive implementation details. Use this information to understand the role of the tracker reporting protocol when integrating FMM650 devices into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page is intended as a practical compatibility and connection guide rather than a replacement for the manufacturer documentation.

## Protocol Overview

The FMM650 reporting protocol defines how the tracker identifies itself to a server, delivers GNSS positions, vehicle telemetry, and status messages, and allows a server to interpret those messages for tracking and fleet management. With Plaspy, the protocol provides the data points Plaspy needs to populate live position, CAN/J1939 telemetry, tachograph status, and other device events.

- Enables the tracker to send periodic and event driven position updates and device status to Plaspy.
- Carries vehicle telemetry such as CAN or J1939 data and serial sensor streams for ingestion by Plaspy.
- Provides identification and state information so Plaspy can associate reports with the correct asset and configuration.
- Supports configuration and reporting options that may be enabled or disabled via Teltonika tools or device settings.
- Facilitates telemetry continuity during power loss using the device backup battery for anti theft and post incident visibility.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects the tracker protocol based on the incoming data stream and device identification. In most cases you do not need to select a protocol manually inside Plaspy if the FMM650 is configured to report to the Plaspy endpoint.

- Plaspy’s public server domain for device connections is d.plaspy.com.
- Plaspy’s public server IP address is 54.85.159.138 and the service listens on port 8888.
- Devices may be set to report to d.plaspy.com or directly to 54.85.159.138 using the same Plaspy port.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- All devices in Plaspy use the same port, so there is no per device port selection required.
- If the FMM650 is properly configured to target the Plaspy endpoint, protocol selection in the Plaspy interface is typically unnecessary.

## Transport and Connection Context

The transport layer determines how the FMM650 opens and maintains a connection to Plaspy but does not change the public purpose of the protocol. The FMM650 supports different transport modes depending on device configuration and network conditions, and Plaspy accepts the common transport modes used by Teltonika devices.

- The device may be configured to use UDP or TCP when reporting to Plaspy on port 8888.
- Devices can point to the Plaspy endpoint by domain d.plaspy.com or by the IP address 54.85.159.138.
- Port 8888 is the uniform port used by Plaspy for all supported devices and transports.
- Select UDP or TCP on the device according to network reliability and Teltonika configuration guidance.
- Use manufacturer recommended configuration tools to set the reporting transport and endpoint for the FMM650.

## Protocol Compatibility Notes

- Firmware revisions can introduce minor or major changes in message content and available features; always check firmware release notes when troubleshooting.
- Hardware variants and regional product versions may differ in supported connectivity modes or radio bands, which can affect transport choice.
- Manufacturer configuration tools and accessory modules may add or change serial and CAN telemetry available to the tracker.
- Transport selection (UDP vs TCP) can affect delivery semantics and should be chosen based on network reliability and intended reporting behavior.
- Validate device settings with official Teltonika documentation when enabling advanced features like tachograph streams or custom serial integrations.
- When in doubt, confirm current behavior against the manufacturer site and release notes before broad deployment.

## Why Protocol Understanding Matters

Knowing how the FMM650 communicates with Plaspy helps ensure a smooth setup, accurate data interpretation, and reliable long term operation. A practical understanding of protocol and connection context reduces configuration errors and speeds up troubleshooting when a device is not reporting as expected.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive reports.
- Helps choose the appropriate transport mode (UDP or TCP) for your network conditions.
- Aids in diagnosing connectivity issues that are transport or endpoint related rather than application layer related.
- Clarifies expectations for which telemetry fields Plaspy will receive and how those map into dashboard and reporting views.
- Reduces time to resolution when firmware or configuration changes alter device reporting behavior.

## Why Use Plaspy with This Protocol

Using the Teltonika FMM650 with Plaspy provides a practical path to ingesting high accuracy GNSS positions, CAN and J1939 telemetry, tachograph data, and serial sensor streams into a centralized fleet management platform. Plaspy’s automatic protocol detection and shared connection settings make it straightforward to integrate FMM650 devices: configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888 using your preferred transport, and Plaspy will handle the rest.

Learn more about Plaspy and how it can support FMM650 deployments at https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific information and firmware notes on the manufacturer website https://www.teltonika-gps.com/ before large scale or critical deployments.
