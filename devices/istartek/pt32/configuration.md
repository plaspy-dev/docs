---
slug: /istartek/pt32/configuration
id: pt32-configuration
sidebar_label: Configuration
title: iStartek - PT32 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the iStartek PT32 showing how to point the device to Plaspy for reliable pet tracking
keywords:
  - iStartek PT32 configuration
  - iStartek PT32 server configuration
  - PT32 setup for Plaspy
  - PT32 GPS tracker setup
  - iStartek tracker configuration
  - PT32 SMS configuration
  - Plaspy device integration
  - pet tracker Plaspy setup
  - PT32 platform configuration
  - GPS platform setup
---

# iStartek - PT32 Configuration

This page documents the public configuration context for using the iStartek PT32 with the Plaspy platform. It gathers the shared server settings and practical steps that are publicly available so you can point a PT32 to Plaspy and confirm it reports correctly. Where manufacturer SMS commands are available they are reproduced here for convenience and clarity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands here as a public starting point and verify any device specific behavior with iStartek documentation.

## Configuration Overview

This configuration process prepares a PT32 to communicate with Plaspy by registering its GPRS settings, APN, server endpoint, and reporting timer. The goal is to ensure the device has mobile data connectivity, the correct server target, and a reporting cadence that matches your monitoring needs.

- Configure APN and GPRS network parameters so the device can use mobile data.
- Point the PT32 to the Plaspy server endpoint so reports arrive in the platform.
- Select the transport mode if required and set the reporting interval for live updates.
- Validate connectivity and view the device within Plaspy to confirm telemetry and alerts.
- Use the manufacturer provided SMS commands or official configuration tool to apply settings.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A charged PT32 with sufficient battery to complete initial configuration and testing.
- A valid mobile SIM card installed and active for GPRS data and SMS commands.
- Knowledge of the mobile operator APN and any required APN credentials.
- Access to the iStartek SMS command interface or the official configuration tool from the manufacturer.
- A method to receive confirmation SMS responses or to observe device activity in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The PT32 sends location and device status to Plaspy over the mobile network using the configured GPRS server endpoint and port. Once the device is pointed at Plaspy it reports periodic position updates and event notifications for visibility and monitoring.

- The device is configured to report to the shared Plaspy server endpoint and port.
- Reports are sent over UDP or TCP depending on the device transport selection.
- Plaspy automatically detects the tracker protocol and ingests location and status messages.
- Periodic timers control how often the device sends updates to Plaspy for real-time visibility.
- Alerts and event messages become visible in Plaspy dashboards and notification channels.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the PT32, typically SMS commands or the vendor tool.
2. Enter the APN for the mobile operator using the APN command provided by the manufacturer.
3. Point the device to the Plaspy server by entering d.plaspy.com or 54.85.159.138 as the server target.
4. Set the server port to 8888 as required by Plaspy.
5. Choose UDP or TCP transport if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the PT32 reports to Plaspy and appears in the platform with live updates.

## Example Configuration Commands

The PT32 supports SMS based configuration. Below are the public SMS commands that are commonly used to prepare the device for Plaspy. Preserve placeholders when sending commands and replace them with your operator values.

- Optional factory reset (use only if you need to restore defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your operator values:
```text
APN,[apn]#
```
If your operator requires APN username and password include the placeholders:
```text
APN,[apn],[apnu],[apnp]#
```
Explanation of placeholders:
- [apn] is the APN name provided by your mobile operator.
- [apnu] is the APN username when required.
- [apnp] is the APN password when required.

- Set the GPRS server to the Plaspy domain and port:
```text
SERVER,1,d.plaspy.com,8888#
```
- Alternatively set the GPRS server using the Plaspy server IP and port:
```text
SERVER,0,54.85.159.138,8888#
```
(Manufacturer examples present both domain and IP options. Use the format your device firmware expects.)

- Set the update interval to every 60 seconds:
```text
TIMER,60#
```

- Check current parameter settings:
```text
PARAM#
```

Send each SMS from the device administrator phone number or following the manufacturer SMS procedure. The exact command syntax and required prefixes may vary by firmware version; use these as the publicly available examples provided by iStartek.

## Configuration Notes

- The PT32 configuration above uses SMS based commands as provided in the public manufacturer guidance. An official tool or web interface may exist for bulk or graphical configuration.
- Choose UDP or TCP based on deployment needs; the device and Plaspy both support either transport and Plaspy will auto detect the protocol used.
- Firmware differences and regional variants can change command syntax or supported parameters. Always check the device firmware release notes.
- Verify APN, username, and password with your mobile operator before configuring the device.
- Use PARAM# or the device confirmation responses to validate settings after sending commands.

## Why Use Plaspy with This Configuration

Using the PT32 with Plaspy provides centralized visibility and operational oversight for pet tracking use cases. Pointing the PT32 at Plaspy allows organizations and pet owners to receive real time location updates, alerts for movement or geofence events, and historical route playback for recovery and incident review.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device details and firmware notes at the iStartek website https://istartek.com/. Manufacturer configuration methods, firmware behavior, and device specifics can change over time so verify the current instructions on the official iStartek site.
