---
slug: /tzone/tz_tag04/protocol
id: tz_tag04-protocol
sidebar_label: Protocol
title: TZone - TZ-Tag04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the TZone TZ-Tag04 tracker with Plaspy including connection context and compatibility guidance
keywords:
  - TZone TZ-Tag04
  - TZ-Tag04 protocol
  - TZone GPS tracker protocol
  - TZ-Tag04 Plaspy compatibility
  - TZone tracking protocol
  - TZ-Tag04 communication protocol
  - TZone asset tracker
  - TZ-Tag04 environmental monitoring
  - TZone tracker connectivity
  - TZ-Tag04 device integration
---

# TZone - TZ-Tag04 Protocol

This page outlines the public protocol context for using the TZone TZ-Tag04 tracker with Plaspy. It explains how the tracker’s reporting and telemetry relate to Plaspy’s shared connection settings and what aspects are relevant when configuring devices to report location and sensor data to the Plaspy platform.

The TZ-Tag04 is a compact, IP65 rated tracker with built in temperature and humidity sensing, RFID 2.4 G wireless support, a precision sensor, and a long life battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for the TZ-Tag04 governs how the device reports position, environmental telemetry, and status to a backend server such as Plaspy. This public overview focuses on the role of the protocol rather than implementation details, helping you understand what to expect when integrating the device.

- Enables the tracker to send location and sensor data that Plaspy can ingest and display.
- Carries identifying information that lets Plaspy link a device report to a specific asset or tracker.
- Transports telemetry such as temperature, humidity, battery status, and optional RF tag data alongside position updates.
- Supports configurable reporting intervals and transmission power settings on the device that affect how often Plaspy receives updates.
- Works over standard transport channels so the tracker can be directed to report to the Plaspy endpoint for automatic integration.

## How Plaspy Detects the Protocol

Plaspy’s platform is built to accept device reports on a unified endpoint and to detect the device reporting format automatically. In most cases a properly configured TZ-Tag04 will begin delivering data to Plaspy without requiring manual protocol selection within the platform.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- When the TZ-Tag04 is configured to report to Plaspy, the platform examines incoming reports and associates them with a device record automatically.
- Users generally do not need to pick a protocol inside Plaspy as long as the device is pointed to the Plaspy endpoint and uses a supported transport.
- If a device is not appearing, checking the device reporting address and transport settings is the first troubleshooting step.

## Transport and Connection Context

The TZ-Tag04 can be configured to report over standard network transports. Understanding the available transport options and destination settings helps ensure reliable connectivity to Plaspy.

- The device may be configured using UDP or TCP on port 8888 depending on device support and your configuration.
- Plaspy accepts reports at port 8888 and the same port is used for all devices supported by the platform.
- Devices may point to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138 when configuring the reporting target.
- Choose UDP when low overhead and simpler transmission is preferred; choose TCP where reliable delivery and session behavior are required by the device firmware.
- Confirm device-side settings for reporting interval, TX power, and transport to match your coverage and battery life requirements.

## Protocol Compatibility Notes

- Firmware revisions can change how a TZ-Tag04 formats or delivers telemetry; verify the firmware level when diagnosing differences.
- Hardware revisions and manufacturing variants sometimes result in small protocol or transport behavior differences between units.
- Manufacturer-side configuration tools or provisioning steps may be required to set the device reporting target to Plaspy.
- Transport selection (UDP vs TCP) can affect delivery reliability and may be constrained by local network environments.
- Plaspy’s automatic detection covers common reporting formats, but unusual or modified firmware may require additional validation.
- Always validate that reporting intervals and power settings are compatible with your operational needs and expected battery life.

## Why Protocol Understanding Matters

Understanding the device communication protocol and connection context helps ensure a successful deployment, predictable telemetry, and straightforward troubleshooting when the TZ-Tag04 is used with Plaspy.

- Faster setup by knowing where and how to point the device reporting settings.
- Clearer troubleshooting steps when data does not arrive at Plaspy as expected.
- Better battery and network planning by matching reporting intervals and TX power to use cases.
- Informed decisions about transport selection to balance reliability and power use.
- Ability to validate that environmental sensors such as temperature and humidity are being reported and interpreted correctly by Plaspy.

## Why Use Plaspy with This Protocol

Using the TZ-Tag04 with Plaspy provides a practical way to collect location and environmental telemetry from compact, durable trackers and view that data in a centralized fleet and asset management platform. For organizations tracking assets, monitoring temperature sensitive goods, or needing long life trackers for low maintenance use cases, pairing this hardware with Plaspy simplifies operational visibility.

To learn more about Plaspy and how it can work with the TZ-Tag04, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer device details can change over time, so please verify the latest device specific protocol information on the manufacturer website http://www.tzonedigital.com/ before deploying at scale.
