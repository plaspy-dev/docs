---
slug: /concox/vl501/protocol
id: vl501-protocol
sidebar_label: Protocol
title: Concox - VL501 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Concox VL501 GPS tracker and how it communicates with Plaspy for reliable fleet tracking and device integration
keywords:
  - Concox VL501 protocol
  - Concox VL501 GPS protocol
  - Concox VL501 Plaspy compatibility
  - Concox GPS tracker protocol
  - VL501 communication protocol
  - VL501 tracker Plaspy
  - vehicle tracking Concox VL501
  - fleet management VL501 Plaspy
  - Concox GPS telemetry protocol
  - Plaspy device compatibility
---

# Concox - VL501 Protocol

This page provides a public protocol overview for the Concox VL501 as it is used with the Plaspy platform. It focuses on the communication context and practical considerations needed to get the VL501 reporting location, telemetry, and events into Plaspy without exposing firmware internals or sensitive implementation details. The VL501 is a plug and play LTE tracker that streams GNSS position, sensor events, and Bluetooth telemetry over cellular networks and is described here in the context of how it integrates with Plaspy.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact on device behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page aims to explain the public, high level protocol context while encouraging verification against manufacturer documentation and device firmware release notes.

## Protocol Overview

The tracker communication protocol governs how the VL501 identifies itself to a server, sends position reports and sensor events, and uploads buffered data after connectivity gaps. With Plaspy the protocol provides the means to deliver GPS fixes, motion and event notifications, and device status so the platform can present real time tracking and historical reporting.

- Enables GNSS position and telemetry reporting from the VL501 to a remote server so Plaspy can show live location and replay.
- Delivers event notifications such as collision, unplug, low power, geo fence, and SOS so Plaspy can trigger alerts and workflows.
- Supports buffered storage upload for periods of intermittent connectivity so historical data syncs to Plaspy when the link returns.
- Facilitates device identification and status reporting so Plaspy can map incoming messages to the correct asset record.
- Allows remote device management actions where supported such as configuration synchronization and firmware update coordination.

## How Plaspy Detects the Protocol

Plaspy provides a single shared endpoint and port for device reporting and will automatically detect the device protocol when a VL501 is configured to report to the platform. In most deployments users do not need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy server.

- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the listed server IP 54.85.159.138 so Plaspy can receive incoming messages.
- All devices supported by Plaspy use the same reporting port which is 8888, simplifying device configuration across fleets.
- Plaspy automatically detects the tracker protocol and associates incoming messages with the correct device, reducing the need for manual protocol selection.
- Proper device configuration at the tracker side (APN, transport choice, and server address) is typically the main requirement for successful automatic detection.
- If messages are not being received, verify that the device points to the Plaspy endpoint and that the cellular provider and firewall settings permit outbound traffic to the Plaspy server and port.

## Transport and Connection Context

The VL501 can be configured to use either UDP or TCP transport depending on device support and configuration choice. Plaspy accepts reports over the shared port so the main transport considerations are ensuring the tracker uses the correct server address and that any network infrastructure allows the chosen transport to reach Plaspy.

- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct IP use.
- The reporting port used by all Plaspy supported devices is 8888 and the VL501 may be set to use UDP or TCP on that port.
- Choose UDP or TCP on the device according to the tracker firmware options and the desired tradeoff between simplicity and delivery guarantees.
- Ensure the device APN and carrier plan allow outbound connections to the Plaspy server and that NAT or firewall rules do not block port 8888.
- For initial setup it is often helpful to test connectivity using the server domain and confirm messages arrive in Plaspy before wide deployment.

## Protocol Compatibility Notes

- Firmware versions can introduce behavioral differences in reporting rate, event payloads, and supported transports; check the VL501 firmware release notes for specifics.
- Hardware revisions and regional variants may affect GNSS performance, LTE bands, and available features such as the microphone or Bluetooth behavior.
- Transport selection between UDP and TCP must match the device configuration; using the wrong transport will prevent messages from reaching Plaspy.
- Manufacturer configuration options such as data reporting intervals, event thresholds, and buffering behavior can impact how and when the VL501 sends data to Plaspy.
- Validate device reporting in a controlled test vehicle or small pilot before rolling out across a full fleet.
- Confirm any region specific device variants and regulatory limitations with the manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the VL501 communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy. Even though Plaspy automatically detects the protocol, knowing the connection and event behavior of the tracker makes it easier to diagnose issues and tune device settings for a fleet.

- Helps diagnose reporting failures by checking transport, server address, and APN settings on the device.
- Clarifies how events such as collisions, unplug alerts, and SOS are reported so rules and notifications in Plaspy can be configured appropriately.
- Guides decisions about reporting intervals and buffering to balance data usage, battery behavior, and position freshness.
- Supports planning for firmware maintenance, OTA updates, and coordinated rollouts across devices.
- Reduces integration time by aligning device configuration to Plaspy expectations before bulk deployment.

## Why Use Plaspy with This Protocol

Using the Concox VL501 with Plaspy gives organizations practical real time visibility and event driven alerts with minimal installation effort. The VL501’s plug and play design, multi constellation GNSS, onboard motion sensors, Bluetooth support, and local buffering make it well suited for quick deployments where reliable tracking and alerting are priorities. Paired with Plaspy, the VL501 can feed fleet dashboards, incident notifications, and historical reports that help operations and security teams act on telemetry.

To learn more about Plaspy and how the platform handles device reporting, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; please verify the latest device specific documentation and firmware notes on the manufacturer website https://www.iconcox.com/ for the most current information.
