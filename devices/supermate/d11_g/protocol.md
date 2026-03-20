---
slug: /supermate/d11_g/protocol
id: d11_g-protocol
sidebar_label: Protocol
title: Supermate - D11-G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Supermate D11 G and how it communicates with Plaspy for tracking and fleet use
keywords:
  - Supermate D11 G protocol
  - Supermate D11 GPS protocol
  - Supermate D11 G Plaspy compatibility
  - Supermate D11 communication protocol
  - D11 G tracking protocol
  - Supermate GPS tracker protocol
  - Plaspy device compatibility
  - Plaspy GPS protocol
  - fleet tracking Supermate D11
  - asset tracking D11 G
---

# Supermate - D11-G Protocol

This page describes the public protocol context for using the Supermate D11 GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in broad, non sensitive terms so administrators and integrators can understand reporting, connectivity, and compatibility considerations without exposing private implementation details.

The Supermate D11 is a compact, portable tracker designed for assets, vehicles, and personal protection. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Review manufacturer documentation for model specific details when needed.

## Protocol Overview

The device protocol is the set of rules the D11 uses to report location, status, and alerts to a remote server. For Plaspy, the protocol defines how the tracker identifies itself, how it reports periodic or event driven positions, and how command or configuration acknowledgements are represented at a high level.

- Enables the D11 to send GPS positions, device state, and alert events to the Plaspy endpoint.
- Carries identifying information so Plaspy can associate incoming data with a specific device record.
- Translates device telemetry into usable location and status updates for monitoring and reporting.
- Supports periodic reporting and event driven messages such as SOS or geo fence alerts.
- Works over standard transport channels so the tracker can reach the Plaspy server from varied networks.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the tracker protocol based on the incoming traffic pattern and device identifiers. In most cases, when a D11 is configured to report to Plaspy, no manual protocol selection is required inside the Plaspy platform.

- Plaspy listens on a single common port for device traffic across supported models.
- The platform inspects the incoming device identification and message pattern to map data to the correct device record.
- Users generally only need to configure the tracker to report to the Plaspy endpoint; Plaspy handles detection automatically.
- Proper device configuration at the tracker (network server address and transport) is the most common step required for successful detection.
- If a device uses multiple reporting modes, confirm the tracker is set to the expected mode in the device configuration.

## Transport and Connection Context

The D11 may use either UDP or TCP to send data to Plaspy depending on the tracker configuration and firmware capabilities. Plaspy provides a single public endpoint that devices can report to, and all supported devices use the same port.

- Plaspy server domain is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 when a numeric address is required.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies device setup and routing on the platform side.
- Choose TCP or UDP on the device according to coverage and reliability needs in your deployment area.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available events, or transport defaults; always verify compatibility for the specific firmware version in use.
- Hardware revisions or product variants may implement slightly different reporting options or input behaviour.
- Some features such as SOS, geo fencing, or power reporting can be optional or require specific configuration on the device.
- Transport selection (UDP versus TCP) can affect delivery reliability and should match network conditions and device settings.
- Manufacturer configuration tools or SIM provider settings can influence how the device reaches Plaspy and should be checked when troubleshooting.
- Confirm device identifiers reported by the tracker match the device record expected in Plaspy to avoid misattribution.

## Why Protocol Understanding Matters

Understanding the D11 communication protocol helps ensure reliable setup, faster troubleshooting, and predictable operational behavior when integrating the tracker with Plaspy. Clear knowledge of what the device sends and how Plaspy receives it reduces setup time and supports long term maintenance.

- Helps verify the device is correctly reporting to d.plaspy.com or the numeric server address.
- Aids in choosing TCP or UDP in environments where one transport is more reliable.
- Makes it easier to interpret device status and event messages in Plaspy during validation.
- Reduces time to resolve why a tracker is not appearing or why telemetry is missing.
- Supports planning for firmware updates and understanding how changes may impact reporting.

## Why Use Plaspy with This Protocol

Using the Supermate D11 with Plaspy provides a straightforward path to asset visibility and operational oversight. The D11’s compact design and features such as real time tracking, geo fencing, and SOS events translate into actionable data when delivered to a platform that handles device detection and unified connectivity.

Plaspy’s shared endpoint model and automated protocol detection simplify device onboarding and lower the configuration burden for administrators managing mixed fleets. To learn more about Plaspy and how it supports device connectivity and fleet management, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official Supermate website http://www.gps-summit.com/ as implementations can change over time.
