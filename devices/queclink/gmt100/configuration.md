---
slug: /queclink/gmt100/configuration
id: gmt100-configuration
sidebar_label: Configuration
title: QuecLink - GMT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GMT100 to connect with Plaspy using shared server settings
keywords:
  - QuecLink GMT100 configuration
  - QuecLink GMT100 setup
  - QuecLink GMT100 server configuration
  - QuecLink GMT100 Plaspy
  - GMT100 GPS tracker configuration
  - QuecLink tracker setup
  - Plaspy device configuration
  - GMT100 APN setup
  - GMT100 SMS commands
  - QuecLink tracker integration
---

# QuecLink - GMT100 Configuration

This page documents the public configuration context for using the QuecLink GMT100 tracker with Plaspy. It collects the practical server settings and a typical setup workflow you can apply when integrating the GMT100 with the Plaspy backend. The notes here use publicly available commands and server settings to help you prepare the device for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform level. Manufacturer side steps can vary between firmware versions, hardware revisions, installation types, and vendor configuration tools. Use this guide for general setup and refer to QuecLink manufacturer documentation for device specific details.

## Configuration Overview

This configuration process prepares a GMT100 device to send position and event data to Plaspy so the device becomes visible and manageable in the platform. The GMT100 supports GPRS based reporting and SMS configuration commands, and the example commands below demonstrate a common SMS based setup flow used with Plaspy.

- Configure the device to report to the Plaspy server endpoint so location reports reach the platform
- Set APN and GPRS server parameters so the tracker can open a data session
- Optionally restore factory settings and set timezone or reporting rates to match monitoring needs
- Validate connectivity and confirm the device appears in Plaspy using the shared server and port
- Enable basic inputs such as SOS or motion reporting for event notifications in the platform

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GMT100 unit with a charged internal battery or connection to the vehicle power source
- A valid SIM card with an active data plan and the correct APN values for the mobile operator
- Access to the QuecLink SMS configuration method or the official QuecLink configuration tool for your firmware
- Knowledge of the device password if required for SMS configuration (the public example uses the default password queclink)
- Basic service coverage for GPRS/GSM bands supported by the GMT100
- A record of the device IMEI or serial to verify the device in Plaspy after setup

## How This Tracker Connects to Plaspy

The GMT100 is configured to report position and event messages to the shared Plaspy server endpoint and port so Plaspy can display and manage the device. Once the server and transport are set on the tracker, the platform will automatically interpret the incoming protocol.

- The device sends periodic GPS position reports to d.plaspy.com using port 8888
- GPRS is used to carry tracker messages to the Plaspy server IP 54.85.159.138 or via the domain name
- The tracker can be configured via SMS commands to set APN, server endpoint, and reporting intervals
- Plaspy detects the device protocol automatically and treats all devices using the same platform port consistently
- Event messages such as SOS and motion alerts report to the same Plaspy server endpoint and are visible in the platform

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GMT100, typically SMS commands or the manufacturer tool compatible with your firmware
2. Enter the Plaspy server endpoint using d.plaspy.com or the Plaspy server IP 54.85.159.138
3. Set the port to 8888 which is the shared port Plaspy uses for all devices
4. Choose UDP or TCP if the device requires selecting a transport protocol
5. Configure APN and any operator credentials required for GPRS connectivity
6. Apply or save the configuration and restart the device if required by the device or firmware
7. Validate that the device reports to Plaspy and appears in your account or inventory

## Example Configuration Commands

The GMT100 can be configured by SMS using QuecLink AT style commands. The following public example preserves the order used for a typical setup. The sample commands use the default device password queclink. Use these commands by sending them as SMS messages to the device phone number.

Note on placeholders
- [apn] is the mobile network APN string for your SIM provider
- [apnu] is the APN username when required by the operator
- [apnp] is the APN password when required by the operator

1. Optional initial step to restore factory settings (use only when needed)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the mobile operator APN and credentials
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configure the GPRS server to report to Plaspy by domain and IP on port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic GPS update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Keep the command order when following the above sequence. Replace placeholders with your actual APN and credentials before sending SMS. The factory restore command is optional and should only be used when you intend to reset device settings.

## Configuration Notes

- SMS based configuration is commonly supported for the GMT100; use official QuecLink SMS command formats and confirm the device password before sending commands
- Different firmware versions may require small syntax variations or additional parameters; consult QuecLink documentation for firmware specific guidance
- Choose UDP or TCP according to your network requirements; Plaspy accepts either transport on port 8888 and automatically interprets the incoming protocol
- Verify APN, username, and password with your mobile operator before configuring the device
- After configuration, confirm the device appears and reports correctly in Plaspy using the server settings shown above

## Why Use Plaspy with This Configuration

Using the GMT100 with Plaspy gives organizations a straightforward path to convert device reports into operational visibility. With the tracker configured to report to Plaspy, fleets and operators can receive location updates, event alerts, and monitoring data through a consistent server endpoint and port used across supported devices.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and full technical details verify configuration methods on the manufacturer website https://www.queclink.com/ as device behavior and setup steps can change over time.
