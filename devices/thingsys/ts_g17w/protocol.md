---
slug: /thingsys/ts_g17w/protocol
id: ts_g17w-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17W Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for ThingSys TS G17W tracker integration with Plaspy server for reliable real time tracking and fleet management
keywords:
  - ThingSys TS G17W protocol
  - TS G17W GPS protocol
  - ThingSys tracker Plaspy compatibility
  - TS G17W communication protocol
  - TS G17W tracking protocol
  - ThingSys GPS tracker protocol
  - Plaspy device protocol
  - vehicle tracking TS G17W
  - TS G17W fleet tracking
  - TS G17W integration guide
---

# ThingSys - TS-G17W Protocol

This page describes the public protocol context for using the ThingSys TS-G17W tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non sensitive terms so integrators and fleet managers can understand connection requirements, expected behavior, and practical compatibility considerations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the TS-G17W can vary with firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance while encouraging verification against ThingSys documentation for firmware specific details.

## Protocol Overview

The TS-G17W reporting protocol is the mechanism by which the tracker sends location, status, and alarm data to a remote server such as Plaspy. In practical terms the protocol defines how the device identifies itself, which messages it sends under different events, and how the platform ingests those messages into live tracking and event systems.

- Enables the device to send periodic and event driven location updates to a backend server for mapping and history.
- Carries alarm and telemetry data such as ignition state, overspeed alerts, and vibration events for use in rules and notifications.
- Allows the tracker to identify itself so Plaspy can attribute incoming reports to the correct asset and account.
- Provides a stable channel for remote commands and trace modes when supported by the device and network conditions.
- Supports both real time push reporting and fallback behaviours (for example SMS or alternate reporting modes) as implemented by the manufacturer.

## How Plaspy Detects the Protocol

Plaspy receives reports from many tracker types at a shared network endpoint and automatically determines the device protocol based on the incoming connection and message stream. This automatic detection simplifies onboarding when a TS-G17W is configured to report to Plaspy.

- Plaspy listens on a single port for all supported devices and automatically detects the tracker protocol.
- Devices sending data to Plaspy should point at the Plaspy endpoint to enable automatic detection.
- When a TS-G17W is configured correctly, users typically do not need to manually select a protocol inside Plaspy.
- Plaspy supports both TCP and UDP connections for incoming device reports depending on device configuration.
- Proper device identifier configuration on the tracker ensures Plaspy can match messages to assets and user accounts.

## Transport and Connection Context

Connection settings are a key part of ensuring reliable reporting. The TS-G17W can be configured to use either UDP or TCP transport to reach Plaspy, and the device can resolve the server by domain name or by IP address depending on provisioning choices.

- Devices may be pointed to the Plaspy server domain d.plaspy.com for DNS based resolution.
- As an alternative the Plaspy server IP 54.85.159.138 may be used where direct IP configuration is preferred.
- The network port used for all Plaspy device connections is 8888 and Plaspy uses the same port for all supported devices.
- The TS-G17W can operate over GPRS or LTE cellular links to deliver reports to the Plaspy endpoint.
- Choose TCP or UDP on the device according to the tracker configuration and operator recommendations; Plaspy accepts both transports on the shared port.

## Protocol Compatibility Notes

- Firmware variations can change message content or reporting intervals; always check device firmware notes for changes that affect data fields or message timing.
- Hardware revisions or regional banding for LTE and 2G fallback can affect connectivity behaviour in different countries.
- Some device features such as specific alarm types or remote command sets may be optional or require particular firmware builds to be present.
- Transport selection (UDP versus TCP) is configurable on the device and can influence delivery characteristics under different network conditions.
- Make sure the device identifier and APN settings are correct so the tracker can reach the Plaspy endpoint reliably.
- Validate compatibility and any feature limitations against ThingSys official documentation for the exact model and firmware you are deploying.

## Why Protocol Understanding Matters

Understanding how the TS-G17W communicates helps with setup, troubleshooting, and long term reliability when feeding data into Plaspy. A clear grasp of the protocol and transport context reduces onboarding time and makes troubleshooting connectivity or reporting issues faster and more predictable.

- Ensures devices are configured to report to the correct Plaspy endpoint and transport for automatic protocol detection.
- Helps identify whether issues are network, transport, or device configuration related during troubleshooting.
- Informs sensible choices for reporting intervals and alarm configuration to balance data needs and cellular costs.
- Supports planning for firmware upgrades or hardware revisions that may change message behavior.
- Allows integrators to confirm that alarm and telemetry fields required by fleet workflows are included in device reports.

## Why Use Plaspy with This Protocol

Using the TS-G17W with Plaspy brings rugged vehicle tracking data into a single platform for visibility, alerts, and operational oversight. The device delivers location and event information that Plaspy ingests and presents as live positions, historical tracks, and rule driven notifications useful for fleet managers, logistics operators, and security teams.

Plaspy accepts TS-G17W reports at the shared server endpoint and port, automatically detects the tracker protocol, and correlates incoming messages to assets for mapping, geofencing, and automation. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device protocol details, firmware behavior, and implementation notes on the manufacturer site https://www.thingsys.com/ as these items can change over time.
