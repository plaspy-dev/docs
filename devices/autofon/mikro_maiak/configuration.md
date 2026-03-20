---
slug: /autofon/mikro_maiak/configuration
id: mikro_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Микро-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon Микро-Маяк and Plaspy server settings for reliable integration and tracking
keywords:
  - AutoFon
  - Микро-Маяк
  - AutoFon Микро-Маяк configuration
  - AutoFon Микро-Маяк setup
  - Plaspy integration
  - GPS tracker configuration
  - vehicle tracking setup
  - server configuration Plaspy
  - fleet management tracker
  - tracking platform integration
---

# AutoFon - Микро-Маяк Configuration

This page summarizes the public configuration context for using the AutoFon Микро-Маяк (Micro Beacon) tracker with the Plaspy telematics platform. It focuses on the practical server settings and setup workflow required to point the tracker at Plaspy so the device can deliver GNSS and telemetry data to your fleet monitoring instance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary depending on device firmware, hardware revision, installation type, and vendor configuration tools, so this page documents the public Plaspy settings and a general workflow while recommending you verify device-specific steps with the official AutoFon documentation.

## Configuration Overview

Preparing the AutoFon Микро-Маяк for Plaspy integration means configuring the device to send its GPRS telemetry to the Plaspy server endpoint, verifying connectivity, and confirming the device appears in the Plaspy platform. The device is preconfigured for automatic operation and supports GPRS telemetry, so integration is typically a matter of updating server and transport fields in the manufacturer configuration tool or SMS/GPRS command interface.

- Point the device to the Plaspy server endpoint so location packets are delivered to Plaspy.
- Ensure the correct transport and port are selected on the device to match Plaspy expectations.
- Validate that the device has a working SIM and network connectivity for GPRS uploads.
- Confirm buffered black box packets upload correctly after connectivity is restored.
- Verify the device becomes visible in Plaspy and that events and position updates are received.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888 and note that Plaspy uses the same port for all supported devices  
- transport support for UDP or TCP depending on device preference or firmware options  
- Plaspy automatically detects the tracker protocol so the platform will interpret incoming packets without device-specific protocol selection on the server side

## Typical Requirements Before Setup

- Device powered and charged or connected to vehicle power with functioning internal battery as applicable.  
- Active SIM with data allowance installed if the device requires GPRS connectivity. The Micro Beacon is supplied pre configured and may include an M2M SIM.  
- Access to the official AutoFon configuration method or software for the Микро-Маяк, or access to the device SMS/GPRS command set if the model supports remote configuration.  
- Adequate GSM coverage at the device location to allow GPRS packet uploads.  
- Administrative access to your Plaspy account or platform to validate device visibility and to check incoming telemetry after configuration.  

## How This Tracker Connects to Plaspy

The AutoFon Микро-Маяк transmits GNSS coordinates and telemetry over GSM/GPRS to a monitoring endpoint. When configured for Plaspy, the tracker sends its data to the shared Plaspy server endpoint and port so the platform can process location updates, events, and buffered records from the device.

- Device sends GNSS and LBS fallback location messages over GPRS to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on what the device supports and what you choose; the device must be set to the chosen transport during configuration.  
- Plaspy automatically detects the tracker protocol when packets arrive, so no special per device protocol registration is required on the server.  
- Buffered black box packets stored during connectivity loss upload to Plaspy when GPRS returns.  
- Event messages such as movement, tamper, and power alerts will be forwarded into Plaspy for rules, notifications, and history logging.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the Микро-Маяк, or use the documented SMS/GPRS command interface if supported.  
2. In the manufacturer tool or command set enter the Plaspy server endpoint as d.plaspy.com or use the server IP 54.85.159.138.  
3. Set the device port to 8888. Note that Plaspy uses the same port for all supported devices.  
4. If the device requires choosing transport, select UDP or TCP according to installer preference or device firmware options.  
5. Apply or save the configuration changes in the device interface or send save/apply SMS/GPRS commands as required by the device.  
6. Restart the device if the manufacturer instructions recommend a reboot to apply network settings.  
7. Validate that the device reports to Plaspy by checking incoming positions and events in your Plaspy account and confirming recent packets were received.

## Example Configuration Commands

The AutoFon Микро-Маяк uses manufacturer supplied tools and command sets for configuration. Exact command syntax and available fields vary by firmware and vendor tools. When configuring the device for Plaspy, ensure you enter the server as d.plaspy.com or 54.85.159.138 and set the port to 8888, choosing UDP or TCP if the device needs a transport selection. Plaspy will automatically detect the tracker protocol when data arrives.

If you are using AutoFon configuration utilities or SMS commands supplied by the manufacturer, consult those resources for the exact commands and sequence required by your device firmware.

## Configuration Notes

- Firmware and hardware revisions may change the configuration UI or SMS/GPRS command syntax; always confirm the commands for your exact device revision.  
- Choose UDP for lower overhead and slightly faster packet delivery when supported, or TCP when reliable transport confirmation is preferred. The device and network conditions should guide this choice.  
- The Micro Beacon supports automatic APN detection and remote configuration via GPRS and SMS, but APN settings can be set manually if required by the SIM provider.  
- Because the device includes a large black box buffer, validate that buffered records upload successfully after connectivity is restored by examining recent history in Plaspy.  
- Devices supplied pre registered on an AutoFon server may require updating server fields to point to Plaspy; verify any preregistration state and follow AutoFon instructions for changing the monitoring server.

## Why Use Plaspy with This Configuration

Using the AutoFon Микро-Маяк with Plaspy provides a practical telemetry pipeline for covert and low maintenance tracking deployments. The device's GLONASS/GPS positioning with LBS fallback, robust GPRS telemetry and large black box buffer mean that position and event data can be reliably collected and ingested by Plaspy even in mixed network conditions.

To learn more about Plaspy and how it processes device telemetry, visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer command sets for the AutoFon Микро-Маяк, please verify the official AutoFon documentation at https://www.autofon.ru/ as manufacturer specifications and setup methods can change over time.
