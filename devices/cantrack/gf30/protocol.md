---
slug: /cantrack/gf30/protocol
id: gf30-protocol
sidebar_label: Protocol
title: CanTrack - GF30 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the CanTrack GF30 and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - CanTrack GF30 protocol
  - CanTrack GF30 GPS protocol
  - CanTrack GF30 protocol for Plaspy
  - CanTrack GF30 communication protocol
  - GF30 tracking protocol
  - Plaspy device protocol
  - GF30 asset tracker compatibility
  - GF30 fleet tracking
  - magnet GPS tracker protocol
  - GF series tracker protocol
---

# CanTrack - GF30 Protocol

This page provides public protocol context for using the CanTrack GF30 Magnet GPS Tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what connection settings Plaspy expects, and practical compatibility considerations for integration and troubleshooting. This is intended as non confidential, implementation level guidance rather than a firmware reference.

Plaspy uses a shared connection endpoint and consistent settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so readers should treat this page as integration context rather than a device manual.

## Protocol Overview

The GF30 reports position, alarms, and status to a remote server using the device communication protocol implemented by CanTrack. That protocol defines how the tracker identifies itself, how telemetry and events are encoded for transport, and how the device indicates state changes such as low battery or motion events. With Plaspy, that information is used to create live map positions, alerts, and historical tracks.

- Allows the GF30 to send periodic and event driven telemetry for map updates and alerting.
- Carries device identity and status so Plaspy can associate reports with the correct asset record.
- Transmits alarm events such as geofence, vibration, or low battery to trigger notifications and workflows.
- Enables store and forward behavior so positions collected while offline are uploaded when connectivity resumes.
- Provides the necessary fields for Plaspy to display location, time, and basic device state without exposing firmware internals.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and automatically determines which supported tracker protocol a device is using when it reports to the platform. In most cases a properly configured GF30 will start sending usable telemetry to Plaspy without requiring a manual protocol selection inside the platform.

- Plaspy listens on a single port for all device connections and uses that endpoint to receive reports.
- When a GF30 is pointed at the Plaspy endpoint and begins reporting, Plaspy auto detects the tracker protocol and associates incoming data with the correct device.
- Users typically do not need to pick a protocol manually if the tracker is configured to report to the Plaspy endpoint.
- Proper device identity settings on the tracker ensure that Plaspy can match messages to the right asset record.
- If telemetry does not appear, common checks include verifying APN and reporting server settings on the device and confirming network connectivity.

## Transport and Connection Context

The GF30 can be configured to report to a network endpoint using standard transport methods supported by the device. For Plaspy integration the relevant connection information is consistent across supported devices and should be applied to the tracker according to the manufacturer instructions.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and Plaspy accepts incoming device connections on port 8888.
- The GF30 may be configured to use UDP or TCP to send reports to Plaspy on port 8888 depending on device support and configuration choices.
- All devices in Plaspy use the same port, which simplifies configuration when deploying multiple tracker models.
- Ensure the device APN and outbound network are configured so the tracker can resolve d.plaspy.com or reach the numeric server address.

## Protocol Compatibility Notes

- Firmware versions can change message timing, feature availability, or optional fields; verify device firmware release notes for protocol changes.
- Hardware revisions in the GF series may add or remove sensors or interfaces that affect what telemetry is available to Plaspy.
- Manufacturer configuration commands and default reporting intervals may differ by regional firmware builds or reseller modifications.
- Transport selection between UDP and TCP can affect delivery behavior; choose the transport that matches device capabilities and network reliability needs.
- Always validate compatibility by confirming the device can reach d.plaspy.com or 54.85.159.138 on port 8888 and that Plaspy receives expected reports.
- Consult official manufacturer documentation for any device specific commands, default ports, or configuration examples.

## Why Protocol Understanding Matters

Understanding how the GF30 communicates with Plaspy helps ensure reliable tracking, faster troubleshooting, and predictable alerting behavior. Knowledge of the communication context reduces deployment friction and helps operations teams interpret telemetry and event data correctly.

- Facilitates correct APN and server configuration on the tracker so reports reach Plaspy reliably.
- Guides troubleshooting steps when position updates, alarms, or stored reports do not appear on the platform.
- Helps set realistic expectations for update frequency, power consumption, and offline behavior based on device reporting patterns.
- Supports decisions about transport choice and network requirements for deployments in different geographies.
- Assists in planning firmware updates and hardware rollouts while maintaining Plaspy compatibility.

## Why Use Plaspy with This Protocol

The GF30’s compact magnetic housing, long run battery, and event reporting capabilities make it a practical choice for asset tracking scenarios where discreet mounting and extended monitoring matter. When the GF30 is configured to report to Plaspy, its position and alarm data feed into centralized dashboards, alerting rules, and historical tracking features used by fleet and asset managers to improve visibility and response times.

If you want to learn more about Plaspy and how it integrates with devices like the CanTrack GF30, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration instructions consult the manufacturer at https://www.cantrackgps.com/. Protocol support and firmware behavior can change over time so verifying the current documentation with the manufacturer is recommended.
