---
slug: /queclink/gt300/protocol
id: gt300-protocol
sidebar_label: Protocol
title: QuecLink - GT300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for QuecLink GT300 and how the tracker communicates with Plaspy for reliable location reporting and integration
keywords:
  - QuecLink GT300 protocol
  - QuecLink GT300 GPS protocol
  - GT300 Plaspy compatibility
  - QuecLink GT300 tracking protocol
  - GT300 communication protocol
  - QuecLink GPS tracker protocol
  - GT300 device integration
  - GT300 atTrack protocol
  - Plaspy device protocol
  - vehicle tracking GT300
---

# QuecLink - GT300 Protocol

This page provides a public protocol overview for using the QuecLink GT300 with Plaspy. It focuses on the communication context that enables the GT300 to report location, events, and status to the Plaspy platform without sharing sensitive implementation details. The GT300 is a compact GSM GPS safety phone intended for seniors and lone workers, and it includes features such as an internal u blox GPS chipset, a 3 axis accelerometer for motion and man down detection, and reporting options provided by the @Track reporting scheme.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is pointed at the Plaspy endpoint. Exact protocol behavior and supported messages can vary by GT300 firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ between units. For Plaspy compatibility the platform relies on consistent connection endpoints and automatic protocol identification to simplify setup.

## Protocol Overview

The GT300 communication protocol defines how the device exchanges telemetry and event messages with a backend server. At a high level the protocol's role is to identify the device, deliver location and status data, and support event reporting such as SOS alerts, geo fence transitions, low battery, and man down notifications. The GT300 commonly uses the device reporting patterns exposed by the manufacturer and may utilize the @Track reporting options.

- Enables device identification and reporting of GPS positions and cellular context to Plaspy.
- Carries event notifications like emergency SOS, geo fence crossings, low battery, and man down alerts.
- Allows periodic or scheduled position reporting and ad hoc alerts depending on configuration.
- Supports command and configuration exchanges by SMS or over the data connection when available.
- Provides sufficient telemetry for Plaspy to map device events to user alerts and historical tracks.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and port and automatically determines the tracker protocol used by the reporting device. When a GT300 is configured to send its data to the Plaspy endpoint the platform uses that connection to identify the reporting format and route messages into the correct processing pipeline. In most cases users do not need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy server.

- Plaspy listens on a shared server address and port for device reports and maps incoming connections to the proper protocol.
- The Plaspy server endpoint is d.plaspy.com and the public server IP is 54.85.159.138 for direct configuration options.
- Plaspy uses the same port across all supported devices which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol from the incoming device traffic so manual protocol selection is usually unnecessary.
- Correct device configuration to point to the Plaspy endpoint is the common prerequisite for automatic detection to succeed.

## Transport and Connection Context

The GT300 can be configured to use IP data transport to report positions and events to a remote server. Depending on device firmware and configuration the GT300 may use UDP or TCP to send its reports. For Plaspy integration the important connection details are intentionally consistent across devices to make setup straightforward.

- Devices may be configured to use either UDP or TCP depending on the GT300 firmware and settings.
- Plaspy accepts connections on port 8888 and all devices in Plaspy use the same port for reporting.
- The device can be pointed at the Plaspy server by using the domain d.plaspy.com or the server IP 54.85.159.138 when configuring the tracker.
- Choosing UDP versus TCP depends on reliability requirements and the tracker firmware support for each transport.
- Ensure the device APN and GPRS settings are valid for outbound IP connections so reports reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware variations can change which events and reporting fields the GT300 sends, so behavior may differ between firmware versions.
- Hardware revisions or production batches can introduce subtle differences; validate new units before wide deployment.
- Manufacturer side configuration and available reporting options such as @Track features can affect what Plaspy receives.
- Transport selection between UDP and TCP should match what the device firmware supports and what the network can reliably carry.
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is required for communication with Plaspy.
- Always cross reference device behavior with the official QuecLink documentation and release notes for the GT300.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps with faster setup, more accurate troubleshooting, and reliable long term operation when integrating GT300 devices with Plaspy. Knowing which messages the device can send and how those messages are transported reduces ambiguity during commissioning and supports better operational decisions.

- Speeds setup by clarifying which server address and transport to configure on the device.
- Helps diagnose connectivity issues by narrowing whether a problem is network, transport, or firmware related.
- Informs expectations for event reporting such as SOS, geo fence, and man down alerts.
- Guides firmware update decisions when new features or fixes affect reporting behavior.
- Improves data mapping so Plaspy can present meaningful alerts and historical tracks to users.

## Why Use Plaspy with This Protocol

Using the QuecLink GT300 with Plaspy provides a straightforward path to centralize location visibility, event monitoring, and alerting for safety and lone worker scenarios. Plaspy's automatic protocol detection and consistent connection endpoint reduce the configuration burden for fleets and deployments that use mixed device fleets or multiple firmware versions.

To learn more about how Plaspy works with devices like the GT300 visit https://www.plaspy.com. Please verify the latest GT300 protocol details, firmware behavior, and device specific documentation on the official manufacturer site https://www.queclink.com/ since protocol support and implementation details can change over time.
