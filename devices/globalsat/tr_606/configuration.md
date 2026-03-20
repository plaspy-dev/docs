---
slug: /globalsat/tr_606/configuration
id: tr_606-configuration
sidebar_label: Configuration
title: GlobalSat - TR-606 Configuration
sidebar_class_name: menu_item_tracker
description: Configure GlobalSat TR-606 to report to Plaspy using public server settings and SMS commands with checksum examples
keywords:
  - GlobalSat TR-606
  - TR-606 configuration
  - TR-606 setup
  - GlobalSat tracker configuration
  - TR-606 server configuration
  - TR-606 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking TR-606
  - fleet management tracker
  - TR-606 SMS configuration
---

# GlobalSat - TR-606 Configuration

This page documents the public configuration context for using the GlobalSat TR-606 with the Plaspy platform. It focuses on the practical steps and public settings required to point the tracker at Plaspy so the device can report location and status data to the platform. Where manufacturer-specific tools or firmware behavior are required, this page explains the general flow and preserves the public SMS commands that GlobalSat exposes for remote configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices connect. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide as a practical reference and verify device-specific details with the official GlobalSat documentation when necessary.

## Configuration Overview

The goal of this configuration is to prepare the TR-606 so it reliably communicates with Plaspy and appears in your Plaspy fleet. The process sets the network endpoint and transport, validates connectivity, and optionally reboots the device to apply settings.

- Set the TR-606 to report to the Plaspy server endpoint so the device sends position and status data to the platform.
- Configure APN placeholders and any authentication values required by the device SIM and carrier.
- Choose transport (UDP or TCP) and set the shared Plaspy port so the tracker can reach the platform.
- Validate the connection and check that the tracker is visible in Plaspy after configuration.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the TR-606:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port across all supported devices so you do not need a device-specific port.

## Typical Requirements Before Setup

- A powered and installed TR-606 device with access to the installer or SMS configuration method provided by GlobalSat.
- An active SIM card in the device if you will use SMS or cellular data for configuration and reporting.
- The device IMEI number available for use in SMS configuration commands or the vendor configuration tool.
- Carrier APN information if the device requires GPRS/3G/UMTS data connectivity to send to the Plaspy server.
- Access to the official GlobalSat configuration method or software so you can apply settings and send commands as required.

## How This Tracker Connects to Plaspy

The TR-606 is configured to send location and status data to the shared Plaspy server endpoint and port. Plaspy receives the device traffic and automatically determines the correct protocol to interpret tracker messages.

- The tracker reports GPS position and device status to d.plaspy.com or 54.85.159.138 on port 8888.
- You can select UDP or TCP transport on devices that require explicit transport selection.
- Plaspy detects the tracker protocol automatically so a single server and port can support many device models.
- Once configured, the tracker will appear in Plaspy and transmit regular position updates and event reports.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the TR-606, such as the SMS command interface or the vendor configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the server port to 8888 (Plaspy uses this same port for all devices).
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure carrier APN values and any required credentials using the device configuration method.
6. Apply or save the configuration and reboot the device if required.
7. Validate that the device is reporting to Plaspy and visible in the platform.

If you use SMS-based configuration, send the public SMS commands shown below in the order provided and include the IMEI and checksum where indicated.

## Example Configuration Commands

The TR-606 supports SMS-based configuration commands. Plaspy uses a plain text format for SMS configuration examples. The public commands below are provided as they appear in GlobalSat documentation. Keep placeholders and compute the checksum exactly as required by the device.

Format note used by Plaspy examples:
TSPRXAB27GHKLMnaicz*U!

1) Setup the tracker to report to Plaspy (replace placeholders and compute checksum)

- Template SMS command to configure APN and Plaspy server settings:
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Placeholder explanations:
  - {{imei}} — the device IMEI number (required by the tracker for command targeting).
  - {{apn}} — the carrier APN name.
  - {{apnu}} — the APN username if the carrier requires one.
  - {{apnp}} — the APN password if the carrier requires one.
  - {{checksum}} — two character uppercase hexadecimal checksum calculated over the command string up to but not including the asterisk character.

2) Optional reboot command to apply settings (labelled here as optional but recommended when required by firmware):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation summary:
- The required checksum is the XOR of all character codes in the command up to the "*" character, represented as a two digit uppercase hexadecimal value. Compute this checksum and insert it where the {{checksum}} or {{checksumreeboot}} placeholder appears.

Send these SMS commands from an authorized phone number according to the tracker documentation. The exact checksum method and command acceptance behavior are defined by GlobalSat firmware.

## Configuration Notes

- Firmware differences and hardware revisions can affect command syntax and available fields; confirm the exact command set for your TR-606 firmware version.
- The TR-606 supports SMS based configuration in the public examples above; use SMS when you cannot access a wired or software configuration method.
- Choose UDP or TCP based on your network environment; both transports are supported and Plaspy will accept either on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.
- Always verify APN credentials with your mobile operator before configuring the device.

## Why Use Plaspy with This Configuration

Using the GlobalSat TR-606 with Plaspy allows organizations to consolidate vehicle location and status reporting into a single platform. The shared Plaspy server settings simplify setup across multiple device models, and Plaspy's automatic protocol detection reduces the need for model specific server endpoints.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance please verify details with GlobalSat at https://www.globalsat.com.tw/ as manufacturer specifications and setup methods can change over time.
