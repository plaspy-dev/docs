---
slug: /sinotrack/st_902/protocol
id: st_902-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SinoTrack ST-902 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - SinoTrack ST-902 protocol
  - ST-902 GPS tracker Plaspy
  - SinoTrack ST-902 GPS protocol
  - ST-902 communication protocol
  - SinoTrack OBD2 tracker protocol
  - ST-902 Plaspy compatibility
  - SinoTrack tracking protocol
  - OBD2 GPS tracker protocol
  - ST-902 fleet tracking
  - SinoTrack telemetry integration
---

# SinoTrack - ST-902 Protocol

This page provides a public, non-sensitive overview of the communication protocol context for the SinoTrack ST-902 when used with Plaspy. It explains how the device reports location and alarm events to a Plaspy collector and what role the tracker reporting protocol plays in successful integration and monitoring.

The ST-902 is a plug-and-play OBD2 tracker that reports over GSM/GPRS with SMS fallback and can be configured to send data to a server by IP and port. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The device reporting protocol is the agreed method the ST-902 uses to identify itself, send periodic location updates, and report alarm or OBD‑II telemetry to a server. For Plaspy integration, the protocol determines which telemetry fields are available, how events are signaled, and how the tracker performs remote configuration via SMS or GPRS server settings.

- Enables the ST-902 to send GPS coordinates, timestamps, and alarm events to a remote collector for Plaspy to process.
- Carries OBD2 related telemetry when exposed by the vehicle and enabled by the device configuration.
- Supports primary GPRS reporting with SMS as a fallback channel for configuration and emergency reporting.
- Lets the device be pointed to a server IP or domain so Plaspy can receive inbound telemetry for real time dashboards.
- Governs how identification (for example IMEI) and event flags are included so Plaspy can map data to the correct vehicle.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol so most users do not need to choose a protocol type manually. When an ST-902 is configured to report to Plaspy, the platform inspects incoming data on the collector endpoint and matches it to the appropriate handler.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the configured listener accepts device reports.
- The Plaspy collector listens on port 8888 and all devices supported by Plaspy use this same port.
- Plaspy automatically detects the tracker protocol when the device sends data to the collector.
- In most cases you only need to configure the ST-902 server IP or domain and port; Plaspy will handle the rest.

## Transport and Connection Context

Transport choice and correct server addressing are key for establishing reliable connectivity between the ST-902 and Plaspy. The tracker can be set up to use either UDP or TCP depending on device settings and network behavior, and it must be pointed to the Plaspy collector endpoint for data ingestion.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the Plaspy collector by domain d.plaspy.com or directly to 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device provisioning and firewall configuration.
- GPRS is the primary transport for real time updates and SMS is available for configuration and fallback reporting.
- Ensure SIM APN and network settings are correct so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Protocol behavior can differ between firmware versions; always confirm the device firmware level when validating compatibility.
- Hardware revisions or regional variants may expose different OBD2 PIDs or alarm flag behavior.
- Transport protocol (UDP vs TCP) must be selected to match the device capability and the network environment.
- SMS command support is useful for remote configuration when GPRS is not available or for devices initially set up without direct access.
- Carrier network differences and APN settings can affect delivery and frequency of reports to the Plaspy collector.
- Validate IMEI registration and any local regulatory requirements before large scale deployment.

## Why Protocol Understanding Matters

Understanding how the ST-902 communicates helps ensure a reliable connection to Plaspy, speeds troubleshooting, and clarifies which telemetry and alarms will be available to your fleet workflows.

- Helps determine whether OBD2 vehicle data you need will be reported and how to enable required PIDs.
- Speeds root cause analysis when a device fails to appear in Plaspy by checking transport, APN, and server address.
- Guides decisions about using UDP or TCP based on network reliability and carrier behavior.
- Clarifies how alarm events and remote configuration are conveyed to Plaspy so alerts and automations behave as expected.
- Supports planning for firmware updates, configuration changes, and staged rollouts across vehicle fleets.

## Why Use Plaspy with This Protocol

Using the ST-902 with Plaspy gives organizations a centralized way to view location, alarms, and vehicle telemetry reported from an OBD2 form factor tracker. Plaspy aggregates incoming telemetry, normalizes commonly used fields, and provides dashboards and alerting tools that turn raw reports into actionable visibility for fleet managers.

If you are evaluating deployment options, configuring the ST-902 to report to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 is the recommended path so Plaspy can automatically detect the tracker protocol and begin processing data. Learn more about Plaspy at https://www.plaspy.com and verify the latest device protocol and firmware details at the manufacturer site https://www.sinotrackgps.com/. Protocol support and firmware behavior can change over time, so it is good practice to confirm current device implementation with the official manufacturer documentation.
