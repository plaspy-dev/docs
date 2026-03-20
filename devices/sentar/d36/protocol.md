---
slug: /sentar/d36/protocol
id: d36-protocol
sidebar_label: Protocol
title: Sentar - D36 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Sentar D36 and how the device communicates with Plaspy for reliable child tracking
keywords:
  - Sentar D36 protocol
  - Sentar D36 GPS protocol
  - Sentar D36 communication
  - Sentar D36 Plaspy compatibility
  - Sentar D36 tracking protocol
  - Sentar kids watch protocol
  - D36 GPS tracker protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - GPS tracker communication
---

# Sentar - D36 Protocol

This page describes the public protocol context for using the Sentar D36 kids smart watch with Plaspy. It explains how the tracker communicates location and status information to Plaspy in general terms, and what to expect when configuring the D36 to report into the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on high level transport and compatibility guidance rather than device internals.

## Protocol Overview

At a high level, the D36 uses its cellular data link to send positioning (GPS, LBS, WiFi-assisted) and device telemetry to a remote server. The tracker protocol defines how the device identifies itself, when it reports, and which fields are included in each report so Plaspy can convert raw device data into map updates, alerts, and history.

- Enables the D36 to supply GPS, LBS and WiFi-assisted location updates to Plaspy for live tracking and history playback.
- Conveys device telemetry such as battery status, connectivity state, and basic sensor or heartbeat information required for reliable monitoring.
- Carries identifiers that let Plaspy correlate incoming device messages to the correct account and device record.
- Supports two-way communication paths used for remote configuration or device-triggered alerts where supported by the device firmware.
- Operates over standard network transports so Plaspy can receive and normalize data into its mapping and alerting workflows.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared ingestion endpoint and automatically matches incoming messages to a supported tracker protocol. When a D36 is configured correctly to report to Plaspy, the platform typically detects and parses the device records without requiring manual protocol selection in the interface.

- Plaspy listens for incoming device connections at d.plaspy.com and at the platform server address 54.85.159.138.
- All devices supported by Plaspy send their reports to the same port on the platform, simplifying configuration.
- Plaspy automatically detects the tracker protocol from the incoming traffic once messages reach the server, so manual protocol selection is usually not necessary.
- Proper device reporting configuration (correct server and transport) is the main requirement for automatic detection to succeed.
- If a device is not parsed automatically, reviewing device configuration and firmware revisions is the recommended first step.

## Transport and Connection Context

The D36 may be configured to use either UDP or TCP depending on device firmware and regional settings. For Plaspy integration, the platform offers a single port and shared endpoint that all supported devices use to send data, reducing configuration complexity for installers and administrators.

- The Plaspy server domain for device reporting is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- Plaspy receives tracker data on port 8888; this same port is used by all devices supported by Plaspy.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and operator preference.
- Pointing the device to the Plaspy endpoint (domain or IP) and correct transport is the primary step for enabling reporting to Plaspy.
- Network settings such as APN, cellular registration, and firewall rules must allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware variations across D36 units can change reporting frequency, available telemetry fields, or transport preferences; verify the firmware level when troubleshooting.
- Hardware revisions or band support differences may affect cellular connectivity and thus the device's ability to reach the Plaspy endpoint reliably.
- Manufacturer-side configuration commands or provisioning options may alter how the device identifies itself to the server; check official Sentar documentation for device-specific commands.
- Transport choice (UDP versus TCP) can influence message delivery behavior; ensure the device is set to the transport that matches network and firmware expectations.
- Always validate connectivity by confirming the device points to d.plaspy.com or 54.85.159.138 and uses port 8888.
- When in doubt, compare live device telemetry and connectivity behavior against the latest manufacturer notes before assuming a Plaspy issue.

## Why Protocol Understanding Matters

A practical understanding of the D36 communication protocol helps with initial setup, ongoing reliability, and efficient troubleshooting when devices do not appear in Plaspy as expected. Knowing the transport and reporting concepts reduces setup time and avoids common misconfigurations.

- Helps ensure the device is pointed to the correct Plaspy endpoint and transport so automatic detection can occur.
- Makes it easier to interpret device behavior such as missed reports, infrequent updates, or telemetry gaps.
- Clarifies which device-side settings (APN, transport, reporting interval) to check first when problems arise.
- Supports informed conversations with manufacturer support when firmware or hardware differences affect integration.
- Improves long term reliability by guiding correct provisioning and monitoring practices.

## Why Use Plaspy with This Protocol

Using the Sentar D36 with Plaspy provides parents and caregivers with a clear, centralized view of a child’s location, device status, and communication options. Plaspy converts the D36’s GPS, LBS and WiFi-assisted reports into live map views, configurable alerts, and history playback so caregivers can maintain situational awareness without complex networking work.

If you want to learn more about Plaspy and how the platform manages device reporting and alerts, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site at http://www.sentarsmart.com/ before final deployment.
