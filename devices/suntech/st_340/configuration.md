---
slug: /suntech/st_340/configuration
id: st_340-configuration
sidebar_label: Configuration
title: Suntech - ST 340 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 340 and practical steps to connect the tracker to Plaspy
keywords:
  - Suntech ST 340 configuration
  - ST 340 setup Plaspy
  - Suntech GPS tracker configuration
  - ST340 server configuration
  - ST 340 SMS setup
  - Suntech ST 340 APN settings
  - ST 340 GPRS configuration
  - Plaspy tracker setup
  - Suntech ST 340 installation
  - ST 340 tracking platform setup
---

# Suntech - ST 340 Configuration

This page documents the public configuration context for using the Suntech ST 340 tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, describes the common setup workflow, and includes example SMS commands from the device manufacturer that are commonly used to prepare the ST 340 for operation with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects each tracker protocol, while the manufacturer side setup can vary by firmware, hardware revision, installer method, and vendor tools. The ST 340 can be configured using SMS commands as shown in the public examples, and these instructions focus on the practical steps needed to point the device to Plaspy and verify connectivity.

## Configuration Overview

Configuring the ST 340 for Plaspy prepares the tracker to send location and event information to the Plaspy platform so devices appear in the fleet console and report on a predictable endpoint. The public manufacturer commands are often sent by SMS and include setting APN and the server endpoint plus telemetry reporting intervals.

- Point the tracker to the Plaspy server endpoint so the device can deliver location data to the platform.
- Configure APN and optional APN username and password so the device can use cellular data.
- Set the reporting interval so Plaspy receives updates at the desired frequency.
- Use manufacturer SMS commands or the official configuration tool to apply settings.
- Verify the device appears in Plaspy and is reporting as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port 8888 for all supported devices, and the platform will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A charged and installed ST 340 with access to its IMEI number.
- An active cellular SIM configured for data and SMS if using SMS configuration.
- APN credentials from the mobile operator (APN, optional APN username and password).
- A phone capable of sending SMS commands to the device or access to the manufacturer configuration tool.
- Access to the device installation location to power cycle or restart the tracker if needed.
- The IMEI is required to derive the device ID used in SMS commands for the ST 340.

## How This Tracker Connects to Plaspy

The ST 340 is configured to report to the shared Plaspy server endpoint and port so Plaspy can receive location updates and status messages. Plaspy’s automatic protocol detection means the same port and endpoint are used across supported devices.

- The device uses cellular data (GPRS) to send telemetry to the Plaspy server.
- APN settings are required so the device can open a data session with the operator.
- The tracker sends periodic reports to 54.85.159.138 on port 8888 or to d.plaspy.com on port 8888.
- You can select UDP or TCP transport depending on device firmware or installer preference.
- Once configured, Plaspy will detect the tracker protocol and process received messages so the device becomes visible in the platform.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 340, typically SMS commands or the vendor tool provided by the installer.
2. Confirm the device IMEI and derive the 9 digit device ID required by the ST 340 SMS syntax (see examples below).
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server depending on the SMS command format the device expects.
4. Set port 8888 for the server endpoint.
5. Choose UDP or TCP if the ST 340 requires a transport selection during setup.
6. Apply or save the configuration using the manufacturer SMS commands or configuration tool.
7. Restart the device if required by the firmware or recommended by the installer.
8. Validate that the device reports to Plaspy by checking the device appears in the Plaspy platform and confirms periodic updates.

## Example Configuration Commands

The ST 340 public configuration examples are provided as SMS commands. The device ID is the 9 digits taken from the IMEI: use the last 9 numbers of the IMEI excluding the final check digit. For example, if the IMEI is 123456789012345 the device ID shown in the manufacturer example would be 678901234.

Replace DEVICEID with the derived 9 digit device ID when sending these SMS commands.

1. Optional initial factory reset (use only if required by your installation):

```
ST300CMD;DEVICEID;02;Reset
```

2. Set operator APN and GPRS server. The fourth field is 1 if you include APN username or password, otherwise set 0. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, APN username, and APN password as needed. The command points the device to Plaspy by IP and port.

```
ST300NTW;DEVICEID;02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Notes:
- If you do not provide APN username or password, change the 1 to 0 and leave {{apnu}} and {{apnp}} empty.
- You may also substitute d.plaspy.com for the IP if the device accepts a hostname in its network command.

3. Set the reporting interval to 60 seconds (example reporting configuration):

```
ST300RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

4. Command to check current settings or request a preset response:

```
ST300CMD;DEVICEID;02;PresetA
```

Send these commands as SMS messages to the tracker from an authorized phone number depending on the device configuration.

## Configuration Notes

- The ST 340 manufacturer examples use SMS-based configuration; confirm whether your device firmware supports SMS, a web tool, or a desktop configuration utility.
- Derive the device ID from the IMEI exactly as shown in the manufacturer example: last 9 digits excluding the final IMEI check digit.
- Choose TCP or UDP based on installer preference and firmware support; Plaspy supports both and will detect the protocol automatically.
- Keep APN username and password placeholders {{apnu}} and {{apnp}} if your operator requires them; otherwise use 0 for the username/password flag.
- Firmware revisions and vendor tools may change command formats or additional parameters; consult the manufacturer documentation when in doubt.

## Why Use Plaspy with This Configuration

Using the Suntech ST 340 with Plaspy gives organizations consistent server settings and platform behavior across devices. Pointing the tracker to Plaspy using the shared endpoint and port simplifies integration and allows the platform to automatically detect your device protocol, making onboarding smoother and reducing per-device configuration complexity.

Learn more about Plaspy and how it manages device connectivity at https://www.plaspy.com. For device specific details, firmware changes, and the latest manufacturer instructions verify current information at http://www.suntechint.com/ .
