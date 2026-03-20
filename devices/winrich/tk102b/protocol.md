---
slug: /winrich/tk102b/protocol
id: tk102b-protocol
sidebar_label: Protocol
title: Winrich - TK102B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Winrich TK102B explaining how the device communicates with Plaspy and shared connection settings
keywords:
  - Winrich TK102B protocol
  - Winrich TK102B GPS protocol
  - Winrich TK102B communication protocol
  - Winrich TK102B tracking protocol
  - TK102B Plaspy compatibility
  - TK102B GPS tracker integration
  - Plaspy device protocol
  - vehicle tracking TK102B
  - personal tracker TK102B
  - GPS tracker protocol guide
---

# Winrich - TK102B Protocol

This page describes the public protocol context for using the Winrich TK102B tracker with Plaspy. It focuses on how the device communicates with Plaspy using Plaspy public endpoints and shared connection settings, and it highlights the role of that communication in reliable location reporting and alert forwarding.

The TK102B provides GPS plus GSM positioning, TF card backup, SOS alerts, and push reporting that integrate with Plaspy for real time monitoring. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the TK102B dictates how the device reports position, status, and alarms to a remote server. For integration with Plaspy this means the tracker must be configured to report to the Plaspy endpoint so updates, geo fence events, SOS triggers, and interval reports are delivered to the platform.

- Enables the TK102B to transmit location fixes, timestamped status, and event notifications to the server for mapping and alerts.
- Carries essential device identity and status information that Plaspy uses to associate messages with the correct asset record.
- Supports both real time reports and stored route uploads from TF card backup when connectivity is restored.
- Allows the device to send alarm and telemetry events such as SOS, overspeed, geo fence breaches, and low battery notifications.
- Works over the network transport that the device supports so Plaspy can receive data consistently for dashboard visualization and reporting.

## How Plaspy Detects the Protocol

Plaspy listens for incoming device traffic at a single public endpoint and port and automatically identifies the tracker protocol for supported models when devices are configured to report to that endpoint. This reduces manual configuration inside Plaspy for most deployments.

- Plaspy accepts connections at d.plaspy.com which resolves to 54.85.159.138 and listens on port 8888 for incoming tracker reports.
- All devices in Plaspy use the same port so you do not need a device specific port number.
- Plaspy can process reports sent over UDP or TCP on port 8888 depending on the device configuration.
- In most cases you only need to set the TK102B reporting address to d.plaspy.com or 54.85.159.138 and use the transport supported by the unit.
- If the tracker is correctly pointed to the Plaspy endpoint, Plaspy will automatically detect and handle the protocol without manual protocol selection.

## Transport and Connection Context

Connection details determine how the TK102B sends data to Plaspy and how the platform receives it. The TK102B supports GSM GPRS reporting and may be configured to use either UDP or TCP depending on firmware and user settings. For Plaspy, consistent addressing and port usage are the primary connection requirements.

- Configure the TK102B to report to d.plaspy.com or directly to 54.85.159.138 as the server address.
- Plaspy listens on port 8888 and accepts both UDP and TCP connections on that port.
- The device may use HTTP free GPRS sockets for continuous reporting or periodic upload depending on its configuration and power profile.
- Use the transport mode supported by your specific TK102B firmware and ensure APN settings are correct for the SIM card in use.
- TF card backup on the TK102B stores route history locally and uploads stored records to Plaspy when GSM connectivity is reestablished.

## Protocol Compatibility Notes

- Firmware revisions can change which messages the TK102B emits and how certain events are encoded, so behavior may vary between units.
- Hardware variants and production batches sometimes include minor differences in feature support or reporting intervals.
- Transport mode choice between UDP and TCP can affect delivery characteristics such as retransmission and connection state.
- Features like TF card upload, SOS handling, and remote power cut off depend on the device wiring and firmware options.
- Always verify the exact reporting configuration and APN requirements before deployment to ensure reliable communication with Plaspy.
- Manufacturer documentation and firmware release notes are the authoritative source for device specific behavior.

## Why Protocol Understanding Matters

Understanding the TK102B communication protocol helps ensure reliable setup, faster troubleshooting, and predictable operation when the device is used with Plaspy. Clear protocol context reduces misconfiguration and minimizes gaps in telemetry.

- Helps confirm the device is pointed to the correct Plaspy endpoint and using the expected transport mode.
- Makes it easier to validate that identity and event messages map to the intended asset in Plaspy.
- Assists in troubleshooting missing reports by checking connectivity, APN, and transport selection.
- Clarifies how TF card backups and stored route uploads behave when GSM connectivity resumes.
- Supports better planning for power management, reporting intervals, and alerting expectations.

## Why Use Plaspy with This Protocol

Using the TK102B with Plaspy provides a practical solution for organizations and individuals that need real time location visibility, alerting, and historic route recovery. The TK102B’s GPS plus GSM positioning, SOS capabilities, and TF card backup make it well suited for fleet, asset, and personal safety use cases that feed into Plaspy’s centralized monitoring and reporting tools.

To learn more about Plaspy and how it works with compatible trackers such as the Winrich TK102B visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify technical documentation at the Winrich site http://www.winrichgroup.com/en/ since protocol support and device implementation can change over time.
