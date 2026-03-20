---
slug: /meitrack/ts299l/configuration
id: ts299l-configuration
sidebar_label: Configuration
title: Meitrack - TS299L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Meitrack TS299L to Plaspy using shared server settings and SMS commands
keywords:
  - Meitrack TS299L configuration
  - TS299L setup for Plaspy
  - Meitrack tracker configuration
  - TS299L server configuration
  - Plaspy device setup
  - GPS tracker SMS commands
  - vehicle tracking platform integration
  - TS299L GPRS settings
  - plug and play GPS tracker setup
  - Meitrack configuration guide
---

# Meitrack - TS299L Configuration

This page provides public configuration guidance for using the Meitrack TS299L with the Plaspy fleet management platform. It focuses on the shared server settings Plaspy requires and includes practical SMS command examples drawn from the device public configuration format to help guide setup and validation.

Plaspy uses shared server endpoints and a single listening port for all supported trackers and detects the tracker protocol automatically. Manufacturer side steps for the TS299L can vary by firmware version, hardware revision, installation type, or vendor configuration tools. The examples below use the device SMS configuration method shown in public device documentation and preserve placeholders such as [apn] for your carrier settings.

## Configuration Overview

The goal of configuring a TS299L for Plaspy is to prepare the device to send GNSS fixes and event data to Plaspy and to verify reliable connectivity. The process is typically fast for plug and play installations and centers on setting the GPRS server, transport, and update intervals so the device is visible in the Plaspy platform.

- Set the device to report to the Plaspy server endpoint so Plaspy can ingest location and event data.
- Configure transport and port so the device can establish a GPRS session and send telemetry.
- Define reporting intervals and event reporting so data appears at the desired frequency in Plaspy.
- Validate connectivity and visibility in Plaspy after applying settings.
- Preserve carrier APN and optional APN username or password fields when required by your SIM.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered TS299L installed in the vehicle cigarette lighter socket or otherwise powered per manufacturer instructions.
- An active SIM card with a data plan and the correct APN for the carrier, plus SMS capability when using SMS-based configuration.
- Access to the TS299L manufacturer configuration method such as SMS commands or vendor software.
- Knowledge of the device password when required for configuration. The sample commands below use the default password 0000 as shown in the public configuration sample.
- A way to verify device connectivity in Plaspy after configuration, such as an operator account or a monitoring checklist.

## How This Tracker Connects to Plaspy

When configured, the TS299L establishes a GPRS data session and sends GNSS fixes, device status, and event messages to the Plaspy server endpoint. Plaspy receives these uplinks on the shared server and port and maps the device data into the Plaspy platform for live tracking and reporting.

- The tracker is set to report to the shared Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device and network; Plaspy supports both.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required on the platform side.
- Device events such as disconnect alerts and periodic location updates are sent to the Plaspy server and become visible in the platform for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the TS299L such as SMS commands or the vendor configuration tool.
2. Enter the Plaspy server address d.plaspy.com or use the IP address 54.85.159.138 where the device requires an IP.
3. Set the port to 8888 in the device configuration.
4. Choose UDP or TCP transport if the device requires a transport selection during setup.
5. Apply or save the configuration on the device and send any required SMS commands to commit settings.
6. Restart or power cycle the device if the manufacturer instructions recommend a reboot to apply changes.
7. Validate that the device reports into Plaspy and that location and event data appear in the platform.

## Example Configuration Commands

The TS299L supports SMS based configuration. The following public sample commands show a common setup sequence. The sample device password used in these commands is 0000 which is the factory default in the public example. Preserve the placeholders such as [apn], [apnu], and [apnp] and replace them with your carrier APN, APN username, and APN password when required.

- Optional initial factory reset or factory settings command
```sms
0000,F11
```
Label: Optional initial setup or factory settings reset. Use only when you intend to restore factory defaults.

- Set the GPRS server to the Plaspy endpoint using IP and port and include the carrier APN
```sms
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Notes:
- This command sets the device GPRS server to 54.85.159.138 on port 8888 as shown in the public example.
- The numeric parameter after A21 in the example (2) is part of the device SMS format used in the public sample. Keep the command syntax exactly as the device documentation prescribes.
- [apn] is a required placeholder for your mobile carrier APN. [apnu] and [apnp] are optional placeholders for APN username and APN password and should be included only if your carrier requires them.

- Set the time zone to UTC 0
```sms
0000,B36,0
```

- Set the reporting update interval to one minute
```sms
0000,A12,6,0
```
Note: The A12 command in the public sample sets an update interval. Keep the exact parameter values from manufacturer guidance if you change reporting frequency.

- Set event reporting parameters
```sms
0000,C03,0
```
Note: This command reflects the public example for event configuration. Refer to Meitrack documentation for exact event mask meanings.

## Configuration Notes

- SMS based setup is a supported public configuration method for the TS299L. Use SMS commands only if you have cellular coverage and SMS privileges on the device SIM.
- Manufacturer firmware revisions or regional hardware variants can change SMS syntax and available parameters. Always cross check with the official Meitrack documentation for your device firmware version.
- Plaspy supports both UDP and TCP on the shared port 8888. Choose the transport the device requires and ensure the command syntax matches the device SMS or tool format.
- Preserve APN placeholders [apn], [apnu], and [apnp] when copying example commands and replace them with carrier values as needed.
- The sample commands show the default device password 0000 in the public example. If you have changed the device password, use the current password in commands.

## Why Use Plaspy with This Configuration

Configuring a TS299L to report to Plaspy provides a fast path to vehicle visibility, event alerts, and telemetry aggregation without complex wiring. For operations that need quick deployment, the TS299L plug and play design combined with Plaspy ingestion delivers near real time tracking, disconnect alerts, and sensor visibility in a single cloud platform.

To learn more about Plaspy and how it manages fleet tracking, visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and official commands consult Meitrack documentation at https://www.meitrack.com/ to verify the most current setup instructions.
