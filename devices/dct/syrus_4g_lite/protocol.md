---
slug: /dct/syrus_4g_lite/protocol
id: syrus_4g_lite-protocol
sidebar_label: Protocol
title: DCT - Syrus 4G Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for DCT Syrus 4G Lite communication with Plaspy for GPS tracking and telemetry
keywords:
  - DCT Syrus 4G Lite
  - DCT Syrus protocol
  - Syrus 4G Lite GPS protocol
  - Syrus 4G Lite Plaspy compatibility
  - GPS tracker protocol
  - vehicle tracking protocol
  - fleet management protocol
  - IoT telematics protocol
  - Syruslang integration
  - Apex OS telematics
---

# DCT - Syrus 4G Lite Protocol

This page covers the public protocol context for using the DCT Syrus 4G Lite tracker with Plaspy. It explains how the device communicates at a high level, what connection settings are used to reach Plaspy, and how protocol behavior affects data delivery for real time tracking, blackbox logs, and engine diagnostics. The focus is on public, non sensitive operational details rather than internal proprietary packet formats.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is reporting to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so configuration and troubleshooting benefit from checking both device firmware notes and the manufacturer documentation in addition to this page.

## Protocol Overview

The communication protocol for the Syrus 4G Lite is the mechanism that allows the gateway to identify itself, report GNSS position and telemetry, and deliver device health and blackbox event data to Plaspy. In practice this means the tracker periodically and on event sends telemetry to the Plaspy endpoint so Plaspy can ingest, correlate, and present actionable information to fleet operators.

- Enables real time GNSS position and telemetry reporting to Plaspy for live maps and alerts
- Carries device health and blackbox event logs that Plaspy uses for diagnostics and incident replay
- Transmits engine fault codes and vehicle bus telemetry when available for maintenance workflows
- Supports remote management triggers such as configuration and OTA commands coordinated through Plaspy
- Can be filtered or augmented at the edge using the device scripting environment to reduce noise before reporting

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a single shared endpoint and port, and it automatically identifies the incoming tracker protocol so users do not usually need to select the protocol manually inside Plaspy. Proper device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection to work.

- Plaspy accepts device traffic at the shared server domain d.plaspy.com and the public IP 54.85.159.138
- All devices in Plaspy use the same port so a single port setting simplifies device configuration
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint
- Users generally only need to configure the device to report to the Plaspy domain or IP and select the appropriate transport mode on the device
- If a device is reachable at the Plaspy endpoint and sending telemetry, protocol selection inside the Plaspy platform is normally not required

## Transport and Connection Context

Connection and transport choices determine how the Syrus 4G Lite delivers its telemetry to Plaspy. The device supports common cellular transports and can be configured to use either UDP or TCP depending on the deployment and firmware settings. Devices may be pointed to the Plaspy domain name or directly to the Plaspy IP address when required by network configurations.

- Devices may be configured to report to d.plaspy.com or to 54.85.159.138
- The device may use UDP or TCP on port 8888 depending on device support and configuration
- Plaspy uses port 8888 as the shared reporting port for all supported devices
- Choice of UDP or TCP can affect delivery characteristics such as retransmission behavior and latency
- Network firewalls and operator APN settings should allow outbound connections to the Plaspy endpoint on the shared port

## Protocol Compatibility Notes

- Firmware revisions can alter behavior or add new telemetry fields that affect how data arrives at Plaspy
- Hardware SKUs and radio region variants may change available transports or GNSS performance
- Manufacturer configuration interfaces and Syruslang scripts can be used to adapt reporting rates and data payloads
- Transport selection between UDP and TCP should match the device firmware capability and the chosen operational trade offs
- Always validate device behavior against the official device release notes and configuration guides
- Confirm that the device is pointed to the Plaspy endpoint and using port 8888 for consistent ingestion

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators set up devices correctly, diagnose connectivity or data fidelity problems, and plan for firmware updates or large scale rollouts. Clear knowledge of how telemetry is delivered to Plaspy improves uptime and ensures the platform receives the right data for operations and reporting.

- Facilitates correct device configuration to point to the Plaspy endpoint and port
- Speeds troubleshooting by narrowing issues to transport, network, or firmware differences
- Helps optimize reporting intervals and edge filtering for efficient data use and battery life
- Supports reliable blackbox capture and timely engine diagnostic delivery for maintenance
- Informs decisions about using edge scripting or remote commands to tailor device behavior

## Why Use Plaspy with This Protocol

Using the Syrus 4G Lite with Plaspy provides a practical path to integrate rugged telematics hardware with a centralized fleet platform. The combination of onboard GNSS, blackbox capability, engine fault telemetry, and edge programmability means organizations can deliver accurate location, incident logs, and diagnostic data into Plaspy for operational monitoring, loss prevention, and maintenance automation.

If you want to learn more about Plaspy and how it ingests and presents telematics from devices like the Syrus 4G Lite, please visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration guidance, verify current information on the manufacturer site https://www.digitalcomtech.com/. Protocol support and firmware behavior can change over time, so always consult manufacturer documentation for the most current implementation details.
