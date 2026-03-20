---
slug: /cantrack/tk200/configuration
id: tk200-configuration
sidebar_label: Configuration
title: CanTrack - TK200 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for CanTrack TK200 with Plaspy server settings and SMS configuration examples
keywords:
  - CanTrack TK200 configuration
  - CanTrack TK200 setup
  - TK200 Plaspy configuration
  - CanTrack GPS tracker configuration
  - TK200 server setup
  - GPS tracker configuration Plaspy
  - vehicle tracking TK200
  - TK200 SMS configuration
  - GPRS tracker setup
  - fleet tracking CanTrack
---

# CanTrack - TK200 Configuration

This page documents the public configuration context for using the CanTrack TK200 with the Plaspy platform. It explains the shared Plaspy server settings you will apply to the device and provides practical SMS command examples extracted from public TK200 setup information. Use this guide to prepare the tracker for communication with Plaspy while referring to manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware revision, hardware variation, installation type, and vendor tools. The TK200 supports configuration by SMS or GPRS and the example commands below use the public SMS format commonly published for this model.

## Configuration Overview

The goal of TK200 configuration for Plaspy is to prepare the device to send position and status data to the Plaspy server endpoint and to verify reliable connectivity. For TK200 devices this commonly involves setting the device APN and GPRS server, defining reporting intervals, and confirming the correct time zone and password.

- Set the device GPRS server to Plaspy so the tracker will report to the shared endpoint d.plaspy.com or its IP address.
- Configure the cellular operator APN and credentials so the device can open a GPRS data session.
- Define the reporting interval so Plaspy receives periodic position updates.
- Set the device time zone and verify device clock accuracy for proper timestamps.
- Optionally restore factory settings before bulk configuration when preparing a new or returned unit.
- Validate the device is visible and reporting in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when a device connects and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered CanTrack TK200 with a working SIM card that has data enabled and the correct APN information
- The device password or administrator PIN for SMS configuration; the public example uses the default 123456
- Access to the manufacturer SMS command method or official configuration software for the TK200
- Knowledge of the mobile network APN, APN username, and APN password for the SIM in use
- Stable cellular signal at the installation location for reliable GPRS connectivity
- A test plan to confirm the device appears in Plaspy after configuration

## How This Tracker Connects to Plaspy

The TK200 can be configured to send location and event data to Plaspy using GPRS to the shared Plaspy endpoint and port. When properly configured, the tracker will establish a data session to the Plaspy server and transmit periodic reports and alarms so devices are visible and monitored in the platform.

- The device opens a GPRS connection and sends position reports to d.plaspy.com on port 8888
- Plaspy accepts either UDP or TCP transport and will detect the tracker protocol automatically
- Periodic reporting and alarms are delivered to Plaspy so operators can track movement and device status
- SMS can be used for initial configuration and for remote commands if GPRS is not yet established
- Successful connection results in the device appearing and reporting within the Plaspy platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK200 such as SMS commands or the CanTrack configuration tool.
2. If using SMS setup, prepare the device administrator password and APN credentials for the SIM you will install.
3. Enter the Plaspy server by name or IP address using either d.plaspy.com or 54.85.159.138 as the server endpoint.
4. Set the server port to 8888 in the device configuration and choose UDP or TCP if the device requires a transport selection.
5. Configure APN and reporting parameters so the device can open a GPRS session and send data to Plaspy.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the tracker reports to Plaspy by checking device visibility and recent position updates in the platform.

## Example Configuration Commands

The following SMS commands are public sample commands commonly used to configure the TK200. They preserve placeholders where applicable. The sample device password in these commands is 123456, which is published as the default in the example configuration. Send each line as a separate SMS from an authorized phone number.

- Optional initial factory restore (use only when needed for initial setup)
```
begin123456
```

- Set the time zone to UTC 0
```
timezone123456 0
```

- Set the operator APN
```
apn123456 [apn] [apnu] [apnp]
```
Explanation: replace [apn] with your operator APN, [apnu] with the APN username if required, and [apnp] with the APN password if required. Leave placeholders empty if not used.

- Set the update interval to 120 seconds
```
ITV123456 120 120
```
Explanation: the example sets the reporting interval to 120 seconds for periodic position updates.

- Set the GPRS server to Plaspy using the public IP and port
```
adminip123456 54.85.159.138 8888
```
You may also use the server domain instead of the IP address where supported by the device configuration method: d.plaspy.com and port 8888.

## Configuration Notes

- SMS configuration is a commonly published method for the TK200; manufacturer tools or firmware may also provide USB or SIM configuration alternatives.
- Different firmware versions and hardware revisions can change exact command formats, available parameters, or required order of commands.
- The device can use either UDP or TCP for transport. Plaspy accepts both and will automatically detect the tracker protocol.
- Always confirm APN credentials with the mobile operator and test that the device can open a GPRS session before large scale deployment.
- When using the adminip command, you can supply d.plaspy.com or the IP 54.85.159.138 and must set port 8888 to match Plaspy server settings.

## Why Use Plaspy with This Configuration

Configuring the CanTrack TK200 to report to Plaspy provides a straightforward way to centralize tracking, receive event alerts, and monitor device health across a fleet or set of personal devices. Using the shared Plaspy server settings simplifies large scale deployments because all devices use the same port and Plaspy automatically detects the tracker protocol on connection.

To learn more about Plaspy and how it supports device visibility and fleet monitoring visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and configuration details verify information on the manufacturer website https://www.cantrackgps.com/ as manufacturer specifications and setup methods can change over time.
