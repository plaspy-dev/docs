---
slug: /lk_gps/lk980_4g/protocol
id: lk980_4g-protocol
sidebar_label: Protocol
title: LK-GPS - LK980-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for LK GPS LK980 4G tracker and Plaspy integration with connection settings and compatibility notes
keywords:
  - LK-GPS LK980-4G protocol
  - LK980-4G GPS protocol
  - LK-GPS protocol Plaspy
  - LK980-4G communication protocol
  - LK980-4G tracking protocol
  - Plaspy device compatibility
  - vehicle tracking LK980-4G
  - fleet management LK-GPS
  - LK-GPS protocol guide
  - GPS tracker protocol Plaspy
---

# LK-GPS - LK980-4G Protocol

This page describes the public protocol context for using the LK-GPS LK980-4G tracker with Plaspy. It summarizes how the device communicates with the Plaspy platform, what connection settings are used publicly, and what role the tracker reporting protocol plays in delivering position, telemetry, and event data to Plaspy without exposing sensitive implementation details.

The LK980-4G is a compact wired tracker with built in GPS and GSM antennas and 4G LTE with 2G fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on general, publicly useful protocol context while recommending verification with official manufacturer documentation.

## Protocol Overview

The protocol implemented by the LK980-4G governs how the tracker identifies itself to a server, reports location and telemetry, and forwards alarm and event information to Plaspy. In practical terms, the protocol enables timely position updates, event notifications such as SOS or tamper alerts, and remote command handling where available.

- Enables the tracker to send GPS coordinates, timestamps, and basic telemetry to Plaspy for mapping and logging.
- Transmits event notifications including SOS, vibration or tamper alerts, and status changes for prompt operator awareness.
- Provides a channel for remote commands and controls when the device and manufacturer firmware support such operations, for example immobilizer actions.
- Carries device identification and status data so Plaspy can associate incoming messages with the correct vehicle or asset.
- Supports both periodic reports and event triggered messages so fleets can balance reporting frequency and power management.

## How Plaspy Detects the Protocol

Plaspy receives device connections at a shared endpoint and automatically determines the tracker protocol, removing the need for manual protocol selection in most setups. When a properly configured LK980-4G reports to the Plaspy endpoint, the platform associates the incoming data stream with the correct device record and processing pipeline.

- Plaspy listens on a single public endpoint d.plaspy.com for device reporting.
- The platform is reachable at the public server IP 54.85.159.138 for direct IP configuration.
- The network port used for device connections is 8888 and is the same port for all devices supported by Plaspy.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol manually in the platform.
- Devices configured to report correctly to d.plaspy.com or 54.85.159.138 on port 8888 will be processed by Plaspy according to the detected protocol.

## Transport and Connection Context

Connection transport and destination settings are part of the public configuration needed to point an LK980-4G at Plaspy. The tracker may be set up to use either UDP or TCP depending on device configuration and firmware support, and both transport types are accepted on the Plaspy endpoint port.

- LK980-4G devices may use UDP or TCP for reporting depending on configuration and firmware capability.
- Plaspy accepts connections on port 8888 for both UDP and TCP transports.
- Devices can be configured to report to the DNS name d.plaspy.com or directly to the IP 54.85.159.138.
- The same port number 8888 is used across all supported devices on Plaspy, simplifying device configuration.
- Transport selection affects delivery behavior and may be chosen based on network characteristics and device settings.

## Protocol Compatibility Notes

- Firmware revisions can change how the LK980-4G formats reports and which events are included, so confirm compatibility for a specific firmware build.
- Hardware revisions and optional feature sets may alter available inputs, outputs, or sensor behavior that affect what the protocol transmits.
- Manufacturer configuration methods such as SMS or app based settings may be required to point a device to d.plaspy.com or 54.85.159.138 on port 8888.
- Choosing UDP versus TCP can influence delivery, retransmission behavior, and firewall requirements in your environment.
- Plaspy automatically detects device protocol, but correct device configuration and accurate device identification fields are essential for reliable mapping to your account.
- Validate critical features like remote immobilizer commands or special telemetry fields against the manufacturer documentation before relying on them operationally.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers and administrators ensure reliable reporting, troubleshoot connectivity issues, and verify that event and command workflows behave as expected with Plaspy. Clarity about transport, endpoint, and event semantics reduces deployment risk and speeds resolution when devices do not appear in the platform.

- Ensures devices are configured to point to d.plaspy.com or 54.85.159.138 on port 8888 and use a supported transport.
- Helps diagnose network level issues such as blocked ports, NAT behavior, or carrier restrictions that affect UDP or TCP.
- Allows teams to confirm which events and telemetry fields the tracker will send for accurate alerts and reporting.
- Guides firmware update planning when protocol changes or enhancements are introduced by the manufacturer.
- Supports accurate mapping of device identifiers so incoming messages are associated with the correct vehicle or asset.

## Why Use Plaspy with This Protocol

For organizations that need continuous visibility, timely alerts, and centralized fleet oversight, pairing the LK980-4G with Plaspy delivers a practical monitoring solution. The device hardware brings 4G LTE with 2G fallback, built in antennas, and a set of security and telemetry features such as SOS, vibration tamper alerts, listen in, and remote immobilizer support, while Plaspy provides centralized ingestion, mapping, alerts, and historical playback.

Plaspy accepts LK980-4G connections on a single shared port and automatically detects the device protocol, simplifying large scale rollouts and mixed fleet management. To learn more about integrating devices and platform capabilities, visit the Plaspy website at https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer guidance please verify information on the official LK GPS site at https://www.lk-gps.com.
