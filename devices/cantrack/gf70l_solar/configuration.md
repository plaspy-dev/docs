---
slug: /cantrack/gf70l_solar/configuration
id: gf70l_solar-configuration
sidebar_label: Configuration
title: CanTrack - GF70L-Solar Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack GF70L-Solar with Plaspy including server settings and practical setup workflow
keywords:
  - CanTrack GF70L-Solar configuration
  - GF70L-Solar Plaspy setup
  - CanTrack asset tracker configuration
  - GF70L-Solar server settings
  - GF70L-Solar GPS setup
  - Plaspy device configuration
  - GPS tracker Plaspy integration
  - GF70L-Solar tracking setup
  - CanTrack GPS platform configuration
  - asset tracker Plaspy compatibility
---

# CanTrack - GF70L-Solar Configuration

This page documents the public configuration context for using the CanTrack GF70L-Solar tracker with the Plaspy platform. It focuses on the server endpoint and practical setup workflow that enable the GF70L-Solar to upload positions and alarms to Plaspy for monitoring and fleet management. The content is intended to help technical installers and IT teams prepare the device and verify connectivity with Plaspy using public configuration information.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Exact manufacturer-side setup steps for the GF70L-Solar can vary by firmware, hardware revision, installation type, and vendor tools, so this page concentrates on the Plaspy side values and common practical actions needed to apply those values using the official CanTrack configuration methods.

## Configuration Overview

Configuring a GF70L-Solar for Plaspy means pointing the device to Plaspy server endpoints, confirming transport settings, and validating that location and alarm messages are visible in the platform. The process prepares the tracker for reliable position uploads and ensures Plaspy receives the telemetry required for live monitoring, alerts, and historical reporting.

- Provide the tracker with a working power source and active cellular connectivity so it can send data to Plaspy.
- Enter the Plaspy server address and port into the device using the manufacturer configuration method.
- Choose the device transport option if required and save the configuration on the tracker.
- Verify the device reaches Plaspy and appears in the platform with correct location updates and alarm events.
- Adjust reporting modes on the device to balance battery life with update frequency for asset tracking.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GF70L-Solar. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol after the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A CanTrack GF70L-Solar device with charged battery and solar panel exposure where applicable.
- An active SIM card with a data plan provisioned for the device and APN details if required by the carrier.
- Access to the official CanTrack configuration method for the GF70L-Solar such as SMS commands or the vendor configuration tool.
- A Plaspy account and the ability to register or identify the device in the Plaspy platform once it reports.
- Basic test conditions including a clear view of the sky for GNSS acquisition and a test environment to validate connectivity.

## How This Tracker Connects to Plaspy

When configured to point at Plaspy, the GF70L-Solar sends GPS positions and alarm events to the shared Plaspy server endpoint and port. Plaspy receives the data, automatically recognizes the device protocol, and presents position and event streams in the platform for monitoring and alerting.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 using port 8888.
- The device may use UDP or TCP transport depending on the manufacturer settings and network conditions.
- Position updates, movement events, and configured alarms are uploaded to Plaspy for real time visibility.
- Plaspy automatically detects the tracker protocol and maps incoming data to the correct device type and event handlers.
- Once reporting, the device becomes visible in Plaspy dashboards for operational monitoring and incident workflows.

## Common Configuration Workflow

Follow these practical public steps when setting up a GF70L-Solar for Plaspy integration. Exact menu names and command formats depend on CanTrack firmware and the chosen configuration channel.

1. Access the official CanTrack configuration method or software for the GF70L-Solar such as SMS command interface or the vendor configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device IP or center address field.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the device requires the transport to be specified.
5. Enter APN details or other carrier settings as required by the installed SIM and save those settings.
6. Apply or save the configuration on the device and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by checking the device list and live updates in the Plaspy platform.

## Example Configuration Commands

The GF70L-Solar is typically configured using CanTrack SMS commands or the manufacturer configuration tool. Exact command strings and syntax vary by firmware version and regional variant. Because manufacturer commands are not included in this public summary, consult the official CanTrack command set or your vendor documentation for the precise SMS formats and examples.

When using SMS or a configuration tool, the key public values to set are the server domain or IP d.plaspy.com or 54.85.159.138 and the port 8888, selecting UDP or TCP as required. After applying these values, confirm the device can reach the Plaspy endpoint and that Plaspy detects the device protocol automatically.

## Configuration Notes

- Firmware and regional hardware variants can change command syntax and available menu options. Verify the correct commands for your device revision in the official CanTrack guide.
- Choosing UDP or TCP can affect reliability and network behavior. Select the transport supported by your device firmware and test connectivity to Plaspy.
- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection, so the critical configuration is the correct server address and transport selection.
- If configuring by SMS, allow time for command confirmation replies and ensure the device echoes success messages per CanTrack behavior.
- Test a device in a controlled environment before wide deployment to confirm reporting intervals and alarm behavior meet operational needs.

## Why Use Plaspy with This Configuration

Using the GF70L-Solar with Plaspy provides a practical solution for long term asset visibility, combining solar extended battery life and movement based reporting with centralized monitoring. Pointing the tracker at the Plaspy server endpoint and port enables automatic ingestion of positions and alarms so operations teams can receive alerts, view live locations, and analyze historical movements for recovery and asset management.

To learn more about Plaspy and how it can ingest GF70L-Solar data for fleet management and asset recovery workflows visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and configuration details verify information on the manufacturer website https://www.cantrackgps.com/ as device setup methods and firmware behavior may change over time.
