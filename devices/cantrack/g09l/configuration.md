---
slug: /cantrack/g09l/configuration
id: g09l-configuration
sidebar_label: Configuration
title: CanTrack - G09L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for CanTrack G09L to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - CanTrack G09L configuration
  - CanTrack G09L setup
  - CanTrack G09L server configuration
  - G09L Plaspy
  - G09L GPS tracker
  - CanTrack tracker configuration
  - vehicle tracking G09L
  - fleet tracking CanTrack
  - G09L installation guide
  - Plaspy tracker setup
---

# CanTrack - G09L Configuration

This page describes the public configuration context for using the CanTrack G09L with Plaspy. It explains the shared server settings Plaspy expects and offers practical steps and considerations to prepare the device so that location, G-sensor events and device status are visible in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device communicates with the Plaspy endpoint. Exact manufacturer-side setup steps can vary depending on G09L firmware revision, hardware revision, installation type and the vendor configuration tools (for example portal or SMS commands), so use this guide together with the device manual and manufacturer resources.

## Configuration Overview

The configuration process prepares the G09L to send its location and telemetry to Plaspy and validates that the device is visible in the platform. These steps focus on setting the Plaspy server endpoint, choosing the transport that the device supports, confirming connectivity and ensuring the device reports events correctly.

- Set the device server address to Plaspy so it forwards GPS and sensor telemetry to the platform.
- Configure the G09L to use the Plaspy port so incoming data reaches the Plaspy collector.
- Select UDP or TCP on the device if the device firmware requires a transport choice.
- Save and apply settings through the manufacturer portal or by SMS commands, then restart if needed.
- Validate the device shows live fixes and event reports in Plaspy to confirm successful setup.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G09L:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol when the device begins sending data.

## Typical Requirements Before Setup

- Ensure the G09L has vehicle power or a charged internal battery and is powered on for configuration.
- Have physical or remote access to the device for installation, SMS setup or portal configuration.
- Install a working cellular SIM with data and the correct APN for your mobile provider if required by the device.
- Obtain the manufacturer configuration method such as SMS commands, the CanTrack portal, or the vendor configuration tool.
- Know the device IMEI and any configuration password required to send commands or access the device portal.
- Confirm you have a Plaspy account or instructions from your Plaspy administrator to verify device visibility after configuration.

## How This Tracker Connects to Plaspy

When configured with Plaspy server settings the G09L forwards location and event data to the shared Plaspy endpoint and port so the platform can present live tracking, alerts and history. The device will transmit periodic position updates and event messages that Plaspy ingests and displays in dashboards and reports.

- Sends GPS and BeiDou position fixes to the Plaspy server endpoint
- Reports G-sensor events such as harsh acceleration, harsh braking and crash alarms to Plaspy
- Transmits device status updates so the asset appears online in Plaspy
- Sends geo-fence alerts and other configured alarms to the Plaspy account
- Uses the shared Plaspy server domain or IP and port so the platform receives all device messages

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as the manufacturer portal, the SMS command interface, or the vendor configuration tool.
2. Enter the Plaspy server address by using either the server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration on the device or in the portal.
6. Restart the G09L if the firmware requires a reboot to apply new server settings.
7. Validate that the device reports to Plaspy and that location fixes and events appear in your Plaspy account.

## Example Configuration Commands

The G09L supports SMS and portal based configuration methods as documented by the manufacturer. Exact commands and their syntax vary by firmware and vendor tool, so refer to the official CanTrack command reference or portal help for precise command formats and examples. If you use SMS commands, preserve placeholders such as APN variables and replace them with your operator values as instructed by CanTrack documentation.

## Configuration Notes

- Firmware versions and regional hardware revisions can change command syntax and available options; always check the device manual for your unit.
- Choosing UDP or TCP may affect delivery characteristics; Plaspy accepts both transports on the shared port and will auto-detect the protocol.
- Use the device IMEI and any configuration password exactly as provided by the manufacturer when issuing commands.
- SMS configuration and portal configuration are commonly supported for the G09L; follow the manufacturer guidance for the method you plan to use.
- Confirm APN and cellular settings with your mobile operator before changing server settings to avoid connectivity interruptions.

## Why Use Plaspy with This Configuration

Using the CanTrack G09L with Plaspy gives fleets a discreet DOT certified tail-light tracker that reports location, crash and driving behavior to a centralized platform. Configuring the device to point at Plaspy allows operators to consolidate live location, alarms and history playback into a single dashboard for operational monitoring, theft recovery and safety analysis.

To learn more about how Plaspy can centralize tracking for the G09L and other devices visit https://www.plaspy.com. Manufacturer firmware behavior and device specific setup methods can change over time, so verify the latest configuration instructions on the CanTrack website at https://www.cantrackgps.com/ before completing a large deployment.
