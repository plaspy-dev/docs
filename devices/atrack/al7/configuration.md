---
slug: /atrack/al7/configuration
id: al7-configuration
sidebar_label: Configuration
title: ATrack - AL7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AL7 tracker setup with Plaspy server and common AT command examples
keywords:
  - ATrack AL7 configuration
  - AL7 setup for Plaspy
  - ATrack AL7 server configuration
  - AL7 GPS tracker setup
  - ATrack AL7 AT commands
  - Plaspy tracker configuration
  - AL7 GPRS server settings
  - fleet tracking AL7
  - AL7 TCP UDP configuration
  - AL7 device integration
---

# ATrack - AL7 Configuration

This page documents the public configuration context for using the ATrack AL7 tracker with the Plaspy fleet platform. It focuses on the practical server settings and example AT command sequences published for the AL7, and explains what you need to prepare so the device can communicate with Plaspy. Use this guide alongside the AL7 product documentation to apply the shown commands and confirm connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices send data to the platform. Exact manufacturer side setup steps can vary by AL7 firmware version, hardware revision, installation type, and the vendor configuration tools you use. The example commands below reflect public AL7 configuration snippets and include placeholders where you must insert carrier APN credentials.

## Configuration Overview

The goal of configuration is to prepare the AL7 to connect reliably to Plaspy and to report GPS and event data at the desired interval. The AL7 supports SMS, TCP, and UDP based communication and can be set into binary reporting mode plus customized event reporting via its AT command interface.

- Configure the device GPRS settings so it opens a data session to Plaspy
- Enable event reporting for inputs such as ACC to track ignition or motion
- Set a reporting interval for periodic position updates
- Choose TCP or UDP transport to the Plaspy server endpoint on the shared port
- Verify device status and connectivity after applying settings so locations appear in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These server settings are the common endpoint values used by Plaspy for supported devices and should be entered into the AL7 where the GPRS server or remote host is configured.

## Typical Requirements Before Setup

- A valid SIM card with mobile data enabled and the correct APN details from the mobile operator
- Power supply to the AL7 in its supported range so the device can establish GPRS (AL7 supports a wide input voltage)
- Access to the official ATrack configuration method for your device version such as SMS commands, serial configuration tool, or manufacturer software
- Basic knowledge of sending AT style configuration commands or using the vendor tool to apply those commands
- A way to confirm device reports such as checking the Plaspy device list or using the AL7 AT information query

## How This Tracker Connects to Plaspy

When configured, the AL7 opens a GPRS session and sends location and event messages to the shared Plaspy endpoint. Plaspy listens on the same port for all devices and determines the incoming protocol automatically so individual trackers do not need a separate port.

- The AL7 is set to report to the Plaspy server domain or IP using the configured transport
- Position and event messages are sent over TCP or UDP to port 8888 at Plaspy
- Event triggers such as ACC changes can be configured to generate immediate reports
- Buffered data is transmitted when a connection is available so historical positions reach Plaspy
- Plaspy parses the incoming tracker protocol automatically to display device data

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for the AL7 that matches the device firmware and region.
2. Enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138 in the device GPRS or server settings.
3. Set the device port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the AL7 configuration requires selecting a transport type.
5. Apply or save the configuration on the AL7 and ensure the device accepts the settings.
6. Restart the device if required by the firmware or configuration tool so changes take effect.
7. Validate that the AL7 reports to Plaspy by checking the Plaspy device view or using the AT$INFO=? verification command.

## Example Configuration Commands

The following public example commands are published for configuring an AL7 for Plaspy. They show setting an ACC event, a 60 second tracking interval, binary output format, and the GPRS server. Preserve the placeholders [apn], [apnu], and [apnp] when you substitute your carrier values.

1. Set ACC event reporting and related actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
- Explanation: configures the input and two report definitions along with an action setting for ACC events.

2. Set time interval to 60 seconds for tracking
```text
AT$TRAC=1,60,,,,,2
```
- Explanation: enables periodic tracking with a 60 second interval. Adjust as needed for your reporting policy.

3. Set binary (compact) message format
```text
AT$FORM=1,@P,0,""
```
- Explanation: switches message format to binary which some platforms and parsers expect. Confirm Plaspy compatibility; Plaspy auto-detects protocol and can parse supported formats.

4. Configure the GPRS server to Plaspy with APN placeholders
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- Explanation: GPRS setup including APN fields and the Plaspy server IP and port. Replace [apn], [apnu], and [apnp] with your operator APN, username, and password if required. The command includes the Plaspy server IP 54.85.159.138 and port 8888 as shown.

Verification command to check device status
```text
AT$INFO=?
```
- Explanation: queries device status and configuration for verification after applying settings.

Note on placeholders: [apn] is the mobile operator access point name, [apnu] is the APN username if required, and [apnp] is the APN password if required. Some networks only require the APN and leave username and password blank.

## Configuration Notes

- Firmware variations can change AT command syntax or available parameters; verify commands for your device firmware before applying them.
- Choose UDP or TCP according to installation needs; both transports are supported by Plaspy on port 8888 but behavior such as connection persistence differs by transport.
- If your operator requires specific APN authentication, be sure to populate [apnu] and [apnp] or leave them empty as required by the carrier.
- Some installers prefer the device IP entry method instead of domain names; both d.plaspy.com and 54.85.159.138 are supported by Plaspy.
- Use the AT$INFO=? verification command after configuration to confirm device state and GPRS registration.

## Why Use Plaspy with This Configuration

Configuring the ATrack AL7 to report to the Plaspy server gives organizations a straightforward way to collect vehicle location and event data in a single platform. Plaspy's shared endpoint approach simplifies deployment because all supported devices report to the same server and port, and the platform automatically detects incoming protocols to reduce per device configuration overhead.

If you want to learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance verify details on the ATrack manufacturer site https://www.atrack.com.tw/ as setup methods and firmware behavior can change over time.
