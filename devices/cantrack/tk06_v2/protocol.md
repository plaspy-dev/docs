---
slug: /cantrack/tk06_v2/protocol
id: tk06_v2-protocol
sidebar_label: Protocol
title: CanTrack - TK06 v2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for CanTrack TK06 v2 and its communication context when used with Plaspy server settings
keywords:
  - CanTrack TK06 v2 protocol
  - CanTrack TK06 v2 GPS protocol
  - CanTrack TK06 v2 tracking protocol
  - CanTrack TK06 v2 communication
  - CanTrack tracker Plaspy
  - TK06 v2 GPRS tracking
  - vehicle GPS tracker TK06 v2
  - fleet tracking CanTrack TK06 v2
  - Plaspy device compatibility
  - GPS tracker protocol guide
---

# CanTrack - TK06 v2 Protocol

This page provides public protocol context for using the CanTrack TK06 v2 tracker with the Plaspy fleet management platform. It focuses on how the device commonly communicates over GSM GPRS and GPS channels and how that communication maps to Plaspy's public connection settings without exposing private or sensitive implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the TK06 v2 can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the general communication context and practical considerations for integration and troubleshooting.

## Protocol Overview

The TK06 v2 uses built in GPS and GSM/GPRS capability to collect location and status information and deliver it to authorized recipients or an internet server. In the context of Plaspy, the tracker sends location, status, and alarm information over the mobile network so Plaspy can ingest and present data for tracking and fleet management.

- Provides periodic or event driven position reports that Plaspy can receive for mapping and history.
- Transmits alert and status signals such as overspeed or power alarms so Plaspy can surface actionable events.
- Uses GPRS data to send reports to an internet endpoint for real time tracking when configured to do so.
- Can fall back to SMS based reporting for location updates or commands when GPRS is unavailable.
- Supports features useful to fleet and vehicle security workflows such as remote immobilization, voice monitoring, and relay control depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reports from many tracker models and automatically identify the protocol used by an incoming device report. When a TK06 v2 is configured to report to Plaspy, the platform will match the incoming data pattern to the appropriate handling rules so you typically do not need to select a protocol manually.

- Plaspy exposes a single shared endpoint and port for device reporting which simplifies device configuration.
- Devices can be pointed at the Plaspy domain d.plaspy.com or the server IP 54.85.159.138 to reach the platform.
- Plaspy uses port 8888 for device connections and the same port is used across all supported devices.
- The service accepts both UDP and TCP transport on port 8888 depending on device capability and configuration.
- Automatic detection means correct device reporting settings on the tracker are usually sufficient for Plaspy to begin ingesting data.

## Transport and Connection Context

Connection context covers the network transport and addressing a TK06 v2 uses to deliver data to an internet server such as Plaspy. The tracker can use the mobile operator GPRS channel to open a connection and transmit tracking data to a configured endpoint.

- The tracker may be configured to use either UDP or TCP transport depending on the firmware and configuration options.
- Plaspy listens on port 8888 and all devices report to the same port for simplified setup.
- Devices can be configured to target the Plaspy domain d.plaspy.com or the equivalent server IP 54.85.159.138.
- When GPRS is available the tracker sends data to the configured server for real time tracking and event delivery.
- If GPRS is unavailable, the device may use SMS messaging for alerts or location queries as supported by the device.

## Protocol Compatibility Notes

- Firmware versions can alter message timing, available features, and optional fields; verify firmware specifics when troubleshooting.
- Hardware revisions or region variants of the TK06 v2 may support different feature subsets including optional backup battery or relay wiring.
- Manufacturer settings determine whether the device uses TCP or UDP by default; confirm the transport configured on your unit.
- Some functions such as voice monitoring or remote relay control may require extra configuration or accessory wiring.
- Always validate that the device is pointed to Plaspy settings (d.plaspy.com or 54.85.159.138 on port 8888) and that the mobile SIM plan permits GPRS data.
- Consult manufacturer release notes when comparing behavior across units or after firmware updates.

## Why Protocol Understanding Matters

Understanding how the TK06 v2 communicates helps ensure reliable onboarding, accurate location history, and quicker troubleshooting when devices do not behave as expected in Plaspy. Awareness of transport, reporting modes, and feature availability reduces setup time and supports operational continuity.

- Ensures correct server and transport settings are applied on the device for immediate data delivery to Plaspy.
- Helps identify whether missing reports stem from network, configuration, or firmware differences.
- Supports planning for alarms and event routing so Plaspy can surface relevant operational alerts.
- Aids in validating that SMS fallback and GPRS reporting behave as required for your use case.
- Improves confidence when deploying multiple units across fleets with mixed firmware or revisions.

## Why Use Plaspy with This Protocol

Using Plaspy with the CanTrack TK06 v2 provides a practical way to consolidate GPS and status data from a compact vehicle tracker into a single fleet management view. Plaspy's handling of standard reporting over GPRS or SMS allows organizations to monitor location, alarms, and operational status while relying on shared connection settings for simpler device setup.

If you want to learn more about how Plaspy handles device connectivity and fleet telemetry, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance for the TK06 v2 please verify information on the official CanTrack site https://www.cantrackgps.com/ since protocol behavior and firmware features can change over time.
