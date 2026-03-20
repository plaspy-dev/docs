---
slug: /atrack/ax9/configuration
id: ax9-configuration
sidebar_label: Configuration
title: ATrack - AX9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AX9 and Plaspy with server settings, example AT commands, and practical setup workflow
keywords:
  - ATrack AX9 configuration
  - AX9 setup Plaspy
  - ATrack AX9 server configuration
  - AX9 GPS tracker configuration
  - ATrack AX9 setup guide
  - AX9 GPRS configuration
  - vehicle tracking AX9
  - AX9 OBDII configuration
  - AX9 tracker Plaspy compatibility
  - GPS tracker AX9 configuration
---

# ATrack - AX9 Configuration

This page covers the public configuration context for using the ATrack AX9 tracker with Plaspy. It explains the shared server settings Plaspy requires, the practical steps to apply those settings on the AX9, and the example AT commands that are commonly used when the device is configured via the manufacturer's command interface.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use for configuration. Use this guide together with official ATrack documentation for device specific details.

## Configuration Overview

This guide gives a concise, practical path to prepare an AX9 unit to report to Plaspy so location, event, and status data become visible in the platform. It summarizes what to set on the device, how to validate connectivity, and which common AT commands are used when the device is configured with manufacturer commands.

- Point the tracker to the Plaspy server endpoint and port so the device can open a session to Plaspy for telemetry.
- Configure GPRS settings including APN credentials so the AX9 can use the vehicle SIM and mobile data.
- Set reporting behavior such as tracking interval and event reporting to control how often the device transmits.
- Enable binary or required payload format so Plaspy can correctly parse incoming messages.
- Validate connectivity and device status to confirm the AX9 is visible in Plaspy after configuration.

## Plaspy Server Settings

- Use the Plaspy server domain d.plaspy.com when the configuration method accepts a hostname.
- The Plaspy server IP is 54.85.159.138 for direct IP based configuration options.
- All devices in Plaspy use the same port, port 8888.
- The AX9 may be configured to use UDP or TCP transport on port 8888 depending on the device configuration option.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol in Plaspy; configure the device to reach the shared endpoint and port.

## Typical Requirements Before Setup

- A powered and installed AX9 unit with access to the manufacturer configuration method or tool.
- A working SIM card and active mobile data plan compatible with the device network capability.
- Manufacturer documentation or access to the configuration console for sending AT style commands or using vendor software.
- Basic knowledge of APN settings for the SIM provider to populate placeholders such as [apn], [apnu], and [apnp].
- A way to restart or power cycle the device after configuration to apply new settings.
- Access to Plaspy to validate that the device appears online after setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AX9 opens a GPRS connection and sends location and event packets to the shared Plaspy endpoint and port. Plaspy receives the packets, detects the tracker protocol automatically, and displays device data in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Data is transmitted over the chosen transport protocol, UDP or TCP, based on device configuration.
- The device reports periodic tracking intervals and event-driven messages for ACC or harsh event reporting.
- Plaspy parses the incoming payload and maps it to the device record automatically thanks to protocol detection.
- Platform visibility allows monitoring of location, movement, and the configured events from the AX9.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software provided by the manufacturer for the AX9.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server/GPRS fields.
3. Set the communication port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN and other GPRS parameters (use the placeholders [apn], [apnu], [apnp] where applicable).
6. Apply or save the configuration and restart or power cycle the AX9 if the procedure requires it.
7. Validate that the device reports to Plaspy by checking device status in the platform or using the device verification command.

## Example Configuration Commands

The AX9 can be configured with AT style commands. The following commands are taken from public configuration examples and show a typical order to prepare ACC event reporting, tracking interval, payload format, and GPRS server settings for Plaspy.

- Set ACC event input and reporting rules, and enable event action:
```text
AT$INPT=0,7
```
```text
AT$REPT=101,1,"%IN0","1",0,1
```
```text
AT$REPT=102,1,"%IN0","0",0,1
```
```text
AT$RACT=1,3,2
```
- Set the periodic tracking interval to 60 seconds:
```text
AT$TRAC=1,60,,,,,2
```
- Set binary mode format for payloads:
```text
AT$FORM=1,@P,0,""
```
- Configure the GPRS server pointing to Plaspy. Replace placeholders with your SIM APN credentials as required:
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explanation of placeholders:
- [apn] is the mobile network APN provided by your SIM operator.
- [apnu] is the APN username if required by the operator; leave blank if not required.
- [apnp] is the APN password if required; leave blank if not required.

- Check device status and configuration:
```text
AT$INFO=?
```

Note: The example uses the Plaspy server IP 54.85.159.138 and port 8888. You can substitute the hostname d.plaspy.com in command fields or vendor tools that accept hostnames.

## Configuration Notes

- Firmware and hardware revisions may change available AT commands or parameter formats; verify commands against the AX9 firmware documentation.
- The device can be configured for TCP or UDP; select the transport that matches your installation practice and network requirements.
- APN credentials vary by operator. Keep placeholders [apn], [apnu], and [apnp] ready and fill them with the operator details.
- Use the manufacturer tool or secure channel recommended by ATrack for bulk or remote provisioning where available.
- After applying settings, a device restart or power cycle may be necessary for new settings to take effect.

## Why Use Plaspy with This Configuration

Configuring the ATrack AX9 to report to Plaspy provides consistent server settings and a predictable workflow for integrating AX9 devices into a fleet or asset monitoring environment. Plaspy's shared endpoint and automatic protocol detection reduce per-device configuration complexity and let organizations focus on reporting behavior and operational monitoring.

To learn more about Plaspy and how it supports devices like the ATrack AX9, visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and official command documentation, always verify with the manufacturer at https://www.atrack.com.tw/
