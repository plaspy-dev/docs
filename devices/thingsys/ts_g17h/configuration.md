---
slug: /thingsys/ts_g17h/configuration
id: ts_g17h-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the ThingSys TS-G17H showing how to point the tracker to Plaspy and validate reporting
keywords:
  - ThingSys TS-G17H configuration
  - ThingSys TS-G17H setup
  - TS-G17H Plaspy configuration
  - TS-G17H server configuration
  - TS-G17H GPS tracker setup
  - Plaspy tracker configuration
  - GT06 tracker configuration
  - vehicle GPS tracker setup
  - fleet tracking configuration
  - TS-G17H APN server setup
---

# ThingSys - TS-G17H Configuration

This page covers the public configuration context for using the ThingSys TS-G17H tracker with Plaspy. It gathers the practical, publicly available setup information you will typically use to point a TS-G17H at Plaspy and validate that the device is reporting location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TS-G17H supports SMS/command configuration (public commands are shown later), and the steps below focus on the required server and connectivity settings to integrate the tracker with Plaspy.

## Configuration Overview

Configuring the TS-G17H for Plaspy means preparing the device to send GPRS TCP/IP reports with the correct APN and server endpoint so Plaspy can ingest its GT06-formatted messages. The process is typically done via the manufacturer configuration method (SMS or a configuration tool), then validated by confirming the device appears and reports in Plaspy.

- Point the tracker to Plaspy’s server endpoint and port so position and alarm messages arrive at the platform.
- Configure the mobile operator APN, and APN credentials if required, so GPRS data sessions succeed.
- Choose the transport (UDP or TCP) if the device requires an explicit selection and ensure the port is set to the Plaspy port.
- Validate connectivity and reporting so the device shows up in Plaspy with live position and events.
- Optionally use a factory reset or verification commands when provisioning new devices or troubleshooting connectivity.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged and installed TS-G17H with access to the installation location and wiring for power and ignition detection.
- A working SIM card with mobile data enabled and the correct operator APN, plus usable credit or a data plan if required.
- Access to the manufacturer configuration method for the TS-G17H (SMS commands or vendor software) to set APN and server parameters.
- The device default password if required for remote commands (the public default shown in the example commands below).
- The ability to read device responses by SMS or via a serial/config tool to confirm settings when available.
- An account on Plaspy and permission to add or verify devices so you can confirm the tracker appears and reports after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TS-G17H uses its GPRS TCP/IP capability and the GT06 message format to send regular position, status and alarm messages to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to the device record on the platform.

- The tracker is configured to report to the shared endpoint d.plaspy.com (or the equivalent IP 54.85.159.138) on port 8888.
- Messages are sent over GPRS using TCP/IP or UDP depending on device settings and network conditions.
- Regular position updates and alarm events are received by Plaspy and shown on maps and alert streams.
- Plaspy automatically detects the tracker protocol and associates GT06 messages with the device record.
- After successful configuration the device becomes visible in Plaspy for live tracking, history, and alerting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TS-G17H (SMS commands or vendor tool).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as supported by the tracker.
3. Set the destination port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the mobile operator APN and APN credentials (if required) so the device can establish a GPRS session.
6. Apply or save the configuration and restart the device if required by the firmware or after a factory reset.
7. Validate that the device reports to Plaspy by checking device visibility and live position updates on the Plaspy platform.

## Example Configuration Commands

The TS-G17H supports SMS-based commands for configuration. The public, commonly used SMS commands are listed in the order shown by the manufacturer documentation. The device default password used in these sample commands is 123456 — include it as required when a password prefix is needed by the device. Send these commands as SMS messages to the device phone number.

- Optional initial factory reset (use only when needed):
```text
FORMAT
```

- Set the operator APN (replace [apn] with your mobile operator APN string):
```text
apn123456 [apn]
```

- Set the APN username (replace [apnu] with the APN username if required):
```text
apnuser123456 [apnu]
```

- Set the APN password (replace [apnp] with the APN password if required):
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy IP and port (this command uses the IP form and port 8888):
```text
ip54.85.159.138 8888
```

- Check current settings (verification command):
```text
CXZT
```

Notes on placeholders:
- [apn] — your mobile operator APN (for example: internet, web, etc.); required for data sessions.
- [apnu] — APN username when the operator requires one; leave blank or omit if not used.
- [apnp] — APN password when required by the operator; leave blank if not used.
- The numeric password prefix 123456 in SMS commands above is the device default password used in the manufacturer examples.

## Configuration Notes

- SMS-based provisioning is supported for the TS-G17H; use the device IMEI or the assigned phone number to send SMS commands as described.
- Firmware and hardware revisions may change the exact SMS command syntax or required command order; verify syntax against the device manual for your firmware version.
- When a device supports both TCP and UDP, test both transports if network conditions or carrier NAT behavior affect connectivity.
- The sample server command uses the Plaspy IP form; some trackers also accept the domain d.plaspy.com — use whichever the device accepts.
- Use the verification command (CXZT) or the device response messages to confirm APN and server values after configuration.

## Why Use Plaspy with This Configuration

Using the TS-G17H with Plaspy gives organizations simple, reliable visibility into vehicle location, ignition status and alarm events. Pointing the device to Plaspy’s shared server settings and confirming GPRS connectivity enables real-time tracking, historical playback, and alerting workflows that support fleet oversight and basic anti-theft operations.

Learn more about Plaspy on the main website https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions on the official ThingSys website at https://www.thingsys.com/.
