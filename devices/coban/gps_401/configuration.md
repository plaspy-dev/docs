---
slug: /coban/gps_401/configuration
id: gps_401-configuration
sidebar_label: Configuration
title: Coban - GPS-401 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for Coban GPS 401 to connect with Plaspy using shared server settings and SMS based commands
keywords:
  - Coban GPS 401 configuration
  - Coban GPS 401 setup
  - GPS 401 Plaspy integration
  - Coban tracker configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - SMS configuration commands
  - GPS tracker server settings
  - fleet management Plaspy
  - GPS tracker configuration guide
---

# Coban - GPS-401 Configuration

This page documents the public configuration context for using the Coban GPS-401 tracker with Plaspy. It covers the practical server settings, common workflow steps, and SMS commands that are publicly available to prepare the device for reporting to Plaspy. Use this guide to understand what needs to be set on the tracker side before the device appears in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so many trackers, including the GPS-401, can be pointed to the same endpoint and port for integration. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands below as publicly available examples and verify details with Coban documentation when needed.

## Configuration Overview

Configuring the GPS-401 for Plaspy prepares the tracker to send location and status data to the Plaspy backend. The process commonly uses the device manufacturer configuration method or SMS commands to set APN, server endpoint, transport mode, and reporting intervals.

- Set the device APN and operator credentials so the tracker can use GPRS data
- Configure the tracker to report to the Plaspy server endpoint and port
- Select transport mode UDP or TCP if required by the device
- Set reporting interval or heartbeat so the platform receives regular updates
- Verify device connectivity and confirm the device appears in Plaspy

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the Coban GPS-401. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered GPS-401 device with access to the SIM card slot and antenna connections as installed
- A valid cellular SIM card with GPRS data enabled and a configured APN for the mobile operator
- The device default password or administrator SMS password for configuration access (sample default shown below is 123456)
- Ability to send SMS messages to the device or access to the manufacturer configuration tool if available
- Basic knowledge of whether your environment needs UDP or TCP transport for the tracker

## How This Tracker Connects to Plaspy

The GPS-401 typically uses GPRS over the cellular network to reach Plaspy. After you configure the device APN and server information, the tracker will open a connection to Plaspy and send position and status reports to the shared server endpoint and port.

- The tracker sends data over GPRS and connects to the Plaspy server endpoint
- Device reports are sent to d.plaspy.com or 54.85.159.138 on port 8888
- You can choose UDP or TCP transport on the tracker where supported
- Plaspy automatically detects the tracker protocol for incoming connections
- Regular location updates, heartbeat packets, and event notifications are used to maintain visibility in Plaspy

## Common Configuration Workflow

1. Access the official Coban configuration method such as the manufacturer SMS command interface or an approved configuration tool
2. Enter the Plaspy server address either as d.plaspy.com or as 54.85.159.138 in the server settings
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP transport if the device requires explicit transport selection
5. Configure the APN, username, and password required by your mobile operator
6. Apply or save the configuration and restart the device when the manufacturer procedure requires it
7. Validate that the device reports to Plaspy and appears in the Plaspy platform

## Example Configuration Commands

The GPS-401 supports SMS based configuration. The following publicly available SMS commands are provided in the order typically used. The device sample default password shown here is 123456. Replace placeholders and values as required for your installation.

- Factory reset command (optional initial step)
``` 
begin123456
```

- Set the time zone to UTC 0
```
time zone123456 0
```

- Set the operator APN
```
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Set the APN username and password
```
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. If your operator does not require credentials, leave them blank or omit as supported.

- Set the GPRS server to Plaspy using the server IP and port provided
```
adminip123456 54.85.159.138 8888
```
Note: The device may accept a domain name in some firmware versions but the public command example uses the Plaspy server IP and port.

- Set update interval example
```
fix060s060s***n123456
```
Explanation: this example sets the fix and reporting parameters as shown in the public configuration content. Adjust intervals to match your reporting policy.

- Switch to GPRS mode and select transport
```
gprs123456,1,1
```
or
```
gprs123456
```
Explanation: use the variant supported by your firmware to enable GPRS. The first form may indicate selecting a transport mode such as UDP or TCP depending on firmware behavior.

- Check current settings
```
check123456
```

- Enable fuel sensor status or improve digital sensor transmission
```
protocol123456 18
```

## Configuration Notes

- Commands are SMS based and apply to the public firmware examples provided. Some firmware revisions or vendor tools may use different command syntax
- You may be able to use the Plaspy domain d.plaspy.com instead of the IP in configuration tools; follow manufacturer guidance for domain support
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and automatically detects the protocol
- Keep the device password secure and change it from the default where appropriate according to installer best practices
- Verify APN, username, and password with your mobile operator before configuring the device

## Why Use Plaspy with This Configuration

Using Plaspy with the Coban GPS-401 provides a straightforward way to consolidate device reporting to a single platform endpoint. By configuring the device to point to Plaspy and setting appropriate reporting intervals, organizations gain consistent location visibility and operational monitoring across devices.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. Please verify the latest device specific configuration details, firmware behavior, and manufacturer guidance on the official Coban website https://www.coban.net/ as these items can change over time.
