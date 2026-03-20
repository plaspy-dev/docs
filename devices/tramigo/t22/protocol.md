---
slug: /tramigo/t22/protocol
id: t22-protocol
sidebar_label: Protocol
title: Tramigo - T22 Protocol
sidebar_class_name: menu_item_tracker
description: Public technical overview of Tramigo T22 communication with Plaspy servers for GPS tracking and device compatibility
keywords:
  - Tramigo T22 protocol
  - Tramigo T22 GPS protocol
  - Tramigo T22 protocol for Plaspy
  - Tramigo T22 communication protocol
  - Tramigo T22 tracking protocol
  - Tramigo GPS tracker protocol
  - Tramigo tracker Plaspy compatibility
  - fleet tracking Tramigo T22
  - GPS tracker protocol Plaspy
  - vehicle tracking Tramigo
---

# Tramigo - T22 Protocol

This page covers the public protocol context for using the Tramigo T22 tracker with Plaspy. It explains, at a high level, how the T22 communicates over mobile networks and how those communications are received and processed by the Plaspy platform. The goal is to provide clear, non sensitive protocol context that helps with integration, configuration, and troubleshooting while encouraging verification of manufacturer documentation for firmware specific details.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker reporting protocol when data arrives. Exact protocol behavior for the Tramigo T22 can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior such as reporting intervals, sleep modes, and event handling may differ between units. This page focuses on the communication context rather than proprietary packet or firmware internals.

## Protocol Overview

The Tramigo T22 uses cellular data services to report positional and event data to a backend server. In practice, the device sends its location, event triggers, and status updates over GSM and GPRS to a configured server endpoint, and Plaspy ingests those messages to provide tracking, alerts, and history. The protocol role is to reliably move the device data from the tracker to Plaspy using the network transport the device supports.

- Provides a channel for transmitting GPS position, timestamp, and event markers from the T22 to the server
- Enables identification of the device so Plaspy can associate incoming messages with the correct tracker record
- Supports reporting modes that reflect device settings such as time or distance based reporting and sleep mode behavior
- Accommodates store and forward behavior because the device can buffer data in internal memory until a connection is available
- Carries simple state and input events such as ignition, panic, and low battery as part of regular reports

## How Plaspy Detects the Protocol

Plaspy receives data from devices at a single public endpoint and inspects incoming traffic to determine the tracker protocol. Because Plaspy handles many different tracker types on the same endpoint, users typically do not need to select a protocol inside Plaspy as long as the device is configured to report to the Plaspy server address and port.

- Plaspy uses the shared server domain d.plaspy.com for device reporting
- Plaspy server IP is 54.85.159.138 and the port used for all devices is 8888
- Plaspy automatically detects the tracker protocol when the device sends data to the Plaspy endpoint
- In most cases a correctly configured device requires no manual protocol selection within Plaspy
- If a device does not appear to connect, verify the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 and confirm transport type

## Transport and Connection Context

The Tramigo T22 communicates over cellular networks using GPRS and can be configured to use either UDP or TCP transport depending on the unit configuration and firmware support. The connection context is primarily about pointing the tracker at the correct Plaspy endpoint and ensuring the carrier network allows the chosen transport.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- The port used for device reporting with Plaspy is 8888 for all supported devices
- The T22 may use UDP or TCP on port 8888 depending on device configuration and firmware
- Ensure the SIM and mobile operator data settings allow GPRS connections to the Plaspy endpoint
- Firewall or APN restrictions on the cellular network can prevent successful delivery and should be checked during setup

## Protocol Compatibility Notes

- Firmware revisions can change message content, supported transports, and available events; verify firmware release notes when possible
- Hardware revisions or optional features in the T22 (for example battery backup or internal memory behavior) can affect reporting and store and forward behavior
- Manufacturer configuration tools or USB setup options may be needed to set the reporting server to d.plaspy.com or 54.85.159.138 and select UDP or TCP on port 8888
- Transport selection (UDP versus TCP) should match what the device firmware supports and what the mobile network/APN allows
- Plaspy’s automatic detection reduces the need to select protocols manually, but correct device endpoint and transport configuration is still required
- Always validate device behavior on a test SIM and network before deployment to ensure reliable reporting patterns

## Why Protocol Understanding Matters

Understanding how the Tramigo T22 communicates helps ensure a reliable connection to Plaspy, speeds up troubleshooting, and supports long term reliability of tracking services. Awareness of the protocol and transport context allows integrators to identify configuration errors, network limitations, or firmware behaviors that affect data delivery.

- Makes it easier to confirm the device is pointing at d.plaspy.com or 54.85.159.138 on port 8888
- Helps narrow down issues between network, device, and server when messages fail to arrive
- Informs decisions about using UDP or TCP based on network stability and data requirements
- Guides validation steps such as testing with a known working SIM, verifying APN settings, and confirming firmware version
- Supports planning for battery life and reporting intervals by understanding how the device sends data and uses sleep modes

## Why Use Plaspy with This Protocol

Using the Tramigo T22 with Plaspy gives organizations straightforward visibility into asset location and status by leveraging Plaspy’s shared ingestion endpoint and automatic protocol detection. The T22’s internal GPS and GSM combined with Plaspy’s cloud infrastructure make it practical to monitor vehicles, recover assets, and manage fleets without having to manage protocol selection inside the platform.

If you want to learn more about Plaspy and how it can receive and process Tramigo T22 reports, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and official configuration instructions please verify information on the manufacturer site http://www.tramigo.net/. Protocol support and firmware behavior can change over time so checking manufacturer documentation is recommended for accurate, device specific setup.
