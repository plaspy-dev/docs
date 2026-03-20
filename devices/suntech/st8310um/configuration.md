---
slug: /suntech/st8310um/configuration
id: st8310um-configuration
sidebar_label: Configuration
title: Suntech - ST8310UM Configuration
sidebar_class_name: menu_item_tracker
description: Configure Suntech ST8310UM for use with Plaspy using public server settings and SMS commands
keywords:
  - Suntech ST8310UM configuration
  - Suntech ST8310UM setup
  - Suntech ST8310UM server configuration
  - Suntech ST8310UM Plaspy
  - ST8310UM GPS tracker configuration
  - ST8310UM setup guide
  - Plaspy tracker configuration
  - GPS tracker server settings
  - vehicle tracking setup
  - asset tracker configuration
---

# Suntech - ST8310UM Configuration

This page documents the public configuration context required to connect the Suntech ST8310UM tracker to the Plaspy platform. It focuses on the practical settings and SMS configuration templates published for the ST8310UM and explains how to prepare the device so Plaspy can receive telemetry and location updates.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the precise manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available this page includes the public SMS command templates used for initial configuration and verification so you can apply the Plaspy server settings to the ST8310UM.

## Configuration Overview

The goal of configuring the ST8310UM for Plaspy is to point the device at Plaspy's server endpoint, ensure a working data transport, and verify the device reports location and status updates to the platform. For ST8310UM installations this is commonly done via the device's SMS command interface using the device ID derived from the IMEI.

- Set the device network parameters including operator APN and GPRS server entry so the tracker can open a data session toward Plaspy.
- Configure the device update or reporting interval so Plaspy receives timely location and status information.
- Point the tracker to the Plaspy server endpoint and set the shared Plaspy port so the device transmits telemetry to Plaspy.
- Validate device identity using the ST8310UM device ID derived from the IMEI and test the configuration using the verification command.
- Confirm the device appears in Plaspy and that location and event reports are visible in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com as the logical endpoint for tracker telemetry
- Server IP 54.85.159.138 for direct IP based configuration where required
- Port 8888 which Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on device requirements and network conditions
- Automatic protocol detection in Plaspy so the platform can identify and parse tracker protocol messages without requiring a separate protocol selection

## Typical Requirements Before Setup

- A SIM card provisioned for data and SMS as the ST8310UM configuration templates use SMS commands and cellular data for telemetry.
- The device must be powered and have a valid GNSS fix where possible for verification after configuration.
- Access to the official manufacturer configuration method or tools such as SMS command templates from Suntech.
- The APN, APN username, and APN password for the cellular operator to allow GPRS or LTE data sessions.
- A way to read the device IMEI to compute the tracker device ID used in commands and in Plaspy.
- Basic knowledge of sending SMS commands to the device or the vendor tool that sends configuration SMS.

## How This Tracker Connects to Plaspy

When configured, the ST8310UM opens a connection to the shared Plaspy server endpoint and sends periodic location and status messages to the platform. Plaspy ingests these messages and converts them into live positions, events, and history in your Plaspy account.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device uses either TCP or UDP transport to transmit telemetry depending on your selection and network behavior.
- Plaspy automatically detects the tracker protocol and processes incoming messages so devices appear in the platform without manual protocol mapping.
- Location fixes, event triggers, and periodic reports sent by the ST8310UM become visible in Plaspy dashboards and maps.
- Successful configuration enables event driven alerts and operational monitoring for fleet and recovery workflows.

## Common Configuration Workflow

1. Access the official Suntech configuration method such as the SMS command interface or vendor configuration tool documented by Suntech.
2. Determine the device ID from the IMEI as required by the ST8310UM command templates (see example below).
3. Enter the Plaspy server as d.plaspy.com or the direct IP 54.85.159.138 in the device settings.
4. Set the port to 8888 which is used by Plaspy for all devices.
5. Choose UDP or TCP transport if the device requires a transport selection; either is accepted by Plaspy and the platform detects protocol automatically.
6. Apply or save the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate that the tracker reports to Plaspy by checking for incoming messages in the platform and using the verification SMS command.

## Example Configuration Commands

The ST8310UM public configuration uses SMS commands. The device ID for these commands is the last six digits of the IMEI excluding the final IMEI digit. For example if the IMEI is 123456789012345 the device ID would be 901234 using the example pattern provided in the manufacturer template. Commands are sent as SMS to the device.

1) Set the operator APN and GPRS server pointing to Plaspy. Replace {{device_id}} with the computed device ID and preserve the APN placeholders {{apn}}, {{apnu}}, {{apnp}}:

```text
SA200NTW;{{device_id}};02;{GPRS mode flag};{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Notes:
- The manufacturer template uses a field to indicate whether APN username or password are present; in many setups set that flag to 1 if you provide {{apnu}} or {{apnp}} otherwise set it to 0.
- {{apn}} is the operator APN. {{apnu}} is the APN username and {{apnp}} is the APN password. Keep these placeholders and replace them with the values from your SIM operator.

2) Set the reporting interval to 60 seconds using the manufacturer reporting command format:

```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Check the device settings or request a preset report to verify configuration:

```text
SA200CMD;{{device_id}};02;PresetA
```

Send each command as an SMS message to the device phone number. Use the example IMEI mapping from the manufacturer to calculate {{device_id}} before sending.

## Configuration Notes

- Firmware and hardware revisions can change command formats or parameter ordering. Confirm exact SMS syntax with Suntech documentation for your firmware.
- The ST8310UM supports SMS based setup in the public template above. If you prefer configuration tools offered by Suntech or your vendor, follow those tools while ensuring the Plaspy server and port values are entered as shown.
- When choosing TCP versus UDP consider network conditions and operator GPRS behavior. Plaspy accepts either transport and automatically detects the tracker protocol.
- The Plaspy port 8888 is shared by all devices in Plaspy and should be used exactly as shown when configuring the device server entry.
- Always verify APN, username, and password placeholders ({{apn}}, {{apnu}}, {{apnp}}) with your cellular provider to ensure data sessions can be established.

## Why Use Plaspy with This Configuration

Using the ST8310UM with Plaspy provides a straightforward path to centralized tracking, alerts, and operational reporting for fleets and assets. The shared Plaspy server settings simplify device onboarding so once the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 it can begin reporting and appear in platform dashboards.

To learn more about Plaspy and how to manage devices at scale visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer instructions at the official Suntech website http://www.suntechint.com/ as vendor details can change over time.
