---
slug: /minifinder/pico/configuration
id: pico-configuration
sidebar_label: Configuration
title: MiniFinder - Pico Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for MiniFinder Pico and Plaspy compatibility with server settings and SMS commands
keywords:
  - MiniFinder Pico configuration
  - MiniFinder Pico setup
  - MiniFinder Pico Plaspy
  - Pico GPS tracker configuration
  - Pico server settings
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - Pico APN and server
  - Plaspy device integration
  - Pico telemetry configuration
---

# MiniFinder - Pico Configuration

This page covers the public configuration context for using the MiniFinder Pico tracker with Plaspy. It explains the shared Plaspy server settings, the typical workflow for registering a Pico device, and the publicly available SMS commands used to point a Pico device at Plaspy. The guidance here is practical and focused on the values and steps you need to integrate Pico with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use the commands and sequence below as a public reference, then confirm device specific behavior with the official MiniFinder documentation when needed.

## Configuration Overview

The goal of configuring a MiniFinder Pico for Plaspy is to prepare the tracker to communicate reliably with Plaspy's shared server endpoint, validate connectivity, and ensure the device appears and reports correctly in Plaspy. The process commonly uses the device manufacturer tools or SMS commands to set APN and server values, then verifies reporting in Plaspy.

- Configure the device APN so GPRS data is available for position uploads.
- Point the device to Plaspy using the shared server endpoint and port.
- Choose the transport protocol if the device requires a UDP or TCP selection.
- Save or apply the settings then restart the tracker if required.
- Validate the device appears in Plaspy and sends location and event reports.
- Use manufacturer documentation for any device specific options or firmware differences.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings used when configuring MiniFinder Pico. Plaspy uses the same port for all supported devices and performs automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- A charged and functional MiniFinder Pico device with a working SIM card.
- A SIM with active mobile data or GPRS enabled and SMS capability to send configuration commands.
- Access to the official MiniFinder configuration method or support tools for the Pico.
- The device phone number or a way to send SMS configuration messages to the device.
- Knowledge of the correct APN for the SIM provider to set via S1 or equivalent command.
- Access to Plaspy account and device registration details as required for your monitoring workflows.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Pico sends location and event data to the Plaspy server endpoint and port so the device becomes visible in the Plaspy dashboard and alerting engine. Plaspy receives the tracker data stream and maps the protocol automatically for consistent ingestion.

- The device is configured to report to the shared Plaspy endpoint d.plaspy.com or 54.85.159.138 and port 8888.
- Data is transmitted over the chosen transport, either UDP or TCP, as required by device settings.
- Plaspy automatically detects the tracker protocol and processes incoming telemetry for mapping and alerts.
- Location updates, SOS events, and alarms are forwarded into Plaspy for monitoring and notifications.
- Successful configuration enables live tracking, historical playback, and event handling inside Plaspy.

## Common Configuration Workflow

1. Access the official MiniFinder configuration method or software for the Pico, or prepare to send SMS configuration commands as supported by the device.
2. Enter the Plaspy server address using either d.plaspy.com or the IP address 54.85.159.138 in the device configuration.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP as the transport if the device requires a specific transport selection.
5. Set the APN for the installed SIM so GPRS data is available for uploads.
6. Apply or save the configuration and restart the device if required by the device procedure.
7. Validate the device reports to Plaspy by checking for incoming positions or events in the Plaspy dashboard.

If your workflow uses SMS commands, follow the order required by MiniFinder and confirm the device accepts SMS configuration messages before proceeding.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the order shown. These are the public SMS commands extracted from the MiniFinder Pico configuration content. Send each line as a separate SMS to the device phone number.

- Set the time zone to UTC 0
```
tz+00
```

- Set the operator APN. Replace the placeholders with your SIM operator values
```
S1,[apn],[apnu],[apnp]
```
Explanation: [apn] is the APN name. [apnu] and [apnp] are optional username and password fields for carrier APN authentication. If no username or password is required, you can omit those placeholders or leave them empty depending on device command syntax.

- Set the GPRS server to Plaspy using the public IP and port
```
IP1,54.85.159.138,8888
```
Note: The command above uses the Plaspy server IP and the port 8888. You may also be able to use the domain d.plaspy.com in manufacturer tools that accept DNS hostnames instead of IP.

Always preserve the command order when required by the device. Check MiniFinder instructions for any additional confirmation or verification commands.

## Configuration Notes

- MiniFinder Pico supports SMS based configuration as shown, but manufacturer tools or an admin portal may also support these settings depending on the firmware.
- Firmware and hardware revisions can change command syntax or supported parameters; verify syntax against the current MiniFinder documentation.
- Choose UDP or TCP according to device capability and network reliability in your deployment area; Plaspy supports both transports and will detect the protocol automatically.
- All Plaspy supported devices use port 8888 for incoming connections so you do not need different ports per device.
- Preserve placeholders like [apn] exactly and replace them with the carrier APN details appropriate for your SIM.

## Why Use Plaspy with This Configuration

Configuring MiniFinder Pico to report to Plaspy provides centralized visibility of location and event data so teams can monitor personal safety, asset movement, and incident alerts in real time. The shared Plaspy server settings and automatic protocol detection simplify integrating multiple Pico units into a single monitoring workflow.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration, firmware notes, and manufacturer details consult the official MiniFinder documentation at https://minifinder.se/ to verify setup methods and any updates.
