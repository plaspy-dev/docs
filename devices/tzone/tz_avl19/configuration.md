---
slug: /tzone/tz_avl19/configuration
id: tz_avl19-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL19 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TZone TZ-AVL19 showing Plaspy server settings and SMS commands for integration
keywords:
  - TZone TZ-AVL19
  - TZ-AVL19 configuration
  - TZone tracker setup
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker server configuration
  - TZ-AVL19 SMS commands
  - GPRS tracker setup
  - fleet management tracker
  - GPS platform setup
---

# TZone - TZ-AVL19 Configuration

This page covers the public configuration context for using the TZone TZ-AVL19 GPS tracker with Plaspy. It focuses on the practical server settings and the manufacturer-provided SMS commands commonly used to prepare the unit for reporting to the Plaspy platform. Content here is intended to help technical users and installers apply the shared Plaspy settings and validate connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during initial connections. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide together with the TZ-AVL19 manufacturer documentation and any firmware-specific instructions you have on hand.

## Configuration Overview

The goal of configuring a TZ-AVL19 for Plaspy is to prepare the device to send location and event data reliably to the Plaspy server endpoint and to verify that the unit appears in your Plaspy account. Many installers use SMS-based configuration or the manufacturer configuration tool to set the APN, reporting interval, server address, and transport.

- Configure the device APN so it can establish a GPRS connection for reporting
- Set the device reporting interval so updates match your tracking needs
- Point the tracker to the Plaspy server endpoint and port so data reaches the platform
- Activate GPRS reporting mode and validate the device is visible in Plaspy
- Confirm transport selection (UDP or TCP) where required by the device firmware

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the TZ-AVL19 for reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport the device requires
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices, and the platform will detect the protocol automatically during device connection.

## Typical Requirements Before Setup

- A powered and functioning TZ-AVL19 tracker installed or accessible for configuration
- A working SIM card with a data plan and correct APN settings for the mobile operator
- SMS sending capability or access to the manufacturer configuration tool to send commands
- The device IMEI or identifier so you can locate the tracker in Plaspy after configuration
- Access to the TZ-AVL19 manufacturer documentation or installer guide for firmware specific notes
- A Plaspy account or platform access to verify the device is reporting to the service

## How This Tracker Connects to Plaspy

Once configured, the TZ-AVL19 will use GPRS to send position and event messages to the Plaspy endpoint. Plaspy collects these messages, automatically recognizes the device protocol, and presents the device as an active tracker in the platform for monitoring and reporting.

- The tracker sends GPRS (TCP or UDP) packets to the configured server endpoint and port
- Plaspy receives incoming device connections on the shared server endpoint and port
- Plaspy automatically detects the tracker protocol and decodes messages for the platform
- Device reports and alarms become visible in Plaspy after successful registration and message parsing
- SMS is commonly used for initial configuration but not for continuous data reporting to Plaspy

## Common Configuration Workflow

1. Access the official TZ-AVL19 configuration method provided by the manufacturer, typically SMS commands or a vendor configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the device command format or installer preference.
3. Set the port to 8888 as Plaspy uses a single common port for all devices.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Apply or save the configuration on the device using the manufacturer method (SMS or tool).
6. Restart the device if required by the firmware to apply GPRS settings and activate reporting.
7. Validate that the device reports to Plaspy and is visible in your platform account.

## Example Configuration Commands

The TZ-AVL19 can be configured using SMS commands. The following public SMS commands are provided in manufacturer materials and presented here in the original order. Replace placeholders with your actual values.

- Set the operator APN
  - Basic form (APN only):
  ```
  *000000,011,{{apn}}#
  ```
  - With APN username and password (if required by operator):
  ```
  *000000,011,{{apn}},{{apnu}},{{apnp}}#
  ```
  - Explanation: replace {{apn}} with your operator APN. If your operator requires a username and password, replace {{apnu}} and {{apnp}} with those values; otherwise omit them where supported.

- Set the update interval to 60 seconds
  ```
  *000000,018,60,999#
  ```
  - Explanation: this command sets the reporting interval; the 60 value is seconds. Keep the rest of the command as provided by the manufacturer.

- Set the GPRS server (example uses Plaspy IP and port)
  ```
  *000000,015,0,54.85.159.138,8888#
  ```
  - Alternative: if your device accepts DNS names, you can replace the numeric IP with the Plaspy domain:
  ```
  *000000,015,0,d.plaspy.com,8888#
  ```
  - Explanation: this points the tracker to the Plaspy server. Use the numeric IP or domain as accepted by your firmware.

- Activate GPRS mode
  ```
  *000000,016,1#
  ```
  - Explanation: this command enables GPRS reporting mode so the device will use packet data to send messages to the configured server.

Follow the manufacturer SMS format precisely and wait for success acknowledgements where applicable. Preserve any required delimiters and the device password or PIN if the command format requires authentication.

## Configuration Notes

- Firmware differences can change command syntax or available parameters; always confirm the exact commands for your firmware version.
- The TZ-AVL19 supports both TCP and UDP; choose based on installer preference and firmware behavior. Plaspy will accept either on the shared port.
- SMS-based setup is a common and practical method for field configuration, but vendor tools may provide a GUI for bulk provisioning.
- Use the domain d.plaspy.com where possible if you prefer DNS names; otherwise the IP 54.85.159.138 is a valid public server endpoint for Plaspy.
- Ensure the device is in GPRS mode after activating reporting and that the APN credentials are correct to allow packet data sessions.

## Why Use Plaspy with This Configuration

Configuring the TZ-AVL19 to report to Plaspy provides a straightforward way to bring vehicle location, alarms, and operational events into a single fleet monitoring platform. For organizations that require continuous tracking, alarm visibility, and consolidated telematics, using the shared Plaspy endpoint simplifies device provisioning and reduces per-device configuration complexity.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance for the TZ-AVL19, verify details on the manufacturer website http://www.tzonedigital.com/ as vendor specifications and setup methods can change over time.
