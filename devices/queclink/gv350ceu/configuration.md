---
slug: /queclink/gv350ceu/configuration
id: gv350ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV350CEU Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV350CEU integration with Plaspy including server settings and SMS commands
keywords:
  - QuecLink GV350CEU configuration
  - QuecLink GV350CEU setup
  - GV350CEU Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker server configuration
  - Fleet tracking device setup
  - QuecLink tracker SMS commands
  - Vehicle telematics configuration
  - GV350CEU GNSS LTE tracker
  - QuecLink Plaspy compatibility
---

# QuecLink - GV350CEU Configuration

This page provides the public configuration context for using the QuecLink GV350CEU with Plaspy. It collects practical setup guidance, the Plaspy server parameters you must apply on the device, and example SMS configuration commands published for the GV350CEU. Use this information as a practical starting point to connect a GV350CEU to Plaspy while following any site or installer procedures you already use.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side steps can vary by GV350CEU firmware, hardware revision, installation type, and vendor configuration tools. The example SMS commands below show a commonly published method for QuecLink devices where SMS or manufacturer tools are used to set APN and server endpoints. Verify firmware specific behavior on the device you have before applying changes.

## Configuration Overview

This configuration prepares the GV350CEU to communicate with Plaspy using the platform's shared server endpoint and port. The goal is to ensure the device reports GNSS fixes and vehicle telemetry to Plaspy reliably and to make the unit visible in the Plaspy platform once reporting is validated.

- Set the device APN and GPRS parameters so the unit can reach Plaspy over cellular data.
- Configure the Plaspy server endpoint and port so reports are routed to d.plaspy.com and the platform ingestion service.
- Choose UDP or TCP transport on the device as required by local network conditions.
- Verify update intervals and event inputs so the device reports at the desired frequency and sends alarms.
- Validate the device is visible in Plaspy after configuration and confirm telemetry and I O events appear as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and the same port 8888 is used for all devices in Plaspy

## Typical Requirements Before Setup

- Physical access to the GV350CEU or remote access to its installer interface as provided by the manufacturer
- A cellular SIM with active data and SMS capability and the correct APN details for the operator
- The device default password or administrative access for configuration; the example commands below use the default password queclink
- Access to the QuecLink SMS configuration method or the official QuecLink software tool for the GV350CEU
- Knowledge of the Plaspy server settings d.plaspy.com and 54.85.159.138 plus port 8888
- A plan for testing reporting and restart procedures after configuration is applied

## How This Tracker Connects to Plaspy

When configured, the GV350CEU sends location fixes, vehicle bus diagnostics, and input events to the shared Plaspy server endpoint and port. Plaspy receives and normalizes the messages and makes the device visible in its dashboards and alerting systems.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com and the IP 54.85.159.138 on port 8888
- The device uses cellular data to stream GNSS fixes and telemetry over TCP or UDP depending on the transport selected
- SMS may be used for initial setup or as a fallback configuration mechanism where supported
- Plaspy automatically detects the tracker protocol so the platform can parse incoming data without per device protocol selection
- Once reporting is active the platform provides maps, history, events, and telemetry for operational monitoring

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV350CEU such as SMS commands or the manufacturer configuration tool
2. Configure the APN settings for the installed SIM using the correct operator APN, APN username, and APN password
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the server endpoint
4. Set the server port to 8888 on the device and choose UDP or TCP if the device requires a transport selection
5. Apply or save the configuration on the device and restart it if the device or workflow requires a reboot
6. Confirm the device is reporting to Plaspy and visible in the platform by checking for recent location updates and telemetry
7. If needed, repeat adjustments for reporting interval, alarm inputs, or transport selection and revalidate visibility in Plaspy

## Example Configuration Commands

The GV350CEU can be configured by sending SMS commands to the device. The following example commands are public examples for QuecLink devices. The commands use the device password queclink which is the default in these samples. Preserve and replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, APN username, and APN password values.

1. Optional initial step restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC plus zero
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the mobile operator APN
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator

4. Set the GPRS server to report to Plaspy on port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to use d.plaspy.com and 54.85.159.138 targeting port 8888

5. Set the periodic update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note that these commands are provided in the order that is commonly recommended for initial setup. Use them as published examples and confirm each command with your device firmware documentation.

## Configuration Notes

- SMS based configuration is a common method on QuecLink devices but the manufacturer tool or USB configuration alternative may be preferred for bulk or offline setups
- Firmware differences and hardware revisions can change command syntax or available parameters so verify commands on your GV350CEU firmware revision
- Choose TCP or UDP based on network reliability and your organization preferences; Plaspy accepts either transport on port 8888
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so you do not need per device protocol selection in the platform
- Keep APN credentials and the device password secure and change administrative passwords according to your security policy after initial provisioning if supported

## Why Use Plaspy with This Configuration

Using the GV350CEU with Plaspy connects vehicle GNSS positioning, CANBus and other vehicle telemetry into a single platform for visibility and operational control. This configuration enables fleets to receive timely location updates, alarms from device inputs, and vehicle bus diagnostics so teams can monitor assets, respond to events, and analyze operational trends.

To learn more about Plaspy and how it integrates with devices like the GV350CEU visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup and command reference on the QuecLink website https://www.queclink.com/.
