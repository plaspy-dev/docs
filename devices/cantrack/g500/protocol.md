---
slug: /cantrack/g500/protocol
id: g500-protocol
sidebar_label: Protocol
title: CanTrack - G500 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the CanTrack G500 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - CanTrack G500 protocol
  - CanTrack G500 GPS protocol
  - CanTrack G500 protocol for Plaspy
  - CanTrack G500 communication protocol
  - CanTrack G500 tracking protocol
  - CanTrack GPS tracker protocol
  - Plaspy CanTrack compatibility
  - G500 tracker protocol
  - vehicle tracking G500
  - fleet tracking CanTrack
---

# CanTrack - G500 Protocol

This page describes the public protocol context for using the CanTrack G500 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what role the reporting protocol plays in data exchange, and what to consider when pointing a G500 to the Plaspy endpoint. The content is intended for technical users, integrators, and fleet managers who need a clear, non sensitive overview of connectivity and protocol considerations.

The CanTrack G500 is a modern GSM/GPRS and GPS device providing real time location, alarms, and remote monitoring features. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol; exact behavior can vary by firmware, hardware revision, and manufacturer implementation, so device behavior can differ between units or firmware versions.

## Protocol Overview

At a general level, the tracker protocol is the set of rules the G500 uses to report location, status, and alarm events to a remote server. For integration with Plaspy the protocol enables the device to identify itself, deliver periodic and event driven data, and support remote monitoring functions that the platform can surface to users.

- Enables periodic location updates and event notifications such as movement or alarms.
- Carries identification and status fields so Plaspy can associate messages with the correct device.
- Translates device sensor and alarm events into a form that Plaspy can store and display.
- Supports the transport layer (TCP or UDP) used to send messages to the Plaspy endpoint.
- Helps determine how frequently the device reports and what conditions trigger transmissions.

## How Plaspy Detects the Protocol

Plaspy is designed to accept messages from many supported trackers and to determine the device protocol automatically when a device reports to the Plaspy endpoint. In most cases a properly configured G500 only needs to be pointed at the Plaspy connection settings and Plaspy will detect its reporting format.

- Plaspy receives incoming connections at its shared server endpoint and matches incoming messages to known device patterns.
- The user typically does not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint.
- Automatic detection reduces setup steps for fleets with mixed device models that report to the same endpoint.
- Detection works for devices reporting their identity and payload in the common, manufacturer defined formats the G500 uses.
- If a device does not report as expected, reviewing device configuration and firmware version is the usual next step.

## Transport and Connection Context

Connection and transport details determine how the G500 reaches Plaspy but do not alter the high level role of the protocol itself. Plaspy exposes a shared endpoint that devices can target; the G500 may be configured to use either UDP or TCP depending on device support and chosen settings.

- Devices may be configured to point to the Plaspy server domain d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The connection port used by Plaspy is 8888 and all devices in Plaspy use the same port.
- The G500 may send data over UDP or TCP on port 8888 depending on its configuration and firmware capabilities.
- Using the domain name d.plaspy.com lets network routing and DNS handle potential IP changes on the Plaspy side.
- Ensure the device APN, server address, transport type, and reporting interval are set according to the manufacturer instructions to reach Plaspy reliably.

## Protocol Compatibility Notes

- Firmware differences can change how or when the G500 sends particular messages; always check the device firmware version when diagnosing behavior.
- Hardware revisions or regional variants of the G500 can have different default settings or supported transports.
- Manufacturer configuration commands and default APN settings may vary between shipments and should be validated before large scale deployment.
- Transport choice (UDP versus TCP) can affect delivery semantics and visibility in network environments.
- Pointing the device to the Plaspy endpoint and correct port is necessary but not always sufficient; confirm device identity fields are present and match expected values.
- When in doubt, validate compatibility against the latest manufacturer documentation and changelogs.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable setup, efficient troubleshooting, and predictable long term operation when using the CanTrack G500 with Plaspy. A clear view of how messages are exchanged reduces time spent diagnosing reporting gaps and improves confidence in fleet monitoring.

- Faster troubleshooting when devices do not appear in Plaspy or report unexpectedly.
- Better configuration choices for reporting intervals, alarms, and transport type.
- Improved planning for firmware updates and device rollouts across a mixed fleet.
- More accurate interpretation of device state and alarms within the Plaspy platform.
- Helps administrators decide when to consult manufacturer resources for device specific behavior.

## Why Use Plaspy with This Protocol

Using the CanTrack G500 with Plaspy provides a practical path to real time visibility, alarms, and operational monitoring for vehicles, assets, and other tracked targets. Plaspy’s automatic protocol detection and shared connection endpoint simplify integration for fleets that use a mix of devices and models.

If you want to learn more about how Plaspy works with GPS trackers and fleet devices, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, please verify information with the manufacturer at https://www.cantrackgps.com/.
