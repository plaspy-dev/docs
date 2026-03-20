---
slug: /gotop/c720/protocol
id: c720-protocol
sidebar_label: Protocol
title: GOTOP - C720 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP C720 GPS tracker integration with Plaspy platform
keywords:
  - GOTOP C720 protocol
  - GOTOP C720 GPS protocol
  - GOTOP C720 Plaspy
  - GOTOP C720 communication protocol
  - GOTOP GPS tracker protocol
  - C720 tracking protocol
  - GOTOP C720 compatibility
  - vehicle tracking protocol
  - GOTOP tracker Plaspy compatibility
  - covert vehicle tracker protocol
---

# GOTOP - C720 Protocol

This page describes the public protocol context for using the GOTOP C720 relay car GPS tracker with Plaspy. It focuses on how the tracker reports location and alarm telemetry to an external platform and what that means for setting up, validating, and troubleshooting a Plaspy deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a C720 is configured to report to the Plaspy endpoint. Exact protocol behavior and message content can vary between firmware versions, hardware revisions, and manufacturer implementation choices, so this page provides a broad, safe overview rather than firmware specific internals.

## Protocol Overview

The C720 communicates its position, status and alarms to online platforms over cellular links. The device uses its GSM GPRS connection to send telemetry and can also use SMS or voice where supported. The protocol's role is to ensure the tracker identifies itself, delivers usable location and alarm data, and supports event driven reporting for immediate alerts.

- Carries position fixes and timestamped telemetry for real time and historical tracking.
- Transmits alarm and event signals such as geo fence triggers, vibration or movement alarms, low battery, and main power loss.
- Conveys device identity and status so Plaspy can associate incoming messages with the correct asset.
- Supports periodic and event driven reporting to provide both scheduled location updates and immediate alerts.
- Enables integration with remote control workflows such as immobilizer or power cut features when available on the device.

## How Plaspy Detects the Protocol

Plaspy accepts telemetry on a shared endpoint and port and automatically detects the tracker protocol when the device reports to that endpoint. In typical deployments the C720 is configured to send data to the Plaspy server and Plaspy identifies the incoming format so no manual protocol selection is required in most cases.

- Configure the C720 to report to the Plaspy endpoint d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- Devices may use either UDP or TCP transport depending on device configuration and firmware support.
- When the tracker connects and sends telemetry, Plaspy maps the device identity to a registered asset and interprets incoming messages automatically.
- Users typically do not need to pick a protocol inside Plaspy as long as the device is correctly pointed at the Plaspy endpoint and allowed through network firewalls.
- If a device does not appear online, verify APN, transport selection, server address, and basic connectivity before adjusting platform side settings.

## Transport and Connection Context

The C720 supports GPRS data transmission and can deliver messages to a remote server over standard TCP or UDP transport. For Plaspy compatibility the device should be pointed to the shared Plaspy endpoint and port so incoming traffic is received and routed consistently.

- Plaspy receives device traffic on port 8888 and all devices supported by Plaspy use that same port.
- The tracker may be configured to use either UDP or TCP on port 8888 based on its firmware and settings.
- Point the C720 at d.plaspy.com or the direct server IP 54.85.159.138 and confirm the transport mode matches the device configuration.
- Ensure the vehicle SIM APN allows GPRS data and that mobile network routing or firewalls allow outbound traffic to the Plaspy server.
- SMS can be used as an alternate communications path for some features but GPRS is required for continuous online telemetry and platform integration.

## Protocol Compatibility Notes

- Firmware differences across production batches can change message behavior and available transport options.
- Hardware revisions such as antenna or power wiring variants may affect signal quality and alarm detection timing.
- Some features like immobilizer control require correct wiring and matching firmware support on the device side.
- Transport selection between UDP and TCP should follow device capabilities and network reliability considerations.
- SMS based reporting is available for basic alerts, but GPRS provides the full set of telemetry needed for Plaspy dashboards.
- Always validate a sample device end to end before large scale deployment to confirm how that firmware revision behaves with Plaspy.

## Why Protocol Understanding Matters

Understanding how the C720 communicates helps ensure reliable setup, faster troubleshooting, and predictable behavior when devices are managed through Plaspy. Awareness of transport, server addressing, and event reporting patterns reduces downtime and improves alarm response times.

- Confirms the device is pointed at the correct Plaspy endpoint and port so telemetry arrives consistently.
- Helps diagnose connectivity issues such as APN misconfiguration, blocked ports, or mobile network restrictions.
- Clarifies which alarms and event types the platform will receive and how they map to notifications and workflows.
- Supports correct wiring and configuration for immobilizer and main power sensing features used in anti theft scenarios.
- Aids planning for fleet scale rollouts by highlighting firmware variation risks and network considerations.

## Why Use Plaspy with This Protocol

Using the GOTOP C720 with Plaspy gives organizations covert and reliable vehicle visibility combined with centralized alarm handling and historical playback. Plaspy ingests the C720 telemetry, surfaces geo fence and alarm events, and stores location history for audits and recovery workflows, helping operations teams respond quickly to incidents and manage assets efficiently.

To learn more about Plaspy and how it can integrate with trackers like the GOTOP C720 visit https://www.plaspy.com. For the most current device specific protocol notes, firmware details and installation guidance verify information on the manufacturer site https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
