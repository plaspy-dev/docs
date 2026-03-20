---
slug: /bofan/pt_502/protocol
id: pt_502-protocol
sidebar_label: Protocol
title: Bofan - PT-502 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the Bofan PT 502 GPS tracker and how it communicates with Plaspy for integration and monitoring
keywords:
  - Bofan PT-502 protocol
  - Bofan PT-502 GPS protocol
  - PT-502 Plaspy compatibility
  - Bofan GPS tracker protocol
  - PT-502 tracking protocol
  - GPS tracker communication
  - Plaspy device protocol
  - vehicle tracking PT-502
  - fleet tracking Bofan PT-502
  - PT 502 protocol documentation
---

# Bofan - PT-502 Protocol

This page provides public protocol context for using the Bofan PT-502 GPS car tracker with Plaspy. It focuses on how the tracker communicates with Plaspy's ingest endpoint and what to expect during integration without exposing implementation details. The PT-502 is a versatile device with features such as GPRS reporting, SMS control, GLONASS plus GPS positioning, engine cut capability, SOS and geo fence alarms, and position logging.

Plaspy uses a shared connection configuration across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behavior and message details can vary by PT-502 firmware, hardware revision, and manufacturer settings, so users should verify device-specific behavior against the manufacturer documentation when needed.

## Protocol Overview

The PT-502 reporting protocol defines how the tracker sends location, status, and alarm information to a remote server so platforms like Plaspy can parse and display the data. At a high level the protocol enables the tracker to identify itself, transmit telemetry, and deliver event notifications that support tracking and fleet management workflows.

- Carries periodic and event driven telemetry such as GPS coordinates, time, and status flags for use in Plaspy dashboards
- Allows the device to include identification so the platform can associate incoming messages with the correct asset
- Supports alarm and control events such as SOS, geo fence triggers, low battery alerts, and optional remote engine cut signals
- Works over standard mobile data channels to deliver real time or near real time reporting to a server endpoint
- Enables position logging features that can be uploaded to the platform for historical playback and reporting

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint for device reports and automatically detects the tracker protocol once messages arrive. For most users this means there is no need to manually select a protocol inside Plaspy as long as the PT-502 is configured to report to the Plaspy endpoint.

- Plaspy uses the same port for all supported devices which simplifies device configuration
- Devices reporting correctly to the Plaspy endpoint are detected automatically by the platform
- Users typically configure the PT-502 to send data to the Plaspy server domain or IP and choose the appropriate transport
- Protocol detection is based on the incoming messages from the device rather than a manual selection step
- If a device is not detected, common checks include verifying the server address, transport type, and SIM data connectivity

## Transport and Connection Context

The PT-502 may use either UDP or TCP to send data depending on device settings and network conditions. When integrating with Plaspy, configure the tracker to use the shared Plaspy endpoint and the designated port so reports reach the platform reliably.

- The Plaspy server domain for device reporting is d.plaspy.com
- Plaspy also accepts connections directed to the public server IP 54.85.159.138
- The designated transport port for all Plaspy devices is 8888
- The PT-502 may be configured to use UDP or TCP on port 8888 depending on its firmware and setup
- Ensure APN and mobile data settings on the device are correct so GPRS reporting can reach the Plaspy endpoint

## Protocol Compatibility Notes

- PT-502 firmware versions and hardware revisions can change message behavior and available features; verify compatibility for your specific unit
- The device supports reporting via GPRS and SMS; when using Plaspy, GPRS reporting to the Plaspy endpoint is the typical integration path
- Transport selection (UDP vs TCP) may affect reliability and delivery; choose the transport that matches the device configuration and network environment
- Manufacturer configurable options such as reporting intervals, alarm thresholds, and logging behavior can influence how often data arrives at Plaspy
- Always confirm that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 for automatic detection by Plaspy
- If you rely on advanced features like remote engine cut, ensure those controls are supported and permitted in your deployment and by the device firmware

## Why Protocol Understanding Matters

Understanding the communication protocol used by the PT-502 helps with reliable setup, meaningful troubleshooting, and consistent long term operation when the device reports to Plaspy. Protocol awareness reduces integration time and improves the odds of a smooth deployment.

- Makes it easier to confirm the device is reaching Plaspy by checking transport, server address, and reporting intervals
- Helps diagnose common issues such as missing telemetry, incorrect position timestamps, or unreported alarms
- Informs decisions about transport choice, reporting frequency, and power management for battery sensitive installations
- Clarifies how device features like SOS, geo fence, and engine cut are represented in platform events
- Supports planning for firmware updates, hardware replacements, or changes in device configuration

## Why Use Plaspy with This Protocol

Using the Bofan PT-502 with Plaspy gives organizations a way to collect and visualize location and event data from the tracker in a centralized platform. Plaspy's automatic protocol detection and shared connection settings simplify onboarding, allowing fleets and vehicle owners to focus on operational monitoring rather than low level integrations.

To learn more about how Plaspy works with devices like the PT-502, visit https://www.plaspy.com. Please note that protocol behavior, firmware features, and device implementation details can change over time, so always verify the latest PT-502 specifications and configuration instructions on the manufacturer site https://www.bofancloud.com/ before making deployment decisions.
