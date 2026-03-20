---
slug: /teltonika/fmb640_fmb641/configuration
id: fmb640_fmb641-configuration
sidebar_label: Configuration
title: Teltonika - FMB640-FMB641 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB640 and FMB641 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - Teltonika FMB640-FMB641 configuration
  - Teltonika FMB640 configuration
  - FMB641 Plaspy setup
  - Teltonika tracker configuration
  - FMB640 server configuration
  - GPS tracker Plaspy setup
  - Teltonika GPS platform setup
  - FMB640 FMB641 setup guide
  - Teltonika to Plaspy integration
  - Fleet tracking Teltonika configuration
---

# Teltonika - FMB640-FMB641 Configuration

This page documents the public configuration context for using the Teltonika FMB640 and FMB641 trackers with Plaspy. It focuses on the shared Plaspy server settings, the practical steps you will use to point a device at Plaspy, and the example command provided by the manufacturer for basic parameter setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can differ by firmware version, hardware revision, installation type, and the Teltonika configuration tool you use. The example command included on this page is a public Teltonika format for setting APN and server parameters and should be adapted to your environment.

## Configuration Overview

This configuration process prepares the tracker to communicate with Plaspy, verifies connectivity, and makes the device visible in the Plaspy platform. The goal is to set the device APN and server endpoint, confirm the transport protocol, and validate that Plaspy is receiving reports from the unit.

- Configure the device APN and network credentials so it can establish a data connection.
- Point the tracker to the Plaspy server endpoint for telemetry and event reporting.
- Select the required transport (UDP or TCP) and set the common Plaspy port for all devices.
- Apply or send the configuration using Teltonika tools or SMS/GPRS commands.
- Validate connectivity by confirming the device appears in Plaspy and reports location and events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: Plaspy uses the same port for all supported devices and will automatically detect the correct protocol for the tracker.

## Typical Requirements Before Setup

- Access to the device or installer interface (Teltonika Configurator, SMS, or other manufacturer tool).
- Device powered and reachable for configuration, or an installer to perform on-site setup.
- Active SIM or eSIM with a data plan and correct APN settings for the mobile operator.
- Teltonika device firmware known and up to date enough to accept remote parameter commands if using SMS or GPRS commands.
- Access to your Plaspy account or organizational console to verify the device reports after configuration.
- Basic knowledge of sending Teltonika commands via your chosen method (Configurator, SMS, or GPRS).

## How This Tracker Connects to Plaspy

Once configured, the FMB640 or FMB641 will establish a data connection using the device APN and report device telemetry to the shared Plaspy endpoint and port. Plaspy then parses incoming data using automatic protocol detection to display location, events, and status.

- The tracker uses configured mobile data to connect to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on your selection during configuration.
- Plaspy automatically detects the protocol and processes the tracker messages.
- Location and event reports sent by the tracker become visible in the Plaspy platform for monitoring and alerts.
- After successful configuration the device should appear in Plaspy within a short period if network connectivity is valid.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software such as the Teltonika Configurator or supported SMS/GPRS command method.
2. Enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set port 8888 for the primary server entry (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Add APN credentials and any required network parameters so the device can reach the internet.
6. Apply or save the configuration on the device and restart the unit if required by the firmware.
7. Validate that the device reports to Plaspy and that location and basic telemetry are visible in your Plaspy account.

## Example Configuration Commands

Teltonika provides a public example command to set basic network and server parameters. The command format below is commonly used via SMS or manufacturer tools. Keep the placeholders and replace them with your operator values.

- Example Teltonika setparam command:

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notes on the placeholders and usage:
  - {{apn}} is the mobile operator APN name required for data connectivity.
  - {{apnu}} is the APN username if your operator requires one; leave blank if not required.
  - {{apnp}} is the APN password if required by the operator; leave blank if not required.
  - d.plaspy.com and 8888 are the Plaspy server domain and port that the tracker will report to.
  - The command can be sent via the Teltonika Configurator, SMS, or a supported GPRS command channel depending on your device configuration and firmware.
  - Verify parameter meanings and any transport flags in the Teltonika documentation for your firmware version before sending commands.

## Configuration Notes

- Firmware differences and hardware revisions can change parameter numbers or command formats; always verify with Teltonika documentation for the exact device firmware you have installed.
- Choose UDP or TCP based on your network and reliability needs. Plaspy accepts both on port 8888 and will auto detect the tracker protocol.
- SMS based configuration is commonly supported by Teltonika devices; use secure channels and limit SMS exposure in production.
- If you prefer to use the Plaspy server IP instead of the domain, you may substitute 54.85.159.138 for d.plaspy.com in your configuration, but double check any command length or format limits on older firmware.
- Keep a record of applied settings and test each device after configuration to confirm connectivity and reporting.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB640 or FMB641 with Plaspy gives organizations a practical way to centralize device telemetry, track vehicle movements, and monitor critical events with a consistent server configuration. The shared Plaspy endpoint and automatic protocol detection simplify deployment by reducing per-device server configuration variations.

To learn more about Plaspy and how it works with Teltonika trackers, visit https://www.plaspy.com. For the latest device specific configuration instructions, firmware notes, and command reference from the manufacturer, verify details at https://www.teltonika-gps.com/ as device behavior and configuration methods can change over time.
