---
slug: /jointech/gp_5000/configuration
id: gp_5000-configuration
sidebar_label: Configuration
title: Jointech - GP 5000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech GP 5000 with Plaspy server settings SMS commands and practical setup steps
keywords:
  - Jointech GP 5000 configuration
  - GP 5000 setup
  - Jointech GPS tracker configuration
  - GP 5000 Plaspy setup
  - GPS tracker server configuration
  - vehicle tracking setup
  - fleet tracker configuration
  - GP 5000 SMS configuration
  - GPRS TCP UDP tracker setup
  - Jointech GP 5000 manual
---

# Jointech - GP 5000 Configuration

This page covers the public configuration context for using the Jointech GP 5000 tracker with Plaspy. It focuses on the practical server settings and the common manufacturer-side steps needed to point the device at Plaspy so the tracker can report location and operational data for fleet visibility and monitoring.

The GP 5000 supports SMS and GPRS TCP/UDP communication, and this guide explains how to apply Plaspy's shared server settings. Plaspy uses the same port across supported devices and automatically detects the tracker protocol, while exact manufacturer setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools.

## Configuration Overview

The goal of configuring a GP 5000 for Plaspy is to prepare the tracker to communicate reliably with Plaspy's data endpoint so the device becomes visible in the platform and reports location and events in real time. Configuration typically involves setting the device APN and server endpoint, choosing transport, and validating the connection.

- Point the GP 5000 to the Plaspy server endpoint so data is routed to Plaspy
- Configure the APN and, if required, APN credentials for GPRS data connectivity
- Choose UDP or TCP transport on the device where required by the device settings
- Apply changes and verify the tracker is visible and reporting within Plaspy
- Use SMS commands or the manufacturer configuration tool according to Jointech instructions

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A working SIM card with a data plan and SMS capability installed in the GP 5000 as required
- The device powered and accessible for configuration (vehicle power or bench power)
- The device ID (trackerID) available for SMS based configuration or required by the manufacturer tool
- APN name for the SIM operator, and APN username and password if the operator requires them
- Access to an SMS capable phone or Jointech configuration software to send setup commands
- Manufacturer documentation for the exact SMS syntax or configuration utility guidance

## How This Tracker Connects to Plaspy

When configured, the GP 5000 will use its GPRS link to send data packets to the shared Plaspy server endpoint and port so Plaspy can ingest location and event data for monitoring and reporting.

- The tracker sends data to d.plaspy.com or the Plaspy server IP 54.85.159.138
- All data is directed to port 8888 which Plaspy uses for supported devices
- The device may use UDP or TCP on port 8888 depending on the chosen transport
- Plaspy automatically detects the protocol so the platform understands incoming device messages
- Once registered with Plaspy, the device becomes visible for live tracking and event alerts

## Common Configuration Workflow

1. Access the official Jointech configuration method or software, or prepare to send SMS configuration commands per the device documentation
2. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138
3. Set the server port to 8888 (note that Plaspy uses the same port for all devices)
4. Choose UDP or TCP transport on the device if transport selection is required
5. Set the APN and APN credentials if required by the mobile operator
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot
7. Validate that the GP 5000 reports to Plaspy and appears in the platform reporting or connection logs

## Example Configuration Commands

To set the tracker send the following commands by SMS messages. Begin each SMS with the device ID (trackerID) as required by Jointech SMS syntax. Replace placeholders with your actual values.

- Type the device ID where indicated in each command as [trackerID].

1) Set the GPRS server and APN
```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

2) Set the APN user and password (send only if your APN requires username or password)
```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notes on placeholders:
- [trackerID] — the device ID or IMEI prefix required by the GP 5000 SMS command format
- [apn] — the APN name for your mobile operator
- [apnu] — APN username if required by the operator; leave empty if not needed
- [apnp] — APN password if required by the operator; leave empty if not needed

Send these SMS commands from an authorized phone number to the device SIM number. Confirm success by checking the device response SMS (if supported) or by validating the device appears in Plaspy after the configuration has been applied.

## Configuration Notes

- Jointech SMS syntax can vary by firmware version and regional device variants; always confirm the exact command format in the official manual
- If your mobile operator requires APN credentials, include the second command; otherwise the APN only command is typically sufficient
- Choosing UDP versus TCP can affect how data packets are framed and retransmitted; select the transport that matches your installation needs
- Because Plaspy uses the same port for all supported devices, ensure you set port 8888 exactly as shown
- If you use Jointech configuration software instead of SMS, enter the same server, IP, port, and APN settings in the provided tool

## Why Use Plaspy with This Configuration

Configuring the Jointech GP 5000 to report to Plaspy gives organizations a straightforward path to real time visibility, event monitoring, and fleet oversight without needing device specific endpoints for each tracker. Using Plaspy's shared server endpoint and automatic protocol detection reduces setup complexity and helps bring devices online quickly.

To learn more about Plaspy and see supported features, visit https://www.plaspy.com. For the most current device specific procedures, firmware notes, and command syntax consult the manufacturer resources at https://www.jointcontrols.com/ since device behavior and setup methods can change over time.
