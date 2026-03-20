---
slug: /suntech/st4932/configuration
id: st4932-configuration
sidebar_label: Configuration
title: Suntech - ST4932 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4932 showing Plaspy server settings, SMS setup commands, and verification steps
keywords:
  - Suntech ST4932 configuration
  - Suntech ST4932 setup
  - ST4932 Plaspy configuration
  - Suntech tracker configuration
  - ST4932 server settings
  - Suntech GPS tracker setup
  - ST4932 APN configuration
  - Suntech ST4932 SMS commands
  - GPS tracker server configuration
  - Plaspy device setup
---

# Suntech - ST4932 Configuration

This page documents the public configuration context for using the Suntech ST4932 tracker with Plaspy. It collects the practical server settings and the publicly available SMS command examples so you can prepare the device to communicate with Plaspy for real time tracking, event reporting, and telemetry ingestion.

Plaspy uses a shared server endpoint and consistent port across supported devices and automatically detects the tracker protocol. Manufacturer configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools; where present this page includes the public SMS commands and explains placeholders such as the device ID and APN values.

## Configuration Overview

The ST4932 is configured so that it reports location and event data to Plaspy using the platform server endpoint. The purpose of this configuration process is to ensure the tracker can register with Plaspy, authenticate and establish a stable data path, and report periodic updates at the required interval.

- Configure the device network settings so it can reach the Plaspy server using cellular data.
- Provide the correct APN and optional APN credentials required by the mobile operator.
- Point the device to the Plaspy server IP or domain and set the shared port to allow data reporting.
- Set the reporting interval and confirm the device accepts the configuration.
- Validate connectivity and visibility of the device in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and the same port is used for all devices supported by Plaspy

## Typical Requirements Before Setup

- A powered ST4932 unit with access to send and receive SMS commands if using SMS provisioning.
- A SIM card with active data service and SMS capability, and the correct operator APN values.
- The device IMEI so you can derive the device ID required in Suntech SMS commands.
- Access to the official Suntech configuration method or vendor tool and the device user manual.
- A stable cellular network for LTE Cat M1, NB2, or fallback 2G coverage where the device will operate.
- A way to verify device reporting in Plaspy once configuration is applied.

## How This Tracker Connects to Plaspy

The ST4932 sends GNSS fixes and event telemetry over its cellular connection to the Plaspy server endpoint and port. Plaspy receives the incoming data stream, identifies the tracker protocol automatically, and makes the device visible in the platform for mapping, alerts, and history.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or its IP 54.85.159.138 on port 8888.
- Data is transported over either UDP or TCP depending on your device preference and network behavior.
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol in the platform.
- Location fixes, motion or tamper events, and other telemetry are sent from the tracker to Plaspy for operational monitoring.
- After successful registration the device status and telemetry appear in Plaspy for geofencing, alerts, and reporting.

## Common Configuration Workflow

1. Obtain the device IMEI and confirm the device is powered and reachable by SMS or the manufacturer provisioning tool.
2. Access the official Suntech configuration method such as SMS commands or vendor software as documented by Suntech.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server setting.
4. Set the port to 8888 and choose UDP or TCP if the device requires selection of transport.
5. Provide operator APN and optional APN credentials as required by the SIM card operator.
6. Apply or save the configuration on the device and restart the tracker if required by the manufacturer procedure.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates.

## Example Configuration Commands

The ST4932 public setup instructions include SMS commands. The device ID used in these commands is derived from the IMEI: take the IMEI, remove the final digit, and use the last 6 digits of the remaining string. Example: if the IMEI is 123456789012345 the device ID is 901234.

Important placeholders:
- {{device_id}} — replace with the derived 6 digit ID from the IMEI as described above.
- [apn] — operator APN name.
- [apnu] — APN username if required by the operator.
- [apnp] — APN password if required by the operator.
- For the APN user flag, set to 1 if APN username or password are required, otherwise 0.

1. Set the operator APN and GPRS server. Replace placeholders when sending as an SMS to the device:
```text
SA200NTW;{{device_id}};02;{{apn_user_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- {{apn_user_flag}} should be 1 if you provide a username or password in [apnu] or [apnp], otherwise set to 0.

2. Set the update interval to 60 seconds:
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3. Check current settings or request preset A to verify:
```text
SA200CMD;{{device_id}};02;PresetA
```

Send these commands as SMS messages to the tracker using the standard Suntech SMS provisioning workflow. Keep the command order when applying settings: network parameters first, then reporting interval, then verification.

## Configuration Notes

- Suntech firmware versions and vendor tools can change command syntax and available parameters; always confirm command format with the latest Suntech documentation.
- This tracker supports SMS provisioning in the provided public example. If you use a software configuration tool from the vendor, equivalent fields are typically available for APN, server, port, transport, and reporting interval.
- You may specify either d.plaspy.com or the numeric IP 54.85.159.138 in the device; both point to the Plaspy endpoint on port 8888.
- Choose UDP or TCP based on network reliability and operator behavior; Plaspy will accept either transport and detect the protocol automatically.
- If the device requires a restart after applying settings, perform the restart to ensure new parameters are active before verifying in Plaspy.

## Why Use Plaspy with This Configuration

Using the ST4932 with Plaspy enables organizations to collect reliable position and event data from a rugged, industrial grade tracker and surface that data in a single platform for monitoring, alerts, and reporting. The public commands shown here focus on establishing a data path between the tracker and Plaspy so the device can deliver periodic updates and event notifications to your account.

To learn more about Plaspy and how the platform can manage devices like the ST4932 visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions on the Suntech official website http://www.suntechint.com/ before deploying.
