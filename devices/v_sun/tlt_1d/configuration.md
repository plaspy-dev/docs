---
slug: /v_sun/tlt_1d/configuration
id: tlt_1d-configuration
sidebar_label: Configuration
title: V-SUN - TLT-1D Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for V-SUN TLT 1D tracker showing Plaspy server settings and example SMS commands for connecting to Plaspy
keywords:
  - V-SUN TLT 1D configuration
  - V-SUN TLT 1D setup
  - V-SUN TLT 1D Plaspy
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - SMS setup commands
  - TLT 1D tracking software
  - GPS platform integration
---

# V-SUN - TLT-1D Configuration

This page covers the public configuration context for using the V-SUN TLT-1D tracker with Plaspy. It collects the practical, publicly available information needed to point a TLT-1D device at the Plaspy server and includes example SMS configuration commands that are commonly used with this model. Use this guide alongside the manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor software. The TLT-1D supports SMS and GPRS TCP connection options and the examples below show a common SMS based configuration flow using the device default password where provided.

## Configuration Overview

The configuration process prepares the TLT-1D to communicate reliably with the Plaspy platform over GPRS or SMS and to be visible in the Plaspy interface. The steps shown focus on setting the operator APN, configuring the GPRS server endpoint and port, and enabling reporting modes so your device can send location and event data to Plaspy.

- Set the mobile data APN so the tracker can establish GPRS connectivity.
- Configure the tracker to report to the Plaspy server endpoint and shared port.
- Tune update intervals for moving and stationary reporting as appropriate.
- Enable GPRS and GPS reporting modes so the device sends position data.
- Validate the device is reporting and visible in Plaspy after configuration.

## Plaspy Server Settings

When configuring the TLT-1D for use with Plaspy, use the following server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

These values are the public Plaspy endpoint settings you will apply on the tracker or via SMS commands.

## Typical Requirements Before Setup

- A powered and reachable TLT-1D tracker with a working SIM card and mobile network coverage
- Access to send configuration SMS messages from an authorized phone number or via the manufacturer configuration tool
- The operator APN and any APN username or password required by the SIM provider
- Knowledge of the device password if modified from factory default the public commands use 0000
- Access to the official V-SUN documentation or vendor tools for firmware or advanced settings
- Time to verify reporting on Plaspy after applying configuration

## How This Tracker Connects to Plaspy

The TLT-1D sends location and event data to Plaspy over GPRS using TCP or UDP and can also provide position via SMS where supported. In practice the device is configured to report to the common Plaspy server endpoint and port so Plaspy can automatically identify the protocol and parse incoming device data.

- Device sends GPS coordinates and event messages to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy receives GPRS TCP or UDP connections and automatically detects the tracker protocol
- Movement and static reporting intervals determine how often location updates are sent
- Alarms and SOS events are delivered as predefined messages and become visible in Plaspy
- SMS can be used to set configuration and to request position messages when needed

## Common Configuration Workflow

1. Access the official V-SUN configuration method such as SMS command interface or the vendor configuration tool described by the manufacturer.
2. If using SMS commands, confirm the device password and sender authorization for configuration messages.
3. Enter the Plaspy server using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Set the operator APN and any APN credentials required for GPRS connectivity.
6. Apply or save the configuration and perform a device restart if required by the tracker.
7. Validate that the device reports to Plaspy and appears in the platform with expected update intervals and events.

## Example Configuration Commands

The TLT-1D can be configured by sending SMS commands. The following public commands are provided in the manufacturer material. Send each command as a plain SMS from an authorized number to the device SIM. The commands below use the device default password 0000 where required.

1. Optional initial factory reset
   - Use only if you need to restore factory defaults before setup
```text
*RESET#0000##
```

2. Set the operator APN
   - Replace the placeholders with your operator APN values. {{apn}} is the APN name. {{apnu}} is the APN username if required. {{apnp}} is the APN password if required. If your carrier does not require username or password leave those placeholders empty according to device command rules.
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}#
```

3. Set the GPRS reporting server and port
   - The public manufacturer example uses the Plaspy server IP and port shown here. If your device accepts a domain name you may be able to use d.plaspy.com instead of the IP.
```text
#804#0000#54.85.159.138#8888##
```

4. Set the moving update interval
   - This example sets the moving update interval. Verify the interval unit with the manufacturer if uncertain.
```text
#805#0000#120#1##
```

5. Set the static or parked update interval
   - This example sets the static interval value. Confirm meaning of the numeric fields in your device manual.
```text
#809#0000#120#1##
```

6. Enable GPRS mode
   - This command enables the device to use GPRS reporting
```text
7100000
```

7. Enable GPS mode
   - This command enables GPS functionality on the tracker
```text
2220000
```

Note on placeholders and verification
- Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown and replace them with your carrier details. The default device password shown in the public commands is 0000. Confirm any differences on your device before sending commands.

## Configuration Notes

- Firmware and minor command syntax can vary between hardware revisions and firmware versions so confirm commands in the official V-SUN manual.
- The TLT-1D supports SMS based setup as shown in the public commands and GPRS reporting to the Plaspy server endpoint and port.
- Choose UDP or TCP based on device capability and network conditions; Plaspy supports both and will detect the protocol automatically.
- Confirm APN username and password requirements with the SIM operator before sending APN commands.
- If you use the server domain instead of the IP address make sure the tracker firmware supports domain names in server configuration.

## Why Use Plaspy with This Configuration

Using the V-SUN TLT-1D with Plaspy provides a straightforward way to centralize vehicle location, event reporting, and historical track data from devices that support SMS and GPRS. Pointing the tracker at the shared Plaspy server and the shared platform port allows Plaspy to automatically detect the protocol and begin ingesting location data for monitoring and operational oversight.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Manufacturer specifications and configuration methods can change over time so please verify the latest device specific setup details and command syntax on the V-SUN website http://www.v-sun.cc/ before applying changes.
