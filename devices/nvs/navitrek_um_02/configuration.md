---
slug: /nvs/navitrek_um_02/configuration
id: navitrek_um_02-configuration
sidebar_label: Configuration
title: NVS - Navitrek UM-02 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for NVS Navitrek UM 02 showing Plaspy server values and SMS GPRS configuration for reliable tracking
keywords:
  - NVS Navitrek UM-02 configuration
  - Navitrek UM-02 setup
  - NVS tracker configuration
  - Navitrek GPRS setup
  - Plaspy tracker setup
  - GPS tracker configuration
  - Navitrek UM-02 server configuration
  - Vehicle tracking setup
  - Asset tracking Plaspy configuration
  - Navitrek APN configuration
---

# NVS - Navitrek UM-02 Configuration

This page documents the public configuration context for using the NVS Navitrek UM-02 with Plaspy. It focuses on the practical server settings and SMS based commands published for the model so you can prepare the device to report location and status to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps such as SMS syntax, firmware behavior, or vendor tools can vary by firmware version, hardware revision, and installation type, so use this guide together with the official NVS documentation.

## Configuration Overview

The Navitrek UM-02 is an autonomous search and tracking device that can transmit via GPRS and SMS. The configuration process prepares the device to use the mobile network, point its data connection at the Plaspy server, and enable reporting so the unit becomes visible in the Plaspy platform.

- Configure the device APN and optional APN credentials so it can establish GPRS data.
- Set the Plaspy server address and port so device data is sent to the correct endpoint.
- Enable GPRS reporting mode so the tracker uses data channels instead of or in addition to SMS.
- Verify settings and device responsiveness using the device check command or status messages.
- Confirm visibility and telemetry in Plaspy after the device is configured and online.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com  
- Plaspy server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device selection  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and functioning Navitrek UM-02 unit with access to its SMS control number.  
- An active SIM card with data and SMS capabilities and a known APN for the mobile operator.  
- Knowledge of the device SMS command method or access to the official NVS configuration tool or instructions.  
- The device password for SMS configuration; the public example uses the default password 123456.  
- Ability to receive SMS responses from the device to validate commands and settings.  

## How This Tracker Connects to Plaspy

The Navitrek UM-02 connects to Plaspy by establishing a GPRS data session and sending its telemetry to the Plaspy server endpoint and port. Configuration is commonly done by sending SMS commands to the device to set APN, server, and operational mode.

- The device is pointed at Plaspy by setting the server domain or server IP to d.plaspy.com or 54.85.159.138.  
- The port for all Plaspy devices is 8888 and should be set on the tracker.  
- Transport can be configured as UDP or TCP on the device if required by the firmware.  
- Once GPRS mode is enabled, the tracker initiates connections to the Plaspy endpoint and Plaspy detects the protocol automatically.  
- Plaspy becomes the recipient of location updates and event reports for platform visibility and monitoring.

## Common Configuration Workflow

1. Access the official NVS configuration method for the Navitrek UM-02, typically via SMS commands as published by the manufacturer or via their configuration tool.  
2. Enter the Plaspy server by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.  
3. Set the port to 8888 for the device connection.  
4. Choose UDP or TCP if the device firmware requires selecting a transport protocol.  
5. Configure the device APN and optional APN username and password so GPRS can connect.  
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.  
7. Validate that the device reports to Plaspy by using the device verification command or by checking device status in the Plaspy platform.

## Example Configuration Commands

The Navitrek UM-02 supports SMS based setup using the device password. The sample public commands below use the default password 123456. Send each line as an SMS to the tracker number in the order indicated when order matters.

- Optional initial factory reset (use only when needed)
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
Note: replace [apn] with your mobile operator APN string.

- Set the APN username and password if required by the operator
```
up123456 [apnu] [apnp]
```
Note: replace [apnu] with the APN username and [apnp] with the APN password. These are optional and only needed when the operator requires authentication.

- Set the GPRS server to Plaspy using the public IP and port
```
adminip123456 54.85.159.138 8888
```
This points the device directly to the Plaspy server IP and port. You may instead use the Plaspy domain d.plaspy.com if the device accepts a domain name.

- Switch the device to GPRS mode (two common variants)
```
gprs123456,1,1
```
or
```
gprs123456
```

- Verify current settings on the device
```
check123456
```

## Configuration Notes

- The example SMS commands above use the public default password 123456 in the example configuration. If your device password differs, replace 123456 with the device password.  
- SMS based setup and GPRS mode depend on firmware behavior; command syntax and available variants can change between firmware versions.  
- Choose TCP or UDP according to the device options. Plaspy supports both transports on port 8888 and will detect the protocol automatically.  
- When using adminip with IP and port, you may substitute d.plaspy.com if the device accepts domain names instead of an IP address.  
- Use the verification command check123456 to confirm the device accepted settings and to retrieve current parameters via SMS if supported.

## Why Use Plaspy with This Configuration

Configuring the Navitrek UM-02 to report to Plaspy gives organizations consistent platform visibility into devices across fleets or asset groups. By directing GPRS traffic to the shared Plaspy endpoint and port, the unit's location and event reports become accessible for monitoring, reporting, and operational workflows in the platform.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration details, firmware notices, and installation guidance on the manufacturer site https://www.nvs-ts.ru/. Manufacturer specifications and setup methods can change over time so confirm current procedures on the official NVS resources.
