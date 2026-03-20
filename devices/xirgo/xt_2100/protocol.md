---
slug: /xirgo/xt_2100/protocol
id: xt_2100-protocol
sidebar_label: Protocol
title: Xirgo - XT-2100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the Xirgo XT-2100 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - Xirgo XT-2100 protocol
  - XT-2100 GPS protocol
  - Xirgo XT-2100 Plaspy compatibility
  - XT-2100 communication protocol
  - Xirgo GPS tracker protocol
  - XT-2100 tracking protocol
  - Xirgo Plaspy integration
  - XT-2100 TCP UDP configuration
  - fleet tracking XT-2100
  - asset tracking Xirgo XT-2100
---

# Xirgo - XT-2100 Protocol

This page provides public protocol context for using the Xirgo XT-2100 tracker with Plaspy. It summarizes how the device communicates at a high level, what to expect when pointing the tracker at Plaspy, and which connection settings are commonly used for integration without exposing detailed or sensitive implementation specifics.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact behaviour can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on practical, non sensitive protocol context and integration considerations for the XT-2100.

## Protocol Overview

The communication protocol for the XT-2100 enables the device to report location, status, and event data to a remote server and to receive configuration or control when supported. In the context of Plaspy, the protocol's role is to deliver telemetry and identify the device so the platform can present usable location and state data.

- Carries device identity and session information so Plaspy can associate incoming messages with a specific tracker.
- Transports telemetry such as GPS fixes, speed, heading, and input/output states for monitoring and alerting.
- Conveys periodic heartbeats and keepalive messages so the platform can detect connectivity and device availability.
- Supports remote configuration and firmware updates when the device and manufacturer tooling allow over the network.
- Uses transport layers like TCP or UDP to deliver messages depending on device configuration and network conditions.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a single shared server endpoint and automatically determines the device protocol from the incoming traffic pattern and device identifiers. In most cases a properly configured XT-2100 will start reporting without requiring manual protocol selection inside Plaspy.

- Plaspy listens on a shared endpoint at d.plaspy.com and the server IP 54.85.159.138 for incoming device reports.
- The platform accepts connections on port 8888 and uses the received information to detect the reporting protocol automatically.
- Users normally do not need to select a protocol in Plaspy if the XT-2100 is configured to send data to the Plaspy endpoint.
- Plaspy supports devices reporting over either UDP or TCP on the same port and handles detection across both transports.
- Consistent device identity and correct server settings on the tracker side are the typical prerequisites for successful automatic detection.

## Transport and Connection Context

The XT-2100 can be configured to use different transport options, and Plaspy supports those common transports on a single, shared port. This section focuses on connection context rather than internal packet structure.

- The device may be configured to use either UDP or TCP to communicate with Plaspy on port 8888.
- Trackers can point to the Plaspy hostname d.plaspy.com or to the server IP 54.85.159.138 as the reporting destination.
- All devices supported by Plaspy use the same port, simplifying firewall and network configuration on the server side.
- Selecting UDP may be preferred for low overhead reporting while TCP can provide a more reliable session oriented transport depending on device settings.
- Network settings such as APN configuration, SIM data plan, and mobile coverage remain important factors for stable connectivity.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available fields, and optional features; confirm the device firmware version when validating behaviour.
- Hardware revisions or regional variants of the XT-2100 may implement features differently, so check the specific device label and documentation.
- Manufacturer configuration options (for example transport selection TCP versus UDP) directly affect how the device reaches Plaspy; choose the transport that matches your network and operational needs.
- Over the air updates and remote configuration mechanisms may enable changes in reporting format or endpoints over time.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 to ensure it reaches Plaspy.
- When in doubt, consult official Xirgo documentation and release notes for device specific behaviour and known differences.

## Why Protocol Understanding Matters

A practical understanding of how the XT-2100 communicates helps with setup, operational monitoring, and troubleshooting when integrating with Plaspy. Knowing which transport and endpoint the device uses reduces time to first report and improves long term reliability.

- Ensures correct server and transport settings are applied on the tracker for successful initial connections.
- Helps distinguish between connectivity issues and data interpretation problems when messages are not appearing as expected.
- Aids in planning for scaling, since all devices use a common port and Plaspy centralizes protocol detection.
- Supports effective troubleshooting when firmware changes alter reporting cadence or available fields.
- Makes it easier to document device behaviour for fleet administrators and maintenance teams.

## Why Use Plaspy with This Protocol

Using the Xirgo XT-2100 with Plaspy gives organizations a straightforward path to integrate a compact, feature rich tracker into a unified fleet or asset management workflow. Plaspy's shared endpoint model and automatic protocol detection reduce configuration overhead, so devices that are correctly set to report to the Plaspy server can begin sending usable telemetry with minimal platform-side setup.

To learn more about Plaspy and how it can manage devices like the XT-2100 visit https://www.plaspy.com. For the most current and device specific protocol, firmware, and implementation details always verify information with the manufacturer at https://xirgo.com/.
