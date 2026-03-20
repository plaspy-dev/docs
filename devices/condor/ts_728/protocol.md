---
slug: /condor/ts_728/protocol
id: ts_728-protocol
sidebar_label: Protocol
title: Condor - TS-728 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Condor TS 728 maritime tracker and how it communicates with Plaspy for satellite based vessel tracking
keywords:
  - Condor TS 728
  - TS 728 protocol
  - Condor GPS protocol
  - Condor TS 728 GPS
  - TS 728 tracking protocol
  - Condor satellite tracker
  - Iridium tracker Condor
  - Plaspy tracker compatibility
  - maritime GPS protocol
  - vessel tracking protocol
---

# Condor - TS-728 Protocol

This page documents the public protocol context for using the Condor TS-728 maritime tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used publicly, and what aspects of the tracker reporting are relevant when integrating satellite based vessel monitoring into a fleet management workflow.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so this guide describes the public connection and compatibility considerations rather than firmware level internals.

## Protocol Overview

The protocol used by the TS-728 governs how position, telemetry, and event data are sent from the tracker to a remote server. For satellite trackers like the TS-728, the communication is designed to reliably deliver compact reports over the Iridium network to a central endpoint so that Plaspy can present live maps, alerts, and historical data to operators.

- Carries location and basic telemetry so Plaspy can display vessel position and status in real time.
- Includes identification data that allows Plaspy to associate incoming messages with the correct device record.
- Conveys event and alarm signals that Plaspy can map to alerts such as motion, geofence breaches, or sensor triggers.
- Enables periodic reporting for regular tracking plus optional event driven messages for immediate incidents.
- Is intentionally described here at a high level to avoid exposing firmware specific frames or private implementation details.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a single shared endpoint and port and uses that connection to identify incoming device messages. When a TS-728 is configured to send data to Plaspy, the platform automatically determines the tracker protocol so users generally do not need to select a protocol inside Plaspy manually.

- Plaspy listens on a shared endpoint reachable at d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port number for incoming tracker data, which simplifies device configuration.
- The TS-728 may be set to report to Plaspy using either UDP or TCP on the shared port.
- With correct reporting settings on the device, Plaspy will associate the messages to the device record automatically.
- For most installations you only need to point the device to the Plaspy endpoint and confirm transport and credentials if required by the manufacturer.

## Transport and Connection Context

Satellite trackers often support multiple transport modes between the device and the server gateway. For the purposes of routing TS-728 messages to Plaspy, the transport and destination settings are the primary configuration items required on the device.

- The TS-728 may be configured to use UDP or TCP on port 8888 depending on the device configuration and satellite gateway setup.
- Devices can be pointed at the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when configuring the reporting destination.
- Plaspy uses the same port 8888 for all supported devices, which reduces per device configuration differences.
- Choose UDP or TCP based on the tracker installation guidance and any tradeoffs between delivery confirmation and overhead.
- Confirm transport selection with the device installer or manufacturer documentation for optimal satellite usage and cost considerations.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, and optional event types, so verify the TS-728 firmware level when diagnosing differences.
- Hardware revisions or optional interface modules may add or remove sensor inputs that affect what the tracker reports to Plaspy.
- Manufacturer configuration options can alter transport mode, server destination, and reporting intervals; these affect how data appears in Plaspy.
- Some installations forward additional sensor streams or BLE data through the tracker; confirm whether those features are enabled in your specific device build.
- For satellite trackers, reporting frequency and message size may be constrained by airtime policies and subscription tiers.
- Always validate key settings such as server address, transport choice, and device identifier before deploying at scale.

## Why Protocol Understanding Matters

Understanding the device reporting protocol helps ensure successful setup, efficient troubleshooting, and predictable long term operation when the TS-728 is used with Plaspy. Clarity about how reports are delivered makes it easier to confirm that the device is correctly bound to the Plaspy account and that critical events are being delivered.

- Helps confirm that the tracker is sending to the correct Plaspy endpoint and transport settings.
- Simplifies troubleshooting when position updates, alerts, or telemetry do not appear in Plaspy as expected.
- Enables better planning for reporting intervals and airtime usage for satellite transmissions.
- Aids installers in matching device configuration to operational requirements like geofence sensitivity or event reporting.
- Gives fleet managers confidence that device changes such as firmware updates or hardware swaps will not silently break data delivery.

## Why Use Plaspy with This Protocol

Using the Condor TS-728 with Plaspy provides organizations with centralized visibility for vessels operating beyond cellular coverage. The combination of Iridium satellite connectivity from the TS-728 and Plaspy’s unified platform enables global position reporting, alerting, and consolidated fleet workflows so shore teams can monitor and respond to events across oceans.

Plaspy’s automatic protocol detection and shared connection settings make it straightforward to integrate satellite trackers like the TS-728 into existing monitoring setups. To learn more about Plaspy and how it supports maritime and satellite enabled trackers, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and installation guidance verify information with the manufacturer at https://condorskyseeker.com/.
