---
slug: /concox/gt06s/configuration
id: gt06s-configuration
sidebar_label: Configuration
title: Concox - GT06S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox GT06S and Plaspy compatibility showing server settings SMS commands and practical setup steps for connection
keywords:
  - Concox GT06S configuration
  - GT06S Plaspy setup
  - Concox GT06S server configuration
  - GT06S SMS commands
  - Concox GPS tracker setup
  - GT06S fleet tracking
  - Plaspy tracker configuration
  - Vehicle GPS tracker setup
  - GT06S GPRS configuration
  - Concox tracker integration
---

# Concox - GT06S Configuration

This page documents the public configuration context for using the Concox GT06S tracker with Plaspy. It explains the server settings that Plaspy requires, outlines the common setup flow and lists the SMS configuration commands published for the GT06S so you can prepare the device to send data to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps for configuring the tracker can vary by firmware, hardware revision, installation type, and the vendor tools used. Use this guide together with the GT06S manufacturer documentation for the most current device specific instructions.

## Configuration Overview

The configuration process prepares the GT06S to register and transmit location and event data to Plaspy so devices appear and report reliably in the platform. Typical configuration tasks include setting the operator APN, pointing the tracker to the Plaspy server endpoint, selecting the transport if required, and verifying reporting intervals.

- Point the tracker to the Plaspy server endpoint so data reaches the cloud platform
- Configure the device APN and GPRS mode so it has mobile data connectivity
- Set the reporting interval so Plaspy receives updates at the desired frequency
- Validate connectivity and confirm the device appears in Plaspy after configuration
- Use SMS or manufacturer tools for remote setup when in field installations

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working SIM card with data enabled and the correct APN information for the mobile operator
- Device powered and accessible for SMS or the manufacturer configuration tool
- Knowledge of the device IMEI or identifier so you can match the tracker to the asset in Plaspy
- GSM cellular coverage at the installation location for GPRS connectivity
- Access to the Concox GT06S SMS commands or configuration software supplied by the vendor
- A Plaspy account or provisioning information to confirm the device is visible after setup

## How This Tracker Connects to Plaspy

The GT06S sends location and event data over GPRS to the Plaspy server endpoint using the configured server address and port. Once configured to report to Plaspy, the device uploads position fixes and status updates at the set interval so fleet managers can monitor vehicles in real time.

- Device transmits GNSS fixes and event data to d.plaspy.com or the Plaspy server IP on port 8888
- Plaspy receives telemetry and maps the tracker for live visibility and historical reporting
- Alerts and events such as ignition change, immobilizer actions, or tamper notifications appear in Plaspy
- The platform automatically detects the tracker protocol so manual protocol mapping is not required
- All devices use the same Plaspy port which simplifies multi device provisioning and templates

## Common Configuration Workflow

1. Obtain the official Concox configuration method for the GT06S such as SMS commands or vendor software
2. Configure the device APN using the operator APN details so GPRS data can be established
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device server settings
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection
5. Apply or save the configuration and enable GPRS mode on the tracker
6. Restart the device if the manufacturer recommends a reboot for settings to take effect
7. Validate that the GT06S is reporting to Plaspy by checking device visibility and recent positions in the platform

## Example Configuration Commands

The GT06S supports SMS based configuration. The following publicly available SMS commands are presented in the order commonly used during initial setup. Note that the factory reset command is optional and should be used only if you need to return the device to default settings.

- Optional factory reset
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
Use your operator APN and optionally APN username and APN password. Replace [apn] with your operator APN. If required include [apnu] and [apnp] as username and password placeholders.
```
APN,[apn]# 
```
or with username and password placeholders
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server using domain (preferred)
This example points the device to the Plaspy domain and port 8888. Use this form to register the domain name with the device.
```
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using IP
This example points the device directly to the Plaspy server IP and port 8888.
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to 60 seconds
Two common timer formats are shown. Use the one supported by your firmware.
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Verify parameter settings
```
GPRSSET#
```

These commands are the public SMS configuration steps published for GT06S. Preserve the placeholders when sending commands and replace them with your actual operator APN and credentials.

## Configuration Notes

- SMS based configuration is supported and commonly used for field installations where the device is not connected to a PC
- Differences in firmware version or hardware revision can change supported command syntax or parameter names; consult the manufacturer documentation if a command is not recognized
- Choose UDP or TCP according to your site policies and device firmware support; Plaspy accepts both on the shared port 8888 and automatically handles protocol detection
- All devices in Plaspy use the same port which simplifies bulk provisioning and provisioning templates
- Keep APN, username and password placeholders secure and verify operator credentials before sending configuration SMS

## Why Use Plaspy with This Configuration

Using the GT06S with Plaspy provides a straightforward way to collect real time location and event telemetry from a compact vehicle tracker. When configured to point to the Plaspy server endpoint the device uploads position and status updates that feed dashboards, alerts and historical reports to support fleet operations and security workflows.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration commands firmware notes and official documentation verify details on the Concox website https://www.iconcox.com/ since manufacturer setup methods and firmware behavior can change over time.
