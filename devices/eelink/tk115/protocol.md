---
slug: /eelink/tk115/protocol
id: tk115-protocol
sidebar_label: Protocol
title: EElink - TK115 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for EElink TK115 GPS tracker integration with Plaspy shared connection settings
keywords:
  - EElink TK115 protocol
  - EElink TK115 GPS protocol
  - EElink TK115 tracking protocol
  - EElink TK115 Plaspy compatibility
  - EElink tracker protocol
  - TK115 GPS tracker compatibility
  - GPS tracker communication protocol
  - Plaspy device integration
  - fleet tracking TK115
  - scooter tracker protocol
---

# EElink - TK115 Protocol

This page provides public protocol context for using the EElink TK115 GPS tracker with Plaspy. It explains how the tracker communicates with Plaspy at a high level, what role the reporting protocol plays in device integration, and which connection settings are used by Plaspy for ingesting telemetry and events from the device.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact on-device behavior and message contents can vary by firmware version, hardware revision, or manufacturer implementation, so this page focuses on public, non sensitive protocol context that helps with reliable setup and troubleshooting.

## Protocol Overview

The TK115 reporting protocol is the device layer that enables location, status, and alarm data to flow from the tracker into Plaspy. In practice this protocol carries GPS and LBS positioning, ignition and input status, alarm events, and telemetry that Plaspy consumes to provide live tracking, alerts, and reporting.

- Transmits GPS and assisted GPS location information along with LBS fallback for continuous position updates.
- Reports device status such as ACC ignition state, power and battery conditions, and input alarms.
- Sends event notifications for displacement, vibration, speed, geofence violations, and other security alarms.
- Delivers telemetry required for operational workflows like immobilization control via optional relay commands.
- Includes periodic heartbeat or keepalive reporting so Plaspy can maintain presence and detect offline conditions.

## How Plaspy Detects the Protocol

Plaspy centralizes incoming tracker connections at a shared endpoint and port, and the platform performs automatic protocol detection for devices that report correctly. When the TK115 is configured to report to Plaspy, users generally do not need to select a protocol inside Plaspy for typical setups.

- Plaspy’s public endpoint for device reporting is d.plaspy.com and can also be reached at 54.85.159.138.
- All devices use the same port on Plaspy which is 8888, simplifying device configuration across models.
- Plaspy automatically detects the tracker protocol once messages arrive at the platform, avoiding manual protocol selection in most cases.
- Proper device configuration to point to the Plaspy endpoint is the common requirement to enable automatic detection and ingestion.
- If a device has custom reporting behavior, verify the device is set to send standard telemetry and event messages to the Plaspy endpoint.

## Transport and Connection Context

Connection transport and addressing determine how the TK115 reaches Plaspy but do not change the general role of the protocol. The TK115 can be configured to use either UDP or TCP when sending data to the Plaspy endpoint, and the same Plaspy port is used for all supported trackers.

- The TK115 may be set to report over UDP or TCP on port 8888 depending on device settings and network environment.
- Devices can be pointed to the domain d.plaspy.com or the numeric address 54.85.159.138 to reach Plaspy servers.
- Plaspy uses port 8888 for all devices to keep configuration consistent across models and firmware versions.
- Network characteristics such as NAT, firewall rules, and carrier behavior can affect UDP versus TCP reliability; choose the transport that fits your deployment and carrier constraints.
- Make sure outbound device connectivity to d.plaspy.com on port 8888 is allowed by any intermediate firewalls or APN configurations.

## Protocol Compatibility Notes

- Firmware revision differences on the TK115 can change which fields or events are reported and how often reports are sent.
- Hardware revisions or optional accessories such as external relays or sensors may add or modify reported inputs and alarms.
- Transport selection (UDP vs TCP) can affect delivery semantics; some networks favor one transport for reliability.
- Manufacturer configuration tools or remote parameter settings may change reporting intervals, heartbeat behavior, and alarm thresholds.
- Validate device configuration by checking that the TK115 is reporting to d.plaspy.com or 54.85.159.138 on port 8888 and that messages are visible in Plaspy after initial setup.
- When using relay or immobilizer features, confirm supported remote control commands and required device settings within the manufacturer documentation.

## Why Protocol Understanding Matters

Understanding the TK115 communication protocol helps ensure a reliable integration into Plaspy, speeds up troubleshooting, and supports long term operations by making it clear what data the tracker will deliver and how Plaspy will process it.

- Helps identify whether missing data is due to device configuration, transport issues, or firmware differences.
- Enables correct network and firewall configuration so devices can reach d.plaspy.com on port 8888.
- Clarifies expected telemetry and event types for designing alerts, geofences, and immobilization workflows in Plaspy.
- Assists in validating that ACC status, battery alerts, and alarm events are being delivered consistently to the platform.
- Supports planning for OTA updates or device swaps by understanding protocol behavior differences across firmware.

## Why Use Plaspy with This Protocol

Using the TK115 with Plaspy gives fleet and mobility operators straightforward access to position data, alarm notifications, and status telemetry for electric motorcycles and scooters. The combination of TK115 hardware features such as AGPS assisted positioning, ACC detection, optional relay control, and backup power with Plaspy’s centralized ingestion and automatic protocol detection enables practical security and operational workflows without complex per device configuration.

To learn more about Plaspy and how your TK115 devices can report into the platform, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, please verify information on the manufacturer site https://www.eelink.com.cn/ as protocol support and firmware behavior may change over time.
