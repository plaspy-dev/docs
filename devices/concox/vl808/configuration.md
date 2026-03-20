---
slug: /concox/vl808/configuration
id: vl808-configuration
sidebar_label: Configuration
title: Concox - VL808 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox VL808 showing how to configure the device to report to Plaspy servers for reliable fleet tracking
keywords:
  - Concox VL808 configuration
  - Concox VL808 setup
  - VL808 server configuration
  - VL808 Plaspy setup
  - Concox tracker configuration
  - vehicle GPS tracker setup
  - fleet tracking configuration
  - GNSS tracker Plaspy
  - LTE tracker configuration
  - VL808 SMS commands
---

# Concox - VL808 Configuration

This page documents the public configuration context for using the Concox VL808 with Plaspy. It explains the shared Plaspy server settings and presents the practical, manufacturer-provided SMS commands and workflows commonly used to point the VL808 at Plaspy for real time tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The VL808 supports SMS and GPRS configuration methods and the commands below reflect commonly used public settings for connecting the device to Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the VL808 to communicate reliably with Plaspy so GNSS positions, telemetry, and events appear on the platform. This includes setting the cellular APN, configuring the GPRS server to point at Plaspy, choosing the transport protocol if required, and verifying reporting.

- Configure the device APN and enable cellular data so the VL808 can send position and telemetry to Plaspy.
- Point the tracker to the shared Plaspy server endpoint and confirm the transport and port are set.
- Set a reasonable reporting interval to balance real time visibility and data usage.
- Enable GPRS mode and save settings so the device can transmit autonomously.
- Validate configuration with the device verification command and confirm the unit appears in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for data collection

## Typical Requirements Before Setup

- A powered VL808 unit installed or on-bench with access to its configuration interface.
- An active cellular SIM with data enabled and the correct APN for the operator.
- Ability to send and receive SMS to the tracker if using SMS commands for configuration.
- Access to the official manufacturer configuration method or software for reference.
- Note of the device IMEI and identification so you can confirm the correct unit in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The VL808 is configured to report GNSS positions, telemetry, and event data to the shared Plaspy server endpoint and port. Configuring the tracker takes it from a raw data source into an addressable device in Plaspy so maps, alerts, and reports reflect live status.

- The tracker sends data packets to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and installer preference.
- Plaspy examines incoming packets and automatically detects the protocol used by the tracker.
- Regular position uploads and event reports allow Plaspy to maintain real time visibility and history.
- Verification of successful connection is done by checking the device in Plaspy and using the device verification command.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as supported by the VL808.
2. Set the device APN to your mobile operator value so GPRS data is permitted.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Apply or save the configuration and enable GPRS mode so the device will begin data transmission.
6. Restart or power cycle the device if required by the manufacturer to apply settings.
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform and issuing the device verification command.

## Example Configuration Commands

The VL808 can be configured by sending SMS commands. The following public SMS commands are provided by the manufacturer and preserve placeholders where appropriate. Preserve the order when performing an initial setup.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN
Note: replace {{apn}} with your operator APN. If your APN requires username and password, include {{apnu}} and {{apnp}} respectively.
```text
APN,{{apn}}{{apnu ? ',' + {{apnu}} : ''}}{{apnp ? ',' + {{apnp}} : ''}}#
```
(Manufacturer shorthand: APN,{{apn}},{{apnu}},{{apnp}}# — include the optional fields as needed)

- Set the GPRS server using domain on Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the upload interval to every 60 seconds
```text
TIMER,60#
```
- Alternative timer format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS and server settings
```text
GPRSSET#
```

Note on placeholders: {{apn}} is the mobile network APN string provided by your SIM operator. {{apnu}} and {{apnp}} are optional APN username and password fields sometimes required by certain operators.

## Configuration Notes

- Firmware and hardware revisions can change available command syntax and behavior; always confirm commands with the manufacturer documentation for your unit.
- SMS-based configuration is supported for the VL808 as shown, but PC tools or OEM configuration software can also be used depending on installer preference.
- Choose UDP or TCP according to network conditions and installer requirements; Plaspy will accept either on port 8888 and auto-detect the protocol.
- Use the verification command GPRSSET# to confirm the device has stored the GPRS server and APN settings.
- When using the SERVER command you may specify either the domain d.plaspy.com or the IP 54.85.159.138, both on port 8888.

## Why Use Plaspy with This Configuration

Configuring the Concox VL808 to report to Plaspy provides a straightforward way to bring rugged, vehicle-grade GNSS and telemetry into a centralized fleet visibility platform. For organizations that need consistent position updates, accelerometer events, and I/O state monitoring, directing the VL808 to Plaspy ensures data flows into live maps, alerts, and reports used for operational oversight.

To learn more about Plaspy and how it supports devices like the VL808 visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and installation instructions verify details with the manufacturer at https://www.iconcox.com/ as device configuration methods and firmware behavior can change over time.
