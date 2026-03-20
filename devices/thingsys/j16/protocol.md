---
slug: /thingsys/j16/protocol
id: j16-protocol
sidebar_label: Protocol
title: ThingSys - J16 Protocol
sidebar_class_name: menu_item_tracker
description: Public overview of the ThingSys J16 tracker protocol and how the device communicates with Plaspy for reliable fleet tracking and telemetry
keywords:
  - ThingSys J16 protocol
  - ThingSys J16 GPS protocol
  - ThingSys J16 protocol for Plaspy
  - ThingSys J16 communication protocol
  - ThingSys J16 tracking protocol
  - GT06 CRX3 J16 compatibility
  - J16 telemetry and reporting
  - Plaspy tracker compatibility
  - vehicle GPS tracker protocol
  - J16 firmware and protocol notes
---

# ThingSys - J16 Protocol

This page documents the public protocol context for using the ThingSys J16 GPS tracker with Plaspy. It explains how the J16 communicates with Plaspy in general terms, what to expect during integration, and how common protocol choices affect reporting and telemetry without exposing device internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is configured to report to Plaspy. Exact protocol behavior for the J16 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical, non-sensitive protocol context and integration considerations.

## Protocol Overview

The J16 uses standard cellular IP communications to report location and telemetry to cloud servers and supports commonly used tracker message profiles. In practice the protocol determines how the device identifies itself, how location and sensor data are framed, and how the server acknowledges or responds to control requests.

- Enables periodic and event driven transmission of GPS coordinates and vehicle telemetry to a remote server for mapping and alerting.
- Provides identification and session information so Plaspy can associate messages with a registered device and a fleet asset.
- Carries telemetry such as ACC state, relay status, sensor inputs, blind area buffers, and optional audio or SOS events where available.
- Supports default GT06 and CRX3 message profiles on many J16 units, with optional JT808, Tianqin, and Tianhe profiles configurable via SMS on specific firmware builds.
- Allows Plaspy to ingest real time updates as well as buffered messages forwarded after blind area or offline periods.
- Facilitates remote commands where the manufacturer and firmware allow server-initiated actions such as relay control or configuration pushes.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models on a single shared endpoint and identify the device protocol automatically. When a J16 is pointed to the Plaspy endpoint and configured to send its tracking messages, the platform will associate incoming messages with the correct device and message profile without requiring manual protocol selection in most cases.

- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 so messages arrive at the Plaspy endpoint.
- Plaspy listens on the common port 8888 for tracker traffic; this same port is used across all supported devices for simplicity.
- Plaspy automatically detects the tracker protocol when the device sends recognizable tracking messages, reducing manual setup steps for administrators.
- If a device is properly configured to use GT06, CRX3, or one of the optional profiles, Plaspy will map incoming data to telemetry, position, and event fields for display and alerts.
- Users generally do not need to select the protocol inside Plaspy manually when the device is configured to report to the Plaspy endpoint and uses a supported profile.

## Transport and Connection Context

The J16 supports IP based reporting and common cellular fallback modes. Connection method and transport selection affect delivery characteristics such as latency, reliability, and message retransmission behavior but do not change the high level mapping of positional and telemetry fields inside Plaspy.

- The device may be configured to use either UDP or TCP for reporting to Plaspy depending on device firmware and configuration choices.
- Plaspy accepts connections on port 8888 and all Plaspy devices use this same port for tracking messages.
- Trackers can be pointed to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138 if DNS configuration is restricted.
- TCP is commonly used where session reliability and server responses are required, while UDP may be chosen for lower overhead reporting where supported.
- GPRS based TCP/IP reporting and SMS polling remain supported options on many J16 firmware variants for environments with mixed cellular coverage.

## Protocol Compatibility Notes

- Firmware variation can change which protocol profiles a J16 supports by default and which optional profiles are available via SMS configuration.
- Hardware revisions and regional firmware builds may enable or restrict features such as JT808, Tianqin, or Tianhe profiles; validate the shipped firmware if these are required.
- Transport choice (TCP versus UDP) is configured on the device and should match the expected behavior for your deployment and Plaspy reception preferences.
- Blind area buffering and store forward behavior is implemented by the device firmware; message capacity and forwarding frequency can differ by firmware build.
- Remote command support such as relay control or microphone activation depends on both J16 variant (A or B) and the device firmware’s accepted command set.
- Always cross check device settings and protocol selection with the manufacturer documentation before placing devices into production.

## Why Protocol Understanding Matters

Understanding how the J16 communicates with Plaspy helps ensure a smooth setup, reliable data flow, and predictable behavior during connectivity gaps or firmware changes. Clear expectations around transport, protocol profile, and device features reduce integration time and simplify troubleshooting.

- Helps ensure the device is configured to point to d.plaspy.com or 54.85.159.138 and use port 8888 so messages reach the Plaspy platform.
- Clarifies whether TCP or UDP should be used for your deployment and the implications for reliability and server responses.
- Aids in diagnosing lost messages, blind area forwarding, and differences between variants such as J16A and J16B.
- Informs decisions on whether optional protocol profiles or SMS based configuration are required for a regional deployment.
- Guides validation steps for remote command capabilities like relay control and SOS handling to align device behavior with operational workflows.

## Why Use Plaspy with This Protocol

Using the J16 with Plaspy gives fleet operators a straightforward path to ingest GPS positions, ignition and relay events, blind-area buffered messages, and optional SOS or audio alerts into a single telematics platform. The J16’s compact hardware, mixed vehicle voltage tolerance, and message buffering make it a practical fit for fleets that require resilient reporting across varying coverage conditions.

Plaspy’s shared endpoint approach and automatic protocol detection simplify deployment: point the J16 to d.plaspy.com or 54.85.159.138 on port 8888, choose TCP or UDP as supported, and Plaspy will process the incoming telemetry for live tracking, alerting, and history. Learn more about Plaspy at https://www.plaspy.com. For the latest device specific protocol behavior and firmware details, confirm information with the manufacturer at https://www.thingsys.com/.
