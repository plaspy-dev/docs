---
slug: /globalsat/lw_360hr/configuration
id: lw_360hr-configuration
sidebar_label: Configuration
title: GlobalSat - LW-360HR Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the GlobalSat LW-360HR wearable tracker to Plaspy using the shared Plaspy server settings
keywords:
  - GlobalSat LW-360HR configuration
  - LW-360HR setup Plaspy
  - GlobalSat GPS tracker configuration
  - Plaspy server settings
  - LoRaWAN GPS tracker setup
  - wearable GPS configuration
  - LW 360HR SMS setup
  - tracker IMEI configuration
  - Plaspy tracker integration
  - GPS tracking platform setup
---

# GlobalSat - LW-360HR Configuration

This page documents the public configuration context for using the GlobalSat LW-360HR wearable GPS tracker with Plaspy. It focuses on the practical server settings and example commands that are publicly available for preparing the device to report into Plaspy. Use this as a technical reference for integrating the LW-360HR with the Plaspy platform while following any additional manufacturer instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools. The example commands shown here are drawn from public setup content and demonstrate the SMS command flow the LW-360HR can accept for configuring reporting to Plaspy.

## Configuration Overview

The goal of LW-360HR configuration for Plaspy is to point the tracker at the Plaspy server, set transport parameters, and validate that location and telemetry are visible in the Plaspy platform. Where available, configuration may be performed by SMS commands or the device provisioning tool provided by the manufacturer.

- Configure the device to send telemetry and location to the Plaspy server endpoint.
- Set transport and port parameters required by Plaspy and the tracker firmware.
- Supply APN or connectivity placeholders if the device requires cellular data setup via SMS.
- Reboot or save configuration so the tracker begins reporting to Plaspy.
- Validate the device IMEI and ensure Plaspy shows the device online and sending data.
- Preserve manufacturer checksum and command format when sending SMS configuration commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint details to be entered into the LW-360HR configuration fields or SMS commands when preparing the device for use with Plaspy. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- Know the device IMEI and have it available for use in configuration commands.
- Access to the official manufacturer configuration method such as SMS, the vendor provisioning app, or a local configuration tool.
- An SMS capable phone or service if you will send configuration SMS commands to the tracker.
- A charged and powered device that can accept configuration commands.
- Network access or a LoRaWAN gateway and Plaspy account to validate reporting once the device is configured.
- Basic knowledge of placeholders such as APN, APN user, and APN password when cellular parameters are required.

## How This Tracker Connects to Plaspy

The LW-360HR is configured to send location and telemetry to the shared Plaspy server endpoint and port. For Plaspy, the device is pointed at the Plaspy server and the selected transport protocol so the platform can receive and parse messages automatically.

- The tracker is configured to use the Plaspy server domain or IP and port to forward telemetry.
- Plaspy receives and automatically detects the tracker protocol and associates incoming data with the device IMEI.
- Once the device reports, location, SOS, and telemetry are visible in Plaspy for monitoring and alerts.
- Transport can be set to UDP or TCP on port 8888 depending on the tracker configuration option.
- Confirmation of successful connection is done by observing the device heartbeat or initial position reports in Plaspy.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the LW-360HR such as SMS commands or the manufacturer's provisioning tool.
2. Prepare the device IMEI and any APN details required by the device for data connectivity.
3. Enter the Plaspy server endpoint by name or IP. Use d.plaspy.com or 54.85.159.138 in the server setting.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP transport if the device requires selecting a transport mode.
6. Apply or save the configuration and perform a device restart or send the reboot command if required.
7. Validate that the device reports to Plaspy and that location and telemetry appear in the Plaspy interface.

If you use SMS-based configuration, follow the exact manufacturer command format and include the IMEI and checksum as required by the device firmware.

## Example Configuration Commands

The public configuration content for the LW-360HR shows SMS commands that can be sent to configure the tracker to report to Plaspy. The manufacturer format note indicates a specific command framing is required. Preserve placeholders exactly when preparing commands.

Note: The example commands below use placeholders. Replace {{imei}} with the device IMEI and fill [apn], [apnu], and [apnp] with the APN, APN user, and APN password if your deployment requires cellular APN parameters. The {{checksum}} and {{checksumreeboot}} placeholders represent the hexadecimal checksum calculated over the command text before the asterisk as required by the device.

Format header used in public examples
TSPRXAB27GHKLMnaicz*U!

1) Setup command to point the tracker to Plaspy and set APN placeholders and server values
```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Explanation:
  - Replace {{imei}} with the tracker IMEI.
  - D1, D2, D3 correspond to APN, APN username, and APN password placeholders.
  - E0 sets the server IP to 54.85.159.138 and E1 sets the port to 8888.
  - A1=1 is a parameter included in the public command string; keep it as shown unless manufacturer docs indicate otherwise.
  - {{checksum}} is the device checksum value computed over the command portion before the asterisk.

2) Optional reboot command to restart the device after configuration
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

- Explanation:
  - This reboot command is shown in the public configuration flow and is optional when a restart is required for changes to take effect.
  - Replace {{imei}} and compute {{checksumreeboot}} as required.

Checksum calculation summary
- The public example includes a simple checksum routine: compute an XOR checksum over the characters of the command string up to but not including the '*' character, convert the result to a two character uppercase hexadecimal value, and insert that value where {{checksum}} or {{checksumreeboot}} is shown. Many manufacturer tools compute this automatically for you.

## Configuration Notes

- The LW-360HR public commands demonstrate an SMS based configuration flow; use an SMS capable phone or provisioning tool to send the commands exactly as formatted.
- Checksum and exact framing matter. If you use a manufacturer app or tool it may compute the checksum and format automatically.
- TCP versus UDP selection affects transport; Plaspy supports either but ensure the tracker transport selection matches the chosen protocol.
- Firmware and hardware revisions can change commands and parameter names. Always verify command names and parameters against the official GlobalSat documentation for your device build.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device sends data to the configured endpoint.

## Why Use Plaspy with This Configuration

Using Plaspy with the LW-360HR provides a unified endpoint for wearable location, SOS, and telemetry reporting so organizations can monitor location and health data alongside other assets in a single platform. The shared Plaspy server settings simplify provisioning because the same port and detection mechanisms are used across supported devices.

Learn more about Plaspy and how it can organize device reporting and alerts at https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and command references verify current information with the manufacturer at https://www.globalsat.com.tw/ as methods and firmware behavior can change over time.
