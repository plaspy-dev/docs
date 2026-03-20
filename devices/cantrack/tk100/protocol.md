---
slug: /cantrack/tk100/protocol
id: tk100-protocol
sidebar_label: Protocol
title: CanTrack - TK100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the CanTrack TK100 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - CanTrack TK100 protocol
  - CanTrack TK100 GPS protocol
  - CanTrack TK100 Plaspy
  - TK100 tracking protocol
  - TK100 communication protocol
  - CanTrack GPS tracker protocol
  - Plaspy compatible trackers
  - vehicle tracking protocol TK100
  - fleet management GPS protocol
  - TK100 GPRS reporting
---

# CanTrack - TK100 Protocol

This page provides a public protocol context for using the CanTrack TK100 tracker with Plaspy. It focuses on how the TK100 communicates in order to deliver position, status, and alarm data to Plaspy without exposing sensitive implementation details. Use this guide to understand connection expectations and the role of the tracker reporting protocol when integrating TK100 devices into a Plaspy deployment.

The TK100 is a hard wired vehicle tracker that uses GSM/GPRS and GPS to report location, speed, ignition state, and alarm events. Plaspy is compatible with the TK100 out of the box. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation — so always consult official CanTrack documentation for device specific details.

## Protocol Overview

At a high level, the TK100 reporting protocol enables the device to identify itself to a remote server, deliver periodic and event-driven telemetry, and surface alarm or tamper conditions for timely response. The protocol is the mechanism by which the tracker converts sensor and GNSS readings into messages that a fleet platform like Plaspy can ingest and present.

- Transports positional coordinates, timestamp, speed and course information for live mapping and historical playback.
- Reports digital inputs and state changes such as ignition (ACC), power cut, SOS, and over speed alarms to support alerts and rules.
- Enables event-driven reporting for geofence entries/exits, power tamper, and SOS button press without requiring constant polling.
- Carries telemetry useful for operational dashboards, for example battery backup status and device health indicators.
- Provides the channel for remote commands where supported by the device, typically via SMS or GPRS management features.
- Allows Plaspy to correlate incoming telemetry with fleet records and alerting workflows for operational use.

## How Plaspy Detects the Protocol

Plaspy accepts reports from many device models at a single shared endpoint and port and performs automatic protocol detection so the user usually does not need to select a protocol manually. If a TK100 is configured to report to Plaspy it will be recognized and ingested as long as the device is pointing at the Plaspy endpoint and using supported transport.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 with port 8888.
- Devices may be configured to use UDP or TCP on port 8888 depending on device capabilities and chosen transport.
- All devices in Plaspy use the same port, which simplifies device configuration across mixed fleets.
- When a TK100 reports to the Plaspy endpoint the platform detects the tracker protocol automatically and associates telemetry with the correct device profile.
- Users typically do not need to manually select a protocol inside Plaspy if the tracker is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888.
- If a device is not appearing in Plaspy, verify device reporting settings and the server endpoint before investigating protocol details.

## Transport and Connection Context

The TK100 can send telemetry over GPRS (TCP/IP) and is also capable of SMS-based messages for alerts or remote control. For IP reporting the device may use either TCP or UDP to communicate with Plaspy, depending on firmware and configuration choices.

- The TK100 may be configured to use UDP or TCP on port 8888 to reach the Plaspy endpoint.
- Point the device to the Plaspy server domain d.plaspy.com or directly to 54.85.159.138 when static addressing is required.
- Plaspy uses port 8888 for all supported trackers, which reduces configuration variance across devices.
- GPRS IP reporting is the primary path for real-time telemetry and historical uploads; SMS remains available for command and backup notification scenarios.
- Network conditions and carrier behavior can affect packet delivery; using the appropriate transport (TCP for reliability, UDP where supported) depends on device firmware capabilities.
- Ensure APN and GPRS settings on the TK100 are correct for the SIM and carrier being used so it can reach d.plaspy.com or 54.85.159.138.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, or optional behaviors; always confirm firmware release notes for the TK100 you have installed.
- Hardware revisions and regional variants sometimes alter supported transports or reporting defaults; verify the device label and documentation.
- The TK100 supports both GPRS and SMS reporting; transport selection affects how quickly messages reach Plaspy and what features are available.
- Remote management features such as immobilizer control are commonly implemented via SMS or authenticated server commands; implementation details vary by firmware.
- Plaspy automatically detects the tracker protocol but reliable detection depends on the device successfully reaching the Plaspy endpoint and using compatible reporting settings.
- Validate APN, SIM activation, and antenna installation during setup to rule out connectivity issues unrelated to protocol parsing.
- For the most current compatibility guidance, consult CanTrack documentation and firmware notes specific to the TK100 model.

## Why Protocol Understanding Matters

Understanding the TK100 communication protocol helps installers, fleet managers, and integrators ensure reliable reporting, troubleshoot connectivity issues, and plan for long term device maintenance. A clear view of how and when the device sends data reduces diagnosis time and improves uptime for operational fleets.

- Helps confirm correct server endpoint and transport configuration so devices reach Plaspy reliably.
- Guides troubleshooting when events or telemetry are missing, by isolating network, transport, or configuration issues.
- Informs decisions about using SMS as a fallback or remote command channel when GPRS is unreliable.
- Supports planning for firmware updates, since protocol-related changes are sometimes tied to new releases.
- Enables predictable integration of alarms and digital inputs into Plaspy alerting and operational workflows.
- Assists in validating that anti-theft features like immobilizer and SOS function as expected in the deployment environment.

## Why Use Plaspy with This Protocol

Pairing the CanTrack TK100 with Plaspy gives organizations a practical path to centralized vehicle visibility, event alerting, and historical analysis. The TK100’s wired design and support for GPRS and SMS reporting make it a versatile choice for fleet, service, and anti-theft use cases, while Plaspy converts incoming telemetry into maps, alerts, and reports for operational decision making.

If you want to learn more about how Plaspy handles tracker integrations and device compatibility, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance for the TK100, verify information on the CanTrack website https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
