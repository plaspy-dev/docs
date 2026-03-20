---
slug: /concox/jm_vg02u/protocol
id: jm_vg02u-protocol
sidebar_label: Protocol
title: Concox - JM-VG02U Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Concox JM-VG02U with Plaspy for reliable vehicle tracking and telemetry
keywords:
  - Concox JM-VG02U protocol
  - Concox JM-VG02U GPS protocol
  - Concox JM-VG02U communication protocol
  - JM-VG02U tracking protocol
  - JM-VG02U Plaspy compatibility
  - Concox vehicle tracker protocol
  - OBDII GPS tracker protocol
  - INS aided GNSS protocol
  - fleet tracking Concox protocol
  - telematics protocol Plaspy
---

# Concox - JM-VG02U Protocol

This page documents the public protocol context for using the Concox JM-VG02U tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level and what to consider when configuring the JM-VG02U to deliver GNSS, INS, and vehicle telemetry into Plaspy without exposing low level or proprietary details.

The JM-VG02U is an INS aided OBDII GNSS vehicle tracker designed for quick plug and play deployment and continuous telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and manufacturer implementation. For device specific fields or firmware dependent behavior consult the manufacturer documentation as the definitive reference.

## Protocol Overview

At a high level the tracker reporting protocol defines how the JM-VG02U identifies itself to the platform, how it reports position and sensor telemetry, and how event alerts are delivered to Plaspy. The protocol enables the device to reliably send GNSS plus INS fused fixes, driving behavior events, and basic OBDII derived signals to the server endpoint so Plaspy can ingest and present the data.

- Provides device identification and registration information so Plaspy can associate incoming streams with the correct asset.
- Transports periodic location updates and fused GNSS INS telemetry used for mapping, geofencing, and analytics.
- Delivers event driven messages such as ignition changes, harsh driving events, power disconnects, and geo fence triggers.
- Supports short term buffering so onboard logs can be synchronized when connectivity resumes.
- Enables telemetry fields required for mileage and trip segmentation which Plaspy uses for reporting and workflows.

## How Plaspy Detects the Protocol

Plaspy centralizes device connections to a common endpoint and port and automatically detects the tracker protocol when properly configured. In most cases you do not need to select a protocol inside Plaspy if the JM-VG02U is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct routing and verification.
- The platform listens on port 8888 and all devices supported by Plaspy use the same port for reporting.
- The device may be configured to use either UDP or TCP on port 8888 depending on device configuration and network conditions.
- Plaspy automatically detects the tracker protocol so a correctly pointed device typically requires no manual protocol selection within the platform.
- Confirm the device is reporting to d.plaspy.com or the server IP and that the configured transport matches the device settings.

## Transport and Connection Context

Connection and transport choices determine how the JM-VG02U reaches Plaspy but do not change the high level role of the protocol. The tracker can use mobile data to reach Plaspy and the same Plaspy listening port is used for all supported devices.

- The device may be configured using UDP or TCP on port 8888 based on device capability and network preference.
- Devices can point to the Plaspy domain d.plaspy.com or to the Plaspy server IP 54.85.159.138 for connectivity.
- Plaspy uses the same port for every supported device which simplifies fleet wide configuration.
- Network level factors such as carrier NAT, signal strength, and temporary loss of coverage can affect delivery and require device buffering.
- When testing connectivity ensure the device is allowed to open outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware versions can change the set of reported fields, event identifiers, and optional telemetry; always note the device firmware when validating behavior.
- Hardware revisions or regional variants of the JM-VG02U may alter available sensors or default configuration values.
- Manufacturer side configuration commands and default reporting intervals may differ between shipments; confirm device defaults before large scale deployment.
- Transport selection (UDP versus TCP) can influence delivery behavior and retransmission characteristics; pick the transport that matches your device configuration and operational needs.
- Plaspy’s automatic protocol detection reduces the need for manual selection but initial device pointing to the Plaspy endpoint must be correct.
- Validate compatibility and any region specific limitations against the manufacturer documentation for the most current guidance.

## Why Protocol Understanding Matters

Understanding how the JM-VG02U communicates with Plaspy helps ensure correct setup, faster troubleshooting, and reliable long term operation. A practical familiarity with the communication context reduces time to first fix and improves confidence in alerts and telemetry used for operations.

- Ensures the device is configured to report to d.plaspy.com or the Plaspy server IP and uses port 8888 for successful ingestion.
- Helps diagnose connectivity issues such as transport mismatch or blocked outbound traffic on mobile networks.
- Allows validation that critical events and telemetry fields required by your workflows are being delivered.
- Supports planning for firmware updates and how they may change reported fields or event semantics.
- Aligns expectations for buffering and resynchronization behavior during temporary coverage loss.

## Why Use Plaspy with This Protocol

Using the JM-VG02U with Plaspy provides organizations a streamlined way to capture high fidelity GNSS plus INS fused location data, driving behavior events, and OBDII convenience without complex wiring. For fleet operations, insurers, or safety programs the combination of fast OBDII deployment and Plaspy’s centralized ingestion can accelerate rollouts and make telemetry actionable through geofencing, alerts, and reporting.

Plaspy is designed to accept device reports at a single shared endpoint so you can point JM-VG02U units to d.plaspy.com or 54.85.159.138 on port 8888 and rely on automatic protocol detection. To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation information please verify with the manufacturer at https://www.iconcox.com/ since protocol support, firmware behavior, and device implementation details can change over time.
