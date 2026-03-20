---
slug: /appello/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: Appello - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Appello TK103 to connect to Plaspy using shared server settings and SMS commands
keywords:
  - Appello TK103 configuration
  - Appello TK103 setup
  - Appello TK103 server configuration
  - Appello TK103 Plaspy
  - Plaspy tracker configuration
  - GPS tracker setup
  - vehicle tracking setup
  - TK103 SMS commands
  - TK103 APN setup
  - TK103 GPRS configuration
---

# Appello - TK103 Configuration

This page summarizes the public configuration context for using the Appello TK103 tracker with the Plaspy platform. It focuses on the practical steps and public commands that make the TK103 report to Plaspy servers so you can see the device on the Plaspy platform. Use this guidance alongside official manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK103 supports SMS command configuration and GPRS reporting, so the examples below use the publicly available SMS commands and the Plaspy server endpoint values required for integration.

## Configuration Overview

The goal of configuration is to prepare the TK103 to communicate reliably with the Plaspy backend, validate connectivity, and enable tracking visibility in the platform. The TK103 often uses SMS commands for initial setup and GPRS for real time reporting; example SMS commands are included below.

- Configure the APN and GPRS settings so the tracker can access mobile data for reporting.
- Set the Plaspy server endpoint and port so device messages are routed to Plaspy.
- Adjust the position upload interval so location updates match operational needs.
- Verify device status and connectivity with an on device status command.
- Optionally perform a factory reset before initial configuration for a clean setup.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the TK103. Plaspy uses the same port for all devices and detects protocol automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged and installed TK103 with power connected or battery charged and device reachable.
- A GSM SIM card with data and GPRS service active and a known APN, username, and password if required.
- Ability to send SMS messages from an authorized phone to the tracker for initial configuration.
- Access to the official manufacturer configuration instructions or toolset for your TK103 firmware version.
- Basic knowledge of the device admin password (the example commands below use the common default password shown in public documentation).

## How This Tracker Connects to Plaspy

The TK103 is configured to send location and device data to the Plaspy endpoint and port using GPRS. Once the server and APN are set, the tracker will push periodic updates to the shared Plaspy server so devices appear and remain visible in the Plaspy platform.

- The tracker uses GPRS to open a TCP or UDP connection to the Plaspy server endpoint.
- Device position messages are sent to 54.85.159.138 on port 8888 (or use the domain d.plaspy.com if supported).
- Plaspy automatically detects the tracker protocol so the same port and endpoint work across devices.
- Update intervals determine how frequently the tracker reports location to Plaspy.
- A successful connection and regular uploads make the device visible and report events in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK103 (SMS commands are the common method shown in public documentation).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires you to select a transport type.
5. Set the APN (and optional APN username and password) so the tracker has GPRS data access.
6. Apply or save the configuration and restart the device if the tracker firmware requires a reboot.
7. Validate that the device reports to Plaspy by checking status with the device status command and confirming visibility on Plaspy.

## Example Configuration Commands

The TK103 is commonly configured by sending SMS commands from an authorized phone number. The following public commands are shown in the manufacturer example. The sample setup uses the default device password 123456 as shown in public documentation. Preserve placeholders where present.

- Factory reset (optional initial step)
```text
123456begin
```
Note: This resets device settings to factory defaults. Use only when required.

- Set the time zone to UTC+0
```text
123456time zone 0
```

- Set the operator APN (replace placeholders)
```text
123456apn {{apn}} {{apnu}} {{apnp}}
```
Explanation: {{apn}} is the cellular APN supplied by your mobile operator. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders if your operator requires them.

- Set the GPRS server to Plaspy using the public IP and port
```text
123456adminip 54.85.159.138 8888
```
Explanation: This command points the tracker to the Plaspy server endpoint and port used across Plaspy devices. If your firmware supports domain names, you can provide d.plaspy.com instead of the IP where supported by the device.

- Set the upload/update interval to 60 seconds
```text
123456t060s***n
```
Explanation: This public example shows a 60 second reporting interval. Use the exact syntax your firmware requires; the example follows the common pattern published by the device maker.

- Check current settings and status
```text
123456status
```
Explanation: Sends a status request to the device so it replies with its current configuration and connectivity state.

## Configuration Notes

- SMS based setup is a common, public method for the TK103. Ensure SMS comes from an authorized phone number if the device enforces number filtering.
- Manufacturer firmware versions may alter the exact command syntax or available parameters; always confirm commands against the device manual for your firmware.
- Replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator details. Username and password are optional and only required by some carriers.
- Choose UDP or TCP according to the tracker firmware options; Plaspy accepts either and will detect the protocol automatically.
- Plaspy uses the same port for all supported devices which simplifies server configuration across a mixed fleet.

## Why Use Plaspy with This Configuration

Configuring the Appello TK103 to report to Plaspy provides a straightforward path to real time visibility and centralized device management. For organizations that need consistent location tracking, reporting intervals, and platform level visibility, directing TK103 data to Plaspy lets you monitor assets and review status from a single platform.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions on the manufacturer website http://www.cnjeo.com/ before deploying large numbers of devices.
