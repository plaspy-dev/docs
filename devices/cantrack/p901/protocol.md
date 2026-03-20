---
slug: /cantrack/p901/protocol
id: p901-protocol
sidebar_label: Protocol
title: CanTrack - P901 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack P901 integration with Plaspy and connection guidance
keywords:
  - CanTrack P901 protocol
  - CanTrack P901 GPS protocol
  - P901 communication protocol
  - P901 tracking protocol
  - CanTrack protocol Plaspy
  - Plaspy device compatibility P901
  - P901 LTE GPS tracker protocol
  - ID card GPS tracker protocol
  - P901 SOS PTT protocol
  - CanTrack P901 integration
---

# CanTrack - P901 Protocol

This page describes the public protocol context for using the CanTrack P901 with Plaspy. It focuses on how the device reports location, events, and telemetry to the Plaspy cloud and what aspects of the tracker communication are relevant to successful integration. The P901 is an ultra-thin ID card style tracker that provides GNSS positioning (GPS and Beidou), LBS fallback, SOS alarms, and on-device voice features that pair with Plaspy for real-time situational awareness.

Plaspy uses shared connection settings for supported trackers and automatically detects the tracker protocol once the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page aims to explain public, non-sensitive protocol context without exposing device internals. For device specific commands or binary formats consult the official CanTrack documentation.

## Protocol Overview

The P901 communicates with backend platforms like Plaspy using its device reporting protocol to send location, status, and alert information. The protocol's public role is to allow the device to identify itself, transmit usable telemetry, and indicate event states so Plaspy can present location and alerts in real time.

- Transmits GNSS coordinates and LBS fallback so Plaspy can place devices on maps and record tracks.
- Sends event notifications such as SOS, low battery, and status changes to trigger alerts and workflows in Plaspy.
- Provides telemetry fields used for device health, battery level, and connectivity state that Plaspy surfaces to operators.
- Allows remote configuration triggers and FOTA initiation managed via Plaspy or SMS workflows coordinated with the manufacturer.
- Supports on-device voice and PTT features whose location and event context are reported to Plaspy for correlation with communications.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a single shared endpoint and port and applies automatic protocol detection for supported trackers. When a P901 or other compatible tracker is configured to report to Plaspy, the platform identifies the device protocol and routes the data to the correct processing pipeline without requiring manual protocol selection by the user.

- Plaspy’s public server domain is d.plaspy.com which devices can use as the reporting host.
- The Plaspy server IP address is 54.85.159.138 for direct IP configuration where DNS is not used.
- Plaspy listens on port 8888 for device traffic and uses this port for all supported devices.
- Plaspy automatically detects the tracker protocol so manual selection inside the platform is usually not required if the device reports correctly.
- Devices configured to send position and event updates to the Plaspy endpoint will be processed and shown in the platform once network connectivity and configuration are correct.

## Transport and Connection Context

The P901 can report to cloud platforms over cellular data and supports standard transport options commonly used by fleet devices. In Plaspy deployments the connection context is simplified by using the shared Plaspy endpoint and the same port across devices, which helps centralize configuration and reduces per-device setup complexity.

- Devices may be configured to use UDP or TCP transport to Plaspy depending on device support and chosen configuration.
- The common Plaspy endpoint d.plaspy.com can be used by devices for DNS based reporting.
- For deployments that require direct addressing, the Plaspy server IP 54.85.159.138 is available as an alternative host target.
- All devices in Plaspy use the same port, port 8888, simplifying provisioning and firewall rules.
- Choose UDP when lower overhead and simple datagram reporting is preferred, or TCP when a connected transport is required by the device or network.

## Protocol Compatibility Notes

- Firmware versions can change message content and available fields; always verify the P901 firmware revision when evaluating compatibility.
- Hardware revisions or regional SKU differences may affect available GNSS bands, voice capability, or transport support.
- Manufacturer-side configuration options such as SMS command sets or APN requirements can affect whether the device successfully reports to Plaspy.
- Transport selection (UDP vs TCP) should match the device configuration; mismatched transport prevents data delivery to Plaspy.
- On-device features like VoLTE and group PTT are managed locally on the unit; Plaspy consumes positional and event context rather than handling voice streams.
- Validate integration steps against official CanTrack documentation and release notes to confirm protocol behavior for your specific P901 batch.

## Why Protocol Understanding Matters

Understanding the P901 communication protocol and connection context helps ensure reliable reporting, accurate alerting, and smoother troubleshooting during deployment and ongoing operations with Plaspy. Clear knowledge of how the device speaks to the cloud reduces onboarding time and helps teams respond to connectivity or data quality issues faster.

- Ensures device configuration points at the correct Plaspy host and port so data is received consistently.
- Helps diagnose transport issues by confirming UDP or TCP is in use and that port 8888 is reachable.
- Guides firmware update and feature planning by clarifying which fields and events the device will send to Plaspy.
- Improves alert tuning and workflow mapping by identifying how SOS and other events are represented in incoming data.
- Aids battery and reporting interval optimization by understanding how telemetry frequency affects connectivity and power use.

## Why Use Plaspy with This Protocol

Using Plaspy with the CanTrack P901 gives organizations a compact device capable of GNSS plus LBS reporting, SOS alerts, and on-device voice features while leveraging Plaspy’s real-time mapping, history, and alerting capabilities. The combination is useful for security teams, event staff, lone-worker protection, and other scenarios where wearable form factor and immediate situational awareness matter.

To get started, configure your P901 to report to the Plaspy endpoint d.plaspy.com or to 54.85.159.138 and ensure the device uses port 8888 with the transport mode the unit supports. Plaspy will automatically detect the tracker protocol and process incoming location and event data so you can monitor assets without selecting a protocol manually inside the platform.

Learn more about Plaspy and how it works with trackers like the P901 at https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration commands verify current information on the manufacturer site https://www.cantrackgps.com/.
