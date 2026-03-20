---
slug: /sentar/d31/configuration
id: d31-configuration
sidebar_label: Configuration
title: Sentar - D31 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for Sentar D31 GPS watch configuration and Plaspy compatibility for real time tracking
keywords:
  - Sentar D31 configuration
  - Sentar D31 setup
  - Sentar D31 Plaspy
  - Sentar GPS tracker configuration
  - D31 server configuration
  - D31 SMS setup
  - D31 APN settings
  - D31 tracking platform setup
  - Plaspy device configuration
  - wearable GPS tracker setup
---

# Sentar - D31 Configuration

This page covers the public configuration context for using the Sentar D31 GPS watch with Plaspy. It explains the shared server settings Plaspy expects, outlines practical setup steps you can follow, and presents the vendor SMS commands that are commonly used to prepare the D31 for real time tracking with Plaspy. Use this guide to understand what is required before integrating a D31 device into your Plaspy account.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps for the D31 can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands here as public examples drawn from the device documentation and verify details with Sentar when needed.

## Configuration Overview

The goal of this configuration is to ensure the D31 reports location and device status reliably to Plaspy. For the D31, configuration often uses SMS commands to set APN and server details, plus optional factory reset and reporting interval adjustments.

- Configure the D31 so it knows the Plaspy server endpoint and uses the shared Plaspy port
- Provide the device with a working APN so it can upload via cellular data
- Set the upload interval so Plaspy receives timely location and status updates
- Validate connectivity and confirm the device appears in Plaspy after configuration
- Preserve the device default password and confirm security settings before deployment

## Plaspy Server Settings

Use these public Plaspy settings when configuring the D31:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will attempt to identify the device protocol automatically after the tracker begins sending data.

## Typical Requirements Before Setup

- A charged and powered Sentar D31 with a working Nano SIM installed and data enabled
- The correct APN details from the mobile operator
- Access to SMS from a phone number authorized to send configuration messages to the device
- The device default password (manufacturer default is 123456 as shown in public commands)
- Basic knowledge of whether the device requires UDP or TCP selection for transport
- Access to official Sentar documentation or vendor support for firmware specific command syntax

## How This Tracker Connects to Plaspy

The D31 is configured to upload position and status messages to the shared Plaspy server endpoint and port. Plaspy receives those uploads, auto detects the protocol, and maps the incoming telemetry to the device in your Plaspy account.

- The tracker sends periodic location uploads to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy ingests location fixes and device telemetry for live tracking and history
- SOS and alert events from the D31 are forwarded to Plaspy for caregiver notification
- Device connectivity and battery telemetry are visible in Plaspy for operational monitoring
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required in the platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the D31 (Sentar SMS commands are commonly used).
2. Optionally perform a factory reset if you need to clear previous settings or for initial provisioning.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 into the device configuration.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP on the device if the D31 requires explicit transport selection.
6. Configure the operator APN and any APN username or password placeholders as required by the SIM operator.
7. Apply or save the configuration and restart the device if required by the device firmware.
8. Validate that the device reports to Plaspy and appears in your Plaspy account within a few upload cycles.

## Example Configuration Commands

The following SMS commands are public examples taken from the Sentar D31 configuration references. The sample device password shown is 123456 and is the default in these examples. Send each command as an SMS to the device number. Preserve placeholders and replace them with your operator values where indicated.

- Factory reset (optional initial setup)
```text
pw,123456,factory#
```

- Set timezone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check MCC and MNC (IMSI query)
```text
pw,123456,imsi#
```

- Set the operator APN
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: [apn] is the operator APN name, [apnu] is the APN username, [apnp] is the APN password. Replace xxxyy with the mobile network MCC and MNC concatenated as provided by the operator.

- Set GPRS server to Plaspy by IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```
Note: This command is the public form shown in the vendor example. If your device requires comma separation between the password and the ip keyword, consult the Sentar documentation for exact syntax.

- Set the update interval to 300 seconds
```text
pw123456,upload,300#
```

- Check current settings
```text
pw,123456,ts#
```

If your device uses slightly different separators or parameters in SMS commands, follow the Sentar instruction set for your firmware. The order above reflects common setup practice: reset if needed, set timezone and APN, set the server endpoint to Plaspy, configure upload interval, then verify settings.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and accepted parameters; verify commands against the Sentar manual for your device version.
- SMS based configuration is a common public method for the D31 but vendor tools or provisioning software may also be available; use the official Sentar tools when possible.
- Choose UDP or TCP according to device requirements; Plaspy accepts both transports on the shared port.
- Plaspy uses port 8888 for all devices and automatically detects the tracker protocol, so you only need to ensure the device points to the correct endpoint.
- When setting APN values keep placeholders such as [apn], [apnu], and [apnp] until you replace them with operator values; incorrect APN settings will prevent data uploads.

## Why Use Plaspy with This Configuration

Pairing the Sentar D31 with Plaspy provides caregivers and administrators centralized visibility into location, device health, and emergency events from a wearable form factor. Using the shared Plaspy server endpoint and port simplifies provisioning across devices because Plaspy automatically detects the tracker protocol and ingests the device telemetry once the D31 is pointed to d.plaspy.com or 54.85.159.138 on port 8888.

To learn more about Plaspy and how it can centralize tracking for devices like the Sentar D31 visit https://www.plaspy.com. For the most current manufacturer specific commands, firmware details, and device instructions verify the latest information on the Sentar website http://www.sentarsmart.com/ as vendor setup methods and firmware behavior may change over time.
