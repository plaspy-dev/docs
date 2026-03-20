---
slug: /telic/sbc3_io/configuration
id: sbc3_io-configuration
sidebar_label: Configuration
title: Telic - SBC3 IO Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Telic SBC3 IO for use with Plaspy including server settings example and SMS setup commands
keywords:
  - Telic SBC3 IO configuration
  - Telic SBC3 IO setup
  - Telic SBC3 IO server configuration
  - Telic SBC3 IO Plaspy
  - SBC3 IO GPS tracker configuration
  - Telic GPS tracker setup
  - vehicle tracking configuration Telic
  - fleet management Telic SBC3 IO
  - Telic tracker Plaspy compatibility
  - SBC3 IO installation guide
---

# Telic - SBC3 IO Configuration

This page covers the public configuration context for using the Telic SBC3 IO tracker with Plaspy. It summarizes the shared Plaspy server settings, explains the practical steps you can take on the device or via SMS configuration, and collects the publicly available commands that help put the tracker online so Plaspy can receive location and I O data.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The SBC3 IO is a rugged outdoor telematics unit with GSM and GPS connectivity, built in battery backup, and digital and analog inputs and outputs, and it can be configured using manufacturer provided methods such as SMS commands shown below.

## Configuration Overview

This configuration process prepares the SBC3 IO to communicate reliably with Plaspy by pointing the device at the Plaspy server endpoint and ensuring GPRS connectivity is enabled and validated. The goal is to enable device visibility in Plaspy and to confirm the tracker reports position and status to the platform.

- Configure the tracker to use the Plaspy server endpoint and port so data is routed to Plaspy.
- Ensure the device has valid mobile data settings such as APN, and credentials if required.
- Enable GPRS mode and any required transport selection so the device can send telemetry.
- Validate connectivity and confirm the device appears in Plaspy so you can monitor location and IO events.
- Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol for compatible units.

## Plaspy Server Settings

- Server domain d.plaspy.com must be accepted by the device or used where the device accepts domain names.
- Server IP 54.85.159.138 may be used when the device requires a numeric address.
- Port 8888 is the port Plaspy uses for device connections.
- Transport support for UDP or TCP depending on device firmware and setting options.
- Automatic protocol detection in Plaspy so the platform identifies the tracker protocol once the device connects.

## Typical Requirements Before Setup

- A powered SBC3 IO unit with access to its configuration method such as SMS or the official Telic configuration tool.
- A working SIM card with mobile data enabled and the correct APN details for the mobile operator.
- Knowledge of the device password if required for commands. The example commands below use the common default password shown in public Telic documentation.
- A way to send SMS messages to the device if using SMS based configuration, or access to Telic software if you prefer that method.
- A charged internal battery or external power during setup to avoid interruptions.
- Access to official Telic documentation for firmware specific notes and the latest command syntax.

## How This Tracker Connects to Plaspy

The SBC3 IO is configured to send its location and IO data over GPRS to the Plaspy server endpoint and port. Once the device is pointed at Plaspy and GPRS mode is enabled, the platform automatically detects the device protocol and begins processing the telemetry.

- The tracker reports position and status to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure the device to use either UDP or TCP transport if the firmware requires a transport selection.
- Plaspy receives the connection and automatically detects the tracker protocol so no protocol selection is required on the platform side.
- After successful setup the device appears in Plaspy for live tracking, event reporting, and IO monitoring.
- Use the provided verification command to query current configuration when supported.

## Common Configuration Workflow

1. Access the official Telic configuration method or software, or prepare to send SMS commands as documented by Telic.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888, remembering that Plaspy uses the same port across supported devices.
4. Choose UDP or TCP if the device firmware requests a transport selection for GPRS connections.
5. Apply or save the configuration on the device, or send the SMS commands to write the settings.
6. Restart the device if the device firmware requires a reboot for network changes to take effect.
7. Validate that the device reports to Plaspy by checking the device list and telemetry on the platform.

## Example Configuration Commands

The SBC3 IO can be configured via SMS commands. The following public commands are presented in the order recommended for initial setup. The example uses the default device password 123456 as shown in public Telic configuration examples. Replace placeholders such as [apn], [apnu], and [apnp] with your operator APN and credentials.

1. Optional initial factory reset (use only if a full reset is required)
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

4. Set the APN username and password if required (replace placeholders as needed)
```text
up123456 [apnu] [apnp]
```

5. Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```
You may alternatively use the server domain if the device accepts domain names:
```text
adminip123456 d.plaspy.com 8888
```

6. Switch to GPRS mode. Some firmware uses the full parameter form, or accepts a short form
```text
gprs123456,1,1
```
or
```text
gprs123456
```

7. Check current settings (verification command)
```text
check123456
```

Notes on placeholders
- [apn] is the operator access point name.
- [apnu] is the APN username if provided by the mobile operator.
- [apnp] is the APN password if required by the operator.

## Configuration Notes

- SMS based setup is publicly documented for this model; if you prefer the Telic configuration tool follow the official vendor instructions for your firmware version.
- Firmware revisions and hardware variants can change command syntax or available options. Confirm the correct command set for your device using Telic documentation.
- Choose UDP or TCP transport based on device support and network behavior. Plaspy accepts both transports on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol once the device connects.
- Keep the device password secure and change defaults if required by your installation policy.

## Why Use Plaspy with This Configuration

Using the Telic SBC3 IO with Plaspy provides a straightforward path to bring rugged outdoor tracking into a central platform for operational visibility. Pointing the device to Plaspy's shared server endpoint and verifying connectivity lets you monitor location, IO events, and device status from a single place, which is useful for fleet operations, asset tracking, and field device monitoring.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and full Telic documentation consult the manufacturer website https://www.telic.de. Device specific behavior and setup methods may change over time so verify the latest instructions with Telic before wide deployment.
