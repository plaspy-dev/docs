---
slug: /lk_gps/lk880/protocol
id: lk880-protocol
sidebar_label: Protocol
title: LK-GPS - LK880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the LK GPS LK880 showing how the device communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - LK-GPS LK880 protocol
  - LK880 GPS tracker
  - LK-GPS protocol Plaspy
  - LK880 communication protocol
  - LK880 tracking protocol
  - Plaspy device integration
  - pet GPS tracker protocol
  - tracker UDP TCP transport
  - geo fence tracking Plaspy
  - GPS LBS tracker compatibility
---

# LK-GPS - LK880 Protocol

This page outlines the public protocol context for using the LK-GPS LK880 tracker with the Plaspy platform. It summarizes how the LK880 — a 4G waterproof pet GPS tracker and remote training controller with GPS and LBS positioning, geo fence support, blind zone reporting, historical track, and safety alerts — communicates with a centralized tracking server in everyday deployments.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this guide focuses on the public connection and compatibility context rather than firmware specific internals.

## Protocol Overview

The communication protocol of the LK880 defines how the device reports telemetry, location, and event data to a server and how the server can send commands or queries back when supported. At a high level, the protocol enables reliable delivery of position updates, health and alarm reports, and remote control signals for features such as geo fence alerts and training functions.

- Reports device identity and basic telemetry so Plaspy can associate messages with the correct asset
- Transmits location information derived from GPS and LBS to produce usable tracking points
- Carries event notifications such as geo fence triggers, low battery alerts, and displacement reports
- Supports remote control or query operations where the hardware and firmware expose command capabilities
- Facilitates historical track retrieval or platform mode query positioning if the device supports those functions

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and port and uses that stream to determine which tracker protocol a device is using. When a properly configured LK880 reports to the Plaspy endpoint, the platform will identify the format and route data to the correct processing pipeline without requiring manual selection by the user.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting
- The port is 8888 and Plaspy accepts device connections on this port
- The device may be configured using UDP or TCP on port 8888 depending on device support and settings
- All devices in Plaspy use the same port which simplifies device configuration and onboarding
- Plaspy automatically detects the tracker protocol when the device is sending data to the configured Plaspy endpoint

## Transport and Connection Context

Understanding transport and connection settings is essential for getting the LK880 to communicate reliably with Plaspy. The LK880 can use cellular data to reach the internet and then send its reports to the configured server address and port; the method used (UDP or TCP) depends on the device settings and firmware.

- Devices may point to the Plaspy reporting endpoint by domain using d.plaspy.com or by numeric IP using 54.85.159.138
- The device may be configured using UDP or TCP on port 8888 for sending telemetry and event messages
- Port 8888 is the shared port used by Plaspy for all supported trackers which keeps configuration uniform
- Network reliability, NAT, and carrier behavior can affect whether UDP or TCP is preferable for a given SIM and environment
- For remote commands or two way interactions, confirm the device firmware supports the desired transport mode

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or event behavior; verify the device firmware level when troubleshooting
- Hardware revisions or regional SKUs may have slightly different feature sets such as training output options or sensor sets
- Manufacturer configuration menus may allow selecting UDP or TCP transport and the reporting server; ensure d.plaspy.com or 54.85.159.138 and port 8888 are entered as required
- Geo fence, historical track, and blind zone supplementary reporting behavior depend on device firmware and settings
- Always validate that the tracker is actually transmitting to the Plaspy endpoint and that the active SIM has data connectivity
- When in doubt, cross reference behavior with the manufacturer documentation to confirm supported features for your device revision

## Why Protocol Understanding Matters

A practical understanding of the LK880 communication protocol helps ensure reliable setup, effective troubleshooting, and predictable long term operation when the device is used with Plaspy. Knowing the role of reporting, transport, and firmware differences reduces time spent diagnosing connectivity and data issues.

- Faster diagnosis when location updates are missing or event alerts are not seen in Plaspy
- Clearer guidance for selecting UDP or TCP based on network and device capabilities
- Better insight into why some functions such as remote training control or blind zone reports behave differently across firmware versions
- Ability to confirm that the device is sending to the correct Plaspy endpoint and port during onboarding
- Improved long term reliability by aligning device configuration with platform expectations

## Why Use Plaspy with This Protocol

Using the LK880 with Plaspy gives organizations and pet owners a centralized way to receive location updates, monitor health and activity, and receive alerts for geo fence breaches, low battery, or displacement. Plaspy’s platform-side handling of multiple device protocols and unified port configuration reduces the complexity of operating mixed fleets of devices.

If you want to learn more about Plaspy and how the platform integrates with devices such as the LK-GPS LK880, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer site at https://www.lk-gps.com as those details can change over time.
