---
slug: /autofon/se/configuration
id: se-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the AutoFon SE+ Маяк GPS tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - AutoFon SE+ Маяк configuration
  - AutoFon SE+ setup
  - AutoFon SE+ Plaspy
  - AutoFon Mayak GPS configuration
  - AutoFon tracker setup
  - vehicle tracking configuration
  - GPS tracker server settings
  - AutoFon SE configuration guide
  - SE+ Mayak monitoring server
  - GPS platform setup AutoFon
---

# AutoFon - SE+ Маяк Configuration

This page documents the public configuration context for using the AutoFon SE+ Маяк tracker with Plaspy. It focuses on the practical server settings and the typical steps needed to point the device at Plaspy so location and event data are available in the platform. Content here is limited to publicly available integration facts and general setup guidance suitable for installers and technical users.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker connects. Exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and the vendor configuration tools you use. Use the guidance below together with the official AutoFon documentation and any vendor tools provided for the SE+ Маяк.

## Configuration Overview

This configuration process prepares the AutoFon SE+ Маяк to deliver location and event data to the Plaspy monitoring server. The goal is to make the device report via GPRS to the Plaspy endpoint so the device appears and updates in your Plaspy account.

- Point the SE+ Маяк GPRS reporting target to the Plaspy server endpoint
- Choose transport mode and ensure the device uses the Plaspy listening port
- Verify device connectivity and that packets reach the Plaspy server
- Confirm the device becomes visible in Plaspy after a successful connection
- Adjust manufacturer settings as needed for reporting interval and event thresholds

## Plaspy Server Settings

When configuring the AutoFon SE+ Маяк for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will automatically detect the correct tracker protocol when the device connects.

## Typical Requirements Before Setup

- Confirm the SE+ Маяк is powered and has a working SIM with data enabled if using GPRS reporting
- Access to the official AutoFon configuration method or vendor tool for the SE+ Маяк
- Knowledge of the device IMEI or identifier required by the manufacturer tool
- Network coverage allowing GPRS communication to the public internet
- Credentials or access to the Plaspy account or administrator for device verification after reporting
- If using SMS-based configuration, ensure the controlling phone number and SMS commands are available

## How This Tracker Connects to Plaspy

The SE+ Маяк can report location via GPRS to a specified monitoring server or send coordinates via SMS. For integration with Plaspy, the device is configured to transmit GPRS packets to the shared Plaspy endpoint and port so the platform can ingest telemetry automatically.

- Configure the device GPRS server address as d.plaspy.com or 54.85.159.138
- Set the device destination port to 8888 used by Plaspy
- Choose UDP or TCP transport on the device if prompted; Plaspy supports both
- The tracker sends periodic location and event packets to the Plaspy server
- Plaspy receives packets and automatically detects the tracker protocol to present the device in the platform

## Common Configuration Workflow

1. Access the official AutoFon configuration method or the SE+ Маяк vendor software or SMS command set supplied by the manufacturer.
2. Enter d.plaspy.com or 54.85.159.138 as the monitoring server address in the device configuration.
3. Set the destination port to 8888, which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device configuration requires a transport selection.
5. Apply or save the configuration within the manufacturer tool or send the appropriate SMS commands if using SMS setup.
6. Restart the device or perform the recommended reboot step if the manufacturer documentation requires it.
7. Validate that the device reports to Plaspy by checking for incoming telemetry in your Plaspy account or contacting your Plaspy administrator.

## Example Configuration Commands

The exact configuration commands for the AutoFon SE+ Маяк vary by firmware and the vendor configuration tool. AutoFon devices commonly support configuration via the manufacturer software and sometimes by SMS commands. Because manufacturer command sets change, consult the official AutoFon documentation or the installation tool you received with the device for the precise commands to set server, port, and transport.

If you have an official AutoFon SMS template or configuration tool, use it to set:
- Server hostname or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if required by the device

Refer to the AutoFon manual for exact SMS syntax or configuration file parameters for the SE+ Маяк.

## Configuration Notes

- Firmware differences can change command syntax and available settings between hardware revisions and firmware versions on the SE+ Маяк.
- Choose UDP for lower overhead where supported, or TCP if your deployment requires reliable session behavior; Plaspy accepts both and detects protocol automatically.
- If your installer tool supports remote firmware updates over GPRS, consider updating firmware before final configuration to ensure the latest behavior.
- SMS configuration and verification may be available as an alternative to software-based setup depending on the SE+ Маяк firmware.
- Always keep a record of the device IMEI and any configuration changes for future troubleshooting.

## Why Use Plaspy with This Configuration

Using the AutoFon SE+ Маяк with Plaspy provides a straightforward way to centralize location and event data into a single monitoring platform. Plaspy's shared server endpoint and automatic protocol detection simplify integration for installers and fleet managers by removing the need to manage device-specific ports and protocol mapping.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific details, SMS command references, and firmware notes for the AutoFon SE+ Маяк, verify current information on the manufacturer website https://www.autofon.ru/ .
