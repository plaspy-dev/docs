---
slug: /itriangle/ts101_basic/protocol
id: ts101_basic-protocol
sidebar_label: Protocol
title: iTriangle - TS101 BASIC Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iTriangle TS101 BASIC and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - iTriangle TS101 BASIC protocol
  - iTriangle TS101 BASIC GPS protocol
  - iTriangle TS101 BASIC protocol Plaspy
  - TS101 BASIC communication protocol
  - TS101 BASIC tracking protocol
  - iTriangle GPS tracker protocol
  - Plaspy device compatibility
  - fleet GPS tracking protocol
  - vehicle tracker protocol iTriangle
  - GPS telemetry protocol
---

# iTriangle - TS101 BASIC Protocol

This page describes the public protocol context for using the iTriangle TS101 BASIC tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level, what role the tracker reporting protocol plays in reliable telemetry, and what to check when integrating the device into a Plaspy deployment. The intent is to provide clear, non sensitive protocol information that helps installers and administrators plan connectivity and validation steps.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the TS101 BASIC can vary by firmware version, hardware revision, and manufacturer implementation, so this page keeps descriptions general and encourages validation against manufacturer documentation and device firmware notes.

## Protocol Overview

The TS101 BASIC uses a tracker reporting protocol to deliver GNSS fixes, motion and event signals, I/O states, and short telemetry records to a backend server for ingestion. The protocol defines how the tracker identifies itself, batches or streams position records, and reports key events such as ignition changes, tamper alerts, and stored points syncing after an outage.

- Enables the tracker to report GNSS position and timestamped telemetry to Plaspy for live tracking and historical replay.
- Carries event flags and basic I/O telemetry such as ignition, digital inputs, and accelerometer triggered motion events used by Plaspy rules.
- Supports onboard storage replay so stored records are transmitted to Plaspy when connectivity is restored.
- Allows remote configuration or firmware control flows where supported by the device and provisioning system.
- Provides compact, periodic reporting suitable for cellular 2G data links and vehicle deployments.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and applies automatic protocol detection to identify the incoming device format. For most integrations you do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint using the correct connection parameters.

- Plaspy server domain is d.plaspy.com and can be used as the device host in tracker configuration.
- Plaspy server IP is 54.85.159.138 which is an alternate way devices can target the Plaspy endpoint.
- The port is 8888 and Plaspy uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol when the device connects and starts reporting.
- If a device is configured correctly to report to d.plaspy.com or 54.85.159.138 on port 8888, manual protocol selection is typically unnecessary.

## Transport and Connection Context

Connection mode and transport (UDP versus TCP) are determined by what the device firmware and provisioning support. The TS101 BASIC family is designed to operate over cellular data and can be configured to use common transports to reach the Plaspy collector. Keep transport selection consistent with device settings and network reliability expectations for your fleet.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the Plaspy endpoint.
- All devices in Plaspy use the same port, which simplifies firewall and network rules for deployments.
- Choose TCP if you require connection-oriented transport; choose UDP where reduced overhead or device constraints favor datagram delivery.
- Validate cellular APN and data network settings so the tracker can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can alter message cadence, available fields, or optional telemetry elements; verify firmware notes when troubleshooting.
- Hardware revisions or regional variants may affect supported cellular bands or transport options and can influence usable protocol features.
- The choice of UDP versus TCP at device configuration time affects delivery characteristics but does not change the high-level data types reported to Plaspy.
- Onboard storage behavior (how many points are stored and when they are uploaded) is a device feature; confirm limits and recovery behavior with iTriangle documentation.
- Validate that the device DNS or IP setting uses d.plaspy.com or 54.85.159.138 and the port is set to 8888 to ensure connectivity to Plaspy.
- Always compare observed device behavior to official manufacturer documentation for firmware specific protocol details.

## Why Protocol Understanding Matters

Knowing how the TS101 BASIC communicates with Plaspy helps with correct installation, faster troubleshooting, and reliable long term operation. Even when Plaspy automatically detects the protocol, installers benefit from understanding transport choices, event reporting, and storage behavior.

- Ensures devices are configured to report to the correct Plaspy endpoint and port so data arrives consistently.
- Helps diagnose common connectivity issues such as APN misconfiguration, incorrect host/IP, or blocked ports.
- Clarifies expectations for how stored points are replayed after outages and how event flags are mapped into platform alerts.
- Guides appropriate selection between UDP and TCP based on network conditions and recovery requirements.
- Supports planning for firmware updates and configuration provisioning without interrupting reporting to Plaspy.

## Why Use Plaspy with This Protocol

Using the TS101 BASIC with Plaspy gives operations teams a straightforward path to ingesting position, motion, and basic I/O telemetry from a compact vehicle tracker. The device’s multi constellation GNSS, onboard storage, and practical I/O complement Plaspy’s real-time visualization, historical playback, and alerting capabilities to support fleet monitoring, anti-theft workflows, and logistical verification.

If you want to learn more about integrating devices like the TS101 BASIC with the Plaspy platform, visit https://www.plaspy.com to explore platform features and deployment options. For the most current device specific protocol details, firmware behavior, and manufacturer implementation notes, verify information on the official iTriangle website https://www.itriangle.net/ as device behavior can change across firmware and hardware revisions.
