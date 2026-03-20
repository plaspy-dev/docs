---
slug: /autofon/45/protocol
id: 45-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.5 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview describing how AutoFon Маяк 4.5 communicates with Plaspy for GPS reporting and alerts
keywords:
  - AutoFon Маяк 4.5 protocol
  - AutoFon Маяк 4.5 GPS
  - AutoFon Mayak 4.5 Plaspy
  - GPS tracker protocol
  - GPRS GPS tracker
  - SMS GPS reporting
  - vehicle tracking protocol
  - asset tracking protocol
  - Plaspy tracker compatibility
  - covert GPS tracker
---

# AutoFon - Маяк 4.5 Protocol

This page provides a public, non-sensitive overview of the communication protocol context for the AutoFon Маяк 4.5 when used with Plaspy. It explains how the tracker reports position and telemetry to a monitoring server and what role the tracker reporting mode plays in successful integration with a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is reporting to the Plaspy endpoint. The Mayak 4.5 can deliver reports via SMS or by sending interval GPRS packets over the cellular network; exact protocol behavior and available features may vary by firmware version, hardware revision, and manufacturer implementation. Note that Plaspy accepts device traffic on the common server address d.plaspy.com and IP 54.85.159.138 using port 8888, and the device may be configured to use either UDP or TCP on port 8888.

## Protocol Overview

The tracking protocol for the Mayak 4.5 defines how the device sends location, status, and event information to a remote monitoring server such as Plaspy. In practical terms the protocol determines which fields are reported, how often reports are sent in interval mode, and how alerts (motion, power loss, alarms) are included alongside positional data.

- Enables periodic GPRS interval reports and on-demand SMS reports so position and telemetry reach Plaspy for mapping and alerts.
- Carries device identifiers and status fields that let Plaspy associate incoming messages with the correct tracker instance.
- Includes event indicators such as motion, external power disconnect, and alarm input state that Plaspy surfaces as immediate notifications.
- Supports low-power reporting modes to extend battery life in long autonomy use cases typical for this tracker.
- Coexists with SMS command and control for remote queries and simple configuration when GPRS is not available.

## How Plaspy Detects the Protocol

Plaspy listens on a shared endpoint and port for incoming tracker reports and applies automatic protocol detection so most users do not need to select a protocol manually. When the Mayak 4.5 is configured to send data to Plaspy, the platform matches incoming messages to a supported device profile and converts them into positions, events, and telemetry.

- Configure the device to report to d.plaspy.com or the IP address 54.85.159.138 so Plaspy receives traffic directly.
- Use port 8888 for device reporting; Plaspy uses the same port for all supported devices which simplifies setup.
- Devices can be set to use either UDP or TCP on port 8888 depending on the unit configuration and network conditions.
- Once messages arrive at Plaspy, the system automatically recognizes the tracker protocol and maps incoming fields into the Plaspy dashboard.
- With correct server and transport settings, manual protocol selection inside Plaspy is typically unnecessary.

## Transport and Connection Context

Understanding transport and connection choices helps ensure consistent delivery of position and event reports from the tracker to Plaspy. The Mayak 4.5 supports GPRS interval reporting as its principal server-side transport mode and SMS for direct alerts and remote queries.

- The device may be configured to send GPRS packets to d.plaspy.com or 54.85.159.138.
- Transport can be either UDP or TCP on port 8888 depending on device settings and network behavior.
- All devices in Plaspy use the same port, 8888, which reduces configuration variation for mixed fleets.
- SMS reporting is an available alternative for immediate notifications or where GPRS is unavailable; SMS uses authorized numbers rather than the Plaspy server.
- Ensure APN and SIM data connectivity are correctly set on the device so GPRS interval packets can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may change which message fields are present and how often the device reports in interval mode; verify firmware specifics before wide deployment.
- Hardware revisions or regional variants can affect supported bands and GPRS behavior; confirm the exact model revision when troubleshooting connectivity.
- Transport selection (UDP vs TCP) can influence reliability and battery use; choose the transport supported by the unit and appropriate for network conditions.
- SMS remains a useful fallback for alerts and remote queries but uses different routing than GPRS reporting to the Plaspy server.
- Manufacturer-side configuration menus and SMS commands for server settings and authorized numbers can differ across firmware builds.
- Always validate the device configuration—APN, server address, port, and authorized numbers—against the latest manufacturer documentation.

## Why Protocol Understanding Matters

A clear grasp of how the Mayak 4.5 communicates helps with initial setup, ongoing reliability, and effective troubleshooting when integrating with Plaspy. Knowing the limits of GPRS interval reporting versus SMS, and how events are reported, reduces integration time and improves operational results.

- Ensures correct server address and transport settings so packets reach Plaspy reliably.
- Helps optimize reporting intervals and motion sensitivity to balance battery life and update frequency.
- Makes it easier to diagnose missed reports, duplicate messages, or unexpected event flags by correlating device behavior with network conditions.
- Supports correct handling of fallback paths such as SMS when GPRS is unavailable.
- Reduces time to resolution for field issues by focusing on firmware, APN, and transport configuration as likely factors.

## Why Use Plaspy with This Protocol

Using the AutoFon Маяк 4.5 with Plaspy lets organizations combine the device’s long autonomy and discreet form factor with Plaspy’s centralized tracking, alerting, and reporting capabilities. Plaspy converts incoming GPRS interval packets and SMS alerts into map markers, event notifications, and history trails, which is well suited for applications like asset recovery, covert vehicle monitoring, and low-maintenance asset tracking.

If you want to learn more about Plaspy and how it handles tracker data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration commands for the AutoFon Маяк 4.5, please verify information on the manufacturer site https://www.autofon.ru/ since protocol support and firmware behavior can change over time.
