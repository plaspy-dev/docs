---
slug: /cantrack/tk200am/protocol
id: tk200am-protocol
sidebar_label: Protocol
title: CanTrack - TK200AM Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for CanTrack TK200AM and how it communicates with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - CanTrack TK200AM protocol
  - CanTrack TK200AM GPS protocol
  - CanTrack TK200AM Plaspy compatibility
  - TK200AM communication protocol
  - TK200AM tracking protocol
  - CanTrack protocol Plaspy
  - Plaspy tracker compatibility
  - CanTrack asset tracking
  - vehicle tracking TK200AM
  - GSM GPRS tracker integration
---

# CanTrack - TK200AM Protocol

This page provides a public, non sensitive overview of the communication context for the CanTrack TK200AM when used with the Plaspy platform. It summarizes how the tracker reports position and telemetry to Plaspy, the shared connection settings Plaspy uses, and practical compatibility considerations that help system integrators and fleet managers plan deployments. The information here focuses on protocol-level context rather than device internals or proprietary packet formats.

Plaspy receives TK200AM reports through a shared Plaspy endpoint and port configuration and automatically detects the tracker protocol when devices are correctly pointed to the Plaspy endpoint. Plaspy’s public connection settings are d.plaspy.com (54.85.159.138) on port 8888 and devices may be configured to use either UDP or TCP on port 8888. Exact protocol behavior and available commands can vary by firmware release, hardware revision, and manufacturer implementation, so always validate device specifics against manufacturer documentation.

## Protocol Overview

The TK200AM communication protocol governs how the device identifies itself, transmits location and telemetry, and signals events such as tamper or movement to a backend. In the context of Plaspy this protocol enables reliable ingestion of periodic low power reports and higher frequency real time updates without requiring platform users to handle raw transport details.

- It defines how the tracker reports core telemetry such as GPS fixes, movement status, tamper alerts, and battery level to a remote server.
- The protocol allows the device to switch between low duty cycle reporting and higher frequency reporting for real time tracking needs.
- Identification and device status information carried by the protocol let Plaspy associate incoming messages with a specific TK200AM unit for mapping, alerts, and history.
- Plaspy consumes the protocol payload to present usable data in dashboards, trigger alerts, and store route history for analysis.
- The protocol supports operation over common mobile data transports so devices can report from widespread GSM coverage areas.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device connections on a shared endpoint and port and automatically determine the incoming tracker protocol when a device reports to that endpoint. For most users this means configuration on the tracker side is limited to pointing the device to the Plaspy endpoint and selecting the appropriate transport type.

- Plaspy listens on a single port for all supported devices so configuration is simplified across different tracker models.
- The public Plaspy endpoint is d.plaspy.com and the public server IP is 54.85.159.138 using port 8888.
- Devices can be configured to use either UDP or TCP on port 8888 depending on device capability and network considerations.
- When the TK200AM is pointed to the Plaspy endpoint and network connectivity is available, protocol detection is automatic and manual protocol selection in Plaspy is typically not required.
- Proper identification and consistent reporting intervals from the device help Plaspy map incoming feeds to the correct device record.

## Transport and Connection Context

Transport choices and correct destination settings are the foundation of a successful integration. The TK200AM supports GSM/GPRS uplink and can be configured to send data over TCP or UDP; those transport selections affect only the network layer while Plaspy handles higher level protocol interpretation once messages arrive.

- The device may be configured to report to d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy and the TK200AM use port 8888 for device reporting and all devices supported by Plaspy share that same port number.
- Both UDP and TCP transports on port 8888 are supported depending on the tracker configuration and network conditions.
- Network reliability, mobile operator behavior, and firewall rules can influence whether UDP or TCP is preferable for a given deployment.
- Ensure APN and GPRS settings on the TK200AM are correct so the device can establish a data connection to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions may change message fields, reporting triggers, or power management behavior; always check the device firmware version when diagnosing differences.
- Hardware revisions or regional variants of the TK200AM can exhibit small differences in supported features or default settings that affect protocol behavior.
- Transport selection (UDP versus TCP) can impact message delivery characteristics but does not change the high level protocol purpose.
- Manufacturer-side configuration or provisioning tools may be required to set the reporting server to the Plaspy endpoint.
- Validate compatibility against the manufacturer documentation for the specific device batch and firmware to confirm supported reporting modes.
- Network operator constraints such as APN restrictions or carrier NAT can affect device reachability and should be considered during deployment.

## Why Protocol Understanding Matters

A practical understanding of the TK200AM reporting protocol and how Plaspy ingests those messages reduces setup time, simplifies troubleshooting, and improves long term reliability of your tracking solution. Knowing how the pieces fit together helps you choose reporting profiles that balance battery life and tracking fidelity.

- Helps ensure the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 using the appropriate transport.
- Makes it easier to interpret why a device may not appear in Plaspy due to APN, transport, or firmware-related differences.
- Supports informed decisions about reporting intervals and power modes to match operational requirements and battery constraints.
- Eases coordination between hardware installers, fleet managers, and network administrators during rollouts.
- Provides context for when to consult manufacturer resources or support for firmware specific questions.

## Why Use Plaspy with This Protocol

Integrating the TK200AM with Plaspy gives organizations a practical way to combine long standby asset tracking with an operational platform that provides mapping, alerts, and historical reporting. The TK200AM’s low-power periodic reporting and optional real time mode pair naturally with Plaspy’s ingestion and dashboard features to deliver visibility for fleet management, anti-theft response, and long-term asset monitoring.

Plaspy uses a shared connection approach so devices pointed at the Plaspy endpoint d.plaspy.com (54.85.159.138) on port 8888 can be ingested without per device port configuration, and Plaspy automatically detects the tracker protocol when the device is correctly configured. To learn more about Plaspy and how it can work with devices like the TK200AM visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance please verify information on the CanTrack website https://www.cantrackgps.com/ as manufacturer implementations and firmware can change over time.
