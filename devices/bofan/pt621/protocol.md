---
slug: /bofan/pt621/protocol
id: pt621-protocol
sidebar_label: Protocol
title: Bofan - PT621 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Bofan PT621 tracker with Plaspy including connection settings and compatibility notes
keywords:
  - Bofan PT621 protocol
  - Bofan PT621 GPS protocol
  - Bofan PT621 Plaspy
  - PT621 communication protocol
  - PT621 tracking protocol
  - Bofan GPS tracker protocol
  - vehicle tracking PT621
  - PT621 fleet tracking
  - Plaspy compatible trackers
  - GPS tracker protocol guide
---

# Bofan - PT621 Protocol

This page describes the public protocol context for using the Bofan PT621 vehicle GPS tracker with Plaspy. It focuses on how the tracker reports position, events, and telemetry into Plaspy without exposing private parser logic or manufacturer confidential details. The PT621 is a rugged 4G tracker designed for fleet tracking, sensor telemetry, alarms, and peripheral integrations that Plaspy can ingest for operational oversight.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. All devices in Plaspy use the same port, and exact protocol behavior for a PT621 can vary by firmware revision, hardware variant, and manufacturer configuration. For device specific protocol and firmware details consult the manufacturer documentation.

## Protocol Overview

The PT621 communication protocol is the public mechanism the tracker uses to deliver location, alarms, sensor readings, and event data to a telematics platform such as Plaspy. At a high level the protocol defines how the device identifies itself, timestamps and encodes telemetry, and signals alarms or peripheral events so the server can present actionable information to fleet operators.

- Enables periodic and event driven location updates so Plaspy can map vehicle position and movement.
- Transports alarm and status events such as SOS, geo fence, ignition, and sensor thresholds to Plaspy.
- Carries sensor telemetry (fuel, temperature, door status) and peripheral events (camera trigger, RFID driver ID) for integration into reports.
- Allows the server to correlate device identity and timestamps with received telemetry for accurate history and alerts.
- Supports fallback reporting channels such as SMS when cellular data is unavailable, depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared public endpoint and automatically determines the tracker protocol so users generally do not need to select a protocol inside the platform. When a PT621 is configured to report to Plaspy it will connect to the same endpoint used by other supported trackers and Plaspy will route and decode incoming messages according to the detected format.

- Plaspy server domain is d.plaspy.com which is the recommended DNS endpoint for device reporting.
- Plaspy server IP is 54.85.159.138 and is a public address that devices may be pointed to when DNS is not used.
- Plaspy uses a single port for all supported devices which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when the device reports to the endpoint, so manual protocol selection is usually unnecessary.
- If a device is not appearing in Plaspy after configuration, confirm the device is pointed to the correct endpoint and using the supported transport.

## Transport and Connection Context

The PT621 can use different transport methods depending on the configured mode and region. For connectivity to Plaspy the device may be set to use either UDP or TCP on the common Plaspy port, and operators should choose the transport that matches the device firmware and network conditions.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- All devices in Plaspy use the same port which streamlines configuration across mixed fleets.
- Cellular connectivity (4G/GPRS) is the primary path for real time telemetry with SMS used as a fallback for critical alerts.
- Verify the transport mode (UDP versus TCP) that the PT621 firmware expects when pointing the device to Plaspy to ensure reliable delivery.

## Protocol Compatibility Notes

- Firmware revisions can change the exact reporting behavior and available telemetry fields; always check device firmware version when validating compatibility.
- Hardware revisions or regional variants of the PT621 may expose different interfaces or sensor mappings that affect reported data.
- Manufacturer settings such as reporting interval, alarm thresholds, and transport mode can alter how often and in what format data reaches Plaspy.
- Some peripheral features like multiple camera inputs or two way voice are platform dependent and may require specific Plaspy configuration to surface media or call records.
- When DNS is not available devices can be pointed to the server IP 54.85.159.138 instead of d.plaspy.com, but confirm network routing and carrier policies first.
- Test a representative device on your network before wide deployment to confirm the expected telemetry, alarms, and transport behavior.

## Why Protocol Understanding Matters

Understanding the PT621 communication protocol at a practical level helps streamline device onboarding, reduce troubleshooting time, and improve operational reliability when integrating with Plaspy. Knowing how the tracker reports identity, events, and telemetry makes configuration and incident analysis more efficient.

- Ensures devices are configured to point at the correct Plaspy endpoint and transport so data arrives reliably.
- Helps diagnose visibility gaps such as missing location updates, absent alarms, or delayed telemetry.
- Allows teams to match expected sensor outputs and event triggers to what Plaspy displays in maps and reports.
- Supports planning for redundancy and fallback behaviors such as SMS alerts when data connectivity is lost.
- Aids in communicating with the device manufacturer or reseller when a behavior appears inconsistent with documentation.

## Why Use Plaspy with This Protocol

Using the Bofan PT621 with Plaspy provides centralized visibility of vehicle location, alarms, and sensor telemetry that fleets need for security and operational efficiency. The PT621’s ability to report GPS position, digital inputs, camera events, and a broad alarm set pairs with Plaspy’s ingestion and presentation of that data to deliver meaningful alerts, historical reports, and real time monitoring.

If you are evaluating device deployment, the shared Plaspy endpoint model and automatic protocol detection reduce the configuration steps required to onboard PT621 units at scale. To learn more about Plaspy and how it can integrate PT621 telemetry into your fleet workflows visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.bofancloud.com/.
