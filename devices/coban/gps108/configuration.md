---
slug: /coban/gps108/configuration
id: gps108-configuration
sidebar_label: Configuration
title: Coban - GPS108 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban GPS108 showing Plaspy server settings and practical SMS commands for setup
keywords:
  - Coban GPS108 configuration
  - Coban GPS108 setup
  - Coban GPS108 Plaspy
  - GPS108 server configuration
  - GPS tracker configuration guide
  - vehicle tracking setup Coban
  - GPRS tracker configuration
  - Plaspy server settings
  - Coban GPS tracker setup
  - GPS108 SMS configuration
---

# Coban - GPS108 Configuration

This page provides public configuration context for using the Coban GPS108 with Plaspy. It focuses on the practical server settings and the common manufacturer-side commands used to point the device at the Plaspy service so the tracker can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The Coban GPS108 can be configured via SMS commands and GPRS settings; example SMS commands are included below to illustrate a common setup flow.

## Configuration Overview

Preparing a Coban GPS108 for use with Plaspy means ensuring the device can communicate over the mobile network and is pointed at Plaspy's server endpoint so the platform receives regular location and status updates.

- Configure the tracker to use the operator APN and, if required, a username and password so GPRS data can connect.
- Point the device to the Plaspy server endpoint so data and telemetry arrive at the platform.
- Select the transport mode (UDP or TCP) if the device requires an explicit choice.
- Set reporting intervals and behavior so location updates meet your monitoring needs.
- Validate connectivity with a check command and confirm the device appears in Plaspy.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the Coban GPS108:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the shared endpoint details that allow the Coban GPS108 to send GPRS data to Plaspy.

## Typical Requirements Before Setup

- A working Coban GPS108 with power and a charged battery or permanent power source.
- A SIM card with active GPRS data and SMS capability installed in the tracker.
- The mobile network operator APN, and if needed the APN username and password for data authentication.
- Access to the device configuration method supported by the unit such as SMS commands or the vendor tool.
- Knowledge of the default device password if SMS commands require authentication (the example commands below use the default password).
- A way to receive device responses via SMS while testing connectivity.

## How This Tracker Connects to Plaspy

When configured, the GPS108 sends location and status data over the mobile data network to the Plaspy server endpoint and port so the device is visible within the Plaspy platform for monitoring and event reporting.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or direct IP 54.85.159.138 on port 8888.
- Data transport can be set to UDP or TCP depending on the tracker firmware and your preference.
- Plaspy receives periodic location updates and event messages so you can monitor movement, alarms, and status.
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is not required.
- After successful setup and connectivity, the device should appear and report to Plaspy without needing per-device server settings.

## Common Configuration Workflow

1. Access the official Coban configuration method supported by your unit such as SMS commands or the manufacturer software.
2. Set the operator APN using the device's APN command and provide APN credentials if required.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server setting.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP for transport if the tracker requires a transport selection.
6. Apply or save the configuration and restart the device if the tracker or workflow requires a reboot.
7. Validate the device is reporting to Plaspy by using the device check command and confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The GPS108 commonly accepts SMS commands for setup. The examples below are taken from public Coban GPS108 configuration patterns. The sample commands use the device default password 123456 where a password is required.

Notes:
- Commands below are sent to the device as SMS messages.
- Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN, APN username, and APN password respectively.
- The factory reset command is optional and typically used only during initial setup or when clearing previous settings.

1. Factory reset (optional initial step)
```
begin123456
```

2. Set the time zone to UTC 0
```
time zone123456 0
```

3. Set the operator APN
```
apn123456 {{apn}}
```

4. Set the APN username and password
```
up123456 {{apnu}} {{apnp}}
```

5. Set the GPRS server to Plaspy using the direct IP and port
```
adminip123456 54.85.159.138 8888
```
Or you can use the Plaspy domain instead of the IP if the device accepts domain names:
```
adminip123456 d.plaspy.com 8888
```

6. Set update interval for periodic fixes (example command format from device)
```
fix060s060s***n123456
```

7. Switch to GPRS mode and select transport
```
gprs123456,1,1
```
Alternative simpler switch command format if supported:
```
gprs123456
```

8. Check current settings on the device
```
check123456
```

9. Enable enhanced protocol for fuel or digital sensor status reporting
```
protocol123456 18
```

Replace the placeholders {{apn}}, {{apnu}}, and {{apnp}} with your operator APN values. For example, apn123456 internet would set the APN to internet. The default SMS control password used above is 123456; if your device password has been changed use the current password.

## Configuration Notes

- SMS based configuration is common for the GPS108 but exact commands and formats can differ by firmware version and hardware revision.
- Choose UDP or TCP according to network reliability and your installer preference; Plaspy accepts either and will detect the tracker protocol automatically.
- Verify the APN and APN credentials with your mobile operator before sending GPRS commands.
- The device default password in the example commands is 123456; update the password after setup if security policy requires it.
- If you experience connectivity issues, check device responses to SMS check commands and confirm the device can resolve or reach d.plaspy.com or the provided IP.

## Why Use Plaspy with This Configuration

Using the Coban GPS108 with Plaspy provides a straightforward path to centralized tracking and operational visibility. Pointing the tracker at the Plaspy server endpoint and port allows location updates and device events to flow into the platform so fleet managers and monitoring services can view position, alarms, and status from a single interface.

If you want to learn more about Plaspy and how the platform handles incoming device data visit https://www.plaspy.com. For device specific details, firmware notes, and the most current command references check the official Coban documentation at https://www.coban.net/ because manufacturer specifications and setup methods can change over time.
