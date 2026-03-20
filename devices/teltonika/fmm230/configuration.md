---
slug: /teltonika/fmm230/configuration
id: fmm230-configuration
sidebar_label: Configuration
title: Teltonika - FMM230 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the Teltonika FMM230 for use with Plaspy including server settings commands and setup workflow
keywords:
  - Teltonika FMM230 configuration
  - Teltonika FMM230 setup
  - FMM230 Plaspy configuration
  - FMM230 tracking setup
  - Teltonika GPS tracker configuration
  - Plaspy device setup
  - fleet tracking configuration
  - vehicle tracker setup
  - Teltonika EYE sensors
  - asset tracking configuration
---

# Teltonika - FMM230 Configuration

This page explains the public configuration context for using the Teltonika FMM230 with Plaspy. It focuses on the practical, publicly available settings you need to point the device at Plaspy and to validate basic connectivity. Use this guide alongside Teltonika documentation and Plaspy account setup to complete integration.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol after the device connects. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the Teltonika configuration tools you use, so confirm device-specific steps with Teltonika resources when needed.

## Configuration Overview

The goal of configuration is to prepare the FMM230 to communicate reliably with Plaspy, ensure the device has cellular connectivity, and confirm that location and telemetry data appear in the Plaspy platform. Where available, Teltonika supports SMS and tool-based commands that can set APN and server parameters in a single instruction.

- Set the device APN and network credentials so the unit can use cellular data.
- Configure the device to report to Plaspy server endpoint and the shared port.
- Choose transport mode (UDP or TCP) if the device requires explicit selection.
- Apply and save device settings then reboot if required to activate changes.
- Verify the FMM230 is visible and reporting in your Plaspy instance.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: UDP or TCP supported on port 8888
- Plaspy automatically detects the tracker protocol after the device connects

These values are the public Plaspy endpoint settings to use when configuring the tracker. All devices in Plaspy use the same port and Plaspy will detect the correct protocol automatically.

## Typical Requirements Before Setup

- Device powered and accessible for configuration and testing.
- Active SIM card with a data plan and correct APN information for the mobile operator.
- Access to Teltonika configuration methods such as SMS setup, Teltonika RMS, or Teltonika configurator tools as applicable.
- Knowledge of your Plaspy account and how to verify an incoming device in the Plaspy interface.
- Basic tools to reboot or power cycle the device after applying settings.
- Confirm firmware is up to date or note the firmware version so you can follow matching manufacturer instructions.

## How This Tracker Connects to Plaspy

The FMM230 sends location and telemetry over the cellular network to the shared Plaspy server endpoint and port. Once the device is pointed at the Plaspy endpoint and the connection is established, Plaspy receives and interprets the device data for real-time location, alerts, and historical reporting.

- The device reports position and telemetry over LTE Cat M1, NB‑IoT, or 2G fallback to the Plaspy server.
- Data is sent to d.plaspy.com (or 54.85.159.138) on port 8888 using the chosen transport.
- Plaspy automatically detects the tracker protocol and registers the device stream if credentials and network are valid.
- Events such as power loss, BLE sensor inputs, or I/O changes are forwarded to Plaspy when configured on the device.
- Platform visibility enables geofencing, alerts, and telematics reporting within Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMM230 (SMS commands, Teltonika tools, or RMS).
2. Enter the Plaspy server endpoint either as domain d.plaspy.com or as IP 54.85.159.138 in the device server settings.
3. Set port 8888 for the device reporting port.
4. Choose UDP or TCP if the device requires a transport selection for the server connection.
5. Configure APN and related network parameters so the device can establish a data session.
6. Apply or save the configuration and restart the device if required by the Teltonika tool or SMS method.
7. Validate that the device reports to Plaspy by checking device connection status and incoming data in your Plaspy instance.

## Example Configuration Commands

Teltonika devices commonly support SMS-based parameter setting. The following public example shows a single SMS command that sets APN credentials and Plaspy server parameters. Preserve the placeholders when you send the command and replace them with your operator APN details.

- Example SMS parameter command
```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders
  - [apn]  Replace with your mobile operator APN name.
  - [apnu] Replace with the APN username if required by the operator, otherwise leave blank.
  - [apnp] Replace with the APN password if required by the operator, otherwise leave blank.

When using the SMS method, send the command from an authorized phone number or follow Teltonika instructions for allowed SMS configuration sources. If you use Teltonika configurator tools or RMS, apply the same server domain or IP and port values in the GUI or configuration file fields.

## Configuration Notes

- Firmware and tool behavior may differ across Teltonika firmware versions; verify commands and parameter codes in the Teltonika documentation for your firmware.
- If the device requires explicit transport selection, test both UDP and TCP to confirm stable reporting with Plaspy.
- SMS-based setup is a public method shown here but may require an authorized phone number or additional security settings on the device.
- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection, so the primary need is correct server and APN configuration.
- Keep a record of applied settings and the device IMEI so you can match incoming connections in Plaspy.

## Why Use Plaspy with This Configuration

Using the Teltonika FMM230 with Plaspy provides a straightforward way to capture rugged, low-power tracker telemetry and sensor data into a central platform for monitoring and operational insight. The FMM230's cellular resilience and BLE sensor capabilities pair with Plaspy's automatic protocol detection and unified server settings to simplify fleet wide rollouts.

Learn more about Plaspy at https://www.plaspy.com and confirm the latest device specific setup details, firmware behavior, and parameter codes on the official Teltonika website https://www.teltonika-gps.com/ to ensure accuracy for your deployment.
