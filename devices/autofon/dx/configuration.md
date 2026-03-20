---
slug: /autofon/dx/configuration
id: dx-configuration
sidebar_label: Configuration
title: AutoFon - DX Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for AutoFon DX Маяк GPS tracker with Plaspy compatibility including server settings and practical setup workflow
keywords:
  - AutoFon DX Маяк configuration
  - AutoFon DX Mayak setup
  - AutoFon tracker configuration
  - DX Маяк Plaspy setup
  - AutoFon GPS tracker server settings
  - Plaspy tracker configuration
  - GPS tracker integration
  - vehicle tracking platform setup
  - GPS device configuration guide
  - AutoFon monitoring server setup
---

# AutoFon - DX Маяк Configuration

This page describes the public configuration context for using the AutoFon DX Маяк tracker with the Plaspy monitoring platform. It collects the practical, nonproprietary settings and workflow steps required to point the DX Маяк at Plaspy and validate that the device reports location and event data correctly. Use this guide together with the manufacturer's documentation and your installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The guidance below focuses on the Plaspy endpoint and the practical sequence of actions to register and verify the DX Маяк with the Plaspy platform.

## Configuration Overview

Configuring the DX Маяк for Plaspy prepares the device to transmit location and event packets to the Plaspy monitoring server so the device becomes visible and manageable in the platform. The process typically includes pointing the tracker at Plaspy, ensuring mobile data connectivity, and validating that position and alarm messages arrive correctly.

- Provide or confirm a working SIM with data and SMS access for the device
- Configure the device network target to the Plaspy server endpoint and port
- Choose the transport protocol if required by the device and save the configuration
- Perform a connectivity and reporting validation so the tracker appears in Plaspy
- Optionally enable device event reporting such as movement and shock alerts to ensure full visibility

## Plaspy Server Settings

When configuring the AutoFon DX Маяк to report to Plaspy, use the following public server details:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices, so enter port 8888 in any device field that requests the server port.

## Typical Requirements Before Setup

- A SIM card installed in the device with mobile data enabled and the ability to send and receive SMS
- Sufficient battery or external power to perform configuration and immediate testing
- Access to the official AutoFon configuration method such as the vendor web account, device SMS command set, or configuration tool provided by AutoFon
- Knowledge of the device phone number and any required access passwords for remote SMS commands or web access
- Cellular coverage in the installation area for 2G GPRS data transmission
- A plan to verify reporting in Plaspy after applying configuration

## How This Tracker Connects to Plaspy

The DX Маяк sends coordinates and event messages over the cellular network using GPRS to a monitoring server, or via SMS when configured for message duplication. To integrate with Plaspy you configure the device to target Plaspy's shared server endpoint so packets arrive at the platform and are processed automatically.

- The device is configured to send GPRS packets to d.plaspy.com or 54.85.159.138
- The device transmits to port 8888 and may use either UDP or TCP depending on device settings
- Plaspy automatically detects the tracker protocol and maps the device to the account
- Reported data typically includes coordinates, movement or shock events from the accelerometer, battery status, and signal strength
- If enabled, the device can duplicate critical alerts via SMS in addition to GPRS reporting

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the DX Маяк (manufacturer web account, configuration app, or SMS command interface).
2. Enter the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138 in the device server or monitoring server field.
3. Set the device server port to 8888.
4. Choose UDP or TCP if the device requires a transport selection and the field is exposed to the user.
5. Apply or save the configuration on the device or via the manufacturer tool.
6. Restart the device if required by the manufacturer or firmware to activate new network settings.
7. Validate that the device reports to Plaspy by checking the device status in the platform and confirming recent position or event updates.

## Example Configuration Commands

The DX Маяк supports remote configuration via the manufacturer's official methods, which may include SMS commands or a vendor web interface. The exact command syntax and available parameters vary by firmware and vendor tools. Because model specific commands are provided by AutoFon documentation and may change with firmware, consult the official AutoFon command list for DX Маяк SMS examples or configuration utilities.

If you use SMS for configuration, typical public workflows involve sending parameter commands to the device phone number and confirming responses. Confirm the exact SMS command keywords, parameter order, and any required passwords from AutoFon before sending commands.

## Configuration Notes

- Firmware variations and hardware revisions can change available configuration fields and SMS command syntax; always check AutoFon release notes.
- Choosing TCP versus UDP may affect transmission behavior and carrier tolerance; test both transports if connectivity is unreliable.
- The DX Маяк supports both continuous online and interval sleep modes; reporting frequency and battery life will be affected by the chosen operating mode.
- BLE presence and direction finding features require the AutoFon BLE application and smartphone pairing and are managed separately from GPRS server settings.
- Because Plaspy uses a shared port and automatic protocol detection, you do not need a custom Plaspy port per device; enter port 8888 in each device configuration.

## Why Use Plaspy with This Configuration

Using the AutoFon DX Маяк with Plaspy gives organizations a consistent, platform level view of location, movement, and event data from devices deployed across vehicles, assets, or persons. Plaspy's shared server endpoint simplifies device onboarding by using the same port and automatic protocol detection for supported trackers, reducing per-device setup complexity and accelerating fleet visibility.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration commands, firmware details, and manufacturer procedures please verify current information on the official AutoFon website https://www.autofon.ru/ as methods and firmware behavior can change over time.
