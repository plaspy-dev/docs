---
slug: /meitrack/p88l/configuration
id: p88l-configuration
sidebar_label: Configuration
title: Meitrack - P88L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack P88L showing Plaspy server settings SMS commands and practical integration steps
keywords:
  - Meitrack P88L configuration
  - Meitrack P88L setup
  - P88L Plaspy configuration
  - P88L GPS tracker setup
  - Plaspy server configuration
  - P88L SMS commands
  - Meitrack tracker integration
  - GPS tracker platform setup
  - personal tracker configuration
  - Plaspy compatibility
---

# Meitrack - P88L Configuration

This page documents the public configuration context for using the Meitrack P88L with the Plaspy platform. It collects the essential server settings, practical workflow steps, and example SMS configuration commands that are commonly used to point a P88L tracker at Plaspy for live tracking and alert delivery.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the practical common actions and public commands used for integration while advising verification with Meitrack documentation.

## Configuration Overview

This configuration prepares the P88L to send location and event data to Plaspy using the platform shared endpoint and port. The example commands below show the typical SMS-based method used to set the device GPRS server, reporting interval, timezone, and event options for integration with Plaspy.

- Configure the tracker to report to the Plaspy server endpoint so location and alerts appear in the platform.
- Ensure GPRS and APN settings are correct for the device SIM so data sessions succeed.
- Set a reporting interval to balance update frequency and battery life for the intended use case.
- Validate timezone and event reporting so timestamps and alerts are accurate in Plaspy.
- Confirm the device registers and transmits to Plaspy before final deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts supported tracker protocols sent to the shared endpoint

## Typical Requirements Before Setup

- A charged P88L device with an active cellular SIM card that supports data and SMS for configuration and reporting.
- Access to the Meitrack configuration method you plan to use such as SMS commands or the manufacturer software.
- Knowledge of the SIM APN and any APN username or password required by your mobile operator; placeholders appear in commands below as [apn], [apnu], and [apnp].
- The device password for SMS commands if configured; the public example commands below use the default password 0000 as provided in manufacturer documentation.
- A safe location to test connectivity where the tracker can acquire GNSS fixes and establish a mobile data session for validation.

## How This Tracker Connects to Plaspy

The P88L is configured to send location, telemetry, and event messages to the shared Plaspy server endpoint and port. Once the device is pointed to Plaspy (by domain or IP) and the correct transport and APN are set, Plaspy will receive and automatically interpret the tracker messages using its protocol detection.

- The tracker transmits data to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- You may select UDP or TCP as the transport when the device requires a choice; Plaspy accepts either.
- Plaspy automatically detects the tracker protocol so the platform can parse reports from the P88L.
- Device events and alerts such as SOS are forwarded to Plaspy for operator notification and history.
- After successful setup the device becomes visible in Plaspy dashboards and telemetry updates can be validated.

## Common Configuration Workflow

1. Access the official Meitrack configuration method you plan to use such as SMS commands, manufacturer app, or vendor tool.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the tracker requires a transport selection.
5. Provide the correct APN and any APN username or password required by the SIM using the device configuration method.
6. Apply or save the configuration and restart the device if required by the device firmware or recommended by the manufacturer.
7. Validate that the device reports to Plaspy by checking for initial messages and live location in the Plaspy platform.

## Example Configuration Commands

The P88L may be configured by sending SMS commands from an authorized phone number. The following public example commands are provided in the order typically used. The device password shown in these examples is 0000 which is the default in the public command set.

1. Optional factory settings reset or initial setup command
```sms
0000,F11
```
- Use this only when you want to restore factory defaults during initial setup. Label this as optional and only perform if needed.

2. Set the GPRS server and APN for Plaspy
```sms
0000,A21,2,54.85.159.138,8888,[apn]
```
- Alternate using the server domain:
```sms
0000,A21,2,d.plaspy.com,8888,[apn]
```
- If your operator requires APN username and password include them as additional comma separated fields:
```sms
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Explanation of placeholders:
  - [apn] is your SIM provider APN
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required

3. Set the time zone to UTC 0
```sms
0000,B36,0
```
- Adjust the timezone value if you need a different offset according to Meitrack documentation.

4. Set the update/reporting interval to every 1 minute
```sms
0000,A12,6,0
```
- This command sets a common frequent reporting interval; adapt the parameters to the interval required for your deployment.

5. Set event reporting options
```sms
0000,C03,0
```
- Configure event reporting per your monitoring needs. Check Meitrack docs for meaning of specific event parameters.

Note: Keep the command order when following manufacturer guidance. Replace placeholder fields with your operator specific APN values prior to sending.

## Configuration Notes

- Firmware and regional hardware variants can change supported command syntax and parameters; always confirm command format against the Meitrack documentation for your device variant.
- SMS based configuration is commonly used for the P88L but manufacturer software or vendor tools may offer batch or USB configuration alternatives.
- Choose UDP or TCP based on installer preference and network reliability; Plaspy accepts either on port 8888 and will auto detect protocol.
- Verify APN, SIM data access, and any operator restrictions before deploying the tracker to ensure it can establish GPRS data sessions to the Plaspy endpoint.
- The default SMS password shown in public commands is 0000; if you change the password, record it securely and use the updated password when sending SMS commands.

## Why Use Plaspy with This Configuration

Configuring the Meitrack P88L to report to Plaspy gives caretakers, supervisors, and operations teams consistent visibility into location, alerts, and basic telemetry. The shared Plaspy endpoint simplifies device onboarding across multiple tracker models because the platform uses the same port and detects protocols automatically, reducing per-device server configuration overhead.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and command syntax verify details with the manufacturer at https://www.meitrack.com/ since methods and firmware behavior can change over time.
