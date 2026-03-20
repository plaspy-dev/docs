---
slug: /megastek/gmt_368sg/configuration
id: gmt_368sg-configuration
sidebar_label: Configuration
title: Megastek - GMT-368SG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Megastek GMT-368SG with Plaspy server settings and SMS GPRS commands
keywords:
  - Megastek GMT-368SG configuration
  - GMT-368SG setup
  - Megastek tracker Plaspy
  - GMT-368SG server configuration
  - GMT-368SG tracking setup
  - Megastek GPS tracker configuration
  - vehicle tracker configuration Plaspy
  - GMT-368SG SMS GPRS setup
  - tracker platform integration Plaspy
  - GPS tracker setup guide
---

# Megastek - GMT-368SG Configuration

This page covers the public configuration context for using the Megastek GMT-368SG tracker with Plaspy. It collects the practical, publicly available settings and SMS GPRS commands used to point the device at Plaspy so the tracker can report position and status to the platform. The content is intended to help technical users prepare the tracker for integration with Plaspy while keeping manufacturer-specific details visible and accessible.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The GMT-368SG supports SMS and GPRS reporting (TCP or UDP) and the public configuration examples below include SMS-based commands and the default device password shown in the device documentation when relevant.

## Configuration Overview

The configuration process prepares the GMT-368SG to communicate reliably with Plaspy so location updates and alerts appear in the Plaspy platform. The aim is to set the device identity, APN for GPRS, reporting interval, and the Plaspy server endpoint, then verify reporting.

- Set or confirm the device ID so Plaspy can associate incoming data with the correct device record.
- Configure the mobile operator APN and optional APN username and password so the tracker can open a GPRS data session.
- Point the tracker at the Plaspy server endpoint and the shared Plaspy port so data reaches the platform.
- Set the reporting interval and enable GPRS reporting or relevant data mode.
- Validate connectivity so the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support: UDP or TCP (the device may be configured to use either transport on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible GMT-368SG device with a valid IMEI ready to use for identification.  
- A working SIM card with mobile data enabled and the correct APN credentials for the operator.  
- Ability to send SMS commands from an authorized phone if using SMS configuration, or access to the manufacturer configuration tool if preferred.  
- The device default password when required by commands; public examples show the default password 000000.  
- Note of the device IMEI (typically first 15 digits) to use in device ID commands.  
- Confirmation that firmware on the device supports SMS-based configuration and GPRS reporting as described.

## How This Tracker Connects to Plaspy

The GMT-368SG can use SMS for basic control but sends live position data and events to Plaspy over GPRS using TCP or UDP. Once configured to the Plaspy server endpoint and port, the device will report location updates and alarms that Plaspy processes for mapping and monitoring.

- The tracker is configured to report to the shared Plaspy server endpoint and port: d.plaspy.com or 54.85.159.138 on port 8888.  
- The device sends regular location updates at the configured interval so vehicles are visible in Plaspy.  
- Alarms and events such as overspeed, vibration, low battery, and external power disconnect can be reported to Plaspy if enabled on the device.  
- If cellular coverage is lost, device data logger features can retain positions and send them when GPRS is restored.  
- Plaspy detects the tracker protocol automatically, so the platform will interpret incoming connections from the GMT-368SG without manual protocol selection on the server side.

## Common Configuration Workflow

1. Access the official Megastek configuration method you intend to use (SMS commands, vendor mobile tool, or manufacturer software).  
2. In the device configuration, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP on the device if transport selection is required by the device firmware.  
5. Apply or save the configuration and, if using SMS, send the required SMS commands from the authorized phone number.  
6. Restart the device if the tracker requires a reboot to apply changes.  
7. Validate that the device reports to Plaspy by checking device connectivity and incoming position updates in the platform.

## Example Configuration Commands

The GMT-368SG documentation provides SMS commands for configuration. Below are the publicly available SMS command patterns from the device documentation. The sample commands use the device default password 000000. Replace placeholders with your actual values when sending SMS.

1. Set the device ID (use the IMEI or device 15-digit identifier). Replace the IMEI placeholder with your device IMEI (first 15 digits). The example shows the document's template for extracting a 15-digit ID from the IMEI field:

```
M000000,22,{{('XXXXXXXXXXXXXXX' + imei.substring(0,15)).slice(-15)}}
```

Explain: Replace the expression with the 15-digit IMEI or the device ID you want the tracker to report as.

2. Set the operator APN (include optional APN username and password if required). Replace [apn], [apnu], and [apnp] with your operator APN values:

```
M000000,23,[apn]{{,[apnu],[apnp]}}
```

Explain: [apn] is the APN string. [apnu] and [apnp] are optional APN username and APN password placeholders.

3. Set the update interval to 60 seconds:

```
M000000,25,60
```

4. Set the GPRS server to point at Plaspy. This example uses the public Plaspy server IP and port from the documentation:

```
M000000,24,56 54.85.159.138,8888
```

Explain: The command configures the device to use the Plaspy server IP 54.85.159.138 and port 8888. Some tools may instead accept d.plaspy.com as the server address.

5. Enable GPRS mode (enable data reporting):

```
M000000,21,2
```

Notes on placeholders and password: the commands above use the default password 000000 in the examples. When sending SMS commands, keep the password field intact unless you have changed it on the device.

## Configuration Notes

- Firmware and hardware revisions can change exact command syntax or available parameters; always check the device firmware version before sending commands.  
- The GMT-368SG supports both SMS-based and GPRS-based configuration in public examples; use the method that matches your installation and operator conditions.  
- Choose TCP or UDP on the device depending on your network reliability and operator behavior; Plaspy accepts both transports on port 8888 and performs automatic protocol detection.  
- When the manufacturer command template uses placeholders or script expressions for IMEI or IDs, replace them carefully with the correct device IMEI or ID value.  
- After applying settings, validate connectivity by confirming the device appears and reports in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the Megastek GMT-368SG to report to Plaspy gives organizations consistent visibility into vehicle location, status, and event reporting using a shared, well-known server endpoint. With GPRS reporting configured to d.plaspy.com or 54.85.159.138 on port 8888 and automatic protocol detection in Plaspy, the integration is straightforward and keeps device reporting consistent across a mixed fleet.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify current information on the Megastek website https://www.megastek.com/ as manufacturer instructions and firmware can change over time.
