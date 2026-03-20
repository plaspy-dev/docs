---
slug: /riti/idu_300/protocol
id: idu_300-protocol
sidebar_label: Protocol
title: Riti - IDU-300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Riti IDU-300 GPS tracker and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Riti IDU-300 protocol
  - Riti IDU-300 GPS protocol
  - Riti IDU-300 Plaspy
  - IDU-300 tracking protocol
  - Riti GPS tracker protocol
  - Riti IDU-300 compatibility
  - Riti fleet tracking protocol
  - IDU-300 communication protocol
  - Riti vehicle tracker protocol
  - Plaspy device protocol
---

# Riti - IDU-300 Protocol

This page provides a public, protocol oriented overview for using the Riti IDU-300 GPS tracker with Plaspy. It focuses on how the device communicates in general terms, how Plaspy receives reporting from the tracker, and what to consider when integrating the IDU-300 into a fleet management workflow.

The IDU-300 is a 3G Intelligent Data Unit designed for fleet monitoring, dispatching, and accessory integration such as temperature sensors and dispatch panels. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Use this page for general protocol context and verify device specific details with official Riti documentation.

## Protocol Overview

The protocol for the IDU-300 governs how the tracker identifies itself to a remote server, transmits position and sensor data, and reports status events so a platform like Plaspy can turn raw messages into usable fleet telemetry. This overview stays at a high level and avoids device internals while explaining the role of the communication layer.

- Enables periodic and event driven position reports so fleet state is visible to Plaspy.
- Carries accessory and sensor values such as temperature or external inputs alongside GPS and status information.
- Includes identification or device ID elements so Plaspy can associate incoming data with the correct vehicle record.
- Supports acknowledgements or responses from a backend to confirm configuration or command delivery where the device and firmware implement them.
- Allows transport over standard network connections so the tracker can reach Plaspy from cellular data sessions.

## How Plaspy Detects the Protocol

Plaspy operates a shared endpoint that receives reports from many tracker models and automatically recognizes the format it receives. That means users normally do not need to manually select a protocol in Plaspy if the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com which is the hostname devices can be pointed to.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available.
- The port is 8888 and is the common listening port for device reports to Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on model and network settings.
- All devices in Plaspy use the same port, simplifying device configuration across different tracker models.
- Plaspy automatically detects the tracker protocol when properly addressed to the shared endpoint and port.

## Transport and Connection Context

Connection choices and transport behavior determine how the IDU-300 reaches Plaspy over the cellular network. The device may support both UDP and TCP reporting modes and can be configured to use the Plaspy domain or the direct server IP.

- Devices may point to d.plaspy.com as a hostname for reporting.
- Devices may alternatively be configured to report to 54.85.159.138 where IP addressing is preferred.
- The device may be configured using UDP or TCP on port 8888; your selection depends on device firmware and network reliability requirements.
- Port 8888 is used by all devices reporting to Plaspy, providing a consistent network target.
- Use the transport mode supported by your firmware and test connectivity from the device to the Plaspy endpoint before wide deployment.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and accessory behavior; always check the device firmware level when diagnosing compatibility.
- Hardware revisions or accessory combinations (for example external temperature sensors or dispatch panels) can alter which data fields are reported.
- Some deployment environments require TCP for reliable delivery while others use UDP for lower overhead; verify which transport your device firmware prefers.
- Manufacturer configuration menus or SMS configuration commands may differ between firmware builds, affecting how the device is pointed to Plaspy.
- Confirm device identification values (IMEI or device ID) used by the tracker match the entries in your Plaspy fleet to ensure correct association.
- Validate compatibility against the official Riti documentation for the exact model and firmware to avoid assumptions about message content or behavior.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure the IDU-300 reports reliably to Plaspy, that accessory data is parsed correctly, and that troubleshooting steps are efficient when deployments do not behave as expected.

- Speeds up configuration by ensuring the device is pointed to the correct Plaspy endpoint and transport mode.
- Helps diagnose connectivity issues by narrowing whether a problem is network, transport, or firmware related.
- Improves accessory integration by clarifying which sensor values the device will include in reports to Plaspy.
- Reduces deployment risk by identifying firmware or hardware revisions that require special handling.
- Makes it easier to interpret reporting cadence, event triggers, and expected data elements during testing.

## Why Use Plaspy with This Protocol

Using the Riti IDU-300 with Plaspy gives fleet operators a single platform to receive GPS positions, accessory telemetry, and status events from their vehicles. Plaspy’s shared endpoint approach and automatic protocol detection reduce per-device configuration work and let you focus on operational monitoring rather than low level message parsing.

If you want to learn more about Plaspy and how it receives reports from devices like the IDU-300, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information on the manufacturer site https://www.riti.com.tw/.
