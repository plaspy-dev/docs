---
slug: /thinkrace/traxbean_bracelet/protocol
id: traxbean_bracelet-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean Bracelet Protocol
sidebar_class_name: menu_item_tracker
description: Detailed protocol context for using the Traxbean Bracelet with Plaspy and device communication settings
keywords:
  - ThinkRace Traxbean Bracelet protocol
  - ThinkRace Traxbean Bracelet GPS protocol
  - Traxbean Bracelet communication protocol
  - Traxbean Bracelet tracker compatibility
  - ThinkRace wearable GPS tracker
  - Plaspy compatible tracker
  - offender monitoring GPS protocol
  - tamper detection tracking protocol
  - geofencing tracking protocol
  - tracking protocol integration
---

# ThinkRace - Traxbean Bracelet Protocol

This page summarizes the public protocol context for using the ThinkRace Traxbean Bracelet with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so system architects, integrators, and administrators can understand the role of device reporting, event delivery, and telemetry without exposing private implementation details. The Traxbean Bracelet is described as a compact, wearable GPS tracker for community corrections and monitoring that combines satellite positioning, assisted locating, RF indoor positioning, tamper detection, SOS and two way voice features — those capabilities are the kinds of events and telemetry the protocol carries to a backend platform like Plaspy.

Plaspy uses a set of shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly pointed at the Plaspy endpoint. For Plaspy the public server endpoint is d.plaspy.com with a reachable IP of 54.85.159.138 and a single port for all devices, port 8888. Devices may be configured to use either UDP or TCP on port 8888 depending on the device firmware and operator choice. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a platform integration level while encouraging verification against manufacturer documentation.

## Protocol Overview

The communication protocol for the Traxbean Bracelet defines how location fixes, events, and device status are transmitted from the wearable to a backend such as Plaspy and how control or acknowledgement messages are returned when supported. In practice the protocol's role is to ensure that telemetry from the bracelet is usable by Plaspy workflows for alerts, geofencing, tamper detection, and integrator APIs.

- Carries position reports and assisted locating data so Plaspy can display near real time locations and history.
- Conveys event types such as SOS activations, tamper or strap cut alerts, low battery, and voice session requests to trigger platform workflows.
- Provides device identification and status metadata so Plaspy can associate incoming messages with the correct device record.
- Enables regular heartbeat or keepalive messages that help Plaspy maintain reliable connectivity and detect offline conditions.
- Transports configuration acknowledgements when remote settings or updates are supported by the bracelet firmware.

## How Plaspy Detects the Protocol

Plaspy’s ingest endpoint is designed to accept connections from many supported tracker models and automatically detect the protocol used by an individual device once it reports to the shared endpoint. This reduces the need for manual protocol selection inside Plaspy when devices are configured to send data to the Plaspy server.

- All Plaspy devices report to the same port so a device pointed at d.plaspy.com on port 8888 will reach the platform.
- The Plaspy public endpoint is d.plaspy.com and the known public IP is 54.85.159.138 for connectivity reference.
- Devices may use UDP or TCP on port 8888; Plaspy accepts both transports and handles the incoming traffic.
- When a Traxbean Bracelet is configured to report to the Plaspy endpoint, Plaspy attempts automatic protocol identification and data mapping.
- Typically the end user or provisioning system does not need to manually select a protocol in Plaspy if the device is correctly configured to send to the Plaspy server.

## Transport and Connection Context

Connection context covers how the Traxbean Bracelet reaches the Plaspy platform over cellular networks and how those network choices affect setup. The bracelet can use cellular data and assisted locating methods; at the network layer it will open a session to the Plaspy endpoint using the supported transport.

- Devices may be configured to send data via UDP or TCP to port 8888 on the Plaspy endpoint.
- The Plaspy host for device reporting is d.plaspy.com with a public IP of 54.85.159.138 documented for network allowlisting.
- Plaspy uses the same port, 8888, for all supported trackers which simplifies firewall and NAT configuration on enterprise networks.
- Choose UDP or TCP based on device firmware options and carrier performance; some carrier networks may favor one transport for reliability or cost.
- Ensure that outbound traffic to d.plaspy.com or 54.85.159.138 on port 8888 is allowed from the device network environment.

## Protocol Compatibility Notes

- Firmware versions on the Traxbean Bracelet can change message timing, supported events, or optional telemetry fields; confirm exact behavior for your firmware.
- Hardware revisions may introduce different sensor sets or tamper reporting behavior that affects what the protocol reports to Plaspy.
- Manufacturer side settings and regional product variants can influence which assisted locating methods and bands are available and how those details are represented in telemetry.
- Transport selection between UDP and TCP is often configurable; pick the transport that matches device firmware capability and your network reliability needs.
- Validate expected event names and payloads against ThinkRace documentation when integrating advanced workflows such as two way voice or custom telemetry.
- Confirm network allowlisting of d.plaspy.com and 54.85.159.138 on port 8888 where enterprise firewalls are used.

## Why Protocol Understanding Matters

A clear, high level understanding of the Traxbean Bracelet communication protocol helps administrators and integrators ensure reliable data flow, effective troubleshooting, and predictable behavior when devices are deployed with Plaspy.

- Makes provisioning easier by ensuring devices are pointed at d.plaspy.com or 54.85.159.138 on port 8888 with the correct transport.
- Helps troubleshoot missing telemetry by checking transport, DNS resolution to d.plaspy.com, and firewall rules for port 8888.
- Supports accurate mapping of device events such as tamper alerts, SOS, and geofence triggers into Plaspy workflows and notifications.
- Reduces integration time because Plaspy automatically detects the tracker protocol once the device reports to the shared endpoint.
- Aids lifecycle management by clarifying which firmware or hardware changes could require configuration updates or revalidation.

## Why Use Plaspy with This Protocol

Using the Traxbean Bracelet together with Plaspy provides a straightforward path for organizations that need continuous person centric monitoring, tamper detection, and event driven supervision. Plaspy surfaces location, geofence events, tamper and SOS alerts, and other telemetry from the bracelet into dashboards and notification workflows so supervisors and integrators can act on compliance and safety events in near real time.

To learn more about Plaspy and how the platform ingests device telemetry, visit https://www.plaspy.com. For the most current and device specific protocol or firmware details, please verify information with the manufacturer at https://www.thinkrace.com/ since protocol support, firmware behavior, and implementation details can change over time.
