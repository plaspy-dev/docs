---
slug: /queclink/gl530mg/configuration
id: gl530mg-configuration
sidebar_label: Configuration
title: QuecLink - GL530MG Configuration
sidebar_class_name: menu_item_tracker
description: Configure QuecLink GL530MG for Plaspy using public server settings and example SMS commands
keywords:
  - QuecLink GL530MG configuration
  - QuecLink GL530MG setup
  - GL530MG server configuration
  - GL530MG Plaspy setup
  - Plaspy GPS tracker configuration
  - asset tracker configuration
  - GPS platform setup
  - vehicle tracking setup
  - QuecLink tracker Plaspy
  - GL530MG SMS configuration
---

# QuecLink - GL530MG Configuration

This page documents the public configuration context for using the QuecLink GL530MG with Plaspy. It focuses on the practical server settings and example commands you can use to point a GL530MG to the Plaspy endpoint and validate reporting. Where applicable, public SMS commands from the manufacturer are included as examples for common setup steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type and vendor tools, so use the guidance below together with the device documentation and any vendor management tools you have available.

## Configuration Overview

The configuration process prepares the GL530MG to send location and telemetry to Plaspy reliably. Typical setup focuses on network connectivity, server targeting, report frequency and ensuring the device uses the correct transport so Plaspy can ingest its messages.

- Configure the device network settings and APN so the tracker has active data connectivity.
- Point the device at the Plaspy server endpoint so position and event messages are delivered.
- Choose UDP or TCP transport on port 8888 to match the device and network behavior.
- Set reporting intervals and event triggers for the desired visibility and battery life balance.
- Validate the device is appearing in Plaspy and that telemetry, motion, and tamper events are received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All Plaspy devices use the same port and Plaspy will detect the protocol the tracker is using.

## Typical Requirements Before Setup

- A QuecLink GL530MG unit with sufficient battery or external power for configuration.
- A working SIM card provisioned for data and SMS as required by your deployment and GL530MG firmware.
- APN credentials for the mobile operator if required by the SIM or regional carrier.
- Access to the official QuecLink configuration method you prefer, such as SMS commands or vendor software.
- The device password if the tracker requires one for configuration; the sample commands below use the public default password queclink.
- Network coverage that supports the tracker variant in your market.

## How This Tracker Connects to Plaspy

When configured, the GL530MG sends periodic and event driven reports to the shared Plaspy server endpoint and port so Plaspy can display location, history and alerts. The device may use TCP or UDP transport and Plaspy will interpret the incoming protocol automatically.

- The tracker is configured to deliver GNSS and telemetry messages to d.plaspy.com on port 8888 or to the server IP 54.85.159.138 on port 8888.
- Plaspy receives location fixes, motion and tamper events, battery state and other configured sensor reports for mapping and alerting.
- Scheduled reporting and wake up messages are used to balance visibility and battery life.
- Event reports such as SOS, tamper or motion can be forwarded immediately to Plaspy for real time alerts.
- Plaspy uses its automatic protocol detection to parse the device messages regardless of TCP or UDP selection.

## Common Configuration Workflow

1. Access the official QuecLink configuration method you will use, such as the SMS command interface or QuecLink configuration tools.
2. If you use SMS based setup, confirm the device password and optionally perform a factory restore only if required for a clean baseline.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888.
5. Choose UDP or TCP transport on the device if transport selection is required.
6. Configure APN settings for the installed SIM using your operator APN, username and password placeholders as needed.
7. Apply or save the configuration and restart the device if the firmware requires a reboot to apply network or server changes.
8. Validate the device reports to Plaspy and confirm position and event messages appear in the platform.

## Example Configuration Commands

The following public SMS commands are an example sequence for configuring a GL530MG. These commands are provided in manufacturer public materials and use the device password queclink as shown. Preserve the placeholders when you adapt commands for your deployment.

1. Optional initial factory restore to return the tracker to factory defaults. Use only when required.
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0 as an example.
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN. Replace the placeholders with your operator values:
- [apn] is the APN name for the SIM
- [apnu] is the APN username if required
- [apnp] is the APN password if required
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configure the GPRS server entry to point to Plaspy. This example includes both the domain and the IP and sets port 8888. The command shows domain d.plaspy.com and server IP 54.85.159.138 with port 8888.
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the reporting interval to 60 seconds as an example.
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2 as an example event configuration.
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on the commands above:
- The command order is important for predictable behavior. Apply network and server configuration before enabling scheduled reports.
- Keep the device password correct in each command; the examples use the public default password queclink.
- Replace placeholder values such as [apn], [apnu], and [apnp] with your operator credentials.

## Configuration Notes

- SMS based configuration is publicly documented for this device and is useful for remote field provisioning where physical access is limited.
- Preserve placeholders for APN credentials and replace them with your carrier values before sending commands.
- Choose UDP or TCP according to your carrier network behavior; Plaspy supports either and will auto detect the tracker protocol on connection.
- Firmware and command syntax can vary between QuecLink firmware versions and hardware revisions; confirm exact command formats with the manufacturer documentation.
- All devices in Plaspy use the same port 8888 for server connections to simplify configuration and allow automatic protocol detection.

## Why Use Plaspy with This Configuration

Using the QuecLink GL530MG with Plaspy enables reliable, long term asset visibility for deployments that need low maintenance and robust outdoor performance. Pointing GL530MG devices to the shared Plaspy endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888 and selecting UDP or TCP allows Plaspy to ingest GNSS positions, event reports and sensor data for mapping, alerts and history playback.

Learn more about Plaspy and how the platform can manage GL530MG devices at https://www.plaspy.com. For the most current device specific commands, firmware details and supported options verify the QuecLink documentation at https://www.queclink.com/ since firmware behavior and configuration methods can change over time.
