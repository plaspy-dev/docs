---
slug: /cantrack/g05n/protocol
id: g05n-protocol
sidebar_label: Protocol
title: CanTrack - G05N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the CanTrack G05N with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - CanTrack G05N protocol
  - CanTrack G05N GPS protocol
  - CanTrack G05N protocol Plaspy
  - G05N communication protocol
  - G05N tracking protocol
  - CanTrack GPS protocol
  - Plaspy device compatibility
  - vehicle tracker protocol
  - fleet tracker G05N
  - G05N telemetry protocol
---

# CanTrack - G05N Protocol

This page describes the public protocol context for using the CanTrack G05N vehicle tracker with the Plaspy platform. It summarizes how the device reports position, alerts, and telemetry to Plaspy and explains the connection settings and behavior relevant to successful integration without exposing private implementation details.

The G05N is a hard wired vehicle tracker that reports via GSM GPRS (TCP/IP) and can fall back to SMS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior for reporting intervals, telemetry fields, and alarm formats can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides high level protocol context to help with setup and troubleshooting.

## Protocol Overview

At a high level the G05N reporting protocol defines how the device conveys GNSS coordinates, event flags, and vehicle telemetry to a remote server so that Plaspy can ingest and display those updates. The protocol's role is to ensure the tracker identifies itself, delivers useful location and status data, and supplies alarms and buffered points after connectivity restoration.

- Transmits position and telemetry to a remote endpoint so Plaspy can map and process device data.
- Conveys event types such as ignition state, overspeed, geo fence triggers, SOS, vibration and power cut alerts.
- Supports buffered storage of GPS points while offline and automatic upload when a data connection is restored.
- Uses GPRS TCP/IP as the primary online transport with SMS as a fallback reporting path for critical alerts or configuration.
- Provides remote control capability cues for functions like immobilizer commands that can be invoked from the platform or by SMS.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device connections on a shared server endpoint and automatically determine the tracker protocol when a device reports. For G05N devices that are properly configured to report to the Plaspy server, manual protocol selection inside Plaspy is typically not required.

- Plaspy receives device reports at the common Plaspy endpoint d.plaspy.com and at server address 54.85.159.138.
- All Plaspy devices use the same port so device configuration can point to the standard Plaspy port for reporting.
- Plaspy automatically detects the tracker protocol when the device sends its first reports to the shared endpoint.
- Users usually only need to set the device APN and the server address on the tracker to begin reporting to Plaspy.
- If a device does not appear online, verify device reporting settings, network registration, and that the device is pointed to the Plaspy endpoint.

## Transport and Connection Context

The G05N can communicate over GPRS using TCP for online reporting and may also use SMS for fallbacks or specific remote commands. Plaspy supports both UDP and TCP transport on its standard port, and the G05N can be configured to match available network and manufacturer options.

- Devices may be configured to send data over either UDP or TCP on port 8888 depending on device settings and network conditions.
- The tracker can be pointed to the Plaspy domain d.plaspy.com or to the Plaspy server at 54.85.159.138 as an alternate target.
- Plaspy uses port 8888 for all connected devices so the same port applies across different tracker models.
- When using GPRS TCP/IP, ensure the tracker APN is configured correctly so the device can open a connection to the Plaspy endpoint.
- SMS remains a useful fallback for initial provisioning, remote commands, or alerts when GPRS is unavailable.

## Protocol Compatibility Notes

- Firmware versions can change message fields, reporting behavior, or optional telemetry; always verify firmware notes for the specific G05N unit.
- Hardware revisions and regional variants may alter supported transports or default reporting parameters.
- Some advanced features such as immobilizer commands or extended sensor telemetry can require specific firmware or configuration flags.
- Transport choice (UDP vs TCP) can affect delivery characteristics; configure the device to match the chosen network behavior.
- Manufacturer server command formats or SMS command sets may differ between firmware releases.
- Validate compatibility and default settings by consulting official CanTrack documentation for the exact G05N unit you have.

## Why Protocol Understanding Matters

Understanding the G05N communication protocol helps ensure reliable setup, effective troubleshooting, and predictable long term behavior in Plaspy. Knowing how the device reports and which transports it supports reduces guesswork when a device is offline or not appearing correctly in the platform.

- Helps confirm correct APN and server address configuration so the tracker can reach the Plaspy endpoint.
- Clarifies expected event types and telemetry fields so alerts and rules on Plaspy are configured correctly.
- Aids in diagnosing connectivity issues by checking transport selection and server targets.
- Guides decisions about whether SMS fallbacks are needed for a deployment with intermittent data coverage.
- Supports maintenance planning by indicating when firmware updates or hardware revisions might change behavior.

## Why Use Plaspy with This Protocol

Using Plaspy with the CanTrack G05N provides centralized visibility of vehicle location, alarms, and telemetry so fleet managers and service providers can monitor assets, respond to incidents, and analyze historical routes. The combination of GPRS reporting, SMS fallback, and local buffering makes the G05N a practical choice for continuous tracking in many vehicle deployments.

If you want to learn more about Plaspy and how it handles device connectivity and fleet workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information with the manufacturer at https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
