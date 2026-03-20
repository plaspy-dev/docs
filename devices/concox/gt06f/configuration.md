---
slug: /concox/gt06f/configuration
id: gt06f-configuration
sidebar_label: Configuration
title: Concox - GT06F Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox GT06F for use with Plaspy using public SMS commands and shared server settings for reliable tracking
keywords:
  - Concox GT06F configuration
  - GT06F setup
  - Concox GT06F Plaspy
  - GT06F server configuration
  - GPS tracker configuration
  - vehicle tracker setup
  - Plaspy server settings
  - GT06F SMS commands
  - GPRS tracker configuration
  - Concox tracker setup
---

# Concox - GT06F Configuration

This page documents the public configuration context for using the Concox GT06F tracker with the Plaspy platform. It consolidates the known, manufacturer published SMS commands and the Plaspy server settings required to point a GT06F device at Plaspy for tracking and visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this guide focuses on the practical public steps and commands you can use when configuring a GT06F to report to Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the GT06F so it can reliably communicate with Plaspy and appear as an active tracker in the platform. Typical actions include setting the device APN, configuring the GPRS server endpoint, selecting transport if required, and validating reporting.

- Configure operator APN so the device can use mobile data for GPRS
- Set the GPRS server to Plaspy using the provided domain or IP and the platform port
- Choose UDP or TCP transport when the device requires a transport selection
- Set periodic report intervals so the tracker sends regular updates to Plaspy
- Verify settings and confirm the device reports to Plaspy using built in verification commands

## Plaspy Server Settings

Use these public Plaspy settings when configuring the GT06F. Plaspy uses the same port for all supported devices and performs automatic protocol detection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A GT06F device with power available and access to the device SMS input method
- An active SIM card with data and SMS enabled and correct APN details for the mobile operator
- Access to the official Concox configuration method or documentation for the GT06F
- A Plaspy account and awareness of the platform server endpoint to validate the device shows as online
- A phone or SMS gateway capable of sending plain text SMS commands to the device
- Basic notes of current firmware or hardware revision so you can match manufacturer guidance

## How This Tracker Connects to Plaspy

The GT06F is configured to send its location and device data over GPRS to the Plaspy server endpoint and port. Configuration is typically applied via SMS commands or manufacturer tools that set APN and server fields so the device establishes a data connection and reports to the shared Plaspy endpoint.

- The device uses its SIM data connection with the configured APN to connect to mobile data
- A SERVER command points the tracker to d.plaspy.com or the Plaspy IP address on port 8888
- The device can be set to use UDP or TCP transport if required by the firmware
- Plaspy listens on port 8888 for incoming connections and performs automatic protocol detection
- Once configured the tracker sends periodic updates so the device becomes visible in Plaspy

## Common Configuration Workflow

1. Access the official Concox configuration method for GT06F, typically SMS commands or the vendor tool documented by Concox.
2. Set the operator APN using the APN command so the device can use mobile data.
3. Enter the Plaspy server by using either d.plaspy.com or 54.85.159.138 and set port 8888.
4. Choose UDP or TCP transport on the device if the GT06F configuration requires a transport selection.
5. Set reporting intervals such as a 60 second timer and enable GPRS mode so the device will send updates.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot.
7. Validate that the device reports to Plaspy and appears online in the platform using the verification command or by checking the Plaspy interface.

## Example Configuration Commands

The GT06F can be configured by sending SMS messages with the commands below. Preserve placeholders when sending commands and replace them with your operator values.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]# 
```
If your operator requires username or password include them as placeholders:
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator APN, [apnu] is the APN username if required, and [apnp] is the APN password if required.

- Set the GPRS server to Plaspy using the domain (recommended)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy using the IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Alternative timer format:
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS related settings on the device
```text
GPRSSET#
```

Send each SMS command to the device number and wait for confirmation SMS responses as provided by the tracker firmware.

## Configuration Notes

- SMS based configuration is commonly supported by GT06F firmware; use the official Concox instructions for exact syntax for your firmware version.
- Some firmware revisions require different transport flags or slightly different command parameters; check the device response SMS for confirmation.
- Choose UDP or TCP based on your installation and network conditions; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- When using domain based SERVER commands the device must be able to resolve DNS; if DNS is unavailable you can use the Plaspy IP alternative.
- Keep APN placeholders [apn], [apnu], and [apnp] as provided and replace them with operator specific values when sending commands.

## Why Use Plaspy with This Configuration

Configuring a Concox GT06F to report to Plaspy gives organizations a straightforward path to real time visibility and operational monitoring. Using the published SMS commands and the shared Plaspy server settings makes it practical to deploy and validate devices quickly across fleets and installations.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods and firmware details verify information on the Concox manufacturer site https://www.iconcox.com/ as device behavior and manufacturer instructions can change over time.
