---
slug: /coban/bn_408a/protocol
id: bn_408a-protocol
sidebar_label: Protocol
title: Coban - BN-408A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Coban BN 408A GPS tracker and how it communicates with Plaspy
keywords:
  - Coban BN 408A protocol
  - Coban BN 408A GPS protocol
  - BN 408A tracking
  - Coban tracker Plaspy
  - GPS tracker protocol
  - asset tracking protocol
  - vehicle tracking BN 408A
  - Plaspy compatibility
  - tracker communication
  - BN 408A telemetry
---

# Coban - BN-408A Protocol

This page provides a public, high level overview of the communication protocol context for the Coban BN-408A when used with the Plaspy platform. It explains how the device reports position, alarms, and basic telemetry to Plaspy and what aspects of the tracker reporting are relevant for successful integration with the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The BN-408A supports TCP, UDP and SMS transports and can be configured to report to Plaspy using those common channels.

## Protocol Overview

The protocol provided by the BN-408A is the set of rules and transports the device uses to identify itself to a server and to deliver GPS positions, alarm events, and telemetry. For Plaspy integration this means the tracker needs to be configured to send reports to the Plaspy endpoint so the platform can ingest and display location and event data.

- Enables the device to send position fixes and timestamps that Plaspy can map and log
- Carries alarm and status messages such as tamper, low battery, movement and overspeed events
- Uses standard transport options supported by Plaspy so the same server endpoint can accept reports from many devices
- Affects reporting frequency and battery usage through configurable modes like real time, smart sleep, and power saving
- Provides the device identity required for Plaspy to associate incoming messages with the correct asset

## How Plaspy Detects the Protocol

Plaspy receives incoming device messages on a common endpoint and automatically identifies the protocol family and format so users normally do not need to select a protocol manually in the platform. Proper device configuration to point at the Plaspy server is the primary requirement for automatic detection to succeed.

- Plaspy listens on a single port for all supported devices and performs automatic protocol detection
- Users should configure the BN-408A to report to the Plaspy server endpoint for straightforward integration
- When a tracker is properly pointed at the Plaspy endpoint, manual protocol selection inside Plaspy is usually unnecessary
- Automatic detection reduces setup overhead when managing mixed fleets with multiple tracker models
- Protocol variants introduced by firmware differences are handled at the server side when supported formats are recognizable

## Transport and Connection Context

Connection context describes how the BN-408A reaches Plaspy over the network. The device supports TCP and UDP reporting as well as SMS for configuration or fallback. When integrating with Plaspy, configure the device to send its reports to the Plaspy server and choose the transport the device supports and your deployment prefers.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138
- The port used by Plaspy for all devices is 8888 and devices may be configured using UDP or TCP on port 8888
- The choice between UDP and TCP depends on the BN-408A firmware and the reliability requirements of the deployment
- SMS can be used for remote configuration where network reporting is not available or for field-level changes
- Ensure network paths and firewall rules allow outbound device traffic to d.plaspy.com on the configured port

## Protocol Compatibility Notes

- Firmware revisions can change message payloads, available fields, or reporting behaviors; verify the device firmware level when diagnosing interoperability
- Hardware revisions and optional feature sets on the BN-408A may affect which alarms and telemetry fields are present in reports
- UDP or TCP transport selection can influence delivery reliability and session behavior; choose the transport that matches device support and operational needs
- SMS remains a useful fallback for remote configuration but is not the primary telemetry channel for live tracking in Plaspy
- Always validate compatibility against the manufacturer's documentation for features that are implementation dependent
- When in doubt, test a device in a controlled environment before deploying at scale

## Why Protocol Understanding Matters

Understanding the BN-408A communication protocol helps ensure accurate setup, reliable reporting, and efficient troubleshooting when integrating devices with Plaspy. Awareness of protocol and transport behavior reduces configuration errors and speeds resolution of connection or data issues.

- Proper configuration to point the device at the Plaspy endpoint avoids common onboarding problems
- Knowledge of transport options helps balance battery life and reporting reliability for long deployments
- Recognizing which events the tracker reports ensures critical alarms reach operators promptly
- Testing for firmware specific differences prevents unexpected gaps in telemetry or missing fields
- Clear expectations about reporting modes reduce false positives in alarm handling and geofence workflows

## Why Use Plaspy with This Protocol

Using the BN-408A with Plaspy gives organizations visibility into asset movement, alarm events, and long term track history without requiring permanent wiring or complex installation. The combination of flexible transport options on the BN-408A and Plaspy’s automatic protocol detection makes initial integration straightforward for mixed fleets and asset deployments.

To learn more about Plaspy and how it manages device communication and fleet visibility, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer implementation guidance, please verify current information on the official Coban website https://www.coban.net/. Protocol support and firmware behavior can change over time so always confirm details with the manufacturer before large scale rollouts.
