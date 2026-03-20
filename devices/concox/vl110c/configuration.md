---
slug: /concox/vl110c/configuration
id: vl110c-configuration
sidebar_label: Configuration
title: Concox - VL110C Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox VL110C for use with Plaspy including server settings, SMS commands, and practical setup steps for reliable reporting
keywords:
  - Concox VL110C configuration
  - Concox VL110C setup
  - Concox VL110C server configuration
  - VL110C Plaspy setup
  - VL110C GPS tracker configuration
  - Plaspy device setup
  - vehicle tracker configuration
  - Concox GPS setup
  - VL110C SMS commands
  - fleet tracking configuration
---

# Concox - VL110C Configuration

This page summarizes the public configuration context for using the Concox VL110C with Plaspy. It explains the practical server settings and common manufacturer-side commands and workflows you can use to point the device at Plaspy for real-time tracking, telemetry, and platform visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, or vendor tools. The guidance below uses the publicly available SMS commands for VL110C configuration when applicable and highlights the Plaspy server settings you must enter.

## Configuration Overview

The configuration process prepares the VL110C to send its location, event, and telemetry data to Plaspy reliably. For VL110C units this is commonly done via SMS commands or manufacturer PC tools and includes setting APN, defining the GPRS server, choosing transport, and enabling periodic reporting.

- Set the device APN so it can use mobile data for GPRS/4G reporting.
- Point the device to the Plaspy server endpoint and set the shared port used by Plaspy.
- Choose the transport (UDP or TCP) if the device requires an explicit selection.
- Set reporting intervals (timers) to control how often the tracker sends position updates to Plaspy.
- Enable GPRS mode or equivalent so the device uses mobile data rather than only SMS.
- Verify settings using the device verification command or by confirming the unit appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered VL110C unit with installation access to send SMS or use the manufacturer's PC tool.
- A working SIM card with an active data plan and the correct APN for the mobile operator.
- Knowledge of the operator APN and any APN username or password if required (placeholders are used in commands).
- Access to the device SMS number or physical access for PC tool configuration or USB firmware/setting access.
- A basic understanding of choosing UDP or TCP depending on your network policies.
- Ability to restart the device after configuration to apply changes.

## How This Tracker Connects to Plaspy

The VL110C is configured to push its location and event data to the Plaspy server endpoint and port so that Plaspy can ingest and display the information for monitoring and reporting. Once configured, the tracker will report at the configured interval and Plaspy will automatically recognize the protocol.

- The device sends GPRS/4G data to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives device packets and automatically detects the correct protocol for the VL110C.
- Regular position updates are sent according to the configured TIMER value so Plaspy can provide live mapping and history.
- Alarms and event messages are delivered to Plaspy for notifications and automated workflows.
- After configuration, validation occurs by checking the device appears and reports in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL110C — SMS commands, the Concox PC tool, or the vendor-provided configuration utility.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device SERVER setting.
3. Set the server port to 8888 (all Plaspy devices use the same port).
4. Choose UDP or TCP if the VL110C requires a specific transport selection.
5. Enter the operator APN and optional APN credentials if required by your SIM.
6. Apply or save the configuration and restart the device if the device requires a reboot.
7. Validate that the device reports to Plaspy by checking for incoming data on the platform or using the device verification command.

## Example Configuration Commands

The VL110C supports SMS-based configuration. The following public SMS commands are provided in the manufacturer documentation and should be sent from an authorized phone number to the device SIM number. Preserve APN placeholders as needed when entering your operator information.

- Optional initial reset to factory settings (use only if you need a clean start):
```text
FACTORY#
```

- Set the time zone to UTC+0 (adjust if you need another timezone):
```text
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your mobile operator APN. If your provider requires username or password, include {{apnu}} and {{apnp}} after the APN:
```text
APN,{{apn}}# 
```
Or with optional username/password:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN string; {{apnu}} = APN username; {{apnp}} = APN password)

- Set the GPRS server to Plaspy using domain on port 8888 (UDP/TCP choice is per device setting):
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the server using the Plaspy IP address:
```text
SERVER,0,54.85.159.138,8888,0#
```
(These two options show domain and IP variants as provided by the manufacturer.)

- Set the update interval to every 60 seconds. The device supports alternate timer formats:
```text
TIMER,60#
```
Or:
```text
TIMER,60,60#
```

- Enable GPRS mode so the device uses mobile data:
```text
GPRSON,1#
```

- Verify current GPRS and server parameters:
```text
GPRSSET#
```

Send each command as a separate SMS as required by the device. After changing server or APN settings, save and restart the device if recommended.

## Configuration Notes

- Commands above are SMS based and come from public Concox VL110C configuration documentation; you can also use the Concox PC tool or vendor utilities where available.
- Firmware and hardware revisions may change command syntax or supported parameters; confirm command support on your device firmware.
- Choose UDP or TCP based on network reliability and your monitoring needs. The device can be set to use either transport when configuring the server and port 8888.
- Preserve APN placeholders ({{apn}}, {{apnu}}, {{apnp}}) and supply your operator credentials where necessary.
- Use the verification command (GPRSSET#) or check Plaspy to confirm the device is reporting after configuration.

## Why Use Plaspy with This Configuration

Using the VL110C configured to report to Plaspy provides a straightforward way to centralize location, alarms, and telemetry for fleet operations. Plaspy’s automatic protocol detection and consistent server port simplify device onboarding, letting you focus on operational monitoring, alerts, and reporting rather than low-level protocol selection.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details verify current information at the Concox website https://www.iconcox.com/ since setup methods and firmware behavior can change over time.
