---
slug: /aoya/t2d/configuration
id: t2d-configuration
sidebar_label: Configuration
title: AoYa - T2D Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the AoYa T2D to connect with Plaspy using shared server settings and SMS setup commands
keywords:
  - AoYa T2D configuration
  - AoYa T2D setup
  - AoYa T2D Plaspy
  - AoYa GPS tracker configuration
  - T2D server configuration
  - T2D GPRS setup
  - AoYa tracker SMS commands
  - vehicle tracking configuration
  - fleet tracking Plaspy
  - GPS tracker setup guide
---

# AoYa - T2D Configuration

This page provides the public configuration context for using the AoYa T2D GPS tracker with Plaspy. It consolidates the publicly available setup steps and SMS command examples that are commonly used to prepare the device to report to Plaspy, and it highlights the shared server settings required by the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The T2D commonly supports SMS-based configuration and GPRS reporting, and the commands below reflect public guidance for that flow.

## Configuration Overview

The goal of configuration is to prepare the AoYa T2D so it reliably connects and reports to the Plaspy platform using the shared Plaspy server endpoint and port. Public setup for the T2D typically uses SMS commands to set APN, server address, and GPRS mode, then verifies the device is reporting correctly.

- Set the operator APN and optional APN credentials so the tracker can use GPRS data.
- Configure the Plaspy server address and port so the device knows where to send telemetry.
- Choose the transport mode (UDP or TCP) if the device requires a selection.
- Validate connectivity and confirm the device is visible in Plaspy.
- Use a verification command or check sequence to review current settings on the tracker.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings for the AoYa T2D. Plaspy uses the same port for all supported devices and will detect the device protocol automatically once the tracker can reach the server.

## Typical Requirements Before Setup

- A powered and installed AoYa T2D tracker with access to its SMS command interface.
- A working 2G GSM/GPRS SIM card with data enabled and the correct APN for the mobile operator.
- Knowledge of the APN and, if required, APN username and password for your SIM (placeholders appear below as [apn], [apnu], [apnp]).
- Basic access to the device's default password or credentials used for SMS setup (the public example uses 123456).
- A phone capable of sending SMS commands to the device and the ability to receive SMS responses for verification.
- Access to the official manufacturer documentation or installer tools for reference.

## How This Tracker Connects to Plaspy

The AoYa T2D is configured to use GPRS to send location and device data to the Plaspy server endpoint and port. Once the APN and server details are set, the device opens a GPRS session and transmits packets to Plaspy over the selected transport.

- The tracker reports position and status to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use either UDP or TCP on port 8888 depending on configuration; Plaspy will detect the protocol automatically.
- After successful configuration, Plaspy receives the tracker messages and associates telemetry with the configured device identity.
- Regular reporting and event updates allow visibility in Plaspy for monitoring, geofencing, and operational oversight.
- Verification commands or status checks can be used to confirm the device is registered and transmitting to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method, typically SMS commands for the T2D or the vendor installer tool, and confirm the device default password.
2. Set the APN for your mobile operator using the SMS command with the APN placeholder [apn] and provide APN credentials if required.
3. Enter the Plaspy server address by sending either d.plaspy.com or the IP 54.85.159.138, and set the port to 8888.
4. Choose the transport mode UDP or TCP if the device requires an explicit selection.
5. Apply or save the configuration and, if applicable, restart the device or trigger a reconnect so the new GPRS session starts.
6. Validate that the device reports to Plaspy by using the device's check or status command and confirming visibility in the Plaspy platform.

## Example Configuration Commands

The AoYa T2D supports SMS-based configuration. The following public commands are shown in the same order as recommended in manufacturer guidance. The example uses the public default password 123456 as shown in manufacturer documentation. Keep placeholders intact and replace them with your operator values.

- Optional initial factory reset (use only if you need to restore factory defaults):
```text
begin123456
```

- Set the time zone to UTC 0:
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```

- Set APN username and password if required (replace [apnu] and [apnp] with the actual credentials):
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port:
```text
adminip123456 54.85.159.138 8888
```
(You may also use d.plaspy.com in manufacturer tools where domain names are supported.)

- Switch to GPRS mode and select transport. Example for GPRS mode with parameters:
```text
gprs123456,1,1
```
Or a simple form accepted by some firmware:
```text
gprs123456
```

- Verify current settings on the device:
```text
check123456
```

Notes on placeholders:
- [apn] is the mobile operator APN name.
- [apnu] is the APN username when required.
- [apnp] is the APN password when required.
- Replace 123456 with the device password if you have changed it from the factory default.

## Configuration Notes

- The example SMS commands above are public guidance; exact command syntax can vary by firmware revision. Confirm syntax with the manufacturer if a command is not accepted.
- A factory reset command is included in public examples; use the reset only when required during initial setup or troubleshooting.
- You can set the server using either d.plaspy.com or 54.85.159.138 as shown; some installers prefer the IP address to avoid DNS dependency.
- Plaspy uses the same port 8888 for all supported devices and will automatically detect the tracker protocol once the device can reach the server.
- For transport selection, choose UDP or TCP according to installer preference and device support; behavior may differ slightly based on the device firmware.

## Why Use Plaspy with This Configuration

Configuring the AoYa T2D to report to Plaspy gives organizations a straightforward path to consistent vehicle visibility and operational monitoring. Using the shared Plaspy server settings simplifies onboarding because the same port and endpoint are applied across supported devices, and Plaspy's automatic protocol detection reduces per-device protocol configuration.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior change over time, so verify the latest device specific instructions on the official AoYa site at http://www.aoyagps.com/ before finalizing deployment.
