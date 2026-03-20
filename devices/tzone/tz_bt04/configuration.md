---
slug: /tzone/tz_bt04/configuration
id: tz_bt04-configuration
sidebar_label: Configuration
title: TZone - TZ-BT04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-BT04 data logger with Plaspy server settings and SMS setup commands
keywords:
  - TZone TZ-BT04 configuration
  - TZ-BT04 setup for Plaspy
  - TZone tracker Plaspy
  - TZ BT04 server configuration
  - TZ-BT04 tracking software configuration
  - TZone data logger setup
  - TZ-BT04 GPRS configuration
  - TZone temperature humidity logger
  - Plaspy device configuration
  - TZone TZ BT04 platform setup
---

# TZone - TZ-BT04 Configuration

This page describes the public configuration context for using the TZone TZ-BT04 with Plaspy. It collects the practical, published steps you can use to prepare the device to upload temperature and humidity data to the Plaspy platform. The TZ-BT04 is a Bluetooth Low Energy data logger that also supports uploading collected data to a server via a GPRS connection; this guide focuses on the publicly documented GPRS configuration relevant to Plaspy compatibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the device. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the public settings that Plaspy requires and consult the manufacturer for device specific differences before applying changes to production devices.

## Configuration Overview

The goal of configuration is to enable the TZ-BT04 to send recorded data to Plaspy so the platform can show device telemetry and history. For TZ-BT04 devices that upload via GPRS, the public setup commonly requires setting the operator APN, a reporting interval, and the Plaspy server address and port.

- Configure the device APN so the SIM can access GPRS data services.
- Set an appropriate upload or reporting interval so the device sends data at the desired cadence.
- Point the device to Plaspy server settings so uploads are accepted by the platform.
- Enable GPRS upload mode on the device once network settings are in place.
- Validate that the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

When configuring the TZ-BT04 for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will attempt to detect the correct protocol automatically when the device connects.

## Typical Requirements Before Setup

- Ensure the TZ-BT04 has sufficient battery or an active power source for configuration and testing.
- Have a SIM card with active mobile data and the operator APN details available.
- Ability to send SMS commands to the device if using the device SMS configuration method shown in this guide.
- Confirm GPRS coverage at the device location so uploads can reach the Plaspy servers.
- Access to the manufacturer configuration guide or tools for the TZ-BT04 to follow device specific instructions.
- An active Plaspy account or access to your Plaspy platform instance to verify the device reports after setup.

## How This Tracker Connects to Plaspy

The TZ-BT04 can upload collected telemetry to a remote server over a GPRS connection. For Plaspy compatibility, the device is configured to report to the shared Plaspy server endpoint and port so the platform can ingest and present data.

- The device uses GPRS to open a connection to Plaspy server domain or IP on port 8888.
- Data is sent over either UDP or TCP depending on device settings and Plaspy detection.
- Plaspy automatically detects the device protocol and accepts incoming device connections.
- Once connected, Plaspy stores and displays historical data and real time reports from the device.
- Platform visibility and alerts depend on correct APN, server, and transport configuration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TZ-BT04. For many installations this is an SMS based command set or the manufacturer tool described in the device manual.
2. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device.
3. Set the port to 8888 in the device server/GPRS configuration.
4. Choose the transport protocol UDP or TCP if the device requires an explicit selection.
5. Configure the operator APN and any APN credentials required for the SIM card.
6. Apply or save the configuration and activate GPRS upload mode on the device.
7. Restart the device if required by the manufacturer and validate the device reports to Plaspy.

If you use SMS commands for configuration, follow the manufacturer order for commands and verify each step before proceeding to the next.

## Example Configuration Commands

The TZ-BT04 can be configured using SMS commands. The following public commands are presented in the order recommended by the manufacturer. Replace placeholders where noted and send each command by SMS to the device.

1. Set the operator APN
```
*000000,011,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN string required by your mobile provider.
- [apnu] is the APN username when required by the operator, otherwise leave blank or omit if the device supports it.
- [apnp] is the APN password when required by the operator, otherwise leave blank or omit if the device supports it.
- Some device firmware supports a shortened form without username and password:
```
*000000,011,[apn]#
```

2. Set the update interval to 60 seconds
```
*000000,018,60,999#
```
- This command sets reporting or upload intervals; adjust "60" to the desired seconds if supported by the firmware.

3. Set the GPRS server to the Plaspy server IP and port
```
*000000,015,0,54.85.159.138,8888#
```
- This example uses the Plaspy server IP and port 8888 as publicly documented.
- If the device accepts a domain name instead of IP you may use d.plaspy.com where supported.

4. Activate GPRS upload mode
```
*000000,016,1#
```
- This command enables GPRS reporting mode on the device.

Follow the command order as shown above when configuring a device for the first time. If the device or firmware requires different command forms, use the manufacturer manual.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions may change command syntax or supported parameters; always check the TZ-BT04 manual for firmware specific syntax.
- The TZ-BT04 supports SMS based configuration in the public commands above; some integrators may use vendor tools instead.
- Choose UDP or TCP according to device capabilities; Plaspy supports both and will try to detect the correct protocol automatically.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across multiple tracker models.
- Testing connectivity after each change helps isolate issues with APN, network coverage, or command syntax.

## Why Use Plaspy with This Configuration

Using Plaspy for TZ-BT04 uploads centralizes data collection and provides a consistent endpoint for devices that support GPRS uploads. Plaspy's shared server settings and automatic protocol detection reduce per-device server configuration complexity and make it easier to bring multiple devices online with a consistent workflow.

To learn more about Plaspy and the platform features that help aggregate and visualize device data, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and command syntax for the TZ-BT04, verify current information on the manufacturer website http://www.tzonedigital.com/
