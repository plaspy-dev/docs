---
slug: /falcom/fox3_4g_na/protocol
id: fox3_4g_na-protocol
sidebar_label: Protocol
title: Falcom - FOX3-4G-NA Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Falcom FOX3 4G NA tracker and how it communicates with Plaspy
keywords:
  - Falcom FOX3-4G-NA protocol
  - FOX3-4G-NA GPS tracker
  - Falcom tracker protocol
  - FOX3-4G-NA Plaspy compatibility
  - vehicle telematics Falcom
  - FOX3 GPS communication
  - Falcom FOX3 tracking protocol
  - GPS tracker Plaspy integration
  - FOX3 device communication
  - Falcom vehicle tracking
---

# Falcom - FOX3-4G-NA Protocol

This page covers the public protocol context for using the Falcom FOX3-4G-NA tracker with Plaspy. It summarizes how the device communicates with Plaspy, the role of the tracker reporting protocol, and the connection settings you will commonly use when integrating the FOX3-4G-NA into a fleet management workflow. The information here is intended to be non-sensitive and focused on integration guidance rather than internal firmware specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The FOX3-4G-NA offers LTE Cat 4 connectivity with GNSS positioning and a range of I O expansion options; exact protocol behavior and available features may vary by firmware version, hardware revision, and manufacturer implementation. Plaspy's public endpoint for device reporting is d.plaspy.com which resolves to 54.85.159.138 and the standard port used for device connections is 8888.

## Protocol Overview

The protocol used by the FOX3-4G-NA on the network is the vehicle's method of sending position, status, and event data to a remote server such as Plaspy. It governs how telemetry, alerts, I O states, and status reports are packaged and transmitted so that Plaspy can interpret them and present actionable information to users. This page describes that role in general terms and how it fits into a Plaspy integration.

- Transmits GNSS position data and timestamps so Plaspy can display location and history.
- Reports vehicle status, input and output states, and alert events for monitoring and automation.
- Sends periodic telemetry and history records that enable reporting, playback, and analytics.
- Supports remote configuration and diagnostics over the network when enabled by the device.
- Can include encrypted or authenticated payloads depending on device firmware and settings.

## How Plaspy Detects the Protocol

Plaspy uses a unified endpoint and port for incoming device connections and performs automatic protocol detection for supported trackers. In most cases, when the FOX3-4G-NA is configured to report to Plaspy's endpoint, no manual protocol selection is required inside the Plaspy platform. Detection helps streamline setup for administrators and reduces configuration steps during device provisioning.

- Plaspy receives device connections on the domain d.plaspy.com which resolves to 54.85.159.138.
- The shared listening port for device reporting is 8888 and is used for all devices in Plaspy.
- Plaspy automatically detects the tracker protocol so users typically do not select a protocol manually.
- Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection.
- Detection covers common reporting modes used by vehicle trackers but behavior depends on the device firmware.

## Transport and Connection Context

Connection context describes how the FOX3-4G-NA establishes transport-level communication with Plaspy. Depending on device configuration and firmware options, the tracker may use different transport methods to reach the Plaspy endpoint. The following points clarify typical transport choices and address information.

- The FOX3-4G-NA may be configured to use either UDP or TCP to report to Plaspy, depending on device support and settings.
- Plaspy's recommended public endpoint is d.plaspy.com and the equivalent public IP is 54.85.159.138.
- All devices in Plaspy use the same port for reporting which is 8888, simplifying firewall and network rules.
- Choose UDP for lightweight periodic reporting where supported, or TCP if the device and network require a reliable transport.
- Ensure APN and cellular data settings on the device are correct so it can reach the Plaspy endpoint over the mobile network.

## Protocol Compatibility Notes

- Compatibility can depend on FOX3-4G-NA firmware version; features such as encryption or extended history modes may differ between releases.
- Hardware revisions and optional IOBOX expansions can change available telemetry and event types reported to Plaspy.
- Manufacturer configuration options determine whether the device uses UDP or TCP to report to a remote server.
- Network policies, APN configuration, and SIM provisioning can affect the device ability to reach d.plaspy.com.
- Validate expected behavior in a test or staging environment before deploying at scale.
- Consult Falcom documentation for device specific settings and any optional protocol modes the device may offer.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the FOX3-4G-NA helps ensure reliable setup, accurate telemetry, and efficient troubleshooting when integrating with Plaspy. Awareness of what the device sends and how Plaspy receives it reduces deployment friction and supports operational continuity.

- Ensures correct device configuration so the tracker reports to d.plaspy.com on port 8888 using the intended transport.
- Helps troubleshoot connectivity issues related to APN, carrier restrictions, or firewall rules.
- Aids in validating that inputs, outputs, and alert events from IOBOX expansions are correctly represented in Plaspy.
- Supports planning for firmware upgrades and feature rollouts by matching device capabilities to Plaspy expectations.
- Improves operational reliability by clarifying which features are device side and which are platform side.

## Why Use Plaspy with This Protocol

Using the Falcom FOX3-4G-NA with Plaspy provides organizations with a stable way to collect high bandwidth GNSS and vehicle telemetry while leveraging Plaspy's automatic protocol detection and unified device endpoint. The tracker’s LTE Cat 4 connectivity, flexible I O options, and GNSS accuracy make it well suited for fleet management, asset monitoring, and industrial telematics when paired with a platform that supports automatic protocol handling.

To learn more about how Plaspy supports device connectivity and fleet visibility visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information on the manufacturer site https://www.falcom.de since protocol support and firmware behavior can change over time.
