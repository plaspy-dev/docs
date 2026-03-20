---
slug: /winrich/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: Winrich - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Winrich TK103 communication and Plaspy compatibility for reliable vehicle tracking
keywords:
  - Winrich TK103 protocol
  - Winrich TK103 GPS protocol
  - TK103 Plaspy compatibility
  - Winrich tracker communication
  - TK103 vehicle tracking protocol
  - Plaspy tracker integration
  - GPS tracker protocol guide
  - TK103 GPRS SMS reporting
  - fleet tracking Winrich TK103
  - tracker protocol documentation
---

# Winrich - TK103 Protocol

This page describes the public protocol context for using the Winrich TK103 tracker with Plaspy. It explains how the device communicates with Plaspy servers in general terms, what connection settings are used, and how that communication supports real time monitoring, alerts, and historical playback without exposing firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports correctly to the Plaspy endpoint. Exact behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this document focuses on transport and practical compatibility guidance rather than device level internals.

## Protocol Overview

The TK103 uses GSM GPRS for primary data delivery and SMS as a fallback to deliver position fixes, alarms, and telemetry. The role of the protocol is to provide an interoperable channel for the tracker to identify itself, transmit location and status, and allow remote configuration when supported by the device and network.

- Enables the tracker to report GPS coordinates, timestamp, and basic telemetry to Plaspy for live mapping and history.
- Carries alarm and status messages such as emergency alerts, ignition state, and connectivity notifications.
- Supports remote configuration commands where the device and installation expose terminal configuration capabilities.
- Provides fallback paths such as SMS for critical alerts when GPRS connectivity is unavailable.
- Acts as the bridge between the physical tracker installation and Plaspy telemetry, enabling fleet workflows and alerting.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and determines the tracker protocol automatically so users rarely need to select a protocol manually. Correct device configuration to point at the Plaspy endpoint is the primary requirement for automatic detection and successful integration.

- Devices should be configured to report to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 using the common Plaspy port.
- Plaspy uses port 8888 for all supported devices and automatically detects the tracker protocol once data arrives on that port.
- If the tracker is properly configured to send data to the Plaspy endpoint, manual selection of a protocol in Plaspy is typically not required.
- Plaspy’s automatic detection helps simplify onboarding of TK103 units across mixed fleets and reduces setup steps for administrators.
- Consistent reporting intervals and valid identification fields from the device help Plaspy identify the device model and begin processing data for display and alerts.

## Transport and Connection Context

The TK103 can use either IP based GPRS transport or SMS depending on configuration and network availability. For IP transport, the device may be set to use UDP or TCP to reach Plaspy, and administrators should confirm the device settings match the intended transport type.

- The device may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- Devices can point to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS resolution is not available.
- Plaspy uses the same port 8888 for all devices, simplifying firewall and network configuration for managed fleets.
- GPRS/Internet is the primary channel for real time telemetry while SMS serves as an emergency fallback for critical messages.
- Ensure APN and GPRS credentials on the TK103 are correct and that the chosen transport (UDP or TCP) is supported by the device firmware.

## Protocol Compatibility Notes

- Firmware and hardware revisions of the TK103 can alter available features and the exact reporting behavior; verify the device firmware when troubleshooting.
- Manufacturer configuration commands and terminal menus may vary between regional builds; consult the device manual for configuration steps.
- Transport selection (UDP versus TCP) depends on device support and may affect delivery semantics; configure the tracker to match your network policy.
- SMS fallback behavior is influenced by carrier conditions and the device’s configured priority between SMS and GPRS.
- Group monitoring and multi vehicle reporting modes depend on the TK103 variant and how identifiers are assigned in the device configuration.
- Always validate compatibility and settings against official Winrich documentation and the specific unit you are deploying.

## Why Protocol Understanding Matters

Knowing how the TK103 communicates helps administrators complete setup, diagnose connectivity issues, and maintain reliable telemetry for operational use in Plaspy. Practical protocol awareness reduces onboarding time and improves long term uptime.

- Helps ensure correct APN, server address, and transport settings so data reaches Plaspy reliably.
- Speeds troubleshooting for lost reports by clarifying whether issues are transport, SIM, or device related.
- Informs expectations about which telemetry and alarms the device can send to Plaspy based on firmware and configuration.
- Aids in planning network firewall rules because Plaspy uses a single port that must be allowed for device traffic.
- Supports decisions on using SMS fallback versus GPRS for critical alerts in low coverage scenarios.

## Why Use Plaspy with This Protocol

Using the Winrich TK103 with Plaspy gives organizations a straightforward path from device installation to operational visibility. The device’s compact form, dual mode reporting, and remote configuration capabilities make it a practical choice for vehicle tracking, anti theft monitoring, and fleet coordination when paired with Plaspy’s dashboards and alerting features.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information and firmware notes on the manufacturer site http://www.winrichgroup.com/en/.
