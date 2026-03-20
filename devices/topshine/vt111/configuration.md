---
slug: /topshine/vt111/configuration
id: vt111-configuration
sidebar_label: Configuration
title: TopShine - VT111 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure TopShine VT111 GPS tracker for use with Plaspy server settings and SMS commands
keywords:
  - TopShine VT111 configuration
  - TopShine VT111 setup
  - VT111 Plaspy
  - VT111 GPS tracker configuration
  - vehicle tracking setup
  - TopShine tracker server configuration
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - fleet tracking platform configuration
  - tracking platform setup
---

# TopShine - VT111 Configuration

This page documents the public configuration context for using the TopShine VT111 mini GPS vehicle tracker with Plaspy. It focuses on the practical steps and public commands used to point the VT111 at the Plaspy server endpoint, validate connectivity, and prepare the device for visibility in the Plaspy platform. Where public SMS commands are available they are preserved here in readable form to help installers and integrators apply the configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The VT111 supports SMS and GPRS setup methods in public documentation, so this guide includes the common SMS commands and workflow used in public setups while encouraging verification with the official TopShine documentation.

## Configuration Overview

The goal of the configuration process is to prepare the VT111 to send location and event data to Plaspy reliably and to confirm that the device appears in the platform. On VT111 units that use SMS or GPRS setup, the procedure typically configures the APN, server endpoint, transport, and reporting interval so the tracker can communicate with Plaspy.

- Configure the device APN so the tracker can establish GPRS data connectivity to send telemetry to Plaspy.
- Set the device server to the Plaspy endpoint so reports are routed to the platform.
- Choose the transport mode (UDP or TCP) if required by the firmware and ensure port 8888 is set.
- Apply an appropriate reporting interval or distance trigger so the device sends updates.
- Validate the device IMEI and device identifier so Plaspy can match the unit to your account.
- Verify the unit appears and reports in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for incoming connections

All devices in Plaspy use the same port and the platform will automatically detect the tracker protocol. Use the domain or IP that your device firmware accepts and ensure the transport matches the device capability.

## Typical Requirements Before Setup

- A powered and accessible VT111 unit with a charged internal battery or external power connected.
- A working SIM card with data enabled and the correct APN for the mobile operator.
- Access to the device IMEI and the device password for SMS configuration (the example commands below use the public default password 000000 as shown in the manufacturer sample).
- Ability to send and receive SMS messages to the device or access to the manufacturer's configuration tool if provided.
- Knowledge of the operator APN values to populate the [apn], [apnu], and [apnp] placeholders when required.
- A plan to verify the tracker appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The VT111 is configured to report location and event data to the shared Plaspy server endpoint and port. After APN and server values are applied and GPRS mode is enabled, the device will open a connection to Plaspy and begin sending telemetry according to its configured interval or trigger rules.

- The tracker sends GPRS data to the Plaspy server endpoint and port so Plaspy can ingest location reports.
- Telemetry and alerts are delivered to Plaspy where the platform maps the device by its IMEI or configured identifier.
- The device can be configured to report by time interval or distance to control update frequency.
- Event information such as movement, alarms, and power changes can be forwarded to Plaspy once the device is pointed to the shared endpoint.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on incoming connections.

## Common Configuration Workflow

1. Access the official TopShine configuration method for the VT111, typically SMS commands or the vendor tool recommended for your firmware.
2. Confirm or enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 depending on what the VT111 firmware accepts.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP transport if the device requires an explicit selection.
5. Configure the operator APN and any username or password placeholders required by the SIM operator.
6. Apply or save the configuration and restart the device if the firmware requires a reboot for changes to take effect.
7. Validate that the device is reporting to Plaspy and appears in the platform by checking device activity after the expected reporting interval.

## Example Configuration Commands

The VT111 can be configured by sending SMS commands. The sample commands below are taken from public manufacturer examples. The device password used in the examples is the public default 000000. Replace placeholders and the password as appropriate for your device.

1. Optional initial reset to factory settings (use only when required).
```text
W000000,990,099###
```

2. Set the device ID. The manufacturer example uses the first 14 digits derived from the IMEI as the device id string. Plaspy generally identifies devices by their full 15 digit IMEI when registering devices in the platform.
```text
W000000,010,<14 digit device id derived from IMEI>
```
- Note: Replace \<14 digit device id derived from IMEI> with the first 14 digits from the IMEI as the manufacturer example indicates.

3. Set the operator APN and optional APN user and password. Replace [apn], [apnu], and [apnp] with your operator values. apnu and apnp are optional and only required for some operators.
```text
W000000,011,[apn][,[apnu],[apnp]]
```
- Explanation of placeholders:
  - [apn] = operator APN name
  - [apnu] = optional APN username
  - [apnp] = optional APN password

4. Set the GPRS server using the public Plaspy IP and port shown in the manufacturer example.
```text
W000000,012,54.85.159.138,8888
```

5. Alternative server command using the Plaspy domain if the device firmware accepts domain names instead of an IP address. Use this only if confirmed by your firmware or vendor tool.
```text
W000000,012,d.plaspy.com,8888
```

6. Switch the device to GPRS mode so it will use data to connect to the server.
```text
W000000,013,2
```

7. Set the update interval. The sample uses the public example value shown by the manufacturer.
```text
W000000,014,6
```

8. Verification command to request the device IMEI via SMS.
```text
W000000,601
```

Follow manufacturer guidance when sending SMS commands. Replace the default password if your device has been reconfigured from the factory default.

## Configuration Notes

- Manufacturer firmware and command behavior can vary by hardware revision and firmware version. Confirm which SMS commands your VT111 firmware accepts before large scale deployment.
- The VT111 sample commands use SMS to set APN and server values. If you have access to a vendor configuration tool, that tool may offer a more convenient workflow.
- Choose UDP or TCP based on what your device firmware supports; behavior may differ for retransmissions and session handling.
- Keep APN credential placeholders [apn], [apnu], and [apnp] and fill them with operator specific values; some carriers require username and password fields while others do not.
- The default password 000000 is present in the public example. Change it if your security policy requires a different device password.

## Why Use Plaspy with This Configuration

Using the TopShine VT111 with Plaspy enables centralized visibility into vehicle location and events across a fleet by pointing the tracker at Plaspy's shared server endpoint and port. Once the VT111 is configured with the correct APN and Plaspy server settings, the device can report location, alarms, and status updates to the platform where operations teams can monitor and act on live data.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific setup methods, firmware behavior, and manufacturer details on the TopShine website https://www.gztopshine.com/ before performing mass deployments or critical installations.
