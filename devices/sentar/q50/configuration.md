---
slug: /sentar/q50/configuration
id: q50-configuration
sidebar_label: Configuration
title: Sentar - Q50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the Sentar Q50 GPS tracker with Plaspy server settings and SMS commands
keywords:
  - Sentar Q50 configuration
  - Sentar Q50 setup
  - Sentar Q50 server configuration
  - Sentar Q50 Plaspy
  - Q50 GPS tracker configuration
  - Sentar GPS tracker Plaspy
  - Q50 SMS setup
  - Sentar Q50 APN settings
  - Q50 tracking platform setup
  - Sentar Q50 documentation
---

# Sentar - Q50 Configuration

This page documents the public configuration context for connecting the Sentar Q50 tracker to Plaspy. It collects the practical server settings and example manufacturer commands that are publicly available for preparing the device to report location and status to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware, hardware revision, installer method, and vendor tools, so this guide focuses on the public, device neutral steps needed to point the Q50 at Plaspy and validate connectivity.

## Configuration Overview

This configuration process prepares the Q50 to communicate with Plaspy by setting the network parameters, APN if required, and update interval so the device reports to the Plaspy server endpoint and port. The example commands shown here use SMS configuration as provided by the manufacturer in public documentation.

- Point the device to the Plaspy server domain or IP so data is sent to Plaspy
- Configure transport and port so the tracker can establish GPRS reporting sessions
- Provide the operator APN and credentials using the device SMS commands when required
- Set a regular upload interval to control how often the Q50 sends updates to Plaspy
- Verify settings and confirm the device appears on the Plaspy platform

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the Q50:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP when the device requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A powered Q50 device with SMS configuration access or the official manufacturer configuration method
- An active SIM card with GPRS/data enabled and known APN credentials for the operator
- Access to send SMS commands from a phone or SMS tool that the device accepts
- Knowledge of the device password the manufacturer provides; the public example uses 123456 as the default
- A plan to verify connectivity from Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured with the Plaspy server endpoint and port, the Q50 sends location and device messages to the shared Plaspy endpoint so the device becomes visible in the platform. Plaspy receives the data on the configured port and identifies the device protocol automatically.

- The tracker is pointed to the Plaspy server domain or IP address
- The device opens a GPRS session and reports to port 8888 on the Plaspy endpoint
- Transport can be set to UDP or TCP depending on the tracker option
- Plaspy parses incoming messages and maps them to the device profile automatically
- Successful reporting results in device visibility and telemetry in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare SMS commands per the device manual.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device settings.
3. Set the server port to 8888. All devices in Plaspy use the same port.
4. Choose UDP or TCP if the device requires transport selection.
5. Configure APN and credentials if the operator requires them, using the provided placeholders where applicable.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The Sentar Q50 supports SMS based configuration in the public manufacturer instructions. The following commands are the public examples converted from the manufacturer guidance. These commands use the sample device password 123456 which is provided as the default in the public setup material.

- Factory reset command (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the SIM MCC and MNC
```text
pw,123456,imsi#
```

- Set operator APN where [apn] is the APN name, [apnu] is the APN username, [apnp] is the APN password, and xxxyy is the MCC and MNC digits
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: keep the placeholders [apn], [apnu], and [apnp] and replace them with operator values. Replace xxxyy with the combined MCC and MNC digits as required.

- Set GPRS server to the Plaspy IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set upload interval to 300 seconds
```text
pw123456,upload,300#
```

- Check current settings
```text
pw,123456,ts#
```

Notes about these commands:
- The example uses the public default password 123456. If your device uses a different password, replace accordingly.
- Command syntaxes are shown as published in the public configuration sample. Preserve the exact format required by your device firmware.
- If the device accepts a domain name instead of an IP, use d.plaspy.com where your firmware requires a domain string.

## Configuration Notes

- Manufacturer SMS command formats and required punctuation can vary by firmware version; use the exact format your device expects.
- The Q50 public commands show SMS based setup. If you have manufacturer software or a web portal, use that method where recommended by the vendor.
- Choose UDP or TCP based on device capability and network reliability considerations. Plaspy supports both transports and auto detects protocol.
- Preserve and verify APN placeholders when setting mobile data parameters and confirm MCC MNC values with the SIM operator.
- After applying settings, allow a short time for the device to establish a GPRS session and appear on Plaspy.

## Why Use Plaspy with This Configuration

Using the Sentar Q50 with Plaspy gives a straightforward path to platform visibility by pointing the tracker to the shared Plaspy server endpoint and port. That standard endpoint and the platform's automatic protocol detection reduce the need for per device protocol selection on the server side, making it easier to integrate GPS devices that follow public configuration patterns.

To learn more about Plaspy and how it handles device connectivity visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest information on the manufacturer site http://www.sentarsmart.com/ before final deployment.
