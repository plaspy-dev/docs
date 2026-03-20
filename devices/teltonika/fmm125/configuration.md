---
slug: /teltonika/fmm125/configuration
id: fmm125-configuration
sidebar_label: Configuration
title: Teltonika - FMM125 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMM125 showing Plaspy server settings and example commands
keywords:
  - Teltonika FMM125 configuration
  - Teltonika FMM125 Plaspy setup
  - FMM125 server configuration
  - FMM125 GPS tracker configuration
  - Plaspy device setup
  - vehicle tracking configuration
  - fleet tracker FMM125 setup
  - Teltonika tracker Plaspy
  - FMM125 GPS platform setup
  - FMM125 tracking software configuration
---

# Teltonika - FMM125 Configuration

This page describes the public configuration context for using the Teltonika FMM125 with Plaspy. It focuses on the Plaspy server settings, the practical steps needed to prepare the device for reporting, and an example command that is often used to point Teltonika devices at Plaspy. Use this guide together with Teltonika product manuals and your installer tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices connect. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tool you choose, so confirm device-specific details with Teltonika documentation as needed.

## Configuration Overview

Configuring the FMM125 for Plaspy prepares the tracker to send location and telemetry to the shared Plaspy endpoint so devices become visible and report data reliably. The configuration process sets server address and port, verifies transport selection, and confirms connectivity so Plaspy can ingest telemetry automatically.

- Point the device to the Plaspy server endpoint so position and telemetry are sent to Plaspy
- Ensure APN and SIM credentials are correct so the device has a working data connection
- Choose the transport method (UDP or TCP) if the device requires explicit selection
- Save and apply settings then validate the tracker is reporting to Plaspy
- Use manufacturer tools or SMS commands where supported to perform configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A powered FMM125 unit properly installed or connected to a bench power source
- A valid SIM with an APN and, where required, APN username and password
- Access to the Teltonika configuration method you use (SMS, Teltonika Configurator, or FOTA WEB)
- Familiarity with the device firmware version and any vendor provisioning profiles that may override settings
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) and choice of UDP or TCP
- Administrative access to your Plaspy account to verify device provisioning once the tracker is reporting

## How This Tracker Connects to Plaspy

The FMM125 is configured to report location and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and process device data. Once the server and transport are set, Plaspy will automatically detect the tracker protocol and begin accepting data without device-by-device protocol selection on the server side.

- Device sends regular position updates to d.plaspy.com (or the server IP) on port 8888
- Transport can be UDP or TCP depending on your configuration choice for the device
- Plaspy performs automatic protocol detection so the platform will interpret device messages appropriately
- Telemetry and external sensor data forwarded from the FMM125 become visible in Plaspy dashboards and reports
- Successful reporting confirms the device is active and provides continuous operational monitoring

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as SMS commands, Teltonika Configurator, or FOTA WEB.
2. Enter the Plaspy server address either as d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device reporting port to 8888 (all devices in Plaspy use the same port).
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Provide APN and any required APN credentials so the device can establish a cellular data connection.
6. Apply or save the configuration and restart the device if the tool or firmware requires it.
7. Validate that the device reports to Plaspy and appears as active in your Plaspy account or via platform logs.

## Example Configuration Commands

To configure the basic parameters on FMM125 units using a single-line parameter command (commonly sent via SMS or a batch provisioning method), use the following public command example. This example includes placeholders for APN values which you must replace with your operator credentials.

- The command below is a commonly published Teltonika setparam style command. It sets APN, optional APN username and password placeholders, the Plaspy server domain, the Plaspy port, and a transport setting value as provided in public configuration examples.

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders:
- [apn] — replace with the mobile operator APN for the installed SIM
- [apnu] — replace with the APN username if required by your carrier; leave blank or remove if not required
- [apnp] — replace with the APN password if required by your carrier; leave blank or remove if not required

How to use this command:
- Send as an SMS to the device if your deployment and device firmware support SMS provisioning
- Or apply equivalent parameters using Teltonika Configurator or FOTA WEB when provisioning multiple devices
- After applying settings, verify the device connects to d.plaspy.com or 54.85.159.138 on port 8888 and appears in Plaspy

## Configuration Notes

- Firmware and provisioning tools can change parameter identifiers and command formats between versions; confirm the correct parameter IDs for your firmware before applying commands.
- Teltonika devices often support both software based configuration (Configurator, FOTA WEB) and SMS command provisioning; choose the method that matches your operational process.
- TCP versus UDP selection can affect delivery behavior; select the transport required by your network and testing results.
- Plaspy uses the same port for all supported devices and provides automatic protocol detection, so you do not need to configure a different port per device.
- If you must use the server IP instead of the domain, enter 54.85.159.138 as the server address in your provisioning tool or command.

## Why Use Plaspy with This Configuration

Using the FMM125 with Plaspy gives fleet operators reliable, continuous location and telemetry reporting routed to a single shared Plaspy endpoint. With dual‑SIM, LTE Cat M1 and NB‑IoT support and optional fallback, the FMM125 is well suited for deployments that require resilient connectivity and detailed telemetry such as fuel monitoring and serial or CAN integrations.

Learn more about Plaspy on https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and parameter identifiers on the Teltonika website https://www.teltonika-gps.com/ to ensure the most current setup instructions and compatibility details.
