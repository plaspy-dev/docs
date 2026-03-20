---
slug: /concox/jm_lg01/protocol
id: jm_lg01-protocol
sidebar_label: Protocol
title: Concox - JM-LG01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Concox JM-LG01 and how it communicates with Plaspy for reliable GNSS tracking and telemetry
keywords:
  - Concox JM-LG01 protocol
  - JM-LG01 GPS protocol
  - Concox tracker Plaspy compatibility
  - JM-LG01 communication protocol
  - JM-LG01 tracking protocol
  - Concox GPS tracker protocol
  - Plaspy device protocol
  - asset tracker protocol
  - fleet tracker JM-LG01
  - telemetry protocol JM-LG01
---

# Concox - JM-LG01 Protocol

This page describes the public protocol context for using the Concox JM-LG01 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non-sensitive, implementation-agnostic terms so you can understand the connectivity and integration expectations for long-term asset tracking.

The JM-LG01 is a portable, Plaspy compatible GNSS tracker designed for long battery life, tamper-aware telemetry, and minimal installation effort. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol; exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page aims to explain the general communication role rather than firmware specific internals.

## Protocol Overview

At a high level, the device protocol is the set of messages and conventions the JM-LG01 uses to report location, status, and alarms to a cloud endpoint. The protocol ensures that Plaspy receives usable fixes, telemetry such as battery and tamper state, and event notifications so the platform can present real-time location and historical playback.

- Enables the tracker to report GNSS fixes and supplemental positioning data to Plaspy for real-time monitoring.
- Carries telemetry such as battery level, movement detection, and tamper alerts so operations teams can act on device state.
- Provides event signaling for alarms and geo-fence breaches so Plaspy can trigger notifications and workflows.
- Supports intermittent connectivity by allowing local logging on the device until network connectivity is restored.
- Identifies the device to the cloud so Plaspy can associate incoming messages with the correct asset record.

## How Plaspy Detects the Protocol

Plaspy receives inbound traffic on a shared endpoint and automatically identifies the device protocol so users typically do not need to select a protocol manually. Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection and successful onboarding.

- Plaspy listens on a single shared endpoint for devices: d.plaspy.com and the public server address 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol for supported devices.
- When a JM-LG01 is configured to report to the Plaspy endpoint, Plaspy uses the incoming telemetry and device identification fields to match the device to an account record.
- Users normally configure the tracker to report to the Plaspy endpoint and do not need to choose a protocol inside Plaspy.
- If a device does not appear, verify network settings, APN and that the tracker is pointed to the correct Plaspy host and port.

## Transport and Connection Context

The JM-LG01 supports standard cellular transport options and can be configured to use either UDP or TCP to reach the Plaspy endpoint. Connection type is often selectable on the device or determined by firmware behavior and cellular network conditions.

- Devices may be configured to use UDP or TCP on port 8888 depending on device firmware and configuration.
- The Plaspy server endpoint information for device reporting is d.plaspy.com and the server IP 54.85.159.138 on port 8888.
- All Plaspy supported devices use the same port which simplifies device provisioning and fleet scale deployments.
- Confirm the device APN and SIM configuration so the tracker can establish cellular connectivity and forward messages to the Plaspy endpoint.
- For devices that support both transports, choose the transport that best matches your network reliability and battery profile.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and behavior; always validate compatibility against the installed firmware release.
- Hardware revisions may introduce different sensors or telemetry fields that affect how events are reported.
- Manufacturer side settings and region-specific variants can modify default transport or reporting intervals.
- Transport selection (UDP vs TCP) can affect delivery characteristics and should match the device configuration.
- Local logging and retransmission behavior may differ between firmware builds and influence how historical data is recovered.
- When in doubt, review official Concox documentation for device specific configuration options before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a reliable setup, predictable battery life, and accurate event handling when you integrate JM-LG01 devices with Plaspy. A basic grasp of protocol role and transport choices reduces troubleshooting time and improves operational outcomes.

- Helps diagnose connectivity issues by confirming the tracker is pointed at the correct Plaspy endpoint and port.
- Ensures alarms and tamper events are arriving as expected so security workflows remain effective.
- Guides power profile and reporting interval choices to balance battery life and location freshness.
- Supports effective firmware management by understanding how changes may affect reported telemetry.
- Improves integration planning when combining JM-LG01 data with other telemetry sources in Plaspy.

## Why Use Plaspy with This Protocol

Using the JM-LG01 with Plaspy provides teams with long-term, low-maintenance GNSS tracking that combines precise location, tamper detection, and extended battery life for unpowered assets. Plaspy ingests the device’s location and telemetry so operations and security teams can use real-time monitoring, historical route playback, and configurable alerts to improve asset visibility and recovery workflows.

To learn more about Plaspy and how the platform manages device connectivity and fleet scale deployments visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.iconcox.com/.
