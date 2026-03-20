---
slug: /queclink/gl500/configuration
id: gl500-configuration
sidebar_label: Configuration
title: QuecLink - GL500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the QuecLink GL500 to Plaspy with shared server settings and SMS commands
keywords:
  - QuecLink GL500 configuration
  - QuecLink GL500 setup
  - GL500 Plaspy setup
  - QuecLink GPS tracker configuration
  - asset tracker configuration
  - GPRS tracker setup
  - QuecLink SMS commands
  - GL500 server configuration
  - GPS platform setup
  - QuecLink GL500 APN settings
---

# QuecLink - GL500 Configuration

This page documents the public configuration context for using the QuecLink GL500 with the Plaspy platform. It focuses on the practical steps and public commands that are commonly used to prepare the GL500 so it can report location and events to Plaspy. Where applicable, this guide includes SMS command examples from public device configuration content.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The GL500 supports SMS and GPRS configuration flows in public materials, and this page shows how to apply the shared Plaspy settings and example SMS commands while advising verification against manufacturer documentation.

## Configuration Overview

The goal of the configuration process is to prepare the GL500 so it can communicate reliably with Plaspy and appear in the platform for monitoring and reporting. Typical public setup steps set the device password, configure APN for mobile data, and point the tracker to Plaspy's server endpoint and port.

- Configure device authentication and confirm or restore factory defaults where needed.
- Provide correct APN credentials so the GL500 can use GPRS to reach Plaspy.
- Point the device to the shared Plaspy server endpoint so reports are sent to the platform.
- Set reporting intervals and event inputs to control when the device transmits.
- Validate connectivity and confirm the device appears and updates in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the GL500 and its power source, including installed user replaceable CR123A batteries if the unit is battery powered.
- A working SIM card with data enabled and correct APN credentials for the mobile network you intend to use.
- Ability to send SMS commands to the device or access the official manufacturer configuration tool or software.
- The GL500 should be reachable on the cellular network and placed where it can obtain GPS and GPRS connectivity for initial validation.
- Knowledge of the device password; public commands for this model use the default password queclink in examples.
- Manufacturer documentation and firmware notes available for reference to confirm command syntax and behavior.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the GL500 sends its location and event reports to the shared Plaspy endpoint and port. Plaspy receives those reports, detects the tracker protocol automatically, and presents device location and status in the platform for monitoring and alerts.

- The device is configured to send GPRS data to d.plaspy.com or to the Plaspy server IP.
- Reports are sent to port 8888 using either UDP or TCP as configured on the device.
- Plaspy automatically detects the incoming tracker protocol and processes messages without per-device port changes.
- Movement and SOS inputs can be enabled so the GL500 transmits alerts to Plaspy when events occur.
- Once reporting is active, Plaspy provides visibility into device location and status for operational monitoring.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL500 (SMS commands or the vendor tool) and confirm the current firmware and command syntax.
2. If using SMS, prepare the device password (public examples use the default password queclink) and ensure SMS delivery to the device.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the device port to 8888 and choose UDP or TCP if the device requires selecting a transport.
5. Configure APN settings for the device network using your carrier APN, username, and password placeholders where required.
6. Apply or save the configuration and restart the device if the device requires a reboot for changes to take effect.
7. Validate that the device successfully reports to Plaspy and appears in the platform with periodic updates and event notifications.

## Example Configuration Commands

The GL500 public configuration examples show SMS-based commands. The device commands below are provided in the same order as public samples. Send each line as an SMS to the device using the device password queclink as shown. The first command is a factory restore and should be used only when required for initial setup.

1. Optional initial factory restore (use only when you need to reset to factory defaults):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your carrier values):
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = carrier APN
- {{apnu}} = APN username if required by your carrier
- {{apnp}} = APN password if required by your carrier

4. Set the GPRS server to Plaspy using both domain and IP with port 8888 (device accepts domain and IP fields):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the position update interval to 60 seconds:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes about commands:
- These commands are public examples sent by SMS; confirm the exact syntax against your device firmware and documentation before use.
- Keep the command order when performing an initial setup: reset (if needed), time, APN, server, reporting interval, then inputs/events.
- If your provider requires only an IP or only a domain, include the appropriate field; the example includes both as shown in public samples.

## Configuration Notes

- Manufacturer firmware versions and regional variants can change command syntax and supported features; always verify commands with the official QuecLink documentation for your GL500 firmware.
- The public commands above use SMS configuration. If you prefer a software or tool-based method provided by QuecLink or a distributor, follow that tool's workflow instead.
- Choose UDP or TCP based on device configuration options and any network constraints; Plaspy accepts both and will automatically detect the tracker protocol.
- Plaspy uses the same port 8888 for all supported devices, which simplifies server configuration on the tracker side.
- Keep the device password secure. Public examples show the default password queclink; change defaults according to security best practices after initial setup.

## Why Use Plaspy with This Configuration

Using the QuecLink GL500 with Plaspy provides an efficient way to monitor fixed assets over cellular networks. The GL500's long battery life and movement detection make it suitable for long-term asset visibility, while configuring the device to report to Plaspy centralizes location, event alerts, and operational status for fleet and asset managers.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official configuration details for the QuecLink GL500, verify current information on the manufacturer website https://www.queclink.com/ as device behavior and setup methods can change over time.
