---
slug: /minifinder/xtreme/configuration
id: xtreme-configuration
sidebar_label: Configuration
title: MiniFinder - Xtreme Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for MiniFinder Xtreme tracker with Plaspy compatibility and required server settings
keywords:
  - MiniFinder Xtreme configuration
  - MiniFinder Xtreme setup
  - MiniFinder Xtreme Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - Plaspy server configuration
  - asset tracker configuration
  - GPS platform setup
  - tracker SMS commands
  - fleet tracking configuration
---

# MiniFinder - Xtreme Configuration

This page covers the public configuration context for using the MiniFinder Xtreme tracker with Plaspy. It explains the server settings Plaspy requires, the typical prerequisites for setup, and the practical steps to configure the device so it reports to Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. The instructions below use the public commands and settings available for the Xtreme and focus on the values you must apply to point the device at the Plaspy backend.

## Configuration Overview

This configuration process prepares the MiniFinder Xtreme to send location and event data to Plaspy so the device becomes visible in the platform for live tracking, alerts, and historical playback.

- Configure the device network settings so its GPRS connection reports to Plaspy
- Verify APN and SIM readiness for data and SMS based configuration
- Point the tracker at Plaspy server d.plaspy.com or the equivalent IP address
- Set the common Plaspy port so the device can connect to the platform
- Validate that the tracker successfully reports into Plaspy and generates expected events

## Plaspy Server Settings

When configuring the MiniFinder Xtreme for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device requirement
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and powered MiniFinder Xtreme unit with access to the manufacturer configuration method
- An active SIM card with a valid data APN and SMS capability if using SMS commands
- The correct APN details for the SIM operator (carrier) to enable GPRS connections
- Access to the device SMS interface or the official MiniFinder configuration tool as provided by the vendor
- A Plaspy account or access to the Plaspy platform to confirm the device appears and reports once configured
- Network coverage at the installation site to allow the device to register on the cellular network

## How This Tracker Connects to Plaspy

The MiniFinder Xtreme is configured to report its position and event telemetry to the shared Plaspy server endpoint and port so that Plaspy can display live location, trigger geofence events, and archive historical tracks.

- The tracker sends GPRS connections to d.plaspy.com or 54.85.159.138 on port 8888
- The device communicates over UDP or TCP depending on the chosen transport and firmware support
- Plaspy receives position fixes and sensor events and maps those into platform alerts and reports
- Reporting can be event driven or interval based according to device settings and firmware
- Plaspy automatically detects the device protocol when the tracker connects to the shared port

## Common Configuration Workflow

1. Access the official MiniFinder configuration method for the Xtreme, for example SMS commands or the manufacturer tool supplied by MiniFinder.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose the transport type UDP or TCP if the device requires a transport selection.
5. Configure the device APN settings so the tracker can establish a GPRS connection to Plaspy.
6. Apply or save the configuration and restart the device if the configuration method or firmware requires a reboot.
7. Validate that the device reports to Plaspy and appears in your Plaspy account with expected position updates and events.

## Example Configuration Commands

The MiniFinder Xtreme can be configured using SMS commands. The following public SMS commands are provided in the manufacturer documentation and should be sent in the order shown when using SMS for setup.

- Set the time zone to UTC 0
```text
tz+00
```

- Set the operator APN. Replace the placeholders with your SIM operator values. [apn] is required. [apnu] and [apnp] are optional username and password placeholders that some operators require.
```text
S1,[apn]{{,[apnu],[apnp]}}
```
Explanation: If your operator requires APN username and password include the extra values. If not, send S1,[apn] only.

- Set the GPRS server to the Plaspy IP and port
```text
IP1,54.85.159.138,8888
```
Notes:
- Commands above are sent via SMS to the device phone number unless you are using a manufacturer tool that applies the same settings over a USB or over the air channel.
- The order matters for SMS based setup: timezone, APN, then server settings are the typical sequence.

## Configuration Notes

- Firmware and region variants can change command formats or available options. Confirm command syntax for your exact firmware revision in official MiniFinder documentation.
- The Xtreme supports SMS based configuration as described, but vendor tools or service portals may offer alternate methods.
- Choose TCP or UDP according to installer preference and device firmware support; Plaspy accepts both and auto detects the protocol used.
- Because Plaspy uses the same port for all devices, ensure port 8888 is correctly configured on the tracker to avoid connectivity issues.
- If commands contain placeholders such as [apn], [apnu], or [apnp], replace them with your carrier specific values before sending.

## Why Use Plaspy with This Configuration

Using the MiniFinder Xtreme with Plaspy provides a practical way to combine a rugged, long endurance tracker with a centralized platform for live tracking, geofence alerts, and historical route playback. The shared Plaspy server settings simplify deployment because the same server and port values apply across supported devices and Plaspy automatically handles protocol detection when devices connect.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and command syntax on the official MiniFinder website https://minifinder.se/.
