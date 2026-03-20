---
slug: /maxtrack/mxt_160/configuration
id: mxt_160-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-160 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Maxtrack MXT-160 showing how to point the tracker to Plaspy with example SMS commands and required settings
keywords:
  - Maxtrack MXT-160 configuration
  - Maxtrack MXT-160 setup
  - Maxtrack MXT-160 server configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - MXT-160 SMS setup
  - MXT-160 GPRS tracking
  - Maxtrack GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker configuration
---

# Maxtrack - MXT-160 Configuration

This page covers the public configuration context for using the Maxtrack MXT-160 tracker with Plaspy. It collects the practical server settings and example commands that are commonly used to point the MXT-160 to Plaspy so the device can report location and basic telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MXT-160 supports SMS configuration in its public guidance and may be set via the provided command format shown below.

## Configuration Overview

This configuration process prepares the MXT-160 to communicate with Plaspy so the device appears in the platform and reports data reliably. The example command provided in manufacturer guidance uses SMS to set the device password, device ID, APN placeholders, and the Plaspy server endpoint so the tracker can send GPRS data to Plaspy.

- Configure the tracker to report to the Plaspy server endpoint and port so data reaches the platform
- Set APN and SIM related placeholders so the device can use GPRS for data reporting
- Provide the device ID and verify the tracker authenticates correctly with the server
- Validate transport selection (UDP or TCP) and confirm connectivity to Plaspy
- Test reporting and visibility in Plaspy after the device is restarted or saved

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the MXT-160:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- A powered MXT-160 unit with a functioning SIM card and GPRS service enabled if using data reporting
- Access to the device configuration method supported by your unit such as SMS commands or official Maxtrack configuration tools
- The device ID or IMEI value to include in configuration commands or platform registration
- Knowledge of the mobile carrier APN settings for the SIM card used by the tracker
- A phone capable of sending SMS to the tracker if using SMS based configuration
- Access to manufacturer documentation for any device specific command variations or firmware notes

## How This Tracker Connects to Plaspy

When configured for Plaspy the MXT-160 will use its GPRS connection to send position and event data to the shared Plaspy server endpoint and port. Plaspy receives messages on the same port for all devices and detects the protocol automatically so incoming data is parsed and associated with the correct device.

- The tracker is pointed to the Plaspy server endpoint 54.85.159.138 on port 8888
- Transport can be selected as UDP or TCP according to device firmware or settings
- The device sends position and event reports to Plaspy where they become visible in the platform
- Plaspy identifies the tracker protocol automatically and parses messages for display and alerts
- Successful configuration enables operational monitoring and event reporting in Plaspy

## Common Configuration Workflow

1. Access the official Maxtrack configuration method for your MXT-160 model such as the SMS command interface or vendor configuration tool.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration fields or commands.
3. Set the server port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the tracker requires a transport selection during configuration.
5. Provide APN settings and the device ID as required by the MXT-160 configuration format.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the MXT-160 reports to Plaspy and appears in the platform, checking for position updates and expected events.

If you use SMS based setup for the MXT-160, follow the manufacturer SMS formatting and send commands from an authorized phone number.

## Example Configuration Commands

The MXT-160 public guidance includes an SMS configuration example. The manufacturer notes the default device password is 0000. Replace placeholders with your actual values before sending.

- Default password used in SMS commands
  - 0000 is the device default password in the example below

- Example SMS configuration command
```text
0000,[trackerID],2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

Explanation of placeholders:
- [trackerID] — replace with the device ID or IMEI as required by the command format
- [apn] — replace with your mobile carrier APN
- [apnu] — replace with APN username if required by the carrier; leave blank if not used
- [apnp] — replace with APN password if required by the carrier; leave blank if not used

Notes:
- The example uses the Plaspy server IP 54.85.159.138 and port 8888. If your firmware accepts hostnames you may alternatively use d.plaspy.com where the device supports it.
- Send the SMS from an authorized number if the tracker enforces phone authorization for remote configuration.

## Configuration Notes

- SMS configuration is supported in the provided public example but manufacturer tools or PC configuration utilities may offer alternate methods.
- The device example uses the default password 0000 in its SMS command; change device credentials where possible for security after initial setup.
- Firmware versions and hardware revisions can change the exact command syntax or supported parameters; always confirm the syntax for your firmware.
- TCP versus UDP selection may affect delivery behavior under certain network conditions; choose the transport the device and your deployment prefer.
- If configuration does not take effect immediately, check carrier GPRS connectivity and retry after a device restart.

## Why Use Plaspy with This Configuration

Using the Maxtrack MXT-160 with Plaspy gives organizations a straightforward path to fleet visibility and basic operational monitoring. The MXT-160's compact and robust design combined with Plaspy's shared server and automatic protocol detection makes it practical to deploy devices at scale while pointing them to a consistent endpoint and port for reporting.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify any device specific configuration steps, firmware behavior, and the latest setup details with the manufacturer at https://maxtrack.com.br as vendor specifications and command syntax can change over time.
