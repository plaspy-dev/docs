---
slug: /teltonika/fmb003/protocol
id: fmb003-protocol
sidebar_label: Protocol
title: Teltonika - FMB003 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Teltonika FMB003 and how the tracker communicates with Plaspy for OBD telemetry and fleet tracking
keywords:
  - Teltonika FMB003 protocol
  - FMB003 GPS protocol
  - Teltonika FMB003 Plaspy
  - FMB003 communication protocol
  - FMB003 tracking protocol
  - Teltonika GPS protocol
  - Plaspy tracker compatibility
  - OBD II GPS tracker protocol
  - vehicle tracking protocol
  - fleet telemetry protocol
---

# Teltonika - FMB003 Protocol

This page provides a public, non-sensitive overview of the communication context for the Teltonika FMB003 when used with Plaspy. It focuses on how the tracker forwards OEM OBD telemetry and position data to a fleet platform, and what role the device reporting protocol plays in making that data usable in Plaspy. Information here is intended to help fleet administrators and integrators understand the protocol-level context without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when data is sent to its endpoint. The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138, with a single port used for all devices on port 8888. Devices may be configured to use either UDP or TCP on port 8888. Exact protocol behavior and available telemetry can vary depending on device firmware, hardware revision, and manufacturer implementation, so always validate device specifics against manufacturer resources when needed.

## Protocol Overview

The FMB003 uses its device reporting protocol to deliver position, vehicle state, and OEM OBD parameters to a remote server so platforms like Plaspy can ingest and present usable telemetry. The protocol governs how the tracker identifies itself, how often it reports, and which telemetry elements are transmitted, enabling Plaspy to correlate incoming data with vehicles, trips, and alerts.

- Enables secure delivery of GPS position and OBD-derived telemetry from the vehicle to Plaspy.
- Carries device identity and session information so Plaspy can associate data with the correct tracker and asset.
- Transports OEM odometer, fuel level, and battery metrics read via the OBD-II interface so Plaspy can show accurate mileage and fuel reports.
- Supports heartbeat and status messages that help Plaspy determine device health and connectivity.
- Serves as the basis for alerts and automations in Plaspy by delivering event-driven data such as ignition or fault conditions where available.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a single, shared endpoint and port and performs automatic detection to interpret the incoming data stream. In most typical deployments there is no need for an operator to manually select a protocol inside Plaspy as long as the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens on the shared port 8888 for device connections and data.
- Devices should be pointed to the Plaspy server domain d.plaspy.com or the provided IP address 54.85.159.138.
- Plaspy automatically interprets the incoming stream and maps it to the appropriate device record when the device is correctly configured.
- Manual protocol selection inside Plaspy is usually unnecessary if the tracker is reporting to the configured Plaspy endpoint.
- Ensuring the device sends the correct identity and reporting messages makes automatic detection straightforward and reliable.

## Transport and Connection Context

Transport and addressing are distinct from protocol details but are essential for successful communication. The FMB003 can be configured to use either of the common transport options supported by cellular trackers, and Plaspy accepts both on the shared port.

- Devices may use UDP or TCP on port 8888 depending on device configuration and network considerations.
- Trackers can be configured to report to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- Plaspy uses the same port for all supported devices to simplify provisioning and firewall rules.
- Cellular connectivity and operator network behavior can affect transport reliability, so choose UDP or TCP based on required delivery guarantees and device firmware recommendations.
- Confirm APN and outbound port rules with your mobile operator and ensure firewall rules allow outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Device firmware versions can change message timing, available parameters, and optional telemetry fields; check firmware release notes for details.
- Hardware revisions or regional variants may expose different OBD parameter sets or cellular bands that affect reported data.
- The choice of UDP versus TCP may influence delivery behavior under poor network conditions; ensure the chosen transport is supported and stable in your environment.
- Some vehicle makes and models may not expose every OEM OBD parameter; availability of odometer or fuel metrics can vary by vehicle.
- Always validate device configuration against the most recent manufacturer documentation for model specific settings and recommended transport types.
- When deploying at scale, test a sample unit with your cellular provider and Plaspy endpoint to confirm end-to-end behavior before mass rollout.

## Why Protocol Understanding Matters

Understanding the communication protocol helps operators achieve reliable device provisioning, faster troubleshooting, and predictable telemetry in Plaspy. Knowing what the tracker sends and how it connects reduces ambiguity when diagnosing missing data, unexpected behavior, or feature gaps.

- Speeds up initial provisioning by ensuring devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 using the intended transport.
- Simplifies troubleshooting when telemetry elements like odometer or fuel level are missing by clarifying whether the issue is vehicle, device, or network related.
- Helps determine whether firmware updates or configuration changes are needed to enable desired telemetry.
- Improves operational reliability by aligning device reporting intervals and heartbeat behavior with Plaspy expectations.
- Supports accurate configuration of alerts and automations in Plaspy by confirming which events and parameters the device will actually provide.

## Why Use Plaspy with This Protocol

Pairing the Teltonika FMB003 with Plaspy provides a practical path to bring OEM OBD telemetry and compact OBD-II installation into fleet workflows. The combination is useful for rental fleets, car sharing, delivery services, and EV monitoring where accurate mileage and fuel or battery metrics matter for billing, maintenance, and operations.

Plaspy’s single endpoint approach simplifies provisioning because all devices report to the same port and Plaspy automatically detects the tracker protocol when data arrives. To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current and device specific protocol and firmware details, verify information with the manufacturer at https://www.teltonika-gps.com/ as protocol behavior and firmware features can change over time.
