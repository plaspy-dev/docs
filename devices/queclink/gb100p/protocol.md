---
slug: /queclink/gb100p/protocol
id: gb100p-protocol
sidebar_label: Protocol
title: QuecLink - GB100P Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for QuecLink GB100P and how it communicates with Plaspy for telemetry crash events and buffered reporting
keywords:
  - QuecLink GB100P protocol
  - QuecLink GB100P GPS protocol
  - GB100P Plaspy compatibility
  - QuecLink GB100P tracking protocol
  - GB100P telematics protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking GB100P
  - GB100P crash detection
  - BLE 4.2 telemetry GB100P
  - usage based insurance GB100P
---

# QuecLink - GB100P Protocol

This page documents the public protocol context for integrating the QuecLink GB100P with Plaspy. It focuses on how the GB100P communicates telemetry, inertial events, and accessory data to Plaspy without exposing private implementation details. Use this information to understand connection expectations, transport options, and the role of the tracker reporting protocol in a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message content can vary by GB100P firmware version, hardware revision, and QuecLink implementation choices. For device specific commands, firmware notes, and the latest behavior, consult QuecLink documentation.

## Protocol Overview

The GB100P reporting protocol is the set of rules the device uses to identify itself and deliver location, inertial, and accessory data to a remote server. In practice the protocol defines how telemetry is packaged, when buffered messages are transmitted, and how event or crash packets are prioritized so that Plaspy can ingest actionable data for tracking and analysis.

- Enables the GB100P to report GPS positions, high rate inertial data, BLE accessory reads, and alarm events to a remote endpoint.
- Lets the tracker identify itself so Plaspy can associate incoming messages with the correct device record.
- Supports buffered delivery so stored messages are forwarded to Plaspy when connectivity is restored.
- Carries event metadata such as crash pre and post event windows and geofence or speed alarm triggers.
- Works over common transport channels so the same device can operate in different network conditions while preserving essential telemetry.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and automatically determines the tracker protocol used by each device. This automatic detection removes the need for most users to select a protocol in the platform when a device is correctly configured to report to Plaspy.

- Plaspy listens on the same port for all supported devices and automatically detects the tracker protocol.
- Configure GB100P reporting to target the Plaspy endpoint and the server will map incoming messages to the device.
- Common configuration steps include setting the device reporting address to d.plaspy.com or the Plaspy server IP and using the supported transport.
- When a device connects and begins reporting, Plaspy identifies the protocol and ingests GPS, inertial, and BLE data for processing.
- Manual protocol selection inside Plaspy is rarely necessary when the device is properly pointed to the Plaspy endpoint.

## Transport and Connection Context

The GB100P supports common cellular transports and can be configured to report using either UDP or TCP depending on device settings and deployment needs. Plaspy accepts connections from GB100P devices on its public endpoint so devices must be pointed to the correct Plaspy address and port.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- The Plaspy server domain for reporting is d.plaspy.com and the server IP is 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, simplifying fleet level configuration and firewall rules.
- GB100P also supports SMS as a fallback transport for low bandwidth or out of coverage scenarios, where configured.
- Choose UDP for lower overhead in high rate telemetry, or TCP when delivery confirmation and ordering are priorities, according to your deployment and the GB100P configuration.

## Protocol Compatibility Notes

- Firmware versions may change packet behavior, available event types, and supported fields; always check the GB100P firmware notes for version specific differences.
- Hardware revisions and regional firmware builds can introduce variations in how BLE, inertial sampling, and buffering behave.
- Transport choice matters for behavior such as retransmission and ordering; verify whether the device is set to UDP or TCP on port 8888 for your installation.
- Buffer sizes and compressed reporting modes (for example compressed 1 second GPS packets) can differ by firmware and affect historical data delivery.
- QuecLink has issued an EOL notice for the GB100P with orders ceased November 15, 2024; consider recommended replacements like GB130MG or GB100CG for new deployments.
- Validate compatibility and feature availability against official QuecLink documentation before large scale rollouts.

## Why Protocol Understanding Matters

Knowing how the GB100P communicates helps with initial setup, reliable operation, and efficient troubleshooting when integrating with Plaspy. Awareness of transport options, buffering behavior, and firmware differences reduces setup time and improves data continuity for telemetry and event workflows.

- Ensures devices are pointed to the correct Plaspy endpoint and port so messages are accepted and associated with the right vehicle.
- Helps diagnose connectivity issues by confirming transport settings such as UDP or TCP on port 8888 and whether the device targets d.plaspy.com or the Plaspy server IP.
- Clarifies expectations for buffered message delivery and how compressed telemetry is handled after reconnection.
- Guides firmware upgrade decisions and feature mapping for crash capture, BLE accessory integrations, and telemetry rate settings.
- Improves long term reliability by aligning device configuration with Plaspy ingestion behavior and reporting requirements.

## Why Use Plaspy with This Protocol

Pairing the GB100P with Plaspy gives organizations a path to ingest high rate GPS and inertial telemetry, buffered historical data, and BLE accessory information into a single telematics platform. For use cases such as usage based insurance, crash reconstruction, and battery mounted fleet tracking, the combination of GB100P hardware and Plaspy ingestion provides practical visibility and event management.

To learn more about how Plaspy can ingest GB100P telemetry and support your fleet or insurance program, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and hardware revision information verify the manufacturer documentation at https://www.queclink.com/.
