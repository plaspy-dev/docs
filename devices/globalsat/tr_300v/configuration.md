---
slug: /globalsat/tr_300v/configuration
id: tr_300v-configuration
sidebar_label: Configuration
title: GlobalSat - TR-300V Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat TR 300V to connect to Plaspy with server settings and SMS command examples
keywords:
  - GlobalSat TR-300V configuration
  - TR-300V setup
  - TR-300V Plaspy configuration
  - GlobalSat tracker configuration
  - GPS tracker setup Plaspy
  - personal tracker TR-300V
  - TR-300V SMS configuration
  - tracker server settings Plaspy
  - GPRS tracker setup
  - device configuration guide
---

# GlobalSat - TR-300V Configuration

This page describes the public configuration context required to connect a GlobalSat TR-300V tracker to the Plaspy fleet management platform. It focuses on the practical server settings and example SMS commands that are commonly used to prepare the device for communication with Plaspy. The guidance here uses publicly available information and the example SMS templates included with the TR-300V configuration notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reaches the Plaspy endpoint. Manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, or vendor toolset. Where applicable this guide includes the SMS based configuration pattern that the TR-300V accepts and explains how to assemble the command and checksum for use with Plaspy.

## Configuration Overview

Preparing a TR-300V for integration with Plaspy means configuring the device to reach the Plaspy server with correct network parameters and validating that reports arrive in the platform. The example commands below show how the TR-300V can be set using SMS configuration including APN placeholders and Plaspy server values.

- Configure the device network and APN settings so the TR-300V can use GPRS to send data to the platform.
- Point the device to the Plaspy server endpoint (domain or IP) and the shared Plaspy port so data flows to the correct destination.
- Choose the transport protocol (UDP or TCP) if the device requires an explicit selection and save the configuration.
- Reboot or apply settings so the tracker restarts with the new server configuration.
- Verify connectivity by confirming the device appears and sends updates to Plaspy.
- Use the provided SMS templates and checksum mechanism to ensure commands are accepted by the TR-300V.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol after the device connects

Note: Plaspy uses the same port for all supported devices which simplifies configuration across different tracker models.

## Typical Requirements Before Setup

- A charged TR-300V with a working SIM card that has data and SMS enabled where GPRS or SMS configuration is required.
- The device IMEI number available for use in SMS configuration templates.
- Access to the manufacturer's accepted configuration method for your device variant such as SMS commands or the official GlobalSat configuration tool.
- Network coverage for 3G where the TR-300V will operate.
- Permission to send SMS commands to the device phone number and a way to receive any device responses.

## How This Tracker Connects to Plaspy

The TR-300V is configured to send periodic location updates and event reports to the shared Plaspy endpoint and port. Once the tracker reaches the Plaspy server, the platform detects the tracker protocol automatically and processes the incoming data for visibility and monitoring.

- The device reports to the Plaspy server domain d.plaspy.com or the equivalent server IP 54.85.159.138 on port 8888.
- The configuration can use either UDP or TCP transport depending on the device firmware and your preference.
- Plaspy automatically detects the tracker protocol so the platform can interpret messages from the TR-300V without manual protocol selection in Plaspy.
- After configuration, the tracker sends location and event data which becomes visible in the Plaspy platform for monitoring and alerts.
- Successful configuration lets monitoring centers and administrators validate device operation and event reporting in Plaspy.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for your TR-300V variant, typically SMS commands or the manufacturer tool.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by the device UI or SMS template.
3. Set the port to 8888 which is the shared Plaspy port for all devices.
4. If the device requires transport selection, choose UDP or TCP according to your network policy and the device firmware capability.
5. Apply or save the configuration on the device and send any required confirmation SMS commands.
6. Restart or reboot the device if required to load the new settings.
7. Validate that the device reports to Plaspy by checking for incoming messages and device presence in the platform.

## Example Configuration Commands

The TR-300V supports SMS based configuration. The following templates are derived from public device command examples. Replace placeholders with your device information before sending. The example uses placeholders such as {{imei}}, [apn], [apnu], [apnp], and checksum tokens that must be computed and substituted.

- Notes about placeholders:
  - {{imei}} — replace with the device IMEI number.
  - [apn], [apnu], [apnp] — APN name, APN username, and APN password placeholders. Provide values required by your mobile operator.
  - {{checksum}} and {{checksumreeboot}} — two digit uppercase hexadecimal checksums computed over the command string before the asterisk as described below.

- Plaspy batch prefix example used in some vendor flows:
  - Format used by Plaspy TSPRXAB27GHKLMnaicz*U!

- Main setup command template
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Optional reboot command template (use if a reboot is required after applying settings)
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation (public example):
- The TR-300V example checksum is produced by XORing the character codes of the command text that precedes the '*' character and converting the result to a two character uppercase hexadecimal value. Insert that hex value in place of {{checksum}} or {{checksumreeboot}}.
- Compute checksum on the full command string up to but not including the asterisk. The resulting hex must be two characters and uppercase.

Example assembly steps:
1. Replace {{imei}} and APN placeholders with actual values.
2. Build the command string up to the '*' character.
3. Calculate the XOR checksum and convert to a two digit uppercase hexadecimal string.
4. Append the checksum followed by '!' and send the completed SMS to the device phone number.

## Configuration Notes

- The TR-300V supports SMS and GPRS configuration commands; use the method appropriate to your deployment and the firmware on the unit.
- Firmware and hardware revisions may change the exact command syntax or available fields. Always verify command formats against the device manual for your firmware revision.
- Choosing UDP or TCP is a device level option; TCP may provide more reliable delivery on some networks while UDP can be lighter weight. Plaspy accepts both transports on the shared port.
- APN credentials must match the mobile operator. Keep APN placeholders [apn], [apnu], and [apnp] available in templates so you can substitute operator values.
- If a reboot step appears in your workflow, label it as optional unless your manufacturer instructions require it to apply settings.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat TR-300V to report to Plaspy centralizes device visibility and event reporting for monitoring teams and operational staff. Using the shared Plaspy endpoint and the common port simplifies device provisioning across a mixed fleet and lets Plaspy automatically detect and parse the tracker protocol, reducing setup complexity on the server side.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific instructions, firmware notes, and command references verify details on the manufacturer site https://www.globalsat.com.tw/ as device behavior and configuration methods may change over time.
