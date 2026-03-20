---
slug: /eelink/gpt12/configuration
id: gpt12-configuration
sidebar_label: Configuration
title: EElink - GPT12 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration reference for EElink GPT12 tracker integration with Plaspy including required server settings and example SMS commands
keywords:
  - EElink GPT12 configuration
  - EElink GPT12 setup
  - EElink GPT12 Plaspy
  - GPT12 server configuration
  - GPT12 GPS tracker setup
  - EElink GPS tracker configuration
  - vehicle tracker GPT12 setup
  - GPS tracking platform configuration
  - Plaspy tracker integration
  - GPS tracker server settings
---

# EElink - GPT12 Configuration

This page documents the public configuration context for using the EElink GPT12 tracker with Plaspy. It collects the practical server settings and example commands that are commonly used to point the tracker at Plaspy, and it explains what to check before and after you apply those settings. Use this page as a technical reference alongside the manufacturer documentation and your installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so follow the commands below only as a public example and verify device behavior with the official EElink resources.

## Configuration Overview

Configuring the GPT12 for Plaspy prepares the device to communicate with the Plaspy server endpoint so location and event data appear in your Plaspy account. The public configuration flow typically uses the device's SMS or manufacturer tools to set APN, server address, and reporting intervals so the tracker sends updates to Plaspy reliably.

- Point the tracker to the Plaspy server endpoint and port so data is routed to the platform.
- Configure the device APN and GPRS settings so it has mobile data connectivity.
- Set reporting intervals and timers to control how often the device sends position updates.
- Optionally reset or verify parameters to ensure a clean configuration state.
- Validate connectivity and visibility in Plaspy after applying the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged GPT12 with a working SIM card that supports GPRS data and SMS control.
- The correct APN settings for your mobile operator available for insertion.
- Access to the device configuration method you plan to use such as SMS commands, PC software, or vendor tools.
- Ensure the device has adequate battery or is connected to external power during configuration.
- The device IMEI or identifier available to confirm the correct unit in Plaspy after registration.

## How This Tracker Connects to Plaspy

The GPT12 is configured to send its location and alarms to the shared Plaspy server endpoint and port so Plaspy can ingest the device data and display it in the platform. Plaspy listens on the same port for all supported devices and uses automatic protocol detection so trackers that speak supported protocols are recognized when they connect.

- The tracker sends periodic position reports according to the TIMER setting to the Plaspy server.
- Event messages such as geo-fence or low battery alarms are forwarded to Plaspy for alerting and history.
- The tracker can be pointed to the Plaspy server using either the domain name or the IP address.
- Plaspy accepts connections on port 8888 using UDP or TCP and resolves the device protocol automatically.
- After configuration, validate that the device is visible in Plaspy and reporting expected events.

## Common Configuration Workflow

1. Access the official EElink configuration method you prefer (SMS commands, PC tool, or vendor software).
2. Set the device APN so it has mobile data connectivity using the APN provided by your operator.
3. Enter the Plaspy server address either as d.plaspy.com or 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and restart the tracker if required.
6. Validate that the device registers and reports to Plaspy and that location updates appear in the platform.

## Example Configuration Commands

The GPT12 can be configured via SMS using the following public commands. Send each command as a separate SMS to the device phone number. Preserve placeholders exactly and replace them with your operator values when needed.

- Optional initial factory reset
```text
FACTORY#
```
- Set time zone to UTC 0
```text
GMT,E,0#
```
- Set the operator APN
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Note: keep the placeholders [apn], [apnu], and [apnp] and replace them with your network APN, username, and password if required. The command above shows an APN field and may include optional username and password parameters when needed.

- Set the GPRS server using the Plaspy domain (example using domain)
```text
SERVER,1,d.plaspy.com,8888#
```
- Or set the GPRS server using the Plaspy IP (example using IP)
```text
SERVER,0,54.85.159.138,8888#
```
- Set the update interval to report every 60 seconds
```text
TIMER,60#
```
- Check current parameters
```text
PARAM#
```

Preserve command order when required by your workflow. The factory reset command is optional and should be used only when you want to return to factory defaults before reconfiguring.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or available parameters; always check the device firmware notes if results differ.
- The GPT12 supports SMS based configuration as shown above; you can also use PC or vendor tools if available for bulk or remote configuration.
- When the device requires a transport choice, pick UDP or TCP according to your network preference; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- Use the domain d.plaspy.com for easier future maintenance, or the IP 54.85.159.138 when DNS is not available in your environment.
- Keep APN placeholders intact in commands and replace them only with operator-provided values.

## Why Use Plaspy with This Configuration

Using the EElink GPT12 with Plaspy gives organizations a straightforward way to get device telemetry, alarms, and position history into a unified fleet and asset visibility platform. Pointing the GPT12 at Plaspy with the shared server settings ensures consistent ingestion of location updates and events so you can monitor assets, receive geofence alerts, and review route playback within the platform.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and firmware notes at the official EElink website https://www.eelink.com.cn/ before deployment.
