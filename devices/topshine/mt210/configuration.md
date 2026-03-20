---
slug: /topshine/mt210/configuration
id: mt210-configuration
sidebar_label: Configuration
title: TopShine - MT210 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TopShine MT210 for Plaspy real time tracking using shared server settings and SMS GPRS commands
keywords:
  - TopShine MT210 configuration
  - MT210 setup for Plaspy
  - TopShine MT210 server configuration
  - MT210 GPS tracker setup
  - Plaspy tracker configuration
  - MT210 GPRS SMS commands
  - vehicle tracker configuration
  - dual SIM GPS tracker setup
  - MT210 telemetry configuration
  - fleet tracking TopShine
---

# TopShine - MT210 Configuration

This page documents the public configuration context for using the TopShine MT210 GPS tracker with the Plaspy platform. It collects the practical server settings and SMS/GPRS command examples that are publicly available for preparing an MT210 for live tracking and telemetry reporting to Plaspy. Use this page to understand what to set on the device before you add it to Plaspy.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The MT210 supports SMS and GPRS setup methods; the example SMS commands below are public samples and show how to set APN, device id, and the GPRS server so the MT210 reports to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the MT210 to communicate reliably with Plaspy, enabling real time location, alarms, and telemetry to appear in the platform. Typical configuration sets the cellular APN, the device identifier, the Plaspy server endpoint and transport, then validates that the tracker is reporting.

- Set the cellular operator APN so the MT210 can use GPRS data for reporting.
- Configure the device id or IMEI-derived id so Plaspy can associate messages with an account.
- Point the tracker to the Plaspy server endpoint and port so location and events are delivered.
- Choose UDP or TCP transport on the device if required by firmware.
- Enable GPRS reporting mode and set a reporting interval to control update frequency.
- Validate connectivity on the Plaspy platform after saving and restarting the device.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy uses the same port for all supported devices  
- Transport support UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol so you do not need to manually select a protocol in Plaspy

## Typical Requirements Before Setup

- Access to the MT210 hardware and any installation harness or power source needed to power the device during configuration.
- At least one active SIM with data enabled and the correct APN for the mobile operator.
- The device IMEI recorded or reachable via the MT210 query command so you can use it as the device identifier.
- Ability to send SMS commands from a phone or management tool if using SMS based configuration.
- Access to official TopShine configuration instructions or tools for firmware specific options.
- A Plaspy account where the device will be registered once it begins reporting.

## How This Tracker Connects to Plaspy

The MT210 can send location and telemetry to Plaspy over GPRS by pointing the device to Plaspy’s shared server endpoint and port. Plaspy ingests the incoming messages, matches the device by its identifier, and presents live location, event alerts and historical data in the platform.

- The tracker is configured to report to the Plaspy server endpoint and port so data reaches Plaspy in real time.
- Messages sent over GPRS are received by Plaspy which automatically detects the device protocol and parses location and event payloads.
- If SMS reporting is used for certain events or fallback, the device IMEI or configured device id links messages to the correct Plaspy device record.
- Reporting includes position updates, alarm events and telemetry that are visible on Plaspy dashboards for monitoring and alerts.
- Using the shared server and port ensures consistent behavior across different tracker models supported by Plaspy.

## Common Configuration Workflow

1. Access the official TopShine configuration method or software, or prepare an SMS-capable phone for device commands. Refer to TopShine documentation for firmware specific tools.
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP on the device if firmware requires explicit transport selection.
5. Configure the APN and any APN credentials so the SIM can open a GPRS session.
6. Apply or save the configuration and restart the device if required by the MT210 firmware.
7. Validate that the device reports to Plaspy and that location and telemetry appear on the platform.

## Example Configuration Commands

The MT210 can be configured by SMS commands. The following public sample commands were provided as manufacturer examples. The device password in these examples is 000000 which is the factory default password. Use an SMS sender that can send plain text messages to the tracker SIM.

- Reset to factory settings (initial or optional reset)
```text
W000000,990,099###
```

- Set the device id (use the first 14 digits of the IMEI as shown in the public examples)
```text
W000000,010,<first14IMEIdigits>
```
Explanation: set the tracker internal id using the first 14 digits from the IMEI. The MT210 IMEI is used to identify the device for reporting and for registration on Plaspy.

- Set the operator APN (placeholders shown)
```text
W000000,011,{{apn}}
```
If APN requires username and password:
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
Explanation: replace {{apn}} with your mobile operator APN. If the APN requires authentication, also supply {{apnu}} for username and {{apnp}} for password.

- Set the GPRS server to Plaspy using the public IP and port from Plaspy
```text
W000000,012,54.85.159.138,8888
```
Note: the public examples use the Plaspy server IP and port. Some firmware may accept a domain name instead; Plaspy also has the domain d.plaspy.com.

- Switch the device to GPRS reporting mode
```text
W000000,013,2
```

- Set the update interval (public example)
```text
W000000,014,6
```
Explanation: the example sets the reporting interval parameter. Confirm the unit and acceptable values with TopShine documentation for your firmware.

- Query device IMEI
```text
W000000,601
```

Important: the default SMS command password in the public examples is 000000. If you change the device password, substitute it in the commands where required.

## Configuration Notes

- Firmware and tool differences: exact command behavior, parameter semantics and supported features can vary by MT210 firmware version and vendor toolset. Always confirm with TopShine documentation for your device revision.
- SMS versus software setup: the MT210 supports SMS based configuration as shown above; other installations may prefer USB or vendor software. Use the method recommended for your environment.
- Transport selection: choose UDP or TCP on the device if required; Plaspy supports both and will auto detect the incoming protocol.
- APN details: confirm APN, APN username and APN password with the mobile network operator before attempting GPRS configuration.
- Device identity: the MT210 commonly uses an IMEI derived id for device identification. Ensure the id you set matches the registration in Plaspy so messages are mapped correctly.

## Why Use Plaspy with This Configuration

Configuring the TopShine MT210 to report to Plaspy provides a reliable path for real time location, alarms and telemetry from vehicles and equipment into a single monitoring platform. The MT210’s dual SIM capability, wide voltage range and battery backup complement Plaspy’s ingestion and alerting to support fleet visibility, anti theft workflows, and operational monitoring across mixed vehicle deployments.

To learn more about Plaspy and how your trackers appear in the platform, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes and manufacturer instructions for the TopShine MT210, please verify information on the official TopShine site https://www.gztopshine.com/ as vendor specifications and setup methods can change over time.
