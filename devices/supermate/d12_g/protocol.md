---
slug: /supermate/d12_g/protocol
id: d12_g-protocol
sidebar_label: Protocol
title: Supermate - D12-G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Supermate D12 G and how it communicates with Plaspy
keywords:
  - Supermate D12-G protocol
  - Supermate D12-G GPS protocol
  - Supermate D12-G communication protocol
  - Supermate D12-G tracking protocol
  - Supermate tracker Plaspy compatibility
  - Supermate D12-G Plaspy
  - GPS tracker protocol guide
  - vehicle tracking protocol Supermate
  - asset tracking Supermate D12-G
  - Plaspy protocol compatibility
---

# Supermate - D12-G Protocol

This page describes the public protocol context for using the Supermate D12 GPS tracker with Plaspy. It focuses on how the device communicates in general terms, the connection settings Plaspy provides, and what to check when integrating the D12 into a Plaspy deployment. The intent is to explain protocol role and deployment considerations without exposing proprietary or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy server. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so device behavior you observe may differ from other D12 units. For Plaspy connection, the public server domain is d.plaspy.com and the public server IP is 54.85.159.138. Plaspy listens on port 8888 and devices may be configured to use UDP or TCP on that port. All devices use the same port and Plaspy performs automatic protocol detection once the device reports to the endpoint.

## Protocol Overview

The D12 tracker protocol defines how the device reports its identity, position, and status so Plaspy can interpret and store usable location and event data. On the device side, the protocol governs what information is sent, how often it is reported, and which event types (for example movement, geo fence events, and SOS) are transmitted.

- Identifies the device to the server so Plaspy can associate messages with the correct asset and account.
- Transports location coordinates, timestamps, and basic status fields required for mapping and history.
- Sends event driven messages such as SOS alerts, geo fence enter and exit notifications, and tamper or power events.
- Supports periodic reporting and heartbeat messages so Plaspy can monitor device presence and connectivity.
- Allows remote configuration commands when supported by the manufacturer and the firmware variant.

## How Plaspy Detects the Protocol

Plaspy uses a shared public endpoint and port for incoming device traffic and automatically determines which tracker protocol is in use based on the incoming data pattern. In most cases the user does not need to select a protocol inside Plaspy if the D12 is configured to report to the Plaspy endpoint.

- Plaspy public endpoint domain is d.plaspy.com and the public server IP is 54.85.159.138.
- Plaspy listens on a single port for all supported devices so configuration is simplified; that port is 8888.
- Devices reporting to the endpoint using either UDP or TCP on port 8888 will be accepted and automatically analyzed.
- When the device is properly configured to point at the Plaspy endpoint, protocol selection in the platform is usually unnecessary.
- If a device does not appear to report correctly, verify the device server address and transport settings and consult device logs or manufacturer guidance.

## Transport and Connection Context

The transport layer and destination details define how the D12 reaches Plaspy. The tracker may be set to use either UDP or TCP depending on the firmware and configuration chosen at deployment. Ensuring the device can reach the Plaspy server and that the carrier allows the chosen transport is key to reliable reporting.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The supported transport on Plaspy for all devices is UDP or TCP on port 8888.
- Using the shared port for all devices simplifies firewall and network configuration on the server side.
- Confirm the tracker is allowed to open outbound GPRS or LTE sessions and that APN settings on the SIM are correct.
- Consider network NAT and firewall behavior in the path between device and Plaspy when troubleshooting connectivity.

## Protocol Compatibility Notes

- Firmware revisions can change message frequency, available events, and optional fields; always check the device firmware version when troubleshooting.
- Hardware revisions or model variants from the manufacturer can introduce small protocol differences between units.
- Manufacturer supplied configuration tools or SMS commands may vary by region and firmware and can affect how the device reports to servers.
- Transport selection between UDP and TCP is configurable in many devices and can affect reliability and packet delivery characteristics.
- Validate device compatibility and recommended settings against official manufacturer documentation before mass deployment.
- Network operator restrictions or SIM provisioning can affect device ability to reach the Plaspy endpoint.

## Why Protocol Understanding Matters

Knowing the basics of the D12 communication protocol helps ensure a smooth integration with Plaspy, faster troubleshooting, and more reliable long term operation. Understanding which events and reporting modes the tracker uses helps align device behavior with your operational needs.

- Ensures the device is configured to send the right event types to the server for monitoring and alerting.
- Helps diagnose connectivity problems by confirming server address, transport, and APN settings.
- Improves battery and reporting efficiency by choosing appropriate reporting intervals and event triggers.
- Supports correct geo fence and SOS handling by verifying how those events are sent by the device.
- Reduces deployment time by aligning device settings with Plaspy expectations up front.

## Why Use Plaspy with This Protocol

Using the Supermate D12 with Plaspy gives organizations a practical way to collect real time location and event data for asset management, fleet oversight, and security monitoring. Plaspy's automatic protocol detection and shared port approach reduce initial configuration steps and simplify large scale rollouts where mixed tracker models may be present.

Plaspy listens for device reports at d.plaspy.com and 54.85.159.138 on port 8888 and accepts UDP or TCP on that port. Because Plaspy uses a single port for all devices and performs automatic protocol detection, integrating the D12 typically only requires setting the device to report to the Plaspy endpoint with the correct transport and APN settings. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer directions on the official Supermate site http://www.gps-summit.com/ since protocol support and device implementation can change over time.
