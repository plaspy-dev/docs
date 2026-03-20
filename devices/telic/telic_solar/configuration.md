---
slug: /telic/telic_solar/configuration
id: telic_solar-configuration
sidebar_label: Configuration
title: Telic - Telic Solar Configuration
sidebar_class_name: menu_item_tracker
description: Configure Telic Solar to report to Plaspy using shared server settings and SMS based commands for reliable asset tracking
keywords:
  - Telic Solar configuration
  - Telic Solar setup
  - Telic Solar Plaspy
  - Telic GPS tracker configuration
  - Telic Solar server configuration
  - Telic Solar SMS setup
  - Telic asset tracker setup
  - Telic Solar platform setup
  - Telic Solar tracker guide
  - Telic device configuration
---

# Telic - Telic Solar Configuration

This page covers the public configuration context for using the Telic Solar tracker with the Plaspy platform. It explains the shared Plaspy server settings you need to apply and summarizes the practical SMS‑based commands commonly used to point a Telic Solar device at Plaspy. The Telic Solar device description is the primary grounding for this guide and highlights its suitability for long term asset tracking with solar power and interior sensor telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; the Telic Solar commonly accepts SMS configuration commands and uses GPRS parameters such as APN and a GPRS server entry to forward data to Plaspy. Use the content here as practical, public guidance and verify device specific details with official Telic documentation when needed.

## Configuration Overview

This configuration prepares a Telic Solar device to send its location and sensor telemetry into Plaspy using the platform's shared server endpoint and port. The goal is to set APN and GPRS server parameters, choose the transport option if required, and validate that the device is reporting correctly to Plaspy so the asset becomes visible in the platform.

- Set mobile network APN and optional APN credentials so the device can establish a GPRS session.
- Configure the device to report to Plaspy by entering the Plaspy server endpoint and port.
- Choose UDP or TCP transport if the tracker requires an explicit transport selection.
- Enable GPRS reporting mode on the device and verify connectivity.
- Confirm the device appears and reports data in Plaspy so dashboards and alerts can consume its telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint and port that Telic Solar devices should be pointed at when forwarding telemetry to Plaspy. Plaspy uses the same port for all supported devices and performs automatic protocol detection on incoming connections.

## Typical Requirements Before Setup

- A powered and accessible Telic Solar device with SMS command reception enabled.
- A working SIM card with a data plan and correct APN details for the mobile operator.
- Knowledge of the device configuration method supported by the unit you have (SMS is commonly used for Telic Solar).
- The device default password if required by commands (the sample configuration uses 123456 as the device password).
- A mobile phone or management tool capable of sending SMS commands to the device.
- Access to the Telic product documentation for firmware specific instructions and safety settings.

## How This Tracker Connects to Plaspy

Telic Solar is configured to forward its telemetry and location to the shared Plaspy server endpoint and port so Plaspy can ingest and display the data. On the device side this typically means setting APN credentials, configuring the server address, and enabling GPRS reporting so the device opens a data session and delivers packets to Plaspy.

- The device makes a GPRS connection using the configured APN to reach the internet.
- A GPRS server entry is set to point to Plaspy using the server IP or domain and port 8888.
- The device uses either UDP or TCP to send packets; pick the transport required by your device and network.
- Plaspy receives the connection on port 8888 and automatically detects the tracker protocol to parse messages.
- Once reporting is active, Plaspy shows location, internal sensor telemetry, and energy status for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Telic configuration method for your unit (SMS commands are commonly used for Telic Solar).
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 in the server configuration.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Set the APN and optional APN username and password so the device can open a GPRS data session.
6. Apply or save the configuration and, if required, restart the device to activate new settings.
7. Validate that the device is reporting to Plaspy and visible in the platform.

## Example Configuration Commands

The Telic Solar commonly accepts SMS configuration commands. The following sample SMS commands are public examples extracted from the device configuration guidance. The sample commands use the device default password 123456. Preserve and replace placeholders such as [apn], [apnu], and [apnp] with your operator values.

1. Optional initial factory reset (only if you need to return to factory defaults)
```text
begin123456
```

2. Set the time zone to UTC 0
```text
time zone123456 0
```

3. Set the operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

4. Set the APN username and password when required (replace placeholders)
```text
up123456 [apnu] [apnp]
```

5. Set the GPRS server to Plaspy by IP and port (this example uses the public Plaspy IP and port)
```text
adminip123456 54.85.159.138 8888
```

6. Switch to GPRS mode (two common variants)
```text
gprs123456,1,1
```
or
```text
gprs123456
```

7. Check current device settings
```text
check123456
```

Notes on placeholders:
- [apn] is the APN string supplied by the cellular operator.
- [apnu] and [apnp] are the optional APN username and password respectively.
- 123456 is shown as the sample default device password in the public example; confirm your device password before sending commands.

## Configuration Notes

- SMS based configuration is commonly used for Telic Solar but manufacturer tools or firmware may also offer other methods; follow the official Telic instructions for your firmware.
- Keep in mind firmware and hardware revisions may change command syntax or available features; verify command support for your device revision.
- Choose UDP or TCP according to network reliability and operator behavior; Plaspy supports both transports and will accept data on port 8888.
- Plaspy uses the same port for all supported devices and performs automatic tracker protocol detection, so pointing the device to either d.plaspy.com or the Plaspy IP with port 8888 is sufficient in most setups.
- When using reset commands, treat factory reset as optional and only perform it when required as it may erase customized settings.

## Why Use Plaspy with This Configuration

Using Telic Solar with Plaspy gives organizations persistent visibility into mobile capital goods and containerized assets while minimizing maintenance thanks to the device's solar powered design. Configuring the device to report to Plaspy with the shared server endpoint and port enables consolidated dashboards, alerts, and historical reports that combine location, interior sensor telemetry, and energy status for operational insight.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time; verify the latest Telic Solar setup information on the official manufacturer website https://www.telic.de.
