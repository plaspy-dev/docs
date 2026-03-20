---
slug: /topshine/2fd_100/protocol
id: 2fd_100-protocol
sidebar_label: Protocol
title: TopShine - 2FD-100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopShine 2FD-100 GPS tracker and how it communicates with Plaspy for tracking and telemetry
keywords:
  - TopShine 2FD-100 protocol
  - TopShine 2FD-100 GPS protocol
  - TopShine 2FD-100 protocol for Plaspy
  - TopShine 2FD-100 communication protocol
  - TopShine 2FD-100 tracking protocol
  - TopShine 2FD-100 Plaspy compatibility
  - TopShine GPS tracker protocol
  - 2FD-100 OBD2 tracker protocol
  - TopShine vehicle tracking protocol
  - 2FD-100 telemetry integration
---

# TopShine - 2FD-100 Protocol

This page provides a public protocol overview for the TopShine 2FD-100 and how it communicates with Plaspy. It focuses on the high level communication context required to route position updates, alarms, and telemetry from the device to Plaspy while drawing on the 2FD-100 product description as the factual grounding. The 2FD-100 is a two way OBD2 GPS tracker and smart 4G car alarm engineered for vehicle security, two way voice, WiFi hotspot support, and rich telemetry for fleet and passenger vehicle use.

Plaspy uses shared connection settings for supported devices and automatically detects tracker protocols when devices report to the Plaspy endpoint. For the 2FD-100 this means the device can be pointed to Plaspy using the same host and port used across the platform and Plaspy will attempt to identify the incoming protocol automatically. Exact protocol behavior can still vary by firmware version, hardware revision, and manufacturer implementation, so configuration and behavior should be validated against current device documentation and firmware notes.

## Protocol Overview

The protocol of the 2FD-100 defines the public facing behavior used to report GPS positions, alarms, input states, and telemetry to a remote server such as Plaspy. It governs how the device presents identifying information, periodic location updates, and event driven messages so that a fleet platform can translate those messages into usable vehicle state and history.

- Enables periodic and event driven position reporting so Plaspy can display live location and playback history.
- Carries alarm and status events such as crash, overspeed, geofence, SOS, and ignition changes for alerting and workflows.
- Transmits telemetry and accessory states for integrations like fuel sensors, door inputs, and two way voice or camera monitoring.
- Provides device identity and session information that allows Plaspy to associate incoming data with a specific 2FD-100 unit.
- Supports command and response exchanges for remote control features when the device firmware exposes those functions.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and uses that common entry point to identify which tracker protocol each device speaks. When a 2FD-100 is configured to report to Plaspy, the platform will automatically attempt to match incoming traffic to a supported protocol so manual protocol selection is normally not required on the Plaspy side.

- Plaspy listens on a single platform port and automatically detects the tracker protocol for incoming connections.
- Devices configured to report to the Plaspy endpoint are typically not required to set a protocol option within Plaspy manually.
- Successful detection depends on the device sending recognizable identifying information and messages to the Plaspy endpoint.
- For the 2FD-100, make sure the device points to the Plaspy server and uses a supported transport so the platform can identify the protocol.
- If detection does not occur, check device firmware, manufacturer configuration guides, and reporting settings before contacting platform support.

## Transport and Connection Context

Connection setup is a separate layer from the protocol itself. The 2FD-100 uses its 4G/GSM modem and can be configured to send data over either UDP or TCP on the shared Plaspy port. For Plaspy the public server endpoint information is a required configuration target for the device so telemetry reaches the platform reliably.

- Plaspy server host name is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy uses port 8888 for all supported devices and connections.
- The 2FD-100 may be configured to use either UDP or TCP on port 8888 depending on device support and operator preference.
- Ensure device outbound connectivity to port 8888 is allowed by any cellular routing or intermediate firewalls.
- Use the Plaspy server host name or the provided IP for device configuration according to the device manual and network environment.

## Protocol Compatibility Notes

- Compatibility can be affected by device firmware version; newer or older firmware may change message timing or available fields.
- Hardware revisions or optional accessories can alter available telemetry and input reporting behavior.
- Manufacturer configuration defaults may point devices to the vendor platform out of the box; change reporting target to Plaspy when integrating.
- Transport selection between UDP and TCP can affect delivery characteristics but not the high level ability to report positions.
- Confirm which remote control commands and alarm inputs are exposed by the firmware before relying on them for operational workflows.
- Validate integration details against TopShine documentation when planning wide deployments or critical features.

## Why Protocol Understanding Matters

Understanding the communication protocol for the 2FD-100 helps ensure reliable setup, efficient troubleshooting, and predictable behavior when the device is used with Plaspy. A clear grasp of how the device reports data and how Plaspy ingests it reduces integration time and improves operational confidence.

- Faster identification of configuration errors such as incorrect host, IP, or transport settings.
- More effective troubleshooting of missed position updates or missing alarm events.
- Better planning for firmware updates and their potential effect on telemetry fields and event behavior.
- Improved mapping of device inputs and outputs to platform alerts and remote control actions.
- Reduced integration time when deploying at scale across a mixed fleet or multiple hardware revisions.

## Why Use Plaspy with This Protocol

Using the TopShine 2FD-100 with Plaspy gives organizations a way to centralize vehicle location, alarms, and rich telemetry into a single fleet management platform. The 2FD-100’s integrated OBD2 form factor, two way voice, WiFi hotspot, and expandable accessory support make it well suited for fleets that need both security and passenger connectivity while Plaspy provides the platform for monitoring, playback, and alert orchestration.

If you want to learn more about Plaspy and how it works with devices like the 2FD-100 visit https://www.plaspy.com. Protocol support and firmware behavior can change over time, so please verify the latest device specific protocol details and firmware notes on the manufacturer website https://www.gztopshine.com/ before large scale deployments.
