---
slug: /cantrack/g01/protocol
id: g01-protocol
sidebar_label: Protocol
title: CanTrack - G01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for connecting the CanTrack G01 tracker to Plaspy using shared server settings and transport options
keywords:
  - CanTrack G01 protocol
  - CanTrack G01 GPS protocol
  - CanTrack G01 tracking protocol
  - G01 Plaspy compatibility
  - CanTrack protocol details
  - GPRS tracker protocol
  - GPS tracker communication
  - CanTrack G01 integration
  - vehicle tracking protocol
  - personal tracker protocol
---

# CanTrack - G01 Protocol

This page describes the public protocol context for using the CanTrack G01 tracker with Plaspy. It focuses on how the device communicates with Plaspy in broad, non-sensitive terms and explains the connection settings you will typically use when integrating the G01 for real time tracking, alerts, and history.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact message behavior can vary by G01 firmware, hardware revision, and manufacturer implementation, so this page emphasizes connection and integration guidance rather than firmware internals.

## Protocol Overview

The G01 communicates its position and event data to a backend server using cellular data or SMS as a fallback. In the Plaspy integration model the tracker pushes location updates, alerts, and basic telemetry so the platform can map, store, and act on those events.

- The protocol enables the G01 to deliver latitude, longitude, timestamps and basic telemetry to Plaspy for mapping and history.
- It provides a means for the tracker to identify itself to the server so the platform associates incoming data with the correct device record.
- Event flags such as overspeed or low battery are transmitted so Plaspy can generate alerts and trigger rules.
- SMS reporting with Google Maps links is supported by the device as a fallback for immediate manual location retrieval.
- Hybrid GPS plus LBS positioning is used by the device to improve availability; Plaspy consumes whichever position source the tracker provides.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared server endpoint and port for incoming device reports and automatically determines the appropriate tracker protocol for incoming connections. In most cases a properly configured G01 will begin reporting to Plaspy without the need for manual protocol selection in the platform.

- Plaspy’s public reporting endpoint is d.plaspy.com and the platform is also reachable at IP address 54.85.159.138 for environments that require an IP endpoint.
- Plaspy uses the same listening port for all supported devices, simplifying device configuration and firewall rules.
- When a G01 is pointed at the Plaspy endpoint and sends reports, Plaspy will automatically detect the tracker protocol from the incoming traffic pattern.
- Users typically do not need to pick a protocol option inside Plaspy if the device is configured to report to d.plaspy.com on the correct port.
- Because automatic detection is used, ensure the G01 is configured to send its standard reporting packets and the device IMEI matches the Plaspy device record.

## Transport and Connection Context

The G01 can use cellular data to push reports to Plaspy using common transport options. For network and firewall configuration, the key connection facts are consistent across Plaspy supported devices.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and local configuration choices.
- Plaspy’s primary server name for device reporting is d.plaspy.com and the same service is reachable at 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies firewall and NAT configuration for customers deploying many trackers.
- Choose UDP if the device and mobile network favor lower overhead reporting, or TCP if persistent connections and retransmission are preferred by your deployment.
- Confirm the G01 is set to report to the Plaspy endpoint and port 8888 for reliable ingestion into the platform.

## Protocol Compatibility Notes

- Firmware revisions on the G01 can change message contents, reporting intervals, and supported transport options; always confirm firmware specifics before large deployments.
- Hardware variants and regional modem configurations (such as quad band vs regional bands) may affect network behavior but not the basic reporting concept.
- Transport selection (UDP vs TCP) is a configuration choice; verify which transports your G01 firmware supports and test accordingly.
- SMS reporting mode is a practical fallback but differs from GPRS reporting and is not a substitute for continuous telemetry in all scenarios.
- Plaspy’s automatic protocol detection reduces the need for manual protocol assignment, but accurate IMEI and device records in Plaspy are still required.
- Validate any advanced features you need, such as voice monitoring or custom I/O, against the manufacturer documentation and test with your Plaspy instance.

## Why Protocol Understanding Matters

Knowing how the G01 communicates with Plaspy helps ensure reliable setup, faster troubleshooting, and predictable operation in production deployments. A clear grasp of the transport, endpoint, and typical reporting behavior makes it easier to diagnose connectivity and data issues.

- It helps you configure the device to point at d.plaspy.com or 54.85.159.138 and use port 8888 so packets reach Plaspy reliably.
- It clarifies whether to use UDP or TCP based on network behavior and device firmware support.
- It enables efficient troubleshooting when position updates are missing or alerts are not appearing in Plaspy.
- It reduces deployment time by aligning device IMEI records with incoming reports for correct automatic detection.
- It informs decisions about backup workflows such as SMS replies versus GPRS continuous reporting.

## Why Use Plaspy with This Protocol

Using the CanTrack G01 with Plaspy gives organizations straightforward real time visibility and basic telemetry without unnecessary complexity. The G01’s compact form factor, backup battery, hybrid GPS plus LBS positioning, and SMS fallback make it well suited for personal safety, light asset protection, and small fleet scenarios where dependable location and alerting are the primary requirements.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance from the manufacturer, please verify information at https://www.cantrackgps.com/. Protocol support, firmware behavior, and device implementation details can change over time, so consult the manufacturer documentation when planning deployments.
