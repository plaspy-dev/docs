---
slug: /teltonika/fmc125/protocol
id: fmc125-protocol
sidebar_label: Protocol
title: Teltonika - FMC125 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FMC125 and Plaspy with transport settings detection and compatibility guidance for fleet tracking
keywords:
  - Teltonika FMC125 protocol
  - FMC125 Plaspy compatibility
  - Teltonika FMC125 GPS protocol
  - FMC125 communication protocol
  - Teltonika fleet tracker protocol
  - FMC125 tracking protocol
  - Plaspy device protocol
  - Teltonika FMC125 integration
  - GPS tracker protocol Plaspy
  - FMC125 telemetry compatibility
---

# Teltonika - FMC125 Protocol

This page provides the public protocol context for using the Teltonika FMC125 tracker with Plaspy. It focuses on how the device communicates usable telemetry and sensor events to the Plaspy platform, and what to expect when configuring the tracker to report to Plaspy. The content avoids private implementation details while explaining the transport and detection context needed for reliable integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page concentrates on public, non sensitive information and practical guidance for integrating FMC125 devices with Plaspy.

## Protocol Overview

The FMC125 implements a device reporting protocol that carries GNSS positions, telemetry, sensor events and serial data from vehicle peripherals to a backend server. When used with Plaspy the protocol enables the tracker to identify itself, deliver position and telemetry updates, and transmit inputs such as impulse pulses and driver identification events so those signals can be converted into maps, alerts, and reports.

- Transports GNSS position and movement data for real time tracking and historical traces.
- Sends impulse input and sensor events for fuel monitoring and driver identification.
- Streams serial telemetry from RS232 and RS485 connected peripherals into the platform for richer analytics.
- Carries camera or event markers from paired video telematics units for correlated evidence and event review.
- Conveys device identity and status so Plaspy can associate incoming messages with the correct vehicle and telemetry profile.

## How Plaspy Detects the Protocol

Plaspy receives device connections at a shared ingestion endpoint and port and determines the appropriate device protocol automatically. In practice this means devices configured to report to the Plaspy endpoint will typically not require manual protocol selection inside Plaspy, provided the tracker is set to send data to the correct address and transport.

- Plaspy uses a single shared port for all devices and performs automatic protocol detection on incoming traffic.
- Devices that are configured to report to the Plaspy endpoint are normally detected without manual intervention.
- Proper device identification on the first messages helps Plaspy map telemetry to the correct vehicle record.
- If a tracker is not detected automatically, verifying transport settings and device identity fields often resolves the issue.
- Plaspy ingests position, impulse counts, RFID and 1 wire events, and serial telemetry when those signals are present in device reports.

## Transport and Connection Context

Transport settings determine how the FMC125 delivers its telemetry to Plaspy. The FMC125 supports cellular uplink and can be configured to use either UDP or TCP depending on device support and deployment requirements. For Plaspy compatibility use the shared Plaspy endpoint and port when configuring the tracker.

- Devices may be configured to point to d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- The server port used by Plaspy for device reporting is 8888 and that same port is used for all Plaspy supported devices.
- The FMC125 can be set to use UDP or TCP transport on port 8888 according to network and reliability needs.
- Dual SIM and regional module choices on the FMC125 help maintain cellular coverage and uptime for telemetry uplink.
- Confirm APN and cellular settings on the tracker so it can establish a data session and reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change how particular telemetry fields are reported or how optional peripherals are handled.
- Hardware revisions and regional variants may differ in available interfaces or cellular band support.
- Serial integration behavior for RS232 and RS485 accessories can vary with manufacturer configuration and peripheral firmware.
- Transport selection between UDP and TCP can affect message delivery behavior and should be chosen to match deployment needs.
- Dual SIM behavior and failover policies are configured on the device and may alter how quickly data resumes after a network change.
- Always validate the specific capabilities of a purchased unit against the vendor documentation and release notes.

## Why Protocol Understanding Matters

Understanding the FMC125 reporting protocol helps fleet and IT teams set up devices correctly, interpret incoming telemetry, and troubleshoot connectivity or data mapping problems. A clear view of the communication context reduces configuration errors, improves reliability, and speeds recovery when issues occur.

- Ensures correct transport and endpoint configuration so devices reach Plaspy reliably.
- Helps map impulse counts, RFID events, and serial telemetry to the correct fields in Plaspy dashboards.
- Aids in troubleshooting connectivity by narrowing issues to transport, APN, or device firmware.
- Supports planning for regional cellular coverage and Dual SIM failover in production deployments.
- Enables predictable handling of vehicle state events and integration with automation rules in Plaspy.

## Why Use Plaspy with This Protocol

Using the Teltonika FMC125 with Plaspy gives fleet operators a practical path from raw vehicle signals to operational insight. The FMC125’s LTE Cat 1 connectivity with 2G fallback, Dual SIM resilience, and serial interface options make it well suited to collect location, fuel, driver ID, and camera event data. Plaspy ingests that telemetry into maps, alerts, and reports to support dispatching, fuel analytics, and anti theft workflows.

To learn more about Plaspy and how it works with devices like the FMC125 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest tracker specific information and firmware notes on the manufacturer site https://www.teltonika-gps.com/ before deploying at scale.
