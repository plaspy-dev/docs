---
slug: /istartek/pt60/configuration
id: pt60-configuration
sidebar_label: Configuration
title: iStartek - PT60 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the iStartek PT60 tracker to report to Plaspy using shared server settings and SMS commands for APN and server setup
keywords:
  - iStartek PT60 configuration
  - iStartek PT60 setup
  - PT60 Plaspy configuration
  - PT60 server configuration
  - PT60 GPS tracker setup
  - Plaspy tracker configuration
  - PT60 SMS configuration
  - PT60 GPRS server setup
  - vehicle tracking PT60
  - PT60 integration Plaspy
---

# iStartek - PT60 Configuration

This page documents the public configuration context for using the iStartek PT60 tracker with Plaspy. It focuses on the practical, publicly available settings and commands used to point the PT60 to the Plaspy server endpoint and to validate basic connectivity. Use this guidance together with manufacturer documentation for full device management.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The PT60 can be configured using SMS commands as shown in the public manufacturer instructions and these commands are included here for reference.

## Configuration Overview

The goal of the configuration process is to prepare the PT60 so it reliably reports location and status to the Plaspy platform. Public commands for the PT60 typically cover resetting to factory defaults, setting time zone, configuring APN details, and pointing the device to the Plaspy server endpoint and port.

- Configure APN and network parameters so the device can establish a GPRS connection.
- Set the Plaspy server address and the shared port so the tracker sends telemetry to the correct endpoint.
- Define an update interval or reporting timer so Plaspy receives regular position updates.
- Validate configuration using the device parameter query command and verify visibility in Plaspy.
- Optionally reset to factory settings if you need a clean baseline before applying new configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy uses the same port for all supported devices  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A charged or powered PT60 device ready for configuration and within cellular coverage.  
- A SIM card with an active data plan and correct APN details for the operator.  
- A phone or tool capable of sending SMS commands if using SMS configuration.  
- Access to the official iStartek configuration guide or vendor tools for reference.  
- A Plaspy account or access to the platform to confirm the device appears and sends data.  
- Basic knowledge of device identifiers such as IMEI so you can match the tracker to the Plaspy device record.

## How This Tracker Connects to Plaspy

The PT60 can be configured to send location and device data over cellular data to the Plaspy server endpoint and port. Once the device has working APN settings and the correct server address, it will establish a connection and transmit telemetry according to its reporting interval.

- The tracker uses GPRS/4G data connectivity to send packets to the shared Plaspy endpoint.  
- Configure the server as d.plaspy.com or 54.85.159.138 with port 8888 so data reaches Plaspy.  
- You may select UDP or TCP where the device requires a transport selection; Plaspy accepts both.  
- Plaspy auto-detects the incoming tracker protocol so no special protocol selection is required on the platform.  
- Reporting intervals are controlled on the device and determine how often Plaspy receives location updates.

## Common Configuration Workflow

1. Access the official iStartek configuration method such as SMS commands or the vendor configuration tool.  
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138.  
3. Set the server port to 8888, noting Plaspy uses this port for all devices.  
4. Choose the transport protocol UDP or TCP if the PT60 requires a transport selection.  
5. Set the device APN using the operator APN command so the tracker can use mobile data.  
6. Apply or save the configuration and restart the device if required to apply network settings.  
7. Validate that the device reports to Plaspy by checking the platform for incoming data and using the device PARAM query command if available.

## Example Configuration Commands

The PT60 public configuration instructions provide SMS commands for common setup tasks. Send these commands as SMS messages to the device number. Preserve placeholders as shown.

- Optional initial factory reset (only use if you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Note: {{apn}} is the APN name for your mobile operator. {{apnu}} and {{apnp}} are optional APN username and password placeholders and should be included only if your operator requires them.

- Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP and port
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to one update every 60 seconds
```text
TIMER,60#
```

- Verify current device parameters
```text
PARAM#
```

Follow the exact order when the manufacturer indicates order matters. Use the factory reset only when necessary during initial provisioning or troubleshooting.

## Configuration Notes

- Manufacturer firmware and command behavior can vary by device revision and region; verify commands against the current iStartek documentation.  
- The PT60 supports SMS based configuration as shown, but some installers prefer vendor tools or over the air methods when available.  
- Choosing UDP or TCP affects how packets are transported; Plaspy accepts both and will detect the protocol automatically.  
- Ensure your APN credentials are correct; use the {{apn}} placeholder for APN and include {{apnu}} and {{apnp}} when an operator requires username or password.  
- Because Plaspy uses the same port for all devices, you only need to set port 8888 and the appropriate server endpoint.

## Why Use Plaspy with This Configuration

Configuring the iStartek PT60 to report to Plaspy gives organizations centralized visibility into location and device connectivity. With the shared server settings and automatic protocol detection in Plaspy, getting a device online typically requires only APN and server configuration, after which Plaspy receives and decodes incoming telemetry for monitoring and operational use.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details always confirm current information on the manufacturer site https://istartek.com/
