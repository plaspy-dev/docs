---
slug: /coban/bn_311c/protocol
id: bn_311c-protocol
sidebar_label: Protocol
title: Coban - BN-311C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for integrating the Coban BN-311C GPS tracker with Plaspy including connection and compatibility guidance
keywords:
  - Coban BN-311C protocol
  - Coban BN-311C GPS protocol
  - BN-311C tracking protocol
  - Coban GPS tracker protocol
  - BN-311C Plaspy compatibility
  - Coban BN-311C communication
  - motorcycle GPS protocol
  - GSM GPRS tracker protocol
  - tracker protocol documentation
  - Plaspy device protocol
---

# Coban - BN-311C Protocol

This page describes the public protocol context for using the Coban BN-311C tracker with Plaspy. It focuses on how the device communicates over cellular networks and how those communications are handled by the Plaspy platform to enable real-time tracking, alerts, and basic fleet features. The information here is intended to help installers, fleet managers, and technical users understand the communication role without exposing sensitive implementation details.

Plaspy uses a shared set of connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so final configuration and advanced behaviors should be validated against the device firmware and official Coban documentation.

## Protocol Overview

The BN-311C uses GSM/GPRS to deliver GNSS positions, status updates, alarms, and telemetry to a remote server. In practical terms the device protocol defines how the tracker identifies itself, reports location and event data, and accepts remote control actions such as immobilizer commands. For integration with Plaspy, the protocol's role is to make those messages readable and actionable by the cloud platform.

- Enables periodic and event-driven reporting of GNSS coordinates, ignition state, and alarm events to the server.
- Carries telemetry such as battery and power status so Plaspy can display device health and trigger alerts.
- Transmits alarm types including movement, geo-fence, shock, overspeed, and power disconnection for immediate handling.
- Supports remote control features available on the BN-311C C-type model such as remote arm/disarm and fuel or power cut-off.
- Provides a transport-agnostic message layer that can be sent over TCP, UDP, or SMS depending on device configuration.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports on a shared endpoint and port and applies automatic detection to determine the tracker protocol in use. When a BN-311C is configured to report to Plaspy, the system typically recognizes the device messages without requiring manual protocol selection in the platform. This streamlines onboarding for common tracker models and standard reporting configurations.

- Plaspy listens on a single service endpoint for device traffic and identifies supported device protocols automatically.
- Devices pointed at d.plaspy.com or 54.85.159.138 and using the Plaspy port will be routed to the Plaspy ingestion pipeline.
- Users generally do not need to select a protocol inside Plaspy if the tracker is correctly configured to report to the Plaspy endpoint.
- Automatic detection covers common reporting patterns used by motorcycle and small vehicle trackers such as the BN-311C.
- If a tracker does not report as expected, installers should verify device reporting settings and firmware behavior against manufacturer guidance.

## Transport and Connection Context

BN-311C devices can send data via GSM/GPRS with options for TCP, UDP, or SMS reporting. For Plaspy integration, devices should be configured to report to the Plaspy server using the shared connection settings so data is accepted and processed by the platform. Transport selection (TCP versus UDP) can depend on the device configuration choices and network characteristics.

- Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- The Plaspy service listens on port 8888 and all devices in Plaspy use the same port for reporting.
- The BN-311C may be configured to use either UDP or TCP on port 8888 depending on device support and installer preference.
- SMS remains an alternative configuration method for setup and some remote commands but TCP/UDP reporting is preferred for live tracking.
- Ensure APN and GPRS settings on the device are correct so the tracker can reach the Plaspy endpoint over cellular data.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and command support; confirm the device firmware level when validating compatibility.
- Hardware revisions or regional variants may alter supported transports or available alarm types.
- Manufacturer-side configuration commands sent over SMS or GPRS can enable or disable certain report types and remote features.
- Transport choice (TCP versus UDP) can affect delivery guarantees and should match the expected network behavior for your deployment.
- When integrating at scale, validate a sample device before mass deployment to ensure messages are parsed and displayed correctly in Plaspy.
- Always reference Coban documentation for model specific commands and for any firmware specific caveats.

## Why Protocol Understanding Matters

Understanding the tracker protocol helps ensure reliable onboarding, accurate data display, and predictable remote control behavior when using the BN-311C with Plaspy. Awareness of what the device sends and how Plaspy ingests it reduces setup time and helps troubleshoot connectivity, reporting gaps, and unexpected device behavior.

- Helps confirm the device is reporting the necessary fields for location, ignition, and alarms.
- Improves troubleshooting for cases where a device is connected to the network but not visible in Plaspy.
- Clarifies which remote commands and alarms are supported by the C-type model and how they surface in the platform.
- Aids decisions about using TCP or UDP reporting based on network reliability and latency needs.
- Supports planning for firmware updates and future feature compatibility across a fleet.

## Why Use Plaspy with This Protocol

Using the BN-311C with Plaspy gives organizations concise motorcycle and small-vehicle visibility with the essentials for real-time tracking, alarm handling, and simple fleet oversight. The compact design of the BN-311C combined with Plaspy processing of position and alarm reports enables discreet anti-theft workflows, remote immobilization actions, and operational monitoring suitable for riders, delivery fleets, and rental operators.

To learn more about Plaspy and how it handles device integrations like the BN-311C, visit https://www.plaspy.com. For the most current device level protocol details, firmware behavior, and manufacturer instructions, verify the latest information on the official Coban website https://www.coban.net/ as device implementations and firmware can change over time.
