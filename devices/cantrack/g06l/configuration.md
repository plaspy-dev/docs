---
slug: /cantrack/g06l/configuration
id: g06l-configuration
sidebar_label: Configuration
title: CanTrack - G06L Configuration
sidebar_class_name: menu_item_tracker
description: Configure CanTrack G06L for Plaspy with server settings workflow and practical setup guidance
keywords:
  - CanTrack G06L configuration
  - CanTrack G06L setup
  - G06L Plaspy integration
  - G06L GPS tracker configuration
  - vehicle tracking setup
  - Plaspy server configuration
  - G06L firmware setup
  - GPS tracker integration guide
  - fleet tracking configuration
  - anti theft tracker setup
---

# CanTrack - G06L Configuration

This page covers the public configuration context for using the CanTrack G06L with the Plaspy platform. It explains the shared server settings Plaspy requires, the typical preparation steps needed before integration, and the practical workflow for configuring the G06L so it reports location and telemetry to Plaspy. Use this guide alongside the manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The guidance below focuses on the public Plaspy endpoint and the practical steps you will take with the G06L using PC USB, GPRS, or SMS configuration methods.

## Configuration Overview

The goal of configuration is to prepare the G06L so it reliably communicates position, alarm, and telemetry data to Plaspy and becomes visible in the Plaspy dashboard. Configuration typically sets the server endpoint and transport, ensures the device has network access, and validates that incoming messages are accepted by Plaspy.

- Point the device telemetry to the Plaspy server endpoint so data flows into your account
- Choose transport and port settings supported by both the device and Plaspy
- Validate network access and SIM credentials when using GPRS or LTE
- Confirm alarms and ignition telemetry are enabled so Plaspy can show events
- Verify data buffering and upload behavior so offline points are recovered once connected

## Plaspy Server Settings

Use the following public server settings when configuring the G06L for use with Plaspy. These values are required for the device to report to the Plaspy platform.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port so use port 8888 for this and other supported trackers

## Typical Requirements Before Setup

- A powered and accessible G06L unit with the ability to configure via PC USB, GPRS, or SMS
- An active SIM card with data enabled for GPRS or LTE reporting when using cellular transport
- Access to the device IMEI or identifier to match the unit in Plaspy after it first reports
- Manufacturer configuration software, PC cable, or SMS command list depending on your chosen method
- A Plaspy account and the ability to verify incoming device activity in the platform
- Strong cellular coverage where the device will operate for reliable real time reporting

## How This Tracker Connects to Plaspy

The G06L transmits GNSS position and telemetry over cellular data to the Plaspy server endpoint and port specified in configuration. Plaspy ingests the messages, automatically recognizes the device protocol, and presents live location, alarms, and historical points in the platform.

- Device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- G06L sends position fixes and event telemetry over UDP or TCP depending on configuration
- Plaspy automatically detects the tracker protocol and parses incoming messages
- Alarms such as SOS, movement, speeding, ignition change, and power cut are reported to Plaspy
- Offline stored points are uploaded once a GPRS or LTE connection is reestablished and Plaspy receives the queued data

## Common Configuration Workflow

1. Access the official CanTrack configuration method for the G06L such as PC USB software, GPRS configuration via SMS, or the vendor provided configuration tool.
2. Enter the Plaspy server as d.plaspy.com or as the numeric IP 54.85.159.138 if your tool requires an IP address.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device requires an explicit selection.
5. Apply or save the configuration on the device using the manufacturer tool or SMS command.
6. Restart the device if required by the configuration method so new settings take effect.
7. Validate in Plaspy that the device reports successfully and that location, ignition, and alarm events appear in the platform.

## Example Configuration Commands

The exact commands and syntax for the G06L depend on firmware and the manufacturer configuration channel you use. This guide does not include proprietary command sets, but common methods to set the server use the pattern of host port and transport parameters. Examples you might see in manufacturer documentation or SMS configuration guides will reference the Plaspy server and port as shown below.

If using an SMS command approach the placeholders may look similar to these examples found in public device guides. Replace placeholders with your actual values or SIM APN credentials when required.

- Example placeholder style for server and port using SMS based patterns
```
set server d.plaspy.com 8888
set server 54.85.159.138 8888
set tcp udp_mode on
```

- If configuration uses APN placeholders you may encounter variables such as [apn] [apnu] or [apnp] which represent the SIM carrier APN name user and password respectively. Example:
```
set apn [apn] [apnu] [apnp]
```

Note that the exact SMS strings, PC software steps, and command names will vary by firmware. Consult the CanTrack G06L configuration manual for the precise commands for your firmware version.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options; verify commands against the unit firmware before applying at scale.
- Choosing UDP versus TCP affects how the device sends telemetry and how the network handles retransmission; Plaspy accepts both and will detect the protocol automatically.
- If you configure by SMS, ensure the SIM has SMS credit and data settings are correct for GPRS or LTE reporting.
- Use the device IMEI and first reported message to match the tracker with the correct asset in Plaspy.
- For large deployments, test one unit end to end with Plaspy using d.plaspy.com or 54.85.159.138 and port 8888 before mass configuration.

## Why Use Plaspy with This Configuration

Using the CanTrack G06L with Plaspy provides compact reliable vehicle tracking with alarms and telemetry feeding directly into a fleet management environment. The G06L's support for ignition detection, power cut reporting, offline storage, and remote control features pairs well with Plaspy to deliver real time visibility, event alerts, and historical playback for operational and security workflows.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific setup details from the manufacturer at https://www.cantrackgps.com/. Manufacturer setup methods, firmware behavior, and device specific commands can change over time so always verify the current configuration instructions on the official CanTrack site before deploying.
