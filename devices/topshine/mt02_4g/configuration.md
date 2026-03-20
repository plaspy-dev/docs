---
slug: /topshine/mt02_4g/configuration
id: mt02_4g-configuration
sidebar_label: Configuration
title: TopShine - MT02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for TopShine MT02 4G tracker and how to point the device to Plaspy for live tracking
keywords:
  - TopShine MT02-4G
  - MT02-4G configuration
  - TopShine GPS tracker configuration
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - GPRS server settings
  - tracker APN setup
  - vehicle tracking configuration
  - fleet tracking integration
  - MT02-4G Plaspy setup
---

# TopShine - MT02-4G Configuration

This page covers the public configuration context for using the TopShine MT02-4G tracker with Plaspy. It summarizes the practical steps and publicly available SMS commands for preparing the device to report to Plaspy, and it explains the shared server settings Plaspy requires. The content is based on the MT02-4G description and the manufacturer style SMS setup commands that are commonly used to configure the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MT02-4G commonly uses SMS commands for initial configuration, so this page includes the public SMS command examples and practical workflow notes to help you integrate the device with Plaspy.

## Configuration Overview

Configuring an MT02-4G for Plaspy prepares the tracker to send location and telemetry to the Plaspy server endpoint so the device is visible in the platform. The public SMS commands from the manufacturer show how to reset the device, set device ID, configure APN, and point the device to the Plaspy GPRS server and port. Follow the workflow below to ensure the tracker can connect reliably and be detected automatically by Plaspy.

- Set or confirm the device password and IMEI so you can send configuration SMS commands.
- Configure the mobile operator APN and optional APN credentials so the tracker has data connectivity.
- Point the tracker to the Plaspy server endpoint and port so it reports to the shared Plaspy service.
- Choose the transport mode (UDP or TCP) if required by the tracker and save the configuration.
- Validate connectivity by checking that the device reports to Plaspy and appears in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and installed MT02-4G tracker physically connected per the manufacturer installation guide.
- A valid cellular SIM with data and SMS capability appropriate for your region and operator.
- Access to the device phone number so you can send SMS configuration commands.
- The device IMEI number available for identification and device id commands.
- Knowledge of the mobile network APN values for the SIM operator (and optional APN username and APN password).
- Access to the official TopShine configuration method such as SMS commands or the vendor software when required.

## How This Tracker Connects to Plaspy

The MT02-4G is configured to send telemetry and location data over the cellular data link (GPRS/4G) to the Plaspy server endpoint and port. Plaspy then displays live position and event information in the platform, with automatic protocol detection handling the tracker protocol.

- The tracker reports location and device status to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol manually on the platform side.
- Transport may be UDP or TCP depending on the device setting; choose the transport the hardware supports and the network favors.
- Once the device is reporting, Plaspy provides visibility for live location, historical routes, and event alerts.
- The device can upload stored logger points after connectivity is restored so events are preserved.

## Common Configuration Workflow

1. Access the official TopShine configuration method, typically SMS commands documented by the manufacturer or vendor toolset.
2. Confirm or obtain the device IMEI and default password (the sample public setup uses 000000 as the device password).
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.
4. Set port 8888 as the server port for Plaspy and choose UDP or TCP if the device requires a transport selection.
5. Configure the operator APN and optional credentials so the tracker can establish a data session.
6. Apply or save the configuration and restart the device if required by the tracker.
7. Validate the device is reporting to Plaspy by checking the Plaspy dashboard for the tracker or confirming recent data uploads.

## Example Configuration Commands

The MT02-4G supports SMS based configuration. The following public commands are examples taken from manufacturer documentation. These SMS commands use the device default password 000000 in the examples. Replace the password portion with the device password only if you have changed it.

Notes:
- Send each command as an SMS to the device phone number.
- Replace placeholders such as [apn], [apnu], and [apnp] with your operator APN, APN username, and APN password respectively.
- For the device ID command, the manufacturer directs using the first 14 digits of IMEI when setting the device Id; Plaspy identifies trackers by IMEI on its side.

1. Reset to factory settings (optional initial step)
```text
W000000,990,099###
```

2. Set the device Id using the first 14 digits of IMEI (construct the 14 digit value from your IMEI)
```text
W000000,010,<first14digitsOfIMEI>
```
Example: if IMEI is 123456789012345 use 12345678901234 in the command.

3. Set the operator APN (replace placeholders)
```text
W000000,011,[apn]
```
If your operator requires APN username or password include them:
```text
W000000,011,[apn],[apnu],[apnp]
```
- [apn] = your mobile operator APN
- [apnu] = APN username if required
- [apnp] = APN password if required

4. Set the GPRS server to Plaspy (this example uses the public Plaspy IP and port)
```text
W000000,012,54.85.159.138,8888
```
You may alternatively use the Plaspy domain in vendor tools or settings where a domain is accepted:
- d.plaspy.com and port 8888

5. Switch to GPRS mode
```text
W000000,013,2
```

6. Set the update/reporting interval (example value from public commands)
```text
W000000,014,6
```

7. Command to request the device IMEI (verification)
```text
W000000,601
```

## Configuration Notes

- Firmware and hardware revisions may change command behavior or parameter formats; check manufacturer release notes before large deployments.
- The MT02-4G supports SMS based configuration as shown in the public examples but vendor software or a configuration tool may also be available from TopShine.
- When configuring the GPRS server you can use either the Plaspy domain d.plaspy.com or the IP 54.85.159.138 with port 8888; all devices on Plaspy use the same port and the platform auto detects protocol.
- Choose TCP or UDP transport on the device according to network conditions and the device firmware options; UDP is commonly used for trackers but check device documentation.
- Replace APN placeholders and IMEI-derived values carefully; an incorrect APN or device id will prevent data from reaching Plaspy.

## Why Use Plaspy with This Configuration

Using the MT02-4G with Plaspy provides a straightforward route to real time tracking, route history, and event alerting for fleets and vehicle assets. The combination of a compact 4G tracker with Plaspy’s shared server settings and automatic protocol detection reduces the per device configuration overhead and simplifies rollouts across mixed fleets.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and manufacturer details on the TopShine official site https://www.gztopshine.com/ as these elements can change over time.
