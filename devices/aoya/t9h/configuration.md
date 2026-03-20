---
slug: /aoya/t9h/configuration
id: t9h-configuration
sidebar_label: Configuration
title: AoYa - T9H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the AoYa T9H tracker to Plaspy using shared server settings and SMS commands
keywords:
  - AoYa T9H configuration
  - AoYa T9H setup
  - AoYa T9H server configuration
  - AoYa T9H Plaspy
  - AoYa GPS tracker configuration
  - T9H GPRS setup
  - T9H SMS configuration
  - Plaspy tracker setup
  - vehicle tracking setup
  - GPS tracker server settings
---

# AoYa - T9H Configuration

This page documents the public configuration context for using the AoYa T9H tracker with the Plaspy platform. It focuses on the practical server settings and the manufacturer-provided SMS commands commonly used to prepare the device for reporting to Plaspy. The guidance below uses the publicly available configuration items and the sample SMS-based setup flow where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side steps such as SMS commands, firmware menus, or configuration tools can vary by firmware version, hardware revision, installation type, and vendor tools; always confirm device-specific details against the official AoYa documentation when necessary.

## Configuration Overview

The goal of the configuration process is to prepare the T9H so it reliably sends position and status updates to the Plaspy server endpoint. For the T9H, that frequently means using the device's SMS command interface to set APN credentials and the GPRS server address and transport.

- Configure APN and optional APN credentials so the device can establish GPRS data.
- Set the Plaspy server address and port so the tracker reports to the correct endpoint.
- Choose UDP or TCP transport if the device requires a transport selection.
- Validate connectivity and confirm the device appears in Plaspy for real time visibility.
- Use the device password to authenticate SMS commands and check current settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device
- Plaspy automatically detects the tracker protocol when a device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A charged AoYa T9H with working battery and power applied for configuration.
- A SIM card with active data and the APN values provided by your mobile operator.
- Access to the device password for SMS configuration; the sample default password in the public setup is 123456.
- Ability to send and receive SMS messages from the phone number used to configure the tracker.
- Manufacturer documentation or a configuration guide for the T9H to confirm command formats and firmware specifics.
- Network coverage for GPRS on one of the supported GSM frequency bands.

## How This Tracker Connects to Plaspy

The AoYa T9H is configured to report its position and status over GPRS to the Plaspy shared server endpoint and port. Plaspy receives the connection, determines the tracker protocol automatically, and makes the device visible in the platform for tracking and monitoring.

- The tracker sends GPRS data to d.plaspy.com or directly to 54.85.159.138 using port 8888.
- Transport can be configured as UDP or TCP depending on the device option; Plaspy supports both.
- When the device connects to the server and completes handshake, Plaspy identifies the protocol automatically.
- Device events and location updates are forwarded into the Plaspy platform for operational monitoring.
- Confirmation of a successful connection is typically done by checking the device presence in the Plaspy interface.

## Common Configuration Workflow

1. Access the official AoYa configuration method for the T9H (SMS commands, web tool, or vendor software) as documented by the manufacturer.
2. Prepare APN values from your mobile operator and the device password (sample default 123456).
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.
4. Set the server port to 8888 in the device settings.
5. Choose UDP or TCP for the transport if the device requires an explicit selection.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by confirming the device appears in the platform and sends periodic updates.

## Example Configuration Commands

The AoYa T9H supports SMS-based configuration in the public command format shown below. These sample SMS commands use the device password 123456 as shown in the manufacturer examples. Preserve the placeholders when substituting your operator values.

- Optional initial factory reset (use only when you need to restore defaults):
```
begin123456
```

- Set the time zone to UTC+0 (example):
```
time zone123456 0
```

- Set the APN for your mobile operator (replace {{apn}} with the operator APN):
```
apn123456 {{apn}}
```

- Set APN username and password if required by your operator (replace {{apnu}} and {{apnp}} with the credentials). These fields may be optional for many operators:
```
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the public server IP and port. Plaspy accepts connections to this address and port:
```
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode and select transport. Example enabling GPRS with explicit parameters (device firmware may accept alternative forms):
```
gprs123456,1,1
```
or the simpler form:
```
gprs123456
```

- Check current device settings:
```
check123456
```

Notes on placeholders:
- {{apn}} is your mobile operator APN string.
- {{apnu}} is the APN username if required.
- {{apnp}} is the APN password if required.
- 123456 is the sample default device password in the public commands; confirm the active password for your unit.

## Configuration Notes

- SMS-based configuration is commonly supported for this model; ensure you have the correct device password before sending commands.
- Firmware versions and hardware revisions can change command syntax or available parameters; consult AoYa documentation for your specific firmware.
- Choose UDP or TCP according to any recommendations from your mobile network or installer; Plaspy supports both and will auto-detect the protocol on connection.
- All Plaspy devices report to the same port so use port 8888 when configuring the server address.
- Verify APN and optional APN credentials with your wireless operator before trying to establish GPRS.

## Why Use Plaspy with This Configuration

Configuring the AoYa T9H to report to Plaspy gives organizations a straightforward path to real time visibility and fleet or asset monitoring. Using the shared Plaspy endpoint and the sample SMS commands for APN and server configuration lets installers and administrators quickly prepare devices for live tracking and operational oversight.

Learn more about Plaspy and how it can manage devices like the AoYa T9H at https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior may change over time, so verify the latest device-specific configuration and commands at the official AoYa website http://www.aoyagps.com/ before deploying at scale.
