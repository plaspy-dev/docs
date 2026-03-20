---
slug: /supermate/d12/protocol
id: d12-protocol
sidebar_label: Protocol
title: Supermate - D12 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Supermate D12 GPS tracker with Plaspy and common connection settings
keywords:
  - Supermate D12 protocol
  - Supermate D12 GPS protocol
  - Supermate D12 Plaspy compatibility
  - Supermate tracker protocol
  - Supermate D12 communication
  - GPS tracker protocol Plaspy
  - vehicle tracking Supermate D12
  - asset tracking D12 protocol
  - Plaspy device compatibility
  - tracker reporting protocol
---

# Supermate - D12 Protocol

This page describes the public protocol context for using the Supermate D12 GPS tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms so that fleet managers, integrators, and technical users can understand the connection and reporting relationship between the device and the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior may vary by firmware version, hardware revision, and manufacturer implementation, so this page covers public and non-sensitive protocol context while encouraging verification against official manufacturer documentation.

## Protocol Overview

The tracker protocol defines how the Supermate D12 reports position, movement, geo-fence events, SOS alerts, and basic status to a remote server. For integration with Plaspy, the protocol's role is to deliver timely, structured data that Plaspy can interpret and present to users without requiring manual protocol selection when the device is pointed to the Plaspy endpoint.

- Provides live location reports and event messages that Plaspy uses for mapping and alerting
- Identifies the device to the server so Plaspy can associate incoming data with the correct asset
- Conveys geo-fence transitions, SOS button events, and basic telemetry for operational visibility
- Ensures repeated reporting so Plaspy can maintain up to date tracking without manual polling
- Works over common transport layers so devices can adapt to network and deployment constraints

## How Plaspy Detects the Protocol

Plaspy receives device connections at a shared endpoint and port and detects the tracker protocol automatically when data arrives. This means most users do not need to select a protocol inside Plaspy as long as the Supermate D12 is configured to report to the Plaspy endpoint and uses the supported transport settings.

- Plaspy uses a common server endpoint for device reporting and automatically recognizes the incoming protocol
- You typically do not need to configure a protocol type inside Plaspy for supported devices
- Ensure the device is sending data to the correct Plaspy server settings so automatic detection can occur
- If a device does not report as expected, check device network settings and firmware behavior first
- Plaspy aggregates identifiable device data and links it to the correct account and asset record

## Transport and Connection Context

Connection and transport choices affect how the Supermate D12 reaches Plaspy. The device may be configured to use UDP or TCP on the Plaspy port depending on device support and site configuration. Plaspy accepts tracker connections to a shared address so devices can target a stable endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138 and the shared port is 8888
- Devices can be configured to use either UDP or TCP on port 8888 depending on model and firmware options
- All devices supported by Plaspy use the same port so you do not need separate ports per device model
- Point the Supermate D12 to d.plaspy.com or to the numeric address where allowed by your device configuration

## Protocol Compatibility Notes

- Firmware revisions can add, change, or remove protocol features so verify the behavior for your device firmware
- Hardware revisions or variant models may use slightly different reporting options even under the same model name
- Some deployments prefer TCP for reliability and others prefer UDP for lower overhead; choose based on network and device capability
- Manufacturer configuration menus may refer to server address, port, and transport; match those settings to Plaspy values
- Manufacturer-side commands and remote configuration methods vary and are best confirmed with official documentation
- Confirm that the device is permitted to resolve domain names if you use d.plaspy.com rather than the numeric address

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps with a smooth installation, reliable operation, and faster troubleshooting when integrating the Supermate D12 with Plaspy. Knowing which transport and settings the device uses reduces setup time and improves diagnostic clarity.

- Helps ensure the device is pointing to the correct Plaspy endpoint and using the supported transport
- Allows faster troubleshooting when reports do not arrive or events appear inconsistent
- Clarifies expectations for event timing, geo-fence alerts, and SOS reporting behavior
- Supports validation of firmware influence on message frequency and available telemetry
- Aids in planning network and SIM provisioning based on expected data patterns

## Why Use Plaspy with This Protocol

Using the Supermate D12 with Plaspy gives organizations a practical way to centralize location data, alerts, and basic telemetry for vehicles and assets. Plaspy accepts device reports at a shared endpoint and presents that information through its platform so teams can monitor assets, respond to SOS events, and manage geo-fence alerts efficiently.

If you want to learn more about Plaspy, visit https://www.plaspy.com for platform details and account options. Protocol support, firmware behavior, and device implementation details can change over time, so verify current device specific protocol documents and firmware notes on the manufacturer website at http://www.gps-summit.com/
