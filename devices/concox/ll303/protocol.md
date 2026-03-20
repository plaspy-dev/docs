---
slug: /concox/ll303/protocol
id: ll303-protocol
sidebar_label: Protocol
title: Concox - LL303 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox LL303 integration with Plaspy servers and connection context for reliable GPS tracking deployments
keywords:
  - Concox LL303 protocol
  - Concox LL303 GPS protocol
  - Concox LL303 communication
  - Concox LL303 Plaspy compatibility
  - LL303 GPS tracker protocol
  - Concox vehicle tracker protocol
  - LL303 fleet tracking
  - Concox LL303 4G tracker
  - GPS tracker protocol guide
  - Plaspy device compatibility
---

# Concox - LL303 Protocol

This page describes the public protocol context for using the Concox LL303 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy servers and which connection settings are relevant for reliable reporting without exposing private implementation details.

The Concox LL303 is a 4G solar powered tracker with 2G GSM fallback, IP67 rating, multiple working modes, and accessory support such as Bluetooth and optional RFID. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior may vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker communication protocol defines how the LL303 reports position, status, and events to a remote server and how a fleet platform like Plaspy recognizes and ingests that data. This page keeps the discussion at a high level to help administrators and integrators understand the role of the protocol in device integration.

- Enables the LL303 to deliver location, status, and alert data to the Plaspy endpoint for processing and display.
- Allows the device to identify itself so Plaspy can associate messages with the correct vehicle or asset.
- Carries event information such as movement alerts, vibration alarms, power status, and accessory data in a format Plaspy can interpret.
- Supports working modes and periodic reporting behaviors that affect how often data arrives at the server.
- Facilitates remote configuration and over the air behavior when manufacturer supported command channels are enabled.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically detects the tracker protocol used by each device. In most deployments an LL303 that is correctly configured to report to the Plaspy endpoint will be recognized without requiring manual protocol selection inside Plaspy.

- Plaspy exposes a common server domain and address for device reporting so devices use consistent settings.
- The Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on port 8888 for tracker reports and all devices supported by Plaspy use the same port.
- Because Plaspy auto detects protocols, users usually do not need to pick a protocol profile in Plaspy when a device is pointing to the correct endpoint.
- If a device is not being detected, verify the device reporting host and transport and consult device and firmware documentation.

## Transport and Connection Context

Connection context covers the network transport and destination settings the LL303 uses to send data to Plaspy. Many aspects of transport are configurable on the device or depend on firmware defaults.

- The LL303 may be configured to report to Plaspy using UDP or TCP on port 8888 depending on device support and settings.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the IP address 54.85.159.138 if DNS is not available.
- Plaspy uses the same port 8888 for all supported devices to simplify configuration and firewall rules.
- Choice of UDP or TCP can affect delivery characteristics such as retransmission and connection overhead and may be set on the device or via its management tools.
- Ensure firewalls and NAT rules allow outbound device traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message composition and supported features; two LL303 units with different firmware may behave differently.
- Hardware revisions or accessory options such as Bluetooth or RFID may influence which data fields are reported.
- Some LL303 deployments prefer TCP for reliable delivery while others use UDP for lower overhead; confirm device settings before large scale rollout.
- Manufacturer side settings and regional firmware builds can introduce variation in default reporting intervals and alarm behavior.
- Always validate device reporting by checking incoming data at the Plaspy endpoint after configuring the device to point to d.plaspy.com or 54.85.159.138 on port 8888.
- When in doubt, consult the device configuration guide and firmware release notes to confirm compatibility details.

## Why Protocol Understanding Matters

Understanding how the LL303 communicates with Plaspy helps ensure a smooth setup, reliable data flow, and faster troubleshooting when issues arise. Clear expectations about transport and reporting behavior reduce downtime and improve operational visibility.

- Confirms that devices are pointing at the correct Plaspy endpoint and using port 8888 so messages arrive as expected.
- Helps troubleshoot connectivity issues by narrowing focus to transport type UDP or TCP, DNS resolution of d.plaspy.com, and local network routing.
- Aids in planning for battery and solar behavior by understanding how reporting intervals impact power consumption.
- Facilitates predictable handling of alerts and accessory data from Bluetooth sensors or optional RFID attachments.
- Improves long term reliability by prompting regular firmware checks and compatibility validation.

## Why Use Plaspy with This Protocol

Using the Concox LL303 with Plaspy provides a practical path to centralized fleet monitoring and operational oversight for construction vehicles, vessels, and other rugged assets. The LL303 hardware features such as 4G LTE with 2G fallback, solar charging, and IP67 durability make it well suited to demanding environments, while Plaspy handles the network intake, protocol detection, and data presentation layers.

If you want to learn more about using Plaspy with the LL303 and other trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions consult the manufacturer website at https://www.iconcox.com/ so you can verify the latest behavior and compatibility information.
