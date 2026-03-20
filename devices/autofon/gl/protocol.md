---
slug: /autofon/gl/protocol
id: gl-protocol
sidebar_label: Protocol
title: AutoFon - GL-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for AutoFon GL-Маяк integration with Plaspy covering connection context and compatibility
keywords:
  - AutoFon GL-Маяк protocol
  - AutoFon GL-Маяк GPS protocol
  - AutoFon GL-Маяк Plaspy
  - GL beacon communication protocol
  - GL-Маяк tracking protocol
  - Plaspy device compatibility
  - GPS tracker protocol guide
  - AutoFon GL integration
  - GL-Маяк telemetry reporting
  - asset tracker protocol
---

# AutoFon - GL-Маяк Protocol

This page describes the public protocol context for using the AutoFon GL-Маяк (GL-Beacon) with the Plaspy platform. It focuses on how the device communicates with Plaspy in broad, non-sensitive terms, and explains the connection and compatibility considerations that matter when integrating this compact GPS and GLONASS tracker into fleet and asset monitoring workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. The GL-Маяк can report over standard GPRS and SMS channels; exact protocol behavior and available features may vary by firmware version, hardware revision, and manufacturer implementation. For network routing, Plaspy accepts device reports at d.plaspy.com and the known server IP 54.85.159.138 on the shared port 8888, and devices may be configured to use either UDP or TCP on that port.

## Protocol Overview

The GL-Маяк communicates location, alarms, and telemetry to a backend server using a device reporting protocol designed for low-power and buffered uploads. The protocol's public role is to enable the tracker to identify itself to Plaspy, deliver position and event data, and allow reliable delivery even across intermittent GPRS connectivity.

- Provides device identification and basic session context so Plaspy can associate reports with the correct asset and account.
- Transports GNSS position fixes and event telemetry such as motion, impact, rollover, SOS presses, and auxiliary channel states.
- Supports buffered delivery behavior so stored packets are forwarded to Plaspy after connectivity is restored.
- Allows remote control and configuration commands via the auxiliary channel and remote management workflows where supported.
- Enables fallback reporting paths such as SMS for critical alerts when GPRS is not available.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the device protocol from the reported traffic pattern and identification fields. In most deployments you do not need to select a protocol inside Plaspy if the GL-Маяк is configured to send reports to the Plaspy endpoint.

- Plaspy listens on the shared server endpoint d.plaspy.com and IP 54.85.159.138 using port 8888 for device reports.
- Devices may be configured to use either UDP or TCP on port 8888; Plaspy accepts both transport types.
- The platform matches incoming device identifiers to customer accounts and applies the appropriate parsing and handling rules automatically.
- Proper device configuration at the tracker side is the usual requirement; once the tracker reports to the Plaspy endpoint, detection and onboarding are typically automatic.
- When multiple firmware or device variants exist, Plaspy uses the report content to select compatible handling rather than requiring manual protocol selection.

## Transport and Connection Context

Connection choices affect how the GL-Маяк reaches Plaspy and how the device behaves under network constraints. The GL-Маяк supports standard GPRS reporting and can use SMS as a fallback channel for critical alarms; for direct server reporting, devices point to Plaspy using a shared host and port configuration.

- Devices may be pointed to d.plaspy.com or to the IP 54.85.159.138 for direct reporting.
- The Plaspy platform accepts connections on port 8888 and all supported devices use this same port for device reports.
- The tracker may be configured to communicate using either UDP or TCP on port 8888 depending on the device firmware and deployment choice.
- Buffered packet storage in the GL-Маяк preserves telemetry for later upload when GPRS service is restored.
- SMS reporting can be used as an alternative alert path for high priority events such as SOS presses or tamper alarms.

## Protocol Compatibility Notes

- Firmware variations on the GL-Маяк platform can change the set of supported messages and the exact behavior of reporting and retries.
- Hardware revisions and manufacturing variants may affect available features such as auxiliary control timing or specific alarm inputs.
- Transport selection between UDP and TCP must match what the device firmware supports and what is configured on the tracker SIM and APN settings.
- SMS fallback availability and formatting may differ from GPRS packet reporting and should be tested for your monitoring requirements.
- Validate compatibility and feature availability against the manufacturer documentation for your device serial and firmware revision.
- When planning remote control or immobilizer features, confirm wiring and legal considerations for your region and vehicle type.

## Why Protocol Understanding Matters

A practical understanding of the GL-Маяк communication protocol helps ensure reliable setup, quicker troubleshooting, and predictable long term behavior when the device is used with Plaspy. Knowing the role of transport, buffering, and report timing leads to fewer configuration errors and better operational outcomes.

- Helps verify that the tracker is pointing at d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport.
- Makes troubleshooting connection or delivery delays easier by focusing on GPRS coverage, APN configuration, and buffered uploads.
- Allows informed decisions about using SMS fallback, data retention behavior, and how alarms are delivered to Plaspy.
- Supports verification of firmware capabilities and the impact of firmware updates on reporting behavior.
- Improves planning for power management and reporting intervals to balance battery life and telemetry freshness.

## Why Use Plaspy with This Protocol

Using the AutoFon GL-Маяк with Plaspy provides a compact, battery friendly option for long term asset tracking, covert vehicle monitoring, and remote site protection. The GL-Маяк’s buffered packet storage, combined GPS and GLONASS positioning, and event sensing capabilities make it a practical choice for deployments that need resilient telemetry and alarm workflows in Plaspy.

To learn more about how Plaspy handles device reporting and to explore platform features for tracking, alerts, and telemetry visualization visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions consult the manufacturer documentation at https://www.autofon.ru/ as protocol support and firmware behavior can change over time.
