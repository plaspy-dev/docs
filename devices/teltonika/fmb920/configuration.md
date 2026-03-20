---
slug: /teltonika/fmb920/configuration
id: fmb920-configuration
sidebar_label: Configuration
title: Teltonika - FMB920 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB920 with Plaspy including server settings example commands and setup steps
keywords:
  - Teltonika FMB920 configuration
  - Teltonika FMB920 setup
  - FMB920 Plaspy
  - Plaspy tracker configuration
  - FMB920 server settings
  - Teltonika GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - GPS tracker configuration guide
  - Teltonika FMB920 commands
---

# Teltonika - FMB920 Configuration

This page documents the public configuration context for using the Teltonika FMB920 with Plaspy. It focuses on the Plaspy server settings you must apply to the device and provides a practical example command that can be used with Teltonika configuration methods. The content below uses only public settings and the sample configuration command provided for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact steps you perform on the manufacturer side can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools you use. Use Teltonika tools or SMS-based configuration according to the device installer guide and confirm any device-specific details with the manufacturer documentation.

## Configuration Overview

Preparing the FMB920 for Plaspy means configuring the device to report to the Plaspy server and verifying connectivity so the tracker appears in your Plaspy account. The configuration accepts an APN and server parameters and can be applied using Teltonika tools or SMS batch commands where supported.

- Configure APN and credentials so the device has a working mobile data connection.
- Point the device to the Plaspy server endpoint so location and events are forwarded to Plaspy.
- Select the transport protocol if the device requires a transport choice and set the shared Plaspy port.
- Save and apply configuration, then confirm the device is visible and reporting in Plaspy.
- Use Teltonika Configurator, SMS batch commands, or the official Teltonika tools as appropriate for your installation.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP; choose the transport if the device requires a selection  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered FMB920 installed or on-bench with access to its configuration interface  
- An active mobile SIM card with a valid data plan and correct APN settings for the device network  
- Access to the official Teltonika configuration method you prefer such as Teltonika Configurator, FOTA WEB, or SMS batch commands  
- Knowledge of the Plaspy server settings d.plaspy.com (or IP 54.85.159.138) and port 8888  
- A method to verify the device is reporting to Plaspy such as checking the device list or recent telemetry in the Plaspy platform

## How This Tracker Connects to Plaspy

Once configured, the FMB920 sends its position, inputs, and supported telemetry to the Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Plaspy uses the shared port and automatic protocol detection to accept connections from supported Teltonika devices without requiring per-device port changes on the server side.

- The tracker established a data session using the device APN and mobile network, then opens a connection to d.plaspy.com on port 8888  
- Device telemetry and event messages are transmitted over the chosen transport protocol to Plaspy  
- Plaspy automatically detects the tracker protocol and parses position and event data for display and reporting  
- Events such as ignition, door or alarm inputs reported by the FMB920 become visible in the Plaspy dashboard for monitoring and alerting  
- Successful configuration allows historical playback and live position updates within Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your FMB920 such as Teltonika Configurator, FOTA WEB, or SMS batch commands.  
2. Enter the Plaspy server host name d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888. Plaspy uses the same port for all devices.  
4. Choose UDP or TCP transport if the device requires selecting a transport. Plaspy will auto detect the tracker protocol.  
5. Apply or save the configuration to the device using the chosen tool or send the SMS batch command if using SMS configuration.  
6. Restart the device if required by the configuration method or if recommended by Teltonika documentation.  
7. Validate that the device reports to Plaspy by checking device connectivity and incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The public example command provided for basic parameter setup on Teltonika devices can be used as an SMS batch command or in a Teltonika configuration tool that accepts the same parameter format. This example sets APN values and points the device to Plaspy.

- Example SMS batch command (preserve placeholders):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the placeholders and fields in the command:
- [apn] is the mobile network APN name required for data connection.  
- [apnu] is the APN username placeholder where needed by your mobile operator.  
- [apnp] is the APN password placeholder where needed by your mobile operator.  
- 2004 sets the server host to d.plaspy.com for Plaspy; you can substitute 54.85.159.138 if an IP is required by your tool or policy.  
- 2005 sets the server port to 8888 which is the shared Plaspy port.  
- 2006 is used in Teltonika parameter schemes to control transport or related options on some firmware versions; verify the exact numeric mapping in Teltonika documentation for your firmware.

Send this as an SMS to the device or apply via Teltonika Configurator when using batch parameter import. Check Teltonika documentation for the exact method to send batch commands and whether your firmware requires a different parameter grouping.

## Configuration Notes

- Teltonika firmware versions can change parameter IDs and behavior; always verify parameter numbers and meanings for your device firmware release.  
- You can use either the domain d.plaspy.com or the IP 54.85.159.138 when a direct IP is required; most installers prefer the domain for DNS flexibility.  
- Choose UDP or TCP as supported by your deployment; Plaspy accepts both and detects the protocol automatically.  
- The example setparam command is commonly sent via SMS batch or Teltonika Configurator depending on installer preference and device access.  
- Validate connectivity in Plaspy after configuration to confirm telemetry and events are being received.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMB920 to report to Plaspy gives fleet operators and installers a straightforward path to real time visibility, event monitoring, and historical position data without needing per device server customization. Using the shared Plaspy server settings reduces configuration complexity and allows Plaspy to parse the tracker protocol automatically.

To learn more about Plaspy and how this configuration fits into broader fleet workflows visit https://www.plaspy.com. For the latest device specific setup details, parameter definitions, and firmware behaviors always verify information with the manufacturer at https://www.teltonika-gps.com/ as device behavior and parameter mappings can change over time.
