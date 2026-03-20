---
slug: /cantrack/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: CanTrack - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack TK103 GPS tracker and how it communicates with Plaspy for reliable tracking and integration
keywords:
  - CanTrack TK103 protocol
  - CanTrack TK103 GPS protocol
  - CanTrack TK103 for Plaspy
  - TK103 tracking protocol
  - CanTrack GPS tracker protocol
  - Plaspy compatible trackers
  - vehicle tracking TK103
  - GPS tracker communication
  - fleet management TK103
  - CanTrack protocol compatibility
---

# CanTrack - TK103 Protocol

This page covers the public protocol context for using the CanTrack TK103 tracker with Plaspy. It summarizes how the tracker communicates in general terms, what connection settings Plaspy expects, and what to consider when integrating TK103 devices into a Plaspy deployment. The goal is to explain communication context without exposing manufacturer firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The CanTrack TK103 itself is a GSM GPRS and GPS based tracker with features such as remote switch, geo fence, overspeed alarm, and data storage; those capabilities are delivered by the device while the reporting behavior may differ by firmware version.

## Protocol Overview

The protocol used by a GPS tracker defines how the device reports identity, location, telemetry, and alarms to a server and how the server may acknowledge or respond. For the TK103 this means the tracker sends position and event data over the mobile network to Plaspy so the platform can present location and status to users.

- Enables the TK103 to identify itself and deliver location and alarm data to a remote server.
- Conveys telemetry such as GPS coordinates, movement events, and status indicators to Plaspy in a machine readable form.
- Allows the platform to correlate incoming messages with the correct device and update a live position stream.
- Supports remote commands and configuration changes when the device and network allow two way communication.
- Provides a consistent data feed that Plaspy ingests and normalizes for mapping, alerts, and historical storage.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single endpoint and inspects the incoming data to determine the tracker protocol automatically. In most cases the user does not need to select a protocol in Plaspy when the TK103 is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 and the port is 8888.
- Plaspy automatically detects the tracker protocol so manual protocol selection is normally unnecessary.
- When the TK103 is pointed at the Plaspy endpoint and reporting over the network, Plaspy matches incoming messages to the appropriate device record.
- Proper device identification (IMEI or device ID) in the tracker report is essential for automatic mapping to a Plaspy device.
- If a device uses uncommon firmware behavior, deployment notes or manufacturer guidance can help ensure Plaspy recognizes its messages.

## Transport and Connection Context

Transport and connection settings determine how the TK103 reaches the Plaspy servers. The device may use UDP or TCP depending on its configuration and firmware capabilities; the important public facts for Plaspy integration are the server address and the port used by the platform.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting endpoint.
- All devices in Plaspy use the same port which simplifies device setup and firewall configuration.
- Choose UDP or TCP on the device according to its manual and your network environment; Plaspy accepts both transports on the shared port.
- Ensure the mobile data plan and APN settings on the TK103 are correct so it can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions and manufacturer updates can alter message contents or available features; always check device firmware level when validating behavior.
- Hardware revisions or regional variants of the TK103 can change supported transport modes or default reporting settings.
- Transport selection (UDP vs TCP) can affect message delivery semantics; select the mode recommended in the device manual for your deployment.
- Manufacturer configuration commands or SMS provisioning methods can change how the device reports to a server; confirm the settings you apply.
- Confirm the device is sending a recognizable identifier such as IMEI so Plaspy can automatically associate messages with the correct tracker.
- When in doubt, compare device settings and observed behavior with the official CanTrack documentation to validate compatibility.

## Why Protocol Understanding Matters

Understanding how the TK103 communicates helps ensure a smooth setup, reliable tracking, and faster troubleshooting when issues arise. Knowing which transport and reporting settings are in use reduces integration time and helps maintain consistent data flow into Plaspy.

- Helps confirm the device is pointed to the Plaspy endpoint and using the expected transport.
- Makes it easier to diagnose missing positions, connectivity drops, or unexpected alarm behavior.
- Allows administrators to align device reporting intervals, power management, and event triggers with operational needs.
- Supports long term reliability by highlighting firmware or configuration differences that impact data quality.
- Enables better coordination with manufacturer support when device-specific behavior needs clarification.

## Why Use Plaspy with This Protocol

Using Plaspy with a CanTrack TK103 provides a straightforward way to collect and present the device’s location and event data for operational visibility. Plaspy centralizes incoming reports, normalizes device messages, and delivers mapping, history, and alerting features that leverage the TK103’s tracking, geo fence, and alarm capabilities.

If you are deploying the TK103 across vehicles or assets, Plaspy’s shared port approach and automatic protocol detection simplify onboarding and reduce per device configuration. To learn more about Plaspy and how it works with a wide range of trackers visit https://www.plaspy.com. For the most current and device specific protocol, firmware behavior, and implementation details always verify the manufacturer documentation at https://www.cantrackgps.com/ as vendor implementations can change over time.
