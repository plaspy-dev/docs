---
slug: /telic/sbc3_can/protocol
id: sbc3_can-protocol
sidebar_label: Protocol
title: Telic - SBC3 CAN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Telic SBC3 CAN GPS tracker and how it communicates with Plaspy for fleet telematics
keywords:
  - Telic SBC3 CAN protocol
  - Telic SBC3 CAN GPS protocol
  - Telic SBC3 CAN communication
  - SBC3 CAN tracker Plaspy
  - Telic GPS tracker protocol
  - SBC3 CAN vehicle tracking
  - Telic CAN bus tracking
  - Plaspy device compatibility
  - Fleet tracking Telic SBC3
  - Telematics SBC3 CAN
---

# Telic - SBC3 CAN Protocol

This page describes the public protocol context for using the Telic SBC3 CAN tracker with Plaspy. It focuses on how the device communicates at a high level, what connection settings Plaspy expects, and practical notes that help with integration and troubleshooting without exposing sensitive or proprietary protocol internals.

The Telic SBC3 CAN is a versatile telematics device with interfaces for RS232, 1 wire, and CAN bus and is available with internal or external antennas and an optional 4 Ah battery for extended operation. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

At a high level the tracker protocol defines how the SBC3 CAN reports position, vehicle interface data, and status to a remote server and how it may accept configuration commands when supported. The public view of the protocol is that it enables reliable transmission of usable telematics data while allowing the manufacturer to evolve implementation details across firmware updates.

- Provides vehicle telemetry reporting from GPS and vehicle interfaces such as CAN and RS232
- Carries device identity and status so Plaspy can associate incoming messages with a specific device
- Uses a transport layer to deliver location and sensor data to the Plaspy endpoint for processing
- Allows for remote configuration options exposed by the device manufacturer when supported
- Enables Plaspy to translate incoming reports into fleet insights and monitoring data

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and applies automatic detection to identify the tracker protocol in use. For most SBC3 CAN deployments the user simply configures the device to report to the Plaspy endpoint and the platform handles protocol recognition without manual selection.

- Plaspy listens on the shared domain d.plaspy.com and the public server IP 54.85.159.138
- All devices configured for Plaspy report to the same port which is 8888
- Plaspy supports both UDP and TCP reporting on port 8888 depending on device configuration
- Automatic detection means users typically do not need to choose a protocol inside Plaspy if the device is pointed to the Plaspy endpoint
- Proper device identity and consistent reporting intervals improve detection and onboarding success

## Transport and Connection Context

Transport and connection choices determine how the SBC3 CAN sends its reports to Plaspy. The public configuration items Plaspy expects are intentionally simple so a wide range of devices can integrate with a common endpoint.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and settings
- Devices can point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138
- Plaspy uses the same port 8888 for all supported devices to simplify configuration and firewall rules
- Choosing UDP can reduce overhead for frequent location updates while TCP may be preferred where reliable delivery is required and supported by the device
- Verify network routing and firewall configuration to allow device traffic to reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change how a device formats or timestamps telemetry so check firmware release notes when diagnosing differences
- Hardware revisions and optional modules such as external antennas or battery variants can affect power and radio behavior but not the Plaspy endpoint
- Manufacturer configuration menus may expose transport selection options for UDP or TCP and default server parameters that must be updated to the Plaspy settings
- When in doubt, confirm device reporting is directed to d.plaspy.com or 54.85.159.138 on port 8888 to ensure it reaches Plaspy
- Some device features exposed via CAN or RS232 may require specific configuration to be included in regular reports
- Validate compatibility against the manufacturer documentation for device specific commands and configuration steps

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a smooth onboarding, reliable reporting, and faster troubleshooting when a device does not behave as expected. Awareness of how data is delivered and what factors influence reporting helps administrators and integrators make informed configuration choices.

- Speeds up initial setup by focusing on the correct server address and transport settings
- Simplifies troubleshooting by narrowing issues to network, transport, or firmware layers
- Helps set expectations for battery life and reporting frequency when using optional power variants
- Improves diagnostics when combining GPS position data with CAN bus telemetry and vehicle signals
- Aids in planning for firmware updates and verifying that new behavior still aligns with Plaspy ingestion

## Why Use Plaspy with This Protocol

The Telic SBC3 CAN provides a robust hardware platform for vehicle telematics with access to CAN bus and auxiliary interfaces that many fleet operations rely on. Using Plaspy to ingest and process the SBC3 CAN reports gives organizations a consolidated view of vehicle location, status, and interface data without needing to manage protocol parsing in-house.

Plaspy’s shared endpoint model and automatic protocol detection reduce configuration complexity and let teams focus on operational use cases such as routing, maintenance alerts, and compliance monitoring. To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. Please verify the latest device specific protocol details and firmware behavior with the manufacturer at https://www.telic.de as protocol support and device implementation can change over time.
