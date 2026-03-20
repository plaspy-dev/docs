---
slug: /flextrack/lommy_personal/protocol
id: lommy_personal-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Personal Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Flextrack Lommy Personal and how the tracker communicates with Plaspy for reliable personal tracking and integration
keywords:
  - Flextrack Lommy Personal protocol
  - Flextrack Lommy Personal GPS protocol
  - Lommy Personal tracking protocol
  - Flextrack protocol Plaspy compatibility
  - Lommy Personal GPS tracker
  - personal safety tracker protocol
  - device protocol Plaspy
  - GPS tracking Flextrack
  - Lommy Personal communication
  - tracking protocol integration
---

# Flextrack - Lommy Personal Protocol

This page describes the public protocol context for using the Flextrack Lommy Personal tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non sensitive terms and what to keep in mind when configuring reporting and connectivity for reliable personal tracking.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page provides general guidance while recommending that you verify device specific details with the manufacturer documentation.

## Protocol Overview

The communication protocol for a personal tracker like the Lommy Personal defines how the device reports its location, status, and alerts to a server such as Plaspy. In practical terms, the protocol enables the tracker to identify itself to the server, transmit telemetry, and support basic remote commands or acknowledgements as provided by the manufacturer.

- Enables periodic and event driven position reports from the Lommy Personal to the tracking server.
- Carries device identity and status information so Plaspy can associate reports with the correct asset or person.
- Supports optional telemetry such as battery level, SOS events, and signal quality depending on device firmware.
- Allows Plaspy to present actionable location and status information for monitoring and safety workflows.
- Works alongside transport choices like UDP or TCP to deliver messages to the server endpoint.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic on a shared endpoint and port and uses automated detection to identify the device protocol. In most cases when the Lommy Personal is configured to report to the Plaspy endpoint, the platform recognizes the format and starts processing messages without manual protocol selection.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on device capabilities and settings.
- When a Lommy Personal reports to d.plaspy.com on the configured port, Plaspy will automatically detect and process the tracker protocol.
- You typically do not need to select a protocol inside Plaspy if the device is correctly configured to send data to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the Lommy Personal reaches Plaspy over the network and what settings are commonly used during setup. Transport selection and DNS versus direct IP addressing are practical considerations when installing devices in the field.

- Devices may point to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 for reporting.
- The device may be configured using UDP or TCP on port 8888; choose the transport supported by the device and suited to your network environment.
- All devices in Plaspy use the same port which simplifies server configuration and onboarding.
- Ensure mobile or network firewalls allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888 for successful reporting.
- Network stability and operator coverage will influence reporting frequency and timely delivery of location updates.

## Protocol Compatibility Notes

- Firmware revisions can change how a Lommy Personal formats or schedules reports; verify the firmware version when troubleshooting.
- Hardware revisions and optional extended battery variants may affect reported telemetry fields and power management behavior.
- Manufacturer side configuration menus or setup tools can enable or disable features that affect protocol behavior.
- Choosing UDP or TCP transport should match the device configuration and your network constraints; one may be more reliable than the other in certain environments.
- Always confirm the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 when onboarding to Plaspy.
- Validate compatibility by testing a device end to end before large scale deployment and consult manufacturer documentation for device specific options.

## Why Protocol Understanding Matters

Understanding the Lommy Personal communication protocol helps ensure a smooth setup, reliable operation, and faster resolution of connectivity or reporting issues when the device is used with Plaspy.

- Faster troubleshooting when reports do not appear because you can confirm transport, endpoint, and basic reporting behavior.
- Better configuration choices for reporting intervals and event triggers based on what the device firmware supports.
- Clearer expectations for battery life and telemetry driven by how often the device transmits and what fields are included.
- Improved deployment planning by validating network requirements like DNS, IP access, and port allowances.
- Easier coordination with manufacturers or integrators when you can describe observed behavior in protocol aware terms.

## Why Use Plaspy with This Protocol

Using the Flextrack Lommy Personal with Plaspy provides a practical way to bring personal safety devices into a single monitoring and management environment. Plaspy can ingest location and status reports from the Lommy Personal and present them alongside other tracked assets for consolidated visibility and operational oversight.

If you want to learn more about Plaspy and how it works with devices like the Lommy Personal visit https://www.plaspy.com. For the most current device specific protocol, firmware behavior, and implementation details always verify information with the manufacturer at https://flextrack.dk since protocol support and firmware features can change over time.
