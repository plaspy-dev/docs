---
slug: /cantrack/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: CanTrack - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the CanTrack GT06 with Plaspy using shared server settings and sample SMS commands
keywords:
  - CanTrack GT06 configuration
  - GT06 setup Plaspy
  - CanTrack GPS configuration
  - GT06 server configuration
  - GT06 SMS commands
  - GPS tracker GPRS setup
  - vehicle tracker configuration
  - fleet tracking configuration
  - Plaspy device setup
  - GT06 tracking platform setup
---

# CanTrack - GT06 Configuration

This page covers the public configuration context for using the CanTrack GT06 tracker with Plaspy. It gathers the practical, manufacturer-published SMS command examples and the Plaspy server settings you will use to point the device to our platform. The GT06 (also known as TK100) supports sending position data via SMS and over GPRS to an internet server, which makes it suitable for vehicle tracking and fleet use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS commands below reflect public GT06 configuration patterns; confirm any device-specific differences with the manufacturer documentation when needed.

## Configuration Overview

Configuring the GT06 for Plaspy prepares the tracker to send location and status data to the Plaspy platform and ensures the device is visible and reportable in your Plaspy account. The process typically uses the device's SMS command interface (or manufacturer tools) to set operator APN and the remote server address and port so GPRS packets are delivered to Plaspy.

- Point the device to the Plaspy server endpoint so GPRS data is routed correctly.
- Configure the operator APN and optional APN username and password for GPRS connectivity.
- Verify transport settings (UDP or TCP) and set port 8888 used by Plaspy.
- Confirm the device accepts the SMS configuration commands and that the device password is correct.
- Test connectivity so the device appears and reports on Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (this port is used across all devices in Plaspy)  
- Transport: device can be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so the platform can accept many device protocols without per-device port changes

## Typical Requirements Before Setup

- A powered GT06 installed or accessible for configuration and testing.  
- An active GSM SIM card with data and SMS enabled and sufficient balance for GPRS and SMS where applicable.  
- Operator APN details ready (APN host and, if applicable, APN username and APN password).  
- Access to the vendor’s SMS command guide or configuration tool for the GT06.  
- The device password (sample default password shown in commands is 123456) or confirmation of any changed password.  
- A Plaspy account and the ability to view incoming device connections in the platform to validate reporting.

## How This Tracker Connects to Plaspy

The GT06 sends location and device data over GPRS to the configured Plaspy server endpoint and port so Plaspy can display position, status, and events. Configuration directs the GT06 to transmit its telemetry to the shared Plaspy server using the selected transport (UDP or TCP).

- Device GPRS uplink is configured with the Plaspy server domain or IP and port 8888.  
- The tracker uses the operator APN settings to establish GPRS connectivity.  
- Plaspy receives incoming data and automatically detects the tracker protocol for parsing.  
- Once reporting, the device is visible in Plaspy for location tracking and event monitoring.  
- Transport selection (UDP or TCP) is set on the device; Plaspy supports both and keeps the same port for all devices.

## Common Configuration Workflow

1. Access the official CanTrack GT06 configuration method (SMS commands or the manufacturer configuration tool).  
2. Ensure the device has a working SIM and input the operator APN details ([apn], [apnu], [apnp] if required).  
3. Enter the Plaspy server information using d.plaspy.com or 54.85.159.138 and set port 8888.  
4. Choose UDP or TCP transport if the device requires explicit selection.  
5. Apply or save the configuration using the device method (SMS save, tool save, or reboot trigger).  
6. Restart the device if required by the manufacturer to apply network settings.  
7. Validate that the tracker reports to Plaspy and appears in your account or that the device sends expected messages to the server.

## Example Configuration Commands

The GT06 commonly accepts SMS commands for configuration. The sample commands below are public examples. The device password used in these examples is 123456 (this is the default password shown in public documentation). Preserve and replace the placeholders where needed.

1. Optional initial factory restore (label this optional and use only if you need to reset to factory defaults):
```
#begin#123456#
```

2. Set the time zone (sample for UTC 0):
```
#timezone#123456#W#0#00#
```

3. Set the operator APN. Replace [apn] with your operator APN host. Include [apnu] and [apnp] only if your operator requires an APN username and password. The APN username and password placeholders are optional:
```
#apn#123456#[apn]#[apnu]#[apnp]#
```
Explanation: [apn] = operator APN host, [apnu] = APN username (optional), [apnp] = APN password (optional).

4. Set the GPRS server to Plaspy. You can use the Plaspy server IP or the domain (d.plaspy.com). This public command example uses the Plaspy IP and port 8888:
```
#IP#123456#54.85.159.138#8888#
```
Or replace the IP with the domain (if the firmware accepts domains):
```
#IP#123456#d.plaspy.com#8888#
```

5. Verify or check settings (public check command example; behavior can vary by firmware):
```
TCP
```
Note: The exact verification command and response format depend on the GT06 firmware. Use these commands as public examples and confirm behavior on your specific device.

## Configuration Notes

- The GT06 supports SMS-based configuration as shown in the examples; some installers prefer manufacturer software or configuration tools depending on firmware.  
- The default device password in public examples is 123456; if the password has been changed, use the correct password in commands.  
- Some GT06 firmware versions accept domain names for the server, others require an IP address; try d.plaspy.com or 54.85.159.138 as supported by your device.  
- Choose UDP or TCP based on device options and test both if necessary; Plaspy supports both transports and uses the same port for all devices.  
- Firmware and regional variants can change command syntax or available options; always check the latest CanTrack documentation for your hardware revision.

## Why Use Plaspy with This Configuration

Configuring the CanTrack GT06 to report to Plaspy gives fleet managers and operators a straightforward way to consolidate vehicle location and event data in a single platform. By directing GPRS reports to the shared Plaspy endpoint and port, you enable real-time visibility, event tracking, and centralized monitoring without per-device port management.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. Please verify device-specific configuration methods, firmware behavior, and manufacturer details on the official CanTrack website https://www.cantrackgps.com/ as specifications and command syntax can change over time.
