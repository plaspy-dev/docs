---
slug: /uvi_group/vt02n/configuration
id: vt02n-configuration
sidebar_label: Configuration
title: UVI Group - VT02N Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup and server settings for using the UVI Group VT02N with Plaspy for reliable vehicle tracking
keywords:
  - UVI Group VT02N
  - VT02N configuration
  - VT02N setup
  - VT02N Plaspy
  - GPS tracker configuration
  - vehicle tracker setup
  - server configuration Plaspy
  - Plaspy tracker setup
  - GPS platform setup
  - fleet tracking VT02N
---

# UVI Group - VT02N Configuration

This page covers the public configuration context for using the UVI Group VT02N tracker with Plaspy. It explains the practical server settings and common setup steps that prepare the VT02N to report location and device data to the Plaspy platform. Where manufacturer specific commands are publicly available, those examples are included to help technicians and integrators complete setup with confidence.

Plaspy uses a shared server configuration across supported devices and automatically detects the tracker protocol once the device begins reporting. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VT02N supports SMS based configuration and standard GPRS settings commonly used in vehicle trackers so you can apply the shared Plaspy settings shown here while consulting UVI Group documentation for device specific nuances.

## Configuration Overview

Preparing the VT02N for Plaspy focuses on setting the device network parameters and confirming reporting to the platform. The public example commands below use the device default password and demonstrate SMS based configuration for common GPRS and server parameters.

- Configure the device APN so the tracker can connect to mobile data networks and send data to Plaspy
- Point the device at the Plaspy server endpoint and saved port so reporting reaches the platform
- Choose UDP or TCP transport on the device if required and save configuration to the tracker
- Validate device connectivity and reporting using built in verify commands and then confirm visibility in Plaspy
- Optionally restore factory defaults first when preparing a device for a new installation

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device
- Plaspy automatically detects the tracker protocol once the device starts reporting
- Note that all devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Confirm the VT02N has power and is functioning according to the manufacturer guide
- A compatible active SIM card with mobile data enabled and the correct APN settings
- Access to a phone or SMS gateway for sending SMS configuration commands if using SMS setup
- The device default password or current device password for configuration commands
- Access to the official UVI Group configuration manual or vendor tool for reference
- Basic networking information such as the Plaspy server address and whether to use UDP or TCP

## How This Tracker Connects to Plaspy

The VT02N is configured to send its location and status messages to the shared Plaspy server endpoint and port. Once APN and server settings are applied and the tracker has a working mobile data link, Plaspy detects the device protocol automatically and begins ingesting the device reports.

- The tracker uses mobile data to open a session and post telemetry to the Plaspy server address
- Messages are sent to d.plaspy.com or the server IP 54.85.159.138 on port 8888
- Choose UDP or TCP transport when the device requires a selection for packet delivery
- Plaspy automatically determines the correct protocol mapping so no per device protocol selection is required on the server side
- After configuration the device will appear in Plaspy and report position and status updates

## Common Configuration Workflow

1. Access the official UVI Group configuration method such as the SMS command set or vendor configuration tool
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration field
3. Set the reporting port to 8888 which is used by all devices in Plaspy
4. Choose UDP or TCP transport if the device requires a transport selection
5. Apply or save the configuration on the device and send any required confirmation commands
6. Restart the device if the manufacturer instructions recommend a reboot after configuration
7. Validate that the device reports to Plaspy by using device verify commands and by checking the device status in Plaspy

## Example Configuration Commands

The VT02N supports SMS based configuration using the device password. The default device password shown in public documentation is 666666. Send these SMS commands from an authorized phone number to the device SIM in the order shown when preparing a fresh installation. Commands are shown exactly as sent by SMS.

1. Optional initial factory reset command
```
FACTORY,666666#
```
Use this to restore factory settings before a new configuration when needed. Labelled optional and only use if a full reset is required.

2. Set the time zone to UTC 0
```
gmt,666666,e,0#
```
Adjust the gmt parameters for your local time zone if required by the manufacturer documentation.

3. Set the APN for your mobile operator
```
APN,666666,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN name
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required by the operator
If username and password are not required, leave those placeholders empty or omit them according to device syntax.

4. Set the GPRS server to the Plaspy server IP and port
```
server,666666,0,54.85.159.138,8888,0#
```
This server command points the device to Plaspy by IP and port. When using a domain name is required by your device or for readability, configure the vendor tool to use d.plaspy.com where supported.

5. Set the location update interval to 60 seconds
```
timer,666666,,60#
```
Adjust the update interval to match your reporting needs and compliance with local data plans.

6. Verify GPRS server and APN settings
```
GPRSSET,666666#
```
Use this verification command to request the current GPRS and server configuration from the device.

7. Check device status
```
status,666666#
```
This command returns the device status for power, network registration, and other state information as supported by the VT02N.

## Configuration Notes

- SMS based setup is shown in public documentation and is suitable for field configuration when the device has a working SIM and accepts SMS commands
- Firmware revisions or hardware variants can change command syntax and available parameters so confirm command format with the latest UVI Group documentation
- When choosing UDP versus TCP consider your network reliability and operator behavior; both transports are supported and Plaspy detects the tracker protocol automatically
- Preserve the device password and change it according to your security policy where supported by the device
- Confirm operator APN values with the mobile provider and use placeholders [apn], [apnu], and [apnp] when inserting operator credentials

## Why Use Plaspy with This Configuration

Using the VT02N configured to report to Plaspy provides a straightforward path to bring compact vehicle trackers into a centralized fleet platform. Plaspy simplifies server side handling by using a single port for all supported devices and by automatically detecting common tracker protocols, which reduces per device server configuration and accelerates deployments.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time so verify the latest VT02N details on the UVI Group site http://www.uvi-group.com/ before finalizing installations.
