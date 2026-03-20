---
slug: /eelink/tk418/configuration
id: tk418-configuration
sidebar_label: Configuration
title: EElink - TK418 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure EElink TK418 tracker for Plaspy with server settings and SMS commands for quick setup
keywords:
  - EElink TK418 configuration
  - EElink TK418 setup
  - EElink TK418 server configuration
  - EElink TK418 Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - EELINK protocol setup
  - fleet management tracker
  - TK418 GPS setup
---

# EElink - TK418 Configuration

This page documents the public configuration context for using the EElink TK418 tracker with Plaspy. It focuses on the practical server settings and the manufacturer supplied SMS commands that are commonly used to point the device at Plaspy so location and event data appear in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools. The TK418 supports SMS based configuration and GPRS registration values in its public command set, which are reproduced below for practical use.

## Configuration Overview

Use this configuration process to prepare a TK418 for reliable communication with Plaspy, validate connectivity, and make the device visible in the platform. The examples below reflect the public SMS command flow that EElink documents for GPRS server and APN setup.

- Point the tracker to the Plaspy server endpoint so it sends position and event messages to Plaspy.
- Configure APN and GPRS parameters so the device can open a data session on the cellular network.
- Adjust reporting interval and time zone so messages arrive at the cadence you expect.
- Optionally perform a factory reset or parameters check when troubleshooting or onboarding new units.
- Validate the device is visible in Plaspy after configuration and that events and telemetry arrive as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888 (device may be configured to use UDP or TCP)  
- Plaspy automatically detects the tracker protocol so the server endpoint can be the same for many device types

## Typical Requirements Before Setup

- A TK418 unit that is powered and installed according to the manufacturer instructions.  
- An active SIM with a data plan and SMS capability to send configuration SMS commands.  
- Access to an SMS enabled phone or SMS gateway that can send commands to the device.  
- The correct APN details for the mobile operator used by the SIM.  
- Access to the official EElink configuration guide or vendor tool for reference.  
- Ability to restart or power cycle the TK418 after applying settings if required.

## How This Tracker Connects to Plaspy

The TK418 is configured to report position and event messages to the shared Plaspy server endpoint and port so Plaspy can ingest EELINK protocol messages and present them in dashboards and reports.

- The device is pointed to either the domain d.plaspy.com or the IP 54.85.159.138 using port 8888.  
- TK418 can be set to use UDP or TCP transport on port 8888 depending on the device or installer preference.  
- Plaspy automatically detects the EELINK tracker protocol to parse incoming messages.  
- Once connected, the unit sends periodic location updates and configured events to Plaspy for visibility and alerting.  
- Plaspy surfaces incoming telemetry so you can monitor device status, battery and reported events in real time.

## Common Configuration Workflow

1. Prepare by consulting the official EElink TK418 configuration instructions or vendor tool for model specific notes.  
2. Ensure the device has a working SIM and confirm the operator APN details.  
3. Send or enter the server address as d.plaspy.com or alternatively the IP 54.85.159.138.  
4. Set the port to 8888 and choose UDP or TCP transport if the device requires a transport selection.  
5. Apply or save the configuration on the device and restart the tracker if recommended.  
6. Validate the device reports to Plaspy and confirm location and event messages arrive in the platform.  
7. If telemetry is not visible, verify APN, SMS confirmation responses, and repeat parameter checks.

## Example Configuration Commands

The TK418 supports SMS based configuration. The following public SMS commands are presented in the order shown in EElink documentation. Send these as SMS messages to the tracker phone number. The factory reset command is optional and should be used only when you need to clear prior settings.

1. Optional initial factory reset
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,[apn]#
```
If your operator requires a username or password include the optional placeholders:
```
APN,[apn],[apnu],[apnp]#
```
- [apn] is the carrier APN value.
- [apnu] is the APN username if required.
- [apnp] is the APN password if required.

4. Set the GPRS server to Plaspy by domain (preferred)
```
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server to Plaspy by IP
```
SERVER,0,54.85.159.138,8888#
```

5. Set the position update interval to every 60 seconds
```
TIMER,60#
```

6. Check current parameters on the device
```
PARAM#
```

Follow the listed order where indicated. After sending server and APN commands, allow the device to register on the mobile network and establish a GPRS session before validating visibility in Plaspy.

## Configuration Notes

- SMS based setup is shown here because it is included in the public EElink command set for the TK418; other configuration methods may exist in vendor tools or firmware.  
- Choose UDP or TCP based on your integration preferences; Plaspy accepts both on port 8888 and will detect the protocol automatically.  
- APN, username, and password placeholders must be filled with the operator supplied values to enable data sessions.  
- Firmware revisions and hardware variants can change command names or behavior; consult EElink documentation for the unit you have.  
- After applying settings, a device restart or power cycle can help ensure the new server and APN settings take effect.

## Why Use Plaspy with This Configuration

Configuring the TK418 to report to Plaspy gives organizations continuous location and event telemetry for fleet monitoring, incident response, and asset protection. By pointing the device to the shared Plaspy server endpoint and port, you can centrally collect EELINK protocol messages into Plaspy dashboards and alerts without per device server changes.

To learn more about Plaspy and how it ingests device data visit https://www.plaspy.com. For the latest EElink TK418 device specific setup notes, firmware changes, and official command references verify current information at the manufacturer website https://www.eelink.com.cn/
