---
slug: /eelink/tk119/protocol
id: tk119-protocol
sidebar_label: Protocol
title: EElink - TK119 Protocol
sidebar_class_name: menu_item_tracker
description: Public reference for the EElink TK119 GPS tracker protocol and how it communicates with Plaspy for reliable fleet tracking and device management
keywords:
  - EElink TK119 protocol
  - EElink TK119 GPS protocol
  - EElink TK119 Plaspy compatibility
  - EElink TK119 communication protocol
  - EElink TK119 tracking protocol
  - EElink GPS tracker protocol
  - TK119 3G tracker protocol
  - EELINK Protocol 2.0
  - Plaspy tracker compatibility
  - Fleet tracking EElink TK119
---

# EElink - TK119 Protocol

This page provides public protocol context for using the EElink TK119 GPS tracker with Plaspy. It summarizes how the device typically reports position, status, and alerts to Plaspy and highlights the role of the tracker reporting protocol in a reliable integration. The content here focuses on high level, non sensitive details that help you plan deployment, configuration, and troubleshooting with Plaspy.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context for the TK119 and references Plaspy connection parameters that are used publicly.

## Protocol Overview

The TK119 is a 3G WCDMA GPS tracker with features for vehicle and IoT risk management. In practice, the device uses a manufacturer protocol to send periodic position reports, event alerts, and remote status updates to a server. For the TK119 line the manufacturer documents EELINK Protocol 2.0 as a common reporting option; Plaspy accepts reports from compatible implementations and extracts location and status data for tracking and alerts.

- Enables the tracker to identify itself and deliver GPS coordinates and network based location when GPS is unavailable.
- Delivers device status such as power state, battery level, ACC or ignition input, and GPIO events to the server.
- Carries alert and event notifications like geofence entry exit, overspeed, vibration, or collision to Plaspy.
- Supports remote configuration and command delivery from a server or SMS depending on device setup.
- Provides a consistent data stream that Plaspy can map into tracking, history, and alert functions.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically detects the tracker protocol when a device is correctly configured to report. Because Plaspy is designed to accept many common tracker protocols, most users do not need to choose a protocol manually inside Plaspy if the device reports to the Plaspy endpoint with a supported format.

- Plaspy server domain for receiving reports is d.plaspy.com.
- Plaspy public server IP is 54.85.159.138.
- Plaspy uses port 8888 for tracker connections across all supported devices.
- The device may be configured to use UDP or TCP to send data to Plaspy on port 8888.
- Plaspy automatically detects the tracker protocol once device messages reach the endpoint.
- In most cases the installer only needs to set the device reporting host and transport and verify successful delivery.

## Transport and Connection Context

Connection details determine how the TK119 reaches Plaspy but are separate from the protocol payload. The TK119 supports cellular data and can be configured to push reports to a network host or IP. Plaspy exposes a stable endpoint and port so devices can be pointed at a single place for all supported trackers.

- Devices may be configured to point to the hostname d.plaspy.com or to the IP 54.85.159.138.
- The tracker may use either UDP or TCP on port 8888 depending on network conditions and device settings.
- Plaspy uses the same port for all devices which simplifies device configuration and firewall rules.
- Confirm that the device APN and cellular data plan allow outbound connections to the Plaspy endpoint.
- Ensure that any network firewalls permit traffic to and from d.plaspy.com on port 8888 by the chosen transport.

## Protocol Compatibility Notes

- The TK119 line is compatible with common EELINK protocol implementations and can be used with Plaspy when properly configured.
- Firmware revisions or model variants may include protocol changes or optional fields that affect parsing or available telemetry.
- Hardware differences such as extra GPIO extensions or optional relay modules change what data the device produces but not the high level transport.
- Choosing UDP versus TCP can affect delivery behavior under poor cellular conditions; select the transport that suits your reliability and latency needs.
- Remote configuration methods supported by the device may include server side commands, SMS, or platform driven updates; verify which mechanisms are enabled.
- Always validate device behavior and available features against the manufacturer documentation for your specific firmware and hardware revision.

## Why Protocol Understanding Matters

A clear understanding of the tracker protocol helps streamline device commissioning, improves troubleshooting, and ensures long term operational visibility in Plaspy. Knowing what the device transmits and how it connects reduces guesswork when reports are missing or alerts are unexpected.

- Speeds up initial setup by ensuring the device points to d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport.
- Helps diagnose missing or incomplete reports by correlating device events with network and server logs.
- Guides selection of transport and retry behavior appropriate for your coverage area and use case.
- Clarifies which device signals such as GPIO, ACC, battery, and relay states will appear in Plaspy.
- Makes firmware and hardware revision tracking easier when comparing device behavior across a fleet.

## Why Use Plaspy with This Protocol

Using the EElink TK119 with Plaspy gives organizations a practical way to centralize location, status, and alert data from a durable 3G tracker. The TK119’s IP67 rating, optional GPIO extensions, and built in battery make it suitable for vehicles and other mobile assets where continuous visibility and event reporting are important. When configured to report to Plaspy, the device’s telemetry and alerts become part of a single operational view for fleet management, compliance, and incident response.

If you want to learn more about how Plaspy handles device connections and platform features, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and hardware information for the TK119 consult the manufacturer at https://www.eelink.com.cn/ since protocol support and firmware behavior can change over time and should be verified against official sources.
