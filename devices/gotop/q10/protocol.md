---
slug: /gotop/q10/protocol
id: q10-protocol
sidebar_label: Protocol
title: GOTOP - Q10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP Q10 GPS tracker and Plaspy compatibility for real time reporting and alerts
keywords:
  - GOTOP Q10 protocol
  - GOTOP Q10 GPS
  - GOTOP Q10 Plaspy
  - GOTOP Q10 communication
  - GOTOP Q10 tracking
  - Plaspy tracker protocol
  - personal GPS tracker protocol
  - Q10 GPRS reporting
  - GOTOP Q10 SOS tracker
  - GOTOP Q10 compatibility
---

# GOTOP - Q10 Protocol

This page provides the public protocol context for using the GOTOP Q10 tracker with the Plaspy platform. It summarizes how the device communicates in broad terms, what reporting options are commonly used, and which connection settings Plaspy expects for real time telemetry, SOS alerts, and historical playback.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is reporting to the Plaspy endpoint. Exact protocol behavior can vary by firmware revision, hardware revision, and manufacturer implementation, so device configuration and features such as SMS fallback, voice monitoring, and BLE interaction may differ between units.

## Protocol Overview

The communication protocol for the Q10 defines how the tracker reports location, status, and event data to a remote platform like Plaspy. In general terms, the protocol enables the device to identify itself, transmit telemetry and alerts, and support complementary features such as SOS notifications and remote queries.

- Transports periodic and event driven location updates so Plaspy can display live position and historical tracks.
- Carries emergency SOS alerts and related metadata so authorized contacts and the platform receive timely notifications.
- Conveys device status such as battery level, motion state, and geo fence events to support monitoring and alerting.
- Supports out of band messages like SMS location replies and direct phone queries when data is unavailable.
- Integrates voice surveillance and two way calling as companion event data while keeping core tracking reports separate.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many different tracker models and to identify the incoming protocol automatically when a device is configured to send data to the Plaspy endpoint. When a Q10 is pointed at the Plaspy server, the platform evaluates the incoming connection and maps the feed to the appropriate parser and device record without manual protocol selection in most cases.

- Plaspy automatically detects the tracker protocol when the device is reporting to the Plaspy endpoint.
- Users typically do not need to choose a protocol inside Plaspy if the device is properly configured to report to d.plaspy.com or 54.85.159.138.
- The standard Plaspy endpoint and port are shared across supported devices so initial setup is simplified.
- If a device is not reporting as expected, verifying the device server settings and APN is a first troubleshooting step.
- SMS and voice features operate outside of the primary reporting channel and can provide useful fallbacks for location or SOS confirmations.

## Transport and Connection Context

The Q10 supports GPRS reporting to a remote server and can also provide SMS based coordinates and direct phone query responses. For live reporting to Plaspy, the device may be configured to send data over either UDP or TCP on the platform port. When configuring the device, point it to the Plaspy server domain or IP and ensure the transport selection matches device capabilities.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies multi device deployments.
- GPRS data reporting is the primary channel for live map updates and telemetry to Plaspy.
- SMS coordinate replies and direct phone queries remain useful fallbacks when data reporting is unavailable.
- Validate that carrier APN settings and local network policies permit outbound TCP or UDP traffic to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message behavior and available commands so check the device firmware level when validating compatibility.
- Hardware revisions or regional variants may alter supported bands, SMS behavior, or available features.
- The choice of UDP versus TCP depends on the tracker firmware and the configuration options exposed in the device menu or provisioning commands.
- Some features such as voice surveillance, BLE sensors, or two way calling are handled outside the core telemetry feed and may require separate configuration.
- Always confirm reporting server, port, and transport values on the device are set to the Plaspy endpoint before relying on automatic detection.
- If behavior differs from expectations, review the official manufacturer guide and release notes to identify firmware specific behaviors.

## Why Protocol Understanding Matters

Knowing how the Q10 communicates helps ensure reliable setup, predictable alerting, and effective troubleshooting with Plaspy. Even though Plaspy automates protocol detection, a practical appreciation of the device reporting modes and transport options reduces setup time and improves operational confidence.

- Ensures the device is pointed to the correct server and transport so Plaspy receives live updates.
- Helps interpret fallback behavior such as SMS location replies when GPRS is not available.
- Improves troubleshooting steps for connectivity issues, power management, and event delivery.
- Informs decisions about reporting intervals and motion based power saving to balance battery life and visibility.
- Guides expectations for which features appear in Plaspy and which are managed on the device or by phone calls.

## Why Use Plaspy with This Protocol

Pairing the GOTOP Q10 with Plaspy provides a compact, Plaspy compatible personal tracking option that integrates real time location, SOS notifications, and event telemetry into a centralized monitoring platform. The Q10 is well suited to personal safety deployments where discreet hardware, emergency alerts, and occasional two way voice interactions are primary requirements.

To learn more about integrating devices like the GOTOP Q10 with Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer instructions, verify information on the official GOTOP website at https://www.gotop.cc/ as firmware behavior and implementation details can change over time.
