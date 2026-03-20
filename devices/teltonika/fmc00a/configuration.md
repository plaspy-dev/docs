---
slug: /teltonika/fmc00a/configuration
id: fmc00a-configuration
sidebar_label: Configuration
title: Teltonika - FMC00A Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for configuring the Teltonika FMC00A tracker to report to Plaspy with practical commands and server settings
keywords:
  - Teltonika FMC00A
  - FMC00A configuration
  - Teltonika configuration
  - FMC00A setup
  - FMC00A server configuration
  - Plaspy tracker setup
  - Plaspy GPS integration
  - Teltonika OBD tracker
  - vehicle tracking FMC00A
  - FMC00A Plaspy compatibility
---

# Teltonika - FMC00A Configuration

This page describes the public configuration context for using the Teltonika FMC00A tracker with the Plaspy platform. It focuses on the practical server settings and example commands that are commonly used to direct the device to Plaspy so the tracker can report location and OBD data to the platform. The guidance here is intended for technical users preparing the device for fleet visibility and platform integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer side steps can vary depending on device firmware, hardware revision, installation type, and the Teltonika tools you choose to use such as Teltonika Configurator, FOTA, FOTA WEB, or the FMBT mobile app. Use this page as a practical starting point and confirm device specific actions against the official Teltonika documentation when needed.

## Configuration Overview

The goal of this configuration is to prepare the FMC00A to communicate reliably with Plaspy so vehicle telemetry and OBD parameters become visible in the platform. Configuration centers on setting the tracker APN and network server details, selecting transport where required, and validating that the device reaches the Plaspy endpoint on the shared port.

- Point the tracker to the Plaspy server endpoint so the device sends data to the correct host.
- Configure APN and any SIM authentication needed for the device cellular connection.
- Set the transport and port to the values Plaspy expects so the server accepts incoming device data.
- Validate the device is reporting to Plaspy and visible in the platform.
- Use Teltonika provided tools or SMS commands as appropriate to your deployment and firmware.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (your device may allow choosing one)  
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol at the server.

## Typical Requirements Before Setup

- A powered and accessible FMC00A device installed in the vehicle with the OBD port available for Plug & Play connection.  
- An active cellular SIM with data enabled and correct APN settings for your mobile operator.  
- Access to the official Teltonika configuration tools or the ability to send SMS configuration commands per your installation practices.  
- Confirmation of the device firmware version and any Teltonika guidance for parameter IDs or SMS syntax for your firmware.  
- A way to monitor device connectivity and to validate the device is visible in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The FMC00A sends its telemetry and OBD-derived data to the Plaspy server endpoint configured on the device. Once the correct server, port, and transport are set, Plaspy receives the incoming messages and automatically detects the tracker protocol so the device appears in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port.  
- Device data is sent over the chosen transport (UDP or TCP) to port 8888.  
- Plaspy performs automatic protocol detection for connected trackers.  
- Successful connection enables vehicle position, OBD parameters, and event messages to appear in Plaspy.  
- If connectivity fails, validate APN and SIM status, then re-check server and port settings.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software appropriate for your device and firmware (for example Teltonika Configurator, FMBT mobile app, or SMS command interface).  
2. Enter the Plaspy server host either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server field.  
3. Set the server port to 8888 as Plaspy uses the same port for all devices.  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Configure APN and any SIM authentication parameters required by your mobile operator.  
6. Apply or save the configuration and restart the device if required by the Teltonika tooling or firmware.  
7. Validate that the device successfully reports to Plaspy and becomes visible in the platform.

## Example Configuration Commands

The following is a public example SMS style command shown in manufacturer guidance for setting key parameters. Placeholders are preserved for values you must supply.

- Example SMS command using domain name
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Example SMS command using Plaspy server IP
```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:54.85.159.138;2005:8888;2006:1
```

Notes on the placeholders and command usage:
- {{apn}} is the mobile operator APN name required for data.  
- {{apnu}} is the APN username if your operator requires one; leave empty if not used.  
- {{apnp}} is the APN password if required; leave empty if not used.  
- The command sets the device server to d.plaspy.com or the IP 54.85.159.138 and port to 8888 as shown.  
- 2006 is a transport or protocol parameter used by the device parameter set; the numeric value and valid options can vary by firmware, so confirm the exact mapping on your device's firmware documentation.  
- Send SMS commands from an authorized phone number or use Teltonika tools as appropriate for your deployment. Always verify the device acknowledges the command.

## Configuration Notes

- Teltonika parameter IDs and SMS syntax can change across firmware versions; confirm the parameter mapping for your specific firmware before applying commands.  
- When given a choice, UDP typically offers lower overhead while TCP provides connection reliability; select the transport that matches your operational needs and validate in Plaspy.  
- SMS based configuration is convenient for remote units but also use Teltonika Configurator, FMBT, or FOTA WEB for bulk or firmware aware updates.  
- Use the server domain d.plaspy.com where possible to allow DNS based failover; the IP 54.85.159.138 is available as an explicit alternative.  
- Always test a single device first and confirm the tracker appears in Plaspy before rolling changes to an entire fleet.

## Why Use Plaspy with This Configuration

Configuring the Teltonika FMC00A to report to Plaspy gives organizations a straightforward path to collect vehicle location and OBD derived parameters in a centralized platform. The shared Plaspy server settings and automatic protocol detection reduce per-device configuration complexity, helping fleets achieve faster onboarding and reliable visibility.

To learn more about Plaspy and how it integrates with trackers like the Teltonika FMC00A visit https://www.plaspy.com. For device specific configuration methods, firmware behavior, and the latest manufacturer guidance verify details on the official Teltonika site https://www.teltonika-gps.com/ as hardware and firmware can change over time.
