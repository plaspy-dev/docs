---
slug: /lk_gps/lk970a_b_c/protocol
id: lk970a_b_c-protocol
sidebar_label: Protocol
title: LK-GPS - LK970A/B/C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for LK GPS LK970A B C tracker compatibility with Plaspy with connection and detection guidance
keywords:
  - LK GPS LK970A
  - LK GPS LK970B
  - LK GPS LK970C
  - LK970 protocol
  - LK970 Plaspy compatibility
  - LK GPS tracking protocol
  - LK970 GPS tracker communication
  - Plaspy device integration
  - Plaspy GPS tracker support
  - vehicle tracking LK970
---

# LK-GPS - LK970A/B/C Protocol

This page documents the public protocol context for using the LK-GPS LK970A/B/C tracker family with Plaspy. It focuses on how the tracker communicates with Plaspy in general, how connection settings are used, and what to check when onboarding or troubleshooting a device. The content is intentionally high level and avoids private implementation details while remaining useful for integrators and technical users.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once a device reports to the platform. Exact protocol behavior can vary with firmware versions, hardware revisions, or manufacturer configuration, so details such as reporting intervals, sleep modes, and optional I O availability may differ between unit variants or firmware builds.

## Protocol Overview

The tracker communication protocol is the mechanism by which the LK970A/B/C sends location, status, and event information to a cloud endpoint like Plaspy. At a public level the protocol defines how the device identifies itself, transmits telemetry, and signals events that are useful for tracking, alerts, and history.

- Enables the tracker to send periodic GPS positions and device status updates to the cloud endpoint.
- Carries event notifications such as movement, tamper, low battery, or geofence triggers for Plaspy to ingest.
- Provides an identification step so Plaspy can associate incoming messages with the correct device record.
- Supports offline caching and subsequent upload so that events collected during coverage gaps are forwarded when connectivity returns.
- Works over standard transport layers so the tracker can operate in a variety of network environments and still reach Plaspy.

## How Plaspy Detects the Protocol

Plaspy automatically detects which tracker protocol a device is using when a device reports to the Plaspy endpoint. In most cases, devices that are configured to send telemetry to the Plaspy connection will be recognized without manual protocol selection inside the platform.

- Devices should be configured to report to the Plaspy server endpoint to enable automatic detection.
- Plaspy accepts incoming tracker connections on the same shared port for all supported devices, which simplifies device setup.
- When a properly configured LK970 unit connects to the Plaspy endpoint, protocol identification is handled by the platform so users normally do not need to select a protocol manually.
- If a device does not appear to communicate, check device reporting settings and verify it is pointing to the Plaspy endpoint and port.

## Transport and Connection Context

Connection details determine how the tracker reaches Plaspy but do not expose proprietary packet contents. The LK970 family supports sending data over standard transport protocols to the cloud, and Plaspy provides a consistent endpoint for all devices.

- LK970 devices may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices connecting to Plaspy use the same port, 8888, which reduces configuration complexity across mixed fleets.
- Choose UDP or TCP based on the device capabilities, network reliability, and any vendor guidance for the specific hardware or firmware variant.
- Verify APN and cellular settings on the device so it can establish data sessions and reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change device behavior and available telemetry fields; always confirm firmware level when diagnosing differences.
- Hardware revisions or variant options such as additional I O or sensor support may affect which protocol features are used or exposed.
- Manufacturer regional variants or LTE band differences do not necessarily change the reporting protocol but can affect connectivity and should be validated.
- Transport selection UDP versus TCP can be set on the device and may influence delivery semantics for telemetry and events.
- Offline caching and blind area recovery behavior is often firmware dependent; confirm expected upload behavior with the vendor documentation.
- Validate any advanced features such as remote commands, FOTA, or special sensor inputs against the official LK GPS documentation.

## Why Protocol Understanding Matters

Understanding how the LK970A/B/C communicates with Plaspy improves setup success, reduces troubleshooting time, and helps teams make informed choices about power and connectivity behavior.

- Ensures correct device configuration so telemetry reaches the Plaspy endpoint and is associated with the right asset.
- Helps diagnose connectivity issues by confirming transport, APN, and endpoint settings.
- Informs expectations about which telemetry and alerts will be available based on firmware and hardware variants.
- Guides decisions on reporting intervals, battery optimization, and sleep modes for long endurance deployments.
- Supports planning for blind area recovery and historical upload behavior during coverage gaps.

## Why Use Plaspy with This Protocol

Using Plaspy with the LK970A/B/C family provides a practical way to centralize real time location, alerts, and historical traces for fleets and assets that require long endurance tracking and covert mounting. Plaspy ingests the tracker telemetry so fleet managers can view live locations, receive event notifications, and review history without manual protocol configuration when devices are pointed to the platform.

To learn more about Plaspy and how it handles device connections and fleet management, visit https://www.plaspy.com. For the most current, device specific protocol details, firmware notes, and hardware variant information refer to the official manufacturer documentation at https://www.lk-gps.com since protocol support and firmware behavior can change over time.
