---
slug: /teltonika/fmb010/protocol
id: fmb010-protocol
sidebar_label: Protocol
title: Teltonika - FMB010 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB010 integration with Plaspy real time tracking and telemetry
keywords:
  - Teltonika FMB010 protocol
  - Teltonika FMB010 GPS protocol
  - Teltonika FMB010 Plaspy
  - GPS tracker communication
  - vehicle tracking protocol
  - Plaspy compatibility
  - OBD II tracker
  - BLE sensor telemetry
  - crash detection tracker
  - fleet tracking integration
---

# Teltonika - FMB010 Protocol

This page provides a public protocol overview for using the Teltonika FMB010 with Plaspy. It describes how the device communicates in general terms, what role the reporting protocol plays in delivering telemetry into Plaspy, and which connection settings are relevant for integration. The goal is to give fleet and technical teams the context needed to configure and verify reporting without exposing private implementation details.

The FMB010 is a compact OBD II tracker with BLE sensor support, an internal backup battery, and accelerometer based crash detection. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so details may differ between units and firmware releases.

## Protocol Overview

The tracker protocol is the device's method for packaging and sending telemetry to a remote server so the data can be consumed by Plaspy. For the FMB010 this includes location, OBD II vehicle telemetry, accelerometer events, and optional BLE sensor readings. The protocol lets the device identify itself to the server and deliver time stamped events and measurements that Plaspy uses for real time tracking, alerts, and historical reports.

- Enables transmission of GPS position and basic vehicle telemetry into Plaspy
- Carries accelerometer events such as crash alerts and movement traces
- Delivers BLE sensor measurements for temperature, humidity, magnet and movement
- Transmits OBD II derived metrics for eco driving and engine monitoring where available
- Provides identification and session information so Plaspy can associate data with the correct asset

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming tracker reports and applies automatic detection to determine the device protocol. When an FMB010 is pointed at the Plaspy endpoint and sends data, the platform assigns the incoming stream to the appropriate parser and device record without requiring a manual protocol selection in most deployments.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Plaspy uses port 8888 for all supported devices and automatically detects the tracker protocol
- Users typically do not need to select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint
- Proper device identification and reporting to the Plaspy host are the primary steps for successful automatic detection

## Transport and Connection Context

The FMB010 can be configured to use either UDP or TCP transport depending on device support and installer preference. When integrating with Plaspy, direct the device to the Plaspy endpoint using the shared connection settings so data arrives on the platform consistently.

- Device may be configured using UDP or TCP on port 8888
- Devices can point to the Plaspy server domain d.plaspy.com or to the IP address 54.85.159.138
- Plaspy uses the same port 8888 for all devices to simplify configuration and network rules
- Choose UDP for lighter weight reporting or TCP where session reliability is preferred, based on device capabilities and network environment
- Ensure any network firewalls or NAT rules allow outbound connections to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- FMB010 compatibility with Plaspy is based on the device sending standard telemetry types that the platform recognizes
- Firmware versions can change how certain events or telemetry fields are reported; validate behavior after firmware updates
- Hardware revisions or regional variants may slightly alter available sensor telemetry or supported transports
- Transport selection between UDP and TCP is a configuration choice that affects delivery semantics and network requirements
- BLE sensors and backup battery features provide additional telemetry but may require separate configuration steps on the device
- Always confirm any custom configuration or vendor specific settings with the official manufacturer documentation

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps installers and administrators ensure reliable reporting, troubleshoot connectivity issues, and align device configuration with Plaspy expectations. Clear protocol context shortens deployment time and reduces ambiguity when addressing event timing, missing data, or firmware differences.

- Helps confirm the device is sending the expected telemetry types to Plaspy
- Assists in diagnosing connectivity issues related to transport, DNS, or firewalls
- Supports planning for firmware updates that may change reported fields or event behavior
- Guides selection between UDP and TCP based on operational priorities and network constraints
- Enables better interpretation of alerts such as crash events or BLE sensor readings

## Why Use Plaspy with This Protocol

Using the Teltonika FMB010 with Plaspy gives fleets a fast path to real time location, basic vehicle telemetry, and event alerts without complex per device configuration. The FMB010’s OBD II form factor, internal backup battery, BLE sensor support, and accelerometer data combine to provide a concise telemetry set that Plaspy surfaces in dashboards, alerts, and reports for operational monitoring and incident response.

To learn more about Plaspy and how this tracker works with the platform visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information and firmware notes on the manufacturer site https://www.teltonika-gps.com/ before making deployment decisions.
