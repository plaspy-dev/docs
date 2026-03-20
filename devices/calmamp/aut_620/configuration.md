---
slug: /calmamp/aut_620/configuration
id: aut_620-configuration
sidebar_label: Configuration
title: CalmAmp - AUT-620 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp AUT-620 with Plaspy server settings and SMS commands for basic setup and verification
keywords:
  - CalmAmp AUT-620 configuration
  - CalmAmp AUT-620 setup
  - AUT-620 Plaspy configuration
  - CalmAmp GPS tracker setup
  - AUT-620 server configuration
  - Plaspy tracker setup
  - asset tracker configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - CalmAmp AUT-620 SMS commands
---

# CalmAmp - AUT-620 Configuration

This page documents the public configuration context for using the CalmAmp AUT-620 with the Plaspy platform. It focuses on the practical, public-facing steps and server settings required to point an AUT-620 device at Plaspy so the device can communicate with and appear in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps to configure an AUT-620 can vary by firmware version, hardware revision, installation type, and vendor tools. Where available, this page includes the device commands published for public use; always verify current device instructions with the official CalmAmp documentation.

## Configuration Overview

The goal of this configuration is to prepare the AUT-620 to send position and device events to Plaspy so assets become visible and report reliably. The public procedure typically sets network APN details, points the device at Plaspy's server endpoint, sets the common server port used by Plaspy, and validates that the device is reporting.

- Configure the device network APN, username, and password as required by the installed SIM.
- Set the device GPRS server address to Plaspy and the shared Plaspy port so reports are routed to the platform.
- Choose transport (UDP or TCP) when the device requires a transport selection.
- Reboot or restart the AUT-620 if required so new settings take effect and the device registers to Plaspy.
- Verify settings and confirm the device is reporting to Plaspy using the device verification command or platform visibility.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public Plaspy endpoint and must be used when configuring the AUT-620 to report to Plaspy.

## Typical Requirements Before Setup

- Access to the AUT-620 with power and sufficient battery level for configuration and testing.
- A working cellular SIM provisioned for data with the correct APN settings for the operator.
- Ability to send SMS messages to the device when using SMS-based configuration, or access to the manufacturer tool or over-the-air service if preferred.
- The device ID or MID returned by the device so SMS commands that require an ID can be applied correctly.
- Confirmation of firmware version and any device-specific configuration notes from CalmAmp documentation.

## How This Tracker Connects to Plaspy

The AUT-620 is configured to send its location and event data to the shared Plaspy server endpoint and port so the device appears and can be monitored in Plaspy. Once configured, Plaspy receives the device data, maps the protocol automatically, and makes position and event information available in the platform.

- Device reports are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use either UDP or TCP transport if the firmware requires transport selection.
- Plaspy automatically detects the tracker protocol so you do not need to set a specific protocol string in the platform.
- Event and location messages that the AUT-620 produces are routed to Plaspy for visibility and monitoring.
- After configuration and restart, validate that the device appears and reports in Plaspy.

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for the AUT-620 (SMS commands, PULS over the air tool, or other manufacturer tool).
2. Enter the server address as d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
3. Set the server port to 8888 which is the common port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Apply or save the configuration in the device or send the relevant SMS commands.
6. Restart or reboot the device if required so the new settings take effect.
7. Validate that the device reports to Plaspy and appears in the platform.

If you are using SMS-based commands, follow CalmAmp published SMS syntax exactly and confirm the MID or device ID is used where required.

## Example Configuration Commands

The AUT-620 can be configured by SMS using the public commands published by CalmAmp. The device replies with a MID identifier after a query command; that MID is used as the device ID in follow-up commands when required.

Note: Keep the placeholder fields as shown. Replace [apn], [apnu], and [apnp] with your mobile operator APN, APN username, and APN password respectively.

- To request the device ID (the device replies with MID 10 digits):
```text
!R0
```

- Set the operator APN (replace [apn] with your operator APN):
```text
!RP,2306,0,[apn]
```

- Set the APN username if required (replace [apnu] with the username):
```text
!RP,2314,0,[apnu]
```

- Set the APN password if required (replace [apnp] with the password):
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy (public Plaspy server IP shown here):
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to the Plaspy shared port:
```text
!RP,769,0,8888
```

- Reboot the tracker to apply settings (recommended after configuration):
```text
!R3,70,0
```

- To check current settings on the device:
```text
!RO
```

Follow the exact command order when the manufacturer specifies an order. The reboot command is recommended after applying network and server settings so the AUT-620 registers to the configured endpoint.

## Configuration Notes

- CalmAmp supports SMS-based configuration for the AUT-620 as shown; you can also use CalmAmp over-the-air tools such as PULS if available for batch or remote updates.
- Plaspy uses the same port (8888) for all supported devices and automatically detects the tracker protocol, so the key configuration items on the device are server address and port.
- Transport selection (UDP or TCP) is device-side; choose the transport the device firmware supports or requires. Plaspy accepts both transports on port 8888.
- Keep APN placeholders [apn], [apnu], and [apnp] ready: these must match the mobile operator settings for data connectivity.
- Firmware revisions and hardware variations may change available commands or parameter indexes; confirm commands and indexes with CalmAmp documentation for your device firmware.

## Why Use Plaspy with This Configuration

Configuring the CalmAmp AUT-620 to report to Plaspy gives organizations low-maintenance long-term asset visibility using a shared, automatically detected protocol endpoint. For assets deployed for extended periods, the combination of a battery-operated AUT-620 and Plaspy visibility simplifies remote monitoring and event alerting without repeated manual reconnections.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the most current device commands, firmware behavior, and manufacturer setup methods for the AUT-620, verify details on the official CalmAmp website http://www.calamp.com/ as vendor instructions can change over time.
