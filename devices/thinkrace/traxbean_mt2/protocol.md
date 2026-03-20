---
slug: /thinkrace/traxbean_mt2/protocol
id: traxbean_mt2-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean MT2 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the ThinkRace Traxbean MT2 with Plaspy for connectivity and reporting
keywords:
  - ThinkRace Traxbean MT2 protocol
  - ThinkRace Traxbean MT2 GPS protocol
  - Traxbean MT2 Plaspy compatibility
  - Traxbean MT2 communication protocol
  - Traxbean MT2 tracking protocol
  - ThinkRace wearable tracker protocol
  - GPS smartwatch protocol
  - Plaspy tracker protocol
  - wearable tracking Plaspy
  - fleet and personnel tracking ThinkRace
---

# ThinkRace - Traxbean MT2 Protocol

This page summarizes the public protocol context for using the ThinkRace Traxbean MT2 with Plaspy. It describes how the device communicates in general, what connection settings Plaspy exposes publicly, and which aspects of device behavior typically affect successful integration. The intent is to inform administrators, integrators, and technical users without exposing sensitive implementation details.

The Traxbean MT2 is a rugged military grade GPS smartwatch that provides GPS, assisted Wi Fi and cellular triangulation, RF based indoor positioning, SOS, camera streaming, and two way voice. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Always validate device firmware and configuration when deploying at scale.

## Protocol Overview

The protocol for the Traxbean MT2 governs how telemetry, location, SOS events, and media signaling are delivered from the device to a central server and how remote commands and acknowledgements are handled at a high level. For Plaspy, the emphasis is on reliable delivery of position and event data so the platform can provide real time monitoring and incident workflows.

- Enables the MT2 to report location updates, SOS triggers, status telemetry, and event markers to a remote endpoint.
- Provides identity and device metadata so Plaspy can map incoming streams to the correct wearable and user profile.
- Supports transport over standard network sockets so the device can send data via cellular or Wi Fi to Plaspy.
- Carries operational signals that allow Plaspy to trigger alerts, geo fence rules, and historical logging.
- Allows for variations in message frequency and content depending on firmware and configuration to balance battery life and reporting needs.

## How Plaspy Detects the Protocol

Plaspy is built to accept reporting from a wide range of tracker devices and to automatically identify the tracker protocol when a device is configured to report to the Plaspy endpoint. That removes the need in most cases for manual protocol selection inside the platform when the tracker is correctly pointed at Plaspy.

- Plaspy accepts incoming device connections on a single shared endpoint and port for all supported devices.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for public connection configuration.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol once the device reports to the platform endpoint.
- Users typically do not need to select a protocol manually inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

The Traxbean MT2 can deliver data across available network transports and is commonly used over cellular data or Wi Fi. For integration with Plaspy, focus on the endpoint and transport type the device supports and ensure that the device points to Plaspy’s public endpoint.

- Devices may be configured to point to d.plaspy.com or to the numeric server address 54.85.159.138.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy uses the same port for every supported device which simplifies configuration and firewall rules.
- Choose UDP when the device or network favors minimal overhead and lower latency, and TCP when reliable delivery and ordered streams are preferred, subject to device capability.
- Ensure carrier or network firewalls permit outbound traffic to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware differences between MT2 units can change which messages or fields the device sends; verify firmware level when troubleshooting.
- Hardware revisions or optional modules (for example RF or sensor variants) may alter available telemetry and event types.
- Manufacturer side settings and region specific firmware builds can change default transport or server name behavior.
- Selecting UDP versus TCP on the device affects delivery characteristics and must match the device capability and intended use case.
- Plaspy’s automatic detection reduces manual setup, but misconfigured device server settings remain the most common integration issue.
- Always validate compatibility against the current manufacturer documentation and the deployed device firmware.

## Why Protocol Understanding Matters

Understanding the communication protocol for the Traxbean MT2 helps teams configure devices correctly, diagnose connectivity problems, and make informed choices about reporting frequency and power consumption for mission requirements.

- Helps ensure correct server address and transport selection so devices reach Plaspy reliably.
- Enables faster troubleshooting of missing telemetry, SOS events, or media streaming by focusing on known transport and endpoint settings.
- Guides decisions on reporting intervals, battery life trade offs, and when to use assisted positioning or RF modes.
- Reduces deployment friction by clarifying how identity and device metadata are delivered to Plaspy.
- Assists in planning network and firewall rules to allow outbound traffic to the Plaspy endpoint.

## Why Use Plaspy with This Protocol

Pairing the Traxbean MT2 with Plaspy provides centralized visibility for teams that require wearable tracking, voice communications, and incident management. The MT2’s multi mode positioning and situational media combine with Plaspy’s ingestion, alerting, and reporting to deliver a practical solution for field operations, lone worker safety, and security deployments.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always consult the manufacturer documentation at https://www.thinkrace.com/ .
