---
slug: /uvi_group/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: UVI Group - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for UVI Group GT02 GPS tracker and how it communicates with Plaspy for vehicle tracking and monitoring
keywords:
  - UVI Group GT02 protocol
  - UVI GT02 GPS protocol
  - GT02 tracking protocol
  - GT02 Plaspy compatibility
  - GT02 GPS tracker
  - vehicle tracking GT02
  - GPRS GPS protocol
  - UVI GT02 communication
  - tracker protocol Plaspy
  - fleet management GT02
---

# UVI Group - GT02 Protocol

This page describes the public protocol context for using the UVI Group GT02 tracker with Plaspy. The GT02 is a compact GPS GSM GPRS tracker designed for vehicle monitoring, anti theft tracking, and real time position reporting. It uses GPS for location, GSM GPRS for data delivery, and supports SMS commands; this page focuses on the communication role the device plays when reporting to the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For Plaspy the public reporting endpoint is d.plaspy.com (server IP 54.85.159.138) on port 8888. Devices may be configured to use UDP or TCP on port 8888. Exact protocol behavior and runtime details can vary by firmware version, hardware revision, and manufacturer implementation, so consult the device manufacturer for firmware specific behavior.

## Protocol Overview

The GT02 tracker communicates positioning and status information over GSM GPRS to a remote server. The public protocol context covers how the device identifies itself to a server, how location and status messages are delivered, and how a fleet platform like Plaspy receives and interprets those messages for mapping and monitoring.

- Enables the device to report GPS position, speed, direction, and basic status to a remote platform.
- Provides an identification mechanism so the receiving server can associate messages with a specific device.
- Supports data delivery over the mobile network so reports reach Plaspy for real time monitoring.
- Allows fallback options such as SMS for commands and basic queries when data is not available.
- Works together with device power and GPS behavior to produce reliable periodic or event driven updates.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and automatically detects the incoming tracker protocol when the device reports to the platform. This removes the need for manual protocol selection inside Plaspy for most properly configured devices and helps streamline onboarding of GT02 trackers.

- Plaspy receives device traffic at d.plaspy.com and at the server IP 54.85.159.138.
- All supported devices use the same port on the Plaspy service, which is port 8888.
- Devices may be configured to send data using either UDP or TCP on port 8888 depending on device support.
- When a GT02 is correctly pointed at the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and handle incoming reports.
- Users typically do not need to select a protocol manually in Plaspy if the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport and connection settings determine how GT02 reports reach Plaspy but do not change the high level purpose of the protocol. The GT02 uses GSM GPRS to deliver data, and the device supports configuring the target host and transport mode.

- The device may be configured to use either UDP or TCP on port 8888 for reporting.
- Plaspy accepts connections and messages at d.plaspy.com and at 54.85.159.138 on port 8888.
- Plaspy uses the same port number for all devices it supports, simplifying device setup.
- Choosing UDP or TCP can affect delivery characteristics but both are supported on the Plaspy endpoint for GT02 devices.
- Ensure the device APN and GPRS settings are valid so messages can traverse the mobile network to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional behaviors; verify the device firmware level when checking compatibility.
- Hardware revisions and regional variants may alter supported features or the factory default reporting settings.
- Manufacturer configuration defaults might use SMS for some commands and GPRS for tracking; confirm which transport the device will use in production.
- Transport selection between UDP and TCP matters for network behavior and should match how the device is configured to report.
- Always validate device reporting to the Plaspy endpoint by confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- When in doubt, consult manufacturer documentation to confirm which commands and settings exist on the specific GT02 unit you have.

## Why Protocol Understanding Matters

Understanding how the GT02 communicates helps with successful setup, reliable tracking, and efficient troubleshooting. Knowing how the device reports, what transport it uses, and how Plaspy receives data reduces configuration time and improves operational reliability.

- Ensures the device is configured to point to the correct Plaspy endpoint and port so reports are received.
- Helps diagnose connectivity issues that stem from APN, mobile network, or transport mismatches.
- Clarifies expectations for reporting frequency, power behavior, and how events are signaled from the device.
- Supports testing and validation during initial deployment so data flows into Plaspy as expected.
- Aids coordination with the device vendor when behavior differs from documentation or expected results.

## Why Use Plaspy with This Protocol

Using the UVI Group GT02 with Plaspy provides a practical way to capture position, movement, and status information from vehicles and display that data in a fleet management context. Plaspy handles incoming reports on a shared endpoint and port, automatically detecting the tracker protocol so the platform can map the device data into location and status views useful for operations and security monitoring.

If you want to learn more about how Plaspy supports device reporting and fleet visibility, visit https://www.plaspy.com. For the most current and model specific protocol and firmware details, verify device behavior and configuration guidance with the manufacturer at http://www.uvi-group.com/ as protocol support and firmware behavior may change over time.
