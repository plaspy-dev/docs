---
slug: /concox/vl111/protocol
id: vl111-protocol
sidebar_label: Protocol
title: Concox - VL111 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL111 GPS tracker and how it communicates with Plaspy for real time tracking and telemetry
keywords:
  - Concox VL111 protocol
  - Concox VL111 GPS protocol
  - Concox VL111 Plaspy
  - VL111 tracker protocol
  - VL111 communication protocol
  - Concox GPS tracker protocol
  - vehicle tracking VL111
  - VL111 telemetry
  - Plaspy tracker compatibility
  - Concox VL111 integration
---

# Concox - VL111 Protocol

This page covers the public protocol context for using the Concox VL111 tracker with Plaspy. It explains how the device communicates with Plaspy at a high level, what connection settings are commonly used, and which aspects of the tracker behavior are relevant for integration without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and available commands can vary with firmware versions, hardware revisions, and manufacturer implementation, so this page focuses on stable, public facts about connectivity and compatibility for real world deployments.

## Protocol Overview

The VL111 reporting protocol is the mechanism the device uses to identify itself and deliver GNSS positions, vehicle telemetry, and event data to a remote server like Plaspy. When configured to point to Plaspy, the tracker sends its periodic location and event reports so Plaspy can map those messages into live tracking, trip playback, and telemetry views.

- Enables position updates, speed, heading, and timestamped location history to reach Plaspy for real time tracking and playback.
- Carries vehicle telemetry such as voltage, battery state, accelerometer events and relay status for platform monitoring and alerts.
- Delivers event notifications for tamper, vibration, harsh driving, and immobilizer actions so Plaspy can trigger rules and notifications.
- Supports data buffering and reconnection behavior that allow the VL111 to recover and upload stored entries after temporary network loss.
- Works over standard transport channels to deliver messages to Plaspy without requiring the platform user to manage protocol parsing.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports on a shared server endpoint and identifies the tracker protocol automatically when a properly configured device connects. In most cases, you do not need to manually select a protocol inside Plaspy if the VL111 is pointed to the correct Plaspy endpoint.

- Plaspy accepts incoming device reports at the public domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol for incoming connections.
- When a VL111 is configured to report to the Plaspy endpoint, the platform matches the incoming traffic to the appropriate handling logic and maps fields into the Plaspy dashboard.
- Proper APN, SIM network connectivity, and device reporting intervals help ensure Plaspy sees a stable stream of telemetry for automatic detection.
- If a tracker does not appear in Plaspy, checking device server settings and transport selection is a practical first step.

## Transport and Connection Context

The VL111 can communicate over mobile data networks and will use common transport methods to send its telemetry to Plaspy. Transport selection and server addressing are part of the device configuration that determines how the tracker reaches the Plaspy endpoint.

- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and configuration.
- The device can point to d.plaspy.com or to the Plaspy server IP 54.85.159.138 as its reporting endpoint.
- Plaspy uses port 8888 for all supported devices so a single port is sufficient across device models and makes firewall rules simpler for deployments.
- Choice of UDP versus TCP can affect delivery characteristics such as retransmission behavior and acknowledgement patterns at the network layer.
- Ensuring the device SIM and mobile network allow outbound connections to port 8888 is a practical connectivity check.

## Protocol Compatibility Notes

- Firmware differences can change which features or message fields a particular VL111 unit reports; always confirm the firmware version when troubleshooting.
- Hardware revisions and regional variants such as VL111S_LA and VL111S_EM may differ in radio band support and regional behavior that can affect connectivity.
- Manufacturer configuration methods including SMS, PC tools, or cloud configuration may produce differing default transport or server settings.
- Selecting UDP or TCP should follow the device documentation and local network constraints; both transports are supported for reporting to Plaspy on port 8888.
- Validate compatibility against the device user manual and the manufacturer for firmware specific behavior prior to large scale rollouts.
- Confirm APN settings, SIM provisioning, and any required network whitelisting with your mobile operator and installation site.

## Why Protocol Understanding Matters

Knowing the basic communication behavior of the VL111 helps ensure reliable setup, faster troubleshooting, and predictable long term operations in Plaspy. Awareness of how the device reports data and which connection settings it uses reduces guesswork during integration and supports better fleet uptime.

- Helps installers and fleet managers confirm that the device is pointing to d.plaspy.com or the Plaspy IP and using port 8888.
- Speeds troubleshooting when devices fail to appear in Plaspy by narrowing checks to transport, APN, and firmware version.
- Enables informed choices about UDP versus TCP based on connectivity needs and network behavior.
- Supports planning for over the air updates, firmware rollouts, and hardware change management across a fleet.
- Improves confidence when mapping device events like immobilizer and accelerometer alerts into Plaspy rules and notifications.

## Why Use Plaspy with This Protocol

Using the VL111 with Plaspy gives organizations a practical combination of accurate GNSS position reporting, vehicle telemetry, and remote control capabilities. The VL111’s compact form factor, multi constellation GNSS, LTE Cat 1 with 2G fallback, BLE 5.0, and onboard relay make it well suited for motorcycle and light vehicle deployments where discreet installation and reliable telemetry matter.

Plaspy’s shared endpoint model and automatic protocol detection simplify deployment by allowing the VL111 to report to a single Plaspy endpoint. For more information about Plaspy features and platform capabilities, learn more at https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify current device specific protocol information and firmware notes on the manufacturer site https://www.iconcox.com/.
