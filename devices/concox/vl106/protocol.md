---
slug: /concox/vl106/protocol
id: vl106-protocol
sidebar_label: Protocol
title: Concox - VL106 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL106 and how it communicates with Plaspy for fleet tracking and telemetry
keywords:
  - Concox VL106 protocol
  - Concox VL106 GPS protocol
  - Concox VL106 Plaspy
  - Concox VL106 communication protocol
  - VL106 tracking protocol
  - Concox GPS tracker protocol
  - vehicle tracking Concox VL106
  - Plaspy tracker compatibility
  - fleet tracking VL106
  - VL106 telemetry protocol
---

# Concox - VL106 Protocol

This page provides a public, non sensitive overview of the communication context for the Concox VL106 when used with the Plaspy platform. It explains how the device reports location, motion, and event telemetry to Plaspy and what role the device protocol plays in delivering usable data for fleet management, safety monitoring, and security workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly pointed to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on publicly observable integration points rather than device internals or proprietary packet structures.

## Protocol Overview

The VL106 uses a device reporting protocol to deliver GNSS position, IMU motion data, inputs and alarms to a backend server. In practice the protocol's role is to ensure the tracker can reliably identify itself to Plaspy, transmit timely telemetry, and signal events such as ignition changes, SOS presses, or collision captures for downstream processing.

- Enables the VL106 to send location fixes and IMU bursts to the backend for live tracking and replay.
- Carries device identity and status information so Plaspy can associate incoming messages with the correct vehicle record.
- Transports event and alarm reports such as ignition, SOS, tamper, and power loss for immediate alerting.
- Supports buffered uploads from onboard storage so events captured offline are delivered when connectivity resumes.
- Allows the device to use configured transport settings so manufacturers and installers can choose TCP or UDP depending on network and deployment needs.

## How Plaspy Detects the Protocol

Plaspy is designed to receive telemetry from many tracker models while minimizing manual configuration for administrators. When a properly configured VL106 reports to the Plaspy endpoint, the platform will automatically associate incoming data with the correct device and interpret the payload using the appropriate handling logic.

- Plaspy receives device connections on a shared server endpoint and identifies the tracker protocol automatically.
- Users generally do not need to pick a protocol inside Plaspy if the device is set to report to the Plaspy endpoint.
- Incoming messages are matched to the device record using identifiers sent by the tracker and standard connection metadata.
- Plaspy centralizes handling of supported protocols so adding devices typically requires only pointing the tracker to the correct server settings.
- If a device uses vendor specific or custom firmware behavior, verification of identifiers and transport settings may be necessary to ensure correct detection.

## Transport and Connection Context

The VL106 can be configured to report to Plaspy using standard IP transports. Plaspy exposes a single, consistent listening port for all supported devices and accepts both common transport modes depending on the tracker configuration and mobile network requirements.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy.
- The Plaspy server endpoint can be reached by DNS name d.plaspy.com or directly by IP at 54.85.159.138.
- Plaspy uses the same port for all devices it supports, simplifying installer configuration and firewall rules.
- Choice of UDP versus TCP is determined by device firmware, network conditions, and installer preferences for reliability versus lower overhead.
- Ensure mobile APN and network policies allow outbound connections to the Plaspy endpoint on the required transport and port.

## Protocol Compatibility Notes

- Firmware differences can change how and when a VL106 sends specific fields or event reports; confirm firmware details before large scale deployment.
- Hardware revisions from the manufacturer may alter available sensors or IO behavior that the protocol reports.
- Some manufacturer or region variants may default to UDP or TCP; check device configuration to match Plaspy transport expectations.
- Onboard buffering and IMU capture behavior depend on device firmware and should be validated against the vendor documentation for the intended use case.
- When custom or aftermarket configuration tools are used, validate that identifiers and server settings are written correctly to the device.
- Always cross check protocol related settings with the manufacturer documentation for device specific notes and firmware changelogs.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable setup, faster troubleshooting, and predictable long term operation of VL106 units on Plaspy. It reduces time spent diagnosing connectivity, identity, and data completeness issues and supports better operational decisions about transport and firmware management.

- Confirms the device is pointing to the correct Plaspy endpoint and using the intended transport mode.
- Helps diagnose why a device may appear offline or why event uploads are delayed.
- Supports decisions around firmware updates, IMU sampling windows, and buffered storage expectations.
- Informs firewall and network configuration so mobile traffic can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Improves integration planning for fleets that require high fidelity telemetry and consistent event reporting.

## Why Use Plaspy with This Protocol

The VL106 combined with Plaspy provides a practical solution for organizations needing continuous location visibility, event driven alerts, and telemetry rich analytics. The device delivers GNSS continuity aided by INS and high rate IMU capture, while Plaspy ingests and visualizes that data to support live maps, history replay, driving behavior analysis, and automated workflows for security and operations.

To learn more about how Plaspy supports device integrations and fleet workflows, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so please verify the latest device specific protocol and firmware information on the manufacturer site https://www.iconcox.com/.
