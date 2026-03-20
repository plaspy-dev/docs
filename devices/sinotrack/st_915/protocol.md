---
slug: /sinotrack/st_915/protocol
id: st_915-protocol
sidebar_label: Protocol
title: SinoTrack - ST-915 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the SinoTrack ST 915 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - SinoTrack ST 915
  - ST 915 protocol
  - SinoTrack protocol
  - ST 915 GPS protocol
  - ST 915 Plaspy
  - Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking protocol
  - asset tracker ST 915
  - GNSS GPRS communication
---

# SinoTrack - ST-915 Protocol

This page covers the public protocol context for using the SinoTrack ST-915 tracker with Plaspy. It explains how the device reports GNSS positions and telemetry to Plaspy, how you typically configure the unit to point at Plaspy endpoints, and what role the tracker communication protocol plays in successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a properly configured device reports in. Exact protocol behavior can vary with device firmware, hardware revision, and manufacturer implementation, so this page focuses on publicly available, non sensitive protocol context and practical integration considerations.

## Protocol Overview

The ST-915 communicates location and basic telemetry over GSM GPRS to a remote server. The device uses SMS commands for APN and server configuration so integrators can direct reports to Plaspy rather than or in addition to vendor services. The communication protocol defines how the tracker identifies itself, how position and status messages are packaged, and how the server receives usable data for mapping and reports.

- Enables the tracker to periodically or event driven send GNSS fixes and telemetry to a backend platform.
- Carries identification information so Plaspy can associate incoming messages with the correct device record.
- Transports essential telemetry such as timestamped coordinates, motion status, and basic device health indicators.
- Provides the structure that Plaspy needs to ingest, decode, and present location and history data.
- Is influenced by firmware settings and SMS configurable options that control reporting intervals and server target.

## How Plaspy Detects the Protocol

Plaspy receives reports from many tracker models on a shared endpoint and port and automatically identifies the incoming protocol so users normally do not need to select a protocol manually. When a SinoTrack ST-915 is configured to send data to Plaspy, the server recognizes the incoming messages and routes them to the correct device profile within the platform.

- Plaspy listens on a single port for all devices making setup simpler for integrators and field technicians.
- The Plaspy server domain for device reporting is d.plaspy.com which resolves to a public server endpoint.
- The Plaspy server IP address for reporting is 54.85.159.138 so devices may be pointed to either the domain or this IP.
- Plaspy automatically detects the tracker protocol once data arrives from a properly configured device.
- In typical setups you only need to configure the ST-915 to report to the Plaspy address and reporting should begin without selecting a protocol inside Plaspy.

## Transport and Connection Context

Transport choices can affect reliability and behavior depending on network conditions and device capabilities. The ST-915 supports GPRS reporting and is commonly configured via SMS to point to Plaspy. In practice the device can use either UDP or TCP when sending data to Plaspy depending on the tracker configuration and firmware support.

- The device may be configured to use UDP or TCP on port 8888 for reporting to Plaspy.
- Plaspy accepts device reports on port 8888 and uses the same port for all supported devices.
- Devices can be pointed at d.plaspy.com or directly at 54.85.159.138 when configuring the server address by SMS.
- Choosing UDP or TCP is typically done on the device side through SMS configuration and may affect retransmission and delivery behavior.
- Confirm the chosen transport mode matches the firmware options on your ST-915 and the expected behavior in your deployment.

## Protocol Compatibility Notes

- The ST-915 is compatible with Plaspy when configured to report to Plaspy endpoints via SMS server settings.
- Firmware revisions can change the exact message set and behavior; compatibility checks should include firmware version confirmation.
- Hardware revisions or optional firmware builds from the manufacturer can alter available features and transport options.
- Transport selection between UDP and TCP may be limited by firmware or carrier network behavior in your region.
- SMS based server configuration must be used carefully to ensure the correct APN and server values are set for your SIM and network.
- Validate any advanced feature requirements against the manufacturer documentation before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the ST-915 communicates helps ensure reliable reporting, accurate mapping in Plaspy, and faster troubleshooting when issues arise. A working familiarity with the protocol and transport options reduces integration time and improves operational confidence.

- Makes it easier to confirm a device is correctly pointed at Plaspy and using the expected transport.
- Helps troubleshoot missed reports, GPS accuracy issues, or incorrect device identification in Plaspy.
- Assists with optimizing reporting intervals to balance battery life and data freshness.
- Clarifies what to check on the device side when network or telemetry anomalies occur.
- Encourages coordinated checks of firmware version, SMS server string, and SIM/APN settings during commissioning.

## Why Use Plaspy with This Protocol

Using Plaspy with the SinoTrack ST-915 provides a straightforward path to real time tracking, history playback, and basic telemetry reporting for vehicles and assets. The ST-915’s long standby battery and rugged design make it suited to long deployments where reliable uplink to Plaspy is important for monitoring and recovery workflows. Because the device can be pointed to Plaspy with SMS commands, integration can often be completed without specialized provisioning hardware.

If you want to learn more about managing devices, reporting, and fleet features on Plaspy visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time; verify the latest device specific information and firmware documentation at the manufacturer site https://www.sinotrackgps.com/ before deployment.
