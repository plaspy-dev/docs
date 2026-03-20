---
slug: /thingsys/ts_p4b/protocol
id: ts_p4b-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the ThingSys TS P4B GPS tracker and how it communicates with Plaspy for reliable fleet and asset tracking
keywords:
  - ThingSys TS-P4B protocol
  - ThingSys TS-P4B GPS protocol
  - TS-P4B Plaspy compatibility
  - TS-P4B communication protocol
  - TS-P4B tracking protocol
  - Plaspy device compatibility
  - Plaspy GPS tracker integration
  - magnetic GPS tracker protocol
  - long battery GPS tracker protocol
  - 2G GPS tracker protocol
---

# ThingSys - TS-P4B Protocol

This page provides a public, non sensitive overview of the communication context for the ThingSys TS-P4B when used with Plaspy. It covers how the tracker reports location and telemetry to Plaspy, the shared connection settings Plaspy uses, and the practical implications that matter during setup and troubleshooting.

The TS-P4B is a magnetic, large battery tracker with u-blox GNSS positioning, accelerometer based motion detection, remote voice monitoring, and 2G cellular connectivity. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available commands can vary by firmware version, hardware revision, and manufacturer implementation, so device specific details should be confirmed with ThingSys documentation.

## Protocol Overview

The protocol used by the TS-P4B defines how the device reports GNSS fixes, motion and sensor status, battery telemetry, and event notifications to a backend service. In public terms the protocol enables the tracker to identify itself, transmit usable location and status data, and receive remote configuration or commands when supported by the device and network.

- Transmits GNSS position reports and timestamps that Plaspy uses for live tracking and historical routes.
- Sends device telemetry such as battery level, motion state from the accelerometer, and basic sensor alerts.
- Allows the device to report event driven updates such as motion start, tamper, low battery, and periodic heartbeats.
- Supports over the air delivery of minimal remote commands or configuration where the manufacturer firmware exposes that capability.
- Provides the necessary identifiers so Plaspy can associate incoming data with the correct asset and user account.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a shared endpoint and automatically detects the tracker protocol so most users do not need to pick a protocol manually inside Plaspy when the device is configured correctly. Properly pointed devices will be recognized and parsed by Plaspy so location and events appear in the platform without extra protocol selection.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Plaspy listens on port 8888 for all supported devices
- Devices can be configured to use either UDP or TCP depending on device capability
- When a TS-P4B reports to the Plaspy endpoint the platform attempts to identify and decode the device protocol automatically
- Users typically only need to ensure the device is set to report to the Plaspy endpoint and that network settings such as APN are correct

## Transport and Connection Context

Connection choices such as UDP versus TCP and correct destination settings are key practical details for device reporting. The TS-P4B supports 2G cellular connectivity and can be configured to send its reports to the Plaspy endpoint using the supported transport on port 8888.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and network stability
- Devices may point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138
- All Plaspy supported devices use the same port 8888 for reporting
- Ensure APN and SIM settings allow outbound connections to the Plaspy endpoint
- Firewalls and NAT on customer networks should allow outbound UDP or TCP to port 8888 to reach Plaspy
- Transport selection can affect delivery guarantees and battery impact depending on firmware behavior

## Protocol Compatibility Notes

- Firmware revisions can change message frequency, available telemetry fields, and remote command behavior
- Hardware variants or production batches may differ in supported features such as voice monitoring or sensor thresholds
- Manufacturer default settings for reporting interval and transport may need adjustment for Plaspy integration
- Network environment and 2G coverage influence report reliability and time to fix
- Always validate that the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport
- Verify compatibility for advanced features such as remote configuration with the official ThingSys documentation

## Why Protocol Understanding Matters

A clear, practical understanding of how the TS-P4B communicates helps ensure a reliable deployment with Plaspy and reduces time spent troubleshooting connectivity, battery life, and event behavior. Even when Plaspy automatically detects the protocol, knowing what the device sends and when it sends it supports better operational decisions.

- Confirms device reporting intervals and event triggers align with operational needs
- Helps diagnose missed reports by checking transport, APN, and endpoint configuration
- Guides battery life expectations based on report frequency and sensor usage
- Enables precise mapping of device events such as motion, tamper, and low battery into Plaspy workflows
- Simplifies coordination with ThingSys support when firmware or behavior differences appear
- Supports planning for coverage, maintenance intervals, and remote monitoring strategies

## Why Use Plaspy with This Protocol

Using the TS-P4B with Plaspy gives organizations access to consistent real time location, telemetry and alerting without requiring per device port configuration. Plaspy’s shared endpoint and automatic protocol detection make it straightforward to onboard magnetic long life trackers like the TS-P4B for fleet and asset visibility, anti theft workflows, and long term deployments that benefit from fewer service visits.

To learn more about integrating TS-P4B deployments with Plaspy visit https://www.plaspy.com. For the most current device and firmware specific protocol information verify details on the manufacturer site https://www.thingsys.com/ as protocol support and firmware behavior can change over time.
