---
slug: /itriangle/bharat101_plus_4g_with_can/protocol
id: bharat101_plus_4g_with_can-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Plus 4G with CAN Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for iTriangle Bharat101 Plus 4G with CAN and how it communicates with Plaspy for fleet tracking
keywords:
  - iTriangle Bharat101 Plus 4G with CAN protocol
  - Bharat101 Plus 4G protocol
  - iTriangle GPS tracker protocol
  - Bharat101 CAN bus telemetry
  - Plaspy compatible tracker
  - vehicle tracking protocol
  - fleet management telemetry
  - AIS 140 tracker protocol
  - Bharat101 Plaspy integration
  - 4G GPS tracker protocol
---

# iTriangle - Bharat101 Plus 4G with CAN Protocol

This page describes the public protocol context for using the iTriangle Bharat101 Plus 4G with CAN tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, what role the communication protocol plays in delivering location and vehicle telemetry, and what to check when integrating this AIS-140 certified tracker into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is reporting to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page avoids firmware specific details and encourages verification against the manufacturer documentation where needed.

## Protocol Overview

The tracker reporting protocol defines how the Bharat101 Plus 4G with CAN transmits location, sensor and CAN bus telemetry to a remote server so Plaspy can ingest and present that data. In practice this protocol governs signaling used to identify the device, periodic or event driven position reports, and the transfer of CAN derived parameters and input/output state for fleet workflows.

- Enables transmission of GNSS position, speed, and time to Plaspy for live tracking and history.
- Carries CAN bus derived telemetry such as engine parameters and vehicle sensor values when enabled.
- Conveys digital input and output states, accelerometer events, tamper alerts, and ignition status to support alarms and automation.
- Provides a channel for device level health reporting such as battery backup status and connectivity state without exposing firmware internals.
- Supports remote management triggers such as OTA capable notifications as reported by the device, subject to manufacturer features and configuration.

## How Plaspy Detects the Protocol

Plaspy accepts reporting from a wide range of tracker models using a shared network endpoint and port and uses that endpoint to automatically determine the tracker protocol in most cases. When the Bharat101 Plus 4G with CAN is configured to report to Plaspy, the platform ingests the incoming traffic and applies the appropriate handling for the device type without manual protocol selection in the typical setup flow.

- Plaspy listens on a single common port for device reports and applies automatic detection for supported trackers.
- Users normally only need to point the device at the Plaspy endpoint and use the correct transport; Plaspy handles protocol recognition.
- If the tracker is configured properly and reachable at the Plaspy endpoint, manual protocol selection inside Plaspy is usually unnecessary.
- Automatic detection reduces setup complexity for fleets with mixed device models while preserving per device data mapping.
- For edge cases or custom firmware, Plaspy support can help confirm the device is reporting in an expected format.

## Transport and Connection Context

Connection settings describe how the device reaches Plaspy but do not expose parser logic or internal message formats. The Bharat101 Plus 4G with CAN can be pointed at Plaspy using standard network transports supported by the device firmware, and Plaspy provides a stable public endpoint for ingestion.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port for device reporting which simplifies firewall and network planning.
- Choosing UDP or TCP depends on the tracker firmware and operational preferences for delivery semantics and retransmission.
- Ensure network firewalls and carrier APN settings permit outbound traffic to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features; always check the device firmware release notes.
- Hardware variants or regional SKUs may have differing feature sets such as CAN channel availability or BLE configuration options.
- Transport choice of UDP versus TCP may affect behavior; validate which transport your device firmware uses by default.
- AIS-140 certification addresses regulatory compliance but does not guarantee identical protocol behavior across firmware versions.
- Manufacturer configuration options like enabling CAN parameter forwarding or fuel sensor mappings can alter the telemetry delivered to Plaspy.
- Validate integration details against iTriangle documentation and test a representative device before large scale deployment.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure reliable setup, correct mapping of vehicle telemetry into Plaspy, and faster resolution when reports are missing or fields differ from expectations.

- Helps you configure network rules and carrier APN settings to allow traffic to d.plaspy.com or 54.85.159.138 on port 8888.
- Aids in confirming whether the device should be using UDP or TCP and how that choice impacts delivery and retries.
- Makes it easier to map CAN sourced parameters into Plaspy vehicle profiles and reporting templates.
- Speeds troubleshooting by clarifying which elements are device side configuration and which are platform mapping behaviors.
- Supports change management when updating firmware or replacing hardware so you can preserve telemetry consistency.

## Why Use Plaspy with This Protocol

Using the Bharat101 Plus 4G with CAN alongside Plaspy gives fleet operators the combination of a rugged, AIS-140 capable telematics endpoint and a platform that automatically accepts device reports at a shared Plaspy endpoint. This pairing is useful for organizations that need consistent location visibility, CAN based diagnostics, and event driven alerts for operational monitoring and compliance workflows.

If you want to learn more about how Plaspy handles device integrations and fleet capabilities, please visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions for the Bharat101 Plus 4G with CAN, verify information on the manufacturer site https://www.itriangle.net/ since protocol support and firmware behavior can change over time.
