---
slug: /concox/gt300/configuration
id: gt300-configuration
sidebar_label: Configuration
title: Concox - GT300 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox GT300 tracker configuration and Plaspy server settings
keywords:
- Concox GT300 configuration
- Concox GT300 setup
- GT300 Plaspy configuration
- GT300 server configuration
- Concox GPS tracker setup
- GT300 SMS configuration
- Plaspy tracker setup
- Concox GT300 APN configuration
- GT300 GPRS setup
- GPS tracker platform configuration
---

# Concox - GT300 Configuration

This page describes the public configuration context for using the Concox GT300 tracker with the Plaspy platform. It gathers the practical server settings and example setup commands that are commonly used to point GT300 devices to Plaspy so they can report location, alerts, and status. The content here is focused on the public, manufacturer provided commands and the Plaspy server information required for integration.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol at connection time. Exact manufacturer side steps can vary with firmware version, hardware revision, installation type, or vendor configuration tools. Where applicable this guide includes SMS command examples provided by Concox for the GT300 and explains the placeholders used for APN and other operator values.

## Configuration Overview

Configuring the GT300 for Plaspy prepares the device to send location and event data to Plaspy and allows the platform to display and monitor the device. The typical configuration sequence sets the device time zone, APN, GPRS server target, reporting interval, and enables GPRS mode so the tracker can establish a data session to Plaspy.

- Set the operator APN so the device can open a GPRS data connection
- Point the GT300 to the Plaspy server endpoint using the shared port
- Choose transport type UDP or TCP if the device requires a transport selection
- Configure a reporting interval to control how often the device sends updates
- Enable GPRS network mode so the device will send data to Plaspy for visibility

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888. All devices in Plaspy use the same port for server connections.  
- Transport support: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These are the public server values you will use when pointing a GT300 to Plaspy. You can use either the domain or the IP address when configuring the device.

## Typical Requirements Before Setup

- A charged and functioning Concox GT300 with access to the device owner or installer controls  
- A working SIM card with an active mobile data plan and the correct APN for the operator  
- Ability to send SMS to the device if using SMS configuration commands (manufacturer provided commands)  
- Access to the official Concox configuration method or documentation for your GT300 firmware revision  
- A Plaspy account and the ability to register or identify the device in the Plaspy platform for monitoring

## How This Tracker Connects to Plaspy

The GT300 is configured to open a GPRS data session to the Plaspy server endpoint and to send periodic location and event reports. Once the device connects to d.plaspy.com or 54.85.159.138 on port 8888 the Plaspy platform will detect the protocol and process incoming messages for visibility in the platform.

- The tracker opens a GPRS connection using the configured APN and credentials if required  
- Device reports are sent to the configured server endpoint at d.plaspy.com or directly to 54.85.159.138  
- Data is transmitted over the selected transport protocol, UDP or TCP, on port 8888  
- Plaspy receives the incoming messages and automatically detects the tracker protocol for processing  
- Regular timer reports and event messages (SOS, geofence, low battery) can be forwarded to Plaspy once connected

## Common Configuration Workflow

1. Access the official Concox configuration method for the GT300, typically SMS commands or an authorized setup tool, and confirm the device firmware version.  
2. Configure the operator APN using the APN placeholder for your SIM provider.  
3. Enter the Plaspy server address using d.plaspy.com or the IP 54.85.159.138.  
4. Set the server port to 8888. Plaspy uses the same port for all supported devices.  
5. Choose UDP or TCP transport if the GT300 requires a transport selection.  
6. Apply and save the configuration on the device and restart the device if required by the manufacturer.  
7. Validate that the device reports to Plaspy by checking device activity in the platform and by using the device verification command if available.

## Example Configuration Commands

The GT300 supports SMS based configuration. Below are the public SMS commands provided for setting up the device to report to Plaspy. Send each command as an SMS message to the device SIM number. Preserve the exact format and the trailing hash symbol where shown.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your operator APN. If your operator requires username or password, use [apnu] and [apnp] respectively where supported
```text
APN,[apn]# 
```
or, when using username and password (placeholders)
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to use the Plaspy domain (preferred) and port 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy IP address and port 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the periodic upload interval to every 60 seconds
```text
TIMER,60#
```
or alternative timer format
```text
TIMER,60,60#
```

- Enable GPRS mode on the device
```text
GPRSON,1#
```

- Verify current GPRS and server parameter settings
```text
GPRSSET#
```

Notes about placeholders: [apn] is the access point name for your SIM operator. [apnu] and [apnp] are optional username and password values used by some mobile operators. Replace placeholders with actual operator values as provided by your carrier.

## Configuration Notes

- SMS based configuration is supported for the GT300; ensure SMS messages are sent from a trusted number if the device enforces SMS control permissions.  
- Firmware differences can change available commands or parameter formats; verify command support for your GT300 firmware revision.  
- Use the domain d.plaspy.com where possible to allow behind the scenes IP changes, with the IP 54.85.159.138 available as an explicit alternative.  
- Choose UDP or TCP according to installation needs; Plaspy accepts either and performs protocol detection on arrival.  
- Keep a record of the commands sent and the device response so you can validate successful application of settings.

## Why Use Plaspy with This Configuration

Using the GT300 with Plaspy provides a straightforward way to collect location and event reports for small asset and personal safety tracking. Pointing the device to the shared Plaspy server endpoint and port enables the platform to ingest messages and present the device on live maps, alerts, and reporting dashboards for operational visibility.

Learn more about Plaspy and how it works with devices like the Concox GT300 at https://www.plaspy.com. For the most current device specific setup details, firmware notes, and official command references consult the manufacturer site at https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so confirm any critical settings before large scale deployment.
