---
slug: /xirgo/xt_4700/protocol
id: xt_4700-protocol
sidebar_label: Protocol
title: Xirgo - XT-4700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Xirgo XT 4700 and how the tracker communicates with Plaspy for fleet and asset tracking
keywords:
  - Xirgo XT-4700 protocol
  - Xirgo XT-4700 GPS protocol
  - XT-4700 Plaspy compatibility
  - Xirgo tracker protocol
  - XT-4700 tracking protocol
  - Xirgo GPS tracker communication
  - XT-4700 fleet tracking
  - Plaspy compatible trackers
  - GPS tracker protocol integration
  - remote asset tracking XT-4700
---

# Xirgo - XT-4700 Protocol

This page provides a public protocol context for using the Xirgo XT-4700 with Plaspy. It explains in general terms how the XT-4700 communicates location, status, and health information to a backend service without exposing sensitive implementation details. The XT-4700 is a rugged, self contained cellular modem with an integrated high precision GPS engine and power management features that make it suitable for long term remote asset monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is reporting to the Plaspy endpoint. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, but exact message behavior and available fields can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The communication protocol for a tracker like the XT-4700 defines how the device identifies itself, reports position and status, and receives optional remote commands or acknowledgements. For Plaspy this means the protocol must deliver usable location, time, and device status data to the Plaspy endpoint so the platform can process and present asset information reliably.

- Enables device identification and session reporting so Plaspy can associate messages with the correct asset
- Carries GPS location, timestamp, and basic health or battery indicators needed for monitoring
- Transmits periodic or event driven reports according to device power management and configuration
- Supports transport over common IP protocols so the tracker can reach Plaspy at the shared endpoint
- Allows optional sensor and status fields such as accelerometer or motion detector events to augment location data

## How Plaspy Detects the Protocol

Plaspy receives reporting data at a common endpoint and port and automatically determines the incoming tracker protocol when messages arrive. In most cases a properly configured XT-4700 that points at the Plaspy address will be recognized without manual protocol selection inside the Plaspy platform.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting
- The Plaspy listening port is 8888 and all devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- Users typically do not need to choose a protocol inside Plaspy if the device is configured to report to the Plaspy address
- Proper device reporting settings and current firmware increase the chance of automatic detection and immediate compatibility

## Transport and Connection Context

Connection context describes how the XT-4700 reaches Plaspy rather than the internal layout of protocol messages. The XT-4700 family supports standard IP transports and can be configured to use the transport that best matches deployment needs. Devices should be pointed at the Plaspy endpoint and transport settings selected according to device capability and network conditions.

- Devices may point to d.plaspy.com or 54.85.159.138 as the destination for reporting
- The device may be configured using UDP or TCP on port 8888 depending on device support and preferences
- All devices in Plaspy use the same port which simplifies server configuration and onboarding
- Transport choice can affect delivery behavior for small networks or high latency links
- Ensure cellular APN and outbound connectivity allow the chosen transport and destination

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change the exact set of fields, reporting intervals, and optional features available from the XT-4700
- Manufacturer configuration settings may require specific server or heartbeat options to enable full reporting to a third party platform
- Optional sensors such as accelerometer or motion detector may produce event driven messages that differ from periodic location reports
- Transport selection between UDP and TCP can be set on the device and may affect reliability and acknowledgement behavior
- Confirm device configuration is pointed to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility
- Always validate behavior after firmware updates or hardware changes to ensure continued compatibility

## Why Protocol Understanding Matters

A clear, pragmatic understanding of the XT-4700 communication protocol helps ensure successful setup, reliable reporting, and efficient troubleshooting when integrating devices with Plaspy. Knowing the role of transport, server settings, and firmware differences shortens deployment time and reduces surprises in the field.

- Helps validate that the device is successfully reporting to the Plaspy endpoint
- Enables faster troubleshooting when a device does not appear in Plaspy
- Informs choices about transport, reporting frequency, and power management trade offs
- Helps determine whether optional sensors are correctly configured and reporting useful events
- Supports planning for firmware updates and long term device maintenance

## Why Use Plaspy with This Protocol

Using the Xirgo XT-4700 with Plaspy provides a practical solution for organizations that need reliable visibility of remote high value assets such as containers, trailers, and vehicles. The XT-4700’s rugged design, integrated GPS, and power efficient reporting make it well suited to deployments where long battery life and environmental durability are required, while Plaspy provides a consolidated backend that accepts device reports and presents actionable location and status data.

To learn more about Plaspy and how it handles device connectivity and fleet management, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol details and firmware notes on the manufacturer site https://xirgo.com/.
