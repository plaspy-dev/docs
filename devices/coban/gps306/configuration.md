---
slug: /coban/gps306/configuration
id: gps306-configuration
sidebar_label: Configuration
title: Coban - GPS306 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Coban GPS306 to Plaspy with practical server settings and SMS commands
keywords:
  - Coban GPS306 configuration
  - Coban GPS306 setup
  - GPS306 Plaspy configuration
  - Coban tracker server configuration
  - GPS tracker setup for Plaspy
  - vehicle tracking GPS306
  - GPS306 SMS configuration
  - fleet tracking Coban GPS306
  - GPS306 GPRS setup
  - Coban GPS platform setup
---

# Coban - GPS306 Configuration

This page covers the public configuration context for using the Coban GPS306 with Plaspy. It explains the practical server settings, SMS configuration commands that are commonly used for this model, and what to verify before starting integration with Plaspy. Use this guide to prepare the device to report location and status to Plaspy while keeping manufacturer documentation handy for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, simplifying integration from the platform side. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools; the commands shown here are publicly available SMS-based examples and should be applied according to the device firmware and installation context.

## Configuration Overview

Configuring a Coban GPS306 for Plaspy prepares the tracker to connect to the platform endpoint and consistently report location and status. The process typically uses SMS for initial configuration and then GPRS to send live data to Plaspy's server endpoint and port.

- Set the device to use Plaspy server settings so the tracker sends data to the correct endpoint.
- Configure APN and GPRS credentials so the tracker can establish a mobile data connection.
- Choose the transport (UDP or TCP) and set the standard Plaspy port so reports arrive reliably.
- Validate connectivity and confirm the device is visible in Plaspy after applying settings.
- Use the provided SMS commands for quick setup when a manufacturer app or PC tool is not available.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for connectivity

## Typical Requirements Before Setup

- A powered Coban GPS306 physically installed or connected to power for configuration.
- An active SIM card with data enabled and correct APN credentials for the mobile operator.
- Ability to send SMS commands to the device (the GPS306 supports SMS-based configuration).
- Access to the device password (the examples below use the default password 123456).
- A way to monitor whether the device appears in Plaspy after configuration (platform account access).
- Manufacturer documentation or firmware notes for the exact command syntax and supported features.

## How This Tracker Connects to Plaspy

The Coban GPS306 is configured to report position and device events to the shared Plaspy server endpoint and port. Once GPRS is active, the device sends periodic updates to Plaspy where the platform detects the device protocol and makes the unit visible in the fleet.

- The tracker initiates a GPRS connection using the configured APN and credentials.
- Device sends location and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings; both are supported by Plaspy.
- Plaspy automatically detects the protocol used by the tracker and processes incoming messages.
- Reports are available on Plaspy for monitoring, event alerts, and operational oversight.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GPS306 (SMS commands, vendor app, or PC tool) as provided by Coban.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses this same port for all supported devices).
4. If the device requires a transport selection, choose UDP or TCP according to your preference or network conditions.
5. Configure APN and APN credentials so the tracker can connect to the mobile data network.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and is visible in the platform; check connectivity and message flow.

## Example Configuration Commands

The GPS306 can be configured by sending SMS commands to the device. The sample commands below are public examples and use the device default password 123456. Replace placeholders where noted.

- Notes on placeholders
  - [apn] — replace with the mobile operator APN string
  - [apnu] — replace with the APN username if required by the operator
  - [apnp] — replace with the APN password if required by the operator

- Factory reset (optional initial step)
```text
begin123456
```

- Set time zone to UTC+0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```

- Set the APN username and password
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set update interval (example format from public guidance)
```text
fix060s060s***n123456
```

- Switch to GPRS mode (example options)
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Check current settings
```text
check123456
```

- Enable enhanced reporting for fuel sensor or digital sensors (example protocol command)
```text
protocol123456 18
```

Use the commands in the order that matches your setup routine; factory reset is optional and only recommended when starting from a known default state.

## Configuration Notes

- SMS-based configuration is commonly used for initial setup on this model; confirm that your carrier supports SMS to the device and the SIM has sufficient balance.
- Firmware versions and hardware revisions can affect exact command syntax and available features; consult the manufacturer for firmware-specific instructions.
- When choosing transport, UDP is commonly used for lightweight reporting and TCP for persistent connections; Plaspy supports both and will detect protocol automatically.
- Plaspy uses the same port (8888) for all devices, so ensure that firewall or network policies allow outbound data to that port.
- Always verify APN values and credentials with the mobile operator and test connectivity before final installation.

## Why Use Plaspy with This Configuration

Using the Coban GPS306 with Plaspy gives organizations a straightforward path to monitor location and device status through a single platform. The shared server settings and automatic protocol detection in Plaspy reduce the need for device-specific server configuration and help accelerate deployment across mixed fleets.

Learn more about Plaspy at https://www.plaspy.com and verify device-specific instructions, firmware changes, and the latest manufacturer details at https://www.coban.net/ to ensure the configuration steps and command syntax remain current.
