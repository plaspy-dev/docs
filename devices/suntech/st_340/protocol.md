---
slug: /suntech/st_340/protocol
id: st_340-protocol
sidebar_label: Protocol
title: Suntech - ST 340 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Suntech ST 340 and how it communicates with Plaspy for GPS tracking
keywords:
  - Suntech ST 340 protocol
  - Suntech ST 340 GPS protocol
  - ST 340 Plaspy compatibility
  - Suntech tracker communication
  - GPS tracker protocol Plaspy
  - vehicle tracking Suntech ST 340
  - Suntech geofencing tracking
  - ST 340 remote immobilization
  - fleet tracking Suntech
  - Plaspy tracker integration
---

# Suntech - ST 340 Protocol

This page describes the public protocol context for using the Suntech ST 340 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level so that system integrators and fleet managers understand the role of the tracker reporting protocol in a Plaspy deployment. The ST 340 is a compact, low power tracker with an IP67 rating suited to motorcycles, heavy machinery, boats, jet skis, and mixed flotillas, and this guide frames the communication details relevant to those deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Plaspy listens on the same endpoint and port for all supported devices and will detect the tracker reporting protocol automatically when the device is configured to send data to the Plaspy endpoint. Public Plaspy connection settings used by ST 340 deployments include the server domain d.plaspy.com and the server IP 54.85.159.138 using port 8888. The device may be configured to use UDP or TCP on port 8888, and exact behavior can vary with firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol is the set of rules that governs how the ST 340 sends telemetry, status, and events to a remote server such as Plaspy. From a user perspective the protocol enables the tracker to identify itself, transmit location and state, and deliver alerts or status changes that Plaspy can turn into actionable information for monitoring and fleet operations.

- Carries position, time, and basic status information so Plaspy can map and record device location.
- Communicates device identifiers and session information needed for the platform to associate messages with the correct asset.
- Transmits event notifications relevant to fleet operations, such as geofence events or power state changes.
- Supports both persistent and stateless transports so the device can operate over different network conditions.
- Enables remote features exposed by the device when supported and routed through the platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a shared endpoint and port and uses the characteristics of the incoming messages to determine the appropriate protocol handling. When an ST 340 is pointed at the Plaspy endpoint and port, the platform will match the incoming traffic to its supported protocol handlers and route device data into the customer account stream without requiring manual protocol selection.

- Plaspy uses the endpoint d.plaspy.com and the server IP 54.85.159.138 on port 8888 for device reporting.
- All devices in Plaspy use the same port which simplifies device configuration.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device firmware and network preferences.
- If the tracker is correctly configured to report to Plaspy, users typically do not need to select a protocol manually in the platform.
- Verification steps include confirming the device points at the Plaspy endpoint and checking that messages are visible in the account once the device is live.

## Transport and Connection Context

Connection context describes how the ST 340 reaches Plaspy and which network settings are commonly required. The tracker can be set to report over either UDP or TCP and should target the Plaspy server information provided for consistent routing to the platform.

- Plaspy server domain for reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138.
- The port is 8888 and is used by all supported devices within Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and configuration choice.
- Using the shared port and endpoint reduces configuration complexity when deploying multiple device models.

## Protocol Compatibility Notes

- Firmware revisions can change message behavior and feature availability, so always check the device firmware version during integration.
- Hardware revisions and carrier or regional variants may use slightly different reporting options or transport defaults.
- Manufacturer configuration commands or tool settings may be required to point the device at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport selection between UDP and TCP can affect delivery characteristics; choose the transport supported by your deployment and device firmware.
- Validate configuration in a controlled test before wide deployment to confirm automatic protocol detection by Plaspy.
- Refer to official manufacturer documentation for any firmware specific notes that could affect compatibility.

## Why Protocol Understanding Matters

A clear grasp of the ST 340 communication protocol helps ensure reliable installation, accurate telemetry, and faster troubleshooting when devices are live on Plaspy. Understanding what the protocol carries and how it is delivered enables operators to make informed choices about configuration, connectivity, and operational monitoring.

- Faster setup because installers know which host and port to configure on the device.
- Predictable behavior when investigating missing or delayed reports by checking transport and endpoint settings.
- Better fleet reliability by matching device firmware and transport settings to operational requirements.
- Informed troubleshooting steps that separate network issues from device or firmware issues.
- Improved security posture by ensuring devices are reporting to the correct Plaspy endpoint.

## Why Use Plaspy with This Protocol

Using the Suntech ST 340 with Plaspy gives organizations a practical way to collect real time location, event, and status data across mixed vehicle fleets. The ST 340 design is well suited to demanding environments due to its compact size and IP67 rating, and when paired with Plaspy the device data can be turned into actionable visibility for routing, geofence monitoring, and operational oversight.

If you want to learn more about how Plaspy handles device integrations and fleet telematics, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol documentation and firmware notes on the manufacturer site http://www.suntechint.com/ before mass deployment.
