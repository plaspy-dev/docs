---
slug: /queclink/gb100cg/protocol
id: gb100cg-protocol
sidebar_label: Protocol
title: QuecLink - GB100CG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for QuecLink GB100CG compatibility with Plaspy servers
keywords:
  - QuecLink GB100CG protocol
  - QuecLink GB100CG GPS protocol
  - GB100CG Plaspy compatibility
  - QuecLink tracking protocol
  - GB100CG communication protocol
  - GB100CG vehicle tracking
  - Plaspy tracker protocol
  - QuecLink GPS tracker protocol
  - GB100CG telematics protocol
  - QuecLink telemetry Plaspy
---

# QuecLink - GB100CG Protocol

This page describes the public protocol context for using the QuecLink GB100CG tracker with Plaspy. It focuses on how the device communicates with Plaspy servers in a way that is useful for integration, configuration, and troubleshooting while avoiding sensitive implementation specifics. The GB100CG is a compact battery mounted tracker built for automotive telematics and insurance UBI use cases, offering LTE Cat 1 with 2G fallback, IP67 protection, BLE pairing, and a high frequency 6 axis motion sensor.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. The GB100CG can transmit location and telemetry over TCP, UDP or SMS depending on configuration, and Plaspy accepts reporting to the public endpoint at d.plaspy.com or the IP address 54.85.159.138 on port 8888. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so device specific behavior should be validated against the manufacturer documentation.

## Protocol Overview

At a high level, the tracker reporting protocol defines how the GB100CG sends GNSS, sensor, and event data to a remote server so that Plaspy can ingest and present usable telemetry. The protocol covers identification, scheduled and event based reporting, and the signaling required for location, alarms, and motion records without exposing manufacturer internals.

- Enables device identification and session reporting so Plaspy can associate incoming data with the correct asset.
- Carries GNSS position, timestamp, and motion sensor samples that Plaspy converts into location and driving behavior events.
- Transports alarm and event messages such as geofence triggers, tow or tamper alerts, and crash records for immediate notification and historical logging.
- Supports configurable reporting modes so the tracker can send periodic updates plus high frequency bursts for crash or aggressive driving scenarios.
- Works over standard transports so the device can reach Plaspy servers from diverse cellular environments.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared public endpoint and applies protocol detection to route incoming messages to the correct handler. In most cases a properly configured GB100CG that reports to Plaspy will be detected automatically and will not require manual protocol selection inside the platform.

- Plaspy exposes a single endpoint that devices can target using the domain d.plaspy.com or the IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device configuration and server access.
- The platform analyzes incoming reports and matches them to known device patterns so supported trackers are recognized automatically.
- When a GB100CG is pointed at the Plaspy endpoint and uses an allowed transport, the user typically does not need to choose a protocol in Plaspy.
- If a device appears not to register automatically, common causes include incorrect server settings, transport mismatch, or firmware differences on the tracker.

## Transport and Connection Context

Connection transport and addressing are important practical details when configuring the GB100CG to report to Plaspy. The device may be configured to use either UDP or TCP on port 8888 based on device capability and user preference, and devices can point to the Plaspy domain or the public IP directly.

- Plaspy accepts device reports on port 8888 for all supported trackers and services.
- Devices may be configured to use UDP or TCP on port 8888 depending on the tracker firmware and configuration options.
- The Plaspy server can be reached at the domain d.plaspy.com or the public IP address 54.85.159.138.
- Some tracker deployments also support SMS as an alternative transport for specific messages or fallback reporting.
- Using the shared port and endpoint simplifies provisioning and reduces configuration errors when deploying many devices.

## Protocol Compatibility Notes

- Firmware revisions can change the exact reporting cadence, available fields, and event formats; always verify firmware release notes for behavior changes.
- Hardware or variant revisions of the GB100CG may enable or disable specific transports or sensor features, affecting the data you receive.
- Transport selection (TCP versus UDP) affects reliability and retransmission behavior; choose the mode supported by the device and suited to your connectivity environment.
- BLE pairing and accessory telemetry are often separate from the primary tracker protocol and may require additional configuration to correlate accessory data with GPS events.
- Manufacturer default server settings or provisioning commands might differ between batches; confirm that the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Validate compatibility and supported commands against the official QuecLink documentation for your specific firmware and hardware revision.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure successful deployment, accurate telemetry, and efficient troubleshooting when using Plaspy. Knowing how the GB100CG reports data and what transports it can use reduces integration friction and improves operational reliability.

- Ensures the device is pointed to the correct Plaspy endpoint and port so reports are received reliably.
- Helps map device events and sensor fields to Plaspy dashboards and alerts for accurate incident detection.
- Reduces time spent diagnosing connectivity problems by confirming TCP versus UDP and verifying DNS or IP settings.
- Enables informed decisions about reporting intervals and sensor sampling to balance battery life and data fidelity.
- Aids planning for firmware updates and hardware variations that affect the data sent to Plaspy.

## Why Use Plaspy with This Protocol

Using the GB100CG with Plaspy provides organizations with centralized visibility into location, driving behavior, and event history powered by a tracker designed for UBI and fleet use cases. The combination of LTE Cat 1 connectivity with 2G fallback, a high frequency 6 axis motion sensor, and BLE accessory support allows Plaspy to receive high fidelity telemetry for routing, safety analytics, crash reconstruction, and anti theft workflows.

If you want to learn more about how Plaspy ingests and uses telemetry from devices like the GB100CG, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behaviour, and implementation notes consult the manufacturer documentation at https://www.queclink.com/.
