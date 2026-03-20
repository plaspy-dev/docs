---
slug: /tzone/tz_bc02/configuration
id: tz_bc02-configuration
sidebar_label: Configuration
title: TZone - TZ-BC02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-BC02 and Plaspy integration with practical SMS commands and server settings
keywords:
  - TZone TZ-BC02 configuration
  - TZone TZ-BC02 setup
  - TZ-BC02 Plaspy integration
  - TZone GPS tracker setup
  - TZ-BC02 server configuration
  - TZone tracking software configuration
  - TZ-BC02 GPRS SMS commands
  - Plaspy tracker configuration
  - GPS tracker Plaspy setup
  - TZ-BC02 device setup
---

# TZone - TZ-BC02 Configuration

This page documents the public configuration context for using the TZone TZ-BC02 tracker with Plaspy. It focuses on the practical, publicly available steps and commands used to point the device at Plaspy so the tracker can report location and status. The guidance below uses the tracker description provided and the manufacturer SMS command examples that are publicly available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where public SMS commands are provided they are shown below; always verify your device firmware and follow the manufacturer documentation for device specific details.

## Configuration Overview

The goal of configuring a TZ-BC02 for Plaspy is to prepare the device to send location updates and device events to the Plaspy server using the standard platform endpoint and port. The TZ-BC02 may be configured by SMS using the public commands shown in this guide; those commands set APN, reporting interval, and the GPRS server endpoint. With the correct server and transport configured, Plaspy will detect the protocol automatically and show the device in the platform.

- Set the device APN and credentials so it can establish a GPRS data session
- Configure the device to report to the Plaspy server endpoint and port
- Set a reporting interval appropriate for your monitoring needs
- Activate GPRS data mode so the device pushes location updates to Plaspy
- Validate connectivity and confirm the device becomes visible in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port 8888

## Typical Requirements Before Setup

- A powered TZ-BC02 device with enough battery or power to complete initial setup
- A valid SIM card with an active data plan and the correct APN for your mobile operator
- Ability to send SMS messages to the device from an authorized phone number if using SMS configuration
- Access to the manufacturer's public SMS command format or configuration tool for the TZ-BC02
- Knowledge of the APN, and optionally APN username and APN password provided by your mobile operator
- Permission to restart or temporarily power cycle the device during configuration

## How This Tracker Connects to Plaspy

The TZ-BC02 is configured to establish a GPRS connection and send location updates to the Plaspy server endpoint at d.plaspy.com (54.85.159.138) on port 8888. Plaspy receives the device data and automatically determines the tracker protocol so you do not need to select a protocol manually in the platform.

- Device uses GPRS to open a data connection and send tracking packets to d.plaspy.com
- Packets are delivered to Plaspy at 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device capability and chosen setting
- Plaspy inspects incoming traffic and automatically detects the tracker protocol
- Once configured and connected the device becomes visible in the Plaspy platform for monitoring and reporting

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software as documented by TZone, for example the SMS command set for TZ-BC02.
2. Ensure the TZ-BC02 has a working SIM with the correct APN and that you can send SMS messages to the device.
3. Enter the Plaspy server address by using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply SMS or software changes such as setting APN, update interval, and the GPRS server entry.
6. Restart or power cycle the device if required by the manufacturer to apply settings.
7. Validate that the device reports to Plaspy by checking the device list and recent activity in the Plaspy platform.

## Example Configuration Commands

The TZ-BC02 supports SMS based configuration. The following public SMS commands are provided in manufacturer documentation and should be sent from an authorized phone number to the device. Preserve placeholders when you substitute your operator values.

1. Set the operator APN
- Use this command to set the APN and optional APN username and password. Replace {{apn}} with your operator APN. If your operator requires a username or password, include {{apnu}} and {{apnp}} respectively.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

- If no APN username or password is required, send:

```
*000000,011,{{apn}}#
```

2. Set the update interval to 60 seconds
- This sets periodic reporting interval. The example below sets a 60 second interval.

```
*000000,018,60,999#
```

3. Set the GPRS server to Plaspy
- Use the Plaspy server IP and port. This example uses the public Plaspy IP and port 8888.

```
*000000,015,0,54.85.159.138,8888#
```

- Alternatively, if your device accepts the domain name you may set d.plaspy.com where supported by firmware. When in doubt use the IP as shown above.

4. Activate GPRS mode
- Enable GPRS so the device can connect and send data.

```
*000000,016,1#
```

Notes on these commands
- The sequence matters: set APN first, then server and reporting interval, then activate GPRS.
- The prefix 000000 in these examples is the device command password shown in public examples. Verify your device password before sending commands.
- Placeholders: {{apn}} is the mobile operator APN, {{apnu}} is the APN username, and {{apnp}} is the APN password. Leave username and password out if not required.

## Configuration Notes

- SMS based setup is supported and commonly used for initial configuration; follow the exact command format that matches your device firmware.
- Firmware versions and hardware revisions can change command support and accepted parameters; double check commands with the manufacturer documentation.
- Choose UDP or TCP based on network reliability and device support; Plaspy accepts both and automatically detects the protocol when the device connects.
- Apply settings in the recommended order: APN first, server and interval next, then activate GPRS, and finally reboot if required.
- After configuration allow a short period for the device to establish a GPRS session and begin reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the TZ-BC02 gives organizations a consistent server endpoint and port to collect location data from supported trackers. Because Plaspy uses a single port and automatic protocol detection, integrating a device like the TZ-BC02 is a straightforward process once the APN and server settings are applied correctly.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific instructions, firmware changes, and command reference for the TZ-BC02 verify current information on the manufacturer website http://www.tzonedigital.com/ which may contain updates beyond the public content shown here.
