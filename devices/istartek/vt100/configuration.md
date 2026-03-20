---
slug: /istartek/vt100/configuration
id: vt100-configuration
sidebar_label: Configuration
title: iStartek - VT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure iStartek VT100 for Plaspy with server settings SMS commands and workflow for fleet integration
keywords:
  - iStartek VT100 configuration
  - iStartek VT100 setup
  - VT100 Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - VT100 server configuration
  - VT100 SMS commands
  - fleet tracking setup
  - VT100 integration
---

# iStartek - VT100 Configuration

This page documents the public configuration context for using the iStartek VT100 with the Plaspy platform. It summarizes the Plaspy server settings you must use, describes the typical setup workflow, and presents the VT100 SMS commands that are publicly available for server and APN configuration. Use this guide to prepare a VT100 for visibility in Plaspy while following your installer practices and manufacturer instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you can point the VT100 at a Plaspy endpoint and expect the platform to accept the device data. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so verify details in the official iStartek documentation when needed.

## Configuration Overview

Configuring the VT100 for Plaspy prepares the device to send GNSS and status data reliably to the Plaspy platform. The VT100 supports SMS and GPRS command configuration, allowing installers to set APN, server endpoint, transport, and reporting intervals before or after physical installation.

- Point the VT100 to the Plaspy server endpoint so position and event data are uploaded.
- Configure the operator APN to enable GPRS data sessions for reporting to Plaspy.
- Select transport (UDP or TCP) and the shared Plaspy port so data reaches the platform.
- Set reporting intervals and verify connectivity so devices appear in Plaspy dashboards.
- Use SMS commands or vendor tools to validate and update device parameters before final deployment.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888 (Plaspy uses the same port for all supported devices)  
- transport support for UDP or TCP (the VT100 may be configured using UDP or TCP on port 8888)  
- automatic protocol detection in Plaspy so the platform determines the tracker protocol after the device connects

## Typical Requirements Before Setup

- A powered VT100 device with an active SIM that supports GPRS data and SMS management.  
- Access to the installer or configuration method used by iStartek for the VT100 (SMS commands or vendor software).  
- The mobile operator APN, username, and password if required by your SIM; keep {{apn}}, {{apnu}}, and {{apnp}} placeholders ready.  
- A target Plaspy account or fleet configured to accept the device once it reports to the Plaspy server.  
- Basic knowledge of sending SMS commands to the device IMEI phone number or access to the installer tool provided by iStartek.  

## How This Tracker Connects to Plaspy

The VT100 sends GNSS coordinates and device events over the cellular network to the Plaspy server endpoint and port. Once the VT100 is configured to point to d.plaspy.com or the Plaspy IP and the correct transport and APN are set, the device will initiate GPRS sessions to upload position and event data to Plaspy.

- Data is sent to the shared Plaspy endpoint using port 8888.  
- The tracker can be configured to use either UDP or TCP transport to reach the Plaspy server.  
- Plaspy automatically detects the tracker protocol after the device connects to the server.  
- Events and telemetry such as location, motion, and status are forwarded to Plaspy for real-time maps, alerts, and reporting.  
- Proper APN and network registration are required so the VT100 can establish a data session to the Plaspy server.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT100 (SMS management or the vendor configuration tool).  
2. Configure the device APN using the operator APN values (use {{apn}} and optional {{apnu}} and {{apnp}} placeholders).  
3. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138.  
4. Set port 8888 and choose UDP or TCP if the VT100 requires a transport selection.  
5. Apply or save the configuration to the device and, if necessary, restart the device to activate settings.  
6. Validate the device reports to Plaspy by confirming the device appears in your Plaspy account or by using the device PARAM query command.  
7. Adjust reporting interval and other parameters as needed for fleet requirements.

## Example Configuration Commands

The VT100 supports SMS command configuration. Below are the public SMS commands provided for this model. Send each command as a separate SMS to the device SIM phone number. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when required.

Optional factory reset (use only when needed or during initial setup):
```
FACTORY#
```

Set the time zone to UTC offset 0:
```
GMT,E,0#
```

Set the operator APN. Replace {{apn}} with the carrier APN. If your operator requires APN username and password, include {{apnu}} and {{apnp}} in order:
```
APN,{{apn}}# 
```
Or with username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Explanation: {{apn}} is the network APN string. {{apnu}} and {{apnp}} are optional APN username and password fields.)

Set the GPRS server to Plaspy by domain (recommended) or by IP. Both options use port 8888:
```
SERVER,1,d.plaspy.com,8888#
```
Or set by IP:
```
SERVER,0,54.85.159.138,8888#
```
Note: The first parameter selects server slot or mode per VT100 SMS command convention.

Set the periodic upload interval to every 60 seconds:
```
TIMER,60#
```

Check current parameter settings:
```
PARAM#
```

Follow iStartek guidelines for command timing and SMS formatting. Some firmware versions may require commands in a specific order or require a confirmation reply from the device.

## Configuration Notes

- The VT100 supports SMS based configuration as shown, but some installers prefer the vendor configuration tool where available. Use whichever method is supported by your device firmware.  
- Firmware versions and regional hardware variants can change command behavior or available parameters; verify command syntax if a device does not respond as expected.  
- When selecting transport, UDP is commonly used for low overhead telemetry while TCP may be preferred where guaranteed delivery is required; the VT100 may allow choosing either on port 8888.  
- Use the domain d.plaspy.com where possible; using the Plaspy IP is an alternative but domain use is generally preferred for future server changes.  
- After applying settings, validate connectivity with PARAM# and confirm the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the VT100 to report to Plaspy gives operations teams real time visibility into vehicle location, status, and event alerts using a single shared server endpoint. With the VT100 set to point at Plaspy and an appropriately configured APN, organizations can integrate location streams and event notifications into dashboards, geofence workflows, and fleet reports for improved dispatching and security.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer details, verify information on the official iStartek site at https://istartek.com/ as methods and firmware behavior may change over time.
