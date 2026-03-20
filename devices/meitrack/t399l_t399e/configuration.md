---
slug: /meitrack/t399l_t399e/configuration
id: t399l_t399e-configuration
sidebar_label: Configuration
title: Meitrack - T399L/T399E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack T399L T399E with Plaspy including server setup SMS commands and practical steps for fleet integration
keywords:
  - Meitrack T399L configuration
  - Meitrack T399E setup
  - T399L T399E Plaspy
  - Meitrack server configuration
  - GPS tracker configuration Plaspy
  - vehicle tracker setup
  - fleet tracker configuration
  - Meitrack GPRS setup
  - T399 series configuration
  - Plaspy tracker compatibility
---

# Meitrack - T399L/T399E Configuration

This page documents the public configuration context for using the Meitrack T399L and T399E trackers with Plaspy. It describes the shared server settings Plaspy requires, the common setup workflow, and practical SMS commands that are published for the model. Use this guide to prepare devices and confirm connectivity before adding them into your Plaspy fleet environment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The T399 series supports SMS configuration and GPRS reporting, and the sample SMS commands below show the common public setup pattern used to point a device to Plaspy.

## Configuration Overview

This configuration process prepares a T399L or T399E to report GNSS position and event data to Plaspy so the tracker becomes visible in the platform. The public commands below demonstrate how to set server endpoint, reporting interval, timezone, and basic event behavior using SMS, which is one of the manufacturer provided methods.

- Point the device to the Plaspy server endpoint so it can stream location and telemetry.
- Configure reporting interval and event reporting so data arrives at predictable frequencies.
- Confirm APN and cellular connectivity so GPRS sessions can be established.
- Validate that the device is reporting to Plaspy and visible in the platform.
- Optionally return the device to factory settings before bulk deployment for a consistent baseline.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port for reporting

## Typical Requirements Before Setup

- Device is powered and has been installed or connected to a test power supply
- Active cellular SIM card inserted and enabled for data using the correct APN
- Ability to send SMS commands to the tracker phone number if using SMS configuration
- Access to the official Meitrack configuration method or software for your firmware
- Knowledge of the device password for SMS commands the default password shown in public examples is 0000
- A test plan to validate reporting to the Plaspy server endpoint after configuration

## How This Tracker Connects to Plaspy

The T399L/T399E is configured to report position and event data to the shared Plaspy server endpoint and port so Plaspy can ingest real time telemetry. Once configured, the device opens a GPRS session and sends periodic messages using the selected transport.

- Tracker sends periodic position updates to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be either UDP or TCP depending on device selection and network conditions
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required in the platform
- Event and alarm reports are delivered to Plaspy and appear as incidents, geofence triggers, or telemetry updates
- Successful integration provides continuous visibility and historical logging inside Plaspy

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the unit either by SMS commands, manufacturer software, or installer tool appropriate for your firmware.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure APN and any username or password needed for GPRS then apply or save the configuration.
6. Restart the device if required by the firmware to apply the new GPRS server settings.
7. Validate that the device reports to Plaspy by confirming incoming messages or device visibility in the Plaspy platform.

## Example Configuration Commands

The T399L/T399E can be configured by SMS using the device password and public command format. The default password used in these public examples is 0000. Send these commands as SMS messages to the device phone number. Preserve the placeholders when you replace them with your real values.

- Optional initial factory reset command
```text
0000,F11
```
Note: The factory reset command can be used during initial setup when you want to ensure default settings. Use it only when needed.

- Set the GPRS server to Plaspy using server IP and port with APN placeholder
```text
0000,A21,2,54.85.159.138,8888,[apn]
```
- If your APN requires username and password include the optional placeholders [apnu] and [apnp] after the APN
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Explanation of placeholders
- [apn] is the mobile data APN for the SIM card
- [apnu] is the APN username if required by your mobile operator
- [apnp] is the APN password if required by your mobile operator

- Set the time zone to UTC 0
```text
0000,B36,0
```

- Set the update interval to every 1 minute
```text
0000,A12,6,0
```

- Set events using a public example command
```text
0000,C03,0
```

Keep the commands in the same order when a sequence is required for initial provisioning. Replace the password 0000 if you have changed the device password from the factory default.

## Configuration Notes

- Manufacturer firmware versions and regional hardware variants can change command syntax and behavior. Always confirm with the device documentation for your firmware.
- Choose UDP or TCP based on your network and operational requirements. Both transports are supported by Plaspy and the device, but behavior of retransmission and session handling differs.
- SMS based configuration is shown in the public example but Meitrack often provides PC or mobile configuration tools that may offer bulk provisioning and OTA updates where supported.
- Plaspy listens on the same port 8888 for all devices and automatically detects the tracker protocol so the platform side does not require per device port changes.
- If you use the factory reset command, treat it as optional and only when you need to clear previous configuration.

## Why Use Plaspy with This Configuration

Deploying the Meitrack T399L or T399E with Plaspy gives fleet operators a straightforward path to real time tracking, event monitoring, and integrated telemetry. Pointing a device to Plaspy with the shared server endpoint and port standardizes connectivity across a mixed fleet and lets the platform detect protocols automatically for faster onboarding.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup details, firmware behavior, and manufacturer guidance at https://www.meitrack.com/ since manufacturer specifications and configuration methods can change over time.
