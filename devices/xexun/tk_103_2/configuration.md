---
slug: /xexun/tk_103_2/configuration
id: tk_103_2-configuration
sidebar_label: Configuration
title: Xexun - TK-103-2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun TK-103-2 GPS tracker and Plaspy compatibility with server settings and example SMS commands
keywords:
  - Xexun TK-103-2 configuration
  - Xexun tracker setup
  - TK-103-2 Plaspy
  - Plaspy GPS integration
  - vehicle tracking setup
  - GPS tracker server configuration
  - Xexun GPS platform
  - TK-103-2 SMS commands
  - GPRS tracker configuration
  - fleet tracking configuration
---

# Xexun - TK-103-2 Configuration

This page covers the public configuration context for using the Xexun TK-103-2 tracker with Plaspy. It shows the shared server settings Plaspy requires and presents practical setup information drawn from the device public configuration content. Use this guide to understand how the tracker is prepared to communicate with Plaspy and which manufacturer steps are commonly involved.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Manufacturer side setup steps can vary with firmware versions, hardware revision, installation type, and vendor tools. The example commands shown below are the public SMS based commands commonly used for initial setup on the TK-103-2 and include placeholders for operator specific values.

## Configuration Overview

This configuration process prepares a TK-103-2 to send location and status data to the Plaspy platform. The goal is to point the device at Plaspy server endpoints, ensure GPRS connectivity is usable, and confirm the device reports successfully so it appears in Plaspy.

- Configure the tracker with the Plaspy server endpoint and port so it can reach the platform
- Provide the correct operator APN and credentials so the device can attach to the mobile data network
- Validate transport selection and connectivity using UDP or TCP as supported by the tracker
- Verify the tracker reports at the scheduled interval so locations appear in Plaspy
- Confirm device visibility in Plaspy and monitor initial messages to ensure protocol detection

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that Plaspy uses the same port for all supported devices to simplify device configuration

## Typical Requirements Before Setup

- A working SIM card with a mobile data plan and SMS capability for SMS based configuration
- Device powered and accessible so SMS commands can be received by the tracker
- Operator APN, and optionally APN username and APN password from your mobile carrier
- Access to the official Xexun configuration method such as SMS commands or vendor software
- Knowledge of the device password if different from the default password used in commands

## How This Tracker Connects to Plaspy

The TK-103-2 is configured to report location and device status to the shared Plaspy server endpoint and port. Once the device has valid GPRS connectivity and the correct server parameters, Plaspy will receive device messages and identify the tracker protocol automatically.

- Device sends GPRS data or SMS based location messages to d.plaspy.com or 54.85.159.138 on port 8888
- The tracker uses UDP or TCP for transport depending on the configuration choice
- Plaspy inspects incoming messages and automatically detects the TK-103-2 protocol
- Messages from the tracker become visible in Plaspy for monitoring and historical playback
- Consistent port usage across devices simplifies fleet wide server configuration

## Common Configuration Workflow

1. Access the official Xexun configuration method or vendor software, or prepare to send SMS commands to the tracker
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the device configuration
3. Set the device port to 8888 which is the port Plaspy uses for all devices
4. Choose UDP or TCP transport if the tracker requires explicit transport selection
5. Provide the operator APN and any APN credentials required by your carrier
6. Apply or save the configuration on the device and restart the tracker if required
7. Validate that the device reports successfully to Plaspy and appears on the platform

## Example Configuration Commands

The TK-103-2 supports SMS based configuration. The following public SMS commands are presented in the order they commonly appear for initial setup. The sample device password used in these commands is 123456 which is the factory default in the public examples. If your device uses a different password, replace 123456 with the correct password.

- Optional initial factory reset command
  - Use this only if you want to restore factory defaults before configuring
  ```
  begin123456
  ```

- Set the operator APN
  - Replace {{apn}} with your carrier APN
  ```
  apn123456 {{apn}}
  ```

- Set the APN username
  - Optional, use only if your operator requires an APN username. Replace {{apnu}} with the username
  ```
  apnuser123456 {{apnu}}
  ```

- Set the APN password
  - Optional, use only if your operator requires an APN password. Replace {{apnp}} with the password
  ```
  apnpasswd123456 {{apnp}}
  ```

- Set the GPRS server to Plaspy
  - This command sets the server IP and port to Plaspy values
  ```
  adminip123456 54.85.159.138 8888
  ```

- Set the GPRS mode
  - Use this command to enable the device GPRS mode as required by the tracker
  ```
  gprsmode123456
  ```

- Set the periodic update interval to 60 seconds
  - Example interval command format with the default password
  ```
  t060s***n123456
  ```

Placeholders explanation
- {{apn}} is the operator APN string required for GPRS data
- {{apnu}} is the APN username when required by the operator
- {{apnp}} is the APN password when required by the operator
- Replace 123456 in all commands with the device password if it has been changed from the factory default

## Configuration Notes

- Firmware differences or regional hardware variants may change exact SMS formats or available commands; always cross check with current Xexun documentation
- SMS based setup is commonly used for TK-103-2 configuration but vendor software or configuration tools may also be available
- If the tracker requires selecting TCP or UDP explicitly, choose the transport that matches your network and Plaspy settings; Plaspy accepts both
- Keep credentials and APN details secure and verify APN settings with your mobile operator if connectivity fails
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol which reduces per device variation in server settings

## Why Use Plaspy with This Configuration

Connecting the Xexun TK-103-2 to Plaspy provides unified visibility and monitoring for vehicle and equipment fleets. With the device pointed at the shared Plaspy endpoint and port, organizations gain centralized access to location reporting, event notifications, and historical playback in a single platform, improving operational oversight and response.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions with the manufacturer at https://www.xexun.com/.
