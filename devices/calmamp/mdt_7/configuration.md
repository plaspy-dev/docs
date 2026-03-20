---
slug: /calmamp/mdt_7/configuration
id: mdt_7-configuration
sidebar_label: Configuration
title: CalmAmp - MDT-7 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the CalmAmp MDT-7 for use with Plaspy including server settings and example SMS commands
keywords:
  - CalmAmp MDT-7 configuration
  - CalmAmp MDT-7 setup
  - MDT-7 Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker configuration CalmAmp
  - MDT-7 server settings
  - vehicle tracking integration
  - GSM SMS configuration
  - GPRS server setup
  - fleet management tracker setup
---

# CalmAmp - MDT-7 Configuration

This page covers the public configuration context for using the CalmAmp MDT-7 with Plaspy. It summarizes the shared Plaspy server settings, practical setup steps, and example SMS commands drawn from publicly available device configuration content. Use this page to prepare the MDT-7 for reporting to Plaspy and to understand what information you will need before you begin.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools, so treat the commands and workflow here as practical public guidance that should be checked against current CalmAmp documentation.

## Configuration Overview

The goal of the configuration process is to prepare the MDT-7 to communicate reliably with the Plaspy platform so location and event data appear in your Plaspy account. The MDT-7 can be configured using SMS commands or manufacturer tools to set network credentials, the GPRS server, and the reporting port so that the device or connected LMU sends telemetry to Plaspy.

- Configure the device network APN and optional APN credentials so GPRS data is available.
- Point the device or connected LMU at the Plaspy server endpoint so reports are routed to Plaspy.
- Set the shared Plaspy port and choose UDP or TCP transport if required by the device.
- Reboot the device to apply settings and then validate connectivity with Plaspy.
- Use the device reply commands to verify the MID or current configuration before and after changes.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used depending on device configuration options  
- Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A powered and accessible MDT-7 and any connected CalAmp LMU required to transport telemetry over the cellular network
- A SIM card with active data and SMS service inserted in the device or LMU as applicable
- The device MID or unique device ID retrieved from the device using the manufacturer query command
- Access to the manufacturer SMS command list or configuration tool for the MDT-7 or the connected LMU
- Network coverage and GPRS connectivity from the installed mobile operator
- Credential information for the operator APN such as apn, apn username, and apn password if required

## How This Tracker Connects to Plaspy

The MDT-7 platform typically sends captured information across the cellular network via a connected CalAmp LMU or the device data channel to a configured GPRS server. For Plaspy integration the device is pointed at the Plaspy server endpoint and port so location and event messages arrive in Plaspy automatically.

- The tracker or connected LMU is configured to send GPRS traffic to the Plaspy server endpoint or IP
- Reports are sent to the shared Plaspy port so the platform can receive telemetry
- Plaspy automatically detects the tracker protocol once the device initiates reporting
- Events and device status become visible in Plaspy after the device registers and sends data
- Verification is performed by checking device replies and observing inbound data in Plaspy

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for the MDT-7 or the connected LMU, such as SMS commands or a CalmAmp configuration tool.  
2. Obtain the device MID using the manufacturer query command before making changes so you can target SMS commands if required.  
3. Enter the Plaspy server endpoint as either d.plaspy.com or the IP 54.85.159.138 in the device or LMU settings.  
4. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.  
5. Choose UDP or TCP transport if the device requires a transport selection.  
6. Save or apply the configuration and reboot the device or LMU if required to apply settings.  
7. Validate that the device reports to Plaspy by checking device replies and monitoring inbound device data in your Plaspy account.

## Example Configuration Commands

The MDT-7 and some CalAmp devices can be configured by SMS. The following public commands are provided here in the same order as the manufacturer guidance. The commands assume you include the required device identification when sending SMS commands if your workflow requires it. The device ID is the MID 10 digits returned by the query command !R0.

- Set the operator APN
```
!RP,2306,0,{{apn}}
```

- Set the APN username (if required)
```
!RP,2314,0,{{apnu}}
```

- Set the APN password (if required)
```
!RP,2315,0,{{apnp}}
```

- Set the GPRS server to the Plaspy IP
```
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port 8888
```
!RP,769,0,8888
```

- Reboot the tracker to apply settings
```
!R3,70,0
```

- Check current settings (verification command)
```
!RO
```

Notes on placeholders
- {{apn}} is the mobile operator APN string required for data connectivity.  
- {{apnu}} is the APN username if your operator requires one.  
- {{apnp}} is the APN password if your operator requires one.  
Keep the placeholders visible and replace them with the correct values for your operator when sending SMS commands.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available parameters; confirm commands against the device firmware you have installed.  
- The MDT-7 environment often uses a connected CalAmp LMU for cellular transport; follow the LMU or device-specific command flow depending on your installation.  
- Choose UDP or TCP according to your local network and device capability; both transports are supported by Plaspy but device behavior may differ.  
- SMS based configuration is helpful for field installs where direct access to device tools is limited; ensure SMS commands are sent to the correct device and that you use the MID when required.  
- After configuration, validate reporting by observing the device in Plaspy and confirming the device appears and updates location or status.

## Why Use Plaspy with This Configuration

Using the CalmAmp MDT-7 with Plaspy provides a practical way to centralize vehicle and driver workflows and to capture telemetry and events in a single fleet platform. Configuring the tracker or its LMU to point at Plaspy gives operations teams visibility into location and status updates without requiring device specific servers.

Learn more about Plaspy and available integrations at https://www.plaspy.com. Please verify the latest device specific configuration steps, firmware behavior, and command syntax with the manufacturer at http://www.calamp.com/ since device methods and details can change over time.
