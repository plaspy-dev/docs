---
slug: /atrack/at5i/protocol
id: at5i-protocol
sidebar_label: Protocol
title: ATrack - AT5i Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the ATrack AT5i and how it communicates with Plaspy for tracking and fleet management
keywords:
  - ATrack AT5i protocol
  - AT5i GPS tracker
  - AT5i protocol Plaspy
  - ATrack Plaspy compatibility
  - AT5i communication protocol
  - AT5i tracking protocol
  - vehicle tracking AT5i
  - GPS GLONASS AT5i
  - AT5i AES encryption
  - fleet management AT5i
---

# ATrack - AT5i Protocol

This page documents the public protocol context for the ATrack AT5i when used with Plaspy. It explains, at a protocol level, how the AT5i reports position, movement status, and events to a remote tracking server and how those communications are understood by Plaspy. The content focuses on connection and compatibility information rather than proprietary or firmware specific internals.

Plaspy uses a shared endpoint and connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. The AT5i is a versatile GPRS GNSS tracker with GPS and GLONASS support, multiple digital and analog I O ports, AES 128 data encryption, configurable events, and geo fencing. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device configuration and manufacturer documentation should be considered during integration.

## Protocol Overview

The protocol used by the AT5i governs how the device identifies itself, reports GNSS position and movement, reports I O and sensor states, and delivers event messages to Plaspy. At a high level the protocol enables reliable delivery of location and status data so Plaspy can process, display, and alert on vehicle activity without requiring end users to manage low level transport details.

- Carries GNSS position and motion status so locations are viewable in Plaspy
- Conveys configurable events and alerts such as geo fence entries and tamper detections
- Transmits digital and analog I O states and sensor telemetry for device monitoring
- Supports data confidentiality features present on the device such as AES 128 encryption
- Allows the device to identify itself and associate messages with a specific tracker record in Plaspy

## How Plaspy Detects the Protocol

Plaspy accepts reports from many trackers on the same network endpoint and automatically detects the tracker protocol when messages reach the server. Because Plaspy uses a shared server address and port for device reporting, most AT5i units only need to be pointed at the Plaspy endpoint with the correct network settings to be recognized.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138 and the server listens on port 8888
- Devices may be configured to use either UDP or TCP on port 8888 to report to Plaspy
- All devices in Plaspy use the same port which simplifies fleet wide configuration
- When the AT5i sends data to the Plaspy endpoint the platform determines the protocol automatically
- Typically there is no need to select a protocol manually inside Plaspy if the tracker is configured to report to the Plaspy endpoint

## Transport and Connection Context

Connection and transport choices are part of how an AT5i is configured to reach a tracking server. The device can use the GPRS data channel to send reports over either UDP or TCP, and the endpoint settings on the device determine whether messages are delivered reliably or connectionless depending on the selected transport.

- The AT5i may be configured to point to d.plaspy.com or directly to 54.85.159.138
- Devices can use UDP or TCP on port 8888 depending on device support and chosen configuration
- Plaspy uses the same port for all supported devices which reduces per device configuration variance
- Network settings such as APN, firewall rules, and NAT behavior can affect connectivity to the Plaspy endpoint
- Some deployments prefer TCP for session oriented delivery while others use UDP for lower overhead reporting
- Confirm transport preferences in your device setup and test connectivity to the Plaspy endpoint

## Protocol Compatibility Notes

- Compatibility can depend on device firmware version; features or message fields may vary between firmware releases
- Hardware revisions and optional modules on the AT5i may enable or change available telemetry and event reports
- Manufacturer side settings and default reporting behaviors may differ by region or production batch
- Transport selection between UDP and TCP can affect how messages are transmitted and how Plaspy receives them
- Encryption options present on the device such as AES 128 may require matching platform configuration or handling
- Validate expected behavior by comparing device configuration, on device logs, and Plaspy incoming traffic when possible
- Refer to official ATrack documentation for firmware specific notes and configuration examples

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, reliable reporting, and faster troubleshooting when integrating the AT5i with Plaspy. Knowing how the device reports, what transports it can use, and how events are represented makes it easier to validate that messages arrive and are interpreted correctly.

- Helps confirm that the tracker is pointed to d.plaspy.com or the correct Plaspy IP and port
- Aids troubleshooting when reports do not appear in Plaspy due to network or configuration issues
- Enables sensible choices around transport, encryption, and event reporting for specific fleet needs
- Improves testing workflows by clarifying what to expect from device logs and Plaspy incoming messages
- Supports long term reliability by making it easier to track firmware or configuration changes that affect reporting

## Why Use Plaspy with This Protocol

Using the AT5i with Plaspy provides a centralized way to monitor GNSS position, movement status, I O states, and configurable events across a fleet. Plaspy’s shared endpoint and automatic protocol detection simplify device onboarding so organizations can focus on operational workflows rather than low level transport details.

If you want to learn more about Plaspy and how it works with devices like the ATrack AT5i visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration guides consult the manufacturer at https://www.atrack.com.tw/ since protocol support and firmware behavior can change over time and should be verified against official ATrack documentation.
