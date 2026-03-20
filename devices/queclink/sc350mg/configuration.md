---
slug: /queclink/sc350mg/configuration
id: sc350mg-configuration
sidebar_label: Configuration
title: QuecLink - SC350MG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure QuecLink SC350MG tracker for use with Plaspy including SMS commands and Plaspy server settings
keywords:
  - QuecLink SC350MG configuration
  - SC350MG Plaspy setup
  - QuecLink tracker configuration
  - SC350MG server setup
  - Plaspy GPS tracker integration
  - E bike tracker configuration
  - SC350MG SMS commands
  - QuecLink device setup
  - GPS tracker server settings
  - Plaspy device configuration
---

# QuecLink - SC350MG Configuration

This page documents the public configuration context for using the QuecLink SC350MG tracker with Plaspy. It summarizes the practical steps, SMS configuration commands provided by the device documentation, and the shared Plaspy server settings required so the tracker can report location and event data to the platform.

Plaspy uses a shared server endpoint and automatically detects the tracker protocol during registration. Manufacturer setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; this guide focuses on the public settings and SMS commands available for the SC350MG and how to apply them for Plaspy compatibility.

## Configuration Overview

The goal of this configuration is to prepare the SC350MG so it can communicate reliably with Plaspy and become visible in the platform. The public commands below show a common SMS-based setup flow used with QuecLink devices and include server configuration, APN setup, reporting intervals, and optional factory reset.

- Configure the device to report to Plaspy using the shared server endpoint d.plaspy.com and port 8888.
- Provide the device with correct APN settings so it can establish cellular data connectivity and send GPRS reports.
- Set reporting intervals so location updates appear in Plaspy at the expected frequency.
- Optionally restore factory settings or enable inputs such as SOS reporting before deployment.
- Validate connectivity and confirm the device appears in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts data from QuecLink SC350MG without manual protocol selection in Plaspy

All QuecLink SC350MG devices configured for Plaspy should use these shared server values. Plaspy uses the same port for all supported devices.

## Typical Requirements Before Setup

- A powered SC350MG with access to its SMS configuration interface or manufacturer tool.
- An active SIM card with mobile data and SMS capability installed in the device and valid APN credentials.
- Knowledge of the device default password used in SMS commands; for the commands shown below the default password is queclink.
- A phone or SMS gateway capable of sending configuration SMS messages to the device.
- Access to QuecLink documentation or vendor tools to confirm firmware-specific differences and required command syntax.
- A working Plaspy account and device registration workflow on the platform ready to validate reporting after setup.

## How This Tracker Connects to Plaspy

The SC350MG is configured to send GPRS reports to the Plaspy server endpoint and port so the platform receives location and event messages. Once the device has valid APN and server configuration it will push telemetry to Plaspy for visibility and monitoring.

- The device reports GNSS location and status messages to d.plaspy.com using port 8888.
- Plaspy can accept connections via UDP or TCP on port 8888 according to the device transport selection.
- Plaspy automatically detects the tracker protocol so incoming messages are associated with the correct device type.
- Events such as SOS or input changes can be forwarded to Plaspy after enabling the corresponding inputs.
- After configuration the device should be validated in Plaspy to confirm telemetry and status messages are received.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the SC350MG (SMS commands or the manufacturer tool) to prepare the device for server configuration.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when setting the GPRS server entry.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport on the device if the device requires an explicit transport selection.
5. Provide APN settings for the cellular operator using the device APN command (use placeholders like [apn], [apnu], [apnp] where applicable).
6. Apply or save the configuration on the tracker and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and location updates in the platform.

## Example Configuration Commands

The SC350MG supports SMS configuration. The following public SMS commands are provided in the QuecLink example configuration. Send each line as an SMS to the device phone number. The default device password used in these commands is queclink.

Notes:
- If a command contains placeholders such as [apn], [apnu], or [apnp], replace them with your operator APN, APN username, and APN password respectively.
- The first command shown restores factory settings and is optional; use only when required.

1. Restore factory settings (optional initial reset)
   ```text
   AT+GTRTO=queclink,4,,,,,,FFFF$
   ```

2. Set the time zone to UTC+0
   ```text
   AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
   ```

3. Set the operator APN (replace placeholders)
   ```text
   AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
   ```
   - [apn] = your network APN
   - [apnu] = APN username if required
   - [apnp] = APN password if required

4. Set the GPRS server for Plaspy using both domain and IP entry (domain and IP are included in the command)
   ```text
   AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
   ```
   - This command sets the primary server to d.plaspy.com and includes the server IP 54.85.159.138 with port 8888.

5. Set the reporting interval to 60 seconds
   ```text
   AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
   ```

6. Enable SOS button notification on input 2
   ```text
   AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
   ```

After sending these SMS commands, allow the device to register on the network, then verify reporting on Plaspy.

## Configuration Notes

- SMS-based configuration is widely used for QuecLink devices; ensure your SMS messages are sent to the device phone number assigned to the installed SIM.
- Firmware revisions can change command syntax or available parameters; confirm commands against the SC350MG firmware notes from QuecLink.
- Choose UDP or TCP transport based on network conditions and installer preference; Plaspy supports both on port 8888.
- Preserve the default password usage pattern in commands or update the device password according to your security policy after initial setup.
- When using APN placeholders, confirm operator credentials with your SIM provider before sending configuration commands.

## Why Use Plaspy with This Configuration

Using the QuecLink SC350MG with Plaspy gives e‑bike operators and fleet managers centralized visibility into device location and events. The SC350MG's compact form and vehicle data capabilities combined with Plaspy's shared server endpoint make it practical to deploy many devices quickly while keeping server settings consistent across the fleet.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For device specific command references, firmware details, and the latest SC350MG technical documentation verify the official QuecLink resources at https://www.queclink.com/ as manufacturer specifications and setup methods can change over time.
