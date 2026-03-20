---
slug: /eelink/got08/configuration
id: got08-configuration
sidebar_label: Configuration
title: EElink - GOT08 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GOT08 showing how to point the device to Plaspy using shared server settings and SMS commands
keywords:
  - EElink GOT08 configuration
  - GOT08 setup for Plaspy
  - EElink tracker server configuration
  - GOT08 GPS tracker setup
  - OBD tracker Plaspy configuration
  - GOT08 SMS commands
  - vehicle telemetry configuration
  - fleet tracking GOT08
  - Plaspy device setup
  - GOT08 GPRS server setup
---

# EElink - GOT08 Configuration

This page documents the public configuration context for using the EElink GOT08 with Plaspy. It focuses on the practical, public steps needed to point the GOT08 to Plaspy servers, validate connectivity, and confirm reporting into the Plaspy platform using the manufacturer provided configuration method when available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary with firmware level, hardware revision, installation type, and vendor tools. The example SMS commands shown here are the public commands published for GOT08 configuration and should be used as a practical starting point while you verify device details against EElink documentation.

## Configuration Overview

The configuration process prepares the GOT08 to send location and OBD telemetry to the Plaspy platform by setting server endpoints, selecting transport, and confirming reporting. For the GOT08 this is commonly done using SMS commands sent to the device following the manufacturer guidance.

- Point the device to Plaspy server settings so data is delivered to Plaspy for real time tracking and logging.
- Configure the device APN and GPRS server values so the GOT08 can establish mobile data connectivity.
- Set reporting intervals to control how often position and telemetry are sent to Plaspy.
- Validate the tracker is visible in Plaspy and reporting as expected after configuration.
- Use the manufacturer provided SMS commands for direct device setup when available and appropriate.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note: All devices in Plaspy use the same port 8888 and the platform will attempt to detect the device protocol automatically when the device connects.

## Typical Requirements Before Setup

- The GOT08 must be installed in the vehicle OBD II port and powered by the vehicle as described by the manufacturer.
- A valid cellular SIM with an active data plan and correct APN settings for the mobile operator.
- Ability to send SMS commands to the device for provisioning if using the SMS configuration method.
- Access to the device IMEI or identifier for provisioning and for verifying the unit in Plaspy.
- A Plaspy account and any necessary device registration steps in the Plaspy platform to map the device once reporting begins.
- Confirmed knowledge of the device firmware or revision where possible because commands and behavior can vary by firmware.

## How This Tracker Connects to Plaspy

The GOT08 sends location and available OBD telemetry over the mobile network to the Plaspy server endpoint and port. Once the device is pointed to Plaspy, the platform receives the feed and will visualize location and vehicle telemetry data.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Telemetry and GPS position messages are sent over GPRS to the Plaspy host.
- Plaspy receives the incoming connection on port 8888 and automatically detects the tracker protocol.
- Device reporting frequency is controlled by the tracker timer settings and determines how often data appears in Plaspy.
- Visibility in Plaspy allows real time monitoring, alerts, and historical playback of trips and telemetry.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software. For the GOT08 this is commonly SMS based using the published command set.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server command.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection when configuring the server.
5. Configure the APN for your mobile operator so the device can use GPRS data.
6. Apply or save the configuration on the device and restart the tracker if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy by checking device connectivity and incoming messages in the Plaspy platform.

## Example Configuration Commands

The GOT08 can be configured by sending SMS messages with the following public commands in this order. Preserve placeholders when replacing with your operator values.

- Optional initial factory reset (use only if required to restore defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your operator APN. If your operator requires an APN username or password include the optional placeholders [apnu] and [apnp] in that order:
```text
APN,[apn]# 
```
or, if username and password are required:
```text
APN,[apn],[apnu],[apnp]#
```
(Placeholders explanation: [apn] is the access point name for your cellular provider. [apnu] and [apnp] are the optional APN username and password.)

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to use the Plaspy server IP on port 8888:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds:
```text
TIMER,60#
```

- Verify parameter settings:
```text
PARAM#
```

Send each command as a separate SMS message to the device phone number. Maintain the order when following manufacturer guidance that requires sequence.

## Configuration Notes

- SMS based provisioning is a common method for GOT08 devices; confirm the device is able to receive SMS and that the SIM has messaging enabled.
- Firmware and regional variants can change the exact command syntax or available parameters; verify commands against the device firmware notes.
- Choose UDP or TCP according to any manufacturer recommendation; Plaspy accepts both and will detect the protocol automatically when the device connects.
- All Plaspy devices use the same port 8888 so you do not need a unique port per device.
- When using the SERVER command you can point the device either to d.plaspy.com or to the IP 54.85.159.138 as public options for Plaspy connectivity.

## Why Use Plaspy with This Configuration

Using the GOT08 with Plaspy provides a straightforward path to fleet visibility by combining a plug and play OBD device with Plaspy real time tracking, alerts, and reporting. The GOT08 delivers OBD sourced telemetry and GPS position to Plaspy so operators can monitor vehicle health, trips, and location from a central platform.

To learn more about Plaspy and how the platform can work with devices like the GOT08 visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer instructions verify details on the EElink website https://www.eelink.com.cn/ since setup steps and command syntax can change over time.
