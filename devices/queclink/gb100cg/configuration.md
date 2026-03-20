---
slug: /queclink/gb100cg/configuration
id: gb100cg-configuration
sidebar_label: Configuration
title: QuecLink - GB100CG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GB100CG showing Plaspy server settings and SMS commands to connect the tracker
keywords:
  - QuecLink GB100CG configuration
  - QuecLink GB100CG setup
  - GB100CG Plaspy configuration
  - QuecLink tracker configuration
  - GPS tracker setup Plaspy
  - vehicle tracking GB100CG
  - UBI tracker configuration
  - GB100CG SMS commands
  - fleet management tracker setup
  - QuecLink Plaspy compatibility
---

# QuecLink - GB100CG Configuration

This page documents the public configuration context for using the QuecLink GB100CG tracker with Plaspy. It summarizes the server settings Plaspy requires, shows example SMS configuration commands provided by the device vendor, and explains the practical steps to prepare the device so that Plaspy can ingest its telemetry and event data.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the GB100CG. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands and examples here as a practical starting point and confirm details with official QuecLink documentation when needed.

## Configuration Overview

This configuration process prepares the GB100CG to communicate reliably with Plaspy by pointing the device at Plaspy's shared server endpoint, selecting the transport, and enabling the reporting and alarm inputs required for your deployment.

- Configure the device GPRS server or TCP/UDP endpoint to point to Plaspy so location and event reports are routed there.
- Set APN and operator credentials for cellular connectivity when required by the SIM or mobile operator.
- Enable reporting intervals and event inputs so the GB100CG sends periodic position and alarm data to Plaspy.
- Validate the device is visible in Plaspy after applying settings and perform a restart if needed.
- Use SMS or the manufacturer's configuration tool according to your available provisioning method to apply the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices configured for Plaspy use the same port and the platform automatically detects the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A powered GB100CG installed or accessible for configuration and rebooting.
- An active SIM or eSIM with a valid mobile data plan and correct APN settings for the operator.
- Access to the manufacturer supported configuration channel such as SMS commands or vendor software.
- Knowledge of the device password if SMS or remote commands require authentication. The sample commands below use the default password queclink where shown.
- A way to send SMS messages to the device if using SMS based provisioning, or access to the vendor tool for direct configuration.
- Confirmation of the device firmware version where applicable, as command sets or parameters may differ between firmware releases.

## How This Tracker Connects to Plaspy

When configured to use Plaspy settings, the GB100CG reports position, telemetry, and event data to the shared Plaspy server endpoint and port listed above. Plaspy ingests these reports and maps them to the corresponding device records for real time tracking and historical analysis.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Reports can be sent over UDP or TCP depending on the device configuration and network conditions.
- Scheduled position updates and alarm events (for example SOS or tamper) are forwarded to Plaspy and become available in dashboards and alerts.
- Plaspy automatically detects the tracker protocol on connection so you do not need to select a protocol inside the platform.
- After configuration, validate that the device appears as online in Plaspy and that periodic reports are being received.

## Common Configuration Workflow

1. Access the official QuecLink configuration method or software for the GB100CG, or prepare to send SMS commands if using SMS provisioning.
2. Enter the Plaspy server endpoint by using d.plaspy.com or the IP 54.85.159.138 as instructed by the manufacturer tool or SMS command.
3. Set the port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP in the device transport settings if the device requires explicit transport selection.
5. Configure APN and any operator credentials required for cellular data connectivity.
6. Apply or save the configuration and restart the device when required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by checking for incoming position or heartbeat messages in the platform.

## Example Configuration Commands

The GB100CG can be configured using SMS commands in the format shown below. These commands are provided as a public example from the device configuration content. The sample setup uses the device password queclink as the authentication token in each command where required.

Note about placeholders
- {{apn}} = your mobile operator APN
- {{apnu}} = APN username when required by the operator
- {{apnp}} = APN password when required by the operator

1. Optional initial step to restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
This resets device settings to factory state. Use only when required during initial provisioning.

2. Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Replace the placeholders {{apn}}, {{apnu}} and {{apnp}} with your operator values. If no username or password is required, leave those placeholders empty as supported by the device.

4. Configure the GPRS server to point to Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command includes both the Plaspy domain d.plaspy.com and the IP 54.85.159.138 and sets the port 8888. Transport selection (UDP or TCP) is handled per device firmware parameter where applicable. Plaspy automatically detects the protocol used when the device connects.

5. Set reporting intervals to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
This example sets periodic reporting to 60 second intervals as shown.

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

These SMS commands are examples and should be used according to your deployment policy and the specific firmware command set on the unit being configured.

## Configuration Notes

- Firmware differences can change parameter order and supported commands. Confirm the exact SMS command syntax for your device firmware.
- The GB100CG supports SMS based provisioning as shown, but vendor configuration tools may offer a graphical alternative with the same fields.
- Choose UDP or TCP based on network reliability and operator performance; Plaspy will accept either and will detect the protocol automatically.
- Keep the device password secure. The examples above use the default password queclink as provided in the public commands; update the password if required by your security policy.
- Preserve APN placeholders when preparing bulk provisioning scripts and replace them with operator values per SIM profile.

## Why Use Plaspy with This Configuration

Using the GB100CG configured to report to Plaspy provides a practical way to collect high-fidelity GNSS and motion data along with event reports for fleet management, insurance telematics, and security workflows. Pointing the device to the shared Plaspy endpoint and port ensures consistent ingestion and availability of location and alarm data in Plaspy dashboards and alerting systems.

Learn more about Plaspy and how it processes device telemetry on the main website https://www.plaspy.com. For device specific commands, firmware behavior, and the latest configuration details verify current information with the manufacturer at https://www.queclink.com/
