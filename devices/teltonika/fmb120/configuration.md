---
slug: /teltonika/fmb120/configuration
id: fmb120-configuration
sidebar_label: Configuration
title: Teltonika - FMB120 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Teltonika FMB120 for use with Plaspy server d.plaspy.com including server settings and example commands
keywords:
  - Teltonika FMB120 configuration
  - Teltonika FMB120 setup
  - FMB120 Plaspy configuration
  - FMB120 server configuration
  - Teltonika GPS tracker configuration
  - FMB120 tracking software setup
  - Teltonika FMB120 GPS platform setup
  - Plaspy tracker configuration
  - vehicle tracking Teltonika
  - fleet tracking FMB120
---

# Teltonika - FMB120 Configuration

This page describes the public configuration context for using the Teltonika FMB120 with Plaspy. It focuses on the practical server settings and the minimal tracker-side configuration steps that are publicly available, so you can prepare the device to communicate with Plaspy and appear in the platform for live tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The example command included on this page is provided as public guidance and uses placeholders for operator specific values.

## Configuration Overview

The configuration process prepares the FMB120 to report location and telemetry to Plaspy and validates connectivity so the device is visible in the platform. The key objective is to point the tracker at the Plaspy server endpoint, select the transport method the device supports, and confirm the device is reporting as expected.

- Configure network access so the device has a working cellular connection and APN values.
- Set the device server address and port to point at Plaspy.
- Choose the transport protocol if the device requires a manual selection.
- Save and apply configuration then reboot the device when required.
- Verify the device appears in Plaspy and is sending location updates and basic status events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices and all devices use the same port

## Typical Requirements Before Setup

- A charged and installed FMB120 device with access to vehicle power or internal battery as applicable.
- A working 2G GSM SIM with an active data or SMS plan and the correct APN details for the cellular operator.
- Access to the official Teltonika configuration method or software appropriate for your device and firmware.
- The APN, APN username, and APN password provided by your mobile operator to populate device network fields.
- Basic knowledge of how to send configuration commands to the device using the manufacturer supported method.
- The device firmware should be recent enough to support the configuration fields used by this guide.

## How This Tracker Connects to Plaspy

When configured, the FMB120 sends location and event data over the cellular link to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Plaspy processes incoming device data and associates it with the correct device entry by protocol detection.

- The device is pointed to the Plaspy server domain or IP and sends telemetry to d.plaspy.com or 54.85.159.138.
- Data is transmitted to port 8888 on the Plaspy server for all supported devices.
- The device uses either UDP or TCP for transport depending on what is configured on the tracker.
- Plaspy automatically detects the tracker protocol and handles incoming messages for processing and display.
- Once reporting, location updates, digital I/O events, and supported sensor data appear in Plaspy dashboards and alerts.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software appropriate for your device and firmware (manufacturer tool, SMS interface, or configuration utility).
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the server field.
3. Set the port to 8888 for the Plaspy endpoint.
4. Choose UDP or TCP on the device if the device requires a manual transport selection.
5. Provide operator APN credentials where required using your mobile operator values.
6. Apply or save the configuration to the device and restart the unit if the process requires a reboot.
7. Validate that the device is reporting to Plaspy by checking device connectivity and live updates in the Plaspy platform.

## Example Configuration Commands

The following public command is a common Teltonika style parameter update format and sets basic network and server values. It includes placeholders for APN credentials that you should replace with your operator values.

- SMS or configuration command example:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and fields in the command above:
- {{apn}} is your mobile operator APN name.
- {{apnu}} is the APN username if your operator requires one. Leave empty if not required.
- {{apnp}} is the APN password if required by your operator.
- 2004 is set to d.plaspy.com to point the device to the Plaspy domain. You may also use the server IP 54.85.159.138 in manufacturer tools where an IP is required.
- 2005 sets the port to 8888 which is used by Plaspy for all devices.
- 2006 relates to transport selection or a related parameter the device uses; consult Teltonika documentation for the exact meaning and values for your firmware.

Always verify the exact command syntax and transport parameter meaning against Teltonika documentation for your device firmware version.

## Configuration Notes

- Firmware differences can change parameter IDs and command formats; confirm parameter numbers in your device firmware documentation before applying commands.
- Some setup methods use SMS commands while others use a PC configurator or mobile tool; choose the method supported by your device and firmware.
- Plaspy supports both UDP and TCP transports on port 8888. Select the transport that matches your device capability and network conditions.
- All Plaspy devices use the same port and Plaspy will attempt to automatically detect the device protocol once data is received.
- When troubleshooting connectivity, confirm APN settings, SIM service status, and that the device can resolve or reach d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMB120 to report to Plaspy is a practical way to get real time location, basic telemetry, and event monitoring into a single fleet platform. For organizations that need cost effective tracking, pairing the FMB120 with Plaspy enables live maps, alerts, and simple remote control workflows such as immobilization and I/O driven events.

To learn more about Plaspy and how it handles device onboarding and fleet monitoring visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer details can change over time so verify the latest setup information on the manufacturer website https://www.teltonika-gps.com/.
