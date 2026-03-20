---
slug: /dct/solar_asset_tracker/configuration
id: solar_asset_tracker-configuration
sidebar_label: Configuration
title: DCT - Solar Asset Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration notes for DCT Solar Asset Tracker with Plaspy server settings and example Syrus script
keywords:
  - DCT Solar Asset Tracker configuration
  - Solar Asset Tracker Plaspy setup
  - DCT SPA4G configuration
  - Syrus script Plaspy
  - GPS tracker server configuration
  - asset tracker setup guide
  - Plaspy server settings
  - fleet management GPS configuration
  - 4G asset tracker Plaspy
  - solar GPS tracker setup
---

# DCT - Solar Asset Tracker Configuration

This page describes the public configuration context for using the DCT Solar Asset Tracker with Plaspy. It summarizes the practical server settings, common preparation steps, and an example Syrus SB script provided for initial setup. Use this guide to prepare a Solar Asset Tracker for Plaspy telemetry and to apply the shared server endpoint and port used by Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the script and examples here as a starting point and verify device-specific details with the manufacturer documentation.

## Configuration Overview

This configuration process prepares the Solar Asset Tracker to send location, telemetry, and event data to Plaspy using the platform's shared server endpoint. The goal is to set the device APN and remote server destination, choose an appropriate transport option if required, and confirm the tracker is reporting correctly to Plaspy.

- Set the device APN and optional APN credentials so the tracker can use its cellular link.
- Configure the remote AVL server address and port to point at Plaspy's endpoint.
- Select transport settings on the device if it requires explicit TCP or UDP configuration.
- Apply and save the device configuration and restart the unit when required.
- Verify the tracker appears in Plaspy and sends expected event and telemetry messages.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- Plaspy uses the same port for all supported devices to simplify configuration

## Typical Requirements Before Setup

- A charged and powered Solar Asset Tracker with accessible configuration interface or manufacturer tool.
- Active SIM card with a mobile data plan and correct APN details for the device network.
- Access to the manufacturer configuration utility or service such as Syrus Desk when using Syrus style scripts.
- Firmware that supports remote server configuration and the commands used in the example script.
- Basic knowledge of the device configuration workflow and access to the unit for applying and testing settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Solar Asset Tracker is set to send its telemetry to the shared Plaspy endpoint and port. Plaspy automatically detects the device protocol and accepts connections on the same port used by other supported trackers.

- The tracker posts location and telemetry to d.plaspy.com or the equivalent server IP at port 8888.
- Plaspy accepts data over UDP or TCP depending on the tracker transport selection.
- Event notifications such as movement or tamper alerts are forwarded to Plaspy for immediate processing.
- Device health indicators like low battery reports are transmitted to the platform for monitoring.
- Once the device is reporting, Plaspy provides visibility, historical playback, and alert routing for the asset.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Syrus Desk or the vendor web utility.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the remote server.
3. Set the remote port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if your device requires an explicit transport selection.
5. Configure the device APN and any APN credentials required by your cellular provider.
6. Apply or save the configuration and restart the device if the manufacturer procedure requires a reboot.
7. Validate that the device reports to Plaspy by confirming telemetry and event messages arrive in the platform.

## Example Configuration Commands

The manufacturer supplied a Syrus SB script example. You can copy this text into an empty file with a .tmf extension and load it using Syrus Desk or the vendor tool that accepts Syrus SB scripts. The example below preserves the original command order and placeholder fields.

1. Full example Syrus SB script
```text
# Syrus SB script
# Getting Started example

# Delete any previous configuration
SRT;CONFIG
SXADP**U

# configuring the APN
SRFA[apn]
SRFI
SRFL[apnu]
SRFP[apnp]

# The remote AVL server address and port
SXADP0000d.plaspy.com;8888

# A Destination Address holding the server destination
SDA4;P00

# Time-only Time And Distance signal definition
STD80300

# Event triggered by T&D signal
SED37NV4;TD8+

# Input report event
SED05NV4;IP3+

# end
```

2. Key command highlights and brief explanations
- Deleting previous configuration or starting fresh
```text
SRT;CONFIG
```
Optional initial or reset style step to remove prior configuration before applying a new profile.

- Adapter or transport related entry (example preserved from script)
```text
SXADP**U
```
Included in the example script. Consult manufacturer documentation for exact meaning when selecting transport or adapter parameters.

- APN settings with placeholders
```text
SRFA[apn]
SRFL[apnu]
SRFP[apnp]
SRFI
```
Keep the placeholders [apn] for your carrier APN, [apnu] for APN username if required, and [apnp] for APN password if required. The SRFI line finalizes APN configuration in this example.

- Remote server and port pointing to Plaspy
```text
SXADP0000d.plaspy.com;8888
```
This sets the device to send telemetry to d.plaspy.com on port 8888. Plaspy also accepts the server IP 54.85.159.138 if you prefer numeric addressing.

- Destination and event definitions
```text
SDA4;P00
STD80300
SED37NV4;TD8+
SED05NV4;IP3+
```
These lines are example destination and event trigger definitions from the script. Keep them in order if using the example script.

Note about placeholders
- [apn] Replace with the mobile network APN for your SIM carrier.
- [apnu] Replace with the APN username if required by your carrier.
- [apnp] Replace with the APN password if required by your carrier.

Always confirm the exact syntax required by your device firmware or Syrus Desk version before applying commands.

## Configuration Notes

- Firmware and tool differences can change command syntax and behavior. Verify syntax with the current manufacturer documentation or Syrus Desk release notes.
- Some devices or firmware require explicit transport selection for UDP or TCP. The example script includes transport-adjacent entries but consult official docs for exact flags.
- Use the domain d.plaspy.com or the server IP 54.85.159.138 as needed. Both point to Plaspy and port 8888 is used consistently across supported devices.
- The provided script is a Getting Started example. Adjust event definitions and reporting intervals to suit your deployment and data usage requirements.
- If you use SMS or software tools to configure the device, confirm any differences in command encoding or delimiters for that method.

## Why Use Plaspy with This Configuration

Using the DCT Solar Asset Tracker with Plaspy gives teams unified visibility into remote, solar powered assets for tracking, anti-theft alerts, and operational monitoring. The tracker forwards location, event flags, and device health to the Plaspy endpoint where those signals can be turned into real time notifications, historical playback, and fleet reports.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer guidance verify the latest documentation at https://www.digitalcomtech.com/ before applying production configurations.
