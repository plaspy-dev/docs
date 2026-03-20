---
slug: /teltonika/fmm150/configuration
id: fmm150-configuration
sidebar_label: Configuration
title: Teltonika - FMM150 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Teltonika FMM150 to report to Plaspy with server settings examples and an example setparam command
keywords:
  - Teltonika FMM150 configuration
  - Teltonika FMM150 setup for Plaspy
  - FMM150 server configuration
  - Teltonika FMM150 GPS platform setup
  - FMM150 tracker configuration
  - Plaspy tracker setup
  - vehicle telemetry FMM150
  - CAN bus telemetry FMM150
  - fleet management FMM150
  - Teltonika tracker configuration
---

# Teltonika - FMM150 Configuration

This page describes the public configuration context for using the Teltonika FMM150 with Plaspy. It focuses on the practical server settings, high level setup workflow, and the example configuration command shown in public Teltonika guidance so you can prepare the device to communicate with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps for configuring the FMM150 can vary by firmware version, hardware revision, installation method, and the Teltonika tools you use. Use this guidance to apply the Plaspy server settings and refer to Teltonika documentation for device specific details.

## Configuration Overview

Configuring the FMM150 for Plaspy ensures the tracker sends location and CAN telemetry to the platform so devices appear and report reliably inside Plaspy. The goal is to set the device network parameters, point it at the Plaspy endpoint, verify transport selection, and confirm reports reach the platform.

- Point the tracker to the Plaspy server domain or IP and the shared Plaspy port so the device can deliver data to Plaspy.
- Provide cellular connectivity details such as APN and optional APN credentials so the device can connect to the mobile network.
- Select transport and save the settings so the tracker uses UDP or TCP toward Plaspy as required.
- Validate connectivity by confirming the device is visible in Plaspy and sending expected telemetry.
- Keep firmware and configuration tools current and consult Teltonika tools for any device specific parameter names or numbering.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint settings to apply when configuring the FMM150 so it can report to Plaspy.

## Typical Requirements Before Setup

- A powered FMM150 installed or connected to a bench power source and ready for configuration
- An active mobile SIM with data service and the correct APN settings for the cellular network
- Access to Teltonika configuration methods such as Teltonika Configurator, FOTA WEB, or SMS based parameter commands
- Knowledge of your device firmware level and the matching parameter numbering or names used by that firmware
- Credentials or access to any installer tools required to write and save device parameters
- Basic network visibility to validate outbound connections from the tracker to the Plaspy endpoint

## How This Tracker Connects to Plaspy

When configured, the FMM150 sends GNSS location and on board CAN telemetry to the shared Plaspy endpoint so the device is visible and actionable inside the platform. The configuration points the tracker at the Plaspy server domain or IP and the standard Plaspy port so reports arrive in Plaspy for processing and display.

- Device is configured to send reports to d.plaspy.com or directly to 54.85.159.138
- Reports are sent to port 8888 which Plaspy uses for all supported devices
- Transport can be UDP or TCP depending on device settings and installer preference
- Plaspy automatically detects the incoming protocol and parses the tracker protocol
- Once reporting, location and CAN derived telemetry become available in Plaspy dashboards and reporting tools

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for your device such as Teltonika Configurator, FOTA WEB, or SMS parameters.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the FMM150 requires you to select a transport protocol.
5. Provide cellular APN and any required APN username or password so the FMM150 can establish a data connection.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device status and incoming messages in the platform.

## Example Configuration Commands

The Teltonika public example for setting basic network and server parameters can be applied with the device configuration method you use. The example below is the public command format shown in Teltonika guidance. Replace the APN placeholders with your mobile operator values.

- Example setparam command as provided in public Teltonika guidance:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and items in the command
  - [apn] is your cellular data access point name
  - [apnu] is the APN username if required by your operator
  - [apnp] is the APN password if required by your operator
  - 2004 is set to d.plaspy.com which points the device to Plaspy
  - 2005 is set to 8888 which is the shared Plaspy port
  - 2006 is included in the example as provided; consult Teltonika documentation for the parameter meaning in your firmware

This command can be sent via the Teltonika configuration tool, FOTA WEB, or by SMS if your device and installation method support SMS based parameter updates. Always verify parameter numbers and formats against your device firmware documentation.

## Configuration Notes

- Parameter numbering and available commands can vary by Teltonika firmware version and device revision; verify the correct parameter IDs for your unit.
- You can point the device to d.plaspy.com or use the server IP 54.85.159.138; both target the same Plaspy endpoint on port 8888.
- Choose UDP or TCP based on installer preference and network behavior; Plaspy will detect and handle the protocol automatically.
- SMS based commands are commonly used for remote setups but confirm SMS support and syntax for your firmware before relying on this method.
- Keep Teltonika Configurator or FOTA WEB updated to ensure compatibility with the latest firmware and parameter schemas.

## Why Use Plaspy with This Configuration

Using the FMM150 configured to report to Plaspy gives fleet operators a practical path to combine high quality GNSS tracking with detailed CAN bus telemetry. Pointing the device to the Plaspy endpoint and confirming connectivity allows dispatchers and maintenance teams to use Plaspy for location visibility, event monitoring, and operational reporting.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific parameter definitions, firmware behavior, and setup methods consult the official Teltonika documentation at https://www.teltonika-gps.com/ which may update parameter names and configuration workflows over time.
