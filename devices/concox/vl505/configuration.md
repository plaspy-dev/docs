---
slug: /concox/vl505/configuration
id: vl505-configuration
sidebar_label: Configuration
title: Concox - VL505 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox VL505 for use with Plaspy including server settings SMS commands and a practical setup checklist
keywords:
  - Concox VL505 configuration
  - Concox VL505 setup
  - VL505 Plaspy integration
  - VL505 GPS tracker configuration
  - Concox VL505 server setup
  - VL505 OBD II tracker configuration
  - Plaspy tracker setup
  - Concox GPS tracker configuration
  - VL505 SMS configuration
  - Fleet tracking VL505
---

# Concox - VL505 Configuration

This page documents the public configuration context for using the Concox VL505 tracker with Plaspy. It focuses on the practical server settings, SMS configuration commands, and setup workflow you can use to prepare the VL505 to report location and events to Plaspy. Where available we include example SMS commands and verification steps that are part of the public configuration method.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to accept connections. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The VL505 supports remote configuration by SMS or cloud platforms, so this guide covers the common, public steps to point the device at Plaspy and validate connectivity.

## Configuration Overview

Preparing the VL505 for use with Plaspy is primarily about configuring the device to send GPRS reports to Plaspy's shared server endpoint and confirming the tracker successfully registers on the platform. The VL505 supports SMS configuration commands, which are commonly used to set the APN, server address, transport, reporting interval, and GPRS mode.

- Configure APN and GPRS parameters so the device can establish a cellular data session.
- Set the GPRS server to Plaspy using the provided domain or IP and the shared port.
- Choose UDP or TCP transport if required by the device and save the settings.
- Set a reporting interval suitable for your use case and enable GPRS operation.
- Verify settings with a device query command and confirm the tracker is visible in Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the VL505 to report to Plaspy. Plaspy uses the same port for all devices and will automatically detect the tracker protocol when the device connects.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are both supported on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Vehicle access to connect the VL505 to the OBD II port or to confirm the device has power.
- Active data connectivity for the device via a valid SIM or eSIM with a configured APN.
- Access to an SMS capable phone or manufacturer tool to send configuration SMS commands if using SMS provisioning.
- Knowledge of the operator APN and optional APN username and password for the SIM.
- Access to the official Concox documentation or installer tool for model specific guidance and firmware notes.
- A Plaspy account or platform access to confirm the device appears and reports correctly after configuration.

## How This Tracker Connects to Plaspy

The VL505 is configured to send position and event data over cellular data to Plaspy's shared server endpoint and port. Once the device has a valid data session and the server settings are applied, the tracker will stream location updates and event messages so Plaspy can ingest and display them.

- The device reports to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- All device connections use port 8888 on the Plaspy side.
- You can configure the tracker to use UDP or TCP transport on port 8888 depending on device requirements.
- Plaspy automatically detects the device protocol when the tracker connects to the server.
- Position updates, movement events, and configured alerts are transmitted to Plaspy for real time visibility and historical replay.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL505 such as SMS commands or the vendor installer tool documented by Concox.
2. Enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 when setting the GPRS server on the tracker.
3. Set the GPRS server port to 8888 and ensure the device is configured to use port 8888 for reporting.
4. Choose UDP or TCP transport if your device requires an explicit transport selection.
5. Enter the operator APN and any optional APN username and password required by the SIM.
6. Apply or save the configuration and restart the device if the tracker or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by querying device settings and confirming the tracker appears and sends position data in the Plaspy platform.

## Example Configuration Commands

The VL505 supports SMS based configuration. Below are the public SMS commands in the order shown in the manufacturer configuration content. Send these SMS messages from an authorized phone number to the device IMEI as required by Concox. Label the factory reset as optional or initial setup only when needed.

- Optional initial factory reset
```text
FACTORY#
```

- Set time zone to UTC 0
```text
GMT,E,0#
```

- Set the APN for the operator
```text
APN,[apn]#
```
Or include optional APN username and password
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator APN. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server using the Plaspy domain (recommended by name)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using the Plaspy IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Or alternate timer format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS parameter settings
```text
GPRSSET#
```

Use these commands in the sequence appropriate for your deployment. The SERVER command examples show both domain and IP options and explicitly use port 8888. The APN command retains placeholders for operator specific values.

## Configuration Notes

- Concox firmware versions and regional hardware variants can change the exact SMS syntax or available parameters; always confirm with the device documentation from Concox.
- SMS based configuration is supported and commonly used for VL505 provisioning, but vendor tools or cloud provisioning systems may also be available.
- Choose UDP or TCP based on network reliability and any guidance in Concox documentation; both transports are accepted by Plaspy on port 8888.
- When using the domain d.plaspy.com the tracker relies on DNS resolution from the device SIM network; using the IP 54.85.159.138 avoids DNS but either option points the device to Plaspy on port 8888.
- Keep APN credentials secure and verify optional APN username and password placeholders before sending SMS commands.

## Why Use Plaspy with This Configuration

Using the VL505 configured to report to Plaspy provides organizations with real time location, event alerts, and historical playback for vehicles and assets. The VL505's plug and play OBD II form factor and support for SMS or cloud provisioning make it straightforward to deploy at scale, while directing data to Plaspy allows fleet managers to centralize monitoring, notifications, and analytics.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the latest device specific configuration details firmware notes and regional variant information verify setup instructions on the manufacturer site https://www.iconcox.com/.
