---
slug: /gotop/g35/protocol
id: g35-protocol
sidebar_label: Protocol
title: GOTOP - G35 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP G35 tracker integration with Plaspy real time tracking and telemetry compatibility
keywords:
  - GOTOP G35 protocol
  - GOTOP G35 GPS protocol
  - GOTOP G35 communication protocol
  - GOTOP G35 tracking protocol
  - GOTOP animal GPS tracker protocol
  - Plaspy device protocol
  - Plaspy tracker compatibility
  - collar mounted GPS tracker protocol
  - long battery GPS tracker protocol
  - multi mode positioning protocol
---

# GOTOP - G35 Protocol

This page provides a public protocol context for using the GOTOP G35 animal GPS tracker with Plaspy. It explains the role of the device reporting protocol in delivering location, status, and alert data into Plaspy without exposing sensitive implementation details. The content is intended to help technical integrators and fleet managers understand how the G35 communicates in ways that matter for setup and troubleshooting.

The G35 is a collar mounted animal tracker designed for long duration deployments with multi mode positioning and SMS or LTE data reporting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always verify device specific behavior with the manufacturer when needed.

## Protocol Overview

The protocol used by the G35 governs how the tracker sends position fixes, sensor status, movement and alarm events from the field to a backend service like Plaspy. In practical terms the protocol enables the device to identify itself, report usable telemetry, and trigger alerts that Plaspy can surface to users and automation rules.

- Enables regular transmission of location fixes and telemetry such as battery, motion, and signal conditions.
- Carries alarm and event notifications including geofence, movement, low battery, and locate-tone responses.
- Associates each message with a device identity so Plaspy can map incoming data to the correct asset.
- Supports both real time delivery over cellular data and SMS based notifications where supported by the device.
- Allows onboard logging to be synchronized or uploaded so historical waypoints and route playback are usable in Plaspy.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device traffic on a shared server endpoint and automatically determines the tracker protocol based on the incoming message patterns. In most cases you do not need to manually select a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a single, shared server endpoint for all supported trackers using the domain d.plaspy.com and the IP 54.85.159.138.
- All devices in Plaspy use the same port, 8888, simplifying device configuration across multiple models.
- Plaspy automatically detects the tracker protocol so a properly configured device will normally appear without manual protocol selection.
- If a device supports multiple transports, ensure it is configured to report to the Plaspy endpoint to allow automatic detection and registration.
- When devices send telemetry via SMS or LTE data, Plaspy uses the incoming messages to correlate device identity with platform records.

## Transport and Connection Context

The G35 can use SMS for notifications and LTE data for continuous telemetry. When reporting to Plaspy over IP, the device may be configured to use either UDP or TCP on port 8888 depending on device support and network conditions. These connection details determine how the tracker reaches the Plaspy server but do not change the higher level purpose of the protocol.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server public IP is 54.85.159.138.
- The shared port used by all Plaspy supported devices is 8888.
- Devices may be configured to use either UDP or TCP on port 8888 when sending data to Plaspy.
- Choose transport (UDP or TCP) according to the device configuration options and network reliability in the deployment area.
- SMS reporting is available on the G35 as an alternate channel for events and short notifications where supported by the manufacturer backend.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields, and reporting options; confirm the tracker firmware level when troubleshooting compatibility.
- Hardware revisions or SKU variants may enable or limit features such as WiFi positioning, voice monitoring, or extended waypoint memory.
- Some features reported by the G35 rely on manufacturer backend behavior or app workflows that affect how logs reach Plaspy.
- Transport selection between UDP and TCP can impact delivery characteristics; verify what your device supports and which transport is configured.
- Geofence, movement, and voice monitoring capabilities are exposed as events that Plaspy can consume, but exact event payloads and triggers are firmware dependent.
- Validate compatibility against the manufacturer documentation and ensure the device is pointed to the Plaspy endpoint to allow automatic protocol detection.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable setup, accurate alerts, and predictable long term operation when integrating the G35 with Plaspy. Clarity around reporting intervals, transport choices, and event semantics reduces configuration errors and improves troubleshooting efficiency.

- Ensures proper configuration of reporting endpoints and transport settings so data reaches Plaspy reliably.
- Helps debug gaps in telemetry by distinguishing device limitations from network or platform issues.
- Guides battery and reporting interval trade offs to match the deployment need for standby time versus update frequency.
- Clarifies how geofence and movement alarms are signaled so notification rules in Plaspy behave as expected.
- Makes it easier to map onboard waypoint logs and synchronized historical data into Plaspy for playback and analysis.

## Why Use Plaspy with This Protocol

Using the GOTOP G35 with Plaspy brings animal focused hardware together with a centralized tracking platform to provide visibility, alerting, and historical route playback for pets, livestock, and field research. The combination of multi mode positioning, long battery life, and Plaspy compatibility supports deployments where long endurance and reliable telemetry are critical.

If you want to learn more about how Plaspy works with devices like the G35, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol information and firmware notes on the manufacturer site https://www.gotop.cc/.
