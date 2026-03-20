---
slug: /xirgo/xt_3200/protocol
id: xt_3200-protocol
sidebar_label: Protocol
title: Xirgo - XT-3200 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Xirgo XT 3200 OBDII tracker with Plaspy servers and shared connection settings
keywords:
  - Xirgo XT 3200 protocol
  - Xirgo XT 3200 GPS protocol
  - Xirgo XT 3200 Plaspy compatibility
  - XT 3200 OBDII tracker
  - vehicle tracking protocol
  - fleet tracking Xirgo
  - GPS tracker communication
  - XT 3200 driver behavior
  - Plaspy device compatibility
  - Xirgo tracker protocol
---

# Xirgo - XT-3200 Protocol

This page provides public protocol context for using the Xirgo XT-3200 GPS tracker with Plaspy. It focuses on the communication role the tracker plays when reporting vehicle and driving data to the Plaspy platform, and it explains the key connection settings you will encounter when pointing the device at Plaspy servers.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behaviour and available data items can vary by device firmware, hardware revision, and manufacturer implementation, so this page describes the public communication context rather than firmware internals.

## Protocol Overview

The protocol for the XT-3200 governs how the device reports location, vehicle state, and event data to a remote server so that Plaspy can ingest and present that data. In broad terms the protocol allows the device to identify itself, share telemetry updates, and support remote commands where applicable.

- Carries periodic and event driven telemetry such as GPS position and OBDII derived vehicle states
- Provides device identity and session information so Plaspy can associate reports with the correct asset
- Delivers event markers useful for driver behavior analysis including ignition, harsh braking, and rapid acceleration
- Enables server side acknowledgement or responses when the device and transport support two way communication
- Translates vehicle level signals from the OBDII interface into telemetry suitable for fleet monitoring

## How Plaspy Detects the Protocol

Plaspy receives incoming reports on a single shared endpoint and port and automatically detects the tracker protocol used by each device. In most cases a properly configured XT-3200 that points at the Plaspy endpoint will be recognized without manual protocol selection inside Plaspy.

- Plaspy accepts device reports on the shared endpoint domain d.plaspy.com and also on the public server IP 54.85.159.138
- All devices in Plaspy use the same port which simplifies device configuration
- Plaspy will automatically detect the tracker protocol when the device sends its initial messages to the Plaspy endpoint
- Users generally do not need to pick a protocol in the Plaspy UI if the tracker is configured to report to the Plaspy server
- If a device does not appear to report correctly, checking the device's server, transport, and firmware settings is the first step

## Transport and Connection Context

The XT-3200 can be configured to use UDP or TCP depending on device capabilities and the installer preference. For Plaspy integration, the connection context is intentionally simple: a single shared port and a reachable Plaspy endpoint.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138
- The device may use UDP or TCP on port 8888 depending on the tracker configuration
- Plaspy uses port 8888 for all supported devices which keeps deployment and firewall rules consistent
- Network reliability and the chosen transport affect delivery characteristics but do not change the public protocol role
- Confirm that your network allows outbound traffic to the Plaspy endpoint and port for proper reporting

## Protocol Compatibility Notes

- Compatibility can vary across firmware versions and hardware revisions even for the same XT-3200 model
- Transport selection matters: some firmwares prefer UDP while others support TCP reporting on the same port
- Manufacturer side configuration or regional firmware variants may alter which telemetry fields are sent
- Plug and play OBDII capabilities such as ignition state and accelerometer events are model features but how they are reported can differ
- Validate device behaviour and available telemetry against the device firmware release notes when possible
- When troubleshooting, confirm device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 and that the transport matches the device configuration

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps ensure successful onboarding, reliable telemetry, and faster troubleshooting when using the XT-3200 with Plaspy. Knowing how the device connects and what it is expected to send reduces setup time and supports consistent fleet operations.

- Speeds initial setup by clarifying required server and transport settings
- Helps diagnose missing or incomplete telemetry by aligning expectations with what the device reports
- Guides firmware upgrade decisions that may add or change reported fields
- Informs network and firewall configuration so devices can reach the Plaspy endpoint
- Supports informed communication with the device vendor when behavior differs from expectations

## Why Use Plaspy with This Protocol

Using the XT-3200 with Plaspy gives organizations a practical way to collect OBDII and motion based telemetry for vehicle visibility, driver behavior monitoring, and routine fleet oversight. The plug and play form factor of the XT-3200 combined with Plaspy's automatic protocol detection and consistent port usage simplifies deployment across mixed fleets.

If you want to learn more about Plaspy and how the platform handles device reporting and fleet data, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware documentation check the manufacturer site at https://xirgo.com/ as protocol support and firmware behavior can change over time.
