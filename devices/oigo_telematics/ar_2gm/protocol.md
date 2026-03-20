---
slug: /oigo_telematics/ar_2gm/protocol
id: ar_2gm-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-2GM Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Oigo Telematics AR 2GM and how it communicates with Plaspy for fleet tracking
keywords:
  - Oigo Telematics AR-2GM protocol
  - Oigo Telematics AR-2GM GPS protocol
  - AR-2GM tracker Plaspy compatibility
  - AR Series vehicle tracker protocol
  - AR-2GM communication protocol
  - Oigo Telematics GPS tracker protocol
  - AR-2GM fleet management tracking
  - Oigo Telematics protocol integration
  - AR-2GM event report alerts
  - Plaspy GPS tracker compatibility
---

# Oigo Telematics - AR-2GM Protocol

This page describes the publicly relevant protocol context for using the Oigo Telematics AR-2GM tracker with the Plaspy platform. It focuses on how the tracker communicates in general terms, how Plaspy accepts device reports, and what engineers and integrators should understand about compatibility and configuration. The AR-2GM is a discreet vehicle tracker from the AR Series designed for hidden installations and supports event driven reports and alerts useful for fleet management and stolen vehicle recovery.

Plaspy uses shared connection settings for all supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary between firmware versions, hardware revisions, and manufacturer implementation, so while Plaspy handles detection and basic compatibility, installers and administrators should verify device and firmware details with the manufacturer for advanced features or firmware specific behavior.

## Protocol Overview

The AR-2GM communication protocol defines how the tracker identifies itself, reports position and status, and transmits event notifications to a backend server. For integration with Plaspy, the important public aspects are how the device is pointed to the Plaspy endpoint and which transport it uses to deliver regular and event driven messages.

- Enables the device to send location updates and event reports to a remote server for tracking and monitoring.
- Carries identification and status information so Plaspy can associate incoming messages with the correct asset.
- Supports event driven alerts such as geofence breaches, unauthorized use, and speeding reports that are useful for fleet workflows.
- Operates over standard network transports used by GSM capable trackers so data reaches the Plaspy endpoint reliably.
- Provides the information Plaspy needs to display location, time, and configured events without exposing firmware internals.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and automatically detects the tracker protocol for supported devices. In most cases, a properly configured AR-2GM will begin reporting and Plaspy will identify the device type and parse its messages without manual protocol selection in the platform.

- Plaspy listens on the public domain d.plaspy.com and the server IP 54.85.159.138 for device reports.
- The platform receives data on port 8888 and uses that shared port for all supported devices.
- Devices can be configured to use either TCP or UDP to reach the Plaspy endpoint depending on device capabilities.
- When the AR-2GM reports to the Plaspy endpoint, the platform uses its automatic detection to match incoming messages to a supported protocol.
- Administrators typically do not need to choose a protocol inside Plaspy if the device is correctly configured to report to d.plaspy.com or the provided server IP.

## Transport and Connection Context

Connection context describes how the AR-2GM reaches Plaspy rather than the internal packet structure of the protocol. The tracker uses GSM data to transmit messages and can be configured to deliver those messages over common transport layers to Plaspy.

- The device may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy accepts both UDP and TCP on port 8888; the AR-2GM may use either transport depending on configuration and firmware support.
- All devices supported by Plaspy use the same port which simplifies device setup and server routing.
- Network reliability, APN configuration, and local GSM coverage influence how frequently messages arrive and whether TCP or UDP is preferable.
- Use consistent server and port settings on the device side to reduce setup errors when integrating with Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available events, and optional fields; check the device firmware version when troubleshooting.
- Hardware revisions within the AR Series may introduce differences in reported events or supported transports.
- Manufacturer configuration options may alter which events are enabled by default or how frequently position updates are sent.
- Transport selection (UDP vs TCP) can affect message delivery guarantees and battery or network usage patterns.
- Always validate device configuration against official Oigo Telematics documentation for the AR-2GM model.
- If a device does not appear in Plaspy after configuration, confirm APN settings, server address, and correct use of port 8888.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the AR-2GM helps ensure reliable setup, accurate event handling, and efficient long term operation within Plaspy. Awareness of the protocol boundaries lets technicians match device behavior to platform expectations and resolve common integration issues faster.

- Helps verify that the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 as required by Plaspy.
- Enables correct transport selection between UDP and TCP based on network conditions and device support.
- Makes event and alarm configuration clearer so that alerts sent by the tracker appear correctly in Plaspy.
- Assists in diagnosing connectivity issues related to APN, GSM coverage, or incorrect server settings.
- Encourages confirmation of firmware dependent behaviors before deploying at scale.

## Why Use Plaspy with This Protocol

Using the Oigo Telematics AR-2GM with Plaspy gives organizations discreet asset visibility, configurable event reporting, and a unified way to ingest tracker data into fleet workflows. Plaspy’s automatic protocol detection and shared connection settings reduce the configuration burden, letting teams focus on operational use cases such as monitoring, alerts, and recovery.

To learn more about how Plaspy works with vehicle trackers and to review platform features, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.oigotelematics.com/.
