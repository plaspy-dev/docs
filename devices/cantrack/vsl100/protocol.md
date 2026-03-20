---
slug: /cantrack/vsl100/protocol
id: vsl100-protocol
sidebar_label: Protocol
title: CanTrack - VSL100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the CanTrack VSL100 and how it communicates with Plaspy for fleet tracking and speed governance
keywords:
  - CanTrack VSL100 protocol
  - CanTrack VSL100 GPS protocol
  - CanTrack VSL100 protocol Plaspy
  - VSL100 communication protocol
  - VSL100 tracking protocol
  - CanTrack Plaspy compatibility
  - VSL100 speed limiter protocol
  - fleet tracking protocol VSL100
  - vehicle tracker VSL100 protocol
  - Plaspy tracker compatibility
---

# CanTrack - VSL100 Protocol

This page summarizes the public protocol context for integrating the CanTrack VSL100 with the Plaspy platform. It focuses on how the device reports location, status, and enforcement events to Plaspy without exposing manufacturer private internals. The VSL100 is a combined GPS tracker and speed governor designed for heavy vehicles and compliance workflows, and this guide explains the communication context that matters for successful integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and available messages can vary by VSL100 firmware version, hardware revision, and manufacturer implementation, so treat this page as protocol context rather than a complete reference manual.

## Protocol Overview

The protocol that the VSL100 uses to report to a backend like Plaspy is the device reporting and command channel that carries GNSS position, status flags, and event records such as speed violations and tamper alerts. It enables the tracker to identify itself to Plaspy and stream the telemetry operators need for monitoring, alerting, and audit trails.

- Allows the VSL100 to send periodic location updates and real time telemetry to Plaspy for visualization and logging.
- Transmits event notifications such as over speed, tamper detection, anti-jammer alerts, and geofence triggers that Plaspy surfaces as alerts.
- Carries device status and diagnostics so Plaspy can show battery, signal, and health indicators alongside location.
- Supports remote configuration and server addressing so the VSL100 can be pointed to the Plaspy endpoint for automated ingestion.
- Enables secure, centralized collection of historical and live telemetry for reporting and compliance auditing.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device connections on a shared endpoint and automatically detect the tracker protocol used by a device when it reports to the platform. In most cases you do not need to select a protocol in Plaspy if the VSL100 is configured to report to the correct Plaspy endpoint.

- Plaspy server domain is d.plaspy.com.
- Plaspy server IP is 54.85.159.138.
- The port is 8888 and this same port is used for all devices supported by Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network setup.
- If the VSL100 is correctly pointed to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and processes incoming telemetry.
- Typical setup workflows involve configuring the VSL100 to report to the Plaspy domain or IP and verifying that data arrives in Plaspy dashboards.

## Transport and Connection Context

Connection choices such as TCP versus UDP and the server address are transport layer details that determine how the VSL100 reaches Plaspy. Keeping those settings consistent across your fleet simplifies onboarding and reduces configuration errors.

- The VSL100 may be set to use either UDP or TCP transport on port 8888 based on the device configuration and network conditions.
- Devices can point to the Plaspy endpoint using d.plaspy.com or the Plaspy server IP 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices, so port configuration is consistent across different tracker models.
- Choosing TCP may be preferred for reliable delivery of critical event records while UDP can reduce latency for high frequency updates depending on network reliability.
- Ensure any firewalls or carrier APN settings allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware revisions on the VSL100 can change available message types and behavior; verify firmware release notes when troubleshooting.
- Hardware revisions or optional modules may alter which events or interfaces are present on a specific VSL100 unit.
- The transport mode selected on the device matters; confirm whether the unit is set to TCP or UDP and that it matches your network requirements.
- Manufacturer SMS or PC tool configuration methods can be used to point the device to the Plaspy endpoint if GPRS provisioning is not available.
- Some optional features such as the mini-printer event or USB historical download are device capabilities that complement telemetry but do not change the reporting endpoint.
- Always validate compatibility and configuration steps against the official CanTrack documentation for your VSL100 serial and firmware version.

## Why Protocol Understanding Matters

Understanding how the VSL100 communicates with Plaspy helps operators configure devices correctly, accelerate troubleshooting, and preserve reliable telemetry for safety and compliance reporting.

- Speeds initial setup by ensuring the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 using the intended transport protocol.
- Reduces time spent diagnosing lost telemetry by confirming TCP or UDP selection and basic network reachability.
- Helps map device events such as speed violations, tamper alerts, and anti-jammer notices to Plaspy alert types and reporting fields.
- Informs operational decisions about polling frequency, data retention, and how to combine onboard printing with centralized audit trails.
- Supports staged rollouts by clarifying which firmware or hardware variants require special configuration to work reliably with Plaspy.

## Why Use Plaspy with This Protocol

Pairing the CanTrack VSL100 with Plaspy gives fleet operators a unified view of high accuracy location data together with enforceable speed governance and tamper detection. That combination is useful for organizations that need real time visibility, automated alerts for compliance events, and evidence grade records for audits and incident handling.

Plaspy’s centralized ingestion of VSL100 telemetry makes it practical to monitor fleets at scale while keeping configuration simple: point devices to d.plaspy.com or 54.85.159.138 on port 8888, and Plaspy will automatically detect the tracker protocol for supported units. To learn more about how Plaspy can work with the VSL100 and other trackers, visit https://www.plaspy.com. Protocol support and firmware behavior can change over time so please verify the latest device specific protocol and firmware details on the manufacturer website https://www.cantrackgps.com/ before large scale deployments.
