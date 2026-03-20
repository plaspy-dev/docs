---
slug: /lk_gps/lk770/protocol
id: lk770-protocol
sidebar_label: Protocol
title: LK-GPS - LK770 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for LK GPS LK770 showing how the tracker communicates with Plaspy and connection requirements
keywords:
  - LK-GPS LK770 protocol
  - LK-GPS LK770 GPS protocol
  - LK-GPS LK770 protocol for Plaspy
  - LK-GPS LK770 communication protocol
  - LK-GPS LK770 tracking protocol
  - LK-GPS tracker protocol
  - LK770 Plaspy compatibility
  - vehicle tracking LK770
  - fleet tracking LK770
  - Plaspy tracker compatibility
---

# LK-GPS - LK770 Protocol

This page provides a public, protocol-oriented overview for using the LK-GPS LK770 tracker with Plaspy. It focuses on the communications context that matters for reporting, connectivity, and successful integration with the Plaspy platform without exposing proprietary or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact behavior can vary between firmware versions, hardware revisions, and manufacturer implementation, so this page emphasizes general protocol context and practical considerations for integration and troubleshooting.

## Protocol Overview

The protocol used by the LK770 defines how the tracker identifies itself to a server, transmits GNSS position and telemetry, and receives basic remote commands or configuration acknowledgements as permitted by the device and its firmware. In the Plaspy context the protocol is the bridge between the device's telemetry and the platform services that record and present location and status information.

- Enables the LK770 to send periodic and event driven location reports to a remote server
- Conveys device identity and status so Plaspy can associate data with the correct asset
- Transmits telemetry such as GPS coordinates, motion or vibration alerts, and alarm signals
- Supports configuration and query pathways available via SMS or over the cellular data channel depending on device settings
- Operates over the device's cellular link and relies on the firmware implementation for timing, formats, and supported messages

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common endpoint and port and is designed to identify device reporting formats automatically. When an LK770 is configured correctly to report to Plaspy, the platform will attempt to recognize the tracker protocol and process incoming messages so the device appears in the user account without manual protocol selection.

- Plaspy uses the shared server endpoint d.plaspy.com and listens for device reports
- The Plaspy server IP for device reporting is 54.85.159.138 and the service uses port 8888
- All devices in Plaspy use the same port so users do not need to configure unique ports per device
- If the LK770 is pointed to the Plaspy endpoint and the cellular link is active, Plaspy will detect the tracker protocol automatically
- Users typically only need to set the device reporting address and transport type on the tracker side for discovery to occur

## Transport and Connection Context

Connection transport determines how the LK770 sends its reports to Plaspy. The tracker may be configured to use either UDP or TCP on the same port Plaspy listens on. Understanding transport options helps with firewall configuration, NAT behavior, and ensuring reliable message delivery for your deployment.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices
- The Plaspy reporting endpoint can be set to d.plaspy.com or the server IP 54.85.159.138
- Plaspy uses port 8888 for all device reporting so the same outbound port is used across tracker models
- Select transport based on device capabilities and network characteristics; some networks handle UDP and TCP differently
- Ensure network routing and firewalls allow outbound connections to d.plaspy.com on port 8888 for the tracker to report successfully

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message timing, supported features, and configuration commands; always confirm the firmware version when diagnosing compatibility issues
- Hardware revisions or variant models may implement slightly different behaviors even if marketed under the same model name
- Transport selection (UDP vs TCP) can affect delivery semantics and should match the device configuration and network environment
- SMS configuration or local setup methods are often supported in addition to data channel reporting; verify supported configuration workflows for the LK770
- Plaspy detects the protocol automatically when the device reports to the configured endpoint but validating device identity and initial messages can speed up troubleshooting
- Consult the manufacturer documentation for any manufacturer-specific parameters or optional features that may affect reporting

## Why Protocol Understanding Matters

Understanding the LK770 communication protocol and how it interacts with Plaspy helps ensure reliable setup, accurate location reporting, and effective troubleshooting during deployment and operation.

- Helps confirm the device is pointed at the correct Plaspy endpoint and transport settings
- Speeds diagnosis of connectivity issues such as blocked ports or incorrect server addresses
- Clarifies what data the device will report and what Plaspy will record for monitoring and alerts
- Guides decisions about firmware updates, feature configuration, and long term maintenance
- Reduces downtime by aligning device settings with platform expectations before rolling out at scale

## Why Use Plaspy with This Protocol

Using the LK770 with Plaspy provides a practical path to vehicle visibility and operational oversight. The LK770's compact wired design, built in GNSS and cellular connectivity, and safety features such as SOS and vibration alarms make it well suited for car and motorcycle tracking. When configured to report to Plaspy, telemetry from the tracker can be consolidated, visualized, and used for alerts and history playback to support fleet management, asset protection, and incident response.

If you want to learn more about Plaspy and how it integrates with devices like the LK770, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance, verify current information with the official LK GPS documentation at https://www.lk-gps.com.
