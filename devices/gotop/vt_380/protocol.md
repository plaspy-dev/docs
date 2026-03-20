---
slug: /gotop/vt_380/protocol
id: vt_380-protocol
sidebar_label: Protocol
title: GOTOP - VT-380 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP VT-380 and Plaspy compatibility including connection settings and integration notes
keywords:
  - GOTOP VT-380 protocol
  - GOTOP VT-380 GPS protocol
  - GOTOP VT-380 Plaspy compatibility
  - GOTOP tracker protocol
  - VT-380 tracking protocol
  - VT-380 communication protocol
  - Plaspy device integration
  - vehicle GPS tracker protocol
  - fleet tracking VT-380
  - VT-380 GPRS protocol
---

# GOTOP - VT-380 Protocol

This page provides a public, non sensitive overview of the communication context for using the GOTOP VT-380 vehicle tracker with the Plaspy platform. It summarizes how the VT-380 reports telemetry and events to the cloud, what role the device reporting protocol plays in integration, and the shared connection settings you can use to point the device at Plaspy for live tracking and historical uploads.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while specific packet behavior and options can vary by VT-380 firmware version, hardware revision, and manufacturer implementation. For network connection, the VT-380 supports GPRS with TCP or UDP transport and SMS as a fallback, and Plaspy accepts reports from the VT-380 using the public Plaspy endpoint settings described below.

## Protocol Overview

The communication protocol used by the VT-380 is the mechanism by which the tracker communicates identity, location, alarms and sensor telemetry to Plaspy and any configured servers. In general terms, this protocol enables the device to report periodic position updates, event-driven messages, and bulk uploads of stored waypoints after offline periods so that Plaspy can map those records to a vehicle and present them in dashboards and reports.

- Transports vehicle position, timestamp and basic sensor data from VT-380 to the backend for mapping and analysis.
- Carries alarm and event notifications such as SOS, geo-fence, movement, speeding and power-cut for immediate alerting.
- Supports offline logging and later bulk upload so route history is preserved when GPRS is unavailable.
- Works over TCP or UDP for GPRS reporting, with SMS often used as a fallback channel when data connectivity is not present.
- Enables Plaspy to ingest telemetry and correlate it with vehicle records for live location, historical playback and rule based alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and port and automatically determines the tracker protocol used by the reporting device. In most deployments you do not need to select a specific protocol inside Plaspy if the VT-380 is configured to report to the Plaspy endpoint using the correct host and transport.

- Plaspy server domain is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 as an alternative address for device configuration.
- The port is 8888 and all Plaspy devices use the same port for reporting.
- The VT-380 may be configured to use UDP or TCP on port 8888 depending on your device settings.
- Plaspy automatically detects the tracker protocol once telemetry arrives at the shared endpoint.
- Typically no manual protocol selection is required inside Plaspy when the VT-380 points to the Plaspy endpoint.

## Transport and Connection Context

Connection setup for the VT-380 focuses on pointing the device at the Plaspy endpoint using the appropriate transport, APN and reporting parameters. The VT-380 supports GPRS reporting over both TCP and UDP and falls back to SMS when configured to do so. For Plaspy ingest, the device should be configured to send data to the Plaspy host and port below.

- Devices may point to d.plaspy.com or directly to 54.85.159.138 when configuring the server address.
- The device may be configured using UDP or TCP on port 8888 depending on the VT-380 firmware and desired behavior.
- All devices in Plaspy use the same port 8888 which simplifies device configuration across fleets.
- GPRS is the primary channel for real time reporting, with SMS as fallback for alert messages or minimal telemetry in some setups.
- When GPRS is unavailable, the VT-380 stores waypoints in internal flash and uploads them to the server after reconnection.

## Protocol Compatibility Notes

- VT-380 compatibility with Plaspy is based on the device ability to report telemetry to the Plaspy endpoint; firmware variations can change available features and message formats.
- Hardware revisions or regional firmware builds may introduce differences in supported transports, default reporting intervals, or alarm payloads.
- Transport choice (TCP vs UDP) can affect delivery behavior and should be selected based on network conditions and the VT-380 firmware capability.
- SMS fallback behavior is useful for critical alerts but has different delivery semantics and should not be relied on for continuous telemetry.
- Validate device configuration settings, APN, and server address using the latest VT-380 user manual and manufacturer documentation.
- Confirm that the VT-380 firmware supports bulk upload of stored waypoints if your deployment relies on long offline logging before upload.

## Why Protocol Understanding Matters

Understanding how the VT-380 communicates with Plaspy helps ensure correct setup, reliable reporting, and faster troubleshooting when connectivity or data issues arise. Awareness of protocol and transport behavior lets operators configure reporting intervals, event filters and recovery strategies that match operational needs.

- Ensures devices are pointed to the correct Plaspy endpoint and port for reliable telemetry ingestion.
- Helps select the appropriate transport (TCP or UDP) based on network reliability and expected delivery characteristics.
- Aids in diagnosing gaps in data by recognizing when stored waypoint uploads should occur after reconnection.
- Supports proper configuration of alarms and input wiring so events map correctly into Plaspy alerts.
- Improves long term fleet reliability by aligning firmware settings, reporting policies and APN configuration with operational requirements.

## Why Use Plaspy with This Protocol

Using the GOTOP VT-380 with Plaspy gives fleet operators a straightforward path to centralize vehicle tracking, event alerting and historical route analysis. The VT-380’s robust GNSS performance, comprehensive alarms and internal logging combine with Plaspy’s ingestion and dashboarding to offer an operational view suitable for dispatch, security and compliance workflows.

To learn more about Plaspy and how devices like the VT-380 integrate with the platform, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and configuration instructions, please verify the latest information on the manufacturer site https://www.gotop.cc/ as implementations and firmware behavior can change over time.
