---
slug: /suntech/st_300v/configuration
id: st_300v-configuration
sidebar_label: Configuration
title: Suntech - ST 300V Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for Suntech ST 300V to run with Plaspy including server settings SMS commands and setup notes
keywords:
  - Suntech ST 300V configuration
  - Suntech ST 300V server configuration
  - Suntech ST 300V setup
  - ST 300V Plaspy
  - Suntech GPS tracker configuration
  - vehicle tracker configuration
  - fleet tracker setup
  - Suntech setup guide
  - Plaspy tracker configuration
  - GPS platform setup
---

# Suntech - ST 300V Configuration

This page covers the public configuration context for using the Suntech ST 300V tracker with the Plaspy tracking platform. It focuses on the practical server settings, SMS command examples, and the workflow required to point an ST 300V device to Plaspy so it can report position and status to your Plaspy account. Where useful, manufacturer-provided SMS commands are presented in cleaned-up form.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST 300V supports SMS and GPRS configuration methods; the examples below show the common SMS-based commands and the registry of the Plaspy server endpoint that make the device visible in Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the ST 300V so it reliably communicates with Plaspy and to validate that the device is visible in the platform. For the ST 300V, that typically means calculating the device ID from the IMEI, sending the proper SMS configuration commands or using the manufacturer tool, and confirming telemetry arrives at Plaspy.

- Compute the device ID from the tracker IMEI and use it in SMS or tool-based commands.
- Configure the device GPRS server settings to point to Plaspy (server and port).
- Set reporting intervals and any transport choice required by the device.
- Validate the device registers and sends data to Plaspy so it appears in the platform.
- Use the provided verification command to review device configuration after provisioning.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All devices in Plaspy use the same port and the platform will detect the correct protocol automatically.

## Typical Requirements Before Setup

- Device IMEI available so you can derive the device ID used in Suntech commands
- A working SIM card with data enabled and correct APN settings for the mobile operator
- Access to the device for SMS configuration or the manufacturer configuration tool
- Power and antenna connections verified so the device can register to the network
- Credentials or APN username and password if your operator requires them (placeholders kept below)
- Access to Plaspy account to confirm the tracker appears after configuration

## How This Tracker Connects to Plaspy

When configured, the ST 300V sends location and device data to Plaspy over the GPRS data channel or as otherwise supported by the device. The critical step is pointing the tracker to Plaspy's shared server endpoint and port so Plaspy can receive and interpret the telemetry.

- The tracker is configured to report to the Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Transport can be UDP or TCP depending on your selection during setup.
- Plaspy automatically detects the tracker protocol on connection so no per-device protocol selection in the platform is required.
- Reporting intervals control how frequently the device sends updates to Plaspy.
- Once the device is sending data to the Plaspy endpoint, the device becomes visible and can be monitored in the platform.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 300V — either SMS commands or the vendor software/tool described in Suntech documentation.
2. Derive the Plaspy device ID from the IMEI (see commands section). Use that device ID in SMS commands or the tool.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the server field.
4. Set the port to 8888 in the device network configuration.
5. Choose UDP or TCP transport if the device requires a transport selection during setup.
6. Apply or save the configuration on the device and restart the tracker if required by the manufacturer.
7. Validate that the device is reporting to Plaspy and that position updates are visible in your Plaspy account.

## Example Configuration Commands

The ST 300V supports SMS-based configuration. The manufacturer provides commands in this form; below they are cleaned up for direct use. The device ID used by Suntech commands is the 9 digits formed by IMEI digits 6 through 14 (that is, the last 9 digits of the 15 digit IMEI excluding the final digit). Example: if the IMEI is 12345 678901234 5 then the device ID is 678901234.

- Reset command (optional initial reset)
```text
ST300CMD;{{device_id}};02;Reset
```
Label this command optional or use only when a factory reset is required.

- Set operator APN and GPRS server
Notes: The fourth field is 1 if APN username or password are provided, otherwise use 0. Preserve the APN placeholders {{apn}}, {{apnu}}, and {{apnp}} exactly and replace them with the operator APN, username, and password as needed.
```text
ST300NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;
```
If you do not have a username or password for your APN, set the fourth field to 0 and keep the username and password fields empty.

- Set reporting interval to 60 seconds
```text
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Check current settings
```text
ST300CMD;{{device_id}};02;PresetA
```

Use an SMS-capable phone to send these commands to the device or adapt them for the vendor configuration tool. Replace {{device_id}} with the nine-digit ID derived from the IMEI and replace the APN placeholders with the correct operator values.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or behavior; confirm syntax with the Suntech ST 300V documentation for your firmware.
- The device supports both SMS-based and GPRS/server-based configuration; use SMS when remote provisioning is required or the vendor tool when available.
- Choose UDP or TCP according to your network reliability needs; Plaspy accepts connections on both transports and will auto-detect the protocol.
- Ensure the APN and any operator credentials are entered correctly; the ST300NTW command includes placeholders {{apn}}, {{apnu}}, and {{apnp}} for these values.
- All devices in Plaspy use the same port and the platform will detect the tracker protocol automatically when the tracker connects.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST 300V to report to Plaspy provides centralized visibility and vehicle monitoring for fleet operations. Using Plaspy's shared server endpoint simplifies device provisioning because one consistent server and port are used across supported trackers, and Plaspy's automatic protocol detection reduces per-device protocol configuration in the platform.

Learn more about Plaspy and how it supports GPS trackers like the Suntech ST 300V at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and detailed installation instructions, verify the official Suntech documentation at http://www.suntechint.com/ as manufacturer specifications and setup methods can change over time.
