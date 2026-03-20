---
slug: /goome/gm06nw/configuration
id: gm06nw-configuration
sidebar_label: Configuration
title: Goome - GM06NW Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Goome GM06NW to connect to Plaspy with server settings and SMS command examples
keywords:
  - Goome GM06NW configuration
  - Goome GM06NW setup
  - GM06NW Plaspy setup
  - GM06NW server configuration
  - Goome GPS tracker setup
  - Goome GM06NW SMS commands
  - Plaspy device configuration
  - vehicle tracking configuration
  - fleet tracking Goome
  - GPS tracker server settings
---

# Goome - GM06NW Configuration

This page documents the public configuration context for using the Goome GM06NW tracker with Plaspy. It gathers the practical server settings, SMS commands, and workflow guidance you need to prepare this device to report to Plaspy, while pointing to manufacturer documentation for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools, so treat the commands and examples below as practical public guidance rather than a device manual.

## Configuration Overview

The Goome GM06NW is a GPS tracker with GSM connectivity and several vehicle-focused features. The configuration process prepares the device to send location and status data to Plaspy by setting network parameters, the reporting server, and reporting intervals.

- Configure the device APN so it can use the mobile network for GPRS data.
- Point the tracker to the Plaspy server endpoint so position and event data reach the platform.
- Choose UDP or TCP transport and confirm the device is using port 8888, the shared Plaspy port.
- Set update intervals and alarms so the tracker reports at the required cadence.
- Verify configuration and device status with built-in SMS query commands.
- Confirm the device appears and reports correctly in Plaspy after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (device may be configured for either)  
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings that the GM06NW must use to send data to the Plaspy platform.

## Typical Requirements Before Setup

- A valid GSM SIM with data enabled and the correct APN credentials for the mobile operator.  
- Ability to send SMS to the device for SMS-based configuration, if using SMS commands.  
- Power source connected to the tracker and the device in normal operating mode.  
- Access to the official Goome setup instructions or installer tools for reference.  
- A Plaspy account or access to the Plaspy platform to validate the device appears and reports.  
- Basic knowledge of whether your device accepts domain names or requires an IP address for the server setting.

## How This Tracker Connects to Plaspy

The GM06NW is configured to report location and status to the shared Plaspy server endpoint and port. Once network access and server settings are correct, the device periodically uploads GPS and event data so Plaspy can display locations, alarms, and history.

- The tracker uses GPRS over the mobile operator network using configured APN credentials.  
- It sends position and event packets to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.  
- Transport can be set to UDP or TCP depending on device options and installer preference.  
- Plaspy detects the device protocol automatically and accepts packets on the shared port.  
- After successful setup, the device becomes visible in Plaspy for real time monitoring and playback.

## Common Configuration Workflow

1. Access the official Goome configuration method for your GM06NW model, typically SMS commands or the manufacturer's configuration tool.  
2. Enter the Plaspy server by specifying either the domain d.plaspy.com or the IP 54.85.159.138 as supported by your device.  
3. Set the server port to 8888. Plaspy uses the same port for all supported devices.  
4. Choose the transport mode UDP or TCP if the device requires a transport selection.  
5. Apply or save the configuration on the device using the manufacturer method. For SMS setups this means sending the appropriate SMS commands.  
6. Restart the device if required by the device instructions or after applying network/server changes.  
7. Validate that the device reports to Plaspy by checking device status on the Plaspy platform and using any available verification SMS commands.

## Example Configuration Commands

The Goome GM06NW accepts SMS commands for configuration. The following commands are public examples and preserve placeholders where applicable. Send these SMS messages from a registered number according to your device instructions.

1. Optional factory reset for initial setups or when instructed by the installer. Use this only when needed.
```text
FACTORY#
```

2. Set the operator APN. Replace {{apn}} with your carrier APN. If your operator requires APN username and password include {{apnu}} and {{apnp}} as shown. The username and password fields are optional depending on the operator.
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
If no username or password is required, use:
```text
APN,{{apn}}#
```

3. Set the GPRS server to the Plaspy IP address and port shown in public guidance. This example uses the Plaspy server IP and port exactly as published.
```text
GPRSSET,54.85.159.138,8888#
```
If your tracker firmware accepts a domain name instead of an IP address you may substitute the server domain:
```text
GPRSSET,d.plaspy.com,8888#
```

4. Set the location update interval to 60 seconds as an example.
```text
TIMER,60#
```

Verification commands included in the device public commands:

- To check the currently set server and GPRS settings:
```text
GPRSSET#
```

- To check device status:
```text
STATUS#
```

Keep the command order when performing an initial setup: optionallly factory reset, set APN, set the Plaspy GPRS server, set timer, then verify settings and status.

## Configuration Notes

- SMS-based configuration is supported by the GM06NW public commands shown above. Ensure SMS is sent from an authorized number if the device enforces number binding.  
- Firmware and hardware revisions can change command syntax or supported features. Always confirm with Goome documentation for your device revision.  
- Choose UDP or TCP based on installer preference and network reliability; Plaspy accepts either and detects protocol automatically.  
- Plaspy uses port 8888 for all supported devices so keep that port consistent across device settings.  
- Verify the APN and carrier settings before setting the server; incorrect APN will prevent GPRS connectivity.

## Why Use Plaspy with This Configuration

Configuring the GM06NW to report to Plaspy gives you centralized visibility and operational oversight across vehicles and devices. With the public commands and server settings above you can ensure the tracker connects to the Plaspy platform for live monitoring, event alerts, and historical playback.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify the manufacturer documentation at http://www.goomegpstracker.com as device behavior and setup methods may change over time.
