---
slug: /globalsat/tr_616/configuration
id: tr_616-configuration
sidebar_label: Configuration
title: GlobalSat - TR-616 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GlobalSat TR-616 with Plaspy server settings SMS command examples and checksum guidance
keywords:
  - GlobalSat TR-616
  - TR-616 configuration
  - TR-616 Plaspy setup
  - GlobalSat tracker configuration
  - GPS tracker setup Plaspy
  - vehicle tracking TR-616
  - TR-616 SMS configuration
  - tracker server configuration
  - Plaspy server settings
  - GPS platform setup
---

# GlobalSat - TR-616 Configuration

This page documents the public configuration context for using the GlobalSat TR-616 tracker with Plaspy. It collects the Plaspy server settings and practical setup steps that are publicly available and shows the SMS configuration commands included in the manufacturer provided content. Use this page as a technical reference for preparing a TR-616 to communicate with Plaspy, while following official GlobalSat documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so the same server endpoint and port work for all devices on the platform. Manufacturer setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so confirm details against GlobalSat resources when required.

## Configuration Overview

This configuration process prepares a TR-616 to send location and status data to the Plaspy platform. The goal is to set network parameters, point the device to Plaspy's server, and verify that the device reports correctly so it becomes visible in the Plaspy fleet view.

- Configure the device APN and network access parameters so it can reach the internet.
- Set the server endpoint and port to the Plaspy server so the tracker posts telemetry to Plaspy.
- Choose the transport method (UDP or TCP) if the tracker requires a transport selection.
- Compute and include the required SMS command checksum where needed to ensure the tracker accepts the SMS configuration.
- Apply the settings and reboot the device if required, then validate the device is reporting on Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so the platform accepts devices reporting over either UDP or TCP

## Typical Requirements Before Setup

- A powered TR-616 unit with a working SIM card that has data and SMS capability
- The device IMEI number available for use in SMS configuration or manufacturer tools
- APN settings for the SIM card provider to be filled into the placeholders [apn], [apnu], and [apnp]
- An SMS capable phone or the manufacturer configuration tool to send configuration SMS commands
- Access to the official GlobalSat documentation or support tools for firmware specific guidance
- Basic knowledge of whether the deployment requires UDP or TCP transport

## How This Tracker Connects to Plaspy

The TR-616 can be configured to send position and device data to the Plaspy server endpoint so the device appears in the Plaspy platform and reports telemetry for monitoring and reporting.

- The tracker posts GPS and device data to the Plaspy server at 54.85.159.138 on port 8888
- Plaspy accepts connections over UDP or TCP and automatically detects the tracker protocol
- After configuration the device becomes visible in Plaspy and can be monitored for location and status updates
- Remote control or rebooting can be performed using the device SMS command workflow if supported by the install

## Common Configuration Workflow

1. Access the official GlobalSat configuration method such as the vendor SMS commands or the provided configuration tool.
2. Enter the Plaspy server address either as the server domain or the server IP. Use d.plaspy.com or 54.85.159.138 when prompted for server endpoint.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Populate APN values and any required authentication placeholders such as [apn], [apnu], and [apnp].
6. Send or apply the configuration and save settings on the device.
7. Restart or reboot the device if required by the manufacturer to apply changes.
8. Validate that the device reports to Plaspy and appears in the platform's device list.

## Example Configuration Commands

The TR-616 manufacturer content includes an SMS configuration command template. The following templates are provided exactly as in the public configuration content. Preserve the placeholders and compute the checksum that follows the asterisk. The checksum is the XOR of all characters in the command before the asterisk, represented as a two character uppercase hexadecimal string.

Setup command template
- Replace {{imei}} with the device IMEI
- Replace [apn], [apnu], and [apnp] with your SIM APN, APN username, and APN password respectively
- This template sets the server IP to Plaspy and the port to 8888

```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command template (optional after configuration)
- Use this command to reboot the device remotely after applying settings

```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation
- Compute the checksum as an XOR of every character in the command string up to but not including the '*' character
- Convert the XOR result to a two digit uppercase hexadecimal string and substitute it into {{checksum}} or {{checksumreeboot}}

Note: The public content also shows an example header format used by the manufacturer tools. Use the exact templates above and replace placeholders. Do not remove the final exclamation mark.

## Configuration Notes

- The TR-616 supports SMS based configuration as shown in the public template, but manufacturer tools or firmware updates may add alternative configuration methods.
- Firmware version and hardware revision can change supported command parameters and syntax. Always confirm commands against the device firmware documentation when available.
- Choose UDP or TCP based on your network and carrier behavior. Plaspy accepts both and will auto detect the tracker protocol.
- The Plaspy configuration uses the same port 8888 for all devices in the platform, so keep the port consistent across device setups.
- Ensure the IMEI used in SMS commands exactly matches the device IMEI to avoid configuration failure.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat TR-616 to report to Plaspy gives fleet operators a straightforward path to capture real time GPS positions and device status in a single platform. Using the shared Plaspy server settings simplifies deployment because the same endpoint and port are used for supported trackers and Plaspy handles protocol detection automatically.

Learn more about Plaspy and how it can centralize device visibility and operational monitoring at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer guidance please verify setup instructions on the GlobalSat website https://www.globalsat.com.tw/ as device procedures and firmware may change over time.
