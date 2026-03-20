---
slug: /queclink/gv305ceu/configuration
id: gv305ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV305CEU Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV305CEU showing Plaspy server settings and SMS commands for setup
keywords:
  - QuecLink GV305CEU configuration
  - GV305CEU setup for Plaspy
  - QuecLink GPS tracker configuration
  - GV305CEU server configuration
  - vehicle tracker setup
  - fleet tracking configuration
  - QuecLink SMS configuration
  - GV305CEU APN setup
  - Plaspy tracker setup
  - GPS tracker integration Plaspy
---

# QuecLink - GV305CEU Configuration

This page covers the public configuration context for using the QuecLink GV305CEU tracker with Plaspy. It focuses on the practical server settings, basic workflow, and the SMS commands that are commonly used to point a GV305CEU to Plaspy so the device can report location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so the examples below show a practical baseline using Plaspy server values and the public SMS commands provided for this model.

## Configuration Overview

The goal of configuration is to prepare the GV305CEU to communicate reliably with Plaspy so fleet managers gain live tracking, alerts, and historical records. Below are the practical outcomes you should aim for when configuring this tracker.

- Set the tracker to use Plaspy as the reporting endpoint so it sends GNSS and telemetry to the platform.
- Configure cellular APN and network parameters so the device has data connectivity for GPRS or LTE reporting.
- Select transport and server details so the tracker reaches Plaspy on the shared port used by the platform.
- Validate that periodic and event reporting is active so location, ignition and sensor events appear in Plaspy.
- Optionally enable SOS and other input event reporting so critical alerts are delivered to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint details to use when configuring the GV305CEU. Plaspy uses the same port for all supported devices and will attempt to detect the device protocol automatically.

## Typical Requirements Before Setup

- A working SIM card installed in the GV305CEU with an active data plan and SMS capability if you will send SMS commands.
- APN details for the mobile operator including APN, APN username, and APN password.
- Physical access to the device or a configuration cable if you prefer USB configuration instead of SMS.
- Knowledge of the device default password used for SMS or configuration commands; the public sample uses the password queclink.
- Access to the official QuecLink configuration documentation or the vendor configuration tool to confirm any model specific options.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the GV305CEU reports GNSS fixes and telemetry to the shared Plaspy server endpoint and port so vehicles become visible in the Plaspy platform for monitoring and reporting.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy receives its data.
- Transport can be UDP or TCP depending on the device setting and installer preference.
- Plaspy automatically detects the tracker protocol and associates the device with the platform once messages start arriving.
- Regular position reports and event messages enable live monitoring, route playback, and alerting inside Plaspy.
- Input events such as SOS, ignition status, or sensor alerts are forwarded to Plaspy for notifications and automated workflows.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for GV305CEU, for example SMS commands, the vendor mobile tool, or USB configuration per the manufacturer's instructions.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as required by the configuration method.
3. Set the destination port to 8888 which is the shared Plaspy port used across devices.
4. Choose UDP or TCP if the device requires a transport selection and save that option.
5. Configure the device APN and any APN credentials so the tracker can use cellular data to reach Plaspy.
6. Apply or save the configuration and restart the device if the platform or device requires a reboot for changes to take effect.
7. Validate that the device appears in Plaspy and is sending regular updates to the platform.

If you plan to use SMS-based commands, include the SMS steps in the workflow and confirm the device acknowledges each command.

## Example Configuration Commands

The GV305CEU can be configured by sending SMS commands to the device. The sample commands below use the public default device password queclink. If you change the password, substitute it into the commands. Keep the commands in the order shown when performing an initial setup.

1. Optional initial factory reset command labeled as restore factory settings
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN. Replace placeholders as needed:
- {{apn}} is the APN name provided by your mobile operator
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Set the GPRS server to Plaspy. This command configures both the domain and the IP and sets port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on these commands
- Keep the order when performing initial setup so base connectivity and server settings are established before enabling reporting and inputs.
- The APN placeholders must be replaced with your operator specific values. If the operator does not use APN username or password leave those placeholders empty as required by the device syntax.
- The default password queclink is shown in the sample commands. If your device uses a different password, substitute it consistently.

## Configuration Notes

- SMS based configuration is supported and shown here, but you can also use QuecLink official tools or USB configuration depending on installer preference and firmware support.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so the server and port are the critical settings to apply.
- Choose UDP or TCP based on your network and reliability needs. UDP is commonly used for low overhead reporting while TCP can help with reliable delivery depending on device networking.
- Firmware and hardware revisions can change available commands or parameter order. Always confirm the correct command syntax against the device firmware release notes.
- When testing, validate that position updates and input events appear in Plaspy after configuration and after any required device restart.

## Why Use Plaspy with This Configuration

Using the GV305CEU with Plaspy provides a clear path to capturing vehicle location, sensor telemetry, and input events in a single fleet management platform. The device's cellular connectivity, event inputs, and peripheral support combined with Plaspy server settings enable reliable reporting for route playback, alerts, and fleet workflows.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and command syntax on the manufacturer site https://www.queclink.com/ since manufacturer specifications and configuration methods can change over time.
