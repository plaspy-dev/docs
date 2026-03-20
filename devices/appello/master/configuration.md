---
slug: /appello/master/configuration
id: master-configuration
sidebar_label: Configuration
title: Appello - Master Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Appello Master showing server settings and SMS commands to connect the tracker with Plaspy
keywords:
  - Appello Master configuration
  - Appello Master setup
  - Appello Master Plaspy
  - Appello GPS tracker configuration
  - Appello GPRS setup
  - tracker SMS commands
  - server configuration for GPS tracker
  - fleet tracking setup
  - GPS platform integration
  - device connectivity configuration
---

# Appello - Master Configuration

This page describes the public configuration context for using the Appello Master GPS tracker with Plaspy. It gathers the known, publicly available setup steps and commands used to point the device to Plaspy servers and validate basic connectivity. Use this guide to understand what information Plaspy requires and how the Master commonly receives its server configuration.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, so most configuration tasks focus on pointing the tracker to the correct Plaspy endpoint and confirming communication. Manufacturer setup methods can vary by firmware, hardware revision, installation approach, and vendor utilities, so always compare these public instructions with the device documentation and vendor-provided tools.

## Configuration Overview

The Appello Master is commonly configured to report location and status to a single Plaspy endpoint. The configuration process prepares the device for GPRS communication with Plaspy, validates that updates are received, and enables tracking visibility inside the Plaspy platform.

- Configure the tracker to send data to the Plaspy server endpoint and port.
- Provide APN and any required GPRS credentials so the device can open a data connection.
- Use manufacturer configuration methods such as SMS commands to set server and reporting interval.
- Confirm the tracker is reporting by using a status command or by checking device activity in Plaspy.
- Ensure the default device password is accounted for when sending SMS commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices using different protocols can report to the same port

## Typical Requirements Before Setup

- A working SIM card with data access and SMS capability installed in the tracker.
- Power connected or battery sufficiently charged to perform configuration and testing.
- Access to the manufacturer's SMS configuration method or the vendor tool used for this model.
- The device default password if SMS commands are password protected (the sample default password is 123456).
- Knowledge of the mobile operator APN, and if required, APN username and APN password.
- Ability to receive status reports or view device activity in Plaspy to confirm successful setup.

## How This Tracker Connects to Plaspy

The Appello Master typically uses GSM GPRS to forward location and status packets to Plaspy. Once configured to the shared Plaspy endpoint, the device will open a data channel and send periodic updates and event messages to the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data transport is sent over TCP or UDP depending on device selection; Plaspy accepts both and auto-detects the protocol.
- The tracker sends scheduled position updates and status messages so Plaspy can display location and device health.
- Plaspy receives the data and matches it to the device entry in the platform for visibility and monitoring.
- Verification of reporting is done by checking device activity in Plaspy or by using the device status SMS command.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the Appello Master, typically SMS commands or a vendor configuration tool.
2. Enter the Plaspy server address d.plaspy.com or the direct server IP 54.85.159.138 as the GPRS server.
3. Set the server port to 8888, since Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection; Plaspy supports both and will auto-detect the tracker protocol.
5. Provide the APN values for the installed SIM using the APN commands or vendor tool; include APN username and password if required.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by checking activity in the platform or by sending a status query SMS to the device.

## Example Configuration Commands

The Appello Master can be configured by SMS. The sample commands below use the device default password 123456. Preserve the placeholders when replacing values:

- Factory reset (optional initial setup)
```text
123456begin
```

- Set the time zone to UTC 0
```text
123456time zone 0
```

- Set the operator APN (replace [apn] with your operator APN; include username and password if required)
```text
123456apn [apn] [apnu] [apnp]
```

- Set the APN username
```text
123456apnuser [apnu]
```

- Set the APN password
```text
123456apnpasswd [apnp]
```

- Set the GPRS server to Plaspy using the server IP and port
```text
123456adminip 54.85.159.138 8888
```

- Set the periodic upload interval to 60 seconds
```text
123456t060s***n
```

- Check current device settings and status
```text
123456status
```

Notes on placeholders:
- [apn] is the mobile operator APN string you must provide for GPRS data.
- [apnu] is the APN username when required by the operator.
- [apnp] is the APN password when required by the operator.
These placeholders must be replaced with your operator credentials when sending commands.

## Configuration Notes

- SMS based setup is a common, manufacturer supported method for the Appello Master; commands must be sent from an allowed phone number or using the device password.
- The sample commands use the default password 123456. If the device password has been changed, use the current password instead.
- Plaspy uses port 8888 for all devices and will automatically detect the device protocol whether TCP or UDP is used.
- Firmware revisions and hardware variants can change exact command syntax or behavior; if a command fails, consult the vendor documentation or support.
- If the device requires a reboot after applying settings, perform the restart to ensure the new GPRS and server values take effect.

## Why Use Plaspy with This Configuration

Configuring the Appello Master to report to Plaspy provides a simple way to centralize location updates and device monitoring on a single platform. For fleet and asset managers, using Plaspy with a device configured to the shared server endpoint ensures consistent ingestion of location and status data for visibility, alerts, and operational reporting.

To learn more about Plaspy and supported device integrations, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details for the Appello Master, verify information on the official manufacturer website http://www.cnjeo.com/ as setup methods and firmware behavior can change over time.
