---
slug: /tzone/tz_dp070/configuration
id: tz_dp070-configuration
sidebar_label: Configuration
title: TZone - TZ-DP070 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for integrating the TZone TZ-DP070 with Plaspy using shared server settings and SMS GPRS commands
keywords:
  - TZone TZ-DP070 configuration
  - TZ DP070 setup Plaspy
  - TZone tracker configuration
  - TZ DP070 server configuration
  - TZ DP070 APN setup
  - TZ DP070 SMS commands
  - Plaspy device integration
  - temperature monitor network setup
  - TZ DP070 GPRS configuration
  - TZone device documentation
---

# TZone - TZ-DP070 Configuration

This page covers the public configuration context for using the TZone TZ-DP070 with Plaspy. It explains the server settings Plaspy expects and the practical steps that are commonly used to prepare the TZ-DP070 for reporting to the Plaspy platform using available public commands. The device information and example SMS commands shown here reflect published public configuration content.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TZ-DP070 model supports SMS and GPRS style setup flows shown in the public commands below, so this page focuses on applying Plaspy server information to those manufacturer configuration methods.

## Configuration Overview

The goal of this configuration process is to prepare the TZ-DP070 to communicate reliably with the Plaspy platform so data from the device becomes visible in Plaspy. Using the manufacturer supported configuration method you will set network parameters, point the device to the Plaspy endpoint, and enable the device reporting mode so Plaspy can detect and parse the device protocol automatically.

- Configure the device APN so the tracker can establish a GPRS data session.
- Point the tracker to the Plaspy server endpoint so data is routed to Plaspy.
- Set the reporting interval so location or telemetry updates arrive at predictable intervals.
- Activate GPRS reporting mode so the device sends data over the cellular network.
- Validate that Plaspy receives messages and that the device appears online in the platform.

## Plaspy Server Settings

When configuring the TZ-DP070 for Plaspy use these public server settings exactly as shown:

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP depending on device requirement  
- Plaspy automatically detects the tracker protocol so the platform can accept many supported device formats

Note that Plaspy uses the same port for all supported devices and the platform will detect the tracker protocol automatically after the device successfully connects.

## Typical Requirements Before Setup

- A powered TZ-DP070 unit with access to the manufacturer configuration interface or SMS command capability.  
- A working cellular SIM card with data enabled and the correct operator APN for GPRS access.  
- The device phone number or a method to send SMS configuration commands to the tracker.  
- Knowledge of the device password or SMS command prefix required by the TZ-DP070 for remote configuration.  
- Access to the manufacturer documentation or tools to confirm firmware behavior and any device specific requirements.  
- A Plaspy account and project ready to receive the device once it reports to the platform.

## How This Tracker Connects to Plaspy

The TZ-DP070 is configured to send data to the Plaspy server endpoint and port so Plaspy can ingest and display device telemetry. After the device is pointed at the server and reporting is enabled, Plaspy will automatically detect which protocol the device is using and begin processing messages.

- The device uses GPRS to reach the mobile data network after APN and credentials are set.  
- The tracker is pointed to Plaspy using the server domain or IP and port 8888.  
- The device sends reports using either UDP or TCP based on the chosen transport on the device.  
- Plaspy receives incoming messages on port 8888 and auto detects the device protocol for parsing.  
- Once messages arrive, the device becomes visible and report events appear in the Plaspy interface.

## Common Configuration Workflow

1. Confirm you have the TZ-DP070 documentation or the manufacturer configuration method available for your unit.  
2. Ensure the SIM card is installed, active, and the correct operator APN is known.  
3. Using the manufacturer method or SMS commands, enter d.plaspy.com or 54.85.159.138 as the GPRS server address.  
4. Set the server port to 8888 and choose UDP or TCP if the device requires you to select a transport.  
5. Apply or save the configuration and enable GPRS reporting or equivalent operational mode on the device.  
6. Restart the device if required by the manufacturer to apply settings.  
7. Validate that the device is reporting and that Plaspy receives messages and detects the device protocol.

## Example Configuration Commands

The TZ-DP070 can be configured by sending SMS commands to the device. The following public SMS commands are provided in the manufacturer content and are shown in the order they should be applied. Replace placeholders and the device password as appropriate for your installation.

- Set the operator APN. Replace [apn] with your SIM carrier APN. If your APN requires a username or password, include [apnu] and [apnp] respectively. Send this SMS to the device number:
```text
*000000,011,[apn]{{# if apnu or apnp then }},[apnu],[apnp]{{# end }}#
```
Example without username and password:
```text
*000000,011,[apn]#
```

- Set the update interval to 60 seconds (and a second parameter used by the device). Send:
```text
*000000,018,60,999#
```

- Set the GPRS server to the Plaspy IP and port. This command uses the Plaspy server IP and port 8888 as published:
```text
*000000,015,0,54.85.159.138,8888#
```
You may alternatively point to the domain d.plaspy.com if your device accepts domain names.

- Activate the GPRS mode so the device will use GPRS to connect:
```text
*000000,016,1#
```

Notes on the command format
- The example commands use 000000 as the SMS configuration password shown in the public content. Replace 000000 with your device password if it has been changed.  
- Bracketed placeholders such as [apn], [apnu], and [apnp] should be replaced with your operator APN, APN username, and APN password respectively. Leave optional fields out if they are not required by your carrier.  
- Send commands as plain SMS messages to the device control number. Allow a short interval after each command for the device to process and apply settings.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or required parameters. Always confirm commands against your device documentation.  
- The TXT commands above demonstrate SMS based configuration which is common for GPRS capable devices. If your unit supports a software utility or web interface, follow the equivalent steps there.  
- Choose UDP or TCP according to your installation needs; Plaspy accepts both on port 8888 but behavior such as retransmission and session management differs by protocol.  
- Plaspy uses the same port for all supported devices so point all compatible devices to port 8888 when integrating with Plaspy.  
- If you encounter connectivity issues check the APN, SIM data status, and signal quality before changing server settings.

## Why Use Plaspy with This Configuration

Configuring the TZ-DP070 to report to Plaspy gives organizations a way to centralize telemetry and operational visibility from devices across their fleet or installation set. By pointing the device at Plaspy and enabling GPRS reporting, device events and sensor data can be collected in one place where they can be monitored, analyzed, and used for operational decision making.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific guidance from the manufacturer at http://www.tzonedigital.com/ to verify firmware dependent details and ensure you are using the most current setup methods.
