---
slug: /carscop/cc_318/configuration
id: cc_318-configuration
sidebar_label: Configuration
title: Carscop - CC-318 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Carscop CC-318 showing Plaspy server settings and SMS commands for device setup
keywords:
  - Carscop CC-318 configuration
  - Carscop CC-318 setup
  - Carscop CC-318 Plaspy
  - CC-318 GPS tracker configuration
  - CC-318 server configuration
  - CC-318 SMS setup commands
  - GPS tracker server setup Plaspy
  - vehicle tracker Plaspy configuration
  - fleet tracker CC-318 setup
  - Carscop tracking software configuration
---

# Carscop - CC-318 Configuration

This page documents the public configuration context for integrating the Carscop CC-318 tracker with the Plaspy platform. It summarizes the Plaspy server settings and presents the publicly available SMS configuration commands used by the CC-318 so you can prepare the device to report to Plaspy for tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the CC-318 can vary by firmware version, hardware revision, installation type, and vendor tools. The examples below show the CC-318 SMS commands that are commonly used in public documentation and should be used as a practical starting point while confirming device details with the manufacturer.

## Configuration Overview

The goal of this configuration process is to prepare the CC-318 to communicate reliably with Plaspy so vehicle location, alarms, and events appear in the platform. This includes setting the device APN, applying the Plaspy server endpoint, and ensuring the tracker stays online for data upload.

- Configure the device APN and optional APN credentials so the tracker can use mobile data.
- Set the device to report to the Plaspy server endpoint and port so Plaspy receives telemetry.
- Choose UDP or TCP transport on the device if required by firmware, and use Plaspy's shared port.
- Validate connectivity and keep the device online so periodic location updates and alerts reach Plaspy.
- Optionally restore factory settings and apply the vendor-recommended default password before applying new settings.

## Plaspy Server Settings

- Server domain d.plaspy.com for host-based configuration when supported by the device
- Server IP 54.85.159.138 as the Plaspy endpoint when IP is required
- Port 8888 which is the single port used by Plaspy for all supported devices
- Transport support: configure UDP or TCP on the tracker depending on device options
- Plaspy automatically detects the tracker protocol so devices only need to point to the correct host and port

## Typical Requirements Before Setup

- A powered and accessible CC-318 device installed per the manufacturer instructions
- A working GSM SIM with an active data plan and GPRS enabled for internet uploads
- Ability to send SMS commands to the device or access to the vendor configuration tool
- Knowledge of the device password (default shown in the public commands below) and any site-specific password policy
- Confirmation of the device firmware behavior and whether it requires restart to apply settings

## How This Tracker Connects to Plaspy

The CC-318 sends location, alarms, and telemetry over mobile data to the Plaspy server endpoint and port. Once configured to use Plaspy's endpoint, the device becomes visible in the Plaspy platform for monitoring and event handling.

- Device reports are sent to the shared Plaspy endpoint (d.plaspy.com or 54.85.159.138) on port 8888
- The tracker can use either UDP or TCP transport as configured on the device
- Plaspy receives periodic location uploads and alarm/event messages and associates them with the device
- Keeping the device online ensures continuous visibility and timely alerts in Plaspy
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the server side

## Common Configuration Workflow

1. Access the official Carscop configuration method for the CC-318 (SMS commands or manufacturer tool) as documented by the vendor.
2. If configuring via the device interface or SMS, prepare the APN values and any APN username and password required by your mobile operator.
3. Enter d.plaspy.com or 54.85.159.138 as the server hostname or server IP on the device configuration screen or via SMS.
4. Set the port to 8888 on the device and choose UDP or TCP if the device requires transport selection.
5. Apply or save the configuration on the device and restart the tracker if the firmware requires a reboot to activate new settings.
6. Validate that the device reports to Plaspy by checking that the tracker appears online and sends location updates in the platform.

## Example Configuration Commands

The CC-318 supports SMS-based configuration. The following commands are taken from publicly available CC-318 setup examples. The device default password used in these commands is 123456. Replace placeholders as needed.

- Optional initial factory reset (use only when a reset is required):
```text
RESET*123456
```

- Set the time zone to UTC+0:
```text
TIMEZONE*123456*+00
```

- Set the APN for the mobile operator (replace [apn] with your operator APN):
```text
APN*123456*[apn]
```

- Set the APN username and password if required (replace [apnu] and [apnp] with operator credentials):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Set the GPRS server to Plaspy using the public server IP and port:
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online (common command to maintain persistent connectivity):
```text
KEEPONLINE*123456
```

Notes on placeholders and password
- [apn] is the APN provided by your mobile operator.
- [apnu] and [apnp] are optional APN username and password fields supplied by some operators.
- 123456 is shown as the device default password in public CC-318 examples; confirm or change the password per your security policy.

## Configuration Notes

- SMS-based setup is commonly supported by the CC-318; use the vendor SMS command syntax exactly and preserve the device password when editing commands.
- Some firmware versions may accept a hostname such as d.plaspy.com instead of an IP address; the public example uses the IP 54.85.159.138,8888. Confirm which format your firmware accepts.
- Choose UDP or TCP based on device options and network behavior; Plaspy supports both transports and uses port 8888 for all devices.
- Restoring factory settings with RESET*123456 is optional and typically used only when troubleshooting or preparing a device for reassignment.
- Always verify APN credentials and test connectivity after applying settings; a restart may be required for some firmware to apply changes.

## Why Use Plaspy with This Configuration

Configuring the CC-318 to report to Plaspy gives fleet and rental operators consistent, platform-level visibility into vehicle location, alarms, and status. Using Plaspy with the shared server endpoint and automatic protocol detection simplifies device onboarding and reduces per-device configuration complexity while enabling monitoring, event rules, and remote actions where supported.

Learn more about Plaspy and how it supports fleet telemetry and device integrations at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer instructions, check the official Carscop site http://www.carscop.com/ since setup methods and firmware behavior can change over time.
