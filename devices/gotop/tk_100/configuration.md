---
slug: /gotop/tk_100/configuration
id: tk_100-configuration
sidebar_label: Configuration
title: GOTOP - TK-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP TK-100 integration with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP TK-100 configuration
  - GOTOP TK-100 setup
  - GOTOP TK-100 Plaspy
  - GOTOP tracker configuration
  - pet GPS tracker setup
  - TK-100 server configuration
  - TK-100 tracking setup
  - GPS tracker platform configuration
  - GPRS tracker setup
  - Plaspy tracker configuration
---

# GOTOP - TK-100 Configuration

This page covers the public configuration context for using the GOTOP TK-100 tracker with Plaspy. It focuses on the practical server settings and general setup steps that allow the TK-100 to send location and alert data to the Plaspy platform. The guidance here is intended to complement the device documentation and manufacturer tools rather than replace them.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to understand the Plaspy endpoint and the typical workflow; always verify device-specific commands and menus against GOTOP documentation and the device firmware you have.

## Configuration Overview

The goal of configuring the TK-100 for Plaspy is to point the device to the Plaspy server endpoint and verify that the tracker reports location and alarms correctly. The TK-100 supports SMS and GPRS reporting methods, and this configuration ensures those reports are delivered to Plaspy for visualization and monitoring.

- Configure the TK-100 to report to the shared Plaspy server endpoint and port.
- Choose the transport method supported by the device interface when required (UDP or TCP).
- Validate connectivity so location and alarm messages arrive in Plaspy.
- Confirm geofence, low battery, movement, and vibration alarms are visible in the platform.
- Save and, if needed, restart the device so settings take effect.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GOTOP TK-100. These are the public values Plaspy uses for device integration and automatic protocol detection.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP may be selected if the device requires a transport choice
- Plaspy automatically detects the tracker protocol so devices using standard tracker protocols will be recognized without additional platform-level configuration

## Typical Requirements Before Setup

- A charged and functional TK-100 unit with access to its configuration method
- A valid SIM with GPRS or SMS service active if using mobile data or SMS based setup and reporting
- Access to the official GOTOP configuration tool, SMS command list, or configuration menu provided with the device
- Basic network access for the device to reach the internet when using GPRS reporting
- A Plaspy account and the ability to register or identify the device within Plaspy after it begins reporting
- Knowledge of how your device firmware accepts server and port settings (SMS commands, web UI, or configuration app)

## How This Tracker Connects to Plaspy

When the TK-100 is configured to report to Plaspy, it sends its position updates and alarm messages to the Plaspy server endpoint and port. Plaspy receives those messages, automatically determines the tracker protocol, and presents the device data in the platform for monitoring and historical review.

- The device is pointed at d.plaspy.com or the numeric IP 54.85.159.138 and uses port 8888
- Choose UDP or TCP on the device if the configuration flow asks for a transport
- The tracker sends regular location updates and event alarms (geofence, low battery, movement, vibration) to the Plaspy endpoint
- Plaspy automatically detects the tracker protocol so the platform can parse messages without per-device protocol selection
- After successful reporting, the device becomes visible and manageable from within the Plaspy interface

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the TK-100 (SMS command list, mobile app, or vendor configuration tool).
2. Enter the Plaspy server address as d.plaspy.com or use the numeric server IP 54.85.159.138 if preferred.
3. Set the device port to 8888 so reports are directed to the Plaspy listener.
4. If the device requires selecting a transport protocol, choose UDP or TCP according to the device options.
5. Apply or save the configuration in the device tool or send the SMS commands to persist settings.
6. Restart the TK-100 if the manufacturer instructions indicate a reboot is required to apply new network settings.
7. Validate that the TK-100 is reporting to Plaspy by checking device presence and telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands and syntax for the TK-100 depend on GOTOP firmware and the method you use (SMS commands or a configuration tool). Because manufacturer command sets vary, consult the official GOTOP SMS command documentation or the device manual for exact command syntax.

If your device supports SMS configuration, a typical SMS-based flow would follow the pattern of sending server and port commands via SMS and then a command to activate reporting. Replace placeholders with your values when applicable.

For example, an SMS command style could look like this in the manufacturer guide (this is an illustrative format; confirm exact commands in the GOTOP manual):

- Set server domain or IP
```
SET IP d.plaspy.com
```

- Or set server by numeric IP
```
SET IP 54.85.159.138
```

- Set port
```
SET PORT 8888
```

- Set transport if required (replace TRANSPORT with UDP or TCP)
```
SET TRANSPORT UDP
```

- Save or activate reporting
```
SAVE
```

Note: The actual SMS keyword, syntax, and command order depend on the device firmware. If your model uses a different command structure or a configuration app, follow the official GOTOP instructions.

## Configuration Notes

- Firmware and command syntax can differ by TK-100 hardware revision and region; always confirm the SMS commands or tool steps with the device manual.
- If the device gives a choice between UDP and TCP, UDP is commonly used for tracker reporting but select the transport according to GOTOP recommendations and your network environment.
- SMS based configuration is commonly supported for TK-100 for basic server and port updates; use the official GOTOP SMS command list for precise formatting.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so server and port are the critical values to apply.
- After changing server settings, allow a short period for the device to reconnect and verify reporting in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the GOTOP TK-100 to report to Plaspy gives pet owners and fleet managers a centralized way to view real time location, geofence alerts, and device alarms in a single platform. Plaspy’s automatic protocol detection and shared server model simplify integration, reducing the need for per-device protocol selection and allowing you to focus on monitoring and response.

Learn more about how Plaspy can work with compatible trackers at https://www.plaspy.com. For device specific commands, firmware behavior, and the latest setup instructions for the GOTOP TK-100, always verify details on the manufacturer site https://www.gotop.cc/ as specifications and methods may change over time.
