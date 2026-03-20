---
slug: /queclink/gv51mg/configuration
id: gv51mg-configuration
sidebar_label: Configuration
title: QuecLink - GV51MG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the QuecLink GV51MG for use with Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GV51MG configuration
  - QuecLink GV51MG setup
  - GV51MG Plaspy configuration
  - GV51MG server settings
  - Plaspy tracker setup
  - vehicle tracker configuration
  - GV51MG SMS commands
  - GV51MG APN settings
  - QuecLink GPS tracker setup
  - fleet tracking configuration
---

# QuecLink - GV51MG Configuration

This page covers the public configuration context for using the QuecLink GV51MG tracker with Plaspy. It gathers the practical, public information needed to point the device at Plaspy and describes the SMS commands that are commonly used for initial setup. The content here is grounded in the GV51MG description and the manufacturer supplied SMS command examples where available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the shared Plaspy server values below when configuring the device and refer to QuecLink resources for device specific details.

## Configuration Overview

This configuration prepares the GV51MG to report position and device events to Plaspy by setting the cellular APN, the Plaspy server endpoint and port, and common device behaviour such as reporting interval and button inputs. The example commands shown use SMS-based configuration, which is one of the public methods available for many QuecLink devices.

- Point the GV51MG to the Plaspy server endpoint and port so the device can deliver location and event data.
- Configure the device APN and authentication placeholders so GPRS/LTE can carry telemetry to the server.
- Set a regular update interval to ensure timely location reporting inside Plaspy.
- Enable inputs or alarm channels (for example SOS) so events appear in the Plaspy platform.
- Validate connectivity and confirm the device appears in Plaspy after applying changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A SIM card with data enabled and a known APN for the device network operator.
- Access to the device physically or the ability to send SMS commands to the device phone number for SMS based configuration.
- The device must be powered and have network connectivity so it can register on the cellular network.
- The QuecLink default device password (example used here is queclink) or access to credentials required by the device to accept configuration commands.
- The operator APN, and optionally APN username and password values to populate APN placeholders.
- Knowledge of the device firmware version and the manufacturer configuration tool or SMS command reference for GV51MG.

## How This Tracker Connects to Plaspy

The GV51MG is configured to send location and event messages to the Plaspy server endpoint and port so Plaspy can display device position, status, and alerts in the platform. Plaspy uses its shared endpoint and port for all supported devices and auto detects the tracker protocol when messages arrive.

- The device sends telemetry to d.plaspy.com or to the backup server IP 54.85.159.138 using the configured transport.
- Port 8888 is used for all devices and must be set on the tracker.
- Transport can be configured as UDP or TCP depending on device settings and installer preference.
- Plaspy detects the tracker protocol automatically so the tracker need only be pointed at the correct address and port.
- Event reporting such as SOS inputs is forwarded to Plaspy once the device is configured to report those inputs.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for GV51MG (SMS commands, USB tool, or vendor configuration software) as provided by QuecLink or your vendor.
2. Enter d.plaspy.com or the backup server IP 54.85.159.138 into the device server configuration fields.
3. Set the device port to 8888 as Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure APN settings and any required APN username or password placeholders for mobile data connectivity.
6. Apply or save the configuration and restart the device if required by the GV51MG firmware.
7. Validate that the device reports to Plaspy by checking device visibility and telemetry in the Plaspy platform.

## Example Configuration Commands

The GV51MG can be configured via SMS using QuecLink AT style commands. The following public examples show a common sequence. The device password used in these examples is queclink which is the factory default in the provided content. If this password has been changed on your device, use the current device password instead.

1) Optional initial step Restore factory settings (use only if a factory reset is required)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2) Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3) Set the operator APN
- Replace placeholders with your operator values:
  - [apn] is the APN string from your carrier
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4) Set the GPRS server to Plaspy by domain and IP with port 8888
- The example includes both the domain and backup IP and uses port 8888 as required by Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5) Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6) Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes about these commands
- Send each command as a single SMS to the device phone number from an allowed number if the device is configured to accept SMS only from specific phone numbers.
- Keep the command order when performing an initial setup: APN and server settings should be set before validating data reporting.
- Preserve placeholders such as [apn], [apnu], and [apnp] and replace them with your carrier credentials when sending commands.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options. Always check the GV51MG manual for the firmware version you are running.
- SMS based setup is a common public method for QuecLink devices, but vendor tools or USB configuration utilities may also be available and can offer bulk or batch configuration.
- Choose UDP or TCP according to your network and reliability needs. Plaspy accepts both and will auto detect protocol at the server side.
- All Plaspy devices use the same port and Plaspy will automatically detect the protocol for incoming messages.
- Keep device access credentials secure and consider changing factory default passwords after initial setup.

## Why Use Plaspy with This Configuration

Using the QuecLink GV51MG configured to point at Plaspy provides a practical way to bring compact, covert vehicle trackers into a centralized tracking platform. For organizations managing lease fleets, BHPH programs, rentals, or basic fleet operations, the combination of GV51MG hardware and Plaspy server settings allows devices to report position and key events into a single monitoring system.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest GV51MG device specific setup details, command references, and firmware documentation, verify the current information on the manufacturer site https://www.queclink.com/ as device behavior and commands can change with firmware and hardware revisions.
