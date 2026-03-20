---
slug: /meitrack/t1/configuration
id: t1-configuration
sidebar_label: Configuration
title: Meitrack - T1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack T1 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Meitrack T1 configuration
  - Meitrack T1 setup
  - Meitrack T1 server configuration
  - T1 GPS tracker Plaspy
  - Plaspy tracker configuration
  - vehicle tracker configuration
  - GPS tracker setup Plaspy
  - fleet tracking Meitrack T1
  - T1 tracking software configuration
  - Meitrack GPS platform setup
---

# Meitrack - T1 Configuration

This page describes the public configuration context for using the Meitrack T1 with Plaspy. It focuses on the practical server settings and example commands that enable the tracker to report position and events to the Plaspy platform. Where manufacturer commands are publicly available they are reproduced here for convenience.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you typically only need to provide the correct server endpoint, transport, and port. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so follow the device instructions in parallel with the guidance on this page.

## Configuration Overview

The goal of configuration is to prepare the T1 to communicate reliably with Plaspy so the unit appears in the platform and reports position and events as expected. For the T1 this commonly means applying the manufacturer configuration method and setting the Plaspy server endpoint, maintaining the correct transport, and validating live reporting.

- Configure the tracker to point at Plaspy server d.plaspy.com or the Plaspy server IP
- Ensure the device uses port 8888 which Plaspy uses for all devices
- Select UDP or TCP on the device if required by the device configuration tool
- Save or apply settings and restart the device if required to start reporting
- Verify the device appears and reports in Plaspy so location and events are visible

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A powered and accessible Meitrack T1 with SMS or the manufacturer configuration method available
- A valid SIM card and active data plan if GPRS data is required for reporting
- The device password or credentials needed to send SMS configuration commands or use the manufacturer tool
- Access to the Meitrack configuration instructions or installer tool for your firmware and hardware revision
- A note of the APN details for your cellular provider if the device requires them for GPRS
- A basic plan to validate reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

The T1 is configured to report location and events to the shared Plaspy server endpoint and port. Once the device sends position packets to the Plaspy server d.plaspy.com or the server IP at port 8888, Plaspy detects the device protocol automatically and processes the incoming data for visibility and monitoring.

- The tracker sends location updates to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy accepts either UDP or TCP transport depending on the device configuration
- Position and event messages are processed by Plaspy and displayed in the platform
- Platform users can view live tracking, history, and event alerts for reporting devices
- All devices configured for Plaspy use the same port and automatic protocol detection simplifies integration

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the T1 using the documented SMS commands or manufacturer software
2. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device settings
3. Set the device port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP transport if the device requires a transport selection
5. Apply or save the configuration on the device
6. Restart the device if recommended by the manufacturer or after SMS commands take effect
7. Validate that the device reports to Plaspy and appears in the platform with expected updates

## Example Configuration Commands

The Meitrack T1 can be configured via SMS using the device password followed by commands. The sample public commands below use the default password 0000. Do not change the password in these examples unless you have set a different device password.

- Optional initial factory reset or to restore defaults
```
0000,F11
```
- Set the GPRS server to Plaspy using the server IP and port. [apn] is the mobile network APN. [apnu] and [apnp] are optional APN username and password placeholders and should be included only if your mobile operator requires them.
```
0000,A21,2,54.85.159.138,8888,[apn]
```
- Variant including APN username and password placeholders
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Set the time zone to UTC 0
```
0000,B36,0
```
- Set the location update interval to every 1 minute
```
0000,A12,6,0
```
- Configure events reporting
```
0000,C03,0
```

Notes on placeholders:
- [apn] Replace with your cellular provider APN name required for GPRS data.
- [apnu] Replace with APN username if required by your operator.
- [apnp] Replace with APN password if required by your operator.

Keep the command order when performing an initial setup: optional factory reset, server configuration, timezone, reporting interval, and event settings. If your installer workflow uses a configuration tool instead of SMS, the same server and port values apply.

## Configuration Notes

- The T1 supports SMS based configuration as shown in the example commands; manufacturer tools or USB configuration may also be available depending on firmware.
- Plaspy accepts both UDP and TCP on port 8888. Choose the transport supported or preferred for your installation; Plaspy will detect the protocol automatically.
- Default device password 0000 is used in the sample commands above; change the password after setup if required by your security policy.
- Firmware revisions and vendor tools can change command syntax and available features. Confirm command formats for your specific firmware version.
- Use the official Meitrack documentation and tools when available to avoid unexpected device behavior.

## Why Use Plaspy with This Configuration

Using the Meitrack T1 with Plaspy gives organizations a straightforward path to visibility and operational monitoring by pointing the device at Plaspy's shared server endpoint and port. The platform's automatic protocol detection and consistent port usage simplify integration across fleets and device types, so you can focus on deployment and validation rather than protocol details.

Learn more about Plaspy and how the platform supports third party trackers at https://www.plaspy.com. For device specific instructions, firmware details, and the latest command reference for the Meitrack T1, verify current information on the manufacturer site https://www.meitrack.com/
