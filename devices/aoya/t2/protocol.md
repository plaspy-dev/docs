---
slug: /aoya/t2/protocol
id: t2-protocol
sidebar_label: Protocol
title: AoYa - T2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the AoYa T2 GPS tracker showing how it communicates with Plaspy and what to check for compatibility
keywords:
  - AoYa T2
  - AoYa T2 protocol
  - AoYa T2 GPS
  - AoYa T2 compatibility
  - AoYa T2 Plaspy
  - AoYa GPS tracker
  - T2 vehicle tracking
  - T2 communication protocol
  - Plaspy GPS integration
  - fleet tracking AoYa
---

# AoYa - T2 Protocol

This page describes the public protocol context for using the AoYa T2 tracker with Plaspy. It focuses on how the device communicates at a connection and reporting level so administrators and integrators can understand what to check when registering and troubleshooting T2 units on Plaspy. The information here is intended to be public and non sensitive while helping you align device settings with Plaspy expectations.

The AoYa T2 is a compact GSM GPRS tracker with an emergency battery and UBLOX GPS positioning. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Use this overview to understand the communication context and to verify settings against the device manual and manufacturer resources.

## Protocol Overview

The communication protocol of the AoYa T2 defines how the tracker reports location, status, and alerts to a remote server and how configuration commands can be delivered back to the device. At a high level the protocol enables identification, telemetry reporting, and remote management so Plaspy can present live tracking and historical data.

- Enables the T2 to send periodic location reports and event driven messages to Plaspy
- Carries identifying information so Plaspy can associate a message with a specific device
- Conveys telemetry such as GPS fix, cellular signal status, battery condition, and alarms
- Provides a channel for remote configuration and control when supported by the device
- Supports both UDP and TCP transports depending on device configuration and network conditions

## How Plaspy Detects the Protocol

Plaspy receives incoming messages on a shared network endpoint and automatically detects the tracker protocol so users typically do not need to manually select a protocol inside Plaspy. Proper device configuration to point at the Plaspy endpoint is the most common requirement for successful detection and registration.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138
- The port is 8888 and all devices in Plaspy use the same port
- Devices may be configured to use either UDP or TCP on port 8888
- When a T2 reports to the Plaspy endpoint the platform matches incoming messages to known protocol patterns and associates the device automatically
- If a device is not detected automatically, checking device reporting settings and firmware version is the recommended first step

## Transport and Connection Context

Connection context covers the network-level settings the T2 uses to reach Plaspy and the practical choices you can make when deploying devices. For many deployments the transport choice and correct destination address are the primary configuration items.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the domain d.plaspy.com or to the IP address 54.85.159.138
- Plaspy uses the same port for all supported devices which simplifies server settings across models
- Choose UDP for lower overhead and TCP for reliable delivery where the device and network prefer it
- Ensure SIM data connectivity and APN settings are correct so the T2 can reach the Plaspy endpoint

## Protocol Compatibility Notes

- The AoYa T2 is compatible with Plaspy when configured to report to the Plaspy endpoint and using supported transport settings
- Firmware revisions and device hardware variants can change message content and available features; always verify against the device firmware release notes
- Manufacturer configuration commands and behavior may differ by batch or regional firmware; confirm which configuration options are available on your T2
- Transport selection between UDP and TCP may affect delivery behavior in networks with high packet loss or NAT
- Emergency battery and power reporting behavior may vary and can affect how the device reports when vehicle power is removed
- Validate device settings by confirming the reporting server is set to d.plaspy.com or 54.85.159.138 on port 8888

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure devices are configured correctly, supports faster troubleshooting, and improves long term reliability when used with Plaspy. Knowing the reporting expectations and transport context reduces setup time and prevents common connectivity mistakes.

- Ensures the device is pointed at the correct Plaspy endpoint and using the expected transport
- Helps diagnose why a device is not appearing in Plaspy or why data is missing
- Clarifies how power events and emergency battery behavior impact reporting
- Makes it easier to validate compatibility after firmware updates or hardware changes
- Supports informed decisions about network and APN choices for reliable connectivity

## Why Use Plaspy with This Protocol

Using the AoYa T2 with Plaspy gives organizations a straightforward way to collect live location, event alerts, and basic telemetry for vehicles and assets. The T2's compact form factor and emergency battery make it suitable for discreet installations while Plaspy handles message reception, protocol detection, and mapping so teams can focus on operations.

To learn more about Plaspy and how it works with devices like the AoYa T2 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so verify the latest device specific protocol documentation and firmware notes on the manufacturer site http://www.aoyagps.com/ before wide scale deployment.
