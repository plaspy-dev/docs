---
slug: /eelink/got10/configuration
id: got10-configuration
sidebar_label: Configuration
title: EElink - GOT10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the EElink GOT10 for Plaspy with server settings, SMS commands, and validation steps for tracking and OBD telemetry
keywords:
  - EElink GOT10 configuration
  - GOT10 setup Plaspy
  - EElink OBD tracker configuration
  - GOT10 server configuration
  - GOT10 SMS commands
  - EElink GOT10 APN setup
  - Plaspy compatible tracker
  - GOT10 OBD II setup
  - GPS tracker configuration Plaspy
  - vehicle diagnostics tracker configuration
---

# EElink - GOT10 Configuration

This page documents the public configuration context for using the EElink GOT10 OBD diagnose tracker with the Plaspy platform. It gathers the practical server settings, workflow guidance, and the publicly available SMS configuration commands that are commonly used to point a GOT10 device at Plaspy for telemetry and diagnostic reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The instructions below center on the public Plaspy settings and the SMS commands provided by the manufacturer that are used in typical deployments.

## Configuration Overview

The goal of configuring a GOT10 for Plaspy is to ensure the device can communicate with Plaspy's shared server endpoint, deliver location and OBD CAN BUS telemetry, and be visible in the Plaspy platform for monitoring and reporting. For GOT10 devices this commonly involves sending manufacturer SMS commands to set APN, server address, and reporting intervals.

- Configure the device to send telemetry to the Plaspy server endpoint and port.
- Set the operator APN so the device can use GPRS data for reporting.
- Choose UDP or TCP transport as required by the tracker and assign port 8888.
- Validate connectivity and confirm the device reports to Plaspy.
- Enable a suitable reporting interval for your monitoring needs and fleet scale.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A GOT10 device installed in the vehicle OBD II port and powered by the vehicle ignition.
- An active SIM card with a data plan and the correct APN for the mobile operator.
- Ability to send SMS messages to the device for SMS based configuration, or access to the manufacturer configuration tool if provided.
- Access to the official EElink documentation or vendor instructions for your device firmware revision.
- A Plaspy account and a way to verify the device is visible within the platform after configuration.

## How This Tracker Connects to Plaspy

GOT10 devices forward CAN BUS telemetry and standard tracker messages to the Plaspy endpoint so location, operational parameters, and diagnostic information appear in the Plaspy interface. The device can be configured to use Plaspy by setting the server address to d.plaspy.com or the public server IP and using port 8888.

- The GOT10 reports telemetry and diagnostic frames to the Plaspy server endpoint and port.
- Plaspy receives the data and automatically detects the tracker protocol for parsing.
- Location updates and OBD derived telemetry are streamed to Plaspy for live tracking and history.
- Diagnostic trouble codes and vehicle metrics become available in Plaspy reporting when the vehicle exposes them on the CAN BUS.
- The device uses GPRS data once APN and server settings are configured as shown below.

## Common Configuration Workflow

1. Access the official EElink configuration method for the GOT10 (SMS commands or manufacturer tool) per your device firmware and vendor instructions.
2. Set the device APN to your mobile operator value so the tracker can use GPRS data.
3. Enter d.plaspy.com or 54.85.159.138 as the server and set the port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration and send the commands to the device (SMS or tool).
6. Restart the device if required by the manufacturer to apply new settings.
7. Validate that the device reports to Plaspy and appears in your Plaspy account as expected.

## Example Configuration Commands

The GOT10 supports SMS based configuration. The following public SMS commands are provided by the manufacturer and are presented in the order used for basic setup. Send each command as a separate SMS to the device phone number.

- Optional initial factory reset (use only if you need to restore defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] and optional [apnu] and [apnp] with your operator values):
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: Keep placeholders [apn] for APN name, [apnu] for APN username, and [apnp] for APN password. Include username and password only if your operator requires them.

- Set the GPRS server using the Plaspy domain (UDP or TCP choice is configured on the device separately if required):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy public IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to every 60 seconds:
```text
TIMER,60#
```

- Check current parameters:
```text
PARAM#
```

These commands are the public, manufacturer-provided SMS commands for GOT10 basic setup. Use the SERVER command with either the domain or the IP and the same port 8888. Transport selection between UDP and TCP is a device option; consult the manufacturer tool or firmware guide if the device requires an explicit transport command.

## Configuration Notes

- SMS based configuration is a common method for GOT10 devices; confirm your device accepts SMS commands and that the SMS sender number is allowed if applicable.
- Firmware versions and hardware revisions can change command syntax or available features. Always verify commands against the EElink documentation for your firmware.
- Choose UDP or TCP according to installer preference and device support; Plaspy accepts either on port 8888 and will auto detect the protocol.
- When using the APN command, preserve placeholders for username and password only when your mobile operator requires authentication.
- Use the PARAM# command after configuration to verify that server, APN, and timer settings were applied successfully.

## Why Use Plaspy with This Configuration

Configuring the GOT10 to report to Plaspy gives fleet operators a unified view of vehicle location and OBD diagnostics. By streaming CAN BUS telemetry and diagnostics alongside GPS data into Plaspy, teams can monitor vehicle health, respond to fault codes faster, and incorporate diagnostic insight into routing and maintenance decisions.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current GOT10 specific instructions, firmware notes, and manufacturer details verify information at the EElink website https://www.eelink.com.cn/ as device behavior and setup methods may change over time.
