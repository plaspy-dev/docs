---
slug: /eelink/gpt60/configuration
id: gpt60-configuration
sidebar_label: Configuration
title: EElink - GPT60 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT60 showing Plaspy server settings SMS commands and setup workflow for platform integration
keywords:
  - EElink GPT60
  - GPT60 configuration
  - EElink GPS tracker setup
  - GPT60 Plaspy setup
  - GPS tracker configuration
  - personal tracker configuration
  - EELINK 2.1 configuration
  - Plaspy tracker integration
  - GPS platform setup
  - tracking server configuration
---

# EElink - GPT60 Configuration

This page documents the public configuration context for using the EElink GPT60 with Plaspy. It consolidates the Plaspy server settings you must apply, the typical prerequisites, and the practical SMS commands published for GPT60 devices so you can prepare the tracker for reliable reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The examples on this page use the published SMS command set for GPT60 where applicable, and are intended to guide integration into Plaspy while encouraging verification against official EElink documentation.

## Configuration Overview

The goal of configuration is to prepare the GPT60 to establish a persistent, correctly addressed connection to Plaspy so location, events, and alerts appear in the Plaspy platform. This involves setting network access parameters, assigning the Plaspy server endpoint, and confirming update intervals and telemetry behavior.

- Configure the device APN and GPRS settings so the tracker can access the cellular data network.
- Point the device to the Plaspy server endpoint so telemetry flows to Plaspy for mapping and alerts.
- Choose the transport mode UDP or TCP if the device requires a transport selection for server communication.
- Set an appropriate reporting interval to balance timeliness and battery life.
- Verify configuration with the device parameter query and confirm the tracker reports to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for supported devices

These values are the public Plaspy settings to use when configuring GPT60 devices. Plaspy uses the same port for all supported devices and will automatically detect the protocol used by the tracker.

## Typical Requirements Before Setup

- A charged GPT60 device with the ability to receive SMS commands or use the manufacturer configuration tool.  
- An active SIM card provisioned for data with the correct APN for the mobile operator.  
- Knowledge of the operator APN and optional APN username and password if required by the carrier.  
- Coverage on an LTE or GSM network supported by the device at the installation site.  
- Access to the device SMS command method or EElink configuration utility as provided by the manufacturer.  
- Administrative access to your Plaspy account to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured, the GPT60 sends location and event telemetry to the Plaspy server endpoint so administrators can monitor position, alerts, and device status. The device uses the EELINK 2.1 protocol for telemetry and remote configuration, enabling near real time updates and remote parameter changes.

- The tracker is set to report to the Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888.  
- Telemetry is transmitted over the chosen transport layer, UDP or TCP, depending on device settings.  
- Plaspy receives reported positions and events and maps them to the device record in the platform for visualization and alerts.  
- Status updates and event reports such as SOS or fall alerts are forwarded to Plaspy for dashboard visibility and notification workflows.  
- Plaspy automatically detects the tracker protocol so the same port and endpoint work across supported devices.

## Common Configuration Workflow

1. Access the official EElink configuration method for your device, typically SMS commands or the vendor configuration tool.  
2. Configure the APN using your operator values so the device can use mobile data.  
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set the server port to 8888.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Set the telemetry update interval and any event triggers such as SOS or fall alerts.  
6. Apply or save the configuration and restart the device if required by the manufacturer.  
7. Validate the device reports to Plaspy by checking device activity in Plaspy and using the device parameter query command to confirm settings.

## Example Configuration Commands

The GPT60 supports SMS based configuration. The following public commands are provided in the order recommended for initial setup. Preserve placeholders where shown.

1. Optional initial factory reset
```
FACTORY#
```
Use this only if you need to reset the tracker to factory defaults before reconfiguration.

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,[apn],[apnu],[apnp]#
```
- [apn] is the operator APN string.  
- [apnu] is the APN username when required.  
- [apnp] is the APN password when required.  
If a username or password is not needed, omit the corresponding placeholders as required by the device.

4. Set the GPRS server using the domain (preferred)
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server using the IP address (alternative)
```
SERVER,0,54.85.159.138,8888#
```

6. Set the update interval to every 60 seconds
```
TIMER,60#
```

7. Verify device parameters
```
PARAM#
```
This command queries current device settings so you can confirm APN, server, timer, and other parameters.

Follow the commands in the order shown when initial provisioning is required. Adjust timer and APN values to suit your deployment needs.

## Configuration Notes

- EElink firmware versions and regional device variants can change command behavior and supported parameters; confirm exact syntax with EElink documentation.  
- The GPT60 supports SMS based configuration as shown, which is useful for remote or field setups where direct USB or configuration tools are not available.  
- Choose TCP or UDP according to your operational needs and any carrier characteristics; Plaspy accepts either on port 8888 and auto detects the protocol.  
- Plaspy uses port 8888 for all devices, so use that port when entering server settings.  
- Always verify settings with the PARAM# command or the EElink configuration utility after applying changes.

## Why Use Plaspy with This Configuration

Using the GPT60 with Plaspy provides a straightforward path to real time tracking, alerting, and device monitoring for personal safety and portable asset workflows. The device streams location, SOS events, and telemetry to Plaspy where teams can visualize movement, respond to alerts, and integrate tracking data into operational processes.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific configuration methods, command syntax, and firmware details verify information with the manufacturer at https://www.eelink.com.cn/ .
