---
slug: /coban/gps103/configuration
id: gps103-configuration
sidebar_label: Configuration
title: Coban - GPS103 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for Coban GPS103 tracker setup with Plaspy including server settings and SMS commands
keywords:
  - Coban GPS103 configuration
  - GPS103 Plaspy setup
  - Coban tracker server configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - GPRS tracker configuration
  - SMS configuration GPS103
  - TCP UDP tracker settings
  - fleet tracking integration
  - Coban GPS platform setup
---

# Coban - GPS103 Configuration

This page documents the public configuration context for using the Coban GPS103 tracker with Plaspy. It summarizes the shared Plaspy server settings, provides practical setup guidance for the GPS103, and includes the common SMS commands that are used in public device workflows. Use this page to prepare the device for communication with Plaspy and to understand what is required before integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so the SMS command examples and the workflow shown here are public facing examples and should be verified against your device firmware and official manufacturer documentation.

## Configuration Overview

The goal of the configuration process is to prepare the GPS103 to reliably send location and event data to Plaspy so devices appear and update correctly on the platform. For GPS103 devices the public configuration path commonly uses SMS commands or vendor tools to set APN, server endpoint, transport, and reporting intervals.

- Configure network access and APN so the device can use GPRS data
- Point the tracker to the Plaspy server endpoint and port used by all devices
- Choose transport mode UDP or TCP according to installer preference and device support
- Set reporting intervals and enable relevant protocol options so Plaspy can detect and parse messages
- Verify connectivity and confirm the device appears in Plaspy with live updates

## Plaspy Server Settings

When configuring the GPS103 for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP is available; set whichever transport the device requires
- Plaspy automatically detects the tracker protocol when the device connects to the server

All devices in Plaspy use the same port so use port 8888 for GPS103 configuration.

## Typical Requirements Before Setup

- A working SIM card with data enabled and correct APN credentials for your mobile operator
- Device powered and reachable by SMS if using SMS configuration commands
- Access to the manufacturer configuration method such as SMS commands or vendor software
- Knowledge of the device password the GPS103 expects for SMS commands; the public default password shown below is 123456
- A testing environment or single device to validate settings before mass deployment
- Basic access to a monitoring account or platform view in Plaspy to confirm the device registers

## How This Tracker Connects to Plaspy

The GPS103 can use GPRS internet data to send position and event messages to the Plaspy server endpoint. Once the device is configured to target the shared Plaspy server and port, Plaspy will receive the messages and automatically detect the protocol so the device can be monitored.

- The device is configured to report to the shared Plaspy server endpoint and port
- Data is transmitted over GPRS using either UDP or TCP transport as set on the device
- Position updates and alarm events are forwarded to Plaspy where they become visible in the platform
- Plaspy automatic protocol detection parses incoming messages so no manual protocol selection is needed on the server side
- Validating the device reporting confirms visibility and operational status in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GPS103 such as SMS commands or a vendor configuration tool.
2. Enter the Plaspy server address by using either d.plaspy.com or the server IP 54.85.159.138 as the device server target.
3. Set the device port to 8888 which is the shared Plaspy port used for all devices.
4. Choose the transport type UDP or TCP if the device configuration requires selecting a transport mode.
5. Configure APN and any APN username and password required by your mobile operator.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking incoming messages and confirming the device appears and updates on the platform.

## Example Configuration Commands

The GPS103 is commonly configured by SMS using the device password. The public default password in these examples is 123456. Replace placeholders with your operator APN credentials where required.

- Optional initial factory reset (use only when needed for initial provisioning)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the APN for the operator
```text
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Set the APN username and password
```text
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with APN username and [apnp] with APN password. If there is no username or password, some operators accept an empty value.

- Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```
This command points the tracker to Plaspy using the public server IP and the shared Plaspy port 8888.

- Set the location update interval example
```text
fix060s060s***n123456
```
This example string is a public command example for update interval configuration as provided by the manufacturer. Keep the exact format required by your firmware.

- Switch the device to GPRS mode and select transport
```text
gprs123456,1,1
```
or
```text
gprs123456
```
Explanation: some firmware variants accept a parameterized transport selector. Use the version that matches your device firmware to enable GPRS and select UDP or TCP.

- Check current settings on the device
```text
check123456
```

- Enable status reporting for fuel sensor or improved digital sensor reporting
```text
protocol123456 18
```

Notes on placeholders and password
- The password 123456 shown above is the public default used in these examples. If you have changed the device password, substitute the correct password in each command.
- Placeholders [apn], [apnu], and [apnp] must be replaced with your operator APN, APN username, and APN password respectively.

## Configuration Notes

- SMS based configuration is commonly used for GPS103 devices but vendor configuration tools or USB interfaces may also be available depending on hardware revision.
- Firmware versions vary and some commands or parameter formats can differ between firmware releases; always verify command syntax against your device firmware notes.
- Choose UDP or TCP based on your installation needs; both transports are supported and Plaspy will accept either on port 8888.
- The adminip command in the examples uses the public Plaspy server IP and port so use exactly that pair when sending the command shown above.
- After changing network settings or server details it is good practice to verify device reporting using the check command and by confirming activity in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured Coban GPS103 provides consistent visibility into vehicle location and event reporting from a platform that automatically detects tracker protocols and uses shared server settings. For fleet operators and individual users this simplifies device onboarding because the same server and port work across supported devices and Plaspy handles protocol parsing.

If you want to learn more about Plaspy visit https://www.plaspy.com and review the latest device guidance on the manufacturer site https://www.coban.net/ to confirm the current firmware commands and any model specific instructions. Manufacturer specifications and setup methods can change over time so verify the latest device specific details with the official manufacturer documentation.
