---
slug: /megastek/mt_350/protocol
id: mt_350-protocol
sidebar_label: Protocol
title: Megastek - MT-350 Protocol
sidebar_class_name: menu_item_tracker
description: Reliable public protocol guidance for Megastek MT 350 integration with Plaspy tracking platform
keywords:
  - Megastek MT 350 protocol
  - Megastek MT 350 GPS protocol
  - MT 350 tracking protocol
  - MT 350 communication protocol
  - Megastek wristband protocol
  - indoor tracking protocol Plaspy
  - UWB RTLS Plaspy compatibility
  - personnel tracking protocol
  - MT 350 Plaspy integration
  - Megastek protocol compatibility
---

# Megastek - MT-350 Protocol

This page provides public protocol context for using the Megastek MT-350 wristband with the Plaspy platform. It explains how the device's location and status information are delivered into a Plaspy deployment without revealing sensitive implementation details. The focus is on the role of the device reporting protocol in enabling reliable indoor positioning and alarm reporting when MT-350 devices are integrated into a Plaspy environment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly configured to report to the Plaspy endpoint. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior observed in the field may differ from generalized descriptions on this page.

## Protocol Overview

The MT-350 relies on Ultra Wideband positioning and an uplink path from UWB base stations into a networked server. The public protocol context covered here describes the communication role that allows Plaspy to receive real time location, telemetry, and alarm events from the MT-350 system. This includes identifiers and status data needed for Plaspy to map indoor positions, surface SOS and tamper events, and present device health information.

- The protocol conveys device identity and status so Plaspy can associate a wristband with a user or asset.
- Location updates and telemetry are delivered from the UWB infrastructure into Plaspy for real time mapping and history.
- Alarm and event messages such as SOS presses, tamper alerts, and low battery are forwarded to Plaspy for notification and response workflows.
- Reporting intervals and motion sensitivity configurable on the device affect the frequency and content of uplink messages received by Plaspy.
- Device health and remote status reports enable centralized maintenance and monitoring inside the Plaspy platform.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when a device or its supporting infrastructure is pointed at the Plaspy endpoint and reporting on the shared connection settings. In most deployments there is no need to choose a specific protocol inside Plaspy as long as the MT-350 system is configured to deliver its uplinks to the Plaspy server.

- Plaspy listens on a shared endpoint and port for incoming tracker data and uses that connection to identify supported device protocols.
- When the MT-350 reporting chain forwards messages to Plaspy, the platform matches incoming traffic to known device behaviors and presents data without requiring manual protocol selection.
- Users typically configure the UWB base station or network gateway to send device uplinks to the Plaspy endpoint and port.
- Automatic detection simplifies onboarding for mixed fleets of devices and indoor RTLS wristbands such as the MT-350.
- If a device is not detected automatically, validation of network settings and manufacturer configuration steps is the recommended next step.

## Transport and Connection Context

Connection context covers how uplinks from UWB infrastructure reach Plaspy rather than low level protocol internals inside the wristband. The MT-350 system uses UWB base stations that forward location and event data into the site network, where those uplinks are then routed toward Plaspy for centralized processing.

- Devices and base station gateways may be configured to use either UDP or TCP to send uplinks to Plaspy depending on device support and local gateway configuration.
- Plaspy accepts tracker traffic at the public server domain d.plaspy.com and the server IP 54.85.159.138.
- The standard Plaspy port for device reports is 8888 and this same port is used for all devices supported by Plaspy.
- When configuring gateways or base stations, point the uplink host to d.plaspy.com or to 54.85.159.138 and set the transport to UDP or TCP as supported.
- Transport choice and local network policies can affect reliability and latency of position and event delivery into Plaspy.

## Protocol Compatibility Notes

- Firmware variations on the MT-350 or on UWB base stations can change message timing, available telemetry fields, and supported reporting modes.
- Hardware revisions and different base station models may alter how uplinks are forwarded into the IP network; validate which gateway is in use for your installation.
- Transport selection between UDP and TCP can be constrained by local networking, firewalls, or gateway firmware capabilities.
- Plaspy uses a consistent listening port across devices which simplifies configuration but does not eliminate the need to confirm device side settings.
- Always verify device configuration steps with manufacturer documentation when adjusting reporting intervals or enabling remote features.
- Integration testing in a controlled environment helps confirm how events such as SOS and tamper are mapped into Plaspy notifications.

## Why Protocol Understanding Matters

Understanding the communication protocol and connection context helps ensure correct setup, faster troubleshooting, and dependable long term operation when integrating MT-350 wristbands with Plaspy. Knowing what the device reports and how those messages reach Plaspy reduces downtime and improves event fidelity.

- Facilitates correct configuration of UWB base stations and network gateways to point to d.plaspy.com or 54.85.159.138.
- Helps set reporting intervals and motion sensitivity to balance battery life and update frequency for your use case.
- Improves troubleshooting when events are missing or delayed by isolating transport and gateway behavior.
- Guides maintenance practices for firmware updates and device health monitoring that feed into Plaspy dashboards.
- Supports informed decisions about network architecture, such as when to prefer TCP versus UDP for a given deployment.

## Why Use Plaspy with This Protocol

Using the MT-350 with Plaspy extends Plaspy visibility into indoor spaces where GPS is not available. The MT-350 wristband, when paired with UWB base stations and integrated into Plaspy, enables precise indoor positioning, real time SOS and tamper alerts, and centralized device health monitoring that together improve situational awareness and operational response for facilities that require continuous personnel monitoring.

To learn more about how Plaspy handles device integrations and for additional deployment guidance visit https://www.plaspy.com. For the most current and device specific protocol details, firmware behavior, and implementation notes check the official Megastek documentation at https://www.megastek.com/ as manufacturer features and firmware can change over time.
