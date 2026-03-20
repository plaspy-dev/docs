---
slug: /thinkrace/traxbean_palm/protocol
id: traxbean_palm-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean Palm Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ThinkRace Traxbean Palm integration with Plaspy servers and connection settings
keywords:
  - ThinkRace Traxbean Palm protocol
  - ThinkRace Traxbean Palm GPS protocol
  - Traxbean Palm communication protocol
  - Traxbean Palm tracker Plaspy
  - Traxbean Palm tracking protocol
  - ThinkRace GPS tracker protocol
  - Traxbean Palm Plaspy compatibility
  - ThinkRace handheld GPS protocol
  - personnel tracker protocol
  - GPS tracker protocol Plaspy
---

# ThinkRace - Traxbean Palm Protocol

This page describes the public protocol context for using the ThinkRace Traxbean Palm with Plaspy. It focuses on how the device communicates to Plaspy servers, which kinds of telemetry and events the platform ingests, and the connection settings commonly used for the Palm. The content is intended to be non sensitive and useful for administrators and integrators planning device registration and monitoring with Plaspy.

The Traxbean Palm is a compact handheld tracker that reports GPS fixes, assisted locations, SOS events, voice and camera data. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so device specific details should be confirmed against ThinkRace documentation when necessary.

## Protocol Overview

The communication protocol is the set of rules the Traxbean Palm uses to report location, events, and telemetry to a server. With Plaspy, the protocol determines how the device identifies itself, how position and assisted location data are packaged, and how event flags such as SOS, voice calls or camera triggers are delivered for processing and alerting.

- Enables reporting of GPS fixes and assisted locating data so Plaspy can generate real time position updates.
- Conveys event types and metadata such as SOS presses, two way voice call events, and camera capture indicators for incident context.
- Provides timestamps and device identification so Plaspy can correlate telemetry with account records and rules.
- Supports periodic telemetry and on demand messages so Plaspy can apply geofences, notifications, and historical logging.
- Allows transport over standard network sockets so the device can deliver messages over mobile data to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and port and inspects the inbound messages to determine the tracker protocol. Because the platform uses a common entry point, most Traxbean Palm units only need to be pointed to the Plaspy server and require no manual protocol selection inside Plaspy.

- Plaspy server endpoint is d.plaspy.com and the public server IP is 54.85.159.138.
- The common port for Plaspy devices is 8888 and all devices supported by Plaspy use the same port.
- Devices may be configured to use either UDP or TCP on port 8888 depending on device capability and user preference.
- When a properly configured device reports to the Plaspy endpoint the platform automatically detects the tracker protocol.
- In most cases users do not need to select a protocol manually in Plaspy if the device is sending to the correct endpoint and port.

## Transport and Connection Context

Connection context describes how the Traxbean Palm reaches Plaspy over mobile networks. The Palm typically uses 4G/LTE data to open network connections and can be configured to target Plaspy either by domain name or by IP address depending on provisioning tools or SIM APN settings.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The device may use UDP or TCP transport on port 8888 depending on device support and chosen settings.
- Port 8888 is the single port Plaspy uses for all supported devices, simplifying firewall and NAT configuration.
- Network resiliency considerations such as retransmission, session persistence, and mobile data handoffs are handled at the device and network layer.
- Ensure APN and SIM data settings allow outbound connections to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware variations across Traxbean Palm units can change which events or auxiliary features are reported and how they are encoded.
- Hardware revisions or optional modules (for example different camera or RF indoor locating components) may alter available telemetry or event types.
- Transport choice between UDP and TCP may affect delivery characteristics for time sensitive events like SOS or live voice.
- Regional carrier differences and roaming behavior can influence connectivity and require validation during deployment.
- Always validate compatibility and feature availability for a given hardware and firmware combination using official ThinkRace documentation.
- Testing a sample device with your Plaspy account is recommended before large scale rollout to confirm expected behavior.

## Why Protocol Understanding Matters

Understanding how the Traxbean Palm communicates helps ensure accurate device registration, predictable event handling, and efficient troubleshooting when integrating with Plaspy. Clear knowledge of the communication context reduces deployment friction and supports reliable long term monitoring.

- Helps verify that the device is pointed to the correct Plaspy endpoint and using port 8888 for successful ingestion.
- Enables faster diagnosis when telemetry or SOS events do not appear in Plaspy by checking transport and network settings.
- Supports correct mapping of device events to Plaspy workflows such as geofences, alerts, and incident streams.
- Guides decisions about choosing UDP or TCP based on desired delivery and latency characteristics.
- Assists integrations that combine Palm data with other telemetry sources for unified operational views.

## Why Use Plaspy with This Protocol

Using the Traxbean Palm with Plaspy gives organizations a practical way to turn personnel safety telemetry into actionable monitoring and response workflows. Plaspy ingests location, assisted positioning, SOS events, and visual or audio context so operations teams can receive timely alerts, apply geofence logic, and view historical tracks alongside other fleet or device telemetry.

If you want to learn more about how Plaspy processes device data and supports integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer implementation notes please verify information on the ThinkRace website at https://www.thinkrace.com/ as manufacturer documentation and firmware may change over time.
