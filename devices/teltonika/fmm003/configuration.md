---
slug: /teltonika/fmm003/configuration
id: fmm003-configuration
sidebar_label: Configuration
title: Teltonika - FMM003 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMM003 showing how to point the device to Plaspy with practical server and command examples
keywords:
  - Teltonika FMM003 configuration
  - Teltonika FMM003 setup for Plaspy
  - FMM003 server configuration
  - FMM003 GPS tracker setup
  - Teltonika FMM003 tracking software configuration
  - Plaspy tracker integration
  - FMM003 OBD tracker configuration
  - vehicle tracking FMM003
  - FMM003 APN and server settings
  - Teltonika configuration commands
---

# Teltonika - FMM003 Configuration

This page covers the public configuration context for using the Teltonika FMM003 tracker with Plaspy. It documents the practical server settings and an example device command that can be used to point the tracker to Plaspy so the device can send location and OBD data for fleet monitoring. Use this guidance together with the official Teltonika documentation and device tools when you perform your setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The FMM003 supports multiple configuration methods from Teltonika such as Teltonika Configurator, FOTA WEB, FOTA, or mobile tools, and the command example shown below can be applied where SMS or command string configuration is supported.

## Configuration Overview

This configuration process prepares the FMM003 to communicate with Plaspy by setting network access parameters and the correct Plaspy server endpoint. The goal is to ensure the tracker reports position and OBD vehicle data to the Plaspy platform reliably.

- Configure APN credentials so the device can use cellular data
- Set the Plaspy server domain or IP and the shared port used by the platform
- Choose the transport mode if the device requires UDP or TCP selection
- Apply and save the configuration and restart the device when required
- Validate the device is reporting in Plaspy and check event/telemetry visibility

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring your FMM003:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the protocol the tracker uses.

## Typical Requirements Before Setup

- A powered and accessible FMM003 installed or connected to the vehicle OBD II port
- A valid micro SIM and active data plan configured on the device using proper APN settings
- Access to a Teltonika configuration method supported for your deployment such as Teltonika Configurator, FOTA WEB, FOTA, or the FMBT mobile application
- Knowledge of your APN credentials or placeholders for APN, APN user, and APN password
- An account on Plaspy or access to the Plaspy platform to verify device reporting after setup
- Updated device firmware if required by your installation policies

## How This Tracker Connects to Plaspy

When configured, the FMM003 will send position and available OBD parameters to the shared Plaspy endpoint so your fleet can be monitored and analyzed in the platform. The device is set to report to the Plaspy server address and port shown above.

- The tracker uses cellular connectivity and the device APN to establish data sessions
- Device messages are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888
- The transport layer can be UDP or TCP depending on your configuration choice
- Plaspy automatically detects the tracker protocol so normal device reporting is recognized in the platform
- Once reporting, location and supported OBD parameters appear in Plaspy for monitoring and alerts

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software appropriate for your device and environment
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field
3. Set the port to 8888 which is the shared Plaspy port used for all devices
4. Choose UDP or TCP if the device requires you to select a transport option
5. Enter APN credentials using your operator values or placeholders and apply the settings
6. Save or apply the configuration and restart the device if recommended by the tool or firmware
7. Validate the device reports to Plaspy and confirm telemetry appears on the platform

## Example Configuration Commands

The public Teltonika command example below shows a concise parameter update that sets APN values and points the device at the Plaspy server. This example is often sent via SMS or through a Teltonika configuration tool that accepts setparam commands.

- set APN values and Plaspy server endpoint using a single command

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields
  - {{apn}} is your mobile operator APN name
  - {{apnu}} is the APN username if required by your carrier
  - {{apnp}} is the APN password if required by your carrier
  - d.plaspy.com is the Plaspy server domain used by the platform
  - 8888 is the Plaspy port used by all devices
  - If you use SMS based configuration, send the command according to Teltonika SMS command rules or use the Teltonika Configurator or FOTA tools to apply the same parameter set

Always confirm the command method and exact parameter IDs in your Teltonika documentation or configuration tool before applying the command.

## Configuration Notes

- Firmware and device tool differences can change required parameter IDs and command formats; verify parameter IDs in current Teltonika references
- Choose UDP or TCP based on your network and carrier behavior; Plaspy supports both and will detect the protocol automatically
- Keep APN credentials secure and verify them with your mobile operator before applying
- If you use SMS configuration, ensure the device accepts SMS commands and that the sending number is permitted by the device settings
- After applying settings, allow a short time for the device to connect and register with Plaspy before concluding the setup

## Why Use Plaspy with This Configuration

Pointing the Teltonika FMM003 to Plaspy using the shared Plaspy server settings provides a practical way to centralize position and vehicle OBD data for fleet monitoring and operational oversight. The FMM003's OBD data capabilities combined with Plaspy visibility help teams track odometer and fuel related parameters alongside GPS position for better maintenance and fuel management decisions.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup and firmware behavior with the manufacturer at https://www.teltonika-gps.com/ to ensure your configuration matches current Teltonika recommendations.
