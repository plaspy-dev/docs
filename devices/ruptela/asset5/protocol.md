---
slug: /ruptela/asset5/protocol
id: asset5-protocol
sidebar_label: Protocol
title: Ruptela - Asset5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ruptela Asset5 and how it communicates with Plaspy for reliable asset tracking
keywords:
  - Ruptela Asset5 protocol
  - Ruptela Asset5 GPS protocol
  - Ruptela Asset5 communication protocol
  - Ruptela Asset5 tracking protocol
  - Ruptela Asset5 Plaspy
  - Asset5 GPS tracker
  - Asset5 communication
  - Ruptela tracker protocol
  - GPS tracker protocol Plaspy
  - asset tracking Plaspy
---

# Ruptela - Asset5 Protocol

This page summarizes the public protocol context for using the Ruptela Asset5 tracker with the Plaspy platform. It focuses on how the Asset5 transmits location and telemetry to Plaspy, what connection details are used publicly, and what to consider when confirming device setup for reliable reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior and message contents can vary by Asset5 firmware version, hardware revision, and Ruptela implementation, so treat this page as protocol context rather than a firmware manual.

## Protocol Overview

The communication protocol for Asset5 governs how the device sends GNSS fixes, motion events, battery and health telemetry, and optional Bluetooth related signals to the cloud. In practice this protocol enables the tracker to identify itself to Plaspy and deliver usable location and status data for dashboards and alerts.

- Transmits GNSS fixes along with Cell ID fallback to provide location data to Plaspy.
- Reports motion and accelerometer events to trigger more frequent updates while the asset moves.
- Sends battery level and device health telemetry so Plaspy can track long term operation.
- Uses Bluetooth LE for local configuration and optional local sensor or beacon data that can be associated with the device on Plaspy.
- Device identity and reporting cadence are communicated so Plaspy can present real time location, history, and event notifications.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared server endpoint and automatically determines the tracker protocol from the incoming data and connection context. When Asset5 is configured to report to the Plaspy endpoint, manual protocol selection in the platform is typically not required.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for public reporting.
- Plaspy listens on port 8888 and uses the same port for all supported devices.
- The Asset5 may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- When the device sends well formed reports to the Plaspy endpoint, the platform automatically detects the tracker protocol and associates the device with the correct processing routines.
- Users generally only need to ensure the device is pointed to d.plaspy.com or the listed server IP and is using port 8888 to report.

## Transport and Connection Context

Transport and connection settings determine how the Asset5 reaches Plaspy over cellular networks. These settings are about delivery and routing rather than internal message structure.

- Asset5 can be configured to use UDP or TCP on port 8888 depending on the device configuration and network conditions.
- Devices may be pointed to the domain d.plaspy.com or the direct IP address 54.85.159.138 for reporting.
- Plaspy uses port 8888 universally for device reporting, so the same port is used across supported trackers.
- Cellular variants and network operator settings can affect whether TCP or UDP is preferable for reliability and power consumption.
- Ensure any intermediate firewalls or APN settings allow outbound traffic to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions on Asset5 can change what telemetry fields are sent and when, so verify behavior for a given firmware build.
- Hardware or variant differences (LTE Cat M1, NB IoT, Cat 1bis, 2G fallback) may affect connectivity characteristics and reporting reliability.
- Transport selection between UDP and TCP can be configurable; choose the transport supported by your SIM and network for best results.
- Manufacturer side configuration tools and Bluetooth setup workflows may change; confirm how the device is configured to point to Plaspy before deployment.
- Always validate any device-specific settings against current Ruptela documentation for the exact Asset5 variant you are using.
- Network operator policies and APN configuration can influence how consistently the device reaches the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding the Asset5 communication protocol and transport context helps ensure a smooth integration with Plaspy and supports effective troubleshooting and lifecycle planning.

- Confirms the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 so Plaspy can receive reports.
- Helps diagnose issues such as missing location updates, infrequent reports, or unexpected battery drain.
- Guides decisions on UDP versus TCP based on connectivity, reliability, and power trade offs for your deployment.
- Informs firmware update planning and expectations around new telemetry fields or behavior changes.
- Improves readiness for field troubleshooting by knowing what data types the tracker can send and when motion driven reporting may be triggered.

## Why Use Plaspy with This Protocol

Pairing the Asset5 with Plaspy delivers a simple, low maintenance approach to tracking unpowered and high value assets. Asset5’s long battery life, multi constellation GNSS, and motion aware reporting combine with Plaspy’s platform to provide consistent location visibility, event alerts, and historical reporting for operational oversight.

To learn more about Plaspy and how it works with devices like the Asset5, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and implementation guidance, verify current information on the manufacturer site https://ruptela.com/. Protocol support and firmware behavior can change over time so checking the official manufacturer documentation is recommended.
