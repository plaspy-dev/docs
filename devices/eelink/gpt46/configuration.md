---
slug: /eelink/gpt46/configuration
id: gpt46-configuration
sidebar_label: Configuration
title: EElink - GPT46 Configuration
sidebar_class_name: menu_item_tracker
description: Public GPT46 configuration guide for connecting the EElink tracker to Plaspy using shared server settings and SMS commands
keywords:
- EElink GPT46 configuration
- EElink GPT46 setup
- GPT46 Plaspy configuration
- GPT46 server configuration
- EElink GPS tracker setup
- Plaspy tracker configuration
- GPT46 tracking software setup
- GPS platform integration GPT46
- EElink asset tracker configuration
- GPT46 LTE Cat M1 setup
---

# EElink - GPT46 Configuration

This page covers the public configuration context for using the EElink GPT46 tracker with Plaspy. It focuses on the practical steps and server settings required to point the device at Plaspy so the tracker can send location and telemetry to the platform. Where available, this guide includes public SMS commands commonly used to configure the GPT46 for cloud reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on incoming connections. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflows here as a practical starting point and confirm device behavior with the official EElink documentation or firmware notes.

## Configuration Overview

The purpose of configuring a GPT46 for Plaspy is to prepare the tracker to communicate reliably with the Plaspy cloud endpoint, validate connectivity, and enable visibility of the asset within the Plaspy dashboard. The public configuration flow typically centers on setting network APN parameters, pointing the device to Plaspy server settings, and confirming regular reporting intervals.

- Set the device APN so the tracker can establish cellular data connectivity.
- Configure the GPRS server to point to Plaspy using the provided domain or IP and the common Plaspy port.
- Choose the transport type if required by the device firmware, UDP or TCP, both supported for Plaspy on the shared port.
- Set a reporting interval that meets your monitoring needs and battery goals.
- Verify the configuration by checking device parameters or observing incoming data in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com for domain based configuration
- Server IP 54.85.159.138 as an alternative to the domain
- Port 8888 which Plaspy uses for all devices
- Transport support for UDP or TCP on port 8888 depending on tracker configuration
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered GPT46 unit with sufficient battery charge for configuration steps and initial test reporting
- An active SIM card with a data plan and SMS capability if you plan to send SMS commands for configuration
- The correct APN information for the SIM operator ready to enter into the tracker
- Access to the device installation location or the ability to send SMS to the device if remote
- Manufacturer configuration method such as SMS commands or the EElink tool and any required credentials
- A Plaspy account and the ability to check for incoming device connections in Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPT46 reports position and telemetry packets to the shared Plaspy server endpoint and port. Plaspy receives those packets, automatically identifies the tracker protocol, and maps the device data into the platform for visualization and alerts.

- The tracker sends GPRS data to the Plaspy server at d.plaspy.com or to 54.85.159.138 on port 8888
- Transport may use UDP or TCP depending on device selection and firmware support
- Plaspy automatically detects the incoming tracker protocol so no protocol selection is required on the server side
- Regular timer based updates keep the device visible in Plaspy for live tracking and history playback
- Event or movement reports from the tracker appear in Plaspy for alerts and operational workflows

## Common Configuration Workflow

1. Access the official EElink configuration method for the GPT46, for example by SMS commands or the vendor tool supplied by EElink.
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138 as provided.
3. Set the server port to 8888 which is the common port Plaspy uses for all supported devices.
4. If the tracker requires a transport selection, choose UDP or TCP according to the tracker options and network considerations.
5. Add or verify the operator APN settings so the device can establish GPRS data connectivity.
6. Apply or save the configuration and restart the device if required by the firmware or workflow.
7. Validate that the device reports to Plaspy by checking device parameters or monitoring incoming data in your Plaspy account.

## Example Configuration Commands

The GPT46 can be configured by sending SMS messages with specific commands. The public commands below are presented in the order that is commonly used. The factory reset command is optional and typically used during initial provisioning or if you need to clear previous settings.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn],[apnu],[apnp]#
```
Note: Keep the placeholders [apn], [apnu], and [apnp] as needed. Replace [apn] with your operator APN string. If your operator requires a username or password include [apnu] and [apnp] respectively, otherwise you can omit those fields if supported.

- Set the GPRS server by domain using Plaspy settings
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP using Plaspy settings
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```

Use your SMS tool or provisioning software to send these commands to the device phone number. Confirm each response and then verify reporting in Plaspy.

## Configuration Notes

- Firmware differences and hardware revisions can change exact command syntax or available parameters; consult EElink documentation when commands do not behave as expected.
- The GPT46 supports SMS based configuration as shown in the public commands above; alternative vendor tools may also be available from EElink.
- Choose UDP or TCP based on network reliability and any carrier constraints; Plaspy accepts both on the shared port.
- Always verify APN fields with the SIM operator. Use the placeholders [apn], [apnu], and [apnp] when a username or password is required.
- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection on incoming connections.

## Why Use Plaspy with This Configuration

Configuring the GPT46 to report to Plaspy gives organizations centralized visibility for movable assets and fleet elements that require long standby operation and periodic telemetry. With the public configuration steps and server settings above, the GPT46 can deliver regular location updates to Plaspy for live monitoring, history playback, and alerting that supports operational workflows like theft detection and route oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and commands verify information on the manufacturer website https://www.eelink.com.cn/ since setup methods and firmware behavior can change over time.
