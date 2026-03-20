---
slug: /suntech/st_330/configuration
id: st_330-configuration
sidebar_label: Configuration
title: Suntech - ST 330 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 330 GPS tracker setup and Plaspy compatibility using shared server settings
keywords:
  - Suntech ST 330 configuration
  - Suntech ST330 setup
  - ST 330 Plaspy configuration
  - Suntech tracker server settings
  - ST 330 SMS configuration
  - Suntech GPS tracker setup
  - ST 330 APN settings
  - vehicle tracking platform configuration
  - Plaspy tracker setup
  - container tracker configuration
---

# Suntech - ST 330 Configuration

This page covers the public configuration context for using the Suntech ST 330 tracker with the Plaspy platform. It gathers practical, manufacturer-provided SMS command examples and the Plaspy server settings you will need to register and begin receiving device reports in Plaspy. Use this guide to prepare the ST 330 for communication with Plaspy and to validate that your device is visible in the platform.

Plaspy uses shared server settings across supported devices and performs automatic protocol detection for incoming tracker connections, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST 330 often uses SMS-based configuration for network and reporting parameters; this page shows how the public SMS commands map to Plaspy settings and what to check before and after applying them.

## Configuration Overview

The goal of configuration is to ensure the ST 330 can reach Plaspy reliably and report position and status updates so assets such as containers and dry boxes are visible and monitored. The public setup steps focus on setting the device network parameters, the Plaspy server endpoint, and the reporting cadence.

- Calculate and use the device ID derived from the IMEI when sending SMS configuration commands.
- Configure the device APN and the Plaspy server address so the tracker can establish GPRS data connections.
- Set the device reporting interval to match your monitoring needs and battery life expectations.
- Verify the tracker is sending to the shared Plaspy endpoint and appears in the Plaspy platform.
- Use SMS or the manufacturer tool documented for the ST 330 to apply commands and confirm settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public Plaspy connection settings you should use when configuring the ST 330 network/server parameters.

## Typical Requirements Before Setup

- A charged and operational ST 330 with a readable IMEI.
- An active SIM card provisioned for data (GPRS) and able to receive SMS for SMS-based configuration.
- Access to the ST 330 SMS command method or the official Suntech configuration tool or installer documentation.
- The device IMEI to calculate the device ID (the ST 330 uses the last 9 digits of the IMEI excluding the final check digit).
- Knowledge of the operator APN and optional APN username and password if your SIM requires authentication.
- Ability to receive confirmation messages from the device or to verify device reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The ST 330 is configured to send its location and device status to the shared Plaspy server endpoint and port so assets are visible in the Plaspy platform. Configuration ensures the device will open a data connection to the Plaspy server and transmit periodic reports.

- The device is pointed to the Plaspy server (d.plaspy.com or 54.85.159.138) and port 8888.
- Transport can be set to UDP or TCP depending on device firmware or installer preference.
- Plaspy automatically detects the tracker protocol when the device connects to the shared server port.
- Reports from the tracker allow visibility and monitoring of location and basic operational status within Plaspy.
- After configuration, validate device presence and recent positions in Plaspy to confirm connectivity.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 330 (SMS commands or an approved Suntech tool) and confirm the IMEI.
2. Calculate the device ID from the IMEI: use the last 9 digits of the IMEI excluding the final check digit.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address and set port 8888 in the device configuration.
4. Choose UDP or TCP as the transport if the device requests a selection.
5. Set the operator APN and any necessary APN username and password (or leave blank if not required).
6. Apply or save the configuration on the device and restart the tracker if recommended by the manufacturer.
7. Validate that the device reports to Plaspy by checking device activity and recent position data in the Plaspy platform.

## Example Configuration Commands

The ST 330 can be configured by SMS. The device ID used in these commands is the last 9 digits of the IMEI excluding the final digit. For example, if IMEI is 123456789012345 the device ID would be the substring characters representing the last 9 digits before the final digit as described above.

1) Optional initial factory reset (use only if you need to restore defaults):
```
ST300CMD;[DEVICE_ID];02;Reset
```
Label: Reset factory settings (optional initial step).

2) Set operator APN and GPRS server
- If the SIM provider does not require APN username or password, set the authentication flag to 0:
```
ST300NTW;[DEVICE_ID];02;0;[apn];;;54.85.159.138;8888;;;;
```
- If the SIM provider requires APN username or password, set the authentication flag to 1 and include credentials:
```
ST300NTW;[DEVICE_ID];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
Notes:
- [DEVICE_ID] is the last 9 digits of the IMEI excluding the final digit.
- [apn] is the operator APN placeholder.
- [apnu] is the APN username placeholder.
- [apnp] is the APN password placeholder.
- You may substitute d.plaspy.com for 54.85.159.138 if the device accepts hostnames.

3) Set update/report interval to 60 seconds (example reporting cadence):
```
ST300RPT;[DEVICE_ID];02;60;60;60;3;0;0;0;0;0
```
Label: Configure periodic reporting intervals.

4) Verification command to request current presets or settings:
```
ST300CMD;[DEVICE_ID];02;PresetA
```
Label: Check current device settings.

Preserve the order: reset (optional), network/server, reporting, then verification. Replace placeholders before sending. Always confirm the exact SMS formatting required by your device firmware.

## Configuration Notes

- Suntech firmware versions and carrier environments can change how SMS commands are parsed; confirm syntax against current manufacturer documentation.
- The ST 330 supports SMS-based setup in the public examples above; some installers may prefer a Suntech configuration tool when available.
- Choose UDP or TCP based on network conditions or installer guidance; Plaspy accepts both and automatically detects the protocol.
- Plaspy uses the same port 8888 for all supported devices, so the port value does not change between trackers.
- If you send APN credentials, ensure you set the authentication flag to 1 in the ST300NTW command so the device will attempt authenticated GPRS.

## Why Use Plaspy with This Configuration

Using the Suntech ST 330 with Plaspy provides consistent server settings and automatic protocol detection so you can focus on installation and monitoring rather than per-device server variations. Plaspy’s shared endpoint approach simplifies onboarding multiple devices by using the same port and server address for supported trackers.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the Suntech website http://www.suntechint.com/
