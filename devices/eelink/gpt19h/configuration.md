---
slug: /eelink/gpt19h/configuration
id: gpt19h-configuration
sidebar_label: Configuration
title: EElink - GPT19‑H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for EElink GPT19 H and Plaspy integration including server settings and SMS commands
keywords:
  - EElink GPT19‑H configuration
  - EElink GPT19‑H setup
  - GPT19‑H Plaspy configuration
  - GPS tracker configuration
  - asset tracker setup
  - magnetic asset tracker configuration
  - Plaspy server settings
  - tracker SMS configuration
  - GPS platform integration
  - fleet tracking setup
---

# EElink - GPT19‑H Configuration

This page documents the public configuration context for using the EElink GPT19‑H magnetic asset tracker with Plaspy. It summarizes the shared server settings Plaspy requires, the typical preparatory steps, and the manufacturer public SMS commands that are commonly used to point the device to Plaspy for live tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page as a practical guide to the common configuration flow and commands, and review the official EElink documentation for the latest device‑specific details.

## Configuration Overview

The configuration process prepares the GPT19‑H to communicate reliably with Plaspy so that location, motion, and tamper events appear in your Plaspy dashboards. For GPT19‑H devices, configuration is often performed using the manufacturer’s SMS command set or an official configuration tool and involves setting APN and the Plaspy server endpoint.

- Point the tracker to the Plaspy server endpoint so it can deliver telemetry and location fixes.
- Configure the device APN so GPRS data is allowed and the tracker can open a data session.
- Choose transport (UDP or TCP) if the device requires a transport selection when setting the server.
- Set reporting interval and emergency timers so the tracker behavior matches your monitoring plan.
- Verify parameters and confirm the device is reporting to Plaspy before deploying the unit.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GPT19‑H unit with accessible SIM tray and a charged or installed replaceable battery.
- An active SIM card with a data plan and the correct operator APN for GPRS connectivity.
- Ability to send SMS commands to the device or access to the official EElink configuration tool or software.
- Basic installation access to the tracker location so you can confirm it can obtain GNSS fixes where required.
- Knowledge of the operator APN values; if your operator requires username or password include them when setting APN.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GPT19‑H sends location fixes and event telemetry to the shared Plaspy server endpoint and port so the data appears in Plaspy dashboards and alerting workflows. Plaspy receives the device traffic on its common server port and identifies the protocol automatically.

- The tracker posts GPS and LBS location updates to d.plaspy.com or the Plaspy server IP on port 8888.
- Event telemetry such as motion, fall, tamper, and emergency mode is forwarded to Plaspy for alerting and reporting.
- Plaspy maps incoming messages into device activity so you can visualize live positions and generate geofence events.
- Transport can be configured as UDP or TCP at the device level; Plaspy accepts both and auto-detects the protocol.
- Use Plaspy dashboards to validate device connectivity and historical telemetry after configuration.

## Common Configuration Workflow

1. Access the official EElink configuration method or software, or prepare to send SMS commands to the tracker.
2. Set the device APN using the operator APN values so GPRS sessions can be established.
3. Enter the Plaspy server endpoint by setting either d.plaspy.com or 54.85.159.138 as the server.
4. Set the server port to 8888 (Plaspy uses the same port for all devices).
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Save or apply the configuration and restart the device if required by the manufacturer steps.
7. Validate that the device reports to Plaspy using the verification command or by checking device activity in the platform.

## Example Configuration Commands

The GPT19‑H supports SMS configuration. Below are the public SMS commands provided by EElink for common setup tasks. Preserve placeholders when you send commands.

1. Optional initial step to restore factory defaults (use only if needed)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Replace {{apn}} with your mobile operator APN. If your operator requires a username or password, include the optional placeholders {{apnu}} and {{apnp}} in the order shown.
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- If username and password are not required, send:
```
APN,{{apn}}#
```

4. Set the GPRS server to the Plaspy domain and port (use this to point the device to Plaspy by domain)
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server to the Plaspy IP and port (alternate option using IP)
```
SERVER,0,54.85.159.138,8888#
```

6. Set the update/reporting timer to 60 seconds
```
TIMER,60#
```

7. Verify current parameter settings
```
PARAM#
```

Note: Use either the SERVER command with the domain or the SERVER command with the IP depending on your preference or testing needs. The device accepts UDP or TCP transport on port 8888 and Plaspy will automatically detect the tracker protocol.

## Configuration Notes

- SMS based setup is a common public method for GPT19‑H configuration; confirm SMS command support on your device firmware revision.
- Firmware versions and hardware revisions can change command syntax or available parameters; consult EElink documentation for firmware specific details.
- Choose UDP or TCP according to any network constraints; Plaspy accepts both and detects the protocol automatically.
- All devices reporting to Plaspy use the same port 8888, so make sure that outbound data on that port is allowed by the SIM operator and any intermediary firewall.
- After configuration, always verify the device with PARAM# and by confirming visibility in Plaspy before field deployment.

## Why Use Plaspy with This Configuration

Using the EElink GPT19‑H with Plaspy brings long‑life, covert asset tracking into a single telemetry platform for monitoring, geofence enforcement, and anti‑theft response. The GPT19‑H’s battery life, rugged magnetic design, and motion/tamper alerts combine with Plaspy’s device handling and alerting to deliver practical visibility for trailers, containers, and high‑value equipment.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and firmware behaviors at the manufacturer site https://www.eelink.com.cn/. Manufacturer configuration methods and firmware behavior can change over time so confirm the current EElink documentation when performing device setup.
