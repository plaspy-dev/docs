---
slug: /coban/gps303/configuration
id: gps303-configuration
sidebar_label: Configuration
title: Coban - GPS303 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban GPS303 showing how to point the tracker to Plaspy for GPRS and SMS reporting
keywords:
  - Coban GPS303 configuration
  - Coban GPS303 setup
  - GPS303 Plaspy configuration
  - Coban GPS tracker setup
  - GPS303 server configuration
  - GPS303 SMS commands
  - vehicle tracking setup
  - GPRS tracker configuration
  - fleet tracking Plaspy
  - GPS platform setup
---

# Coban - GPS303 Configuration

This page covers the public configuration context for using the Coban GPS303 with Plaspy. It describes the practical server settings and common setup workflow used to point a GPS303 device at Plaspy so the tracker can report position and status information to the platform. The guidance here is based on public commands and the shared Plaspy server settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so the examples below show common SMS commands and configuration flows used with the GPS303 while emphasizing the Plaspy server values that must be applied.

## Configuration Overview

The goal of configuration is to prepare the GPS303 to communicate reliably with Plaspy so the device appears in the platform and sends regular position updates. Typical setup uses the device's SMS command interface to set APN and server details, switch the tracker to GPRS mode, and verify reporting.

- Set APN credentials so the device can use mobile data and connect to Plaspy
- Configure the device to point at the Plaspy server endpoint and port
- Choose UDP or TCP transport according to tracker options and network requirements
- Enable periodic position reporting and any sensor or protocol options needed for monitoring
- Validate connectivity and confirm the device reports to Plaspy

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GPS303. These values are required and consistent across Plaspy-supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may allow selecting either)
- Plaspy automatically detects the tracker protocol so a single port is used for all devices

## Typical Requirements Before Setup

- A working SIM card with data enabled and an APN for your mobile operator
- Ability to send SMS commands to the GPS303 for configuration (device supports SMS command setup)
- Device powered and reachable so it can apply GPRS settings and connect
- Knowledge of the device password (default password used in examples is 123456)
- Access to official Coban documentation or configuration tools for firmware-specific instructions
- Network conditions that allow outbound UDP/TCP connections to Plaspy server

## How This Tracker Connects to Plaspy

When configured correctly, the GPS303 will send location and status data to the Plaspy endpoint so the device is visible and monitored inside the platform. Plaspy receives telemetry and makes it available for tracking, alerts, and reporting.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Data is sent over GPRS (mobile data) using UDP or TCP transport as selected
- Plaspy automatically detects the tracker protocol and processes incoming messages
- Position updates, alarms, and sensor events are forwarded to Plaspy for display and alerting
- Validation of connectivity confirms the device is actively reporting to Plaspy

## Common Configuration Workflow

Follow these practical public steps to configure a GPS303 for Plaspy:

1. Access the official Coban configuration method for your device, typically SMS commands or a manufacturer tool, and verify the device password.
2. Enter the Plaspy server address by using d.plaspy.com or the server IP 54.85.159.138 in the server configuration step.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the GPS303 requires selecting a transport mode.
5. Set APN and APN credentials for the SIM so GPRS can be established.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The GPS303 can be configured using SMS commands. The examples below are public sample commands. The default device password used in these commands is 123456. Preserve the placeholders shown when replacing with your operator values.

- Factory reset (optional initial setup)
```text
begin123456
```

- Set the time zone to UTC+0
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your mobile operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username and password (replace {{apnu}} and {{apnp}} as needed)
```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: If the GPS303 firmware supports domain names you may alternatively use d.plaspy.com in a server field or manufacturer tool where available.

- Set update interval for periodic fixes (example format shown)
```text
fix060s060s***n123456
```

- Switch the device to GPRS mode and select transport
```text
gprs123456,1,1
```
Alternative simpler command (device firmware dependent):
```text
gprs123456
```

- Check current settings
```text
check123456
```

- Enable extended protocol options such as fuel sensor or improved digital sensor reporting
```text
protocol123456 18
```

Placeholders explanation:
- {{apn}} — your mobile operator APN name
- {{apnu}} — APN username if required by operator
- {{apnp}} — APN password if required by operator

Use the check123456 command to verify settings after applying them. If you perform a factory reset with begin123456, treat it as an optional first step when you need to restore defaults.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options; always confirm commands against the device manual for your unit.
- SMS-based setup is commonly used for GPS303 devices; some installers may prefer a configuration tool or USB/serial interface if the device or local market supports it.
- TCP vs UDP selection affects delivery behavior and should be chosen based on network reliability and the vendor guidance; Plaspy accepts either on the same port.
- Keep the device password secure and change it from the default if operational policy requires it.
- Use the check command to validate that APN, server, and protocol settings were applied successfully.

## Why Use Plaspy with This Configuration

Using the Coban GPS303 with Plaspy gives organizations a straightforward way to collect location and status data from distributed assets over the existing GSM/GPRS network. The shared Plaspy server settings and automatic protocol detection reduce per-device configuration complexity and make it easier to bring multiple devices online for monitoring, alerts, and reporting.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device-specific commands, firmware notes, and manufacturer details verify the official Coban documentation at https://www.coban.net/ since setup methods and device behavior can change over time.
