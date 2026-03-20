---
slug: /concox/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: Concox - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox GT02 integration with Plaspy tracking platform
keywords:
  - Concox GT02 protocol
  - Concox GT02 GPS protocol
  - GT02 communication protocol
  - GT02 tracking protocol
  - Concox tracker Plaspy
  - Concox GPS compatibility
  - vehicle tracking GT02
  - GPS tracker protocol guide
  - fleet management Concox
  - Plaspy device integration
---

# Concox - GT02 Protocol

This page provides a public protocol context for using the Concox GT02 tracker with the Plaspy platform. It describes how the device communicates at a high level, what connection settings Plaspy expects, and what to consider when integrating or troubleshooting the tracker. This content is intended to help technical users and integrators understand the communication role of the tracker without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary depending on GT02 firmware, hardware revision, and manufacturer implementation, so device reporting and feature availability can differ by unit. For firmware specific behavior, always refer to Concox documentation while using this guide for Plaspy integration context.

## Protocol Overview

The tracker protocol is the set of signals and messages the GT02 uses to report location, status, and alerts to a remote server. In practice the protocol enables the device to identify itself, establish basic connectivity, and send periodic or event driven telemetry that Plaspy can interpret and present to users.

- Enables the GT02 to report position, timestamps, and basic status fields to a remote endpoint.
- Carries identity information so Plaspy can associate incoming data with the correct device record.
- Supports both periodic tracking and event reports so location updates can be adjusted for power saving or alarm conditions.
- Transports telemetry over a cellular link so Plaspy receives live or near real time data for monitoring.
- Works together with device configuration options to control reporting intervals and features.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker traffic and uses characteristics of the incoming connection and payload to determine the tracker protocol automatically. In most cases a GT02 that is configured to report to the Plaspy endpoint will be detected without manual selection inside Plaspy.

- Plaspy server domain is d.plaspy.com and can be used as the device host target.
- Plaspy server IP is 54.85.159.138 and can be used instead of a domain name if required.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device and SIM settings.
- If the GT02 is pointed to the Plaspy endpoint and allowed by network conditions, Plaspy will automatically detect the tracker protocol.

## Transport and Connection Context

GT02 devices use cellular data to reach Plaspy. The transport choice and how the device is configured on the SIM and device side determine whether the connection is UDP or TCP, and the device may be set to report directly to Plaspy by using the domain or IP below.

- Devices may be configured to point to d.plaspy.com as the server address.
- Devices may alternatively be configured to use the numeric address 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port, so there is no per model port configuration required.
- Network carrier settings, APN configuration, and device power behavior affect the reliability of the transport.

## Protocol Compatibility Notes

- Firmware revisions can change the exact fields or behavior of the GT02 reporting protocol; verify firmware notes when troubleshooting.
- Hardware revisions and regional variants may alter available features or default reporting modes.
- Transport selection (UDP vs TCP) is device configurable and may affect delivery characteristics under mobile networks.
- Manufacturer side customizations or reseller firmware can introduce differences from stock behavior.
- Always validate compatibility by confirming the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888 and that the carrier allows the chosen transport.
- When in doubt, consult the device serial number and firmware version alongside manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the GT02 communicates helps ensure reliable setup, more effective troubleshooting, and predictable long term operation with Plaspy. Understanding the protocol context reduces guesswork when reports are missing or behaviors differ from expectations.

- Helps confirm that the device is configured to report to the correct Plaspy endpoint and port.
- Makes it easier to interpret device state messages and validate that telemetry reaches the platform.
- Allows targeted checks of APN, transport type, and power behavior when tracking gaps occur.
- Reduces time spent on support by clarifying where behavior is likely caused by firmware or network factors.
- Supports appropriate expectations for reporting frequency, accuracy, and battery or power considerations.

## Why Use Plaspy with This Protocol

Using the Concox GT02 with Plaspy gives organizations a straightforward path to capture vehicle and asset location, status indicators, and event reporting in a central platform. The GT02 hardware features such as GPS plus GSM connectivity, quad band support, built in antennas, watchdog auto reboot, and acceleration sensing make it suitable for many fleet and asset tracking scenarios where continuous or periodic visibility is required.

To learn more about how Plaspy works with devices like the GT02, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official specifications from the manufacturer, please verify information on the Concox site https://www.iconcox.com/. Protocol support, firmware behavior, and implementation details can change over time, so checking manufacturer resources is recommended.
