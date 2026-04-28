---
slug: /aovx/gl100/protocol
id: gl100-protocol
sidebar_label: Protocol
title: AOVX - GL100 Protocol
sidebar_class_name: menu_item_tracker
description: AOVX GL100 protocol guide for Plaspy compatibility, connection settings, and tracker communication context.
keywords:
  - AOVX GL100 protocol
  - AOVX GL100 GPS protocol
  - AOVX GL100 protocol for Plaspy
  - AOVX GL100 communication protocol
  - AOVX GL100 tracking protocol
  - AOVX GL100 tracker compatibility
  - AOVX GL100 device communication
  - AOVX GL100 GPS tracker
  - Plaspy compatible GPS tracker
  - vehicle tracking with Plaspy
---

# AOVX - GL100 Protocol

This page explains the public protocol context for using the AOVX GL100 with Plaspy. It focuses on how the tracker communicates with the platform at a practical level, so users can understand the role of the device protocol without needing private implementation details.

The GL100 is a compact GPS tracker designed for long-term asset monitoring and environmental logging, and Plaspy can use its telemetry when the device is configured to report to the Plaspy endpoint. Because Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, exact behavior can still vary depending on firmware, hardware revision, and the manufacturer’s implementation.

## Protocol Overview

The GL100 communication protocol defines how the tracker sends its position, sensor, and status information to Plaspy. In general terms, this protocol is what allows the device to identify itself, establish a reporting session, and deliver data that Plaspy can use for mapping, monitoring, and alerts.

- Carries the tracker’s reporting data from the device to Plaspy
- Helps Plaspy recognize the device and process incoming telemetry
- Supports periodic and event-driven updates from the tracker
- Makes it possible to use location data together with environmental readings
- Provides the communication layer needed for tracking workflows and history records
- Works within Plaspy’s broader device integration model without requiring separate per-device server settings

## How Plaspy Detects the Protocol

Plaspy is designed to work with supported trackers through a shared endpoint, so the GL100 does not require a unique server configuration inside Plaspy. Once the tracker is pointed to the correct Plaspy address and port, Plaspy automatically detects the tracker protocol and handles the incoming communication accordingly.

- Uses a common Plaspy endpoint for supported devices
- Automatically detects the tracker protocol after the device connects
- Reduces the need for manual protocol selection in Plaspy
- Lets users focus on correct device configuration rather than parser setup
- Supports a smoother onboarding process for compatible trackers
- Relies on the tracker sending data to the expected Plaspy connection details

## Transport and Connection Context

For network communication, the GL100 may be configured to use UDP or TCP on port 8888, depending on device support and setup. The tracker can be directed to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138, and all supported devices in Plaspy use the same port.

- Port 8888 is the shared Plaspy port for supported devices
- The tracker may use UDP or TCP on that port
- Devices can point to d.plaspy.com for hostname-based configuration
- Devices can also point to 54.85.159.138 when an IP-based setting is preferred
- Shared connection settings simplify deployment across multiple tracker models
- Proper transport selection depends on what the GL100 firmware and configuration support

## Protocol Compatibility Notes

- Compatibility can vary by firmware version, even within the same model family
- Hardware revisions may influence how the device reports data or connects to the platform
- Manufacturer implementation details can change the exact behavior of the tracker protocol
- UDP and TCP support should be validated against the device configuration options available in the current firmware
- Plaspy automatically detects the tracker protocol, but the device still needs to be correctly pointed to the Plaspy endpoint
- For the most current model-specific behavior, review the official manufacturer documentation

## Why Protocol Understanding Matters

Knowing the communication protocol helps ensure the GL100 is configured correctly and that its data reaches Plaspy as intended. It also makes setup and troubleshooting more straightforward, especially when teams manage multiple devices or rely on timely reporting for monitoring and alerts.

- Helps confirm that the tracker is sending data to the correct Plaspy endpoint
- Improves first-time setup by reducing configuration mistakes
- Supports troubleshooting when a device is online but not reporting as expected
- Provides context for evaluating firmware or transport differences
- Helps maintain long-term reliability in tracking operations
- Makes it easier to validate compatibility during deployment planning

## Why Use Plaspy with This Protocol

When the GL100 communicates through its supported protocol and connects to Plaspy, organizations can turn tracker telemetry into practical visibility for assets, cargo, and fleet-related workflows. This helps teams monitor location, react to changes faster, and maintain operational oversight without needing separate integration paths for each device.

Plaspy’s shared connection model and automatic protocol detection are especially useful in mixed or growing deployments, where consistency matters more than device-specific setup complexity. For more about Plaspy and its tracking platform, learn more at https://www.plaspy.com. For the latest device-specific protocol details, firmware behavior, and manufacturer guidance, please verify the current information on the official AOVX website at https://www.aovx.com/.
