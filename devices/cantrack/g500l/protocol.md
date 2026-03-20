---
slug: /cantrack/g500l/protocol
id: g500l-protocol
sidebar_label: Protocol
title: CanTrack - G500L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the CanTrack G500L with Plaspy using shared connection settings and automatic detection
keywords:
  - CanTrack G500L protocol
  - CanTrack G500L GPS protocol
  - CanTrack G500L protocol Plaspy
  - G500L OBD tracker protocol
  - CanTrack OBD GPS protocol
  - Plaspy device protocol
  - vehicle tracking protocol
  - OBD telemetry protocol
  - fleet tracking G500L
  - G500L communication protocol
---

# CanTrack - G500L Protocol

This page provides a public protocol overview for using the CanTrack G500L with the Plaspy platform. It focuses on the non sensitive, practical communication context you need to understand how the G500L reports location and OBD telemetry to Plaspy without exposing firmware internals or private implementation details.

The G500L is a plug and play OBD II tracker with hybrid positioning and industrial 4G connectivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The guidance here clarifies how the device typically communicates with Plaspy and what to check when deploying G500L units at scale.

## Protocol Overview

The tracker communication protocol defines how the G500L packages GNSS position, cellular status, OBD II parameters, and event alerts for transmission to a remote server. For Plaspy integration this protocol role is limited to identifying the device, delivering timely telemetry, and enabling the platform to display location, diagnostic, and event data.

- Carries GNSS and hybrid positioning information for mapping and geofencing.
- Transmits OBD II telemetry such as fuel, temperature, ignition status, and diagnostic trouble codes for fleet insights.
- Delivers event signals like anti tamper alerts, power loss, and trip markers to support alerts and automation.
- Identifies the device to the server so Plaspy can associate incoming messages with the correct asset record.
- Enables periodic heartbeats and status updates so Plaspy can monitor device health and connectivity.

## How Plaspy Detects the Protocol

Plaspy automatically determines the tracker protocol from incoming connections to its shared endpoint, so most users do not need to select a protocol inside the platform when the device is correctly pointed to Plaspy. Proper device configuration to the Plaspy server ensures the platform can ingest and interpret G500L reports.

- Plaspy uses a single public endpoint for device reporting and automatic protocol detection.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is usually unnecessary.
- Devices configured to report to the Plaspy endpoint will be associated with the correct account and asset once messages arrive.
- If a device fails to appear in Plaspy, verify server and transport configuration on the device and confirm firmware supports reporting to the shared endpoint.

## Transport and Connection Context

Connection and transport settings determine how the G500L sends its protocol frames to Plaspy. The device may be configured to use either UDP or TCP depending on model firmware and deployment preferences. All Plaspy devices use the same port, which simplifies fleet-wide configuration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts device reports on port 8888 and uses the same port for all supported devices.
- Devices may be pointed to the Plaspy server domain d.plaspy.com or directly to the address 54.85.159.138.
- Using the domain name can simplify management across IP changes, while the IP is useful when DNS is restricted.
- Confirm the device APN and cellular connectivity settings are correct so the tracker can establish outbound sessions to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change how the device formats and schedules telemetry; always check the device firmware version when validating behavior.
- Hardware revisions and regional SKUs may alter supported network bands and fallback logic for reporting.
- Manufacturer configuration menus may offer transport selection choices; ensure TCP or UDP and the Plaspy port are set consistently across units.
- Some OBD II parameter availability depends on vehicle make, model, and supported PIDs rather than the tracker alone.
- Confirm whether a device uses domain or IP addressing in your deployment and document the choice for future updates.
- Validate compatibility and feature availability against the manufacturer documentation before large scale rollouts.

## Why Protocol Understanding Matters

Knowing the practical role of the communication protocol helps ensure reliable reporting, quicker troubleshooting, and predictable fleet behavior when devices report to Plaspy. Understanding what is platform responsibility and what is device responsibility reduces misconfiguration and supports smoother deployments.

- Speeds setup by clarifying which device fields must be configured to reach Plaspy.
- Helps diagnose connectivity problems by focusing checks on transport, DNS, APN, and firmware.
- Guides expectations for telemetry cadence and which OBD II parameters are likely available.
- Supports planning for firmware updates and hardware revisions that may change reporting behavior.
- Enables better operational rules in Plaspy by matching incoming event types to alerts and automations.

## Why Use Plaspy with This Protocol

Using the G500L with Plaspy provides a practical combination for organizations that need fast deployment, OBD level telemetry, and reliable real time location. The plug and play OBD II form factor reduces installation time while hybrid positioning and industrial 4G connectivity keep telemetry flowing to Plaspy for mapping, diagnostics, and event driven workflows.

Plaspy centralizes the G500L telemetry so fleet managers can view live locations, monitor fuel and DTCs, and receive anti tamper alerts without needing to manage protocol parsers or per device ports. To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the latest device protocol details, firmware notes, and manufacturer specific documentation verify current information at https://www.cantrackgps.com/ as implementations and firmware behavior can change over time.
