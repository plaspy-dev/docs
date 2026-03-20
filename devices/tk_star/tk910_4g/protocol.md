---
slug: /tk_star/tk910_4g/protocol
id: tk910_4g-protocol
sidebar_label: Protocol
title: TK-Star - TK910 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TK Star TK910 4G detailing Plaspy compatibility and connection context
keywords:
  - TK Star
  - TK910 4G protocol
  - TK910 4G GPS protocol
  - TK910 4G Plaspy compatibility
  - Plaspy device protocol
  - GPS tracker communication
  - vehicle tracking protocol
  - fleet management tracker
  - GNSS tracker protocol
  - TK Star tracker compatibility
---

# TK-Star - TK910 4G Protocol

This page explains the public protocol context for using the TK-Star TK910 4G tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in general terms, what connection settings are used, and which aspects of device behavior are relevant when integrating the unit into a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports correctly to the platform. Exact protocol behavior, message timing, and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so this guide presents safe, non sensitive protocol context and practical compatibility notes for working with the TK910 4G and Plaspy.

## Protocol Overview

The tracker protocol defines the telemetry and event exchange between the TK910 4G and a server like Plaspy. At a high level, the protocol enables the device to identify itself, report location and sensor events, and receive platform-side controls in a way that Plaspy can ingest and present to users.

- Allows the device to authenticate or identify itself so Plaspy can associate telemetry to the correct asset
- Transports GNSS location, assisted location hints, and event flags such as vibration or geofence triggers
- Carries status telemetry needed for fleet features like route playback, alerting, and uptime monitoring
- Supports delivery of remote control actions initiated from the platform when the device and firmware allow
- Enables heartbeat or keepalive messages so Plaspy can track device connectivity and online status

## How Plaspy Detects the Protocol

Plaspy receives data on a shared ingestion endpoint and automatically detects the tracker protocol when data arrives in a recognizable pattern. For most integrations, users do not need to manually select a protocol inside Plaspy if the tracker is configured to report to the Plaspy endpoint and port.

- Plaspy listens on a single shared port for all supported devices and protocols, simplifying device setup
- Configure the device to report to the Plaspy server address to enable automatic detection by the platform
- When the tracker reports successfully, Plaspy maps incoming data to the correct device record and protocol handler
- Users typically only need to ensure APN, SIM, and reporting address settings are correct on the device side
- If a device does not appear, confirm the device is pointed to the correct Plaspy endpoint and that transport settings match the device configuration

## Transport and Connection Context

The TK910 4G can be configured to send telemetry over common transport protocols to reach Plaspy. Plaspy accepts connections on a single endpoint and port for simplicity across devices and deployments.

- Devices may be configured to use UDP or TCP on port 8888 depending on firmware and local configuration options
- The Plaspy ingestion endpoint is available as d.plaspy.com and can also be reached at 54.85.159.138
- All devices reporting to Plaspy use the same port, port 8888, which standardizes connection settings for many tracker models
- Choose the transport that is best supported by your device firmware and network conditions, noting that UDP and TCP have different delivery characteristics
- Verify that SIM APN and network registration are functioning so telemetry can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware differences may change available telemetry fields, event reporting intervals, and remote command capabilities
- Hardware revisions or region specific variants can affect supported cellular bands and fallback behavior, which can impact connectivity
- Manufacturer configuration methods and default server settings vary by release; confirm the tracker is explicitly pointed to the Plaspy endpoint
- Transport selection between UDP and TCP should match what the device firmware supports and how the device was provisioned
- Some features such as immobilizer controls or auxiliary inputs depend on device firmware and wiring rather than the protocol alone
- Always validate device behavior in a controlled environment before full production deployment

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps you set up devices confidently, resolve connectivity or data issues faster, and ensure that alerts and controls behave as expected in Plaspy.

- Speeds initial setup by clarifying which address and transport to configure on the device
- Helps diagnose missing telemetry or inconsistent updates by identifying whether connectivity or message content is at fault
- Guides decisions about reporting intervals, power use, and backup battery expectations for reliable tracking
- Improves incident response by ensuring event notifications such as vibration or geofence alerts reach Plaspy promptly
- Enables informed conversations with device vendors when a firmware or behavior difference affects integration

## Why Use Plaspy with This Protocol

Using the TK-Star TK910 4G together with Plaspy gives organizations a straightforward path to centralized real-time tracking, alerts, and historical route playback. Plaspy ingests the tracker telemetry so operators can monitor assets, receive geofence and vibration alerts, and leverage historical data for audits and reporting.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer configuration guides verify current information on the official TK Star website https://www.tk-star.com/. Protocol support, firmware behavior, and implementation details can change over time so checking the manufacturer documentation is recommended when planning deployments.
