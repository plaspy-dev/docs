---
slug: /atrack/ax11/protocol
id: ax11-protocol
sidebar_label: Protocol
title: ATrack - AX11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the ATrack AX11 OBDII tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - ATrack AX11 protocol
  - ATrack AX11 GPS protocol
  - ATrack AX11 communication
  - ATrack AX11 tracking
  - AX11 OBDII tracker
  - ATrack OBDII protocol
  - Plaspy device compatibility
  - Plaspy tracker protocol
  - vehicle telematics protocol
  - fleet GPS protocol
---

# ATrack - AX11 Protocol

This page describes the public protocol context for using the ATrack AX11 OBDII vehicle tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, which connection endpoints and transports are used, and what aspects of the device protocol are relevant for successful integration without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and the manufacturer's implementation, so this page emphasizes practical, non sensitive context while recommending that integrators consult the device maker for device specific details.

## Protocol Overview

The AX11 uses its onboard cellular link and GNSS engine to report position, vehicle bus telemetry, and sensor events to a remote server. The device protocol governs identification, session establishment, and the delivery of usable telemetry to Plaspy so that location, OBD/CAN data, and event alerts can be surfaced in the platform.

- Enables the AX11 to identify itself and maintain a session with the Plaspy endpoint so reports are associated with the correct device.
- Carries GNSS fixes, vehicle-bus telemetry (OBDII and CAN), and motion events for mapping and analytics in Plaspy.
- Supports periodic reporting and event driven messages so the platform receives both regular position updates and high priority alerts.
- Allows local log storage and batch upload workflows to handle intermittent connectivity and ensure data continuity.
- Works over standard TCP or UDP transport so the tracker can adapt to carrier and deployment needs.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint, so users commonly do not need to manually select a protocol inside the platform. Proper device configuration and ensuring the device reports to the Plaspy address and port are the main setup steps.

- Plaspy listens for device reports on the shared endpoint d.plaspy.com and the IP 54.85.159.138 using port 8888.
- The AX11 may be configured to use UDP or TCP on port 8888 depending on device settings and carrier behavior.
- All devices in Plaspy use the same port, which simplifies configuration for fleets with mixed tracker models.
- When the AX11 reports to the Plaspy endpoint, the platform will detect and associate the incoming data stream with the appropriate device record.
- If a device does not appear to be detected, verifying the reporting address, transport selection, and manufacturer configuration is the first troubleshooting step.

## Transport and Connection Context

Connection context clarifies how the AX11 reaches Plaspy and what network settings are typically involved. The device can use either UDP or TCP on the same port and may target the domain or the numeric server address depending on provisioning and network conditions.

- The AX11 may be configured to use UDP or TCP on port 8888 for primary data transport to Plaspy.
- Devices can point to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
- Plaspy uses port 8888 for all supported devices, reducing per device configuration variance across fleets.
- Some deployments use DNS (d.plaspy.com) to allow transparent backend routing, while others use the numeric IP for environments that prefer direct addressing.
- Choose TCP when reliable delivery is required and UDP when lower latency and reduced overhead are preferred, based on device and carrier support.

## Protocol Compatibility Notes

- Firmware revisions can change how particular telemetry fields are reported or which transports are supported; verify the AX11 firmware level when checking compatibility.
- Hardware variants and market specific builds (for example different LTE band variants) may affect which transports and features are available.
- Manufacturer configuration options such as transport selection, server addressing, and report intervals will determine how the device behaves with Plaspy.
- Transport selection (UDP versus TCP) can be impacted by carrier networks; confirm the chosen mode works reliably on your fleet's carriers.
- Plaspy automatically detects the tracker protocol once the device reports to the shared endpoint, but correct device-side addressing and credentials remain essential.
- For the most accurate and up to date device specifics consult the official ATrack documentation and release notes.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps fleet operators and integrators set up devices correctly, troubleshoot reporting issues, and plan for firmware or hardware changes that can affect long term operations.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive reports.
- Helps diagnose transport related issues by knowing whether the device is using UDP or TCP for reporting.
- Guides firmware update decisions when protocol behaviors evolve between releases or hardware revisions.
- Supports effective device provisioning at scale by standardizing server and port settings across a mixed fleet.
- Improves response times for support and incident investigation by narrowing the scope to connection or device config when reports are missing.

## Why Use Plaspy with This Protocol

Using the ATrack AX11 with Plaspy provides a straightforward path to integrate OBDII based vehicle telemetry, GNSS positioning, and motion events into a single fleet management platform. The AX11's plug and play OBDII design, carrier ready LTE connectivity, integrated GNSS, and vehicle-bus support make it well suited for fleet tracking, usage based analytics, and rental or shared mobility monitoring when paired with Plaspy.

To learn more about deploying devices with Plaspy, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information with ATrack at https://www.atrack.com.tw/. Protocol support and firmware behavior can change over time so checking the manufacturer documentation ensures up to date implementation details.
