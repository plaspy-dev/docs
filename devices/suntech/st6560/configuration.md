---
slug: /suntech/st6560/configuration
id: st6560-configuration
sidebar_label: Configuration
title: Suntech - ST6560 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST6560 showing Plaspy server settings and SMS commands to connect the tracker to Plaspy
keywords:
  - Suntech ST6560 configuration
  - Suntech ST6560 setup
  - ST6560 Plaspy
  - OBD II GPS tracker configuration
  - Suntech GPS setup
  - ST6560 server settings
  - Suntech tracker SMS setup
  - Plaspy tracker configuration
  - vehicle telematics setup
  - fleet tracking ST6560
---

# Suntech - ST6560 Configuration

This page documents the public configuration context for using the Suntech ST6560 tracker with the Plaspy platform. It focuses on the practical server settings, the typical preconditions you should verify, and the publicly available SMS command examples for configuring the ST6560 to report into Plaspy. Use this page as a technical reference for setup and verification; it is centered on the Plaspy server endpoint and the SMS-based configuration flow included in the device documentation.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST6560 supports SMS configuration in its public guidance and may also offer vendor tools or web interfaces; confirm the exact method with Suntech documentation and your device firmware before final deployment.

## Configuration Overview

The goal of ST6560 configuration for Plaspy is to point the device at the Plaspy server, ensure correct APN and connectivity, set an appropriate reporting interval, and validate that the tracker appears in Plaspy. For this model, the manufacturer provides SMS command templates that set the operator APN and GPRS server and configure reporting intervals.

- Set the operator APN and GPRS server to the Plaspy endpoint so telematics data is sent to Plaspy.
- Configure the device update interval so location and telemetry arrive at the desired cadence.
- Verify the device identity and reporting using a preset status or query command.
- Confirm transport selection (UDP or TCP) if the device requires a choice.
- Validate device visibility in Plaspy after applying settings to ensure data flows correctly.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and functioning ST6560 installed per Suntech instructions (OBD II plug in or vendor recommended installation).
- A SIM card with an active data plan and SMS capability if using SMS commands for configuration.
- Correct APN, APN username, and APN password information from your cellular provider when required.
- The device IMEI accessible so you can derive the device ID used in SMS templates.
- Access to the official Suntech configuration method or tools for your firmware and hardware revision.
- Remote or local test vehicle to validate live reporting into Plaspy once configuration is applied.

## How This Tracker Connects to Plaspy

When configured, the ST6560 reports location, diagnostics, and telemetry to the shared Plaspy server endpoint and port so Plaspy can process and display vehicle data. The device is configured to send packets to the same Plaspy port used by all supported devices, and Plaspy will detect the tracker protocol automatically.

- ST6560 sends location and vehicle telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is chosen as UDP or TCP depending on device configuration; Plaspy accepts either.
- Regular position and telemetry updates appear in Plaspy dashboards for live monitoring and history.
- Event reporting such as ignition, geofence, or fault alerts are delivered to Plaspy once the device is registered and reporting.
- Verification commands or status presets can be used to confirm device settings before final validation in Plaspy.

## Common Configuration Workflow

1. Access the official Suntech configuration method for your ST6560 (SMS commands, vendor web tool, or manufacturer app) as documented for your firmware version.
2. Identify the device IMEI and calculate the device ID required by the SMS templates (see Example Configuration Commands).
3. Enter the Plaspy server by domain or IP: d.plaspy.com or 54.85.159.138.
4. Set port 8888 as the destination port (Plaspy uses the same port for all supported devices).
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration on the device and restart the unit if the manufacturer guidance requires a restart.
7. Validate that the ST6560 reports to Plaspy by checking device activity in Plaspy and using any provided verification SMS commands.

## Example Configuration Commands

The manufacturer provides SMS command templates for the ST6560. The device ID used in these templates is the six digits extracted from the IMEI as described below. Keep placeholders as shown and replace them with your values when sending SMS commands.

Device ID guidance
- The device ID in the SMS templates is the last six digits of the IMEI excluding the final check digit. For example, if the IMEI is 123456789012345 then the device ID used in commands is 901234.

1) Set the operator APN and GPRS server
- Template explanation: set APN fields, optional APN username and password, then point to the Plaspy server IP and port. The command includes a flag indicating whether APN username or password are provided (1 if provided, 0 if not).

Example template (replace placeholders before sending):
```
SA200NTW;{{device_id}};02;{{auth_flag}};{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- {{device_id}} = six digits derived from the IMEI as explained above.
- {{auth_flag}} = 1 if {{apnu}} or {{apnp}} are provided, otherwise 0.
- {{apn}} = APN provided by your mobile operator.
- {{apnu}} = APN username if required by the carrier (may be blank).
- {{apnp}} = APN password if required by the carrier (may be blank).

Example filled with the sample device id 901234 and no APN auth:
```
SA200NTW;901234;02;0;internet;; ;54.85.159.138;8888;;;;
```
(Adjust the APN value and include APN username and password where needed.)

2) Set reporting interval to 60 seconds
```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
- This sets the device reporting parameters; replace {{device_id}} with your device ID.

3) Verify or check settings (preset query)
```
SA200CMD;{{device_id}};02;PresetA
```
- Use this command to request or confirm preset settings from the device.

Notes on sending
- Send these commands as SMS messages from an authorized phone number if the device is configured to accept SMS configuration.
- If your firmware or vendor tool uses a different syntax, prefer the official Suntech method provided for your device revision.

## Configuration Notes

- The ST6560 public guidance includes SMS-based commands; depending on your firmware you may also have vendor tools or a web interface. Use the method that matches your firmware.
- TCP versus UDP choice can affect delivery characteristics; Plaspy accepts both but select the transport that matches your deployment and carrier behavior.
- APN authentication is optional in the template; set the auth flag to 1 when providing APN username or password.
- Small differences in SMS command syntax and available presets can exist between firmware versions and regional variants; always confirm against the Suntech documentation for your device.
- Confirm the derived device ID from the IMEI carefully before sending commands to avoid configuring the wrong device.

## Why Use Plaspy with This Configuration

Using the Suntech ST6560 with Plaspy provides a compact, OBD II based solution that brings vehicle-level diagnostics and position reporting into a single platform. Configuring the ST6560 to send data to the shared Plaspy endpoint enables real-time visibility, historical playback, and alerting for fleet operations where engine telemetry and location accuracy matter.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify current details with the manufacturer at http://www.suntechint.com/
