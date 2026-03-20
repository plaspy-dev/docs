---
slug: /gpsmarker/m130/protocol
id: m130-protocol
sidebar_label: Protocol
title: GPSMarker - M130 Protocol
sidebar_class_name: menu_item_tracker
description: Protocol overview for GPSMarker M130 compatibility with Plaspy tracking platform and guidance for connection and troubleshooting
keywords:
  - GPSMarker M130 protocol
  - GPSMarker M130 GPS protocol
  - GPSMarker M130 communication
  - GPSMarker M130 tracking protocol
  - GPSMarker compatibility Plaspy
  - GPS tracker protocol Plaspy
  - vehicle tracking GPSMarker M130
  - GPSMarker M130 connectivity
  - tracker reporting protocol
  - fleet tracking M130
---

# GPSMarker - M130 Protocol

This page provides the public protocol context for using the GPSMarker M130 with the Plaspy platform. It explains how the tracker communicates with Plaspy in general, highlights the connection settings used by the platform, and summarizes the practical considerations to get the M130 reporting reliably for tracking and monitoring purposes.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint. Exact protocol behavior for the M130 can vary by firmware version, hardware revision, and manufacturer configuration, so treat this page as implementation neutral guidance rather than a firmware specific manual.

## Protocol Overview

The M130's communication protocol is the mechanism by which the device reports location, status, sensor events, and minimal identification to a remote server. For use with Plaspy, the protocol enables the tracker to establish a transport connection, deliver telemetry and alarms, and let the server map messages to an asset record.

- Carries position and time information so Plaspy can display accurate coordinates and movement history
- Sends sensor and alarm events such as movement detection, crash alerts, panic button presses, and low battery notices
- Provides device identification so Plaspy can associate incoming data with the correct tracker record
- Operates over standard transport channels so the device can reach Plaspy from mobile networks
- Supports periodic reporting and configurable reporting intervals to balance telemetry and battery life

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when devices report to the shared endpoint, removing the need for manual protocol selection in most cases. If the M130 is configured to send data to Plaspy, the platform will match incoming messages to a supported protocol and process them into telemetry and events.

- Plaspy automatically detects the tracker protocol
- Plaspy server domain is d.plaspy.com for name based configuration
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available
- The port is 8888 and is the shared port used for all supported devices
- The device may be configured using UDP or TCP on port 8888 depending on device and network settings
- When the device points to the Plaspy endpoint and uses the supported transport, manual selection of protocol inside Plaspy is typically unnecessary

## Transport and Connection Context

Connection context focuses on how the M130 reaches Plaspy rather than the internal structure of individual messages. The tracker can be set up to use either UDP or TCP and must target the Plaspy endpoint on the shared port for the server to receive reports reliably.

- Devices may point to d.plaspy.com or 54.85.159.138 for server delivery
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port which simplifies fleet wide configuration
- Choose UDP or TCP according to device capability and network reliability considerations
- Ensure mobile operator firewalls and APN settings allow outbound connections to the Plaspy endpoint and port
- Consider signal and roaming behavior because transport performance affects timely reporting and battery use

## Protocol Compatibility Notes

- Firmware versions and manufacturer firmware builds can change message behavior and available features
- Hardware revisions or optional modules on the M130 may enable or disable specific sensors or reporting modes
- Some features depend on SIM tariff plans or APN settings supplied with the device
- Transport choice between UDP and TCP can affect delivery reliability and should be validated for your deployment
- Always test a sample device to confirm Plaspy detects and processes messages as expected before large scale rollout
- Validate mapping of sensor events and alarm types against manufacturer documentation when possible
- If behavior differs from expectations, check firmware release notes and configuration lists from the manufacturer

## Why Protocol Understanding Matters

Understanding how the M130 communicates helps operators set up devices correctly, troubleshoot connectivity and reporting issues, and tune settings for battery life and event fidelity. A practical grasp of protocol behavior shortens commissioning time and reduces avoidable data gaps.

- Speeds initial setup by ensuring devices point to the correct Plaspy endpoint and use the supported port
- Simplifies troubleshooting when messages do not appear by focusing on transport, SIM, and firmware variables
- Helps select reporting intervals and sensor modes that balance telemetry needs with long battery life
- Clarifies why firmware updates or hardware changes can alter message content or frequency
- Aids in mapping device sensor events to Plaspy alerts and workflows for operational use

## Why Use Plaspy with This Protocol

Using the GPSMarker M130 with Plaspy provides a centralized platform for processing location and event data from devices configured to report to Plaspy. The shared connection settings and automatic protocol detection reduce per device configuration effort and let organizations focus on monitoring and operations rather than low level parsing.

Plaspy is designed to accept reports to a single, consistent endpoint which simplifies deployment across fleets of mixed devices and models. To learn more about Plaspy and how it handles device connectivity and fleet visibility visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration guidance for the GPSMarker M130, please verify information with the manufacturer at https://gpsmarker.ru/.
