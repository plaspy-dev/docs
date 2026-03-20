---
slug: /concox/vl101/configuration
id: vl101-configuration
sidebar_label: Configuration
title: Concox - VL101 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox VL101 tracker configuration with Plaspy server settings and example SMS commands
keywords:
  - Concox VL101 configuration
  - Concox VL101 setup
  - Concox VL101 Plaspy
  - VL101 GPS tracker
  - Concox VL101 server configuration
  - VL101 tracker setup
  - Concox vehicle tracker configuration
  - VL101 Plaspy setup
  - VL101 GPS platform setup
  - Concox tracker installation
---

# Concox - VL101 Configuration

This page provides the public configuration context for using the Concox VL101 tracker with Plaspy. It focuses on the practical, public settings and commands you can use to point a VL101 device at Plaspy so the tracker can report location and status to your Plaspy account. Where available, example SMS commands are included as supplied in Concox public configuration notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools. Use the information here to prepare the device for Plaspy, and confirm details against Concox documentation when needed.

## Configuration Overview

This configuration process prepares the VL101 to communicate with Plaspy by setting the cellular APN, server endpoint, reporting interval, and enabling the device data channel. For the VL101, Concox provides SMS based configuration commands that are commonly used during installation and testing.

- Point the tracker to the Plaspy server domain or IP so it can upload position and event data.
- Configure the device APN so GPRS or LTE data can be used for reporting.
- Set an appropriate update interval so the device reports location regularly to Plaspy.
- Enable the device GPRS mode or data channel so the tracker can connect to the cloud.
- Verify settings using the provided verification command to confirm the tracker is reporting as expected.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the VL101. Plaspy uses the same port for all devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol once the device connects to the server

## Typical Requirements Before Setup

- A powered VL101 device installed or accessible for initial configuration
- An active SIM card with a data plan and correct APN details for the mobile operator
- Ability to send SMS commands to the tracker if using SMS based configuration
- Access to Concox official configuration instructions or software for reference
- A basic installer tool or phone for sending SMS commands and verifying responses
- Knowledge of whether your deployment prefers UDP or TCP transport

## How This Tracker Connects to Plaspy

The VL101 is configured to report location and device data to the shared Plaspy server endpoint and port. Once server and APN settings are applied, the tracker establishes an IP connection and uploads periodic location updates and events to Plaspy where they become visible in the platform.

- The tracker is set to send reports to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy listens on a single port for all devices and determines the device protocol automatically
- Reporting cadence is controlled by the device TIMER setting to balance location freshness and data usage
- After successful connection, location and event data appear in the Plaspy platform for monitoring
- Transport can be configured as UDP or TCP depending on installer preference and network conditions

## Common Configuration Workflow

1. Access the official Concox configuration method or software and review manufacturer instructions for your VL101 firmware and hardware revision.
2. Ensure the device has power and a working SIM with correct APN details.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and enable the device data mode such as GPRS on the VL101.
6. Restart the device if recommended by the manufacturer or after saving settings.
7. Validate that the device reports to Plaspy by checking the tracker listing or recent messages in Plaspy and by using the device verification command if available.

## Example Configuration Commands

The VL101 can be configured by SMS using the following public commands. Preserve placeholders when sending the commands. Commands are shown in the typical order used during initial setup.

- Optional initial factory reset (use only when needed or for initial installation):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your network APN. If required, include [apnu] and [apnp] for APN username and password.
```
APN,[apn]#
```
Or with optional username and password:
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to the Plaspy domain using port 8888:
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server to the Plaspy IP using port 8888:
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds. The device supports a single parameter or a two parameter form:
```
TIMER,60#
```
Or:
```
TIMER,60,60#
```

- Enable GPRS mode on the device:
```
GPRSON,1#
```

- To check current parameter settings use the verification command:
```
GPRSSET#
```

Notes on placeholders and usage:
- [apn] should be replaced with your carrier APN string.
- [apnu] and [apnp] are optional APN username and password placeholders and should be included only if your operator requires them.
- Use the SERVER command with either the domain form or the IP form depending on your preference; both point the device to Plaspy on port 8888.
- Factory reset is optional and should be used only when necessary.

## Configuration Notes

- SMS based setup is supported by these public commands, but some installers may prefer Concox configuration tools or software where available.
- Firmware versions or hardware revisions may change command availability or syntax. Confirm the exact command syntax against Concox documentation for your VL101 firmware.
- Choose UDP or TCP based on network stability, firewall rules, and installer preference. Plaspy accepts either transport on port 8888.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol when the device connects.
- After configuration, verify connectivity with GPRSSET# and by confirming the device appears and sends messages in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the Concox VL101 to report to Plaspy provides a straightforward path to vehicle visibility and operational monitoring. With the shared Plaspy server settings and automatic protocol detection, installers can use consistent server values and focus on APN and reporting interval tuning to meet operational needs.

Learn more about Plaspy and how it supports fleet visibility at https://www.plaspy.com. For device specific documentation, firmware updates, and the latest configuration instructions verify details on the manufacturer website https://www.iconcox.com/ as methods and firmware behavior can change over time.
