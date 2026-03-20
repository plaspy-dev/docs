---
slug: /queclink/wth301/configuration
id: wth301-configuration
sidebar_label: Configuration
title: QuecLink - WTH301 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup instructions for QuecLink WTH301 to report to Plaspy using shared server settings and SMS commands when available
keywords:
  - QuecLink WTH301 configuration
  - WTH301 setup guide
  - QuecLink WTH301 Plaspy
  - WTH301 server configuration
  - QuecLink tracker configuration
  - WTH301 SMS configuration
  - Plaspy device setup
  - QuecLink tracking software setup
  - WTH301 GPS platform setup
  - BLE sensor integration Plaspy
---

# QuecLink - WTH301 Configuration

This page documents the public configuration context for using the QuecLink WTH301 with the Plaspy platform. It summarizes the server settings Plaspy requires and provides example SMS configuration commands that are commonly used to point a QuecLink device to Plaspy. Use this guide as a practical starting point when integrating the WTH301 into a Plaspy deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The WTH301 can be configured using the manufacturer tools or by SMS commands where supported; this page includes the public SMS examples provided in the device configuration notes and highlights the Plaspy server values you must enter.

## Configuration Overview

The goal of configuration is to prepare the WTH301 and any paired BLE gateway or tracker so environmental telemetry is delivered reliably to Plaspy and appears in dashboards and reports. For many deployments the work includes setting the cellular APN and GPRS server parameters on the forwarding tracker or gateway, confirming BLE pairing, and validating reporting to Plaspy.

- Configure the device or associated gateway to send data to Plaspy using the shared server endpoint and port.
- Set a valid APN and authentication placeholders if your operator requires them.
- Enable periodic reporting intervals so temperature and humidity are forwarded at the desired cadence.
- Validate connectivity by confirming the device appears in Plaspy and sends regular updates.
- Use SMS or manufacturer software tools as appropriate for the hardware and firmware version.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note: All devices in Plaspy use the same port for server communication

## Typical Requirements Before Setup

- Access to the physical device and any paired BLE-capable tracker or gateway that will forward sensor data to the cloud.
- A working SIM card and operator details for any cellular gateway or tracker that uses GPRS for uplink, including APN, APN username, and APN password if required.
- Ability to send SMS commands to the device or access to the manufacturer's configuration tool or web portal.
- Basic account access to Plaspy so you can confirm the device appears and telemetry is visible after setup.
- Knowledge of the device password used in SMS commands; the example commands below use the public default password provided in the manufacturer sample.

## How This Tracker Connects to Plaspy

When deployed with a Plaspy-compatible BLE gateway or BLE-enabled tracker, the WTH301 broadcasts environmental telemetry that is captured and forwarded to Plaspy. The forwarding device is configured to report to Plaspy's shared server endpoint and port so Plaspy can correlate sensor data with GPS and vehicle telemetry.

- The WTH301 broadcasts temperature and humidity over BLE to a paired gateway or tracker.
- The gateway/tracker uploads the collected data to Plaspy using the server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives the uplink and automatically detects the device protocol so data is parsed and associated with the correct device.
- Sensor readings appear alongside GPS location and vehicle signals in Plaspy for real-time monitoring and historical playback.
- Alerts and reporting in Plaspy can combine environmental telemetry with vehicle events for operational insight.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands if the device supports SMS configuration.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device's GPRS/server settings.
3. Set the server port to 8888. Remember that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the operator APN and any APN credentials using the placeholders [apn], [apnu], and [apnp] as required by your mobile operator.
6. Apply or save the configuration and restart the device or gateway if required by the manufacturer.
7. Validate that the device is reporting to Plaspy by checking for incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The following example SMS commands are public examples used to set up QuecLink devices. These commands use the sample device password queclink shown in the manufacturer example. Preserve the placeholders and replace them with your operator values where required.

1. Optional initial factory restore (use only if you need to reset settings):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] = your operator APN
- [apnu] = APN username if required (leave blank if not used)
- [apnp] = APN password if required (leave blank if not used)

4. Configure the GPRS server settings to report to Plaspy (domain and IP are both provided as an example):
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command sets the server to d.plaspy.com and the backup IP 54.85.159.138, both using port 8888. Plaspy will accept connections via UDP or TCP and automatically detect the incoming protocol.

5. Set periodic update interval to 60 seconds:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on these commands:
- The sample device password in these commands is queclink. Use the device password configured on your hardware.
- Replace APN placeholders with your operator details before sending.
- Send commands as SMS messages to the device number, or use the manufacturer configuration tool if available.

## Configuration Notes

- SMS-based configuration is commonly supported for QuecLink devices; use SMS or the official configuration tool according to your device and firmware.
- Firmware and hardware revisions can change available parameters and command syntax; confirm the exact command set for your device firmware.
- TCP versus UDP selection can affect delivery behavior; Plaspy supports both transports and automatically detects the device protocol on port 8888.
- All devices in Plaspy use the same port for server communication, which simplifies server settings across different device models.
- Keep APN credentials and device passwords secure and document any changes to device defaults.

## Why Use Plaspy with This Configuration

Pairing the WTH301 with a Plaspy-compatible BLE gateway or tracker extends location tracking with precise temperature and humidity telemetry. This integration helps operations teams monitor cold-chain conditions in real time, correlate environmental readings with vehicle location and events, and generate reports that support compliance and incident investigation.

To learn more about Plaspy and how it can centralize vehicle and environmental telemetry, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details consult the official QuecLink documentation at https://www.queclink.com/ as specifications and setup steps can change over time.
