---
slug: /appello/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: Appello - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Appello TK103B GPS tracker and how it communicates with Plaspy for tracking and monitoring
keywords:
  - Appello TK103B protocol
  - TK103B GPS protocol
  - Appello GPS tracker protocol
  - Appello TK103B Plaspy
  - TK103B communication protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking TK103B
  - GSM GPRS tracker protocol
  - tracker protocol compatibility
  - Plaspy device protocol
---

# Appello - TK103B Protocol

This page describes the public protocol context for using the Appello TK103B tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, how Plaspy accepts and processes device reports, and what you should know when configuring the unit for cloud tracking. The descriptive details here use the TK103B feature set as background, including GSM GPRS connectivity, periodic auto track reporting, remote control capability, and standard alerts such as geo fencing, overspeed, SOS, and low battery.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is pointed at the Plaspy endpoint. For the TK103B family, devices may be configured to report to d.plaspy.com or to the server IP 54.85.159.138 on port 8888. The device can be set to use UDP or TCP on port 8888 and Plaspy uses the same port for all supported trackers. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so verify device specifics when configuring and testing.

## Protocol Overview

The TK103B communicates location, status, and alert information over a cellular data link to a remote server. The tracker protocol governs how the device formats those reports, how it identifies itself to the server, and how remote commands or acknowledgements are exchanged in supported setups.

- Enables transmission of core tracking data such as longitude, latitude, speed, and timestamp to a remote platform.
- Provides device identification and state reporting so Plaspy can associate incoming data with the correct asset.
- Carries alerts and event signals including geo fence, movement, overspeed, SOS, and GPS signal status to support monitoring and notifications.
- Supports periodic auto track reporting at configurable intervals for continuous location history.
- Allows remote control and configuration messages from an operator platform when the device firmware and network path permit.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and applies automatic protocol detection to identify the tracker type. When a TK103B sends reports to the Plaspy endpoint, the platform will match the incoming data to the appropriate handling logic without requiring the user to manually select a protocol in most cases.

- Plaspy server endpoint is d.plaspy.com and the server IP is 54.85.159.138.
- The listening port for all devices in Plaspy is 8888 and devices may use UDP or TCP on that port.
- Plaspy automatically detects the tracker protocol when properly configured device reports arrive at the endpoint.
- Users generally do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Proper device identification and consistent reporting intervals help Plaspy map incoming messages to the right device record.

## Transport and Connection Context

Connection transport and endpoint settings determine how the TK103B reaches the Plaspy platform. The tracker uses GSM GPRS for data transport, so correct APN and network setup on the device are required for reliable reporting. The choice between UDP and TCP depends on the device firmware and configuration.

- Devices may be configured to send to d.plaspy.com or directly to 54.85.159.138.
- Port 8888 is used for all devices in Plaspy and is the standard port to configure on the tracker.
- The TK103B can use either UDP or TCP on port 8888 depending on the model settings and firmware capabilities.
- Ensure the device APN and GPRS settings are valid for the SIM card in use so the tracker can establish the data session.
- Network reliability and operator limitations can affect message delivery and latency for both UDP and TCP transports.

## Protocol Compatibility Notes

- Firmware revisions can alter how the tracker formats reports or which features are available, so firmware version matters for compatibility.
- Hardware revisions and parallel model variants may implement different command sets or optional features.
- Some features such as remote control functions or address name resolution via APN may require specific firmware options or manufacturer support.
- Transport selection between UDP and TCP can affect behavior for acknowledgements and retransmission; choose the transport supported by your firmware.
- Manufacturer or reseller customizations can change default settings or command behavior; always confirm settings after purchase.
- Validate compatibility by testing a device pointed at the Plaspy endpoint and reviewing the device state in the platform.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a reliable setup and reduces troubleshooting time when integrating TK103B devices with Plaspy. Knowledge of how the device reports, what alerts it can generate, and how it identifies itself on the network makes deployment and operational monitoring more predictable.

- Helps confirm the device is correctly pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Speeds up troubleshooting for missing reports, incorrect locations, or missed alerts.
- Clarifies why certain features like auto track intervals or remote commands behave differently across firmware versions.
- Supports informed decisions about choosing UDP or TCP based on device behavior and network conditions.
- Enables more effective testing and validation before wide scale deployment.

## Why Use Plaspy with This Protocol

Using the Appello TK103B with Plaspy gives organizations a way to collect the tracker’s location, status, and alert events into a single platform for monitoring, reporting, and operational oversight. The TK103B’s combination of real time tracking, periodic auto reporting, and remote control capabilities maps well to Plaspy’s automatic protocol detection and unified connection port, simplifying initial integration.

If you want to learn more about how Plaspy can work with the TK103B and other devices, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific information on the manufacturer website at http://www.cnjeo.com/ before finalizing deployments.
