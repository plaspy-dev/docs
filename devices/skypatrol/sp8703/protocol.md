---
slug: /skypatrol/sp8703/protocol
id: sp8703-protocol
sidebar_label: Protocol
title: SkyPatrol - SP8703 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SkyPatrol SP8703 integration with Plaspy
keywords:
  - SkyPatrol SP8703 protocol
  - SkyPatrol SP8703 GPS protocol
  - SP8703 Plaspy compatibility
  - SkyPatrol tracking protocol
  - personal tracker protocol
  - SP8703 communication
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - portable asset tracker protocol
  - SOS tracker protocol
---

# SkyPatrol - SP8703 Protocol

This page describes the public protocol context for using the SkyPatrol SP8703 with Plaspy. It focuses on how the device communicates with Plaspy in general terms, how connection settings are applied, and what to consider during integration and troubleshooting. The content is intended for technical users who need a clear, non sensitive overview of device to platform communication.

The SP8703 is a compact personal tracker with Wi Fi, dual cellular support, SOS button, and a 3 axis accelerometer. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device specific details should be validated against SkyPatrol documentation.

## Protocol Overview

The protocol for the SP8703 defines how the device sends location, status, and event information to a backend server so Plaspy can display positions, trigger alerts, and record history. This overview keeps the focus on the role of the communication layer rather than on proprietary or firmware specific packet formats.

- Enables periodic or event driven transmission of GNSS assisted location, Wi Fi assisted positioning, and telemetry such as battery and accelerometer events.
- Carries SOS and panic alerts so Plaspy can surface emergency notifications with the device last known position.
- Provides identification and status information so Plaspy can associate incoming messages with the correct asset or user account.
- Supports low power reporting behavior to preserve battery life while still providing timely updates for personal safety scenarios.
- Allows transport over standard IP protocols so devices can connect to the Plaspy endpoint for centralized processing.

## How Plaspy Detects the Protocol

Plaspy accepts device traffic on a shared endpoint and automatically determines the device protocol based on the incoming connection and payload characteristics. In most deployments users do not need to manually select a protocol inside Plaspy when the device is configured to report correctly to the platform.

- Plaspy receives device reports on the same configured port for all supported devices and attempts automatic protocol identification.
- When an SP8703 is pointed to the Plaspy endpoint and sends data, Plaspy will match the device messages to the appropriate handling logic.
- For typical setups users configure the device to report to the Plaspy server and do not need to change protocol settings inside the platform.
- Automatic detection reduces configuration complexity but does not replace confirming device settings and firmware behavior with the manufacturer.

## Transport and Connection Context

Connection choices affect how the SP8703 reaches Plaspy but not the overall role of the protocol itself. The SP8703 can use cellular and Wi Fi to establish IP connectivity and then transport protocol messages to the Plaspy server using standard transport methods.

- Devices may be configured to use either UDP or TCP to send messages to Plaspy on port 8888.
- Plaspy accepts connections addressed to the server domain d.plaspy.com or directly to the public IP 54.85.159.138.
- All devices managed by Plaspy use the same port for reporting which simplifies device configuration and firewall rules.
- Transport selection can be driven by device capabilities, network conditions, or desired delivery semantics for messages.
- Ensure device APN and network settings allow outbound connections to the Plaspy endpoint to ensure reliable reporting.

## Protocol Compatibility Notes

- Firmware variations can change message contents, reporting intervals, or supported features even within the same model.
- Hardware revisions and regional variants may alter supported transports or available sensors such as Wi Fi assisted positioning.
- Choosing UDP or TCP affects delivery behavior and may influence how retries and timeouts behave on intermittent networks.
- SOS and accelerometer event behavior can be firmware controlled and should be validated in test scenarios before production use.
- Always verify configuration steps such as APN, server address, and transport protocol against the device user manual.
- If integration requires advanced command and control, confirm whether the device supports remote configuration and how those commands are authenticated.

## Why Protocol Understanding Matters

Knowing how the SP8703 communicates helps ensure successful setup, reliable reporting, and predictable behavior in Plaspy. A practical grasp of the communication context speeds troubleshooting and helps teams design resilient deployments for personal safety and asset monitoring.

- Speeds initial setup by confirming the correct server address and transport are used on the device.
- Helps diagnose connectivity issues by checking whether traffic reaches d.plaspy.com or the fallback IP.
- Guides decisions about transport selection when operating on cellular networks with variable performance.
- Supports verification of SOS and motion alert delivery during test drills before critical use.
- Informs battery optimization strategies by aligning reporting intervals and event triggers with real world needs.

## Why Use Plaspy with This Protocol

Using the SP8703 with Plaspy provides centralized visibility for personal safety and portable asset scenarios. The device hardware, including Wi Fi, dual cellular radios, SOS button, and accelerometer, pairs with Plaspy to deliver live location, alerts, and historical playback without requiring vehicle centric interfaces. This combination is well suited to lone worker protection, vulnerable person monitoring, and portable asset tracking where compact form factor and low power consumption are priorities.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notices, and manufacturer guidance please verify current information at https://www.skypatrol.com/ as protocol support and firmware behavior can change over time.
