---
slug: /cantrack/g03/protocol
id: g03-protocol
sidebar_label: Protocol
title: CanTrack - G03 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for the CanTrack G03 showing how the tracker communicates with Plaspy and common connection settings
keywords:
  - CanTrack G03 protocol
  - CanTrack G03 GPS protocol
  - CanTrack G03 Plaspy compatibility
  - CanTrack G03 communication
  - CanTrack G03 tracking protocol
  - Plaspy device integration
  - personal safety tracker protocol
  - portable asset tracker protocol
  - GNSS telemetry integration
  - tracker connection settings
---

# CanTrack - G03 Protocol

This page covers the public protocol context for using the CanTrack G03 tracker with Plaspy. It summarizes how the G03 communicates usable location and event data to the platform, and explains the connection settings and behaviors relevant to integration without exposing manufacturer private details.

The G03 is a compact personal safety and portable asset tracker that ships Plaspy compatible out of the box. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Use this page as protocol context and confirm device specific behavior with official manufacturer documentation when needed.

## Protocol Overview

The protocol in this context refers to the public-facing communication method the G03 uses to report GNSS positions, status updates, and emergency events to a remote server such as Plaspy. It enables the device to identify itself, transmit telemetry and event records, and support the platform features caregivers and operators rely upon.

- Enables transfer of position fixes, battery and status telemetry, and event markers such as SOS and low battery to Plaspy.
- Carries identity and session information that allows Plaspy to associate incoming messages with a specific G03 device.
- Delivers event semantics used by Plaspy to generate notifications, geofence triggers, and history traces without exposing internal packet structures.
- Supports power aware reporting so the device can balance location currency and battery life for long standby operation.
- Provides the essential information Plaspy needs to display real time location, maintain route history, and raise platform alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports from devices at a single shared endpoint and port and automatically determines the tracker protocol used by each device. As long as the G03 is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is usually unnecessary.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and may be used where DNS is not available or preferred.
- The port is 8888 and Plaspy listens on this port for device traffic.
- Plaspy automatically detects the tracker protocol when it receives device reports to the shared endpoint.
- All devices in Plaspy use the same port which simplifies onboarding and reduces configuration variability.
- Typically you only need to point the device to the Plaspy endpoint and confirm transport settings at the device side.

## Transport and Connection Context

Connection context defines the network transport and target used by the G03 to reach Plaspy. The G03 can be configured to use common transport protocols and should be set to report to the Plaspy endpoint and port that Plaspy documents.

- The device may be configured using UDP or TCP on port 8888 depending on device support and carrier behavior.
- Devices may point to d.plaspy.com or directly to 54.85.159.138 when configuring the reporting host.
- Plaspy uses the same port for all supported devices to simplify configuration and inbound routing.
- Choose UDP for low overhead reporting where supported and TCP where a connection oriented transport is required by network or device firmware.
- Ensure mobile operator APN and data connectivity are active so the G03 can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware version differences can change available fields, event naming, and reporting frequency; check the device firmware notes when troubleshooting.
- Hardware revisions or regional radio module variants may affect transport behavior and network band availability.
- The selection between UDP and TCP on port 8888 may be influenced by device firmware, operator networks, or specific deployment needs.
- SOS, low battery, and sleep mode events are standard functional concepts but exact event payloads and thresholds can vary by firmware.
- Plaspy detects protocols automatically, but correct device reporting host and transport settings are required for detection to succeed.
- Validate any configuration steps against the manufacturer documentation to confirm supported features for your firmware build.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable device onboarding, predictable alerting, and efficient troubleshooting when the G03 is used with Plaspy. Awareness of how the device reports and how Plaspy receives data reduces setup time and helps maintain long term operational reliability.

- Simplifies initial setup by confirming the correct reporting host and transport for the device.
- Speeds troubleshooting when telemetry or events do not appear in Plaspy by narrowing checks to network, transport, and firmware layers.
- Helps configure reporting intervals and sleep modes to balance location accuracy with battery life.
- Makes it easier to interpret SOS and low battery events and align platform notifications with caregiver workflows.
- Supports planning for firmware updates and hardware revisions that may change behavior or available telemetry.

## Why Use Plaspy with This Protocol

Using the CanTrack G03 with Plaspy provides a straightforward path to real time visibility and historical review for personal safety and portable asset monitoring. The G03 supplies GNSS positions, SOS events, and battery status that Plaspy turns into maps, alerts, geofence actions, and trace history—features useful to caregivers, facilities managers, and organizations that need compact, low power tracking.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.cantrackgps.com/.
