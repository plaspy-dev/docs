---
slug: /queclink/gv65_plus/configuration
id: gv65_plus-configuration
sidebar_label: Configuration
title: QuecLink - GV65 Plus Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the QuecLink GV65 Plus for use with Plaspy including required server settings SMS commands and setup checklist
keywords:
  - QuecLink GV65 Plus configuration
  - QuecLink GV65 Plus setup
  - GV65 Plus Plaspy
  - GV65 Plus server configuration
  - QuecLink GPS tracker configuration
  - GV65 Plus SMS setup
  - QuecLink APN settings
  - Plaspy tracker setup
  - vehicle tracker configuration
  - fleet tracking setup
---

# QuecLink - GV65 Plus Configuration

This page documents the public configuration context for using the QuecLink GV65 Plus tracker with Plaspy. It summarizes the Plaspy server settings you must apply, the typical prerequisites before setup, and example SMS configuration commands that are commonly used with this model. Use this guide to align the device with Plaspy so the tracker can report location and events to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GV65 Plus supports SMS and cellular reporting modes; the example commands below show a common SMS-based configuration flow and include placeholders such as [apn] that you must replace with your carrier values.

## Configuration Overview

A clear configuration process prepares the GV65 Plus to communicate reliably with the Plaspy platform. The steps below focus on establishing cellular data or SMS control, pointing the device to Plaspy server endpoints, and confirming the tracker reports successfully.

- Configure device network settings including APN so the tracker has data connectivity for GPRS reporting.
- Set the Plaspy server endpoint and port so the device sends telemetry to Plaspy.
- Choose the transport mode (UDP or TCP) if required by the device firmware and network environment.
- Apply reporting intervals and input/event settings so Plaspy receives timely location and alarm updates.
- Validate the device is visible in Plaspy and that location and event messages are being ingested.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices use the same port

## Typical Requirements Before Setup

- A powered GV65 Plus with access to the wiring and/or installer port for initial configuration.
- An active GSM SIM card with a data plan and a correct carrier APN for GPRS reporting.
- Ability to send and receive SMS to the device if using SMS-based configuration (the GV65 Plus supports SMS commands).
- Access to the official QuecLink configuration method or software and knowledge of the device password.
- Basic knowledge of the expected Plaspy server values d.plaspy.com or 54.85.159.138 and port 8888.
- If applicable, a way to safely restart or power-cycle the tracker after applying configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GV65 Plus is set to report position and event data to the shared Plaspy server endpoint and port. Plaspy ingests the tracker messages and maps location, triggers alerts, and populates fleet dashboards.

- The tracker sends location and telemetry via TCP or UDP to d.plaspy.com on port 8888.
- Plaspy also accepts reports addressed to the server IP 54.85.159.138 on port 8888.
- Events such as SOS, ignition changes, and digital input alerts are forwarded to Plaspy for real-time monitoring.
- Plaspy automatically detects the device protocol so the platform can parse incoming messages from the GV65 Plus without per-device port changes.
- Successful integration verifies that periodic reports and alarm messages appear in the Plaspy platform.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or installer tool for the GV65 Plus, or prepare to send supported SMS commands per QuecLink guidance.
2. Enter the Plaspy server domain d.plaspy.com or the fallback server IP 54.85.159.138 in the server/GPRS server field.
3. Set the server port to 8888 as the destination port for tracker reports.
4. Choose UDP or TCP transport if the device requires explicit transport selection.
5. Configure the device APN and any authentication values so GPRS connects (replace placeholders such as [apn] with carrier values).
6. Apply or save the configuration and restart or power-cycle the device if required by the firmware.
7. Validate that the GV65 Plus reports to Plaspy by checking device activity and position updates in the platform.

## Example Configuration Commands

The GV65 Plus can be configured by SMS commands. The following example commands are provided in the order commonly used. The sample device password is queclink which is the default in this example. Replace [apn], [apnu], and [apnp] with your carrier APN, APN username, and APN password where required.

1. Optional initial step Restore factory settings (label as optional or initial setup)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders)
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Explanation: [apn] is the carrier APN. [apnu] and [apnp] are optional APN username and password fields when your carrier requires them.

4. Set the GPRS server to Plaspy by domain and IP with port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to use d.plaspy.com and 54.85.159.138 on port 8888 for reporting.

5. Set the update/reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: Send each command as a single SMS to the device using the device password where shown. If your installation or firmware requires a different syntax or a configuration tool, use the official QuecLink documentation or configuration utility.

## Configuration Notes

- SMS versus software configuration may vary by region and firmware. Use the official QuecLink tools when available for a GUI workflow.
- Firmware versions and hardware revisions can change command syntax or available features; confirm commands against manufacturer release notes.
- The GV65 Plus supports both TCP and UDP reporting. Choose the transport that best suits network reliability and your Plaspy ingestion preferences.
- Ensure APN values are correct for the installed SIM card; incorrect APN prevents GPRS connectivity even when server settings are correct.
- The example commands use the default password queclink as shown in public configuration samples. If your device password differs, substitute it in the commands.

## Why Use Plaspy with This Configuration

Configuring the GV65 Plus to report to Plaspy gives fleet managers centralized visibility into vehicle location, status, and event alerts. Plaspy’s platform ingests the tracker’s TCP or UDP reports, maps positions in near real time, and provides reporting and alerting that support anti-theft, driver monitoring, and operational workflows.

To learn more about Plaspy and how it integrates with devices like the QuecLink GV65 Plus visit https://www.plaspy.com. For device specific command syntax, firmware updates, and the latest installation guidance verify details on the manufacturer site https://www.queclink.com/ as methods and firmware behavior may change over time.
