---
slug: /appello/obd/configuration
id: obd-configuration
sidebar_label: Configuration
title: Appello - OBD Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Appello OBD tracker to report to Plaspy using shared server settings and SMS setup commands
keywords:
  - Appello OBD configuration
  - Appello OBD setup
  - Appello OBD server configuration
  - Plaspy tracker configuration
  - Plaspy server setup
  - OBD GPS tracker configuration
  - Appello SMS commands
  - GPS tracker platform setup
  - vehicle tracking configuration
  - fleet tracking setup
---

# Appello - OBD Configuration

This page covers the public configuration context for using the Appello OBD GPS tracker with Plaspy. It explains the shared Plaspy server settings required for connectivity, and it summarizes the practical SMS configuration commands provided by the manufacturer that are commonly used to point the tracker at Plaspy. Use this guide as a technical reference for setting up the device so it can report location and status to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The Appello OBD model description and the device SMS configuration commands shown here are the public basis for integration; always confirm device-specific behavior with the manufacturer documentation when required.

## Configuration Overview

This section explains the practical purpose of configuring the Appello OBD tracker for Plaspy and what the setup achieves.

The configuration process prepares the tracker to communicate with the Plaspy endpoint, validates connectivity, and ensures the device reports on the interval you need so the vehicle appears and updates correctly in Plaspy.

- Configure the device to send GPRS/TCP or UDP data to the Plaspy server endpoint.
- Enter APN and operator settings so the device can establish a data connection.
- Set the server address and port so the tracker reports to Plaspy's shared endpoint.
- Adjust reporting interval and disable sleep or power-save modes for continuous updates.
- Verify the device configuration using the manufacturer verification commands so Plaspy can receive data.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible Appello OBD device with the OBD interface connected to the vehicle power supply (device requires 12V).
- A valid mobile SIM card with data enabled and the correct APN for the operator.
- Ability to send SMS messages to the device for configuration, since Appello provides SMS-based commands.
- Knowledge of the device default password (the public example uses 0000).
- Access to the manufacturer's published command list or instructions for your device firmware.
- Basic verification method to confirm the device is reporting (Plaspy visibility or device reply to configuration checks).

## How This Tracker Connects to Plaspy

The Appello OBD tracker is configured to report to Plaspy's shared server endpoint and port so vehicle location and status can be collected and monitored in the Plaspy platform. Once APN and server settings are applied, the tracker will open a data session and send periodic updates.

- The tracker is pointed to d.plaspy.com or directly to 54.85.159.138 as the GPRS server.
- Data is sent to port 8888, which Plaspy uses for all supported devices.
- The device may use either UDP or TCP transport on port 8888 depending on configuration choice.
- Plaspy automatically detects the tracker protocol and handles incoming data for correct interpretation.
- Reporting frequency is configurable on the tracker so update intervals can be set to match operational needs.

## Common Configuration Workflow

1. Access the official Appello configuration method for your device (SMS commands as shown below or manufacturer software) and confirm the device password.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 in the device server/GPRS settings.
3. Set the server port to 8888 for the device connection.
4. Choose the transport mode UDP or TCP if the tracker requires a transport selection in settings.
5. Configure APN and operator information so the device can establish GPRS data service.
6. Apply or save the configuration and, if required by the device, restart the tracker or perform the optional factory reset step.
7. Validate that the device reports to Plaspy by checking device activity in the Plaspy platform or using the device verification commands.

## Example Configuration Commands

The Appello OBD supports SMS-based configuration. The following public SMS commands are the manufacturer-provided examples and are shown in the order they are often used. Commands in these examples use the device password 0000 as the default; label reset as optional and use it only when needed.

- Optional initial factory reset (only if you need to restore defaults):
```text
*RESET#0000##
```

- Set the time zone to UTC+0 (example command format):
```text
8960000E00
```

- Set the operator APN (replace placeholders with your operator values):
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}#
```
Explanation: {{apn}} = operator APN, {{apnu}} = APN username (optional), {{apnp}} = APN password (optional).

- Set the GPRS server to the Plaspy server IP and port:
```text
#804#0000#54.85.159.138#8888##
```
Or, if your device accepts the domain instead of the IP, configure the server to d.plaspy.com and port 8888 through the equivalent manufacturer command or tool.

- Disable sleep mode so the device remains active:
```text
SLEEP,000000,0
```

- Enable GPRS mode (device specific command shown in the public configuration):
```text
7100000
```

- Set the position update interval to 60 seconds:
```text
#809#0000#060#1##
```

- Commands to check current configuration:
```text
*RCONF#
```
```text
*RCONF1#
```

Send each of these commands as an SMS message to the device phone number. Preserve the device password (0000 in these public examples) or replace it with your configured password.

## Configuration Notes

- SMS-based configuration is commonly supported for this model; follow the manufacturer's exact command syntax for your firmware version.
- Firmware and hardware revisions may change command syntax or available options; verify commands on the official manufacturer documentation.
- Choose TCP or UDP based on any deployment requirements; Plaspy supports both on port 8888 and will auto-detect protocol.
- Keep the default password secure; if you change it, use the updated password in subsequent SMS commands.
- Verify APN placeholders {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator before sending configuration SMS messages.

## Why Use Plaspy with This Configuration

Using the Appello OBD tracker with Plaspy provides a practical way to bring vehicle location and operational visibility into a centralized platform. With the device pointed to Plaspy's shared server endpoint and port, organizations can monitor assets, receive regular location updates, and incorporate the tracker into fleet workflows with consistent platform behavior.

To learn more about Plaspy and how this configuration fits into your fleet tracking deployment, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer details for the Appello OBD tracker, verify current information with the manufacturer at http://www.cnjeo.com/ as vendor setup methods and firmware behavior can change over time.
