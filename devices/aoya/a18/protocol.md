---
slug: /aoya/a18/protocol
id: a18-protocol
sidebar_label: Protocol
title: AoYa - A18 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the AoYa A18 GPS tracker and how it communicates with Plaspy for reliable vehicle tracking
keywords:
  - AoYa A18 protocol
  - AoYa A18 GPS tracker
  - A18 Plaspy compatibility
  - AoYa A18 communication protocol
  - A18 tracking protocol
  - AoYa tracker setup
  - A18 vehicle tracking
  - Plaspy device integration
  - AoYa GPS A18 guide
  - fleet tracking A18
---

# AoYa - A18 Protocol

This page covers the public protocol context for using the AoYa A18 GPS tracker with Plaspy. It describes how the tracker communicates at a high level with Plaspy's servers, what connection settings are commonly used, and why understanding the device reporting behavior is useful when integrating the A18 into a fleet or monitoring setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the A18 can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive information and practical connectivity context rather than device internals.

## Protocol Overview

The protocol used by the AoYa A18 governs how the tracker reports location, status, and alerts to a remote server and how it receives remote configuration when supported. In practical terms, the protocol enables the device to identify itself to the server, deliver periodic or event driven location updates, and convey basic telemetry that Plaspy can present in its platform.

- Provides identification and session context so Plaspy can associate incoming messages with the correct device and account.
- Conveys location sources such as GPS, AGPS, and LBS to support position accuracy and fallback reporting.
- Sends periodic location updates and event reports that Plaspy uses for real time tracking and history.
- Includes simple telemetry and status elements such as battery or movement alerts useful for operational monitoring.
- Allows remote configuration in some deployments depending on firmware and manufacturer support.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for device reports and automatically detects the tracker protocol used by an incoming device stream. When an A18 is configured to report to the Plaspy endpoint, the platform will identify the message pattern and route data into the appropriate device entry without manual protocol selection in most cases.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting host.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available or desired.
- The port for device reporting is 8888 and all devices in Plaspy use the same port.
- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- Because Plaspy automatically detects the tracker protocol, users typically do not need to pick a protocol inside Plaspy when the device is correctly pointed at the Plaspy endpoint.

## Transport and Connection Context

Connection details are an important part of successful integration but are separate from protocol internals. The A18 can send its reports over standard IP transport to Plaspy, and administrators should select the transport that matches the device firmware and network environment.

- The device may be configured using UDP or TCP on port 8888.
- Devices can be pointed to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- Using the domain name is preferred in environments where IP changes or DNS based routing are expected.
- UDP reporting can be useful for lower overhead and looser delivery timeout requirements, while TCP provides a connection oriented option when supported by the tracker.
- All Plaspy supported devices use the same reporting port which simplifies firewall and network configuration.

## Protocol Compatibility Notes

- Firmware revisions for the A18 can change reporting frequency, available fields, and supported transport options. Validate firmware behavior before large scale deployment.
- Hardware revisions or variant SKUs from the manufacturer may have small differences in how messages are sent or which features are available.
- Manufacturer configuration commands and remote settings are implementation dependent and may not be fully exposed through Plaspy unless the device supports remote configuration.
- Selecting UDP versus TCP on the device must match the device firmware capability and network constraints at installation sites.
- Always confirm server address and port are correctly entered on the device to ensure Plaspy receives reports.
- When in doubt, consult the official AoYa documentation for device specific configuration examples.

## Why Protocol Understanding Matters

A practical understanding of the communication protocol helps with reliable setup, faster troubleshooting, and predictable long term operation when using the A18 with Plaspy. Knowing the connection and reporting expectations reduces integration friction and improves uptime for tracking.

- Ensures devices are pointed to the correct Plaspy endpoint and port so messages are delivered.
- Helps diagnose common connectivity issues such as incorrect transport selection or DNS resolution failures.
- Clarifies how firmware differences affect the available telemetry and reporting cadence.
- Supports planning for power and reporting trade offs based on device standby and update behavior.
- Makes it easier to confirm that the device identity Plaspy receives matches the hardware you installed.

## Why Use Plaspy with This Protocol

Using the AoYa A18 with Plaspy gives organizations a straightforward path to vehicle visibility using a compact tracker that supports GPS, AGPS, and LBS. Plaspy’s automatic protocol detection and unified port approach simplify onboarding and reduce configuration steps needed to start receiving location and status data from the A18.

If you want to learn more about how Plaspy handles device connectivity and integrates trackers like the AoYa A18, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration guides, verify information on the manufacturer site http://www.aoyagps.com/ as behavior and firmware capabilities can change over time.
