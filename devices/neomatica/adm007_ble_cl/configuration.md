---
slug: /neomatica/adm007_ble_cl/configuration
id: adm007_ble_cl-configuration
sidebar_label: Configuration
title: Neomatica - ADM007 BLE CL Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Neomatica ADM007 BLE CL showing Plaspy server settings and setup checklist
keywords:
  - neomatica adm007 ble cl
  - adm007 ble cl configuration
  - neomatica tracker setup
  - plaspy tracker configuration
  - gps tracker configuration
  - vehicle tracking setup
  - adm007 server configuration
  - ble sensor tracker
  - gprs tracker setup
  - neomatica gps configuration
---

# Neomatica - ADM007 BLE CL Configuration

This page documents the public configuration context for using the Neomatica ADM007 BLE CL car tracker with the Plaspy platform. It focuses on the practical server settings and setup workflow required to point the device to Plaspy so the tracker can communicate and appear in your Plaspy account. The content here uses the device description for grounding, including cigarette lighter installation, Bluetooth sensor support, and typical data consumption.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware revision, hardware batch, installation type, and vendor tools, so use this guide for the common public settings and workflow while verifying any device specific menus or commands with Neomatica documentation or vendor tools.

## Configuration Overview

The objective of this configuration process is to prepare the ADM007 BLE CL to send location and device events to Plaspy so vehicles and sensors are visible in the platform. The steps are intentionally general to match the common manufacturer configuration methods while centering on the Plaspy server values that must be applied.

- Configure the device to report to the Plaspy server endpoint and port so traffic reaches the platform
- Choose the transport protocol required by the device interface and save the setting
- Ensure the unit has cellular connectivity and a working SIM if using GPRS reporting
- Pair and verify BLE sensors if you plan to collect additional sensor data
- Apply settings and restart the tracker if required to establish an active connection
- Validate the tracker appears and reports correctly within Plaspy

## Plaspy Server Settings

When configuring the ADM007 BLE CL for Plaspy use these public server settings:

- Server domain d.plaspy.com to identify the Plaspy endpoint
- Server IP 54.85.159.138 as an alternative endpoint for direct IP based configuration
- Port 8888 which Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on the device configuration option
- Automatic protocol detection in Plaspy so the platform detects the tracker protocol once a connection is established

Note that Plaspy uses the same port for all devices and will automatically detect the tracker protocol when the device connects to the server address and port above.

## Typical Requirements Before Setup

- A powered ADM007 BLE CL installed in the vehicle cigarette lighter or other suitable 12 V power source
- A NanoSIM with active data service and GPRS enabled where cellular reporting is used
- Access to the official Neomatica configuration method such as the Bluetooth mobile app, SMS commands, or vendor configuration software
- The device powered on and reachable via Bluetooth or SMS for initial configuration and verification
- BLE sensors ready for pairing with any required identifiers or setup codes if you intend to use the wireless sensors
- Basic network visibility to confirm the device can reach d.plaspy.com or 54.85.159.138 on port 8888

## How This Tracker Connects to Plaspy

The ADM007 BLE CL typically uses its cellular GPRS connection to deliver position and device events to the configured server endpoint and port. Once the device is configured to send data to Plaspy, the platform will automatically detect the tracker protocol and present the device in the fleet view.

- The tracker sends periodic position updates and event messages over GPRS to d.plaspy.com or 54.85.159.138 on port 8888
- You may select UDP or TCP as the transport method if the device requires a transport choice
- BLE sensors pair locally and their data is relayed by the tracker to Plaspy as part of the device reports
- Plaspy detects the incoming protocol automatically so no manual protocol selection is required on the platform side
- Once reporting starts, location visibility and device event logs are available in Plaspy for operational monitoring

## Common Configuration Workflow

1. Access the official Neomatica configuration method such as the Bluetooth mobile app, SMS command set, or vendor desktop tool provided by your reseller
2. In the device server settings enter d.plaspy.com or, where preferred, the server IP 54.85.159.138
3. Set the server port to 8888 as this is the port Plaspy uses for all devices
4. If the device requires transport selection choose UDP or TCP according to your installer preference or device guidance
5. Apply or save the configuration using the manufacturer tool or command method
6. Restart the device if the configuration method or manufacturer instructions require a reboot to apply network changes
7. Validate that the device reports to Plaspy by checking the device status in the platform and confirming periodic updates

## Example Configuration Commands

The ADM007 BLE CL can be configured via the manufacturer supported methods such as Bluetooth configuration apps, SMS commands, or a vendor configuration utility. Exact commands and menus may differ by firmware and tool. Consult Neomatica documentation or your device supplier for the command syntax specific to your firmware version and configuration tool.

If you use SMS based configuration or a command line interface provided by Neomatica, follow the official command examples from Neomatica documentation. This page does not invent or reproduce SMS command syntax that may vary with firmware versions.

## Configuration Notes

- Firmware and hardware revisions can change menu labels, available transport options, and exact command syntax so confirm commands against the installed firmware
- TCP and UDP transports behave differently on lossy networks; choose the transport according to the device manual and your operational priorities
- Plaspy uses port 8888 for all supported devices and automatically detects tracker protocols so the core server and port values remain consistent across deployments
- BLE sensor pairing is handled locally between the sensors and the ADM007 BLE CL and may require sensor specific setup steps in the Neomatica app
- The ADM007 BLE CL is designed for low data usage with typical monthly consumption around 8 to 10 MB depending on reporting frequency and sensor traffic

## Why Use Plaspy with This Configuration

Using the ADM007 BLE CL with Plaspy gives a straightforward path to integrate compact cigarette lighter trackers and BLE sensor data into a unified fleet monitoring platform. The shared Plaspy server settings simplify deployment across many devices because all devices use the same port and the platform will automatically detect the tracker protocol when reporting begins.

To learn more about Plaspy visit https://www.plaspy.com and for the latest Neomatica product and firmware details consult https://neomatica.com/. Manufacturer specifications and setup methods can change over time so verify device specific instructions on the official Neomatica site.
