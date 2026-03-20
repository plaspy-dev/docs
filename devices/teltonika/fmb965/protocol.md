---
slug: /teltonika/fmb965/protocol
id: fmb965-protocol
sidebar_label: Protocol
title: Teltonika - FMB965 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating the Teltonika FMB965 with Plaspy using shared connection settings and automatic detection
keywords:
  - Teltonika FMB965
  - FMB965 protocol
  - Teltonika GPS protocol
  - FMB965 Plaspy compatibility
  - Plaspy device protocol
  - GPS tracker communication
  - vehicle tracking FMB965
  - BLE sensor integration
  - asset tracking Teltonika
  - fleet management Plaspy
---

# Teltonika - FMB965 Protocol

This page documents the public protocol context for using the Teltonika FMB965 tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in non sensitive terms and explains the role of the tracker reporting protocol in successful integration and operation.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol at the server side. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so this page stays general and practical while referencing the Plaspy connection settings used for reporting.

## Protocol Overview

The protocol implemented by a tracker defines how it identifies itself, opens a connection to a remote endpoint, and delivers position and telemetry data that Plaspy can ingest. For the FMB965, that means transmitting GNSS fixes and BLE sensor telemetry over mobile networks to the Plaspy endpoint so that fleet managers can view live location, status, and events.

- Enables the device to register and identify itself to the Plaspy service so recorded telemetry maps to the correct asset.
- Carries position updates, event reports, and auxiliary sensor data in a format the server can interpret for maps and alerts.
- Supports transport over IP networks so the tracker can push data to the configured Plaspy endpoint.
- Provides metadata and event signals that Plaspy uses for geofence alerts, movement detection, and historical playback.
- Works together with device configuration tools and remote management workflows to ensure correct reporting and firmware settings.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and port and automatically determines the tracker protocol from the incoming data stream. In most deployments the integrator only needs to configure the device to report to the Plaspy endpoint and the platform will associate incoming messages with the correct protocol handler.

- Plaspy listens on a common endpoint so devices can point to the same host and port for reporting.
- Plaspy automatically detects the tracker protocol from the connection and payload characteristics without manual selection.
- Typical setup requires configuring the device to report to d.plaspy.com or the Plaspy server IP and the shared port.
- When the tracker is properly configured to report to Plaspy, no protocol selection is normally required inside the Plaspy service.
- If a tracker uses alternate transports or manufacturer tools, ensure those settings point to the Plaspy endpoint so automatic detection can occur.

## Transport and Connection Context

Connection setup is a transport level concern that determines how the FMB965 opens a path to Plaspy for sending reports. The device may be configured to use either UDP or TCP for delivery depending on the tracker configuration and device firmware, and both transports are supported when pointing at the Plaspy endpoint.

- Devices may be configured to report to d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Plaspy accepts device connections on port 8888 and all devices use the same port for reporting.
- The tracker may be set to use UDP or TCP on port 8888 depending on device capabilities and chosen configuration.
- Choice of UDP versus TCP can affect delivery characteristics such as retransmission and ordering but does not change how Plaspy identifies the protocol.
- Ensure APN and SIM network settings allow outbound traffic to the Plaspy endpoint and port 8888.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change protocol behavior or available features; always check the device firmware level when validating compatibility.
- Hardware revisions or optional modules such as BLE accessories can affect which telemetry fields are available to Plaspy.
- Transport selection between UDP and TCP is configurable on the device and should match the deployment requirements for reliability and network conditions.
- Plaspy uses the same port for all supported devices and relies on automatic protocol detection at the server endpoint.
- Some device-side configuration tools or remote management solutions may alter reporting settings; confirm the final reporting host and port before deployment.
- When integrating at scale, perform a pilot with representative firmware to validate event handling and sensor data flows.

## Why Protocol Understanding Matters

Knowing the basics of the tracker reporting protocol helps ensure devices are configured correctly and that data arrives at Plaspy in a usable form. This understanding shortens troubleshooting cycles and supports reliable long term operation of deployed trackers.

- Allows correct configuration of the device reporting host and transport so messages reach Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- Helps diagnose connectivity and data delivery issues by separating transport problems from protocol or firmware behavior.
- Informs decisions about transport selection, reporting intervals, and power management to match operational requirements.
- Ensures BLE sensor data and other telemetry the FMB965 can provide are mapped correctly in the Plaspy platform.
- Supports effective use of remote management workflows for firmware updates and configuration orchestration.

## Why Use Plaspy with This Protocol

Using the Teltonika FMB965 with Plaspy gives organizations a compact, rugged tracking option with battery backup and BLE sensor support, while relying on Plaspy to receive, interpret, and present location and telemetry in dashboards and alerts. The shared Plaspy endpoint and automatic protocol detection simplify deployments by allowing multiple device models to report to the same server and port.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific protocol behavior, firmware notes, and implementation details verify information on the manufacturer site https://www.teltonika-gps.com/ since protocol support and firmware behavior can change over time and should be confirmed against official documentation.
