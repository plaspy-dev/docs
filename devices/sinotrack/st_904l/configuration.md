---
slug: /sinotrack/st_904l/configuration
id: st_904l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-904L Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for SinoTrack ST 904L to configure server and APN for Plaspy using SMS and GPRS commands
keywords:
  - SinoTrack ST-904L configuration
  - ST-904L Plaspy setup
  - SinoTrack configuration guide
  - ST-904L server configuration
  - GPS tracker setup Plaspy
  - ST-904L SMS commands
  - SinoTrack APN setup
  - vehicle tracker configuration
  - personal tracker setup
  - Plaspy device integration
---

# SinoTrack - ST-904L Configuration

This page documents the public configuration context for using the SinoTrack ST-904L with Plaspy. It focuses on the practical, publicly available steps for pointing the device to Plaspy’s server endpoint and validating connectivity. Use this guidance to prepare the tracker for live tracking, alarms, and reporting in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer steps can differ by firmware version, hardware revision, installation type, and vendor tools. The ST-904L supports SMS and GPRS configuration, so this page includes the common SMS commands and workflow that are used to configure server, APN, and reporting intervals before registering the device with Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the ST-904L so it reliably reports location and event data into Plaspy. Using the device’s SMS configuration commands, you point the tracker to Plaspy’s server address and confirm reporting so the tracker becomes visible on your Plaspy account.

- Configure the tracker server and APN so GPRS reports are sent to Plaspy.
- Verify the device time zone, data intervals, and reporting mode for predictable updates.
- Use SMS commands or the manufacturer tool to apply settings when no direct USB or web interface is present.
- Validate connectivity so the device appears and updates on Plaspy maps and reports.

## Configuration Overview

(Summary repeated intentionally for clarity to support quick scanning by technical users)

- Prepare device for Plaspy by setting APN, server, and transport.
- Confirm the device is reachable via SMS and has an active SIM with data.
- Test reporting intervals and use RCONF to verify settings.
- Register or verify IMEI with Plaspy if required for your account.

## Plaspy Server Settings

When configuring the ST-904L for Plaspy, use the following public Plaspy server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (device may be set to either)
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public endpoint and port that the ST-904L should report to so Plaspy can receive and interpret location and event messages.

## Typical Requirements Before Setup

- A charged ST-904L with working battery or external power applied.
- Active SIM card in the device with a data plan and SMS capability and correct APN credentials.
- Access to the device installer or owner to send SMS configuration commands.
- Knowledge of the operator APN values for placeholders such as {{apn}}, {{apnu}}, and {{apnp}}.
- A Plaspy account or administrative access so you can verify the device appears after configuration.
- Ability to query device settings via the RCONF command to confirm configuration.

## How This Tracker Connects to Plaspy

The ST-904L sends GPS and event data to Plaspy by pointing the device’s GPRS server settings to the shared Plaspy endpoint. Once configured, reporting and alarms are forwarded to Plaspy so they appear on maps, alerts, and logs.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Reporting can use UDP or TCP depending on the device transport setting.
- Location updates, SOS, geofence and overspeed alarms are forwarded to Plaspy for alerting and history.
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages from the ST-904L.
- Device visibility in Plaspy is validated by confirming the tracker sends data after configuration.

## Common Configuration Workflow

1. Access the official SinoTrack SMS configuration method or the approved manufacturer tool to change device settings.
2. Confirm or set the device time zone if required for logging accuracy.
3. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set port 8888 for the GPRS server entry.
5. Choose UDP or TCP transport if the device requires explicit transport selection.
6. Set the APN details for the installed SIM using your operator APN values.
7. Apply or save the configuration and restart the device if required by the tracker.
8. Validate the device reports to Plaspy by checking the device status in your Plaspy account and confirming recent location updates.

## Example Configuration Commands

The ST-904L can be configured by SMS using the public commands below. Preserve placeholders when sending commands and replace them with your operator APN values. The order below reflects a typical setup flow; the RESET command is optional or used as an initial factory restore when needed.

- Restore factory settings (optional initial step):
```text
RESET
```

- Set the time zone to UTC+0:
```text
8960000E00
```

- Set the APN of the operator (replace placeholders with your operator values):
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation of placeholders:
- {{apn}} = APN name provided by mobile operator
- {{apnu}} = APN username if required (leave blank if not used)
- {{apnp}} = APN password if required (leave blank if not used)

- Set up the GPRS server to Plaspy using the public Plaspy IP and port:
```text
8040000 54.85.159.138 8888
```
You may also point to d.plaspy.com if the device accepts domain names instead of IP.

- Set update interval while device is on:
```text
8050000 60
```

- Set update interval when device is off or in a different reporting mode:
```text
8090000 60
```

- Switch the device to GPRS mode:
```text
7100000
```

- Check or verify current settings on the device:
```text
RCONF
```

Send each SMS from the SIM-authorized phone number as required by SinoTrack device settings. After applying these commands, allow a short period for the device to reconnect to the network and begin reporting to Plaspy.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always verify commands against the device manual for your unit.
- The ST-904L supports SMS based configuration as shown; you can use SMS when no direct PC tool is available.
- TCP and UDP are both supported by Plaspy; choose the transport required by your installation or leave device default if unsure. Plaspy automatically detects the incoming protocol.
- Keep a copy of the original device settings before making changes, and record the IMEI so you can register or verify the device in Plaspy.
- If DNS resolution is preferred and supported by the device, you can use d.plaspy.com instead of the numeric IP when setting the server.

## Why Use Plaspy with This Configuration

Using the ST-904L with Plaspy provides a straightforward way to centralize location, alarm and status data for vehicles and personal assets. The device’s SMS and GPRS configuration options make it simple to point telemetry at Plaspy’s shared server endpoint, enabling real-time maps, alerts and historical reporting without complex hardware integration.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details please verify information on the official SinoTrack website https://www.sinotrackgps.com/ as device behavior and setup steps can change over time.
