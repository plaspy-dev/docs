---
slug: /telic/sbc_avl/protocol
id: sbc_avl-protocol
sidebar_label: Protocol
title: Telic - SBC AVL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the Telic SBC AVL and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Telic SBC AVL
  - Telic SBC AVL protocol
  - SBC AVL GPS tracker
  - SBC AVL Plaspy
  - Telic telematics
  - vehicle tracking Telic
  - CAN bus telematics
  - 1 wire integration
  - fleet management GPS
  - GPS tracker communication
---

# Telic - SBC AVL Protocol

This page covers the public protocol context for using the Telic SBC AVL tracker with Plaspy. It describes how the SBC AVL typically communicates with the Plaspy platform at a connection level and what role the device reporting protocol plays in fleet tracking without exposing device internals or private parsing logic.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so treating this content as high level guidance will help with setup and troubleshooting while you verify device specific details with manufacturer documentation.

## Protocol Overview

The tracker reporting protocol is the set of messages the SBC AVL sends to a backend server to provide location, telemetry, and interface data. For integration with Plaspy the protocol enables the device to identify itself, deliver GPS and vehicle interface data, and allow the platform to record and interpret events for fleet management.

- Provides a transportable stream of GPS location, time, and status updates from the device to the platform.
- Carries vehicle interface data such as CAN bus and 1 wire inputs so Plaspy can present diagnostics and driver detection events.
- Conveys device identity and session information so Plaspy can associate incoming messages with the correct vehicle record.
- Supports periodic reporting and event driven messages used by fleet workflows like geofencing, motion detection, and driver behavior.
- Serves as the basis for any remote commands or replies the manufacturer implements while keeping platform parsing generic.

## How Plaspy Detects the Protocol

Plaspy listens for device connections on a single shared endpoint and determines the incoming device protocol automatically. In most cases the device only needs to be configured to report to Plaspy and no manual protocol selection inside the platform is required.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 on port 8888.
- The device may be configured using UDP or TCP on port 8888 to report its messages.
- Plaspy automatically detects the tracker protocol when properly addressed to the platform endpoint.
- Users typically do not need to choose a protocol in Plaspy if the tracker is configured to send to the Plaspy endpoint.
- Plaspy uses the same port for all supported devices which simplifies device configuration and onboarding.

## Transport and Connection Context

Connection context describes how the SBC AVL reaches the Plaspy server without detailing message formats. The tracker can use either UDP or TCP transport depending on the device configuration and firmware capabilities, and it must be directed to the Plaspy endpoint to be processed by the platform.

- Devices may point to the domain d.plaspy.com or the IP address 54.85.159.138 for the Plaspy endpoint.
- The device may be configured to use UDP or TCP on port 8888 depending on device support and customer preference.
- Port 8888 is used by Plaspy for all devices, providing a consistent target for configuring trackers.
- Choosing UDP or TCP affects retransmission and ordering behavior at the transport layer but not the fact of Plaspy protocol detection.
- Ensure outbound mobile network rules allow traffic to the Plaspy endpoint and port for reliable reporting.

## Protocol Compatibility Notes

- Firmware version differences can change message timing, available fields, and optional interfaces exposed by the device.
- Hardware revisions or optional modules may add or remove interfaces such as CAN bus channels or 1 wire sensors that affect reported data.
- Manufacturer configuration menus sometimes expose transport selection so confirm whether the device should use UDP or TCP to reach Plaspy.
- Plaspy detects the protocol automatically but a correctly configured network endpoint and port are required for detection to succeed.
- Always validate that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 when troubleshooting connectivity.
- For device specific command sets, behavior under edge conditions, or firmware change history consult the manufacturer documentation.

## Why Protocol Understanding Matters

Understanding how the SBC AVL communicates with Plaspy improves setup success and reduces troubleshooting time by clarifying what the platform expects to receive and how the device should be configured.

- Helps confirm device is pointing to the correct Plaspy endpoint and transport settings so messages arrive reliably.
- Makes it easier to identify whether an issue is network related, configuration related, or device firmware related.
- Guides decisions on whether to select UDP or TCP for a given deployment based on network characteristics.
- Allows fleet administrators to interpret what kinds of vehicle and sensor data the device can supply to Plaspy.
- Supports planning for firmware updates or hardware changes by anticipating potential protocol behavior differences.

## Why Use Plaspy with This Protocol

Using the Telic SBC AVL with Plaspy provides a straightforward path to capture location, CAN bus, and 1 wire sensor data in a single platform that centralizes fleet visibility. The device’s integrated GSM and GPS antennas, combined with its telematics interfaces, make it suitable for common fleet management use cases including tracking, driver detection, and basic diagnostics.

If you would like to learn more about how Plaspy can work with devices like the Telic SBC AVL visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific information on the manufacturer website https://www.telic.de.
