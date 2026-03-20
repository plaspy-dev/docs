---
slug: /meitrack/tc68l_e/protocol
id: tc68l_e-protocol
sidebar_label: Protocol
title: Meitrack - TC68L/E Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Meitrack TC68L E tracker integration with Plaspy using shared connection settings and automatic detection
keywords:
  - Meitrack TC68L E protocol
  - Meitrack TC68L E GPS protocol
  - Meitrack TC68L E communication
  - Plaspy compatibility
  - OBD II GPS tracker
  - vehicle telemetry integration
  - fleet tracking protocol
  - GNSS and OBD telemetry
  - plug and play OBD tracker
  - remote management FOTA
---

# Meitrack - TC68L/E Protocol

This page summarizes the public protocol context for integrating the Meitrack TC68L/E OBD II GPS tracker with Plaspy. It explains how the device typically communicates with the Plaspy platform, what connection settings are used publicly, and what aspects of protocol behavior are relevant to successful reporting and data use. The aim is to help technical users and integrators understand the communication relationship without exposing firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, regional SKU, and manufacturer implementation, so device-specific details and advanced command behavior should be verified against Meitrack documentation and current firmware notes.

## Protocol Overview

The communication protocol for the TC68L/E governs how GNSS position fixes, OBD telemetry, and peripheral sensor data are packaged and sent from the device to a remote server. In the Plaspy context the protocol is the public-facing mechanism that allows the tracker to identify itself, report location and vehicle parameters, and enable platform features such as alerts and historical playback.

- Enables transmission of GNSS location and OBD sourced telemetry from the device to Plaspy for live and historical reporting.
- Carries identification information so Plaspy can associate incoming data with the correct tracker record.
- Supports periodic and event driven reporting to convey movement, diagnostic events, and sensor updates to the platform.
- Acts as the bridge for remote management features such as FOTA notifications and configuration changes when supported by firmware.
- Provides the data context Plaspy uses to populate dashboards, trigger alerts, and feed APIs for integrations.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and port and uses that connection to automatically determine the tracker protocol. In most cases, when a TC68L/E is configured to report to Plaspy it will be detected and processed without the user having to manually select a protocol inside the platform.

- Plaspy listens on a shared server address and port so devices reporting to that endpoint are routed into the automatic detection pipeline.
- Devices should be configured to report to d.plaspy.com or the Plaspy server IP 54.85.159.138 to reach the platform.
- Plaspy uses port 8888 for all supported devices and automatically detects the tracker protocol when data arrives on that port.
- Because detection is automatic, typical setup is limited to configuring the device APN and server address and port on the tracker side.
- If a device is not detected, verification steps include confirming network connectivity, APN settings, and that the device is pointing to the correct Plaspy endpoint and port.

## Transport and Connection Context

The TC68L/E can be configured to use standard transport options to deliver telemetry to Plaspy. From a connection perspective, most integration work involves ensuring the device is pointed to the correct Plaspy endpoint and that the chosen transport is supported by the device firmware and network environment.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and deployment preferences.
- Plaspy accepts connections to d.plaspy.com and the numeric IP 54.85.159.138 on port 8888.
- All devices in Plaspy use the same port, which simplifies server configuration and device setup.
- Choose UDP for lower overhead or TCP for reliable transport where the device firmware and network allow; confirm which transport your device SKU supports.
- Ensure mobile network APN settings are correct so the tracker can establish IP connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware version differences can change reporting behavior, field names, and available telemetry; verify compatibility for your firmware.
- Hardware revisions and regional SKUs may support different cellular bands and peripheral features influencing which data fields are available.
- Manufacturer side configuration strings and default behavior sometimes differ by production batch; confirm device defaults before mass deployment.
- Transport choice (UDP vs TCP) should match device capability and your network environment to avoid dropped or delayed messages.
- Plaspy automatically detects protocols but correct device configuration pointing to d.plaspy.com or 54.85.159.138 on port 8888 is required for proper detection.
- Validate important telemetry fields such as OBD parameters and GNSS accuracy against sample reports during initial testing.

## Why Protocol Understanding Matters

Understanding how the TC68L/E communicates with Plaspy improves setup speed, troubleshooting effectiveness, and long term reliability of your tracking deployment. Clear knowledge of connection settings, transport behavior, and where to check for firmware differences helps administrators and integrators avoid common integration pitfalls.

- Speeds initial device onboarding by ensuring server and port settings match Plaspy requirements.
- Helps diagnose connectivity issues by focusing checks on APN, endpoint, transport, and firmware.
- Enables informed choices about UDP versus TCP for your coverage and latency needs.
- Assists in confirming that OBD telemetry and GNSS data reach Plaspy in the expected formats for reports and alerts.
- Reduces rollout risk by encouraging firmware and SKU validation before large scale deployment.

## Why Use Plaspy with This Protocol

Using the Meitrack TC68L/E with Plaspy gives organizations a straightforward path to combine plug and play OBD II installation with a cloud platform that aggregates location and vehicle telemetry. The TC68L/E provides GNSS position data and rich OBD parameters that Plaspy ingests for live tracking, diagnostics, alerting, and historical analysis, supporting fleet operations, rentals, and anti-theft workflows.

To learn more about how Plaspy integrates with a range of GPS trackers and to review platform features that complement the TC68L/E, visit https://www.plaspy.com. For the most current device protocol specifics, firmware behavior, and manufacturer documentation, verify details on the Meitrack website at https://www.meitrack.com/ as implementations and firmware may change over time.
