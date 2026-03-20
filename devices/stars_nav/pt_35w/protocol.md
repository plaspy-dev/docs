---
slug: /stars_nav/pt_35w/protocol
id: pt_35w-protocol
sidebar_label: Protocol
title: Stars Nav - PT-35W Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Stars Nav PT-35W GPS tracker and how it communicates with Plaspy for reliable tracking and alerts
keywords:
  - Stars Nav PT-35W protocol
  - Stars Nav PT-35W GPS protocol
  - PT-35W Plaspy compatibility
  - PT-35W communication protocol
  - PT-35W tracking protocol
  - Stars Nav GPS tracker protocol
  - PT 35W protocol documentation
  - Plaspy device protocol
  - fleet tracking Stars Nav PT 35W
  - marine GPS tracker PT 35W
---

# Stars Nav - PT-35W Protocol

This page describes the public protocol context for using the Stars Nav PT-35W tracker with Plaspy. It summarizes how the tracker typically communicates location, status, and alarms to a fleet management backend and what to expect when integrating the PT-35W into Plaspy for real time tracking, alerts, and telemetry. The content here focuses on publicly available, non sensitive integration details rather than manufacturer proprietary internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the PT-35W can vary by firmware version, hardware revision, carrier configuration and manufacturer implementation, so this page provides general guidance and practical context rather than firmware specific commands.

## Protocol Overview

The communication protocol for the PT-35W defines how the device conveys GPS fixes, status updates, alarm inputs and basic telemetry to a server. In practice, the protocol ensures the tracker can identify itself to a backend, report movement and sensor events, and allow remote controls where supported. For integration with Plaspy the focus is on reliable delivery of location and event data using standard device reporting methods.

- Enables the PT-35W to send periodic GPS location updates and status reports to a remote server.
- Carries alarm and input state such as panic alerts and engine on off status for event driven workflows.
- Provides device identification data so Plaspy can associate incoming reports with the correct asset record.
- Supports low power and wake on power behaviors so the device reports when external power returns or on scheduled wake events.
- Allows remote control via SMS where the device variant and carrier support SMS command channels.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared server endpoint and automatically determines the tracker protocol used by incoming connections. For most users this means there is no manual protocol selection in Plaspy: once the PT-35W is configured to report to the Plaspy endpoint, the platform will identify and process the device data automatically.

- Plaspy listens for device reports on a common endpoint at domain d.plaspy.com.
- The Plaspy server reachable by IP 54.85.159.138 accepts tracker connections for ingestion.
- All devices supported by Plaspy use the same port for incoming tracking data, which simplifies device configuration.
- Plaspy automatically detects the tracker protocol from the incoming connection and adapts processing accordingly.
- In typical setups the user only needs to point the PT-35W to the Plaspy endpoint and ensure the device is permitted by carrier settings.

## Transport and Connection Context

Connection transport determines how the PT-35W sends its reports to Plaspy but does not change the higher level purpose of the protocol. The PT-35W may be configured to use packet data channels or SMS depending on the variant and local network conditions. When using IP based reporting, the device can be directed to Plaspy using either the domain name or the numeric server address.

- The PT-35W may be configured to connect to Plaspy over either UDP or TCP depending on device support and configuration.
- Plaspy accepts device connections on port 8888 for all supported devices to simplify configuration.
- Devices can point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when required by network or carrier constraints.
- Using a single consistent port across devices reduces per device configuration errors and helps automatic detection.
- If SMS control or SMS reporting is used, those messages are treated separately from the IP based reporting channel and depend on carrier SMS routing.

## Protocol Compatibility Notes

- Firmware differences between PT-35W units can affect reporting intervals, supported events and remote control features.
- Hardware revisions and assembly variants may change which inputs or power behaviors are available on a particular unit.
- Carrier and SIM configuration (APN settings, SMS routing, data plan) influence whether IP reporting or SMS fallback is viable.
- Choosing UDP versus TCP for IP reporting can be determined by device capability and network reliability in your deployment area.
- Verify which variant of the PT-35W you have and align that with Plaspy ingest options before mass deployment.
- Always cross check compatibility and supported behaviors against the latest manufacturer documentation for the PT-35W.

## Why Protocol Understanding Matters

Understanding how the PT-35W communicates helps ensure a smooth setup, predictable operation, and efficient troubleshooting when used with Plaspy. Knowing the basic protocol roles and connection choices reduces integration friction and helps you pick the right configuration for reliability and power efficiency.

- Ensures device reporting intervals and wake behaviors match tracking needs and battery life expectations.
- Helps diagnose connectivity issues by confirming transport, endpoint and APN settings are correct.
- Guides decisions about using IP reporting or SMS based control and which features will be available.
- Supports planning for firmware updates and hardware variants that may change behavior over time.
- Improves incident response by confirming which alarm inputs and remote controls are forwarded to Plaspy.

## Why Use Plaspy with This Protocol

Using Plaspy with a PT-35W tracker provides a practical way to centralize location, alerts and basic telemetry for outdoor and marine assets. The PT-35W’s rugged IP66 housing, wide power input range, internal backup battery and SMS remote control capabilities align well with Plaspy workflows for fleet visibility, geofencing, and event driven alerts in challenging environments.

If you want to learn more about Plaspy features, supported connectivity patterns and how the platform handles device reporting, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and hardware variant information please verify with the manufacturer at http://www.starsnav.com/. Protocol support and device behavior can change with firmware and revisions so checking the official manufacturer documentation is recommended.
