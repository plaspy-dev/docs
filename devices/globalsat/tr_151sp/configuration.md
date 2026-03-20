---
slug: /globalsat/tr_151sp/configuration
id: tr_151sp-configuration
sidebar_label: Configuration
title: GlobalSat - TR-151SP Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for GlobalSat TR-151SP integration with Plaspy including server settings and SMS commands
keywords:
  - GlobalSat TR-151SP configuration
  - GlobalSat TR-151SP setup
  - TR-151SP Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration
  - TR-151SP SMS commands
  - asset tracking configuration
  - vehicle tracking setup
  - tracking platform integration
  - TR-151SP server configuration
---

# GlobalSat - TR-151SP Configuration

This page describes the public configuration context for using the GlobalSat TR-151SP tracker with the Plaspy platform. It focuses on the practical, publicly available steps and commands to point the TR-151SP at Plaspy so the device can report location and status. The TR-151SP is a GPS/GSM/GPRS tracker with long battery life and supports SMS based configuration as shown in the public command examples below.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol when devices connect. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor configuration tools you use. Use the guidance here together with the official GlobalSat documentation and any installer notes for your device revision.

## Configuration Overview

The goal of this configuration process is to prepare the TR-151SP so it can communicate reliably with Plaspy using Plaspy's shared server endpoint and port. The device supports SMS based setup commands, and the public command examples below show how to set APN values, server address, and port for Plaspy.

- Set the device network parameters and APN values so the tracker can use GPRS to connect.
- Configure the tracker to report to Plaspy by specifying the Plaspy server endpoint and port.
- Validate connectivity so location reports and device events appear in Plaspy.
- Use the provided SMS commands to apply configuration when the manufacturer tool is not available.
- Reboot or restart the tracker after applying settings to ensure the new server and port are used.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and the platform will detect the device protocol automatically when the tracker connects to the configured server endpoint.

## Typical Requirements Before Setup

- A charged TR-151SP with a working SIM card and adequate GSM network coverage for GPRS or SMS.
- IMEI of the device (required in the SMS command templates).
- APN, APN username, and APN password for the SIM provider if the tracker will use GPRS data.
- Access to an SMS sending method or the official GlobalSat configuration tool for sending setup commands.
- A note of the current firmware or hardware revision if available, as command syntax can vary.

## How This Tracker Connects to Plaspy

The TR-151SP can be configured to send its data to Plaspy by updating its server and network settings. Once configured, the tracker will use the shared Plaspy endpoint and port for data reporting and Plaspy will detect the protocol automatically.

- The tracker is pointed to Plaspy using the server domain or IP and port in the device configuration.
- The device uses GPRS or SMS based setup to establish the server address and port values.
- After configuration the tracker sends location and event messages to d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy detects the device protocol automatically so no per device protocol selection is required in the platform.
- Using the correct APN values ensures the tracker can initiate a GPRS session to connect to the Plaspy server.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the TR-151SP, either the manufacturer tool or SMS command interface.
2. Enter the Plaspy endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 as required by the device interface.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the tracker requires a transport selection during setup.
5. Provide APN, APN username, and APN password placeholders as needed for your SIM using {{apn}}, {{apnu}}, and {{apnp}}.
6. Apply or save the configuration and then restart or reboot the device if required by the device firmware.
7. Validate that the TR-151SP reports to Plaspy and that data appears in the Plaspy platform.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages. The public example format used by Plaspy appears as a full SMS command line. Preserve the placeholders when you populate the command.

- Setup command
Send this SMS (replace placeholders and calculate checksum as explained below):

```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Reboot command (optional, use when a restart is needed to apply settings)

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notes about placeholders and checksum:
- {{imei}} — replace with the device IMEI.
- {{apn}} — replace with your SIM provider APN.
- {{apnu}} — replace with your APN username if required, or leave blank if none.
- {{apnp}} — replace with your APN password if required, or leave blank if none.
- {{checksum}} and {{checksumreeboot}} — the command requires a checksum appended after the asterisk. The publicly provided checksum routine computes an XOR of the command characters before the asterisk and outputs a two digit uppercase hexadecimal value. Ensure you compute the checksum for the portion of the command before the * and append it as shown.

The original public example also referenced an overall SMS wrapper format used by Plaspy for batch messages. When using single SMS configuration, send the commands exactly as shown above with the correct checksum.

## Configuration Notes

- The TR-151SP supports SMS based configuration in the public examples shown here. Use the official GlobalSat procedure when you have the manufacturer tool available.
- Checksum calculation is required by the command format. The checksum is the XOR of each byte of the command string before the asterisk then converted to a two character uppercase hexadecimal value.
- Firmware and regional variants can change command syntax or required parameters. Verify commands against your device firmware notes.
- Choose UDP or TCP according to installer preference or device capability. Plaspy supports both and detects the protocol automatically.
- All Plaspy devices use the same port 8888 so use that value when setting the device server port.

## Why Use Plaspy with This Configuration

Using the GlobalSat TR-151SP with Plaspy gives organizations a straightforward way to get device telemetry into a centralized platform. Configuring the tracker to report to Plaspy's shared server endpoint enables consistent visibility of location and events and leverages Plaspy's automatic protocol detection so you do not need to manage protocol selection per device.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details and firmware notes from the manufacturer at https://www.globalsat.com.tw/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm current instructions on GlobalSat's official site before wide deployment.
