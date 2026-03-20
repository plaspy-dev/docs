---
slug: /lk_gps/lk960/configuration
id: lk960-configuration
sidebar_label: Configuration
title: LK-GPS - LK960 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK960 with Plaspy including server settings and practical setup steps for platform connectivity
keywords:
  - LK GPS LK960 configuration
  - LK GPS LK960 setup
  - LK-GPS LK960 server configuration
  - LK960 tracking software configuration
  - LK960 GPS platform setup
  - Plaspy device configuration
  - vehicle tracker LK960 integration
  - LK960 platform mode
  - LK-GPS configuration guide
  - fleet tracking LK960
---

# LK-GPS - LK960 Configuration

This page covers the public configuration context for using the LK-GPS LK960 tracker with Plaspy. It summarizes the shared server settings Plaspy expects, explains the practical setup workflow, and highlights what you should confirm before attempting integration. The content focuses on public and commonly used configuration steps rather than manufacturer proprietary tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LK960 is a wired vehicle tracker with features such as SOS alarm, remote fuel and electricity cut off, vibration alarm, 2G and 4G support, SMS and platform modes, and LED indicators for power GPS and GSM status, so you should verify any device-specific steps with the manufacturer documentation.

## Configuration Overview

Preparing the LK960 to communicate with Plaspy involves setting the tracker to report to the Plaspy server endpoint and verifying that the device can send periodic positions and alarms. The goal is to ensure the tracker is reachable by the platform and that key events are visible in Plaspy.

- Configure the device server address and port to point at the Plaspy endpoint so the tracker can deliver location and alarm messages.
- Verify cellular connectivity and that the device's SIM or data connection is active and compatible with the tracker.
- Validate that the device reports periodic location updates and key alarm events such as SOS, vibration, and power loss.
- Save and apply manufacturer configuration changes and, if required, restart the device to begin reporting.
- Confirm the device appears in Plaspy and that telemetry and alarms are visible for monitoring.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on the device side if the device requires a transport choice  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Stable power source and proper wiring for the LK960 prior to configuration and testing.  
- Active SIM card with data enabled and a data plan compatible with the tracker networks supported by the device, noting the LK960 supports 2G and 4G.  
- Access to the official manufacturer configuration method such as an SMS command set, web tool, or PC configuration utility as provided by LK GPS.  
- Knowledge of the device IMEI or unique identifier needed by Plaspy when registering the tracker on the platform.  
- A way to monitor LED indicators on the device to confirm GPS and GSM status during initial setup.  
- Confirmation of device firmware version if possible, to ensure compatibility with documented commands and manufacturer instructions.

## How This Tracker Connects to Plaspy

When configured for platform mode, the LK960 sends its location and event messages to the shared Plaspy server endpoint and port so the device can be tracked and managed from the Plaspy platform. Plaspy receives the data and maps it to the correct device using the device identifier and the protocol that Plaspy auto detects.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.  
- Alarms such as SOS, vibration, power off, and overspeed are reported to the same Plaspy endpoint for centralized alerting.  
- Events and telemetry become visible in Plaspy for monitoring, geo fence alerts, and historical playback.  
- The device can be left to use UDP or TCP transport depending on the manufacturer tool; Plaspy accepts both and auto detects the protocol.  
- Using the shared Plaspy endpoint ensures consistent handling of messages across multiple device models and simplifies fleet onboarding.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software provided by LK GPS for the LK960, such as SMS commands or a configuration tool.  
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the server IP 54.85.159.138 in the device server field.  
3. Set the server port to 8888 as required by Plaspy.  
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.  
5. Apply or save the configuration in the manufacturer tool and confirm the changes were accepted.  
6. Restart the device if the manufacturer instructions indicate a reboot is required to apply network settings.  
7. Validate that the device reports to Plaspy by checking the device status in the platform and confirming receipt of a location update or an event.

## Example Configuration Commands

The exact commands and configuration strings for the LK960 depend on the manufacturer SMS command set, firmware version, or configuration utility provided by LK GPS. Because manufacturer command formats vary, consult the official LK GPS documentation for the precise SMS commands or PC tool sequences to set server domain or IP, port, transport mode, and APN if required. Plaspy accepts the device reporting to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP.

If you have the device SMS command set from LK GPS, typical public steps are to send configuration SMS messages or apply settings in the PC tool in the following order: set APN if needed, set server address, set port, select transport, and save. Keep manufacturer placeholders such as {{apn}} if they appear in the official commands and replace them with your SIM operator values.

## Configuration Notes

- Different firmware versions or hardware revisions of the LK960 may use slightly different SMS commands or configuration tool fields. Always check the device specific manual.  
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so you only need to set the server address and port on the tracker.  
- Choose UDP or TCP transport based on the device configuration options; Plaspy accepts both and will auto detect the protocol in use.  
- SMS based configuration may be available for the LK960; if you use SMS commands, ensure your SIM card supports sending and receiving SMS and data as required.  
- Use the device LED indicators to help troubleshoot GPS fix and GSM registration during initial configuration and testing.

## Why Use Plaspy with This Configuration

Using the LK960 with Plaspy gives organizations and vehicle owners a practical way to consolidate device telemetry, alarms, and location tracking into a single platform. Plaspy's shared server endpoint and automatic protocol detection reduce per device configuration complexity, making it easier to onboard multiple LK960 units and monitor SOS alerts, vibration alarms, power events, and routine position updates centrally.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command references consult the official LK GPS website at https://www.lk-gps.com. Manufacturer specifications and setup methods can change over time so verifying the latest information from the manufacturer is recommended.
