---
slug: /atrack/as3/protocol
id: as3-protocol
sidebar_label: Protocol
title: ATrack - AS3 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for ATrack AS3 GPS tracker integration with Plaspy servers and connection guidance for reliable device communication
keywords:
  - ATrack AS3 protocol
  - ATrack AS3 GPS protocol
  - ATrack AS3 Plaspy
  - AS3 communication protocol
  - AS3 tracking protocol
  - Plaspy device compatibility
  - vehicle tracker protocol
  - GPS tracker integration
  - fleet tracking AS3
  - asset tracker AS3
---

# ATrack - AS3 Protocol

This page explains the public protocol context for using the ATrack AS3 GPS tracker with Plaspy. It describes how the tracker communicates at a high level, what connection settings Plaspy expects, and which aspects of device behavior are most relevant when integrating AS3 units into a fleet or asset management workflow. The content here focuses on non-sensitive protocol context that helps with setup and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for an AS3 can vary by firmware version, hardware revision, and manufacturer configuration. Refer to this overview for Plaspy-specific connection context and consult ATrack documentation for device specific protocol details.

## Protocol Overview

The communication protocol is the mechanism the AS3 uses to report location, status, and event data to a server such as Plaspy. For Plaspy integration the protocol determines how the unit identifies itself, how position and telemetry are formatted, and how events like motion, impact, or input changes are conveyed to the platform. This page keeps descriptions general while focusing on the role of the protocol in practical device connectivity.

- Transports position and telemetry from the AS3 to a remote endpoint so Plaspy can display location and status.
- Carries identity and device status information so Plaspy can associate messages with the correct asset.
- Conveys sensor and event signals such as motion detection, input changes, and battery status that enable alerts and automation.
- Supports configuration and remote management workflows such as firmware updates or reporting interval changes, where supported by the device.
- Enables logging and replay of historical points when the device buffers data and later uploads to the server.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and automatically detects the device protocol based on incoming traffic. In most common deployments you do not need to select a specific protocol inside Plaspy as long as the AS3 is configured to report to the Plaspy endpoint and uses one of the supported transports.

- Plaspy listens on a shared server address and port for all supported trackers.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- All devices in Plaspy use the same port and the platform automatically detects the tracker protocol.
- When an AS3 reports to the Plaspy endpoint the platform will identify the device type and process incoming messages accordingly.
- Proper device configuration to point to Plaspy is the typical setup step required from the user.

## Transport and Connection Context

The AS3 supports multiple transport methods at the device level. For connections to Plaspy the important factors are which transport the device firmware supports and how the device is configured for the Plaspy endpoint. Plaspy accepts device reports over the common transports supported by the AS3 when they are pointed to the Plaspy address and port.

- The device may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy.
- Devices can be configured to point to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so you do not need separate ports per model.
- Some AS3 deployments also use SMS as an alternate reporting channel, but Plaspy integration uses IP data transport over TCP or UDP.
- Ensure the device APN and network settings allow outbound connections to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware versions on AS3 units can change message fields, available events, and supported transports; always verify firmware release notes.
- Hardware revisions or optional components such as GPS plus GLONASS or the 3-axis G-sensor may add or modify telemetry fields.
- Choice of TCP versus UDP affects delivery semantics but not the Plaspy endpoint or port; select the transport that matches your device configuration and network conditions.
- Manufacturer configuration commands and remote management behaviors can vary; confirm supported command sets with official ATrack guidance.
- Large capacity backup battery and power states can change reporting cadence when the device is operating off battery backup.
- Validate compatibility against ATrack documentation for any advanced features like FOTA via FTP or specialized event reporting.

## Why Protocol Understanding Matters

Understanding the AS3 communication protocol and how it interacts with Plaspy helps ensure reliable device onboarding, accurate location reporting, and quicker troubleshooting when issues arise. Clarity about transport, identification, and event signaling reduces integration friction for fleet and asset managers.

- Properly configured endpoint and transport ensures the device connects and Plaspy can automatically detect the protocol.
- Knowing which telemetry and event fields the device can send helps map those data points into Plaspy dashboards and alerts.
- Awareness of firmware or hardware differences avoids surprises when adding new devices to a fleet.
- Understanding transport behavior helps diagnose connectivity issues in mobile or low coverage environments.
- Being prepared for remote firmware or configuration changes reduces downtime during field updates.

## Why Use Plaspy with This Protocol

Using the ATrack AS3 with Plaspy provides a straightforward path to fleet and asset visibility using a tracker built for rugged environments and intermittent power conditions. The AS3 hardware features such as IP67 protection, optional GPS plus GLONASS, internal rechargeable battery, and event sensing are complementary to Plaspy capabilities for real time visibility, alerting, and historical playback.

Plaspy centralizes incoming reports from AS3 units on a single shared endpoint and port and automatically detects the tracker protocol to simplify onboarding and ongoing management. To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer configuration information at the official ATrack website https://www.atrack.com.tw/ since device implementations and firmware may change over time.
