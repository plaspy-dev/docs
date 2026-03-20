---
slug: /xexun/tk_201/configuration
id: tk_201-configuration
sidebar_label: Configuration
title: Xexun - TK-201 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring Xexun TK-201 to report to Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - Xexun TK-201 configuration
  - Xexun TK-201 setup
  - TK-201 server configuration
  - TK-201 Plaspy
  - Plaspy tracker setup
  - GPS tracker configuration
  - personal tracker configuration
  - SMS configuration TK-201
  - GPRS server settings
  - APN settings
---

# Xexun - TK-201 Configuration

This page documents the public configuration context for using the Xexun TK-201 with Plaspy. It focuses on the practical, public-facing steps and commands that prepare the device to report location and status to the Plaspy platform. Where manufacturer commands are publicly available, those SMS commands are included in this guide to help you point the tracker to Plaspy and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools. The TK-201 supports SMS based configuration and GPRS server settings, so this page includes the common SMS commands and workflow used to register the device with Plaspy.

## Configuration Overview

This configuration process prepares a TK-201 to communicate with Plaspy and ensures the device is visible and reporting correctly on the platform. The steps include configuring network access details, pointing the tracker to Plaspy server settings, and validating that the device is sending updates.

- Configure the device APN and GPRS connection so the tracker can use mobile data to reach Plaspy.
- Set the GPRS server address to Plaspy so the device reports location to the platform.
- Choose the transport protocol if required and ensure the shared Plaspy port is used.
- Verify device reporting and validate that the tracker appears in Plaspy after configuration.
- Use SMS commands or the manufacturer tool as available to apply settings and restart the device.

## Plaspy Server Settings

- Server domain request endpoint d.plaspy.com for DNS based configuration.
- Server IP address 54.85.159.138 as a direct endpoint option.
- Port 8888 which Plaspy uses for all supported devices.
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol when the device connects to the server.

## Typical Requirements Before Setup

- A charged and accessible TK-201 device with working battery and ability to receive SMS.
- A valid SIM card with an active data plan and SMS capability installed in the tracker to set APN and GPRS.
- The device password or admin PIN for configuration commands; the default example password shown below is 123456.
- Operator APN, APN username, and APN password values from the mobile operator if required.
- Access to the manufacturer SMS command list or configuration tool to send SMS commands to the device.
- A way to monitor or validate the device in Plaspy after configuration, such as a Plaspy account and device list.

## How This Tracker Connects to Plaspy

When configured, the TK-201 is set to report location data to the shared Plaspy server endpoint and port. The tracker uses GPRS data to send its position and status, while SMS remains useful for command-based configuration and emergency notifications.

- The device is pointed at d.plaspy.com or the IP 54.85.159.138 so data is routed to Plaspy.
- All devices use port 8888 on Plaspy so you only need to set that single port for supported trackers.
- The tracker may use either UDP or TCP transport on port 8888 depending on device options and network environment.
- Plaspy automatically detects the tracker protocol when the device connects, simplifying platform setup.
- SMS can be used to send configuration commands, perform resets, or request immediate location updates.

## Common Configuration Workflow

1. Access the official Xexun configuration method for the TK-201, typically SMS commands or the manufacturer tool.
2. Prepare network details including APN, APN username, and APN password from the mobile operator.
3. Enter the Plaspy server as d.plaspy.com or as the direct IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 as this is the Plaspy listening port for all devices.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration on the tracker and restart the device if required.
7. Validate that the device reports to Plaspy and is visible in the platform device list.

## Example Configuration Commands

The TK-201 can be configured by sending SMS commands to the device. The following commands are public examples. The sample device password used in these commands is 123456 which is the default in this example. The reset command is optional and typically used only when you need to restore factory settings before applying new configuration.

1. Restore factory settings (optional initial reset)
```text
begin123456
```

2. Set the operator APN
```text
apn123456 {{apn}}
```
- {{apn}} placeholder should be replaced with your mobile operator APN string.

3. Set the APN username (if required)
```text
apnuser123456 {{apnu}}
```
- {{apnu}} placeholder should be replaced with the APN username if your operator requires one.

4. Set the APN password (if required)
```text
apnpasswd123456 {{apnp}}
```
- {{apnp}} placeholder should be replaced with the APN password if required by the operator.

5. Set the GPRS server to Plaspy by IP and port
```text
adminip123456 54.85.159.138 8888
```
- This command sets the tracker to report to the Plaspy server IP and port 8888.

6. Set the GPRS mode
```text
gprsmode123456
```
- Use this command as documented by the manufacturer to enable GPRS mode; exact behavior may vary by firmware.

7. Set the reporting interval to 60 seconds
```text
t060s***n123456
```
- This example sets the update interval; consult manufacturer docs for exact interval format and limits.

Note: If you prefer using the DNS endpoint instead of the IP, replace the adminip command with the corresponding manufacturer command that accepts a domain value, or use the manufacturer tool to enter d.plaspy.com if supported.

## Configuration Notes

- SMS based configuration is commonly used for TK-201 devices; confirm the exact command syntax with the device documentation or vendor since firmware can change command formats.
- The device may accept the Plaspy server by domain d.plaspy.com or by the direct IP 54.85.159.138; use the method your firmware supports.
- Plaspy uses port 8888 for all devices so you do not need a different port per tracker.
- Choose UDP or TCP based on device options and network reliability; some carriers and environments prefer one transport over the other.
- Keep the device password secure and update it after initial setup if the manufacturer workflow supports password changes.

## Why Use Plaspy with This Configuration

Configuring the Xexun TK-201 to report to Plaspy provides a straightforward way to get real time visibility and historical tracking into a centralized platform. For organizations or individuals tracking people, pets, or personal assets, the combination of SMS based configuration and GPRS reporting to Plaspy enables remote setup and consistent data flow to the platform.

To learn more about Plaspy and supported device integration visit https://www.plaspy.com. Manufacturer specifications and command syntax can change over time so verify the latest device specific setup details and firmware behavior on the official Xexun site https://www.xexun.com/ before performing large scale deployments.
