---
slug: /tzone/tz_bc08/protocol
id: tz_bc08-protocol
sidebar_label: Protocol
title: TZone - TZ-BC08 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the TZone TZ BC08 and how it communicates with Plaspy for device reporting and tracking
keywords:
  - TZone TZ BC08 protocol
  - TZone TZ BC08 GPS protocol
  - TZone TZ BC08 communication protocol
  - TZone TZ BC08 tracking protocol
  - TZone iBeacon tracker
  - TZone Bluetooth tracker
  - Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking Plaspy
  - Bluetooth beacon integration
---

# TZone - TZ-BC08 Protocol

This page covers the public protocol context for using the TZone TZ-BC08 tracker with Plaspy. It focuses on how the device communicates in a general, non sensitive way and what to expect when integrating this compact iBeacon based tracker with Plaspy for location and presence reporting.

The TZ-BC08 uses the iPhone iBeacon protocol over Bluetooth Low Energy for local broadcasts, and Plaspy compatibility assumes that the tracker is bridged or forwarded to the cloud in a supported configuration. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation, so verification against the device firmware and official documentation is recommended.

## Protocol Overview

The protocol for the TZ-BC08 governs how the device advertises identity and telemetry over Bluetooth Low Energy and how those broadcasts are made available to the cloud by a gateway or bridge. In Plaspy contexts the protocol role is primarily to enable identification, reporting of presence or location cues, and reliable forwarding of the tracker data to the Plaspy endpoint.

- Provides a consistent identifier and presence signal that can be associated with an asset or user when forwarded to Plaspy
- Enables adjustable broadcasting intervals and transmit power to balance responsiveness and battery life
- Allows gateways or smartphone apps to capture iBeacon broadcasts and forward structured reports to Plaspy
- Supplies the minimal telemetry and identity elements Plaspy needs to correlate a device to an account and display events
- Works alongside bridge devices that translate BLE beacons into TCP or UDP reports for cloud ingestion

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and uses automated detection to infer the reporting protocol when a device is correctly pointed to the Plaspy server. This means that end users generally do not need to select a protocol manually in Plaspy when the device or its gateway is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138
- The port is 8888 and this same port is used for all supported devices in Plaspy
- The device may be configured using UDP or TCP on port 8888 depending on the gateway or forwarding setup
- Plaspy automatically detects the tracker protocol when properly receiving reports at the shared endpoint
- Users normally ensure their gateway or forwarding app reports to d.plaspy.com on port 8888 to enable automatic detection

## Transport and Connection Context

The TZ-BC08 itself broadcasts over Bluetooth Low Energy, but practical cloud integration requires a transport that can reach Plaspy. That transport is typically provided by a gateway, smartphone, or other bridge which forwards beacon observations to the Plaspy endpoint over the network.

- BLE broadcasts are captured by a gateway or mobile device which then forwards data to Plaspy
- Devices or gateways may be pointed to d.plaspy.com or to 54.85.159.138 for cloud reporting
- The device may be configured using UDP or TCP on port 8888 by the forwarding component
- All devices in Plaspy use the same port so gateway configuration is simpler to standardize
- Choice of UDP or TCP depends on gateway capability and desired tradeoffs between latency and reliability

## Protocol Compatibility Notes

- The TZ-BC08 uses iBeacon BLE advertising which can be bridged to Plaspy by supported gateways or mobile apps
- Firmware revisions and hardware batches can change advertising fields and behavior so behavior may vary between units
- Manufacturer configuration options such as broadcast interval and transmit power affect battery life and range
- Some integrations require a gateway that converts BLE advertisements into TCP or UDP reports consumable by Plaspy
- Transport selection between UDP and TCP is performed on the gateway side and can affect delivery characteristics
- Always validate the forwarding setup and network reachability to d.plaspy.com on port 8888 when troubleshooting

## Why Protocol Understanding Matters

Understanding the TZ-BC08 communication protocol and how its BLE broadcasts are forwarded to Plaspy helps ensure a smooth setup, reliable event delivery, and effective troubleshooting for long term use.

- Ensures correct gateway or mobile forwarding configuration to reach d.plaspy.com on port 8888
- Helps tune broadcast interval and transmit power for optimal battery life and detection range
- Clarifies where responsibility lies between the BLE tracker and the network bridge during integration
- Enables faster diagnosis when presence events or reports do not appear in Plaspy
- Supports planning for deployment scale when many BLE devices are expected in a shared area

## Why Use Plaspy with This Protocol

Using the TZone TZ-BC08 with Plaspy provides a practical way to convert local iBeacon presence and proximity signals into cloud accessible events and tracking records. Organizations can take advantage of the tracker’s small form factor and configurable broadcasting to monitor assets, manage workflows, and capture presence data at scale when combined with gateway infrastructure.

If you want to learn more about Plaspy and how it can receive and process reports from iBeacon based trackers like the TZ-BC08, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance please verify information on the TZone website http://www.tzonedigital.com/ as firmware behavior and device implementation can change over time.
