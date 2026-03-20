---
slug: /megastek/xt_007/configuration
id: xt_007-configuration
sidebar_label: Configuration
title: Megastek - XT-007 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Megastek XT-007 and how to connect it to Plaspy using shared server settings
keywords:
  - Megastek XT-007 configuration
  - Megastek XT-007 setup
  - Megastek XT-007 Plaspy
  - XT-007 server configuration
  - XT-007 GPS setup
  - vehicle tracker configuration Plaspy
  - tracker SMS configuration
  - GPRS server setup XT-007
  - Megastek tracker setup
  - XT-007 APN configuration
---

# Megastek - XT-007 Configuration

This page covers the public configuration context for using the Megastek XT-007 tracker with Plaspy. It collects the shared server settings and practical setup steps that are commonly used to point an XT-007 to the Plaspy platform and validate connectivity. The guidance below is focused on the publicly available workflow and example SMS commands where provided.

Plaspy uses shared server values across supported devices and will automatically detect the tracker protocol when a device sends data to the platform. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this page as practical guidance and confirm device specific details with Megastek documentation as needed.

## Configuration Overview

The goal of configuring the XT-007 for Plaspy is to ensure the tracker can establish GPRS connectivity, report location and events, and appear correctly in the Plaspy platform. The example commands below show a common SMS based setup flow used with this model.

- Provide the tracker with the correct device ID or IMEI mapping so Plaspy can identify the unit
- Configure the APN so the tracker can use the mobile data network for GPRS
- Set the GPRS server and port to Plaspy so outgoing telemetry reaches the platform
- Configure update interval to control reporting frequency and visibility in Plaspy
- Enable GPRS mode on the device so it uses data rather than SMS for routine position updates

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible XT-007 device with a known IMEI for identification
- An active SIM card installed with a valid data APN for GPRS connection
- Ability to send SMS commands to the device or access the official Megastek configuration tool
- Knowledge of the device password if it differs from the factory default
- Confirmation of firmware revision and any vendor specific command syntax if available

## How This Tracker Connects to Plaspy

The XT-007 is configured to report position and status to the Plaspy server endpoint and port so that devices are visible in the Plaspy platform. Once the GPRS server and APN are correct, the tracker sends periodic telemetry which Plaspy ingests and maps to the device record.

- The tracker sends data to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 using either UDP or TCP depending on the device configuration
- Plaspy automatically detects the protocol and parses incoming messages for the device IMEI or configured ID
- Regular position updates and events allow operational monitoring and geofence or alarm handling in Plaspy
- Successful connection and reporting make the device visible and manageable from the Plaspy platform

## Common Configuration Workflow

1. Access the official Megastek configuration method for the XT-007 such as SMS commands or vendor software
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138
3. Set the server port to 8888 as Plaspy uses the same port for all devices
4. Choose UDP or TCP if the device requires a transport selection for GPRS
5. Configure the APN and any APN username or password required by the mobile operator
6. Apply or save the configuration and restart the tracker if the device requires it
7. Validate that the device reports to Plaspy and appears online on the platform

## Example Configuration Commands

The XT-007 commonly supports SMS based commands. The sample public commands below show a typical SMS sequence. The sample setup uses the factory default password 000000 in these examples. Replace placeholders before sending.

- Notes on placeholders
  - {{imei}} means the device IMEI number, typically 15 digits
  - {{apn}} is the mobile operator APN
  - {{apnu}} is the APN username if required
  - {{apnp}} is the APN password if required

1. Set the device ID or map the device IMEI (replace {{imei}} with the device IMEI)
```
M000000,22,{{imei}}
```

2. Set the operator APN. If the APN requires username or password include them as shown. Replace placeholders accordingly.
```
M000000,23,{{apn}}
```
Or if username and password are required:
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Set the update interval to 60 seconds
```
M000000,25,60
```

4. Set the GPRS server to Plaspy. This example uses the Plaspy server IP and port. The command includes a server slot or index as shown in the device example.
```
M000000,24,56 54.85.159.138,8888
```
Note: Many Megastek devices accept a domain instead of an IP. You can often substitute the domain d.plaspy.com in place of the IP if your firmware accepts domain names:
```
M000000,24,56 d.plaspy.com,8888
```

5. Enable GPRS mode so the tracker uses data reporting
```
M000000,21,2
```

Send each command as an SMS to the device phone number. After sending commands, allow a short period for the device to register on the operator network and initiate GPRS sessions.

## Configuration Notes

- The default device password used in public examples is 000000. Change the device password after initial configuration for security where supported.
- Manufacturer firmware versions and regional variants can change command syntax or server slot indexes. Verify the exact command format against Megastek documentation for your firmware.
- The XT-007 supports SMS based configuration as shown, but some installations may prefer or require vendor software or an installer tool.
- Choose UDP or TCP based on network conditions and any guidance from Plaspy or Megastek; Plaspy will detect the protocol automatically once the device connects.
- Always confirm APN credentials with the mobile operator when GPRS connections fail

## Why Use Plaspy with This Configuration

Configuring the XT-007 to report to Plaspy provides centralized visibility of position and device events, simplifying fleet oversight and alerting. Using the shared Plaspy endpoint and port means a consistent server configuration across devices and allows Plaspy to handle protocol detection and parsing for supported tracker models.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer commands refer to Megastek official documentation at https://www.megastek.com/ to verify any changes since this page was published.
