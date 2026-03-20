---
slug: /topshine/pt20/configuration
id: pt20-configuration
sidebar_label: Configuration
title: TopShine - PT20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the TopShine PT20 with Plaspy real time tracking
keywords:
  - TopShine PT20 configuration
  - TopShine PT20 setup
  - PT20 Plaspy configuration
  - PT20 server settings
  - PT20 GPS tracker setup
  - TopShine GPS configuration
  - PT20 tracking platform setup
  - Plaspy tracker configuration
  - PT20 SMS setup
  - PT20 APN settings
---

# TopShine - PT20 Configuration

This page documents the public configuration context for using the TopShine PT20 tracker with the Plaspy platform. It compiles the practical server settings and manufacturer SMS commands that are commonly used to point the PT20 to Plaspy for real time tracking and telemetry ingestion. Use this guidance in combination with the PT20 product documentation and vendor instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on receipt. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands here as public, commonly used examples and confirm details with the device supplier when necessary.

## Configuration Overview

The objective of the configuration process is to prepare the PT20 so it reliably communicates position and alarm data to Plaspy. This typically involves configuring the device identity, APN for cellular data, and the tracking server endpoint so that the PT20 can upload telemetry over the cellular network.

- Set the device identifier and verify the IMEI so Plaspy can map incoming packets to the correct unit.
- Configure the mobile operator APN so the tracker can use GPRS/4G data to reach Plaspy.
- Point the tracker to Plaspy’s shared server endpoint and port so location data is delivered to your Plaspy account.
- Validate transport and connectivity so the tracker appears in Plaspy and reports updates at the expected interval.
- Confirm device reporting with Plaspy after applying settings to ensure visibility and event reporting.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the PT20:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- automatic protocol detection in Plaspy

Note: Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when packets arrive.

## Typical Requirements Before Setup

- A charged PT20 unit with access to its SMS or manufacturer configuration method (SMS commands are commonly used).
- A valid SIM card installed with an active cellular data plan and the operator APN values available.
- Access to the device IMEI and basic device password if required for SMS commands (the sample manufacturer commands below use the default password shown).
- A stable place to test connectivity where the device can obtain cellular signal for initial registration and data upload.
- An account on Plaspy and basic knowledge of how your Plaspy instance organizes devices so you can verify the device after configuration.

## How This Tracker Connects to Plaspy

When configured, the PT20 uploads position and alarm packets to Plaspy’s shared tracking endpoint and port so location and event data are visible in the platform. Plaspy receives the packets, automatically detects the protocol, and associates messages with the device record.

- The tracker reports location and telemetry over the cellular network to the Plaspy server endpoint.
- Packets target the shared Plaspy server (d.plaspy.com or 54.85.159.138) on port 8888.
- Plaspy automatically detects the tracker protocol and processes incoming messages for the configured device.
- Reported events and positions become visible in Plaspy dashboards and tools for monitoring and historical queries.
- Buffered data stored by the PT20 during temporary outages is forwarded to Plaspy once connectivity resumes.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (SMS commands are commonly used for PT20).
2. Retrieve the device IMEI and confirm the device password if required.
3. Enter the Plaspy server host (d.plaspy.com) or the Plaspy server IP (54.85.159.138) in the device server configuration.
4. Set the server port to 8888 (Plaspy uses the same port for all devices).
5. Choose UDP or TCP if the PT20 requires a transport selection; select the transport that matches your installation preference.
6. Configure the operator APN and any APN username or password placeholders required by the SIM.
7. Apply or save the configuration and restart the device if required by the manufacturer.
8. Validate that the device reports to Plaspy and appears in your Plaspy account with expected updates.

## Example Configuration Commands

The PT20 can be configured by SMS using the manufacturer commands below. The sample commands use the device password 000000 as the default password. Replace placeholders and values with the actual IMEI digits, APN values, or other data required for your operator.

Note: The following commands are public examples provided by the device documentation. Send each SMS to the device phone number from a phone allowed by the device settings.

1. Optional initial factory reset (use only if you need to reset device to factory defaults)
```
W000000,990,099###
```

2. Set the device ID (use the first 14 digits from the IMEI)
- Replace \<14_DIGITS_FROM_IMEI> with the device IMEI first 14 digits.
```
W000000,010,<14_DIGITS_FROM_IMEI>
```
Manufacturer note: set the device Id using the 14 first numbers from IMEI. Plaspy uses like id the 15 IMEI digits.

3. Set the operator APN
- Replace [apn] with your operator APN.
- If required, include APN username and APN password by adding ,[apnu],[apnp] after the APN.
```
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explanation: [apn] is the APN name for the SIM. [apnu] and [apnp] are optional APN username and password placeholders; include them only if your mobile operator requires credentials.

4. Set the GPRS server to Plaspy using the public Plaspy server IP and port
```
W000000,012,54.85.159.138,8888
```

5. Switch to GPRS mode (enable data mode)
```
W000000,013,2
```

6. Set the position update interval
- Replace 6 with the interval code required by your deployment if different.
```
W000000,014,6
```

7. Query device IMEI (verification command)
```
W000000,601
```

Follow the manufacturer's guidance for command syntax, timing between SMS messages, and any required confirming responses. If a command requires an alternate format for domain name input, you may use d.plaspy.com in place of the IP in step 4 if the device supports DNS.

## Configuration Notes

- Firmware and regional variations can change exact SMS command formats and available parameters; confirm the exact syntax with the PT20 documentation or supplier.
- The PT20 supports SMS based configuration as shown; if vendor software or a configuration tool is available, prefer the official tool for large deployments.
- Choose UDP or TCP based on your network needs; Plaspy accepts either transport on the shared port 8888 and automatically detects the protocol.
- Ensure APN values are correct for the SIM in use; missing APN settings are a common cause of failed GPRS connectivity.
- After applying server and APN settings, validate connectivity by checking that Plaspy receives data and that the device appears online in your Plaspy instance.

## Why Use Plaspy with This Configuration

Using the TopShine PT20 with Plaspy gives organizations a practical way to collect real time location and event data from portable or covert trackers. Configuring the PT20 to point to Plaspy’s shared server endpoint and port enables immediate visibility into device position, event alerts, and historical tracks within a single platform for monitoring and operational decision making.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at https://www.gztopshine.com/ . Manufacturer specifications and setup steps can change over time, so confirm current instructions on the official TopShine site before large scale deployment.
