---
slug: /dct/syrus_gps/protocol
id: syrus_gps-protocol
sidebar_label: Protocol
title: DCT - Syrus GPS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for DCT Syrus GPS with Plaspy explaining connection settings and integration context
keywords:
  - DCT Syrus GPS protocol
  - DCT Syrus GPS communication
  - Syrus GPS Plaspy compatibility
  - Syrus GPS tracking protocol
  - vehicle tracking Syrus GPS
  - Syrus GPS telemetry
  - GPS tracker protocol guide
  - DCT tracker protocol
  - Syrus GPS IoT communication
  - fleet tracking Syrus GPS
---

# DCT - Syrus GPS Protocol

This page covers the public protocol context for using the DCT Syrus GPS tracker with Plaspy. It explains how the device typically communicates with the Plaspy platform and outlines the connection settings and practical considerations that matter for integration, monitoring, and troubleshooting. The content focuses on general protocol behavior and device communication roles without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and available messages can vary by firmware version, hardware revision, and manufacturer implementation, so device-specific features such as satellite fallback, accelerometer events, and over the air configuration may behave differently across units.

## Protocol Overview

The Syrus GPS communication protocol defines how the tracker reports location, accelerometer events, vehicle bus data, and status messages to a remote server. In the context of Plaspy the protocol's role is to deliver structured telemetry and event data that Plaspy can interpret for real time tracking, alerts, and historical reporting.

- Enables periodic and event driven location reports from the device to the cloud platform.
- Conveys accelerometer and motion events useful for crash detection, tow alerts, and driver behavior metrics.
- Transports vehicle bus and ECU data when used with CAN or OBD interfaces for diagnostics and performance monitoring.
- Supports store and forward buffering so the tracker can save events during network loss and upload them when connectivity is restored.
- Works with optional satellite accessories for remote area reporting when cellular coverage is unavailable.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the correct tracker protocol based on the incoming data pattern and device behavior. When the Syrus GPS is pointed to the Plaspy endpoint and configured to report, users generally do not need to select a protocol manually inside Plaspy.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used as an alternative reporting address.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- With correct endpoint and transport settings, Plaspy automatically detects the tracker protocol for incoming connections.

## Transport and Connection Context

Transport selection and endpoint configuration determine how the Syrus GPS reaches the Plaspy servers. Devices that support both UDP and TCP can be configured to the transport best suited to network conditions and application needs while pointing to the Plaspy endpoint.

- Devices may point to d.plaspy.com or 54.85.159.138 as the reporting destination.
- The device may be configured using UDP or TCP on port 8888 to send telemetry and events.
- Plaspy uses the same port for all supported devices which simplifies device configuration.
- Transport choice can affect reliability and latency depending on the network environment and device firmware.
- Some device configuration and OTA management tools provided by the manufacturer can change the reporting endpoint and transport settings.

## Protocol Compatibility Notes

- Firmware differences can change message timing, supported events, and field contents; verify the firmware level when troubleshooting.
- Hardware revisions and optional accessories such as a SATCOM module for Iridium will influence available communication paths.
- Transport selection TCP versus UDP may need to be adjusted for network reliability or firewall constraints at the deployment location.
- Manufacturer configuration tools and gateways may be required to set the reporting host and enable certain features.
- Always validate device behavior with real device tests when onboarding fleets to Plaspy.
- Refer to manufacturer documentation for accessory compatibility such as satellite modules and external sensors.

## Why Protocol Understanding Matters

Understanding how the Syrus GPS communicates helps ensure reliable setup, accurate telemetry interpretation, and faster resolution of connectivity or data issues when the device is used with Plaspy. A practical grasp of the protocol and transport context reduces integration time and improves operational visibility.

- Helps confirm correct reporting host and transport settings so devices reliably reach Plaspy.
- Makes it easier to interpret accelerometer events, geofence triggers, and ECU data in platform dashboards.
- Aids in diagnosing store and forward behavior after network outages or power cycles.
- Supports planning for accessory use such as satellite modules for remote coverage.
- Reduces onboarding friction for large fleets by anticipating firmware or hardware variation.

## Why Use Plaspy with This Protocol

Using the DCT Syrus GPS with Plaspy provides organizations a streamlined way to collect location and event data from a high performance tracker. The Syrus GPS features such as a 3 axis accelerometer, large store and forward buffer, CAN/OBD compatibility, tamper detection, and optional satellite backup map well to fleet monitoring, driver performance, and remote asset tracking use cases that Plaspy is designed to support.

Plaspy simplifies device connectivity by exposing a single reporting endpoint and port, and by automatically detecting the tracker protocol when devices are configured to report to the platform. To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and accessory information consult the manufacturer documentation at https://www.digitalcomtech.com/ as protocol support and firmware behavior can change over time.
