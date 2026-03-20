---
slug: /reachfar/rf_v34/protocol
id: rf_v34-protocol
sidebar_label: Protocol
title: Reachfar - RF-V34 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Reachfar RF V34 tracker and how it communicates with Plaspy for livestock monitoring
keywords:
  - Reachfar RF V34 protocol
  - RF V34 GPS protocol
  - Reachfar GPS tracker protocol
  - Plaspy compatible trackers
  - Reachfar RF V34 Plaspy
  - RF V34 communication protocol
  - RF V34 tracking protocol
  - livestock GPS tracker protocol
  - 2G GPRS tracker protocol
  - GPS tracker compatibility Plaspy
---

# Reachfar - RF-V34 Protocol

This page describes the public protocol context for using the Reachfar RF-V34 tracker with the Plaspy platform. It focuses on how the device communicates in general terms, how Plaspy receives and recognizes reports, and what configuration items are commonly involved for successful integration into Plaspy for livestock and remote asset tracking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior may vary by firmware version, hardware revision, and manufacturer implementation, so this document stays at the protocol context level and encourages verification against Reachfar documentation for firmware specific details.

## Protocol Overview

The RF-V34 uses cellular data to transmit location and telemetry information to a remote server. The device reporting protocol covers identification, location payloads gathered from GPS WiFi and LBS, battery and solar status, and basic operational telemetry that Plaspy ingests to present real time location, alerts, and historical logs.

- Enables the tracker to identify itself and deliver location and telemetry to the cloud platform.
- Carries GPS, WiFi and LBS location data so Plaspy can determine position quality and provide maps and reports.
- Transmits device health signals such as battery level and solar charging status for runtime planning.
- Supports event reporting for movement, geofence triggers, and periodic heartbeat updates.
- Acts as the link between on device sensing and Plaspy dashboards and notifications.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports at a single, shared endpoint and port and uses the content of those incoming connections to determine the tracker protocol automatically. In most deployments a correctly configured RF-V34 will begin reporting without the user needing to manually set a protocol inside Plaspy.

- Plaspy automatically detects the tracker protocol when a device reports to the Plaspy endpoint.
- Users generally do not need to select a protocol in Plaspy if the device is configured to report to the Plaspy server.
- Proper device identification and reporting intervals help Plaspy classify device messages for correct processing.
- Plaspy treats incoming connections consistently across supported devices so onboarding is simplified.
- When troubleshooting, confirming device reporting destination and transport is the first step.

## Transport and Connection Context

The RF-V34 transmits data over cellular GPRS using TCP/IP. The device may be configured to use either UDP or TCP on port 8888 depending on device support and configuration. For Plaspy compatibility, configure the device to point to the Plaspy server domain or IP and use the shared Plaspy port.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP available for direct configuration is 54.85.159.138.
- The port used by Plaspy for all supported devices is 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on local network and device settings.
- All devices in Plaspy use the same port which simplifies device setup and server routing.

## Protocol Compatibility Notes

- Firmware revisions can change message frequency, available telemetry fields, or the exact semantics of certain reports.
- Hardware revisions or regional variants may alter supported transport types or available positioning modes.
- Manufacturer side configuration tools or default settings may require adjusting APN, reporting destination, and transport type.
- Network environment and 2G coverage can affect how often the device successfully uploads data to Plaspy.
- Always validate reporting settings and device identifiers after a firmware update or when moving between regions.
- Confirm device registration and IMEI visibility in Plaspy after first reports to ensure proper device mapping.

## Why Protocol Understanding Matters

Understanding how the tracker protocol works helps administrators and integrators set up devices correctly, troubleshoot connection problems, and interpret the quality of location and telemetry data shown in Plaspy. Protocol awareness reduces onboarding time and improves long term reliability of tracked assets.

- Ensures correct destination and transport settings so reports reach Plaspy reliably.
- Helps interpret telemetry fields in Plaspy dashboards and decide appropriate reporting intervals.
- Aids troubleshooting when devices do not appear in Plaspy by narrowing issues to network, transport, or firmware.
- Supports informed decisions about battery and solar duty cycles based on how frequently data is sent.
- Guides verification steps after firmware upgrades or configuration changes.

## Why Use Plaspy with This Protocol

Using the RF-V34 with Plaspy provides a straightforward way to bring remote livestock and asset telemetry into a single platform for monitoring, alerts, and historical analysis. The RF-V34’s long battery life and solar charging make it well suited for distributed pasture deployments where frequent service visits are undesirable, while Plaspy handles ingestion and presentation of position and device telemetry.

To learn more about how Plaspy works with compatible trackers and to explore platform features, please visit https://www.plaspy.com. For the most current device specific protocol and firmware behavior, verify details with the manufacturer at https://www.reachfargps.com/ since protocol support and implementation can change over time.
