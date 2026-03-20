---
slug: /navtelekom/signal_s_2115/configuration
id: signal_s_2115-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Navtelekom СИГНАЛ S-2115 GPS tracker with Plaspy server settings and practical configuration steps for platform integration
keywords:
  - Navtelekom СИГНАЛ S-2115 configuration
  - Navtelekom S-2115 setup
  - S-2115 Plaspy configuration
  - S-2115 server configuration
  - Navtelekom GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking S-2115
  - S-2115 integration Plaspy
  - legacy tracker configuration
  - GPS tracker server setup
---

# Navtelekom - СИГНАЛ S-2115 Configuration

This page documents the public configuration context for using the Navtelekom СИГНАЛ S-2115 tracker with Plaspy. It focuses on the practical server settings and workflow that let the S-2115 report position and event data into the Plaspy platform while drawing on available public manufacturer details such as the USB configuration tool, SMS and voice command capabilities, and legacy firmware support for archived units.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide to apply the public Plaspy endpoint and port to your S-2115 configuration, then consult the SIGNAL S-2115 operator guide and NTC Configurator documentation for device specific procedures.

## Configuration Overview

This configuration process prepares the S-2115 to communicate reliably with the Plaspy platform so the device can deliver live position updates and event notifications. The steps are focused on pointing the tracker at the Plaspy server, selecting the transport, and confirming that data arrives in the platform.

- Point the device to the Plaspy server endpoint so GNSS position and alarm messages route to Plaspy.
- Choose the transport method supported by the device (UDP or TCP) and set the same shared port used by Plaspy.
- Use the manufacturer configuration tool or supported remote command methods to apply settings locally or over the air.
- Validate connectivity and event reporting in Plaspy so vehicle visibility and alarms are active.
- Keep firmware and the NTC Configurator utility updated when possible to match the documented behavior for S-2115 units.

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered as the device reporting host.
- Server IP 54.85.159.138 may be used where a numeric address is required.
- Port 8888 is the Plaspy ingest port for all devices.
- Transport support for UDP or TCP is available; the device may be configured using either on port 8888.
- Plaspy automatically detects the tracker protocol so the platform will accept the S-2115 data once the server and port are correct.

Note: Plaspy uses the same port 8888 for all supported devices and will attempt to detect the correct protocol automatically.

## Typical Requirements Before Setup

- Access to the SIGNAL S-2115 unit and any required local configuration tools such as the NTC Configurator via USB.
- A powered device installed or temporarily connected to a test power source to allow configuration and verification.
- A valid cellular service arrangement on the device if using GSM based data or SMS reporting as part of setup.
- Manufacturer documentation or archived operator guide for S-2115 to reference supported commands and firmware notes.
- A plan for selecting UDP or TCP based on installer preference or network conditions, noting Plaspy accepts both.
- Access to the Plaspy server domain d.plaspy.com or the numeric server IP 54.85.159.138 when entering device settings.

## How This Tracker Connects to Plaspy

The S-2115 sends GNSS position fixes and event notifications over GSM to the configured Plaspy endpoint and port. Once configured to use d.plaspy.com or 54.85.159.138 with port 8888, Plaspy will ingest position and alarm messages and present them in the platform for monitoring and reporting.

- The device reports location updates to the Plaspy endpoint so vehicles appear in real time on the map.
- Event and alarm messages such as impact or movement notifications are forwarded to Plaspy for alerting and logs.
- Transport can be set to UDP or TCP on port 8888 depending on device settings or network needs.
- Plaspy automatically detects the protocol used by the tracker so no platform-side protocol selection is required.
- Successful configuration results in visible telemetry and alarm events inside Plaspy dashboards and history.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as the NTC Configurator or the device SMS/voice command interface.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the tracker host setting.
3. Set the reporting port to 8888, which is the shared Plaspy ingest port for all devices.
4. Choose the transport option UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration using the manufacturer tool and confirm the changes are written to the device.
6. Restart the device if the configuration tool or instructions indicate a reboot is required to activate the new settings.
7. Validate that the device reports to Plaspy by checking for incoming position updates and alarm events in the Plaspy platform.

## Example Configuration Commands

The public configuration archive for the S-2115 references local USB configuration via the NTC Configurator and remote changes via SMS, DTMF, or voice menu, but does not publish single universal command strings for every deployment. Exact command formats and parameter names vary by firmware and the NTC Configurator version, so use the official operator guide and the NTC Configurator utility to apply the Plaspy server d.plaspy.com or 54.85.159.138 and port 8888.

If you prefer local configuration, use the NTC Configurator over USB to set the server host to d.plaspy.com and the port to 8888, then save and reboot the device. If you must use SMS-based commands, consult the SIGNAL S-2115 operator guide for the precise SMS parameter names and keep placeholders such as [apn] or similar as documented by Navtelekom.

## Configuration Notes

- Firmware and NTC Configurator versions may use different parameter names or menus; verify your tool matches the archival documentation for S-2115.
- The S-2115 supports remote configuration via SMS, DTMF, and voice menus according to the vendor archive; exact command strings are vendor supplied and can differ by firmware.
- Choose UDP or TCP based on network reliability and operator preference; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- Because the S-2115 is listed as discontinued or archived, ensure you have the correct archived firmware and the NTC Configurator version that corresponds to your unit.
- Always confirm the device is pointing at d.plaspy.com or 54.85.159.138 and using port 8888 before concluding setup and testing reporting in Plaspy.

## Why Use Plaspy with This Configuration

Using the Navtelekom СИГНАЛ S-2115 with Plaspy gives organizations a practical way to centralize vehicle location, impact detection, and alarm routing from legacy or archived trackers. Pointing the device to Plaspy's shared endpoint and port simplifies onboarding and lets Plaspy handle protocol detection so teams can focus on operational monitoring and response.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup and firmware details on the manufacturer site https://www.navtelecom.ru/. Manufacturer specifications, setup methods, and firmware behavior can change over time so consult the official Navtelekom documentation to confirm current procedures for the S-2115.
