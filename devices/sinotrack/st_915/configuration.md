---
slug: /sinotrack/st_915/configuration
id: st_915-configuration
sidebar_label: Configuration
title: SinoTrack - ST-915 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the SinoTrack ST 915 with Plaspy using SMS commands and shared Plaspy server settings
keywords:
  - SinoTrack ST 915 configuration
  - ST 915 setup for Plaspy
  - ST 915 server configuration
  - SinoTrack SMS commands
  - ST 915 APN setup
  - Plaspy GPS tracker integration
  - ST 915 GPRS configuration
  - SinoTrack tracker setup guide
  - Plaspy server settings
  - ST 915 tracking platform setup
---

# SinoTrack - ST-915 Configuration

This page documents the public configuration context for using the SinoTrack ST-915 tracker with Plaspy. It explains the practical server settings and SMS command flow that are commonly used to point the ST-915 to Plaspy so the device can forward location and telemetry over GPRS. Use this guide to prepare the device for integration and to verify the basic steps before registering devices in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the unit reports to the platform. Exact manufacturer side steps can vary by firmware revision, hardware batch, installation type, and vendor configuration tools, so treat the commands below as practical public guidance based on the device SMS interface and the publicly available ST-915 configuration pattern.

## Configuration Overview

The goal of ST-915 configuration for Plaspy is to ensure the tracker can reach the Plaspy endpoint over GPRS and reliably deliver position and telemetry messages. Typical setup uses the device SMS command interface to set the APN, server endpoint, reporting intervals, and operating mode.

- Configure the device APN and credentials so it can establish a GPRS session.
- Point the tracker to the Plaspy server endpoint and port for live reporting.
- Set basic reporting intervals so the device sends position updates at the required cadence.
- Switch the unit to GPRS reporting mode and verify settings with the verification command.
- Validate that the device appears in Plaspy and that location and status messages are received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged ST-915 device with a compatible 2G SIM card installed and an active data plan that supports GPRS and SMS.
- APN name and optional APN username and password from the mobile operator.
- Access to the device SMS command interface or the vendor configuration tool that sends SMS commands.
- Knowledge of the device IMEI for identification and for registering the device in Plaspy.
- A mobile phone or SMS gateway capable of sending the configuration SMS messages to the tracker.
- Basic placement and power verification so the device can get a GNSS fix and establish a GPRS session.

## How This Tracker Connects to Plaspy

When configured, the ST-915 sends GNSS positions and telemetry over GSM GPRS to the configured Plaspy endpoint and port. Plaspy receives the messages, automatically detects the protocol, and maps incoming data to the device by its IMEI or reporting ID so the device is visible and manageable in the platform.

- The tracker reports to the shared Plaspy server endpoint and port for all supported devices.
- Position updates and telemetry are forwarded over GPRS to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol and decodes messages without manual protocol selection in most cases.
- Reporting cadence and event messages are controlled by the tracker reporting interval commands.
- Once reporting begins, Plaspy shows live position, history, and status messages for operational monitoring.

## Common Configuration Workflow

1. Access the official SinoTrack configuration method or software, typically the SMS command interface described in the ST-915 documentation.
2. Enter d.plaspy.com or the server IP 54.85.159.138 in the device server configuration step.
3. Set port 8888 for the GPRS server and choose UDP or TCP if the device requires explicit transport selection.
4. Provide operator APN details using the APN command and include APN username and password if required by the operator.
5. Apply or save the configuration by sending the SMS commands and switch the device to GPRS mode.
6. Restart or allow the device to reboot if required by the tracker after configuration.
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform or by requesting the device settings verification command.

## Example Configuration Commands

The ST-915 uses SMS commands for public configuration. Below are the common commands in the order recommended by the SinoTrack public command set. Preserve the placeholders exactly when replacing with your operator APN details.

- Optional initial factory reset (use only when required for a clean start)
```
RESET
```

- Set the time zone to UTC 0
```
8960000E00
```

- Set the APN of the operator
Note: replace the placeholders with your operator values. {{apn}} is the APN name. {{apnu}} is the APN username and {{apnp}} is the APN password. If your operator does not require a username or password, leave those placeholders blank per the device rules.
```
8030000 {{apn}} {{apnu}} {{apnp}}
```

- Set up the GPRS server to point to Plaspy using the public server IP and port
```
8040000 54.85.159.138 8888
```

- Set update interval when device is on
```
8050000 60
```

- Set update interval when device is off (sleep or low power)
```
8090000 60
```

- Switch the device to GPRS mode
```
7100000
```

- Verify current configuration and read the reporting ID
```
RCONF
```

These commands should be sent as plain SMS messages to the device phone number. Keep the order above when performing a fresh configuration: reset only if needed, then time zone, APN, server, reporting intervals, and finally enable GPRS mode. Use RCONF to verify that the settings applied correctly.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or behavior; verify command compatibility with the device firmware before mass deployment.
- Some installations prefer TCP over UDP for session persistence, while others use UDP for lower overhead. Choose UDP or TCP based on coverage and operator reliability.
- The ST-915 supports SMS based configuration in the public command set above; use the official SinoTrack documentation or vendor tools if you prefer a desktop provisioning method.
- Preserve APN placeholders exactly when composing SMS commands and confirm APN credentials with the mobile operator.
- The posted GPRS server command uses the Plaspy server IP. If your vendor firmware supports DNS names you can use d.plaspy.com where supported, otherwise use the IP 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the ST-915 with Plaspy provides a straightforward path to real time tracking and telemetry reporting for assets and vehicles that benefit from long battery life and rugged hardware. The SMS based APN and server configuration lets integrators and installers point devices quickly to Plaspy without specialized provisioning tools, and Plaspy handles automatic protocol detection so incoming messages are decoded and attributed to the correct device.

To learn more about Plaspy and how it manages device connectivity and fleet visibility visit https://www.plaspy.com. For the latest Sinotrack device specific commands, firmware notes, and detailed product documentation verify current information with the manufacturer at https://www.sinotrackgps.com/ since configuration methods and firmware behavior can change over time.
