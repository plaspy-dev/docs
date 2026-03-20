---
slug: /telic/sbc3_io/protocol
id: sbc3_io-protocol
sidebar_label: Protocol
title: Telic - SBC3 IO Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the Telic SBC3 IO GPS tracker and how it communicates with Plaspy for reliable outdoor tracking
keywords:
  - Telic SBC3 IO protocol
  - Telic SBC3 IO GPS protocol
  - SBC3 IO Plaspy compatibility
  - Telic GPS tracker protocol
  - Telic SBC3 IO communication
  - SBC3 IO tracking protocol
  - outdoor GPS tracker protocol
  - Plaspy device compatibility
  - fleet management Telic SBC3 IO
  - vehicle tracking Telic SBC3 IO
---

# Telic - SBC3 IO Protocol

This page explains the public protocol context for using the Telic SBC3 IO tracker with Plaspy. It focuses on the communication and connection details that matter when pointing a rugged outdoor unit like the SBC3 IO to Plaspy, without disclosing manufacturer internal or sensitive implementation details. Use this as a protocol-level guide alongside the device documentation for setup and verification.

The SBC3 IO is a rugged, water resistant telematics unit with high sensitivity GPS, integrated antennas, a rechargeable battery, and configurable digital and analog inputs and outputs. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so verify device specific details with the manufacturer where required.

## Protocol Overview

The protocol for the SBC3 IO determines how the device reports position, status, and input/output events to a server such as Plaspy. The public context covered here describes the role of that protocol in establishing reliable reporting and how it relates to Plaspy’s shared endpoint model.

- Carries GPS positions and timestamped telemetry that Plaspy ingests for mapping and reporting.
- Includes device identity and status information that allows Plaspy to associate messages with a tracked asset.
- Transmits input and output events from the SBC3 IO so Plaspy can record digital and analog state changes for monitoring.
- Operates over standard transport channels so devices can reach Plaspy’s public endpoint for collection.
- Enables heartbeat or keepalive reporting patterns that help maintain an accurate online/offline view of the device.

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic at a shared public endpoint and automatically determines the device protocol from the data the tracker sends. In most cases, if the SBC3 IO is configured to report to the Plaspy endpoint, no manual protocol selection inside Plaspy is required.

- Plaspy’s public server domain is d.plaspy.com which devices may use as the reporting host.
- Plaspy’s public server IP is 54.85.159.138 for devices configured with a direct address.
- The shared port used by Plaspy for all devices is 8888 and Plaspy automatically detects the tracker protocol.
- Devices may be configured to use either UDP or TCP transport to connect to Plaspy on port 8888 depending on the device configuration.
- When the SBC3 IO points at the Plaspy endpoint and sends standard reporting frames, Plaspy will match that traffic to the appropriate protocol handler automatically.

## Transport and Connection Context

Connection configuration for the SBC3 IO is primarily a matter of transport and destination settings. The device can be set to report to Plaspy using common network transports and the same port that Plaspy uses for all supported devices.

- The SBC3 IO may be configured to use UDP or TCP to reach the Plaspy endpoint on port 8888.
- Devices can point to the Plaspy domain d.plaspy.com or the public IP 54.85.159.138 as the reporting destination.
- Plaspy’s single port approach means every supported device family connects on port 8888, simplifying firewall and network configuration.
- Network reliability, mobile operator behavior, and device network settings influence whether UDP or TCP is preferable for a given deployment.
- Ensure device APN and SIM data plan allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware revisions can change message formats, available fields, and behavior; verify the firmware version on your SBC3 IO when validating compatibility.
- Hardware revisions or optional modules may alter which inputs and outputs are available and how they are reported.
- Manufacturer configuration options may allow toggling between UDP and TCP transports; choose the transport that suits network conditions and your monitoring needs.
- Using the Plaspy domain d.plaspy.com avoids hardcoding addresses but validate DNS resolution in the deployment environment.
- For critical deployments, test a representative device to confirm reporting cadence and event behavior before broad rollout.
- Always cross check Plaspy’s public connection settings with the device configuration and the manufacturer documentation for the most current guidance.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure successful setup, reliable telemetry, and efficient troubleshooting when integrating SBC3 IO devices with Plaspy. Even though Plaspy automatically detects the protocol at its shared endpoint, knowing how the device communicates speeds diagnosis and reduces integration time.

- Helps confirm that messages from the SBC3 IO are reaching Plaspy and being parsed as expected.
- Aids in selecting the right transport (UDP or TCP) and adjusting retry or heartbeat intervals to match network conditions.
- Supports troubleshooting of input and output events by correlating device-reported events with Plaspy records.
- Improves planning for firmware updates or device replacement by understanding which features are protocol dependent.
- Enables more effective coordination with the device manufacturer when a protocol or behavior discrepancy appears.

## Why Use Plaspy with This Protocol

Using the Telic SBC3 IO with Plaspy gives organizations a straightforward way to collect outdoor location data, monitor digital and analog inputs, and maintain operational oversight from a central platform. The SBC3 IO’s rugged design and integrated battery make it well suited to outdoor installations where resilient reporting and occasional power loss are considerations.

Plaspy’s shared endpoint model and automatic protocol detection simplify device onboarding and reduce the configuration burden for fleets and asset tracking deployments. To learn more about Plaspy and how it can work with devices like the Telic SBC3 IO visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer specific implementation details can change over time, so verify the latest device specific protocol information with the manufacturer at https://www.telic.de.
