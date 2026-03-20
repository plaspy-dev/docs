---
slug: /xexun/x04/protocol
id: x04-protocol
sidebar_label: Protocol
title: Xexun - X04 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Xexun X04 and how it communicates with Plaspy for reliable real time tracking
keywords:
  - Xexun X04 protocol
  - Xexun X04 GPS protocol
  - Xexun X04 tracking protocol
  - Xexun X04 Plaspy compatibility
  - Xexun GPS tracker protocol
  - Plaspy compatible tracker
  - GPS tracker communication protocol
  - vehicle tracking Xexun X04
  - asset tracking X04
  - hybrid positioning X04
---

# Xexun - X04 Protocol

This page provides a public summary of the communication context for the Xexun X04 when used with Plaspy. It focuses on how the device reports location and telemetry to Plaspy and what to expect from the public facing protocol behavior. The information here is intended to help integrators, administrators, and technical users understand the role of the tracker protocol without exposing sensitive or proprietary implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once a device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer configuration, so use this page as a high level guide and verify device specific details with the maker when necessary. The X04 itself uses hybrid positioning including GPS, Beidou, WiFi and LBS and sends telemetry over cellular networks to the cloud for monitoring, alerts and history playback.

## Protocol Overview

The protocol for the X04 defines how the tracker presents identity, position, and event data to a cloud endpoint so Plaspy can consume and present that information. At a public level the protocol's role is to ensure reliable delivery of usable location and telemetry data from device to cloud while supporting event driven reporting for alarms and status updates.

- Enables the X04 to transmit location fixes, timestamps, and essential telemetry to Plaspy for mapping and history.
- Communicates device identifiers and event markers so Plaspy can associate reports with the correct asset or user.
- Supports event driven messages such as SOS alarms, geofence triggers, and blind zone retransmission notification.
- Carries periodic scheduled reports for routine tracking and on demand updates for live monitoring.
- Facilitates remote lifecycle actions reported back to Plaspy such as low battery state and over the air firmware update status.

## How Plaspy Detects the Protocol

Plaspy centralizes device reporting on a shared endpoint and automatically detects the tracker protocol for most supported devices once the tracker is pointed to the Plaspy server. This means that users generally do not need to pick a protocol in the platform as long as the device is configured to send data to the correct Plaspy endpoint.

- Plaspy uses the shared server domain d.plaspy.com and accepts device connections at the public server IP 54.85.159.138.
- The Plaspy endpoint listens on port 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy accepts both UDP and TCP reporting depending on the tracker configuration so devices can use the transport that suits their firmware and network environment.
- If the tracker is correctly set to report to Plaspy, protocol detection is automatic and manual selection inside Plaspy is typically unnecessary.
- Ensuring the device sends its identifier and basic status in the initial reports helps Plaspy classify and map the device to the correct account and features.

## Transport and Connection Context

Connection context covers how the X04 reaches the Plaspy cloud rather than low level protocol internals. The X04 sends location and telemetry over cellular networks and can be configured to use either UDP or TCP transport to reach Plaspy on the shared port.

- Devices may be configured to report to the domain d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy listens for incoming device traffic on port 8888 and all Plaspy supported devices use this same port.
- The X04 can use UDP or TCP on port 8888 depending on firmware and configuration choices made at provisioning.
- Cellular network behavior such as NAT, operator firewalls, and IP assignment may affect how the device attaches; using the Plaspy domain name or IP are both common configuration choices.
- When configuring network settings, confirm the device is set to point at the Plaspy endpoint and that transport matches what the device firmware supports.

## Protocol Compatibility Notes

- Firmware revisions can alter available reporting formats, enabled features, and event naming, so device behavior may differ between firmware builds.
- Hardware variants or regional modules can affect cellular bands and network behavior even when the reporting protocol is the same.
- Some X04 units may default to UDP while others may prefer TCP; verify transport mode when provisioning devices.
- Manufacturer side configuration or provisioning tools can change what messages the device sends and how frequently it reports.
- Blind zone buffering and retransmission behavior depend on device firmware and local storage policies.
- Always validate compatibility and features against the official Xexun documentation for your device revision.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the X04 helps administrators and integrators achieve reliable setup, effective troubleshooting, and predictable long term operation within Plaspy. Clear expectations about how the device reports and how Plaspy receives data reduce configuration errors and accelerate deployment.

- Ensures devices are pointed to the correct Plaspy endpoint and using the supported transport.
- Helps diagnose common connectivity issues such as missing initial reports or inconsistent event delivery.
- Guides decisions about reporting intervals and battery life trade offs for scheduled or event driven updates.
- Clarifies which features such as SOS, geofence alerts, and blind zone buffering will be visible in Plaspy given a device firmware level.
- Supports planning for fleet rollouts where a consistent provisioning template reduces variation and support effort.

## Why Use Plaspy with This Protocol

Using the Xexun X04 with Plaspy provides a straightforward path to centralized real time tracking, historical route playback, and event driven alerting. The X04's hybrid positioning and compact form factor make it a practical choice for people, fleet, and portable asset tracking while Plaspy aggregates reports for operational visibility and alert management.

To learn more about how Plaspy can work with devices like the X04 and view platform capabilities visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer details can change over time so confirm the latest device specific protocol and firmware information with the official manufacturer site at https://www.xexun.com/.
