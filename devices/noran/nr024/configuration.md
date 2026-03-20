---
slug: /noran/nr024/configuration
id: nr024-configuration
sidebar_label: Configuration
title: Noran - NR024 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Noran NR024 GPS tracker setup with Plaspy using shared server settings and SMS commands
keywords:
  - Noran NR024 configuration
  - Noran NR024 setup
  - Noran NR024 Plaspy
  - NR024 GPS tracker configuration
  - NR024 server configuration
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker SMS commands
  - fleet tracker configuration
  - GPRS tracker setup
---

# Noran - NR024 Configuration

This page covers the public configuration context for using the Noran NR024 GPS tracker with Plaspy. It consolidates the Plaspy server settings you need and the known public SMS commands used by many NR024 devices so you can prepare the tracker for integration and visibility on the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The NR024 supports GSM GPRS connectivity and SMS configuration commands, and the examples on this page use the publicly available SMS command format provided by Noran as a practical starting point.

## Configuration Overview

The configuration process prepares the NR024 to send its location and device data to Plaspy and to appear correctly in the platform. For NR024 devices, common setup actions use SMS commands to set the operator APN, point the device to the Plaspy server, and enable GPRS reporting.

- Configure the device APN so the tracker can access the mobile data network.
- Set the GPRS server address to the Plaspy endpoint so reported data reaches the platform.
- Select the transport mode (UDP or TCP) and the shared Plaspy port so the tracker can connect.
- Enable GPRS reporting and validate the device status using the device status command.
- Confirm the device appears and reports correctly in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP — the device may be configured using UDP or TCP on port 8888  
- Automatic protocol detection in Plaspy — Plaspy automatically detects the tracker protocol  
- Note that all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working SIM card with a data plan and the correct APN for the mobile operator.  
- Power applied to the NR024 and the device in a state ready to accept SMS configuration commands.  
- Access to an SMS capable phone or tool to send configuration SMS messages to the tracker.  
- Knowledge of the device password if non default; sample publicly documented default password is 000000.  
- The device identifier (Device Id) for registration and verification; the status response contains the device Id.  
- Access to official Noran configuration documentation or software for alternate setup methods if needed.

## How This Tracker Connects to Plaspy

The NR024 is configured to send real time location and device status over GPRS to the Plaspy server endpoint and port. Once APN and server settings are applied, the device opens a data connection and forwards tracking data so Plaspy can display location, alerts, and device telemetry.

- The tracker uses the operator APN to attach to the mobile data network.  
- The device posts data to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on how the tracker is configured.  
- Plaspy automatically detects the device protocol, so the platform will accept connections from supported tracker protocols.  
- After configuration the device reports to Plaspy and becomes visible for monitoring and event reporting.  

## Common Configuration Workflow

1. Access the official Noran configuration method for your NR024 model, typically SMS commands or vendor configuration software.  
2. Confirm or enter the APN for the mobile operator used by the device.  
3. Enter d.plaspy.com or the IP address 54.85.159.138 as the GPRS server.  
4. Set the server port to 8888.  
5. Choose UDP or TCP if the device requires a transport selection.  
6. Enable or switch the tracker to GPRS reporting mode and save the configuration.  
7. Restart or power cycle the device if required by the tracker firmware.  
8. Validate that the device reports to Plaspy and verify the Device Id appears in the platform.

## Example Configuration Commands

The following SMS commands are the publicly provided NR024 examples for SMS-based setup. The sample setup uses the device password 000000 in these commands. Preserve placeholders where shown and replace them with your operator values.

- Set the operator APN. Replace [apn] with your operator APN. Optionally include [apnu] and [apnp] if your APN requires a username and password.

```
A000000,012,[apn]
```

Optional extended APN command with username and password placeholders:

```
A000000,012,[apn],[apnu],[apnp]
```

- Set the GPRS server to Plaspy using the public Plaspy IP and port. This points the device to the Plaspy server endpoint and port 8888.

```
A000000,010,54.85.159.138,8888
```

- Switch the device to GPRS mode (enable data reporting).

```
A000000,011,1
```

- Check current device settings and status. This verification command returns the Device Id (the first word starting with NR), APN, server, port, GPRS status, connection status, and GSM signal strength.

```
A000000,004
```

Notes on placeholders and defaults:
- [apn] is the mobile operator APN.  
- [apnu] is the APN username, if required.  
- [apnp] is the APN password, if required.  
- The example commands use the default device password 000000 as shown in public Noran documentation. If your device password differs, substitute it in the same position.

## Configuration Notes

- Firmware variations and hardware revisions can change command syntax or behavior; confirm commands against the device firmware version.  
- The NR024 supports SMS based configuration as shown here, but vendor tools or USB/serial configuration may also be available from Noran.  
- Choosing UDP or TCP may affect reliability and NAT behavior on some networks; select the transport that best fits your connectivity environment.  
- Keep APN credentials accurate and verify mobile data connectivity before attempting to register the device with Plaspy.  
- Plaspy uses the same port for all devices and will automatically detect the tracker protocol when the tracker connects to d.plaspy.com or 54.85.159.138 port 8888.

## Why Use Plaspy with This Configuration

Using the Noran NR024 with Plaspy provides centralized visibility for fleet operations, combining the device's capabilities such as real time uploads, image capture, and fuel monitoring with Plaspy's tracking platform. Configuring the NR024 to report to Plaspy using the shared server settings enables consistent event reporting, location visibility, and operational monitoring across your fleet.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer guidance always verify configuration methods on the Noran website http://www.norantracker.com/ as details can change over time.
