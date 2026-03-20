---
slug: /winrich/gt003/protocol
id: gt003-protocol
sidebar_label: Protocol
title: Winrich - GT003 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Winrich GT003 tracker with Plaspy including connection and compatibility context
keywords:
  - Winrich GT003
  - Winrich GT003 protocol
  - Winrich GT003 GPS protocol
  - GT003 Plaspy compatibility
  - GT003 tracking protocol
  - Winrich GPS tracker protocol
  - vehicle tracking GT003
  - GT003 telemetry Plaspy
  - fleet management GT003
  - GPS tracker Plaspy compatibility
---

# Winrich - GT003 Protocol

This page describes the public protocol context for using the Winrich GT003 GPS tracker with Plaspy. It explains how the GT003 communicates its position and event telemetry to a Plaspy endpoint, and what role the device reporting protocol plays in integrating the tracker with fleet dashboards and alerts. The content focuses on non sensitive, high level protocol and connection details useful for installers, integrators, and fleet operators.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the GT003 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so installers should consider those variables when configuring and troubleshooting devices for continuous monitoring, ACC detection, geo fencing, overspeed alerts, and route history feeding into Plaspy.

## Protocol Overview

At a high level, the GT003 reporting protocol enables the device to identify itself to a server, transmit GPS positions and event telemetry, and support the delivery of usable location and alert data into a tracking platform such as Plaspy. The protocol is the mechanism that turns raw GPS and input events into structured messages the server can ingest for real time mapping, event processing, and historical reporting.

- Facilitates transmission of GPS coordinates and timestamps to the Plaspy reporting endpoint.
- Conveys event telemetry such as ACC ignition state, movement alerts, geo fence triggers, and overspeed events.
- Allows the server to associate incoming messages with a unique device identity for tracking and route history.
- Supports periodic and event driven reporting so telemetry can be timely while conserving mobile network usage.
- Provides the communications framework that enables Plaspy to translate device messages into dashboard updates and alerts.

## How Plaspy Detects the Protocol

Plaspy ingests device traffic sent to the shared Plaspy endpoint and automatically determines the tracker protocol from the incoming connection and message behavior. In most cases when a GT003 is correctly pointed at the Plaspy server, no manual protocol selection is required inside Plaspy.

- Plaspy uses a single shared server endpoint at d.plaspy.com and a fixed server IP of 54.85.159.138 for device reporting.
- The port used for all devices in Plaspy is 8888 and Plaspy uses the same port for every supported device.
- Plaspy automatically detects the tracker protocol when a device reports to the Plaspy endpoint and therefore manual protocol selection is generally unnecessary.
- Proper device configuration and the correct reporting address are the primary requirements for successful automatic detection.
- If a device sends location and event data to the Plaspy endpoint, Plaspy will map that data into the platform for mapping, alerts, and history.

## Transport and Connection Context

Transport and connection choices affect how the GT003 reaches the Plaspy service. The device can be set to use either UDP or TCP transport depending on its firmware and configuration, and it must point to the shared Plaspy endpoint to deliver data to the platform.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and installer preference.
- The Plaspy reporting host is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct addressing.
- All devices in Plaspy use the same port, which simplifies firewall and network settings for fleet deployments.
- Choose the transport mode that matches device capability and network reliability considerations on the vehicle SIM.
- Ensure the device APN and mobile data settings are correct so the tracker can establish outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Manufacturer firmware versions can change the exact reporting behavior and available telemetry fields, so verify firmware release notes when possible.
- Hardware revisions or regional variants of the GT003 may implement slightly different default transport or reporting options.
- Some features such as ACC input behavior, geo fence handling, or event debounce may be firmware dependent and vary by unit.
- Transport selection between UDP and TCP can affect delivery characteristics; test both if you encounter connectivity issues.
- Confirm the GT003 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy compatibility.
- Validate compatibility against official manufacturer documentation and release notes before large scale deployments.

## Why Protocol Understanding Matters

Understanding the GT003 communication protocol helps with setup, troubleshooting, and maintaining reliable telemetry to Plaspy. Clear protocol knowledge reduces configuration errors, speeds fault resolution, and supports consistent device behavior across a mixed fleet.

- Enables faster root cause analysis when a device fails to appear in Plaspy or stops reporting expected events.
- Helps installers choose the appropriate transport mode and APN settings for robust cellular connectivity.
- Improves confidence when validating that ACC, movement, geo fence, and overspeed events are delivered correctly.
- Guides decisions on firmware updates and compatibility testing before mass rollout.
- Supports network and firewall configuration by knowing the Plaspy server domain and the single port used by all devices.

## Why Use Plaspy with This Protocol

Using the Winrich GT003 with Plaspy provides a straightforward path to continuous vehicle visibility and event driven monitoring for fleets, rental operations, and security use cases. The GT003 delivers the core telemetry that Plaspy consumes for live mapping, route history playback, and alerting, while Plaspy handles ingestion, protocol detection, and presentation of the data to operators.

If you want to learn more about how Plaspy ingests and presents device data, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the most current device specific protocol information on the manufacturer website at http://www.winrichgroup.com/en/.
