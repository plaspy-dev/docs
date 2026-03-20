---
slug: /teltonika/fmb010/configuration
id: fmb010-configuration
sidebar_label: Configuration
title: Teltonika - FMB010 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Teltonika FMB010 for use with Plaspy with shared server settings and example commands
keywords:
  - Teltonika FMB010 configuration
  - Teltonika FMB010 setup
  - FMB010 Plaspy configuration
  - Teltonika configuration Plaspy
  - FMB010 server settings
  - GPS tracker configuration
  - OBD II tracker setup
  - fleet tracking setup
  - GPS platform integration
  - vehicle tracking configuration
---

# Teltonika - FMB010 Configuration

This page describes the public configuration context for using the Teltonika FMB010 with Plaspy. It focuses on the shared server settings Plaspy requires, practical setup guidance you can apply with standard Teltonika configuration methods, and an example public command used to point the device at Plaspy servers. The FMB010 is a compact OBD-II plug-and-play tracker with internal backup battery and BLE support; this page explains how to prepare that device to communicate with Plaspy using the public server values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps vary by firmware, hardware revision, and vendor tools. This document centers on the public Plaspy values and a practical workflow you can follow; always verify device-specific commands and parameter mapping against Teltonika documentation or your installer tools if you need exact parameter descriptions.

## Configuration Overview

Configuring the FMB010 for Plaspy is primarily about setting the device to report to Plaspy's shared server endpoint and port, ensuring the device has valid cellular connectivity and APN parameters, and validating that the device appears in the Plaspy platform. The public configuration process shown here uses the same server and port that Plaspy applies to all supported devices and relies on Plaspy's automatic protocol detection.

- Point the tracker to Plaspy's shared server domain or IP so telemetry is routed to the platform.
- Provide valid APN and any required SIM authentication values so the device can reach the Plaspy server.
- Set the device transport to UDP or TCP on port 8888 if the device requires explicit transport selection.
- Apply and save the configuration, then restart or reboot the device if required by the manufacturer tool.
- Validate connectivity by confirming the device is reporting into Plaspy and visible on the dashboard.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888 (choose the transport the device requires)
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Confirm the FMB010 is powered and properly connected via OBD-II or the recommended power cable for the installation.
- Ensure a working SIM card with an active data plan and the correct APN values are installed in the device.
- Access to the official Teltonika configuration method for your unit (SMS commands, Teltonika Configurator, or other vendor tools).
- Knowledge of the APN placeholders or credentials that your mobile operator requires (you will replace [apn], [apnu], [apnp] as needed).
- A way to receive device logs or check device reporting in Plaspy to validate successful connection.

## How This Tracker Connects to Plaspy

When configured, the FMB010 sends location and telemetry to Plaspy's shared server endpoint and port so Plaspy can display real-time position, events, and basic telemetry. The platform's automatic protocol detection simplifies integration because you do not need to select a device-specific protocol in Plaspy; only the device-side server and transport values are required.

- The device is configured to report to d.plaspy.com (or 54.85.159.138) on port 8888.
- Location updates and event reports are transmitted over the chosen transport (UDP or TCP) to Plaspy.
- Plaspy receives telemetry and interprets the protocol automatically for visibility in the dashboard.
- Event and alarm reports from the tracker become actionable items for alerts and reporting in Plaspy.
- Visibility in Plaspy enables historical playback, real-time tracking, and basic telematics reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your FMB010 unit (SMS, Teltonika Configurator, or another vendor tool).
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection and the configuration interface exposes that option.
5. Provide APN parameters and any SIM credentials required for cellular data connectivity (replace placeholders such as [apn], [apnu], [apnp]).
6. Apply or save the configuration and restart the device if the manufacturer tool requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device appearance and telemetry on the Plaspy dashboard.

## Example Configuration Commands

The public Teltonika configuration example provided below shows a consolidated parameter command that sets APN values and server settings. This command is commonly sent via SMS or a vendor configuration interface depending on the device firmware and installer workflow. Preserve the placeholders and replace them with your operator APN values before sending.

- Description: Set APN credentials and point the tracker to Plaspy using the shared server domain and port.

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command and placeholders:
- [apn] is the mobile network APN name required by your carrier.
- [apnu] is the APN username if your carrier requires one; leave blank or remove if not required.
- [apnp] is the APN password if required; leave blank if not required.
- The command sets the server to d.plaspy.com and the port to 8888 as required by Plaspy.
- Parameter numbers correspond to Teltonika device parameters; consult Teltonika documentation or your configuration tool to confirm parameter meanings and whether the command should be sent via SMS or through a configuration utility.

## Configuration Notes

- Teltonika firmware versions and configuration tools may map parameter numbers differently; always verify the parameter mapping for your exact firmware revision before applying commands.
- The example command is usable via SMS or vendor tools depending on device configuration options; confirm the delivery method supported by your FMB010 unit.
- Choose UDP or TCP based on the device configuration interface; both transports are supported for Plaspy on port 8888.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection, so correct server and port settings on the device are the primary requirements.
- Keep your device firmware and Teltonika configuration tools up to date for the best compatibility and feature support.

## Why Use Plaspy with This Configuration

Using the FMB010 with Plaspy provides a low-friction path to real-time vehicle location, event alerts, and essential telematics for fleet and asset monitoring. The FMB010’s OBD-II form factor and backup battery support quick deployments and continuous reporting, while pointing the device at Plaspy’s shared server settings ensures consistent ingestion of telemetry into Plaspy dashboards.

Learn more about Plaspy and how it can work with Teltonika devices at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and parameter definitions, verify details on the manufacturer website https://www.teltonika-gps.com/ before applying configuration changes.
