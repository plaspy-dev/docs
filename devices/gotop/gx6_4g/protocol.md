---
slug: /gotop/gx6_4g/protocol
id: gx6_4g-protocol
sidebar_label: Protocol
title: GOTOP - GX6-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for GOTOP GX6-4G and how the tracker communicates with Plaspy for fleet tracking and telemetry
keywords:
  - GOTOP GX6-4G protocol
  - GOTOP GX6-4G GPS protocol
  - GX6-4G Plaspy compatibility
  - GOTOP tracking protocol
  - GX6-4G communication protocol
  - GOTOP fleet tracker protocol
  - GX6-4G telemetry protocol
  - Plaspy device protocol
  - vehicle GPS tracker protocol
  - GX6-4G compatibility Plaspy
---

# GOTOP - GX6-4G Protocol

This page describes the public protocol context for using the GOTOP GX6-4G tracker with Plaspy. It focuses on how the device communicates to Plaspy in broad, non-sensitive terms so fleet managers, installers, and integrators can understand the connection expectations and the role of the tracker reporting protocol when the device is used with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation. The GX6-4G is a purpose built 4G vehicle tracker with multi mode positioning and vehicle grade inputs and outputs; this page explains how that device-level data is communicated to Plaspy without describing private or firmware specific internals.

## Protocol Overview

At a high level the tracker communication protocol defines how the GX6-4G identifies itself to a server, reports GNSS and LBS location, and delivers telemetry and event data such as ignition state, CAN bus telemetry, and alarm conditions. The protocol is the bridge between on vehicle sensors and Plaspy dashboards and alerts.

- Enables regular position and telemetry reports so Plaspy can display live location and historical tracks.
- Communicates device identity and status so Plaspy can associate incoming messages with the correct asset and configuration.
- Carries vehicle inputs and outputs status such as ACC detection, door events, and remote control acknowledgements to support anti theft workflows.
- Transmits alarm and event notifications that trigger alerts, geofence actions, and reporting in Plaspy.
- Provides the mechanism for optional remote commands and responses when permitted by the device firmware and installer configuration.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared server endpoint and automatically detects the tracker protocol so most devices do not require a manual protocol selection in the platform. Proper device configuration to report to the Plaspy endpoint is the primary requirement for successful automatic detection.

- Plaspy server domain is d.plaspy.com and can be used as the device reporting host.
- Plaspy server IP is 54.85.159.138 and may be used where DNS is not available.
- The port is 8888 and devices may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies device setup across mixed fleets.
- Plaspy automatically detects the tracker protocol when the device is correctly pointed to the Plaspy endpoint and sending reports.

## Transport and Connection Context

Connection context is focused on how the GX6-4G reaches the Plaspy endpoint over the mobile network. The device supports cellular transport and will use the configured transport mode supported by its firmware and carrier settings.

- The device may be configured using UDP or TCP on port 8888 depending on device support and installer preference.
- Devices may point to d.plaspy.com as the reporting domain for convenience and DNS based routing.
- Where DNS cannot be used the device can be pointed to 54.85.159.138 directly.
- The port 8888 is shared for all Plaspy device communications, so installers can standardize connection settings.
- Transport selection (UDP versus TCP) can affect delivery behavior and should follow the manufacturer guidance and network conditions.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can introduce differences in how messages are formatted or which fields are included; confirm firmware release notes when possible.
- Manufacturer configuration menus may expose options for TCP or UDP transport, heartbeats, and reporting intervals; validate these settings during installation.
- Some features such as CAN bus telemetry, audio monitoring, or remote control outputs depend on both the device firmware and how Plaspy maps those inputs into the platform.
- Network factors including carrier restrictions and APN settings can affect device connectivity; ensure SIM and APN are correctly provisioned.
- Always validate a device in a test environment to confirm it reports as expected to d.plaspy.com or 54.85.159.138 on port 8888 before wide deployment.
- Consult manufacturer documentation when planning advanced integrations or firmware updates as behavior can change between releases.

## Why Protocol Understanding Matters

Understanding the basic communication protocol used by the GX6-4G helps with installation, troubleshooting, and long term reliability when the device is paired with Plaspy. Clear expectations about how the tracker reports and what the platform expects reduces setup time and improves operational confidence.

- Ensures the device is configured to report to the correct Plaspy endpoint and transport settings for automatic detection.
- Helps diagnose connectivity issues by confirming whether the tracker is reaching d.plaspy.com or 54.85.159.138 on port 8888.
- Clarifies which telemetry and I O signals will be visible in Plaspy based on firmware and hardware capabilities.
- Supports better test planning for alarms, geofences, and remote control actions prior to production use.
- Aids communication with the device vendor and carrier when resolving edge cases related to transport or packet delivery.

## Why Use Plaspy with This Protocol

Pairing the GOTOP GX6-4G with Plaspy provides fleets and vehicle operators with a stable path for delivering GNSS and telemetry to a centralized platform. Plaspy ingests location, CAN and input data from the tracker so teams can monitor vehicle position, react to alarms, and run reports that improve operations and security.

Plaspy is designed to accept device traffic at a single, shared endpoint which simplifies setup across mixed fleets and allows automatic protocol detection for compatible trackers. To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance verify information with the manufacturer at https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
