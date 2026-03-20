---
slug: /meitrack/t622e_f9_t622g_f9/configuration
id: t622e_f9_t622g_f9-configuration
sidebar_label: Configuration
title: Meitrack - T622E-F9/T622G-F9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack T622E F9 models to connect to Plaspy using shared server settings and SMS setup commands
keywords:
  - Meitrack T622E-F9 configuration
  - Meitrack T622G-F9 configuration
  - T622E-F9 setup
  - T622G-F9 setup
  - Meitrack configuration Plaspy
  - GPS tracker configuration
  - vehicle tracker Plaspy
  - T622E-F9 server configuration
  - T622G-F9 SMS setup
  - fleet tracking configuration
---

# Meitrack - T622E-F9/T622G-F9 Configuration

This page documents the public configuration context for using the Meitrack T622E-F9 and T622G-F9 trackers with Plaspy. It focuses on the shared Plaspy server settings, practical setup steps you can apply using manufacturer tools or SMS commands, and the typical validation workflow to confirm the device is reporting to Plaspy. Where applicable, example SMS commands from the manufacturer are provided for convenience.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The T622E-F9 / T622G-F9 supports SMS-based configuration and GPRS server configuration in the public examples below; always confirm the exact commands and behavior with Meitrack documentation or the installer tool for your firmware version.

## Configuration Overview

This configuration process prepares a Meitrack T622E-F9 or T622G-F9 to send position and telemetry to Plaspy using the platform's shared endpoint and port. The goal is to ensure reliable GPRS reporting (or the device's supported connectivity paths), correct transport settings, and appropriate reporting intervals so the device becomes visible and useful in Plaspy dashboards and alerts.

- Configure the device to report to Plaspy's shared server endpoint and port.
- Set the device APN and optional APN username and password so GPRS uploads succeed.
- Choose the transport mode (UDP or TCP) if required by the device and save the setting.
- Define reporting interval and event reporting to match your monitoring needs.
- Verify the device registers and begins sending messages to Plaspy so location and telemetry appear in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP (device may allow selecting one)
- Plaspy automatically detects the tracker protocol for supported devices
- Note: all devices in Plaspy use the same port for connectivity to the platform

## Typical Requirements Before Setup

- A powered and installed Meitrack T622E-F9 or T622G-F9 with access to its SMS or configuration interface.
- An active SIM with a working data plan and correct APN details for GPRS, if using cellular data upload.
- Access to the device password or default password (example commands below use the default password 0000).
- An SMS-capable phone or the manufacturer configuration tool to send configuration commands.
- A Plaspy account or acceptance of the device in your Plaspy instance to validate reporting.
- Basic understanding of whether UDP or TCP is preferred in your deployment environment.

## How This Tracker Connects to Plaspy

The Meitrack device is configured to report position and event/telemetry packets to the shared Plaspy server endpoint and port. Plaspy receives those packets, detects the device protocol automatically, and makes location and telemetry available in the platform for real-time visibility and historical reporting.

- The tracker sends GPRS data to d.plaspy.com (or the server IP) on port 8888.
- Transport can be configured as UDP or TCP depending on device firmware and installer preference.
- Plaspy auto-detects the tracker protocol and maps incoming messages for processing.
- Events, periodic position uploads, and configured telemetry are forwarded to Plaspy for dashboards and alerts.
- Successful configuration and connectivity translate to visible device status and position updates in Plaspy.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for your device and firmware, either via SMS commands, the Meitrack configuration tool, or the installer utility provided by your vendor.
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 if the device requires an IP entry.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN settings (and optional APN username and password) so the device can establish GPRS data sessions.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking device status and first position/telemetry in the Plaspy platform.

## Example Configuration Commands

The Meitrack T622E-F9 / T622G-F9 supports SMS-based configuration. The following public example commands are provided in the order recommended by the manufacturer. The sample commands use the default device password 0000. Keep placeholders exactly as shown and replace them with your carrier APN values where required.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```text
0000,F11
```

- Set the GPRS server to Plaspy. Replace [apn] with your SIM APN. If your APN requires authentication, include [apnu] and [apnp] as the APN username and APN password respectively.
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```

- Set the time zone to UTC+0:
```text
0000,B36,0
```

- Set the position update interval to every 1 minute:
```text
0000,A12,6,0
```

- Set event reporting configuration (example sets a specific event profile):
```text
0000,C03,0
```

Notes on placeholders:
- [apn] — your mobile network APN string required for GPRS data.
- [apnu] — optional APN username if your carrier requires it.
- [apnp] — optional APN password if your carrier requires it.
Replace placeholders with the correct values for your SIM; omit APN username and password fields if not required by your network.

## Configuration Notes

- Firmware differences can change exact command syntax or available parameters; always match commands to the device firmware version.
- SMS-based setup is shown above because the manufacturer provides these public commands; some deployments may prefer the vendor configuration tool or over-the-air provisioning.
- Choose TCP for reliable delivery if your network and firmware support it; UDP can reduce overhead but relies on application-layer handling of lost packets.
- Keep APN credentials and device passwords secure; change default passwords after initial provisioning where supported.
- After configuring, monitor the first uploads to Plaspy to confirm telemetry and event reporting behave as expected.

## Why Use Plaspy with This Configuration

Using the Meitrack T622E-F9 or T622G-F9 with Plaspy provides a straightforward path to centralized vehicle visibility and telemetry management. With the device configured to report to Plaspy's shared server endpoint and port, fleets gain access to real-time location tracking, event notifications, and the ability to integrate vehicle telemetry into dashboards and operational workflows.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device-specific configuration methods, command syntax, firmware notes, and accessory compatibility, verify the details on the manufacturer's site at https://www.meitrack.com/ as these items can change over time.
