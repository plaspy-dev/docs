---
slug: /winrich/tk206_obd/configuration
id: tk206_obd-configuration
sidebar_label: Configuration
title: Winrich - TK206 OBD Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Winrich TK206 OBD with Plaspy server settings and practical SMS commands
keywords:
  - Winrich TK206 OBD configuration
  - Winrich TK206 setup
  - TK206 OBD Plaspy configuration
  - Winrich GPS tracker configuration
  - vehicle OBD II tracker setup
  - GPS tracker server configuration
  - Plaspy tracker setup
  - fleet tracking configuration
  - OBD GPS platform setup
  - GPRS tracker configuration
---

# Winrich - TK206 OBD Configuration

This page covers the public configuration context for using the Winrich TK206 OBD tracker with Plaspy. It collects the practical, publicly available steps and server settings needed to point the device to the Plaspy backend so location and OBD telemetry can be reported to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK206 OBD supports SMS based configuration and GPRS connectivity for reporting, so this guide focuses on applying Plaspy server values and the common SMS commands provided in the manufacturer documentation.

## Configuration Overview

Configuring the TK206 OBD for Plaspy prepares the device to communicate with the Plaspy backend over the GSM GPRS network and report GPS and OBD data for visibility in the platform. The most important part of this setup is ensuring the tracker has correct APN and server values so it can establish a GPRS session and send data to Plaspy's shared endpoint and port.

- Point the device to Plaspy server settings so telemetry is delivered to the platform.
- Configure APN and GPRS parameters so the tracker can connect using mobile data.
- Validate connectivity and verify the device reports to the Plaspy server endpoint.
- Adjust reporting interval and operational options to match monitoring requirements.
- Use SMS commands or the official Winrich configuration method to apply settings.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TK206 OBD:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device connects to the server endpoint.

## Typical Requirements Before Setup

- A powered TK206 OBD inserted in the vehicle OBDII port or otherwise powered according to Winrich guidance.
- An active SIM card with a data plan that supports GPRS and SMS for configuration.
- APN details from the SIM operator (APN name and optional username and password).
- A phone capable of sending SMS commands or access to the manufacturer configuration tool.
- A clear view of the sky or acceptable LBS conditions for GPS or network location reporting.
- Access to the official Winrich documentation for model specific instructions and firmware notes.

## How This Tracker Connects to Plaspy

The TK206 OBD is configured to use GPRS to connect to Plaspy and send periodic telemetry and OBD data to the platform. Once APN and server settings are correct, the tracker establishes a data session and sends location and vehicle diagnostics to the shared Plaspy endpoint and port for processing and display.

- The tracker reports position and OBD parameters to the Plaspy server endpoint.
- Data is sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device can use either UDP or TCP transport depending on device settings and network conditions.
- Plaspy automatically detects the device protocol when the tracker connects to the shared port.
- Events and alarms configured on the tracker are forwarded to Plaspy for platform visibility and monitoring.

## Common Configuration Workflow

1. Access the official Winrich configuration method or software, or prepare to send SMS configuration commands as documented by Winrich.
2. Enter the Plaspy server by domain or IP, using either d.plaspy.com or 54.85.159.138 as the server address.
3. Set the port to 8888 as the global Plaspy port used for all devices.
4. Choose UDP or TCP if the device requires selection of transport protocol.
5. Provide the operator APN and any required APN credentials, then save or apply the configuration.
6. Restart the device if required by the manufacturer or after applying settings.
7. Validate that the device reports to Plaspy by checking the device status or using the device verification commands.

## Example Configuration Commands

The TK206 OBD supports SMS based configuration. Below are the public SMS commands provided by the manufacturer presented in order. If you use SMS for configuration, send each command from an authorized phone number as required by the device.

- Factory reset (optional initial step)
```text
940#
```
- Set the time zone to UTC-0
```text
801#W0#
```
- Set the operator APN (replace placeholders with your operator values)
```text
802#[apn]#[apnu]#[apnp]#
```
Note: [apn] is the APN name, [apnu] is the APN username if required, and [apnp] is the APN password if required. If your operator does not require username or password, leave those placeholders empty as supported by the device SMS format.

- Set the GPRS server to the Plaspy backend (server IP and port)
```text
803#54.85.159.138#8888#
```
You may also use the domain instead of the IP if the device accepts domain names, but the official public command example uses the Plaspy server IP and the global port.

- Set the update interval to 60 seconds
```text
730#60#
```
- Check current settings
```text
886#
```
- Check device status
```text
902#
```

Send these commands in the order appropriate for your installation. The factory reset command is optional and should only be used if you need to restore the device to default settings before applying new configuration.

## Configuration Notes

- SMS based setup is supported for this model; use the official SMS command syntax exactly and ensure commands are sent from an authorized number as required by the device.
- Preserve APN placeholders when preparing commands and replace them with the correct operator APN values before sending.
- Choose UDP or TCP according to your network environment; Plaspy can accept either transport on port 8888.
- Firmware revisions and hardware variants can change command syntax or behavior; verify syntax against your device documentation if a command does not respond as expected.
- Confirm the SIM card supports data and that the device has sufficient signal to establish a GPRS session before expecting live reporting.

## Why Use Plaspy with This Configuration

Using the Winrich TK206 OBD with Plaspy provides a straightforward way to centralize vehicle location and OBD diagnostic reporting for fleet operations or individual vehicle monitoring. Pointing the tracker to Plaspy's shared server endpoint and port lets the platform automatically detect the device protocol and begin ingesting telemetry for mapping, alerts, and operational oversight.

To learn more about Plaspy and its features visit https://www.plaspy.com. For the latest device specific details, firmware behavior, and manufacturer instructions verify information on the Winrich website http://www.winrichgroup.com/en/ as models and setup procedures may change over time.
