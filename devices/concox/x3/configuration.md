---
slug: /concox/x3/configuration
id: x3-configuration
sidebar_label: Configuration
title: Concox - X3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox X3 tracker integration with Plaspy server settings and SMS commands
keywords:
  - Concox X3 configuration
  - Concox X3 setup
  - Concox X3 Plaspy
  - X3 server configuration
  - X3 GPS tracker setup
  - Concox tracker configuration
  - Plaspy GPS configuration
  - vehicle tracking setup
  - fleet tracker configuration
  - GPRS tracker setup
---

# Concox - X3 Configuration

This page documents the public configuration context for using the Concox X3 tracker with Plaspy. It explains the shared server settings Plaspy requires and provides practical SMS configuration commands and workflow guidance taken from public device setup content for the X3.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The examples below show how to point an X3 at the Plaspy endpoint and validate connectivity using the publicly available SMS commands.

## Configuration Overview

This configuration process prepares a Concox X3 to report GNSS positions and telemetry to Plaspy and ensures the tracker is visible and manageable inside the Plaspy platform. The practical steps center on setting APN and server parameters, enabling GPRS, and confirming reporting intervals so the device reliably delivers location and event data.

- Configure the device to use the correct mobile operator APN so it can establish GPRS data.
- Set the Plaspy server endpoint and port so the X3 sends telemetry to the Plaspy ingestion point.
- Enable GPRS reporting and an appropriate update interval to match your monitoring needs.
- Validate settings and verify the device is reporting to Plaspy so the vehicle appears on dashboards.
- Optionally reset to factory defaults before a fresh configuration if you are commissioning a used device.

## Plaspy Server Settings

Use these Plaspy server settings when configuring the X3. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (configure whichever the device requires)
- Plaspy automatically detects the tracker protocol so you do not need to specify a custom protocol identifier

## Typical Requirements Before Setup

- A fitted SIM card with active data and SMS capability and enough credit or a data plan for telemetry.
- Access to the X3 configuration method provided by the manufacturer such as SMS commands or a vendor tool.
- The correct APN information for the mobile operator to enable GPRS; placeholders may be used in commands.
- Stable power to the device and any accessories needed for installation and testing.
- A mobile phone or SMS gateway able to send configuration SMS messages to the tracker if using SMS-based setup.
- Knowledge of the target Plaspy server settings shown above so you can enter them during configuration.

## How This Tracker Connects to Plaspy

The X3 transmits GNSS positions and vehicle telemetry over GSM GPRS to the Plaspy server endpoint and port. Once configured to point at Plaspy, the device sends regular location updates and event reports that Plaspy ingests and displays on maps, alerts, and reports.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888.
- The tracker sends periodic position updates based on the configured timer interval so Plaspy can show live movement.
- Event and status signals such as ignition, SOS, inputs, and driving-behavior events are forwarded to Plaspy for alerting and workflows.
- Plaspy receives the telemetry over either UDP or TCP depending on the tracker transport selection.
- Remote control actions such as relay immobilizer commands can be executed from Plaspy once two-way communication is confirmed.

## Common Configuration Workflow

1. Access the official Concox configuration method, typically SMS commands or the manufacturer tool, to prepare the X3 for commissioning.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as provided by Plaspy.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires you to select one.
5. Configure the operator APN and enable GPRS so the device can connect to the mobile data network.
6. Apply or save the settings on the device and restart it if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform by confirming position updates and event messages.

## Example Configuration Commands

The Concox X3 supports SMS-based configuration. The following public commands are shown in the order useful for initial setup. Keep placeholders as provided and replace them with your operator values when required.

- Optional factory reset (use when performing an initial provisioning on a device that needs clean settings):
```
FACTORY#
```

- Set the time zone to UTC 0 (example):
```
GMT,E,0#
```

- Set the mobile operator APN. Replace {{apn}} with your operator APN. If your operator requires username or password use {{apnu}} and {{apnp}} respectively:
```
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Note: The bracketed comma and placeholders indicate the optional username and password fields. Use the exact format required by your device firmware (for example APN,myoperator,username,password#).

- Set the GPRS server to the Plaspy domain (UDP or TCP transport selection happens on device if required):
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server to the Plaspy IP address:
```
SERVER,0,54.85.159.138,8888,0#
```
These two commands illustrate using the domain or the direct IP. The last parameter may be a mode flag depending on firmware; use manufacturer guidance.

- Set the update/reporting interval to every 60 seconds (two common syntax variants shown):
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode:
```
GPRSON,1#
```

- Check configured GPRS parameters (verification command):
```
GPRSSET#
```

When sending SMS commands, ensure you use the format expected by the device firmware and include terminating characters if required by your SMS tool. Replace placeholders with your actual APN credentials.

## Configuration Notes

- Commands above are public SMS commands; exact syntax and required parameters can vary by firmware revision. Confirm syntax against the Concox X3 manual for your firmware.
- The X3 supports both SMS-based and vendor tool configuration in many deployments. Use SMS for quick field provisioning or vendor software for bulk or secure provisioning.
- Choose TCP or UDP transport according to the installation or operator guidance; Plaspy supports both and will auto-detect the protocol used by the device.
- Plaspy uses the same port for all supported devices. Set port 8888 in the device so it can send data to the Plaspy ingest endpoint.
- When using placeholders such as {{apn}}, {{apnu}}, or {{apnp}}, replace them with the operator APN, APN username, and APN password respectively as required by your SIM provider.

## Why Use Plaspy with This Configuration

Using the Concox X3 with Plaspy provides organizations with real-time vehicle visibility, event monitoring, and a platform for operational workflows such as geofencing, alerts, and remote immobilization. The X3's telemetry and I/O capabilities feed Plaspy dashboards so fleet managers can respond quickly to incidents and review historical behavior to improve safety and efficiency.

To learn more about Plaspy and how it handles device connections and fleet workflows, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and detailed installation instructions, verify configuration details on the manufacturer site https://www.iconcox.com/ as specifications and setup methods can change over time.
