---
slug: /minifinder/zepto/configuration
id: zepto-configuration
sidebar_label: Configuration
title: MiniFinder - Zepto Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for MiniFinder Zepto to connect to Plaspy with server settings, SMS commands, and workflow guidance
keywords:
  - MiniFinder Zepto configuration
  - MiniFinder Zepto setup
  - Zepto server configuration
  - Zepto Plaspy setup
  - Plaspy tracker configuration
  - Zepto GPS tracker setup
  - OBD2 tracker configuration
  - vehicle tracking Plaspy integration
  - Zepto SMS configuration
  - Zepto APN settings
---

# MiniFinder - Zepto Configuration

This page covers the public configuration context for using the MiniFinder Zepto with Plaspy. It explains the shared server settings Plaspy requires, shows the common SMS configuration commands published for Zepto, and describes the practical steps you can use to prepare the device for real time tracking on Plaspy.

Plaspy uses a single shared endpoint and port for all supported trackers and automatically detects each device protocol when a connection is received. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands and workflow here as practical public guidance and verify device specifics with MiniFinder when needed.

## Configuration Overview

The goal of configuration is to make the Zepto report location and telemetry reliably to the Plaspy platform so devices appear in your Plaspy dashboard and send events and trip history as expected. For Zepto this can be done via the published manufacturer methods, including SMS-based commands where available, or via the official MiniFinder configuration tools.

- Prepare the Zepto to point to the Plaspy server endpoint for live reporting.
- Configure cellular data settings such as the APN so the tracker can use GPRS/LTE to reach Plaspy.
- Send or apply server and port settings so the device reports to d.plaspy.com or the Plaspy server IP.
- Validate connectivity and ensure the device is visible in Plaspy and reporting location updates.
- Use SMS commands shown below as a public example for setting timezone, APN, and the GPRS server when SMS setup is supported.

## Configuration Overview

(This heading appears once above as required) 

## Plaspy Server Settings

Use these public Plaspy server values when configuring the Zepto for use with Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Vehicle powered or otherwise connected to the OBD port so the Zepto has its normal operating power.
- An active cellular SIM with data enabled and the correct APN for your mobile operator.
- Access to the device for configuration, either the ability to send SMS to the device or the official MiniFinder configuration tool.
- Knowledge of the operator APN and any optional APN username or password your SIM provider requires.
- Confirmation of the Zepto firmware version or hardware revision from the installer or vendor when possible.
- A Plaspy account where you can verify the device appears once configuration is applied.

## How This Tracker Connects to Plaspy

When configured, the Zepto sends location and device data over the cellular connection to the shared Plaspy server endpoint and port. Plaspy receives the connection on port 8888 and uses automatic protocol detection to interpret the tracker messages so devices become visible in the platform.

- The tracker is directed to report to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Data transport may use UDP or TCP depending on the device firmware and chosen transport option.
- Location updates, event reports, and basic telemetry are forwarded to Plaspy for live map display and analytics.
- Plaspy’s automatic protocol detection identifies the Zepto protocol once the device connects to the server endpoint.
- After configuration, validate that periodic location updates and expected events appear in your Plaspy account.

## Common Configuration Workflow

1. Access the official MiniFinder configuration method or software as recommended by the vendor (SMS commands, mobile app, or MiniFinder web tools).
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 when the device requests a server host.
3. Set the server port to 8888, noting that Plaspy uses this same port for all supported trackers.
4. Choose UDP or TCP if the Zepto requires a transport selection during configuration.
5. Configure the device APN settings so the tracker can connect over the mobile network.
6. Apply or save the configuration to the device and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports successfully to Plaspy by checking for incoming location updates and connection status.

## Example Configuration Commands

The Zepto supports SMS-based configuration. The public commands published for basic setup are shown here in order. Send these as SMS messages to the device when SMS setup is supported by your device and SIM.

- Set the time zone to UTC 0
```
tz+00
```

- Set the operator APN
```
S1,[apn]
```
or, if your APN requires username and password
```
S1,[apn],[apnu],[apnp]
```
Explanation: [apn] is the network access point name for your SIM. [apnu] and [apnp] are optional APN username and password placeholders when required by the operator.

- Set the GPRS/Plaspy server to the Plaspy public IP and port
```
IP1,54.85.159.138,8888
```

Notes about commands:
- These commands are public SMS examples supplied for Zepto. Keep the order when using SMS setup: timezone, APN, then server.
- After sending server and APN commands, a device restart may be required by the manufacturer or firmware to establish the connection.

## Configuration Notes

- Firmware and regional variants can change command syntax or available features; confirm commands with MiniFinder documentation for your exact device revision.
- Choose UDP or TCP according to device firmware and network conditions; both transports are accepted by Plaspy on port 8888 and Plaspy auto detects the protocol.
- SMS-based configuration is a common manufacturer method for Zepto but may be supplemented or replaced by MiniFinder desktop or mobile tools depending on the firmware.
- If your SIM operator requires authentication, include [apnu] and [apnp] in the S1 command exactly as your operator specifies.
- Always verify device visibility in Plaspy after applying configuration to confirm the tracker is reporting as expected.

## Why Use Plaspy with This Configuration

Using MiniFinder Zepto with Plaspy provides continuous real-time vehicle visibility, event reporting, and historical trip playback in a single platform. The Zepto’s plug-and-play OBD form factor supplies continuous power and reliable GNSS performance while Plaspy receives and interprets device messages on a shared server and port for consistent dashboarding and reporting.

To learn more about Plaspy and how it integrates with GPS trackers like the Zepto visit https://www.plaspy.com. For the latest device-specific setup instructions, command syntax, and firmware details verify the official manufacturer documentation at https://minifinder.se/ as manufacturer specifications and setup methods can change over time.
