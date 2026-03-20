---
slug: /reachfar/rf_v24/configuration
id: rf_v24-configuration
sidebar_label: Configuration
title: Reachfar - RF-V24 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Reachfar RF-V24 and Plaspy compatibility with server and transport details
keywords:
  - Reachfar RF-V24 configuration
  - Reachfar RF-V24 setup
  - Reachfar RF-V24 Plaspy
  - RF-V24 server configuration
  - RF-V24 GPS tracker setup
  - Reachfar GPS configuration
  - Plaspy device configuration
  - Plaspy tracker setup
  - RF-V24 tracking setup
  - Reachfar asset tracker configuration
---

# Reachfar - RF-V24 Configuration

This page covers the public configuration context for using the Reachfar RF-V24 tracker with Plaspy. It focuses on the practical server and transport settings you will apply on the device or in manufacturer tools so the RF-V24 reports location and events into the Plaspy platform. The RF-V24 is a solar charged 4G tracker with onboard sensors, SOS voice features and tamper detection, and this guide explains how those device capabilities are forwarded to Plaspy using the platform's shared settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type and vendor tools. Consult the Reachfar user documentation for device specific UI steps or SMS commands, then apply the public Plaspy endpoint and transport choices described below to integrate the RF-V24 into Plaspy for live tracking and alerts.

## Configuration Overview

Preparing the RF-V24 for Plaspy integration means configuring the device to send location and event data to Plaspy's shared server endpoint and validating that data appears in the platform. The goal is to ensure reliable reporting from the solar powered tracker so fleet operators and asset managers can use Plaspy for monitoring, alerts and historical playback.

- Configure the device to report to Plaspy using the provided server endpoint and port.
- Choose the transport method the device requires and confirm connectivity.
- Validate that the RF-V24 streams GPS position and onboard event messages to Plaspy.
- Confirm SOS, vibration and tamper alarms are forwarded and visible in Plaspy.
- Ensure device power and cellular service are adequate for continuous reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged, installed RF-V24 with manufacturer documentation or configuration tool available
- Active cellular service and data connectivity for the device on a supported 4G network
- Access to the Reachfar configuration method used in your environment such as a web or mobile tool or the device SMS command set provided by the manufacturer
- Knowledge of whether the device firmware requires UDP or TCP for tracking server configuration
- A plan for validating device reporting in Plaspy after configuration, including access to the Plaspy platform for verification

## How This Tracker Connects to Plaspy

When configured for Plaspy, the RF-V24 sends its position fixes and sensor events to the Plaspy server endpoint so the platform can display live location, generate alerts and store historical data. The device uses the shared Plaspy endpoint and port so the platform can automatically map incoming messages to the proper protocol and device instance.

- The RF-V24 reports GPS positions and periodic telemetry to d.plaspy.com on port 8888
- Event messages such as SOS, vibration or tamper alerts are forwarded to Plaspy where they generate alarms
- Transport is configured as UDP or TCP on the device; Plaspy accepts both and detects the protocol automatically
- Plaspy uses the same port for all supported devices so a single port setting applies across devices
- Data received by Plaspy is available for real time monitoring, alerting and historical route playback

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software per the device manual or vendor instructions.
2. Locate the server or tracking server settings in the manufacturer interface.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the server address.
4. Set the server port to 8888.
5. If the device requires a transport selection, choose UDP or TCP as appropriate for your firmware.
6. Apply or save the configuration and perform any required device restart.
7. Validate that the device reports to Plaspy and that position and event messages appear in the platform.

## Example Configuration Commands

The RF-V24 manufacturer documentation may provide SMS or CLI commands for configuring the server address, port and transport. Exact commands vary by firmware and vendor tools, so consult the Reachfar manual for the specific syntax for your device build. When using those commands, set the server address to d.plaspy.com or 54.85.159.138 and the port to 8888, and select UDP or TCP if required by the command set.

Example placeholder style commands you may encounter in manufacturer docs often resemble the following patterns. Replace placeholders and tokens with values from your carrier and device documentation:

- Set server address and port (example pattern)
```text
setserver d.plaspy.com 8888
```

- Alternative form using IP
```text
setserver 54.85.159.138 8888
```

- Set transport method where required
```text
settransport udp
```
or
```text
settransport tcp
```

Note: The above blocks are illustrative patterns. Use the exact command syntax from the Reachfar instruction manual or your vendor tool. If placeholders such as [apn], [apnu] or [apnp] appear in vendor commands, leave them as provided and replace them with your cellular carrier APN, APN username and APN password when required by the device.

## Configuration Notes

- Firmware differences and hardware revisions may change command syntax or menu layouts; always confirm with the Reachfar manual for your RF-V24 device.
- Choose UDP or TCP based on the device firmware recommendation; Plaspy accepts both and performs automatic protocol detection on incoming connections.
- Because Plaspy uses the same port for all devices, use port 8888 in every device configuration for Plaspy connectivity.
- Verify SOS, vibration and tamper event mappings in the manufacturer documentation so those events arrive as expected in Plaspy.
- If a restart is required after saving server settings, perform a controlled restart and then validate reporting in the Plaspy interface.

## Why Use Plaspy with This Configuration

Using the RF-V24 with Plaspy gives operators centralized visibility for solar powered, long standby trackers that report over 4G. Plaspy collects the RF-V24 position and event messages so teams can monitor assets, respond to SOS alerts and review historical routes for investigations and compliance. The combination of low maintenance solar operation and Plaspy visibility is well suited to trailers, containers and remote assets where continuous external power is limited.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific setup details, firmware notes and exact command syntax consult the Reachfar official documentation at https://www.reachfargps.com/. Manufacturer configuration methods and firmware behavior can change over time, so verify instructions with the manufacturer before deploying devices at scale.
