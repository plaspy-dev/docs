---
slug: /coban/gps311/configuration
id: gps311-configuration
sidebar_label: Configuration
title: Coban - GPS311 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban GPS311 setup and Plaspy integration using shared server settings and SMS or GPRS commands
keywords:
  - Coban GPS311 configuration
  - GPS311 Plaspy setup
  - Coban GPS tracker setup
  - vehicle GPS tracker configuration
  - GPS311 server configuration
  - Plaspy tracker integration
  - GPS311 SMS commands
  - GPRS tracker configuration
  - fleet tracking GPS311
  - GPS311 platform setup
---

# Coban - GPS311 Configuration

This page explains the public configuration context for using the Coban GPS311 with Plaspy. It summarizes the practical setup steps and the shared server settings you need to point the device at Plaspy for real time tracking over GPRS or to send/receive SMS commands required during installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPS311 supports SMS and GPRS configuration patterns; this guide includes the common SMS commands published for the GPS311 so you can apply the Plaspy server settings in your environment.

## Configuration Overview

Configuring the GPS311 for Plaspy prepares the device to reach the Plaspy server endpoint, report location and status, and be visible in the Plaspy platform. The process focuses on setting network parameters, the APN, transport mode, and reporting intervals so the tracker reliably communicates with Plaspy.

- Set the device APN and credentials so it can use GPRS data to reach Plaspy.
- Configure the tracker to report to the Plaspy server endpoint and port.
- Choose the transport (UDP or TCP) and enable GPRS mode for live reporting.
- Verify connectivity and reporting using the tracker check command and Plaspy platform visibility.
- Save and, if required, restart the device to apply settings and begin reporting.

## Plaspy Server Settings

Use the following server settings when configuring the GPS311 for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

These values are the public Plaspy endpoint settings to enter on the device or via SMS commands where applicable.

## Typical Requirements Before Setup

- A powered GPS311 installed or connected to a bench power supply within the supported voltage range.
- An active SIM card with data enabled and the operator APN information.
- Access to send SMS commands to the tracker (for SMS-based configuration) or access to the manufacturer configuration tool if available.
- Knowledge of the device password (the published default password in public commands is 123456).
- Network coverage for GPRS data from the selected mobile operator.
- Basic access to the Plaspy account or monitoring software to confirm device reporting after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPS311 sends position and device status over GPRS to Plaspy's shared server endpoint and port. Plaspy receives these messages and uses automatic protocol detection to interpret the tracker data and present it in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Data can be sent using either UDP or TCP depending on the transport you select during setup.
- Plaspy automatically detects the tracker protocol so the device does not require a protocol selection in the platform.
- The device uses configured reporting intervals to determine how often it pushes position updates to Plaspy.
- SMS remains available for remote commands, verification, and troubleshooting where supported by the device.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or tools for the GPS311 (SMS commands or manufacturer software).
2. Set the device APN using the operator APN value, and optionally set APN username and password if required by the SIM operator.
3. Enter the Plaspy server address either as d.plaspy.com or as the IP address 54.85.159.138 and set port 8888.
4. Choose UDP or TCP transport on the device if the tracker requires selecting a transport mode.
5. Apply or save the configuration on the tracker and send any required SMS commands to commit settings.
6. Restart the tracker if required by the device or after saving settings to ensure new parameters are applied.
7. Validate that the device reports to Plaspy by checking for incoming data in the Plaspy platform and by using the device's check command.

## Example Configuration Commands

The GPS311 can be configured via SMS using the device password. The manufacturer-published public SMS commands are shown below. The default device password used in these examples is 123456. Preserve and replace placeholders where appropriate.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC+0
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your SIM operator APN)
```text
apn123456 [apn]
```

- Set the APN username and password (replace placeholders with operator credentials)
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the periodic update interval (public example command)
```text
fix060s060s***n123456
```

- Switch to GPRS mode and select transport
  - Example enabling GPRS and selecting UDP or TCP variant as provided:
```text
gprs123456,1,1
```
  - Alternative simple GPRS enable command:
```text
gprs123456
```

- Check current device settings
```text
check123456
```

- Enable enhanced digital sensor reporting or fuel sensor status
```text
protocol123456 18
```

Notes about placeholders and commands:
- [apn] is the mobile operator APN string required for GPRS data.
- [apnu] and [apnp] are the APN username and APN password when the operator requires credentialed access.
- Use the provided adminip command to set the server IP and port. If your device firmware supports domain names, you may be able to set d.plaspy.com instead of the IP; check the manufacturer documentation for domain-based commands.

## Configuration Notes

- The SMS command set above is the public example set for the GPS311; exact syntax and available commands can vary by firmware version.
- Some installations prefer domain names (d.plaspy.com) while others use the numeric IP 54.85.159.138; use the form supported by your device firmware.
- Choose UDP or TCP based on installer preference and any device firmware notes; both transports are supported by Plaspy on port 8888.
- The tracker supports SMS configuration, so SMS remains a useful recovery and verification method during setup.
- Keep the device password secure and change the factory default where appropriate after initial setup.

## Why Use Plaspy with This Configuration

Using the GPS311 with Plaspy provides a straightforward path to fleet visibility and operational monitoring by routing device data to Plaspy's shared server endpoint and letting the platform automatically interpret the device protocol. For organizations that need location tracking, alerts, and historical playback, configuring the tracker to the Plaspy endpoint ensures consistent ingestion of device events.

To learn more about Plaspy and how the platform handles devices like the Coban GPS311, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer updates verify current information on the Coban website https://www.coban.net/.
