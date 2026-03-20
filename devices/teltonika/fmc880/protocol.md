---
slug: /teltonika/fmc880/protocol
id: fmc880-protocol
sidebar_label: Protocol
title: Teltonika - FMC880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMC880 integration with Plaspy including connection settings and compatibility notes
keywords:
  - Teltonika FMC880 protocol
  - FMC880 GPS protocol
  - Teltonika FMC880 Plaspy
  - FMC880 communication protocol
  - Teltonika GPS tracker protocol
  - FMC880 fleet tracking
  - Teltonika FMC880 compatibility
  - FMC880 BLE sensors
  - FMC880 dual band GNSS
  - FMC880 fleet management
---

# Teltonika - FMC880 Protocol

This page describes the public protocol context for using the Teltonika FMC880 tracker with Plaspy. It explains how the device communicates in broad, non sensitive terms, and highlights the connection settings and compatibility considerations relevant when integrating the FMC880 with Plaspy.

The FMC880 is a rugged battery mounted tracker with 4G LTE Cat 1 and 2G fallback, dual band GNSS for higher positioning precision, and Bluetooth Low Energy support for external sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behaviour may vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The device protocol is the set of messages and reports the FMC880 sends and receives to provide location, telemetry, and sensor data to a server. In practice, Plaspy receives GNSS fixes, telemetry from the internal sensors, and optional BLE sensor data reported by the FMC880, then maps those reports into platform events and history.

- Enables the FMC880 to establish a data session and transmit GNSS and telemetry to Plaspy
- Carries device identification data so Plaspy can associate reports with the correct asset
- Conveys sensor readings such as BLE temperature or movement events for monitoring and alerts
- Supports periodic location updates and event driven messages for geofences, ignition changes, and motion
- Allows downlink and remote configuration flows where the device and network support server initiated commands
- Provides the necessary metadata for Plaspy to present history, alerts, and reports

## How Plaspy Detects the Protocol

Plaspy operates a shared endpoint and port for incoming tracker data and performs automatic detection of the device protocol when data arrives. In most cases users do not need to select a protocol inside Plaspy if the FMC880 is configured to report to the platform endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address for reporting is 54.85.159.138
- Devices should be pointed to the Plaspy endpoint and port to enable automatic protocol detection
- Plaspy automatically detects the tracker protocol once the device is sending data to the shared endpoint
- Manual protocol selection in the platform is typically unnecessary when the tracker is correctly configured to report
- Detection covers common telemetry types such as GNSS position, motion status, and BLE sensor reports

## Transport and Connection Context

The FMC880 can be configured to use standard transport methods for sending telemetry to a remote server. Plaspy accepts reports over the shared port used by all supported devices, and the FMC880 may be set up to use either UDP or TCP depending on the device configuration and network conditions.

- The device may be configured using UDP or TCP on port 8888
- Plaspy listens on port 8888 for device connections and all devices supported by Plaspy use the same port
- Devices can point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138
- Choice of TCP versus UDP can affect delivery semantics and depends on FMC880 configuration and cellular network behavior
- Ensure APN and internet connectivity are properly configured on the device so it can reach the Plaspy endpoint
- Firewall rules should allow outbound connections to the Plaspy endpoint and inbound responses as required by the transport

## Protocol Compatibility Notes

- Firmware differences across FMC880 units can change available features or message fields; verify firmware release notes for device specific behavior
- Hardware revisions and optional variants such as gyro enabled units or regional cellular variants may affect the set of telemetry reported
- BLE sensor availability depends on the configured firmware image and connected peripheral support
- Transport selection between UDP and TCP can be constrained by network policies and regional carrier behavior
- Plaspy uses the same port for all supported devices which simplifies configuration but confirm the device points to the correct endpoint
- Always validate integration details against the official device documentation and the carrier settings used in a deployment
- Regional variants mean cellular band support differs by market; confirm the unit supports required bands for reliable connectivity

## Why Protocol Understanding Matters

Understanding how the FMC880 communicates at a protocol level helps when setting up devices, diagnosing delivery issues, and planning for operational scale. A clear grasp of reporting intervals, transport choice, and available telemetry ensures accurate mapping of device data into Plaspy workflows and alerts.

- Speeds troubleshooting when a device does not appear in Plaspy or is missing expected telemetry
- Helps choose the right transport configuration for reliable reporting in your operating region
- Informs firmware update planning and feature enablement such as BLE sensor forwarding or gyro events
- Supports correct mapping of sensor fields to platform alarms and reporting thresholds
- Reduces deployment time by ensuring device settings match Plaspy endpoint and port requirements
- Improves long term reliability by clarifying how power, reporting frequency, and sensor sampling interact with platform expectations

## Why Use Plaspy with This Protocol

Using the FMC880 with Plaspy provides a practical solution for fleets and asset owners who need robust position accuracy, resilient cellular connectivity, and flexible sensor monitoring. Plaspy receives the device reports, converts them into platform events, and supplies visibility and operational tools such as live tracking, history playback, geofence alerts, and sensor based rules without requiring per device port configuration.

To learn more about how Plaspy works with rugged trackers like the FMC880 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer documentation at https://www.teltonika-gps.com/ as device support and firmware features can change over time.
