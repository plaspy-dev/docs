---
slug: /teltonika/fmm001/protocol
id: fmm001-protocol
sidebar_label: Protocol
title: Teltonika - FMM001 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMM001 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Teltonika FMM001 protocol
  - Teltonika FMM001 GPS protocol
  - Teltonika FMM001 Plaspy compatibility
  - FMM001 communication protocol
  - FMM001 tracking protocol
  - Teltonika GPS tracker protocol
  - OBD II telemetry Teltonika
  - CAT M1 OBD tracker
  - Bluetooth LE tracker integration
  - fleet management GPS protocol
---

# Teltonika - FMM001 Protocol

This page provides the public protocol context for integrating the Teltonika FMM001 with Plaspy. It explains how the device communicates at a high level, what role the device protocol plays in exchanging telemetry and events, and which Plaspy connection settings are used for reporting. The goal is to give practical, non-sensitive guidance to help with setup and verification rather than to reproduce manufacturer internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message contents can vary by firmware version, hardware revision, and manufacturer implementation, so users should confirm device specific details in official Teltonika documentation when necessary.

## Protocol Overview

At a high level, the FMM001 device protocol defines how the tracker identifies itself to a server, reports GPS and OBD II data, and transmits events such as ignition changes or accelerometer alerts. The protocol is the bridge between the device firmware and the Plaspy platform, enabling consistent ingestion of location, diagnostic, and sensor data for fleet monitoring and analytics.

- Enables device identification and secure routing of telemetry to a Plaspy server endpoint
- Carries GNSS position, OBD II parameters, accelerometer events, and BLE sensor states in repeatable reports
- Supports periodic reporting and event driven messages to capture trips, geofence events, and alarms
- Allows remote configuration and firmware management using manufacturer tools while operating with Plaspy reporting
- Provides a common mechanism for the FMM001 to work with third party platforms using the device network stack

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and uses the data it receives to determine the correct tracker protocol for parsing and processing. This automatic detection eliminates the need for manual protocol selection in most cases when the device is properly configured to report to Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Devices report to the Plaspy reporting port 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol when data arrives at the endpoint
- Typically users do not need to set a protocol type in Plaspy if the tracker points to the Plaspy endpoint and uses the expected transport

## Transport and Connection Context

Transport and connection settings control how the FMM001 delivers its protocol messages to Plaspy. The device can be configured to use either UDP or TCP on port 8888 depending on device configuration and network conditions. Use of DNS or direct IP both work for pointing the device to Plaspy.

- The device may be configured using UDP or TCP on port 8888
- Plaspy accepts device reports at d.plaspy.com or 54.85.159.138
- All devices in Plaspy use the same port for reporting
- Choose UDP for lightweight periodic telemetry or TCP for session oriented reliability depending on device support and network policies
- Confirm network firewall and APN settings allow outbound traffic to the Plaspy server and port

## Protocol Compatibility Notes

- Firmware variations can change which fields are reported or how events are encoded; always confirm compatibility for your firmware build
- Hardware revisions and optional feature sets (for example OBD II or BLE sensor support) may affect the available telemetry and configuration options
- Transport selection (UDP vs TCP) may change behavior for retransmission and session continuity
- Manufacturer tools such as FOTA, Teltonika Configurator, and the FMBT app are the authoritative configuration channels for firmware updates and device options
- Validate that the device reporting destination matches Plaspy settings prior to deployment
- When integrating at scale, test representative devices across firmware versions to catch behavioral differences

## Why Protocol Understanding Matters

Understanding how the FMM001 communicates helps ensure reliable setup, accurate data ingestion, and efficient troubleshooting when the device is used with Plaspy. Awareness of the protocol role reduces integration friction and helps teams spot configuration or network issues faster.

- Helps confirm the device is reporting to the correct Plaspy endpoint and port
- Aids troubleshooting for missing positions, telemetry gaps, or unexpected event reports
- Supports planning for firmware updates and feature enablement such as OBD II parameter reads and BLE sensor integration
- Improves expectations for battery and power management behavior driven by sleep modes and reporting intervals
- Enables smoother scale up of fleets by anticipating differences across hardware and firmware revisions

## Why Use Plaspy with This Protocol

Using the Teltonika FMM001 with Plaspy gives organizations a practical path to capture location, vehicle diagnostics, and sensor events in a unified fleet platform. The FMM001's OBD II capability, GNSS, accelerometer data, and BLE support make it a flexible tracker for applications like fleet monitoring, rental and leasing oversight, driver behavior analysis, and insurance telematics. Plaspy's shared endpoint approach simplifies device onboarding by centralizing reporting to a single server address and port while automatically detecting the tracker protocol.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device capabilities, firmware details, and configuration guides verify information on the manufacturer site https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time.
