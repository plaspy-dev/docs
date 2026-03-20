---
slug: /cantrack/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: CanTrack - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack TK103B and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - CanTrack TK103B protocol
  - CanTrack TK103B GPS protocol
  - TK103B Plaspy compatibility
  - TK103B communication protocol
  - TK103B tracking protocol
  - CanTrack GPS tracker protocol
  - Plaspy device integration
  - Fleet tracking TK103B
  - GPS tracker protocol guide
  - Vehicle tracking CanTrack
---

# CanTrack - TK103B Protocol

This page describes the public protocol context for using the CanTrack TK103B with Plaspy. It focuses on how the device reports position, alarms and basic telemetry to the Plaspy platform and what that communication means for setup, monitoring and troubleshooting. The content here explains integration relevant details without exposing private or sensitive implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The TK103B is typically configured to report over GPRS using TCP or UDP and may also support SMS and local SD logging as fallbacks. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so expect some differences between units and firmware builds.

## Protocol Overview

The protocol used by the TK103B defines how the tracker identifies itself to a server, reports position and status, and communicates alarm and telemetry events. In Plaspy the protocol role is to deliver timely, structured information that the platform can interpret for live maps, alerts and history.

- Enables the device to send location coordinates and time stamped status updates to the Plaspy server.
- Conveys alarms and input states such as ignition, door, SOS and overspeed so Plaspy can trigger notifications and workflows.
- Supplies telemetry fields needed for fleet monitoring such as movement, power state and basic sensor flags.
- Supports fallbacks like SMS and SD card logging so data continuity is maintained when mobile connectivity fluctuates.
- Provides the basis for Plaspy to parse and present live tracking, history replay and event driven alerts without requiring manual protocol selection by the user.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and determines the appropriate protocol handling for each connected device. This means a TK103B configured to point at the Plaspy endpoint will be recognized and mapped to the correct processing path inside the platform.

- Plaspy listens on a single port for all devices which simplifies device configuration and onboarding.
- When a TK103B reports to the Plaspy endpoint the platform automatically detects the tracker protocol and associates the feed with the correct device type handling.
- Users generally do not need to pick a protocol inside Plaspy provided the device is correctly configured to report to the Plaspy endpoint.
- Proper device identification on first connect allows Plaspy to attach location and alarm data to the right vehicle and user account.
- Automatic detection reduces manual setup steps and minimizes protocol selection errors during deployment.

## Transport and Connection Context

Connection and transport choices influence how the TK103B reaches Plaspy and how resilient reporting is under varying network conditions. The TK103B supports multiple reporting channels and Plaspy accepts device traffic on a consistent endpoint to simplify deployments.

- Devices can be configured to report to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy accepts TCP or UDP transport on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port which streamlines firewall and APN configuration for fleets.
- When GPRS is interrupted, SMS commands and local SD card logging can provide limited control and history until data connectivity is restored.
- Choosing TCP or UDP may affect delivery guarantees and behavior during mobile handoffs, so select transport according to network and deployment needs.

## Protocol Compatibility Notes

- Firmware differences can change the exact set of fields, command names and reporting frequency between TK103B units.
- Hardware revisions and manufacturer variants may alter supported inputs, alarm behavior and reporting options.
- Some TK103B units support both TCP and UDP while others prefer one transport; verify your unit configuration before large scale rollout.
- Manufacturer side settings and default APN or server strings can differ regionally and may require manual update to point at Plaspy.
- Plaspy automatically handles many common tracker variants, but confirm device behavior after the first connection to ensure full telemetry and alarm mapping.
- Always validate compatibility and feature availability against the manufacturer documentation for the specific firmware revision on your device.

## Why Protocol Understanding Matters

Understanding how the TK103B communicates helps ensure reliable setup, accurate data interpretation and faster troubleshooting when operating with Plaspy. Practical knowledge of the protocol and transport context prevents common deployment issues and supports better operational uptime.

- Makes it easier to confirm the device is correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Helps identify whether a connectivity issue is transport related for example TCP versus UDP or cellular network problems.
- Clarifies which alarms and inputs the device can report and how those map to Plaspy alerts and automation.
- Improves troubleshooting speed by narrowing down whether an issue is device firmware, transport, or platform mapping.
- Supports planning for fallback strategies such as SMS commands or SD card logging for intermittent connectivity environments.

## Why Use Plaspy with This Protocol

Using the TK103B with Plaspy gives fleet operators a straightforward way to receive live position updates, alarms and basic telemetry in a single platform that handles detection and mapping of common tracker behaviors. For organizations managing rental, taxi or commercial fleets the combination of TK103B hardware features and Plaspy visibility supports operational monitoring, incident response and recovery workflows.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time and you should verify the latest device specific protocol and firmware information with the manufacturer at https://www.cantrackgps.com/
