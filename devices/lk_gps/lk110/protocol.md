---
slug: /lk_gps/lk110/protocol
id: lk110-protocol
sidebar_label: Protocol
title: LK-GPS - LK110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for the LK GPS LK110 and how it communicates with Plaspy for reliable e bike tracking and device integration
keywords:
  - LK-GPS LK110 protocol
  - LK110 GPS tracker protocol
  - LK110 Plaspy compatibility
  - LK-GPS bicycle tracker protocol
  - e bike GPS tracker protocol
  - GPS tracker communication
  - tracker protocol guide
  - Plaspy device compatibility
  - GPS tracker integration
  - vehicle tracking Plaspy
---

# LK-GPS - LK110 Protocol

This page covers the public protocol context for using the LK-GPS LK110 with Plaspy. It explains the communication role of the tracker and the general expectations for reporting location, alarms, battery status, and working modes to the Plaspy backend without exposing implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior such as upload frequency, sleep wake triggers, and alarm reporting may differ between units and firmware builds.

## Protocol Overview

The LK110 reporting and command protocol defines how the tracker sends usable telemetry to a server and how remote commands and configuration are applied by the platform. For integration with Plaspy, the protocol primarily enables location reports, alarm notifications, status updates, and remote control signals that the platform can interpret for monitoring and fleet management.

- Carries position reports that allow Plaspy to display location and movement for e bikes and bicycles.
- Transmits device status such as battery level, power modes, and wake or sleep events relevant to device lifetime and alerts.
- Sends alarm and event notifications including vibration alarms, displacement alerts, low power warnings, and geofence entry or exit events.
- Allows remote configuration and control actions that the platform can use to change reporting frequency, modes, or to trigger restarts where permitted.
- Provides identifiable device data so Plaspy can associate incoming traffic with a specific tracker unit for reliable tracking.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and automatically determines the appropriate handling for each connected tracker model. When an LK110 is configured to report to Plaspy, the platform will match incoming messages to known device behaviors and route telemetry to the device record without requiring the user to manually pick a protocol in most cases.

- Devices should be configured to report to Plaspy using the provided connection settings so automatic detection can occur.
- Plaspy listens on the same port for all supported devices, removing the need to set different ports per model.
- When an LK110 is pointed at the Plaspy endpoint, the platform will recognize the device reports and apply the correct interpretation rules.
- Users typically do not need to select a protocol inside Plaspy if the tracker is correctly configured to send to the Plaspy endpoint.
- Proper device identification depends on the tracker sending identifiable device data as part of normal reporting.

## Transport and Connection Context

Connection to Plaspy for the LK110 can use either of the common IP transport methods depending on device configuration and manufacturer settings. In Plaspy deployments the same server endpoint and port are used for all supported devices to simplify configuration.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy accepts reports addressed to the server domain d.plaspy.com as well as to the public server IP 54.85.159.138 for environments that prefer direct IP.
- All devices in Plaspy use the same port which streamlines deployment and firewall rules for fleets.
- Pick the transport (UDP or TCP) compatible with the device firmware and your network conditions for best reliability.
- Ensure network equipment permits outbound connections to the Plaspy endpoint on the shared port.

## Protocol Compatibility Notes

- Manufacturer firmware updates can change how the LK110 reports data or which transport the device uses, so confirm the firmware release notes for behavior changes.
- Hardware revisions across batches can introduce subtle differences in reporting behavior or supported commands.
- Some configuration options are applied on the device side and will affect how often and in what format the tracker reports to Plaspy.
- Choosing UDP or TCP can affect delivery guarantees and power usage depending on device behavior and coverage conditions.
- Validate device settings so the tracker points to d.plaspy.com or 54.85.159.138 and uses the shared port expected by Plaspy.
- Always cross reference manufacturer documentation when troubleshooting apparent incompatibilities.

## Why Protocol Understanding Matters

A practical understanding of the LK110 communication protocol helps administrators and integrators set up devices correctly, diagnose reporting issues, and optimize device behavior for battery life and coverage. Knowing what the tracker is expected to send and when makes it easier to verify that Plaspy is receiving and interpreting the telemetry as intended.

- Supports quicker setup by confirming devices are reporting to the correct Plaspy endpoint and using the expected transport.
- Helps with troubleshooting when location updates, alarms, or status reports do not appear in Plaspy as expected.
- Enables sensible configuration choices for upload frequency and power saving to balance battery life and update timeliness.
- Aids in recognizing when firmware or hardware differences might account for behavioral differences across a fleet.
- Improves operational reliability by aligning device settings with network and platform expectations.

## Why Use Plaspy with This Protocol

Using the LK110 with Plaspy provides a practical way to monitor e bikes and bicycles at scale. Plaspy ingests the LK110 telemetry such as position, battery level, alarm events, and working mode changes so fleet managers and owners can maintain visibility, respond to alerts, and manage device settings centrally.

If you want to learn more about Plaspy and how it works with device protocols like that of the LK110, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance please verify information with the manufacturer at https://www.lk-gps.com since protocol support and firmware behavior can change over time.
