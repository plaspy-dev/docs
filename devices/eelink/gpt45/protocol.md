---
slug: /eelink/gpt45/protocol
id: gpt45-protocol
sidebar_label: Protocol
title: EElink - GPT45 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for EElink GPT45 compatibility with Plaspy including connection settings and integration context
keywords:
  - eelink gpt45 protocol
  - eelink gpt45 gps protocol
  - eelink gpt45 communication protocol
  - eelink gpt45 tracking protocol
  - eelink gpt45 plaspy compatibility
  - gps tracker protocol integration
  - fleet tracking gpt45
  - eelink telemetry integration
  - vehicle tracker protocol
  - plaspy device compatibility
---

# EElink - GPT45 Protocol

This page provides a public protocol overview for using the EElink GPT45 tracker with Plaspy. It covers the communication context that matters when pointing GPT45 devices to Plaspy so you can understand how location, sensor telemetry, and event messages arrive in the platform. The content focuses on high level protocol roles and connection settings rather than firmware internals or private implementation details.

The GPT45 is a rechargeable, multi sensor tracker with GNSS, Wi Fi and LBS fallback, optional Bluetooth gateway support, and on device alarms and environmental sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review the manufacturer guidance alongside this overview when preparing large deployments.

## Protocol Overview

At a high level the tracker protocol defines how the GPT45 reports identity, position fixes, sensor telemetry, and alarm events to a backend service such as Plaspy. The protocol ensures the device and server exchange the necessary information for real time tracking, historical logging, and rule driven alerts without exposing device internals here.

- Enables device identification so Plaspy can associate incoming messages with a registered tracker and its metadata.
- Carries GNSS fixes and fallback location information so Plaspy can display live position and historical tracks.
- Reports event driven telemetry such as collision, vibration, fall, speed alarms, and environmental sensor values for rule triggers.
- Supports remote configuration and firmware update coordination through high level commands or configuration messages.
- Provides a reliable message flow to the backend so Plaspy can process alerts, store telemetry, and execute automations.

## How Plaspy Detects the Protocol

Plaspy receives connections from trackers at a single shared endpoint and automatically determines the incoming protocol format for supported devices. This means in most deployments you do not need to manually select a protocol inside the Plaspy platform as long as the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- The port used by Plaspy for all devices is 8888 so devices should report to that port.
- Devices may be configured to use either UDP or TCP on port 8888 based on device capabilities or site requirements.
- Plaspy automatically detects the tracker protocol when a properly formatted message arrives at the shared endpoint.
- Because detection is automatic, the common user task is ensuring device reporting settings match the Plaspy endpoint and transport.

## Transport and Connection Context

Understanding the transport and address that GPT45 devices use to reach Plaspy is important for network configuration and firewall rules. The GPT45 supports sending telemetry via standard network transports and should be pointed to the Plaspy endpoint for correct delivery.

- Devices may be configured using UDP or TCP on port 8888 depending on device support and chosen transport.
- Plaspy accepts device traffic addressed to d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port which simplifies outbound firewall and NAT traversal rules.
- Confirm device reporting settings include the correct domain or IP and the chosen transport protocol prior to deployment.
- In many cases setting the server to d.plaspy.com and the transport to UDP or TCP on port 8888 is sufficient for initial connectivity.

## Protocol Compatibility Notes

- Firmware versions can change message content and available features; verify the GPT45 firmware level when assessing compatibility.
- Hardware revisions or optional features such as Bluetooth gateway mode may influence which telemetry is reported.
- Manufacturer side configuration options or OEM customizations can create minor protocol variations between units.
- Choosing UDP versus TCP affects delivery behavior and may be relevant for network conditions or reliability needs.
- Always validate a sample device with Plaspy before commissioning large fleets to confirm expected telemetry and event mapping.
- Use official manufacturer documentation to confirm supported commands and any device specific configuration steps.

## Why Protocol Understanding Matters

A practical grasp of the communication protocol helps ensure reliable device onboarding, correct event mapping, and faster troubleshooting when issues arise. Knowing what the tracker sends and how Plaspy receives it reduces configuration loops and supports stable long term operation.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 on port 8888 using the correct transport.
- Helps diagnose missing telemetry or event messages by checking transport and reporting settings on the device.
- Guides decisions about network planning such as firewall rules, NAT, and carrier APN settings for cellular connectivity.
- Supports mapping of device alarms and sensor data into Plaspy rules and alerts for actionable monitoring.
- Aids in lifecycle tasks like firmware updates and configuration changes by clarifying expected message flows.

## Why Use Plaspy with This Protocol

Using the GPT45 with Plaspy gives organizations a compact, rechargeable tracker that feeds rich location and sensor telemetry into a single backend. That telemetry can be used for real time visibility, geofencing, alerting, and historical reporting so teams can operate more safely and efficiently without managing complex integration code.

To learn more about Plaspy and how it works with device protocols like the GPT45 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify current device specific protocol information and firmware notes on the manufacturer site at https://www.eelink.com.cn/.
