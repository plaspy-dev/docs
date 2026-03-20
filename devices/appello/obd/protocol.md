---
slug: /appello/obd/protocol
id: obd-protocol
sidebar_label: Protocol
title: Appello - OBD Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Appello OBD GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - Appello OBD protocol
  - Appello OBD GPS
  - Appello OBD Plaspy compatibility
  - Appello OBD communication protocol
  - OBD tracker protocol
  - GPS tracker communication
  - Plaspy device compatibility
  - MTK GSM tracker
  - U Blox 7020 tracker
  - fleet tracking protocol
---

# Appello - OBD Protocol

This page describes the public protocol context for using the Appello OBD GPS tracker with the Plaspy fleet platform. It focuses on how the tracker communicates with Plaspy at a high level, what connection settings are used, and what practical factors affect successful integration. The Appello OBD is a compact OBD form factor tracker that uses an MTK GSM module, supports GSM 4 band networks and TCP reporting, and includes a U‑BLOX 7020 GPS chipset for high sensitivity location fixes and fast hot starts.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior for an Appello OBD device can vary depending on firmware version, hardware revision, and manufacturer implementation, so this page provides public, non-sensitive guidance while recommending verification against the manufacturer documentation for firmware specific details.

## Protocol Overview

At a general level the tracker protocol is the message layer that allows the Appello OBD to identify itself, report GPS and vehicle data, and deliver status and alarms to Plaspy. The protocol running on the device defines what telemetry is sent and how the server recognizes and interprets each message, while Plaspy provides the network endpoint and handling to receive those messages.

- Enables the Appello OBD to transmit GPS positions and OBD related telemetry to a remote server
- Carries device identity and session information so Plaspy can associate incoming data with the correct tracker
- Conveys status, alarms, and periodic reporting so fleet visibility and geofencing events are possible
- Works over the device cellular link provided by the MTK GSM module and the tracker GPS timing from the U‑BLOX 7020
- Is subject to vendor firmware choices and can evolve across firmware updates or hardware revisions

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single, shared endpoint and port and includes automatic protocol detection logic so most devices configured to report to the Plaspy endpoint will be recognized without manual protocol selection. For Appello OBD devices this means a correct endpoint and transport choice on the device side is the primary setup requirement.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- Plaspy listens on port 8888 for device reports and all Plaspy supported devices use the same port
- Plaspy automatically detects the tracker protocol so users normally do not need to select a protocol in the platform if the device reports to the Plaspy endpoint
- Proper device configuration to point to d.plaspy.com (or the numeric IP) and the Plaspy port is the usual requirement to allow automatic detection
- If a device is not detected, the common causes are incorrect endpoint, wrong transport type, or firmware-specific reporting differences

## Transport and Connection Context

The Appello OBD device uses cellular data to reach the Plaspy servers and the transport layer (UDP or TCP) can be selected depending on device support and configuration. Plaspy accepts both UDP and TCP on the shared port so the device can use the transport that best matches its firmware behavior and the operator's network considerations.

- The device may be configured to use either UDP or TCP on port 8888 when reporting to Plaspy
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138
- All devices in Plaspy use the same port which simplifies deployment and reduces per-device configuration differences
- The Appello OBD hardware uses a MTK GSM module and GSM 4 band support for broad cellular compatibility
- Network level settings such as APN or SIM operator routing remain important for cellular connectivity but are managed on the device side

## Protocol Compatibility Notes

- Firmware revisions can change the exact fields, timing, or optional messages the tracker sends; confirm the firmware version when troubleshooting
- Hardware revisions or configuration tools from the manufacturer can introduce minor differences in behavior between units
- The Appello OBD is documented to support TCP reporting; Plaspy also accepts UDP so choose the transport that matches the device firmware or configuration utility
- Always ensure the device is configured to report to d.plaspy.com or the provided Plaspy IP on port 8888 to allow auto detection
- Differences in OBD data mappings or optional sensors may require validation to ensure the values received by Plaspy match expectations
- For the most current device specific details consult the manufacturer documentation

## Why Protocol Understanding Matters

Understanding how the tracker protocol operates helps technical teams set up devices correctly, accelerate troubleshooting, and ensure consistent data flow into Plaspy for reliable fleet monitoring. Awareness of protocol and transport expectations reduces misconfiguration and makes it easier to diagnose connectivity versus data format issues.

- Helps confirm correct endpoint and transport settings so devices register with Plaspy
- Reduces time spent troubleshooting by clarifying whether an issue is network, transport, or firmware related
- Enables better planning for firmware updates that might change reporting behavior
- Improves confidence in OBD data mapping and the accuracy of vehicle telemetry in Plaspy
- Supports long term reliability by making power, reporting intervals, and connectivity behavior easier to validate

## Why Use Plaspy with This Protocol

Using Plaspy with an Appello OBD tracker provides a straightforward path to turn vehicle GPS and OBD telemetry into operational insight. Plaspy’s single endpoint approach and automatic protocol detection reduce the configuration overhead for deploying many devices, while the platform provides the fleet visibility, alerts, and historical data that organizations need for monitoring and operations.

If you want to learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol and firmware information with the manufacturer at http://www.cnjeo.com/.
