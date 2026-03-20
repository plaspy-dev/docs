---
slug: /cantrack/g900ls_4g/protocol
id: g900ls_4g-protocol
sidebar_label: Protocol
title: CanTrack - G900LS-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for CanTrack G900LS-4G and how it communicates with Plaspy for reliable fleet tracking and telemetry
keywords:
  - CanTrack G900LS-4G protocol
  - CanTrack G900LS-4G GPS protocol
  - G900LS-4G Plaspy compatibility
  - CanTrack tracking protocol
  - G900LS-4G communication
  - G900LS-4G tracking protocol
  - Plaspy device integration
  - GPS tracker protocol guide
  - vehicle tracking G900LS-4G
  - fleet tracking CanTrack
---

# CanTrack - G900LS-4G Protocol

This page describes the public protocol context for using the CanTrack G900LS-4G tracker with Plaspy. It summarizes how the device communicates with Plaspy for real time location, telemetry, alarms, and remote control where supported. The information here focuses on connection and protocol concepts useful for integration and troubleshooting without exposing proprietary or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The G900LS-4G commonly implements GT06-series style reporting and TCP/IP reporting as described by the manufacturer, but exact behavior can vary by firmware version, hardware revision, and manufacturer configuration. For device specific frames, commands, and firmware change history consult the official CanTrack documentation.

## Protocol Overview

The G900LS-4G protocol is the set of rules the tracker uses to send GPS positions, vehicle telemetry, alarms, and status updates to a remote server. At a high level, the protocol enables the device to identify itself to the server, transmit time stamped telemetry, and indicate events such as ignition change, power loss, or sensor triggers. Plaspy ingests those messages to present maps, alerts, and reports to administrators.

- Provides device identification and session context so the server can associate reports to the correct asset.
- Transmits GNSS position, speed, heading, and time so Plaspy can display accurate location and trip data.
- Carries telemetry fields such as ACC/ignition status, power and backup battery state, and alarm events for map alerts and reports.
- Supports event driven messages for movement, angle change, vibration, and power cut to enable real time alerting.
- Uses TCP/IP reporting patterns commonly found in GT06-series devices to deliver messages reliably to a remote endpoint.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many tracker models and automatically determine the protocol used by the device when data arrives at the platform endpoint. This reduces manual configuration inside Plaspy for most standard tracker setups and speeds up initial device onboarding.

- Devices should be configured to report to the Plaspy endpoint at d.plaspy.com or directly to the IP address 54.85.159.138.
- All devices in Plaspy use the same port, so the platform listens on port 8888 for incoming tracker connections.
- Trackers may be set to use either UDP or TCP transport to send data to port 8888 depending on device capability and site configuration.
- When a properly configured tracker sends its first reports to the Plaspy endpoint, the platform automatically detects the tracker protocol and routes messages to the appropriate ingest logic.
- In most cases users do not need to manually select a protocol inside Plaspy if the device is reporting correctly to the required endpoint and port.

## Transport and Connection Context

Connection context covers how the G900LS-4G reaches Plaspy rather than the detailed packet internals. The tracker supports standard mobile network transports and is typically configured with a remote server address and a port to forward its telemetry.

- The device may be configured to use UDP or TCP on port 8888 depending on the firmware and configuration selected.
- Plaspy accepts connections addressed to the domain d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- All Plaspy supported devices use the same listening port, simplifying APN and device server settings for mixed fleets.
- Transport selection (UDP vs TCP) can affect delivery characteristics and may be chosen based on network behavior and device firmware options.
- Ensure APN and mobile data sessions are properly set on the tracker so it can establish outbound TCP or UDP to the Plaspy endpoint.

## Protocol Compatibility Notes

- The G900LS-4G commonly implements GT06-series style reporting, but GT06 variants and manufacturer extensions exist and can differ between firmware releases.
- Firmware updates, hardware revisions, and OEM customization can change available commands, field order, or optional telemetry fields.
- Transport choice matters: some installations prefer TCP for session reliability while others use UDP for lower overhead; confirm device support for your preferred transport.
- Optional features such as remote relay control for immobilization, power cut reporting, and sensor inputs depend on the installed wiring variant and configuration.
- Validate tracker upload settings (server domain or IP, and port 8888) against Plaspy requirements and verify manufacturer release notes for firmware specific behavioral changes.
- When mixing devices from different production batches, test a representative unit to ensure expected telemetry fields and alarm behavior are present.

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators configure devices correctly, troubleshoot connectivity, and interpret the data Plaspy receives. Even when Plaspy automatically detects the tracker protocol, knowing basic protocol and transport expectations shortens setup time and reduces false alarms.

- Speeds onboarding by ensuring device APN, server address, and port match Plaspy requirements.
- Clarifies which telemetry fields and alarms the tracker will send so Plaspy can present accurate alerts and reports.
- Helps diagnose connectivity issues by identifying whether the tracker is reaching d.plaspy.com or 54.85.159.138 on port 8888 and whether it is using UDP or TCP.
- Informs firmware upgrade decisions and confirms whether a firmware change altered message content or transport behavior.
- Supports correct configuration of optional features such as relay control and input alarms to match operational policies.

## Why Use Plaspy with This Protocol

Using the CanTrack G900LS-4G with Plaspy gives fleet managers and operators a practical path to ingesting GNSS positions, telemetry, and alarms into a single platform. The tracker’s compact hardware, broad voltage range, and common GT06-style reporting make it well suited for mixed fleets where reliable position updates, ignition monitoring, and anti-theft alerts are required.

Plaspy’s shared endpoint model and automatic protocol detection reduce the complexity of setting up multiple device types. To learn more about how Plaspy can work with devices like the G900LS-4G visit https://www.plaspy.com. For the most current device specific protocol documentation, firmware notes, and implementation details verify the manufacturer resources at https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
