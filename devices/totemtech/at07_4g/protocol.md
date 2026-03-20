---
slug: /totemtech/at07_4g/protocol
id: at07_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT07-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Totemtech AT07 4G tracker and how it communicates with Plaspy for real time tracking and telemetry
keywords:
  - Totemtech AT07-4G protocol
  - Totemtech AT07-4G GPS protocol
  - Totemtech AT07-4G Plaspy
  - AT07-4G tracking protocol
  - AT07-4G telemetry compatibility
  - Totemtech tracker communication
  - GPS tracker Plaspy compatibility
  - vehicle tracking Totemtech
  - fleet management tracker protocol
  - AT07-4G peripheral telemetry
---

# Totemtech - AT07-4G Protocol

This page describes the public protocol context for using the Totemtech AT07-4G tracker with the Plaspy platform. It focuses on how the device reports location and telemetry into Plaspy and what role the device communication protocol plays in reliable tracking for fleet and asset management. The content is intended to be public facing and informative rather than a firmware level specification.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and available commands can vary by firmware version, hardware revision and manufacturer implementation, so device behavior may differ across installations.

## Protocol Overview

The protocol used by the AT07-4G governs how GNSS fixes, I/O events, sensor telemetry and alarm messages are transmitted from the tracker to Plaspy. In practical terms the protocol enables identification, time stamping, and delivery of records that Plaspy converts into location history, live positions, and event alerts.

- Provides a structured way for the device to send location fixes and movement data to Plaspy for mapping and history.
- Transmits digital and analog event states such as door, ignition, SOS, external power, and vibration alerts so Plaspy can trigger notifications.
- Delivers sensor telemetry from RS232, 1-wire, and analog inputs so Plaspy can present fuel, temperature and other metrics.
- Supports buffered storage and replay so stored position records are delivered to Plaspy after network restoration.
- Allows the device to identify itself and associate records with a vehicle or asset monitored in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a common tracking endpoint and automatically detects the tracker protocol based on the data the device submits. This means users do not normally need to select a protocol manually inside Plaspy once the device is properly configured to report to the Plaspy endpoint.

- Plaspy accepts reports on a shared endpoint and port so devices can point to the same host for ingestion.
- Plaspy automatically detects the tracker protocol when a device connects and sends reporting data.
- In most setups the user configures the device to report to the Plaspy server and no manual protocol selection is required.
- Proper device configuration and a working cellular link are the typical requirements for automatic detection.

## Transport and Connection Context

The AT07-4G can be configured to send data to Plaspy using standard transport options supported by most tracking devices. Plaspy exposes a single public endpoint for device reporting and devices may be set to use either UDP or TCP depending on the tracker configuration and network environment.

- Devices may be configured to report to the domain d.plaspy.com or to the public server IP 54.85.159.138.
- Plaspy receives device traffic on port 8888 and the AT07-4G may be configured for UDP or TCP on that same port.
- All devices in Plaspy use the same port for reporting so a single port strategy simplifies device fleet setup.
- Transport selection (UDP versus TCP) depends on device firmware options and the reliability requirements of the deployment.
- Ensure outbound data from the device is allowed by any intermediate firewall or carrier APN settings so reports reach Plaspy.

## Protocol Compatibility Notes

- The AT07-4G is compatible with Plaspy for real time tracking and telemetry reporting when configured to report to the Plaspy endpoint.
- Firmware revisions and configuration options can change message timing, supported transport, or available telemetry fields.
- Different hardware variants and cellular band configurations may include small protocol or behavior differences across production runs.
- Some peripheral features such as RS232 fuel sensors, 1-wire temperature, or specific analog inputs require matching device configuration and server-side mapping.
- The device can stream to multiple servers simultaneously in many configurations; confirm reporting target settings if you use parallel endpoints.
- Validate compatibility for advanced features like remote control outputs or specialized sensors against the manufacturer documentation.

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps ensure a smooth initial setup, effective troubleshooting, and predictable behavior in production deployments. Understanding the public protocol context supports correct device configuration, transport selection, and mapping of I/O into Plaspy dashboards and alerts.

- Ensures accurate mapping of device I/O and sensor channels to Plaspy telemetry fields.
- Helps diagnose connectivity issues such as wrong reporting endpoint, blocked ports, or incorrect transport selection.
- Clarifies how buffered records are delivered after network loss and what to expect in historical traces.
- Aids planning for firmware updates and how they might change reporting behavior or available telemetry.
- Improves event rule configuration by matching alarm types reported by the device to Plaspy alerts.

## Why Use Plaspy with This Protocol

Using the Totemtech AT07-4G with Plaspy gives organizations a practical path to real time vehicle location, event monitoring and sensor telemetry in a single platform. The combination of fast GNSS fixes, peripheral interfaces and local buffering on the AT07-4G with Plaspy ingestion supports continuous visibility, alerting and operational reporting for fleets and assets.

If you want to learn more about Plaspy and how it can work with Totemtech devices visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so please verify the latest device and protocol information on the manufacturer website http://www.totemtek.com/ before deployment.
