---
slug: /gosafe/g1rus/protocol
id: g1rus-protocol
sidebar_label: Protocol
title: Gosafe - G1RUS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Gosafe G1RUS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - Gosafe G1RUS protocol
  - Gosafe G1RUS GPS protocol
  - Gosafe G1RUS communication protocol
  - Gosafe G1RUS tracking protocol
  - G1RUS Plaspy
  - Gosafe tracker protocol
  - G1RUS GPS tracker
  - Gosafe telemetry protocol
  - G1RUS compatibility Plaspy
  - vehicle tracking G1RUS
---

# Gosafe - G1RUS Protocol

This page covers the public protocol context for using the Gosafe G1RUS tracker with Plaspy. It explains, at a high level, how the device reports position and telemetry to Plaspy and what parts of the communication flow are relevant when integrating and operating G1RUS devices on the platform.

Plaspy uses a shared connection model across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the G1RUS can vary by firmware version, hardware revision, and manufacturer implementation, so treat the information below as general protocol context rather than a firmware level specification.

## Protocol Overview

The G1RUS communicates telemetry and position data to a remote server using the device reporting modes supported by the manufacturer. The protocol governs how the tracker identifies itself, transmits GNSS fixes and events, and reports ancillary inputs such as accelerometer events, digital I/O, and optionally Bluetooth sensor data.

- Enables the tracker to send GNSS fixes and associated telemetry that Plaspy uses for mapping and history
- Conveys event-driven data such as accelerometer movement, digital input changes, and battery or power state
- Provides a way for the tracker to identify itself so Plaspy can associate incoming reports with the correct device record
- Supports multiple transport modes so the device can report reliably across different network conditions
- Allows conditional reporting and low power profiles to reduce cellular usage and preserve long-term battery life

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports on a shared endpoint and determines how to interpret those reports so the device can be used immediately in the platform. In most deployments the user does not need to select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens for tracker reports on a single well known server endpoint
- Plaspy automatically detects the tracker protocol when data arrives at the server
- Users typically configure the device to point to the Plaspy server and do not need manual protocol selection in the platform
- Proper device configuration and consistent reporting are the most important factors for automatic detection to succeed
- If a device variant supports multiple transport modes, ensure the device is set to use the chosen transport to reach the Plaspy endpoint

## Transport and Connection Context

The G1RUS supports common cellular transports and can be configured to report using the transport that best matches the network and power profile for the asset. When integrating with Plaspy, set the tracker to report to the Plaspy endpoint so incoming data is received and parsed by the platform.

- Plaspy server domain is d.plaspy.com and is available as the target host for device reporting
- Plaspy server IP is 54.85.159.138 for deployments that require a numeric target
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port
- The device may be configured using UDP or TCP on port 8888 depending on device support and the deployment needs
- Choose UDP for minimal overhead or TCP for reliability when the device and network support the selected transport

## Protocol Compatibility Notes

- Firmware revisions can change reporting formats, event behavior, and available features; confirm firmware release notes for device-specific details
- Hardware variants and optional modules such as LTE, 3G, or Bluetooth can alter available transports and telemetry
- Manufacturer provisioning options (APN, server address, transport) must be configured correctly for the device to reach Plaspy
- Devices using SMS reporting modes require different provisioning and may not behave identically to TCP/UDP reporting
- Validate compatibility for features you depend on such as FOTA, conditional reporting, and BLE sensor forwarding against official manufacturer documentation
- When updating firmware or swapping hardware variants, recheck reporting behavior to ensure Plaspy continues to detect and process the device correctly

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a reliable deployment, efficient troubleshooting, and predictable device behavior over long unattended lifetimes. Even when Plaspy automatically detects the protocol, knowing the transport and reporting characteristics reduces integration friction.

- Speeds initial setup by ensuring server address, transport, and reporting mode are configured correctly
- Helps diagnose connectivity issues by clarifying whether a problem is transport, network, or device configuration related
- Informs power and reporting profile choices that directly affect battery life and reporting cadence
- Facilitates integration of external sensors and I/O by understanding which telemetry fields the platform will receive
- Supports planning for firmware updates, FOTA behavior, and long term maintenance strategies

## Why Use Plaspy with This Protocol

G1RUS delivers long life, rugged construction, and flexible telemetry that align well with fleet and asset tracking needs. Using Plaspy with G1RUS provides organizations with a hosted endpoint that automatically recognizes compatible device reports and turns those messages into live maps, alerts, and historical reporting useful for geofencing, anti-theft workflows, route verification, and telemetry monitoring.

To learn more about how Plaspy works with trackers like the G1RUS, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware notes, and hardware variant information, verify details on the manufacturer site https://gosafesystem.com/.
