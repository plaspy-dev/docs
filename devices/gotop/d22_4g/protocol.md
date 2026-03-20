---
slug: /gotop/d22_4g/protocol
id: d22_4g-protocol
sidebar_label: Protocol
title: GOTOP - D22-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for GOTOP D22 4G device use with Plaspy servers for reliable GPS and telemetry reporting
keywords:
  - GOTOP D22-4G protocol
  - GOTOP D22-4G GPS protocol
  - GOTOP D22-4G protocol for Plaspy
  - GOTOP D22-4G communication protocol
  - GOTOP D22-4G tracking protocol
  - GOTOP vehicle tracker protocol
  - GPS tracker Plaspy compatibility
  - D22 4G tracking protocol
  - vehicle tracking protocol documentation
  - fleet tracking protocol Plaspy
---

# GOTOP - D22-4G Protocol

This page covers the public protocol context for using the GOTOP D22-4G tracker with Plaspy. It explains how the device communicates at a high level, what role the tracker reporting protocol plays in integration with Plaspy, and which connection settings are used so administrators and integrators can configure devices and validate connectivity.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The D22-4G is a waterproof industrial vehicle terminal that streams GPS and telemetry over 4G LTE into Plaspy for fleet monitoring, anti theft workflows, and event reporting.

## Protocol Overview

The communication protocol of the D22-4G defines how the tracker identifies itself, reports location and sensor telemetry, and sends event notifications to a remote server such as Plaspy. Protocols for devices like this focus on reliable delivery, efficient use of cellular data, and meaningful event encoding so Plaspy can present location, alarms, and status in the dashboard.

- Enables periodic and event driven transmission of GPS BDS coordinates, speed, and movement status to Plaspy.
- Transmits device telemetry such as ACC ignition state, door sensor input, alarms, and fuel cut off events for processing.
- Supports offline buffering and blind area retransmission so historical data can be recovered and ingested by Plaspy.
- Allows the device to identify itself so Plaspy can associate incoming data with the correct asset and configuration.
- Carries alarm and status messages that Plaspy maps to alerts and automation rules for fleet workflows.

## How Plaspy Detects the Protocol

Plaspy accepts connections from many tracker models and automatically detects the tracker protocol when a properly configured device reports to the Plaspy endpoint. In most cases, users do not need to select a protocol manually inside Plaspy if the device is pointed to the Plaspy server and is sending its standard reports.

- Plaspy server domain name is d.plaspy.com for device reporting.
- Plaspy server IP is 54.85.159.138 and the configured server endpoint resolves to that production address.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so correctly pointed devices are typically ingested without manual protocol selection.
- If a device is not appearing in Plaspy, verify the device is sending messages to d.plaspy.com or 54.85.159.138 on port 8888 and check device configuration and network connectivity.

## Transport and Connection Context

Transport choices such as TCP or UDP influence connection behavior but do not change the fact that Plaspy receives the same reporting data for processing. The D22-4G supports 4G LTE cellular transport and may be configured to use either UDP or TCP on port 8888 depending on device settings and firmware.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices intended for Plaspy should point to the server domain d.plaspy.com or the server IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so no per device port mapping is required.
- TCP provides session oriented delivery while UDP offers low overhead reporting where supported by the device and network.
- Verify APN and cellular data settings on the device so the tracker can establish a connection to d.plaspy.com or 54.85.159.138.

## Protocol Compatibility Notes

- Firmware versions can alter message frequency, available telemetry fields, and transport defaults; always check the device firmware release notes.
- Hardware revisions or regional variants of the D22-4G may have slightly different input sets or sensor availability.
- Manufacturer side configuration options such as default transport, heartbeats, and retransmission behavior may vary between units.
- Choose UDP or TCP transport according to network reliability and device configuration preferences; some features may behave differently across transports.
- Validate compatibility by confirming the device is able to reach d.plaspy.com or 54.85.159.138 on port 8888 and that Plaspy is ingesting messages from the device identifier.
- Consult official manufacturer documentation for model and firmware specific differences before rolling out large fleets.

## Why Protocol Understanding Matters

Understanding how the D22-4G communicates helps with correct device setup, quicker troubleshooting, and predictable behavior over the life of the installation. Knowing which signals the tracker sends and how Plaspy accepts them reduces integration time and helps operations teams maintain telemetry continuity.

- Ensures correct server, APN, and transport settings are applied so the tracker can reach d.plaspy.com on port 8888.
- Helps troubleshoot missing or incomplete data by aligning firmware behavior with expected telemetry fields.
- Enables informed choices about transport selection and heartbeat intervals for battery and data management.
- Improves alarm tuning and event classification when you know which sensor inputs the device reports.
- Reduces deployment issues by verifying firmware and hardware revision compatibility prior to wide scale installation.

## Why Use Plaspy with This Protocol

Using the GOTOP D22-4G with Plaspy provides a practical path to real time fleet visibility, event driven alerts, and operational analytics. The device streams GPS BDS coordinates, ignition and door inputs, alarms, and telemetry into Plaspy so fleet managers can monitor assets, react to incidents, and maintain an audit ready history of vehicle activity.

Plaspy accepts device reporting on a single standardized endpoint and port, simplifying fleet scale deployments and ongoing device management. To learn more about Plaspy and how it works with devices like the GOTOP D22-4G visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official GOTOP website https://www.gotop.cc/.
