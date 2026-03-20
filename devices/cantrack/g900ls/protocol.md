---
slug: /cantrack/g900ls/protocol
id: g900ls-protocol
sidebar_label: Protocol
title: CanTrack - G900LS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack G900LS compatibility with Plaspy
keywords:
  - CanTrack G900LS
  - G900LS protocol
  - CanTrack protocol
  - G900LS GPS protocol
  - GPS tracker protocol
  - Plaspy compatibility
  - vehicle tracking G900LS
  - G900LS communication
  - fleet tracking G900LS
  - GT06 compatibility
---

# CanTrack - G900LS Protocol

This page covers the public protocol context for using the CanTrack G900LS tracker with Plaspy. It describes how the device reports location and telemetry to Plaspy, the general role the tracker protocol plays in that integration, and practical considerations for configuration. The aim is to explain communication behavior in public, non sensitive terms so fleet operators and integrators can plan deployments and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior on the G900LS can vary by firmware version, hardware revision, and manufacturer configuration, so device behavior may differ between units or after firmware updates. This page summarizes the public, platform relevant details and encourages verification against official CanTrack documentation for device specific or firmware level behavior.

## Protocol Overview

The protocol used by the G900LS is the mechanism by which the tracker identifies itself to backend servers, streams position and telemetry, and reports alarms and status events that Plaspy consumes. For many units the G900LS is reported as GT06 compatible for backend integration while using TCP IP transport over cellular links. The protocol enables the device to send frequent position updates, event driven messages, and status information that Plaspy maps to rules, alerts, and reporting.

- Provides device identity and session information so Plaspy can associate incoming messages with the correct asset.
- Streams GPS position and GNSS quality indicators so Plaspy can display location and accuracy on maps.
- Transmits telemetry and alarm events such as ignition state, power loss, speed alerts, and movement events that drive Plaspy rules.
- Supports configurable upload intervals and event driven reporting to balance timeliness and data usage.
- Allows the platform to issue supported remote commands when device firmware and configuration permit command control.
- Uses standard TCP IP transport over cellular data for reliable delivery to a backend endpoint.

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a shared endpoint and port and applies automatic detection and routing so most devices do not require manual protocol selection in the platform. When a G900LS is configured to report to Plaspy, the platform will identify the incoming message format and associate it with the appropriate integration logic for processing location and events.

- Devices should be pointed to the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 for reporting.
- All devices use the same Plaspy port, which simplifies device configuration and onboarding.
- Plaspy accepts connections over TCP or UDP on the shared port so devices may use the transport best supported by their firmware.
- Automatic detection means users typically do not need to pick a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint.
- Proper device identification and APN settings are required so the G900LS can reach the Plaspy server and be automatically recognized.
- If a device does not appear online, verifying server address, transport selection, APN, and firmware behavior are practical first steps.

## Transport and Connection Context

Understanding how the G900LS connects to Plaspy is important for initial setup and troubleshooting. The tracker uses cellular data and standard TCP IP connectivity to send reports and may be configured to use either UDP or TCP depending on unit capabilities and desired behavior.

- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for reporting.
- Devices may be configured to use UDP or TCP on port 8888 when pointing to Plaspy.
- Plaspy uses the same port 8888 for all supported devices to simplify configuration and device provisioning.
- Transport selection can affect delivery characteristics; some firmware variants prefer TCP while others support UDP for lower overhead.
- Ensure the device APN and outbound networking are allowed by the SIM carrier so packets reach the Plaspy endpoint.
- When configuring devices use the Plaspy endpoint and port so automatic detection and processing occur on the server side.

## Protocol Compatibility Notes

- Firmware revisions can change available features and message formats, so verify behavior after firmware updates.
- Hardware variants such as 4 pin and 8 pin models may expose different inputs and remote control options that affect what telemetry is available.
- While many G900LS units are GT06 compatible for backend integration, manufacturer implementation details can vary between builds and regions.
- Transport selection matters: some devices require TCP while others may be configured to use UDP on the same Plaspy port.
- Remote command support depends on firmware and device wiring for relays and immobilizer functions.
- Always validate compatibility and command availability against the manufacturer documentation for the exact serial number and firmware level.

## Why Protocol Understanding Matters

A practical understanding of the G900LS communication protocol helps ensure accurate setup, reliable reporting, and efficient troubleshooting when integrating devices with Plaspy. Knowing the connection context and common variations reduces downtime and improves the quality of the data feeding into maps, alerts, and reports.

- Ensures correct APN and server settings so the tracker can reach d.plaspy.com or the IP address.
- Helps diagnose missing data or intermittent reporting by checking transport, firmware, and power state.
- Guides expectations about which events and remote commands are available for a given firmware revision.
- Supports planning for data usage by selecting appropriate upload intervals and event reporting behavior.
- Aids in identifying whether a reported issue is device side or platform side before contacting manufacturer or support.

## Why Use Plaspy with This Protocol

Using the CanTrack G900LS with Plaspy provides organizations with a streamlined way to collect precise 4G location data, vehicle telemetry, and event alarms in a single platform. Plaspy ingests position updates and telemetry from the tracker so operations teams can monitor fleets, configure alerts, review historical trips, and take action on power loss or movement events where the device supports those features.

To learn more about Plaspy and how the platform works with devices like the G900LS visit https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific and firmware information on the manufacturer site https://www.cantrackgps.com/ before making deployment decisions.
