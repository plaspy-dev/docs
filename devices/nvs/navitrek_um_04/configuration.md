---
slug: /nvs/navitrek_um_04/configuration
id: navitrek_um_04-configuration
sidebar_label: Configuration
title: NVS - Navitrek UM-04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for NVS Navitrek UM 04 showing how to connect the tracker to the Plaspy server
keywords:
  - NVS Navitrek UM-04 configuration
  - Navitrek UM-04 setup
  - NVS GPS tracker configuration
  - Plaspy tracker setup
  - Navitrek server configuration
  - vehicle tracking configuration
  - Navitrek APN setup
  - GPS tracker SMS commands
  - Navitrek GPRS configuration
  - Plaspy server settings
---

# NVS - Navitrek UM-04 Configuration

This page describes the public configuration context for using the NVS Navitrek UM-04 with Plaspy. It consolidates the practical, publicly available setup steps and SMS commands used to prepare the Navitrek UM-04 for reporting to a third party tracking server such as Plaspy. The Navitrek UM-04 determines navigational parameters with GLONASS and GPS signals, monitors vehicle condition, reports alarm events, and exchanges information with a dispatch center, and this guide focuses on the configuration aspects required to get the device visible on Plaspy.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol during initial communication. Exact manufacturer side configuration steps for the Navitrek UM-04 can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the SMS commands and workflow below as practical public guidance that complements official NVS documentation.

## Configuration Overview

The purpose of configuring the Navitrek UM-04 for Plaspy is to point the tracker at the Plaspy server endpoint, ensure the device has a working data connection, and verify that the device reports correctly to the platform. On Navitrek UM-04 units this typically involves sending SMS setup commands or using the manufacturer tool to set APN and server parameters, then switching the device into GPRS mode so data can be transmitted.

- Set the device APN and optionally APN credentials so the tracker can access mobile data.
- Configure the GPRS server address and port to point to Plaspy so location and event data are delivered.
- Enable GPRS data mode on the device so telemetry is sent to the server endpoint.
- Verify the device responds and appears in Plaspy, relying on Plaspy to detect the tracker protocol automatically.
- Use the default device password when present to perform SMS based configuration or follow the manufacturer method.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol and uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A SIM card with an active mobile data plan and knowledge of the operator APN settings
- Access to SMS sending from a phone or the official NVS configuration tool to apply commands
- Knowledge of the device password if it differs from the factory default
- Power to the device and a stable installation state so the tracker can perform network registration
- Access to the official NVS documentation or vendor support for firmware specific details

## How This Tracker Connects to Plaspy

The Navitrek UM-04 is configured to send location, status, and alarm events to the Plaspy server endpoint and port. When the device is pointed at Plaspy and placed into GPRS mode, it will establish a data session and begin transmitting its telemetry to the shared Plaspy server endpoint where Plaspy detects the protocol and processes the inbound data.

- The tracker is pointed at the Plaspy server domain or IP address and port 8888
- The tracker opens a data connection using the configured APN and GPRS mode
- Telemetry and alarm events are sent to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy automatically detects the tracker protocol and processes reports without requiring a device specific port
- The tracker can use either UDP or TCP transport depending on device selection

## Common Configuration Workflow

1. Access the official NVS configuration method for the Navitrek UM-04 such as SMS commands or the manufacturer configuration tool.
2. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138 in the server or admin IP setting.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires explicit transport selection.
5. Configure the APN and APN credentials for the cellular operator so the device can establish a GPRS session.
6. Apply or save the settings and switch the tracker to GPRS or data mode so it can transmit to the server.
7. Restart the device if required by the manufacturer to activate the new settings.
8. Validate that the device reports to Plaspy and that the platform detects the tracker protocol automatically.

## Example Configuration Commands

The Navitrek UM-04 can be configured using SMS commands. The following publicly available example commands are provided in the order shown in the manufacturer sample. The sample assumes the device password is 123456 which is the factory default in the public sample. Replace placeholders with your operator details.

- Optional initial factory reset using the device password
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 {{apn}}
```
Explanation: replace {{apn}} with your mobile operator APN name.

- Set APN username and password if required
```text
up123456 {{apnu}} {{apnp}}
```
Explanation: replace {{apnu}} with APN username and {{apnp}} with APN password. Send only if your APN requires authentication.

- Set the GPRS server to Plaspy using the server IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: You may alternatively point to d.plaspy.com if the device accepts domain names. Plaspy uses port 8888 for all devices.

- Switch the device to GPRS mode
```text
gprs123456,1,1
```
Or, on some firmware variants use the short form
```text
gprs123456
```

- Check current settings
```text
check123456
```

Use these SMS commands in the order shown when performing an initial setup. If a factory reset is needed, use the reset command first. Always confirm the device password before sending administrative commands.

## Configuration Notes

- Manufacturer firmware versions can change command syntax and accepted parameters. Verify the exact SMS syntax on the NVS documentation for your firmware revision.
- The device supports SMS based configuration in the public example but vendor tools or a PC configuration utility may also be available and can simplify bulk deployments.
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and will auto detect protocol behavior when the device connects.
- Remember to replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with real operator values before sending commands.
- After applying server and APN settings, switching to GPRS mode and restarting the unit often completes the activation sequence.

## Why Use Plaspy with This Configuration

Configuring the Navitrek UM-04 to report to Plaspy gives organizations a practical way to centralize vehicle location, status, and alarm information from devices that support GLONASS and GPS. Pointing the tracker at Plaspy and enabling GPRS mode allows real time visibility and event reporting while relying on Plaspy to automatically detect the device protocol and process incoming telemetry.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance consult the manufacturer website https://www.nvs-ts.ru/ to verify current setup procedures and device behavior.
