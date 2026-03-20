---
slug: /eelink/gpt45/configuration
id: gpt45-configuration
sidebar_label: Configuration
title: EElink - GPT45 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT45 tracker integration with Plaspy server settings and SMS commands
keywords:
  - EElink GPT45 configuration
  - EElink GPT45 setup
  - GPT45 server configuration
  - GPT45 Plaspy integration
  - GPS tracker configuration
  - Plaspy tracker setup
  - EELINK GPT45 SMS commands
  - Fleet tracking setup
  - Vehicle tracking configuration
  - GPS device configuration
---

# EElink - GPT45 Configuration

This page documents the public configuration context for using the EElink GPT45 GPS tracker with Plaspy. It collects the practical server settings and SMS commands that are commonly used to point GPT45 devices to Plaspy for real-time tracking and telemetry. Use this guide to prepare devices for integration and to understand the basic steps required to get a device reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. All Plaspy devices use the same server port, so the configuration below centers on those shared values while also showing the GPT45 SMS commands that are commonly available for device-side setup.

## Configuration Overview

This configuration process prepares a GPT45 tracker to communicate with Plaspy by setting network parameters, server endpoint, and reporting interval. The practical goal is to enable the device to authenticate on the mobile network, reach the Plaspy endpoint, and begin sending location and sensor data so the device appears in the Plaspy platform.

- Configure the device APN so it has GPRS data access.
- Set the Plaspy server endpoint (domain or IP) and the shared Plaspy port.
- Choose transport (UDP or TCP) if required by the device and save the setting.
- Define a reporting interval appropriate for the use case and battery life.
- Validate settings with a parameter check and confirm the device appears in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GPT45. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A charged GPT45 device with access to its SMS configuration method or manufacturer configuration tool.
- An active mobile SIM card with data and SMS capability configured with the correct APN for the operator.
- Access to a phone or SMS gateway able to send SMS configuration commands to the tracker.
- Knowledge of any device-specific login or configuration password if required by your firmware or vendor tool.
- A Plaspy account and device registration workflow available in your Plaspy instance to validate the device once it reports.
- Basic understanding of whether you will use UDP or TCP transport depending on your deployment needs.

## How This Tracker Connects to Plaspy

The GPT45 is configured to report its position and telemetry to the shared Plaspy server endpoint and port so Plaspy can process and display real-time location and sensor data. Once server and APN settings are applied, the device will open a data session and begin sending messages that Plaspy will parse using automatic protocol detection.

- The device sends GNSS fixes and fallback location data to the configured Plaspy endpoint.
- Event and alarm messages (for example collision or speed alarms) are forwarded to Plaspy for alerts and rule processing.
- Environmental and sensor telemetry is transmitted so Plaspy can archive and surface readings.
- The device can use either UDP or TCP transport to reach d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy’s automatic protocol detection handles the device protocol once messages reach the server.

## Common Configuration Workflow

1. Access the official EElink configuration method for GPT45 (SMS commands, manufacturer tool, or authorized software).
2. Ensure the SIM and APN are set so the device has mobile data access.
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and restart the device if required.
6. Validate the device using the PARAM# or equivalent verification command and confirm it reports to Plaspy.
7. Check the Plaspy platform to ensure the device appears and is sending location and sensor data.

## Example Configuration Commands

The GPT45 supports SMS-based configuration. Below are the public SMS commands commonly used for initial setup. Preserve the placeholders when substituting your operator APN credentials.

- Reset to factory defaults (optional initial step):
```text
FACTORY#
```

- Set the time zone to UTC+0:
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] with your operator APN; include [apnu] and [apnp] if your operator requires a username and password):
```text
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain (preferred):
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the update/reporting interval to 60 seconds:
```text
TIMER,60#
```

- Verify current parameters:
```text
PARAM#
```

Notes on placeholders:
- [apn] is the operator APN string required for mobile data.
- [apnu] and [apnp] represent optional APN username and password fields; include them only when required by the mobile operator.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options; always confirm with the device firmware notes.
- GPT45 supports SMS-based configuration as shown, but manufacturer tools or USB configuration may be available for bulk or remote provisioning.
- Choose UDP vs TCP according to your reliability and network considerations; both transports are supported to reach Plaspy on port 8888.
- When using the SERVER command you may supply either the domain d.plaspy.com or the numeric IP 54.85.159.138; both point to Plaspy on port 8888.
- If you issue a factory reset (FACTORY#), remember to reapply APN and server settings afterward.

## Why Use Plaspy with This Configuration

Using the GPT45 with Plaspy gives organizations a straightforward path to real-time tracking, sensor-driven alerts, and centralized visibility for fleet and asset operations. The shared Plaspy server settings and automatic protocol detection simplify integration so devices can begin reporting quickly once APN and server parameters are set.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device-specific setup instructions, firmware changes, and manufacturer details, verify information on the official EElink site https://www.eelink.com.cn/ as vendor documentation may change over time.
