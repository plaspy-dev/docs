---
slug: /aoya/ay_t801/protocol
id: ay_t801-protocol
sidebar_label: Protocol
title: AoYa - AY-T801 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the AoYa AY T801 tracker and how it communicates with Plaspy servers
keywords:
  - AoYa AY-T801
  - AoYa AY-T801 protocol
  - AY T801 GPS tracker
  - AoYa GPS protocol
  - AY-T801 Plaspy compatibility
  - vehicle tracking AY-T801
  - Beidou GPS tracker protocol
  - AY-T801 communication protocol
  - fleet tracking AoYa AY-T801
  - Plaspy tracker integration
---

# AoYa - AY-T801 Protocol

This page describes the public protocol context for using the AoYa AY-T801 tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform and what to expect when configuring the tracker to report location, status, and alarms to the platform. The goal is to provide clear, non sensitive information that helps administrators and integrators understand how the tracker connects to Plaspy and what variables can affect communication.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a unit reports to the platform. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so this page presents general guidance for integration while encouraging verification against the device documentation and manufacturer resources.

## Protocol Overview

The AY-T801 uses its onboard positioning systems and internal firmware to collect location, status, and alarm information and send those reports to a remote server. The protocol defines how the tracker identifies itself, reports telemetry and alarms, and how remote commands or configuration messages can be exchanged when supported by the device.

- Enables periodic and event driven reporting of GPS and Beidou positions to a server for tracking and playback.
- Carries device identifiers and status fields that allow Plaspy to associate messages with the correct asset.
- Conveys digital inputs and alarms such as ACC status, power alarm, vibration, geofence triggers, and low battery alerts.
- Supports remote control actions when the manufacturer implements command paths such as remote engine cut or configuration updates.
- Allows Plaspy to interpret incoming messages into location, speed, heading, and alarm events for monitoring and alerts.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices on a single shared endpoint and automatically determines the tracker protocol based on the incoming connection and message content. In most deployment scenarios users do not need to manually pick a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP for direct connections is 54.85.159.138.
- Plaspy listens on port 8888 and all supported devices use the same port for reporting.
- Devices may be configured to use either UDP or TCP for reporting depending on device capability and configuration.
- When a properly configured AY-T801 reports to the Plaspy endpoint, Plaspy will automatically detect and interpret the incoming messages.

## Transport and Connection Context

Connection choices and transport behavior affect reliability and latency but do not change the high level role of the protocol. The AY-T801 can be set to report over either UDP or TCP depending on device firmware and configuration options. The important element for Plaspy integration is that the tracker is pointed to the Plaspy reporting endpoint.

- Devices can be configured to use UDP on port 8888 for lower overhead reporting.
- Devices can alternatively use TCP on port 8888 when persistent connections or delivery confirmation is desired and supported.
- Trackers should target d.plaspy.com or the Plaspy server IP 54.85.159.138 when configuring the reporting address.
- All devices supported by Plaspy share the same reporting port to simplify configuration and detection.
- Network conditions, NAT, and carrier restrictions can affect whether UDP or TCP is preferable for a given deployment.

## Protocol Compatibility Notes

- The AY-T801 is compatible with Plaspy when configured to report to the Plaspy endpoint, but behavior can vary by firmware release.
- Firmware updates from the manufacturer can change message timing, field sets, or available alarms; verify firmware level when troubleshooting.
- Hardware revisions or regional variants may differ in supported transports or optional features such as remote engine control.
- Some features described by the manufacturer such as light alarm or track compensation depend on device configuration and firmware options.
- Choose UDP or TCP based on device capability and network environment, and confirm the selected transport in device settings.
- Always validate expected alarm names and field mappings against the device and Plaspy during initial setup.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure reliable setup, accurate event mapping, and efficient troubleshooting between the device and Plaspy. A clear grasp of what the device reports and how it connects reduces time to diagnose issues and helps maintain consistent fleet visibility.

- Ensures correct device registration and association with assets in Plaspy.
- Helps debug connectivity issues related to transport selection or network reachability.
- Clarifies how alarms and digital inputs map into Plaspy alerts and dashboards.
- Supports planning for firmware updates and feature changes that may affect integration.
- Aids in assessing how remote control features will behave when routed through Plaspy.

## Why Use Plaspy with This Protocol

Using the AoYa AY-T801 with Plaspy gives organizations a consolidated way to collect position, status, and alarm data from compact Beidou and GPS enabled trackers. Plaspy turns the device reports into usable information for live monitoring, historical playback, geofence alerts, and fleet level reporting, helping teams maintain security and operational oversight.

If you want to learn more about how Plaspy works with devices like the AY-T801 and other compatible trackers, visit https://www.plaspy.com. For the most current device specific protocol descriptions, firmware notes, and implementation details check the manufacturer documentation at http://www.aoyagps.com/ as protocol support and firmware behavior can change over time.
