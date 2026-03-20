---
slug: /topshine/ublox_7/protocol
id: ublox_7-protocol
sidebar_label: Protocol
title: TopShine - Ublox 7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TopShine Ublox 7 and how it communicates with Plaspy for real time tracking and telemetry
keywords:
  - TopShine Ublox 7 protocol
  - TopShine Ublox 7 GPS protocol
  - TopShine Ublox 7 communication protocol
  - Ublox 7 protocol Plaspy
  - Ublox 7 GPS tracker
  - TopShine GPS tracker
  - Plaspy compatible trackers
  - vehicle tracking protocol
  - motorcycle GPS tracker
  - Ublox 7 tracking protocol
---

# TopShine - Ublox 7 Protocol

This page provides public protocol context for using the TopShine Ublox 7 Mini tracker with the Plaspy platform. It explains how the device reports GNSS position, telemetry and status events to Plaspy using standard network transports and an open reporting protocol. The goal is to help technical users and integrators understand the communication relationship between the Ublox 7 Mini and Plaspy without exposing sensitive implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when data arrives. For Plaspy ingestion the server domain is d.plaspy.com and the server IP is 54.85.159.138 on port 8888. The device may be configured to use either UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, while exact message behavior can vary by firmware version, hardware revision and manufacturer implementation.

## Protocol Overview

The Ublox 7 Mini communicates position, status and alarms to backend platforms using its open reporting protocol over GSM GPRS or SMS. In a Plaspy deployment the protocol's role is to reliably deliver location and event data so Plaspy can map, log and alert on the information.

- Transmit GNSS fixes and timestamps so Plaspy can place the device on live maps and historical tracks.
- Report digital inputs, engine ON/OFF events and accessory states for ignition based workflows and telemetry.
- Send alarms such as overspeed, geofence breaches and tamper events for immediate alerting in Plaspy.
- Provide fallback options such as SMS for basic reporting and GPRS for continuous real time updates.
- Use an open protocol that allows Plaspy to interpret common telemetry fields without requiring proprietary gateway changes.

## How Plaspy Detects the Protocol

Plaspy receives inbound traffic at a shared endpoint and port and identifies the tracker protocol from the incoming data pattern and reported fields. When the Ublox 7 Mini is configured to report to the Plaspy endpoint, manual protocol selection in the platform is normally unnecessary.

- Plaspy listens on the shared ingestion endpoint d.plaspy.com and on IP 54.85.159.138 using port 8888.
- Devices may be set to report over either UDP or TCP to port 8888 depending on device configuration.
- Plaspy automatically detects the tracker protocol and maps common fields to platform telemetry without extra user configuration.
- Proper device configuration to point at the Plaspy endpoint ensures the platform can ingest device reports reliably.
- If a device uses SMS as a fallback, Plaspy can accept and reconcile SMS based reporting alongside GPRS streams where supported.

## Transport and Connection Context

Connection choices determine how the Ublox 7 Mini sends its reporting frames to Plaspy. Typical deployments use the cellular GPRS uplink from the device, with TCP or UDP as the transport layer. Devices may alternatively use SMS for simple reporting or as a fallback channel.

- The tracker may be configured to use UDP or TCP on port 8888 for GPRS reporting.
- Devices can point to the domain d.plaspy.com or to the Plaspy ingestion IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify device setup and reduce configuration errors.
- SMS uplink is supported by the device for lightweight or temporary setups and can complement GPRS reporting.
- Transport selection can depend on device firmware options, network conditions and installation requirements.

## Protocol Compatibility Notes

- Firmware revisions can change which fields are reported, field names or optional telemetry elements in the device protocol.
- Hardware revisions or accessory options such as relay or microphone support may introduce additional telemetry or control channels.
- Some installations choose UDP for lower overhead and others choose TCP for connection reliability; confirm the device setting before deployment.
- SMS reporting behavior can vary by carrier and device firmware and should be validated if SMS is part of the workflow.
- Always validate compatibility against the device configuration menus and the current manufacturer documentation for your specific firmware build.
- Confirm IMEI registration and mobile data provisioning when deploying devices to ensure GPRS reporting functions.

## Why Protocol Understanding Matters

Understanding how the Ublox 7 Mini communicates helps reduce integration friction, speeds troubleshooting and improves long term operational reliability in Plaspy. Clear expectations about transport, reported fields and fallback behavior make it easier to diagnose issues and design alerting.

- Faster setup by confirming the device points to d.plaspy.com or 54.85.159.138 on port 8888 using the chosen transport.
- Quicker troubleshooting when knowing whether a reporting gap is network, transport or firmware related.
- Better alarm configuration in Plaspy when you know which events the device will report natively.
- Smarter fallback planning by understanding SMS versus GPRS behavior for intermittent connectivity.
- More predictable remote control workflows when device capabilities like relay immobilizer support are confirmed.

## Why Use Plaspy with This Protocol

For organizations that need compact trackers for motorcycles, small vehicles and equipment, the TopShine Ublox 7 Mini offers a practical combination of sensitivity, ruggedness and an open reporting protocol that makes Plaspy integration straightforward. Plaspy ingests GNSS fixes, status events and alarms from the device to provide live maps, history, alerts and reporting that support fleet operations and anti theft workflows.

If you want to learn more about how Plaspy works with compatible trackers, visit https://www.plaspy.com to explore platform capabilities. Protocol support and firmware behavior can change over time, so please verify the latest device specific protocol and firmware details on the manufacturer website https://www.gztopshine.com/ before making deployment decisions.
