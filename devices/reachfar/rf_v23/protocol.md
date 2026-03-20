---
slug: /reachfar/rf_v23/protocol
id: rf_v23-protocol
sidebar_label: Protocol
title: Reachfar - RF-V23 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Reachfar RF V23 tracker and how it connects to Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Reachfar RF-V23 protocol
  - Reachfar RF V23 GPS protocol
  - Reachfar RF-V23 Plaspy
  - RF-V23 communication protocol
  - RF-V23 tracking protocol
  - Reachfar GPS tracker protocol
  - Plaspy device protocol
  - vehicle tracking RF-V23
  - asset tracker RF-V23
  - RF-V23 compatibility
---

# Reachfar - RF-V23 Protocol

This page documents the public protocol context for using the Reachfar RF-V23 tracker with the Plaspy platform. It explains how the device reports location and telemetry to Plaspy in high level, the role of the communication protocol in integration, and the shared Plaspy connection settings that are used for device reporting. The content focuses on public, non-sensitive information intended to help administrators and integrators understand how the RF-V23 communicates with Plaspy.

The RF-V23 is a rugged long life GPS tracker with GNSS, WiFi positioning and multi network cellular connectivity. Plaspy supports the RF-V23 using a shared connection endpoint and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so this page is a practical, public overview rather than a firmware reference.

## Protocol Overview

In general terms the tracker reporting protocol defines how the RF-V23 sends location fixes, device status and telemetry to a remote server so Plaspy can present live maps, alerts and historical data. The protocol acts as the vehicle for regularly scheduled position uploads, event driven reports (for example SOS or tamper), and status updates that Plaspy uses to maintain device state and dashboards.

- Carries GNSS, WiFi and LBS location data together with basic device telemetry such as battery and input state.
- Delivers event notifications for alarms, SOS, tamper and other status changes that trigger alerts in Plaspy.
- Enables periodic reporting and configurable upload intervals to balance timeliness and battery life.
- Allows the device to identify itself so Plaspy can associate incoming reports with the correct asset record.
- Supports supplemental uploads to improve coverage in intermittent network conditions by sending additional position fixes when available.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a single shared endpoint and port and uses the incoming data to identify the tracker protocol automatically. For RF-V23 users this means you typically do not need to manually choose a protocol inside Plaspy once the device is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server public IP is 54.85.159.138 for direct IP configuration.
- The port used for device reporting is 8888 and Plaspy uses this same port across supported trackers.
- Plaspy automatically detects the tracker protocol when the device sends reports to the Plaspy endpoint.
- In most cases the device only needs to be configured to point at the Plaspy domain or IP and use the correct transport type.

## Transport and Connection Context

The RF-V23 supports standard cellular transports and may be configured to use UDP or TCP depending on device firmware and settings. For reliable integration with Plaspy, administrators should confirm the device is pointed at the Plaspy reporting endpoint and the transport selection matches the unit configuration.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The reporting port for Plaspy is 8888 and all devices that send data to Plaspy use this port.
- The RF-V23 may be set to use either UDP or TCP on port 8888 depending on the unit and firmware capabilities.
- Device network and APN settings must allow outbound connections to the Plaspy endpoint over the chosen transport.
- Transport choice can affect delivery behavior under poor cellular coverage and should be selected according to deployment needs.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can alter how specific messages are formatted and which telemetry fields are present.
- Manufacturer configuration options such as SMS commands, monitor numbers or upload intervals can influence which reports are sent and when.
- Network transport selection (UDP vs TCP) can vary by firmware and may affect how the device retries or confirms uploads.
- Integration relies on the device being configured to report to d.plaspy.com or the Plaspy IP and port 8888.
- Always validate compatibility for a given device batch or firmware release against the manufacturer documentation.
- When in doubt, confirm device behavior using a controlled test device before wide deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the RF-V23 helps administrators and integrators set up devices correctly, troubleshoot reporting issues, and maintain long term reliability when connected to Plaspy. Even high level protocol awareness speeds resolution of configuration, connectivity and reporting issues.

- Ensures correct server, IP and port settings so devices reliably reach Plaspy.
- Helps choose appropriate transport and upload interval settings to balance timeliness and battery consumption.
- Assists in diagnosing why a device may not be appearing in Plaspy or why telemetry fields are missing.
- Supports planning for network edge cases such as intermittent coverage or roaming.
- Improves confidence when validating new firmware, hardware revisions or device batches before mass deployment.

## Why Use Plaspy with This Protocol

Pairing the RF-V23 with Plaspy provides organizations with an integrated way to collect location and device telemetry for fleet management, asset protection and remote equipment monitoring. Plaspy ingests position and status reports sent to d.plaspy.com or 54.85.159.138 on port 8888 and presents the data in dashboards, maps and alerting workflows. Because Plaspy uses the same port for all supported devices and automatically detects tracker protocols, setup is often straightforward once the RF-V23 is configured to report to the Plaspy endpoint.

Learn more about Plaspy and how it can manage RF-V23 devices on the main Plaspy website https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and configuration commands consult the official Reachfar documentation at https://www.reachfargps.com/ as manufacturer implementations and firmware can change over time.
