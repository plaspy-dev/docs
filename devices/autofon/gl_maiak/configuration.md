---
slug: /autofon/gl_maiak/configuration
id: gl_maiak-configuration
sidebar_label: Configuration
title: AutoFon - GL-Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon GL-Маяк with Plaspy including required server settings and setup workflow
keywords:
  - AutoFon GL-Маяк configuration
  - AutoFon GL-Маяк setup
  - GL-Маяк Plaspy compatibility
  - GL-Beacon tracker configuration
  - GPS tracker server configuration
  - Plaspy device setup
  - vehicle tracking configuration
  - asset tracker setup guide
  - GPS platform integration
  - remote tracker configuration
---

# AutoFon - GL-Маяк Configuration

This page covers the public configuration context for using the AutoFon GL-Маяк (GL-Beacon) with Plaspy. It explains the shared Plaspy server settings, the practical steps you will take on the manufacturer side, and the typical validation steps needed to confirm the device is visible in Plaspy. Use this guide together with the device documentation and your installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device sends data. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so verify device-specific procedures with AutoFon documentation when required.

## Configuration Overview

The goal of configuration is to prepare the GL-Маяк to communicate reliably with Plaspy, to validate connectivity, and to ensure the tracker appears in the Plaspy platform for monitoring and alerts. Follow the manufacturer configuration path to point the device to Plaspy and confirm event and position reporting.

- Configure the tracker to report to the Plaspy server endpoint and port so GPRS packets reach the platform.
- Select the appropriate transport option on the device if required by the firmware, typically UDP or TCP.
- Save and apply configuration and restart the device if the manufacturer tool requires it.
- Validate that position, heartbeat, and alarm messages appear in Plaspy after configuration.
- Use SMS fallback or manufacturer verification commands if GPRS testing is not possible during installation.

## Plaspy Server Settings

Use the following Plaspy connection settings when configuring the GL-Маяк. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: choose UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Confirm the GL-Маяк has power and is in a state ready for configuration with batteries installed or external power connected.
- Ensure a valid SIM card with GPRS data enabled and sufficient balance if the device will use GPRS reporting.
- Have access to the official AutoFon configuration method or software that applies server and transport settings.
- Know the device identifier required by Plaspy for onboarding, such as the IMEI or device ID as reported by the tracker.
- Confirm that firmware is up to date where possible and note the firmware version in case manufacturer procedures differ.
- If you will use SMS commands as part of setup or verification, ensure you have an authorized phone number and the SMS command format.

## How This Tracker Connects to Plaspy

The GL-Маяк sends positional and event data over GPRS to the shared Plaspy server endpoint and port so Plaspy can provide real-time visibility, alarms, and historical playback. Plaspy receives data on the same listening port for all devices and determines the protocol automatically.

- The device transmits GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on device firmware and installer preference.
- Plaspy detects the tracker protocol automatically and processes telemetry and event messages.
- Alarm events and SOS triggers are forwarded to Plaspy for immediate notification and workflow handling.
- SMS is available as a fallback channel for critical alerts or remote configuration where supported by the device.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the GL-Маяк firmware you have.
2. Locate the server settings or GPRS server configuration section in the manufacturer tool.
3. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP as the transport option if the device requires a transport selection.
6. Apply or save the configuration changes in the manufacturer tool.
7. Restart the device if the firmware requires a reboot to apply network settings.
8. Validate the device reports to Plaspy by checking for incoming telemetry and alarm events in the platform.

## Example Configuration Commands

The GL-Маяк model configuration methods can vary by firmware and vendor tools. Because manufacturer-specific commands and SMS formats are not included here, consult the official AutoFon configuration manual for exact command syntax and examples. Typical configuration is performed with the manufacturer configuration utility or by SMS commands documented by AutoFon.

If you have the AutoFon command set from official documentation, apply the sequence that writes the server domain or IP, sets the port to 8888, selects UDP or TCP if required, and saves settings. If SMS-based configuration is supported and used, follow the exact SMS command format provided by AutoFon and preserve any placeholders such as APN parameters when present.

## Configuration Notes

- Firmware differences can change menu names, required fields, and the exact location of server settings in manufacturer software.
- When given the choice, UDP tends to use fewer network resources but TCP provides connection confirmation; choose according to installer policy and network conditions.
- SMS configuration is useful for remote or hard to reach devices but verify that SMS commands are enabled and the modem supports them.
- Keep a record of the IMEI and configuration applied during installation for troubleshooting and for adding devices into Plaspy.
- Confirm local mobile operator GPRS settings such as APN when setting up the device; APN details are provided by the SIM operator and by AutoFon documentation where necessary.

## Why Use Plaspy with This Configuration

Using the AutoFon GL-Маяк with Plaspy provides a practical combination for long-term asset monitoring, covert deployments, and robust alarm handling. Plaspy receives the GL-Маяк telemetry on a shared, consistent server endpoint and port, which simplifies deployment and lets the platform present real-time location, alarms, and historical playback for operational oversight.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer instructions verify details at the official AutoFon site https://www.autofon.ru/ as manufacturer specifications and setup procedures can change over time.
