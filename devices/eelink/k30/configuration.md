---
slug: /eelink/k30/configuration
id: k30-configuration
sidebar_label: Configuration
title: EElink - K30 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the EElink K30 tracker to Plaspy with server settings and SMS commands
keywords:
  - EElink K30
  - EElink K30 configuration
  - EElink K30 setup
  - EElink K30 Plaspy
  - K30 GPS tracker
  - K30 configuration
  - Plaspy server configuration
  - Plaspy tracker setup
  - GPS tracker setup
  - vehicle tracking configuration
---

# EElink - K30 Configuration

This page covers the public configuration context for using the EElink K30 wearable GPS tracker with the Plaspy platform. It summarizes the practical steps and public settings you will use to point a K30 device at Plaspy for location reporting and basic telemetry ingestion.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol once the device sends data to the platform. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this page focuses on the public, commonly used values and the SMS commands published for the K30 when available.

## Configuration Overview

The goal of configuration is to prepare the K30 to communicate reliably with Plaspy, validate connectivity, and make the device visible on the Plaspy platform. For K30 devices this often means applying network parameters, server settings, and a reporting interval using the manufacturer supported configuration method such as SMS.

- Set the carrier APN so the device can use mobile data for reporting and remote management.
- Configure the device to report to Plaspy by entering the shared server endpoint and port.
- Choose UDP or TCP transport on the device when required and save the configuration.
- Set a reporting interval appropriate to the use case and power budget.
- Verify the device reports to Plaspy and use the PARAM check to confirm the current settings.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring a K30 for the platform. Plaspy requires the same port for all supported devices and will automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once data arrives

## Typical Requirements Before Setup

- A charged K30 device with the ability to receive SMS and connect via the device mobile network
- A valid SIM card with an active data plan and the carrier APN information
- Access to the EElink official configuration method or SMS commands as provided by the vendor
- Knowledge of the APN values for your mobile operator (keep [apn], [apnu], and [apnp] placeholders ready)
- Access to the device for rebooting or power cycling if a restart is required to apply settings

## How This Tracker Connects to Plaspy

When configured, the K30 reports position and event data to Plaspy by sending data packets to the shared Plaspy server endpoint and port. Plaspy ingests those messages, applies protocol detection, and maps the events into dashboards, alerts, and historical reports.

- The tracker sends location fixes and telemetry to the Plaspy endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device settings and network considerations
- Plaspy detects the tracker protocol automatically and processes incoming messages accordingly
- Events such as SOS activations, motion status, and battery reports are forwarded into Plaspy for alerts and logging
- Administrators validate visibility in Plaspy after the device begins reporting to the shared port

## Common Configuration Workflow

1. Access the official EElink configuration method for the K30 using the vendor app, platform, or SMS commands.
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or the IP 54.85.159.138.
3. Set the port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Set the carrier APN using the APN command or the device configuration tool; include APN username or password if required.
6. Apply or save the configuration and restart the device if the device firmware requires it for changes to take effect.
7. Validate that the device reports to Plaspy and confirm telemetry appears on the platform.

## Example Configuration Commands

The K30 supports SMS based configuration. The following public SMS commands are the documented sequence for basic setup. Preserve placeholders and adapt them for your operator values.

- Optional initial reset to factory settings (use only if you need to clear existing configuration):
```text
FACTORY#
```

- Set the time zone to UTC 0 (modify if you need a different timezone command):
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your carrier APN. If your operator requires username and password, include [apnu] and [apnp]:
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Explanation: [apn] is the APN name. [apnu] and [apnp] are optional APN username and password placeholders if your carrier requires authentication.

- Configure the GPRS server to point to Plaspy using the domain (UDP/TCP transport choice is made via the transport flag):
```text
SERVER,1,d.plaspy.com,8888#
```
or configure using the Plaspy IP address:
```text
SERVER,0,54.85.159.138,8888#
```
Note: These commands target port 8888 which is the shared Plaspy port for all devices.

- Set a periodic reporting interval (example sets updates every 60 seconds):
```text
TIMER,60#
```

- Check current parameters on the device:
```text
PARAM#
```

Use the commands in the order shown where order matters. Replace placeholders with the correct operator values before sending SMS to the device.

## Configuration Notes

- Firmware and regional variants can change available commands or command syntax; always cross check with the device documentation for your firmware version.
- The K30 supports SMS based configuration in addition to platform or app methods; choose the method that fits your deployment and security needs.
- When given the choice between TCP and UDP, consider network reliability and carrier behavior; both transports are supported on port 8888.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection so the server endpoint and port are the primary required settings.
- If you use the factory reset command, label this as an optional step and only perform it when necessary because it will clear existing settings.

## Why Use Plaspy with This Configuration

Using the K30 with Plaspy provides a straightforward way to centralize wearable telemetry, SOS events, and position updates into a single platform for monitoring and alerts. This configuration approach—pointing the device at the shared Plaspy server and port—minimizes per-device server configuration and leverages Plaspy's automatic protocol detection for faster onboarding.

To learn more about Plaspy and how it handles device connections and telemetry visit https://www.plaspy.com. For the most current, device specific commands, firmware notes, and regional details verify the official EElink documentation at https://www.eelink.com.cn/ as manufacturer specifications and setup methods can change over time.
