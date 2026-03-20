---
slug: /eelink/tk419_3/configuration
id: tk419_3-configuration
sidebar_label: Configuration
title: EElink - TK419‑3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK419‑3 showing Plaspy server settings, SMS commands, and practical setup steps for integration
keywords:
  - EElink TK419‑3 configuration
  - EElink TK419 setup Plaspy
  - TK419‑3 server configuration
  - EElink GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet management tracker
  - TK419‑3 SMS commands
  - EElink tracker integration
  - GPS tracker platform setup
---

# EElink - TK419‑3 Configuration

This page covers the public configuration context for using the EElink TK419‑3 with Plaspy. It explains the practical, published settings and SMS commands commonly used to point the device to the Plaspy server so the tracker can report location, I/O events, and alarms into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this guide focuses on the public parameters and the common SMS command flow used to prepare the TK419‑3 for Plaspy integration.

## Configuration Overview

This configuration process prepares the TK419‑3 to communicate reliably with Plaspy using the platform endpoint and port. The steps below cover the practical goals of the setup and what you should validate before expecting data in Plaspy.

- Configure the device to use Plaspy as its GPRS/TCP or UDP server endpoint so GNSS and telemetry are delivered to Plaspy.
- Set the correct APN and optional credentials so the device can establish a mobile data connection.
- Choose transport (UDP or TCP) and confirm the device is pointed to the Plaspy server endpoint and port that Plaspy uses for all devices.
- Set a reporting interval appropriate for your use case and battery or data constraints.
- Verify settings and connectivity with the device manufacturer tools or SMS commands and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the TK419‑3 may be configured to use either transport
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so the TK419‑3 should be pointed to port 8888 for platform compatibility

## Typical Requirements Before Setup

- A powered TK419‑3 installed or on a bench supply within its operating voltage range
- A valid SIM card with mobile data and SMS enabled and APN details from the network operator
- Access to the manufacturer configuration method for this model (SMS commands are supported for TK419‑3)
- The correct APN values and optionally APN username and password provided by your carrier
- A Plaspy account and device registration workflow available to confirm the device appears in the fleet
- A telephone or SMS tool capable of sending the SMS configuration commands if you use SMS based setup

## How This Tracker Connects to Plaspy

The TK419‑3 is configured to report GNSS fixes, I/O states, and alarms to the Plaspy server endpoint and port so the platform can ingest and visualize data. Once pointed at Plaspy, the device sends periodic updates and event-driven reports to the shared Plaspy endpoint.

- The tracker is set to send data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Plaspy receives the incoming connection and automatically detects the tracker protocol
- Location updates and telemetry are processed into map updates, alerts, and historical reports in Plaspy
- The device can report on ignition, alarms, and other supported events so they appear in the platform
- Using the correct APN ensures the tracker can establish GPRS or LTE data to reach the Plaspy endpoint

## Common Configuration Workflow

1. Access the official EElink TK419‑3 configuration method. For this model, SMS configuration is a published option or use EElink vendor tools if available.
2. Enter the Plaspy server host by sending the SERVER command using either d.plaspy.com or 54.85.159.138.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure the APN and optional credentials for the installed SIM so the device can connect to mobile data.
6. Apply and save the configuration and restart the device if required by the tracker firmware.
7. Validate that the TK419‑3 reports to Plaspy by checking device activity in your Plaspy account and using the PARAM verification command where available.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the shown order. Preserve the placeholders when sending APN related commands.

- Optional initial factory reset
```text
FACTORY#
```
- Set the time zone to UTC 0 (example)
```text
GMT,E,0#
```
- Set the operator APN. Replace the placeholders as needed:
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
Explanation: [apn] is your carrier APN. [apnu] and [apnp] are optional APN username and password fields and may be omitted if not required by the operator.

- Set the GPRS server using the Plaspy domain and port
```text
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server using the Plaspy server IP and port
```text
SERVER,0,54.85.159.138,8888#
```
Note: Either the domain or the IP may be used. Plaspy uses port 8888 for all supported devices and automatically detects the protocol.

- Set the update interval to every 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```

Follow the command order when performing an initial configuration. Label the FACTORY# command as optional and only use it if a factory reset is needed before reconfiguration.

## Configuration Notes

- SMS based configuration is a published option for this device; manufacturer tools or an OTA configuration utility may also be available depending on the vendor.
- Firmware revisions and hardware variants can change command syntax or available parameters. Confirm the exact command format with EElink documentation for your firmware version.
- TCP and UDP are both supported; choose the transport required by your network and operations team. Plaspy will detect the tracker protocol automatically.
- Ensure APN credentials are correct before setting the server; missing or incorrect APN settings prevent the device from reaching d.plaspy.com or 54.85.159.138.
- All devices in Plaspy use the same port 8888 so use that port when configuring the TK419‑3.

## Why Use Plaspy with This Configuration

Using the TK419‑3 with Plaspy provides centralized visibility for location, I/O events, and alarms so fleet operators can monitor assets in real time, configure alerts, and review historical telemetry. The combination of multi constellation GNSS and remote configuration options makes the TK419‑3 suitable for fleet tracking, anti theft workflows, and sensor telemetry when integrated into a platform like Plaspy.

To learn more about Plaspy visit https://www.plaspy.com and review the manufacturer for the latest device details at https://www.eelink.com.cn/. Device specific setup methods, firmware behavior, and manufacturer options can change over time so verify the current instructions on the official EElink website.
