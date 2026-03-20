---
slug: /haicom/hi_603x/configuration
id: hi_603x-configuration
sidebar_label: Configuration
title: Haicom - HI-603X Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Haicom HI-603X to connect with Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - Haicom HI-603X configuration
  - Haicom HI-603X setup
  - Haicom HI-603X Plaspy
  - HI-603X server configuration
  - HI-603X GPS tracker setup
  - Haicom tracker configuration
  - Plaspy device setup
  - vehicle tracking HI-603X
  - GPRS tracker configuration
  - GPS platform setup
---

# Haicom - HI-603X Configuration

This page documents the public configuration context for using the Haicom HI-603X GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings and shows practical, manufacturer‑published SMS commands that are commonly used to point the device to Plaspy for live reporting and data logging.

Plaspy uses a single shared endpoint and port for all supported devices and automatically detects the tracker protocol at the server side. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so follow the device vendor instructions when available and use the commands shown here as published public examples.

## Configuration Overview

The goal of configuring the HI-603X for Plaspy is to prepare the tracker to reliably send location and event data over GPRS to the Plaspy server so the device appears in your Plaspy account and reports according to the desired interval.

- Point the tracker GPRS endpoint to the Plaspy server domain or IP so data is routed to Plaspy
- Configure the device APN so GPRS data is allowed on the SIM card
- Choose the transport protocol if required by device firmware (UDP or TCP)
- Set update intervals so position reports match operational needs
- Verify device connectivity and confirm the tracker is visible in Plaspy

## Plaspy Server Settings

Configure the HI-603X with the following public Plaspy server settings when setting the GPRS server or network destination:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on incoming connections

Plaspy uses the same port for all devices and will identify the protocol automatically once the tracker opens a session to the endpoint.

## Typical Requirements Before Setup

- Power the HI-603X with a stable vehicle or bench supply to ensure configuration messages are accepted
- A working SIM card with active data and the correct APN details for the mobile operator
- Access to the device configuration method supported by your unit such as SMS commands or the vendor software
- The device default password if required for SMS configuration; public examples often reference 0000 as the default
- Basic Plaspy account and device registration information if you intend to view the tracker after configuration
- A way to receive or monitor SMS if you use SMS based setup and verification

## How This Tracker Connects to Plaspy

When configured, the HI-603X will establish a GPRS session and send reports to the Plaspy server endpoint and port. Plaspy receives the tracker connection, detects the protocol, and starts ingesting location and event messages for viewing in the platform.

- Device sends GPRS packets to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Tracker uses either UDP or TCP transport as configured on the device
- Plaspy automatically detects the protocol and parses incoming messages
- Position updates and events appear in Plaspy once the device successfully connects
- Regular interval reporting and event reporting allow operational monitoring and alerts

## Common Configuration Workflow

1. Access the official Haicom configuration method for your HI-603X, for example SMS commands or Haicom configuration software
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the server or GPRS server field
3. Set the server port to 8888
4. Choose UDP or TCP if the device firmware requires selecting a transport protocol
5. Configure the APN for the SIM using the operator APN settings if required
6. Apply or save the configuration on the device and restart the tracker if the firmware requires a reboot
7. Validate that the device reports to Plaspy by checking device status in your Plaspy account and confirming received messages

If you use SMS commands for setup, send them in the order required by the vendor and confirm each step before proceeding.

## Example Configuration Commands

The HI-603X supports SMS based configuration. The following public example commands are taken from the manufacturer published sequence. The device default password in these examples is 0000.

1. Set the operator APN
   - Replace [apn], [apnu], and [apnp] with your operator APN name, APN user, and APN password as required. If no APN user or password is needed, leave the placeholders blank or use the operator guidance.

```
#0000,200,[apn],[apnu],[apnp]
```

2. Set the GPRS server to Plaspy
   - This command sets the GPRS server IP and port values. It uses the public Plaspy IP and port shown in this guide.

```
#0000,210,54.85.159.138,8888,8888,8888,0
```

3. Set the interval update to 60 seconds
   - This example sets periodic reporting to a 60 second interval. Adjust the interval value to suit operational needs and to comply with any carrier data constraints.

```
#0000,250,0,60,0,0,0,0,0,0
```

Notes about placeholders and SMS usage:
- [apn] is the mobile operator APN name required for GPRS data
- [apnu] and [apnp] are optional APN username and password fields used by some carriers
- The password 0000 in the examples is the published device default; if your unit has a different password, use that value in commands
- Send each SMS command from an authorized phone number according to the device manual and wait for confirmation SMS replies when available

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always confirm commands against the device manual for your serial number and firmware
- The HI-603X supports SMS programming and GPRS configuration; depending on firmware you may also use vendor PC software or OTA updates
- Choose UDP or TCP based on your installation requirements and any guidance from Plaspy or the device manual; Plaspy will detect the protocol automatically
- Because Plaspy uses the same port for all devices make sure port 8888 is entered exactly as shown in the device configuration
- Test connectivity after configuration and check Plaspy for the device to confirm reporting and correct parsing

## Why Use Plaspy with This Configuration

Configuring the HI-603X to report to Plaspy gives organizations real time visibility into vehicle location and status using a single shared endpoint. With the tracker sending GPRS reports to Plaspy, fleet managers can monitor movement, receive alerts, and review historical position data for operational decision making.

Learn more about Plaspy and how it can receive and process HI-603X reports at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify details with Haicom at http://www.haicom.com.tw/ as manufacturer specifications and setup methods can change over time.
