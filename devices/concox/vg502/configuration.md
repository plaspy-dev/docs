---
slug: /concox/vg502/configuration
id: vg502-configuration
sidebar_label: Configuration
title: Concox - VG502 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Concox VG502 OBDII tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Concox VG502 configuration
  - VG502 setup
  - Concox VG502 Plaspy
  - VG502 server configuration
  - Concox OBDII tracker
  - VG502 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking VG502
  - VG502 OBD II setup
  - Concox VG502 SMS commands
---

# Concox - VG502 Configuration

This page covers the public configuration context for using the Concox VG502 OBDII GNSS tracker with Plaspy. It explains the server values and the practical, manufacturer-provided commands you can use to point a VG502 at Plaspy so the device reports position and telemetry for live monitoring and historical analysis.

Plaspy uses shared server settings across supported devices and will automatically detect the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the commands and procedures here as a practical starting point and confirm details against the device firmware and vendor documentation.

## Configuration Overview

The goal of this configuration process is to prepare a VG502 so it consistently communicates GNSS and OBD telemetry to Plaspy for visibility, alerts, and reporting. The public configuration content below shows the common SMS commands used by Concox devices to set APN, server, timers, and GPRS mode.

- Configure the device to use Plaspy as its GPRS server so GNSS fixes and telemetry reach the platform.
- Provide operator APN settings required for cellular data connectivity and enable GPRS mode.
- Set a reporting interval so position and telemetry are sent on the required cadence.
- Validate the device can reach d.plaspy.com or the equivalent server IP and confirm it registers on Plaspy.
- Optionally reset or verify device parameters before fleet deployment to ensure consistent behavior.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport if the device requires an explicit selection
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for connectivity

## Typical Requirements Before Setup

- A VG502 device installed in the vehicle OBDII port and powered by vehicle ignition or battery
- A working Nano SIM with a data plan and SMS capability configured for the device
- Access to the manufacturer configuration method such as SMS commands, BLE tools, or vendor software
- Knowledge of the mobile operator APN values for your SIM provider
- A process to send and receive SMS commands from the device for initial configuration if not using BLE or a configuration app

## How This Tracker Connects to Plaspy

The VG502 is configured to report GNSS fixes and OBD telemetry to the shared Plaspy server endpoint and port. Once configured, the tracker will send regular position and event messages so Plaspy can display live location, generate alerts, and produce historical reports.

- The device points to d.plaspy.com or the Plaspy server IP and uses the shared port 8888
- GNSS position fixes and OBD-derived telemetry are forwarded to Plaspy for mapping and reporting
- Event notifications such as ignition changes, alerts, and diagnostic reports are sent to Plaspy for processing
- Plaspy detects the device protocol automatically so the correct parsing and ingestion are applied
- Reporting intervals and timers control how frequently the VG502 sends updates to Plaspy

## Common Configuration Workflow

1. Access the official Concox configuration method for the VG502 such as SMS commands or the vendor BLE utility.
2. Enter the Plaspy server settings using d.plaspy.com or 54.85.159.138 as the server address.
3. Set the port to 8888 and, if required by the device, select UDP or TCP as the transport.
4. Configure the mobile operator APN and enable GPRS mode so the device can use cellular data.
5. Apply or save the configuration and restart the device if required by the manufacturer.
6. Validate that the device reports to Plaspy by checking device connectivity and live position updates on Plaspy.
7. Adjust reporting interval and additional parameters as needed for fleet policy and data usage.

## Example Configuration Commands

The VG502 can be configured using SMS commands. The commands below are presented in the order recommended for initial setup. The factory reset command is optional and should be used only when you need to return the device to default settings before provisioning.

1. Optional factory reset (use only when needed)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,{{apn}}# 
```
If your operator requires APN username or password, include the optional placeholders as provided by your carrier:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} = operator APN name
- {{apnu}} = APN username if required
- {{apnp}} = APN password if required

4. Set the GPRS server to Plaspy using domain
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy server IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds (two accepted formats)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Verify GPRS and server settings
```
GPRSSET#
```

Follow the exact SMS syntax required by the device firmware and confirm the device acknowledges each command. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your carrier specific values.

## Configuration Notes

- SMS provisioning is a common method for VG502 configuration but BLE and vendor tools may be available for local configuration and firmware updates.
- Firmware versions can alter SMS command syntax and behavior; always confirm command support with the current device firmware.
- Choose UDP or TCP according to your installation needs; Plaspy supports both and will detect the protocol automatically when the device connects.
- Keep APN credentials and SIM data plan details handy during setup to avoid connectivity delays.
- Use the GPRSSET# verification command to confirm the device is using the expected server and APN settings.

## Why Use Plaspy with This Configuration

Using the Concox VG502 with Plaspy provides a rapid, low-friction deployment path for vehicle tracking and OBD telemetry. The VG502's plug-and-play OBDII form factor simplifies installation while Plaspy provides a central endpoint that ingests GNSS and diagnostic data for real time monitoring, reporting, and alerts.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration and firmware details at the manufacturer site https://www.iconcox.com/ as setup methods and firmware behavior can change over time.
