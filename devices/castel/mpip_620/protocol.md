---
slug: /castel/mpip_620/protocol
id: mpip_620-protocol
sidebar_label: Protocol
title: Castel - MPIP-620 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting the Castel MPIP-620 motorcycle tracker to Plaspy using shared Plaspy connection settings
keywords:
  - Castel MPIP 620 protocol
  - Castel MPIP 620 GPS protocol
  - Castel MPIP 620 communication protocol
  - Castel MPIP 620 tracking protocol
  - Castel motorcycle tracker protocol
  - MPIP 620 Plaspy compatibility
  - Plaspy device integration
  - GPS tracker protocol documentation
  - GPRS SMS tracker protocol
  - motorcycle GPS tracking protocol
---

# Castel - MPIP-620 Protocol

This page describes the public protocol context for using the Castel MPIP-620 motorcycle GPS tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what connection settings are used by Plaspy, and what integrators and fleet managers should understand when configuring and operating the tracker alongside Plaspy.

The Castel MPIP-620 uses GPS for positioning and GPRS or SMS for data transport, and it includes features such as a motion sensor, geo fencing, movement alerts, overspeed alerts, and a backup battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific details consult the manufacturer documentation as needed.

## Protocol Overview

At a conceptual level the tracker protocol is the set of messages and reporting behavior the MPIP-620 uses to send location, status, and alarm information to a remote server. With Plaspy the important public facts are the connection endpoint and transport options rather than private parsing details.

- The protocol enables the tracker to report GPS position, motion and alarm events, battery status, and basic telemetry to a remote endpoint.
- It defines how the device identifies itself so the backend can associate messages with a specific vehicle or account.
- Communication behavior determines how often reports are sent under normal tracking, power saving, and alarm conditions.
- The protocol supports reporting over cellular data with GPRS and can provide SMS as an alternate channel for some settings and alerts.
- Proper configuration of the device APN and server address ensures the tracker reaches the Plaspy endpoint and that position and alarm data become usable in the platform.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single common endpoint and port and uses that connection to identify the device protocol automatically. This design means most MPIP-620 units only need to be pointed at the Plaspy endpoint and the platform handles protocol detection.

- Plaspy listens on the shared server domain d.plaspy.com and on the public IP 54.85.159.138 for device connections.
- All devices in Plaspy use the same port and Plaspy operates on port 8888 for tracker traffic.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device support and configuration preferences.
- When a properly configured MPIP-620 reports to the Plaspy endpoint the platform automatically detects the tracker protocol without manual protocol selection by the user.
- Users typically only need to set server address, transport type, and APN on the tracker for integration to work.

## Transport and Connection Context

The MPIP-620 communicates to a backend over cellular networks and may be configured to use UDP or TCP transport. For integration with Plaspy the transport and server address are the primary connection settings to verify on the device.

- The device may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- Devices can point to the Plaspy server domain d.plaspy.com or to the IP address 54.85.159.138 as the destination.
- Plaspy uses the same port 8888 for all supported devices which simplifies configuration of trackers in the field.
- Transport selection can affect delivery characteristics such as retransmission and latency depending on network conditions.
- Ensure the tracker APN, APN credentials, and outbound port settings are correctly set so the device can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may change reporting intervals, available alarm types, or the exact fields included in reports even for the same model.
- Hardware revisions and optional modules can alter supported transports or I O options used by the tracker.
- Some devices provide SMS based configuration or fallback options in addition to GPRS reporting which can affect integration choices.
- Selecting TCP versus UDP on the device can change behavior for acknowledgements and retransmission handled by the network layer.
- Confirm APN settings and SIM data plan compatibility to ensure reliable GPRS connectivity for real time reporting.
- Validate feature behavior such as geo fence handling or power saving modes against the manufacturer documentation for the specific firmware installed.

## Why Protocol Understanding Matters

Understanding the communication protocol at a conceptual level helps ensure a smooth setup and reliable operation with Plaspy. Even when Plaspy automatically detects protocol, knowing the role of transport, reporting intervals, and device identification reduces troubleshooting time and supports long term reliability.

- Helps ensure correct server address and transport settings are applied on the tracker during provisioning.
- Clarifies why a device might appear offline when APN or transport settings are incorrect.
- Supports effective diagnostics for alarm and motion reporting issues by narrowing potential causes.
- Aids decisions about choosing TCP or UDP based on desired delivery characteristics and network environments.
- Makes firmware update planning safer by highlighting areas where behavior may change between releases.

## Why Use Plaspy with This Protocol

Using the Castel MPIP-620 with Plaspy gives motorcycle owners and fleet operators a practical way to centralize location, movement, and alarm data. The MPIP-620 provides motorcycle specific features such as motion detection, towing and fortification alarms, and power saving modes that feed useful events into Plaspy for monitoring and operational oversight.

Plaspy simplifies integration by using a single server endpoint and port for all devices and by automatically detecting tracker protocols when a device is correctly configured to report to the Plaspy endpoint. To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer website http://www.castelecom.com/ as these details can change over time.
