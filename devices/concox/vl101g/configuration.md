---
slug: /concox/vl101g/configuration
id: vl101g-configuration
sidebar_label: Configuration
title: Concox - VL101G Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance to configure the Concox VL101G tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - Concox VL101G configuration
  - Concox VL101G setup
  - VL101G server configuration
  - VL101G GPS tracker setup
  - Concox GPS tracker Plaspy
  - VL101G telematics configuration
  - vehicle tracker configuration
  - fleet management tracker setup
  - GPS platform setup
  - VL101G SMS configuration
---

# Concox - VL101G Configuration

This page covers the public configuration context for using the Concox VL101G tracker with Plaspy. It explains the shared Plaspy server settings you must apply on the device and provides practical SMS command examples from the manufacturer style configuration sequence where available. Use this as a configuration reference for integrating the VL101G with the Plaspy platform.

Plaspy relies on a single shared server endpoint and port for supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the VL101G can vary by firmware version, hardware revision, installation type, and vendor tools, so confirm device specific details with the official Concox documentation when necessary.

## Configuration Overview

The configuration process prepares the VL101G so it can send GNSS fixes, telemetry and input/output events to Plaspy reliably over cellular networks. For this model the common configuration path uses SMS or the manufacturer configuration tool to set APN, server information, message timers, and to enable GPRS reporting.

- Configure the device APN so the VL101G can establish a GPRS data connection.
- Point the tracker to the Plaspy server using the shared server domain or IP and the common port.
- Set the reporting timer so the device uploads location and telemetry at the desired interval.
- Enable GPRS data reporting and verify transport mode if the device requires selecting UDP or TCP.
- Validate connectivity and device reporting to ensure the tracker appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered VL101G installed or temporarily powered for configuration.
- An active Micro SIM card with a data plan and SMS capability and a known APN.
- Access to the manufacturer configuration method for this unit such as SMS commands or Concox configuration software.
- Knowledge of the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888.
- A Plaspy account and device registration workflow ready to accept the tracker feed on the platform.
- Basic tools to send SMS to the device or access to a configuration terminal depending on installer preference.

## How This Tracker Connects to Plaspy

When configured the VL101G uses its cellular link to open a data session to the Plaspy endpoint and then delivers GNSS positions and telemetry at the configured intervals. Plaspy ingests the incoming traffic on the shared endpoint and port, automatically recognizing the device protocol so no per device protocol selection is required on the server side.

- The VL101G reports GNSS fixes and time stamped telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and I O event states such as ignition or digital input events are forwarded to Plaspy for alerts and history.
- Reporting interval is controlled on the device so Plaspy receives updates at the configured frequency.
- The device can use either UDP or TCP transport to send its messages depending on installer preference or firmware options.
- Plaspy automatically detects the tracker protocol so the device can be sent to the shared server endpoint without custom protocol registration.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL101G such as SMS commands or the manufacturer software.
2. Set the device APN using the operator APN value required by your SIM provider.
3. Enter d.plaspy.com or the server IP 54.85.159.138 as the GPRS server and set port 8888.
4. Choose UDP or TCP if the VL101G firmware requires a transport selection for GPRS reporting.
5. Apply or save the configuration and enable GPRS reporting on the device.
6. Restart the device if required by firmware or after applying server changes.
7. Validate that the tracker is reporting to Plaspy and that positions and events are visible in the platform.

## Example Configuration Commands

The following SMS commands are a public example sequence for setting up the VL101G. Preserve the placeholders when you send commands and replace [apn] [apnu] and [apnp] with your operator values as needed. Note that the initial reset command is optional and should be used only when you intend to restore factory defaults.

1. Optional factory reset
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
Replace [apn] with your APN. If your provider requires username and password include [apnu] and [apnp] respectively.
```
APN,[apn]# 
```
Or with username and password placeholders
```
APN,[apn],[apnu],[apnp]#
```

4. Set the GPRS server using Plaspy domain on port 8888 (UDP or TCP is selectable on device if required)
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the server by IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the location update interval to every 60 seconds
```
TIMER,60#
```
Or alternative format
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

Verification command to check current parameter settings
```
GPRSSET#
```

These commands are presented in the order commonly used for initial setup. Replace placeholders with your operator values and remember that Plaspy accepts the device feed at d.plaspy.com or 54.85.159.138 on port 8888 and will detect protocol automatically.

## Configuration Notes

- Concox firmware revisions or regional hardware variants can change available SMS commands or parameter formats. Confirm the exact command syntax with the official Concox reference.
- The VL101G supports both UDP and TCP reporting where firmware exposes transport selection. Choose the transport that matches your network and firewall requirements. Plaspy supports both and auto detects the protocol.
- SMS based configuration is widely used in field installs but manufacturer tools or USB configuration may also be available depending on the device batch and firmware.
- Keep APN credentials and SIM provisioning details ready before sending server configuration commands to avoid connectivity delays.
- After applying settings, validate device appearance and telemetry in Plaspy to ensure timers and event reporting are configured as expected.

## Why Use Plaspy with This Configuration

Using the VL101G with Plaspy provides a straightforward path to bring high accuracy GNSS position data, vehicle telemetry, and input event reporting into a single fleet management platform. With the shared Plaspy server endpoint and automatic protocol detection, installers can standardize device feeds and streamline onboarding across fleets using the same port and server settings.

Learn more about Plaspy and how it handles device integration at https://www.plaspy.com. For the latest device specific instructions, firmware notes and command syntax confirm details with the official Concox documentation at https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so always verify the current documentation before finalizing an installation.
