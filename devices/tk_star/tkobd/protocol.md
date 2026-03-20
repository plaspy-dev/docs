---
slug: /tk_star/tkobd/protocol
id: tkobd-protocol
sidebar_label: Protocol
title: TK-Star - TKOBD Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for TK Star TKOBD GPS tracker and Plaspy compatibility for reliable device reporting and integration
keywords:
  - TK Star TKOBD protocol
  - TK Star TKOBD GPS protocol
  - TKOBD communication protocol
  - TKOBD tracking protocol
  - TK Star tracker Plaspy compatibility
  - OBD GPS tracker protocol
  - vehicle tracking TKOBD
  - Plaspy device integration
  - fleet management TKOBD
  - TKOBD telemetry reporting
---

# TK-Star - TKOBD Protocol

This page documents the public protocol context for using the TK-Star TKOBD tracker with Plaspy. It focuses on how the device communicates with Plaspy servers at a high level, what connection settings are commonly used, and which aspects of the communication flow matter when integrating the device into the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides public, non sensitive guidance and practical compatibility notes rather than device internals.

## Protocol Overview

The TKOBD device reports location and status updates to a remote server so Plaspy can ingest and display live positions, alerts, and historical routes. The tracker uses its cellular modem and multi source positioning (GPS, GLONASS, BDS, LBS, Wi Fi) to produce location data that is transmitted to Plaspy for mapping and alerting.

- The protocol defines how the tracker packages identification, location, status, and alarm events for delivery to a backend.
- Reporting frequency and event triggers determine how often the device sends updates for live tracking and alerts.
- Identification fields in reports allow Plaspy to associate incoming data with the correct device and account.
- Telemetry and alarm records enable Plaspy to present live notifications, route history, and status dashboards to users.
- The communication protocol works over standard transport connections so devices can reach Plaspy servers in mobile networks.

## How Plaspy Detects the Protocol

Plaspy is built to receive data from many device models at a single shared endpoint and to identify the device protocol automatically when a device connects and transmits. In most cases, no manual protocol selection is required in Plaspy if the device is configured to report to the Plaspy server.

- Plaspy uses a single endpoint and port for device reporting and detects the incoming tracker protocol automatically.
- Users typically configure the device to report to d.plaspy.com or to the Plaspy server IP and the device will be recognized by Plaspy.
- When a properly configured device begins sending data, Plaspy maps the incoming stream to the correct device record and parsing logic.
- Automatic detection reduces setup complexity for fleets that deploy many different compatible tracker models.
- If a device does not appear in Plaspy, review device reporting destination and firmware settings before adjusting platform configuration.

## Transport and Connection Context

The TKOBD can deliver its reports over common mobile data transports and is commonly pointed at the Plaspy reporting endpoint. The device may be configured to use either UDP or TCP depending on device settings and network conditions.

- Devices configured to report to Plaspy may use UDP or TCP on port 8888.
- The Plaspy server domain to use is d.plaspy.com and the public server IP is 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port for reporting, which simplifies device provisioning and server reachability checks.
- Transport selection (UDP versus TCP) can affect delivery behavior in lossy cellular networks and is generally chosen per device capability and deployment needs.
- Ensure APN and cellular data settings on the SIM are correct so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware differences can change message contents, available events, or reporting cadence across production batches.
- Hardware revisions and regional variants may affect GNSS performance or available telemetry channels.
- Manufacturer side settings or custom configurations can alter which transport protocol the device uses by default.
- Verify the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 when diagnosing connectivity issues.
- Plaspy automatically detects protocol but accurate device identification relies on correct device identification fields in reports.
- Consult official manufacturer documentation for firmware specific behaviors that impact integration.

## Why Protocol Understanding Matters

Understanding how the tracker communicates helps ensure reliable reporting, faster troubleshooting, and predictable fleet behavior when devices are managed through Plaspy. Knowing what the device sends and how it reaches Plaspy makes it easier to validate installations and resolve intermittent issues.

- Confirms that devices are correctly pointed to the Plaspy endpoint so data arrives at d.plaspy.com on port 8888.
- Helps you choose UDP or TCP based on deployment needs and cellular network characteristics.
- Aids in interpreting telemetry and alarm timing so alerts in Plaspy reflect real world events.
- Speeds troubleshooting by narrowing the issue to network, device configuration, or firmware when reports are missing.
- Guides firmware update planning when changes to message content could affect Plaspy integration.

## Why Use Plaspy with This Protocol

Using the TK-Star TKOBD with Plaspy gives fleet operators and vehicle owners a straightforward path to centralized tracking, real time alerts, and historical route review without complex per device configuration. The OBD plug in form factor simplifies installation while Plaspy aggregates telemetry and alarms into a single operational view for dispatch, safety, and recovery workflows.

To learn more about Plaspy and how it integrates with GPS trackers like the TKOBD visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and specific device implementation details can change over time; verify the latest device documentation and firmware notes with the manufacturer at https://www.tk-star.com/ before finalizing deployments.
