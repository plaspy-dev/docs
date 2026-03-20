---
slug: /autofon/dx_maiak/protocol
id: dx_maiak-protocol
sidebar_label: Protocol
title: AutoFon - DX Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the AutoFon DX Маяк GPS tracker with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - AutoFon DX Маяк protocol
  - DX Mayak GPS tracker
  - AutoFon protocol Plaspy
  - GPS tracker communication
  - DX Mayak tracking protocol
  - GLONASS GPS tracker
  - GSM GPRS tracker
  - BLE presence detection
  - tracker protocol compatibility
  - vehicle tracking Plaspy
---

# AutoFon - DX Маяк Protocol

This page describes the public protocol context for using the AutoFon DX Маяк tracker with the Plaspy monitoring platform. It focuses on how the device communicates high level telemetry and events to a remote monitoring server and what that means when integrating the tracker into Plaspy. The content here is intended for technical users configuring reporting endpoints and for administrators troubleshooting connectivity in a monitoring deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are properly configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific commands, firmware notes, or the latest behavior, always check the manufacturer documentation in addition to the guidance on this page.

## Protocol Overview

At a high level the tracker protocol governs how the AutoFon DX Маяк reports position, events, and device state to a monitoring server and how it receives configuration or control when supported. The protocol enables the device to turn raw sensor readings into structured telemetry that a server like Plaspy can interpret for mapping, alerts, and history.

- Transmits latitude and longitude, speed, heading, and time along with event markers from sensors such as the accelerometer.
- Reports device state information that can include battery condition, GSM signal quality, and internal black box status.
- Delivers event-driven messages for motion detection, shock or impact, and presence change from BLE when enabled.
- Supports multiple transports for delivering data to a remote endpoint using the device cellular modem.
- Allows remote configuration via server commands or SMS depending on manufacturer features and setup.
- Provides a basis for server side processing so Plaspy can show location, trigger notifications, and store history.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and automatically detects the tracker protocol when a device begins reporting. In most cases a properly configured DX Маяк will not require manual protocol selection inside Plaspy; the platform identifies the device behavior and maps incoming telemetry to the correct fields.

- Plaspy listens on the domain d.plaspy.com and the public IP 54.85.159.138.
- The platform uses port 8888 for device reporting and all devices supported by Plaspy use this same port.
- Devices may be configured to connect to Plaspy over either UDP or TCP on port 8888 depending on device support and preferences.
- Plaspy’s automatic detection reduces the need for manual protocol selection when the tracker is correctly pointed at the Plaspy endpoint.
- If a device is not appearing, verify device reporting address and transport and consult device logs or SMS command results to confirm it is sending to the Plaspy endpoint.

## Transport and Connection Context

Transport selection and the server address are part of the deployment details a user must confirm when integrating the DX Маяк with Plaspy. The tracker uses its GSM/GPRS modem to deliver data and may fall back to alternatives such as SMS for specific notifications or configuration.

- The device may be configured to send data to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts incoming device connections on port 8888 and that port is used uniformly across all supported devices.
- The tracker can use either UDP or TCP on port 8888 depending on the device firmware and configuration choices.
- SMS remains a separate channel often used for remote configuration or redundant alerts when GPRS is unavailable.
- Confirm the transport mode (UDP or TCP) and server address in the DX Маяк device settings to ensure successful delivery to Plaspy.

## Protocol Compatibility Notes

- Firmware versions can change message behavior, available fields, and transport capabilities; always check the firmware release notes for the DX Маяк.
- Hardware revisions or optional modules such as BLE presence may introduce additional telemetry that Plaspy can map or ignore depending on the payload.
- Some device features are configurable to use SMS instead of GPRS for notifications; these settings affect what the server receives directly.
- Selecting UDP versus TCP affects delivery characteristics and should match the device configuration and network conditions.
- Black box or non volatile storage on the device may buffer unsent messages until GPRS is available and then forward them to the server.
- Validate compatibility by confirming the DX Маяк is pointed at d.plaspy.com or 54.85.159.138 and set to communicate on port 8888.

## Why Protocol Understanding Matters

Understanding how the DX Маяк communicates helps with reliable setup, efficient operation, and practical troubleshooting when devices are deployed at scale. Awareness of protocol and transport choices allows teams to optimize battery life, alerting, and data reliability.

- Ensures the device is pointed to the correct Plaspy endpoint and using the expected transport for reliable reporting.
- Helps distinguish between connectivity, configuration, and firmware issues when a device stops reporting.
- Informs battery life expectations by clarifying continuous online versus interval sleep reporting behavior.
- Guides decisions about whether to use SMS duplication, server reporting, or BLE features for presence tracking.
- Allows administrators to validate that important events such as motion, shock, or geofence breaches are reaching Plaspy.

## Why Use Plaspy with This Protocol

Using the AutoFon DX Маяк with Plaspy can provide centralized visibility across a mixed fleet of assets, combining satellite and cellular based positioning with event reporting from the device accelerometer and BLE presence features. Plaspy’s platform consolidates incoming telemetry so operators can monitor location, receive alerts, and review historical tracks for operational oversight and incident response.

To learn more about integrating devices like the AutoFon DX Маяк and how Plaspy handles device connections and telematics, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol details and firmware notes on the manufacturer site https://www.autofon.ru/.
