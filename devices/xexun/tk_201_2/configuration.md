---
slug: /xexun/tk_201_2/configuration
id: tk_201_2-configuration
sidebar_label: Configuration
title: Xexun - TK-201-2 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Xexun TK-201-2 showing Plaspy server values and SMS configuration commands
keywords:
  - Xexun TK-201-2 configuration
  - Xexun tracker setup
  - TK-201-2 Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - pet tracker configuration
  - Xexun APN settings
  - GPRS tracker setup
  - tracker SMS commands
  - tracking platform integration
---

# Xexun - TK-201-2 Configuration

This page covers the public configuration context for using the Xexun TK-201-2 tracker with Plaspy. It brings together the essential Plaspy server settings and the publicly available device setup commands so you can prepare the tracker to report location and alerts to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so the information below focuses on practical public steps and the SMS commands that are commonly used for this model.

## Configuration Overview

The goal of configuration is to ensure the TK-201-2 can connect to Plaspy, send regular position updates, and deliver event alerts so the device appears and remains visible in the platform. For many units this involves setting APN parameters, pointing the device to the Plaspy server, choosing the transport mode, and confirming update intervals.

- Prepare the device to use GPRS data and/or SMS commands for configuration.
- Provide the operator APN and optional APN user credentials so the tracker can access mobile data.
- Configure the device to send data to the Plaspy server endpoint and port.
- Set reporting intervals and any movement or alert parameters to control visibility in Plaspy.
- Validate connectivity so the tracker appears and reports correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port so you can apply port 8888 across supported trackers

## Typical Requirements Before Setup

- A charged TK-201-2 unit and safe access to the device for configuration.
- A working SIM card with data enabled and SMS capability if SMS setup is used.
- The operator APN and, if required, APN username and password for the mobile network.
- Access to a phone or SMS gateway to send configuration SMS commands to the tracker.
- Manufacturer documentation or vendor tools for reference in case firmware differences affect commands.
- A Plaspy account ready to receive the device once it begins reporting.

## How This Tracker Connects to Plaspy

The TK-201-2 is configured to report positions and events to the shared Plaspy server endpoint and port so the device can be monitored from the Plaspy platform. Once the device is pointed at d.plaspy.com or 54.85.159.138 and port 8888, Plaspy will handle protocol detection and begin ingesting reports.

- The tracker sends periodic location updates to the Plaspy server endpoint on port 8888.
- Movement, overspeed, and low battery alerts reported by the device become visible in Plaspy.
- Plaspy detects the tracker protocol automatically so you do not need to select a protocol in the platform.
- Using the correct APN and GPRS mode lets the tracker open a data connection to d.plaspy.com or 54.85.159.138.
- Choosing UDP or TCP on the device determines transport but Plaspy accepts either on the shared port.

## Common Configuration Workflow

1. Access the official Xexun configuration method for the TK-201-2, typically SMS commands or vendor tools provided by the manufacturer.
2. Enter the Plaspy server address d.plaspy.com or the server IP 54.85.159.138 in the GPRS server field.
3. Set the port to 8888 on the tracker configuration screen or in the SMS command.
4. Choose UDP or TCP on the device if transport selection is required.
5. Provide the operator APN and optional APN username and password using the manufacturer configuration method.
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy and appears in the platform with the expected update interval and alerts.

## Example Configuration Commands

The TK-201-2 can be configured using SMS commands. The sample SMS commands below use the device password 123456 which is the default password shown in public documentation. Keep the command order when performing initial setup. The placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator APN, APN username, and APN password respectively.

- Optional initial factory reset or initialization (use only if needed):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your mobile operator APN):
```text
apn123456 {{apn}}
```

- Set the APN username if required (replace {{apnu}} with APN username):
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required (replace {{apnp}} with APN password):
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (use the device default or the mode recommended in manufacturer documents):
```text
gprsmode123456
```

- Set the update interval to 60 seconds:
```text
t060s***n123456
```

Notes about placeholders and password
- {{apn}} is the network operator APN. Replace it with the exact APN string provided by the SIM operator.
- {{apnu}} and {{apnp}} are optional and only needed if your operator requires APN authentication.
- 123456 in these examples is the device password used in these public commands. Use the actual password for your device if it has been changed.

## Configuration Notes

- SMS based configuration is shown here because those commands are part of the publicly available setup content for this model.
- Firmware versions and hardware revisions can change command behavior; consult official Xexun documentation when in doubt.
- Choosing TCP versus UDP affects transport reliability and overhead; configure whichever transport your network and device support.
- All Plaspy supported devices use port 8888 so the same port is applied across devices when pointing to Plaspy.
- If you perform a factory reset using begin123456, label it as optional and only use it if you need to restore factory defaults.

## Why Use Plaspy with This Configuration

Using the TK-201-2 with Plaspy provides a straightforward path to continuous location visibility and event reporting for pet tracking and broader personal or workforce safety use cases. By pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 and configuring APN and reporting intervals, you can integrate the device into Plaspy quickly and rely on the platform to detect the tracker protocol automatically.

Learn more about Plaspy at https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details with the official Xexun website https://www.xexun.com/ as vendor documentation and firmware can change over time.
