---
slug: /sinotrack/st_901/protocol
id: st_901-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SinoTrack ST 901 GPS tracker and Plaspy compatibility with connection and setup guidance
keywords:
  - SinoTrack ST 901 protocol
  - SinoTrack ST 901 GPS protocol
  - ST 901 Plaspy compatibility
  - ST 901 tracking protocol
  - SinoTrack tracker communication
  - Plaspy device compatibility
  - vehicle tracking ST 901
  - ST 901 immobilizer configuration
  - GPS GPRS SMS tracker
  - fleet tracking ST 901
---

# SinoTrack - ST-901 Protocol

This page describes the public protocol context for using the SinoTrack ST-901 tracker with Plaspy. It focuses on the communication and connection aspects that matter when pointing the device to Plaspy for real time tracking, telemetry and alarm delivery. The content is intended for fleet managers, integrators, and technical staff who need clear, non sensitive information about how the tracker reports to a third party cloud platform.

The ST-901 is a compact, waterproof 4PIN wired tracker built for motorcycles, scooters, cars and light trucks. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision and the manufacturer implementation. The ST-901 supports GPS, GPRS and SMS reporting and is commonly configured by SMS commands to send its data to a third party server for integration.

## Protocol Overview

The ST-901 communication protocol defines how the tracker formats and sends location, status and alarm messages over cellular data or SMS so a cloud platform like Plaspy can ingest and display the information. This page does not reproduce proprietary message formats; instead it explains the public connection and operational context you need to integrate the device with Plaspy.

- The protocol enables the device to report GPS coordinates, ignition (ACC) status, power loss alerts and geo fence or over speed events to a remote server.
- It provides the basis for event identification so Plaspy can map incoming messages to device state and alerts.
- Transported over cellular GPRS or SMS, the communication allows real time telemetry and optional SMS fall back when data is not available.
- Configuration commands sent by SMS set the server address, port and APN so the ST-901 forwards its reports to the chosen endpoint.
- Properly configured, the tracker supplies the data Plaspy needs for mapping, alerts, and rule based notifications without requiring manual protocol selection.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared ingestion endpoint and automatically determines the tracker protocol from the incoming data patterns and declared device identifiers. In most deployments you do not need to choose a specific protocol inside Plaspy when the tracker is configured to report to the Plaspy endpoint.

- Plaspy listens on a common domain and IP for device reports: d.plaspy.com and 54.85.159.138.
- The platform uses a single port for device communication so all supported devices report to the same port.
- Plaspy automatically detects the tracker protocol after the device first connects and sends identifying data.
- When the ST-901 is configured to point at the Plaspy endpoint, typical integration requires only setting server address, port and APN by SMS.
- If a device is not detected, check that the tracker is sending data to d.plaspy.com or directly to 54.85.159.138 on the configured port.

## Transport and Connection Context

Connection choices affect how the ST-901 reaches Plaspy. The tracker supports standard GPRS reporting and SMS configuration, and it can be set to use either UDP or TCP depending on model capability and user configuration. Understanding the transport and addressing options helps ensure reliable delivery to Plaspy.

- Devices may be configured to report to the Plaspy server domain d.plaspy.com or directly to the IP 54.85.159.138.
- The ST-901 may use UDP or TCP transport when sending data to Plaspy on port 8888 depending on device support and settings.
- Plaspy uses the same port number for all supported devices to simplify device configuration and server routing.
- When configuring by SMS, set the server address and port to the Plaspy endpoint and confirm the APN is correct for the SIM card in use.
- Choose UDP for lightweight reporting or TCP where a connection oriented link is preferred, subject to carrier and device behavior.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available fields or supported transports; confirm the tracker firmware level when troubleshooting.
- Hardware revisions and regional model variants can alter supported GSM bands or available features such as SMS fallback behavior.
- Manufacturer configuration commands and exact SMS syntax may vary by firmware and should be validated against official SinoTrack documentation.
- Transport selection between UDP and TCP affects delivery characteristics and may require different settings on the device.
- IMEI registration rules and local activation procedures in some countries can affect deployment and should be planned in advance.
- Validate APN and SIM connectivity independently of the server address to isolate network level issues.

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps ensure a reliable integration and makes troubleshooting faster when a device fails to appear in Plaspy. A practical understanding of connection context, transport, and common configuration points reduces deployment time and supports ongoing operational stability.

- Proper server address and port configuration ensures data reaches Plaspy without manual intervention in the platform.
- Awareness of UDP versus TCP differences helps choose the most resilient transport for your deployment.
- Understanding SMS configuration commands speeds remote setup of devices that lack a wired configuration interface.
- Recognizing firmware and hardware variation helps set expectations for feature availability and behavior.
- Confirming APN and SIM connectivity eliminates common connectivity causes before deeper protocol analysis.

## Why Use Plaspy with This Protocol

Using the SinoTrack ST-901 with Plaspy gives organizations consolidated visibility into vehicle location, ignition status, power loss alarms and event driven notifications alongside the platform management features Plaspy provides. The ST-901’s compact waterproof form, ACC input and relay support for immobilization make it a practical choice for security and fleet monitoring where discreet installation and reliable reporting are important.

To learn more about how Plaspy works with a wide range of vehicle trackers and to review platform capabilities, visit https://www.plaspy.com. For the most current device firmware behavior, SMS command set and region specific model details verify device specific protocol documentation on the manufacturer site https://www.sinotrackgps.com/ as protocol support and device implementation may change over time.
