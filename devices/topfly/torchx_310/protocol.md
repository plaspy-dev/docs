---
slug: /topfly/torchx_310/protocol
id: torchx_310-protocol
sidebar_label: Protocol
title: TopFly - TorchX 310 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the TopFly TorchX 310 with Plaspy for reliable vehicle telemetry and tracking
keywords:
  - TopFly TorchX 310 protocol
  - TorchX 310 GPS protocol
  - TopFly GPS tracker compatibility
  - Plaspy compatible GPS tracker
  - OBD II tracker protocol
  - CAN bus telemetry protocol
  - vehicle tracking protocol
  - fleet management tracker
  - TorchX 310 communication
  - TopFly protocol Plaspy
---

# TopFly - TorchX 310 Protocol

This page covers the public protocol context for using the TopFly TorchX 310 GPS tracker with Plaspy. It explains how the device reports vehicle GNSS position, CAN based telemetry and BLE accessory data to Plaspy in general terms, helping fleet managers and integrators understand the communication role without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol while ingesting telemetry. Exact protocol behavior can vary by firmware, hardware revision and manufacturer implementation, so this page focuses on connection and reporting context rather than firmware internals or proprietary packet formats.

## Protocol Overview

The TorchX 310 communicates vehicle and sensor data to a remote tracking platform using standard network transports and the device vendor firmware. In the context of Plaspy, the protocol enables the tracker to identify itself, deliver location and CAN derived telemetry, and forward buffered data when connectivity returns.

- Enables real time GNSS location reporting and vehicle telemetry such as VIN, odometer, fuel level and DTCs from the OBD II CAN bus.
- Allows the device to include accessory and sensor status when paired via BLE 5.0, extending telemetry beyond the vehicle bus.
- Supports buffering of offline points so stored location and event data are forwarded to the server after network restoration.
- Transmits telemetry over standard network transports to a Plaspy endpoint so the platform can map, report and alert on vehicle state.
- Provides enough contextual metadata for Plaspy to associate messages with the correct device and vehicle record.

## How Plaspy Detects the Protocol

Plaspy ingests device traffic sent to a shared endpoint and automatically determines the appropriate tracker protocol based on the incoming connection. When a TorchX 310 is configured to report to Plaspy, users typically do not need to manually select a protocol inside Plaspy as long as the device is pointed at the Plaspy endpoint.

- Plaspy uses a single server endpoint for device reporting at d.plaspy.com.
- The Plaspy server IP address is 54.85.159.138 for users who prefer an IP target.
- All devices in Plaspy use the same port for reporting which simplifies fleet scale configuration.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint and port.
- If a device is correctly configured to report to d.plaspy.com or 54.85.159.138 on the designated port, manual protocol selection in Plaspy is usually unnecessary.

## Transport and Connection Context

Transport selection is a device configuration detail that controls how the TorchX 310 reaches the Plaspy endpoint. The tracker supports standard network transports and may be configured to use either UDP or TCP depending on device firmware and operator preference.

- The TorchX 310 may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts device reports at the shared port 8888 for all supported trackers.
- Devices can point to the DNS name d.plaspy.com or to the numeric address 54.85.159.138 when DNS usage is restricted.
- Using the same port across devices reduces firewall and provisioning complexity for fleet deployments.
- Transport reliability and retransmission behavior depend on the device firmware and the chosen transport type.

## Protocol Compatibility Notes

- The TorchX 310 is described as Plaspy compatible out of the box, but firmware and regional hardware variants can change behavior.
- Different firmware versions may add or remove specific telemetry fields, reporting intervals or encryption options.
- Hardware revisions or regional cellular variants can alter supported transports or network fallbacks.
- Transport choice TCP versus UDP can affect delivery guarantees and should be picked to match operational needs.
- Validate device configuration and reporting targets against the official manufacturer documentation before large scale rollouts.
- Confirm any optional encryption or authentication settings with the vendor to ensure the device is configured to send data to Plaspy.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure successful setup, predictable behavior and reliable long term operation when integrating TorchX 310 units with Plaspy. Knowing the connection context and what the device reports makes troubleshooting and configuration faster.

- Helps confirm that devices are pointed at the correct Plaspy endpoint and port during provisioning.
- Makes it easier to interpret device online and offline behavior when reviewing reports and logs in Plaspy.
- Assists in choosing UDP or TCP based on network conditions and desired message reliability.
- Improves troubleshooting workflows when telemetry fields differ across firmware or hardware revisions.
- Supports validation of BLE accessory pairing, CAN telemetry availability and buffered data delivery.

## Why Use Plaspy with This Protocol

Using the TorchX 310 with Plaspy provides fleet operators with a compact plug and play OBD II tracker capable of delivering CAN derived telemetry, BLE sensor integration and buffered GNSS reporting into a single management platform. Plaspy ingests location, VIN and diagnostic telemetry to present live maps, reports and alerts that help with fleet visibility, driver behavior monitoring and anti theft workflows.

To learn more about Plaspy and how it handles device reporting and fleet telemetry, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes and hardware revision information verify current documentation on the manufacturer site https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
