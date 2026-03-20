---
slug: /concox/gt06n/configuration
id: gt06n-configuration
sidebar_label: Configuration
title: Concox - GT06N Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox GT06N integration with Plaspy including server settings and example SMS commands
keywords:
  - Concox GT06N configuration
  - Concox GT06N setup Plaspy
  - Concox GT06N server configuration
  - GT06N SMS configuration
  - GT06N GPRS setup
  - GT06N APN settings
  - vehicle tracker configuration
  - fleet tracking Plaspy
  - GPS tracker GT06N
  - Concox GT06N manual
---

# Concox - GT06N Configuration

This page documents the public configuration context for using the Concox GT06N with Plaspy. It focuses on the server settings and practical setup steps that enable the tracker to report location and status to Plaspy, and includes example SMS commands that are commonly used to configure GT06N units for GPRS reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the commands and workflow below as practical guidance and verify device-specific details with Concox documentation when needed.

## Configuration Overview

Configuring a GT06N for Plaspy prepares the device to send GNSS position, input status and alarm events to the Plaspy server endpoint so vehicles become visible and reportable inside the platform. Where applicable the device is typically configured by SMS commands or by the official Concox configuration method provided by the vendor.

- Point the tracker to the Plaspy server endpoint so device data is routed to Plaspy for live tracking.
- Configure APN and GPRS parameters so the tracker can establish a cellular data session for reporting.
- Set reporting interval and GPRS mode so position updates arrive at the expected frequency.
- Validate connectivity with a verification command and confirm the device appears in Plaspy.
- Optionally, reset or restore factory settings before a fresh configuration when appropriate.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and installed GT06N with vehicle power or bench power applied.
- A valid cellular SIM card with data enabled and the correct APN for the mobile operator.
- Access to the official Concox configuration method or the device SMS control channel.
- Knowledge of the Plaspy server settings: d.plaspy.com or 54.85.159.138 and port 8888.
- A test plan to verify reporting to Plaspy after configuration, including checking for device visibility in the platform.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy the GT06N establishes GPRS connectivity and sends position, status and alarm messages to the shared Plaspy server endpoint and port. Plaspy ingests those messages and displays them in real time while applying rules and alerts configured in the platform.

- The tracker uses configured GPRS/APN settings to open a data session and transmit messages.
- Device telemetry and event notifications are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Messages may be sent over UDP or TCP depending on device configuration and transport selection.
- Plaspy automatically detects the device protocol so the same Plaspy endpoint and port work for supported tracker models.
- Once reporting starts, vehicle position, input states and alarm events become visible and actionable in Plaspy.

## Common Configuration Workflow

1. Access the official Concox configuration method or confirm the SMS command format for your GT06N firmware.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888.
4. Choose UDP or TCP if the tracker requires a transport selection (both are supported by Plaspy).
5. Configure the APN and enable GPRS mode so the device can use cellular data for reporting.
6. Apply or save the configuration on the tracker and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking device visibility in the platform and using the device verification command.

## Example Configuration Commands

The GT06N can be configured using SMS commands. The following public commands are presented in the original order as common configuration steps. Send each line as an SMS message to the device SIM number.

1. (Optional) Reset to factory settings — use this only when you need a clean configuration:
```text
FACTORY#
```

2. Set the time zone to UTC+0:
```text
GMT,E,0#
```

3. Set the operator APN:
```text
APN,[apn]#            (or include username/password if required)
APN,[apn],[apnu],[apnp]#
```
- [apn] is the mobile operator APN string.
- [apnu] is the APN username placeholder if your operator requires it.
- [apnp] is the APN password placeholder if your operator requires it.

4. Set the GPRS server to point to Plaspy by domain (preferred readable form):
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP:
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds (two common variants):
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

6. Enable GPRS mode:
```text
GPRSON,1#
```

7. Verify current GPRS and server parameters:
```text
GPRSSET#
```

Send these commands in the order shown when setting up from factory or rebuilding configuration. Only use FACTORY# when a full reset is necessary.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS command syntax or available parameters; consult Concox documentation for firmware-specific details.
- The GT06N example above uses SMS-based configuration and GPRS reporting; some installations may use Concox configuration tools instead.
- Choosing TCP or UDP affects transport characteristics; Plaspy accepts either and automatically detects the device protocol on port 8888.
- Plaspy uses the same port for all supported devices and will accept connections directed to d.plaspy.com or 54.85.159.138 on port 8888.
- Always confirm APN credentials and operator requirements before enabling GPRS to avoid connectivity issues.

## Why Use Plaspy with This Configuration

Using the Concox GT06N with Plaspy provides a straightforward path to real-time vehicle visibility, event-driven alerts and historical playback for fleet operations. With the GT06N reporting GNSS position, input states and alarm events to Plaspy, operations teams can monitor vehicle location, respond to incidents such as SOS alerts or power-off events, and apply platform rules for efficient dispatch and security workflows.

To learn more about Plaspy and how the platform ingests and displays tracker data visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest information on the official Concox website https://www.iconcox.com/.
