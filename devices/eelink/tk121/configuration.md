---
slug: /eelink/tk121/configuration
id: tk121-configuration
sidebar_label: Configuration
title: EElink - TK121 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK121 showing Plaspy server settings and SMS commands for quick integration
keywords:
  - EElink TK121 configuration
  - EElink TK121 setup
  - EElink TK121 server configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - TK121 SMS configuration
  - TK121 MoveLink setup
  - TK121 GPS tracker setup
  - vehicle tracking TK121
  - fleet tracker EElink
---

# EElink - TK121 Configuration

This page describes the public configuration context for using the EElink TK121 tracker with the Plaspy platform. It gathers the practical server settings, typical prerequisites, and the common SMS commands published for TK121 setup so you can prepare the device for visibility in Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol on connection. Exact manufacturer side steps can vary by firmware revision, hardware batch, installation type, and vendor configuration tools, so use the guidance here together with the TK121 manufacturer documentation and your installation procedures.

## Configuration Overview

This guide focuses on preparing the TK121 to send location and event data to Plaspy by applying the platform server settings and validating connectivity. The TK121 supports remote parameter setting via SMS and standard MoveLink protocol integration, which allows straightforward server assignment and periodic reporting.

- Configure the TK121 to point at the Plaspy server so telemetry is delivered to your Plaspy account.
- Set operator APN and GPRS parameters so the tracker can use the mobile data connection.
- Apply reporting interval settings to control how frequently the device sends position updates.
- Validate configuration and confirm the device appears as online in Plaspy.
- Optionally perform a factory reset or parameter check if you inherit an already configured unit.

## Plaspy Server Settings

Use the following public settings when configuring the TK121 for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport your device or firmware requires
- Plaspy automatically detects the tracker protocol after the device connects

All Plaspy devices use the same port for server communication and the platform will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered TK121 unit installed or connected to a stable power source for initial configuration.
- A working SIM card with mobile data enabled and SMS capability if you use SMS commands for setup.
- Access to the TK121 configuration method supported for your unit such as SMS, manufacturer software, or a vendor tool.
- The correct APN and optional APN username and password for the SIM operator.
- A Plaspy account or the necessary server details to register and validate the device in your platform instance.
- Basic knowledge of sending SMS commands to the tracker if you will use SMS configuration.

## How This Tracker Connects to Plaspy

The TK121 is configured to report to the shared Plaspy server endpoint and port so location and event telemetry arrive in your Plaspy account. Once the server address and APN are set the device will establish a GPRS data session and transmit MoveLink protocol messages to Plaspy.

- The device sends periodic location and status updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and network characteristics.
- Plaspy automatically detects the tracker protocol and decodes MoveLink messages for display and alerting.
- Events such as ignition state, alarms, and telemetry are forwarded to Plaspy for real time monitoring.
- Successful configuration enables device visibility and event streams in Plaspy dashboards and reports.

## Common Configuration Workflow

1. Access the official EElink configuration method for TK121 (SMS commands, vendor tool, or manufacturer software) as provided by the supplier or manufacturer documentation.
2. Set the operator APN and optional credentials so the device can open a GPRS data session. Use the APN placeholders if needed.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the device port to 8888.
4. Choose UDP or TCP transport on the device if it requires an explicit transport selection.
5. Apply or save configuration on the device (send the SMS commands or save from the configuration tool).
6. Restart or power cycle the tracker if recommended by the manufacturer to ensure new parameters take effect.
7. Validate the device reports to Plaspy and appears online in the platform; check telemetry and the first location fix.

If you are using SMS for configuration, follow the exact SMS command format from the TK121 documentation and the examples in the next section.

## Example Configuration Commands

The TK121 supports parameter setting by SMS. The following public SMS commands are presented in the native order useful for initial setup. Keep the placeholders exactly as shown and replace them with your operator values.

- Optional initial factory reset (use only when required):
```text
FACTORY#
```

- Set the time zone to UTC 0 (example shown):
```text
GMT,E,0#
```

- Set the operator APN. Replace [apn] with your APN. If your APN requires username and password, include [apnu] and [apnp] where supported by the device:
```text
APN,[apn]{{apnu and apnp placeholder}},[apnu],[apnp]#
```
Note: If the device firmware uses a different APN command format, use the manufacturer provided syntax. The placeholders [apn], [apnu], and [apnp] are shown as the public placeholders from the TK121 command set.

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy IP on port 8888:
```text
SERVER,0,54.85.159.138,8888#
```
Use the domain if DNS is available and preferred; use the IP if DNS is not available or if instructed by the installer.

- Set the position update interval to 60 seconds:
```text
TIMER,60#
```

- Check current parameter settings:
```text
PARAM#
```

Preserve the order above when performing an initial configuration: APN then server then timer, and check parameters with PARAM#. Label the factory reset command as optional and use it only when you need to clear existing settings.

## Configuration Notes

- TK121 supports SMS based parameter setting as shown; the exact SMS syntax can vary by firmware, so confirm with the device manual.
- Choose UDP or TCP based on device firmware support and your network conditions; Plaspy accepts both transports on port 8888.
- Use d.plaspy.com when the device supports DNS resolution; use 54.85.159.138 when DNS is unavailable or unreliable.
- Firmware version and hardware revision can change command formats. Verify commands against the current TK121 manual or vendor tool.
- Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically after the device connects.

## Why Use Plaspy with This Configuration

Configuring the TK121 to report to Plaspy gives fleet teams and security operators centralized, real time visibility into vehicle location, ignition state, and alarms. Using the shared Plaspy server settings simplifies deployment because the same port and server endpoints apply across supported devices, and Plaspy will handle protocol detection and message decoding for MoveLink compatible trackers.

To learn more about Plaspy and how the platform collects and displays tracker telemetry visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer support information consult the EElink official site https://www.eelink.com.cn/ to verify current procedural and technical details.
