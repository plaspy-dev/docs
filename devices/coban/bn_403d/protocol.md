---
slug: /coban/bn_403d/protocol
id: bn_403d-protocol
sidebar_label: Protocol
title: Coban - BN-403D Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Coban BN-403D GPS tracker and Plaspy compatibility for device communication and setup
keywords:
  - Coban BN-403D protocol
  - Coban BN-403D GPS protocol
  - Coban BN-403D protocol for Plaspy
  - Coban BN-403D communication protocol
  - Coban BN-403D tracking protocol
  - BN-403D tracker protocol
  - Plaspy device protocol
  - vehicle GPS tracker protocol
  - fleet management GPS protocol
  - GPS tracker Plaspy compatibility
---

# Coban - BN-403D Protocol

This page describes the public protocol context for using the Coban BN-403D vehicle GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy at a high level so fleet managers, integrators, and technical users can understand the connection and reporting behavior that enables real time location, alarms, and telemetry to appear in the Plaspy platform.

The BN-403D is a compact LTE and 2G capable vehicle tracker with Bluetooth configuration, alarm inputs, optional fuel sensing, and one way voice monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly configured to report to the Plaspy endpoint. Exact protocol behavior can still vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general protocol context rather than device internals.

## Protocol Overview

The tracker protocol is the set of rules the BN-403D uses to send position fixes, status updates, and alarm events to a remote server such as Plaspy. In practical terms the protocol allows the device to identify itself, deliver usable data points, and receive configuration or control commands where supported.

- Enables the BN-403D to deliver position, time, and telemetry to Plaspy for live tracking and historical playback.
- Carries alarm and status signals such as ACC ignition, door open, shock, overspeed, SOS, and power loss for event processing.
- Provides a consistent reporting channel that allows Plaspy to associate incoming messages with a specific device and apply user configured rules.
- Supports remote configuration patterns where the tracker accepts changes either over the air or via local Bluetooth depending on model capabilities.
- Works over standard transport protocols so the tracker can operate in diverse network environments and fall back between cellular modes.

## How Plaspy Detects the Protocol

Plaspy receives incoming data at a shared endpoint and port and performs automatic protocol detection so most properly configured devices do not require manual protocol selection inside Plaspy. Detection is designed to match the incoming message format to a supported device type and then route data into the platform workflow.

- Plaspy receives tracker traffic at the server address d.plaspy.com and the public IP 54.85.159.138.
- The platform listens on the common port 8888 which is used for all devices supported by Plaspy.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol option when a device is pointed to the Plaspy endpoint.
- Proper device configuration to report to the Plaspy address and port is the key step to ensure automatic detection succeeds.
- If a tracker is not reporting as expected, checking network reachability to d.plaspy.com or 54.85.159.138 on port 8888 is a practical first troubleshooting step.

## Transport and Connection Context

The BN-403D can be configured to use common transport protocols depending on firmware and configuration choices. Connection context determines how the device delivers its protocol messages to the Plaspy endpoint and how reliable delivery behaves across networks.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and chosen settings.
- Plaspy accepts connections addressed to d.plaspy.com or directly to 54.85.159.138 on the shared port 8888.
- Using TCP can provide connection oriented delivery while UDP can be useful for lightweight reporting in certain network conditions, subject to device capability.
- All devices in Plaspy use the same port, simplifying endpoint configuration for multi device deployments.
- Network factors such as carrier NAT, firewall rules, and APN configuration can affect connectivity and should be validated when commissioning a device.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported features, and optional fields. Validate the tracker firmware version when confirming behavior.
- Hardware revisions and accessory options such as external fuel sensors can add or change available telemetry channels.
- Manufacturer side settings and regional firmware variants may alter default transport or reporting configurations.
- Transport selection between UDP and TCP is device dependent and should match the device configuration on the BN-403D.
- SMS fallback or alternative reporting methods may be available on the device but are separate from the TCP/UDP reporting path to Plaspy.
- Always cross check any configuration steps against the latest manufacturer documentation for device specific command sets and defaults.

## Why Protocol Understanding Matters

A practical understanding of the BN-403D communication protocol helps ensure reliable setup, accurate troubleshooting, and predictable long term behavior when devices are integrated with Plaspy. Knowing the reporting path and configuration dependencies reduces deployment time and improves operational visibility.

- Helps diagnose connectivity issues by focusing efforts on the correct transport and server endpoint.
- Improves commissioning efficiency when multiple devices are pointed to the same Plaspy server and port.
- Assists in confirming which telemetry and alarm types the device will supply to the Plaspy platform.
- Supports planning for firmware updates, hardware differences, and accessory compatibility across a fleet.
- Enables better coordination between vehicle installation, cellular provisioning, and Plaspy configuration for consistent reporting.

## Why Use Plaspy with This Protocol

Using the Coban BN-403D with Plaspy provides a practical combination of hardware features and a platform designed for fleet visibility. The BN-403D supplies real time position, alarm events, and optional telemetry such as fuel level while Plaspy provides centralized dashboards, alerting, and historical playback that make those device signals actionable for operations teams.

If you want to learn more about how Plaspy uses device protocols in fleet and asset tracking, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always verify information with the manufacturer at https://www.coban.net/ as protocol support and firmware behavior can change over time.
