---
slug: /suntech/st_300r/configuration
id: st_300r-configuration
sidebar_label: Configuration
title: Suntech - ST 300R Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST 300R to connect to Plaspy with server settings and SMS commands
keywords:
  - Suntech ST 300R configuration
  - Suntech ST 300R setup
  - ST 300R Plaspy
  - Suntech GPS tracker configuration
  - Suntech ST 300R server settings
  - Plaspy tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - fleet tracking Suntech ST 300R
  - Suntech ST 300R SMS commands
---

# Suntech - ST 300R Configuration

This page covers the public configuration context for using the Suntech ST 300R tracker with Plaspy. It focuses on the practical server settings, common workflow, and SMS commands that you can use to point an ST 300R to Plaspy so the device reports location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and examples here as public guidance and verify device behavior against current Suntech documentation.

## Configuration Overview

This configuration process prepares an ST 300R to communicate reliably with Plaspy by setting network parameters, the reporting server, and reporting intervals. When complete, the tracker will send position and status updates to the Plaspy server endpoint so the device appears in the Plaspy platform.

- Set the device network parameters so it can establish GPRS connectivity and reach the Plaspy endpoint.
- Configure the tracker to report to the Plaspy server domain or IP and the Plaspy shared port.
- Define reporting intervals and behavior so frequent updates are received by Plaspy.
- Use SMS based commands provided by Suntech to apply settings if an installer tool is not available.
- Verify device identity and connectivity so the tracker is visible and reporting correctly within Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible ST 300R with a known IMEI so you can derive the device identifier.
- A working mobile SIM card with data enabled and the correct APN for the mobile operator.
- Ability to send SMS commands to the device or access to the manufacturer configuration tool.
- Reference to the manufacturer documentation or installer guide for the exact SMS syntax and firmware behavior.
- A plan to validate the device after configuration by confirming it reports to Plaspy.

## How This Tracker Connects to Plaspy

The ST 300R is configured to send its telemetry and status to the shared Plaspy server endpoint and port, where Plaspy detects the tracker protocol and processes incoming messages. Once configured, the device becomes visible in Plaspy and can be monitored for location and event data.

- The tracker reports location and status updates to d.plaspy.com or the Plaspy IP at 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the protocol used by the tracker and maps the device to the platform.
- Reports typically include position and device status so Plaspy can display location, ignition state, and other supported signals.
- After configuration, validate that the device appears and updates in Plaspy to confirm end to end connectivity.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST 300R such as the manufacturer SMS commands or an authorized configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 when the device requests a server endpoint.
3. Set the server port to 8888 since Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy supports both and will auto detect protocol.
5. Apply or save the configuration on the tracker using the manufacturer method, often by sending SMS commands or applying settings in the tool.
6. Restart the device if required by the firmware to allow new network and server parameters to take effect.
7. Validate that the device reports to Plaspy by checking the platform for incoming updates from the configured device ID.

## Example Configuration Commands

The ST 300R can be configured by SMS. Below are the public SMS command sequences extracted from Suntech public configuration content. Replace [device_id] with the device ID computed from the IMEI as described below. Keep placeholders such as [apn], [apnu], and [apnp] in your SMS if you need to supply operator APN credentials.

How to compute the device ID
- Device ID is the last 9 digits of the IMEI excluding the final check digit. For example, if IMEI is 123456789012345, the device ID would be the 9 digits starting at position 6 up to position 14 of the IMEI sequence; use the last 9 digits before the final digit.

1) Optional initial factory reset (use only if needed or as part of initial setup)
```text
ST300CMD;[device_id];02;Reset
```

2) Set the operator APN and GPRS server
- This command sets APN values and the Plaspy server IP and port. Preserve the placeholders for APN credentials if required by your operator.
```text
ST300NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Notes:
  - The fourth field here is an APN enable flag; adjust to match your device tool if it expects a different value.
  - You may replace the Plaspy IP with d.plaspy.com in systems that accept domain names instead of IP addresses.

3) Set reporting interval to 60 seconds
```text
ST300RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

4) Verification command to check current settings
```text
ST300CMD;[device_id];02;PresetA
```

## Configuration Notes

- SMS based configuration is commonly used for ST 300R devices; ensure your SIM can send and receive SMS and has data enabled for GPRS.
- Device ID calculation must follow the manufacturer rule shown above; an incorrect device ID will prevent Plaspy from matching messages to your account.
- TCP versus UDP selection depends on installer preference and network conditions; Plaspy accepts both and automatically determines the protocol.
- Firmware revisions and regional variants can change exact SMS syntax and parameter positions, so verify commands against the current Suntech documentation.
- When supplying APN credentials, preserve placeholders [apn], [apnu], and [apnp] and replace them with the operator values required for your SIM.

## Why Use Plaspy with This Configuration

Using the Suntech ST 300R with Plaspy provides a practical path to bring vehicle location, ignition status, and sensor data into a single management platform. Standardizing the server endpoint and port across devices simplifies deployment and allows Plaspy to detect protocols automatically, reducing per device configuration complexity.

To learn more about how Plaspy works and to get started, visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and manufacturer instructions consult the official Suntech site at http://www.suntechint.com/. Device specific methods and firmware behavior can change over time so always verify the latest manufacturer documentation.
