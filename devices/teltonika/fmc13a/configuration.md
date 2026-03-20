---
slug: /teltonika/fmc13a/configuration
id: fmc13a-configuration
sidebar_label: Configuration
title: Teltonika - FMC13A Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for connecting the Teltonika FMC13A to Plaspy with server settings and example commands
keywords:
  - Teltonika FMC13A configuration
  - Teltonika FMC13A setup
  - FMC13A server configuration
  - FMC13A Plaspy setup
  - Teltonika GPS tracker configuration
  - FMC13A tracking software setup
  - Plaspy tracker configuration
  - Fleet tracking FMC13A
  - FMC13A CAN adapter setup
  - FMC13A GPS platform setup
---

# Teltonika - FMC13A Configuration

This page provides the public configuration context for using the Teltonika FMC13A tracker with Plaspy. It focuses on the practical server settings, workflow, and example commands that are commonly used to point the device at Plaspy so the tracker can report location and diagnostic data into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The FMC13A is a 4G LTE Cat 1 device built for North America and supports a range of vehicle monitoring features. Where public commands are available they are included below to help with a practical setup.

## Configuration Overview

The goal of this configuration process is to prepare the FMC13A to communicate reliably with Plaspy, verify connectivity, and make the device visible in the Plaspy platform. The public command example below demonstrates setting APN values and pointing the device to the Plaspy server endpoint and port.

- Configure network access parameters such as APN and credentials
- Point the device to the Plaspy server address so telemetry is delivered to the platform
- Choose transport and save the settings so the device maintains connectivity
- Validate connectivity so the FMC13A appears and reports data in Plaspy
- Use manufacturer configuration tools or SMS commands when supported to apply settings

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port so the FMC13A should be configured to use port 8888

## Typical Requirements Before Setup

- Device powered and accessible either in a bench setup or installed in the vehicle
- Valid 4G LTE data SIM provisioned for North America with the appropriate APN
- Access to the official Teltonika configuration method such as SMS commands or manufacturer software
- Knowledge of the device firmware version and any vendor tools required to apply parameters
- Ability to restart or cycle power on the tracker after applying configuration
- A Plaspy account and a way to confirm the device appears in the platform after setup

## How This Tracker Connects to Plaspy

The FMC13A is configured to report location and device data to the single Plaspy server endpoint and port so the platform can ingest and display telemetry for fleet monitoring. Plaspy detects the tracker protocol automatically and the shared port simplifies device setup.

- The tracker is pointed to d.plaspy.com or the Plaspy IP 54.85.159.138
- The tracker sends telemetry to port 8888 which is used for all devices in Plaspy
- Transport can be selected as UDP or TCP on the device depending on the configuration tool
- Plaspy receives the device data and applies protocol detection automatically
- Once connected the tracker provides location visibility and event reporting within Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMC13A such as SMS setup or the Teltonika tool appropriate for your firmware.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or 54.85.159.138 in the server field.
3. Set the server port to 8888 which is the shared port used by Plaspy for all devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Apply or save the configuration according to the manufacturer tool or SMS confirmation.
6. Restart or power cycle the device if required by the FMC13A firmware to apply new settings.
7. Validate that the device reports to Plaspy and appears in the platform using your Plaspy account.

## Example Configuration Commands

The following public command is a commonly used single line parameter update for Teltonika devices. It sets APN parameters and points the device to the Plaspy server and port. Preserve the placeholders when preparing the command.

- To set APN and server parameters via SMS or the device batch command use:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Brief explanation of placeholders and fields
  - {{apn}} placeholder is for your mobile data provider APN name
  - {{apnu}} placeholder is for the APN username if required by the SIM
  - {{apnp}} placeholder is for the APN password if required by the SIM
  - 2004 is the server host set to d.plaspy.com
  - 2005 is the server port set to 8888
  - Keep placeholders in place until you substitute values appropriate for your SIM and network

If you use a manufacturer tool instead of SMS, apply the same values for server host and port and follow the tool steps to save and push configuration to the device.

## Configuration Notes

- Firmware and tool versions can change parameter identifiers and supported command formats so verify the command syntax for your FMC13A firmware version.
- The FMC13A supports configuration via manufacturer methods such as SMS or the official configuration software; choose the method that matches your installation workflow.
- When a transport selection is required choose UDP or TCP based on your network and carrier considerations and then confirm connectivity in Plaspy.
- Keep APN credentials secure and verify SIM data access before applying server settings.
- Always cross reference any parameter numbers or command formats with Teltonika documentation for the FMC13A before applying changes.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC13A with Plaspy gives organizations a straightforward way to collect location and remote monitoring data from a modern 4G LTE Cat 1 tracker. Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and validating connectivity lets Plaspy ingest the tracker data for fleet visibility, event monitoring, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and manufacturer guidance please verify current information at https://www.teltonika-gps.com/
