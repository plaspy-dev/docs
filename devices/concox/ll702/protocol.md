---
slug: /concox/ll702/protocol
id: ll702-protocol
sidebar_label: Protocol
title: Concox - LL702 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Concox LL702 tracker with Plaspy using shared Plaspy connection settings
keywords:
  - Concox LL702
  - LL702 GPS tracker protocol
  - Concox LL702 Plaspy
  - LL702 communication protocol
  - LL702 tracking protocol
  - Concox tracker protocol
  - GPS tracker Plaspy compatibility
  - asset tracker LL702
  - LL702 telemetry reporting
  - fleet tracking Concox
---

# Concox - LL702 Protocol

This page provides the public protocol context for using the Concox LL702 tracker with Plaspy. It summarizes how the device communicates with Plaspy, what role the device reporting protocol plays in delivering usable location and event data, and which connection settings are shared across Plaspy supported devices. It is intended as a protocol overview and not as a replacement for manufacturer documentation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the LL702 can vary with firmware version, hardware revision, and manufacturer implementation, so final configuration and edge cases should be verified with Concox documentation and any firmware release notes.

## Protocol Overview

The tracker protocol is the set of rules the LL702 uses to send location updates, alerts, and telemetry to a remote server such as Plaspy. In practice, the protocol determines how the device identifies itself, how events are reported, and which messages Plaspy needs to interpret device state and location.

- Enables the LL702 to send position fixes, multi source GNSS status, and event indicators to Plaspy for mapping and alerting.
- Carries auxiliary event information such as tamper, low battery, geofence transitions, and vibration or fall alerts that Plaspy surfaces to users.
- Provides identifiers and session context so Plaspy can associate incoming messages with the correct asset record.
- Allows the LL702 to buffer data locally during outages and upload queued fixes when a connection is restored.
- Serves as the contract between device behavior and Plaspy parsing so telemetry appears correctly in tracking timelines and reports.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and uses automatic detection to match incoming messages to a known tracker behavior profile. When an LL702 is configured to report to Plaspy, users typically do not need to pick a protocol manually inside the platform if the device is correctly pointed at the Plaspy endpoint.

- Plaspy’s reporting endpoint is reachable at d.plaspy.com and at the public IP 54.85.159.138 on the shared port 8888.
- All devices supported by Plaspy use the same port, which simplifies device configuration and network rules.
- Plaspy automatically detects the tracker protocol from the incoming device traffic once the device reports to the Plaspy endpoint.
- In most deployments the device must be configured to send its outbound reports to the Plaspy host so detection and association occur without manual protocol selection.
- If a device does not appear, verify the device reporting target, transport setting, and that the SIM and APN allow outbound connections.

## Transport and Connection Context

Connection context covers how the LL702 reaches the Plaspy servers and which transports the device may use in the field. The LL702 supports cellular reporting with fallback behavior to maintain connectivity across coverage areas.

- The LL702 may be configured to use UDP or TCP transport to send reports to Plaspy on port 8888 depending on device support and configuration.
- Devices can be pointed to the domain d.plaspy.com or the IP 54.85.159.138 as the target server for reporting.
- Plaspy uses port 8888 for all devices, so firewall and NAT rules can be simplified by allowing outbound traffic to that port.
- Choose UDP when the device or network requires lightweight transport, or TCP where session reliability is preferred and supported by the device.
- Cellular behavior such as fallback between LTE Cat 1 and 2G depends on the unit firmware and network conditions and does not change the shared Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions and hardware batches can change message timing, optional fields, or event behavior; verify compatibility after firmware upgrades.
- Manufacturer configuration options may allow selecting UDP or TCP and the destination host; ensure the device reports to d.plaspy.com or 54.85.159.138 on port 8888.
- The LL702’s multi source positioning and event reporting capability depends on enabled sensors and working mode settings in the device firmware.
- Network conditions and SIM APN settings affect the device ability to reach Plaspy; ensure the SIM and APN allow outbound IP or domain connections.
- When integrating many devices, use a small pilot group to confirm behavior before mass deployment to catch any model specific differences.
- Consult Concox official documentation for model specific configuration steps and firmware notes to validate behavior for your deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure device messages arrive at Plaspy in a way that supports accurate location, timely alerts, and efficient data use. Even when a platform automatically detects the protocol, knowledge of expected device behavior reduces configuration friction and speeds troubleshooting.

- Helps diagnose why position updates or events are missing by focusing on transport, reporting target, and working mode.
- Informs choices about power saving modes versus reporting cadence to balance battery life and real time visibility.
- Clarifies how sensor events such as tamper or vibration should appear in Plaspy and which device settings control them.
- Guides network configuration and firewall rules by knowing the required destination host and port for outbound traffic.
- Supports planning for large scale rollouts by anticipating firmware variation and test needs.

## Why Use Plaspy with This Protocol

When paired with Plaspy, the LL702’s long standby life, multi source positioning, and event set provide a practical foundation for asset monitoring, anti theft workflows, and fleet oversight. Plaspy ingests the LL702’s location and event messages and presents them in dashboards, alerts, and historical reports to support operational decisions.

Plaspy’s shared endpoint approach and automatic protocol detection reduce setup complexity for large deployments while preserving the ability to surface the LL702’s telemetry and alerts. To learn more about Plaspy and how it can be used with devices like the Concox LL702 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer at https://www.iconcox.com/ as these items can change over time.
