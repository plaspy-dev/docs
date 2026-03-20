---
slug: /autofon/44/configuration
id: 44-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.4 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for AutoFon Маяк 4.4 with Plaspy server settings and practical setup workflow
keywords:
  - AutoFon Маяк 4.4 configuration
  - AutoFon Mayak 4.4 setup
  - Mayak 4.4 Plaspy compatibility
  - AutoFon tracker configuration
  - Plaspy server configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - asset tracker setup
  - SMS GPRS tracker configuration
  - GPS platform setup
---

# AutoFon - Маяк 4.4 Configuration

This page documents the public configuration context for using the AutoFon Маяк 4.4 tracker with Plaspy. It summarizes the practical server settings and the typical setup workflow needed to direct SMS and periodic GPRS reporting from the device into the Plaspy platform while preserving manufacturer specific setup notes from AutoFon where relevant.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol for incoming connections. Exact manufacturer side configuration steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools, so follow this guide for Plaspy-specific values and consult the AutoFon user manual for precise device commands.

## Configuration Overview

This section explains the practical purpose of configuring a Mayak 4.4 for Plaspy and the expected outcomes after setup.

- Prepare the device to send periodic GPRS packets and SMS updates to the Plaspy endpoint so location and status appear in the platform.
- Ensure the tracker has valid cellular connectivity, correct APN for the SIM, and authorization settings for remote control and alerts.
- Set the Plaspy server settings on the device so reports are routed to Plaspy for mapping, alerting, and reporting.
- Validate connectivity and life signals so Plaspy can monitor battery and periodic heartbeats from the tracker.
- Confirm remote control and alarm reporting to allow Plaspy to trigger auxiliary actions such as immobilizer or alarm workflows.

## Plaspy Server Settings

Configure the tracker to report to the Plaspy endpoint using these public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use either the domain or the IP in the device configuration depending on the manufacturer tool or SMS command format the device accepts.

## Typical Requirements Before Setup

- A powered and functional AutoFon Маяк 4.4 unit with antennas and battery or external power connected.
- A SIM card provisioned for SMS and packet data with the correct APN configured according to the mobile operator.
- Access to the official AutoFon configuration method such as the manufacturer software, web tool, or SMS command interface.
- Network coverage at the installation location sufficient for GSM and GPRS reporting.
- Authorization details such as the device PIN and authorized phone numbers for remote SMS control if required.
- A Plaspy account and registration of the device identifier on the platform if your operational setup requires device association.

## How This Tracker Connects to Plaspy

The Mayak 4.4 reports location and status information to Plaspy using SMS messages and periodic GPRS packets. When configured with the Plaspy endpoint and port, the device becomes visible in Plaspy for mapping, alerting, and remote command workflows.

- The device sends interval GPRS packets or SMS updates to the Plaspy server domain or IP.
- Packets arrive at d.plaspy.com or 54.85.159.138 on port 8888 which Plaspy listens to for incoming device data.
- Plaspy automatically detects the tracker protocol and parses location and telemetry without requiring per device port changes.
- UDP or TCP may be selected on the device if it requires an explicit transport choice; Plaspy accepts both on the shared port.
- Periodic life signals and alarm SMS are ingested by Plaspy and used for device health checks and event notifications.

## Common Configuration Workflow

Follow this practical checklist to configure a Mayak 4.4 for Plaspy:

1. Access the official AutoFon configuration method or software provided by the manufacturer or vendor.
2. Configure the SIM APN and verify the SIM has active data and SMS capability according to the mobile operator.
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 in the server host field.
4. Set the server port to 8888 as the device reporting port.
5. Choose UDP or TCP on the device if the configuration interface requires a transport selection.
6. Save or apply the settings, then restart the tracker if recommended by the manufacturer.
7. Validate that the device reports to Plaspy by checking device visibility, initial location push, or life-signal arrival in the platform.

## Example Configuration Commands

The exact configuration commands and syntax depend on the AutoFon firmware and the configuration channel you use (manufacturer tool, PC software, or SMS). Because manufacturer command sets vary and modelConfiguration content is not provided here, present examples are not included. Typical manufacturer methods include:

- Using AutoFon configuration software to set server host, server IP, port, transport, and APN fields.
- Sending SMS configuration commands to the device in the manufacturer documented format to set server host or IP and port and to configure APN and authorized numbers.

Refer to the AutoFon user manual for precise command syntax when using SMS or the vendor tool to apply the Plaspy settings listed above.

## Configuration Notes

- Firmware and hardware revisions can change available configuration fields and command syntax; always check the device manual for your unit.
- Choose UDP when the tracker emphasizes minimal overhead and packet throughput; choose TCP where guaranteed delivery is preferred and supported by the device.
- Because Mayak 4.4 is optimized for intermittent reporting, plan reporting intervals to balance visibility in Plaspy and battery life.
- Confirm APN details with the SIM operator and enter exact APN values in the AutoFon configuration if required.
- Use the server domain d.plaspy.com when using manufacturer software that supports DNS; use 54.85.159.138 where the configuration tool requires an IP instead of a hostname.

## Why Use Plaspy with This Configuration

Configuring AutoFon Маяк 4.4 to report to Plaspy provides a straightforward route to map location, receive alarm notifications, and manage limited remote control commands while preserving the device’s long battery life and covert form factor. Plaspy accepts the device’s SMS and periodic GPRS packets at a shared endpoint and processes them for visibility, alerts, and operational reporting.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer supplied configuration tools consult the official AutoFon website https://www.autofon.ru/ as manufacturer specifications and setup procedures can change over time.
