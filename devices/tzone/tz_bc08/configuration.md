---
slug: /tzone/tz_bc08/configuration
id: tz_bc08-configuration
sidebar_label: Configuration
title: TZone - TZ-BC08 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TZone TZ-BC08 for use with Plaspy using public SMS and server settings for reliable tracking
keywords:
  - TZone TZ-BC08 configuration
  - TZone TZ-BC08 setup
  - TZ-BC08 SMS configuration
  - TZ-BC08 GPRS setup
  - Plaspy server configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - tracker server settings
  - tracking platform setup
  - tracker protocol detection
---

# TZone - TZ-BC08 Configuration

This page documents the public configuration context for using the TZone TZ-BC08 with Plaspy. It focuses on the practical, published settings and SMS commands used to point compatible TZ-BC08 units to Plaspy so your device can report location data to the platform. Use this as a practical reference alongside the official manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact steps on the manufacturer side can vary by firmware, hardware revision, installation type, and vendor tools. The TZ-BC08 may be configured via SMS commands to set APN, reporting interval, and the GPRS server address so it can communicate with Plaspy’s centralized endpoint.

## Configuration Overview

This configuration prepares the TZ-BC08 so it can send periodic location and status updates to the Plaspy platform. The public SMS commands shown below demonstrate how to set the mobile operator APN, the reporting interval, the GPRS server, and the GPRS mode required for network reporting.

- Configure the mobile operator APN so the device can use mobile data for GPRS reporting.
- Set the device reporting interval to control how often position updates are sent.
- Point the tracker to the Plaspy server endpoint so messages are delivered to your account.
- Activate GPRS mode so the device uses mobile data to communicate with Plaspy.
- Validate connectivity and device visibility in Plaspy after applying settings.

## Plaspy Server Settings

When configuring the TZ-BC08 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Plaspy uses the same port for all supported devices and detects the correct protocol automatically, so pointing the tracker to d.plaspy.com or the server IP on port 8888 is sufficient in most cases.

## Typical Requirements Before Setup

- Ensure the device has power (installed battery or external power) and is ready to accept SMS commands.
- A working SIM card with data and SMS capability installed in the device and an active APN for the mobile operator.
- Access to a phone or SMS gateway capable of sending the configuration SMS commands to the device.
- Knowledge of the device management password used in SMS commands (example commands use 000000 as the password).
- Access to the official TZone documentation or configuration tool for reference and firmware-specific notes.
- A Plaspy account ready to receive new devices and verify device reporting.

## How This Tracker Connects to Plaspy

The TZ-BC08 is configured to report to the shared Plaspy server endpoint and port so location and status updates arrive in your Plaspy account. Once APN and server values are set and GPRS mode is enabled, the device will use the mobile network to deliver updates.

- Device sends periodic updates to Plaspy at the configured interval.
- Tracker uses GPRS (mobile data) to connect to Plaspy using the configured APN and server settings.
- Messages are sent to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Choose UDP or TCP transport on the device if required; Plaspy will accept either and detect the protocol automatically.
- Plaspy parses incoming messages and displays device status and position in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as documented by TZone.
2. Set the operator APN for the SIM so the device can use GPRS for data.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
4. Set port 8888 for the server connection.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device connectivity and recent position updates in your Plaspy account.

If you are using SMS-based configuration, follow the order of actions in the example commands below: APN, reporting interval, server address, then enable GPRS mode.

## Example Configuration Commands

To set the TZ-BC08 via SMS, send the following commands in order. These public commands were provided in the device configuration documentation. Each command uses the device management password at the start (example password shown as 000000).

1. Set the operator APN
- Basic form without username or password:
```text
*000000,011,[apn]#
```
- If your operator requires APN username and password, include them as placeholders:
```text
*000000,011,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and APN password placeholders.

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```
Explanation: This sets the reporting interval to 60 seconds. The final parameter (999) follows the device command syntax as published.

3. Set the GPRS server to Plaspy
```text
*000000,015,0,54.85.159.138,8888#
```
Explanation: This command sets the server IP and port. You may use the domain d.plaspy.com instead of the IP if the device accepts domain entries.

4. Activate GPRS mode
```text
*000000,016,1#
```
Explanation: Enables GPRS mode so the device uses mobile data to send updates to the configured server.

Notes on commands
- The initial "000000" in the examples is the device management password shown in the public commands. Replace this with your device password if different.
- Preserve placeholders like [apn], [apnu], and [apnp] when composing SMS commands; replace them with your operator values.
- Send commands in the order shown for initial setup: APN, interval, server, then GPRS activation.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters; always verify commands against the device manual for your unit.
- The TZ-BC08 may be configured by SMS as shown above; some installers also offer USB, Bluetooth, or software tools depending on the device version—refer to manufacturer documentation for alternatives.
- Choose UDP or TCP according to your deployment needs; Plaspy supports both and will detect the incoming protocol automatically.
- Because Plaspy uses the same port for all devices, setting port 8888 correctly is critical for successful delivery to the platform.
- Keep APN credentials and device passwords secure and document original settings before making changes.

## Why Use Plaspy with This Configuration

Using the TZ-BC08 with Plaspy centralizes device data and makes it easier to monitor location, connectivity, and reporting behavior from a single platform. Configuring the device to point at Plaspy’s shared server endpoint simplifies onboarding because the same port and automatic protocol detection apply across supported devices.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the latest device-specific configuration steps, firmware behavior, and official details for the TZone TZ-BC08, verify information on the manufacturer website http://www.tzonedigital.com/ because setup methods and firmware can change over time.
