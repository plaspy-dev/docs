---
slug: /supermate/d10_w/protocol
id: d10_w-protocol
sidebar_label: Protocol
title: Supermate - D10-W Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Supermate D10 W GPS tracker and how it communicates with Plaspy for reliable device integration
keywords:
  - Supermate D10 W protocol
  - Supermate D10 W GPS
  - Supermate D10 W Plaspy
  - Supermate tracking protocol
  - D10 W communication
  - GPS tracker Plaspy
  - vehicle tracking Supermate D10
  - asset tracking D10 W
  - fleet management D10 W
  - Supermate protocol compatibility
---

# Supermate - D10-W Protocol

This page provides a public, non sensitive overview of the communication protocol context for using the Supermate D10 W GPS tracker with Plaspy. It explains the role of the tracker reporting protocol in getting location, status, and alert data into the Plaspy platform while remaining focused on general, implementable connections rather than firmware internals.

The Supermate D10 W is a compact tracker designed for personal and fleet use with features such as real time tracking, geo fencing, and an emergency SOS button. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior can vary with firmware version, hardware revision, and manufacturer implementation, so device specific differences may affect how messages are formatted and when they are sent.

## Protocol Overview

The tracker protocol is the set of behaviors the device uses to report position, status, and event information to a backend server. For integration with Plaspy, the protocol determines how the device identifies itself, reports GPS and alarm events, and responds to basic configuration or keepalive interactions.

- Enables the D10 W to send location updates and event notifications to Plaspy for real time monitoring.
- Carries device identification data so Plaspy can associate reports with the correct asset.
- Conveys alarm and SOS events in a way Plaspy can surface to users and integrations.
- Supports periodic heartbeats or status reports to indicate device availability.
- Allows configuration changes and remote commands when the device and manufacturer permit server driven updates.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and automatically determines which tracker protocol is being used for each connection. This reduces the need for manual protocol selection within Plaspy when the device is pointed at the Plaspy endpoint.

- Plaspy listens on a single public endpoint at d.plaspy.com and will also accept connections to the public server IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol used by the device.
- When a D10 W is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is generally not required.
- Proper device configuration on the tracker side ensures the platform receives identifications and events in a way it can process.

## Transport and Connection Context

Connection options are part of the broader communication context but not the internal message format. The D10 W can be configured to use common IP transport protocols supported by the device and network environment, and Plaspy supports those transports on its shared port.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- Devices can point to the hostname d.plaspy.com or to the IP address 54.85.159.138 as the reporting endpoint.
- Plaspy accepts both UDP and TCP connections on the same port used across all supported devices.
- Ensure the tracker APN and server settings are set to report to the Plaspy endpoint so messages reach the platform.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message timing and available event types; verify which behaviors apply to your D10 W unit.
- Manufacturer configuration menus sometimes expose transport choice, reporting interval, and event triggers that affect how the device interacts with Plaspy.
- Some D10 W units may support both UDP and TCP; select the transport that matches your network environment and device settings.
- Device side alarms such as SOS or geo fence events depend on local configuration and may require explicit enablement.
- Validate compatibility by checking the device is pointed to d.plaspy.com or 54.85.159.138 and using the shared Plaspy port.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure reliable delivery of location and event data to Plaspy and speeds up setup and troubleshooting when integration issues arise.

- Makes it easier to verify that the device is correctly configured to report to the Plaspy endpoint.
- Helps teams interpret device behavior such as reporting intervals and event triggers.
- Improves troubleshooting when messages are not arriving or events are missing.
- Supports planning for firmware updates and hardware revisions that may affect communication.
- Clarifies expectations for remote configuration and what elements are handled by the device versus the server.

## Why Use Plaspy with This Protocol

Using the Supermate D10 W with Plaspy gives organizations a practical way to collect location, boundary alerts, and emergency events in a unified platform. Plaspy’s automatic protocol detection and single endpoint approach simplify onboarding and reduce the amount of per device manual configuration required on the server side.

Plaspy provides centralized visibility for fleets and assets, making it easier to use D10 W reports for routing, safety monitoring, and operational oversight. To learn more about Plaspy and how it handles device connections visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information with the manufacturer at http://www.gps-summit.com/
