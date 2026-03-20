---
slug: /tk_star/tk109/protocol
id: tk109-protocol
sidebar_label: Protocol
title: TK-Star - TK109 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TK-Star TK109 explaining Plaspy compatibility connection settings and integration notes for reliable GPS tracking
keywords:
  - TK-Star TK109 protocol
  - TK109 GPS protocol
  - TK109 Plaspy compatibility
  - TK109 communication protocol
  - TK109 tracking protocol
  - TK109 tracker integration
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - asset tracking TK109
  - personal safety tracker TK109
---

# TK-Star - TK109 Protocol

This page describes the public protocol context for integrating the TK-Star TK109 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, the connection settings used by the platform, and the practical considerations that matter when you point a TK109 to Plaspy for live tracking, alerts, and history storage.

Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol when data arrives. Exact protocol behavior on a TK109 can vary by firmware version, hardware revision, and manufacturer implementation, so this document stays at a public overview level and encourages validation against manufacturer documentation where needed.

## Protocol Overview

The TK109 reporting protocol defines how the device identifies itself, sends position and event data, and reports alarms and status updates to a remote server. When used with Plaspy, the protocol enables the tracker to deliver GPS and supplemental location sources, SOS and vibration alarms, and routine heartbeat or telemetry messages so the platform can present live and historical information.

- Carries location fixes and multi mode positioning data for display in Plaspy
- Transmits event alerts such as SOS, vibration, geo fence and movement notifications
- Provides basic device identification and status information for integration and mapping
- Enables periodic reporting for tracking history and server side storage
- Works over standard cellular data channels so Plaspy can ingest messages in real time

## How Plaspy Detects the Protocol

Plaspy receives incoming device messages at a single shared endpoint and port and determines the applicable tracker protocol automatically. In most deployments the TK109 does not require manual protocol selection inside Plaspy as long as the device is configured to report to the Plaspy endpoint and the device messages include the identifiers the platform uses to match a device.

- Plaspy listens on a common ingestion endpoint and port for all supported devices
- The user typically points a tracker to the Plaspy address and does not select a protocol manually
- Plaspy matches incoming messages to device registrations and protocol handlers automatically
- Automatic detection simplifies adding mixed fleets of devices without per device port changes
- If a device is not reporting as expected, verifying device configuration and firmware is the usual first step

## Transport and Connection Context

Connection context covers how the TK109 sends its reporting packets to Plaspy rather than the internal packet format. The TK109 can be configured to use either UDP or TCP transport depending on device support and chosen settings. Plaspy accepts both transport types on the same port so the device can use the transport that best suits its configuration and network conditions.

- Devices may be configured to report to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138
- The Plaspy ingestion port is 8888 and all devices use the same port on the platform
- The tracker may use UDP or TCP on port 8888 depending on device firmware and configuration
- Using the domain name or the IP is supported so installers can select the best option for their network
- Verify the device APN, GPRS settings and chosen transport type when commissioning a tracker

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior or available fields the tracker sends
- Hardware revisions or regional variants of the TK109 may differ in supported transports or sensors
- Manufacturer configuration commands or default APN settings can affect the device ability to reach Plaspy
- Selecting UDP versus TCP may change delivery characteristics but Plaspy accepts both on port 8888
- Always confirm the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 for Plaspy ingestion
- Validate compatibility against the official TK-Star documentation for the specific firmware and model batch

## Why Protocol Understanding Matters

Knowing how the TK109 communicates helps with successful setup, reliable reporting, and efficient troubleshooting when using Plaspy. A clear view of transport choices, expected event types, and how the device identifies itself reduces integration time and helps ensure that alerts and history arrive as expected.

- Helps confirm device configuration is sending data to d.plaspy.com or 54.85.159.138 on port 8888
- Guides selection of UDP or TCP based on network behavior and device support
- Makes it easier to interpret device behavior during commissioning or when troubleshooting intermittent reports
- Supports planning for firmware updates or replacements when behavior changes across device batches
- Reduces time to resolution by focusing checks on APN settings transport type and firmware version
- Improves confidence that SOS and alarm events will reach Plaspy and trigger notifications

## Why Use Plaspy with This Protocol

Using the TK109 with Plaspy provides centralized visibility for organizations and individuals who need reliable location updates, event alerts, and historical route review. The TK109 hardware features such as multi mode positioning, SOS and vibration alarms, and compact IP65 design pair with Plaspy to deliver practical tracking for personal safety, asset protection, and light equipment monitoring.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the latest device specific protocol details firmware notes and manufacturer guidance check the official TK Star site at https://www.tk-star.com/ as implementations and firmware behavior may change over time and should be verified with the manufacturer.
