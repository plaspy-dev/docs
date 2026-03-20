---
slug: /teltonika/tft100/protocol
id: tft100-protocol
sidebar_label: Protocol
title: Teltonika - TFT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika TFT100 integration with Plaspy including connection settings and compatibility notes
keywords:
  - Teltonika TFT100 protocol
  - TFT100 Plaspy compatibility
  - Teltonika GPS tracker protocol
  - TFT100 communication
  - TFT100 tracking protocol
  - vehicle tracking Teltonika
  - e mobility tracker protocol
  - fleet management Plaspy
  - CAN bus telemetry TFT100
  - BLE sensor TFT100
---

# Teltonika - TFT100 Protocol

This page describes the public protocol context for using the Teltonika TFT100 with Plaspy. It focuses on how the tracker communicates with Plaspy at a connection and protocol level suitable for system architects, integrators, and fleet managers. The content here highlights public, non sensitive information about reporting and connectivity while relying on the official manufacturer documentation for device specific configuration and firmware details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available telemetry can vary by firmware version, hardware revision, and manufacturer implementation, so careful validation and testing are recommended during deployment.

## Protocol Overview

The TFT100 uses its built in cellular link, wired vehicle interfaces and BLE to report location and telemetry to backend services such as Plaspy. In integration terms, the tracker sends periodic and event driven telemetry to the Plaspy endpoint so the platform can parse, store and present location, CAN and sensor data for operational use.

- Provides identification and telemetry data so Plaspy can associate messages with a fleet asset and display live position.
- Carries vehicle bus data and sensor fields that Plaspy maps into telemetry dashboards and alerts.
- Supports event style reporting so alarms and state changes are delivered to the server for immediate processing.
- Enables BLE sensor and beacon data to be forwarded alongside GNSS and vehicle bus telemetry for richer context.
- Operates over standard transport channels that Plaspy accepts so the tracker can reach the Plaspy endpoint from cellular networks.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared, public endpoint and automatically identifies the reporting device protocol so manual protocol selection is typically not required. Proper device configuration to point at the Plaspy endpoint ensures the tracker will be recognized and its messages routed to the correct processing pipeline.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138; the service listens on port 8888.
- All devices in Plaspy use the same port, simplifying device configuration and onboarding.
- Plaspy automatically detects the tracker protocol for well configured devices reporting to the Plaspy endpoint.
- In most cases users do not need to select a protocol inside Plaspy when the device is correctly pointed at the shared endpoint.
- Confirm device reporting parameters in Teltonika configuration tools so the first messages arrive and are detected as expected.

## Transport and Connection Context

The TFT100 can be configured to send telemetry over standard transport protocols supported by Teltonika devices. When integrating with Plaspy you should configure the device to point to the Plaspy endpoint and choose the transport supported by your deployment and network conditions.

- The device may be configured using UDP or TCP on port 8888 depending on device support and settings.
- Devices may point to the Plaspy server by domain d.plaspy.com or directly to 54.85.159.138.
- Use the transport that best fits your latency and delivery expectations; both UDP and TCP are accepted by Plaspy on the shared port.
- Network routing and operator restrictions can affect connectivity, so validate outbound cellular traffic to the Plaspy endpoint.
- Keep configuration consistent across devices since Plaspy uses the same port and endpoint for automatic protocol detection.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior, available telemetry fields, and timing; always confirm firmware release notes for the TFT100.
- Hardware variants and interface options such as CAN, RS232, RS485 and UART determine which telemetry channels are available for Plaspy ingestion.
- Bluetooth Low Energy support varies by sensor type and must be paired and configured via Teltonika tools before Plaspy will receive BLE data.
- Transport selection between UDP and TCP can affect message delivery semantics; select and test the transport that meets your operational needs.
- Teltonika lists the TFT100 as End of Life; verify availability, replacement options and supported firmware with Teltonika before large scale deployment.
- Validate protocol and compatibility claims against official Teltonika documentation and any device specific guides used during configuration.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps integrators and fleet operators set up devices correctly, troubleshoot common connectivity issues, and ensure reliable telemetry over the life of the deployment. Clear knowledge of how the TFT100 reports and what Plaspy expects reduces onboarding time and prevents avoidable data gaps.

- Ensures correct server and transport settings so devices reliably reach the Plaspy endpoint.
- Helps map CAN and sensor fields to Plaspy dashboards and reports for meaningful operational insights.
- Aids in diagnosing connectivity problems by checking domain resolution, IP reachability, and transport behavior.
- Supports planning for firmware updates and hardware refresh cycles, especially given the TFT100 EOL status.
- Improves alerting and event handling by aligning device event reports with Plaspy processing expectations.

## Why Use Plaspy with This Protocol

Using the Teltonika TFT100 with Plaspy gives fleet teams focused visibility into e mobility and industrial vehicle operations. The TFT100’s rugged design, wide vehicle power range and direct vehicle interfaces make it suitable for heavy equipment, while Plaspy turns incoming telemetry into live maps, alerts and historical analytics that support maintenance and operational workflows.

To learn more about Plaspy and how it handles device protocols, visit https://www.plaspy.com. For the most current and device specific protocol, firmware behavior and implementation details, confirm information with the manufacturer at https://www.teltonika-gps.com/ as device support and firmware behavior can change over time.
