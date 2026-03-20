---
slug: /totemtech/at09/protocol
id: at09-protocol
sidebar_label: Protocol
title: Totemtech - AT09 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Totemtech AT09 and how the device communicates with Plaspy for reliable vehicle and asset tracking
keywords:
  - Totemtech AT09 protocol
  - Totemtech AT09 GPS protocol
  - Totemtech AT09 communication protocol
  - Totemtech AT09 tracking protocol
  - Totemtech AT09 Plaspy compatibility
  - Totemtech GPS tracker protocol
  - AT09 fleet tracking protocol
  - Plaspy tracker protocol
  - vehicle tracking AT09
  - GPS tracker Plaspy compatibility
---

# Totemtech - AT09 Protocol

This page describes the public protocol context for using the Totemtech AT09 GPS tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what role the tracker reporting protocol plays in telemetry delivery, and how Plaspy receives and interprets those reports. The AT09 is a feature rich tracker with tire pressure monitoring, fuel and temperature sensor support, multiple serial ports, dual server reporting, accelerometer monitoring, and OTA update capability, and those capabilities are exposed to a server through the device reporting protocol.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is sent to the Plaspy endpoint. Totemtech AT09 devices may be configured to report over UDP or TCP to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 on port 8888. All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation so consult the device maker for firmware specific details.

## Protocol Overview

The AT09 reporting protocol is the mechanism the device uses to transmit location, sensor telemetry, and status events to a remote server such as Plaspy. The protocol determines how the tracker identifies itself, how sensor values are encoded, and how periodic or event driven reports are transmitted. On Plaspy the protocol acts as the bridge between raw device reports and usable fleet or asset data.

- Enables delivery of GPS position, movement status from the 3 axis accelerometer, and sensor values such as tire pressure fuel level and temperature.
- Carries device identification and status metadata so the Plaspy platform can associate incoming messages with the correct asset.
- Supports both periodic telemetry and event driven messages for alarms, SOS presses, power events, and movement detection.
- Accommodates external inputs such as fuel sensor readings and serial device data forwarded via the tracker.
- Works with the device dual server reporting feature so the AT09 can transmit to Plaspy alongside a secondary endpoint if configured.
- Allows over the air updates and configuration changes to be applied when supported by the device firmware.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically determines the tracker protocol from the incoming data stream. Because Plaspy uses a consistent network address and port for all devices, most users do not need to choose a protocol manually inside the platform when their device is correctly configured to report to Plaspy.

- Plaspy listens on port 8888 for all supported devices and protocols.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or to the IP address 54.85.159.138.
- Both UDP and TCP reporting are accepted depending on device capabilities and configuration preferences.
- When the AT09 is configured to report to the Plaspy endpoint, Plaspy will automatically detect the protocol and map incoming telemetry to the device record.
- Manual protocol selection inside Plaspy is generally unnecessary if the tracker reports correctly to the shared endpoint.

## Transport and Connection Context

The Totemtech AT09 supports flexible transport options for sending data to remote servers. Transport selection and device network settings determine whether the tracker uses UDP or TCP, and how it reaches the Plaspy endpoint. This section summarizes the connection context without delving into device specific packet formats.

- The AT09 may be configured to use UDP or TCP on port 8888 depending on device firmware and user configuration.
- Devices may be pointed to the domain name d.plaspy.com or the server IP 54.85.159.138 as the Plaspy endpoint.
- Plaspy uses the same port 8888 for all devices to simplify setup and routing on the platform side.
- Transport choice can affect delivery behavior for occasional packet loss and for large or frequent payloads.
- Many installations use TCP for reliable delivery and UDP where lower latency or simpler stack behavior is preferred.

## Protocol Compatibility Notes

- Firmware versions can change message behavior and supported fields so confirm the AT09 firmware level when validating compatibility.
- Hardware revisions or optional I O modules may expose additional sensors or ports that require device side configuration to report values.
- Dual server reporting can be useful for redundancy but verify server destination ordering and payload differences when using multiple endpoints.
- Transport selection UDP versus TCP should match the device configuration and any network constraints such as NAT or firewall rules.
- Manufacturer configuration commands or SMS based settings may be required to enable reporting to a remote endpoint such as Plaspy.
- Always validate which sensor channels and serial interfaces are enabled by default and which require explicit activation.

## Why Protocol Understanding Matters

A practical understanding of the AT09 communication protocol helps with initial setup, ongoing troubleshooting, and ensuring reliable telemetry delivery to Plaspy. Knowing what the device sends and when it sends it makes it easier to diagnose connectivity issues, map sensor channels, and apply sensible device configuration.

- Faster setup by confirming device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport.
- Quicker troubleshooting when GPS, accelerometer, or sensor values are not appearing as expected on Plaspy.
- Better mapping of telemetry fields such as tire pressure fuel sensors and temperature channels to Plaspy assets and dashboards.
- Informed decisions about transport and retry behavior based on installation network conditions.
- Easier coordination with Totemtech support when firmware specific behavior or OTA updates are needed.

## Why Use Plaspy with This Protocol

Using the Totemtech AT09 with Plaspy provides a practical way to centralize location and sensor telemetry for fleet or asset monitoring. The AT09 exposes multiple telemetry types that Plaspy ingests and presents as structured data, enabling visibility into vehicle status, fuel levels, tire pressure, temperature conditions, and historical traces for operational insight.

Plaspy simplifies integration by accepting reports on a single port and automatically detecting the tracker protocol, removing the need for manual protocol selection when the device is correctly pointed to the Plaspy endpoint. To learn more about Plaspy and how it can work with Totemtech devices visit https://www.plaspy.com. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time so please verify the latest AT09 protocol and firmware information on the Totemtech official website http://www.totemtek.com/
