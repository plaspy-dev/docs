---
slug: /queclink/gv600wg/configuration
id: gv600wg-configuration
sidebar_label: Configuration
title: QuecLink - GV600WG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV600WG tracker setup with Plaspy server settings and example SMS commands
keywords:
  - QuecLink GV600WG configuration
  - QuecLink GV600WG setup
  - GV600WG server configuration
  - GV600WG Plaspy integration
  - Plaspy tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - fleet tracker setup
  - GV600WG SMS commands
  - QuecLink tracker configuration
---

# QuecLink - GV600WG Configuration

This page documents the public configuration context for using the QuecLink GV600WG tracker with Plaspy. It collects the practical server settings, common workflow, and example SMS commands that are commonly used to point this model to Plaspy so the device can report location and telemetry to the platform.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, while the exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide as a practical starting point and consult QuecLink documentation or your integrator for device specific details.

## Configuration Overview

The goal of this configuration is to prepare a GV600WG to communicate reliably with Plaspy, validate connectivity, and enable real time location and event reporting in the platform. The example commands below illustrate a common SMS based configuration flow that sets APN, server endpoint, reporting interval and alarm inputs for Plaspy.

- Configure the device to report to Plaspy server endpoint so Plaspy can decode and display telemetry.
- Assign the cellular APN and credentials so the tracker can establish GPRS data sessions.
- Set the update interval and reporting mode to control how frequently the device sends position and sensor data to Plaspy.
- Enable relevant digital inputs or SOS reporting so the platform receives alarms and events.
- Validate connectivity by confirming the device is listed and reporting on Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered GV600WG unit with a working SIM card and cellular coverage appropriate for your region.
- Access to the device configuration method supported by QuecLink for your unit, for example SMS commands or manufacturer tools.
- The SIM APN, APN username and APN password as required by your mobile operator.
- Knowledge of the device password if it differs from the factory default password.
- A test procedure to confirm the tracker appears and reports on Plaspy after configuration.

## How This Tracker Connects to Plaspy

The GV600WG transmits GNSS position and configured telemetry to Plaspy over the configured transport. The device is set to send data to the shared Plaspy server endpoint and port so Plaspy can decode messages, update the map, and trigger events.

- The tracker is configured to report to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use UDP or TCP for message transport; choose the transport required by your installation.
- Plaspy automatically detects the tracker protocol when messages arrive on the shared port.
- Once reporting is active, Plaspy provides visibility into location, alarm events, and historical telemetry.
- Event reporting such as SOS button presses or input triggers will be forwarded to Plaspy for alerts and workflows.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV600WG such as SMS commands or the manufacturer configuration tool.
2. Enter the Plaspy server address by specifying d.plaspy.com or the IP 54.85.159.138 depending on the device command format.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires a transport selection and save that setting.
5. Provide the SIM APN and any APN credentials required by your mobile operator and save the configuration.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking device status and recent messages in Plaspy.

## Example Configuration Commands

The GV600WG can be configured by sending SMS commands to the device. The following commands are extracted from public configuration examples. The device default password used in these examples is queclink. Send these SMS messages to the device in the order shown when performing an initial setup.

1. Optional initial factory restore step (use only if you need to clear prior configuration):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
Note: This command performs a factory restore and is typically used only when required during initial provisioning.

2. Set the time zone to UTC 0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values):
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the mobile operator APN name.
- {{apnu}} is the APN username when required by the operator.
- {{apnp}} is the APN password when required by the operator.

4. Set the GPRS server to Plaspy using domain and IP with port 8888 (this example includes both domain and IP as configured in public guidance):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command sets the server host and port; Plaspy accepts connections on port 8888 and will automatically detect protocol.

5. Set the update interval to 60 seconds:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Important notes about these commands:
- Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your operator credentials before sending.
- The sample device password used in these commands is queclink which is the factory default password shown in the public example. If the device password has been changed, use the current password.
- Commands are shown in the public sequence and should be sent in the order indicated when performing a standard initial setup.

## Configuration Notes

- SMS based setup is a common and supported method for GV600WG configuration in public examples; confirm that SMS provisioning is enabled and SIM messaging is functional.
- Firmware versions and regional hardware variants can change command syntax or supported parameters; verify exact commands against the device firmware release notes.
- Choose UDP or TCP based on network reliability and integration needs; both transports are supported and Plaspy will accept either on port 8888.
- Preserve the device password and change it according to your security policy if required after provisioning.
- When using the factory restore command, treat it as optional and use it only when you need to revert the unit to default settings before provisioning.

## Why Use Plaspy with This Configuration

Using the GV600WG with Plaspy provides a scalable way to collect real time GNSS and sensor telemetry from trailers and heavy duty assets. The shared Plaspy server settings simplify provisioning across a mixed fleet because all devices point to the same Plaspy endpoint and port while Plaspy automatically detects the protocol and decodes incoming messages.

To learn more about Plaspy and how it handles tracker integration visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time and you should verify the latest setup details on the QuecLink manufacturer site https://www.queclink.com/ and in the device firmware release notes.
