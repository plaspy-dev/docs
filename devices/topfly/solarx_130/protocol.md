---
slug: /topfly/solarx_130/protocol
id: solarx_130-protocol
sidebar_label: Protocol
title: TopFly - SolarX 130 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for TopFly SolarX 130 and how it communicates with Plaspy for reliable tracking and telemetry
keywords:
  - TopFly SolarX 130 protocol
  - TopFly SolarX 130 GPS protocol
  - TopFly SolarX 130 communication protocol
  - SolarX 130 protocol Plaspy
  - SolarX 130 GPS tracker protocol
  - TopFly GPS tracker protocol
  - SolarX 130 tracking protocol
  - Plaspy tracker protocol
  - TopFly asset tracker protocol
  - Solar powered GPS protocol
---

# TopFly - SolarX 130 Protocol

This page describes the public protocol context for using the TopFly SolarX 130 tracker with Plaspy. It focuses on how the device reports location, telemetry, and sensor data to Plaspy in general, and what to consider when configuring the tracker for reliable communications. The SolarX 130 is a rugged IP67 rated tracker designed for container, trailer, and outdoor asset visibility with solar charging, long life batteries, BLE sensor support, and a large offline buffer.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by device firmware, hardware revision, and manufacturer implementation. This page explains the role of the communication protocol in successful device integration while encouraging verification of manufacturer documentation for firmware or model specific details.

## Protocol Overview

The device reporting protocol is the mechanism the SolarX 130 uses to send position, movement events, and sensor telemetry to a remote platform like Plaspy. In public terms, the protocol defines how the tracker identifies itself, when it reports, and which data fields are transmitted so Plaspy can present usable location and condition data.

- Allows the tracker to transmit GNSS positions, timestamps, and movement events to Plaspy for mapping and alerts.
- Carries sensor readings from BLE accessories such as temperature humidity and door sensors alongside positional data.
- Supports buffered upload so stored points are forwarded to Plaspy after connectivity is restored.
- Includes event reports for alarms such as removal movement and low battery that Plaspy can use to trigger workflows.
- Works over standard transport layers supported by the device so the tracker can reach Plaspy servers from variable networks.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint and port for device reporting and automatically detects the tracker protocol when properly configured to report to that endpoint. In most cases users do not need to choose a protocol inside Plaspy if the SolarX 130 is configured to send data to Plaspy servers.

- Plaspy’s public reporting domain is d.plaspy.com which resolves to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 and all devices in Plaspy use the same port for reporting.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and configuration.
- When the SolarX 130 points to the Plaspy endpoint and reports, Plaspy will automatically identify the protocol and parse incoming telemetry for that device.
- Typical user workflow is to configure the tracker to report to d.plaspy.com or the provided IP and verify data arrival on Plaspy rather than selecting a protocol manually.

## Transport and Connection Context

Connection context describes how the tracker reaches Plaspy over the network. SolarX 130 supports multiple transport options at the device level, but for reporting to Plaspy you should configure the tracker to use the shared Plaspy endpoint and port so data arrives consistently.

- The device may be configured to use UDP or TCP on port 8888 depending on device configuration and network conditions.
- Pointing the device to the domain d.plaspy.com or the server IP 54.85.159.138 will direct traffic to Plaspy.
- All devices in Plaspy use the same port 8888 which simplifies network and firewall configuration.
- SolarX 130 also supports MQTT and SMS transports at the device level; when using Plaspy the primary reporting path is the shared TCP or UDP port described above.
- Use firewall rules or network allow lists to permit outbound traffic to d.plaspy.com on port 8888 for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available fields so validate protocol expectations against the device firmware version.
- Hardware revisions and optional accessories such as BLE sensors or I O hubs can affect which telemetry values are present in reports.
- Manufacturer default transport settings may differ regionally; confirm the tracker is pointed at d.plaspy.com or 54.85.159.138 on port 8888.
- Selecting UDP versus TCP can affect delivery behavior under different network conditions; choose per your reliability and latency needs.
- Large offline buffers on the SolarX 130 mean stored points will arrive after reconnection but arrival order and batching may vary by firmware.
- Always compare any device specific instructions from TopFly with Plaspy configuration guidance before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the SolarX 130 communicates with Plaspy helps ensure a smooth setup and reduces troubleshooting time when reports do not appear as expected. Awareness of the reporting path and device capabilities leads to more reliable tracking and better operational decisions.

- Ensures the tracker is configured to report to the correct Plaspy endpoint and port so data reaches the platform.
- Helps choose an appropriate transport mode such as UDP or TCP based on network reliability and latency requirements.
- Aids in diagnosing missing telemetry by checking firmware versions buffer behavior and sensor compatibility.
- Supports correct handling of buffered uploads so historical data is reconciled once connectivity returns.
- Enables effective use of movement removal and low battery alerts in Plaspy workflows by ensuring those events are enabled and transmitted.

## Why Use Plaspy with This Protocol

Using SolarX 130 with Plaspy gives organizations a robust solution for outdoor asset visibility cold chain monitoring and anti theft workflows. The combination of solar charging long offline buffers BLE sensor integration and strong GNSS performance means Plaspy can receive frequent position updates and condition telemetry even in challenging environments.

Plaspy’s shared reporting endpoint and automatic protocol detection reduce configuration complexity and make it straightforward to add SolarX 130 devices to your fleet. To learn more about Plaspy and how it handles device telemetry visit https://www.plaspy.com. For the latest device specific protocol behavior firmware notes and implementation details verify information on the manufacturer site https://www.topflytech.com/ as protocol support and firmware behavior can change over time.
