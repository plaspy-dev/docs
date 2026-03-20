---
slug: /aoya/t8gps/configuration
id: t8gps-configuration
sidebar_label: Configuration
title: AoYa - T8GPS Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the AoYa T8GPS tracker for use with Plaspy including server settings SMS commands and validation steps
keywords:
  - AoYa T8GPS configuration
  - AoYa T8GPS setup
  - T8GPS Plaspy configuration
  - AoYa GPS tracker setup
  - vehicle tracking configuration
  - GPRS tracker configuration
  - Plaspy tracker setup
  - GPS tracker server settings
  - T8GPS SMS commands
  - AoYa T8GPS manual
---

# AoYa - T8GPS Configuration

This page documents the public configuration information needed to prepare an AoYa T8GPS tracker for use with Plaspy. It summarizes the shared server settings Plaspy accepts, practical SMS command examples from the device provider, and a typical workflow to validate the device is reporting to Plaspy correctly.

Plaspy uses a single shared server endpoint and port for supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps for the T8GPS can vary by firmware version, hardware revision, installation method, and vendor tools; use the instructions below as a practical public reference and check the manufacturer documentation for device specific details.

## Configuration Overview

The goal of configuration is to point the T8GPS at Plaspy so the device can report its position and status reliably over GPRS. For the T8GPS this typically means sending a small set of SMS commands to configure APN credentials, the Plaspy server address, transport type, and optional timezone or factory reset steps.

- Configure the T8GPS to use the operator APN and optional APN credentials so it can connect to the GPRS network.
- Set the deviceʼs GPRS server address to Plaspy so data is forwarded to the platform.
- Choose UDP or TCP transport according to installer preference, noting Plaspy accepts either and auto detects the protocol.
- Validate the device can reach Plaspy and confirm it appears in your Plaspy account.
- Use SMS based commands when a direct configuration tool is not available or as a quick field method.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 if DNS is not available or you prefer an IP address
- Port 8888 which is the single port Plaspy uses for all devices
- Transport support for UDP or TCP — the T8GPS may be set to either transport
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible T8GPS unit with working GPS and GPRS hardware
- An active SIM card with data enabled and the correct operator APN
- The device password (the T8GPS example uses default password 123456 in public commands)
- SMS capability to send configuration commands if using SMS based setup
- A place to test connectivity where mobile signal allows GPRS data sessions
- Access to official manufacturer documentation or vendor tools for advanced configuration

## How This Tracker Connects to Plaspy

The T8GPS sends location and status data over the mobile data network to Plaspy using the configured server address and port. Once the device is pointed to the Plaspy endpoint and can establish a GPRS session, Plaspy will receive tracker packets and map the device to the platform account based on its protocol and identifiers.

- The device is configured to report to the shared Plaspy server endpoint and port.
- Location and event data are forwarded from the tracker to Plaspy over GPRS.
- Plaspy automatically detects the tracker protocol when the device connects.
- Choosing UDP or TCP controls transport but Plaspy accepts and handles either.
- Visibility on Plaspy appears after the device successfully authenticates and sends its first packets.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or SMS command list for the T8GPS supplied by AoYa or your vendor.
2. Ensure the SIM card is inserted and the device has power and mobile signal.
3. Configure the APN and optional APN username and password for your mobile operator.
4. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address on the device.
5. Set port 8888 as the server port and choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration and restart the device if the device requires a reboot to activate settings.
7. Validate that the device reports to Plaspy by checking device visibility in the platform and confirming recent position updates.

## Example Configuration Commands

The T8GPS supports SMS based configuration. Below are the public example SMS commands provided for the model. The default device password in these examples is 123456. Use the password configured on your unit if it differs.

1. Optional initial factory reset (use only when needed)
```text
begin123456
```

2. Set the time zone to UTC 0
```text
time zone123456 0
```

3. Set the operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

4. Set the APN username and password if required (replace placeholders with your values)
```text
up123456 [apnu] [apnp]
```

5. Set the GPRS server to Plaspy using the public Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

6. Switch to GPRS mode and select transport. Example for explicit UDP mode:
```text
gprs123456,1,1
```
Or a simpler enablement command (device firmware may accept a shorter form):
```text
gprs123456
```

7. Check current settings on the device
```text
check123456
```

Notes on placeholders:
- [apn] is the mobile operator APN string
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required by the operator

Preserve the device password in commands. If you changed the password from the default 123456, substitute your current password in each command.

## Configuration Notes

- Firmware versions and regional device builds can alter exact SMS command formats and available features; always verify commands against your device manual.
- SMS based setup is practical for field installs where a configuration cable or software is not available.
- Choose UDP or TCP according to your installation needs; Plaspy accepts both and automatically detects the tracker protocol on connection.
- When entering the server address you can use either the domain d.plaspy.com or the IP 54.85.159.138 depending on your preference or DNS availability.
- After applying SMS settings, allow time for the device to establish a GPRS session and report to Plaspy before concluding the setup.

## Why Use Plaspy with This Configuration

Using Plaspy with the AoYa T8GPS provides a straightforward path to integrate vehicle location and status reporting into a single platform. Pointing the device at Plaspy using the shared server and port enables continuous monitoring, event reporting, and fleet visualization without per device server configuration complexity.

Learn more about Plaspy and how it supports a wide range of trackers at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device setup methods can change over time; verify the latest device specific configuration and SMS command details on the official AoYa website http://www.aoyagps.com/
