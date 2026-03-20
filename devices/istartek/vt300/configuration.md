---
slug: /istartek/vt300/configuration
id: vt300-configuration
sidebar_label: Configuration
title: iStartek - VT300 Configuration
sidebar_class_name: menu_item_tracker
description: A step by step guide to configure iStartek VT300 for use with Plaspy server
keywords:
  - iStartek VT300 configuration
  - VT300 setup
  - iStartek tracker Plaspy
  - VT300 server configuration
  - VT300 GPS tracker setup
  - vehicle tracking configuration
  - tracker server settings
  - GPS platform setup
  - VT300 APN setup
  - VT300 SMS commands
---

# iStartek - VT300 Configuration

This page documents the public configuration context for using the iStartek VT300 series tracker with the Plaspy platform. It consolidates the key server settings and the practical setup steps that are commonly used to get the VT300 reporting to Plaspy, based on available public device configuration commands and manufacturer notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools; where available, this page includes the VT300 SMS configuration commands that are commonly used in the field.

## Configuration Overview

Configuring the VT300 for Plaspy prepares the device to reliably transmit location and event data to a single Plaspy endpoint and port used for all supported devices. The following practical tasks are typically performed during configuration to ensure the tracker is visible and reporting correctly in Plaspy.

- Set device network parameters such as APN so the tracker can access mobile data and upload to Plaspy.
- Point the device to the Plaspy server using the provided domain or IP and the shared Plaspy port.
- Choose transport (UDP or TCP) if the device requires it and save the configuration.
- Configure reporting interval (for example via a TIMER command) so the device sends position updates.
- Verify configuration with an on-device status check and confirm the tracker appears in Plaspy.

## Plaspy Server Settings

Use these public Plaspy endpoint settings when configuring the VT300:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port 8888 for incoming tracker connections

## Typical Requirements Before Setup

- A working SIM card with data enabled and SMS capability installed in the VT300
- Access to the VT300 configuration method supported by your unit such as SMS commands or manufacturer tools
- APN credentials from the mobile operator if a private APN or username/password are required
- Device powered and reachable (connected to vehicle power or internal battery) to receive SMS commands and establish GPRS
- Access to the VT300 user manual or vendor support information for firmware specific behavior

## How This Tracker Connects to Plaspy

The VT300 is configured to upload its position and event data to the shared Plaspy server endpoint and port so Plaspy can provide live visibility and historical routes. Plaspy accepts connections over the standard shared port and detects the tracker protocol automatically so devices can be processed without per-device protocol selection on the server side.

- The tracker reports location and events to d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport may be UDP or TCP depending on device configuration; choose the transport the device supports
- Plaspy will automatically detect the protocol used by the VT300 when the device connects
- Reporting interval and buffered uploads are controlled on the device, for example via a TIMER command
- The VT300 supports dual server configuration for redundancy; you can set a primary and secondary server if needed

## Common Configuration Workflow

1. Access the official iStartek configuration method for your VT300 unit, typically via SMS commands or the installer tool provided by your vendor.
2. Configure the mobile data APN using the APN command with your operator credentials.
3. Set the server to d.plaspy.com or the alternate IP 54.85.159.138 and set port 8888.
4. Choose UDP or TCP if the VT300 requires a transport selection and your installation prefers one.
5. Set the reporting interval (for example TIMER 60 for 60 seconds) and any additional device parameters required for your deployment.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device status in the Plaspy platform and using the device parameter check command from the tracker if available.

## Example Configuration Commands

The VT300 can be configured using SMS commands. Below are the commonly used public commands presented in order. Preserve placeholders exactly when sending commands.

- Optional initial factory reset (use only when appropriate):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN (replace [apn], and optionally [apnu] and [apnp] if your operator requires username and password):
```
APN,[apn]{{? ,[apnu],[apnp]}}#
```
Explanation: Replace [apn] with your operator APN. If your operator requires an APN username and password, include [apnu] and [apnp] respectively. The device accepts APN,APN[,username,password] format.

- Set the GPRS server by domain (primary example pointing to Plaspy):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server by IP address (alternative):
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to 60 seconds:
```
TIMER,60#
```

- Check current parameter settings on the device:
```
PARAM#
```

Notes on these commands:
- The factory reset command FACTORY# should be used only when an initial reset is required.
- Keep the SERVER command format exactly as shown; the second field (0 or 1) selection may control whether IP or domain is used depending on firmware behavior.
- The APN command uses placeholders [apn], [apnu], and [apnp] which you must replace with the actual APN, username, and password provided by your mobile operator.

## Configuration Notes

- VT300 firmware versions may parse SMS commands slightly differently; confirm command syntax with the device manual if a command is not accepted.
- SMS based configuration is commonly used for field installations where on-site tools are not available; ensure the device can receive SMS when powered.
- Choose UDP or TCP based on your installation needs; Plaspy accepts either and will auto detect the protocol used by the tracker.
- Plaspy uses the same port 8888 for all supported devices, so use port 8888 when pointing VT300 to Plaspy.
- Manufacturer documentation and vendor tools can provide additional configuration options not covered by the public SMS commands shown here.

## Why Use Plaspy with This Configuration

Using the VT300 with Plaspy gives fleet managers a straightforward path to get trackers reporting to a unified platform. With the shared Plaspy endpoint and automatic protocol detection, device onboarding is simplified: once the VT300 is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and reporting interval is set, location and event data are available for operational monitoring and route visibility.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific configuration steps and firmware details with the manufacturer at https://istartek.com/ as setup methods and device behavior can change over time.
