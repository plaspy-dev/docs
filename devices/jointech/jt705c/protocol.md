---
slug: /jointech/jt705c/protocol
id: jt705c-protocol
sidebar_label: Protocol
title: Jointech - JT705C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Jointech JT705C integration with Plaspy including connection context and compatibility guidance
keywords:
  - Jointech JT705C protocol
  - Jointech JT705C GPS protocol
  - JT705C tracking protocol
  - JT705C Plaspy compatibility
  - Jointech GPS tracker protocol
  - JT705C communication protocol
  - GPS tracker protocol Plaspy
  - container video lock protocol
  - customs GPS tracker protocol
  - fleet tracking JT705C
---

# Jointech - JT705C Protocol

This page summarizes the public protocol context for using the Jointech JT705C Intelligent Video Customs Lock with Plaspy. It explains how the device communicates at a high level, what role the tracker protocol plays in delivering location, event, and video telemetry, and what to consider when configuring the device to report to Plaspy. This guidance is intended for technical users, integrators, and fleet managers who want a clear, non sensitive overview of how JT705C data is exchanged with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the unit is reporting to the platform. Exact device behavior and protocol details can vary by JT705C firmware version, hardware revision, and manufacturer implementation, so validate device specific behavior with Jointech when needed. The sections below focus on connection context and practical compatibility considerations rather than low level packet mechanics.

## Protocol Overview

The JT705C communication protocol is the mechanism by which the unit reports GPS positions, alarm events, and references to video evidence to a remote server such as Plaspy. In practice the protocol enables the device to identify itself, transmit telemetry and event metadata, and allow remote management commands where supported. The public overview below describes the role of the protocol without exposing proprietary internals.

- Allows the JT705C to send periodic location updates and event-driven notifications to a remote endpoint.
- Carries alarm and status metadata needed for incident handling, such as tamper, impact, or unlock events.
- Includes references or identifiers that link telemetry to recorded video clips or live view sessions in external systems.
- Supports either persistent or datagram-style transport depending on device configuration to reach the cloud endpoint.
- Provides the basic identity and session information Plaspy needs to match incoming data to a device record and present usable information in the dashboard.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a common network endpoint and to detect the incoming device protocol automatically. When a properly configured JT705C reports to the Plaspy endpoint, the platform will match incoming messages to the correct device profile without requiring manual protocol selection in most deployments.

- Plaspy uses a shared server endpoint and port for incoming tracker traffic and performs automatic protocol recognition.
- Users typically do not need to select a protocol inside Plaspy if the JT705C is configured to report to the Plaspy endpoint.
- Proper device configuration to point at Plaspy and using the device identifier values expected by the device firmware are common setup requirements.
- Automatic detection reduces setup complexity for fleets with mixed tracker models by centralizing protocol handling on the server side.
- When detection issues occur, basic checks include confirming the reporting host, transport type, and that the device is actively sending telemetry.

## Transport and Connection Context

The JT705C may be configured to use either UDP or TCP transport when reporting to Plaspy, depending on device support and how the unit is provisioned. Plaspy publicly accepts tracker connections at the same endpoint for all supported devices, so the main transport considerations are selecting the appropriate mode on the JT705C and ensuring network routing allows outbound traffic to Plaspy.

- Plaspy server domain for tracker reporting is d.plaspy.com.
- Plaspy server IP endpoint is 54.85.159.138.
- Devices may be set to use UDP or TCP on port 8888 when reporting to Plaspy.
- All devices supported by Plaspy use the same port to simplify network configuration and firewall rules.
- Confirm network and carrier policies allow outbound connections from the device to the Plaspy endpoint and chosen transport.

## Protocol Compatibility Notes

- Firmware and hardware revisions of the JT705C can affect which protocol features are present and how specific events are reported.
- Manufacturer configuration defaults may point to different endpoints; ensure the device is explicitly set to report to d.plaspy.com or the Plaspy IP when required.
- Transport selection between UDP and TCP can change delivery characteristics and should match your operational needs and device capabilities.
- When enabling video references or live view, validate that the device configuration and network conditions support linking video metadata to Plaspy events.
- Integration and command functions may vary by distributor or tailored firmware builds; consult Jointech documentation for variant specifics.
- Always test a representative device in your environment before wide deployment to confirm telemetry, alarms, and video linkage behave as expected.

## Why Protocol Understanding Matters

Understanding the JT705C communication protocol at a practical level helps ensure reliable device onboarding, faster troubleshooting, and consistent telemetry delivery into Plaspy. While Plaspy handles protocol detection, knowing how the device connects and reports enables better configuration decisions and clearer expectations around event handling and video references.

- Reduces time to commission devices by aligning device settings with Plaspy connection expectations.
- Helps pinpoint connectivity issues by focusing troubleshooting on transport, DNS, and reporting intervals.
- Clarifies how event metadata maps to alerts and incident workflows inside Plaspy.
- Supports capacity planning when enabling video references or frequent event reporting across a fleet.
- Improves change management when updating device firmware or switching transport modes.

## Why Use Plaspy with This Protocol

Using the JT705C with Plaspy combines the device's specialized capabilities for cargo and customs monitoring with a centralized fleet management and incident handling platform. Plaspy ingests location, alarm, and video reference data from compatible JT705C units so dispatchers, compliance teams, and investigators can view consolidated telemetry and evidence in one place. For organizations that require auditable trails, event-driven video, and consistent tracking across multimodal transport, this pairing supports both operational visibility and compliance workflows.

To learn more about Plaspy and review platform capabilities, visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes, and configuration guidance for the JT705C, verify details with the manufacturer at https://www.jointcontrols.com/ as implementation and firmware behavior can change over time.
