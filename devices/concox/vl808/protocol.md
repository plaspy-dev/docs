---
slug: /concox/vl808/protocol
id: vl808-protocol
sidebar_label: Protocol
title: Concox - VL808 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL808 and how it communicates with Plaspy using shared connection settings and automatic detection
keywords:
  - Concox VL808 protocol
  - Concox VL808 GPS protocol
  - VL808 tracking protocol
  - Concox GPS tracker Plaspy compatibility
  - VL808 communication protocol
  - Plaspy device protocol
  - vehicle tracking VL808
  - VL808 fleet tracking
  - Concox Plaspy integration
  - VL808 GNSS protocol
---

# Concox - VL808 Protocol

This page provides a public protocol context for using the Concox VL808 with the Plaspy platform. It explains how the VL808 communicates in general terms, what kinds of data Plaspy ingests, and which connection settings are used so technical teams can plan installations and troubleshooting with confidence.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The VL808 can be configured to report to Plaspy using the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888. Devices may use either UDP or TCP on port 8888 depending on device support and configuration, and Plaspy accepts connections on the same port for all devices while handling protocol detection automatically. Exact protocol behavior can vary with firmware, hardware revision, and manufacturer implementation, so confirm device specific details when necessary.

## Protocol Overview

The VL808 communication protocol is the set of rules the device uses to send GNSS positions, telemetry, and event information to a remote platform such as Plaspy. For integration with Plaspy, the protocol enables the tracker to identify itself, deliver periodic and event driven location updates, and transmit I/O and sensor telemetry that Plaspy can map into alerts and reports.

- Enables GNSS position reporting and timestamped location updates for live and historical tracking.
- Transmits accelerometer events and digital/analog I O states so Plaspy can surface driving behavior and sensor telemetry.
- Carries BLE accessory and peripheral data when the device is configured to forward such inputs to the platform.
- Provides a mechanism for device identification and basic status reporting so Plaspy can associate incoming messages to the correct asset.
- Supports periodic reporting and event driven messages to balance data usage and responsiveness in fleet deployments.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically detects the tracker protocol used by the device. When the VL808 is pointed at Plaspy, the platform associates the incoming stream with a device and applies the correct parsing and routing without requiring manual protocol selection by the user.

- Plaspy listens on port 8888 for all supported devices and protocols.
- Devices can be configured to report to d.plaspy.com or 54.85.159.138 as the destination.
- Plaspy supports both TCP and UDP transport so the VL808 can use the transport that matches its firmware settings.
- If the device is properly configured to send to the Plaspy endpoint, manual protocol selection in the platform is typically unnecessary.
- Automatic detection helps simplify deployment across mixed fleets and multiple hardware revisions.

## Transport and Connection Context

Connection context focuses on how the VL808 reaches Plaspy rather than on packet internals. The device supports cellular data for continuous reporting and can fall back to GSM where LTE is unavailable. For Plaspy integration the important connection details are the shared server endpoint and the transport options supported by the tracker.

- Devices may use TCP or UDP on port 8888 depending on the VL808 configuration and firmware capabilities.
- The Plaspy server domain for reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices supported by Plaspy use the same port 8888 so a consistent outbound destination simplifies firewall and APN setup.
- Choose the transport type that best matches your network stability and data requirements; some installations prefer UDP for low overhead while others prefer TCP for reliable delivery.
- Ensure APN and cellular settings are configured correctly on the device so it can establish a data session and reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields, and optional features; validate protocol capabilities against the device firmware level in use.
- Hardware revisions and regional variants may alter supported cellular bands or available I O lines, which affect what telemetry reaches Plaspy.
- The VL808 supports BLE accessories and multiple I O types; confirm whether specific accessory data is forwarded in your device firmware release.
- Transport selection between UDP and TCP can be constrained by firmware, so configure the VL808 according to the transport you plan to use with Plaspy.
- Offline logging behavior and data sync after reconnection can depend on device settings and firmware; verify the VL808 logging limits for your application.
- Always cross check manufacturer documentation for firmware specific notes that affect protocol behavior or available message types.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps system integrators and fleet technicians ensure reliable reporting, accurate troubleshooting, and long term operational stability when using the VL808 with Plaspy. Clear awareness of what the device sends and how it connects reduces deployment friction and speeds issue resolution.

- Ensures correct device configuration so the VL808 points to d.plaspy.com or 54.85.159.138 on port 8888 using the desired transport.
- Helps interpret logs and events during commissioning and when diagnosing intermittent connectivity.
- Guides firmware selection and update strategies to enable required telemetry such as BLE peripherals, accelerometer events, or analog inputs.
- Reduces the need for manual protocol selection in Plaspy by confirming the device is configured to report to the shared Plaspy endpoint.
- Supports planning for network changes, roaming behavior, and APN configuration in cellular deployments.

## Why Use Plaspy with This Protocol

Pairing the Concox VL808 with Plaspy provides organizations with real time visibility and the ability to transform raw GNSS and sensor data into operational insights. The VL808’s multi GNSS accuracy, robust I O set, and offline logging make it well suited for fleet monitoring, anti theft workflows, fuel and battery telemetry, and driving behavior analytics when integrated into Plaspy.

Plaspy’s shared connection approach simplifies fleet scale deployments by using the same port for all devices and automatically detecting the tracker protocol when the device reports to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about Plaspy and how it can work with devices such as the VL808 visit https://www.plaspy.com. Please verify the latest protocol details, firmware behavior, and device implementation notes with the manufacturer at https://www.iconcox.com/ as these items can change over time.
