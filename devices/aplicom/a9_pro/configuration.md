---
slug: /aplicom/a9_pro/configuration
id: a9_pro-configuration
sidebar_label: Configuration
title: Aplicom - A9 PRO Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance for configuring Aplicom A9 PRO to communicate with Plaspy using shared server settings and automatic protocol detection
keywords:
  - Aplicom A9 PRO configuration
  - Aplicom A9 PRO setup
  - Aplicom A9 PRO server configuration
  - Aplicom A9 PRO Plaspy
  - Plaspy tracker configuration
  - A9 PRO GPS tracker setup
  - Aplicom GPS tracker configuration
  - vehicle tracking A9 PRO
  - fleet tracking Aplicom
  - telematics A9 PRO setup
---

# Aplicom - A9 PRO Configuration

This page provides public configuration context for using the Aplicom A9 PRO with Plaspy. It describes the shared server settings Plaspy expects and explains the practical steps integrators and installers commonly follow to prepare the A9 PRO for real time tracking and telemetry ingestion into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the Aplicom configuration tools you use, so this page focuses on the public Plaspy settings and a practical workflow rather than manufacturer internal details.

## Configuration Overview

The goal of the configuration process is to point the Aplicom A9 PRO at Plaspy's ingestion endpoint, ensure reliable cellular connectivity, and validate that location and telemetry are visible in the Plaspy platform. This preparation typically includes device-level server settings, transport selection, and a connectivity check.

- Configure the device server address to the Plaspy endpoint so the tracker forwards telemetry and GNSS data.
- Select the transport protocol required by the device firmware or tool and set the platform port.
- Confirm cellular connectivity and APN settings so the internal 4G LTE module can reach Plaspy.
- Validate CAN bus and I/O mappings if you are forwarding vehicle telemetry to Plaspy.
- Test and verify device reporting in Plaspy after applying configuration to confirm visibility and event reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com is the recommended host name to enter in the device configuration.
- Server IP 54.85.159.138 may be used where numeric addressing is preferred by the configuration tool.
- Port 8888 is the Plaspy ingestion port and is used by all devices in Plaspy.
- Transport support for UDP or TCP is available; choose the transport option required by your device firmware or tool.
- Plaspy automatically detects the tracker protocol when devices connect to the shared endpoint and port.

## Typical Requirements Before Setup

- Physical access to the A9 PRO unit or access to the Aplicom A Series configuration tool or ADS management interface.
- An active data capable SIM card and sufficient cellular coverage for 4G LTE communication.
- Power source for the device and any connected I/O or CAN bus wiring ready for testing.
- Plaspy account or provisioning instructions from your Plaspy administrator to confirm device visibility after onboarding.
- Access to Aplicom documentation, the A Series configuration tool, or ADS REST API credentials as required for your integration approach.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the A9 PRO sends location and telemetry to the shared Plaspy server endpoint on the common ingestion port. Plaspy receives the device connection, detects the protocol automatically, and begins ingesting GNSS, CAN, and I/O event data for visibility and analytics.

- The tracker reports GNSS location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- CAN bus telemetry and vehicle parameters can be forwarded to Plaspy when configured via the device tool or ADS.
- I/O events such as ignition, door, pulse counters, and accelerometer events are sent as part of the telemetry stream.
- The device may use either UDP or TCP as the transport layer to reach the Plaspy endpoint, depending on device configuration.
- Plaspy automatically detects device protocol and associates incoming data with the corresponding device in the platform.

## Common Configuration Workflow

1. Access the official Aplicom configuration method such as the A Series configuration tool, ADS management interface, or the manufacturer recommended setup tool.
2. In the device server settings enter the Plaspy server as d.plaspy.com or alternatively use 54.85.159.138 if numeric addressing is required.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose the transport type UDP or TCP if the device configuration requires a transport selection.
5. Configure any required APN or SIM and cellular settings so the A9 PRO has active data connectivity.
6. Apply or save the configuration and perform any recommended device restart if required by the tool or firmware.
7. Validate that the device reports to Plaspy by checking device activity in the platform and confirming location or telemetry updates.

## Example Configuration Commands

The Aplicom A9 PRO supports multiple configuration paths including the A Series configuration tool, ADS REST API, or OTA updates. Exact command syntax or REST calls vary by firmware and by the manufacturer toolchain. Because manufacturer commands and APIs change across firmware versions, consult Aplicom documentation or the A Series tool for the precise commands to set server host, port, transport and APN details.

If you are using Aplicom ADS or a command line interface provided by Aplicom, follow the manufacturer examples in the official configuration tool rather than relying on generic commands. For REST API integrations, use the ADS REST API to forward device data to Plaspy via the device management flow described by Aplicom.

## Configuration Notes

- Firmware and hardware revisions may change the configuration UI and available options; always check the Aplicom release notes for differences.
- TCP versus UDP choice can affect delivery guarantees and latency; select the transport compatible with your integration and the device firmware.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so the primary required settings are the Plaspy host and the port.
- If you are using ADS REST API or OTA management, many settings can be applied remotely through the Aplicom management services rather than by local SMS or USB configuration.
- After configuration, confirm connectivity by observing device messages in Plaspy and validating GNSS and telemetry values.

## Why Use Plaspy with This Configuration

Using the Aplicom A9 PRO with Plaspy provides a straightforward path to bring GNSS location, CAN bus telemetry, and I/O event data into a single fleet management platform. The A9 PRO’s connectivity and developer toolset combined with Plaspy’s shared server endpoint and automatic protocol detection simplify integration, reduce configuration complexity, and accelerate time to visibility for fleet operations.

Learn more about Plaspy and how it ingests telematics data at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details always verify current information on the Aplicom website https://www.aplicom.com/ as manufacturer specifications and setup procedures can change over time.
