---
slug: /aoya/a206/configuration
id: a206-configuration
sidebar_label: Configuration
title: AoYa - A206 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for AoYa A206 GPS tracker showing Plaspy server settings SMS commands and practical configuration steps
keywords:
  - AoYa A206 configuration
  - AoYa A206 setup Plaspy
  - AoYa A206 server configuration
  - AoYa A206 GPS tracker
  - AoYa A206 APN setup
  - Plaspy device configuration
  - GPS tracker SMS commands
  - vehicle tracking setup
  - fleet management GPS
  - GPRS tracker configuration
---

# AoYa - A206 Configuration

This page covers the public configuration context for using the AoYa A206 GPS tracker with Plaspy. It collects the practical server settings, SMS configuration commands, and workflow guidance publicly available for preparing the A206 to report to the Plaspy platform. The A206 is an automotive tracker with GPS and AGPS positioning and GSM GPRS connectivity, and this guide focuses on the common steps needed to connect it to Plaspy's shared tracking endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the device. Exact manufacturer-side steps can vary with firmware version, hardware revision, installation type, and the vendor configuration tools or SMS command sets. The A206 supports SMS configuration commands in its public documentation and this page includes those commands and practical notes to help integrate the device with Plaspy.

## Configuration Overview

This configuration process prepares the AoYa A206 so it can send location and status data to Plaspy for visibility and monitoring. The key goal is to set the device APN, server endpoint, port, and transport mode so the tracker establishes a GPRS data connection to the Plaspy endpoint and begins reporting.

- Set the device APN and optional APN credentials so the tracker can use mobile data.
- Configure the GPRS server endpoint and port so the tracker targets Plaspy for data uploads.
- Choose transport (UDP or TCP) if the device requires an explicit selection to match your network needs.
- Optionally perform a factory reset or set timezone before placing the device in service.
- Verify settings and connectivity using the device check command so the tracker is visible in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be configured on the device
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A valid SIM card with a data plan and SMS capability inserted in the A206.
- Power the device and ensure the internal battery or external supply is charged and enabled.
- Knowledge of the operator APN and, if required, APN username and password for the SIM.
- Access to the manufacturer's configuration method such as SMS commands or vendor software.
- The device default password if required by the SMS command set (the public example uses 123456).
- A place to test and confirm the device is reporting to the Plaspy server after configuration.

## How This Tracker Connects to Plaspy

The AoYa A206 is configured to report location and device data over GPRS to the shared Plaspy server endpoint and port. Once APN and server settings are applied, the device will establish a data session and transmit position reports that Plaspy receives and interprets automatically.

- The tracker sends location and status updates to the Plaspy endpoint using GPRS.
- The device is pointed at the Plaspy server address and port so Plaspy receives the data.
- Transport can be set to UDP or TCP on the tracker depending on the device configuration.
- Plaspy automatically detects the device protocol so no per-device protocol selection is required on the platform side.
- Use the device check command to confirm configuration and connectivity before final deployment.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands per AoYa instructions.
2. Enter the Plaspy server address either as d.plaspy.com or as 54.85.159.138 in the device server field.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. If the device requires a transport selection, choose UDP or TCP to match your network preference.
5. Set the operator APN and APN credentials as required so the device can use mobile data.
6. Apply or save the configuration and restart the device if the tracker or instructions require a reboot.
7. Validate that the device reports to Plaspy by using the device verification command and checking visibility on the platform.

## Example Configuration Commands

The AoYa A206 provides public SMS commands for configuration. The commands below are shown in the manufacturer-provided order. The sample setup uses the device default password 123456 as shown in the public documentation. Preserve and replace placeholders where required.

1. Optional initial factory reset (only when required by installation):
```text
begin123456
```

2. Set the timezone to UTC 0:
```text
time zone123456 0
```

3. Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```

4. Set the APN username and password if required (replace [apnu] and [apnp] with your values):
```text
up123456 [apnu] [apnp]
```

5. Set the GPRS server to the Plaspy IP and port (public example uses IP and port):
```text
adminip123456 54.85.159.138 8888
```

6. Switch to GPRS mode and select transport if applicable. The device accepts either command format shown:
```text
gprs123456,1,1
```
or
```text
gprs123456
```

7. Verify current settings from the device:
```text
check123456
```

Notes on placeholders and defaults:
- [apn] is the mobile operator APN. Replace this with your carrier APN string.
- [apnu] and [apnp] are the APN username and APN password placeholders. Only set them if your operator requires credentials.
- The example uses the public default device password 123456. Consult manufacturer documentation for how to change the device password and when to do so.

## Configuration Notes

- SMS based configuration is shown in the public AoYa instructions; ensure SMS messages are sent from a number the device accepts if it uses number filtering.
- Firmware versions and hardware revisions can change command behavior or available options; verify commands against your device firmware.
- Choosing TCP versus UDP is an installer decision; UDP is commonly used for lower overhead while TCP may improve delivery reliability in some networks.
- After applying settings, reboot the device if recommended by AoYa documentation to ensure the new GPRS session is established.
- Confirm APN and SIM data connectivity before relying on server configuration steps.

## Why Use Plaspy with This Configuration

Using the AoYa A206 configured to report to Plaspy gives organizations a straightforward integration path for vehicle visibility and operational monitoring. By setting the APN, Plaspy server endpoint, and transport mode on the A206, the tracker will transmit position and status updates to Plaspy for fleet oversight, location history, and alerts.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer documentation can change over time; verify the latest AoYa A206 setup details and command references at the official manufacturer site http://www.aoyagps.com/ before deployment.
