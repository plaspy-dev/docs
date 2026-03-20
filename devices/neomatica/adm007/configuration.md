---
slug: /neomatica/adm007/configuration
id: adm007-configuration
sidebar_label: Configuration
title: Neomatica - ADM007 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Neomatica ADM007 BLE tracker and Plaspy compatibility including required server settings and setup workflow
keywords:
  - Neomatica ADM007 configuration
  - Neomatica ADM007 setup
  - ADM007 Plaspy configuration
  - Neomatica GPS tracker setup
  - ADM007 server configuration
  - Neomatica ADM007 BLE tracking
  - GPS tracker configuration Plaspy
  - Vehicle tracker ADM007 setup
  - ADM007 BLE sensor integration
  - Neomatica tracker platform setup
---

# Neomatica - ADM007 Configuration

This page documents the public configuration context for using the Neomatica ADM007 BLE tracker with the Plaspy platform. It focuses on the practical server and workflow information required to point the ADM007 to Plaspy so that GNSS positions, device status, and BLE sensor telemetry are reported into the platform for monitoring and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps for the ADM007 can vary by firmware, hardware revision, installation type, and vendor configuration tools, so use this page as practical guidance and verify any device-specific commands or utilities with Neomatica documentation.

## Configuration Overview

This configuration process prepares the ADM007 to communicate with Plaspy by directing outbound data (GPRS or SMS based on the device setup) to the Plaspy server endpoint and confirming successful reporting. The goal is to ensure the tracker is reachable by Plaspy, that the transport and port settings are correct, and that telemetry from the integrated BLE sensors is visible in the platform.

- Point the ADM007 to the Plaspy server endpoint so GNSS and BLE telemetry are delivered reliably.
- Choose the correct transport (UDP or TCP) on the device if required by the configuration tool.
- Set the shared Plaspy port so the tracker’s messages arrive on the platform side.
- Validate connectivity and protocol detection from Plaspy to confirm the tracker is reporting.
- Save and apply the configuration, then verify location and sensor data appear in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when data is received and uses the same port for all supported devices

These values are the public Plaspy endpoint settings you should enter on the ADM007 during configuration.

## Typical Requirements Before Setup

- Confirm the ADM007 has a valid active nanoSIM with data enabled when using GPRS reporting.  
- Ensure the tracker has reliable power and is installed according to site requirements.  
- Have the device IMEI or serial available for platform registration and verification.  
- Access to the official Neomatica configuration method or software (Bluetooth, SMS, or GPRS tools) to change server and transport settings.  
- Know the installed firmware version and, if required, have the ability to update firmware via FOTA or vendor tools.  
- Optionally have BLE sensors paired and tested if you plan to report peripheral telemetry to Plaspy.

## How This Tracker Connects to Plaspy

The ADM007 sends GNSS positions, device status, and BLE sensor telemetry to the Plaspy server endpoint and port so Plaspy can ingest, decode, and present data in dashboards, geofences, and alert rules. Plaspy’s automatic protocol detection simplifies integration because the platform identifies the tracker protocol when packets arrive.

- The tracker is configured to report to d.plaspy.com (or 54.85.159.138) on port 8888.  
- Messages may be sent over UDP or TCP depending on the device transport setting.  
- Plaspy automatically detects the tracker protocol and associates inbound data with the correct device.  
- BLE sensor telemetry collected by the ADM007 is forwarded to Plaspy alongside GNSS positions.  
- Successful configuration results in real-time location updates, status reports, and historical route uploads visible in Plaspy.

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software (Bluetooth configuration app, SMS commands, or GPRS configuration tool) as provided by Neomatica.  
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.  
3. Set the server port to 8888 to match the shared Plaspy port used by all supported devices.  
4. If the device requires a transport selection, choose UDP or TCP based on your installation preference or network requirements.  
5. Apply or save the new configuration in the device tool and confirm there are no immediate errors.  
6. Restart the device if required by the manufacturer tool or after saving settings to ensure changes take effect.  
7. Validate that the ADM007 reports to Plaspy and that position and BLE telemetry appear in the platform.

## Example Configuration Commands

The ADM007 can be configured using Neomatica’s supported methods (Bluetooth setup app, SMS commands, or GPRS configuration utility). Exact command strings and syntax vary by firmware and the vendor tool you use. In general, you will enter the Plaspy server endpoint and port in the device configuration fields, for example:

- Server address field: d.plaspy.com or 54.85.159.138  
- Server port field: 8888  
- Transport selection: UDP or TCP (if prompted)

If you use a manufacturer SMS command interface or configuration utility, consult the Neomatica user manual for the precise command format supported by your firmware. Different firmware revisions and configuration tools will require the exact syntax provided by Neomatica.

## Configuration Notes

- Firmware differences can change supported command syntax, the configuration workflow, or the availability of features such as BLE telemetry forwarding. Always check the device firmware version.  
- Choose UDP or TCP according to your network behavior; Plaspy accepts both transports on port 8888 and will auto-detect the protocol.  
- All Plaspy devices use the same port to simplify server-side routing and device onboarding.  
- If using SMS-based configuration, note that SMS command formats are vendor specific and may require a particular command order. Verify commands with Neomatica documentation.  
- BLE sensor reporting relies on the ADM007’s ability to pair and collect peripheral telemetry; verify sensors are paired and tested before platform validation.

## Why Use Plaspy with This Configuration

Pointing the ADM007 to Plaspy using the shared server endpoint and port provides a straightforward path to bring compact BLE-enabled tracking into a centralized fleet and asset management platform. Organizations benefit from consolidated location visibility, BLE telemetry for environmental or asset monitoring, and Plaspy’s automatic protocol detection which reduces the need for manual protocol selection.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware details, and manufacturer guidance verify information on Neomatica’s official site at https://neomatica.com/ as methods and firmware behavior can change over time.
