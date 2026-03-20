---
slug: /riti/690_idu_401/protocol
id: 690_idu_401-protocol
sidebar_label: Protocol
title: Riti - 690 (IDU-401) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Riti 690 IDU 401 and how it communicates with Plaspy for GPS telemetry and event images
keywords:
  - Riti 690 protocol
  - Riti IDU 401 GPS protocol
  - Riti 690 Plaspy compatibility
  - Locator 690 communication
  - vehicle tracking protocol Riti
  - image evidence GPS tracker
  - Plaspy tracker protocol
  - fleet management Riti 690
  - Riti 690 telemetry
  - event driven image capture
---

# Riti - 690 (IDU-401) Protocol

This page covers the public protocol context for using the Riti Locator 690 (IDU-401) with Plaspy. It explains how the device communicates with the Plaspy cloud for GPS telemetry, event-driven image uploads, and related reporting without exposing private implementation details. Content focuses on the role of the communication protocol in reliable integration and practical setup considerations for fleet managers and integrators.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes general, public-facing protocol context and integration points rather than device internals.

## Protocol Overview

The Tracker protocol for Locator 690 governs how the unit identifies itself to the cloud, reports GPS and event telemetry, and delivers event images captured by on device AI. The protocol's role is to make location and evidence data usable by Plaspy for visualization, alerting, and forensic review while preserving device-level capabilities like IO-triggered captures and local buffering.

- Enables the device to report location, speed, heading, and event metadata to Plaspy for live tracking and historical playback.
- Carries event signals and timestamps that allow Plaspy to index pre event, during event, and post event images alongside GPS tracks.
- Facilitates on demand live image retrieval requests from the platform and mobile apps so managers can view situational imagery.
- Supports configuration messages and remote triggers when the device and firmware expose those management features.
- Works together with local buffering to ensure forward on connect behavior when cellular connectivity is interrupted.

## How Plaspy Detects the Protocol

Plaspy operates a unified endpoint that accepts incoming tracker connections and uses that single contact point to determine the appropriate handling for each device. When a Locator 690 is pointed at the Plaspy endpoint and port, Plaspy will match incoming reports to known device behaviors and route telemetry and images into the platform automatically.

- Point your device to the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 to report telemetry and images.
- Use port 8888 for communications since all devices in Plaspy share the same port for device reporting.
- Plaspy automatically detects the tracker protocol when the device reports to the shared endpoint, so manual protocol selection in the platform is typically not required.
- Ensure the device is configured to use the chosen transport and reporting format supported by the firmware so the platform can recognize its messages.
- If a device uses device management features, those messages will be processed according to the feature set exposed by the device firmware.

## Transport and Connection Context

Transport selection and server addressing are an important part of reliable device connectivity. Locator 690 supports cellular uplink for telemetry and image uploads, and the device can be configured to use either UDP or TCP on the platform port based on network conditions and firmware capabilities.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and local configuration choices.
- You can point the tracker to the Plaspy server domain d.plaspy.com or to the server IP 54.85.159.138 as required by your deployment.
- All Plaspy devices use the same port 8888 for reporting, simplifying firewall and carrier configuration on fleet networks.
- Choose the transport that matches your carrier and reliability needs; TCP offers connection oriented delivery while UDP can be useful for lower overhead messages where firmware supports retransmission.
- Verify that any intermediate NAT or carrier grade NAT setups allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Locator 690 is compatible with Plaspy and supports the on device features that deliver telemetry and event images to the platform.
- Firmware revisions can change available features, message timing, and optional fields, so behavior may differ between units or firmware versions.
- Hardware revisions and optional accessories that provide additional sensors or inputs may alter the event payloads and triggers that the tracker sends.
- Transport choice TCP versus UDP can affect delivery guarantees and how the device forwards buffered data when connectivity resumes.
- Always confirm device configuration points such as the Plaspy server domain or IP and port 8888 are set correctly on deployed units.
- For device management commands and advanced configuration, consult manufacturer documentation to understand supported remote settings and limitations.
- Validate compatibility and feature availability against the official Riti documentation for the specific hardware and firmware in use.

## Why Protocol Understanding Matters

Understanding the device communication protocol helps ensure a smooth setup, reliable data flow, and effective troubleshooting when using Locator 690 with Plaspy. A practical grasp of how the tracker reports telemetry and images reduces integration time and improves operational reliability for fleet managers and integrators.

- Confirms the device is pointing to d.plaspy.com or 54.85.159.138 on port 8888 so data reaches Plaspy.
- Helps diagnose connectivity issues related to transport, carrier restrictions, or firewall rules that block port 8888.
- Enables faster incident reconstruction by ensuring event images are indexed correctly with GPS tracks and timestamps.
- Supports decisions about configuring IO triggers, buffering behavior, and image retention to match operational needs.
- Guides firmware update planning by identifying which firmware versions support features required for your workflows.

## Why Use Plaspy with This Protocol

Using the Locator 690 with Plaspy provides organizations a practical way to combine telemetry and indexed image evidence for faster incident response and richer operational insight. The device’s on device AI, configurable IO triggers, and local buffering enhance Plaspy’s ability to present searchable, event linked imagery alongside GPS tracks so teams can act on high fidelity evidence.

Plaspy simplifies device connectivity by using a single reporting port and automatic protocol detection, letting fleets focus on operations instead of protocol configuration. To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device and firmware specific protocol details verify information with the manufacturer at https://www.riti.com.tw/ as firmware behavior and device implementation can change over time.
