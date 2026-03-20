---
slug: /atrack/ax5/configuration
id: ax5-configuration
sidebar_label: Configuration
title: ATrack - AX5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AX5 setup with Plaspy including server parameters commands and workflow
keywords:
  - ATrack AX5 configuration
  - AX5 setup
  - ATrack configuration for Plaspy
  - AX5 server settings
  - vehicle tracker configuration
  - GPS tracker setup
  - fleet management tracker
  - Plaspy compatible devices
  - OBDII tracker configuration
  - AX5 GPRS configuration
---

# ATrack - AX5 Configuration

This page documents the public configuration context for using the ATrack AX5 tracker with the Plaspy platform. It focuses on the practical server settings, required prerequisites, and example manufacturer commands that are publicly available for getting the AX5 to report into Plaspy. Use this guidance together with the manufacturer's tools and documentation for device specific steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so follow the manufacturer methods for applying changes and use the commands below as public examples for configuring the AX5 to send data to Plaspy.

## Configuration Overview

The goal of this configuration is to prepare the AX5 so it reliably connects to Plaspy, reports position and event data, and is visible in the Plaspy platform. This typically includes setting APN and GPRS parameters, configuring the reporting interval, and pointing the device at the Plaspy server endpoint and port.

- Configure the device to use GPRS and the carrier APN so it can send data over mobile networks.
- Set reporting intervals and event triggers so the device reports at the desired cadence.
- Point the tracker to the Plaspy server endpoint so data reaches the platform.
- Validate the device is connecting and visible in Plaspy after applying settings.
- Use manufacturer tools or AT commands where provided to apply changes and confirm status.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the AX5. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port or the installed AX5 device to apply configuration or restart the unit if required.
- A powered device with sufficient battery or vehicle power connected so the unit can register on the mobile network.
- Active SIM card with mobile data enabled and correct APN credentials for your carrier.
- Access to the official ATrack configuration method or software or an interface that accepts the AX5 AT commands.
- Knowledge of the APN placeholders such as {{apn}}, {{apnu}}, and {{apnp}} so you can provide correct carrier values when needed.
- Basic network visibility to confirm the device can reach the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

When configured with the Plaspy server settings, the AX5 uses its GPRS connection to send position and event messages to the shared Plaspy endpoint and port. Plaspy then detects the tracker protocol automatically and processes incoming data so the unit appears in the platform.

- The AX5 sends GPRS traffic to Plaspy using TCP or UDP targeting port 8888.
- The device reports periodic location updates based on the configured tracking interval.
- Event inputs such as ACC or panic can trigger immediate reports to the Plaspy server.
- Plaspy parses the incoming protocol automatically so no per device protocol selection is required on the platform side.
- Confirming connectivity to d.plaspy.com or the IP 54.85.159.138 on port 8888 verifies device reachability to Plaspy.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software provided by the manufacturer or your installer.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP on the device if a transport selection is required by the configuration tool.
5. Set the APN and any necessary APN username and password values for the SIM using placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when applying settings.
6. Apply or save the configuration and restart the device if required by the tool or firmware.
7. Validate that the device reports to Plaspy by checking the device status with the manufacturer verification command or by confirming visibility in the Plaspy platform.

## Example Configuration Commands

The AX5 supports AT style configuration commands. The following public commands are provided as an example sequence for pointing the device at Plaspy and configuring basic reporting. Preserve the order when the order is important.

1. Configure ACC input events and reporting actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Set tracking time interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```

3. Set the device to binary mode
```text
AT$FORM=1,@P,0,""
```

4. Configure the GPRS server with APN placeholders and Plaspy server IP and port
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
- Explanation of placeholders
  - {{apn}} is the carrier APN name
  - {{apnu}} is the APN username if required by the carrier
  - {{apnp}} is the APN password if required by the carrier

5. Check device status
```text
AT$INFO=?
```

Note: The AT$GPRS command above sets APN credentials and points the device to the Plaspy server IP and port. Depending on firmware or toolchain, you may alternatively enter d.plaspy.com instead of the IP address. The device may also accept transport selection (UDP or TCP) in the configuration parameters or in the manufacturer tool.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax or available parameters. Verify the exact command syntax for your AX5 firmware revision.
- The AX5 supports TCP and UDP transport. Choose the transport required by your installation or follow installer guidance; Plaspy will accept either on port 8888 and detect the protocol automatically.
- Keep APN credentials correct and test mobile data connectivity before applying server settings.
- If configuration is applied via SMS, USB, or manufacturer software, follow the official ATrack procedure for that method.
- After applying settings, restarting the device can help ensure new network and reporting parameters take effect.

## Why Use Plaspy with This Configuration

Using the ATrack AX5 with Plaspy provides a straightforward path to fleet visibility and event monitoring by leveraging the AX5 ability to report over GPRS and Plaspy's unified server endpoint. The shared Plaspy server settings make it simpler to deploy many devices without per device server changes, and Plaspy's automatic protocol detection reduces configuration complexity on the platform side.

To learn more about Plaspy and how the platform handles device data, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and detailed AX5 documentation verify information on the official manufacturer website https://www.atrack.com.tw/ since setup methods and firmware behavior can change over time.
