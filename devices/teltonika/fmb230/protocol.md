---
slug: /teltonika/fmb230/protocol
id: fmb230-protocol
sidebar_label: Protocol
title: Teltonika - FMB230 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Teltonika FMB230 with Plaspy server settings and connection context
keywords:
  - Teltonika FMB230 protocol
  - FMB230 GPS tracker
  - Teltonika FMB230 Plaspy
  - FMB230 communication protocol
  - Teltonika GPS protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking FMB230
  - FMB230 Bluetooth LE sensors
  - FMB230 IP67 tracker
  - fleet tracking Teltonika FMB230
---

# Teltonika - FMB230 Protocol

This page provides public protocol context for using the Teltonika FMB230 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in general, what connection settings are commonly used, and what to consider when integrating the FMB230 into fleet and asset monitoring workflows. The content is intended for technical users who need a clear, non-sensitive overview of device communication rather than an in-depth manufacturer protocol reference.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary by FMB230 firmware version, hardware revision, and Teltonika implementation, so this page stays at a general level and points you to manufacturer documentation for device specific details.

## Protocol Overview

The communication protocol for the Teltonika FMB230 defines how the tracker reports position, events, sensor readings, and status to a remote server such as Plaspy. It governs identification on first contact, the structure of periodic reports, and how supplemental telemetry (for example Bluetooth LE sensor values) is carried from device to platform without exposing private implementation details.

- Enables the FMB230 to send position, movement, and sensor data to Plaspy for tracking and analytics
- Carries identification and device metadata so Plaspy can associate reports with the correct asset
- Transmits event and alarm information that Plaspy can surface for alerts and reporting
- Supports additional telemetry such as BLE sensor readings and input state changes for vehicle monitoring
- Works over standard transport layers so the device can report to the Plaspy endpoint reliably

## How Plaspy Detects the Protocol

Plaspy listens on a single, shared endpoint and identifies incoming device traffic so the platform can parse and process tracker reports automatically. When an FMB230 is configured to report to Plaspy, the platform will associate incoming connections with the correct device and protocol without requiring manual selection inside Plaspy in most cases.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP for device reporting is 54.85.159.138
- The Plaspy listening port for all devices is 8888 and remains the same across supported devices
- Plaspy automatically detects the tracker protocol when the device reports to the platform endpoint
- Users typically do not need to select a protocol in the Plaspy interface if the device is configured to report to the Plaspy endpoint

## Transport and Connection Context

The FMB230 can be configured to use standard IP transport methods and will point to the Plaspy endpoint using the shared connection settings. Whether a tracker uses UDP or TCP depends on its configuration and network environment, but Plaspy accepts commonly used transport modes on the same platform port to simplify deployment.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the Plaspy endpoint using the domain name d.plaspy.com or the server IP 54.85.159.138
- All devices in Plaspy use the same port which simplifies fleet wide configuration and firewall rules
- Transport choice (UDP or TCP) can affect delivery semantics and retry behavior at the network level
- Confirm transport selection on the device and in-network policies to ensure reliable reporting

## Protocol Compatibility Notes

- Firmware versions can change how some messages are reported or which optional features are available on the FMB230
- Hardware revisions and accessory options such as BLE peripherals can influence the set of telemetry actually sent
- Teltonika may provide configuration tools and profiles that change reporting behavior; validate settings when deploying
- Choosing UDP or TCP for transport may be constrained by cellular network conditions or firewall rules at the endpoint
- Confirm that device firmware supports the telemetry you plan to use, for example BLE sensor forwarding or specialized inputs
- Always cross check protocol and behaviour details against Teltonika documentation for model and firmware specific notes

## Why Protocol Understanding Matters

Understanding how the FMB230 communicates with Plaspy helps ensure correct setup, faster troubleshooting, and consistent long term performance for tracking and monitoring use cases. Clear protocol knowledge reduces integration friction and helps you align device configuration with operational requirements.

- Speeds initial device onboarding by aligning device reporting settings with the Plaspy endpoint and port
- Helps diagnose connectivity issues related to transport selection, DNS, or network routing to d.plaspy.com
- Clarifies which telemetry fields and sensor data the platform can expect from a given firmware version
- Informs firewall and network configuration decisions since Plaspy uses a single shared port for devices
- Aids operational planning for features like BLE sensor integration, input monitoring, and event handling

## Why Use Plaspy with This Protocol

Using the Teltonika FMB230 with Plaspy gives organizations a practical way to collect GPS positions, sensor telemetry, and event data from a rugged, IP67-rated tracker that supports BLE peripherals. Plaspy’s shared endpoint approach and automatic protocol detection reduce the per-device configuration burden and make it easier to scale monitoring across fleets that use the FMB230.

If you need more detail on Plaspy capabilities or guidance on configuring devices to report to Plaspy, learn more about Plaspy at https://www.plaspy.com. For the latest model specific protocol details, firmware notes, and configuration tools refer to the official Teltonika documentation at https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
