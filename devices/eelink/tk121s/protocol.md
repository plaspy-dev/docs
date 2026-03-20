---
slug: /eelink/tk121s/protocol
id: tk121s-protocol
sidebar_label: Protocol
title: EElink - TK121‑S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EElink TK121 S compatibility with Plaspy and MoveLink reporting
keywords:
  - EElink TK121 S protocol
  - EElink TK121 S GPS protocol
  - EElink TK121 S MoveLink
  - TK121 S Plaspy compatibility
  - TK121 S communication protocol
  - GPS tracker protocol Plaspy
  - vehicle tracker MoveLink
  - fleet tracking EElink
  - TK121 S protocol integration
  - EElink tracker documentation
---

# EElink - TK121‑S Protocol

This page documents the public protocol context for using the EElink TK121‑S tracker with Plaspy. It focuses on how the device reports location and event data at a high level and how Plaspy ingests that data for real time tracking and fleet workflows without exposing sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page highlights the general communication context rather than firmware specific command details.

## Protocol Overview

The TK121‑S uses MoveLink protocol 1.9/2.0 for its standard reporting and remote configuration capabilities. In practice, the protocol defines how the tracker packages GPS and LBS positioning, ACC (ignition) state, alarms, and basic telemetry for delivery to a backend platform such as Plaspy.

- Enables the tracker to transmit GPS and LBS positions along with AGPS assisted fixes for faster lock times.
- Reports discrete inputs and state such as ACC ignition, displacement alerts, speed alarms, and geofence events for use in Plaspy alerts and rules.
- Supports remote configuration and management pathways so settings can be adjusted from a platform, app, or SMS without onsite changes.
- Provides the core data Plaspy needs for live map display, route playback, historical reporting, and event notifications.

## How Plaspy Detects the Protocol

Plaspy accepts incoming tracker connections on a single endpoint and port and automatically identifies the reporting protocol when data arrives. This reduces setup steps for most users: once the TK121‑S is pointed at the Plaspy endpoint with correct transport settings, manual protocol selection is typically not required inside Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The shared Plaspy port for all devices is 8888 and Plaspy uses the same port for every supported tracker.
- Plaspy detects the tracker protocol automatically when the device sends its first reports to the endpoint.
- In normal setups you configure the TK121‑S to report to d.plaspy.com or to 54.85.159.138 and Plaspy handles the rest.
- If multiple transports are available on the device, choose the transport that matches network conditions and the device's firmware capabilities.

## Transport and Connection Context

Connection options and transport selection affect how the TK121‑S reaches Plaspy but do not change the high level reporting semantics. Devices can be set to use different transport layers depending on the install and carrier environment.

- The TK121‑S may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can point to the Plaspy reporting address using the domain name d.plaspy.com or the direct server IP 54.85.159.138.
- Plaspy listens on port 8888 for all incoming device traffic, so there is no per device port variation to manage.
- Use UDP where minimal overhead and faster delivery are preferred, or TCP if a reliable transport and connection acknowledgement at the transport layer are desired and supported by the tracker firmware.
- Ensure any network firewalls or APN settings allow outbound traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- MoveLink protocol 1.9/2.0 is the reported protocol family for TK121‑S; firmware versions may change supported message sets or optional features.
- Hardware revisions in small trackers can introduce minor differences in available inputs, I/O behavior, or power characteristics that affect reporting.
- Manufacturer side configuration options and default SMS or platform commands can differ between firmware revisions; consult EElink documentation for exact commands.
- Transport selection (UDP vs TCP) can affect delivery characteristics and should match what the device firmware is designed to use.
- Always validate a sample device with Plaspy in a controlled test before large scale deployment to confirm expected events and telemetry arrive correctly.
- When integrating additional sensors or relays, confirm pin mappings and supported input types for the specific TK121‑S unit you have.

## Why Protocol Understanding Matters

Knowing how the TK121‑S communicates helps installers and administrators get devices online faster, diagnose connectivity issues, and ensure reliable telemetry in production.

- Simplifies initial setup by ensuring the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport.
- Helps troubleshoot missing telemetry by narrowing issues to network transport, firmware settings, or device configuration rather than platform parsing.
- Supports proper use of alarm and geofence features by aligning device-side thresholds and reporting frequencies with Plaspy alerting rules.
- Reduces deployment risk by identifying firmware or hardware revisions that may require special handling or updated configuration steps.
- Enables predictable remote configuration when MoveLink remote management is enabled and compatible with the deployed firmware.

## Why Use Plaspy with This Protocol

Using the TK121‑S with Plaspy provides a straightforward path to vehicle visibility, configurable alerts, and historical reporting without complex per device port management. The tracker’s MoveLink reporting of location, ACC state, and alarm events maps directly into Plaspy dashboards and automated workflows, making it practical for fleet operators who need reliable, low overhead tracking.

If you want to learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the most current device firmware behavior and detailed protocol documentation, please verify device specific information on the manufacturer site https://www.eelink.com.cn/. Protocol support and firmware implementations can change over time, so checking the official EElink documentation will ensure you have the latest details.
