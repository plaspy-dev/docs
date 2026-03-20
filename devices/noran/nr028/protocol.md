---
slug: /noran/nr028/protocol
id: nr028-protocol
sidebar_label: Protocol
title: Noran - NR028 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Noran NR028 tracker and how it communicates with Plaspy for reliable fleet monitoring
keywords:
  - Noran NR028 protocol
  - NR028 GPS tracker protocol
  - Noran NR028 Plaspy compatibility
  - NR028 communication protocol
  - Noran GPS tracker communication
  - NR028 tracking protocol
  - Noran tracker compatibility
  - vehicle tracking NR028
  - NR028 telemetry protocol
  - Plaspy device protocol
---

# Noran - NR028 Protocol

This page describes the public protocol context for using the Noran NR028 Navigation GPS Tracker with Plaspy. It covers how the device communicates with Plaspy for real time tracking, telemetry and alarms, and highlights the connection settings and practical considerations needed for a successful integration without exposing sensitive implementation details.

The NR028 is Plaspy compatible out of the box and supports GPRS/Internet reporting with SMS and LBS fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available features can vary by firmware version, hardware revision and manufacturer implementation, so the information here focuses on public, non sensitive details that help with setup and troubleshooting.

## Protocol Overview

The tracker protocol is the set of behaviors and message exchanges the NR028 uses to report location, status and sensor data to a backend service. In the context of Plaspy the protocol's role is to ensure the device identifies itself, sends timely telemetry, and delivers alarm and sensor events that Plaspy can surface to users.

- Enables periodic and event driven position reports so Plaspy can display live location and playback history.
- Carries alarm and status flags such as overspeed, geo fence, SOS, power cut and immobilizer events for automated alerts.
- Transports sensor telemetry including fuel and temperature readings so Plaspy can present telemetry and generate reports.
- Uses compact telemetry packets to reduce data usage and support reliable reporting over mobile networks.
- Supports multiple transport options (GPRS over TCP or UDP, plus SMS and LBS fallback) to maintain connectivity in varied coverage.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a common endpoint and port and performs automatic protocol selection so users normally do not need to manually pick a protocol once the device is configured to report to Plaspy. Proper device configuration to the Plaspy endpoint is the key step for automatic detection and ingestion.

- Plaspy servers are reachable at the domain d.plaspy.com and the public server IP 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port, which simplifies device setup and centralizes ingestion.
- Plaspy automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint, avoiding manual protocol selection in most cases.
- If a device is configured to send data to the Plaspy endpoint and network routing is correct, Plaspy will ingest positional and event data for dashboards and alerts.
- Users should confirm device reporting parameters and network access to ensure the initial connection reaches the Plaspy servers.

## Transport and Connection Context

Connection context covers how the NR028 delivers its protocol messages to Plaspy across mobile networks. The NR028 supports both packet based Internet reporting and SMS based fallback to maintain reporting in different network conditions.

- The NR028 may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can be pointed to the Plaspy domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the reporting endpoint.
- Port 8888 is the common port used by all devices in Plaspy, so the same port setting applies across supported trackers.
- When using GPRS/Internet reporting, ensure APN and IP settings are configured on the device so data can reach the Plaspy endpoint.
- SMS and LBS fallback options provide continuity when packet data is unavailable, allowing basic location updates to reach Plaspy.

## Protocol Compatibility Notes

- Firmware differences can change available commands, event thresholds and exact reporting behavior; always verify firmware level when troubleshooting.
- Hardware revisions or optional accessory support (for example additional fuel sensors or camera event metadata) may affect which features are reported to Plaspy.
- The choice of transport (TCP vs UDP) can influence delivery characteristics such as reliability and retransmission behavior; select the transport supported and recommended for your deployment.
- Manufacturer default settings may not point to Plaspy by default; verify device APN, server domain or IP and port are set to Plaspy values.
- SMS reporting and LBS fallback are useful for areas with intermittent GPRS coverage, but may provide lower precision or reduced telemetry compared with full GPRS reports.
- Always validate compatibility and configuration steps against the device documentation and current manufacturer guidance.

## Why Protocol Understanding Matters

Understanding how the NR028 communicates makes setup and ongoing operations more predictable and reduces time spent diagnosing reporting issues. Knowledge of the protocol and connection context helps operators confirm that devices are online, properly reporting telemetry, and delivering the alarms and sensor data needed for operations.

- Ensures correct device pointing to d.plaspy.com or 54.85.159.138 so data reaches Plaspy servers.
- Helps choose the appropriate transport mode (UDP or TCP on port 8888) for a given network and reliability requirement.
- Aids in interpreting why a device may fall back to SMS or LBS and what data will be available in those modes.
- Supports effective troubleshooting of telemetry gaps, configuration errors or firmware related behavior changes.
- Enables planning for data usage and retention by knowing the device sends compact telemetry optimized for low bandwidth.

## Why Use Plaspy with This Protocol

The NR028 provides consolidated in vehicle functionality including navigation, camera capture and multiple telemetry streams. When these device reports are received by Plaspy, they become actionable information for fleet managers, security teams and dispatchers. Plaspy centralizes position, alarms, fuel and sensor data into dashboards, alerts and historical reports that support operational decision making.

To learn more about how Plaspy can ingest and present NR028 data and to review deployment options, visit https://www.plaspy.com. Please note that protocol support, firmware behavior and device implementation details can change over time; verify the latest device specific protocol and firmware information on the manufacturer site at http://www.norantracker.com/ before finalizing configurations.
