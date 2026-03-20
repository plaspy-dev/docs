---
slug: /tk_star/tkstar/configuration
id: tkstar-configuration
sidebar_label: Configuration
title: TK-Star - TKSTAR Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TK-Star TKSTAR tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - TK-Star TKSTAR configuration
  - TKSTAR setup Plaspy
  - TKSTAR server configuration
  - TKSTAR GPS tracker setup
  - TKSTAR SMS configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking TKSTAR
  - TKSTAR APN settings
  - TKSTAR GPRS setup
---

# TK-Star - TKSTAR Configuration

This page describes the public configuration context for using the TK-Star TKSTAR portable GPS tracker with the Plaspy platform. It focuses on the practical server and setup steps that make the TKSTAR visible and reportable in Plaspy, using publicly available SMS command patterns and general setup guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the common public settings and SMS commands used to point a TKSTAR tracker at the Plaspy service.

## Configuration Overview

This configuration process prepares the TKSTAR to send position updates and status to Plaspy so the device can be monitored on the platform. The steps typically include configuring the device APN for data, setting the Plaspy server, selecting transport if required, and confirming the device is reporting.

- Configure the device APN, username, and password so the tracker can use mobile data for GPRS reporting.
- Set the tracker to report to the Plaspy server endpoint using the shared Plaspy port.
- Choose the transport mode (UDP or TCP) if the device firmware requires an explicit selection.
- Validate connectivity and confirm the tracker is visible and reporting in Plaspy.
- Use SMS or the manufacturer tool to apply settings depending on the device and available workflow.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (all devices in Plaspy use the same port)  
- Transport support for UDP or TCP (device may be configured to use either transport on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged TKSTAR device or reliable power source to perform configuration and testing.  
- A valid SIM card with mobile data enabled and the correct APN for the mobile operator.  
- Access to the TKSTAR manufacturer configuration method such as SMS commands or vendor setup software.  
- Knowledge of the device password if the device requires it for configuration (the public default password shown here is 123456).  
- Ability to receive and send SMS to the tracker if using SMS-based configuration.  
- Basic network reachability to ensure the device can reach d.plaspy.com or 54.85.159.138 on port 8888.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TKSTAR sends periodic location and status messages to the shared Plaspy server endpoint and port so the device can be tracked and monitored from the platform. Plaspy receives those messages and maps them to the appropriate device entry by protocol detection.

- The tracker uses mobile data (GPRS) to open a connection to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- The device can be set to use UDP or TCP transport depending on firmware and installer choice.  
- Plaspy automatically identifies the tracker protocol so no extra protocol selection is required on the server side.  
- Once reporting, location updates, movement events, and configured alerts become visible in Plaspy.  
- Regular upload interval controls how often the device reports; adjust to balance reporting frequency and battery usage.

## Common Configuration Workflow

1. Access the official TK-Star configuration method recommended by the manufacturer, typically SMS commands or the vendor configuration tool.  
2. Ensure the device has a working SIM and set the APN using the appropriate SMS command or tool entry.  
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.  
4. Set the server port to 8888 in the device configuration.  
5. Choose UDP or TCP transport on the device if the firmware asks for a transport selection.  
6. Save or apply the configuration and restart the device if required by the manufacturer workflow.  
7. Validate that the tracker reports to Plaspy and appears in the platform with expected location updates.

## Example Configuration Commands

The TKSTAR commonly accepts SMS commands for setup. The public default device password used in these examples is 123456. Replace placeholders as needed.

1. Optional initial factory restore (optional or initial setup)
```text
begin123456
```
2. Set the operator APN (replace [apn] with the mobile carrier APN)
```text
apn123456 [apn]
```
3. Set the APN username if required by the operator (replace [apnu] with the APN username)
```text
apnuser123456 [apnu]
```
4. Set the APN password if required by the operator (replace [apnp] with the APN password)
```text
apnpasswd123456 [apnp]
```
5. Set the GPRS server to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
6. Set the upload interval to 60 seconds (adjust as needed)
```text
upload123456 60
```
7. Switch the device to GPRS reporting mode
```text
gprs123456
```

Notes on placeholders and commands
- [apn] is the mobile operator APN string required for data.  
- [apnu] is the APN username when the operator requires one.  
- [apnp] is the APN password when required.  
- The adminip command above points the device to the Plaspy server IP and uses port 8888; you may alternatively specify d.plaspy.com in the manufacturer tool if it supports domain names.  
- Some firmware variants include separate commands to select UDP or TCP transport; if your device requires explicit transport selection, set it to UDP or TCP before saving.

## Configuration Notes

- SMS based configuration is a common public method for TKSTAR devices; follow the exact command format and device password for your hardware.  
- Firmware revisions and regional variants can change command syntax or available features; consult current manufacturer resources when in doubt.  
- Choose UDP or TCP depending on installer preference and firmware behavior; Plaspy accepts both on port 8888.  
- All devices reporting to Plaspy use the same port 8888 which simplifies multi-device server settings.  
- Verify APN credentials with the mobile operator if the device cannot establish a GPRS connection.

## Why Use Plaspy with This Configuration

Configuring a TK-Star TKSTAR tracker to report to Plaspy provides a straightforward way to centralize location visibility, event reporting, and basic operational monitoring across assets or people. Using the shared Plaspy server settings simplifies deployment because the same server endpoint and port apply to all supported devices and Plaspy handles protocol detection automatically.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify current information on the official TK-Star website https://www.tk-star.com/ as setup methods and firmware behavior can change over time.
