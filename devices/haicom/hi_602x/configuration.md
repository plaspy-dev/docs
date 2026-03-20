---
slug: /haicom/hi_602x/configuration
id: hi_602x-configuration
sidebar_label: Configuration
title: Haicom - HI-602X Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Haicom HI-602X showing how to point the device to Plaspy using shared server settings
keywords:
  - Haicom HI-602X configuration
  - Haicom HI-602X setup
  - Haicom tracker Plaspy
  - HI-602X GPRS configuration
  - HI-602X SMS commands
  - Plaspy device setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking Haicom
  - GPS platform Plaspy
---

# Haicom - HI-602X Configuration

This page covers the public configuration context for using the Haicom HI-602X tracker with Plaspy. It explains the practical, publicly available setup steps used to point the device at Plaspy servers and describes the common SMS commands and GPRS parameters published for the HI-602X. Use this guide to understand the required server values and the overall workflow for integrating an HI-602X with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tooling. The HI-602X supports GPRS and SMS configuration methods; this page highlights the public SMS commands provided for basic setup and the Plaspy server values you must apply.

## Configuration Overview

The goal of configuring an HI-602X for Plaspy is to prepare the tracker to authenticate to a GPRS network, point it to Plaspy’s shared server endpoint and port, and confirm the device begins reporting so it becomes visible on the Plaspy platform. The HI-602X supports over the air programming via GPRS and SMS, and the manufacturer provides public SMS commands to set APN, server, and reporting interval.

- Configure the operator APN so the tracker can establish a GPRS data session.
- Set the device GPRS server to Plaspy’s shared endpoint so position data is delivered to the platform.
- Choose transport (UDP or TCP) as supported by the device and network.
- Set an appropriate reporting interval to balance timeliness and data usage.
- Validate connectivity and confirm the device appears in Plaspy after setup.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol detection: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible HI-602X unit with a charged battery or connected to vehicle power.  
- An active GPRS enabled SIM card inserted in the tracker with data allowed and correct APN credentials.  
- Ability to send SMS to the device from a provisioning phone if using SMS commands.  
- Access to the official Haicom configuration method or software and the device manual for reference.  
- Knowledge of the device password used in SMS commands; public samples often use 0000 as the default.  
- A record of firmware version or hardware revision in case manufacturer procedures differ.

## How This Tracker Connects to Plaspy

The HI-602X is configured to report its GPS positions and device status over GPRS to the Plaspy shared server endpoint and port. Once the server and transport are set, the device opens a connection to Plaspy and sends periodic updates according to its interval settings so the unit becomes visible and trackable in the platform.

- The tracker sends GPRS data sessions to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- Plaspy receives the connection on port 8888 and auto detects the tracker protocol.  
- Position updates are sent at the configured reporting interval so the device appears in Plaspy.  
- Transport can be UDP or TCP depending on device configuration and network conditions.  
- Plaspy processes incoming messages and surfaces position and event information in the platform.

## Common Configuration Workflow

1. Access the official Haicom configuration method for the HI-602X, typically SMS commands or the vendor configuration tool, and confirm the device password.  
2. Enter the Plaspy server values by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 as instructed by the device method.  
3. Set the device port to 8888. Plaspy uses the same port for all devices.  
4. Choose the transport (UDP or TCP) if the device requires an explicit selection.  
5. Apply or save the configuration on the device and send any required confirmation commands.  
6. Restart the device if required by the manufacturer or firmware to activate new settings.  
7. Validate that the tracker reports to Plaspy by checking for incoming connections and position updates in the platform.

## Example Configuration Commands

The HI-602X supports SMS based configuration. The sample public commands shown below use the device password 0000 which is listed as the default in published examples. Preserve the placeholders when you substitute your actual APN credentials.

- Set the operator APN (replace placeholders with your APN values)
```text
#0000,200,[apn],[apnu],[apnp]
```
Explanation: [apn] is the APN name provided by your mobile operator. [apnu] and [apnp] are optional APN username and password fields and can often be left blank if your operator does not require them.

- Set the GPRS server to Plaspy (server IP and port)
```text
#0000,210,54.85.159.138,8888,8888,8888,0
```
Explanation: This public sample sets the GPRS server to Plaspy using the server IP 54.85.159.138 and port 8888. Plaspy uses the same port 8888 for all devices and supports both UDP and TCP transports. Keep the order of fields as required by the device firmware.

- Set the position reporting interval to 60 seconds
```text
#0000,250,0,60,0,0,0,0,0,0
```
Explanation: This command configures the device to send updates every 60 seconds in the device's public example. Adjust the interval to meet your tracking and data usage requirements.

Note: When sending SMS commands replace 0000 with your device password if it has been changed from the default. If you use a manufacturer tool or over the air provisioning, apply equivalent settings for server, port, APN, and interval.

## Configuration Notes

- Firmware and hardware revisions can change command formats and available fields; always check the HI-602X documentation for the firmware version on your unit.  
- The HI-602X supports SMS based setup in public examples, but manufacturers may also provide a configuration tool or web interface for bulk provisioning.  
- Choose UDP or TCP based on network reliability and any guidance from your mobile operator; Plaspy accepts either on port 8888.  
- Ensure APN credentials are correct; incorrect APN is the most common reason a tracker cannot establish a GPRS session.  
- Consider changing the default device password after initial provisioning for operational security.

## Why Use Plaspy with This Configuration

Configuring the HI-602X to point at Plaspy lets organizations consolidate tracking data into a single platform that automatically recognizes supported tracker protocols and uses a consistent server port. This simplifies provisioning and ongoing device management while providing real time visibility into location and device status for fleet, asset, or personal tracking use cases.

To learn more about Plaspy visit https://www.plaspy.com. For the most up to date device specific instructions, firmware notes, and user manuals for the HI-602X verify details with Haicom at http://www.haicom.com.tw/ as manufacturer procedures and firmware behavior can change over time.
