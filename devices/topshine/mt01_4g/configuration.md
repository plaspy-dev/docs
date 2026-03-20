---
slug: /topshine/mt01_4g/configuration
id: mt01_4g-configuration
sidebar_label: Configuration
title: TopShine - MT01-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT01-4G integration with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - TopShine MT01-4G configuration
  - TopShine MT01-4G setup for Plaspy
  - Plaspy tracker configuration
  - MT01-4G server configuration
  - MT01-4G GPS tracker setup
  - Plaspy device onboarding
  - TopShine tracker SMS commands
  - Vehicle tracking configuration
  - Fleet tracking platform setup
  - GPS telemetry integration
---

# TopShine - MT01-4G Configuration

This page documents the public configuration context for using the TopShine MT01-4G with Plaspy. It summarizes the shared Plaspy server settings, the typical prerequisites, and the practical configuration steps you can use to point an MT01-4G device at Plaspy. Where available, SMS command examples and placeholders from the manufacturer are included so installers can apply them directly or adapt them to their tooling.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects tracker protocols when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public, practical steps required to connect an MT01-4G to the Plaspy platform and includes the SMS command examples provided by the vendor.

## Configuration Overview

The configuration process prepares the MT01-4G to communicate reliably with Plaspy, enabling live tracking, telemetry, and alerting. It typically involves setting the device identity, configuring mobile data parameters, and pointing the unit to the Plaspy server and port. The examples below show the public SMS commands that many installers use to configure TopShine devices.

- Set the device identifier so Plaspy can map the tracker to a vehicle record.
- Configure the mobile operator APN and optional APN username and password for GPRS data.
- Point the tracker to the Plaspy server endpoint or IP and use port 8888 for data transport.
- Choose UDP or TCP transport if the device requires explicit selection.
- Apply and restart the device so it begins reporting to the Plaspy endpoint.
- Verify the device is visible in Plaspy by confirming periodic position updates.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the MT01-4G. These values are used by Plaspy for all supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all devices and automatically detects the protocol

## Typical Requirements Before Setup

- A powered MT01-4G installed or temporarily powered on a bench with access to SMS and GPRS functions
- An active SIM card with a data plan configured for the device and correct APN settings
- Access to the device IMEI to create or verify the device identifier used by Plaspy
- The device default password supplied by the manufacturer if SMS configuration requires it; the public examples below use the default password 000000
- Ability to send SMS commands from a mobile phone or a configuration tool that supports TopShine SMS syntax
- Confirmation of the correct APN, APN username, and APN password from the SIM operator if required

## How This Tracker Connects to Plaspy

When configured, the MT01-4G transmits location and telemetry to the Plaspy server endpoint and port. Plaspy receives position and event payloads, maps the device identifier to a vehicle record, and makes the data available in the dashboard, alerts, and reporting modules.

- The tracker reports GPS positions and movement updates to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- Telemetry such as fuel level, ignition status, relay events, and alarms are sent to Plaspy along with location
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol profile in the platform
- You can configure the device to use either UDP or TCP transport to the same Plaspy port 8888 depending on device options
- Once the device reports, Plaspy surfaces real-time positions, telemetry charts, and event notifications

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands from an authorized number.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device configuration.
3. Set the port to 8888, since Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the SIM APN and optional APN credentials so the device can open a GPRS data session.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by confirming periodic position updates and telemetry in the Plaspy dashboard.

## Example Configuration Commands

The manufacturer provides SMS based configuration commands. The sample commands below use the public default device password 000000 as shown in the vendor documentation. Preserve the placeholders and replace them with your actual values.

- Optional initial factory reset
```
W000000,990,099###
```
- Set the device ID (use first 14 digits from the IMEI in this command). Replace \<device_id_14> with the first 14 digits of the IMEI
```
W000000,010,<device_id_14>
```
- Set the operator APN. Replace [apn] with the operator APN. If required, include optional APN username and APN password as [apnu] and [apnp]
```
W000000,011,[apn][,[apnu],[apnp]]
```
- Set the GPRS server to Plaspy using the public IP and port
```
W000000,012,54.85.159.138,8888
```
- Switch the device to GPRS mode
```
W000000,013,2
```
- Set the update interval (example value 6 shown by manufacturer)
```
W000000,014,6
```
- Query command to get device IMEI
```
W000000,601
```

Notes on placeholders
- [apn] is the mobile operator APN and must be replaced with the SIM operator APN string.
- [apnu] and [apnp] are optional APN username and APN password placeholders when the operator requires credentials.
- \<device_id_14> stands for the first 14 digits derived from the IMEI as required by the SMS command sequence. The manufacturer example references IMEI processing when creating the device ID.

## Configuration Notes

- SMS based setup is supported by the device and is a common installation method; ensure SMS commands are sent from an authorized number if the device restricts command sources.
- The default password used in public examples is 000000; confirm the correct factory password and change it if required by your security policy.
- Firmware and hardware revisions can change command syntax or behavior; verify commands against the manufacturer documentation if a command does not produce the expected result.
- Choose UDP or TCP based on your network and reliability requirements. Both transports are supported to Plaspy on port 8888.
- Confirm APN and mobile operator credentials before switching to GPRS mode to avoid connectivity interruptions.

## Why Use Plaspy with This Configuration

Configuring the TopShine MT01-4G to report to Plaspy gives fleet operators consolidated visibility into vehicle location, fuel telemetry, ignition and relay events, and alarm conditions. With Plaspy receiving regular updates from the MT01-4G, organizations can use dashboards, alerts, and reports to monitor operations, detect fuel issues, and act on immobilization or recovery workflows when required.

Learn more about Plaspy and device onboarding at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the latest setup instructions on the official TopShine website https://www.gztopshine.com/ before deploying at scale.
