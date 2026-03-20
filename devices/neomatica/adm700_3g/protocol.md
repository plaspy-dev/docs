---
slug: /neomatica/adm700_3g/protocol
id: adm700_3g-protocol
sidebar_label: Protocol
title: Neomatica - ADM700 3G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Neomatica ADM700 3G tracker with Plaspy for reliable fleet telematics
keywords:
  - Neomatica ADM700 3G protocol
  - ADM700 3G GPS protocol
  - ADM700 3G Plaspy compatibility
  - Neomatica GPS tracker protocol
  - ADM700 telematics protocol
  - Neomatica tracking protocol
  - ADM700 3G communication protocol
  - vehicle tracking ADM700 3G
  - fleet tracking Neomatica
  - ADM700 EGTS protocol
---

# Neomatica - ADM700 3G Protocol

This page provides public protocol context for using the Neomatica ADM700 3G tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy, what connection settings are used, and practical considerations for integration without exposing implementation sensitive details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication model and compatibility considerations rather than device internals.

## Protocol Overview

The communication protocol of the ADM700 3G is the vehicle by which position fixes, telemetry, events, and logged records are delivered to Plaspy. In general terms, the protocol enables identification, session management, and delivery of usable data elements that Plaspy ingests for live tracking, alerts, and historical playback.

- Allows the device to identify itself to a remote server and associate data with a specific asset.
- Carries GNSS location, timestamp, and basic fix quality data that Plaspy uses for mapping and history.
- Transports telemetry such as CAN bus data, analog and discrete inputs, and accelerometer events for diagnostic and alerting purposes.
- Supports offline record upload so stored data is delivered to Plaspy after temporary connectivity loss.
- May include manufacturer supported standards such as EGTS and an open protocol to simplify server side integration.

## How Plaspy Detects the Protocol

Plaspy operates a unified ingestion endpoint and port for device reports, and the platform automatically determines the tracker protocol when a device connects. In most deployments, the device only needs to be configured to send data to Plaspy for protocol detection to occur without manual selection inside the platform.

- Plaspy listens on domain d.plaspy.com and on the public server IP 54.85.159.138 for incoming device traffic.
- The platform uses port 8888 for device connections and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so manual protocol selection in Plaspy is typically unnecessary.
- Proper device configuration to report to the Plaspy endpoint is the main requirement for automatic detection.
- Detection is designed to accommodate common open protocols and vendor supported standards such as EGTS when present.

## Transport and Connection Context

Connection transport and addressing are the primary configuration items when pointing an ADM700 3G at Plaspy. The ADM700 3G supports domain name addressing and cellular data modes that allow flexible routing to the Plaspy endpoint.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- When configuring the tracker, you can point it to d.plaspy.com or directly to 54.85.159.138 to reach Plaspy ingestion.
- The port used for reporting is 8888 and Plaspy uses the same port for all supported devices.
- Dual SIM and cellular fallback behavior on the ADM700 3G help maintain connectivity to the Plaspy endpoint across networks.
- Use of domain name addressing allows easier server changes without device reprogramming when supported by device firmware.

## Protocol Compatibility Notes

- Firmware revisions can change message variants and available fields; confirm firmware level when validating behavior.
- Hardware revisions and optional I O or interface modules may alter the set of telemetry elements a unit can report.
- Manufacturer side settings and enabled features such as EGTS or open protocol modes affect what Plaspy receives.
- Transport selection between UDP and TCP can influence delivery semantics and should match device configuration and operational needs.
- Offline logging capacity and upload strategies vary by configuration and available cellular throughput.
- Always validate a representative unit end to end to confirm the expected data elements arrive in Plaspy.

## Why Protocol Understanding Matters

A basic understanding of the ADM700 3G communication protocol makes setup, testing, and troubleshooting more efficient and helps maintain long term reliability for fleet operations using Plaspy.

- Ensures the device is pointed to the correct Plaspy endpoint and port so data reaches the platform.
- Helps diagnose connectivity issues by confirming transport mode UDP or TCP and the target address.
- Guides firmware and configuration choices that affect which telemetry fields will be available in Plaspy.
- Assists in planning for offline logging and bulk upload behavior for vehicles with intermittent coverage.
- Supports coordination with manufacturer support when device behavior diverges from expected reporting.

## Why Use Plaspy with This Protocol

The ADM700 3G combines rugged hardware, broad I O and CAN support, and cellular resilience that make it a strong candidate for industrial fleet and heavy equipment tracking. When integrated with Plaspy, organizations gain unified visibility into location, vehicle telemetry, alerts, and historical records to support operations, safety, and maintenance workflows.

Plaspy simplifies integration by providing a single ingestion endpoint at d.plaspy.com (54.85.159.138) on port 8888 that accepts device reports over UDP or TCP. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, reducing the need for manual protocol selection inside the platform. To learn more about Plaspy and how it can work with Neomatica devices visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://neomatica.com/.
