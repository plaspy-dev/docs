---
slug: /tk_star/lk109/protocol
id: lk109-protocol
sidebar_label: Protocol
title: TK-Star - LK109 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the TK Star LK109 GPS tracker and how it communicates with Plaspy for reliable reporting and alerts
keywords:
  - TK Star LK109 protocol
  - TK Star LK109 GPS protocol
  - TK Star LK109 protocol for Plaspy
  - TK Star LK109 communication protocol
  - TK Star LK109 tracking protocol
  - LK109 GPS tracker protocol
  - TK Star tracker Plaspy compatibility
  - LK109 integration with Plaspy
  - vehicle tracking LK109
  - portable GPS tracker LK109
---

# TK-Star - LK109 Protocol

This page describes the public protocol context for using the TK-Star LK109 GPS portable tracker with Plaspy. It summarizes how the device typically reports location and alert information to the Plaspy platform and what role the tracker communication protocol plays in that interaction. The content is intended to be non sensitive and to help you understand compatibility and configuration basics when pairing an LK109 with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is reporting to the platform. For Plaspy the standard endpoint is d.plaspy.com and the platform accepts connections to 54.85.159.138 on port 8888. The LK109 may be configured to use either UDP or TCP on port 8888 depending on firmware and device settings, and exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the LK109 governs how the tracker reports position, status, and alarm events to a remote server such as Plaspy. The protocol defines how the device identifies itself, how it presents location and sensor data, and how the server acknowledges or responds to device messages in a way the platform understands.

- Enables the LK109 to report GPS location, movement, and sensor derived alerts to Plaspy.
- Provides a consistent way for the tracker to identify itself so Plaspy can associate incoming data with the correct device record.
- Carries event notifications such as SOS, low battery, geofence, and motion alerts that are useful for monitoring and automation.
- Supports periodic reporting and history trace checks so Plaspy can present real time and historical movement.
- Allows remote configuration and heartbeat behavior within the limits of the device firmware and manufacturer settings.

## How Plaspy Detects the Protocol

Plaspy is designed to receive tracker traffic on a shared server endpoint and port and to automatically determine the appropriate device protocol from the incoming connections. When an LK109 is configured to report to the Plaspy endpoint, the platform typically recognizes the device without manual protocol selection.

- Plaspy accepts device connections at d.plaspy.com and the server IP 54.85.159.138.
- All devices in Plaspy use the same port and the platform listens on port 8888 for tracker traffic.
- Devices may connect using UDP or TCP on port 8888 depending on device configuration and capability.
- If the LK109 is pointed to the Plaspy endpoint and sending data, Plaspy will normally detect the protocol automatically.
- Users usually do not need to choose a protocol inside Plaspy if the device is correctly configured to report to the shared Plaspy endpoint.

## Transport and Connection Context

Transport and connection context describe how the LK109 physically reaches the Plaspy servers. The tracker may be set up to send its reports over either UDP or TCP, and it can be configured to use the domain name or the IP address of the Plaspy server. These connection choices affect delivery characteristics but do not change the higher level meaning of the reported data.

- LK109 devices may be configured to use UDP or TCP on port 8888 depending on firmware options.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to 54.85.159.138.
- Plaspy uses the same port 8888 across all supported devices to simplify configuration.
- TCP provides connection oriented delivery while UDP provides lightweight datagram delivery; choice depends on device support.
- Ensure the device reports to the Plaspy endpoint and that any network level blocking of port 8888 is resolved.

## Protocol Compatibility Notes

- Firmware variations across LK109 units can change available features and exact message behavior. Verify the firmware revision if precise behavior is required.
- Hardware revisions or regional variants from the manufacturer may implement protocol behavior differently; check the specific unit documentation.
- Transport selection (UDP vs TCP) may be configurable on some LK109 firmware builds; confirm which transports your hardware and firmware support.
- Manufacturer default server addresses may differ from Plaspy; update the device server setting to d.plaspy.com or 54.85.159.138 on port 8888 as needed.
- Testing a single device before large scale deployment helps confirm that the device reports the expected fields and events to Plaspy.
- Always compare practical results with the official TK Star documentation for device model and firmware specifics.

## Why Protocol Understanding Matters

Understanding the LK109 communication protocol improves setup success, reduces troubleshooting time, and helps ensure reliable long term operation when the device is used with Plaspy. Knowledge of how the device reports and which transport it uses makes it easier to validate connectivity and expected behavior.

- Helps confirm the device is reporting to d.plaspy.com or 54.85.159.138 on port 8888 and using a supported transport.
- Makes it easier to interpret device events such as SOS, geofence exit, overspeed, and low battery in Plaspy.
- Reduces time spent diagnosing connectivity issues by focusing on transport, server address, and firmware differences.
- Supports reliable deployment planning when many trackers must be configured consistently.
- Assists in mapping device reported fields to platform features for alerts, history, and monitoring.

## Why Use Plaspy with This Protocol

Using the TK-Star LK109 with Plaspy gives organizations a straightforward path to collect location, alert, and status data from portable trackers into a single monitoring and reporting platform. Plaspy’s shared endpoint and automatic protocol detection simplify device onboarding, and the platform presents real time location, history, and alerting for operational oversight.

If you would like to learn more about Plaspy and its device compatibility, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information on the TK Star official website at https://www.tk-star.com/.
