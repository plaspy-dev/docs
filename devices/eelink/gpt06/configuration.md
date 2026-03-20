---
slug: /eelink/gpt06/configuration
id: gpt06-configuration
sidebar_label: Configuration
title: EElink - GPT06 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT06 and integration with Plaspy using shared server settings and SMS configuration examples
keywords:
  - EElink GPT06 configuration
  - EElink GPT06 setup
  - GPT06 server configuration
  - GPT06 Plaspy integration
  - EElink tracker configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - GPRS tracker setup
  - SMS configuration GPT06
  - fleet tracking GPT06
---

# EElink - GPT06 Configuration

This page covers the public configuration context for using the EElink GPT06 tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, the typical prerequisites before setup, and the publicly available SMS commands used by many GPT06 devices to configure reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you generally only need to set the server endpoint and transport on the device. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation, and vendor tools, so treat the SMS examples here as practical public guidance rather than a substitute for the latest manufacturer documentation.

## Configuration Overview

The goal of this configuration process is to prepare the GPT06 to upload location and status data to Plaspy so the device appears and reports correctly in the platform. The GPT06 supports configuration by SMS and GPRS/WCDMA upload, making it suitable for many vehicle and asset tracking installations.

- Point the tracker to the Plaspy server endpoint so data is received by Plaspy.
- Configure the device APN so it can establish a mobile data connection for GPRS uploads.
- Choose the transport (UDP or TCP) and set the shared Plaspy port used by all devices.
- Set a reporting interval to control how frequently the GPT06 uploads position updates to Plaspy.
- Verify parameters and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the GPT06 may be configured to use either transport)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and powered GPT06 device with working battery or external power.  
- An active SIM with mobile data enabled and the correct APN for the mobile operator.  
- SMS access to the device or access to the manufacturer configuration tool if required.  
- Knowledge of the device firmware version or hardware revision if available, since commands can vary.  
- A way to restart or power cycle the device after configuration if the device requires it.  
- Access to manufacturer documentation or vendor support for details beyond the public SMS commands.

## How This Tracker Connects to Plaspy

The GPT06 is configured to send position and status data to the shared Plaspy server endpoint and port. Once the tracker has a valid GPRS/WCDMA connection and the correct server/port settings, Plaspy will receive and interpret the device messages using automatic protocol detection.

- The tracker uploads location data via the mobile data connection to d.plaspy.com or the specified IP.  
- Data is sent to port 8888, the same port used by all Plaspy-supported devices.  
- Plaspy detects the device protocol automatically and begins parsing reports.  
- Regular timers or event triggers on the device cause periodic reporting to Plaspy.  
- SMS can be used to configure or verify parameters before confirming data flow to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software — for many GPT06 units this can be SMS commands or vendor configuration tools.  
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on your preference or device support.  
3. Set the port to 8888 (Plaspy uses the same port for all devices).  
4. Choose UDP or TCP on the device if the unit requires a transport selection.  
5. Configure the APN for the installed SIM so GPRS/WCDMA data can connect.  
6. Apply or save the configuration and restart or power cycle the tracker if the device requires it.  
7. Validate that the device reports to Plaspy and appears in the platform with expected update frequency.

## Example Configuration Commands

The GPT06 commonly accepts SMS commands for configuration. The following public commands are presented in the order shown in manufacturer documentation. If you use these SMS commands, send them from an authorized phone number according to the device’s access control settings.

- Optional initial factory reset (only if needed or for clean initial state):
```
FACTORY#
```

- Set the time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN (replace placeholders as needed):
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: [apn] is the operator APN name. The optional placeholders [apnu] and [apnp] represent APN username and APN password when required by the operator. Keep commas as shown if including username and password.

- Set the GPRS server using the Plaspy domain (preferred human readable form):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy IP (alternate option):
```
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds:
```
TIMER,60#
```

- Check current parameters and configuration:
```
PARAM#
```

Use the domain form (SERVER,1,...) if your SIM and device can resolve hostnames. Use the IP form (SERVER,0,...) if DNS resolution is not available or as a troubleshooting step. Keep the server port at 8888 because Plaspy uses the same port for all devices and handles protocol detection automatically.

## Configuration Notes

- Firmware and command syntax can vary by GPT06 production batch or firmware version; confirm the exact SMS format with your vendor or the official EElink documentation.  
- Choose UDP or TCP based on network reliability and device support; both are accepted but behavior may differ by firmware.  
- SMS configuration is commonly supported on GPT06 devices and is useful for headless or in-vehicle setups where direct software access isn’t available.  
- When including APN username and password, preserve the comma separators exactly as required by the command syntax.  
- If DNS resolution is unreliable, use the Plaspy server IP option as shown in the example commands.

## Why Use Plaspy with This Configuration

Using the GPT06 with Plaspy provides a practical way to get device location and status into a single platform that automatically recognizes the tracker protocol. The shared Plaspy server settings simplify onboarding across a mixed fleet because all supported devices report to the same endpoint and port.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and command reference check the manufacturer documentation at https://www.eelink.com.cn/. Manufacturer specifications and setup methods can change over time so verify the latest guidance before deployment.
