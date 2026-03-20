---
slug: /pointer/cello_track_3y/protocol
id: cello_track_3y-protocol
sidebar_label: Protocol
title: Pointer - Cello Track 3Y Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Pointer Cello Track 3Y compatibility with Plaspy and connection overview
keywords:
  - Pointer Cello Track 3Y protocol
  - Pointer Cello Track protocol
  - CelloTrack 3Y GPS protocol
  - Cello Track 3Y communication
  - Pointer tracker Plaspy compatibility
  - asset tracking protocol
  - GPS tracker protocol
  - fleet tracking compatibility
  - Plaspy device protocol
  - CelloTrack family tracking
---

# Pointer - Cello Track 3Y Protocol

This page covers the public protocol context for using the Pointer Cello Track 3Y family of devices with Plaspy. It focuses on the communication role the tracker plays when reporting position and status to the Plaspy platform while avoiding firmware level or manufacturer private implementation details. The CelloTrack 3Y family includes long life battery models, weatherproof IP67 enclosures, and variants for power reporting and compact asset tracking, all of which affect typical deployment patterns and reporting expectations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is configured to report to the Plaspy endpoint. Devices in the field can differ by firmware version, hardware revision, or manufacturer configuration, so exact message timing and feature availability can vary between units and over time. For connection, Plaspy accepts device reports at the public endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888 and supports device reporting over either UDP or TCP on that same port.

## Protocol Overview

The tracker communication protocol defines how the Cello Track 3Y family sends identification, location, and status information to a remote server and how that data becomes usable inside Plaspy. This public overview describes the role of the protocol without reproducing vendor proprietary formats.

- Enables periodic and event driven reporting of location and device status to Plaspy.
- Provides device identity and basic telemetry so Plaspy can associate incoming messages with the correct asset.
- Supports variants in reporting behavior driven by firmware, such as different reporting intervals or power management modes.
- Allows the device to operate over standard IP transport toward the shared Plaspy endpoint d.plaspy.com or the IP address 54.85.159.138.
- Serves as the interface that lets Plaspy convert raw device reports into map positions, activity logs, and alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections at a unified endpoint and port and performs automatic detection to identify the reporting tracker type. This means most users do not need to select a protocol manually inside Plaspy when the device is correctly pointed to the Plaspy endpoint and using the supported transport.

- Plaspy listens for device reports on port 8888 and uses that same port for all supported devices.
- Devices can be configured to report to d.plaspy.com or to 54.85.159.138; either destination routes to the Plaspy ingestion service.
- Plaspy automatically detects the tracker protocol after the first valid report is received, simplifying device onboarding.
- When a device is properly configured to use UDP or TCP toward port 8888, manual protocol selection in the platform is typically not required.
- If a device does not appear, checking endpoint, transport selection, and device configuration with the manufacturer is recommended.

## Transport and Connection Context

Connection context covers how a Cello Track 3Y device reaches Plaspy rather than the internal structure of messages. The device may use either UDP or TCP transport depending on its configuration and firmware capabilities.

- Devices may be configured to send reports over UDP or TCP on port 8888.
- Configure the device to point to d.plaspy.com or to the direct server IP 54.85.159.138 if required by the device configuration utility.
- All devices supported by Plaspy use the same port number for reporting, which simplifies fleet configuration.
- Network level considerations such as firewall rules and NAT behavior can affect UDP versus TCP delivery and should be validated in the network plan.
- Choosing UDP or TCP can be governed by device settings, power profiles, and the need for message reliability on a per deployment basis.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available fields, or supported transports; verify firmware level when troubleshooting compatibility.
- Hardware variants across the CelloTrack 3Y family may include different sensors or power reporting capabilities that affect which data fields are present.
- Manufacturer side configuration options can alter how the device identifies itself or what server address it accepts, so confirm device settings before onboarding.
- UDP may be preferable for lower power operation on some battery powered models while TCP can offer more reliable delivery in other use cases.
- Validate compatibility against the latest Pointer documentation for a specific model and firmware to ensure expected behavior.
- If a device fails to appear in Plaspy, check server address, transport, firmware version, and any carrier or network constraints.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a reliable deployment and makes setup and troubleshooting more efficient. Knowledge of how devices communicate with Plaspy reduces onboarding time and helps maintain long term operational visibility.

- Speeds up device onboarding by ensuring devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport.
- Helps isolate issues between network, device configuration, and platform ingestion when reports are missing or incomplete.
- Guides configuration choices for battery powered devices where reporting frequency and transport affect battery life.
- Improves planning for scale and network design by clarifying whether devices will use UDP or TCP for bulk deployments.
- Supports effective coordination with Pointer support for firmware specific behaviors or device feature questions.

## Why Use Plaspy with This Protocol

Using the Pointer Cello Track 3Y family with Plaspy provides a practical way to convert device reports into actionable tracking data for asset management, fleet oversight, and operational monitoring. The CelloTrack family offers long life battery models, rugged IP67 enclosures, and form factor choices that suit a range of deployments from fixed assets to compact items, and Plaspy focuses on reliably ingesting those reports and presenting them in a unified platform.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time; verify the latest device specific protocol and configuration guidance with the manufacturer at http://www.pointer.com.
