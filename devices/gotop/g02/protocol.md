---
slug: /gotop/g02/protocol
id: g02-protocol
sidebar_label: Protocol
title: GOTOP - G02 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP G02 integration with Plaspy covering connection settings transport options and compatibility
keywords:
  - GOTOP G02 protocol
  - GOTOP G02 GPS protocol
  - GOTOP G02 protocol Plaspy
  - GOTOP G02 communication protocol
  - GOTOP G02 tracking protocol
  - GOTOP G02 compatibility
  - GOTOP tracker protocol
  - GOTOP G02 4G tracker
  - Plaspy device protocol
  - vehicle GPS tracker protocol
---

# GOTOP - G02 Protocol

This page describes the public protocol context for using the GOTOP G02 tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, the connection settings you will commonly use, and practical compatibility considerations. The device background is useful context: the G02 is a compact IP67 4G LTE tracker designed for motorcycles, e‑bikes, and cars with wide voltage support and built in backup battery and sensors.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact on‑device protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public and practical level while pointing you to official manufacturer documentation for device specific details.

## Protocol Overview

The communication protocol used by the G02 enables the tracker to report location and telemetry over cellular data and to be interpreted by a backend platform such as Plaspy. At a high level the protocol is the set of messages and conventions the tracker uses to identify itself, deliver position updates, and send alarm or status events to the server endpoint.

- Allows device to identify itself and associate reports with a device record on the server
- Transports GPS coordinates, time, and status data for use in mapping and event processing
- Delivers alarm events such as geofence, low battery, movement, and power cut to the platform
- Supports reporting over the network method the device exposes such as 4G data reporting
- Enables server side actions like availability monitoring and event notification without exposing firmware internals

## How Plaspy Detects the Protocol

Plaspy receives inbound reports on a common server endpoint and automatically determines the appropriate protocol handler for many popular trackers, including compatible GOTOP models. In most setups you do not need to manually select a protocol inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy uses a shared, public endpoint to accept device reports and choose the correct protocol handler
- The platform automatically detects the tracker protocol based on the incoming connection and payload characteristics
- If the device is configured to report to the Plaspy endpoint there is typically no manual protocol selection required by the user
- Plaspy centralizes handling so integrations benefit from a consistent connection model across devices
- Using the standard Plaspy endpoint reduces configuration complexity for fleets with mixed hardware

## Transport and Connection Context

The G02 can report over cellular data, and when configured to work with Plaspy it targets the Plaspy server using the shared connection settings. Devices can be pointed to the Plaspy domain or the server IP and may use either major transport modes depending on device configuration.

- Target server domain for Plaspy device reporting is d.plaspy.com
- An alternate reachable server address is 54.85.159.138
- The platform accepts device connections on port 8888
- The device may be configured using UDP or TCP on port 8888 depending on tracker support and configuration
- All devices in Plaspy use the same port which simplifies fleet level setup
- Choose the transport mode that matches the device firmware capability and your network conditions

## Protocol Compatibility Notes

- Firmware revisions can change which messages or fields a device sends even for the same model
- Different hardware revisions or regional variants of the G02 may enable or disable specific transport modes or features
- The G02 supports reporting via 4G LTE and may also support SMS reporting for legacy workflows; server reporting to Plaspy relies on the cellular data reporting path
- Selecting UDP versus TCP is determined by device capability and configuration and can affect delivery behavior under varying network conditions
- Always verify whether the installed firmware version on the device matches published compatibility notes from the manufacturer
- When in doubt confirm expectations against official GOTOP documentation or device release notes

## Why Protocol Understanding Matters

Understanding the basic behavior of the tracker protocol helps ensure proper setup, faster troubleshooting, and predictable long term operation when devices feed data into Plaspy. Knowledge of transport choices and common device events reduces setup time and helps surface issues that look like network problems but are actually configuration differences.

- Ensures devices are pointed to the correct Plaspy endpoint and port for automatic detection
- Helps narrow troubleshooting to transport, configuration, or firmware causes when a device is not reporting
- Improves confidence when deploying mixed fleets by understanding how devices identify and report
- Supports making informed decisions about UDP versus TCP for specific network environments
- Makes it simpler to validate alarm and status reporting such as geofence or low battery events

## Why Use Plaspy with This Protocol

Using Plaspy with the GOTOP G02 provides a single, managed endpoint for device reporting and fleet visibility. Plaspy’s automatic protocol detection and consistent port policy reduce configuration overhead for administrators managing multiple device types, while the platform ingests location, alarm, and status data for mapping, alerts, and operational workflows.

If you want to learn more about how Plaspy handles device connectivity and fleet features visit https://www.plaspy.com. For the latest device specific protocol details firmware notes and implementation guidance always consult the official GOTOP documentation at https://www.gotop.cc/ as manufacturer behavior and firmware features can change over time.
