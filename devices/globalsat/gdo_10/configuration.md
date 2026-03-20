---
slug: /globalsat/gdo_10/configuration
id: gdo_10-configuration
sidebar_label: Configuration
title: GlobalSat - GDO-10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the GlobalSat GDO-10 GNSS disciplined oscillator with Plaspy using shared server settings
keywords:
  - GlobalSat GDO-10 configuration
  - GlobalSat GDO-10 setup
  - GDO-10 Plaspy configuration
  - GDO-10 server configuration
  - GDO-10 telemetry setup
  - Plaspy device configuration
  - GNSS OCXO timing integration
  - 1PPS monitoring with Plaspy
  - timing device platform setup
  - telemetry gateway configuration
---

# GlobalSat - GDO-10 Configuration

This page documents the public configuration context for using the GlobalSat GDO-10 with Plaspy. It summarizes the practical steps and publicly available commands that prepare a GDO-10 installation or a connected telemetry gateway to report timing and status data into the Plaspy platform. The guidance below is based on the GDO-10 description and the available public configuration commands and should help engineers and installers integrate the device or its monitoring gateway with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary with firmware version, hardware revision, installation type, and the vendor configuration tools you use. The GDO-10 is an OCXO based GNSS disciplined oscillator that provides 1PPS and 10 MHz outputs and is typically integrated into Plaspy via a telemetry gateway or directly when the device or adapter supports reporting over cellular SMS or IP.

## Configuration Overview

The goal of configuration is to direct the GDO-10 or its associated telemetry adapter to report timing health and GNSS lock information to the Plaspy endpoint, validate connectivity, and enable visibility of the device status in the Plaspy dashboard. When public commands are available they are often used to set server address, port, transport, and any APN credentials required for cellular connectivity.

- Prepare the device or telemetry gateway so it can reach the Plaspy server endpoint for telemetry and status reporting.
- Configure the server address and port so the device or gateway sends data to Plaspy for automatic protocol detection.
- Provide any required SIM, APN, or SMS access if using cellular based configuration or reporting.
- Validate connectivity and confirm the device or gateway is reporting status to Plaspy and that telemetry appears in the platform.
- Optionally reboot the device after applying settings to ensure the new configuration takes effect.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the device IMEI so you can reference the correct unit in configuration commands.
- A cellular SIM and SMS or data capability when using SMS based commands or direct IP reporting, and any APN credentials required by your mobile operator.
- Power and physical access to the GDO-10 or the monitoring gateway that reads its 1PPS and 10 MHz outputs.
- Access to the manufacturer configuration method or approved vendor tool for sending SMS commands or applying settings.
- A means to compute and insert the required command checksum if the device command format requires it.
- A plan for validating that telemetry from the device or gateway is arriving in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The GDO-10 is typically integrated into a monitoring or telemetry flow where timing and health metrics are read by a gateway or adapter, and those metrics are forwarded to Plaspy. In many deployments the telemetry gateway or the device itself is configured to send its data to the shared Plaspy server endpoint at port 8888 using UDP or TCP. Plaspy will automatically detect the protocol and handle incoming device data.

- Configure the device or gateway to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP transport where the device requires an explicit transport selection.
- The device or gateway sends status and telemetry packets to the Plaspy endpoint for automatic protocol detection.
- Plaspy ingests timing health, GNSS lock state, and alarm reports for operational monitoring.
- Confirm visibility in Plaspy to validate successful reporting and monitoring.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or vendor tool to enter commands or apply device settings.
2. Insert the device IMEI into the configuration where required so commands target the correct unit.
3. Enter the Plaspy server address either as d.plaspy.com or as the IP 54.85.159.138 in the server field.
4. Set the destination port to 8888 as used by Plaspy for all devices.
5. Choose UDP or TCP transport if the device requires a transport choice.
6. Apply or save the configuration on the device or gateway and, if the workflow requires it, reboot the device.
7. Validate the device reports to Plaspy and appears in the platform with expected timing and health indicators.

## Example Configuration Commands

The GDO-10 public configuration includes SMS formatted commands. The example below shows the SMS command structure used to set server and APN details, and an optional reboot command. The command placeholders must be replaced with the actual values for your installation.

Notes on placeholders
- [imei] Replace with the device IMEI number.
- [apn] Replace with your mobile operator APN name.
- [apnu] Replace with the APN username if required by your operator. Leave empty if not required.
- [apnp] Replace with the APN password if required by your operator. Leave empty if not required.
- [checksum] and [checksumreeboot] are two character uppercase hexadecimal checksums calculated as the XOR of all characters before the asterisk in the command string.

Format note
- Example wrapper used by Plaspy for SMS command packets TSPRXAB27GHKLMnaicz*U! indicates the SMS protocol format expected by the device family. Your SMS sending tool should construct the message exactly as required by the device vendor.

1) Setup server and APN command
Send this SMS to the device phone number after replacing the placeholders and computing the checksum:

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

2) Optional reboot command
If a reboot is required to apply settings, send this SMS (optional):

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Checksum calculation
- The public JavaScript example provided by the manufacturer computes the checksum by XORing the character codes of the command substring before the asterisk and converting the result to a two character uppercase hexadecimal string. Ensure the computed checksum is inserted into the command where [checksum] or [checksumreeboot] appears.

## Configuration Notes

- The GDO-10 is often integrated via a telemetry gateway; however, SMS based or direct IP reporting commands are available in public materials and can be used when supported by the device firmware.
- Firmware and hardware revisions can change command formats, fields, or checksum behavior. Verify command syntax against the device firmware documentation you have.
- Choose TCP or UDP based on your network and gateway requirements; Plaspy supports both and will automatically detect the protocol when packets arrive at port 8888.
- When using SMS commands keep a test device and confirm commands were applied by observing reporting to d.plaspy.com or 54.85.159.138 on port 8888 in your monitoring workflow.
- Preserve IMEI accuracy and checksum correctness when composing SMS commands; an incorrect checksum or IMEI will prevent the device from accepting the configuration.

## Why Use Plaspy with This Configuration

Integrating the GlobalSat GDO-10 into Plaspy gives operations teams centralized visibility into timing health, GNSS lock state, and alarms alongside other telemetry. For installations that require disciplined timing such as telecom base stations, test benches, or satellite ground segments, forwarding GDO-10 status to Plaspy helps correlate synchronization metrics with wider system health and operational events.

To learn more about Plaspy and how it can manage timing and telemetry endpoints visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references verify current documentation on the GlobalSat website https://www.globalsat.com.tw/ since manufacturer setup methods and firmware behavior can change over time.
