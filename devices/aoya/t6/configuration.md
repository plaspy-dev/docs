---
slug: /aoya/t6/configuration
id: t6-configuration
sidebar_label: Configuration
title: AoYa - T6 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for AoYa T6 GPS tracker configuration with Plaspy server settings and SMS commands
keywords:
  - AoYa T6 configuration
  - AoYa T6 setup
  - AoYa T6 server configuration
  - AoYa T6 Plaspy
  - AoYa GPS tracker configuration
  - T6 SMS configuration
  - T6 APN settings
  - GPS tracker Plaspy setup
  - vehicle tracking T6
  - Plaspy device configuration
---

# AoYa - T6 Configuration

This page documents the public configuration context for using the AoYa T6 GPS tracker with the Plaspy platform. It focuses on the practical, manufacturer-visible steps you can use to direct the T6 to report to Plaspy, using the publicly available SMS command flow and Plaspy server settings. The guidance here is intended to help technical users prepare the device for connectivity and monitoring in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same server endpoint and port are used for all devices on the platform. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools; the AoYa T6 commonly uses SMS commands for configuration and the examples below show the public SMS commands and placeholders where applicable.

## Configuration Overview

The goal of this configuration process is to prepare the AoYa T6 so it reliably connects to Plaspy and reports location and status for visibility in the platform. Typical configuration modifies network APN settings, points the tracker at the Plaspy server, and enables GPRS reporting over the chosen transport.

- Configure APN and optional APN credentials so the device can use mobile data.
- Point the tracker to the Plaspy server domain or IP address and the shared port.
- Select transport (UDP or TCP) and enable GPRS reporting so telemetry is delivered.
- Use the device SMS commands to apply settings if the device does not have a separate tool.
- Validate the tracker is seen in Plaspy and that telemetry updates as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured to use either)
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered and accessible AoYa T6 installed or temporarily accessible for configuration.
- Active SIM card in the device with data and SMS enabled from the mobile operator.
- Knowledge of the operator APN and any APN username or password if required (placeholders {{apn}}, {{apnu}}, {{apnp}} are used below).
- A phone or SMS gateway capable of sending SMS commands to the tracker.
- The device default password if unchanged; the public example setup uses 123456 as the default password.
- Network coverage for GPRS or the appropriate mobile network to allow the device to register and send data.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AoYa T6 is set to send its location and status to the shared Plaspy server endpoint and port. Plaspy receives the device messages regardless of protocol and associates the device using its protocol detection and platform ingestion logic.

- The device is configured with the Plaspy server domain or IP and the shared port 8888.
- The tracker sends telemetry over GPRS to the Plaspy endpoint using UDP or TCP.
- Plaspy automatically detects the tracker protocol when messages arrive on the shared port.
- The platform provides visibility and reporting once the device successfully registers and sends data.
- Verifying connectivity in Plaspy confirms correct server, port, and transport settings.

## Common Configuration Workflow

1. Access the official AoYa configuration method for the T6 (SMS commands are commonly used for this model).
2. Set the device APN using the operator APN value (use {{apn}} placeholder where required).
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.
4. Set the port to 8888 for the Plaspy service.
5. Choose UDP or TCP as the transport if the device requires a transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate the device reports to Plaspy by checking device presence and recent telemetry in the platform.

## Example Configuration Commands

The AoYa T6 commonly accepts configuration by SMS. The public SMS commands below are presented in the same order as typical setup. The example uses the default device password 123456 as shown in the manufacturer examples. Replace placeholders where shown.

1. Optional initial factory reset (only use if you need to restore defaults)
```
begin123456
```

2. Set the time zone to UTC+0
```
time zone123456 0
```

3. Set the operator APN (replace {{apn}} with your mobile operator APN)
```
apn123456 {{apn}}
```
- {{apn}} placeholder should be replaced with your operator APN string.

4. Set APN username and password if required (replace placeholders with operator credentials)
```
up123456 {{apnu}} {{apnp}}
```
- {{apnu}} and {{apnp}} are optional and should be set only if your APN requires authentication.

5. Set the GPRS server to Plaspy using the public IP and port
```
adminip123456 54.85.159.138 8888
```
- This command sets the GPRS server IP and port to the Plaspy server endpoint.

6. Switch the device to GPRS mode and select transport (example forms shown)
```
gprs123456,1,1
```
or
```
gprs123456
```
- Use the variant required by your device firmware to enable data reporting. The first form may include transport flags depending on specific firmware.

7. Check current settings with the verification command
```
check123456
```

## Configuration Notes

- The example SMS commands use the default password 123456 as shown in the public manufacturer examples; changing the default password after initial setup is recommended for security.
- Firmware and tool variations can change SMS syntax and available parameters; consult the device firmware notes if a command is not accepted.
- If the device requires explicit transport selection, test both UDP and TCP to determine which works best with your operator and Plaspy; Plaspy will accept either on port 8888 and automatically detect the protocol.
- SMS based configuration is convenient for in-field setup, but some installers use a manufacturer configuration tool where the same server and port values must be entered.
- Always verify connectivity after applying settings by confirming the device appears and reports in Plaspy.

## Why Use Plaspy with This Configuration

Using the AoYa T6 configured to report to Plaspy gives organizations a straightforward way to add vehicle visibility and operational monitoring without device-by-device server management. The shared Plaspy server settings mean you can apply consistent configuration across devices and rely on the platform's automatic protocol detection to handle incoming messages.

To learn more about Plaspy and how it can integrate with devices like the AoYa T6, visit https://www.plaspy.com. For the latest device-specific setup details, firmware notes, and manufacturer guidance, verify current information on the AoYa website at http://www.aoyagps.com/ as manufacturer specifications and configuration steps can change over time.
