---
slug: /queclink/gv75w/configuration
id: gv75w-configuration
sidebar_label: Configuration
title: QuecLink - GV75W Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV75W setup with Plaspy server settings and SMS commands for basic integration
keywords:
  - QuecLink GV75W configuration
  - GV75W setup Plaspy
  - QuecLink GV75W server configuration
  - GV75W tracking software configuration
  - QuecLink GPS tracker setup
  - GV75W SMS configuration commands
  - Plaspy tracker integration
  - GV75W fleet tracking setup
  - QuecLink asset tracking Plaspy
  - GV75W telemetry configuration
---

# QuecLink - GV75W Configuration

This page documents the public, practical configuration context for using the QuecLink GV75W with Plaspy. It focuses on the settings and command examples that are commonly used to point a GV75W device at Plaspy for live location and telemetry reporting. Use this guide together with the GV75W hardware documentation and your installation procedures.

Plaspy uses shared server settings for all supported trackers and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so confirm specifics against QuecLink resources and any firmware release notes before applying commands in production.

## Configuration Overview

Preparing a GV75W for Plaspy integration typically means configuring the device so it can authenticate to mobile networks, send GPRS position reports to the Plaspy endpoint, and generate event reports that appear in the Plaspy platform. The sample commands below use SMS setup which is a common method for in-field configuration.

- Configure the device APN and cellular connectivity so GPRS data can be transmitted.
- Point the device reporting address and port to the Plaspy server endpoint for telemetry delivery.
- Set reporting intervals and event inputs so Plaspy receives timely position and alarm updates.
- Verify device visibility in Plaspy and validate event triggers such as SOS or ignition inputs.
- Keep device credentials and firmware status recorded for field maintenance and security.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the GV75W installation and the ability to send configuration SMS messages or use the approved QuecLink configuration tool.
- An active SIM card installed in the tracker with data and SMS enabled and sufficient credit or a data plan.
- Power source and a charged or connected backup battery to avoid power loss during configuration.
- Knowledge of the device password for SMS commands the sample uses the default password queclink unless it has been changed.
- Access to the Plaspy server settings d.plaspy.com or 54.85.159.138 and confirmation that port 8888 is reachable from your mobile operator network.
- Confirmation of firmware version and any device-specific instructions from QuecLink for your hardware revision.

## How This Tracker Connects to Plaspy

The GV75W is configured to send GNSS positions and event reports to the Plaspy server endpoint and port. Plaspy ingests scheduled position reports, alarms, and input state changes so devices are visible in live maps, history, and alerting rules.

- The tracker is set to report to the shared Plaspy server endpoint d.plaspy.com and/or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on operator and device preference while Plaspy will accept either and auto detect protocol.
- Scheduled reporting intervals and event-driven messages (for example SOS or input alarms) forward immediately to Plaspy for alerting and history.
- Plaspy shows device telemetry, status, and event notifications once the tracker successfully connects and transmits to the specified endpoint.

## Common Configuration Workflow

1. Obtain the official QuecLink configuration method or tools and confirm the device supports SMS or the chosen configuration interface.
2. Prepare the device with an active SIM and ensure network connectivity from the installation location.
3. Enter the Plaspy server address using d.plaspy.com or 54.85.159.138 in the device server configuration.
4. Set the port to 8888 and choose UDP or TCP if the device asks for transport selection.
5. Apply or save the configuration and send any required SMS setup messages from an authorized phone or SMS gateway.
6. Restart the device if required by the change or if recommended by the manufacturer.
7. Validate that the device reports to Plaspy by confirming the unit appears online in the platform and that position updates and test events are received.

## Example Configuration Commands

The GV75W supports SMS based configuration. The sample commands below are public examples for SMS setup. These commands use the device password queclink which is the default password in the sample. Send each command as an SMS to the device number. Preserve placeholders where shown.

- Restore factory settings (optional during initial setup)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation of APN placeholders
- [apn] is the mobile operator APN name.
- [apnu] is the APN username if required, otherwise leave blank.
- [apnp] is the APN password if required, otherwise leave blank.

- Configure the GPRS server to Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command includes both the Plaspy domain d.plaspy.com and the server IP 54.85.159.138 and specifies port 8888. Plaspy supports UDP or TCP on this port and automatically detects the tracker protocol.

- Set reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes about commands
- Commands are shown in the order recommended for basic setup. The factory reset command is optional and should be used only if you intend to clear existing settings.
- Keep the device password secure. The example uses the default queclink password where provided; if your device has a different password use that instead.
- After applying commands, reboot the tracker if required and verify the device connects to Plaspy.

## Configuration Notes

- Firmware and hardware revisions may change the exact command syntax or required parameters; always check the QuecLink documentation for your device firmware version.
- The GV75W supports SMS configuration as shown in the public examples, but QuecLink configuration tools and PC utilities may offer alternative workflows.
- Choosing UDP or TCP can depend on network reliability and operator behavior; test both if you observe connectivity issues. Plaspy accepts both protocols on port 8888 and auto-detects the tracker protocol.
- Do not leave default passwords in place in production deployments without a plan for secure management of device credentials.
- If you configure both domain and IP for the Plaspy server in the device, the device may try DNS resolution first and fall back to IP depending on firmware behavior.

## Why Use Plaspy with This Configuration

Using the GV75W with Plaspy delivers a practical solution for organizations that need robust outdoor tracking, theft protection, and fleet telemetry. The GV75W’s low power behavior and waterproof housing make it well suited for motorcycles, watercraft, and rugged equipment, while Plaspy provides the cloud endpoint and platform services for live maps, alerts, history, and analytics.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest and device specific setup, firmware notes, and commands consult QuecLink official documentation at https://www.queclink.com/ as device configuration methods and firmware behavior can change over time.
