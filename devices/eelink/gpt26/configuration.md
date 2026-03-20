---
slug: /eelink/gpt26/configuration
id: gpt26-configuration
sidebar_label: Configuration
title: EElink - GPT26 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for configuring the EElink GPT26 tracker to report to Plaspy with shared server settings and SMS commands
keywords:
  - EElink GPT26 configuration
  - EElink GPT26 setup
  - GPT26 server configuration
  - GPT26 Plaspy setup
  - EElink tracking platform configuration
  - Plaspy server settings
  - GPS tracker SMS commands
  - GPS tracker APN configuration
  - device reporting to Plaspy
  - fleet tracking configuration
---

# EElink - GPT26 Configuration

This page provides public configuration context for using the EElink GPT26 GPS tracker with Plaspy. It gathers the practical server settings, verification steps, and example SMS commands that are commonly used to prepare a GPT26 device to report to the Plaspy platform. The content here is based on manufacturer public commands and Plaspy’s shared server requirements.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands below as public examples and confirm device-specific details with the manufacturer when necessary.

## Configuration Overview

The configuration process prepares the GPT26 to reach the Plaspy server and deliver location and status updates reliably. For GPT26, the manufacturer provides SMS-based commands that are commonly used to set time zone, APN, server endpoint, and reporting interval.

- Configure the device APN so the tracker can establish a GPRS data connection to Plaspy.
- Set the GPRS server entry to Plaspy’s shared endpoint (domain or IP) and port 8888.
- Choose the transport (UDP or TCP) if the device requires a selection for data sessions.
- Set an appropriate reporting interval (for example, TIMER,60# for 60 seconds) and validate connectivity to the Plaspy endpoint.
- Use verification commands to confirm parameters after configuration and to troubleshoot connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com for the Plaspy data endpoint  
- Server IP 54.85.159.138 as an alternative endpoint  
- Port 8888 as the shared port used by Plaspy for all devices  
- Transport support: configure the device for UDP or TCP on port 8888 depending on the device option  
- Plaspy automatically detects the tracker protocol when the device connects to the server

## Typical Requirements Before Setup

- A charged GPT26 unit that is powered and reachable for configuration commands  
- An active SIM card with a valid data APN and SMS capability where required for SMS setup  
- The correct APN details for the mobile operator (APN, username, password as needed)  
- Access to a phone or SMS gateway to send configuration SMS commands to the device  
- Manufacturer instructions or software for device-specific options and firmware notes  
- A way to monitor device connectivity on Plaspy after configuration

## How This Tracker Connects to Plaspy

The GPT26 is configured to send location and device data to Plaspy over the mobile data connection using the GPRS server settings you provide. When directed to the Plaspy server endpoint and port, the device opens a data channel and transmits telemetry so the platform can display location and status.

- The device uses the configured APN to obtain GPRS connectivity to the mobile network.  
- The tracker is pointed at the Plaspy server endpoint (d.plaspy.com) or the equivalent IP (54.85.159.138).  
- Data is sent to port 8888 on Plaspy; all devices in Plaspy use this same port.  
- Plaspy will automatically detect the correct tracker protocol when the unit connects.  
- Reported location and status become visible in Plaspy once the device successfully authenticates and transmits.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands if SMS-based setup is used.  
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.  
3. Set the device port to 8888 (Plaspy uses the same port for all devices).  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Configure the APN for the SIM (APN, username, password as required) so GPRS data can be established.  
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.  
7. Validate that the device reports to Plaspy by checking device status in the platform or using the device verification command.

## Example Configuration Commands

The GPT26 manufacturer provides SMS-based commands to configure common parameters. Below are the public commands in order. Send these by SMS to the device number. Preserve placeholders when you insert actual operator values.

- Optional initial factory reset (use only if you need to restore factory defaults):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN (replace [apn], and include [apnu] and [apnp] only if your operator requires username and password):
```
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the mobile operator APN string. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server to Plaspy using the domain (UDP or TCP choice is configured on device if required):
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy using the IP address:
```
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds:
```
TIMER,60#
```

- Verify current parameters:
```
PARAM#
```

Follow the command order when that order is important and confirm each change with PARAM# or the device response.

## Configuration Notes

- Device manufacturers sometimes change command syntax between firmware versions; confirm the exact SMS syntax for your unit before sending.  
- SMS-based configuration is shown here because the GPT26 supports SMS query and command as a public setup method; vendor software or OTA methods may also be available.  
- Choose UDP or TCP according to the device option; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.  
- When using the domain entry (d.plaspy.com) the device must be able to resolve DNS; the IP alternative (54.85.159.138) can be used if DNS is not available.  
- Keep APN placeholders ([apn], [apnu], [apnp]) intact until you substitute operator-specific values.

## Why Use Plaspy with This Configuration

Configuring the EElink GPT26 to report to Plaspy gives organizations a straightforward path to centralize asset visibility and operational monitoring. Using the shared Plaspy server settings and port simplifies device onboarding across fleets and allows Plaspy to detect the tracker protocol automatically when devices come online.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer guidance for the EElink GPT26, verify current information at the manufacturer site https://www.eelink.com.cn/ as setup methods and firmware behavior may change over time.
