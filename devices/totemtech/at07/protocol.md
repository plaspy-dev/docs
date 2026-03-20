---
slug: /totemtech/at07/protocol
id: at07-protocol
sidebar_label: Protocol
title: Totemtech - AT07 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context and connection notes for Totemtech AT07 compatibility with Plaspy
keywords:
  - Totemtech AT07
  - Totemtech AT07 protocol
  - AT07 GPS tracker
  - Totemtech GPS protocol
  - AT07 tracking protocol
  - Totemtech AT07 Plaspy
  - GPS tracker communication
  - vehicle tracking Totemtech
  - OTA firmware Totemtech
  - asset tracking AT07
---

# Totemtech - AT07 Protocol

This page provides public protocol context for using the Totemtech AT07 GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform, the shared connection settings Plaspy expects, and practical considerations that help with integration and day to day operation. Technical configuration and firmware specific behavior are referenced at a high level and users are encouraged to consult manufacturer documentation for device specific commands and firmware notes.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. The AT07 offers features such as simultaneous data transmission to two servers, a 3 axis accelerometer, OTA firmware updates, wide range power input, GPRS and SMS command support, 16Mb flash memory, fuel level sensing, voice monitoring, and user configurable I O ports. These features influence how the tracker is configured to report to Plaspy and how data is interpreted once received.

## Protocol Overview

The tracker reporting protocol is the set of rules the AT07 uses to send location, sensor and status data to a remote endpoint. For Plaspy integration the protocol determines how the device identifies itself, how telemetry and alerts are encoded and when the device requests or accepts remote configuration changes. Understanding the public protocol context is useful for configuring the device to reliably report to the Plaspy endpoint and for mapping device features to Plaspy fields.

- The protocol governs how the AT07 sends location, accelerometer and sensor telemetry to a remote server.
- Device identification and reporting intervals are carried by the reporting protocol so Plaspy can associate data with the correct tracker.
- Commands and configuration can be delivered via GPRS or SMS depending on device setup; the protocol describes how remote updates are exchanged.
- Dual server capability on the AT07 allows simultaneous reporting to Plaspy and a secondary server for redundancy or manufacturer services.
- OTA firmware updates and device memory behavior affect how and when the tracker transmits data and how stored points are flushed to the server.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a common endpoint and automatically determines the tracker protocol from incoming messages. When an AT07 is configured to report to Plaspy, users usually do not need to choose a protocol manually inside Plaspy because the platform analyzes the incoming connection and applies the appropriate handling automatically.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol so manual protocol selection is typically unnecessary if the device reports to the Plaspy endpoint
- If a device is configured to send to the Plaspy endpoint, the platform matches incoming messages to the correct device record by identifier and message pattern
- For dual server setups the AT07 can report to Plaspy while also reporting to a manufacturer or backup server without additional changes on the Plaspy side

## Transport and Connection Context

The AT07 can be pointed to a domain name or IP address and supports common GPRS transport options. For Plaspy integration you should configure the tracker to send its reporting traffic to the Plaspy endpoint and choose the transport the device firmware and your SIM support.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices may point to d.plaspy.com or 54.85.159.138 when setting the primary reporting endpoint
- All devices in Plaspy use the same port which simplifies configuration across different tracker models
- The AT07 supports sending GPRS data to an IP or domain name of your choice which allows directing traffic to Plaspy while keeping a secondary server configured
- SMS command support on the AT07 enables out of band configuration for devices that are not currently reachable over GPRS

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and supported transport modes; verify the tracker firmware level when diagnosing issues
- Hardware revisions or optional sensors such as fuel level or voice monitoring may change what data is present in reports
- Manufacturer default settings might point the device to a different server; confirm the live reporting endpoint when onboarding the device
- Selecting UDP versus TCP can affect delivery behavior and is determined by the device firmware and network conditions
- OTA updates can adjust protocol behavior or introduce new features that need to be validated against Plaspy expectations
- Always test a representative device in a controlled environment before rolling out large fleets to confirm behavior with Plaspy

## Why Protocol Understanding Matters

Understanding how the AT07 communicates helps ensure consistent reporting, accurate mapping of sensor data, and faster troubleshooting when connectivity or data integrity issues occur. A clear view of the communication context also helps operations teams plan for firmware updates and device lifecycle management.

- Proper protocol configuration ensures location and accelerometer events are delivered reliably to Plaspy
- Knowledge of available transports and endpoints speeds debugging of connectivity problems
- Mapping device sensors to platform fields avoids misinterpreting fuel or analog input readings
- Awareness of OTA behavior prevents unexpected changes in reporting after firmware updates
- Understanding dual server reporting helps maintain continuity while testing or switching backend systems

## Why Use Plaspy with This Protocol

Using the Totemtech AT07 with Plaspy provides a practical way to consolidate vehicle and asset telemetry into a single platform that handles protocol detection and standardizes incoming data. Plaspy receives reports at a dedicated endpoint and applies the appropriate parsing so organizations can focus on monitoring and operations rather than low level protocol handling.

Plaspy receives AT07 traffic at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the tracker protocol. Because Plaspy uses the same port for all supported devices, onboarding additional trackers is straightforward when devices are configured to report to the Plaspy endpoint.

To learn more about Plaspy and how it works with devices like the Totemtech AT07 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information on the manufacturer site http://www.totemtek.com/ since protocol support and firmware behavior can change over time.
