---
slug: /reachfar/rf_v36/protocol
id: rf_v36-protocol
sidebar_label: Protocol
title: Reachfar - RF-V36 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Reachfar RF-V36 wearable GPS tracker and Plaspy compatibility, connection settings and transport context
keywords:
  - Reachfar RF-V36 protocol
  - Reachfar RF-V36 GPS protocol
  - Reachfar RF-V36 communication protocol
  - RF-V36 Plaspy compatibility
  - Plaspy device protocol
  - wearable GPS tracker protocol
  - eldercare GPS tracker protocol
  - RF-V36 tracking protocol
  - reachfar GPS protocol
  - RF-V36 telemetry protocol
---

# Reachfar - RF-V36 Protocol

This page describes the public protocol context for using the Reachfar RF-V36 wearable tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level and what aspects of the tracker reporting behavior are most relevant when integrating the RF-V36 into a real‑time monitoring workflow. The RF-V36 is a wristwatch style eldercare tracker that reports location, health telemetry, SOS alerts, and motion events, and this guide helps explain how that data reaches Plaspy without exposing sensitive implementation details.

Plaspy uses a shared set of connection settings across supported devices and automatically detects the tracker protocol when the device is pointed to the Plaspy endpoint. Exact device behavior can vary by firmware release, hardware revision, and manufacturer implementation, so while Plaspy accepts reports using the common endpoint and port configuration, final setup and troubleshooting may require verifying device firmware and manufacturer documentation.

## Protocol Overview

At a general level the RF-V36 communication protocol is the device reporting mechanism that allows the wearable to identify itself, send position and telemetry, and notify caregivers through Plaspy. The protocol's role is to convert the watch's sensors and events into network messages that a server can receive, interpret, and present as meaningful location and health data.

- Transmits position information from GPS, assisted LBS, and indoor Wi‑Fi sources so Plaspy can display current and historical location.
- Sends health telemetry such as heart rate and blood pressure readings for remote monitoring and trend analysis.
- Reports event notifications including SOS activations, two‑way audio session requests, motion alerts from the G‑sensor, and fence entry or exit events.
- Provides device identity and status metadata so Plaspy can correlate incoming data with the correct tracker and owner.
- Supports configurable reporting intervals and event‑driven uploads so the device balances timeliness and battery life.

## How Plaspy Detects the Protocol

Plaspy detects the tracker protocol automatically when the RF-V36 is configured to report to the Plaspy endpoint. Because all Plaspy devices use the same network port, the platform examines incoming connections to determine which supported protocol the device is using and routes messages to the appropriate handlers without requiring the user to manually select a protocol inside Plaspy.

- Point the device to d.plaspy.com or the Plaspy server IP 54.85.159.138 and use the shared port 8888 for reporting.
- Plaspy accepts both UDP and TCP on port 8888 and will detect the tracker protocol from the incoming connection and payload patterns.
- In most cases a properly configured RF-V36 will register and begin reporting without manual protocol selection inside Plaspy.
- Automatic detection reduces setup steps for integrators while allowing Plaspy to support many device types on the same endpoint.
- If a device does not appear to communicate as expected, confirm network settings and firmware on the RF-V36 and that the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

The transport context describes how the RF-V36 sends its messages to Plaspy over mobile networks. The device may be configured to use either UDP or TCP depending on its firmware and configuration options, but Plaspy provides a single, consistent destination so devices can be pointed to the platform using familiar connection settings.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and carrier behavior.
- The Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138; both can be used as the device reporting destination.
- All devices in Plaspy use the same port 8888 which simplifies provisioning and fleet setup.
- Typical device steps include setting the APN and SIM parameters, then configuring the server host (d.plaspy.com or 54.85.159.138) and port 8888.
- Transport choice can affect delivery characteristics such as latency and retransmission behavior, so select UDP or TCP according to device capability and network conditions.

## Protocol Compatibility Notes

- Firmware revisions can change how the RF-V36 formats or schedules reports, so confirm firmware version when testing compatibility.
- Hardware revisions or regional variants of the RF-V36 might expose different features or telemetry fields that affect what Plaspy receives.
- Manufacturer configuration options may allow selecting UDP or TCP; ensure the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Devices that are out of production can remain functional in the field, but availability of firmware updates or vendor support may be limited.
- Plaspy automatically detects the tracker protocol but successful detection depends on the device actually transmitting to the Plaspy endpoint.
- Validate compatibility against official Reachfar documentation and any release notes for the specific RF-V36 firmware build.

## Why Protocol Understanding Matters

Understanding the RF-V36 communication protocol helps integrators and caregivers achieve reliable setup, consistent reporting, and effective troubleshooting when using Plaspy. Awareness of the protocol scope and transport context reduces setup time and clarifies which device behaviors are expected or configurable.

- Ensures correct server, host, and transport configuration so the device reaches Plaspy reliably.
- Aids troubleshooting for missing or delayed location, telemetry, or SOS events by narrowing issues to network, firmware, or configuration layers.
- Helps configure reporting intervals and event thresholds to balance battery life and update frequency for wearable use cases.
- Clarifies how different sensor sources such as GPS, Wi‑Fi, assisted LBS, and the G‑sensor contribute to location accuracy.
- Supports planning for device lifecycle considerations such as firmware updates and end of production scenarios.

## Why Use Plaspy with This Protocol

Using the Reachfar RF-V36 with Plaspy gives caregivers and monitoring teams a unified platform for real‑time location, health telemetry, and event notification. Plaspy's centralized dashboard and notification flows make it practical to combine the RF-V36's SOS and two‑way audio features with continuous location feeds and telemetry trends for better situational awareness and faster responses.

Plaspy accepts device reports at a single, shared port and automatically detects the tracker protocol which simplifies deployment across fleets of personal wearables and other compatible trackers. To learn more about Plaspy and how it works with devices like the RF-V36 visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information on the official Reachfar website https://www.reachfargps.com/ since protocol support and firmware behavior can change over time.
