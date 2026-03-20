---
slug: /haicom/hi_602/configuration
id: hi_602-configuration
sidebar_label: Configuration
title: Haicom - HI-602 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Haicom HI-602 integration with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Haicom HI-602 configuration
  - Haicom HI-602 setup
  - Haicom HI-602 Plaspy
  - Haicom HI-602 server configuration
  - HI-602 tracking configuration
  - GPS tracker setup Plaspy
  - GPRS tracker configuration
  - SMS configuration HI-602
  - vehicle tracking Haicom HI-602
  - Plaspy tracker compatibility
---

# Haicom - HI-602 Configuration

This page documents the public configuration context for using the Haicom HI-602 tracker with Plaspy. It summarizes the practical steps and public SMS commands used to point a HI-602 to Plaspy servers and explains what you should confirm before adding the device to the Plaspy platform. The content here uses the HI-602 description and available public configuration commands to show how the tracker can be prepared for use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The HI-602 supports SMS and GPRS configuration; this page includes the SMS-style commands commonly used to set APN, server IP or domain, and reporting intervals when those public commands are available.

## Configuration Overview

The goal of this configuration is to enable the HI-602 to communicate reliably with Plaspy so that location and basic device events become visible in the Plaspy platform. The public setup sequence typically includes telling the device which APN and server to use, selecting transport if required, and setting a reporting interval.

- Configure the tracker APN and GPRS parameters so it can connect to the mobile network for data.
- Point the tracker to Plaspy server settings so data is sent to the correct endpoint.
- Choose TCP or UDP transport on the device if the tracker requires a transport selection.
- Set a reporting interval that matches your monitoring needs while balancing battery or data usage.
- Validate connectivity and confirm the device appears in Plaspy with live location updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and Plaspy will detect the tracker protocol automatically once the device is pointed to the correct server and port.

## Typical Requirements Before Setup

- A charged HI-602 unit with a working SIM card that has data and/or SMS capability as needed
- Knowledge of the mobile operator APN settings for the SIM card you will use
- Access to the manufacturer configuration method such as SMS commands or Haicom configuration software
- Default device password or configured admin password for sending setup commands (the public sample uses 0000 as the default)
- Basic ability to send SMS messages from a phone to the tracker for SMS based configuration
- Access to the Plaspy account where you will register or verify the device after configuration

## How This Tracker Connects to Plaspy

The HI-602 can be configured to send location data over GPRS to the Plaspy server endpoint and port. Once GPRS is active and the device is pointed to Plaspy, the platform will receive position reports and make the device visible in the tracking interface.

- The tracker uses GPRS to open a data connection and send location updates to the Plaspy server endpoint
- Device reports are directed to d.plaspy.com or the server IP 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device selection and network conditions
- Plaspy automatically detects the tracker protocol once traffic reaches the platform
- Reporting intervals and event triggers control how frequently the device sends updates to Plaspy

## Common Configuration Workflow

1. Access the official Haicom configuration method for the HI-602 such as SMS commands or the Haicom PC configuration tool.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is used by Plaspy for all supported devices.
4. Choose UDP or TCP on the device if it requires specifying the transport protocol.
5. Apply or save the configuration on the device and send any required confirmation SMS commands.
6. Restart the tracker if recommended by the manufacturer or required by the device to apply network settings.
7. Validate that the device reports to Plaspy and appears in the platform with live updates.

If you are using SMS-based configuration, perform steps 2 to 4 by sending the manufacturer SMS commands as shown in the example commands section below.

## Example Configuration Commands

The HI-602 can be configured by sending SMS messages to the device. The public sample uses the default device password 0000. Preserve placeholders when replacing values.

1. Set the operator APN
   - Purpose: configure the mobile network APN and optional username or password for GPRS
   - Command format (replace placeholders with your operator values):
```text
#0000,200,[apn],[apnu],[apnp]
```
   - Explanation of placeholders:
     - [apn] is the access point name for the SIM operator
     - [apnu] is the APN username if required by the operator; leave empty if not used
     - [apnp] is the APN password if required; leave empty if not used

2. Set the GPRS server to Plaspy
   - Purpose: point the device to Plaspy server IP and port so data is sent to Plaspy
```text
#0000,210,54.85.159.138,8888,8888,8888,0
```
   - This command sets the GPRS server IP to 54.85.159.138 and configures port 8888. Plaspy also accepts the server domain d.plaspy.com and will detect the tracker protocol automatically.

3. Set the reporting interval to 60 seconds
   - Purpose: configure periodic location update interval
```text
#0000,250,0,60,0,0,0,0,0,0
```
   - This example sets the update interval to 60 seconds. Adjust the numeric interval as needed for your use case.

Notes about these commands:
- The sample device password in the public commands is 0000 which is the factory default in the provided example. If your device password has been changed, use the current device password instead of 0000.
- Send these SMS commands from a phone to the HI-602 in the order shown when preparing a device for first time use.

## Configuration Notes

- Firmware and hardware revisions can change command formats or available parameters; verify commands against your device firmware documentation.
- Choose UDP or TCP according to network reliability and device support; Plaspy accepts both transports on port 8888.
- SMS based configuration is supported and commonly used for initial setup when PC tools are not available.
- Keep APN placeholders [apn], [apnu], and [apnp] ready and confirm exact operator values before sending commands.
- Remember that all devices in Plaspy use the same port and the platform will automatically detect the device protocol once the tracker communicates with the server.

## Why Use Plaspy with This Configuration

Configuring the Haicom HI-602 to send data to Plaspy gives organizations a straightforward path to continuous visibility and operational oversight. Using the shared Plaspy server settings simplifies device onboarding because the same port and automatic protocol detection reduce configuration complexity across different trackers.

To learn more about how Plaspy handles device connectivity and integrations visit https://www.plaspy.com and review current platform features. For the latest device specific commands, firmware notes, and manufacturer instructions verify details on the official Haicom website http://www.haicom.com.tw/ as manufacturer specifications and setup methods can change over time.
