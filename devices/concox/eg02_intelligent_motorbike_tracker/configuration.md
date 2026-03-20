---
slug: /concox/eg02_intelligent_motorbike_tracker/configuration
id: eg02_intelligent_motorbike_tracker-configuration
sidebar_label: Configuration
title: Concox - EG02 Intelligent Motorbike Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox EG02 tracker to report to Plaspy with server settings SMS commands and verification steps for reliable fleet monitoring
keywords:
  - Concox EG02 configuration
  - EG02 tracker setup
  - Concox EG02 Plaspy
  - EG02 server configuration
  - motorbike tracker setup
  - GPS tracker configuration guide
  - Plaspy device configuration
  - EG02 SMS commands
  - micro mobility tracking
  - fleet tracker configuration
---

# Concox - EG02 Intelligent Motorbike Tracker Configuration

This page summarizes the public configuration information you can use to prepare a Concox EG02 Intelligent Motorbike Tracker for integration with Plaspy. It focuses on the shared server settings, practical setup steps, and the SMS commands published for EG02 devices so you can direct data to Plaspy for live tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow below as public guidance and confirm any device specific details with the official Concox documentation.

## Configuration Overview

The goal of this configuration process is to make the EG02 send its GNSS, LBS, and event telemetry to Plaspy so the device appears in your Plaspy account and supplies real time updates and alerts. The EG02 supports SMS based configuration commands which many installers use for simple remote setup without connecting to a PC.

- Configure the tracker to point at the Plaspy server endpoint so telemetry is forwarded to Plaspy.
- Set the APN and GPRS mode so the tracker can use mobile data to reach Plaspy.
- Choose transport and port settings to match Plaspy requirements and save them to the device.
- Verify connectivity and use the provided verification command to check active parameters.
- Ensure reporting interval is appropriate for your fleet needs and complies with operator data plans.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888; the device may be configured using either UDP or TCP  
- Plaspy automatically detects the tracker protocol when the device connects  
- Note that Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible so SMS configuration commands can be received or the manufacturer tool can be used  
- Active Micro SIM with a data plan and correct APN credentials for the operator network  
- Ability to send SMS commands from a mobile phone number permitted by the device (SMS based setup is supported)  
- Access to official Concox configuration instructions or software for advanced options or firmware specific steps  
- Basic information about desired reporting interval and any geo fence or alarm behaviors to configure after connectivity is confirmed

## How This Tracker Connects to Plaspy

The EG02 is configured to open a GPRS connection to the Plaspy server endpoint and send regular location and event messages. Plaspy receives these messages and exposes them for dashboard monitoring, alerts, and historical playback.

- The tracker is pointed to the Plaspy server domain or IP and uses port 8888 for outgoing telemetry  
- Data transport can be TCP or UDP depending on device settings and network conditions  
- Plaspy receives GNSS and LBS based positions plus status events and alarms for visibility in the platform  
- Reporting interval controls how frequently the EG02 sends updates to the Plaspy endpoint  
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming data without per device protocol selection

## Common Configuration Workflow

1. Access the official Concox configuration method for your device version, typically SMS commands or a Concox configuration tool as documented by the manufacturer.  
2. Enter the Plaspy server address by sending or setting either d.plaspy.com or 54.85.159.138 as the SERVER target.  
3. Set the server port to 8888 in the tracker settings. Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP as the transport if the device requires an explicit selection. The EG02 can be set to use either transport.  
5. Configure APN settings so the tracker can establish GPRS data, then enable GPRS mode on the device.  
6. Apply or save the configuration and restart the tracker if required by the device or firmware.  
7. Validate the device reports to Plaspy by checking device status in the platform and using the device verification command where available.

## Example Configuration Commands

The EG02 supports SMS based configuration. Below are the public SMS commands and their intended order. Send each command as an SMS to the tracker SIM number. Keep parameter placeholders exactly as shown.

1. Optional factory reset step when needed for initial setup or to clear prior settings
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the APN for the mobile operator
```
APN,{{apn}}# 
```
If your operator requires APN username and password, include them as additional comma separated values:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} is the operator APN
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required

4. Set the GPRS server to the Plaspy domain on port 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server to the Plaspy IP on port 8888
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
```
TIMER,60#
```
Or an alternative form accepted by some firmware
```
TIMER,60,60#
```

6. Enable GPRS mode so the device uses data to report
```
GPRSON,1#
```

7. To check current GPRS and server related parameters on the device use the verification command
```
GPRSSET#
```

Send commands in the above order where order matters, for example set APN before enabling GPRS and set SERVER before enabling reporting if practical. If you use the optional factory reset, do it only when necessary.

## Configuration Notes

- SMS based setup is supported and commonly used for remote configuration, but manufacturer tools or PC software may be available for bulk provisioning. Use the method that matches your workflow.  
- Firmware versions and hardware revisions can change command formats or supported parameters. Confirm exact syntax with Concox documentation for your device build.  
- Choose TCP or UDP according to network behavior and operator recommendations. Plaspy accepts either transport and auto detects protocol on receipt.  
- The Plaspy server uses a single shared port 8888 for all devices so ensure that port is configured exactly as shown.  
- Keep APN credentials handy before beginning setup and verify the SIM has data enabled and sufficient balance for initial testing.

## Why Use Plaspy with This Configuration

Configuring the Concox EG02 to report to Plaspy lets operators centralize location, alarm, and status telemetry for micro mobility and light vehicle fleets. With the EG02 sending GNSS and LBS positions and event alerts to Plaspy, fleet managers can monitor real time activity, respond to theft or safety events, and review historical movement for operations and maintenance planning.

To learn more about Plaspy and how it integrates with devices like the Concox EG02 visit https://www.plaspy.com. For the most current device specific configuration details, command syntax, and firmware behavior check the Concox official documentation at https://www.iconcox.com/ .
