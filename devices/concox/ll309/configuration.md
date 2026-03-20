---
slug: /concox/ll309/configuration
id: ll309-configuration
sidebar_label: Configuration
title: Concox - LL309 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox LL309 GPS tracker and Plaspy compatibility including server and SMS setup
keywords:
  - Concox LL309 configuration
  - Concox LL309 setup
  - LL309 Plaspy configuration
  - LL309 server configuration
  - Concox GPS tracker setup
  - LL309 SMS commands
  - LL309 APN configuration
  - Plaspy GPS integration
  - cold chain tracker configuration
  - LL309 telemetry setup
---

# Concox - LL309 Configuration

This page documents the public configuration context for using the Concox LL309 GPS tracker with Plaspy. It focuses on the practical server settings and example setup commands that enable the LL309 to report location and environmental telemetry into the Plaspy platform. Where manufacturer-side steps are required, this page summarizes the public commands and workflow rather than replacing the official product manual.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LL309 supports SMS based configuration as shown below and also offers BLE and USB options for local commissioning depending on your workflow.

## Configuration Overview

Preparing the LL309 for use with Plaspy means configuring the device to send its location and sensor telemetry to the Plaspy server endpoint and validating that the device appears in your Plaspy account. The configuration process aligns device network settings, server target, reporting intervals, and transport selection where required.

- Configure the device to target the Plaspy server endpoint and port so telemetry is delivered to Plaspy dashboards.
- Provide the correct APN and enable GPRS or cellular data so the LL309 can upload over LTE.
- Set reporting intervals and timer parameters to match your visibility and battery tradeoffs.
- Validate connectivity and confirm the device reports into Plaspy after configuration.
- Optionally use SMS, BLE, or PC tools depending on the local provisioning method available.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the LL309. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged LL309 device with a working Nano SIM installed and data allowed by the SIM plan.
- Access to the manufacturer configuration method such as SMS commands, BLE commissioning, or PC tools.
- APN information from the mobile operator to enable cellular data connectivity.
- A method to send SMS commands to the device if using SMS based configuration.
- Basic knowledge of desired reporting interval requirements and any regional time zone settings.

## How This Tracker Connects to Plaspy

Once configured, the LL309 sends location and environmental telemetry to the Plaspy server endpoint and port so telemetry, alerts, and status become available inside Plaspy dashboards and rules. Plaspy ingests those messages and maps them to the device record using the detected protocol.

- The device reports GNSS and sensor telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the device setting; Plaspy supports both and will auto detect the protocol.
- Periodic location, temperature, humidity, tamper, and battery status messages are sent according to the device TIMER or reporting configuration.
- Events and exception alerts are forwarded into Plaspy rule sets for notifications and operational workflows.
- Offline cached records are uploaded once connectivity is restored or can be exported locally if required.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands, BLE commissioning app, or PC tool provided by Concox.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP for transport if the device requires explicit selection.
5. Configure APN and any operator credentials, enable GPRS or data mode, and set reporting intervals.
6. Apply or save the configuration and restart the device if required by the manufacturer tool.
7. Validate that the LL309 reports to Plaspy and that location and sensor data appear in your Plaspy instance.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the order shown. These commands are public examples documented for LL309 SMS configuration. If you use BLE or a PC tool, the same values apply but the method will differ.

1. Optional initial factory reset
```
FACTORY#
```
(Use only when you want to restore factory defaults before provisioning.)

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
```
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
- {{apn}} is the APN name provided by your mobile operator.
- {{apnu}} is the APN username if required.
- {{apnp}} is the APN password if required.
- If no username or password are needed send APN,{{apn}}#.

4. Set the GPRS server using the Plaspy domain
```
SERVER,1,d.plaspy.com,8888,0#
```

Alternatively set the GPRS server using the Plaspy server IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update interval to every 60 seconds
```
TIMER,60#
```
Or an alternate timer format
```
TIMER,60,60#
```

6. Enable GPRS data mode
```
GPRSON,1#
```

Verification command to check parameter settings
```
GPRSSET#
```

Send each command as an SMS to the LL309 device number. Commands should be sent in the sequence above when performing initial provisioning. Exact SMS formats may vary by firmware revision so confirm syntax if a command is rejected.

## Configuration Notes

- Different firmware versions or hardware revisions can change SMS command syntax or available features; verify syntax if a command is not accepted.
- Choose UDP or TCP based on your operational preference; Plaspy supports both and will automatically detect the incoming protocol on port 8888.
- SMS based provisioning is a common method for initial setup; BLE or PC tools may provide a more convenient bulk provisioning experience.
- Preserve APN placeholders {{apn}}, {{apnu}}, and {{apnp}} when preparing SMS commands and replace them with operator values before sending.
- Enabling GPRS or data mode is required for real time uploads to d.plaspy.com or 54.85.159.138 on port 8888.

## Why Use Plaspy with This Configuration

Using the LL309 with Plaspy brings location and environmental telemetry into a single fleet management environment so teams can monitor cold chain conditions, receive exception alerts, and track asset movement in near real time. The shared Plaspy server settings simplify device provisioning because the same port is used across supported devices and protocol detection is handled automatically by the platform.

To learn more about Plaspy visit https://www.plaspy.com and review the latest manufacturer documentation at https://www.iconcox.com/ to confirm device specific commands, firmware behavior, and any recent changes to provisioning procedures.
