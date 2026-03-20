---
slug: /aoya/ay_t801/configuration
id: ay_t801-configuration
sidebar_label: Configuration
title: AoYa - AY-T801 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AoYa AY T801 showing Plaspy server settings and SMS commands for setup
keywords:
  - AoYa AY-T801 configuration
  - AoYa AY-T801 setup
  - AY-T801 Plaspy
  - AY-T801 server configuration
  - AY-T801 SMS commands
  - AoYa tracker configuration
  - vehicle tracker setup Plaspy
  - GPS tracker server settings
  - AY-T801 APN configuration
  - Plaspy device integration
---

# AoYa - AY-T801 Configuration

This page documents the public configuration context for using the AoYa AY-T801 tracker with the Plaspy tracking platform. It focuses on the practical, publicly available steps and server settings you will need to point the device at Plaspy so the tracker can report location and events to your Plaspy account. Where manufacturer commands are publicly available, those are shown as examples.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AY-T801 supports SMS configuration commands in public documentation, so this guide includes those SMS command examples and notes about placeholders and verification.

## Configuration Overview

The goal of configuration is to prepare the AY-T801 so it can communicate reliably with Plaspy, report position and alarms, and appear in the Plaspy platform for monitoring and playback. Use the manufacturer commands to set APN, server address, transport mode, and to verify the device state before registering it in Plaspy.

- Configure APN and optional APN credentials so the tracker can use mobile data for reporting.
- Point the device to the Plaspy server (domain or IP) and set the port shared by Plaspy devices.
- Choose the preferred transport (UDP or TCP) and apply the change so the device sends packets to Plaspy.
- Verify settings and connectivity using the device verification command so the tracker appears in Plaspy.
- Optionally perform a factory reset or time zone setting if preparing devices for deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A charged and functional AY-T801 unit accessible for configuration
- A valid mobile data SIM card installed and activated with a working APN
- Ability to send SMS commands to the device if using SMS-based configuration
- The default device password if required for configuration (public examples use 123456)
- Access to the official AoYa configuration method or documentation for your firmware revision
- Basic tools to power cycle or restart the device if a reboot is required after applying settings

## How This Tracker Connects to Plaspy

The AY-T801 is configured to send its GPRS reports to the Plaspy server endpoint and port so location updates and alarms appear in the Plaspy platform. Plaspy will receive the device packets and automatically detect the tracker protocol so you do not need to specify a protocol on the platform side.

- The device reports position and event messages to d.plaspy.com or 54.85.159.138 at port 8888
- Transport can be selected as UDP or TCP on the device to match network conditions
- Plaspy automatically detects the tracker protocol once packets reach the server
- Events such as alarms and status updates sent by the tracker are available in Plaspy for monitoring and playback
- Successful configuration enables device visibility, track playback, and alarm reporting in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AY-T801 (public documentation shows SMS commands as one common method).
2. Set the device APN using the operator APN command so GPRS data is available.
3. Enter the Plaspy server address using either d.plaspy.com or the IP address 54.85.159.138.
4. Set the port to 8888 as Plaspy uses the same port across devices.
5. Choose UDP or TCP transport on the tracker if it requires a transport selection.
6. Apply or save the configuration and, if required, restart or power cycle the device.
7. Validate that the device reports to Plaspy using the device verification command or by checking device presence in the Plaspy platform.

## Example Configuration Commands

The following SMS commands are taken from publicly available AoYa AY-T801 configuration examples. These commands use the device password 123456 as shown in the public examples. Preserve the order where the manufacturer indicates order matters. Replace placeholders with your operator values.

- Note: The default device password shown in public documentation is 123456. Use your device password if it has been changed.

1. Optional factory reset (initial or when required)
```
begin123456
```
2. Set the time zone to UTC+0 (adjust value as required for your local time zone)
```
time zone123456 0
```
3. Set the operator APN (replace {{apn}} with your mobile operator APN)
```
apn123456 {{apn}}
```
4. Set APN username and password if your operator requires them (replace placeholders)
```
up123456 {{apnu}} {{apnp}}
```
5. Set the GPRS server to Plaspy using the public IP and port
```
adminip123456 54.85.159.138 8888
```
6. Switch to GPRS mode and select transport (public examples show a couple of forms)
- Example with parameters:
```
gprs123456,1,1
```
- Simpler form sometimes shown:
```
gprs123456
```
7. Verify device settings
```
check123456
```

- Placeholders explained:
  - {{apn}} — your mobile operator APN string (required for data)
  - {{apnu}} — APN username if required by your operator
  - {{apnp}} — APN password if required by your operator

## Configuration Notes

- The SMS commands above are public examples; exact syntax can vary by firmware version or regional device build.
- The factory reset command is optional and should only be used when preparing a device or troubleshooting configuration problems.
- Choose UDP or TCP based on network reliability and operator preferences; Plaspy accepts either on port 8888.
- Always verify the device reports to the Plaspy endpoint after configuration using the check command or platform visibility.
- Keep in mind that APN credentials and SMS configuration permissions depend on your mobile operator and SIM profile.

## Why Use Plaspy with This Configuration

Using the AY-T801 with Plaspy provides a straightforward path to consolidated device visibility, event monitoring, and track playback. By pointing the device to the shared Plaspy server and port, organizations gain centralized access to location and alarm data for operational oversight without having to manage custom server deployments.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the most current device specific configuration commands, firmware differences, and manufacturer guidance verify details on the official AoYa website http://www.aoyagps.com/ as vendor instructions and firmware behavior can change over time.
