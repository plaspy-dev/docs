---
slug: /topfly/torchx_110/configuration
id: torchx_110-configuration
sidebar_label: Configuration
title: TopFly - TorchX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly TorchX 110 showing Plaspy server settings and SMS commands for fast integration
keywords:
  - TopFly TorchX 110 configuration
  - TorchX 110 Plaspy setup
  - TopFly GPS tracker configuration
  - TorchX 110 server configuration
  - Plaspy tracker integration
  - OBDII tracker setup guide
  - TorchX 110 SMS commands
  - vehicle tracking platform configuration
  - fleet GPS tracker setup
  - CAN bus telemetry integration
---

# TopFly - TorchX 110 Configuration

This page covers the public configuration context required to use the TopFly TorchX 110 with Plaspy. It summarizes the practical server settings and setup workflow you can apply to point the device at Plaspy so the tracker can stream location and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TorchX 110 supports SMS based commands and onboard configuration that can be used to set APN, server endpoint, and reporting intervals before validating the device in Plaspy.

## Configuration Overview

The configuration process prepares the TorchX 110 to communicate reliably with Plaspy and to report position, CAN bus telemetry, and event data. This page focuses on the public steps and commands needed to point the device at the Plaspy server endpoint and to set sensible reporting intervals.

- Configure the device APN so the unit can open a GPRS or LTE data session.
- Set the device server endpoint to Plaspy either by domain or IP and use the shared Plaspy port.
- Choose the transport mode supported by the device (UDP or TCP) and save that setting.
- Set reporting intervals so position updates and telemetry arrive at the desired frequency.
- Verify the device registers and begins sending messages to the Plaspy endpoint.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the TorchX 110 is powered and installed according to manufacturer instructions, such as plugged into an OBDII port for vehicle power.
- A valid SIM card with a data plan and correct APN credentials for the mobile operator.
- Access to the device configuration channel supported by the unit such as SMS commands or the vendor configuration tool.
- Knowledge of the device default password if SMS configuration requires it. The public example uses the default password 0000.
- A Plaspy account and the ability to validate devices in Plaspy after configuration.
- A test period to confirm frequent updates and telemetry are received in Plaspy.

## How This Tracker Connects to Plaspy

The TorchX 110 is configured to report position and vehicle telemetry to the Plaspy shared server endpoint and port so Plaspy can ingest and display live and historical data for fleet operations.

- The tracker opens a data connection to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is configured as UDP or TCP depending on your preference and device options.
- Plaspy automatically detects the tracker protocol and decodes the incoming messages.
- Telemetry including GNSS position and CAN bus fields is forwarded to the Plaspy platform for visibility, alerts, and reporting.
- Regular update intervals and event reporting ensure the device remains visible in Plaspy dashboards and logs.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the TorchX 110 such as the vendor SMS command set or configuration tool.
2. Configure the operator APN using the manufacturer method so the device can establish a cellular data session.
3. Enter the Plaspy server endpoint using either d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 and select UDP or TCP if the device requires transport selection.
5. Apply or save the configuration and, if required, restart the device to commit settings.
6. Validate that the device reports to Plaspy and that telemetry and location appear in your Plaspy account.

## Example Configuration Commands

The TorchX 110 supports SMS based configuration. The following public example commands show a common setup flow using the device default password 0000. Send each line as an SMS to the device. Preserve the placeholders for APN values and replace them with your operator credentials where required.

- Set the time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN and optional APN username and password
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the operator APN string. {{apnu}} and {{apnp}} are optional APN username and password placeholders. Leave them blank or omit the fields if your operator does not require credentials.

- Set the GPRS server to Plaspy using the public Plaspy IP and port
```
IP,0000,54.85.159.138 8888#
```
You can also point to the domain d.plaspy.com if the device supports domain names in server configuration.

- Set the reporting interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
This timer command sets periodic reporting intervals. Adjust values according to your telemetry needs and device capabilities.

## Configuration Notes

- SMS based configuration is commonly supported by TopFly devices; follow official manufacturer instructions for command syntax and edge cases.
- Firmware versions and regional device variants may change available commands or transport behavior. Confirm commands against your device firmware notes.
- Choose UDP or TCP according to network reliability and firewall policies. Plaspy accepts both transports and automatically detects the protocol.
- Replace APN placeholders with your cellular operator details before sending SMS commands.
- Keep the device default password in mind. If you change the password, record it securely to enable future remote configuration.

## Why Use Plaspy with This Configuration

Using TorchX 110 with Plaspy gives organizations a straightforward path to collect high frequency GPS and CAN bus telemetry while relying on a single Plaspy endpoint and port for all compatible devices. Pointing the tracker at d.plaspy.com or 54.85.159.138 on port 8888 and choosing UDP or TCP is the public configuration pattern that enables Plaspy to automatically detect the tracker protocol and begin ingesting data.

To learn more about Plaspy and how the platform handles device onboarding and telemetry, visit https://www.plaspy.com. For the latest device specific configuration, firmware notes, and command references from the manufacturer, confirm current details at https://www.topflytech.com/ as implementation and firmware may change over time.
