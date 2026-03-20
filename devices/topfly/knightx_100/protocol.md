---
slug: /topfly/knightx_100/protocol
id: knightx_100-protocol
sidebar_label: Protocol
title: TopFly - KnightX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly KnightX 100 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - TopFly KnightX 100 protocol
  - TopFly KnightX 100 GPS protocol
  - KnightX 100 communication protocol
  - KnightX 100 Plaspy compatibility
  - TopFly GPS tracker protocol
  - KnightX 100 tracking protocol
  - Plaspy tracker protocol
  - vehicle tracking KnightX 100
  - asset tracking KnightX 100
  - BLE sensor KnightX 100
---

# TopFly - KnightX 100 Protocol

This page provides a public protocol overview for using the TopFly KnightX 100 tracker with Plaspy. It explains how the tracker communicates with Plaspy in general terms and what to expect during setup and operation. The focus is on connection context, protocol role, and practical compatibility considerations rather than on vendor private or firmware internal details.

The KnightX 100 is Plaspy compatible out of the box and pairs long battery life, hybrid positioning, BLE sensor support, and buffered storage to deliver reliable tracking and telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For the most current, device specific commands and firmware notes consult the official manufacturer documentation.

## Protocol Overview

The device protocol defines how the KnightX 100 reports position, sensor telemetry, and events to a server so Plaspy can ingest and display meaningful data. The protocol covers identification, periodic reporting, emergency events, and how buffered data is uploaded when connectivity returns.

- Enables the tracker to identify itself and associate reports with a device record in Plaspy.
- Delivers location fixes, BLE sensor readings, and event flags that Plaspy uses for alerts and reporting.
- Supports buffered storage and resume upload so historical positions are preserved when out of coverage.
- Carries telemetry that helps Plaspy apply rules for geofencing, alarm routing, and reporting.
- Works over common transport methods supported by the KnightX 100 so the device can be flexible in diverse deployment scenarios.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a shared endpoint and port and automatically detects the tracker protocol. When the KnightX 100 is configured to report to Plaspy, the platform typically identifies the device protocol without requiring manual selection by the user.

- Plaspy uses a single shared server endpoint and port for all supported trackers to simplify device configuration.
- The common Plaspy server domain is d.plaspy.com which devices can point to for reporting.
- Plaspy is also reachable at the public server IP 54.85.159.138 for cases where DNS resolution is not used.
- The platform automatically detects the tracker protocol after the device begins reporting to the Plaspy endpoint.
- In most cases users do not need to select a protocol inside Plaspy when the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

The KnightX 100 supports multiple transport options and may be configured to use either UDP or TCP to report to Plaspy depending on device settings and network conditions. Plaspy receives tracker data on a single port shared across all devices to streamline deployments.

- Devices may be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy listening port for all devices is 8888, and the KnightX 100 may use UDP or TCP on that same port.
- Using the shared port model means all supported devices use the same Plaspy port, reducing configuration complexity.
- Choice between UDP and TCP can depend on network reliability and the device firmware options.
- Ensure your device configuration matches carrier and network policies for the chosen transport.

## Protocol Compatibility Notes

- Firmware versions can change telemetry payloads, reporting intervals, and optional fields; verify behaviour after firmware updates.
- Hardware revisions or regional cellular variants may expose different transport or reporting defaults.
- Manufacturer configuration tools and SIM level settings can affect whether the device uses TCP, UDP, MQTT, or SMS for delivery.
- Buffered upload behavior can vary by firmware and may affect how historical positions appear in Plaspy after coverage gaps.
- Transport selection and APN settings should be validated during initial deployment to ensure data reaches the Plaspy endpoint.
- Always compare device settings with the manufacturer documentation to confirm expected packet types and available features.

## Why Protocol Understanding Matters

Knowing how the KnightX 100 communicates makes setup and troubleshooting faster and helps maintain reliable tracking over time. A practical understanding of protocol and transport choices reduces deployment friction and supports consistent data quality in Plaspy.

- Helps confirm the device is reporting to the correct Plaspy endpoint and port.
- Makes it easier to interpret telemetry and event timing when reviewing Plaspy logs.
- Reduces configuration errors related to APN, transport selection, and server addressing.
- Aids in diagnosing data gaps by checking buffered upload and coverage behaviour.
- Supports planning for firmware updates and testing after configuration changes.

## Why Use Plaspy with This Protocol

Using the KnightX 100 with Plaspy gives organizations a straightforward way to convert device telemetry into operational insight. The KnightX 100’s hybrid positioning, BLE sensor support, long battery life, and buffered storage pair well with Plaspy’s automated protocol detection and centralized ingestion to provide reliable real time monitoring, alarms, and historical reporting.

If you want to learn more about how Plaspy handles device connectivity and to explore platform features, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and regional variants please verify information with the manufacturer at https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
