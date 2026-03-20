---
slug: /winrich/tk_168/protocol
id: tk_168-protocol
sidebar_label: Protocol
title: Winrich - TK-168 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Winrich TK-168 GPS tracker compatibility with Plaspy platform
keywords:
  - Winrich TK-168 protocol
  - Winrich TK-168 GPS protocol
  - Winrich TK-168 tracking
  - Winrich protocol Plaspy
  - TK-168 GPS tracker
  - vehicle tracking Plaspy
  - fleet tracking Winrich
  - Plaspy tracker compatibility
  - GPS tracker protocol guide
  - tracker communication protocol
---

# Winrich - TK-168 Protocol

This page provides a public, non sensitive overview of the communication context for using the Winrich TK-168 tracker with the Plaspy platform. It explains how the device can report location and telemetry to Plaspy and what role the tracker reporting protocol plays in integration, while avoiding implementation specifics that are not public.

The TK-168 is a compact vehicle GPS tracker with SiRF III GNSS performance and quad band GSM GPRS connectivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so users should confirm device specific details through manufacturer documentation when necessary.

## Protocol Overview

The tracker reporting protocol defines how the TK-168 sends identification, location, and telemetry to a server so that Plaspy can ingest and present the data. Public protocol context covers the observable behaviors needed to route and accept device reports without revealing private parser or binary formats.

- Enables the tracker to identify itself to a remote server so Plaspy can associate incoming messages with the correct device account.
- Carries GPS position, timestamp, and basic telemetry required for live monitoring, alerts, and historical playback.
- Supports transport over the cellular data channel so GPRS uploads deliver near real time updates to Plaspy.
- Works alongside SMS fallback options for environments where data is unavailable or for initial device provisioning.
- Governs how remote commands and control actions issued from Plaspy are delivered to the device when supported by the firmware.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reporting from many tracker models using a single shared endpoint and port. When a properly configured TK-168 reports to Plaspy, the platform automatically recognizes the device protocol so manual protocol selection inside Plaspy is typically not required.

- All devices report to the same Plaspy server endpoint and port, simplifying device configuration for administrators.
- Plaspy server domain for device reporting is d.plaspy.com which resolves to the Plaspy server address.
- Plaspy server IP address and listening port are published for clarity: 54.85.159.138 and port 8888.
- The platform automatically detects the tracker protocol after the device begins reporting, so devices usually do not need a protocol selection inside Plaspy.
- Proper device configuration on the tracker side to point to Plaspy and to include any required device identifiers is the common setup step.

## Transport and Connection Context

The TK-168 can send its data to Plaspy over cellular data using GPRS. Plaspy accepts connections on a single port so administrators can point devices to the Plaspy endpoint and protocol detection is handled server side.

- Devices may be configured to use UDP or TCP for reporting depending on device support and chosen configuration.
- The Plaspy reporting endpoint is d.plaspy.com which can be used as the server host on the device.
- As an alternative, the Plaspy server numeric address 54.85.159.138 is available for configuration where DNS is restricted.
- All devices supported by Plaspy use the same port, 8888, for incoming tracker reports.
- Use GPRS data mode for real time position updates and SMS mode where data is not preferred or available.

## Protocol Compatibility Notes

- Firmware variations can change which telemetry fields are reported and how frequently the device sends position updates.
- Hardware revisions or custom configurations from installers can affect available inputs, outputs, and remote control features.
- Some TK-168 units may rely on SMS for certain control commands while others can accept remote commands over GPRS depending on firmware.
- Transport choice between UDP and TCP should match what the device supports and how the SIM data plan and network environment behave.
- Always validate device identifier formatting and APN settings during provisioning so reports can be associated correctly in Plaspy.
- When in doubt, confirm device-specific behavior and supported commands against the manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the TK-168 communicates with Plaspy helps ensure a smooth setup, reliable ongoing reporting, and faster troubleshooting when issues arise. While Plaspy handles protocol detection and central routing, awareness of transport and firmware differences prevents common configuration errors.

- Enables correct APN and server settings to be applied on the device for dependable GPRS reporting.
- Makes it easier to verify that the device is reaching the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Helps distinguish between hardware, firmware, or network causes when updates stop arriving in Plaspy.
- Supports informed decisions about using UDP versus TCP depending on the device and network behavior.
- Assists fleet managers and technicians in ensuring the device sends the desired telemetry for alerts and reporting.

## Why Use Plaspy with This Protocol

Using the TK-168 with Plaspy provides operators with immediate visibility into vehicle location and key telemetry through a single platform that automatically handles many common tracker protocols. The combination of the TK-168’s compact design and Plaspy’s protocol detection reduces configuration complexity for large deployments and offers core fleet management features such as live tracking, history replay, and remote control support where the device firmware allows it.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer implementation notes verify current information with Winrich at http://www.winrichgroup.com/en/ as these details can change over time.
