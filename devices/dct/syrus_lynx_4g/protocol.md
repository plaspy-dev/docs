---
slug: /dct/syrus_lynx_4g/protocol
id: syrus_lynx_4g-protocol
sidebar_label: Protocol
title: DCT - Syrus Lynx 4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for DCT Syrus Lynx 4G integration with Plaspy including connection and compatibility guidance for fleet deployments
keywords:
  - DCT Syrus Lynx 4G protocol
  - Syrus Lynx 4G GPS protocol
  - DCT GPS tracker protocol
  - Syrus Lynx 4G Plaspy
  - Syrus Lynx 4G communication protocol
  - vehicle tracking protocol Plaspy
  - fleet tracker protocol compatibility
  - Syrus Lynx 4G telemetry integration
  - Plaspy device protocol
  - fleet telematics protocol
---

# DCT - Syrus Lynx 4G Protocol

This page covers the public protocol context for using the DCT Syrus Lynx 4G tracker with the Plaspy platform. It explains how the tracker communicates to Plaspy in broad terms, what connection settings are used, and how protocol-level behavior affects integration and troubleshooting without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the Syrus Lynx 4G can vary by firmware revision, hardware variant, and manufacturer implementation, so this page focuses on public, non-sensitive protocol context and practical compatibility considerations.

## Protocol Overview

The tracker reporting protocol is the set of rules the Syrus Lynx 4G uses to deliver GNSS position, telemetry, and alarm events to a cloud endpoint so Plaspy can ingest and present those signals. In practice, the protocol ensures the device can identify itself, share status and sensor data, and trigger alerts or commands that Plaspy can act on.

- Provides device identity and status that Plaspy uses to associate incoming messages with a vehicle record.
- Carries GNSS position, timestamp, and basic telemetry such as speed, heading, and alarm states for mapping and historical reporting.
- Transports event notifications such as tow alarms, power loss, and driving behavior that drive rule-based alerts in Plaspy.
- Enables command and control flows so remote actions like immobilization can be initiated from Plaspy and forwarded to the device.
- Acts as the interoperability layer between DCT’s firmware and Plaspy’s ingestion systems, subject to firmware and configuration differences.

## How Plaspy Detects the Protocol

Plaspy receives telemetry and event streams at a shared endpoint and port, then matches incoming data to known device behaviors so the platform can decode and process messages. Because Plaspy is designed to accept many device types, users normally do not need to select a protocol manually when a device is correctly configured to report to the Plaspy endpoint.

- Plaspy accepts device reports at the domain d.plaspy.com and the public server address 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.
- When a Syrus Lynx 4G is configured to report to the Plaspy endpoint, Plaspy will identify and process its messages without manual protocol selection in most cases.
- Proper device configuration and up-to-date firmware increase the likelihood of automatic detection and correct decoding.
- If detection issues occur, checking the device reporting target, transport type, and firmware notes is a practical first step.

## Transport and Connection Context

Connection context describes how the Syrus Lynx 4G reaches Plaspy rather than the detailed protocol internals. The device can be configured to use standard IP transport options and must point its reporting target to Plaspy’s shared endpoint to integrate.

- The device may be configured to use either UDP or TCP on port 8888 depending on device support and deployment requirements.
- Plaspy listens on port 8888 for all supported devices, so the same port is used for Syrus Lynx 4G traffic as for other trackers.
- Devices can be set to report to d.plaspy.com or directly to 54.85.159.138 as the Plaspy server address.
- Cellular connectivity (LTE Cat-1 with 3G/2G fallback) is the typical transport medium for the Lynx 4G to reach the Plaspy endpoint.
- Ensure any carrier or firewall rules allow outbound connections from the device to the Plaspy server and port.

## Protocol Compatibility Notes

- Firmware revisions from DCT can alter how specific fields, event names, or optional telemetry are reported; always verify firmware notes when troubleshooting.
- Hardware revisions or regional SKUs may support different cellular band sets or sensor options that affect telemetry availability.
- Transport selection (UDP vs TCP) should match the device configuration and any operational requirements for reliability and latency.
- Manufacturer-side configuration options (reporting intervals, alarm thresholds, immobilizer wiring) can change the data Plaspy receives and how often.
- Validate device provisioning (SIM, APN, and reporting target) to ensure messages are directed to d.plaspy.com or 54.85.159.138 on port 8888.
- Consult official DCT documentation for firmware-specific behavior and supported configuration commands that affect reporting.

## Why Protocol Understanding Matters

Understanding the communication protocol for the Syrus Lynx 4G helps ensure consistent reporting, streamlined troubleshooting, and reliable long-term operation when integrated with Plaspy. Basic protocol awareness reduces time to resolution for connectivity and data interpretation issues.

- Helps verify that the device is pointing to the correct Plaspy endpoint and using the supported transport and port.
- Aids in diagnosing missing telemetry, unexpected event names, or differences in how alarms are reported across firmware versions.
- Informs decisions about reporting intervals, data usage, and battery backup behavior for uninterrupted tracking.
- Supports planning for large rollouts by clarifying which configuration options must be standardized for fleet consistency.
- Enables clearer communication with DCT technical support when device behavior appears inconsistent with Plaspy ingestion.

## Why Use Plaspy with This Protocol

Pairing the DCT Syrus Lynx 4G with Plaspy gives operators practical, centralized visibility into location, alarms, and telematics for fleets, rental operations, and insurance programs. The device’s multi-network cellular connectivity, internal backup battery, and telemetry features map directly to Plaspy capabilities such as live mapping, rule-based alerts, and remote command workflows.

Plaspy’s shared endpoint model and automatic protocol detection simplify device onboarding: configure the Syrus Lynx 4G to report to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP, and Plaspy will generally detect and process the device’s messages. To learn more about Plaspy and how it supports fleet tracking and telematics, visit https://www.plaspy.com. For the most current device protocol details, firmware notes, and implementation guidance, consult the manufacturer documentation at https://www.digitalcomtech.com/ as protocol support and firmware behavior can change over time.
