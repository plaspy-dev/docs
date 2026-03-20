---
slug: /sinotrack/st_903/configuration
id: st_903-configuration
sidebar_label: Configuration
title: SinoTrack - ST-903 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring SinoTrack ST-903 to report to Plaspy with SMS commands and server settings
keywords:
  - SinoTrack ST-903 configuration
  - SinoTrack ST-903 setup
  - ST-903 Plaspy configuration
  - SinoTrack GPS tracker setup
  - ST-903 SMS commands
  - Plaspy server settings
  - GPS tracker configuration guide
  - SinoTrack APN setup
  - ST-903 GPRS configuration
  - small asset tracker setup
---

# SinoTrack - ST-903 Configuration

This page documents the public configuration context for using the SinoTrack ST-903 with Plaspy. It focuses on the practical steps and SMS commands publicly provided by SinoTrack to point the ST-903 at Plaspy so the device can send GPRS position packets to the platform. Use this guide to prepare the device, set APN and server parameters, and verify connectivity to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, or vendor tools, so treat the SMS command examples here as the public baseline and verify firmware-specific details with SinoTrack documentation when needed.

## Configuration Overview

The goal of ST-903 configuration for Plaspy is to direct the tracker’s GPRS reporting to Plaspy’s ingest endpoint, ensure the device has working mobile data credentials, and confirm that reports are visible in the Plaspy platform. The ST-903 supports SMS-based configuration, so administrators typically send a sequence of SMS commands to set timezone, APN, server address/port, reporting intervals, and operating mode.

- Set the device APN and credentials so GPRS can establish a data session.
- Configure the device server address and port to point to Plaspy (domain or IP).
- Choose a transport mode (UDP or TCP) if the device requires it and ensure the device uses the shared Plaspy port.
- Apply reporting intervals and modes appropriate to the use case to balance battery life and update frequency.
- Validate configuration with the device verification command and confirm visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and performs automatic protocol detection so you do not need to select a different port per device.

## Typical Requirements Before Setup

- A charged ST-903 with working battery or a reliable power connection for configuration operations.
- A compatible 2G GSM SIM with data enabled and correct APN credentials for the mobile operator.
- Ability to send SMS messages to the device for SMS-based configuration as documented by SinoTrack.
- Access to the ST-903 manual or official SMS command list from the manufacturer to follow exact command syntax.
- A Plaspy account or access to your Plaspy instance to confirm the device appears and reports after configuration.
- Knowledge of local network availability for 2G services where the device will operate.

## How This Tracker Connects to Plaspy

When configured, the ST-903 sends GPRS position and status packets to Plaspy’s shared server endpoint and port. Plaspy ingests those packets, automatically detects the tracker protocol, and makes the device visible in the platform for real-time tracking, alerts, and history playback.

- The device is configured to report to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- GPRS payloads carry location and status updates that Plaspy parses and associates with the device ID.
- Alarms and event reports (for example motion or geofence alarms) are sent to the same server endpoint and appear in Plaspy event streams.
- SMS remains available as a fallback configuration and control channel when data connectivity is unavailable.
- Plaspy’s automatic protocol detection removes the need to manually choose device-specific protocol handlers on the server side.

## Common Configuration Workflow

1. Obtain the official SinoTrack SMS command list or configuration manual for the ST-903 and confirm the device firmware supports the listed commands.
2. Ensure the SIM card is active with data and know the APN, username, and password for your mobile operator.
3. Send SMS commands to enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 and set port 8888.
4. If the device requires a transport selection, choose UDP or TCP based on your installation and the device options.
5. Apply APN credentials, reporting intervals, and set the device to GPRS mode as required by the tracker.
6. Save or apply the configuration and restart the device if required by the manufacturer.
7. Validate connectivity by using the verification command and checking that the device reports to Plaspy and appears in your Plaspy account.

## Example Configuration Commands

The public SinoTrack SMS commands used to configure the ST-903 for GPRS reporting are typically sent as plain SMS messages to the device. The commands below are taken from the manufacturer example sequence and preserve placeholders where appropriate.

- Optional initial step: restore factory settings (use only if required)
```text
RESET
```

- Set the time zone to UTC+0
```text
8960000E00
```

- Set the APN and credentials
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation: keep the placeholders as follows:
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username if required (omit or leave blank if not required)
- {{apnp}} = APN password if required (omit or leave blank if not required)

- Set the GPRS server to the Plaspy IP and port
```text
8040000 54.85.159.138 8888
```
Note: the manufacturer example uses an IP address. Plaspy is reachable at d.plaspy.com and the IP 54.85.159.138; use the form supported by your device firmware.

- Set reporting interval when device is ON (example interval in seconds)
```text
8050000 60
```

- Set reporting interval when device is OFF or in a different state (example interval in seconds)
```text
8090000 60
```

- Switch the tracker to GPRS reporting mode
```text
7100000
```

- Verify current configuration
```text
RCONF
```

Follow the command sequence in the order appropriate for your deployment. Use RESET only during initial setup or when you explicitly want to restore factory defaults.

## Configuration Notes

- The ST-903 supports SMS-based configuration as shown in the example commands; verify that your device accepts SMS configuration under its current firmware version.
- Use the APN placeholders exactly as required by your operator; omit username or password fields if your APN does not require them.
- Choose UDP or TCP transport according to your installation needs; Plaspy listens on port 8888 and supports either transport, and Plaspy will auto-detect the tracker protocol on arrival.
- Firmware revisions and region variants may change command syntax or available features; always compare these public commands with the latest SinoTrack documentation before applying them.
- If you are unsure whether the device supports domain names in server settings, use the IP address 54.85.159.138 as shown in the manufacturer example.

## Why Use Plaspy with This Configuration

Pointing the SinoTrack ST-903 at Plaspy gives small-asset and personal tracking deployments a simple path to real-time visibility, event alerts, and route history without changing device hardware. The ST-903’s SMS-configurable server settings let installers direct traffic to Plaspy quickly, while varying reporting profiles allow teams to balance battery life against tracking frequency.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the most current device-specific commands, firmware behavior, and manufacturer procedures, verify details on the official SinoTrack site https://www.sinotrackgps.com/. Manufacturer specifications and setup methods can change over time, so always confirm the latest instructions with the manufacturer before large deployments.
