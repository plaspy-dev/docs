---
slug: /coban/bn_303f/protocol
id: bn_303f-protocol
sidebar_label: Protocol
title: Coban - BN-303F Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Coban BN-303F and how the device communicates with Plaspy for reliable vehicle tracking
keywords:
  - Coban BN-303F protocol
  - BN-303F GPS protocol
  - Coban BN-303F Plaspy
  - Coban BN-303F tracking
  - GPS tracker protocol
  - vehicle GPS protocol
  - fleet tracking Coban
  - Plaspy compatible devices
  - 2G GPRS tracker
  - vehicle telematics Coban
---

# Coban - BN-303F Protocol

This page describes the public protocol context for using the Coban BN-303F with Plaspy. It focuses on how the BN-303F communicates telemetry, alarms, and status to the Plaspy platform in a way that supports live tracking, historical playback, and event alerts. The BN-303F (also listed as model 303FG) is a compact vehicle-mounted 2G tracker commonly used for fleet management, anti-theft, and rental monitoring, and this page explains the communication context without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ slightly from this general overview. For connectivity, Plaspy accepts device reports at the domain d.plaspy.com and the server IP 54.85.159.138 on port 8888, and devices may be configured to use either UDP or TCP on that same port.

## Protocol Overview

The BN-303F communication protocol enables the device to identify itself, report GNSS positions, and deliver event-driven telemetry to a cloud endpoint like Plaspy. At a high level the protocol defines how messages are initiated, how events such as SOS or ignition changes are reported, and how the platform receives and interprets those messages to provide meaningful telemetry and alerts.

- Enables stable delivery of location and status data from the tracker to Plaspy for live and historical use.
- Carries event notifications such as SOS, geofence breaches, ACC ignition, door open, overspeed, and low battery to trigger platform workflows.
- Supports remote command channels and control signals routed through Plaspy for actions like remote power or fuel cutoff when configured.
- Works over common transport methods supported by the device so the tracker can report to the Plaspy endpoint consistently.
- Allows Plaspy to map incoming telemetry into alarms, tracks, and reports for fleet managers and vehicle owners.

## How Plaspy Detects the Protocol

Plaspy receives telemetry on a shared endpoint and uses automatic detection to recognize supported tracker messages without requiring manual protocol selection by most users. When a BN-303F is configured to report to the Plaspy endpoint, the platform matches the incoming stream to a compatible handler so the device can begin reporting without additional configuration inside Plaspy itself.

- Plaspy accepts incoming connections at d.plaspy.com and 54.85.159.138 on port 8888.
- All Plaspy supported devices use the same port, simplifying device configuration and routing.
- Devices may be set to use TCP or UDP when pointing at the Plaspy endpoint; Plaspy will process the incoming reports regardless of the transport when supported by the device.
- In typical setups the user does not need to manually choose a protocol inside Plaspy if the tracker is correctly configured to report to the Plaspy server.
- If reporting does not begin as expected, verifying device reporting settings and firmware behavior against the manufacturer documentation is the recommended next step.

## Transport and Connection Context

Understanding the transport context helps ensure reliable delivery of GNSS and event data from the BN-303F to Plaspy. The BN-303F supports common telemetry transports and can be configured to point directly to the Plaspy server domain or its IP address on the standard Plaspy port.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and local configuration preferences.
- Devices can be pointed to the Plaspy server by domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy uses a single port for all devices, which simplifies provisioning and firewall rules.
- Transport selection (UDP vs TCP) is typically chosen based on device firmware options, network reliability, and operator preference.
- SMS fallback is commonly supported by devices like the BN-303F for critical alerts or where GPRS coverage is limited, while primary telemetry is sent over 2G GPRS.

## Protocol Compatibility Notes

- Firmware revisions may change message frequency, supported commands, or event reporting behavior; confirm the installed firmware level when validating compatibility.
- Hardware revisions and optional accessories such as fuel sensors or relays can affect available telemetry and remote control features.
- Manufacturer configuration tools or SMS commands may be required to correctly point the device to d.plaspy.com or 54.85.159.138 and to select TCP or UDP on port 8888.
- Some BN-303F units may be marketed under alternate identifiers such as 303FG; always cross check serial numbers and part references.
- Transport selection affects delivery characteristics; TCP provides connection reliability while UDP can be lighter weight depending on network conditions.
- Always validate practical operation by testing live reporting and event handling with the Plaspy endpoint after device provisioning.

## Why Protocol Understanding Matters

A practical understanding of the BN-303F communication protocol helps with initial setup, troubleshooting, and ensuring reliable long term operation when the tracker is used with Plaspy. Knowing how the device reports and what the platform expects reduces integration time and helps fleet operators maintain consistent telemetry.

- Ensures correct device configuration so telemetry and alarms arrive at Plaspy without gaps.
- Helps diagnose connectivity issues by confirming transport, endpoint, and reporting modes.
- Enables informed decisions about firmware updates and accessory compatibility.
- Reduces downtime by clarifying how event-driven reports are delivered and handled in the platform.
- Supports secure and predictable deployment when devices are installed in fleets or high value assets.

## Why Use Plaspy with This Protocol

Using the BN-303F with Plaspy gives organizations a practical combination of a compact telematics endpoint and a cloud platform that ingests and normalizes telemetry for monitoring, alerts, and reporting. Plaspy’s automatic protocol detection and unified port model reduce configuration complexity so devices like the BN-303F can begin reporting with fewer manual steps, while the platform’s dashboards and alerting turn raw device messages into operational insight.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific protocol, firmware behavior, and manufacturer implementation details on the Coban website https://www.coban.net/. Protocol support and firmware features can change over time so checking official manufacturer documentation is recommended when planning deployments.
