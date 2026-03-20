---
slug: /wanway/s20/configuration
id: s20-configuration
sidebar_label: Configuration
title: WanWay - S20 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for WanWay S20 showing Plaspy server settings and SMS commands for GPRS reporting and device activation
keywords:
  - WanWay S20 configuration
  - WanWay S20 setup
  - WanWay S20 Plaspy
  - S20 GPS tracker configuration
  - S20 server setup
  - WanWay asset tracker setup
  - GPS tracker Plaspy configuration
  - asset GPS Plaspy integration
  - S20 SMS configuration
  - GPRS server configuration WanWay
---

# WanWay - S20 Configuration

This page describes the public configuration context for using the WanWay S20 Asset GPS Tracker with Plaspy. It compiles the Plaspy server settings and the practical, publicly available commands used to point the S20 at Plaspy for reporting. Use this guide as a practical reference when preparing an S20 unit for operation with the Plaspy fleet platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The S20 supports SMS based configuration in the public guidance below, so this page includes example SMS commands and general workflow while advising you to consult WanWay documentation for device specific details.

## Configuration Overview

The configuration process prepares the S20 to report location and status to Plaspy so the device becomes visible in your fleet view. This typically involves setting the device APN, configuring the GPRS server address and port to Plaspy, enabling GPRS reporting, and validating the device status after configuration.

- Set the carrier APN so the device can establish a data connection for GPRS reporting.
- Configure the GPRS server to point to Plaspy using the shared server domain and port.
- Set reporting intervals to balance real time visibility and battery life.
- Enable GPRS reporting or switch the device into GPRS mode so it actively sends data.
- Validate configuration with status and parameter queries and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy settings to use when configuring the S20 server target. All devices reporting to Plaspy use the same port and the platform will attempt to detect the device protocol automatically.

## Typical Requirements Before Setup

- A charged S20 unit with accessible SIM slot and a charged battery.
- A SIM card with an active data plan and SMS capability for sending configuration messages.
- The correct APN information for your mobile carrier (username and password if required).
- Access to the WanWay SMS configuration method or official manufacturer instructions.
- A Plaspy account or platform access to verify that the device appears after configuration.
- Ability to restart the device or power cycle it after applying settings if required.

## How This Tracker Connects to Plaspy

The S20 is configured to send location and status updates to the Plaspy server endpoint so Plaspy can provide mapping, alarms, and historical playback. Typically this is done by setting the device to use GPRS reporting and pointing the device server fields to d.plaspy.com on the shared port.

- The tracker reports position and device telemetry to the Plaspy server endpoint d.plaspy.com using port 8888.
- Plaspy receives inbound device data over UDP or TCP; the tracker should be set for the transport the firmware requires.
- The platform automatically detects the tracker protocol so the same Plaspy port is used across devices.
- Tamper and battery status reported by the S20 are forwarded into Plaspy alarm and reporting systems for operational monitoring.
- After successful configuration the device becomes visible in Plaspy for live tracking and historical playback.

## Common Configuration Workflow

1. Access the official WanWay configuration method for the S20, typically SMS commands as shown in the manufacturer guidance or a WanWay configuration tool.
2. Enter d.plaspy.com (or the Plaspy server IP) into the device server field so the tracker targets Plaspy.
3. Set port 8888 as the device reporting port; Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if it requires a transport selection.
5. Apply or save the configuration on the device and enable GPRS reporting mode if required.
6. Restart or power cycle the S20 if the device firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device status and confirming the asset appears in your Plaspy account.

## Example Configuration Commands

The S20 supports SMS based configuration in the public guidance provided by WanWay. Send these SMS commands from the phone number allowed to configure the device. Preserve the placeholders when replacing with carrier-specific values.

- Configure the carrier APN (replace [apn], and if required include [apnu] and [apnp] for APN username and password):
```text
APN,[apn][apnu],[apnp]#
```
Note: If the device supports the optional username and password fields, use the format shown by your device manual. Keep the placeholders exactly as needed.

- Set the GPRS server to Plaspy using the public domain and port:
```text
SERVER,1,d.plaspy.com,8888,0#
```
This command points the device at the Plaspy server domain on port 8888. The final parameter in this command is firmware specific and may indicate transport or other flags; consult the WanWay manual for exact parameter meaning.

- Set the reporting interval (example sets two timers, adjust values per your needs):
```text
TIMER,60,60#
```

- Enable GPRS reporting mode:
```text
GPRSON,1#
```

- Verify device parameters:
```text
PARAM#
```

- Check device runtime status:
```text
STATUS#
```

Send each command as a separate SMS from a trusted phone number. The S20 will typically reply with confirmation messages; monitor responses to verify successful application of settings.

## Configuration Notes

- Firmware and hardware revisions may change the required command syntax or parameter meanings; always confirm the exact command format with the WanWay documentation for your firmware version.
- The S20 supports SMS based setup as shown in the public commands above; some installers use manufacturer software tools instead of SMS where available.
- The SERVER command in the example uses d.plaspy.com and port 8888; Plaspy also publishes a server IP but using the domain is generally simpler for updates.
- When the device requires choosing UDP or TCP, pick the transport supported by the device firmware; Plaspy will detect the device protocol on its shared port.
- After applying settings, use PARAM# and STATUS# to verify the device accepted the configuration and is ready to report.

## Why Use Plaspy with This Configuration

Using the WanWay S20 with Plaspy provides centralized visibility for asset tracking scenarios where battery life, tamper detection, and portability matter. Pointing the S20 at Plaspy (d.plaspy.com on port 8888) enables real time tracking, alarm routing, and historical playback so teams can respond quickly to incidents and maintain operational oversight across dispersed assets.

To learn more about Plaspy and how it can integrate with trackers like the WanWay S20 visit https://www.plaspy.com. For the most current device specific setup methods, firmware behavior, and manufacturer details verify the official WanWay documentation at https://www.wanwaytech.net/ before applying configuration to production assets.
