---
slug: /eelink/tk319h/configuration
id: tk319h-configuration
sidebar_label: Configuration
title: EElink - TK319‑H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK319 H showing Plaspy server settings and SMS setup steps
keywords:
  - EElink TK319-H configuration
  - EElink TK319-H setup
  - TK319-H Plaspy configuration
  - MoveLink EELINK setup
  - GPS tracker server configuration
  - vehicle tracking setup
  - Plaspy compatible trackers
  - TK319-H SMS configuration
  - fleet management tracker setup
  - TK319-H APN and server
---

# EElink - TK319‑H Configuration

This page explains the public configuration context for integrating the EElink TK319‑H tracker with the Plaspy platform. It covers the shared Plaspy server settings you will apply to the device, the common SMS commands provided by EElink for setup, and a practical workflow to prepare the tracker for reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data reaches the backend. Manufacturer steps for configuring the device can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where available, this page incorporates the EElink SMS commands published for TK319‑H to illustrate a common setup path.

## Configuration Overview

The goal of configuration is to prepare the TK319‑H to communicate reliably with Plaspy so the device appears on the platform, reports location and alarms, and participates in fleet workflows. Typical configuration sets the device APN and instructs it to send GPRS or socket data to Plaspy server endpoints on the shared port used by the platform.

- Configure the device APN so it can establish mobile data connectivity for GPRS reporting
- Point the tracker to Plaspy server using either the domain d.plaspy.com or the IP address 54.85.159.138 on port 8888
- Choose the transport mode UDP or TCP on the device if required by firmware and network conditions
- Set a suitable reporting interval so the tracker updates position and telemetry in Plaspy
- Verify connectivity and use the device parameter check to confirm settings are applied

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol when data arrives

All devices in Plaspy use the same port by design, and protocol detection is handled server side so you do not need to know the internal protocol name to register the device on Plaspy.

## Typical Requirements Before Setup

- A powered TK319‑H with a functioning SIM card that has data and SMS enabled
- APN information from the mobile operator including any username and password if required
- Access to send SMS messages to the device or the EElink configuration tool if provided
- Basic knowledge of the device phone number or installer access to the vehicle to send configuration SMS
- Plaspy account or contact with your fleet administrator so you can confirm the device appears in the platform after setup

## How This Tracker Connects to Plaspy

The TK319‑H transmits location and telemetry over cellular networks using the MoveLink/EELINK protocol and is configured to report to the shared Plaspy server endpoint and port. Once the device sends data to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy will ingest the messages and automatically detect the tracker protocol for processing.

- Device reports GPS and LBS positions to the Plaspy server endpoint
- Telemetry and alarm messages are forwarded to Plaspy for event handling
- Plaspy maps real time position updates and stores historical routes
- The tracker can use UDP or TCP transport to send packets to port 8888 at the Plaspy endpoint
- Plaspy handles protocol detection so device data is parsed without manual protocol selection on the platform

## Common Configuration Workflow

1. Access the official EElink configuration method for TK319‑H, typically SMS commands or the vendor tool provided by the manufacturer
2. Ensure the device has power and a SIM with data and SMS capability installed and active
3. Enter the Plaspy server address by specifying either d.plaspy.com or 54.85.159.138
4. Set the server port to 8888 on the tracker
5. Choose UDP or TCP transport on the device if it asks for a transport selection
6. Apply or save the configuration and restart the device if the device firmware requires a reboot for new settings
7. Validate that the device reports to Plaspy by checking device activity in the platform or using the device parameter query command

## Example Configuration Commands

EElink documents SMS based configuration for the TK319‑H. The following commands are provided in the manufacturer source and can be sent as SMS messages to the device phone number in the order shown. Commands preserve placeholders where applicable.

- Optional initial factory reset (use only when you need a known starting state)
```text
FACTORY#
```

- Set the device time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: The APN command can include optional APN username and APN password. Keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN, APN username, and APN password as required by your mobile operator.

- Set the GPRS server to the Plaspy domain using primary server slot 1
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to the Plaspy IP using server slot 0
```text
SERVER,0,54.85.159.138,8888#
```

- Set the tracking update interval to 60 seconds
```text
TIMER,60#
```

- Query current device parameters to verify settings
```text
PARAM#
```

Send these SMS commands to the device phone number that corresponds to the SIM installed in the TK319‑H. Maintain the order where initialization is important, for example set APN before server or perform a factory reset only when needed.

## Configuration Notes

- EElink firmware versions and hardware revisions can change command syntax or supported features; always check the device-specific manual for the exact SMS syntax if something does not respond as expected
- The device supports both UDP and TCP transport modes; choose based on network reliability and your operational needs but remember Plaspy accepts both on port 8888
- SMS based configuration is useful for remote installs but confirm SMS delivery and device responsiveness before relying solely on remote setup
- Replace APN placeholders with actual operator values; if your operator requires username and password include [apnu] and [apnp] values in the APN command
- Plaspy uses the same port for all devices and performs automatic protocol detection so once the server and port are set the platform will identify and process incoming messages

## Why Use Plaspy with This Configuration

Using the TK319‑H with Plaspy gives organizations reliable visibility into vehicle location, ignition status, and alarms in a single fleet platform. The tracker’s compact form factor and MoveLink/EELINK compatibility make it straightforward to provision devices to report position and telemetry to the Plaspy server endpoint on port 8888, enabling near real time monitoring, event alerts, and historical trip data for operations and security workflows.

Learn more about Plaspy at https://www.plaspy.com and verify device specific setup methods, firmware behavior, and the latest EElink documentation at https://www.eelink.com.cn/ to ensure the commands and procedures match your tracker revision and regional model.
