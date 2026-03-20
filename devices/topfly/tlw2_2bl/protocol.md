---
slug: /topfly/tlw2_2bl/protocol
id: tlw2_2bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-2BL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for TopFly TLW2-2BL GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - TopFly TLW2-2BL
  - TopFly TLW2-2BL protocol
  - TopFly TLW2-2BL GPS protocol
  - TopFly tracker protocol
  - TLW2-2BL communication protocol
  - TLW2-2BL tracking protocol
  - Plaspy device compatibility
  - Plaspy fleet tracking
  - TopFly LTE M tracker
  - cold chain tracker TopFly
---

# TopFly - TLW2-2BL Protocol

This page describes the public protocol context for using the TopFly TLW2-2BL tracker with Plaspy. It focuses on how the device reports positions, telemetry and events to Plaspy and what to consider during setup and validation. The goal is to provide clear, non sensitive information about the communication relationship between the TLW2-2BL and Plaspy while directing readers to official sources for firmware specific details.

Plaspy uses shared connection settings across supported trackers and automatically detects the tracker protocol when a device is correctly pointed at the Plaspy endpoint. Exact behavior of the TLW2-2BL on the wire can vary by firmware revision, hardware variant and manufacturer implementation, so this page stays at a high level and highlights the practical points needed to connect, configure and troubleshoot the integration.

## Protocol Overview

The tracker reporting protocol is the set of messages and events the TLW2-2BL uses to identify itself and deliver GNSS positions, BLE accessory telemetry and alarm states to a server. In practice, the protocol enables timely location updates, persistence during outage, and event driven alerts that Plaspy can ingest for mapping, notifications and reporting.

- Enables device identification and authentication details needed for Plaspy to associate incoming data with an account
- Transports GNSS location fixes and timestamps so Plaspy can render live position and historical playback
- Carries sensor and alarm data such as BLE temperature readings, ignition status, power loss alerts and relay state
- Supports buffered uploads so stored points are delivered after connectivity resumes, preserving history for Plaspy
- Provides event-driven messages for alarms and inputs that trigger workflows inside Plaspy such as alerts and immobilizer actions

## How Plaspy Detects the Protocol

Plaspy receives incoming traffic on a shared endpoint and automatically determines the tracker protocol from the data the device sends. For most TLW2-2BL deployments you do not need to choose a protocol manually inside Plaspy as long as the device is configured to report to the Plaspy endpoint correctly.

- Plaspy uses a common server endpoint to accept data from many tracker models so a single configuration can work across devices
- The platform automatically detects the tracker protocol based on the incoming connection and message patterns
- Users typically only need to configure the TLW2-2BL to report to the Plaspy endpoint and select transport where applicable
- Proper device identification and reporting intervals ensure Plaspy associates data with the correct unit and account
- If a device is not visible, verifying the device reporting address and transport is the usual first troubleshooting step

## Transport and Connection Context

Connection settings determine how the TLW2-2BL reaches Plaspy. The device may be configured to use UDP or TCP on the standard Plaspy port. Plaspy accepts connections aimed at the public server domain or its numeric address so devices that prefer DNS or a fixed IP can both be supported.

- Plaspy server domain for reporting is d.plaspy.com and the public server IP is 54.85.159.138
- Plaspy listens on port 8888 for device traffic and all devices in Plaspy use the same port
- The TLW2-2BL may be configured to use either UDP or TCP on port 8888 depending on device support and site requirements
- Devices that buffer data during outages will upload stored points to the Plaspy endpoint once a connection is reestablished
- Use the transport type that matches your deployment policy and the TLW2-2BL firmware capabilities

## Protocol Compatibility Notes

- Firmware revisions can change message timing, supported fields and optional features so always check the device firmware level when validating behavior
- Hardware revisions or regional SKUs may enable different cellular bands or fallback behavior that affect connectivity
- Manufacturer configuration tools may present multiple transport and server options; ensure the TLW2-2BL is pointed to the Plaspy endpoint
- BLE accessory reporting and sensor payloads can vary by firmware and by specific BLE device models paired to the tracker
- Transport selection between UDP and TCP can affect delivery guarantees and should align with your reliability and network constraints
- Validate device behavior against official TopFly documentation for firmware specific command sets and settings

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps ensure a reliable connection, accurate telemetry and fewer surprises during deployment. A practical understanding of the protocol and transport layer speeds troubleshooting and helps you optimize reporting intervals and buffering for your operational needs.

- Ensures correct server and transport configuration so devices show up quickly in Plaspy
- Helps diagnose connectivity issues such as DNS, IP routing or transport mismatches
- Aids in planning update intervals and buffer sizes so historical data is preserved during outages
- Supports integration choices for BLE sensors, relay control and alarm handling that Plaspy will present
- Reduces deployment time by clarifying what the device must send for Plaspy to recognize it automatically

## Why Use Plaspy with This Protocol

Using the TLW2-2BL with Plaspy gives organizations high frequency tracking, extended buffering and integrated sensor telemetry in a managed fleet platform. Plaspy ingests the tracker position and event streams to provide live location, history replay, alarms and integrations that support operations, anti theft workflows and cold chain monitoring.

If you want to learn more about how Plaspy supports device connectivity and fleet visibility, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and implementation guidance consult the manufacturer at https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
