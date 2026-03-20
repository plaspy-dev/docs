---
slug: /noran/nr200/configuration
id: nr200-configuration
sidebar_label: Configuration
title: Noran - NR200 Configuration
sidebar_class_name: menu_item_tracker
description: Step by step configuration guidance for Noran NR200 to work with Plaspy including server settings SMS commands and verification
keywords:
  - Noran NR200 configuration
  - NR200 setup Plaspy
  - Noran GPS tracker configuration
  - NR200 server configuration
  - Plaspy tracker integration
  - GPS tracker SMS commands
  - vehicle tracking setup
  - GPRS server settings
  - fleet tracking configuration
  - NR200 APN setup
---

# Noran - NR200 Configuration

This page describes the public configuration context for using the Noran NR200 Magnetic Wireless GPS Tracker with the Plaspy platform. It collects the practical server settings, SMS command examples, and the common steps required to point an NR200 device to Plaspy so the device can report location and telemetry to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The NR200 supports both SMS and GPRS configuration methods in public documentation; sample SMS commands and a default device password are included below for convenience.

## Configuration Overview

Configuring the NR200 for Plaspy prepares the device to send position and telemetry reliably to the Plaspy ingestion endpoint and lets you validate that the tracker appears in your Plaspy dashboard. The goal is to set the operator APN, point the device to the Plaspy server, enable GPRS mode if required, and confirm the device is successfully reporting.

- Set the cellular APN so the device can establish a data connection for GPRS reporting.
- Configure the device to report to the Plaspy server endpoint and port.
- Enable GPRS reporting mode on the tracker and save the configuration.
- Verify device identity and current settings using the manufacturer verification command.
- Confirm the device starts reporting to Plaspy and appears in the platform.

## Plaspy Server Settings

Use these public Plaspy server values when configuring the NR200. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A charged NR200 device with an active SIM card that has data enabled and correct APN settings.
- Access to the manufacturer's configuration method such as SMS commands or vendor software.
- A phone or SMS gateway capable of sending configuration SMS to the device if using SMS setup.
- The device password if required for SMS commands (public sample uses 000000 as shown below).
- Basic knowledge of the operator APN values for the SIM in the device.

## How This Tracker Connects to Plaspy

The NR200 sends location and telemetry over cellular networks and can be configured to report to the shared Plaspy server endpoint and port. Once configured, Plaspy ingests device messages and maps them into real-time location, alerts, and history for operators.

- Reports position and telemetry to d.plaspy.com (or the equivalent IP) on port 8888.
- Can use either UDP or TCP transport depending on device selection; Plaspy will detect the device protocol automatically.
- Device status and configuration can be verified by sending the NR200 the manufacturer status command over SMS.
- After a successful GPRS connection the device will begin sending regular location updates to Plaspy for visibility and alerting.

## Common Configuration Workflow

1. Access the official Noran configuration method such as SMS commands or the vendor configuration tool per the manufacturer documentation.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 when the device requires a server host.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires selection of transport protocol.
5. Apply or save the configuration on the device (SMS commands are applied on receipt; software tools typically have a save step).
6. Restart the device if required by the firmware or to ensure the new settings take effect.
7. Validate that the device is reporting to Plaspy by checking the device status and confirming visibility in your Plaspy account.

## Example Configuration Commands

The NR200 supports SMS-based configuration. The sample configuration flow below uses the device password 000000 in the command strings. Keep placeholders such as [apn], [apnu], and [apnp] intact and replace them with your operator APN and optional APN username and password when required.

1. Set the operator APN
   - Replace [apn] with your cellular operator APN. If your operator requires a username or password provide [apnu] and [apnp] as additional comma separated values.
```
A000000,012,[apn]
```
   - If your APN requires username and password:
```
A000000,012,[apn],[apnu],[apnp]
```

2. Set the GPRS server to Plaspy (IP and port shown)
```
A000000,010,54.85.159.138,8888
```
   - Alternatively use the domain (if supported by the device) by replacing the IP with d.plaspy.com:
```
A000000,010,d.plaspy.com,8888
```

3. Switch the device to GPRS mode
```
A000000,011,1
```

4. Check current settings and device status (returns device Id and status)
```
A000000,004
```
   - The device Id is reported in the status response as the first word beginning with NR. Use this to confirm you have the correct device.

Notes about the commands
- The leading A000000 strings use the sample device password 000000. If your device password is different, replace the six digits accordingly.
- Preserve the [apn], [apnu], and [apnp] placeholders when copying commands and substitute your real operator values before sending.
- Send these commands as SMS messages to the NR200 from a phone number authorized by the device if access control is configured.

## Configuration Notes

- Firmware and hardware revisions can change exact command formats and supported features; always check the device response after sending commands.
- Choose UDP or TCP according to device firmware behavior; Plaspy will detect the protocol automatically but the device must be set to the matching transport.
- SMS setup is useful for field configuration or when no data connection is available; GPRS configuration is required for live reporting to Plaspy.
- Keep the device password secure and update it from the default if the manufacturer instructions recommend doing so.
- If changes do not take effect immediately, try restarting the device or re-sending the configuration commands.

## Why Use Plaspy with This Configuration

Configuring the NR200 to report to Plaspy gives teams a unified view of location, alerts, and history for discreet battery powered assets and temporary vehicle installs. The shared server settings and automatic protocol detection in Plaspy simplify integration so devices from supported vendors can be ingested consistently without unique per-device platforms.

To learn more about Plaspy and how it supports mixed fleets and asset tracking visit https://www.plaspy.com. For device specific firmware behavior, exact SMS command formats, and the latest manufacturer guidance verify details with Noran at http://www.norantracker.com/ as manufacturer specifications and setup steps can change over time.
