---
slug: /winrich/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Winrich - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Winrich TK102 GPS tracker and how it communicates with Plaspy for reliable reporting and integration
keywords:
  - Winrich TK102 protocol
  - Winrich TK102 GPS protocol
  - Winrich TK102 Plaspy
  - Winrich GPS tracker protocol
  - TK102 communication protocol
  - TK102 tracking protocol
  - Winrich TK102 compatibility
  - GPS tracker Plaspy integration
  - Vehicle tracking Winrich TK102
  - TK102 GSM GPS protocol
---

# Winrich - TK102 Protocol

This page describes the public protocol context for using the Winrich TK102 GPS tracker with Plaspy. It summarizes how the TK102 series reports position and status in general terms and how that information is received by Plaspy without revealing any private parsing or proprietary details. The summary is grounded in the device capabilities such as GPS and GSM dual positioning, automatic GSM fallback when GPS is unavailable, local language address replies, TF card logging, shock sensor events, and APN auto configuration.

Plaspy accepts device connections on a shared endpoint and port, and automatically detects the tracker protocol as devices report in. For Plaspy the public reception settings are d.plaspy.com or the server IP 54.85.159.138 using port 8888. Devices may be configured to use UDP or TCP to reach the same port. Because Plaspy uses a consistent port for all devices and performs automatic protocol detection, users typically only need to ensure the TK102 is configured to report to the Plaspy endpoint and that firmware and APN settings are correct, while bearing in mind that exact behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker communication protocol defines how the TK102 reports position, status, and events to a remote server and how the server can identify the device and process its reports. The public protocol context covers message flow and high level uses rather than low level packet structure.

- Enables the device to send periodic or event driven location updates so Plaspy can display real time or near real time positions.
- Carries identifying information so Plaspy can associate incoming reports with the correct tracker record.
- Transmits status and event notifications such as shock sensor triggers, movement alerts, or GSM fallback notices that support monitoring workflows.
- Supports uploading of stored data when the device regains connectivity so route history from TF card or internal memory can be reconstructed.
- May include local language address replies for human readable location feedback depending on device settings and manufacturer capabilities.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and uses the characteristics of each incoming stream to match the reporting device and its protocol in an automated way. This typically means the user does not have to manually select the protocol inside Plaspy when the tracker is sending data correctly.

- Plaspy public endpoint is d.plaspy.com and the server IP is 54.85.159.138 on port 8888.
- Devices can be configured to report over UDP or TCP to the same port 8888 depending on device support and network conditions.
- All devices supported by Plaspy use the same port which simplifies firewall and network configuration.
- When a properly configured TK102 reports to the Plaspy endpoint, the platform automatically associates the data with the correct device record.
- If a device does not appear, confirm device reporting settings, APN, and whether the device is using UDP or TCP to reach d.plaspy.com.

## Transport and Connection Context

Transport and connection choices affect how the tracker reaches Plaspy but do not change the fact that data must arrive at the shared Plaspy endpoint on port 8888. Network settings such as APN, SIM data, and firewalls play an important role in ensuring reliable delivery.

- The TK102 can be configured to use UDP or TCP to send reports to Plaspy on port 8888.
- Devices may point their server address to d.plaspy.com or directly to 54.85.159.138.
- Because Plaspy uses the same port for all devices, network rules can be simplified to allow outbound traffic to port 8888.
- Ensure the device APN is set correctly so the tracker can establish a cellular data connection to Plaspy.
- In poor GSM conditions the tracker can retain location data locally and upload stored points once connectivity is restored.

## Protocol Compatibility Notes

- The TK102 family is broadly compatible with networked tracking platforms, and this model is known to be compatible with Plaspy when configured to report to the Plaspy endpoint.
- Firmware differences across TK102 units can change message timing, supported features, and language reply formats.
- Hardware revisions or regional firmware variants may present slight protocol behavior differences that affect advanced features or event reporting.
- Transport selection of UDP versus TCP can be configurable on the device and may affect reliability in some network environments.
- Manufacturer provided defaults such as APN auto set may ease setup but should be validated for the local carrier.
- Always compare device behavior on the network to the manufacturer documentation to confirm the expected reporting modes.

## Why Protocol Understanding Matters

Knowing how the tracker communicates and what to expect from its protocol helps ensure a smooth setup and reliable ongoing operation with Plaspy. A practical understanding reduces configuration time and aids troubleshooting when reports are missing or incomplete.

- Confirms that the device is pointed to the correct Plaspy endpoint and port so data reaches the platform.
- Helps diagnose connectivity issues related to APN, SIM service, or firewall rules blocking port 8888.
- Clarifies expected event types such as shock sensor alerts or GSM fallback notices so rules and alerts in Plaspy can be tuned.
- Makes it easier to interpret stored versus live positions when TF card logging is active and uploads occur after reconnection.
- Supports efficient communication with manufacturer support by focusing on firmware and transport related behavior.

## Why Use Plaspy with This Protocol

Using the Winrich TK102 with Plaspy provides a practical way to gain location visibility, event monitoring, and historical route reconstruction for vehicles and mobile assets. The shared Plaspy endpoint and automatic protocol detection reduce the setup burden and allow organizations to focus on configuring alerts and workflows rather than dealing with multiple port settings.

To learn more about Plaspy and how it can receive and process reports from devices like the Winrich TK102 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information and firmware notes with the manufacturer at http://www.winrichgroup.com/en/.
