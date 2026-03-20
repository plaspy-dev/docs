---
slug: /sinotrack/st_902a/configuration
id: st_902a-configuration
sidebar_label: Configuration
title: SinoTrack - ST-902A Configuration
sidebar_class_name: menu_item_tracker
description: Configure the SinoTrack ST-902A for use with Plaspy using SMS commands and shared server settings for fast OBD GPS deployment
keywords:
  - SinoTrack ST-902A configuration
  - ST-902A setup guide
  - SinoTrack GPS tracker setup
  - ST-902A server configuration
  - ST-902A SMS configuration
  - Plaspy tracker configuration
  - Plaspy compatible tracker setup
  - OBD II GPS tracker configuration
  - ST-902A GPRS configuration
  - vehicle tracking platform configuration
---

# SinoTrack - ST-902A Configuration

This page covers the public configuration context for using the SinoTrack ST-902A tracker with Plaspy. It consolidates the practical, publicly available steps and commands you can use to point an ST-902A at the Plaspy server so the device reports position, movement, and alarm data for real time tracking, alerts, and history playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST-902A supports GPRS reporting and SMS configuration, so you can use SMS commands to set APN, server address, transport, and reporting intervals to connect the device to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the ST-902A to communicate reliably with Plaspy, validate connectivity from the vehicle, and enable device visibility in the platform. For ST-902A devices this typically means using SMS to set the APN, server endpoint, reporting intervals, and GPRS mode so packets are delivered to Plaspy.

- Point the tracker to the Plaspy server endpoint so telemetry arrives in your Plaspy account.
- Configure the mobile operator APN settings so the tracker can establish GPRS data sessions.
- Set reporting intervals and operational mode so the device sends regular updates.
- Validate configuration with a settings query and confirm the device appears in Plaspy.
- Optionally restore factory defaults before large deployments to ensure a known baseline.

## Plaspy Server Settings

When configuring the ST-902A for Plaspy, use the following public server settings. Plaspy uses a single shared port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered ST-902A connected to the vehicle OBD II port or powered for configuration.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- SMS capability from a phone number allowed by the device to accept configuration commands.
- Access to the manufacturer SMS command set or official configuration tool from SinoTrack.
- A place to confirm device appearance in Plaspy after configuration such as an account with device registration prepared.

## How This Tracker Connects to Plaspy

The ST-902A is configured to report to the shared Plaspy server endpoint and port using GPRS. Once APN and server parameters are set, the tracker opens a data connection and posts telemetry packets to the Plaspy endpoint where the platform ingests position and event data.

- The device sends GPS location and alarm telemetry to the Plaspy server d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP and will automatically detect the ST-902A protocol.
- Reporting intervals control how often the ST-902A sends updates to the Plaspy endpoint.
- Events such as shock, overspeed, or low battery are sent as messages to the same Plaspy server and appear in the platform.
- SMS is available as a configuration and fallback channel separate from GPRS reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SinoTrack SMS commands or vendor tools to prepare the device for server changes.
2. Enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138 depending on command support.
3. Set the server port to 8888, remembering Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires transport selection and save that setting.
5. Configure the APN for the installed SIM so the device can establish a GPRS data session.
6. Apply or save the configuration and switch the device to GPRS mode if required.
7. Restart the device if the tracker requires it to apply settings.
8. Validate connectivity by sending a settings query and confirming the device reports to Plaspy in your account.

## Example Configuration Commands

The ST-902A supports SMS based configuration. Below are the public SMS commands documented for this model in the manufacturer guidance. Preserve placeholders where shown. Send each command as a text message from an authorized phone number to the tracker.

- Optional initial step to restore factory defaults when preparing a device for redeployment:
```text
RESET
```

- Set the time zone to UTC 0 (example command from manufacturer):
```text
8960000E00
```

- Configure the APN for your operator. Replace placeholders with the operator values:
```text
8030000 [apn] [apnu] [apnp]
```
Explanation of placeholders:
- [apn] is the APN name provided by the mobile operator.
- [apnu] is the APN username if required, otherwise leave blank.
- [apnp] is the APN password if required, otherwise leave blank.

- Set up the GPRS server to point the tracker to Plaspy by IP and port:
```text
8040000 54.85.159.138 8888
```
This command sets the device to report to the Plaspy server IP and port. You may instead use the domain d.plaspy.com if the device supports domain entries; Plaspy accepts connections by domain or IP.

- Set reporting interval when device is on (example 60 seconds):
```text
8050000 60
```

- Set reporting interval when device is off or ignition off state (example 60 seconds):
```text
8090000 60
```

- Switch the device to GPRS mode so it uses data reporting:
```text
7100000
```

- Verify current device settings with the RCONF query command:
```text
RCONF
```
RCONF returns the current settings including the ID used to register the device with tracking platforms.

Follow the command order as appropriate. Use RESET as an optional initial step only when preparing devices for a fresh configuration or troubleshooting.

## Configuration Notes

- SMS based configuration is supported and commonly used for ST-902A devices; ensure the sending number is authorized by the tracker.
- Some devices accept domain names such as d.plaspy.com; others require the server IP. The example commands use the public Plaspy IP 54.85.159.138 and port 8888.
- Plaspy accepts both UDP and TCP on port 8888 and performs automatic protocol detection, but choose the transport your fleet tools require and confirm device firmware supports it.
- Reporting intervals and behavior can vary by firmware version; confirm exact command syntax for your device firmware before mass deployment.
- Keep manufacturer documentation handy for any device specific limitations, SMS command formats, and firmware notes.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-902A to report to Plaspy provides fleet managers and operators with a rapid, low friction way to gain visibility into vehicles using an OBD plug and SMS driven configuration. The ST-902A’s SMS commands and GPRS reporting make it straightforward to set APN and server settings on site so devices can start sending position, alarm, and movement data to Plaspy for monitoring and historical analysis.

Learn more about Plaspy and how it handles device ingestion, alerts, and history at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer details always verify setup and command syntax with the official SinoTrack documentation at https://www.sinotrackgps.com/ before deploying at scale.
