---
slug: /winrich/tk207_obd/configuration
id: tk207_obd-configuration
sidebar_label: Configuration
title: Winrich - TK207 OBD Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Winrich TK207 OBD showing Plaspy server settings, SMS commands, and setup workflow for vehicle tracking
keywords:
  - Winrich TK207 OBD configuration
  - Winrich TK207 OBD setup
  - Winrich OBD tracker configuration
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker OBDII setup
  - vehicle tracking configuration
  - GPS platform setup
  - fleet management tracker setup
  - OBDII GPS tracker Plaspy
---

# Winrich - TK207 OBD Configuration

This page covers the public configuration context for using the Winrich TK207 OBD tracker with Plaspy. It consolidates the known, publicly available setup steps and SMS command examples used to point the device to Plaspy so the tracker can report location and OBD data to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK207 OBD supports SMS and GPRS configuration; the example commands below reflect common SMS commands documented publicly for this model.

## Configuration Overview

The goal of configuration is to prepare the TK207 OBD to communicate reliably with Plaspy so the device appears in the platform and reports location and OBD parameters. Typical setup configures network parameters, the Plaspy server endpoint and port, and reporting intervals, then validates connectivity.

- Configure the device APN and GPRS server so the tracker can send data to Plaspy over the cellular network.
- Point the tracker to the shared Plaspy server endpoint and port to enable platform visibility.
- Set an appropriate upload interval to balance real-time tracking needs and data usage.
- Use the manufacturer's SMS commands or configuration tool to apply settings and confirm status.
- Validate reporting in Plaspy after configuration to confirm the device is visible and sending expected data.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TK207 OBD:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport required by the device or preference
- Plaspy automatically detects the tracker protocol and all devices use the same port across the platform

Use either the domain or the IP above when entering server details on the device or via SMS configuration.

## Typical Requirements Before Setup

- Vehicle with an accessible OBDII port for plug and play installation of the TK207 OBD
- Active SIM card with GPRS data enabled and SMS capability for sending configuration commands
- The correct APN settings for the SIM operator (APN, username, password if required)
- Access to the manufacturer's SMS command list or configuration tool for the TK207 OBD
- A stable power supply from the vehicle and a properly seated OBDII connection
- Time to verify device reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured, the TK207 OBD uses the cellular GPRS link to send location, status, and OBD information to Plaspy. The device is set to report to the shared server endpoint and port used across Plaspy, and the platform will automatically identify the device protocol.

- The tracker sends position and device data over GPRS to d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 using the selected transport (UDP or TCP)
- Plaspy automatically detects the tracker protocol and processes incoming messages
- Periodic location uploads, alarms, and OBD parameter reports become visible in the Plaspy platform
- Validation of reporting confirms the device is communicating with Plaspy and can be monitored

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor configuration tool.
2. Enter the Plaspy server by name d.plaspy.com or by IP 54.85.159.138 in the device server setting.
3. Set the device port to 8888 as the destination port for GPRS uploads.
4. Choose UDP or TCP if the device requires a transport selection for server uploads.
5. Configure the device APN and any APN credentials required by the SIM operator.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates.

If you use SMS-based setup, send the manufacturer commands in the order recommended for initial configuration and verification.

## Example Configuration Commands

The TK207 OBD supports SMS command configuration. The following public commands are provided in the documented sequence. Preserve the placeholders when applying them.

1. Factory reset (optional initial setup)
```
940#
```

2. Set the time zone to UTC+0
```
801#W0#
```

3. Set the operator APN (replace placeholders as needed)
```
802#[apn]#[apnu]#[apnp]#
```
- [apn] is the APN string for the SIM operator
- [apnu] is the APN username if required (leave empty if not used)
- [apnp] is the APN password if required (leave empty if not used)

4. Set the GPRS server to Plaspy by IP and port
```
803#54.85.159.138#8888#
```
(You can alternatively use d.plaspy.com in the device interface if the device accepts domain names.)

5. Set the upload/update interval to 60 seconds
```
730#60#
```

6. Check current settings
```
886#
```

7. Check status
```
902#
```

Follow the device response messages to confirm each command succeeded. If a command format differs for your firmware, consult the manufacturer documentation.

## Configuration Notes

- Firmware and hardware revisions can change command formats or supported parameters; always confirm the exact SMS syntax for your device revision.
- The TK207 OBD can be configured via SMS as shown above; some installers may use a manufacturer tool instead depending on preference and availability.
- Choose UDP or TCP based on device capabilities; Plaspy accepts either and will automatically detect protocol behavior.
- The Plaspy server uses the same port 8888 for all supported devices, simplifying server configuration across a mixed fleet.
- Verify APN credentials are correct before setting the GPRS server so the device can establish a data connection.

## Why Use Plaspy with This Configuration

Configuring the Winrich TK207 OBD to report to Plaspy delivers consistent vehicle location visibility and OBD parameter reporting to a single, shared server endpoint. For fleet managers and vehicle owners, this setup centralizes tracking, event monitoring, and operational oversight without per-device server customization.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup information on the official Winrich website http://www.winrichgroup.com/en/ before applying critical configurations.
