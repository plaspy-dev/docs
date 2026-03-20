---
slug: /falcom/steppiii_ux/protocol
id: steppiii_ux-protocol
sidebar_label: Protocol
title: Falcom - STEPPIII-UX Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Falcom STEPPIII UX GPS tracker integration with Plaspy server and connection guidance
keywords:
  - Falcom STEPPIII UX protocol
  - Falcom STEPPIII UX GPS
  - STEPPIII UX tracking protocol
  - Falcom tracker Plaspy compatibility
  - STEPPIII UX fleet management
  - GPS tracker communication Plaspy
  - vehicle tracking Falcom STEPPIII
  - STEPPIII UX integration guide
  - Falcom geofencing protocol
  - tracking device protocol Plaspy
---

# Falcom - STEPPIII-UX Protocol

This page describes the public protocol context for using the Falcom STEPPIII-UX tracker with the Plaspy platform. It focuses on the communication role of the tracker reporting protocol and how that data is delivered to Plaspy for fleet management, AVL, security, and recovery use cases. The content is intended to explain the connection context and compatibility considerations without exposing private parsing or firmware internals.

The STEPPIII-UX is a versatile unit designed for mobile use with sensors, actors, voice features, geofencing, logging, and alerting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so implementation details and available features can differ between units and firmware releases.

## Protocol Overview

The tracker reporting protocol is the mechanism by which the STEPPIII-UX transmits telemetry, alerts, and status information to a remote server such as Plaspy. At a high level the protocol enables reliable delivery of position, event, and sensor data so Plaspy can present usable information to users and downstream systems.

- Enables the device to identify itself and associate reported messages with a vehicle or installation
- Carries telemetry such as GPS position, timestamped events, and basic sensor states for Plaspy processing
- Transports alerts and geofence notifications so Plaspy can trigger rules or user notifications
- Supports both session oriented and connectionless transport modes depending on device configuration
- Provides a consistent feed of position and status updates that Plaspy maps into assets and history records

## How Plaspy Detects the Protocol

Plaspy receives incoming connections and packets on a shared endpoint and automatically determines the device protocol in order to handle incoming messages appropriately. For most users this means that when a STEPPIII-UX is configured to report to Plaspy the platform will detect and accept its messages without requiring manual protocol selection.

- Plaspy listens on the shared server endpoint d.plaspy.com for tracker reports
- The Plaspy server public IP for this endpoint is 54.85.159.138 and the platform uses a single listening port for all devices
- The required network port for device reporting is 8888 which Plaspy uses for incoming tracker data
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is usually not necessary
- Ensure the tracker is configured to report to the Plaspy endpoint to allow automatic detection to occur

## Transport and Connection Context

Connection transport is the layer that carries protocol messages from the STEPPIII-UX to Plaspy. Depending on device options and configuration, the tracker can use either of the common transports supported by Plaspy to deliver data to the shared endpoint.

- The device may be configured to use UDP or TCP on port 8888 for reporting to Plaspy
- Devices can be pointed to the hostname d.plaspy.com or to the server IP 54.85.159.138 depending on network setup
- All devices in Plaspy use the same port which simplifies firewall and network configuration
- Choice of TCP versus UDP can affect delivery behavior and should match the device configuration options and manufacturer guidance
- Network level items such as NAT, firewall rules, and mobile operator filtering can influence connectivity to the Plaspy endpoint

## Protocol Compatibility Notes

- Protocol behavior and available messages can vary by firmware version and hardware revision on the STEPPIII-UX
- Manufacturer side configuration options may include reporting intervals, transport selection, and alternate alert channels such as SMS
- When integrating with Plaspy prefer TCP or UDP reporting on the shared Plaspy port 8888 and target d.plaspy.com or 54.85.159.138
- Devices that also support SMS or voice features can be useful for local alerting but Plaspy integration relies on network transport to the Plaspy endpoint
- Validate feature availability such as geofencing triggers, sensor inputs, and logging behavior against the device firmware release notes
- For large deployments consider testing representative firmware/hardware combinations to confirm expected behavior

## Why Protocol Understanding Matters

Understanding how the STEPPIII-UX communicates helps with setup, troubleshooting, and ensuring reliable long term operation in Plaspy. Knowledge of protocol and transport expectations reduces integration time and increases confidence that events and telemetry will reach the platform as intended.

- Helps verify correct server hostname or IP and port settings on the device for Plaspy reporting
- Aids in troubleshooting connectivity issues related to TCP versus UDP and network path problems
- Supports mapping of device events and sensor data into Plaspy asset configuration and rules
- Promotes consistent behavior across a mixed fleet by accounting for firmware and hardware differences
- Improves planning for firmware upgrades and operational testing to avoid unexpected changes in message sets

## Why Use Plaspy with This Protocol

Using the Falcom STEPPIII-UX with Plaspy provides organizations with a practical way to centralize position data, alerts, and sensor events for fleet visibility, security monitoring, and operational oversight. The device capabilities such as geofencing, logging, and alerting complement Plaspy features to deliver a complete tracking solution without requiring users to manage protocol selection inside the platform.

If you want to learn more about how Plaspy works with devices like the Falcom STEPPIII-UX visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and manufacturer specific configuration instructions verify information on the official Falcom site https://www.falcom.de since protocol support and firmware behavior can change over time.
