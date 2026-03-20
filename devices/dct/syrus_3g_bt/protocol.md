---
slug: /dct/syrus_3g_bt/protocol
id: syrus_3g_bt-protocol
sidebar_label: Protocol
title: DCT - Syrus 3G+ BT Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the DCT Syrus 3G+ BT tracker with Plaspy including connection and compatibility guidance
keywords:
  - DCT Syrus 3G+ BT protocol
  - Syrus 3G+ BT GPS protocol
  - DCT Syrus communication protocol
  - Syrus Bluetooth tracker protocol
  - Syrus 3G+ tracker Plaspy
  - DCT Syrus Plaspy integration
  - Syrus 3G+ BT tracking protocol
  - GPS tracker gateway protocol
  - Pegasus Gateway REST API integration
  - fleet tracking Syrus Plaspy
---

# DCT - Syrus 3G+ BT Protocol

This page covers the public protocol context for using the DCT Syrus 3G+ BT tracker with the Plaspy platform. It explains how the device typically communicates with Plaspy in general, non sensitive terms, and highlights the connectivity and integration considerations that matter when deploying the Syrus 3G+ BT as a GPS tracker gateway for fleet or industrial telemetry.

The Syrus 3G+ BT is a rugged telematics gateway with Bluetooth 4.1 support, multiple accessory ports, and optional Iridium satellite backup. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Where useful, integrations can leverage Pegasus Gateway REST APIs for cloud side aggregation while Plaspy receives the telemetry stream for tracking and reporting.

## Protocol Overview

The communication protocol for the Syrus 3G+ BT determines how the device identifies itself, reports location and sensor data, and exchanges status or configuration messages with cloud endpoints. For Plaspy users, the protocol is the bridge that turns telemetry from Bluetooth tags, vehicle sensors, and accessory ports into actionable events visible in the platform.

- Enables the device to announce identity and operational status to a cloud endpoint so Plaspy can associate incoming streams with the correct asset.
- Carries location, sensor telemetry, and basic diagnostics from the device to the cloud in a format the back end can parse.
- Supports device-side choices such as transport selection and reporting intervals that influence how frequently Plaspy receives updates.
- Works alongside Pegasus Gateway REST APIs where the manufacturer provides API endpoints to simplify hardware abstraction and cloud integration.
- Allows accessory and BLE sensor data from the Syrus 3G+ BT to be included in the telemetry feed consumed by Plaspy.

## How Plaspy Detects the Protocol

Plaspy is designed to accept telemetry from many tracker models and automatically detect the tracker protocol when a device reports to the common Plaspy endpoint. In most deployments there is no manual protocol selection required inside Plaspy as long as the device is configured to report to the Plaspy connection settings.

- Plaspy accepts incoming telemetry at the shared endpoint d.plaspy.com and the public IP address 54.85.159.138.
- All devices supported by Plaspy use the same port 8888 which simplifies device configuration.
- Plaspy automatically detects the tracker protocol for properly configured devices reporting to the Plaspy endpoint.
- Users typically only need to ensure the Syrus 3G+ BT is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport selection between UDP and TCP is a device configuration option and Plaspy is prepared to receive reports over either transport when set to port 8888.

## Transport and Connection Context

Connection context covers the network transport and the address information required for the Syrus 3G+ BT to send telemetry to Plaspy. Devices can be configured to use different transports depending on firmware and deployment constraints, and Plaspy supports the standard options commonly available on telematics gateways.

- The Syrus 3G+ BT may be configured to use either UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 as the destination for telemetry.
- All devices in Plaspy use the same port 8888 which helps standardize fleet wide configuration.
- Transport choice can affect latency, reliability, and network behavior and should be selected to match deployment needs and the device firmware capabilities.
- When configuring the Syrus 3G+ BT, verify transport and destination settings in device management tools or via Pegasus Gateway REST APIs if applicable.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or transport defaults; always check device firmware release notes for protocol-relevant changes.
- Hardware revisions and accessory options such as the Iridium satellite module can alter available reporting paths or trigger additional telemetry flows.
- The manufacturer may offer multiple integration modes including direct telemetry and Pegasus Gateway REST APIs; verify which mode your deployment uses.
- Transport selection between UDP and TCP affects network behavior and should be aligned with Plaspy endpoint expectations on port 8888.
- Plaspy automatically detects protocols for properly configured devices but correct destination and transport settings are required for detection to succeed.
- Validate compatibility and configuration steps against the official DCT documentation for the Syrus 3G+ BT and the Pegasus Gateway integration guidance.

## Why Protocol Understanding Matters

Understanding the way the Syrus 3G+ BT communicates helps ensure reliable setup, predictable behavior, and efficient troubleshooting when integrating the device with Plaspy. Clear expectations about transport, reporting cadence, and which sensor data is included reduce deployment friction and improve long term operational outcomes.

- Helps diagnose why a device might not appear in Plaspy such as incorrect destination, transport mismatch, or firmware differences.
- Guides choices about transport and reporting intervals to balance battery, bandwidth, and update frequency needs.
- Informs decisions about accessory and BLE sensor usage so required telemetry fields are available to Plaspy.
- Supports planning for fallbacks such as satellite backup or alternative network paths where connectivity is intermittent.
- Reduces integration time by knowing which configuration options on the device and on the cloud side matter for successful communication.

## Why Use Plaspy with This Protocol

Using the Syrus 3G+ BT with Plaspy brings together a rugged telematics gateway with a cloud platform that standardizes incoming telemetry and presents it for tracking, alerts, and reporting. The device’s Bluetooth support, accessory ports, and optional satellite fallback make it well suited for mixed network scenarios where continuity and rich telemetry are important for fleet and industrial operations.

If you want to learn more about how Plaspy receives and processes device telemetry or to explore platform features that complement the Syrus 3G+ BT, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and accessory compatibility, verify information on the manufacturer website https://www.digitalcomtech.com/ as protocol support and device behavior can change with firmware and hardware revisions.
