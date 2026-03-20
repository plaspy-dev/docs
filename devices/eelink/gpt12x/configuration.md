---
slug: /eelink/gpt12x/configuration
id: gpt12x-configuration
sidebar_label: Configuration
title: EElink - GPT12‑X Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for EElink GPT12‑X to connect with Plaspy using public server settings and example SMS commands
keywords:
  - EElink GPT12‑X configuration
  - EElink GPT12‑X setup
  - EElink GPT12‑X Plaspy
  - GPT12‑X configuration
  - GPT12‑X server configuration
  - GPS tracker configuration
  - Plaspy server configuration
  - EELINK protocol configuration
  - asset tracker GPT12‑X
  - fleet tracking setup
---

# EElink - GPT12‑X Configuration

This page documents the public configuration context for using the EElink GPT12‑X with Plaspy. It focuses on the practical steps and public server settings needed to point the tracker at Plaspy and to validate connectivity. Where manufacturer-side commands are public, example SMS commands are included and explained so you can apply them directly or adapt them to your deployment method.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so most of the configuration effort is about applying the correct server endpoint, port, and operator APN on the device. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the commands shown here alongside the official EElink documentation and your device firmware notes.

## Configuration Overview

The configuration process prepares a GPT12‑X to communicate reliably with Plaspy by setting network parameters, the reporting interval, and the destination server. Publicly available SMS commands from the manufacturer can perform these tasks when SMS setup is supported by your unit.

- Configure the device APN so it can establish a GPRS/data channel for reporting.
- Point the tracker to Plaspy by setting the server domain or IP and the shared port.
- Choose the transport (UDP or TCP) if the tracker requires a transport selection.
- Set an appropriate reporting interval to balance battery life and update frequency.
- Verify settings and confirm the device is visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GPT12‑X with sufficient battery or external power for setup operations.
- A valid cellular SIM with data enabled and correct APN information for your mobile operator.
- Access to the device SMS setup channel or the official EElink configuration tool, depending on the method you will use.
- Basic knowledge of whether your deployment prefers UDP or TCP transport and any firewall rules that might affect outbound connections.
- Permission and account access to Plaspy for device registration and validation after configuration.

## How This Tracker Connects to Plaspy

The GPT12‑X sends compact telemetry and event messages to Plaspy over the cellular network using the EELINK protocol. When pointed at Plaspy’s shared endpoint and port, the tracker’s GNSS positions, alarms, and telemetry are ingested automatically.

- The device reports GNSS fixes and timestamps to the Plaspy server endpoint.
- Event alarms such as collision, vibration, or tamper are forwarded to Plaspy for alerting.
- Battery and device status telemetry are transmitted to support monitoring and maintenance workflows.
- All reporting is directed to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can automatically detect the protocol and process incoming messages.
- Plaspy provides visibility via dashboards, geofence alerts, and historical position reports once the device is successfully reporting.

## Common Configuration Workflow

1. Access the official EElink configuration method for your unit, either SMS commands or the manufacturer tool for remote configuration.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP address 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP if the tracker requires a transport selection; Plaspy supports both on the same port.
5. Configure the operator APN and any APN username or password required by your carrier.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot for settings to take effect.
7. Validate that the GPT12‑X reports to Plaspy and appears in your Plaspy account or monitoring view.

## Example Configuration Commands

The GPT12‑X supports SMS-based configuration with the following public commands. Send each command as a separate SMS to the device. Preserve placeholders such as [apn] when replacing with your operator APN value.

- Optional initial factory reset (use only when needed for initial setup):
```text
FACTORY#
```

- Set the time zone to UTC 0 (example):
```text
GMT,E,0#
```

- Set the operator APN (replace [apn] with your carrier APN; include [apnu] and [apnp] for APN username and password if required):
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Explanation: [apn] is the APN string required by your mobile operator. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server to Plaspy using domain (UDP/TCP selection managed separately if required):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternative using Plaspy server IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the position update interval to 60 seconds:
```text
TIMER,60#
```

- Check current parameter settings:
```text
PARAM#
```

Notes on command order: apply APN before attempting to use GPRS reporting. Use the SERVER command to point the device at Plaspy (domain or IP both accepted). The reset command FACTORY# should be used only when an initial factory reset is required.

## Configuration Notes

- Firmware differences: exact command syntax and available features may vary between firmware versions; always confirm with the device firmware release notes.
- SMS versus software: this page shows SMS commands because they are publicly documented; many installations use the EElink configuration tool or OTA management for bulk provisioning.
- Transport choice: TCP and UDP are both supported by Plaspy on port 8888; select the transport best suited to your network and firewall environment.
- APN placeholders: keep [apn], [apnu], and [apnp] as placeholders when preparing SMS templates and replace them with the operator values used in your region.
- Verify after restart: after applying settings and restarting, use a PARAM# check or your Plaspy dashboard to confirm the device is reporting as expected.

## Why Use Plaspy with This Configuration

Using the GPT12‑X with Plaspy provides a low‑maintenance tracking solution for long deployments where reliable telemetry, event alarms, and long battery life are priorities. Pointing the device at Plaspy using the shared server settings simplifies integration and allows the platform to ingest GNSS, battery, and alarm data for monitoring, alerts, and reporting workflows.

To learn more about how Plaspy handles device ingestion and fleet management, visit https://www.plaspy.com. For the most current EElink device commands, firmware notes, and model specific details, verify setup information on the manufacturer site https://www.eelink.com.cn/ as device behavior and configuration methods can change over time.
