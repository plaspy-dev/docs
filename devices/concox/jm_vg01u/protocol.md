---
slug: /concox/jm_vg01u/protocol
id: jm_vg01u-protocol
sidebar_label: Protocol
title: Concox - JM-VG01U Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Concox JM-VG01U tracker with Plaspy for reliable fleet telemetry and integration
keywords:
  - Concox JM-VG01U
  - Concox JM VG01U protocol
  - JM VG01U GPS protocol
  - JM VG01U Plaspy compatibility
  - Concox GPS tracker protocol
  - vehicle tracking protocol Plaspy
  - INS aided tracker protocol
  - fleet management tracker protocol
  - JM VG01U communication protocol
  - Plaspy device compatibility
---

# Concox - JM-VG01U Protocol

This page covers the public protocol context for using the Concox JM-VG01U tracker with Plaspy. It explains how the device communicates at a high level, what connection settings are used by Plaspy, and what to consider when configuring the tracker to report telemetry to the platform. The content is focused on protocol role and integration context rather than device internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so the guidance here is intended as public, general information to aid integration and troubleshooting.

## Protocol Overview

The tracker communication protocol defines how JM-VG01U telemetry, status, and event data are delivered to a remote server such as Plaspy. At a high level the protocol governs message transport, device identification, and the types of telemetry that the platform can interpret for real-time tracking and analytics.

- Enables the JM-VG01U to send GNSS position, INS-derived motion data, and digital input events to Plaspy for map display and reports.
- Carries device identification and session context so Plaspy can attribute incoming telemetry to the correct asset record.
- Transmits event and status messages such as ignition changes, SOS presses, immobilizer actions, and driving behavior alerts for processing by Plaspy.
- Supports either UDP or TCP transport depending on device configuration and network conditions.
- Allows for periodic location updates and on‑event reporting so fleets receive both continuous and incident-driven data.

## How Plaspy Detects the Protocol

Plaspy receives telemetry on a shared public endpoint and automatically determines the tracker protocol based on the incoming connection and message stream. In typical deployments a correctly configured device only needs to point at the Plaspy endpoint; manual protocol selection inside the platform is usually not required.

- Plaspy accepts device reports on the same port used for all supported trackers and automatically detects the tracker protocol.
- Devices should be configured to report to the Plaspy server endpoint to enable automatic detection.
- Proper device identification (IMEI or device ID) in the outbound message ensures Plaspy can match data to the correct device profile.
- If telemetry does not appear, checking transport settings and destination configuration on the device is the usual first step.
- Automatic detection simplifies onboarding when deploying multiple models across a fleet.

## Transport and Connection Context

Connection context describes how the JM-VG01U reaches Plaspy without detailing message internals. The tracker can be set to report over common mobile transports and must point to Plaspy’s network endpoint for ingestion.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- The device may be configured using UDP or TCP on port 8888 depending on device support and the chosen configuration.
- Select the transport (UDP or TCP) on the tracker according to network reliability and your device’s capability.
- Ensure cellular APN and SIM provisioning are correct so the device can establish outbound connections to d.plaspy.com or 54.85.159.138.

## Protocol Compatibility Notes

- Firmware versions can change message content and available telemetry fields; verify compatibility if you update device firmware.
- Hardware revisions or regional variants may alter supported transports, inputs, or sensor outputs.
- Manufacturer-specific settings or server address formats can vary; confirm the acceptance format when pointing devices to Plaspy.
- Transport choice between UDP and TCP can affect delivery behavior during poor network conditions.
- Device configuration mistakes such as incorrect APN, wrong server name, or disabled reporting can prevent automatic detection.
- Always validate a small test fleet or single unit before broad deployment to confirm behavior with your firmware revision.

## Why Protocol Understanding Matters

Understanding the device communication protocol helps ensure reliable onboarding, accurate telemetry, and faster troubleshooting when devices operate with Plaspy. Awareness of how the tracker reports and what the platform expects reduces setup time and minimizes surprises in production.

- Confirms the tracker is pointed at the correct Plaspy endpoint so automatic protocol detection can occur.
- Helps diagnose common issues such as missing positions, incomplete event data, or intermittent connections.
- Guides decisions about transport selection, reporting intervals, and event thresholds to balance data volume and timeliness.
- Supports informed coordination with the device manufacturer for firmware specific questions or custom configurations.
- Improves long term reliability by clarifying how software updates or hardware changes might affect reporting.

## Why Use Plaspy with This Protocol

Using the JM-VG01U with Plaspy provides fleets with a consolidated stream of high‑accuracy GNSS and INS-aided telemetry, driving behavior events, and vehicle inputs in a platform designed for real‑time monitoring and historical analytics. Plaspy’s automatic protocol detection and unified port strategy simplify device onboarding and let fleet operators focus on outcomes like safety and utilization rather than low level connectivity details.

To learn more about Plaspy and how it integrates with Concox trackers such as the JM-VG01U, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information with the manufacturer at https://www.iconcox.com/
