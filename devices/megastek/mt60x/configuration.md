---
slug: /megastek/mt60x/configuration
id: mt60x-configuration
sidebar_label: Configuration
title: Megastek - MT60X Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Megastek MT60X for use with Plaspy including server settings SMS commands and practical setup guidance
keywords:
  - Megastek MT60X configuration
  - Megastek MT60X setup
  - MT60X Plaspy configuration
  - MT60X server settings
  - Megastek GPS tracker setup
  - parolee tracking bracelet configuration
  - MT60X SMS configuration
  - GPRS TCP IP tracker setup
  - Plaspy tracker integration
  - MT60X tracking software configuration
---

# Megastek - MT60X Configuration

This page covers the public configuration context for using the Megastek MT60X with Plaspy. It collects the practical server settings, SMS setup commands supplied in public documentation, and workflow guidance needed to point an MT60X at the Plaspy backend for real time tracking and event forwarding.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the backend. Exact manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, or vendor tools, so treat the commands and workflows here as practical public guidance rather than a device specific checklist for every MT60X unit.

## Configuration Overview

The purpose of configuring an MT60X for Plaspy is to prepare the device to connect via GPRS to the centralized Plaspy server, validate connectivity, and enable location plus alarm events to appear in the Plaspy platform. The model supports SMS based configuration in public documentation and is capable of forwarding telemetry to a Plaspy server endpoint on the shared port used by all devices.

- Set the device network parameters so the tracker can open a GPRS data session toward Plaspy.
- Configure APN and operator credentials so the MT60X can attach to the mobile network for data upload.
- Point the device to the Plaspy server endpoint and the shared port used by Plaspy for all devices.
- Enable GPRS mode and set a suitable reporting interval for real time visibility and auditing.
- Verify the device reports in Plaspy so administrators can confirm location, alarms, and telemetry are received.

## Plaspy Server Settings

When configuring the MT60X to communicate with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device choice
- Plaspy automatically detects the tracker protocol so the backend will handle protocol variants

Note that Plaspy uses the same port for all supported devices and that automatic protocol detection reduces the need to select a protocol on the platform side.

## Typical Requirements Before Setup

- A powered MT60X unit with a charged battery and accessible SIM card slot if required for GPRS
- An active data SIM provisioned for GPRS data with a known APN and optional username and password
- Access to the manufacturer configuration method such as SMS commands or official configuration software
- The device IMEI available for use in identifier commands or registration with Plaspy
- Administrative access to Plaspy to validate device reporting after configuration
- Basic mobile network coverage at the device location to allow GPRS connectivity

## How This Tracker Connects to Plaspy

The MT60X forwards location updates and event telemetry to the Plaspy backend over a GPRS data session. In practice the device is configured to upload packets to the shared Plaspy endpoint and port so telemetry, alarms, and periodic location traces are visible in the Plaspy console.

- The tracker opens a GPRS connection and uploads data to the Plaspy server endpoint and port
- Location fixes and hybrid GPS plus LBS data are sent to Plaspy for real time mapping and history
- Alarm events such as anti removal or SOS are forwarded to Plaspy to trigger notifications
- Periodic reporting intervals and instant location queries enable audit trails and monitoring
- Plaspy receives data on the shared port and auto detects the tracker protocol for parsing

## Common Configuration Workflow

Follow these practical public steps to configure an MT60X for Plaspy connectivity. The exact UI or SMS flow may vary by firmware or vendor tool.

1. Access the official Megastek configuration method such as the device SMS interface or the manufacturer software
2. Enter the Plaspy server as d.plaspy.com or use the Plaspy server IP 54.85.159.138 in the device server settings
3. Set the port to 8888 which is the shared port used by Plaspy for all devices
4. Choose UDP or TCP on the tracker if the device requires you to select a transport protocol
5. Configure the operator APN and any APN username or password required for GPRS data
6. Apply or save the configuration and, if the device requires it, restart the device to activate the new settings
7. Validate that the device reports to Plaspy by checking the Plaspy console for live location and event updates

## Example Configuration Commands

The MT60X can be configured by sending SMS commands to the device. The sample public commands below use the device default password 000000. Replace placeholders before sending. These commands are presented in the same order as public setup guidance.

- Note on password
  - The sample device password used in these public commands is 000000. If the unit has a different password, replace 000000 with the current device password in each command.

- Note on IMEI usage
  - Replace the IMEI placeholder with the device IMEI. The device ID command requires the last 15 digits of the IMEI. Use the last 15 digits as shown in the example replacement note.

1. Set the device ID
   - Replace {{imei_last15}} with the last 15 digits of the device IMEI

```
M000000,22,{{imei_last15}}
```

   Example explanation
   - If the device IMEI is 123456789012345 then send
```
M000000,22,123456789012345
```

2. Set the operator APN
   - Replace {{apn}} with your SIM APN. If your operator requires a username and password, include {{apnu}} and {{apnp}} respectively

```
M000000,23,{{apn}}
```

   or with APN user and password
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Set the update interval to 60 seconds

```
M000000,25,60
```

4. Set the GPRS server to Plaspy by IP
   - This command sets the server entry number 56 to the Plaspy IP and port as published

```
M000000,24,56 54.85.159.138,8888
```

   - The public guidance above uses the Plaspy server IP. You can also configure d.plaspy.com where the device firmware accepts a domain name for server host entries.

5. Enable GPRS mode

```
M000000,21,2
```

Important
- Send each SMS from an authorized phone number if the tracker enforces SMS source authorization.
- If you change the device password from the default 000000, update subsequent SMS commands to use the new password.

## Configuration Notes

- Firmware and model variants may change the exact SMS syntax or supported command codes; verify the command set for your MT60X firmware before sending config messages.
- SMS based setup is a common public method for MT60X devices but manufacturer software or a configuration tool may be available and is often easier for bulk or fleet deployments.
- Choose UDP or TCP at the device only if the device requires an explicit transport selection; Plaspy will auto detect the tracker protocol once data arrives on the shared port.
- Use the device IMEI consistently when registering devices in Plaspy and when creating the device identifier on the tracker.
- Confirm APN, username, and password values with your mobile operator before configuring to avoid connectivity failures.

## Why Use Plaspy with This Configuration

Using the Megastek MT60X with Plaspy gives supervised programs and operators a streamlined path for real time location, alarm, and telemetry integration. The public SMS configuration commands and the shared Plaspy server settings make it practical to provision devices quickly and validate reporting centrally in Plaspy for live monitoring, geofence enforcement, and event driven alerts.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup guidance on the Megastek website at https://www.megastek.com/ before large scale deployments.
