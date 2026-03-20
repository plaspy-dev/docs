---
slug: /castel/mpip_618_wa/configuration
id: mpip_618_wa-configuration
sidebar_label: Configuration
title: Castel - MPIP-618-WA Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Castel MPIP-618-WA for Plaspy with server settings SMS commands and practical setup steps
keywords:
  - Castel MPIP-618-WA configuration
  - Castel MPIP-618-WA setup
  - MPIP-618-WA Plaspy configuration
  - Castel GPS tracker setup
  - Plaspy server configuration
  - GPS tracker SMS configuration
  - vehicle tracking platform configuration
  - fleet tracking MPIP-618-WA
  - OBD GPS tracker configuration
  - Castel tracker server setup
---

# Castel - MPIP-618-WA Configuration

This page describes the public configuration context for using the Castel MPIP-618-WA tracker with the Plaspy platform. It focuses on the practical server settings and setup workflow commonly used to connect this device to Plaspy so the tracker can report location and diagnostic data to your account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; this guide highlights the public SMS and configuration points known for the MPIP-618-WA and how to apply Plaspy server values.

## Configuration Overview

The goal of this configuration is to prepare the MPIP-618-WA to communicate reliably with Plaspy so it appears and reports correctly in the platform. For this device the manufacturer provides multiple configuration methods including SMS commands, COTA, or PC software; the examples below use the SMS command format that is publicly documented.

- Set the device GPRS APN and server destination so the tracker can send data to Plaspy.
- Choose the transport protocol (UDP or TCP) and target port consistent with Plaspy requirements.
- Validate connectivity and confirm the device reports to the Plaspy server endpoint.
- Use the device password or secret key when sending SMS configuration commands.
- Verify that Plaspy receives telemetry and make small adjustments as needed for firmware differences.

## Plaspy Server Settings

Use the following Plaspy connection settings when configuring the MPIP-618-WA:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible MPIP-618-WA unit installed or connected via the OBD port as required.
- A valid SIM card with active GPRS data service and the correct APN for your mobile carrier.
- Ability to send SMS commands to the device or access to the manufacturer's PC software or COTA update method.
- The device identification information needed to derive the SMS secret key if required by the tracker.
- Basic familiarity with APN placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when applying SMS templates.
- A short period to validate and test after configuration so you can confirm the device reports to Plaspy.

## How This Tracker Connects to Plaspy

When configured, the MPIP-618-WA sends location and device data to Plaspy using the shared server endpoint and port. Plaspy receives those packets and maps them to the correct device using the tracker protocol, which Plaspy detects automatically.

- The tracker is configured to report to the Plaspy server domain or IP address on port 8888.
- Data is sent over either UDP or TCP depending on the transport chosen during configuration.
- Plaspy interprets the incoming packets and associates them with the device profile.
- Once reporting is established, location updates and diagnostic events become visible in Plaspy.
- Regular validation helps ensure alarms and OBD related reports are received as expected.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the MPIP-618-WA, such as SMS commands, COTA, or PC configuration software.
2. Enter the Plaspy server host as either d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
3. Set the destination port to 8888; note that Plaspy uses the same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires a selection.
5. Save or apply the configuration on the tracker and restart the device if the manufacturer instructions recommend it.
6. Validate that the device reports to Plaspy and confirm visibility of location and events in the platform.
7. If needed, use the device verification commands or manufacturer tools to read back the GPRS and server settings.

## Example Configuration Commands

The MPIP-618-WA supports SMS based configuration. The manufacturer documents that SMS commands are protected by a secret key. The default secret key for SMS instructions is the last 6 ASCII characters of the device ID. Send configuration commands as SMS messages to the tracker phone number.

Set the GPRS APN and server destination
- Replace {{SecretKey}} with the device SMS secret key
- Replace {{apn}}, {{apnu}}, {{apnp}} with your carrier APN, APN user, and APN password as needed

```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

Verify the GPRS configuration on the device

```
*{{SecretKey}}#get gprs#*
```

Notes on placeholders and usage
- {{SecretKey}} is the SMS command password; by default it is the last 6 ASCII characters of the device ID for this tracker.
- {{apn}} is the Access Point Name for the SIM card carrier; {{apnu}} and {{apnp}} are optional carrier user and password fields.
- Send these commands as plain SMS text to the device number assigned to the tracker.
- The order of parameters in the set command is important and follows the manufacturer syntax: APN, APN user, APN password, server IP, server port.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or available parameters; always check the manufacturer release notes if behavior differs.
- The MPIP-618-WA supports multiple configuration channels; if SMS is not available, use COTA or the PC tool provided by Castel.
- Choose UDP or TCP according to your network environment and device behavior; both transports are supported by Plaspy on port 8888.
- Keep the secret key handling secure and confirm the device ID method to derive the default key before sending configuration commands.
- After applying settings, allow a short period for the device to register to the network and for Plaspy to receive the first packets.

## Why Use Plaspy with This Configuration

Using Plaspy with the Castel MPIP-618-WA provides a practical way to centralize vehicle location and OBD diagnostic information in a single platform. With the MPIP-618-WA configured to report to Plaspy's shared server endpoint and port, fleet operators gain near real time visibility into vehicle position and event reporting while leveraging Plaspy's automatic protocol detection to reduce manual protocol mapping.

To learn more about Plaspy and how it supports a wide range of trackers, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance for the MPIP-618-WA, verify current information on the manufacturer site http://www.castelecom.com/ since setup methods and firmware behavior can change over time.
