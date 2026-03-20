---
slug: /xexun/tk_103/configuration
id: tk_103-configuration
sidebar_label: Configuration
title: Xexun - TK-103 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Xexun TK-103 with Plaspy server details and SMS configuration commands
keywords:
  - Xexun TK-103 configuration
  - Xexun TK-103 setup
  - TK-103 server configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - Xexun GPS configuration
  - TK-103 SMS commands
  - GPRS server settings
  - fleet tracking configuration
---

# Xexun - TK-103 Configuration

This page documents the public configuration context for using the Xexun TK-103 tracker with Plaspy. It gathers the shared server values, practical setup guidance, and example SMS commands that are commonly used to point a TK-103 at Plaspy so the device can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS commands below reflect common public instructions for TK-103 style devices and should be combined with the manufacturer documentation for the most current device-specific steps.

## Configuration Overview

The goal of this configuration process is to prepare a TK-103 tracker to communicate reliably with the Plaspy fleet platform, verify connectivity, and enable device visibility and event reporting within your Plaspy account. The public steps typically set the device APN, configure the GPRS server endpoint, and enable periodic reporting.

- Set the mobile operator APN and any optional APN credentials required by the SIM
- Configure the device to report to the Plaspy server endpoint and port
- Choose transport type if required by the device and ensure GPRS data is active
- Set reporting interval and GPRS mode to enable regular updates to Plaspy
- Validate the device appears in Plaspy and confirm event reporting and geolocation visibility

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 where the device requires selection
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices so the port value is shared across trackers

## Typical Requirements Before Setup

- A powered TK-103 unit that is accessible to receive SMS configuration commands
- A working SIM card with data enabled and correct APN information for the mobile operator
- The device password or administrator code for sending SMS configuration commands (sample default password shown below)
- Ability to send and receive SMS messages to the tracker from a configuration phone or tool
- Access to Plaspy to verify the device registers and reports after configuration
- Manufacturer documentation or support resources for firmware specific commands and behavior

## How This Tracker Connects to Plaspy

When configured, the TK-103 uses its GPRS connection to send location updates and events to Plaspy. The device is directed to the shared Plaspy server endpoint and port so the platform can ingest telemetry, display location on maps, and process alarms.

- The tracker reports position and movement data to d.plaspy.com at the configured port
- Event notifications and alarms from the device will be forwarded to Plaspy for monitoring
- Regular interval updates are used to maintain visibility in the Plaspy platform
- Plaspy identifies the tracker protocol automatically so the server can accept data from the device
- Use the shared port setting to standardize configuration across multiple trackers in a fleet

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK-103, commonly SMS commands or vendor software, and confirm the device password.
2. Set the mobile operator APN using the manufacturer command interface with the correct APN value for the SIM.
3. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection during setup.
5. Apply or save the configuration and, if required, restart the tracker to apply network and GPRS changes.
6. Validate that the device reports to Plaspy by checking the device list and recent position updates in your Plaspy account.
7. If updates are not visible, review APN credentials, GPRS mode, and confirm SIM data connectivity, then repeat configuration as needed.

## Example Configuration Commands

The TK-103 can be configured by sending SMS messages to the device. The following commands are public examples in the order often used. The sample setup uses the device password 123456 which is the factory default for many units. Preserve placeholders when replacing them with your operator APN and credentials.

- Optional initial factory reset or restore to defaults (use only if you require a factory restore)
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username if required (replace {{apnu}} with the APN username)
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required (replace {{apnp}} with the APN password)
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (device specific GPRS mode command)
```text
gprsmode123456
```

- Set the reporting interval to 60 seconds example
```text
t060s***n123456
```

Notes on placeholders and password
- {{apn}} is the mobile operator APN string required for GPRS data
- {{apnu}} and {{apnp}} are optional APN username and password fields if your operator requires them
- Replace 123456 with the device password if it has been changed from the factory default
- Send each command as an SMS to the tracker and allow short time for the device to apply settings before sending the next command

## Configuration Notes

- SMS based configuration is commonly used for TK-103 devices; ensure your phone can send SMS to the tracker number and that the tracker is powered.
- Firmware versions and hardware revisions may change command formats or available options; always cross check with the official Xexun documentation.
- Choosing UDP or TCP may affect delivery characteristics; test both if you experience connectivity issues, noting Plaspy supports either transport on port 8888.
- Use the Plaspy server domain or IP as shown above; if you use the domain d.plaspy.com the device will resolve it via the network if supported.
- Confirm APN credentials with your mobile operator before configuring the device to avoid data connectivity failures.

## Why Use Plaspy with This Configuration

Configuring a TK-103 to report to Plaspy provides centralized visibility and operational monitoring for fleets or individual vehicles. With the tracker pointed at Plaspy, organizations can receive timely location updates, monitor alarm events, and maintain a consolidated view of assets for improved security and operational decision making.

Learn more about Plaspy and how it supports GPS trackers at https://www.plaspy.com. For device specific commands, firmware release notes, and the most current setup instructions, verify details with the manufacturer at https://www.xexun.com/ since vendor specifications and configuration methods can change over time.
