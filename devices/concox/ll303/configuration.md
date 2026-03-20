---
slug: /concox/ll303/configuration
id: ll303-configuration
sidebar_label: Configuration
title: Concox - LL303 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Concox LL303 to report to Plaspy including SMS commands APN and server settings
keywords:
  - Concox LL303
  - Concox LL303 configuration
  - LL303 setup
  - LL303 Plaspy
  - Concox GPS tracker configuration
  - LL303 server configuration
  - LL303 SMS commands
  - LL303 APN setup
  - vehicle tracker configuration
  - fleet tracking Plaspy
---

# Concox - LL303 Configuration

This page documents the public configuration context for using the Concox LL303 tracker with Plaspy. It collects the shared Plaspy server settings and the commonly used SMS configuration commands published for the LL303 so you can prepare the device to report location and status to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer setup steps can vary by firmware, hardware revision, installation type, or vendor tool; the LL303 model supports SMS and GPRS configuration commands that are commonly used to point the device at Plaspy's servers.

## Configuration Overview

This guide focuses on the practical steps required to point an LL303 at the Plaspy server endpoint, enable GPRS, and verify the device reports correctly so it becomes visible in Plaspy.

- Configure the device APN and GPRS server so it can open a data session to Plaspy
- Choose the transport protocol (UDP or TCP) if required and set the Plaspy server address
- Set reporting intervals and GPRS mode to ensure regular position updates
- Validate configuration using the LL303 verification command and observe reporting in Plaspy
- Use SMS-based commands as published by Concox for remote setup when a configuration tool is not available

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible LL303 unit with a charged battery or stable power supply
- A valid cellular SIM card with data enabled and SMS capability inserted in the tracker
- The correct APN for the SIM operator (you will use an APN placeholder when sending commands)
- Ability to send SMS messages to the device from your phone or a configuration tool
- Access to official Concox documentation or vendor tools for model-specific nuances
- Confirmation that the device firmware supports the SMS commands shown in this guide

## How This Tracker Connects to Plaspy

The LL303 is configured to send location and device data to the shared Plaspy server endpoint and port. Once APN and server settings are applied and GPRS mode is enabled, the tracker opens a connection to Plaspy and reports according to its configured timer.

- The device uses cellular data (GPRS/LTE) to initiate a socket to d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport can be either UDP or TCP depending on device selection; Plaspy accepts both and auto detects the actual protocol
- Regular position updates are sent using the configured TIMER interval to make the device visible in Plaspy
- Event reports and alerts are transmitted to the same shared Plaspy endpoint and port for centralized monitoring
- Plaspy’s automatic protocol detection reduces the need to know internal protocol names during setup

## Common Configuration Workflow

1. Access the official Concox configuration method for the LL303 (SMS commands or vendor software) as provided by the manufacturer or your supplier.
2. Prepare the device SIM with the correct APN details for the mobile operator.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address and set port 8888.
4. Choose UDP or TCP on the device if the tracker requires a transport selection.
5. Apply or save the configuration on the device; for SMS setups this means sending the required SMS commands in order.
6. Restart the device if required by the device manual or after applying server and GPRS settings.
7. Validate connectivity by confirming the device reports to Plaspy and by using the device verification command.

## Example Configuration Commands

The LL303 supports SMS-based configuration. Below are the commonly published SMS commands presented in the order recommended for initial setup. Send these messages to the device phone number using SMS.

- Optional initial factory reset (use only if you need to restore defaults)
```text
FACTORY#
```

- Set the device time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note: {{apn}}, {{apnu}}, and {{apnp}} are placeholders. Replace {{apn}} with your carrier APN. If your carrier requires a username and password include {{apnu}} and {{apnp}} separated by commas.
```text
APN,{{apn}}#
```
or if username and password are required:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to use the Plaspy domain (UDP/TCP transport selection is handled separately when required)
```text
SERVER,1,d.plaspy.com,8888,0#
```
or set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting interval to every 60 seconds (two common variants shown)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS and server parameter settings
```text
GPRSSET#
```

These commands are the publicly published sequence for the LL303. Send them as SMS messages to the tracker number. Adjust the order only where the device manual specifies a different recommended flow.

## Configuration Notes

- SMS-based configuration is commonly supported for the LL303; confirm that your device accepts SMS commands and that SMS remote configuration is enabled.
- Firmware versions and hardware revisions can change command behavior or supported parameters; consult Concox documentation if a command is not accepted.
- Choose TCP or UDP according to installer preference; Plaspy accepts both and will auto detect the protocol used by the device.
- Use the APN placeholders provided and verify APN, username, and password with your mobile operator before sending commands.
- The Plaspy server settings use the same port for all supported devices which simplifies multi-device deployments

## Why Use Plaspy with This Configuration

Configuring the Concox LL303 to report to Plaspy gives organizations centralized visibility into vehicle and asset movements, with consistent server settings that simplify large deployments. Using the shared Plaspy endpoint and automatic protocol detection reduces per-device complexity and helps get trackers reporting quickly.

To learn more about Plaspy and how it supports tracker fleets, visit https://www.plaspy.com. For the latest device-specific setup details, firmware notes, and official Concox documentation, verify information at the manufacturer site https://www.iconcox.com/ as setup methods and device behavior can change over time.
