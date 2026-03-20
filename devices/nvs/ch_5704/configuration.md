---
slug: /nvs/ch_5704/configuration
id: ch_5704-configuration
sidebar_label: Configuration
title: NVS - CH-5704 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for NVS CH-5704 showing Plaspy server settings and example SMS commands for device setup
keywords:
  - NVS CH-5704 configuration
  - NVS CH-5704 setup
  - NVS CH-5704 Plaspy
  - CH-5704 server configuration
  - NVS GPS tracker configuration
  - CH-5704 APN settings
  - Plaspy tracker setup
  - vehicle tracking CH-5704
  - NVS tracker SMS configuration
  - CH-5704 GPRS setup
---

# NVS - CH-5704 Configuration

This page covers the public configuration context for using the NVS CH-5704 automobile terminal with Plaspy. It summarizes the practical, publicly available steps and example SMS commands you can use to point the device at Plaspy's tracking endpoint and verify connectivity. Use this as a deployment reference when preparing CH-5704 units for integration into a Plaspy fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The CH-5704 operates over the GSM channel and supports SMS and GPRS style configuration, so this guide combines Plaspy server details with the public SMS commands commonly used for initial device setup. The device default password shown in public examples is 123456; verify this against your unit and manufacturer documentation.

## Configuration Overview

The goal of configuring the CH-5704 for Plaspy is to prepare the terminal to communicate reliably with the Plaspy backend so vehicle location and status become visible in the platform. Typical configuration uses SMS commands or the manufacturer's configuration tool to set the APN, server endpoint, transport mode, and GPRS operation so the unit can initiate a connection to Plaspy.

- Point the CH-5704 to the Plaspy server endpoint and port so it can open a data session to the platform.
- Configure APN and optional APN credentials so the device can establish GPRS data connectivity.
- Choose UDP or TCP transport as required by installation and device firmware, and set the same port used by Plaspy.
- Activate GPRS mode on the device so it begins reporting to Plaspy.
- Verify configuration with an on-device check command or by confirming the device appears in Plaspy.
- Keep manufacturer documentation and firmware notes available in case syntax differs by revision.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so you can reuse port 8888 for supported units

## Typical Requirements Before Setup

- A powered CH-5704 terminal installed or in a bench test configuration with GSM signal available
- A valid SIM card with data enabled and correct APN details for the mobile operator
- Access to SMS from a phone to send configuration commands, or the official manufacturer configuration tool
- Knowledge of the device password (public examples use the default 123456) to include in SMS commands
- Confirmation of firmware version and command syntax from NVS when available
- A way to restart the device if required after applying settings

## How This Tracker Connects to Plaspy

The CH-5704 is configured to report location and device data over the GSM network to the Plaspy server endpoint and port. Once APN and server settings are applied and GPRS is enabled, the tracker initiates a data connection and sends packets that Plaspy receives and parses using automatic protocol detection.

- Device sends GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888
- Transport is established using either UDP or TCP based on device selection
- Plaspy automatically detects the tracker protocol and maps the device to the correct handler
- Successful connection enables location visibility and event reporting in Plaspy
- Checking the device status with the device check command helps confirm configuration

## Common Configuration Workflow

1. Access the official manufacturer configuration method or send SMS commands according to NVS documentation.
2. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server address.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the CH-5704 requires an explicit transport selection.
5. Configure the APN and optional APN credentials for the SIM card used in the device.
6. Apply or save the configuration and switch the device to GPRS mode so it can start reporting.
7. Restart the device if the firmware requires a reboot for changes to take effect.
8. Validate that the device reports to Plaspy by using the device check command or confirming device visibility in Plaspy.

## Example Configuration Commands

Below are public example SMS commands extracted from manufacturer-provided content. These commands use the device password as shown in public examples. The password in these sample commands is 123456 and is the device default in public documentation. Keep placeholders as provided; replace [apn], [apnu], and [apnp] with your operator values.

- Optional initial factory reset (use only if required):
```
begin123456
```

- Set the time zone to UTC 0:
```
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```
apn123456 [apn]
```

- Set the APN username and password if required (replace [apnu] and [apnp] as needed):
```
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port:
```
adminip123456 54.85.159.138 8888
```

- Switch the device to GPRS mode (two variants shown in public examples):
```
gprs123456,1,1
```
or
```
gprs123456
```

- Verify current settings on the device:
```
check123456
```

Notes on placeholders:
- [apn] — the access point name for your mobile operator
- [apnu] — APN username when the operator requires it
- [apnp] — APN password when the operator requires it

Always confirm command syntax for your firmware version before sending bulk SMS commands.

## Configuration Notes

- SMS command syntax may vary by firmware version and hardware revision; confirm with the official NVS command reference.
- The CH-5704 supports configuring APN and server settings by SMS as shown in public examples, which is useful for remote or in-field setup.
- Choose UDP or TCP based on your operational preference and the device firmware options; Plaspy accepts either and will detect the protocol automatically.
- Plaspy uses port 8888 for all supported devices, so the same port value is applied across unit configurations.
- If a restart is required for settings to apply, plan device downtime and validate after reboot.

## Why Use Plaspy with This Configuration

Configuring the NVS CH-5704 to point at Plaspy provides a straightforward way to add accurate vehicle positioning and monitoring to your fleet operations. By using shared Plaspy server settings and the device's open protocol support, organizations can standardize device setup and achieve consistent reporting into the Plaspy platform for tracking, visibility, and event monitoring.

Learn more about Plaspy at https://www.plaspy.com and verify device-specific configuration details, firmware behavior, and any changes to command syntax on the manufacturer's site https://www.nvs-ts.ru/. Manufacturer specifications and setup methods can change over time, so always confirm the latest information with NVS.
