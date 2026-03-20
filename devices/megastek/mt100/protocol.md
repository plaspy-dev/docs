---
slug: /megastek/mt100/protocol
id: mt100-protocol
sidebar_label: Protocol
title: Megastek - MT100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Megastek MT100 GPS tracker integration with Plaspy including transport settings and compatibility notes
keywords:
  - Megastek MT100 protocol
  - Megastek MT100 GPS protocol
  - Megastek MT100 Plaspy
  - MT100 tracking protocol
  - Megastek tracker compatibility
  - MT100 communication protocol
  - personal GPS tracker protocol
  - Plaspy device integration
  - MT100 telemetry compatibility
  - Megastek MT100 integration
---

# Megastek - MT100 Protocol

This page describes the public protocol context for using the Megastek MT100 4G personal GPS tracker with Plaspy. It summarizes how the device reports location and events, what connection settings Plaspy expects, and practical considerations for integration without exposing device internals. The MT100 is a compact IP67 personal tracker with multi mode positioning, two way voice, SOS alarm, and open protocol support that make it well suited for Plaspy deployments.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when the tracker is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by MT100 firmware version, hardware revision, and manufacturer implementation, so this guide focuses on public, non sensitive protocol context and integration practices rather than device firmware internals.

## Protocol Overview

The MT100 communication protocol is the mechanism that allows the tracker to identify itself to Plaspy, transmit position fixes, and report events such as SOS alarms, G sensor triggers, and battery status. Open protocol support and FOTA update capability help keep the MT100 interoperable with Plaspy across firmware updates, while multi mode positioning improves the quality of location data delivered to the server.

- The protocol carries GNSS fixes, Wi Fi assisted locations, and LBS data so Plaspy can display accurate positions and playback history.
- Device events such as SOS, vibration, geo fence breaches, and voice call metadata are transmitted through the same reporting channel and associated with the device identity.
- Reporting intervals and telemetry types can be adjusted on the device or via remote configuration to manage power and network usage while maintaining required visibility.
- Open protocol documentation from the manufacturer enables Plaspy to map incoming telemetry to dashboard fields and alert rules without proprietary dependencies.
- FOTA support in the MT100 lets administrators update device firmware to align with Plaspy enhancements or protocol changes.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device connections and automatically detects the tracker protocol used by an incoming device session. When an MT100 is configured to report to the Plaspy endpoint, users typically do not need to manually select a protocol in Plaspy as long as the device is sending data to the correct server and port.

- Plaspy’s public server endpoint is d.plaspy.com and can also be reached at the public server IP 54.85.159.138 on the configured port.
- Plaspy uses the same port for all supported devices, which simplifies device configuration across mixed fleets.
- When the MT100 reports to the Plaspy endpoint on the configured port, Plaspy will automatically detect and associate incoming telemetry with the device.
- Proper device identity (IMEI or configured device ID) and consistent reporting are required for Plaspy to match incoming data to the correct asset.
- If a tracker appears not to be detected, checking device reporting settings and network reachability to the Plaspy endpoint is the first troubleshooting step.

## Transport and Connection Context

The MT100 can transmit telemetry over cellular data using either UDP or TCP depending on the device configuration and firmware capabilities. For Plaspy integration, ensure the MT100 is configured to use the Plaspy endpoint and the shared port used by the platform to guarantee reliable delivery of location and event data.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and local configuration.
- Devices pointing to Plaspy can use the domain d.plaspy.com or the server IP 54.85.159.138 when DNS resolution is not available.
- All devices in Plaspy use the same port, which reduces configuration complexity for multi device deployments.
- Network conditions, carrier restrictions, and APN settings can affect whether TCP or UDP is the better choice for a particular deployment.
- Confirm that APN and data plan settings allow outbound connections to the Plaspy endpoint and that any intermediate firewalls permit the selected transport.

## Protocol Compatibility Notes

- Firmware revisions can change available commands, reporting fields, and event semantics; validate the device firmware version against current manufacturer notes.
- Hardware revisions or region specific SKUs may have slight protocol differences that affect optional features such as voice metadata or Wi Fi assisted fixes.
- Transport selection (TCP vs UDP) can influence message reliability and retransmission behavior, so choose the transport that fits your reliability and power constraints.
- Open protocol support simplifies integration, but precise field names and units reported can still vary between firmware releases.
- FOTA changes may add or remove telemetry fields; schedule and test firmware updates in a controlled environment before broad deployment.
- Always cross reference observed telemetry with manufacturer protocol documentation when troubleshooting unusual values or missing events.

## Why Protocol Understanding Matters

A basic understanding of the MT100 reporting protocol helps administrators and integrators set up devices correctly, diagnose connectivity or data issues, and tune reporting to meet operational needs. Knowing what to expect from the tracker and how Plaspy receives that data makes deployments more predictable and easier to maintain.

- Ensures device identity and telemetry mapping are correct so events correlate to the right users or assets in Plaspy.
- Helps identify whether missing data is caused by network, transport, device configuration, or firmware behavior.
- Enables informed choices about reporting intervals and power management to balance battery life with tracking resolution.
- Assists with planning firmware updates and testing FOTA to avoid unexpected changes in telemetry fields.
- Improves incident response by ensuring SOS and voice events are reliably delivered and actionable within Plaspy.

## Why Use Plaspy with This Protocol

Using the MT100 with Plaspy gives organizations a straightforward path to combine reliable personal tracking hardware with a centralized telemetry and alerting platform. The MT100’s multi mode positioning, SOS features, and open protocol support stream telemetry to Plaspy where teams can monitor live location, configure geofences, and respond to alarms from a single interface.

Plaspy’s shared connection settings and automatic protocol detection reduce setup overhead for fleets that mix different tracker models. To learn more about using Plaspy with compatible devices and to review platform capabilities, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.megastek.com/ before large scale rollouts.
