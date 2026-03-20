---
slug: /cantrack/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: CanTrack - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack TK102 and Plaspy compatibility with server and SMS setup details
keywords:
  - CanTrack TK102 configuration
  - CanTrack TK102 setup
  - TK102 Plaspy configuration
  - CanTrack server configuration
  - TK102 SMS setup
  - TK102 GPRS configuration
  - CanTrack GPS tracker setup
  - TK102 APN settings
  - TK102 tracking platform setup
  - Plaspy GPS tracker integration
---

# CanTrack - TK102 Configuration

This page covers the public configuration context for using the CanTrack TK102 with Plaspy. It collects the practical, publicly available setup steps and example SMS commands that are commonly used to point TK102 devices at an external tracking server such as Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK102 supports SMS-based configuration and GPRS reporting; the example SMS commands below reflect common public commands and preserve placeholders where operator APN credentials are required.

## Configuration Overview

The goal of this configuration is to prepare the TK102 to send its location data to the Plaspy tracking platform using GPRS, while also offering SMS verification and basic device setup. The steps below are practical actions to ensure the tracker can communicate reliably with Plaspy and be visible in the platform.

- Configure the tracker to use the operator APN and, if required, APN username and password placeholders.
- Set the GPRS server endpoint to Plaspy so the device sends telemetry to the platform.
- Choose the transport protocol (UDP or TCP) and set the port used by Plaspy.
- Validate settings via SMS checks or by confirming the device reports to the Plaspy server.
- Optionally restore or verify factory defaults before a fresh configuration when required.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the TK102. These are the public values that Plaspy requires for connectivity:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol so devices can be configured using either UDP or TCP on the same port

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection for incoming tracker traffic.

## Typical Requirements Before Setup

- A charged TK102 device with power source connected or sufficient internal battery.
- An active SIM card that supports GSM and GPRS data and can receive and send SMS messages.
- Access to the device phone number so you can send SMS configuration commands.
- The operator APN and optional APN username and password (preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} if used).
- Manufacturer documentation or the device manual for SMS command reference and any firmware-specific notes.
- Optional: a way to monitor server-side logs or Plaspy device activity to confirm successful reporting.

## How This Tracker Connects to Plaspy

The TK102 can send GPS and status data to Plaspy by establishing a GPRS connection and posting telemetry to the shared Plaspy server endpoint and port. SMS is commonly used to configure and verify the network and server settings before GPRS reporting is validated.

- The TK102 is configured to report to the Plaspy server domain or IP and port listed above.
- Telemetry from the tracker is transmitted over GPRS to the server using either UDP or TCP transport.
- Plaspy receives incoming connections on port 8888 and determines the tracker protocol automatically.
- SMS commands can be used to configure APN, server IP/domain, port, timezone, and to verify current settings.
- Once configured, the device should appear on Plaspy and start sending regular position updates.

## Common Configuration Workflow

1. Access the official manufacturer configuration method, typically SMS configuration or the CanTrack manual, and confirm the device password and supported commands.
2. Restore factory settings or reset the device if starting from an unknown state (optional initial step).
3. Enter the Plaspy server endpoint by configuring d.plaspy.com or the IP 54.85.159.138 in the device server settings.
4. Set port 8888 for GPRS reporting and select UDP or TCP if the device requires an explicit transport choice.
5. Configure the operator APN and optional APN credentials so the device can establish GPRS data.
6. Apply or save the configuration, then restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking device activity in the platform or monitoring incoming connections on the configured server.

## Example Configuration Commands

The TK102 commonly supports SMS-based setup. The public example commands below are provided in the order they are typically used. The device default password shown is the common public default for example purposes; confirm your device password in the manual before use.

- Restore factory settings (optional initial step)
```text
#begin#123456#
```

- Set the time zone to UTC-0
```text
#timezone#123456#W#0#00#
```

- Set the operator APN (replace placeholders as needed)
```text
#apn#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
Explanation: {{apn}} is your operator APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders; omit them if not required by your mobile operator.

- Set the GPRS server to Plaspy using the public IP and port
```text
#IP#123456#54.85.159.138#8888#
```

- Check settings or test TCP response (verification command)
```text
TCP
```

Notes on these commands:
- Send each command as a separate SMS to the device phone number.
- The sample device password in these public commands is 123456; replace with your configured device password if it differs.
- The order is important when establishing a reliable configuration: factory reset (if used), timezone, APN, then the server IP and port.
- Use d.plaspy.com as an alternative to the IP if your device supports domain names instead of raw IP addresses.

## Configuration Notes

- Firmware and hardware revisions of the TK102 may support slightly different SMS syntax; always confirm the exact command format with the device manual.
- SMS-based configuration is a commonly used public method for TK102 devices and is reflected in the example commands above.
- Choose UDP or TCP according to your device firmware options; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Preserve APN placeholders when documenting configuration and replace them with the mobile operator details before sending SMS commands.
- If you have difficulty, consult the official CanTrack documentation for firmware specific commands and additional troubleshooting steps.

## Why Use Plaspy with This Configuration

Using the TK102 with Plaspy lets organizations centralize device telemetry on a single platform, enabling real-time visibility, event monitoring, and operational oversight. Configuring the TK102 to report to Plaspy's shared server endpoint provides a straightforward way to integrate these devices into a fleet or asset tracking workflow while leveraging Plaspy's automatic protocol detection and single port architecture.

Learn more about Plaspy and how it supports common tracker configurations at https://www.plaspy.com. For the latest device specific setup methods, firmware notes, and manufacturer guidance for the CanTrack TK102, verify current information on the official CanTrack website https://www.cantrackgps.com/ .
