---
slug: /tk_star/tk905/protocol
id: tk905-protocol
sidebar_label: Protocol
title: TK-Star - TK905 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for using the TK Star TK905 with Plaspy servers and shared connection settings
keywords:
  - TK Star TK905 protocol
  - TK905 GPS protocol
  - TK905 Plaspy compatibility
  - TK Star GPS tracker protocol
  - TK905 communication protocol
  - TK905 tracking protocol
  - Plaspy tracker compatibility
  - vehicle tracking TK905
  - asset tracking TK905
  - TK Star fleet tracking
---

# TK-Star - TK905 Protocol

This page describes the public protocol context for using the TK-Star TK905 tracker with the Plaspy platform. It explains how the device communicates at a high level, what connection settings Plaspy expects, and the role of the tracker reporting protocol in delivering location and event data to Plaspy for fleet and asset monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non-sensitive connection and compatibility information rather than firmware internals or proprietary packet formats.

## Protocol Overview

The TK905 reporting protocol is the mechanism by which the tracker sends GNSS fixes, network based positions, status flags, and event alerts to a remote server. In practical terms the protocol enables the device to identify itself to the server, stream periodic or event driven telemetry, and deliver alerts that Plaspy can present as locations, events, and history.

- Enables transmission of position data (GPS, BeiDou, GLONASS), LBS and WiFi assisted positions, and device event flags to a remote endpoint.
- Carries device identifiers and status fields that allow Plaspy to associate incoming messages with the correct TK905 unit.
- Supports periodic reporting and event driven messages such as movement, vibration, geo fence, and overspeed alerts.
- Provides the data Plaspy needs to generate live maps, route history, and alert notifications without exposing device internals.
- Functions over standard transport channels so the tracker can report to Plaspy using common networking options.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines which compatible tracker protocol a device is using. When a TK905 is configured to report to the Plaspy endpoint the platform will associate incoming streams with the correct device and parse the reported data into the platform UI and APIs.

- Plaspy’s public server domain for device reporting is d.plaspy.com.
- The Plaspy server IP address for the reporting endpoint is 54.85.159.138 and the server listens on port 8888.
- Devices may be configured to send data using either UDP or TCP to port 8888 depending on device support and configuration.
- All devices integrated with Plaspy use the same port, simplifying device configuration and firewall rules.
- In most cases users do not need to manually select a protocol inside Plaspy if the TK905 is correctly pointed at the Plaspy reporting endpoint.

## Transport and Connection Context

Connection setup for the TK905 is centered on delivering telemetry to the Plaspy endpoint over standard network transports. The choice between UDP and TCP affects delivery guarantees and retransmission behavior but does not change the fact that Plaspy accepts data on the same shared port for all devices.

- The TK905 can be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on installer preference.
- Devices may use either UDP or TCP on port 8888; installers should select the transport supported by the device firmware and their network environment.
- Port 8888 is the single reporting port used by Plaspy for all supported devices, which simplifies server addressing for multi-device deployments.
- Ensure network firewalls and carrier filters allow outbound UDP or TCP traffic to d.plaspy.com on port 8888 so the tracker can reach the server.
- Using the domain name d.plaspy.com can simplify DNS based failover or server changes managed by Plaspy; direct IP use is an alternative for constrained environments.

## Protocol Compatibility Notes

- Firmware revisions on the TK905 can change message cadence, fields included in reports, and available event types; always check the device firmware level when diagnosing compatibility issues.
- Hardware revisions or variants of the TK905 may expose different configuration menus or capabilities; test a sample device when planning a large deployment.
- Manufacturer side configuration (APN, reporting interval, transport selection) strongly influences whether the device can reliably reach the Plaspy endpoint.
- Choosing UDP versus TCP can affect message delivery behavior; select the transport that matches device support and operational priorities.
- Plaspy automatically detects the tracker protocol when the device reports to d.plaspy.com on port 8888, but correct device configuration is necessary for proper parsing.
- Validate any advanced telemetry needs (ignition sensing, immobilizer, external sensors) against the specific TK905 installation and firmware capabilities.

## Why Protocol Understanding Matters

Knowing how the TK905 communicates with Plaspy reduces setup time, improves troubleshooting efficiency, and supports reliable long term operation of the tracking solution.

- Helps confirm that the device is pointed at the correct Plaspy endpoint and using the expected transport and port.
- Simplifies troubleshooting when telemetry is missing by focusing on network reachability, transport selection, and firmware configuration.
- Clarifies which types of events and telemetry the TK905 will supply to Plaspy so you can design rules and alerts appropriately.
- Aids in planning firewall and carrier settings needed to allow the tracker to report to d.plaspy.com on port 8888.
- Supports decisions about firmware upgrades and hardware selection by highlighting where protocol behavior can vary.

## Why Use Plaspy with This Protocol

Using the TK905 with Plaspy provides organizations with a consistent way to collect GNSS fixes, network assisted positions, movement alerts, and event history for fleet management, rental fleets, and asset protection. The combination of long battery life, multi mode positioning, and robust reporting enables reliable monitoring across vehicles and equipment while Plaspy centralizes data for mapping, alerts, and reports.

To learn more about Plaspy and how the platform handles device reporting, visit https://www.plaspy.com. Note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site https://www.tk-star.com/ before deploying at scale.
