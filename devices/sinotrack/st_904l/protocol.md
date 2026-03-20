---
slug: /sinotrack/st_904l/protocol
id: st_904l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-904L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the SinoTrack ST-904L with Plaspy for live tracking and alerts
keywords:
  - SinoTrack ST-904L protocol
  - SinoTrack ST-904L GPS protocol
  - ST-904L Plaspy compatibility
  - SinoTrack protocol Plaspy
  - ST-904L communication protocol
  - SinoTrack tracking protocol
  - GPS tracker protocol ST-904L
  - ST-904L GPRS SMS configuration
  - SinoTrack real time tracking
  - Plaspy device integration
---

# SinoTrack - ST-904L Protocol

This page summarizes the public protocol context for integrating the SinoTrack ST-904L GPS tracker with the Plaspy platform. It describes how the device can report position and events to Plaspy using standard reporting channels such as GPRS and SMS and explains the role of the tracker communication protocol in delivering usable telemetry to Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is received. Exact message behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on interoperable, non sensitive details and practical setup guidance rather than internal packet formats.

## Protocol Overview

The ST-904L communicates location, alarm, and status data to online platforms via GPRS and SMS reporting. Its protocol role is to reliably identify the device, send periodic or event driven telemetry, and deliver alarm and voice/SMS control events so a server like Plaspy can present location history and real time alerts.

- Enables periodic and event driven GPS position reports for live mapping and breadcrumbs.
- Delivers alarm events such as SOS, geofence, and overspeed so Plaspy can trigger notifications.
- Allows remote configuration via SMS including server IP and APN so the device can be pointed to third party servers.
- Transports two way voice and SMS control signals where supported for direct contact and remote queries.
- Provides IMEI and registration related identifiers that platforms use for device association and management.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a single shared endpoint and automatically recognizes the device reporting format so users normally do not need to select a protocol manually. When an ST-904L is configured to send data to Plaspy, the platform uses that incoming data to associate the device and process telemetry without extra protocol selection steps from the user.

- Plaspy accepts device reports on the common Plaspy endpoint and detects the tracker protocol automatically.
- Users typically point the ST-904L to Plaspy with SMS configuration and do not need to pick a parser inside Plaspy when reporting is correct.
- Plaspy centralizes parsing and mapping for supported devices so device messages are converted into location, status, and alarm events.
- Automatic detection reduces setup steps for most deployments while keeping the device registration and IMEI mapping process straightforward.

## Transport and Connection Context

The ST-904L supports standard cellular reporting methods and can be configured to send its data over either UDP or TCP depending on the firmware and configuration. For Plaspy integration, devices should be configured to report to the Plaspy server address and port used by all supported devices.

- Devices may be configured to use UDP or TCP transport on port 8888.
- The Plaspy server domain for incoming tracker data is d.plaspy.com.
- Plaspy also accepts connections to the server IP address 54.85.159.138 if an IP is required instead of a hostname.
- All devices in Plaspy use the same port which simplifies SMS based server and APN configuration.
- Use SMS GPRS configuration commands on the ST-904L to set the Plaspy endpoint and APN for cellular data reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported transport modes, or the set of events reported; verify firmware specifics before large rollouts.
- Hardware variants or regional SKUs sometimes alter supported bands or feature sets and can affect connectivity or available reporting methods.
- Some features such as two way voice or extended telemetry may require specific firmware or operator support; validate these when planning deployments.
- Choosing UDP versus TCP can affect delivery behavior in mobile networks; confirm the device and network combination that works best for your use case.
- Use the ST-904L SMS configuration options to point devices to Plaspy but confirm the exact SMS commands with official device documentation.
- Always validate IMEI registration and local regulatory requirements before placing devices into production.

## Why Protocol Understanding Matters

Knowing how the ST-904L communicates helps ensure reliable setup, effective troubleshooting, and predictable long term operation when paired with Plaspy. Understanding protocol behavior reduces ambiguity during commissioning and makes it easier to resolve connectivity and reporting issues.

- Confirms correct server and APN targeting so data reaches Plaspy without intermediate errors.
- Helps interpret device telemetry cadence versus platform expectations for historical playback and alerts.
- Guides troubleshooting steps when position updates, alarms, or two way voice do not appear in Plaspy.
- Informs decisions about transport selection UDP or TCP and any network level configuration required.
- Assists in planning battery and power mode behavior to meet desired reporting frequency and runtime.

## Why Use Plaspy with This Protocol

Using the ST-904L with Plaspy provides a practical way to collect real time location and alarm events from a compact tracker that supports GPRS and SMS configuration. Plaspy’s automatic protocol detection and centralized endpoint simplify bringing devices online, enabling location history, geofence alerts, overspeed notifications, and consolidated device management across a fleet or personal devices.

To learn more about Plaspy and how it can receive and manage ST-904L device data visit https://www.plaspy.com. For the most current device specific protocol commands, firmware behavior, and manufacturer guidance verify details on the official SinoTrack site https://www.sinotrackgps.com/ as implementations and firmware can change over time.
