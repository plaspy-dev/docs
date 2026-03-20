---
slug: /concox/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: Concox - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox GT02 with Plaspy server settings and example SMS commands for fast setup
keywords:
  - Concox GT02 configuration
  - Concox GT02 setup
  - Concox GT02 Plaspy
  - GT02 server configuration
  - GT02 GPS tracker setup
  - Concox tracker configuration
  - vehicle tracking GT02
  - GPS platform configuration
  - Plaspy tracker setup
  - GT02 SMS commands
---

# Concox - GT02 Configuration

This page covers the public configuration context for using the Concox GT02 tracker with Plaspy. It explains the shared server settings Plaspy requires, the typical preparation steps, and practical SMS configuration commands that are commonly used to point a GT02 device at the Plaspy service for real time tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools provided. The GT02 itself supports GPS, GSM, and GPRS and includes SMS command support for configuration, which is reflected in the example commands below.

## Configuration Overview

Configuring a GT02 for Plaspy means preparing the tracker to communicate over GPRS to the Plaspy server endpoint, ensuring the device has the correct APN and transport settings, and validating that periodic updates arrive at the platform.

- Set the operator APN and any APN credentials so GPRS data is available.
- Point the device to the Plaspy server address using the shared server settings.
- Configure the reporting interval so positions are transmitted at the desired frequency.
- Enable GPRS mode and verify parameters using the device verification command.
- Validate connectivity on Plaspy so the device appears online and reports location updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured using either)
- Plaspy automatically detects the tracker protocol and all devices use the same port on Plaspy

## Typical Requirements Before Setup

- A powered GT02 device with working internal power or vehicle power connected.
- An active SIM card with GPRS data and SMS capability installed in the tracker.
- APN information for the SIM operator including optional APN username and password.
- Access to a method to send SMS commands to the device (phone, modem, or manufacturer tool).
- Access to the device installer guide or manufacturer configuration reference for your firmware version.
- Ability to restart the tracker after configuration if required.

## How This Tracker Connects to Plaspy

The GT02 sends location and device data over GPRS to the Plaspy shared server endpoint and port. Once configured with the correct APN and server parameters, the tracker will report at the configured timer interval so Plaspy can display location and status.

- The tracker uses GPRS to open a data connection to d.plaspy.com or the Plaspy server IP on port 8888.
- You can configure the device to use UDP or TCP as the transport protocol.
- Plaspy automatically detects the protocol used by the tracker and accepts the connection on the shared port.
- Periodic reporting is driven by the device timer setting so updates arrive at Plaspy at the chosen interval.
- Plaspy surfaces positions and basic device connectivity information when the tracker reports successfully.

## Common Configuration Workflow

1. Consult the official Concox GT02 configuration method or installer guide for your firmware and region.
2. Ensure the SIM has active data and note the APN credentials to use as placeholders in device commands.
3. Enter the Plaspy server address by sending d.plaspy.com or the server IP 54.85.159.138 as the GPRS server and set port 8888.
4. Choose UDP or TCP on the device if transport selection is required.
5. Apply or save the configuration, enable GPRS mode, and restart the device if the tracker requires a reboot.
6. Validate that the tracker reports to Plaspy and that location updates arrive at the configured timer interval.

## Example Configuration Commands

The Concox GT02 supports SMS-based configuration commands. Below are the common public commands in the order often used during setup. Keep placeholders as shown and replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN values when required.

- Optional initial factory reset (use only when you need to return the device to factory defaults):
```
FACTORY#
```

- Set time zone to UTC 0:
```
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your APN. If your operator requires a username and password include {{apnu}} and {{apnp}}:
```
APN,{{apn}}#
```
or with credentials:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to use Plaspy by domain (UDP/TCP choice is device-level; port is 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```
Alternative using Plaspy server IP:
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds. Some firmware accepts either form:
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode:
```
GPRSON,1#
```

- Verify current GPRS and server parameters:
```
GPRSSET#
```

Notes on placeholders:
- {{apn}} is the APN string provided by the mobile operator.
- {{apnu}} is the APN username when required.
- {{apnp}} is the APN password when required.

Send each command as an individual SMS to the GT02 device number following the device documentation for SMS formatting and any required syntax such as command terminators.

## Configuration Notes

- Firmware differences may change exact command syntax or available parameters; always verify commands against your device firmware and installer notes.
- The GT02 supports SMS-based configuration, which is useful when no PC configuration tool is available or for remote setup.
- Choose UDP or TCP according to local network behavior; Plaspy accepts both and automatically detects the protocol.
- Plaspy uses the same port (8888) for all supported devices, so set port 8888 when configuring the tracker.
- Confirm APN credentials with the mobile operator before attempting GPRS registration to avoid connection failures.

## Why Use Plaspy with This Configuration

Using the Concox GT02 with Plaspy provides a straightforward way to centralize vehicle and asset visibility. With the GT02 reporting over GPRS to the Plaspy shared server endpoint, organizations gain continuous positioning updates and a consistent server setup across devices.

Learn more about Plaspy and how it handles device connectivity and tracking on the Plaspy website https://www.plaspy.com. For the latest device specific details, firmware guidance, and manufacturer documentation confirm the current setup methods on the Concox website https://www.iconcox.com/ since manufacturer specifications and firmware behavior can change over time.
