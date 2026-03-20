---
slug: /bofan/pt621/configuration
id: pt621-configuration
sidebar_label: Configuration
title: Bofan - PT621 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Bofan PT621 to connect with Plaspy using server settings and SMS commands
keywords:
  - Bofan PT621 configuration
  - Bofan PT621 setup for Plaspy
  - PT621 server configuration
  - PT621 GPS tracker configuration
  - Bofan PT621 SMS commands
  - PT621 APN and GPRS settings
  - Plaspy tracker integration
  - GPS platform setup PT621
  - vehicle tracker PT621 configuration
  - fleet tracker PT621 setup
---

# Bofan - PT621 Configuration

This page documents the public configuration context for using the Bofan PT621 tracker with Plaspy. It collects the practical server settings and the publicly available SMS configuration commands commonly used to point a PT621 to Plaspy so the device can report location and events into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so follow these public instructions alongside any official Bofan documentation and your vendor guidance.

## Configuration Overview

The configuration process prepares a PT621 to communicate with the Plaspy platform and ensures the device is visible and reporting correctly. For this model the manufacturer provides SMS based setup commands as a practical method to apply server and APN settings.

- Configure the device identifier so Plaspy can associate reports to the correct asset.
- Apply operator APN and optional APN credentials to enable mobile data connectivity.
- Point the tracker to the Plaspy server endpoint so position and event reports are delivered.
- Set update intervals and reporting behavior to meet your monitoring needs.
- Verify the device reaches the Plaspy server and appears in the platform to confirm end to end connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com as the canonical server endpoint used for device reporting.
- Server IP 54.85.159.138 as an explicit numeric endpoint option when a numeric address is required.
- Port 8888 which is the single port used by Plaspy for all supported devices.
- Transport support for UDP or TCP the PT621 may be configured to use either transport on port 8888.
- Plaspy automatically detects the tracker protocol so the platform can ingest reports from compatible devices without per device protocol mapping.

## Typical Requirements Before Setup

- Power the PT621 from the vehicle power supply and verify the device boots normally.
- A valid mobile SIM with data enabled and SMS capability so you can send SMS configuration commands and allow GPRS connectivity.
- The device IMEI number available for identifier configuration and verification.
- APN name and optionally APN username and APN password from the mobile operator to enable GPRS.
- Access to the manufacturer configuration method for this unit such as SMS commands or vendor software.
- The device default password if required for commands; for PT621 the common default shown in public commands is 000000.

## How This Tracker Connects to Plaspy

The PT621 is configured to report position, alarms, and telemetry to the shared Plaspy server endpoint and port. Once APN and server settings are applied the unit will use mobile data to transmit updates to Plaspy, while SMS remains available for critical alerts or remote configuration when necessary.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on device configuration and network conditions.
- Plaspy automatically detects the device protocol and ingests position and event reports.
- Device identifiers must match the ID configured in Plaspy so the platform can map incoming messages to the correct asset.
- After successful setup the device visibility and telemetry appear in Plaspy for live monitoring and historical reporting.

## Common Configuration Workflow

1. Access the official Bofan configuration method for the PT621 such as the SMS command interface or the vendor software recommended by Bofan.
2. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 in the server setting.
3. Set port 8888 which is the common Plaspy port used for all devices.
4. Choose UDP or TCP if the device requires a transport selection and the local network supports the chosen transport.
5. Configure the device identifier that Plaspy will use to recognize the unit, typically derived from the IMEI per manufacturer guidance.
6. Apply or save the configuration and restart the device if required by the tracker or vendor instructions.
7. Validate the device reports to Plaspy by checking for incoming positions and events in the platform.

## Example Configuration Commands

The PT621 supports SMS based configuration. The following public SMS commands are presented in the order commonly used. Replace placeholders with your device specific values. The default device password shown below is 000000 and may be required to prefix each command.

- Factory reset (optional initial step)
```text
000000DFT
```

- Set the 14 digit identifier used with Plaspy
```text
000000GID<14-digit-identifier>
```
Replace \\<14-digit-identifier> with the 14 digit identifier you want to use, commonly the last 14 digits of the device IMEI.

- Set the APN for the mobile operator
```text
000000APN[apn]
```
Or, if APN username and password are required:
```text
000000APN[apn],[apnu],[apnp]
```
Keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN name, APN username, and APN password respectively.

- Set the GPRS server to Plaspy by numeric IP and port
```text
000000SVR54.85.159.138,8888
```
This command points the tracker to the Plaspy server numeric endpoint and port.

- Set the upload interval to 60 seconds
```text
000000GTI60
```
This sets the tracking interval to 60 seconds. Adjust as needed for your reporting frequency.

Note: Each SMS command is typically prefixed by the device password. The examples above show the public default password 000000 as provided in manufacturer documents. Preserve the correct password for your device if it was changed.

## Configuration Notes

- SMS based configuration is a documented option for the PT621; many installers prefer SMS because it does not require connecting the device to a PC.
- Manufacturer firmware versions and hardware revisions can change command syntax and available features; confirm current commands with Bofan documentation if a command fails.
- Choose UDP or TCP based on your network reliability and operator behavior; UDP is common for tracking but TCP may be preferred where guaranteed delivery is needed.
- The APN command accepts optional username and password placeholders [apnu] and [apnp] when the operator requires credentials.
- The factory reset command is optional and should be used with care; perform it only when required during initial provisioning or troubleshooting.

## Why Use Plaspy with This Configuration

Using the PT621 with Plaspy provides a practical path to bring vehicle position, alarms, and sensor telemetry into a single fleet operations platform. The shared server settings and automatic protocol detection in Plaspy make it straightforward to register and start receiving data once APN and server settings are applied on the device.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific details consult the Bofan manufacturer site https://www.bofancloud.com/ to verify firmware behavior and exact setup instructions.
