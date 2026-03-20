---
slug: /careu/u1_lite_lte/protocol
id: u1_lite_lte-protocol
sidebar_label: Protocol
title: CAREU - U1 Lite+ LTE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CAREU U1 Lite+ LTE tracker and Plaspy compatibility with connection guidance
keywords:
  - CAREU U1 Lite+ LTE protocol
  - CAREU U1 Lite+ LTE GPS protocol
  - CAREU U1 Lite+ LTE protocol Plaspy
  - U1 Lite+ LTE tracker protocol
  - vehicle tracking protocol CAREU
  - GPS tracker protocol Plaspy
  - U1 Lite+ LTE compatibility
  - fleet tracking protocol
  - telemetry protocol U1 Lite+ LTE
  - video telematics protocol
---

# CAREU - U1 Lite+ LTE Protocol

This page describes the public protocol context for using the CAREU U1 Lite+ LTE tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used publicly, and what operators should consider when integrating the tracker into fleet workflows. The content here is intended for technical users and integrators who need a clear, non sensitive overview of communication behavior and compatibility.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation. The U1 Lite+ LTE is Plaspy compatible out of the box and supports GNSS positioning, OBD II/CAN telemetry, fuel sensor inputs, remote configuration and FOTA, all of which influence how the device exchanges usable telemetry with Plaspy.

## Protocol Overview

At a high level, the U1 Lite+ LTE communication protocol enables the tracker to identify itself to a remote server, transmit position and telemetry, and receive remote configuration or firmware updates where supported. The protocol is the bridge between the device hardware and Plaspy’s ingestion systems, allowing fleet data to be turned into actionable information without requiring custom integration for each unit.

- The protocol carries GNSS fixes and time stamped telemetry so Plaspy can map location, motion events, and sensor readings.
- Engine and vehicle data from OBD II and CAN feeds are reported so Plaspy can surface diagnostics, fuel data, and maintenance signals.
- Remote configuration and FOTA behaviors are managed over the same connectivity model to allow updates and policy changes.
- Video telematics ready models can coordinate video transmission workflows through the device network interfaces while Plaspy handles ingestion or integration.
- The protocol supports event reporting for geofences, harsh driving, and anti theft alerts so rules and notifications can be triggered in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common endpoint and port and automatically determines the tracker protocol based on the data presented by the device. In most deployments, when the U1 Lite+ is configured to report to Plaspy’s endpoint, no manual protocol selection inside Plaspy is required.

- Plaspy’s server domain is d.plaspy.com and the platform is reachable at 54.85.159.138.
- Plaspy listens on port 8888 and uses the same port for all supported devices.
- Devices may be configured to use UDP or TCP on port 8888 depending on tracker settings and network conditions.
- When a properly configured U1 Lite+ reports to the Plaspy endpoint, Plaspy automatically detects the tracker protocol and begins ingesting telemetry.
- Typical setup steps involve pointing the tracker to the Plaspy endpoint and verifying the device is sending regular position and status messages.

## Transport and Connection Context

The U1 Lite+ LTE supports multiple cellular technologies and can use either UDP or TCP to send data to a remote server. For Plaspy integration, the key transport details are consistent across devices supported by Plaspy, which helps simplify deployment and troubleshooting.

- The device may use UDP or TCP on port 8888 to send telemetry to Plaspy.
- Trackers can be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy uses the same port, 8888, for all devices so network firewall rules and carrier APN settings can be standardized.
- Transport choice can affect latency and delivery behavior but both UDP and TCP are supported by Plaspy on the shared port.
- For video enabled models, separate data flows for video may be coordinated alongside the telemetry channel while still using the device’s configured connectivity.

## Protocol Compatibility Notes

- Firmware revisions can change message content and available commands; always check the device firmware level when validating behavior.
- Hardware variants and regional cellular models can influence supported transport modes and GNSS behavior.
- Manufacturer configuration options such as transport selection, reporting intervals, and remote management settings determine how the device behaves with Plaspy.
- FOTA and remote configuration capabilities rely on the device firmware and may require specific manufacturer procedures to enable.
- Confirm device reporting settings point to d.plaspy.com or 54.85.159.138 on port 8888 and whether UDP or TCP is preferred for your deployment.
- When integrating video telematics, review any additional bandwidth and network requirements separate from the telemetry channel.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the U1 Lite+ LTE reports reliably, that Plaspy can ingest the right telemetry, and that operational policies behave as expected. A practical grasp of protocol and transport context reduces deployment friction and improves long term reliability of tracked assets.

- Ensures correct configuration of the device to point to Plaspy and to use UDP or TCP on port 8888.
- Helps diagnose connectivity issues by checking domain resolution to d.plaspy.com or direct reachability to 54.85.159.138.
- Clarifies expectations for what telemetry will be available in Plaspy from OBD II, CAN, fuel sensors, and GNSS.
- Guides decisions about firmware updates and enabling FOTA or remote configuration for fleet scale management.
- Supports planning for video telematics and higher bandwidth workflows alongside standard GPS telemetry.

## Why Use Plaspy with This Protocol

Using the CAREU U1 Lite+ LTE tracker with Plaspy gives operators unified visibility into vehicle location, engine telemetry, fuel usage, and event alerts without custom per device integrations. Plaspy’s automatic protocol detection and shared connection settings reduce setup complexity, allowing fleets to scale deployments across mixed hardware and firmware configurations while centralizing monitoring and rules.

If you want to learn more about Plaspy and how it works with trackers like the CAREU U1 Lite+ LTE, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and regional variants, verify information on the manufacturer website https://www.systech-iot.com/ as protocol support and firmware behavior can change over time.
