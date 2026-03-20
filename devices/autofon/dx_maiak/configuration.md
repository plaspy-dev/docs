---
slug: /autofon/dx_maiak/configuration
id: dx_maiak-configuration
sidebar_label: Configuration
title: AutoFon - DX Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon DX Маяк and how to point the tracker to Plaspy for monitoring and event reporting
keywords:
  - AutoFon DX Маяк configuration
  - AutoFon DX Mayak setup
  - DX Mayak Plaspy
  - AutoFon GPS tracker configuration
  - vehicle tracking setup
  - tracker server configuration
  - Plaspy compatibility guide
  - GPRS tracker setup
  - GPS tracking platform configuration
  - tracker connectivity checklist
---

# AutoFon - DX Маяк Configuration

This page describes the public configuration context for using the AutoFon DX Маяк tracker with the Plaspy monitoring platform. It focuses on the practical server settings and workflow needed to point the device to Plaspy so location and event data can be received by the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use, so this page focuses on the common public settings and the practical actions you will take when configuring the DX Маяк for Plaspy.

## Configuration Overview

Preparing an AutoFon DX Маяк for use with Plaspy means configuring the tracker to report its data to the Plaspy server endpoint, validating connectivity, and ensuring the device is discoverable and reporting in your Plaspy account. Use the manufacturer tools or SMS commands documented by AutoFon to apply these settings when supported.

- Configure the tracker to send GPRS data to Plaspy server domain or IP so data is routed to the platform
- Select transport (UDP or TCP) if the device requires a transport choice and set the common port used by Plaspy
- Verify APN and SIM data connectivity so the device can establish a GPRS session to the internet
- Save and apply settings, then confirm the device appears as online in Plaspy
- Validate that location, movement, and event reports are arriving from the DX Маяк into the Plaspy platform

## Plaspy Server Settings

When configuring the DX Маяк for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888 depending on device configuration options
- Plaspy automatically detects the tracker protocol so all devices can use the same port and be recognized by the platform

## Typical Requirements Before Setup

- Device powered and reachable for configuration either via the AutoFon web account or SMS command interface
- Active 2G SIM card installed with data enabled and correct APN settings if using GPRS reporting
- Access to the official AutoFon configuration method or installer tools for the DX Маяк
- Knowledge of the device phone number for SMS based commands if you will configure by SMS
- A Plaspy account or monitoring setup where you can verify the device appears online after configuration

## How This Tracker Connects to Plaspy

The DX Маяк sends coordinates and event records over the 2G network using GPRS to a monitoring server. When configured for Plaspy, the device reports to the shared Plaspy endpoint and port so Plaspy can ingest its telemetry and present it in the platform.

- The tracker is configured to send GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888
- You may select UDP or TCP as the transport if the DX Маяк provides that option
- Plaspy automatically detects the tracker protocol so the same port works for many device types
- Event data such as location, accelerometer triggers, battery status, and signal strength is forwarded to Plaspy when the tracker transmits
- After successful configuration the device will appear online and report events in your Plaspy monitoring view

## Common Configuration Workflow

1. Prepare the DX Маяк physically and ensure it has power and an active 2G SIM card with data access.
2. Access the official AutoFon configuration method or software such as the personal monitoring account or the device SMS command set.
3. Enter the Plaspy server endpoint by specifying d.plaspy.com or the server IP 54.85.159.138 where the configuration asks for server address.
4. Set the device port to 8888 as the destination port for GPRS reporting.
5. Choose UDP or TCP if the device requires a transport selection; select the protocol your installer prefers and that the device supports.
6. Apply or save the configuration in the device interface or send the appropriate SMS command to commit the settings.
7. Restart the device if required by the manufacturer or by the configuration tool.
8. Validate that the DX Маяк reports to Plaspy by checking the device status and incoming messages in your Plaspy monitoring account.

## Example Configuration Commands

The DX Маяk can be configured either through AutoFon's web account tools or via SMS commands depending on firmware and distributor tools. The exact command syntax and sequence depends on the firmware version and the specific AutoFon SMS command set, which is documented by the manufacturer. Because command formats vary, consult the official AutoFon configuration guide for DX Маяk or your vendor supplied command list to get the exact SMS templates or configuration steps required to point the device to:

- d.plaspy.com or 54.85.159.138
- port 8888
- UDP or TCP transport as needed

If you need SMS based commands or a sample command list, refer to the AutoFon documentation for the DX Маяk or request the command set from your dealer. Plaspy will accept connections on port 8888 and detect the device protocol automatically once the tracker is pointed to the Plaspy server address.

## Configuration Notes

- Firmware differences and vendor customizations can change the exact configuration commands and menus for the DX Маяk; always check the device firmware notes.
- Selecting TCP versus UDP may affect delivery behavior and retransmission; choose the transport supported by your installation policy and the device firmware.
- The DX Маяk supports both continuous online and interval sleep modes; continuous mode uses more power but keeps the device ready to receive commands.
- If you configure the device by SMS keep a record of the command formats you used so troubleshooting and audits are easier.
- For trackers operating in deep sleep or interval modes, confirm reporting schedules so Plaspy shows the expected update cadence.

## Why Use Plaspy with This Configuration

Using the AutoFon DX Маяk with Plaspy provides a straightforward way to collect location, accelerometer based movement events, and other reported telemetry in a centralized monitoring platform. Configuring the tracker to point to the shared Plaspy endpoint means your device will be recognized by the platform without requiring device specific ports, since Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific setup instructions, firmware behavior, and manufacturer details for the AutoFon DX Маяk please verify information on the official AutoFon website https://www.autofon.ru/ as manufacturer documentation may change over time.
