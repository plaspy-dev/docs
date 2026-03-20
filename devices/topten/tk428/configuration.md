---
slug: /topten/tk428/configuration
id: tk428-configuration
sidebar_label: Configuration
title: TopTen - TK428 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen TK428 OBD II GPS tracker and how to connect it to Plaspy using shared server settings
keywords:
  - TopTen TK428 configuration
  - TopTen TK428 setup
  - TK428 Plaspy
  - TopTen GPS tracker configuration
  - TK428 OBD2 setup
  - vehicle tracking TK428
  - TK428 server settings
  - Plaspy tracker configuration
  - TK428 GPS platform setup
  - fleet management TK428
---

# TopTen - TK428 Configuration

This page documents the public configuration context for using the TopTen TK428 OBD II GPS tracker with Plaspy. It consolidates the known, publicly available setup steps and commands for directing the device to Plaspy servers and explains the workflow you can follow to validate connectivity and device visibility in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during connection. Exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools, so this guide focuses on the practical public steps and the Plaspy server values you will need to apply.

## Configuration Overview

The TK428 is a plug and play OBD II tracker that can be prepared to report location and vehicle telemetry to a remote server. The public configuration process ensures the device has correct APN and server settings, that the device identifier is known, and that you can verify the device is seen by Plaspy.

- Configure the tracker to report to the Plaspy server endpoint and port.
- Provide correct APN and GPRS parameters so the device can connect to mobile data.
- Use the device IMEI derived identifier so Plaspy can match the device to incoming data.
- Validate connectivity and that the device appears in the Plaspy platform.
- Optionally use SMS commands for configuration and verification when supported by the tracker.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the vehicle OBD II port to power and attach the TK428 device.
- A working SIM card with mobile data and SMS capabilities and the APN credentials for that SIM.
- The device IMEI number available (used to derive the tracker identifier).
- Access to the official TopTen configuration method such as SMS commands or vendor configuration software.
- Basic permissions to send test SMS commands and to restart the tracker if required.

## How This Tracker Connects to Plaspy

The TK428 sends its position and available telemetry to the shared Plaspy server endpoint and port so the platform can process and display device data. Identification is performed using the tracker ID derived from the device IMEI and Plaspy automatically recognizes the protocol the device uses.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data is sent over either UDP or TCP depending on device configuration and network conditions.
- The device identifier corresponds to the last 14 digits of the IMEI as reported in the device PAR command.
- APN and GPRS settings must be configured so the tracker can open a data session to the Plaspy server.
- Plaspy will automatically detect the tracker protocol once the device connects to the platform endpoint.

## Common Configuration Workflow

1. Access the official TopTen configuration method or software documented by the manufacturer (SMS commands or vendor tool).
2. Obtain the device IMEI and derive the tracker identifier (the last 14 digits are used by TopTen devices).
3. Enter the Plaspy server as either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
4. Set the port to 8888 in the device configuration (Plaspy uses the same port for all devices).
5. Choose UDP or TCP if the device requires explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate the device reports to Plaspy and appears in the platform using the IMEI derived identifier.

## Example Configuration Commands

The TopTen public configuration supports SMS-based commands. The following commands are provided as public examples for setting factory defaults and configuring APN and GPRS server values. The prefix shown (111111) is the SMS password used in these examples as provided by the manufacturer instructions.

- Optional initial reset to restore factory settings:
```text
111111CLR
```

- Set APN and GPRS server to point the device to Plaspy. This command sets the server IP, the port, and APN parameters. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your SIM card APN name, username, and password as required:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```

- Verify or check the current WWW server settings on the device:
```text
111111WWW:
```

Notes about placeholders:
- {{apn}} is the APN name for your mobile operator.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.

The manufacturer documentation indicates the tracker ID used by Plaspy corresponds to the last 14 digits of the 15 digit IMEI. For example, if the IMEI is 15 digits long, the identifier is IMEI characters 2 through 15.

## Configuration Notes

- Firmware versions and hardware revisions can change exact command formats and available parameters. Always confirm command syntax with TopTen documentation for your device revision.
- The example commands above use SMS based configuration as published in public TopTen materials. Vendor configuration tools may provide alternative methods.
- Choose UDP or TCP according to your deployment needs; both are supported by the device and by Plaspy on port 8888.
- The APN placeholders must be replaced with the exact values from your mobile operator to enable GPRS connectivity.
- If you perform a factory restore, reapply the server and APN settings and then validate connectivity.

## Why Use Plaspy with This Configuration

Using the TK428 with Plaspy enables consistent server-side handling of incoming telemetry from OBD II devices and provides a single platform for visibility over location and vehicle data. For fleet operators and vehicle managers, this setup helps centralize live tracking and correlates vehicle ECU data with location for operational insight.

To learn more about Plaspy and how the platform processes device data, visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the official TopTen website http://www.t10.cn since specifications and command formats can change over time.
