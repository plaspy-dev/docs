---
slug: /concox/gt03a/configuration
id: gt03a-configuration
sidebar_label: Configuration
title: Concox - GT03A Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring a Concox GT03A tracker to communicate with Plaspy using shared server settings and SMS commands
keywords:
  - Concox GT03A configuration
  - Concox GT03A setup
  - Concox GT03A server configuration
  - GT03A Plaspy setup
  - GT03A tracking software configuration
  - GT03A GPS platform setup
  - Plaspy tracker configuration
  - Plaspy device setup guide
  - GPS tracker SMS commands
  - vehicle tracker configuration
---

# Concox - GT03A Configuration

This page documents the public configuration context for using the Concox GT03A tracker with Plaspy. It summarizes the practical server settings, typical prerequisites, an example SMS command flow published for the GT03A, and the steps required to point the device to Plaspy so the tracker can report location and status to your account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The GT03A description and the published SMS commands form the basis for the guidance below, but always check your device firmware and installer tools for the exact command syntax used in your unit.

## Configuration Overview

The objective of this configuration process is to prepare a GT03A tracker to communicate reliably with Plaspy so the device appears in the platform and sends regular updates. This includes setting APN and GPRS parameters when required, configuring the server endpoint and transport, and enabling reporting intervals that suit your monitoring needs.

- Configure the device to use the Plaspy server endpoint and the shared port used by Plaspy
- Provide APN and any necessary SIM parameters so the tracker can open GPRS data
- Choose transport mode if the tracker requires a UDP or TCP selection and save that configuration
- Set reporting intervals so location updates arrive at a cadence appropriate for your use case
- Verify connectivity and confirm the device appears and reports in Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol when data arrives  
- All devices in Plaspy use the same port for server communication

## Typical Requirements Before Setup

- A charged GT03A unit installed or powered so it can accept SMS and establish data sessions
- A working SIM card with enabled data and SMS capability and the correct APN information
- Access to the device configuration method supported by your unit such as SMS commands or manufacturer software
- Knowledge of the APN settings for your mobile operator including optional username and password placeholders like {{apn}}, {{apnu}}, and {{apnp}}
- A way to send SMS commands to the device from a trusted phone number if SMS configuration is used
- Confirmed Plaspy server details to enter which are d.plaspy.com or 54.85.159.138 and port 8888

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GT03A sends its location and device status to the shared Plaspy server endpoint and port. Plaspy accepts incoming connections on the configured port and determines the appropriate protocol to decode the device messages automatically.

- The tracker opens a GPRS data session using the configured APN and credentials
- Device sends periodic location updates to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy detects the device protocol automatically and parses incoming telemetry
- Events such as SOS alerts and movement reports are forwarded to the Plaspy platform for visibility
- Once reporting is confirmed, the device becomes visible in Plaspy and starts regular monitoring

## Common Configuration Workflow

1. Access the official Concox configuration method for your GT03A such as the SMS command interface or the vendor supplied software
2. If required, optionally reset to factory defaults to clear prior server settings
3. Enter the APN settings for the installed SIM including any username and password using the APN placeholders if needed
4. Enter the server as d.plaspy.com or alternatively 54.85.159.138 and set the port to 8888
5. Choose UDP or TCP transport if the device requires a transport selection; otherwise use the default the device provides
6. Set a reporting interval that meets your needs and enable GPRS mode if applicable
7. Apply or save the configuration and restart the device if the device requires a reboot to apply settings
8. Validate that the device successfully reports to Plaspy and appears in your platform view

## Example Configuration Commands

The GT03A supports SMS based configuration. The following commands are published for the GT03A and should be sent as SMS messages to the device SIM number in the order shown when used for initial setup. Commands that reset settings are labeled optional where appropriate.

1. Optional factory reset when starting fresh
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the mobile operator APN
- Replace {{apn}} with your operator APN
- If your APN requires a username or password, include {{apnu}} and {{apnp}} where supported
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(If only APN is required, sending APN,{{apn}}# is acceptable.)

4. Set the GPRS server to Plaspy using the domain (recommended)
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP address
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
```
TIMER,60#
```
Or alternate timer format
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Verify current GPRS parameters and server settings
```
GPRSSET#
```

Notes on placeholders
- {{apn}} is the APN string for your mobile provider
- {{apnu}} is an optional APN username if your operator requires one
- {{apnp}} is an optional APN password if required

## Configuration Notes

- SMS based configuration is a common and supported method for GT03A units; ensure your sending number is authorized if the device restricts command sources
- Firmware differences and hardware revisions can change command syntax or supported parameters; always confirm the syntax for your device firmware
- TCP versus UDP selection is device dependent; choose the transport your installation requires and be aware that Plaspy accepts both on port 8888
- Plaspy uses the same port across supported devices so standardizing on port 8888 simplifies multi device deployments
- If configuration via SMS fails, consult Concox tools or vendor installation software for alternative setup methods

## Why Use Plaspy with This Configuration

Using Plaspy with a correctly configured Concox GT03A provides a practical way to centralize vehicle location, alerts, and status reporting in a single platform. With the GT03A reporting to the shared Plaspy server endpoint and port, organizations can monitor fleets, receive SOS alerts, and use geofencing and movement events for operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance verify details on the official Concox site at https://www.iconcox.com/ since setup methods and firmware behavior can change over time.
