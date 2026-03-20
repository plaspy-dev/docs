---
slug: /istartek/vt900_l/configuration
id: vt900_l-configuration
sidebar_label: Configuration
title: iStartek - VT900-L Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the iStartek VT900-L for use with Plaspy servers using SMS or GPRS settings
keywords:
  - iStartek VT900-L configuration
  - VT900-L setup for Plaspy
  - iStartek GPS tracker configuration
  - VT900-L server configuration
  - iStartek tracking software configuration
  - VT900-L GPS platform setup
  - Plaspy tracker configuration
  - VT900-L SMS configuration
  - vehicle tracking setup guide
  - fleet tracker integration
---

# iStartek - VT900-L Configuration

This page describes the public configuration context for using the iStartek VT900-L with Plaspy. It focuses on the practical, publicly available settings and commands that allow the VT900-L to report location and telemetry to the Plaspy platform. Use this guide to understand the server settings Plaspy expects and the common steps installers and integrators follow to get visibility on the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on its side, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VT900-L supports TCP/UDP reporting and SMS-based configuration; the example SMS commands included below are public commands commonly used to set APN, server, timer, and to verify parameters.

## Configuration Overview

This configuration process prepares the VT900-L to communicate reliably with Plaspy by specifying the network endpoint, transport, APN and reporting interval, and then validating that the device reaches the platform. Use either SMS-based configuration or the manufacturer’s configuration tool where available; both approaches aim to ensure the device can register on mobile networks and forward telemetry to Plaspy.

- Configure the device to use Plaspy’s server endpoint and port so reporting reaches the platform.
- Set the mobile operator APN so the tracker can establish a GPRS data session for TCP or UDP reporting.
- Choose UDP or TCP transport on the device if required and set the update timer to an appropriate reporting interval.
- Validate connectivity by checking device parameters and confirming messages arrive at Plaspy.
- Optionally perform a factory reset and reconfigure during initial installation or troubleshooting.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888 (the device may be configured for either UDP or TCP)  
- Plaspy behavior: automatic protocol detection in Plaspy means the platform will detect the tracker protocol once the device reports to the shared endpoint

All Plaspy devices use the same port so you only need to set the correct server endpoint and port once per device when integrating with Plaspy.

## Typical Requirements Before Setup

- A powered VT900-L with antenna connections and a stable vehicle power source or charged backup battery.  
- An active SIM card with data (GPRS/4G) and SMS enabled, inserted and registered on a compatible cellular network.  
- APN details from the mobile operator (APN name and optional APN username and password).  
- Access to the official iStartek configuration method such as SMS commands or vendor configuration software.  
- A way to receive and review server-side logs or platform device status in Plaspy to confirm successful registration.

## How This Tracker Connects to Plaspy

The VT900-L is configured to send location and telemetry data to the shared Plaspy server endpoint and port using cellular data or to use SMS for specific configuration and fallback messages. Once the device is pointed at Plaspy’s server, the platform automatically detects the correct protocol and begins processing incoming reports for visibility and alerts.

- Sends periodic location updates to d.plaspy.com (or the Plaspy IP) on port 8888 via TCP or UDP.  
- Uses the configured APN to establish a GPRS data session for TCP/UDP reporting.  
- Falls back to SMS for configuration commands and in some fallback workflows when data connectivity is unavailable.  
- Plaspy receives device messages and applies automatic protocol detection so the same port works for supported devices.  
- Data and event reporting allow fleet operators to track location, alarms, and status in Plaspy.

## Common Configuration Workflow

1. Access the official iStartek configuration method: SMS commands or the manufacturer configuration tool provided by iStartek.  
2. Enter the Plaspy server domain or IP (d.plaspy.com or 54.85.159.138) in the device server settings.  
3. Set the port to 8888 as the reporting port.  
4. If the device requires a transport selection, choose UDP or TCP according to your network preference. Plaspy supports both and will detect the protocol automatically.  
5. Configure the APN and any APN credentials required by your mobile operator.  
6. Apply or save the configuration and restart the device if required by the device firmware.  
7. Validate that the tracker reports to Plaspy by checking parameter responses and confirming device activity in the platform.

## Example Configuration Commands

The VT900-L can be configured by sending SMS messages with the following public commands. Preserve placeholders such as [apn], [apnu], and [apnp] when adapting commands to your operator. Commands are shown in the order commonly used for initial configuration.

- Optional factory reset (use when beginning fresh setup or troubleshooting):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN (replace placeholders with your operator values; keep the comma separated format; include APN username and password only if required):
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: Use APN,[apn]# if no username/password are required. If your provider requires credentials, include ,[apnu],[apnp] after the APN as shown in the manufacturer examples.

- Set the GPRS server using the Plaspy domain (recommended) and port 8888:
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP and port 8888:
```
SERVER,0,54.85.159.138,8888#
```

- Set the periodic position update interval to 60 seconds:
```
TIMER,60#
```

- Check current device parameters:
```
PARAM#
```

Send these SMS commands from the administrator phone number that the device recognizes (follow iStartek documentation for allowed senders). The SERVER command examples above explicitly point the tracker to Plaspy using either the domain or the IP and use port 8888, which is the shared Plaspy port.

## Configuration Notes

- Firmware differences and regional hardware variants can change exact SMS syntax and supported parameters; verify commands on the device or with iStartek documentation.  
- Use SMS configuration for remote or in-vehicle setups when physical access to configuration software is limited; SMS commands shown are public examples from manufacturer guidance.  
- Choose TCP or UDP based on network reliability and your operational needs; Plaspy supports both and will auto detect the device protocol on arrival.  
- All Plaspy devices use the same port so consistency in the SERVER port value (8888) simplifies deployments.  
- Label any placeholders clearly ([apn], [apnu], [apnp]) and confirm APN credentials with the mobile operator before sending configuration commands.

## Why Use Plaspy with This Configuration

Configuring the VT900-L to report to Plaspy provides a straightforward path to real-time fleet visibility, alarm forwarding, and operational reporting. The VT900-L’s multi-channel reporting options (TCP/UDP and SMS) and its support for typical fleet telemetry make it a practical match for Plaspy, enabling centralized monitoring of location, events, and device status across vehicles.

To learn more about Plaspy and how it supports device integration and fleet monitoring, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware notes, and manufacturer guidance for the VT900-L, verify details on the official iStartek website https://istartek.com/. Manufacturer specifications and setup steps can change over time, so always confirm the latest instructions with iStartek before deployment.
