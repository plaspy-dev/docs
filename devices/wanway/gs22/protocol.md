---
slug: /wanway/gs22/protocol
id: gs22-protocol
sidebar_label: Protocol
title: WanWay - GS22 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for WanWay GS22 GPS tracker and Plaspy compatibility for reliable vehicle reporting
keywords:
  - WanWay GS22 protocol
  - WanWay GS22 GPS protocol
  - WanWay GS22 communication protocol
  - WanWay GS22 tracking protocol
  - WanWay GS22 Plaspy compatibility
  - WanWay GPS tracker protocol
  - vehicle tracking protocol WanWay
  - OBD II GPS tracker protocol WanWay
  - Plaspy tracker compatibility
  - GPS device communication Plaspy
---

# WanWay - GS22 Protocol

This page covers the public protocol context for using the WanWay GS22 tracker with Plaspy. It explains how the device typically communicates positioning and vehicle data to the Plaspy platform in non sensitive, implementation neutral terms. The GS22 is a compact 4G OBD II positioning device with features such as real time tracking, electronic fences, disassembly alarm, vehicle diagnostics, a built in rechargeable battery, and support for Wi Fi hotspot use; those features determine what kinds of messages the tracker will send to a fleet platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on the public connection context and practical compatibility considerations rather than low level packet formats or private parser logic.

## Protocol Overview

At a high level the tracker reporting protocol is the set of rules the GS22 uses to identify itself and deliver usable telemetry to the server. The protocol enables the device to report position, status, and event data so Plaspy can present tracking, diagnostics, and geofence events to users.

- Device identification and authentication information that allows Plaspy to associate messages with the correct asset
- Periodic and event driven location reports that provide position, speed, and timestamped movement data
- Status and diagnostics updates such as power state, battery backup activity, and fault or disassembly alerts
- Geofence and alarm events triggered by the device and delivered to the server for immediate processing
- Optional network related heartbeats or keepalive messages that help Plaspy maintain reliable session awareness

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a single shared endpoint and port and automatically detects the tracker protocol based on the data the device sends. In most deployments you do not need to pick a protocol inside Plaspy if the GS22 is configured to report to the Plaspy endpoint correctly.

- Plaspy listens on a single common port for all supported devices which simplifies network setup
- The Plaspy server endpoint is d.plaspy.com and the server IP is 54.85.159.138
- The platform automatically detects the tracker protocol when a device reports to the Plaspy endpoint
- If a GS22 is configured to report to the Plaspy endpoint, manual protocol selection in the platform is typically not required
- Successful auto detection depends on the device sending its standard identification and message types as implemented by the manufacturer

## Transport and Connection Context

Transport choices determine how the GS22 sends its telemetry to the server. The device may be configured to use either UDP or TCP on the platform port depending on device support and the selected configuration in the tracker settings.

- GS22 devices may be configured to connect using UDP or TCP on port 8888
- Devices can point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138
- Plaspy uses the same port 8888 for all supported trackers, reducing firewall and gateway complexity
- Ensure vehicle or fleet network equipment allows outbound UDP and TCP traffic to the Plaspy endpoint on port 8888
- Network reliability and chosen transport mode can affect message delivery characteristics and latency

## Protocol Compatibility Notes

- Firmware revisions can alter the set of messages a GS22 sends or the timing of reports; always confirm the firmware level when validating behavior
- Different hardware batches or revisions may have small variations in reporting behavior or supported features
- Manufacturer configuration options such as transport selection or reporting intervals will affect how the device behaves with Plaspy
- If a device supports both UDP and TCP, choose the transport that best matches your network and reliability needs
- Validate basic connectivity by pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and observing initial registration and position reports
- For fleet wide rollouts, test a sample device to confirm expected event types such as geofence and disassembly alarms are received correctly

## Why Protocol Understanding Matters

Understanding the GS22 communication protocol in broad terms helps with setup, troubleshooting, and maintaining a reliable fleet tracking deployment on Plaspy. Knowing what the device is expected to send and how it connects to the platform reduces downtime and configuration errors.

- Faster diagnosis when a device does not appear online or is missing expected events
- Better informed choices about transport mode TCP versus UDP for your network environment
- Easier verification that vehicle diagnostics and geofence events are available and correctly forwarded
- Clearer expectations about how battery backup and disassembly alerts will be reported to Plaspy
- Reduced deployment friction by pre configuring devices to report to the Plaspy endpoint

## Why Use Plaspy with This Protocol

Using the WanWay GS22 with Plaspy provides a practical way to collect vehicle location, diagnostics, and event data in a single platform. Plaspy's automatic protocol detection and unified port simplify integration so teams can focus on operational use cases like monitoring, trace playback, and geofence management rather than low level connectivity details.

If you want to learn more about Plaspy and how the platform handles device connectivity and fleet features visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be confirmed with the manufacturer documentation at https://www.wanwaytech.net/ for the most current device specific information.
