---
slug: /trackerking/g509/protocol
id: g509-protocol
sidebar_label: Protocol
title: TrackerKing - G509 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TrackerKing G509 and how the device communicates with Plaspy for tracking and alerts
keywords:
  - TrackerKing G509 protocol
  - TrackerKing G509 GPS protocol
  - TrackerKing G509 Plaspy compatibility
  - G509 communication protocol
  - G509 tracking protocol
  - GPS tracker protocol Plaspy
  - Plaspy device integration
  - vehicle tracking TrackerKing
  - fleet tracking G509
  - relay GPS tracker protocol
---

# TrackerKing - G509 Protocol

This page describes the public protocol context for using the TrackerKing G509 relay GPS tracker with the Plaspy platform. It explains how the device communicates at a high level, what role the protocol plays in reporting position and events, and how Plaspy ingests those reports for live monitoring and historical playback.

The G509 is a compact relay style tracker designed for discreet installation and fleet anti theft workflows. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. This page focuses on non sensitive protocol context relevant to configuration, connectivity, and expected data flows when the G509 is pointed at Plaspy.

## Protocol Overview

The protocol used by the G509 defines how the device identifies itself to a server, transmits GPS positions, and communicates event data such as movement, vibration, geofence events, overspeed, and power notifications. In the context of a tracking platform like Plaspy, the protocol enables telemetry and command exchange without exposing device internals.

- Carries periodic GPS position reports and timestamps so Plaspy can display live location and historical routes.
- Transmits event and alarm signals for movement detection, vibration, geofence breaches, overspeed, and power loss notifications.
- Includes identifiers and status fields that allow Plaspy to associate messages with a specific device and present usable telemetry.
- Supports command or control exchanges to trigger relay actions such as remote engine or oil cutoff when used with authorized platform controls.
- Works over standard network transports so messages can be routed to the Plaspy endpoint for automatic parsing and storage.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic on a shared endpoint and inspects the incoming messages to determine the presenting tracker protocol. Because the platform is designed to recognize many standard tracker message formats, users generally do not need to pick a protocol inside Plaspy if the device is configured correctly to report to the Plaspy endpoint.

- Plaspy accepts device reports at the public endpoint d.plaspy.com and at the server IP 54.85.159.138.
- All devices supported by Plaspy use the same network port, which is 8888.
- Devices can be configured to use either UDP or TCP to report to Plaspy on port 8888, depending on device support and preference.
- When a properly configured device sends data to d.plaspy.com on port 8888, Plaspy automatically detects the tracker protocol and associates incoming data with the correct device record.
- Users typically only need to ensure the G509 is pointed at the Plaspy endpoint and that network routing allows outbound device traffic to reach d.plaspy.com on the standard port.

## Transport and Connection Context

Connection choices such as TCP or UDP, DNS versus direct IP, and network reliability affect how the G509 reports to a tracking server. Plaspy supports common transport options so installers can choose the method best suited to their deployment and the device capabilities.

- The G509 can be configured to report to Plaspy using either UDP or TCP on port 8888.
- Devices may be pointed to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 depending on installer preference and network constraints.
- Using DNS with d.plaspy.com can simplify configuration and allow Plaspy to manage backend routing without changing device settings.
- TCP is typically used where a connection oriented delivery is preferred; UDP is useful where reduced overhead or simpler implementations are desired.
- Verify that vehicle or fleet networks allow outbound traffic to the Plaspy endpoint on port 8888 and that SIM or carrier settings permit the chosen transport.

## Protocol Compatibility Notes

- Firmware versions can change message content, frequency, or optional fields; confirm the firmware revision when validating compatibility.
- Hardware revisions or factory configuration variants may expose different interface options or enable different alarms and relay behaviors.
- Some manufacturers provide multiple firmware branches that alter reporting intervals, event thresholds, or available commands; check device settings before deployment.
- Transport selection (UDP versus TCP) must match the device configuration and the network environment for reliable reporting to Plaspy.
- Relay control and immobilizer actions are subject to platform configuration and authorized workflows on Plaspy and require correct wiring and installer setup.
- Always validate behavior in a controlled test vehicle before large scale rollouts to confirm the expected telemetry and event flow.

## Why Protocol Understanding Matters

Understanding the communication protocol helps installers, fleet managers, and integrators achieve reliable connectivity and correct interpretation of device data in Plaspy. Clear knowledge of what the tracker reports and how it reports enables faster troubleshooting and smoother operations.

- Ensures correct device configuration so position and event messages reach Plaspy consistently.
- Helps diagnose connectivity issues by confirming transport, endpoint, and DNS settings.
- Clarifies which events and alarms the G509 will report to Plaspy and how they appear in platform logs.
- Supports safe deployment of relay immobilizer features by aligning device wiring with platform control expectations.
- Reduces downtime by making firmware or configuration differences easier to identify during troubleshooting.

## Why Use Plaspy with This Protocol

Using the TrackerKing G509 with Plaspy gives fleet operators and vehicle owners a centralized view of location, alarms, and historical journeys, while preserving the compact, discreet installation profile of the device. Plaspy ingests the G509 telemetry into dashboards and alerting workflows so teams can react to security events, monitor driver behavior, and analyze basic mileage and trip data.

To learn more about how Plaspy supports device integration and fleet monitoring, visit https://www.plaspy.com. For the most current device specifics including firmware details, wiring diagrams, and manufacturer configuration notes, please verify information on the TrackerKing website https://trackerking.cn/ as protocol support and firmware behavior can change over time.
