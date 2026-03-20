---
slug: /cantrack/tk100n/protocol
id: tk100n-protocol
sidebar_label: Protocol
title: CanTrack - TK100N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the CanTrack TK100N tracker with Plaspy for reliable vehicle telemetry
keywords:
  - CanTrack TK100N protocol
  - CanTrack TK100N GPS protocol
  - TK100N GT06N compatibility
  - TK100N Plaspy integration
  - CanTrack tracker protocol
  - vehicle GPS tracker protocol
  - fleet tracking TK100N
  - GPS tracker Plaspy integration
  - vehicle telemetry protocol
  - GT06N protocol tracker
---

# CanTrack - TK100N Protocol

This page summarizes the public protocol context for using the CanTrack TK100N tracker with Plaspy. It explains how the device reports position and events in broad terms, highlights the role of the tracker protocol in successful data ingestion, and clarifies the connection settings that Plaspy expects for this model.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For the TK100N, GT06N compatibility is commonly referenced in manufacturer materials. Exact protocol behavior and available fields can still vary by firmware version, hardware revision, or manufacturer implementation, so this page focuses on practical, non-sensitive protocol context rather than device internals.

## Protocol Overview

The communication protocol defines how the TK100N identifies itself, reports location and event data, and accepts remote commands. GT06N compatibility means the device follows a widely used reporting approach for telemetry and alarm events, which Plaspy recognizes and maps into usable location and status records.

- Allows the tracker to send position, speed, timestamp, and basic alarm or input status to Plaspy
- Enables vehicle events such as ACC detection, SOS panic, vibration, and power off to be reported as discrete alerts
- Provides a pathway for remote control commands, for example relay immobilizer actions, when supported by the device and local regulations
- Supports fallback mechanisms such as SMS when IP data connectivity is unavailable, improving resiliency
- Serves as the basis for Plaspy to normalize incoming telemetry and show live tracking and historical traces in the platform

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the tracker protocol used by the device. When a TK100N is properly configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required.

- Plaspy’s public server domain for device reporting is d.plaspy.com
- The platform also accepts connections to the server IP 54.85.159.138
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol
- If the device is configured correctly to report to d.plaspy.com or 54.85.159.138, Plaspy will receive and classify messages for processing
- Users normally only need to set the device APN and server address on the tracker side; Plaspy handles protocol identification

## Transport and Connection Context

Transport is the network layer that carries protocol messages from the TK100N to Plaspy. The TK100N can be configured to use either UDP or TCP reporting according to device support and local network conditions. Plaspy listens on a single, shared port for all devices to simplify configuration.

- Devices may use UDP or TCP on port 8888 depending on tracker settings and network behavior
- Point the device server address to d.plaspy.com or directly to 54.85.159.138 to report to Plaspy
- Plaspy’s use of a common port for all devices reduces the need for per-device port configuration
- When GPRS data is unavailable, the TK100N typically supports SMS command and fallback reporting to maintain basic functionality
- Ensure APN, server address, and transport (UDP or TCP) are configured on the TK100N to match your network and operational requirements

## Protocol Compatibility Notes

- GT06N compatibility is commonly cited for the TK100N, but firmware variations can change supported message fields or optional features
- Hardware revisions and region-specific variants may differ in supported cellular bands and available alarms or inputs
- Transport choice (TCP vs UDP) can affect delivery guarantees and how retransmissions are handled at the network level
- SMS fallback behavior and command sets are vendor provided and may vary between firmware releases
- Always confirm that the device reporting address is set to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion
- Validate any advanced control features such as remote relay commands against device documentation and local regulatory restrictions

## Why Protocol Understanding Matters

Having a practical understanding of the TK100N communication protocol helps ensure reliable setup, faster troubleshooting, and predictable platform behavior when the device is used with Plaspy.

- Speeds initial device onboarding by ensuring APN, server, and transport settings match Plaspy requirements
- Helps diagnose connectivity issues by clarifying whether problems are network, transport, or firmware related
- Ensures alarm and input signals such as ACC or SOS are mapped correctly into Plaspy alerts and workflows
- Aids planning for redundancy by understanding SMS fallback and how it complements GPRS reporting
- Supports lifecycle management by highlighting when firmware updates or hardware changes may require revalidation

## Why Use Plaspy with This Protocol

Using the CanTrack TK100N with Plaspy provides organizations with a straightforward path to real-time location, event alerts, and remote control capabilities suitable for fleet management and asset protection. The TK100N’s GT06N compatibility and SMS fallback combine with Plaspy’s automatic protocol detection to simplify deployment and reduce manual configuration steps.

Learn more about Plaspy and how the platform handles device reporting and fleet telemetry at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, please verify information on the manufacturer site https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
