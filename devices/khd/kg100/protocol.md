---
slug: /khd/kg100/protocol
id: kg100-protocol
sidebar_label: Protocol
title: KHD - KG100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the KHD KG100 GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - KHD KG100 protocol
  - KHD KG100 GPS protocol
  - KHD KG100 communication
  - KHD KG100 tracking protocol
  - KG100 Plaspy compatibility
  - KHD tracker protocol
  - vehicle GPS tracker protocol
  - GPRS GPS tracker integration
  - fleet tracking KG100
  - tracker protocol documentation
---

# KHD - KG100 Protocol

This page presents the public protocol context for using the KHD KG100 tracker with Plaspy. It focuses on how the device communicates with the backend in non sensitive, high level terms so that fleet administrators and integrators can understand the role of the tracker reporting protocol in a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior and command support can vary with KG100 firmware versions, hardware revisions, and manufacturer implementation, so this page emphasizes protocol context rather than firmware specific commands.

## Protocol Overview

The KG100 reporting protocol is the set of messages and behaviors that allow the tracker to identify itself, report position and status, and receive optional remote commands through a network backend. In Plaspy, this protocol is what turns raw GNSS fixes and telematics from the device into actionable location and event data for monitoring and analysis.

- Enables the KG100 to transmit location, movement, and status updates to a backend server
- Carries identifying information so the backend can associate messages with a specific device
- Conveys event and alarm states such as geofence crossings and input changes for downstream processing
- Supports transport over cellular data networks allowing integration with remote servers and platforms
- Provides the basis for remote control and configuration workflows when supported by the device and manufacturer

## How Plaspy Detects the Protocol

Plaspy receives tracker connections at a single shared endpoint and automatically detects the tracker protocol so users generally do not need to preselect a protocol inside the platform. Proper device configuration to report to Plaspy is the primary requirement for automatic detection to work reliably.

- Plaspy server domain is d.plaspy.com which devices may be pointed to for reporting
- Plaspy server IP is 54.85.159.138 and can be used as an alternative endpoint
- The platform listens on port 8888 and all devices supported by Plaspy use the same port
- Plaspy automatically detects the tracker protocol when messages arrive at the shared endpoint
- In typical setups the device is configured to push data to the Plaspy endpoint and no manual protocol selection is required

## Transport and Connection Context

Connection and transport selection determine how the KG100 sends protocol messages to the backend. The following points describe the common transport options and host naming choices available when integrating a KG100 with Plaspy.

- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen settings
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138
- Port 8888 is the shared listening port used by Plaspy for all supported devices
- GPRS or GSM cellular data is typically used to carry protocol messages from the tracker to the backend
- SMS may be available on the device for fallback or provisioning but is separate from the primary GPRS reporting channel

## Protocol Compatibility Notes

- Firmware revisions can change which message types and fields the KG100 sends or accepts
- Hardware variants and regional builds may alter available features or transport defaults
- The choice of UDP versus TCP can affect delivery behavior and should match device configuration
- Manufacturer configuration commands and default reporting servers may vary by retailer or distributor
- Confirm the device is configured to report to d.plaspy.com or to 54.85.159.138 on port 8888 for Plaspy compatibility
- Always validate device behavior after firmware updates or after changing transport settings

## Why Protocol Understanding Matters

A clear grasp of the KG100 communication protocol helps ensure successful setup, predictable reporting, and long term reliability when the tracker is used with Plaspy. Understanding the protocol reduces configuration errors and simplifies troubleshooting when location or event data does not appear as expected.

- Helps verify that devices are reporting to the correct Plaspy endpoint and port
- Guides troubleshooting steps when reports are delayed, missing, or misattributed
- Clarifies which device features can be consumed by Plaspy and which require firmware support
- Informs transport selection so delivery behavior matches operational requirements
- Supports planning for firmware updates and device fleet maintenance

## Why Use Plaspy with This Protocol

Using the KHD KG100 with Plaspy provides organizations with a practical way to convert tracker reports into fleet visibility, alerts, and historical playback. Plaspy's shared endpoint and automatic protocol detection simplify onboarding, so devices that can be pointed to d.plaspy.com or 54.85.159.138 on port 8888 typically integrate with minimal platform-side configuration.

To learn more about deploying devices with Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information with the manufacturer at http://www.khd.hk.
