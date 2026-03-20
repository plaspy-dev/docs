---
slug: /aoya/super_mini/protocol
id: super_mini-protocol
sidebar_label: Protocol
title: AoYa - super mini Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for the AoYa super mini GPS tracker and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - AoYa super mini protocol
  - AoYa super mini GPS
  - AoYa super mini Plaspy compatibility
  - AoYa super mini communication
  - AoYa super mini tracking
  - AoYa GPS tracker protocol
  - Plaspy compatible trackers
  - vehicle tracking AoYa
  - fleet management AoYa
  - GPS tracker protocol guide
---

# AoYa - super mini Protocol

This page documents the public protocol context for using the AoYa super mini GPS tracker with Plaspy. It focuses on how the device reports location and status to a backend service, and what to expect when configuring the tracker to work with Plaspy. The content is intended to help administrators and integrators understand connection basics without exposing manufacturer private details.

Plaspy uses shared connection settings across all supported trackers and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can still vary by device firmware, hardware revision, and manufacturer implementation, so final compatibility and feature availability depend on the specific unit and firmware build.

## Protocol Overview

The communication protocol for the AoYa super mini defines how the tracker identifies itself, reports location and sensor data, and transmits alarms and status updates to a remote server. For integration with Plaspy, the protocol's public role is to provide consistent, timestamped telemetry and event notifications that the platform can interpret for mapping, alarms, and history playback.

- Transmits periodic and event driven location reports to a configured server endpoint for consumption by Plaspy
- Sends alarm and sensor events such as light alarm, power cut alarm, overspeed alerts, and vibration events
- Includes device identity and basic status metadata so Plaspy can attribute reports to the correct asset
- Supports supplemental location sources such as LBS and WiFi to improve fix availability in challenging environments
- Enables remote control features such as engine immobilization commands where supported by the manufacturer and configuration

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and recognizes the tracker protocol automatically when properly configured devices report to the platform. In most cases you do not need to select a protocol inside Plaspy manually; pointing the AoYa super mini to the Plaspy endpoint with the correct transport is typically sufficient for automatic detection.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138 for direct IP deployments
- Plaspy uses a single port for all devices to simplify configuration and routing
- Plaspy automatically detects the tracker protocol when a device reports to the shared endpoint
- If a tracker is not detected automatically, double check device reporting settings and manufacturer documentation

## Transport and Connection Context

The transport layer determines how the AoYa super mini sends its protocol messages to Plaspy. Depending on the device firmware and configuration, the tracker may support either UDP or TCP reporting. Use the transport option supported by the device and allowed on your network to ensure reliable delivery.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- Plaspy accepts device reports on port 8888 and all devices supported by Plaspy use the same port
- The tracker may use UDP or TCP on port 8888 depending on device support and configuration
- Choose UDP for simple low overhead reporting or TCP where a reliable byte stream is preferred and the device supports it
- Ensure network firewalls allow outbound traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- The AoYa super mini is compatible with Plaspy when configured to report to the Plaspy endpoint and port
- Firmware revisions can change available features and message behavior so behavior may differ between units
- Hardware revisions or optional modules can affect supported sensors and remote control features
- Transport selection between UDP and TCP must match device configuration and network policy
- Manufacturer region variants can introduce protocol or parameter differences; verify device region settings
- Always validate device behavior by consulting the manufacturer documentation before large scale deployment

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure correct setup, faster troubleshooting, and consistent long term operation when using Plaspy. Knowing what the device can and cannot report, and how it reports, reduces integration time and helps maintain reliable fleets.

- Enables correct device configuration for reporting to d.plaspy.com or 54.85.159.138 on port 8888
- Helps troubleshoot missed reports or incomplete telemetry by clarifying transport and event rules
- Clarifies which alarms and sensors are reported so alerting and rules in Plaspy can be tuned
- Supports planning for firmware updates and hardware replacements that may alter protocol behavior
- Helps verify that remote control features like engine cut off are supported and configured safely

## Why Use Plaspy with This Protocol

Using the AoYa super mini with Plaspy gives organizations a straightforward path to consolidate location, status, and alarm data into a single fleet management platform. Plaspy's automatic protocol detection and consistent endpoint simplify device onboarding, while support for common transports and shared port settings reduces per device configuration overhead.

To learn more about Plaspy and how it works with a wide range of trackers visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time; for the latest device specific protocol information verify the current documentation and firmware notes on the manufacturer site at http://www.aoyagps.com/ .
