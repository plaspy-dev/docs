---
slug: /topshine/mt02/protocol
id: mt02-protocol
sidebar_label: Protocol
title: TopShine - MT02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for TopShine MT02 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - TopShine MT02 protocol
  - TopShine MT02 GPS protocol
  - TopShine MT02 protocol Plaspy
  - TopShine MT02 communication protocol
  - MT02 tracking protocol
  - TopShine MT02 compatibility
  - TopShine GPS tracker protocol
  - MT02 fleet management protocol
  - Plaspy device protocol
  - vehicle tracking MT02
---

# TopShine - MT02 Protocol

This page provides public protocol context for using the TopShine MT02 tracker with Plaspy. It describes how the device typically communicates with the Plaspy platform, the role of the reporting protocol in delivering location and telemetry, and the connection settings you can expect to use in common deployments. The description reflects the MT02 feature set such as 4G LTE connectivity, GPS and A GPS positioning, onboard logging, fuel sensor support, and remote immobilization capabilities when integrated with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is reporting to the platform. The MT02 can be configured to report over TCP or UDP to the Plaspy endpoint and exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific protocol details and firmware notes, review the manufacturer documentation in addition to the overview here.

## Protocol Overview

The MT02 reporting protocol is the mechanism the tracker uses to send telemetry and events to Plaspy and to receive permitted remote commands. This protocol enables Plaspy to map incoming messages to devices, display real time location and telemetry, and record history for reporting and alerts. The following highlights the protocol role in practical terms.

- Enables the MT02 to transmit GPS position, status, and sensor telemetry to Plaspy for visualization and reporting.
- Carries event notifications such as SOS, geofence breaches, tamper alerts, overspeed, and fuel level changes for immediate handling in Plaspy.
- Supports uploading of stored records after network restoration so historical data from onboard memory is preserved and synchronized to the platform.
- Provides a channel for permitted remote control actions such as relay immobilize commands and configuration updates issued from Plaspy.
- Works alongside alternate reporting methods the MT02 may support such as SMS, mobile app reporting, and web based options depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy receives inbound reports on a shared endpoint and port and applies automatic protocol detection to associate messages with the correct device type. In most cases you do not need to select a protocol manually in Plaspy if the MT02 is configured to report to the Plaspy server endpoint. This simplifies setup for deployments with mixed device types.

- Plaspy servers are reachable via the domain d.plaspy.com and the public server IP 54.85.159.138 for device reporting.
- All devices supported by Plaspy use the same port, which is 8888, simplifying firewall and NAT rules.
- The MT02 may be configured to use UDP or TCP transport to report to the Plaspy endpoint on port 8888 depending on device settings and network conditions.
- Plaspy automatically detects the tracker protocol when the device successfully reports to the platform endpoint, reducing manual selection steps.
- If a device fails to appear, confirm the device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888 so the platform can receive and identify its messages.

## Transport and Connection Context

Understanding the transport and connection settings helps ensure the MT02 can reach Plaspy reliably from the vehicle. The MT02 supports multiple reporting channels and may be set to TCP or UDP for real time telemetry, with SMS or mobile app options available for alternate control or configuration paths.

- The MT02 can report to Plaspy over TCP or UDP on port 8888 depending on configuration and network conditions.
- Devices may be configured to send to the domain d.plaspy.com or directly to the server IP 54.85.159.138 if preferred for network routing.
- Using the shared port 8888 for all devices simplifies firewall rules and gateway configurations for large fleets.
- When cellular coverage is intermittent the MT02 stores records locally and uploads stored data to Plaspy once connectivity is restored.
- Alternate reporting paths such as SMS, mobile app uploads, or web reporting are available on the MT02 and can complement TCP or UDP reporting for command and control.

## Protocol Compatibility Notes

- Firmware versions can change message behavior or add fields, so firmware revision matters for exact protocol behavior and feature support.
- Hardware SKUs and regional variants can affect supported cellular bands and optional features such as specific sensor integrations.
- Transport selection between TCP and UDP affects delivery semantics and may require different network handling depending on your environment.
- Manufacturer configuration tools such as SMS commands, USB configuration, or OTA settings determine how the MT02 is pointed to Plaspy and which transport is used.
- Plaspy detects the protocol automatically but the device must be correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for successful onboarding.
- Validate compatibility and any firmware specific commands or behaviors against the official TopShine documentation before large scale deployment.

## Why Protocol Understanding Matters

A practical understanding of the MT02 communication protocol helps with initial setup, ongoing troubleshooting, and achieving reliable long term operation with Plaspy. Knowing the role of transport, endpoint configuration, and firmware differences reduces time to deploy and improves operational stability.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive and identify reports.
- Helps troubleshoot connectivity issues by confirming TCP or UDP selection and relevant network rules.
- Clarifies how onboard logging behaves during outages and how stored records are uploaded to Plaspy after reconnection.
- Guides decisions about firmware updates and feature activation that may change protocol behavior or available telemetry.
- Supports correct configuration of sensors and remote control features so events and commands are handled accurately by Plaspy.

## Why Use Plaspy with This Protocol

Using the TopShine MT02 with Plaspy provides organizations with consolidated vehicle visibility, configurable alerts, and operational controls such as remote immobilization and fuel monitoring. Plaspy ingests MT02 telemetry and presents it through maps, alerts, and reports to help fleet operators manage routes, safety events, and fuel usage more effectively.

To learn more about Plaspy and how it integrates with devices like the TopShine MT02 visit https://www.plaspy.com. For the most current protocol descriptions, firmware notes, and device specific implementation details verify information with the manufacturer at https://www.gztopshine.com/. Protocol support and firmware behavior can change over time so checking the manufacturer documentation ensures you have the latest device specific guidance.
