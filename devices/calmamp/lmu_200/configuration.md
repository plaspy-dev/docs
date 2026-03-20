---
slug: /calmamp/lmu_200/configuration
id: lmu_200-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp LMU 200 tracking devices compatible with Plaspy including server settings and SMS commands
keywords:
  - CalmAmp LMU 200 configuration
  - LMU 200 setup
  - CalmAmp configuration Plaspy
  - LMU 200 SMS configuration
  - Plaspy server configuration
  - LMU 200 GPS tracker setup
  - CalmAmp tracker configuration guide
  - LMU 200 APN settings
  - vehicle tracking setup CalmAmp
  - Plaspy device integration
---

# CalmAmp - LMU-200 Configuration

This page documents the public configuration context for using the CalmAmp LMU-200 tracker with Plaspy. It focuses on the shared server settings and practical steps that are publicly available for preparing the device to communicate with the Plaspy platform. Where applicable, example SMS commands from public configuration content are included to illustrate how settings are applied.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and steps here as practical, public guidance rather than a substitute for the latest CalAmp documentation.

## Configuration Overview

The goal of this configuration process is to prepare the LMU-200 to send location and operational data to Plaspy, validate connectivity, and make the unit visible in your Plaspy account. The LMU-200 can be configured using SMS commands or the manufacturer tools where supported; the public commands below show an SMS workflow to set APN and server parameters.

- Set the device APN and optional APN credentials so the tracker can use a data connection for reporting.
- Configure the tracker to report to the Plaspy server endpoint so device messages arrive on the platform.
- Confirm the server port and transport and reboot the unit so new settings take effect.
- Verify settings and connectivity so the device becomes visible and reports correctly in Plaspy.
- Use Plaspy automatic protocol detection to avoid manual protocol selection when possible.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port and the platform handles protocol detection so a single server and port combination is typically sufficient for integration.

## Typical Requirements Before Setup

- A powered and accessible LMU-200 installed or accessible for initial configuration.
- A cellular data SIM active in the device where APN settings are required for data connectivity.
- Access to SMS send capability or the official CalAmp configuration tool depending on your installer workflow.
- The device MID or identifier as returned by the device when queried (used in SMS command flows).
- Coverage on a compatible cellular network for the unit to establish a data session.
- Administrative access to your Plaspy account or onboarding process to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured, the LMU-200 sends location and device telemetry to the Plaspy service endpoint so the device is visible and manageable from the platform. Plaspy receives the incoming device messages on its shared server and port, applies protocol detection, and makes the data available for tracking, alerts, and reporting.

- The tracker is pointed to the Plaspy server domain or IP so outbound packets target Plaspy.
- Messages are sent to port 8888 which is the common port used by Plaspy for all supported devices.
- Transport can be UDP or TCP depending on device firmware and installer preference.
- Plaspy automatically detects the device protocol so no manual protocol mapping is required in most cases.
- Successful reporting enables location updates and device state reporting visible in the Plaspy platform.

## Common Configuration Workflow

1. Access the official CalAmp configuration method or software, or prepare to send SMS configuration commands according to manufacturer guidance.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. If the device requires selection of transport, choose UDP or TCP according to your installation needs.
5. Configure APN and any APN credentials required for the device to obtain a data connection.
6. Apply or save the configuration and then restart or reboot the device if required to activate settings.
7. Validate that the device reports to Plaspy by checking device visibility and incoming messages in your Plaspy account.

## Example Configuration Commands

The LMU-200 can be configured using SMS commands. The following public commands are presented in the order shown in the available public content. Replace placeholders as appropriate and use the device MID or identifier when required.

Notes:
- The device ID for SMS commands is the MID 10 digits returned by the !R0 command.
- Placeholders: {{apn}} is your carrier APN, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required.
- The reboot command is included and should be used when required by your installation workflow.

1. Set the operator APN
```
!RP,2306,0,{{apn}}
```

2. Set the APN operator username (use only if your APN requires a username)
```
!RP,2314,0,{{apnu}}
```

3. Set the APN operator password (use only if your APN requires a password)
```
!RP,2315,0,{{apnp}}
```

4. Set the GPRS server to Plaspy by IP
```
!RP,2319,0,54.85.159.138
```

5. Set the server port to Plaspy port
```
!RP,769,0,8888
```

6. Reboot the tracker to apply changes (optional or as required)
```
!R3,70,0
```

7. Check current settings
```
!RO
```

Use these commands in the order shown when order is important. If your firmware or installer tool uses a different command syntax, follow the official CalAmp tools instead.

## Configuration Notes

- Configuration via SMS is publicly documented here; however, some installations use CalAmp management tools or over the air updates for bulk provisioning.
- Firmware or hardware revisions may change command numbers or behavior. Confirm command syntax for your firmware level before mass configuration.
- Choose UDP or TCP based on the stability requirements of the installation and any guidance from your carrier or integration team.
- Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with the correct values for your SIM card and operator.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection so you do not normally need to specify a protocol mapping in Plaspy.

## Why Use Plaspy with This Configuration

Using the LMU-200 with Plaspy provides a straightforward way to collect location and device data into a single fleet management platform. The shared server settings and automatic protocol detection in Plaspy reduce the need for per-device server variance, simplifying deployment across mixed fleets and helping organizations maintain visibility and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration methods, firmware details, and manufacturer guidance verify the latest information at the CalAmp website http://www.calamp.com/ as setup steps and command behavior can change over time.
