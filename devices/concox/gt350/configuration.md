---
slug: /concox/gt350/configuration
id: gt350-configuration
sidebar_label: Configuration
title: Concox - GT350 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox GT350 showing Plaspy server settings and common SMS GPRS commands for integration
keywords:
  - Concox GT350
  - GT350 configuration
  - Concox GT350 setup
  - GT350 Plaspy
  - GT350 server configuration
  - Concox GPS tracker configuration
  - Concox GT350 SMS setup
  - GT350 GPRS settings
  - Concox personal tracker setup
  - GT350 tracking software configuration
---

# Concox - GT350 Configuration

This page describes the public configuration context for using the Concox GT350 personal tracker with Plaspy. It gathers the practical server settings and the commonly used SMS commands published for the GT350 so you can prepare the device to report location and status to Plaspy. Use this guide together with the official Concox documentation for device specific instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GT350 supports SMS based configuration for GPRS settings and server endpoints, so this page highlights the common SMS commands and the standard Plaspy server values to apply.

## Configuration Overview

Configuring the GT350 for Plaspy prepares the tracker to establish a persistent reporting channel to Plaspy servers and to appear as an active device in the platform. The goal is to ensure correct APN and GPRS parameters, point the tracker at Plaspy, and verify reporting behavior.

- Provide the device with correct APN credentials so it can open GPRS data.
- Configure the GT350 to use Plaspy as its GPRS server using the domain or IP and the shared port.
- Set a regular reporting interval so location updates are sent to Plaspy.
- Enable GPRS on the device and verify settings via a status query.
- Validate connectivity by confirming the tracker reports to Plaspy and appears in the platform.

## Plaspy Server Settings

When configuring the GT350 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public Plaspy endpoint settings to apply in the tracker so it can reach the Plaspy ingest server.

## Typical Requirements Before Setup

- A charged GT350 with working battery and power applied.
- An active SIM card with data enabled and correct APN information for the mobile operator.
- Ability to send and receive SMS to the device for SMS based configuration (the GT350 supports SMS commands).
- Access to the official Concox instructions or vendor tool for any software based configuration steps.
- A record of the device IMEI or identifier used by Plaspy for device registration.
- Basic knowledge of choosing transport mode UDP or TCP if the device requires selection.

## How This Tracker Connects to Plaspy

The GT350 is configured to report location and device events to the Plaspy server endpoint and uses the shared Plaspy port so the platform can receive and interpret telemetry. Plaspy's automatic protocol detection removes the need to select a protocol in many cases, but the tracker must be pointed at the correct domain or IP and port.

- The tracker opens a GPRS connection using the operator APN and then connects to the configured Plaspy server.
- Location updates are sent at the configured TIMER interval to the Plaspy endpoint.
- Plaspy receives messages on port 8888 and identifies the device protocol automatically.
- Events such as SOS or geofence crossings are transmitted to the platform once the device is online.
- Administrators can confirm device visibility within Plaspy after successful configuration.

## Common Configuration Workflow

1. Access the official Concox SMS or software configuration method as documented by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the SERVER command.
3. Set port 8888 for the device server entry.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure the APN for your mobile operator and enable GPRS on the GT350.
6. Apply or save the configuration and restart the device if recommended by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform, using the GPRSSET verification command or Plaspy device activity.

## Example Configuration Commands

The GT350 supports SMS based configuration. Below are the common public commands published for the device. Preserve placeholders such as [apn], [apnu], and [apnp] when applying your operator credentials.

- Optional initial factory reset (use only if you need to restore defaults):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn], [apnu], [apnp] with your operator APN, username, and password if required. If no username or password are needed, include only the APN.
```text
APN,[apn]{{apnu ? ',[apnu]' : ''}}{{apnp ? ',[apnp]' : ''}}#
```
(Practical example if only APN is required)
```text
APN,internet#
```

- Set the GPRS server using the Plaspy domain and port:
```text
SERVER,1,d.plaspy.com,8888,0#
```
Alternatively use the Plaspy server IP:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds. The device accepts either of the following forms:
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode:
```text
GPRSON,1#
```

- Check current GPRS parameter settings:
```text
GPRSSET#
```

Notes on placeholders and usage:
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] and [apnp] are optional APN username and password placeholders when the operator requires credentials.
- The SERVER command examples show both the domain (d.plaspy.com) and the numeric IP (54.85.159.138). Either form is acceptable for pointing the tracker to Plaspy, and both use port 8888.

## Configuration Notes

- Model firmware and regional variants can change command behavior; confirm exact command syntax in your device manual or from Concox support.
- This GT350 configuration is SMS based in the published example, so ensure the SIM can receive and send SMS and has data enabled for GPRS.
- Choose UDP or TCP according to installer preference or device requirement. Plaspy supports both and will detect the protocol automatically.
- Use the SERVER commands shown above to point the tracker to d.plaspy.com or 54.85.159.138 and always set port 8888 since Plaspy uses the same port for all devices.
- Keep APN credentials up to date and verify them with the mobile operator before troubleshooting connectivity.

## Why Use Plaspy with This Configuration

Using the Concox GT350 with Plaspy gives organizations an easy way to consolidate personal tracker telemetry into a single platform for monitoring, alerts, and operational oversight. Configuring the device to report to Plaspy via the shared server settings makes it straightforward to bring GT350 devices online and visible in the platform.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and technical specifications please verify setup details on the manufacturer site https://www.iconcox.com/ as methods and behavior can change with firmware or hardware revisions.
