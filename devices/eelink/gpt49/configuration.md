---
slug: /eelink/gpt49/configuration
id: gpt49-configuration
sidebar_label: Configuration
title: EElink - GPT49 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT49 showing how to point the device to Plaspy server settings and validate connectivity
keywords:
  - EElink GPT49 configuration
  - EElink GPT49 setup
  - GPT49 server configuration
  - GPT49 Plaspy setup
  - EElink GPS tracker configuration
  - GPT49 SMS configuration
  - GPS platform setup Plaspy
  - asset tracker configuration guide
  - long battery GPS tracker setup
  - enterprise asset tracking configuration
---

# EElink - GPT49 Configuration

This page describes the public configuration context for using the EElink GPT49 tracker with the Plaspy platform. It gathers the essential server settings and practical setup guidance you can apply when preparing GPT49 trackers to report location and device events to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available this guide includes the GPT49 SMS configuration commands that are commonly used for initial setup and verification.

## Configuration Overview

The goal of this configuration process is to prepare a GPT49 so it reliably communicates with Plaspy using the shared Plaspy server endpoint and port. Configuration typically sets the device time zone, APN for cellular data, and the GPRS server address and transport, then validates reporting with a parameter check and live monitoring on Plaspy.

- Point the tracker to the Plaspy server endpoint so packets reach Plaspy for ingestion and display.
- Configure the device APN and cellular parameters so GPRS data can be sent from the tracker.
- Select UDP or TCP transport if the device requires a transport choice and set the shared Plaspy port.
- Enable an appropriate reporting interval such as a periodic timer or emergency real time mode for movement events.
- Validate settings on the device with a parameter query and confirm the device appears in Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device sends data to the server endpoint.

## Typical Requirements Before Setup

- A charged GPT49 device with sufficient battery for configuration and testing.  
- An active SIM card with data service and SMS capability installed in the device.  
- Access to the EElink manufacturer documentation or installer tool for the GPT49.  
- A method to send SMS commands to the device if you plan to use SMS based configuration.  
- A Plaspy account and access to the platform to verify the device appears and reports correctly.  
- Cellular coverage at the device location sufficient for GPRS or LTE data.

## How This Tracker Connects to Plaspy

The GPT49 sends GNSS positions, device status, and event flags over the cellular network to the Plaspy server endpoint. Once the device is configured to use Plaspy server settings and an active APN, Plaspy ingests the packets and presents location, history, and alerts in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port.  
- Location and telemetry packets are sent over LTE or fallback cellular modes to reach Plaspy.  
- Plaspy automatically detects the protocol used by the tracker when data arrives.  
- Event reports such as movement, tamper, or geofence triggers are forwarded to Plaspy for alerts.  
- Plaspy displays live positions and location history for operational monitoring and reporting.

## Common Configuration Workflow

1. Access the official EElink configuration method for GPT49, for example SMS commands or the manufacturer configuration tool.  
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP transport if the device requires a transport selection during configuration.  
5. Configure the device APN settings for the installed SIM so the tracker can initiate GPRS data sessions.  
6. Save or apply the configuration and restart the device if the tracker requires a reboot to apply changes.  
7. Validate that the device reports to Plaspy by checking the device list and live position on the Plaspy platform.

## Example Configuration Commands

The GPT49 supports SMS based configuration. Below are the commonly used SMS commands extracted from public EElink instructions. Preserve placeholders and replace them with your operator values when sending.

- Optional factory reset for initial setup
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,[apn],[apnu],[apnp]#
```
Explanation: replace [apn] with your mobile operator APN. If your operator requires username and password include [apnu] and [apnp] respectively. If no username or password are required, you can send only APN,[apn]#.

- Set the GPRS server to use Plaspy domain and port
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to use Plaspy IP and port
```
SERVER,0,54.85.159.138,8888#
```

- Set the reporting interval to every 60 seconds
```
TIMER,60#
```

- Check current parameter settings
```
PARAM#
```

Send each SMS command as a single message. The order above is typical for initial setup, with factory reset optional and used only when starting from factory defaults.

## Configuration Notes

- SMS based configuration is a commonly published method for the GPT49 but manufacturer tools or OTA configuration may also be available. Follow EElink guidance for your firmware build.  
- Plaspy accepts either the domain or the IP address for the server setting; both are shown above as public examples.  
- Choose UDP or TCP based on installer preference or device capability; Plaspy will automatically detect the protocol when data arrives.  
- The same port 8888 is used across Plaspy supported devices so set port 8888 when configuring the GPT49.  
- Firmware revisions and regional product variants can change command syntax or supported parameters. Always cross check with EElink documentation when possible.

## Why Use Plaspy with This Configuration

Using the GPT49 with Plaspy gives organizations long battery life asset visibility combined with enterprise class location reporting and event handling. When configured to point at Plaspy server settings the GPT49 can feed continuous position updates, tamper alerts, and geofence events into Plaspy dashboards so teams can monitor assets and respond to incidents.

To learn more about Plaspy and how it manages device data and fleet visibility visit https://www.plaspy.com. For the latest EElink GPT49 specific configuration methods, firmware notes, and manufacturer guidance verify details on the official EElink website https://www.eelink.com.cn/ as device setup steps and firmware behavior can change over time.
