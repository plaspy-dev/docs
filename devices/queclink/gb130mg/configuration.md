---
slug: /queclink/gb130mg/configuration
id: gb130mg-configuration
sidebar_label: Configuration
title: QuecLink - GB130MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GB130MG when used with Plaspy including required server settings and example SMS commands
keywords:
  - QuecLink GB130MG configuration
  - QuecLink GB130MG setup
  - QuecLink GB130MG Plaspy
  - Plaspy server configuration
  - GB130MG tracker setup
  - GPS tracker configuration
  - vehicle tracker Plaspy
  - fleet telematics setup
  - QuecLink tracker guide
  - GB130MG SMS configuration
---

# QuecLink - GB130MG Configuration

This page covers the public configuration context for using the QuecLink GB130MG with Plaspy. It explains the shared Plaspy server values you must point the device to, shows example SMS configuration commands provided in public QuecLink guidance, and describes the practical steps to prepare the tracker for reporting into the Plaspy platform.

Plaspy uses the same server port and shared endpoint settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guidance together with the official QuecLink documentation and tools for your device firmware.

## Configuration Overview

The goal of configuring a GB130MG for Plaspy is to direct the device to the Plaspy server endpoint, ensure mobile data or SMS-based configuration works, and confirm the device appears in Plaspy for monitoring and alerting. The example commands below reflect a common SMS-based configuration flow published for the GB130MG.

- Point the tracker to the Plaspy server domain or IP so telemetry is routed to the platform.
- Configure the correct network APN and GPRS server settings so the tracker can connect over cellular.
- Optionally restore or start from factory defaults when preparing a device for fleet deployment.
- Set reporting intervals and alarm inputs so Plaspy receives timely updates and events.
- Validate connectivity and that the device is visible in Plaspy after configuration and restart.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for the transport it requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered GB130MG and access to its configuration interface or SMS command ability
- A valid cellular SIM with a configured APN that allows data connection if using GPRS/LTE
- The device default password if required by manufacturer SMS commands or tools (modelConfiguration uses queclink as the sample default)
- Access to the official QuecLink configuration method such as SMS, web tool, or vendor software
- A test environment or staging account in Plaspy to validate device reporting before large scale rollout

## How This Tracker Connects to Plaspy

The GB130MG sends position and event telemetry to Plaspy by directing its GPRS or TCP/UDP output to the shared Plaspy server endpoint. Once the server domain or IP and port are set on the device, Plaspy will receive periodic reports and event notifications for live tracking and history.

- Device is configured to send GNSS and device telemetry to d.plaspy.com or directly to 54.85.159.138
- All devices use port 8888 on Plaspy and the platform automatically detects the tracker protocol
- Reporting intervals and alarm inputs determine how frequently Plaspy receives updates and events
- Plaspy ingests the data for live maps, alerting, and historical reporting so operators can monitor vehicles
- If a device supports both domain and IP server entries, either may be used; both are accepted by Plaspy

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software for your GB130MG, or prepare to send SMS commands if supported.
2. Enter the Plaspy server endpoint either by domain d.plaspy.com or by IP 54.85.159.138 in the device server settings.
3. Set the device server port to 8888.
4. Choose UDP or TCP transport on the device where the device requires a transport selection.
5. Configure APN and other GSM parameters as required by your cellular provider using the manufacturer method or SMS commands.
6. Apply or save the configuration and restart the device if the method or firmware requires it.
7. Validate that the device reports to Plaspy and appears in your platform account prior to full deployment.

## Example Configuration Commands

The following example SMS commands are derived from public QuecLink configuration content for the GB130MG. These are shown in the order provided and use the sample device password queclink which is listed as the default in the public instructions. If your device password differs, replace queclink accordingly. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your carrier APN values.

1. Optional initial step Restore factory settings (use only when appropriate)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = carrier APN name
- {{apnu}} = APN username (if required)
- {{apnp}} = APN password (if required)

4. Set the GPRS server to Plaspy using domain and IP with port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on these commands
- Commands are SMS based per the public configuration sample; ensure SMS configuration is enabled and that the device accepts SMS commands in your deployment region.
- Replace the sample password queclink if your unit uses a different password or a previously configured password.
- The server command includes both d.plaspy.com and 54.85.159.138 and references port 8888 which is the Plaspy port for all devices.

## Configuration Notes

- Firmware and tool differences: QuecLink firmware or vendor utilities may vary command formats and behavior; always confirm with your device firmware notes.
- SMS versus software setup: The GB130MG public example uses SMS commands; alternative methods such as USB, web tools or vendor software may also be supported depending on the installer tools you have.
- TCP versus UDP: Choose the transport required by your local network and device firmware; Plaspy accepts both and automatically handles the protocol on its side.
- Default password caution: The public sample uses queclink as the device password; set a secure password where possible after initial provisioning.
- Plaspy port consistency: Plaspy uses port 8888 for all devices and automatically detects tracker protocol so consistent port configuration simplifies fleet deployment.

## Why Use Plaspy with This Configuration

Configuring the GB130MG to report to Plaspy gives operators a consistent endpoint for ingesting high-fidelity GNSS and sensor telemetry across a fleet. With the shared Plaspy server settings and automatic protocol detection, teams can standardize deployments, reduce per-device configuration differences, and get devices reporting quickly into maps, alerts, and analytics.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official QuecLink website https://www.queclink.com/ as device features and setup steps can change over time.
