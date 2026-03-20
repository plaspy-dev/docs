---
slug: /jointech/jt706/configuration
id: jt706-configuration
sidebar_label: Configuration
title: Jointech - JT706 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Jointech JT706 for Plaspy with public server settings and SMS commands for GPRS and APN
keywords:
  - Jointech JT706 configuration
  - JT706 server configuration
  - JT706 setup for Plaspy
  - Jointech GPS tracker configuration
  - JT706 APN settings
  - Container tracking configuration
  - Plaspy tracker integration
  - JT706 SMS commands
  - Container telemetry setup
  - JT706 platform setup
---

# Jointech - JT706 Configuration

This page documents the public configuration context for using the Jointech JT706 tracker with Plaspy. It explains the shared Plaspy server settings and shows the common, manufacturer published example SMS commands used to point JT706 devices at the Plaspy backend so the tracker can deliver location and condition telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side steps can vary by firmware revision, installation style, or vendor toolset. The JT706 is a container focused tracker with GPS and LBS hybrid positioning, door and loading sensors, and temperature and humidity telemetry, and the guidance here centers on the practical public steps to connect that device to Plaspy.

## Configuration Overview

The goal of configuring a Jointech JT706 for Plaspy is to prepare the device to send its location and sensor telemetry to the Plaspy server endpoint so the unit appears in the platform and reports events and conditions reliably. This typically involves setting the device ID, GPRS server parameters, and APN credentials using the manufacturer supported method.

- Point the JT706 to the Plaspy server endpoint so telemetry is delivered to your Plaspy account.
- Configure APN and optional APN user credentials so the device can use GPRS data.
- Validate connectivity so location, door events, and environmental telemetry are visible in Plaspy.
- Use the JT706 SMS configuration commands when available to apply server and APN settings.
- Confirm the device reports to Plaspy and monitor initial messages to verify proper protocol handling.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A powered and accessible JT706 tracker with a known device ID
- A SIM card with active GPRS data or SMS capability fitted to the tracker
- APN details for the mobile network operator including optional APN username and password
- A mobile phone or configuration tool able to send SMS commands to the tracker, or access to the official Jointech configuration software
- Access to the manufacturer's documentation for JT706 to confirm command syntax and any device specific differences

## How This Tracker Connects to Plaspy

The JT706 is configured to report its location and environmental telemetry to the shared Plaspy server endpoint and port so operators receive real time updates and events inside the Plaspy platform. Once the device is pointed at Plaspy, the platform will ingest position fixes and sensor readings for visualization and alerting.

- The tracker sends periodic position updates to d.plaspy.com on port 8888
- Telemetry such as door status and temperature is sent alongside location data
- Plaspy receives the incoming packets on port 8888 and automatically detects the tracker protocol
- UDP or TCP transport can be chosen on the device depending on installation preferences and network behavior
- Successful connection makes the JT706 visible in Plaspy for monitoring and historical reporting

## Common Configuration Workflow

1. Access the official Jointech configuration method for JT706 such as the SMS command interface or manufacturer configuration software.
2. Identify and note the tracker device ID required by the device for SMS configuration.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the GPRS server field.
4. Set the port to 8888 as the destination port for Plaspy.
5. Choose UDP or TCP as the transport if the device requires explicit transport selection.
6. Apply or save the configuration and, if needed, restart the device to activate the new settings.
7. Validate that the JT706 reports to Plaspy by checking for incoming messages and device visibility in the platform.

## Example Configuration Commands

The Jointech JT706 can be configured by SMS using the device ID and the commands below. These examples are taken from public Jointech command formats and preserve the placeholders you must replace for your device.

Note the placeholders:
- [trackerID] is the device ID assigned to the tracker
- [apn] is the mobile network APN name provided by your SIM operator
- [apnu] is the APN username if required by your operator
- [apnp] is the APN password if required by your operator

Send these commands as SMS messages to the JT706 from a phone number the device accepts configuration commands from.

1. Set the GPRS server and APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

2. Optional set APN user and password
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```

The second command is only required if your APN requires authentication with a username and password. Replace each placeholder with the actual values for your tracker and SIM operator. These commands are intended for SMS based configuration as published by the manufacturer.

## Configuration Notes

- SMS configuration is commonly supported for JT706; follow the exact SMS syntax supported by your device firmware.
- Firmware revisions and vendor tools can change the exact command identifiers or parameters so verify with Jointech documentation when in doubt.
- Choose UDP or TCP based on network reliability and any operator requirements; Plaspy accepts either transport on port 8888.
- Keep APN credentials and device IDs secure; do not publish them on public channels.
- Plaspy uses a single port for all devices and automatically detects protocol so server and port consistency is important across your fleet.

## Why Use Plaspy with This Configuration

Using the JT706 with Plaspy centralizes container location and condition monitoring so logistics and compliance teams can receive timely alerts and review historical telemetry. The JT706's hybrid GPS and LBS positioning combined with temperature, humidity, and door status data gives operators the visibility needed for anti theft workflows, refrigerated cargo oversight, and customs supervision.

To learn more about Plaspy and how it ingests telemetry from devices like the JT706 visit https://www.plaspy.com. For the most current device specific setup details, command syntax, and firmware behavior verify information with the manufacturer at https://www.jointcontrols.com/ as manufacturer specifications and setup methods can change over time.
