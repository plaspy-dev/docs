---
slug: /teltonika/fmb204/protocol
id: fmb204-protocol
sidebar_label: Protocol
title: Teltonika - FMB204 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB204 communication with Plaspy including connection settings and compatibility guidance
keywords:
  - Teltonika FMB204 protocol
  - Teltonika FMB204 GPS
  - FMB204 Plaspy compatibility
  - Teltonika tracker protocol
  - GPS tracker communication
  - Plaspy device integration
  - fleet management tracker
  - asset tracking FMB204
  - FMB204 BLE sensors
  - Teltonika FMB204 connectivity
---

# Teltonika - FMB204 Protocol

This page summarizes the public protocol context for using the Teltonika FMB204 with Plaspy. It focuses on how the device communicates with Plaspy for real time tracking and telemetry without exposing private parsing details. The FMB204 is a compact, water resistant 2G GPS tracker with an internal backup battery and Bluetooth Low Energy support for external sensors, and this page frames the communication aspects relevant to integration and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed at the platform. For the FMB204 you can configure reporting to the Plaspy endpoint at d.plaspy.com or 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, and protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol governs how the FMB204 conveys identification, GPS position, status and sensor telemetry to a remote server such as Plaspy. At a high level the protocol ensures that data from the unit can be associated with a device record in Plaspy and that positional and sensor values are delivered reliably for mapping, alerting, and storage.

- Provides device identification and time stamped telemetry so Plaspy can correlate reports with the correct asset.
- Carries GPS position plus optional BLE sensor data for temperature, humidity, magnet and movement events.
- Enables periodic and event driven reporting so Plaspy can display live position and historical traces.
- Supports connection over standard transport channels so the device can reach the Plaspy endpoint in varied network conditions.
- Allows for remote configuration and firmware updates via manufacturer tools while maintaining telemetry delivery to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and automatically determines the tracker protocol used by the reporting device. When the FMB204 is pointed at the Plaspy server, the platform uses the incoming connection metadata and payload patterns to associate the traffic with the correct device and to process telemetry into the Plaspy workflow.

- Point the device to d.plaspy.com or 54.85.159.138 and use port 8888 for reporting.
- Plaspy automatically detects the tracker protocol so manual protocol selection is typically not required.
- The device may be configured to use either UDP or TCP on port 8888 depending on installer preference and device capability.
- Proper device identification and network reachability are the primary requirements for automatic detection.
- If a device fails to appear in Plaspy, verify network settings, APN configuration, and manufacturer configuration profiles.

## Transport and Connection Context

Transport choices affect how the FMB204 opens and maintains a link to Plaspy but do not change the public role of the protocol itself. The tracker supports cellular 2G uplink for telemetry and BLE for local sensors, while the server endpoint and port define where telemetry is delivered.

- Devices may be configured to report to d.plaspy.com or to the numeric address 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port for telemetry delivery.
- The device may be configured using UDP or TCP on port 8888; choose the transport that best fits your network and reliability requirements.
- Network level factors such as APN, signal quality, and operator restrictions influence report delivery.
- Ensure firewall and NAT rules allow outbound connections from the device to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change the exact telemetry fields and timing behavior; always check firmware release notes for changes that affect reporting.
- Hardware revisions and regional variants may alter supported bands, sensor availability, or accessory interfaces.
- Manufacturer remote management tools such as Teltonika configurator and FOTA WEB can change device settings that affect protocol behavior.
- Transport selection between UDP and TCP can influence latency and delivery guarantees for telemetry and should be chosen based on deployment needs.
- Confirm device identifiers and IMEI reporting are correct so Plaspy can match incoming connections to the proper asset.
- Validate any custom or third party accessories for compatibility with your expected telemetry use cases.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and administrators ensure reliable data flow to Plaspy, speed up troubleshooting, and plan for long term maintenance and firmware updates. A clear grasp of the protocol context reduces integration time and improves operational consistency.

- Helps diagnose connectivity issues such as incorrect endpoint, APN problems, or blocked ports.
- Clarifies how sensor data from BLE devices is transported alongside GPS and status telemetry.
- Informs decisions between UDP and TCP based on network reliability and power considerations.
- Guides firmware and configuration management practices so Plaspy receives consistent data.
- Supports correct device registration and asset mapping within Plaspy for accurate reporting and alerts.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB204 with Plaspy provides a practical solution for trailer, two wheeler, and remote asset tracking where rugged hardware and BLE sensor integration are useful. The FMB204's IP67 case, large backup battery, and BLE capabilities extend telemetry beyond position data to environmental and presence signals that enhance anti theft and fleet monitoring workflows.

To learn more about integrating devices and features with Plaspy visit https://www.plaspy.com. For the most current firmware details, device specifications, and manufacturer instructions verify device specific protocol and implementation notes at https://www.teltonika-gps.com/ as protocol support and firmware behavior can change over time.
