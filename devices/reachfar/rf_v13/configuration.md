---
slug: /reachfar/rf_v13/configuration
id: rf_v13-configuration
sidebar_label: Configuration
title: Reachfar - RF-V13 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Reachfar RF V13 to report alarms and location to Plaspy using GPRS TCP IP or SMS with shared Plaspy server settings
keywords:
  - Reachfar RF V13 configuration
  - Reachfar RF V13 setup
  - Reachfar RF V13 server configuration
  - RF V13 Plaspy integration
  - Reachfar GPS tracker configuration
  - RF V13 GPRS setup
  - door window alarm configuration
  - RF V13 SMS reporting
  - Plaspy tracker setup
  - RF V13 tracking software configuration
---

# Reachfar - RF-V13 Configuration

This page documents the public configuration context for using the Reachfar RF-V13 with Plaspy. It focuses on the practical settings and workflow needed to route the RF-V13 alarm and location reports to Plaspy. The RF-V13 is a compact door and window alarm that can send GPRS TCP IP packets or formatted SMS messages; when configured correctly it can deliver intrusion events, LBS or GPS position data, and device health information into Plaspy for centralized alerting and logging.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the platform side is consistent. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or Reachfar configuration tool. Use this guide for the common public steps required to point an RF-V13 at Plaspy and verify that events arrive on the platform, and consult the manufacturer documentation for device specific commands and firmware notes.

## Configuration Overview

This configuration prepares the RF-V13 to communicate with Plaspy so that alarm events and position reports appear in your Plaspy account. The main goal is to point the RF-V13 at Plaspy's shared endpoint and confirm reliable reporting over the selected transport.

- Set the device reporting destination to Plaspy using the shared server address or IP and the common Plaspy port.
- Choose UDP or TCP on the device if it asks for a transport and save the choice.
- Verify that GPRS data or SMS reporting is enabled and that the device has a working cellular connection.
- Confirm the device is sending events and that Plaspy detects and interprets the incoming protocol.
- Validate alarm, open/close, and location messages in Plaspy after a configuration change.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the RF-V13 for platform reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure whichever transport the device requires
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- Charged device battery and the RF-V13 mounted or powered for configuration.
- Active SIM card with voice, SMS, or GPRS data as required by your reporting method.
- Knowledge of your mobile operator APN if GPRS data needs to be enabled on the device.
- Access to the official Reachfar configuration method such as SMS commands or the Reachfar mobile platform when available.
- A test plan for triggering door/window events and for confirming that location or alarm messages arrive in Plaspy.
- Administrative access to your Plaspy account to view incoming messages and enable notifications.

## How This Tracker Connects to Plaspy

When the RF-V13 is configured to use Plaspy, it sends alarm events and position updates to the shared Plaspy server endpoint and port. Plaspy timestamps and maps incoming data, applies account rules, and delivers alerts as configured in the platform.

- The device transmits event or telemetry packets over GPRS TCP IP to the Plaspy address and port.
- If configured for SMS reporting, formatted SMS messages are forwarded to Plaspy for ingestion when supported by your account and workflow.
- Plaspy receives the incoming data on port 8888 and automatically detects the RF-V13 protocol or message format.
- Events such as magnet sensor open/close and battery status are logged and presented in Plaspy for monitoring.
- Once reporting is active the device becomes visible in Plaspy and can generate alerts based on your rules.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software for the RF-V13, such as the manufacturer SMS command set or the Reachfar configuration app.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server/host field.
3. Set the destination port to 8888 as the device reporting port.
4. If the device requires a transport selection, choose UDP or TCP according to your installer preference or device options.
5. Apply or save the configuration on the RF-V13 following the manufacturer procedure.
6. Restart the device if the Reachfar documentation indicates a restart is required to apply network changes.
7. Validate that the RF-V13 reports to Plaspy by triggering a test alarm or location update and confirming the event is visible in your Plaspy account. Remember that Plaspy uses the same port for all devices and automatically detects the tracker protocol.

## Example Configuration Commands

The RF-V13 supports configuration through Reachfar SMS commands or vendor tools, and exact command syntax varies by firmware and regional release. Because command sets and parameters differ between firmware versions, consult the official Reachfar documentation or your device vendor for the precise SMS strings or app steps required to set the server host, server IP, port 8888, and transport UDP or TCP. On the Plaspy side, no additional per-device port changes are required because Plaspy uses the same port for all supported devices and performs automatic protocol detection.

## Configuration Notes

- Different RF-V13 firmware revisions may use different SMS command formats or configuration menus; confirm the exact syntax with Reachfar documentation.
- Choosing TCP or UDP can affect delivery behavior; TCP provides connection oriented delivery while UDP may be used for simpler packet sends depending on device firmware.
- If you use GPRS reporting, verify APN and data connectivity before final testing; missing APN or locked SIMs are common causes of failed deliveries.
- SMS based configuration and reporting are commonly supported for alarm and location messages; check manufacturer SMS examples when applying changes.
- Always save and, if required, restart the device after changing server, port, or transport settings to ensure the new configuration is active.

## Why Use Plaspy with This Configuration

Connecting the Reachfar RF-V13 to Plaspy provides a centralized view of door and window alarm events plus coarse location context when LBS or GPS data is available. For small sites, retail outlets, and mobile assets where discreet perimeter alerts and two-way verification matter more than continuous high frequency telemetry, this integration brings event logging, timestamped location context, and alert delivery into one platform for easier incident handling and historical review.

Learn more about Plaspy and platform features at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information and command syntax on the Reachfar official website https://www.reachfargps.com/ before deployment.
