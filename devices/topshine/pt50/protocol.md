---
slug: /topshine/pt50/protocol
id: pt50-protocol
sidebar_label: Protocol
title: TopShine - PT50 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopShine PT50 and how it connects with Plaspy for telemetry and event delivery
keywords:
  - TopShine PT50 protocol
  - TopShine PT50 GPS
  - PT50 Plaspy compatibility
  - PT50 tracking protocol
  - TopShine PT50 communication
  - PT50 asset tracker
  - solar GPS tracker PT50
  - PT50 fleet management
  - TopShine PT50 MQTT
  - PT50 device integration
---

# TopShine - PT50 Protocol

This page summarizes the public protocol context for using the TopShine PT50 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in broad, non sensitive terms and explains the practical connection settings you need to know for successful integration.

The PT50 is a 4G solar powered tracker with multi mode positioning and support for customizable MQTT messaging. Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Always confirm device specific details against manufacturer documentation when needed.

## Protocol Overview

The PT50 reporting protocol is the set of device behaviors and message types the tracker uses to identify itself, send position and event telemetry, and receive configuration or control messages. For integration with a platform like Plaspy, the protocol determines how location, alarms, and device health are represented and transported.

- Enables the PT50 to report GPS, AGPS, LBS, and WiFi assisted positions to the platform.
- Carries event notifications such as geofence alerts, SOS, low battery, and movement detection.
- Supports MQTT as a customizable option for telemetry and system integrations alongside cellular reporting.
- Provides identification and status data that Plaspy uses to associate messages with a device record.
- Defines how periodic location updates and on demand events are delivered to a central endpoint.

## How Plaspy Detects the Protocol

Plaspy accepts telemetry from many tracker models at a common endpoint and automatically detects the tracker protocol so users typically do not need to select a protocol manually. Proper device configuration to point at the Plaspy endpoint ensures the platform can ingest messages and present usable telemetry.

- Plaspy’s public server endpoint is d.plaspy.com and can also be reached at 54.85.159.138.
- All devices in Plaspy use the same port for reporting which simplifies device setup across models.
- The platform automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- Users usually only need to configure the device APN and the Plaspy endpoint information on the tracker side.
- When using MQTT, device MQTT settings should align with the Plaspy endpoint and connection method supported by the tracker.

## Transport and Connection Context

Connection and transport choices determine how PT50 messages reach Plaspy. The PT50 can use cellular data or MQTT over its cellular connection to deliver telemetry. Depending on device firmware and configuration, either UDP or TCP can be used to send messages to the Plaspy service.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the host d.plaspy.com or the numeric address 54.85.159.138 as the reporting endpoint.
- Plaspy listens on port 8888 for device reports and all supported devices share this port on the platform side.
- MQTT messaging is supported by the PT50 as a customizable integration option for platform or IoT workflows.
- Verify the device APN and network configuration to ensure cellular connectivity before testing reporting to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available fields, or default transport preferences. Check the PT50 firmware version when troubleshooting.
- Hardware revisions and optional configurations on the device can affect which positioning modes and sensors are available.
- Some PT50 deployments use MQTT while others use direct TCP or UDP reporting; confirm which transport fits your workflow.
- Manufacturer configuration guides may include different default servers or ports; update the device to point at the Plaspy endpoint for integration.
- Network conditions and operator APN settings impact message delivery and latency for real time events.
- Always validate critical behaviors such as geofence triggers and SOS handling after configuring the device to report to Plaspy.

## Why Protocol Understanding Matters

Understanding the PT50 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable behavior over the life of a deployment. Knowing the role of transport, reporting cadence, and event types reduces integration time and supports long term reliability.

- Ensures the device is configured to send the right telemetry and event types to Plaspy.
- Helps identify configuration errors such as incorrect endpoint, port, or transport selection.
- Reduces downtime by clarifying what to check when expected events do not arrive in the platform.
- Supports planning for battery life and reporting intervals to balance visibility and power consumption.
- Aids in mapping device fields to Plaspy dashboards and downstream integrations like MQTT consumers.

## Why Use Plaspy with This Protocol

Using the PT50 with Plaspy provides organizations with centralized visibility, alerting, and historical playback for solar powered long duration assets. The PT50’s combination of multi mode positioning and low maintenance hardware pairs with Plaspy’s ingestion and normalization to provide actionable location and event data for fleet management, anti theft monitoring, and remote asset telemetry.

If you want to learn more about how Plaspy works with devices like the TopShine PT50 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official configuration instructions, verify information on the manufacturer website https://www.gztopshine.com/ as protocol support and firmware behavior can change over time.
