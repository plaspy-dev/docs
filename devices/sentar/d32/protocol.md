---
slug: /sentar/d32/protocol
id: d32-protocol
sidebar_label: Protocol
title: Sentar - D32 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Sentar D32 smartwatch with Plaspy for reliable tracking and alerts
keywords:
  - Sentar D32 protocol
  - D32 GPS smartwatch protocol
  - Sentar D32 Plaspy compatibility
  - Sentar D32 communication protocol
  - Sentar D32 tracking protocol
  - Sentar wearable GPS protocol
  - Plaspy tracker protocol
  - GPS tracker protocol compatibility
  - personal tracking smartwatch protocol
  - real time tracking protocol
---

# Sentar - D32 Protocol

This page describes the public protocol context for using the Sentar D32 smartwatch with Plaspy. It focuses on how the D32, a 4G Android GPS smartwatch, communicates usable location, telemetry, and event data to Plaspy for real time monitoring, SOS alerting, and incident verification. The D32 combines multi mode positioning (GPS, AGPS, LBS, Wi‑Fi), cellular voice and data, an SOS button, and a camera to provide continuous situational awareness when paired with a cloud platform like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports correctly to the platform. Exact protocol behavior and command availability can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides public, non sensitive context about communication and compatibility rather than device internals.

## Protocol Overview

At a high level, the D32 device protocol governs how the watch identifies itself, reports location and status, and communicates event driven alerts to a backend host such as Plaspy. The protocol's role is to ensure Plaspy receives consistent, timely data that maps to a wearable device's GNSS and assisted location sources, power and battery telemetry, SOS events, and media or voice references.

- Enables the D32 to report GNSS and assisted location data for mapping in Plaspy
- Conveys device status and telemetry such as battery, connectivity state, and sensor events
- Transmits event driven alerts including SOS button presses and geofence triggers
- Links media references and call indicators to incident timelines without exposing raw device internals
- Provides a transportable reporting flow so Plaspy can correlate wearable positions with other assets

## How Plaspy Detects the Protocol

Plaspy is designed to accept device reports at a shared endpoint and port and to automatically detect the correct tracker protocol for devices that report to that endpoint. In most cases a properly configured D32 pointing to the Plaspy connection settings will be identified without needing manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138
- The port used by Plaspy is 8888 and all devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol when devices report to the shared endpoint
- Users normally do not need to pick a protocol manually if the device is configured to report to Plaspy
- Detection relies on receiving legitimate device reports rather than publishing device internals

## Transport and Connection Context

The D32 may use either UDP or TCP as its transport depending on device firmware and configuration, and it can be pointed to Plaspy using the domain or the numeric server address. This section covers the connection context rather than protocol internals so integrators understand how to point devices at Plaspy for reporting.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices can be set to report to d.plaspy.com or directly to 54.85.159.138
- All Plaspy supported devices use the same port 8888 to simplify device setup
- Transport selection (UDP or TCP) influences retransmission and delivery characteristics but not the public protocol description here
- Verify device configuration parameters match the intended transport and endpoint before deploying at scale

## Protocol Compatibility Notes

- Firmware revisions can change message timing and optional fields so always verify behavior after updates
- Hardware revisions may alter sensor availability or media functions that affect what the device reports
- Manufacturer side configuration or regional firmware builds may introduce minor protocol differences
- Choice of UDP versus TCP can affect delivery reliability and should be validated in your operational environment
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is required for Plaspy ingestion
- Confirm device settings such as APN and cellular provisioning to ensure the D32 can reach Plaspy over the mobile network
- Validate end to end reporting in a controlled test before broad deployment

## Why Protocol Understanding Matters

Understanding how the D32 communicates with Plaspy helps ensure a reliable setup, speeds troubleshooting when reports are missing or malformed, and supports long term operational stability for tracking and safety use cases.

- Speeds initial setup by clarifying where and how the device should report
- Helps troubleshoot connectivity issues between the D32 and Plaspy endpoint
- Supports informed choices about transport selection and expected delivery behavior
- Enables validation of firmware updates and their impact on reported fields
- Improves incident response when SOS and media references appear in Plaspy timelines

## Why Use Plaspy with This Protocol

Using the Sentar D32 with Plaspy provides organizations a wearable tracking and communication solution that integrates real time location, SOS alerting, and media references into a single monitoring workflow. The combination of multi mode positioning and cellular voice/video capabilities makes the D32 suitable for personnel tracking, lone worker safety, childcare monitoring, and on foot field operations where continuous visibility and rapid verification are important.

To learn more about Plaspy and how it can ingest wearable tracker data, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol and firmware information on the manufacturer website http://www.sentarsmart.com/.
