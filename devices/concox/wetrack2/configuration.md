---
slug: /concox/wetrack2/configuration
id: wetrack2-configuration
sidebar_label: Configuration
title: Concox - WeTrack2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Concox WeTrack2 when used with Plaspy real time tracking
keywords:
  - Concox WeTrack2 configuration
  - Concox WeTrack2 setup
  - WeTrack2 Plaspy configuration
  - WeTrack2 server configuration
  - Concox GPS tracker setup
  - WeTrack2 SMS configuration
  - WeTrack2 APN settings
  - vehicle tracker configuration
  - fleet tracking setup
  - GPS tracker Plaspy
---

# Concox - WeTrack2 Configuration

This page covers the public configuration context for using the Concox WeTrack2 tracker with Plaspy. It collects the practical, public setup information you need to point a WeTrack2 device at Plaspy so the tracker can report location and telemetry into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The example commands below are taken from publicly available Concox WeTrack2 SMS configuration instructions and show a common SMS based workflow to set APN, server, timers, and GPRS mode.

## Configuration Overview

Configuring a WeTrack2 for Plaspy prepares the device to establish a mobile data connection and report GNSS positions, event triggers, and status updates to Plaspy. The main goal is to set the device APN and server endpoint so the tracker can reach Plaspy, enable GPRS reporting, and verify the device appears in the platform.

- Point the device at Plaspy server settings so it sends telemetry to the correct endpoint.
- Configure the operator APN and data mode so the tracker can use mobile data for reporting.
- Set update intervals and GPRS on so frequent position updates reach Plaspy.
- Validate the device is reporting and visible in Plaspy after configuration.
- Keep a record of SMS commands and verification steps used during setup.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888 (configure UDP or TCP if the device requires a transport selection)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered WeTrack2 device installed or accessible for configuration.  
- An active SIM card with a mobile data plan and SMS capability inserted in the device.  
- Ability to send SMS commands to the tracker from an authorized phone number if SMS configuration is used.  
- The operator APN information from the mobile network operator for GPRS connectivity.  
- Access to Concox documentation or vendor tools for alternative configuration flows if SMS is not preferred.  
- Basic knowledge of how to verify device reporting in Plaspy once configuration is applied.

## How This Tracker Connects to Plaspy

The WeTrack2 can be configured to send GNSS positions, status updates, and event notifications to the Plaspy shared server endpoint using the shared Plaspy port. Once the server and APN are set, the device transmits location and telemetry data so Plaspy can display live tracking, alerts, and reports.

- The tracker is configured to report to the shared Plaspy server endpoint (d.plaspy.com) or the Plaspy server IP on port 8888.  
- The device uses mobile data (GPRS) for sending position and telemetry to Plaspy after APN and GPRS are enabled.  
- Plaspy receives GNSS positions and event triggers such as ignition status and movement alerts.  
- The platform converts incoming telemetry into live maps, alerts, and historical reports for operational monitoring.  
- Plaspy automatically detects the tracker protocol so the same port and endpoint work across supported devices.

## Common Configuration Workflow

1. Access the official Concox configuration method you plan to use, typically SMS commands for WeTrack2 or the vendor tool recommended by your supplier.  
2. Set the operator APN on the device using the APN command with your network operator values.  
3. Enter either the server domain d.plaspy.com or the server IP 54.85.159.138 as the GPRS server and set port 8888.  
4. Choose UDP or TCP transport if the device configuration requires a transport selection.  
5. Enable GPRS reporting and set the device update interval (for example 60 seconds) so the tracker sends regular updates.  
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.  
7. Validate that the device reports to Plaspy and appears on your Plaspy account; check for incoming positions and status messages.

## Example Configuration Commands

The WeTrack2 commonly supports SMS based configuration. The commands below are extracted from the public Concox WeTrack2 SMS setup instructions. Send each command as an SMS to the device number in the order shown when performing initial setup. Label any reset step as optional or use it only when needed.

1. Optional factory reset (use only if you want to restore defaults before configuring):
```
FACTORY#
```

2. Set the time zone to UTC 0:
```
GMT,E,0#
```

3. Set the operator APN (replace placeholders with your operator values):
```
APN,[apn],[apnu],[apnp]#
```
- [apn] is the network APN string required by your mobile operator.  
- [apnu] and [apnp] are optional APN username and password placeholders if your operator requires them.

4. Set the GPRS server by domain (points the device to Plaspy domain on port 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```

5. Or set the GPRS server by IP (alternate option using Plaspy server IP):
```
SERVER,0,54.85.159.138,8888,0#
```

6. Set the update interval to 60 seconds (two common variants):
```
TIMER,60#
```
or
```
TIMER,60,60#
```

7. Enable GPRS mode so the device transmits over mobile data:
```
GPRSON,1#
```

8. Verify the current GPRS and server parameters:
```
GPRSSET#
```

Note: Keep the order above when performing initial configuration. Use the APN command with your specific operator values before enabling GPRS. If you use the SERVER command with the domain variant, the device will resolve d.plaspy.com; the IP variant is an alternate method.

## Configuration Notes

- SMS based configuration is commonly used for WeTrack2 but vendor tools or direct configuration methods may exist; follow the method recommended by your supplier.  
- Firmware and hardware revisions can change command syntax or supported options; always confirm command formats against current Concox documentation if available.  
- Choose UDP or TCP based on device options and network behavior; Plaspy accepts either transport on port 8888 and automatically detects protocol.  
- Verify APN credentials with your mobile operator and include username and password placeholders only when required.  
- After saving settings, a device reboot may be required for changes to take effect.

## Why Use Plaspy with This Configuration

Configuring WeTrack2 to report into Plaspy provides centralized visibility of location, ignition status, movement alerts, and other telemetry for scooter, motorcycle, and light vehicle fleets. Using the shared Plaspy server settings simplifies deployment across many devices because all supported devices use the same port and Plaspy automatically detects the tracker protocol.

To learn more about Plaspy and how it supports device integrations like the WeTrack2, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official Concox guidance verify configuration details on the manufacturer site https://www.iconcox.com/.
