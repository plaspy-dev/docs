---
slug: /gotop/g08_4g/protocol
id: g08_4g-protocol
sidebar_label: Protocol
title: GOTOP - G08-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP G08-4G GPS tracker compatibility with Plaspy for vehicle tracking and telemetry
keywords:
  - GOTOP G08-4G protocol
  - GOTOP G08-4G GPS protocol
  - GOTOP G08-4G Plaspy
  - GOTOP protocol
  - G08-4G tracker
  - OBD GPS tracker protocol
  - fleet tracking protocol
  - vehicle tracking compatibility
  - 4G GPS tracker protocol
  - Plaspy device protocol
---

# GOTOP - G08-4G Protocol

This page provides a public, high level overview of the communication context for using the GOTOP G08-4G OBD tracker with Plaspy. It focuses on how the device reports location, status, and alarms to the Plaspy platform and what aspects of the tracker reporting behavior matter for successful integration and operation. The guidance here is intended for fleet managers, integrators, and technical users who need to understand protocol context without exposing sensitive implementation details.

The G08-4G is a plug and play OBD-II tracker with integrated GPS and cellular antennas and 4G LTE connectivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint; exact message behavior and available fields can vary by firmware version, hardware revision, and manufacturer configuration. Users should treat this page as a protocol orientation rather than a firmware specific command reference.

## Protocol Overview

The protocol used by the G08-4G defines how the device conveys identity, position, telemetry, and alarm events to a remote server so that Plaspy can present live tracking, alerts, and historical routes. At a high level the communication protocol ensures the device can establish transport connectivity, identify itself, and send periodic or event driven messages that map to Plaspy telemetry fields.

- Enables the tracker to report GPS position and vehicle status to Plaspy for real time display and logging.
- Carries alarm and event notifications such as geofence triggers, vibration or movement alerts, and power loss indicators.
- Conveys identifiers and telemetry that allow Plaspy to associate messages to the correct device record.
- Supports both continuous periodic reporting and event driven messages for efficient network use.
- Permits fallback reporting modes such as SMS when data connectivity is unavailable.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a shared endpoint and port and automatically detects the tracker protocol based on the messages the device sends. In most cases a properly configured G08-4G that reports to the Plaspy endpoint will be recognized without manual protocol selection by the user.

- Plaspy exposes a single public endpoint for device reporting at d.plaspy.com and a public server IP of 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when the device connects to that endpoint.
- The device may be set to report to the Plaspy endpoint over UDP or TCP depending on device configuration.
- When the G08-4G is configured to report to d.plaspy.com on the shared port, Plaspy maps incoming messages to the device profile.
- Manual protocol selection inside Plaspy is usually unnecessary if the tracker is sending expected identification and telemetry.

## Transport and Connection Context

Connection context describes how the G08-4G reaches Plaspy rather than the detailed message format. The tracker supports IP data reporting over cellular networks and can use different transport layers. Understanding the transport options helps ensure devices are pointed at the correct Plaspy endpoint and that network rules permit device connections.

- The device may be configured to use either UDP or TCP on port 8888 depending on device firmware and settings.
- Plaspy’s reporting endpoint is available at d.plaspy.com and the corresponding server IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so a single outbound port is sufficient for most deployments.
- Some device features can fall back to SMS reporting when cellular data is unavailable; SMS is a separate path and handled by the device and Plaspy as appropriate.
- Ensure vehicle or operator network firewalls allow outbound connectivity to d.plaspy.com on port 8888 for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message fields, reporting intervals, and available telemetry; verify the device firmware version when troubleshooting.
- Hardware revisions or regional module variants may affect supported cellular bands and fallback behavior.
- Transport choice (UDP versus TCP) can be configured on the device and may impact delivery characteristics in certain networks.
- SMS reporting is a complementary path but may not carry the same full telemetry set as IP data reports.
- Plaspy’s automatic detection reduces the need to select a protocol manually, but correct device endpoint configuration is required.
- Always validate device behavior against GOTOP documentation for the specific model and firmware you are using.

## Why Protocol Understanding Matters

Knowing how the G08-4G communicates with Plaspy improves setup success, troubleshooting efficiency, and long term reliability. Understanding the communication context helps operations teams identify why a device might not appear online, which transport is active, and what event messages should be expected.

- Ensures devices are configured to report to d.plaspy.com or the server IP so Plaspy can ingest messages.
- Helps verify that network and firewall rules permit outbound traffic on port 8888.
- Allows you to interpret device reporting cadence and why some events may be delayed or missing.
- Supports troubleshooting of fallback behavior such as SMS versus IP data reporting.
- Guides firmware upgrade decisions when new telemetry fields or fixes are required.

## Why Use Plaspy with This Protocol

Using the GOTOP G08-4G with Plaspy offers straightforward integration for organizations that need plug and play vehicle visibility without complex wiring. The OBD form factor provides easy installation while the device’s 4G connectivity and SMS fallback help maintain continuity of position and alarm reporting. When the G08-4G is pointed to Plaspy’s shared endpoint, the platform can present live location, route history, and alerting workflows useful for theft prevention, fleet operations, and rental management.

Learn more about how Plaspy supports device connectivity and fleet workflows at https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer details can change over time; verify the latest device specific protocol and firmware information with GOTOP at https://www.gotop.cc/ for the most current guidance.
