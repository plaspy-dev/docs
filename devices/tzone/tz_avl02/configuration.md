---
slug: /tzone/tz_avl02/configuration
id: tz_avl02-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL02 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TZone TZ-AVL02 GPS tracker for use with Plaspy using shared server settings SMS commands and a practical setup workflow
keywords:
  - TZone TZ-AVL02 configuration
  - TZone TZ-AVL02 setup
  - TZone tracker configuration
  - TZ-AVL02 GPRS configuration
  - TZ-AVL02 SMS commands
  - Plaspy device setup
  - Plaspy tracker configuration
  - vehicle tracking configuration
  - GPS tracker TZ-AVL02
  - TZ-AVL02 server settings
---

# TZone - TZ-AVL02 Configuration

This page documents the public configuration context for using the TZone TZ-AVL02 GPS/GSM/GPRS tracker with Plaspy. It focuses on the shared server settings used by Plaspy, the typical preconditions for a successful integration, and the SMS based configuration commands that are commonly used to point the tracker at the Plaspy endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. All devices in Plaspy use the same port and Plaspy will identify the device protocol once the tracker sends data. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so verify device specific details with the official TZone documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the TZ-AVL02 so it can establish a GPRS session and report location and status to the Plaspy server. For this model the manufacturer provides SMS command based configuration that allows setting operator APN, reporting interval, and the GPRS server endpoint. Once those values are set the device will attempt to connect to Plaspy and begin reporting.

- Set the mobile operator APN and optional APN credentials so the device can open a GPRS data connection.
- Configure the tracker update interval so position reports meet your monitoring needs.
- Point the tracker to the Plaspy server endpoint and port used by all Plaspy devices.
- Activate or enable GPRS mode on the tracker so it sends data over the cellular network.
- Validate connectivity by confirming the device is visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration
- Automatic protocol detection in Plaspy so the platform recognizes the tracker protocol after data is received

These values above are the public Plaspy settings you must enter into the device or send to the device via SMS when configuring reporting to Plaspy.

## Typical Requirements Before Setup

- A SIM card with an active data plan and GPRS enabled for the operator that will be used in the vehicle.
- Access to an SMS capable phone or configuration tool to send the device SMS setup commands provided by the manufacturer.
- The TZ-AVL02 powered with its exterior power supply or sufficient internal battery for initial setup.
- The device must be reachable by SMS and be in an area with GSM coverage from the chosen operator.
- The device documentation or vendor instructions for SMS command format and device password if required.

## How This Tracker Connects to Plaspy

The TZ-AVL02 is configured to initiate a GPRS connection and send its telemetry to the Plaspy server endpoint on the shared port. Once configured, the device repeatedly transmits location and basic status information so Plaspy can display the device on a map and record events for monitoring.

- The tracker opens a GPRS data session using the operator APN configured on the device.
- It sends tracker reports to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP on the device; Plaspy supports both.
- Plaspy automatically detects the tracker protocol on first communication so manual protocol selection in the platform is not required.
- After successful reporting the device becomes visible in Plaspy for live tracking and historical data.

## Common Configuration Workflow

1. Access the official TZone configuration method described by the manufacturer, typically SMS commands or a vendor tool.
2. Set the operator APN and optional APN credentials on the device so it can use GPRS.
3. Enter the Plaspy server address as d.plaspy.com or as the IP 54.85.159.138 when the device requires an IP.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration settings on the device and activate GPRS mode if required.
6. Restart the device if recommended by the manufacturer or if the device does not begin reporting after configuration.
7. Validate that the device reports to Plaspy by checking device status and location visibility in the Plaspy platform.

## Example Configuration Commands

The TZ-AVL02 manufacturer provides SMS based commands to configure the tracker. Send these commands as SMS messages from an allowed phone number to the device. Preserve placeholders when replacing values.

1. Set the operator APN. Replace [apn] with your operator APN. If your APN requires username and password include [apnu] and [apnp] as shown.

```
*000000,011,[apn]#
```

Or include APN username and password if required:

```
*000000,011,[apn],[apnu],[apnp]#
```

- [apn] is the mobile operator APN string.
- [apnu] is the APN username if the operator requires it.
- [apnp] is the APN password if the operator requires it.

2. Set the update interval to 60 seconds. This configures periodic reporting.

```
*000000,018,60,999#
```

3. Set the GPRS server to point to Plaspy by IP and port. This example uses the public Plaspy server IP and port.

```
*000000,015,0,54.85.159.138,8888#
```

4. Activate GPRS mode so the device tries to connect to the server over cellular data.

```
*000000,016,1#
```

Send the commands in the order shown when performing an initial setup: APN, interval, server, then activate GPRS. Confirm the device acknowledges the commands per the manufacturer instructions.

## Configuration Notes

- The SMS commands shown are the publicly provided manufacturer examples and may include a device password token such as the numeric prefix shown. Confirm the correct command format and device password with TZone documentation.
- Firmware revisions or hardware variants can change available commands and behavior. If a command fails, check the device firmware version and the official manual.
- The device supports configuring transport as UDP or TCP at the device level; choose the transport your installation requires and make sure port 8888 is set.
- SMS based setup is useful for initial provisioning but some installers prefer cable or vendor tools for bulk configuration depending on available tools.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on first contact.

## Why Use Plaspy with This Configuration

Using the TZ-AVL02 configured to report to Plaspy provides a straightforward path to fleet visibility and operational monitoring. With the APN, server, and port set as described, the tracker will deliver location and status reports into Plaspy where you can monitor live positions, review history, and receive events that improve asset oversight.

If you want to learn more about how Plaspy manages device connections and supported workflows visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer procedures verify details with the official TZone resources at http://www.tzonedigital.com/ as methods and firmware can change over time.
