---
slug: /calmamp/ttu_700/configuration
id: ttu_700-configuration
sidebar_label: Configuration
title: CalmAmp - TTU-700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp TTU-700 showing how to point the device to Plaspy servers using UDP or TCP on port 8888
keywords:
  - CalmAmp TTU 700 configuration
  - CalmAmp TTU 700 setup
  - TTU 700 Plaspy configuration
  - TTU 700 server configuration
  - TTU 700 SMS commands
  - trailer tracking configuration
  - fleet tracking setup
  - GPS tracker server settings
  - asset tracker integration
  - Plaspy tracker setup
---

# CalmAmp - TTU-700 Configuration

This page provides the public configuration context for using the CalmAmp TTU-700 with the Plaspy fleet management platform. It collects the known, manufacturer public commands and the required Plaspy server settings so you can prepare the TTU-700 to report to Plaspy without relying on proprietary or private documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TTU-700 supports SMS and GPRS based configuration methods and the commands shown here reflect published SMS command examples used to set APN, server, and port values.

## Configuration Overview

The goal of this configuration is to point the TTU-700 to Plaspy so the device can send its location and event data reliably to the platform and appear as an active asset in your Plaspy account. The TTU-700 can be configured using SMS commands (as published) or by the manufacturer tools that support PULS over the air updates where available.

- Configure the device APN and optional APN credentials so the unit can establish cellular data
- Set the device GPRS server endpoint to Plaspy so telemetry is routed to the platform
- Set the port to match Plaspy and choose UDP or TCP transport if required by the device
- Reboot or restart the device to apply configuration changes and verify with the device status command
- Validate the device is reporting to Plaspy and visible in the Plaspy platform

## Plaspy Server Settings

When configuring the TTU-700 for Plaspy, use the following public server settings exactly as shown:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and automatically detects the tracker protocol to simplify device onboarding.

## Typical Requirements Before Setup

- Ensure the TTU-700 is powered and in a state ready to receive configuration commands
- A SIM card with a valid data plan and the correct APN for your mobile operator
- Ability to send SMS to the device if using SMS based configuration, or access to the manufacturer configuration tool or PULS if using OTA
- Network coverage for GSM GPRS at the unit location
- Access to the device MID or identification method used by CalmAmp for command authentication
- A plan to validate connectivity on the Plaspy platform after configuration

## How This Tracker Connects to Plaspy

The TTU-700 reports location and event data to the Plaspy endpoint configured on the device so your assets appear in the Plaspy platform and generate alerts and telemetry events. The tracker is configured to report to the shared Plaspy server endpoint and port, and Plaspy detects the protocol automatically for supported trackers.

- Device establishes cellular data connection using the configured APN
- Tracker sends UDP or TCP messages to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy receives the messages and maps the device to your account based on reported ID
- Telemetry and events become visible in Plaspy for monitoring and reporting
- Automatic protocol detection in Plaspy reduces the need to manually select a tracker protocol in most cases

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for the TTU-700 using SMS commands or the manufacturer supplied tools such as PULS or vendor configuration software.
2. Obtain the device MID or ID as required by the device by sending the status or ID command to the unit.
3. Enter the Plaspy server address using either d.plaspy.com or the IP address 54.85.159.138 in the device configuration.
4. Set the port to 8888 and choose UDP or TCP transport if the device configuration requires selecting a transport protocol.
5. Configure the operator APN and optional APN username and password so the device can open a GPRS session.
6. Save or apply the configuration and restart or reboot the device if required for settings to take effect.
7. Validate that the TTU-700 reports to Plaspy and appears as an active device in the platform.

## Example Configuration Commands

The TTU-700 provides a public SMS command interface for configuration. Below are the commonly published SMS commands in order. The device replies with a MID when you request information using the !R0 command and that MID may be required by the device for authenticated commands.

- To request the device MID or ID, send:
```
!R0
```

- Set the operator APN (replace [apn] with your mobile operator APN):
```
!RP,2306,0,[apn]
```

- Optionally set the APN username if required by your operator (replace [apnu]):
```
!RP,2314,0,[apnu]
```

- Optionally set the APN password if required by your operator (replace [apnp]):
```
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy using the public Plaspy server IP:
```
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port 8888:
```
!RP,769,0,8888
```

- Reboot the tracker to apply settings (recommended after configuration):
```
!R3,70,0
```

- To check current settings on the unit:
```
!RO
```

Notes on placeholders
- [apn] is your operator APN string
- [apnu] is the APN username if your operator requires one
- [apnp] is the APN password if your operator requires one

When sending SMS commands, obtain the device MID using the !R0 command and include the device ID if your unit requires it for accepted commands. The exact SMS authentication format can depend on firmware and region.

## Configuration Notes

- Firmware and hardware revisions may change parameter codes or command formats; always verify with the current CalmAmp guidance for the TTU-700.
- You can choose UDP or TCP when the device requires a transport selection; Plaspy will accept either and automatically detect the protocol used.
- SMS based configuration is publicly documented for this device and can be convenient for remote or in-field setup when OTA tools are not available.
- Use the device status or verification command after configuration to confirm APN, server, and port values were applied.
- Installer practices vary; when possible perform a staged test to validate connectivity to Plaspy before deploying large numbers of units.

## Why Use Plaspy with This Configuration

Using the CalmAmp TTU-700 with Plaspy provides a straightforward way to get long term trailer and asset tracking data into a single platform for visibility, alerting, and operational analysis. The combination of TTU-700 low maintenance hardware and Plaspy server side detection and support for both UDP and TCP simplifies onboarding and reduces configuration overhead.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance always verify details on the manufacturer site http://www.calamp.com/ as device behavior and configuration methods can change over time.
