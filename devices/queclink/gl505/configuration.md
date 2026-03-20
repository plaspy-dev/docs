---
slug: /queclink/gl505/configuration
id: gl505-configuration
sidebar_label: Configuration
title: QuecLink - GL505 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure QuecLink GL505 for Plaspy with server settings commands and setup workflow
keywords:
  - QuecLink GL505 configuration
  - QuecLink GL505 setup
  - GL505 Plaspy configuration
  - QuecLink GPS tracker configuration
  - GL505 server configuration
  - Plaspy tracker setup
  - GL505 tracking software configuration
  - QuecLink GL505 integration Plaspy
  - GPS tracker configuration Plaspy
  - livestock GPS tracker setup
---

# QuecLink - GL505 Configuration

This page covers the public configuration context for using the QuecLink GL505 tracker with Plaspy. It describes the server settings, common setup workflow, and example SMS commands that are publicly used to point a GL505 at Plaspy so telemetry and events appear in your Plaspy account. The GL505 is a Plaspy compatible tracker designed for long duration livestock monitoring and outdoor asset security, and some manufacturer steps shown here use SMS commands as an example setup method.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The example commands shown below come from public configuration content and use the device password queclink as the sample default password. Always confirm current device procedures with the manufacturer documentation before deploying at scale.

## Configuration Overview

The goal of this configuration is to prepare the GL505 so that it reliably reports location and event data into Plaspy for live monitoring and historical analysis. Public commands and settings commonly configure the device APN, server endpoint, update interval, and input events so Plaspy receives timely telemetry.

- Configure APN and GPRS settings so the tracker has mobile data connectivity to reach Plaspy.
- Point the device to Plaspy server domain or IP and the shared reporting port so telemetry arrives in the platform.
- Set reporting intervals and event inputs to control battery life and the types of alerts sent to Plaspy.
- Validate connectivity and confirm the device appears in the Plaspy dashboard for live tracking and history.
- Optionally restore or adjust device defaults when preparing a device for a new deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either transport on port 8888
- All devices in Plaspy use the same port for reporting
- Plaspy automatically detects the tracker protocol so you only need to provide the server endpoint and transport if required by the device

## Typical Requirements Before Setup

- A charged GL505 with power applied and any installation hardware secured for the animal or asset.
- A working cellular SIM configured for data and SMS if using SMS based configuration or GPRS reporting.
- Correct APN credentials from the mobile operator to configure the device for GPRS.
- Access to the official QuecLink configuration method or vendor tool, or the ability to send SMS commands to the device.
- The device password if required for command authorization; public sample commands use the default password queclink.
- Basic access to Plaspy so you can confirm the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the GL505 sends periodic location and event messages to the shared Plaspy server endpoint and port so positions, geofence events, and SOS or motion alerts are visible in the platform. Plaspy receives the inbound telemetry and automatically applies protocol detection so devices become visible without manual protocol selection in most cases.

- The tracker reports GNSS positions and event data to d.plaspy.com or the server IP at the shared port.
- The device can use UDP or TCP transport on port 8888 depending on device settings and network requirements.
- Plaspy uses automatic protocol detection to interpret the tracker messages and show the device in the platform.
- Event inputs such as SOS or motion alerts are forwarded into Plaspy as notifications or events for operational monitoring.
- Regular reporting intervals control the frequency of telemetry to balance battery life and live visibility.

## Common Configuration Workflow

1. Access the official QuecLink configuration method such as the vendor SMS command set, manufacturer's software, or approved installer tool.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or the server IP 54.85.159.138 in the device GPRS server settings.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection; the GL505 may be configured using either.
5. Configure APN and operator credentials using placeholders for your operator values, then apply or save the configuration.
6. Restart the device if required by the manufacturer or configuration method.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for the new device and confirming incoming telemetry.

## Example Configuration Commands

The public configuration commands below are provided as SMS command examples extracted from the device configuration content. These commands use the sample device password queclink shown in the public content. Replace placeholders such as [apn], [apnu], and [apnp] with your operator APN, APN username, and APN password before sending. Send these commands as SMS messages to the device number as required by the manufacturer.

1. Optional initial factory restore
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set operator APN
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] is your network operator APN
- [apnu] is the APN username if required
- [apnp] is the APN password if required

4. Set the GPRS server to Plaspy (domain and IP provided)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to contact Plaspy using d.plaspy.com and the IP 54.85.159.138 on port 8888

5. Set update/report interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: These SMS commands are examples taken from public configuration content. Verify the exact syntax with the current QuecLink documentation and the device firmware version before applying at scale.

## Configuration Notes

- The GL505 public commands above use SMS for configuration; confirm your device supports SMS-based configuration and that SMS is enabled on the SIM.
- Firmware and hardware revisions can change command syntax and available parameters; always check QuecLink documentation for your specific firmware.
- Choosing UDP versus TCP can affect delivery behavior and network retries; configure the transport according to your connectivity and reliability needs.
- Replace APN placeholders with operator values before sending commands and verify mobile data connectivity after APN configuration.
- Consider changing the device password from the default sample password queclink after initial setup for security, following the manufacturer procedure.

## Why Use Plaspy with This Configuration

Configuring the GL505 to report into Plaspy gives organizations centralized visibility into animal and asset location, automated alerting for geofence breaches or inactivity, and historical telemetry for operational analysis. For pastoral and remote deployments, Plaspy combined with the GL505 helps reduce field maintenance while improving response times to theft, injury, or unexpected movement.

To learn more about Plaspy and supported device integration visit https://www.plaspy.com. For the most current QuecLink device instructions, firmware notes, and command syntax verify details on the QuecLink official website https://www.queclink.com/ as manufacturer specifications and setup methods can change over time.
