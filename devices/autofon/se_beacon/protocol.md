---
slug: /autofon/se_beacon/protocol
id: se_beacon-protocol
sidebar_label: Protocol
title: AutoFon - SE+ Beacon Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the AutoFon SE+ Beacon and Plaspy communication for GPS tracking and telemetry
keywords:
  - AutoFon SE+ Beacon protocol
  - AutoFon SE+ Beacon GPS protocol
  - AutoFon SE+ Beacon communication protocol
  - AutoFon SE+ Beacon tracking protocol
  - Plaspy tracker compatibility
  - AutoFon GPS tracker Plaspy
  - SE+ Beacon GPRS SMS
  - vehicle tracking protocol
  - asset tracking protocol
  - GPS GLONASS tracker
---

# AutoFon - SE+ Beacon Protocol

This page describes the public protocol context and integration considerations for using the AutoFon SE+ Beacon with Plaspy. It focuses on the communication and connection context that matters when the SE+ Beacon reports positions and events to the Plaspy platform, without exposing private implementation details or proprietary packet structures.

The SE+ Beacon is a compact, long life GPS tracker using GPS and GLONASS positioning with GPRS reporting and SMS fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy’s public server endpoint is reachable at d.plaspy.com and at IP address 54.85.159.138 on port 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, but exact protocol behavior can vary with firmware, hardware revision, or manufacturer configuration.

## Protocol Overview

The device protocol governs how the SE+ Beacon identifies itself, reports GNSS positions, and delivers event alerts to a remote endpoint such as Plaspy. In practical terms, the protocol is the set of messages the tracker sends over GPRS or SMS and the expected responses or heartbeats used to maintain a reliable connection.

- Enables the SE+ Beacon to send periodic position updates and event telemetry to Plaspy for mapping and alerting.
- Carries motion, tilt, impact, SOS, and alarm input events so Plaspy can generate timely notifications and history.
- Supports heartbeat or life signal messages that help Plaspy track device availability and battery or offline conditions.
- Uses GPRS for primary real time reporting with SMS as a fallback channel for alerts or when data connectivity is unavailable.
- Works together with the device’s offline buffer strategy so stored data can be forwarded to Plaspy once connectivity is restored.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a single, shared endpoint and automatically determine which tracker protocol a device is using. When an SE+ Beacon is configured to report to Plaspy, the user typically does not need to manually select a protocol inside Plaspy.

- Plaspy listens on the public endpoint d.plaspy.com and the public IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol as the device begins reporting, simplifying setup for integrators.
- Users generally only need to configure the SE+ Beacon to point to d.plaspy.com or 54.85.159.138 and use port 8888.
- Because Plaspy uses the same port for all supported devices, administrators do not need multiple ports per device type.
- Correct device configuration and network routing are the usual prerequisites for automatic detection to work reliably.

## Transport and Connection Context

Connection context describes how the device reaches Plaspy rather than the internal structure of messages. The SE+ Beacon can use GPRS to establish TCP or UDP connections to the Plaspy endpoint, and SMS is used when packet data is not available or as a fallback for alerts.

- The device may be configured using UDP or TCP on port 8888 depending on device support and operator configuration.
- Point the tracker to d.plaspy.com or to 54.85.159.138 and use port 8888 for both transport options.
- All devices in Plaspy use the same port, which streamlines server-side routing and simplifies device setup.
- GPRS is the normal transport for real time reporting; SMS is a secondary channel for alerts or emergency reporting when data is not available.
- Ensure the device SIM and mobile network allow GPRS sessions and that APN settings match the mobile provider requirements for reliable data delivery.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available event types, and power saving behavior; check firmware version when validating behavior.
- Hardware revisions such as the v.6.x platform and components like the SIM800H GSM module and SIM68M GNSS module can influence supported features and radio performance.
- Transport selection (UDP vs TCP) may affect battery use and responsiveness; choose the transport best suited to your deployment and confirm with device settings.
- SMS fallback behavior and message formats may vary; validate SMS-based alerting parameters if you rely on SMS for critical notifications.
- Large offline buffer capacity and remote firmware update capability improve resilience but depend on the specific firmware build and configuration.
- Always cross check compatibility points against the manufacturer's documentation and release notes for device specific behavior.

## Why Protocol Understanding Matters

A practical understanding of the SE+ Beacon communication protocol helps ensure reliable setup, accurate event mapping, and efficient troubleshooting when used with Plaspy. Knowing what the tracker will report and how it reaches the server reduces integration time and supports predictable operational performance.

- Helps verify that the device is pointed at the correct Plaspy endpoint and transport (d.plaspy.com or 54.85.159.138 on port 8888).
- Guides decisions about heartbeat intervals, battery life trade offs, and offline buffering to match operational needs.
- Simplifies troubleshooting by clarifying whether an issue is network, transport, or device configuration related.
- Enables correct interpretation of event types such as motion, tilt, impact, and SOS in Plaspy dashboards and alerts.
- Supports planning for remote firmware updates and managing firmware rollouts across a fleet.

## Why Use Plaspy with This Protocol

Using the AutoFon SE+ Beacon with Plaspy provides a straightforward way to convert compact, battery optimized position and event telemetry into map visualization, alerts, and historical playback. The SE+ Beacon’s GPRS primary reporting and SMS fallback, combined with its sensor-driven alerts and large offline buffer, make it suitable for discreet vehicle and asset tracking scenarios where long battery life and resilience matter.

If you are evaluating the SE+ Beacon for an operational deployment, Plaspy’s automatic protocol detection and unified port approach reduce configuration overhead and help get devices reporting quickly. To learn more about how Plaspy works and to review platform capabilities, visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance for the AutoFon SE+ Beacon, verify information at the AutoFon website https://www.autofon.ru/ because protocol support and firmware behavior can change over time.
