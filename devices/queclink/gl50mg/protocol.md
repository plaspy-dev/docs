---
slug: /queclink/gl50mg/protocol
id: gl50mg-protocol
sidebar_label: Protocol
title: QuecLink - GL50MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for QuecLink GL50MG and Plaspy compatibility for asset tracking and fleet monitoring
keywords:
  - QuecLink GL50MG protocol
  - QuecLink GL50MG GPS protocol
  - QuecLink GL50MG communication protocol
  - QuecLink GL50MG tracking protocol
  - QuecLink GPS tracker Plaspy
  - GL50MG Plaspy compatibility
  - asset tracker protocol
  - LTE Cat M1 NB IoT tracker
  - vehicle tracking protocol
  - fleet management GPS protocol
---

# QuecLink - GL50MG Protocol

This page describes the public protocol context for using the QuecLink GL50MG tracker with Plaspy. It focuses on how the device communicates with Plaspy’s ingestion endpoint, what connection settings are commonly used, and how protocol awareness helps get reliable location and event data into Plaspy for mapping, geofencing, and alerting. The GL50MG is a compact IP67 asset tracker designed for long life and low power networks with LTE Cat M1 and NB IoT support plus 2G fallback, BLE for accessories, and a programmable button for alerts.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is reporting to Plaspy’s endpoint. The public Plaspy server endpoint is d.plaspy.com (54.85.159.138) on port 8888. Devices may be configured to use either UDP or TCP on port 8888 and all devices in Plaspy use the same port, which simplifies device pointing. Exact protocol behavior and available telemetry fields can vary by firmware version, hardware revision, and manufacturer implementation, so confirm device specific details with official QuecLink resources when needed.

## Protocol Overview

The tracker reporting protocol defines how the GL50MG packages and sends GNSS positions, battery and sensor telemetry, and event notifications to a server like Plaspy. In general terms the protocol governs the periodic or event driven uplink, device identification, and the transport behavior used to deliver usable data for real time tracking and downstream workflows.

- Enables the GL50MG to report location, sensor telemetry, and programmable button events to Plaspy for mapping and alerts
- Carries identification information so Plaspy can associate incoming messages with a registered device record
- Supports periodic reporting and event driven transmissions to balance battery life and timeliness
- Transports accessory and sensor data such as BLE derived telemetry into Plaspy when the device forwards that information
- Works over standard IP transports so the device can reach Plaspy’s public endpoint for ingestion

## How Plaspy Detects the Protocol

Plaspy’s ingestion layer accepts incoming connections on a shared endpoint and port and includes automatic protocol detection so most properly configured devices begin reporting without manual protocol selection in the platform. When a GL50MG is pointed at the Plaspy endpoint and uses the supported transport, Plaspy recognizes the device stream and associates it with the correct handling rules.

- Plaspy listens at d.plaspy.com (54.85.159.138) on port 8888 for tracker traffic
- Devices may use UDP or TCP to send data to the Plaspy endpoint
- All devices supported by Plaspy use the same port which simplifies device configuration
- Automatic detection reduces the need to manually select a protocol inside Plaspy when the device is correctly configured to report to the endpoint
- If a device fails to appear, typical checks include device server settings, transport selection, and network reachability

## Transport and Connection Context

Connection context covers how the GL50MG establishes network reachability and delivers its reporting payloads to Plaspy. The GL50MG is designed for low power wide area networks and may use different cellular bearers for uplink depending on deployment and regional support. From a transport perspective the key configuration items are the Plaspy host and the transport protocol.

- Plaspy public host is d.plaspy.com and the public IP is 54.85.159.138
- Plaspy accepts device traffic on port 8888 and all Plaspy devices use the same port
- The GL50MG may be configured to use UDP or TCP on port 8888 depending on device firmware and settings
- Point the device server or APN reporting host to d.plaspy.com or to 54.85.159.138 as appropriate for your provisioning workflow
- Verify the cellular plan and network coverage for LTE Cat M1 NB IoT or 2G fallback to ensure packets can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change which telemetry fields are provided and how events are encoded; always check the installed firmware release notes
- Hardware revisions and regional variants may affect supported bands and network behavior even when the reporting protocol is similar
- Transport selection between UDP and TCP can affect delivery characteristics and should be chosen based on network reliability needs and device configuration options
- BLE accessory reporting is provided through the device and support depends on accessory firmware and device firmware compatibility
- Verify that the device has been provisioned to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure correct ingestion
- Consult QuecLink documentation for any manufacturer specific configuration commands or tools that affect communications

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure correct setup, faster troubleshooting, and predictable long term operation when using the GL50MG with Plaspy. Knowing what the device sends and how it connects reduces integration friction and helps you design reporting profiles that meet battery life and alerting requirements.

- Confirms device pointing and transport are correct so messages reach the Plaspy endpoint
- Helps diagnose missing telemetry by checking firmware, transport type, and network coverage
- Informs reporting interval and event configuration to balance battery life with timeliness
- Guides expectations for BLE accessory data and which accessory telemetry will be available in Plaspy
- Assists operations teams in planning maintenance and firmware updates that can change protocol behavior

## Why Use Plaspy with This Protocol

Using the QuecLink GL50MG with Plaspy gives operators a low power, discreet asset tracking solution that feeds real time location, event and accessory telemetry into a single platform. The GL50MG’s long battery life, IP67 durability, and multi network cellular support make it well suited for stolen vehicle recovery, rental fleet oversight, and high value asset monitoring where infrequent maintenance and covert placement are important.

If you want to learn more about how Plaspy ingests device telemetry, visit https://www.plaspy.com for platform details and documentation. For the latest device specific protocol notes, firmware behavior, and manufacturer documented configuration steps verify current information at the QuecLink website https://www.queclink.com/ since protocol support and firmware implementation can change over time.
