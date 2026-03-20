---
slug: /concox/jm_bl11/protocol
id: jm_bl11-protocol
sidebar_label: Protocol
title: Concox - JM-BL11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for Concox JM-BL11 integration with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Concox JM-BL11 protocol
  - JM-BL11 GPS protocol
  - Concox tracking protocol
  - JM-BL11 Plaspy compatibility
  - Concox GPS tracker protocol
  - JM-BL11 communication protocol
  - Plaspy device protocol
  - bike share GPS tracker protocol
  - micro mobility tracker protocol
  - Concox protocol integration
---

# Concox - JM-BL11 Protocol

This page describes the public protocol context for using the Concox JM-BL11 tracker with Plaspy. It focuses on how the device reports location, telemetry, and event data to Plaspy and what aspects of the tracker communication are relevant for integration and operations. The content emphasizes publicly shareable details and does not expose private or vendor specific implementation internals.

Plaspy uses shared connection settings across all supported devices and automatically detects tracker protocols when devices report to the Plaspy endpoint. For the JM-BL11 this means devices can be pointed at Plaspy and typically require no manual protocol selection inside the platform. Exact device behavior can vary by firmware release, hardware revision, and manufacturer configuration, so operators should validate device settings and firmware status when deploying at scale.

## Protocol Overview

The tracker protocol is the set of conventions the JM-BL11 uses to identify itself to the cloud and to send location, telemetry, and event data that Plaspy can ingest. In practical terms the protocol covers how GNSS fixes, motion and tamper alerts, battery and charging telemetry, and local unlocking events are reported so they can be presented in maps, alerts, and historical reports.

- Transmits GNSS fixes and fallback location sources so Plaspy can map device position and build route history.
- Reports event and status telemetry such as tamper or vibration alerts, battery state, and solar charging indicators for operational monitoring.
- Sends device identity and session information so Plaspy can associate incoming data with the correct fleet asset.
- Delivers event-driven messages used for geofence triggers, anti theft notifications, and usage records for micro mobility operations.
- Uses secure transport options when enabled by the device so telemetry confidentiality and integrity are maintained during transmission.

## How Plaspy Detects the Protocol

Plaspy listens on a shared ingestion endpoint and automatically determines the incoming tracker protocol when a device reports to that endpoint. For most JM-BL11 deployments users do not need to choose a protocol inside Plaspy as long as the device is configured to report to the Plaspy server.

- Plaspy server domain is d.plaspy.com and the server IP address is 54.85.159.138 for device reporting.
- Plaspy uses a single port for all supported devices which simplifies device reporting setup.
- Plaspy automatically detects the tracker protocol from incoming device connections and message patterns.
- When a JM-BL11 is configured to report to the Plaspy endpoint, manual protocol selection in the platform is typically unnecessary.
- Confirm device reporting settings and APN configuration so the tracker can reach the Plaspy endpoint reliably.

## Transport and Connection Context

Connection transport is an important part of integration planning. The JM-BL11 supports cellular uplink and can be configured to use either of the standard transport types depending on device firmware and operator preference. Plaspy uses a single, consistent port for all devices which reduces configuration complexity across mixed fleets.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can point to the Plaspy server using the domain d.plaspy.com or the server IP 54.85.159.138.
- All devices in Plaspy use the same port which simplifies provisioning and fleet scale rollouts.
- TLS secured communications are supported by the JM-BL11 to protect telemetry in transit when enabled by the device.
- Operators should verify APN and outbound connectivity from the device to ensure reliable reporting to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, and supported transport modes; verify the device firmware level for predictable behavior.
- Hardware variants or regional models may expose different GNSS band support or cellular fallbacks that affect connectivity and positioning performance.
- TLS and certificate handling may vary by firmware; confirm the device supports the required security settings for your deployment.
- Select TCP or UDP based on network reliability and operator preference, but remember the destination port on Plaspy remains the same.
- Test a small number of devices before wide scale rollout to confirm that event types, battery telemetry, and tamper alerts arrive as expected in Plaspy.
- Always consult official manufacturer documentation for the latest device specific instructions and firmware notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps fleet operators and integrators set up devices correctly, streamline troubleshooting, and maintain reliable, long term telemetry for fleet operations. Clear awareness of what data the JM-BL11 reports and how it connects to Plaspy reduces integration time and improves operational confidence.

- Faster troubleshooting when devices fail to report or appear offline by checking transport, APN, and server settings.
- Better geofence and anti theft accuracy by confirming how and when location and motion events are reported.
- Improved battery and solar maintenance planning through accurate interpretation of reported power telemetry.
- More predictable scale deployments when protocol and transport choices are validated across firmware versions.
- Increased security and compliance by confirming TLS and connection configurations between device and Plaspy.

## Why Use Plaspy with This Protocol

Using the JM-BL11 with Plaspy gives micro mobility operators a practical combination of rugged on-device hardware and a cloud platform that ingests the device telemetry needed for real time operations. Plaspy collects location, motion, battery, and event data to power live maps, geofence enforcement, historical routes, and fleet health dashboards tailored to bike sharing and distributed equipment use cases.

If you manage large fleets, integrating JM-BL11 devices with Plaspy can reduce operational overhead, improve theft detection, and provide the telemetry needed to optimize availability and maintenance. Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific protocol and firmware details on the manufacturer site https://www.iconcox.com/ which may contain updates to protocol behavior and implementation.
