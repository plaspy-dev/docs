---
slug: /trackerking/dk27/protocol
id: dk27-protocol
sidebar_label: Protocol
title: TrackerKing - DK27 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TrackerKing DK27 showing how the tracker communicates with Plaspy using shared connection settings
keywords:
  - TrackerKing DK27 protocol
  - TrackerKing DK27 GPS protocol
  - TrackerKing DK27 protocol for Plaspy
  - TrackerKing DK27 communication protocol
  - TrackerKing DK27 tracking protocol
  - DK27 Plaspy integration
  - DK27 GPS tracker compatibility
  - Plaspy compatible trackers
  - DK27 telemetry integration
  - TrackerKing portable tracker
---

# TrackerKing - DK27 Protocol

This page provides a public protocol overview for using the TrackerKing DK27 with Plaspy. It explains the high level communication role the tracker plays when reporting location and events to the Plaspy platform and outlines the connection settings and operational context needed for reliable integration without exposing sensitive implementation details.

The DK27 is a compact portable GPS tracker designed for anti loss and personal asset monitoring, and it reports location, motion, SOS and other events over cellular networks to Plaspy. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For device specific details consult the TrackerKing documentation as needed.

## Protocol Overview

The DK27 communication protocol is the mechanism by which the device identifies itself, reports telemetry and delivers event notifications to a remote server. For integration with Plaspy this protocol enables usable location, motion and alarm data to be ingested into maps, dashboards and alerting workflows.

- Enables the DK27 to send position updates, motion and vibration alerts, SOS events, and battery or power state to the platform.
- Provides device identification and session context so Plaspy can associate incoming messages to the correct asset record.
- Carries telemetry that allows Plaspy to build live tracking, route history, and time series event logs.
- Supports event-driven alerts such as geofence breaches, SOS activations, and low battery notifications that Plaspy can surface to users.
- Works over standard transport channels so the tracker can report to the Plaspy endpoint for centralized processing.

## How Plaspy Detects the Protocol

Plaspy receives incoming telemetry at a single shared endpoint and automatically detects the device protocol so users usually do not need to select a protocol manually inside the platform. Proper device configuration to point to the Plaspy endpoint is the key step for automatic handling.

- Plaspy listens on a shared server endpoint at d.plaspy.com and the public IP 54.85.159.138.
- All Plaspy devices use the same port so a single endpoint configuration simplifies device setup.
- Plaspy automatically detects the tracker protocol for properly addressed traffic to the shared endpoint.
- When the DK27 is configured to report to the Plaspy endpoint, incoming messages are associated to the DK27 device record by its reported identifier.
- Users normally only need to configure the device to report to d.plaspy.com or 54.85.159.138 on the agreed port to enable automatic detection.

## Transport and Connection Context

Connection choices such as TCP or UDP and the target hostname or IP are part of the transport layer context that determines how the DK27 reaches Plaspy. The DK27 supports cellular reporting and can be configured to use either UDP or TCP on the shared Plaspy port based on device capability and user preference.

- Devices may be configured to use UDP or TCP to communicate with Plaspy depending on DK27 settings and network considerations.
- Plaspy accepts connections to the domain d.plaspy.com or directly to the public IP 54.85.159.138.
- The Plaspy shared port for all devices is 8888 and the DK27 may use this port for both UDP and TCP connections.
- Using the domain name d.plaspy.com allows DNS based routing and platform side updates without reconfiguring devices if the endpoint changes.
- Confirm mobile network data connectivity and APN settings on the DK27 to ensure telemetry can reach the Plaspy endpoint reliably.

## Protocol Compatibility Notes

- Firmware revisions can change how the DK27 formats certain messages or which events it reports, so behavior may differ between firmware versions.
- Hardware revisions and optional features like voice monitoring or power saving modes may affect what telemetry is available to Plaspy.
- Transport selection matters: choose UDP or TCP according to device settings, network reliability, and any carrier restrictions.
- Manufacturer configuration interfaces or companion apps are the recommended way to point the DK27 at Plaspy endpoints.
- Always validate that device identifiers reported by the DK27 match the records configured in Plaspy to avoid misattribution.
- Where possible check release notes or change logs from TrackerKing for firmware specific protocol changes.

## Why Protocol Understanding Matters

Understanding the DK27 communication protocol helps ensure a smooth setup with Plaspy and reduces time spent troubleshooting connectivity or event delivery issues. Knowing what the device sends and how it identifies itself allows administrators to verify correct telemetry flow and maintain reliable tracking operations.

- Speeds up initial provisioning by confirming the correct endpoint and transport are in use.
- Helps diagnose missing events or position updates by narrowing issues to network, configuration, or firmware causes.
- Guides decisions about transport selection and power saving settings to balance timeliness and battery life.
- Improves confidence that SOS, motion, and geofence events will be captured and routed into Plaspy alerting pipelines.
- Supports ongoing maintenance by indicating when a firmware update or configuration change might affect integration.

## Why Use Plaspy with This Protocol

Using the DK27 with Plaspy provides organizations and individuals with a straightforward path to consolidate location, alerts, and event history into a single management environment. The DK27 is suited to quick deployments and portable asset use cases where battery powered, no wiring solutions are required, and Plaspy takes the device telemetry and turns it into operational visibility for monitoring and response.

Plaspy’s centralized ingestion at d.plaspy.com and 54.85.159.138 on the shared port 8888, combined with automatic protocol detection, reduces configuration complexity for fleets and assets that use the DK27. To learn more about Plaspy and how it can unify DK27 telemetry and alerts, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest DK27 device specific information on the TrackerKing website https://trackerking.cn/.
