---
slug: /aoya/t19/configuration
id: t19-configuration
sidebar_label: Configuration
title: AoYa - T19 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the AoYa T19 GPS tracker to report to Plaspy using SMS and GPRS server settings
keywords:
  - AoYa T19 configuration
  - AoYa T19 setup
  - AoYa T19 Plaspy
  - AoYa GPS T19
  - T19 SMS configuration
  - AOYA tracker setup
  - vehicle tracking T19
  - T19 server configuration
  - GPS tracker configuration
  - Plaspy tracker setup
---

# AoYa - T19 Configuration

This page documents the public configuration context for using the AoYa T19 magnetic mini GPS tracker with Plaspy. It collects the essential server settings, practical SMS commands, and general workflow you will use to point the device at Plaspy so the tracker appears and reports correctly in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The examples on this page are based on the public SMS configuration commands provided by AoYa for the T19 and the required Plaspy server information.

## Configuration Overview

The goal of the configuration process is to prepare a T19 tracker so it can connect to Plaspy and reliably report location and status. This includes setting the device APN and operator credentials, configuring the GPRS server endpoint, selecting the transport mode, and verifying the device is reporting to Plaspy.

- Set the device APN and optional APN username and password so GPRS data can be used.
- Configure the GPRS server endpoint to point the tracker to Plaspy using the shared server settings.
- Choose UDP or TCP transport if the device requires a transport selection for GPRS.
- Validate the device configuration and confirm the tracker reports to Plaspy.
- Optionally perform a factory reset or time zone adjustment when preparing a device for deployment.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the T19. Plaspy requires the same port for all supported devices and it automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device can be configured to use either)
- Plaspy automatically detects the tracker protocol so you do not need to set a protocol type in Plaspy

## Typical Requirements Before Setup

- A charged T19 with an active SIM card that has GPRS/data enabled and SMS capability.
- Access to a phone able to send configuration SMS messages to the tracker.
- The device default password if required for SMS commands (the T19 default password used in examples is 123456).
- The APN value for the mobile operator you use, and optional APN username and password if required by the operator.
- Basic knowledge of how to send SMS commands to the tracker or access to the manufacturer configuration tool if provided.

## How This Tracker Connects to Plaspy

When a T19 is configured for Plaspy, it is set to report its GPS and device status to Plaspy's shared server endpoint and port. The tracker uses GPRS to send data to the configured server, and Plaspy will identify the incoming protocol automatically.

- The tracker is pointed to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- The device uses GPRS data to establish outbound connections to Plaspy.
- Choose UDP or TCP on the device if required; the server and Plaspy will handle protocol detection.
- Once connected, the tracker will appear in Plaspy and report location updates according to its reporting rules.
- Use the device check command to verify current settings before deployment.

## Common Configuration Workflow

1. Obtain the official AoYa configuration method for the T19 (SMS commands demonstrated below or manufacturer software) and confirm the device password.
2. Set the device APN using the operator APN string for your SIM card.
3. Enter the Plaspy server address by specifying either d.plaspy.com or the server IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP transport on the device if it requires a transport selection.
5. Save or apply the configuration and restart the device if required by the manufacturer instructions.
6. Validate the device reports to Plaspy and appears in the platform; use the tracker check command to confirm settings and connectivity.

## Example Configuration Commands

The following SMS commands are the publicly documented commands for the AoYa T19. The default device password in these examples is 123456. Send these commands by SMS to the device number. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN and optional username and password.

- Factory reset (optional initial setup)
```text
begin123456
```

- Set the time zone to UTC+0
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username and password if required (replace placeholders as needed)
```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode and select UDP or TCP
  - Example enabling GPRS in UDP mode:
```text
gprs123456,1,1
```
  - Or a simpler GPRS mode command if applicable:
```text
gprs123456
```

- Check current settings and status
```text
check123456
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if required by your operator.
- {{apnp}} is the APN password if required by your operator.

## Configuration Notes

- The T19 supports SMS based configuration as shown above; some installers may also use vendor tools when available.
- Firmware and hardware revisions can change exact command formats; confirm the command syntax with current AoYa documentation for your device.
- Choose TCP or UDP based on network characteristics and installer preference; Plaspy will accept either and automatically detect the protocol.
- If you perform a factory reset, treat it as an optional step when preparing a device for redeployment or when recovering from unknown settings.
- Always verify APN and operator credentials before attempting GPRS server configuration.

## Why Use Plaspy with This Configuration

Configuring the AoYa T19 to report to Plaspy gives organizations a straightforward way to add discreet, long battery life trackers into a unified fleet and asset visibility platform. Using the shared Plaspy server settings simplifies device onboarding because all supported devices use the same port and Plaspy automatically detects the tracker protocol.

To learn more about Plaspy and how it supports tracker integrations, visit https://www.plaspy.com. For the latest device specific command formats, firmware notes, and installation guidance for the AoYa T19, verify details with the manufacturer at http://www.aoyagps.com/.
