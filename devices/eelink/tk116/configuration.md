---
slug: /eelink/tk116/configuration
id: tk116-configuration
sidebar_label: Configuration
title: EElink - TK116 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the EElink TK116 GPS tracker to report to Plaspy using shared server settings and SMS commands
keywords:
  - EElink TK116 configuration
  - EElink TK116 GPS tracker
  - TK116 Plaspy setup
  - TK116 server configuration
  - GPS tracker setup Plaspy
  - Plaspy tracker configuration
  - vehicle tracking setup
  - fleet management tracker configuration
  - TK116 SMS commands
  - Plaspy server settings
---

# EElink - TK116 Configuration

This page documents the public configuration context for using the EElink TK116 GPS tracker with Plaspy. It collects the Plaspy server settings you need to enter on the tracker and presents the common SMS based commands that EElink devices accept for initial setup. Use this guide to prepare the TK116 for reporting position and event data to Plaspy so the device appears in your Plaspy dashboard.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TK116 supports SMS configuration and GPRS reporting, and the example commands below reflect public SMS commands commonly used to set APN and server settings for this model.

## Configuration Overview

The goal of the TK116 configuration is to point the device at Plaspy so it can send location and event data reliably. Setup typically includes confirming mobile connectivity, specifying an APN for data, and directing telemetry to the Plaspy server endpoint and port.

- Configure the TK116 to use Plaspy as its server endpoint so location data is routed to the platform.
- Set the correct mobile APN and credentials for GPRS data on the tracker to enable internet connectivity.
- Choose transport (UDP or TCP) and set the port that Plaspy uses so data arrives correctly.
- Validate connectivity and reporting by checking device parameters and confirming the tracker is visible in Plaspy.
- Use SMS commands for quick field configuration when manufacturer tools are not available.

## Plaspy Server Settings

For the TK116 to report to Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

These values are the shared Plaspy endpoint settings to enter in the tracker during configuration.

## Typical Requirements Before Setup

- A powered and accessible TK116 unit with SIM card installed and data service enabled.
- Knowledge of the mobile operator APN and optional APN username and password for the SIM.
- Ability to send and receive SMS messages to the tracker for SMS based configuration.
- Access to the official EElink configuration method or software and its documentation for your firmware revision.
- A Plaspy account and the expectation that the device will be registered in the Plaspy platform after successful reporting.

## How This Tracker Connects to Plaspy

The TK116 uses 2G GPRS to send GPS position and device event messages to a remote server. When configured for Plaspy, the tracker sends periodic location updates and alarm messages to the shared Plaspy endpoint so the platform can display, alert, and report on the device.

- The device is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data transport can be set to UDP or TCP depending on tracker options; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol so you generally do not need to choose a protocol-specific profile in the platform.
- Position updates, ACC status, and alarm events sent from the TK116 become visible in Plaspy for monitoring and reporting.
- Confirming that the device reports successfully ensures it will appear and update in the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official EElink configuration method or software for the TK116 or prepare to use SMS commands as documented by the manufacturer.
2. Set the device APN using the SMS command or configuration tool with your operator APN value.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose the transport protocol UDP or TCP on the tracker if the device requires a transport selection.
5. Apply or save the configuration in the tracker and perform any recommended restart or power cycle.
6. Validate that the device reports to Plaspy by checking parameters (for example with a PARAM command) and confirming the device is visible and updating in Plaspy.

## Example Configuration Commands

The following public SMS commands are commonly used with the TK116. Send each command as an SMS to the device number. Preserve the placeholders where indicated.

1. Optional initial factory reset
```
FACTORY#
```
2. Set the time zone to UTC 0
```
GMT,E,0#
```
3. Set the operator APN
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: [apn] is the operator APN. If your APN requires a username and password include [apnu] and [apnp] respectively; omit the username and password fields if they are not required by your operator.

4. Set the GPRS server to use the Plaspy domain (preferred)
```
SERVER,1,d.plaspy.com,8888#
```
or set the GPRS server to use the Plaspy IP address
```
SERVER,0,54.85.159.138,8888#
```

5. Set the upload/update interval to 60 seconds
```
TIMER,60#
```

6. Check current parameter settings
```
PARAM#
```

Send these commands in the order shown when order matters, for example setting APN before setting the server. The FACTORY# reset is optional and should be used only when you need to restore factory defaults.

## Configuration Notes

- EElink firmware versions and hardware revisions can change command behavior and available SMS syntax; always verify commands against your device firmware documentation.
- SMS based setup is practical for field installation but manufacturer software or USB configuration tools may be available for bulk or offline provisioning.
- Choose UDP or TCP based on installer preference and network conditions; Plaspy accepts either and will detect the protocol automatically.
- Use the domain d.plaspy.com for easier DNS based routing or the IP 54.85.159.138 if DNS is not available in the installation environment.
- The TK116 typically uses GPRS over 2G networks for reporting; confirm network coverage and data plan suitability with your mobile operator.

## Why Use Plaspy with This Configuration

Using the TK116 with Plaspy provides a straightforward path to real time visibility, event alerting, and operational reporting. Configuring the tracker to report to the shared Plaspy endpoint and port allows fleet managers to monitor location, ACC status, and alarms centrally and apply platform rules for notifications and historical analysis.

To learn more about Plaspy and how it can receive data from compatible trackers like the EElink TK116 visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance consult the manufacturer documentation at https://www.eelink.com.cn/ to verify setup steps and command syntax as device behavior can change with firmware and hardware updates.
