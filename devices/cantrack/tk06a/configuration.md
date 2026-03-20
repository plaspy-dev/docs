---
slug: /cantrack/tk06a/configuration
id: tk06a-configuration
sidebar_label: Configuration
title: CanTrack - TK06A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for CanTrack TK06A to connect with Plaspy using shared server settings and SMS or GPRS setup tips
keywords:
  - CanTrack TK06A configuration
  - CanTrack TK06A setup
  - TK06A server configuration
  - TK06A Plaspy setup
  - CanTrack GPS tracker configuration
  - TK06A GPRS setup
  - vehicle tracker TK06A configuration
  - fleet tracking TK06A
  - GPS tracker server settings
  - Plaspy tracker configuration
---

# CanTrack - TK06A Configuration

This page provides public configuration guidance for using the CanTrack TK06A with Plaspy. It summarizes the practical steps and public SMS commands commonly used to point a TK06A to the Plaspy server so the device can report location and status via GPRS. The content here focuses on the shared server values and the general configuration workflow rather than proprietary or vendor specific instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware level, hardware revision, installation type, and vendor tools. The TK06A supports SMS and GPRS based setup in public documentation, so this page includes SMS command examples that reflect that public configuration pattern.

## Configuration Overview

Configuring a TK06A for Plaspy prepares the device to send its GPS data to a central server endpoint so it can be visible and managed in the Plaspy platform. The goal is to ensure the device has correct APN settings, a reachable server address and port, and the chosen transport protocol so Plaspy can accept and parse its messages.

- Configure the tracker to use the Plaspy server endpoint and port so GPRS uploads reach the platform.
- Set or verify APN and any operator credentials needed for mobile data connectivity.
- Choose UDP or TCP transport on the device if required, matching network reliability needs.
- Validate the device reports to Plaspy after applying settings so it appears in the platform.
- Optionally use SMS commands where supported by the device for remote configuration and verification.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and functional TK06A unit with access to the SIM slot and external power as required
- An active SIM card with GPRS mobile data enabled and the operator APN information available
- Access to the official CanTrack configuration method for the TK06A such as SMS command interface or manufacturer software
- Knowledge of the device password; the public example commands use the default password 123456
- Ability to send and receive SMS to the device for remote configuration if using SMS-based commands
- A plan to test connectivity after configuration by confirming the device reports to Plaspy

## How This Tracker Connects to Plaspy

The TK06A sends GPS and device status data over the GSM network using GPRS to the configured server endpoint and port. When pointed at Plaspy, the device's data is forwarded to the shared Plaspy endpoint so it can be processed and displayed in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Data is transmitted over GPRS to d.plaspy.com or the server IP 54.85.159.138 on port 8888
- The device can use either UDP or TCP transport to send packets to Plaspy
- Plaspy automatically detects the tracker protocol and parses the incoming messages
- Once reporting, the device provides visibility, event reporting, and operational monitoring inside Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TK06A (SMS commands or vendor tool).
2. Provide the operator APN and any required credentials using the device method.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the GPRS server.
4. Set the server port to 8888.
5. Choose UDP or TCP transport on the device if it requires a transport selection.
6. Apply or save the configuration and restart the device if the device requires a reboot for changes to apply.
7. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The TK06A can be configured via SMS commands according to public manufacturer examples. The commands below preserve the public placeholders and the default device password used in the sample. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, APN username, and APN password as required.

1. Restore factory settings (optional initial step)
```
#begin#123456#
```

2. Set the time zone to UTC+0
```
#timezone#123456#W#0#00#
```

3. Set the operator APN (replace placeholders as needed)
```
#apn#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username if required by the operator (leave blank if none)
- {{apnp}} = APN password if required by the operator (leave blank if none)

4. Set the GPRS server to Plaspy using the public server IP and port
```
#IP#123456#54.85.159.138#8888#
```

5. Example verification command shown in public guidance (used to check settings or mode)
```
TCP
```
- The sample verification command above was provided in public device configuration examples. Follow manufacturer guidance for the exact verification command semantics.

Note: The sample commands use the device default password 123456 in public examples. If your device password has been changed, use the current password in place of 123456.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions can change command formats or available options; always confirm with the manufacturer documentation.
- SMS based configuration is commonly supported by the TK06A public examples; vendor tools or configuration software may provide alternative workflows.
- When configuring transport, UDP may be preferred for lower overhead while TCP can provide more reliable delivery on certain networks; choose according to network behavior.
- Keep APN username and password placeholders {{apnu}} and {{apnp}} only if your operator requires them; otherwise omit or leave blank according to the device command format.
- Plaspy uses the same port across supported devices and automatically detects the tracker protocol, so point the device to d.plaspy.com or the server IP and port above.

## Why Use Plaspy with This Configuration

Using Plaspy with the CanTrack TK06A provides a straightforward way to centralize vehicle and asset location data from devices configured to send GPRS updates. Pointing the TK06A to Plaspy's shared server endpoint lets organizations gain real time visibility and operational monitoring without maintaining bespoke server infrastructure.

To learn more about Plaspy and how it manages device connections and fleet visibility, visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time, so verify the latest setup details and command formats with the manufacturer at https://www.cantrackgps.com/.
