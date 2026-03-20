---
slug: /eelink/tk121_s/configuration
id: tk121_s-configuration
sidebar_label: Configuration
title: EElink - TK121‑S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK121‑S with Plaspy covering server settings SMS commands and practical setup steps for fleet tracking
keywords:
  - EElink TK121 S configuration
  - TK121 S setup
  - EElink GPS tracker setup
  - MoveLink configuration
  - Plaspy tracker setup
  - GPS tracker server configuration
  - vehicle tracking setup
  - fleet tracker configuration
  - SMS configuration commands
  - GPRS tracker settings
---

# EElink - TK121‑S Configuration

This page describes the public configuration context for using the EElink TK121‑S tracker with the Plaspy platform. It gathers the essential server settings, common workflow steps, and the publicly available SMS commands used to point the device to Plaspy so your tracker can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol to simplify integration. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the examples here as practical guidance built from the public configuration commands provided by the manufacturer.

## Configuration Overview

The goal of this configuration is to prepare the TK121‑S to communicate reliably with Plaspy and to validate that the device appears in the platform as expected. The public setup approach for this model uses SMS commands and standard server configuration so you can point the device to Plaspy quickly and verify connectivity.

- Configure the device server address and port to point the tracker at Plaspy
- Set APN and GPRS parameters so the tracker can use mobile data
- Define reporting intervals such as GPS update timers for desired telemetry frequency
- Validate settings and confirm the tracker reports into Plaspy using the shared server endpoint
- Optionally reset or verify parameters when troubleshooting or deploying new units

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as an alternate numeric endpoint
- Port 8888 used by Plaspy for all supported devices
- Transport support for UDP or TCP on the device when selecting the protocol
- Plaspy automatically detects the tracker protocol so the platform can accept data from the device without requiring manual protocol mapping

## Typical Requirements Before Setup

- A powered TK121‑S with reliable vehicle power or bench power during configuration
- A working GSM SIM with data enabled and the correct operator APN configured
- Access to the device SMS configuration method or the manufacturer software for remote settings
- Knowledge of the correct APN values for your mobile operator
- Basic tools to send and receive SMS messages to the device phone number for command based setup
- If possible, a way to monitor device network registration or platform ingress logs to verify connectivity

## How This Tracker Connects to Plaspy

When configured, the TK121‑S will send location reports and event messages to the shared Plaspy server endpoint and port so the platform can ingest telemetry and present it in dashboards and reports. Plaspy accepts connections on the same port for all devices and automatically determines the tracker protocol, reducing per device mapping work.

- Tracker reports position and status messages to d.plaspy.com or 54.85.159.138 on port 8888
- The device can use UDP or TCP transport depending on what you set during configuration
- Plaspy automatically detects the tracker protocol and interprets incoming MoveLink messages
- Location, ACC status, and alarms reported by the device become platform events and map markers
- Regular timer based reports make the tracker visible for live tracking and historical playback

## Common Configuration Workflow

1. Use the official EElink configuration method or software, or prepare to send SMS commands to the device number as documented by the manufacturer
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138
3. Set the server port to 8888 which is used by Plaspy for all devices
4. Choose UDP or TCP transport on the device if it requires explicit transport selection
5. Configure the APN and any optional APN username or password so GPRS data works for the SIM
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply settings
7. Validate the device is reporting to Plaspy by checking platform dashboards or using the device PARAM# command to verify local parameters

## Example Configuration Commands

To set the tracker send the following SMS commands in order. These are the public commands provided by the manufacturer for TK121‑S. Keep placeholders as shown where operator specific values are required.

1. Optional factory reset step when preparing a device for initial setup
```text
FACTORY#
```

2. Set the device time zone to UTC 0 (example)
```text
GMT,E,0#
```

3. Set the operator APN. Replace [apn] with your operator APN string.
If your APN requires username or password include [apnu] and [apnp] respectively as additional parameters.
```text
APN,[apn],[apnu],[apnp]#
```

4. Set the GPRS server using the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888#
```

Or set the GPRS server using the Plaspy IP on port 8888
```text
SERVER,0,54.85.159.138,8888#
```

5. Set the GPS position update interval to 60 seconds
```text
TIMER,60#
```

6. Check parameter settings on the device
```text
PARAM#
```

Notes on placeholders
- [apn] is the mobile operator APN name required for data connectivity
- [apnu] is the APN username if your operator requires one
- [apnp] is the APN password if required by the operator

Plaspy uses port 8888 for all devices and the platform automatically detects the tracker protocol, so point the SERVER command to d.plaspy.com or 54.85.159.138 with port 8888 and choose UDP or TCP as supported by the tracker.

## Configuration Notes

- Firmware and hardware revisions can change supported command syntax or available features; confirm the exact SMS command format with EElink documentation for your device revision
- The TK121‑S supports SMS based configuration in addition to platform or app based remote configuration as described by the manufacturer
- When the device allows transport selection choose UDP or TCP according to your network requirements; Plaspy accepts both when pointed at port 8888
- Use the SERVER command with either the domain d.plaspy.com or the numeric IP 54.85.159.138 if DNS resolution is a concern
- The TIMER command controls reporting frequency; set it considering data usage and operational needs

## Why Use Plaspy with This Configuration

Using the TK121‑S with Plaspy gives a straightforward path to real time visibility for vehicle fleets with low overhead setup. The public SMS commands let installers and fleet technicians point devices to the shared Plaspy server quickly, and Plaspy's automatic protocol detection removes the need for per device protocol mapping in many cases.

To learn more about Plaspy visit https://www.plaspy.com and review the latest EElink device documentation at https://www.eelink.com.cn/ to verify current manufacturer firmware behavior and exact setup procedures.
