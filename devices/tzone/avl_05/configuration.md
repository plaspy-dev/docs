---
slug: /tzone/avl_05/configuration
id: avl_05-configuration
sidebar_label: Configuration
title: TZone - AVL-05 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the TZone AVL-05 for use with Plaspy including required server settings SMS commands and setup steps
keywords:
  - TZone AVL-05 configuration
  - AVL-05 setup Plaspy
  - TZone server configuration
  - AVL-05 GPS tracker setup
  - Plaspy device configuration
  - AVL-05 SMS commands
  - vehicle tracking platform setup
  - GPS tracker integration guide
  - fleet tracking AVL-05
  - TZone configuration steps
---

# TZone - AVL-05 Configuration

This page describes the public configuration context for using the TZone AVL-05 GPS vehicle tracker with Plaspy. It summarizes the practical server settings, common setup workflow, and the publicly available SMS commands provided by the manufacturer that are used to point the device at Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools, so use the manufacturer documentation alongside this guide when applying settings to your hardware.

## Configuration Overview

The goal of these configuration steps is to prepare an AVL-05 device so it can reliably send location and status data to Plaspy for live tracking and event monitoring. For the AVL-05 the manufacturer provides a set of SMS commands commonly used to set APN, reporting interval, GPRS server, and to enable GPRS reporting.

- Configure the device network APN so it can use mobile data to connect to Plaspy.
- Set an appropriate update interval so the device reports at the desired frequency.
- Point the device GPRS settings to the shared Plaspy server endpoint so incoming messages reach the platform.
- Activate GPRS reporting so the tracker sends data over the mobile network.
- Validate connectivity and confirm the device appears in Plaspy for monitoring and alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com should be accepted as the DNS endpoint for device configuration.
- Server IP 54.85.159.138 is the numeric address you may use instead of the domain.
- Port 8888 is the port Plaspy listens on for device connections.
- Transport support for UDP or TCP is available; configure the device to use the transport the tracker or installation requires.
- Plaspy automatically detects the tracker protocol, and all devices in Plaspy use the same port for incoming connections.

## Typical Requirements Before Setup

- A powered and accessible AVL-05 device installed per the manufacturer instructions.
- An active SIM card with data enabled and sufficient SMS credit if using SMS commands.
- Access to the device phone number so SMS configuration commands can be sent.
- The official manufacturer configuration method or tool such as SMS commands or vendor software.
- A Plaspy account and device registration workflow ready for adding or identifying the tracker once it reports.

## How This Tracker Connects to Plaspy

The AVL-05 can be configured to send GPRS data to the Plaspy server endpoint and port so the platform receives location and status messages for processing. Once configured, Plaspy detects the device protocol automatically and associates incoming data with the account for visibility and reporting.

- The tracker sends GPRS data to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138.
- Data is transmitted on port 8888 using either UDP or TCP as configured on the device.
- Plaspy automatically detects the protocol and parses incoming messages from the AVL-05.
- Reported events and position updates become visible in Plaspy for monitoring, playback, and alerts.
- Ensure the device APN and GPRS mode are enabled so the tracker can establish a connection to the Plaspy server.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or vendor software as provided by TZone.
2. Set the device APN to your mobile operator settings so the device can use cellular data.
3. Enter the Plaspy server as d.plaspy.com or the IP address 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device or by sending the appropriate SMS commands.
6. Restart the device if the manufacturer recommends it to apply network and server changes.
7. Validate that the device reports to Plaspy by checking device presence and incoming data in your Plaspy account.

## Example Configuration Commands

The AVL-05 manufacturer provides SMS commands to configure the tracker. Send these commands as SMS messages to the device phone number in the order listed when performing an initial setup.

1. Set the operator APN
```text
*000000,011,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
- Replace {{apn}} with your mobile operator APN.
- Optionally include {{apnu}} and {{apnp}} if your SIM requires an APN username and password. The command can be sent with APN only or with APN plus username and password.

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```
- This example sets the reporting interval. Adjust the first numeric value if you require a different upload frequency per manufacturer guidance.

3. Set the GPRS server to the Plaspy IP and port
```text
*000000,015,0,54.85.159.138,8888#
```
- This command sets the device to report to the Plaspy server IP 54.85.159.138 on port 8888. You may use the server domain d.plaspy.com instead of the IP if preferred and supported by firmware.

4. Activate GPRS mode
```text
*000000,016,1#
```
- This enables GPRS reporting mode on the device so it sends data over the mobile data connection.

Notes on these commands:
- The leading token *000000 in these examples is the command prefix used by the manufacturer; confirm whether your device uses a different password or command format before sending.
- Preserve the order of setting APN, server, and GPRS activation for reliable initial connectivity.
- These commands are public examples provided by the manufacturer and should be used as part of a documented manufacturer configuration flow.

## Configuration Notes

- Firmware and hardware revisions may use slightly different command formats or parameter ordering. Confirm exact syntax with the manufacturer documentation.
- Choose UDP or TCP based on installation requirements and network behavior; UDP may be lighter weight while TCP ensures delivery at the cost of more overhead.
- SMS based setup is commonly supported for AVL-05; ensure the device phone number is correct and SMS credit is available.
- After applying settings, allow a short time for the device to register on the mobile network before validating connectivity in Plaspy.
- Always keep a copy of the original manufacturer command list and any device-specific notes for future maintenance.

## Why Use Plaspy with This Configuration

Configuring the TZone AVL-05 to report to Plaspy gives organizations centralized visibility into vehicle locations, event reporting, and operational monitoring without needing device-specific server endpoints. Using the shared Plaspy server and port simplifies deployment across devices because Plaspy automatically detects the tracker protocol and processes incoming telemetry.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and command syntax always verify details on the official manufacturer website http://www.tzonedigital.com/.
