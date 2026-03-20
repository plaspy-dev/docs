---
slug: /concox/vl103/configuration
id: vl103-configuration
sidebar_label: Configuration
title: Concox - VL103 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect Concox VL103 with Plaspy server using shared settings and SMS commands
keywords:
- Concox VL103 configuration
- Concox VL103 setup
- VL103 server configuration
- VL103 GPS tracker setup
- Concox GPS tracker configuration
- VL103 tracking software configuration
- vehicle tracking VL103
- Plaspy tracker configuration
- GPS platform setup VL103
- VL103 APN and server settings
---

# Concox - VL103 Configuration

This page covers the public configuration context for using the Concox VL103 with Plaspy. It explains the practical, publicly documented steps and SMS commands commonly used to point the tracker at the Plaspy server so the device can report location, alarms, and status. The Concox VL103M is described as a compact industrial grade tracker with features such as GPS BDS and LBS positioning, an external buzzer, audible and light warnings, remote listen in, and IP66 protection; this page focuses only on the publicly available setup steps needed to integrate the device with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installer tools, and vendor utilities. The VL103 supports SMS based configuration commands and GPRS reporting, and the examples on this page use the publicly available SMS commands to set APN, server, timers, and GPRS mode for use with Plaspy.

## Configuration Overview

This configuration process prepares the VL103 to communicate reliably with Plaspy by setting the network APN, directing device traffic to the Plaspy server endpoint, configuring reporting intervals, and enabling the device GPRS mode. The goal is to make the tracker visible and actively reporting on the Plaspy platform.

- Set the mobile data operator APN and optional credentials so the device can establish a GPRS session.
- Configure the tracker to report to the Plaspy server endpoint using the shared Plaspy server settings.
- Set the periodic reporting timer so the device sends location updates at the desired interval.
- Enable GPRS reporting mode so the tracker uses mobile data for communication.
- Validate the configuration using the built in parameter check command so the device is visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 for device connections  
- Transport support for UDP or TCP where the device requires transport selection  
- Plaspy automatically detects the tracker protocol on arrival

Note that Plaspy uses the same port for all supported devices and will identify the device protocol automatically.

## Typical Requirements Before Setup

- A working power connection to the VL103 and access to the device for SMS configuration.  
- An active cellular SIM with data enabled and the correct APN details from the mobile operator.  
- A phone or SMS gateway able to send configuration SMS messages to the tracker.  
- The tracker must be within cellular coverage to establish GPRS after configuration.  
- Access to the official Concox documentation or installer tool for reference on model specific behaviors.  
- A way to monitor the tracker in Plaspy once configuration is applied to confirm reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy the VL103 establishes a GPRS session using the operator APN and sends device messages to the shared Plaspy server endpoint and port. Plaspy receives connections on its designated endpoint and automatically identifies the specific tracker protocol so no additional per device protocol selection is required server side.

- Tracker uses configured APN to open a GPRS data channel to the mobile network.  
- The device sends packets to d.plaspy.com or to 54.85.159.138 on port 8888.  
- Device messages use either UDP or TCP as selectable on the device side.  
- Plaspy detects and parses the tracker protocol automatically after the first messages arrive.  
- Event reporting such as location updates, alarms, and telemetry are forwarded into Plaspy for visibility and monitoring.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL103, typically SMS commands or the manufacturer installer guide.  
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the server target.  
3. Set the server port to 8888 as the device reporting port.  
4. Choose UDP or TCP on the device if transport selection is required by the device firmware.  
5. Set the operator APN and optional APN credentials so GPRS can connect.  
6. Apply or save the configuration and restart the device if required by the tracker.  
7. Validate that the device reports to Plaspy by checking for incoming messages on the platform or using the device parameter check command.

Where SMS commands are supported, sending the documented SMS sequences is a common and practical approach for these steps.

## Example Configuration Commands

The VL103 supports SMS based configuration. The following commands are the public, manufacturer documented SMS commands for common setup tasks. Preserve placeholders when sending commands.

- Optional initial factory reset (use only if you need to reset the device to factory defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN (replace placeholders with your operator values)
```text
APN,[apn]#
```
- Set the operator APN including username and password if required
```text
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the mobile network APN. [apnu] and [apnp] are optional APN username and password fields used only if your mobile operator requires credentials.

- Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using the Plaspy server IP and port
```text
SERVER,0,54.85.159.138,8888,0#
```
Explanation: The commands above configure the tracker to send data to Plaspy on port 8888. Use the domain form or the IP form depending on your preference or the device firmware behavior.

- Set the reporting update interval to 60 seconds (two supported variations)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```
Explanation: These commands configure the periodic location/telemetry reporting interval. Choose the form supported by your firmware.

- Enable GPRS mode so the device uses mobile data
```text
GPRSON,1#
```

- Check current GPRS and server settings
```text
GPRSSET#
```
Explanation: Use GPRSSET# to request the device to reply with its current network and server parameters for verification.

Follow the sequence appropriate for your installation. For example, set APN first, then server, then timer, then enable GPRS, and finally verify with GPRSSET#.

## Configuration Notes

- SMS based configuration is a public and commonly used method for the VL103; ensure SMS commands are sent from a trusted number if the device filters commands.  
- Firmware versions or hardware revisions may vary and can change the exact syntax or available parameters for commands. Verify exact command syntax with your device firmware documentation.  
- The device supports UDP or TCP transport; choose the transport type on the device if required and note that Plaspy accepts both on port 8888.  
- Keep APN placeholders intact when preparing commands and replace them only with operator specific values.  
- After applying settings, allow time for the device to register on the network and for Plaspy to automatically detect the tracker protocol.

## Why Use Plaspy with This Configuration

Using the Concox VL103 with Plaspy provides a straightforward path to fleet visibility and operational monitoring by leveraging common, shared server settings and automatic protocol detection. Organizations can configure multiple VL103 units to report to the same Plaspy endpoint and port, simplifying large scale deployments and reducing per device configuration complexity.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest and device specific configuration methods, firmware notes, and official commands consult the Concox manufacturer site at https://www.iconcox.com/ to verify current details and any updates to command syntax.
