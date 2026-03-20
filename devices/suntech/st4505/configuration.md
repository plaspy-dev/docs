---
slug: /suntech/st4505/configuration
id: st4505-configuration
sidebar_label: Configuration
title: Suntech - ST4505 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4505 showing Plaspy compatibility and practical SMS and server setup steps
keywords:
  - Suntech ST4505 configuration
  - Suntech ST4505 setup
  - ST4505 Plaspy configuration
  - Suntech OBD II tracker configuration
  - ST4505 server settings
  - Suntech GPS tracker setup
  - Plaspy tracker configuration
  - vehicle telematics ST4505
  - ST4505 SMS configuration
  - Suntech ST4505 APN setup
---

# Suntech - ST4505 Configuration

This page documents the public configuration context for using the Suntech ST4505 with Plaspy. It focuses on the practical settings and commands that are commonly used to point an ST4505 tracker at Plaspy so the device can report location and telemetry to the platform. Where manufacturer-side steps are shown they reflect publicly available SMS commands and parameter patterns rather than private vendor tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the device. Exact manufacturer-side setup steps for the ST4505 can vary by firmware level, hardware revision, installation type, and the vendor tools you use; this page explains the typical, public setup flow and includes example SMS commands that are commonly used for ST4505 devices.

## Configuration Overview

The goal of configuring an ST4505 for Plaspy is to prepare the tracker to communicate reliably with Plaspy's backend, validate connectivity, and enable visibility in the Plaspy platform. Public configuration commonly uses SMS commands to set APN and server details or a manufacturer provisioning tool when available.

- Set the device APN and GPRS/server destination so the tracker can establish a data session and send packets to Plaspy.
- Configure the device identifier and server endpoint so Plaspy can associate the incoming data stream with the correct device.
- Choose transport (UDP or TCP) and port 8888 to match Plaspy server expectations and ensure packets are routed correctly.
- Validate reporting and telemetry by confirming the device shows as online in Plaspy after configuration.
- Optionally adjust reporting intervals and heartbeat settings to balance responsiveness and data usage.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A charged and functional ST4505 installed in the vehicle or on a bench for initial provisioning.
- A SIM card with active mobile data and SMS capability loaded in the device (APN credentials if required).
- Access to the manufacturer's public configuration method such as SMS command provisioning or official Suntech configuration software.
- The device IMEI available for computing the SUNTECH device ID used in SMS commands.
- Knowledge of your APN, and optional APN username and password credentials if your operator requires authentication.
- Basic access to Plaspy account details to confirm the device appears and is reporting after setup.

## How This Tracker Connects to Plaspy

The ST4505 reports GNSS fixes, OBD-II telemetry, and events over cellular networks to the Plaspy backend. The tracker is configured to send its packets to the shared Plaspy server endpoint and port so Plaspy can ingest and display realtime data for monitoring and reporting.

- The device is pointed to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device preference; Plaspy accepts either and will detect protocol automatically.
- Telemetry, location updates, and event reports are sent at configured intervals so Plaspy can provide live tracking and alerts.
- Device identifiers established during provisioning let Plaspy associate packets with the correct account and asset record.
- After successful configuration, the tracker should appear as online and begin sending data to Plaspy for visualization and historical logs.

## Common Configuration Workflow

1. Access the official Suntech configuration method documented for the ST4505, typically SMS provisioning or the vendor's provisioning tool.
2. Enter the Plaspy server address as d.plaspy.com or the server IP 54.85.159.138 in the device server/GPRS settings.
3. Set the destination port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport protocol UDP or TCP if the device requires you to select one.
5. Configure the APN and optional APN authentication (username and password) according to your mobile operator.
6. Apply or save the configuration and restart the device if the ST4505 requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device status in Plaspy and confirming telemetry and location messages are received.

## Example Configuration Commands

The ST4505 supports SMS-based provisioning using command strings. The manufacturer-provided public commands below are typical templates sent to the device by SMS. The device ID used in these commands is the last 6 digits of the IMEI after removing the final IMEI digit (that is, drop the last IMEI digit, then take the last 6 digits). Example: if IMEI is 123456789012345 then drop the final 5 to get 12345678901234 and the device ID is 901234.

- Set the operator APN and the GPRS server (replace DEVICEID with the computed device ID; set the APN fields as required by your operator; set the auth flag to 1 if you supply [apnu] or [apnp], otherwise set it to 0):

```
SA200NTW;DEVICEID;02;[auth_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Set the reporting/update interval to 60 seconds (replace DEVICEID as above):

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

- Verify or query current preset settings (replace DEVICEID as above):

```
SA200CMD;DEVICEID;02;PresetA
```

Notes on placeholders:
- DEVICEID — compute from IMEI by removing the last IMEI digit and taking the final six digits (example above).
- [apn] — your mobile operator APN string.
- [apnu] — APN username if required by the operator; keep placeholder if not used.
- [apnp] — APN password if required by the operator; keep placeholder if not used.
- [auth_flag] — set to 1 if you provide APN username or password, otherwise 0.

Send each of the SMS commands from a phone number authorized by the device (follow Suntech provisioning guidance). Preserve the command order where the network/APN command is applied before or at the same time as server/port configuration for reliable connectivity.

## Configuration Notes

- Firmware and hardware revisions can change command formats or behavior; always confirm command syntax with the latest Suntech documentation.
- The ST4505 supports SMS-based configuration as shown, but vendors may also offer USB or software provisioning tools; use the official method provided with your device.
- Choose UDP or TCP based on installation needs; Plaspy accepts both and will auto-detect protocol, but transport choice can affect delivery characteristics.
- Confirm APN, [apnu], and [apnp] values with your SIM operator before provisioning; incorrect APN settings prevent data sessions.
- Plaspy uses the same port 8888 for all devices and detects the tracker protocol automatically, so consistent server/port settings are important for immediate visibility.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST4505 to report to Plaspy gives fleet operators and telematics teams immediate access to location, OBD-II telemetry, and event data in a centralized platform. The combination of plug-and-play OBD-II installation and the public SMS provisioning commands shown here helps accelerate deployments while enabling Plaspy to ingest and display live tracking, diagnostics, and alerts for operational oversight.

Learn more about Plaspy and how it supports device integration and fleet workflows at https://www.plaspy.com. For device-specific command syntax, firmware changes, and the latest manufacturer guidance always verify details on the official Suntech site http://www.suntechint.com/ as procedures and firmware behavior can change over time.
