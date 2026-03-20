---
slug: /eelink/gpt60/configuration
id: gpt60-configuration
sidebar_label: Configuration
title: EElink - GPT60 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT60 GPS tracker with Plaspy server settings and example SMS commands
keywords:
  - EElink GPT60 configuration
  - GPT60 setup
  - GPT60 Plaspy
  - EElink GPS tracker configuration
  - GPT60 server configuration
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - EELINK 2.1 configuration
  - personal tracker GPT60
  - GPS platform setup
---

# EElink - GPT60 Configuration

This page documents the public configuration context for using the EElink GPT60 with the Plaspy platform. It focuses on the practical steps and public settings you can apply to point the GPT60 to Plaspy, and it includes the manufacturer SMS commands that are commonly used for initial setup and verification.

Plaspy uses shared server settings for all supported trackers and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPT60 can be configured using SMS commands as shown below; follow the manufacturer guidance and the examples here to align the device with Plaspy server settings.

## Configuration Overview

The goal of configuring the GPT60 for Plaspy is to prepare the device to reliably send location, event, and status data to the Plaspy server so it appears in the platform for mapping, alerts, and history. Configuration typically includes setting the mobile data APN, registering the Plaspy server endpoint and port, tuning the reporting interval, and validating that the device is visible in Plaspy.

- Set the device APN so the tracker can use mobile data for telemetry.
- Point the device to the Plaspy server using the domain or IP and the shared port.
- Choose transport (UDP or TCP) if the device requires a transport selection.
- Set the reporting interval to match your tracking and battery requirements.
- Verify parameters and confirm the device reports to Plaspy successfully.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (used across all devices in Plaspy)  
- Transport support for UDP or TCP where the device permits either option  
- Plaspy automatically detects the tracker protocol when the device connects

All Plaspy supported devices use the same port and Plaspy handles protocol detection so you only need to provide the server endpoint and choose a transport if the tracker requires one.

## Typical Requirements Before Setup

- A charged GPT60 with SIM installed and active mobile data and SMS capability.  
- The correct APN for the SIM operator; some networks also require APN username and password.  
- Ability to send SMS messages to the device or access to the manufacturer's configuration tool.  
- Access to a Plaspy account or account owner to confirm the device appears and reports data.  
- Knowledge of the device IMEI and any required activation identifiers used by Plaspy or your administrator.  

## How This Tracker Connects to Plaspy

When configured, the GPT60 reports GNSS position, fallback Wi‑Fi and LBS fixes, and event data to the Plaspy server endpoint and port. Plaspy ingests telemetry and events and displays them in the platform for mapping, alerts, and historical playback.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138 on port 8888.  
- Telemetry and events use the EELINK 2.1 protocol to format data for Plaspy.  
- Events such as SOS, fall or vibration alerts, and low battery are transmitted to Plaspy for alerting.  
- Plaspy receives position updates at the configured reporting interval for real time monitoring and history.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GPT60, for example SMS commands or the EELINK configuration tool.  
2. Configure the device APN using the correct operator APN and optional username and password.  
3. Enter the Plaspy server endpoint using d.plaspy.com or 54.85.159.138.  
4. Set the server port to 8888.  
5. Choose UDP or TCP if the device requires explicit transport selection.  
6. Apply or save the configuration and restart the device if required by the manufacturer.  
7. Validate that the device reports to Plaspy and appears in your Plaspy account with expected telemetry and events.

## Example Configuration Commands

The GPT60 supports SMS based configuration. The following public SMS commands are provided in the manufacturer configuration content. Send each command as an SMS to the device phone number. Preserve placeholders such as [apn] when you substitute values.

- Optional initial reset to factory defaults
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,[apn]#
```
If your operator requires an APN username and password, include them:
```
APN,[apn],[apnu],[apnp]#
```
(Placeholders: [apn] = operator APN, [apnu] = APN username, [apnp] = APN password)

- Set the GPRS server using the Plaspy domain (example)
```
SERVER,1,d.plaspy.com,8888#
```
or set the GPRS server using the Plaspy IP (example)
```
SERVER,0,54.85.159.138,8888#
```

- Set the reporting/update interval to every 60 seconds
```
TIMER,60#
```

- Check current parameter settings
```
PARAM#
```

These commands reflect the publicly shared SMS configuration flow for the GPT60. Use the domain or IP option as appropriate and be mindful of any manufacturer variations in command syntax for your firmware version.

## Configuration Notes

- The SMS command set above is a public example; exact syntax and available commands can vary by firmware revision and regional device variants.  
- The GPT60 can be configured by SMS as shown, but some installers prefer the manufacturer software or an OTA method if available.  
- Choose UDP or TCP based on your installation needs; Plaspy accepts both and automatically detects the protocol when the device connects.  
- Plaspy uses the same port for all supported devices so set port 8888 when registering the server endpoint.  
- Always verify APN details and credentials with your SIM operator if mobile data does not attach after configuration.

## Why Use Plaspy with This Configuration

Using the GPT60 with Plaspy gives organizations centralized visibility for personal safety devices and portable asset trackers. The device’s multi mode positioning, event reporting, and EELINK 2.1 support allow location, SOS alerts, fall detection, and activity telemetry to be delivered to Plaspy for mapping, alerting, and historical review.

To learn more about how Plaspy works with trackers like the GPT60 visit https://www.plaspy.com and review the latest device details on the manufacturer site https://www.eelink.com.cn/. Manufacturer specifications, firmware behavior, and setup methods can change over time so verify the most current configuration instructions with EElink before deployment.
