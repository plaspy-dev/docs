---
slug: /concox/gt800/protocol
id: gt800-protocol
sidebar_label: Protocol
title: Concox - GT800 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Concox GT800 tracker with Plaspy including connection settings and compatibility notes
keywords:
  - Concox GT800 protocol
  - Concox GT800 GPS protocol
  - GT800 protocol
  - Concox GT800 tracking protocol
  - Concox GT800 Plaspy compatibility
  - GT800 communication protocol
  - Concox vehicle tracker protocol
  - GPS tracker GT800 protocol
  - Concox GT800 integration
  - GT800 tracker protocol Plaspy
---

# Concox - GT800 Protocol

This page describes the public protocol context for using the Concox GT800 vehicle tracker with Plaspy. It explains how the tracker communicates with Plaspy at a high level, what role the tracker reporting protocol plays in reliable tracking, and what to check when configuring devices to report to the Plaspy server. The GT800 includes GPS and AGPS location reporting, door status detection, two way communication, and an SOS function, all of which rely on the device communication protocol to reach a backend platform.

Plaspy uses shared connection settings and automatic protocol detection across supported devices, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. This page focuses on public, non sensitive information about how the GT800 can work with Plaspy and what to watch for during setup and validation.

## Protocol Overview

The GT800 tracker protocol is the set of rules and message behaviors that let the device report position, status, and alarms to a backend service like Plaspy and accept remote commands when supported. The protocol governs how the device establishes a connection, identifies itself, and formats the information that Plaspy uses for mapping, alerts, and reporting.

- Enables the GT800 to transmit GPS and AGPS derived location data to Plaspy for real time visibility.
- Carries status and sensor information such as door open or closed events and SOS alerts to the server.
- Provides a way for two way communications where supported, allowing remote commands and acknowledgements via the same reporting channel.
- Includes device identification that helps Plaspy link reporting messages to a specific tracker instance.
- Acts as the basis for alarm, heartbeat, and periodic reporting needed for fleet monitoring and alerting.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a single shared endpoint and port and automatically detects the tracker protocol used by an incoming device. When a GT800 is configured to report to the Plaspy endpoint, users generally do not need to manually select a protocol inside Plaspy for the initial connection to be recognized.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The listening port used by Plaspy for devices is 8888 and it is the same port for all supported devices.
- Plaspy automatically detects the tracker protocol for properly configured devices that report to the Plaspy endpoint.
- Users typically only need to ensure the GT800 is pointed to the Plaspy endpoint and uses the correct transport and port.
- For advanced features or firmware specific behavior consult device documentation and perform a test registration to confirm reporting.

## Transport and Connection Context

The connection context describes how the GT800 establishes transport level sessions to send protocol messages. The GT800 can be configured to use different transport options depending on the hardware and firmware, and that selection affects how data is delivered to Plaspy.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the Plaspy server domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- All devices in Plaspy use the same port number which simplifies server side configuration and firewall rules.
- Transport choice can affect message delivery guarantees and behavior for two way commands and acknowledgements.
- Confirm the GT800 transport setting matches your network policy and the chosen device configuration for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional features that appear in device reports.
- Hardware revisions and region specific models may implement protocol variants or optional functions differently.
- Manufacturer configuration options on the GT800 may enable or disable certain reports such as door status or SOS transmission.
- TCP versus UDP transport selection can impact how the device retries or confirms data delivery to Plaspy.
- Always validate that the GT800 is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888 when pairing with Plaspy.
- Cross check feature availability like two way commands and AGPS behavior against the Concox documentation for your exact model and firmware.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the GT800 helps ensure a smooth setup, accurate data flow, and effective troubleshooting when devices report to Plaspy. Clear knowledge of reporting behavior and transport choices reduces integration time and improves operational reliability.

- Speeds up initial configuration by aligning device endpoint and transport with Plaspy settings.
- Helps diagnose connectivity problems such as wrong host, port, or transport mismatch.
- Guides expectations about which device features will produce server side events and alerts.
- Supports informed decisions on firmware updates and hardware selection for fleet deployments.
- Improves security and network planning by identifying required open ports and allowed hosts.

## Why Use Plaspy with This Protocol

Using the Concox GT800 with Plaspy gives organizations a straightforward way to collect vehicle location, status, and alarm data into a single monitoring and reporting platform. Plaspy’s shared endpoint approach and automatic protocol detection reduce the amount of manual protocol selection required during onboarding, letting teams focus on operational setup and alerts.

If you want to learn more about how Plaspy handles device reporting and fleet management, visit https://www.plaspy.com. For the most current device specific protocol definitions, firmware notes, and manufacturer guidance verify details on the Concox website https://www.iconcox.com/ since protocol support and firmware behavior can change over time.
