---
slug: /haicom/hi_604/configuration
id: hi_604-configuration
sidebar_label: Configuration
title: Haicom - HI-604 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Haicom HI-604 to connect with Plaspy using shared server settings and example SMS commands
keywords:
  - Haicom HI-604 configuration
  - Haicom HI-604 setup
  - Plaspy configuration
  - GPS tracker configuration
  - HI-604 server setup
  - vehicle tracking setup
  - GPRS tracker configuration
  - SMS configuration commands
  - tracker to Plaspy connection
  - asset tracking platform
---

# Haicom - HI-604 Configuration

This page documents the public configuration context for using the Haicom HI-604 tracker with Plaspy. It focuses on the practical server settings, workflow, and example SMS commands that are commonly used to point the device to Plaspy so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The Haicom HI-604 supports GSM GPRS and SMS based configuration methods and the examples here use the publicly available SMS commands that are commonly used to configure the device for GPRS reporting.

## Configuration Overview

The configuration process prepares the HI-604 to communicate with Plaspy so you can view live position updates and device events in the platform. This typically includes setting the mobile network APN, configuring the GPRS reporting server and port, and choosing the transport mode the device will use to send data.

- Configure the operator APN so the device can open a GPRS session for data reporting.
- Set the GPRS server address and port to point the HI-604 at Plaspy.
- Choose UDP or TCP transport if the device requires an explicit selection for the reporting channel.
- Set reporting intervals so the tracker sends updates at the desired frequency.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A powered and operational Haicom HI-604 unit with an active SIM able to use GPRS.
- Access to the device configuration method supported by the unit such as SMS commands or the manufacturer tool.
- The operator APN, and if required, APN username and password for the SIM card.
- Basic knowledge of sending SMS commands from a phone number that the device accepts.
- Ability to restart or power cycle the device after applying configuration.
- Access to Plaspy account credentials or platform access to confirm the tracker is visible after setup.

## How This Tracker Connects to Plaspy

When configured for GPRS reporting the HI-604 sends its location and status messages to the shared Plaspy server endpoint and port. Plaspy receives the incoming data stream, detects the tracker protocol automatically, and maps device messages into the platform for real time visibility.

- The tracker opens a GPRS data session using the configured APN and credentials.
- Device GPRS packets are sent to the Plaspy server at d.plaspy.com or 54.85.159.138.
- Data is transmitted using port 8888 and can use UDP or TCP depending on device configuration.
- Plaspy automatically identifies the tracker protocol and begins processing messages without the need for manual protocol selection on the platform side.
- Once reporting is established the tracker appears on the Plaspy map and event lists for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Haicom configuration method such as the SMS command interface or the manufacturer configuration tool provided by Haicom.
2. Enter the Plaspy server address either as domain d.plaspy.com or as the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 which is the shared Plaspy port used by all devices.
4. Choose UDP or TCP on the device if it requires a transport selection for reporting.
5. Apply or save the configuration on the device and send any required SMS commands to commit settings.
6. Restart or power cycle the tracker if required by the device firmware to activate the new settings.
7. Validate that the device reports to Plaspy by checking the device list and map in the Plaspy platform.

## Example Configuration Commands

The HI-604 is commonly configured by sending SMS commands from a phone to the device. The following public SMS commands are provided as examples. These commands use the device default password 0000 in the examples. Preserve and replace placeholders where required.

- Set the operator APN
  - Command (send by SMS)
  ```text
  #0000,200,{{apn}},{{apnu}},{{apnp}}
  ```
  - Explanation: replace {{apn}} with your mobile operator APN. {{apnu}} is the APN username if required and {{apnp}} is the APN password if required. If there is no username or password for your APN leave those placeholders empty or as required by the device command syntax.

- Set the GPRS server to Plaspy
  - Command (send by SMS)
  ```text
  #0000,210,54.85.159.138,8888,8888,8888,0
  ```
  - Explanation: this command sets the GPRS reporting server to the Plaspy server IP 54.85.159.138 and configures port 8888. The command format as provided by the manufacturer includes additional port fields as shown.

- Set the reporting interval to 60 seconds
  - Command (send by SMS)
  ```text
  #0000,250,0,60,0,0,0,0,0,0
  ```
  - Explanation: this example sets the device update interval to 60 seconds as a sample configuration for frequent reporting.

Notes about these example commands:
- The device default password shown in the examples is 0000. Only use that password if the tracker is still at factory defaults or as documented by Haicom.
- These commands are sent as SMS messages to the HI-604 and are public examples provided by the manufacturer documentation excerpt.

## Configuration Notes

- Firmware versions and hardware revisions can change command formats or available features. Always cross check commands with the device firmware notes.
- The HI-604 supports SMS-based configuration in public documentation; this is a practical option where remote configuration tools are not available.
- Choose UDP or TCP based on installation needs and network behavior; Plaspy accepts either and will automatically detect the protocol.
- Because Plaspy uses the same port 8888 for all devices, ensure that the configured port matches 8888 on the device to simplify integration.
- If commands include placeholders like {{apn}} preserve them and substitute only the values required by your mobile operator.

## Why Use Plaspy with This Configuration

Using the Haicom HI-604 with Plaspy provides a straightforward way to turn the tracker data stream into operational visibility. Plaspy's shared server settings and automatic protocol detection reduce platform-side steps, allowing installers to focus on configuring the tracker on the device side and validating connectivity.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information on the Haicom website at http://www.haicom.com.tw/ before deploying devices in production.
