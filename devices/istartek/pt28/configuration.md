---
slug: /istartek/pt28/configuration
id: pt28-configuration
sidebar_label: Configuration
title: iStartek - PT28 Configuration
sidebar_class_name: menu_item_tracker
description: Configure iStartek PT28 for Plaspy using public server settings and SMS commands for reliable real time personal tracking
keywords:
- iStartek PT28 configuration
- iStartek PT28 setup
- PT28 Plaspy configuration
- PT28 server configuration
- PT28 GPS tracker setup
- iStartek tracker Plaspy
- PT28 SMS configuration
- PT28 APN settings
- personal GPS tracker configuration
- wearable GPS tracker setup
---

# iStartek - PT28 Configuration

This page documents the public configuration context for using the iStartek PT28 with the Plaspy platform. It focuses on the server settings and practical setup steps published for the PT28 so you can configure the device to report location and events into Plaspy for monitoring, alerts, and history review.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The PT28 supports SMS based configuration commands, APN and server settings, and the examples below use the public SMS commands provided by the manufacturer as the primary setup method.

## Configuration Overview

Configuring the PT28 for Plaspy prepares the wearable to send location and event data to the platform using the shared Plaspy endpoint and port. The configuration sequence commonly includes setting the device time zone, APN for cellular data, and the GPRS server address and port. For PT28 the manufacturer publishes SMS commands that can perform each of these tasks.

- Point the device to the Plaspy server endpoint so position, SOS, and telemetry messages are delivered to Plaspy.
- Provide a correct APN so the device can connect to the mobile operator data network.
- Set an appropriate reporting interval so the PT28 transmits updates at the desired frequency to Plaspy.
- Verify settings using the device parameter query command and confirm the device appears in Plaspy.
- Use SMS commands when a direct configuration tool is not available or when remote configuration is desired.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged PT28 with an active SIM card installed and voice/data privileges as required by the carrier
- Operator APN details for the SIM card to enable GPRS data access
- Ability to send and receive SMS messages from the device for SMS based configuration
- Access to the manufacturer configuration method or documentation for PT28 SMS commands
- A Plaspy account and device registration step on Plaspy so the device can be linked to your monitoring instance

## How This Tracker Connects to Plaspy

The PT28 is configured to deliver its location, event, and telemetry messages to the shared Plaspy server endpoint and port so Plaspy can ingest and display tracking data. Once server and APN settings are applied, the watch will send periodic updates and event notifications to Plaspy for real time monitoring and historical reporting.

- The device sends position updates to d.plaspy.com or 54.85.159.138 using port 8888
- Plaspy receives the inbound messages and automatically detects the tracker protocol
- Location updates, SOS events, and available telemetry become visible inside the Plaspy platform
- Regular timer based reporting is used to control the update frequency to Plaspy
- Verifying the device reports to Plaspy confirms correct APN and server settings

## Common Configuration Workflow

1. Confirm device is powered, has a working SIM with a data plan, and can send and receive SMS.
2. Access the manufacturer configuration method for the PT28. For many deployments this is SMS based configuration as published by the manufacturer.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
4. Set the port to 8888. Note that Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP on the device if a transport selection is required by the device.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate the device reports to Plaspy and use the parameter check command to confirm server and APN settings.

## Example Configuration Commands

The PT28 manufacturer provides SMS commands to perform common configuration tasks. Below are the public SMS commands in the order typically used. Send these commands as SMS messages to the device phone number.

- Optional initial factory reset (use only when required during troubleshooting or initial provisioning):

```
FACTORY#
```

- Set the time zone to UTC 0:

```
GMT,E,0#
```

- Set the operator APN. Replace the placeholder values with your operator APN and optional username and password:

```
APN,[apn]# 
```

If your operator requires username and password include them as available:

```
APN,[apn],[apnu],[apnp]#
```

(Explanation: [apn] is the operator Access Point Name. [apnu] and [apnp] are optional APN username and password placeholders.)

- Set the GPRS server to use the Plaspy domain (preferred for readability):

```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to use the Plaspy IP address:

```
SERVER,0,54.85.159.138,8888#
```

(Explanation: the manufacturer provides both a domain and IP format. Both point to Plaspy; using the domain can simplify future DNS based changes.)

- Set the periodic update interval to 60 seconds:

```
TIMER,60#
```

- Verify current parameters on the device:

```
PARAM#
```

Send commands in the order shown when performing an initial setup: APN, SERVER, TIMER, then verify with PARAM#. Use FACTORY# only when you need to reset to factory defaults.

## Configuration Notes

- SMS based configuration is published by the manufacturer and is useful for remote or field setups where direct USB or configuration software is not available.
- Firmware and hardware revisions can change which SMS commands are supported or the required parameter syntax; always confirm against the PT28 manufacturer documentation.
- Choose domain d.plaspy.com when possible so DNS can handle backend IP changes; the IP 54.85.159.138 is provided as a direct alternative.
- Select UDP or TCP based on any device-side requirement; Plaspy supports either transport and automatically detects the protocol.
- Confirm APN and data connectivity before concluding configuration; PARAM# is useful to verify applied settings.

## Why Use Plaspy with This Configuration

Using the PT28 with Plaspy gives caregivers and operators a straightforward way to collect real time location, SOS alerts, and wearable telemetry within a single monitoring platform. The published SMS commands and shared Plaspy server settings make it practical to provision multiple devices consistently and confirm they report correctly to Plaspy for live tracking and historical review.

To learn more about Plaspy and its features visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer instructions verify information on the official iStartek site at https://istartek.com/.
