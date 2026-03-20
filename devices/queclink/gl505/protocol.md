---
slug: /queclink/gl505/protocol
id: gl505-protocol
sidebar_label: Protocol
title: QuecLink - GL505 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for QuecLink GL505 integration with Plaspy for livestock and remote asset tracking
keywords:
  - QuecLink GL505
  - GL505 protocol
  - QuecLink GL505 GPS protocol
  - GL505 tracking protocol
  - QuecLink GPS tracker protocol
  - GL505 Plaspy compatibility
  - livestock GPS tracker
  - pasture asset tracking
  - QuecLink GL505 integration
  - GPS tracker protocol Plaspy
---

# QuecLink - GL505 Protocol

This page provides public protocol context for using the QuecLink GL505 with Plaspy. It summarizes how the GL505 communicates telemetry and events to the Plaspy platform in high level terms, with emphasis on integration-relevant behaviors for livestock and outdoor asset monitoring. The GL505 is a battery powered, weatherproof tracker optimized for long-duration deployments and is designed to report GNSS location, geo-fence events, motion-based inactivity alerts, and tamper signals appropriate for concealed collar installations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol; exact message timing and behavior can vary by GL505 firmware version, hardware revision, and manufacturer implementation. For connectivity with Plaspy the device may be pointed at the Plaspy endpoint using d.plaspy.com or the server IP 54.85.159.138 on port 8888. Plaspy uses the same port for all supported devices and supports devices configured over UDP or TCP on port 8888.

## Protocol Overview

The GL505 communicates location and event information to a server endpoint so that Plaspy can ingest, normalize, and present the data for live monitoring and historical playback. The public protocol context covered here focuses on the role of device reporting, identification, and event delivery rather than internal frame formats or proprietary parsing rules.

- The protocol enables the device to report GNSS positions, motion events, geo-fence triggers, and basic status updates to Plaspy for use in dashboards and alerts.
- Identification information sent by the device allows Plaspy to associate incoming messages with a specific tracker record and asset.
- Event reporting (for example, geo-fence breach or inactivity) informs alerting rules and downstream notifications in Plaspy.
- Transport-agnostic reporting means the same logical protocol can be used over UDP or TCP depending on device configuration and network conditions.
- Timers and reporting intervals defined in the device firmware determine how frequently the GL505 sends updates and how long battery life will be preserved in the field.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and automatically identifies the tracker protocol so that users do not normally need to select a protocol manually in the platform. Provided the GL505 is configured to report to the Plaspy endpoint, Plaspy will associate incoming telemetry with the correct device record and process the messages for display and alerting.

- Plaspy accepts device reports on a single, common port and automatically detects the protocol used by incoming connections.
- Devices can be configured to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- The common port used by Plaspy for all devices is 8888; Plaspy uses this port uniformly across supported trackers.
- When the tracker is pointed at the Plaspy endpoint and sends valid reports, manual protocol selection in Plaspy is typically unnecessary.
- Proper device identification and consistent reporting intervals help Plaspy match incoming data to the correct GL505 asset and maintain clean historical records.

## Transport and Connection Context

Connection choices affect reliability, latency, and battery consumption. The GL505 can be configured to use UDP or TCP transport to reach the Plaspy endpoint; which transport to use is determined by device configuration, network availability, and the specific deployment scenario.

- The GL505 may be configured to use UDP on port 8888 when low overhead and simpler retry behavior are preferred.
- The device may also be configured to use TCP on port 8888 when reliable delivery and connection-oriented behavior are required.
- Plaspy accepts connections on d.plaspy.com and the server IP 54.85.159.138 so devices can target either a hostname or a direct IP address.
- All Plaspy devices use the same port 8888, simplifying device provisioning and server addressing for large deployments.
- Network settings such as APN, roaming rules, and cellular coverage influence which transport performs best in remote or pastoral environments.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available features, or optional fields; verify firmware notes for device-specific behavior.
- Hardware revisions and regional model variations may affect which transports or telemetry features are available on a given GL505 unit.
- Manufacturer-side configuration tools or provisioning SMS commands may alter reporting endpoints or transport choice; confirm settings before deployment.
- Transport selection (UDP vs TCP) can be dictated by power budgets, network reliability, and the need for guaranteed delivery of critical alerts.
- Plaspy’s automatic protocol detection reduces manual setup, but the device must be correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Always validate compatibility and feature availability against official QuecLink documentation for the GL505 and the specific firmware installed.

## Why Protocol Understanding Matters

Understanding how the GL505 communicates with Plaspy helps ensure reliable reporting, accurate alerts, and predictable battery life in remote livestock and asset monitoring applications. Awareness of transport choices, reporting intervals, and firmware-dependent behaviors can reduce deployment issues and speed troubleshooting.

- Confirms the device is pointed to the correct Plaspy endpoint and port so telemetry arrives reliably.
- Helps choose the right transport (UDP or TCP) based on coverage, latency, and battery tradeoffs.
- Makes it easier to interpret why expected events (geo-fence or inactivity alerts) did or did not appear in Plaspy.
- Supports better planning for power management by matching reporting frequency to battery life expectations.
- Aids coordination with field teams and integrators when validating installation, tamper resistance, and collar placement.

## Why Use Plaspy with This Protocol

Using the QuecLink GL505 with Plaspy provides a practical way to convert low-power, rugged GNSS telemetry into centralized visibility for herd management, anti-theft workflows, and asset monitoring. Plaspy ingests location and event data and makes it available for configurable alerts, historical playback, and operational reporting so managers can act quickly when animals stray, become inactive, or are at risk.

To learn more about Plaspy and how it works with devices like the GL505, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance, always consult QuecLink’s official documentation at https://www.queclink.com/. Protocol support and firmware behavior can change over time, so verifying current details with the manufacturer is recommended.
