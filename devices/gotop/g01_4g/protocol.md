---
slug: /gotop/g01_4g/protocol
id: g01_4g-protocol
sidebar_label: Protocol
title: GOTOP - G01-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for GOTOP G01 4G tracker and how it connects with Plaspy using shared server settings
keywords:
  - GOTOP G01-4G protocol
  - GOTOP G01-4G GPS protocol
  - GOTOP G01-4G communication protocol
  - GOTOP G01-4G tracking protocol
  - GOTOP tracker Plaspy
  - G01-4G Plaspy compatibility
  - vehicle tracking protocol
  - fleet tracking GOTOP
  - GPS tracker protocol guide
  - Plaspy device integration
---

# GOTOP - G01-4G Protocol

This page provides public protocol context for using the GOTOP G01-4G tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what role the tracker reporting protocol plays in integration, and which connection settings Plaspy expects for ingesting location, alarm, and telemetry streams. The G01-4G is a professional 4G GPS tracker with SMS fallback built for vehicles and fleet use, and this document summarizes the protocol context relevant to Plaspy integration without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementations, so treat this page as high level guidance. If you need device specific packet or command details consult official GOTOP documentation for the latest firmware behavior before making production changes.

## Protocol Overview

The tracker reporting protocol is the bridge between the G01-4G device and the Plaspy backend. In public terms the protocol defines how the tracker identifies itself, reports GNSS positions, and sends event and telemetry notifications that Plaspy turns into live maps, alerts, and reports. The information below describes the general responsibilities of the protocol without diving into proprietary packet structures.

- Carries regular position updates and timestamps so Plaspy can plot live location and history.
- Sends event notifications such as SOS presses, ACC ignition changes, vibration or movement alarms, and power loss that feed alert workflows.
- Transmits vehicle telemetry and status flags so Plaspy can show inputs like ACC, door or sensor states and support remote control actions where configured.
- Enables optional two way interactions such as remote control or command acknowledgements when supported by device firmware and operator configuration.

## How Plaspy Detects the Protocol

Plaspy receives tracker data at a shared endpoint and uses automatic detection to determine the correct protocol for each device report. When the G01-4G is configured to report to Plaspy, the platform matches incoming streams to the appropriate parser and mapping so users generally do not need to choose a protocol manually in Plaspy.

- Plaspy accepts device reports on a single port that is used for all supported trackers.
- Devices should be configured to report to the Plaspy endpoint d.plaspy.com or to the server IP 54.85.159.138.
- The port that Plaspy uses for all devices is 8888.
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is usually unnecessary if the device is correctly pointed to the Plaspy endpoint.
- Proper device identification depends on the tracker sending expected identification fields and event types as implemented by the manufacturer firmware.

## Transport and Connection Context

Transport choices affect how the G01-4G delivers data to Plaspy but do not change the general role of the protocol. The device can use either UDP or TCP transport to deliver its reports depending on configuration and firmware support. Keep transport selection and server addressing consistent with Plaspy settings to ensure reliable delivery of position and event data.

- The G01-4G may be configured to use UDP or TCP on port 8888.
- Devices may point to the Plaspy domain d.plaspy.com or to the IP address 54.85.159.138 for server connectivity.
- Plaspy uses the same port 8888 for all devices, which simplifies device configuration on the field.
- Transport selection may affect delivery guarantees and should match what the device firmware supports and what the cellular network performs reliably.
- SMS fallback and other out of band mechanisms at the device level remain device specific and are outside Plaspy transport handling.

## Protocol Compatibility Notes

- Firmware versions and build revisions can change which fields, events, and telemetry the device reports to Plaspy.
- Hardware revisions and optional peripheral interfaces can alter available inputs such as additional sensor channels or audio features.
- Manufacturer configuration utilities or provisioning steps typically control whether the device reports via UDP or TCP and which server address is used.
- Regional cellular module variants may affect how and how often the device connects but do not change the high level protocol role.
- SMS fallback behavior and remote command support are device capabilities and should be validated against current GOTOP documentation for your SKU.
- Always validate compatibility with current official manufacturer documentation and sample configuration notes before bulk deployment.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps ensure successful initial setup, predictable event handling, and stable long term operations when the G01-4G is used with Plaspy. Knowing what the tracker is expected to report and how Plaspy ingests those reports reduces configuration errors and speeds troubleshooting.

- Helps confirm the device is pointed to the correct Plaspy endpoint and port so data is received reliably.
- Makes it easier to map tracker events like SOS, ACC, and power loss into Plaspy alerting and reporting.
- Assists with troubleshooting connectivity issues by checking transport, DNS, and cellular behavior rather than guessing parser details.
- Informs decisions about remote command usage and immobilizer functions based on what the device firmware supports.
- Supports verification of peripheral integrations like fuel sensors or cameras by understanding which telemetry channels the device exposes.

## Why Use Plaspy with This Protocol

Using the GOTOP G01-4G with Plaspy gives organizations centralized visibility into vehicle location, alarms, and vehicle telemetry for improved operational oversight and faster incident response. Plaspy consumes the tracker’s position and event streams and turns them into live maps, configurable alerts, and historical reports that fleet managers can use to reduce theft, validate incidents, and optimize routing and utilization.

If you want to learn more about how Plaspy works with devices like the G01-4G visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions verify information on the official GOTOP website at https://www.gotop.cc/. Protocol support and firmware behavior can change over time so always confirm the current device documentation before finalizing integration or large scale deployments.
