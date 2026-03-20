---
slug: /cantrack/10000mah/protocol
id: 10000mah-protocol
sidebar_label: Protocol
title: CanTrack - 10000mAh Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the CanTrack 10000mAh GPS tracker and how it communicates with Plaspy for reliable tracking
keywords:
  - CanTrack 10000mAh protocol
  - CanTrack 10000mAh GPS
  - CanTrack GF60 protocol
  - CanTrack protocol Plaspy
  - CanTrack tracking protocol
  - CanTrack GPS compatibility
  - Plaspy device protocol
  - Plaspy GPS tracker support
  - Magnetic asset tracker protocol
  - Vehicle tracking protocol CanTrack
---

# CanTrack - 10000mAh Protocol

This page describes the public protocol context for using the CanTrack 10000mAh Magnetic Asset GPS Tracker GF60 series with the Plaspy platform. It focuses on the communication and connection considerations that matter when integrating this tracker into Plaspy, using non sensitive public information that helps with setup and validation.

Plaspy uses shared connection settings across its supported devices and automatically detects tracker protocols when devices are configured to report to its endpoint. Exact behavior and available features can vary between firmware versions, hardware revisions, and manufacturer implementation, so this guide is intended to clarify the general protocol role and connection expectations rather than document device firmware internals.

## Protocol Overview

At a high level, the device protocol defines how the tracker identifies itself, reports position and status, and sends alarms and telemetry to a server such as Plaspy. For the GF60 series this means using cellular data to upload GPS positions, battery and alarm events so Plaspy can present live location, historical routes and alerts.

- Enables the tracker to report GPS positions, battery level, tamper and vibration alarms to Plaspy.
- Carries identification and status information so Plaspy can associate points with the correct device record.
- Supports configurable reporting modes that trade off between real time updates and extended battery standby.
- Allows remote configuration via SMS or TCP IP commands where supported, which is useful when network connectivity is limited.
- Provides the event context Plaspy needs to generate geo fence alerts, route history, and telemetry dashboards.

## How Plaspy Detects the Protocol

Plaspy listens on a shared server endpoint and port and will automatically detect the tracker protocol when a device sends its first reports to that endpoint. In most deployments the device is pointed at the Plaspy endpoint and no manual protocol selection inside Plaspy is required for standard device operation.

- Plaspy server domain is d.plaspy.com which resolves to the public server address.
- Plaspy server IP is 54.85.159.138 which is the published address for device reporting.
- Plaspy uses the same port for all supported devices and will accept device uploads on that port.
- The port Plaspy uses is 8888 and Plaspy accepts both UDP and TCP connections on that port.
- When the tracker is configured to send to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will receive the reports and automatically determine the protocol.
- Typical user workflow does not require selecting a protocol manually in Plaspy if the tracker is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport choices affect how the tracker opens a connection to Plaspy and can influence reliability and responsiveness. The GF60 series supports cellular uploads over TCP IP and GPRS 4G, and the device can be configured to use either UDP or TCP to reach Plaspy depending on the tracker settings and network conditions.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port so server side configuration is consistent across models.
- TCP provides connection oriented uploads while UDP can be used for lighter weight reporting where supported by the device firmware.
- Ensure the device APN and cellular data plan permit outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware differences can change available commands, message fields, and reporting behavior between releases.
- Hardware revisions or regional variants of the GF60 series may implement slight variations in reporting or supported bands.
- Transport selection matters: a device set to UDP will behave differently than one set to TCP; verify chosen transport in device configuration.
- SMS configuration remains a practical fallback for APN and server settings when data configuration is not available in the field.
- Validate expected alarm and sensor behavior against the manufacturer documentation for the specific firmware version on the device.
- Confirm power and reporting mode settings if you rely on long standby times to balance battery life and reporting frequency.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth setup, reliable data flow, and effective troubleshooting when the tracker is used with Plaspy. Knowing how the device reports and what fields it sends reduces guesswork during integration and improves operational reliability.

- Speeds initial setup by clarifying which server address and transport the device must use to reach Plaspy.
- Reduces false alarms and missed events by aligning device reporting modes with monitoring expectations.
- Helps troubleshoot connectivity issues by confirming whether the device is using TCP or UDP and targeting d.plaspy.com or the Plaspy IP.
- Improves battery management by matching reporting intervals and modes to real world needs.
- Assists in validating that alarm and sensor events sent by the device will be recognized by Plaspy dashboards and alerts.
- Informs decisions when coordinating firmware upgrades or when choosing device variants for specific deployments.

## Why Use Plaspy with This Protocol

Using the CanTrack 10000mAh GF60 series with Plaspy gives organizations a practical combination of rugged, magnetic mounting and cloud based tracking and telemetry. Plaspy receives GPS positions, alarms and telemetry from the tracker and presents them in real time and historical views for fleet management, recovery workflows, and long term asset tracking.

Plaspy offers a consistent server endpoint so devices pointed to d.plaspy.com or 54.85.159.138 on port 8888 can be managed without per device port changes, and the platform automatically detects the tracker protocol once the device reports. To learn more about how Plaspy can work with CanTrack devices visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior and configuration instructions with the manufacturer at https://www.cantrackgps.com/ since protocol support and device implementations can change over time.
