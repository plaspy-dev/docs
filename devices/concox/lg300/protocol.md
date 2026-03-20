---
slug: /concox/lg300/protocol
id: lg300-protocol
sidebar_label: Protocol
title: Concox - LG300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Concox LG300 integration with Plaspy for GPS tracking and device communication
keywords:
  - Concox LG300 protocol
  - Concox LG300 GPS protocol
  - LG300 protocol
  - LG300 tracking protocol
  - Concox tracker Plaspy
  - Plaspy device compatibility
  - GPS tracker protocol
  - vehicle tracking protocol
  - asset tracker protocol
  - fleet tracking LG300
---

# Concox - LG300 Protocol

This page describes the public protocol context for using the Concox LG300 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, the connection settings Plaspy expects, and practical compatibility considerations for integrations. The intent is to explain the communication surface without exposing private implementation details.

Plaspy uses a shared connection approach across supported devices and automatically detects the tracker protocol when data is sent to the platform. Exact protocol behavior for an LG300 device can vary by firmware version, hardware revision, and manufacturer configuration, so this page provides general guidance and points to official manufacturer resources for device specific details.

## Protocol Overview

The tracker reporting protocol is the mechanism the LG300 uses to send GNSS positions, telemetry, and events to a cloud endpoint like Plaspy. In practice this includes device identity, timestamps, location coordinates, motion and tamper events, battery state, and other configured telemetry that Plaspy ingests for real time tracking and historical reporting.

- Enables the LG300 to establish a connection with the Plaspy ingestion endpoint and transmit position and event data.
- Carries identification information so Plaspy can associate incoming data with the correct device record.
- Encodes telemetry such as motion, tamper, battery level, and sound triggered events for use in alerts and dashboards.
- Supports different transport modes depending on device configuration so data can be routed through the network to Plaspy.
- Provides the basis for configurable reporting cadences that trade telemetry frequency for battery life.

## How Plaspy Detects the Protocol

Plaspy accepts device traffic on a single, shared endpoint and port and automatically determines the reporting protocol used by the tracker. When an LG300 is configured to report to Plaspy, the platform identifies the incoming format and routes telemetry into the matching device pipeline so users typically do not need to select a protocol manually inside Plaspy.

- Plaspy listens for incoming connections to the public ingestion endpoint at d.plaspy.com.
- The platform additionally accepts traffic directed to the server IP 54.85.159.138 when required by device configurations.
- Plaspy uses port 8888 for device reporting and the same port applies to all supported devices.
- Protocol detection is automatic once valid device traffic reaches the Plaspy endpoint, so correct device reporting settings are the key requirement.
- Users should ensure the LG300 is configured to report to the Plaspy host and port to allow automatic detection and ingestion.

## Transport and Connection Context

Connection transport is part of the integration setup. The LG300 may be configured to send data over either UDP or TCP depending on the device firmware and configuration choices. Plaspy supports both transports on the same port so devices can use the transport that best fits network conditions and device behavior.

- Devices may be set to report to the domain d.plaspy.com or to the numeric server address 54.85.159.138.
- Plaspy accepts both UDP and TCP traffic on port 8888 for device reporting.
- All devices supported by Plaspy use the same port for ingestion, simplifying device configuration.
- Network firewalls and APN settings must allow outbound traffic to the Plaspy host on port 8888 for successful reporting.
- If a device supports fallback to SMS or other out of band reporting, those features are configured on the device side and do not change the Plaspy ingestion endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change how a device formats or schedules telemetry; verify device firmware version when troubleshooting.
- Different hardware batches or revisions may expose different configuration menus or transport defaults on the LG300.
- Manufacturer configuration tools or SMS commands may be required to point the device to d.plaspy.com or 54.85.159.138 and to select UDP or TCP on port 8888.
- Some features reported by the device such as audio triggers or tamper sensors may require specific firmware support to appear in the telemetry stream.
- Always validate that the device is successfully sending data to Plaspy by checking the device activity in the platform after configuring the host and port.
- When in doubt, consult the official manufacturer documentation for device specific command syntax and firmware notes.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a reliable connection between the LG300 and Plaspy and improves troubleshooting when devices do not appear in the platform. Knowledge of how the device reports, which transport it uses, and what telemetry it can provide makes it easier to configure devices for long term, low maintenance deployments.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 and using port 8888 so data reaches Plaspy.
- Helps decide whether UDP or TCP is more appropriate for a given network environment or battery strategy.
- Clarifies which telemetry and events the device should deliver to support platform alerts and workflows.
- Aids in diagnosing connectivity issues such as blocked ports, incorrect APN settings, or misconfigured reporting hosts.
- Supports planning for firmware updates and feature availability based on manufacturer notes.

## Why Use Plaspy with This Protocol

Using the Concox LG300 with Plaspy provides organizations with durable, long standby asset tracking and consolidated telemetry in a single platform. Plaspy ingests the LG300 position stream and event data so fleets and asset managers can view real time location, tamper alerts, low battery notifications, and incident audio events alongside other telemetry sources in one operational view.

To learn more about Plaspy and how it supports device integrations like the LG300 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific documentation and firmware notes with the manufacturer at https://www.iconcox.com/.
