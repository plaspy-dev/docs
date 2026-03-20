---
slug: /globalsat/lt_520p/configuration
id: lt_520p-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520P Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GlobalSat LT-520P to connect to Plaspy with server settings and example SMS and BLE configuration
keywords:
  - GlobalSat LT-520P configuration
  - GlobalSat LT-520P setup
  - LT-520P Plaspy configuration
  - LT-520P server settings
  - LT-520P GPS tracker configuration
  - Plaspy tracker configuration
  - livestock GPS tracker setup
  - LoRaWAN tracker configuration
  - LT-520P BLE configuration
  - LT-520P SMS commands
---

# GlobalSat - LT-520P Configuration

This page documents the public configuration context for using the GlobalSat LT-520P with Plaspy. It summarizes the Plaspy server settings you must apply, explains typical prerequisites, and presents manufacturer-provided example commands that can be used to point the device at Plaspy. Use this as a practical reference for integrating the LT-520P into your Plaspy workspace while also consulting official GlobalSat material for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LT-520P supports BLE for local configuration and LoRaWAN for periodic uplinks as its primary telemetry method; manufacturer-supplied SMS-style commands are also published and are included here as an example of a configuration method some installers use.

## Configuration Overview

The goal of configuration is to prepare the LT-520P so that it reports telemetry and position data to the Plaspy platform reliably and to validate that the device appears and updates correctly inside Plaspy. Depending on your installation, configuration may be performed over BLE with a field tool, or in some deployments via SMS commands supplied by the manufacturer.

- Configure the tracker to report to the shared Plaspy server endpoint and port so Plaspy can ingest uplinks.
- Verify transport selection and connectivity so packets reach Plaspy using the supported transport.
- Provide correct network and APN settings if using SMS or cellular-based setup commands.
- Save and apply the configuration and reboot the device if required.
- Validate the device appears in Plaspy and sends periodic telemetry and GNSS positions.
- Use BLE for local diagnostics and for firmware updates when available in the field.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy settings to use when pointing the tracker at the Plaspy backend. The port 8888 is used consistently for all supported devices and the platform performs protocol detection automatically.

## Typical Requirements Before Setup

- Device powered and reachable by the chosen configuration channel (BLE field tool or SMS/remote commands where supported).
- If using SMS or cellular commands, an active SIM with SMS/data and correct APN details.
- A BLE-capable phone or tablet with the manufacturer's configuration app for local setup and diagnostics.
- The device IMEI number available for use in templated commands or in the manufacturer tool.
- Familiarity with the manufacturer-provided command format and any checksum or integrity requirements.
- Access to manufacturer documentation or release notes to confirm firmware behavior and supported commands.

## How This Tracker Connects to Plaspy

The LT-520P is designed to deliver periodic telemetry to Plaspy so locations and activity summaries are visible on maps and dashboards. Plaspy receives uplinks at the shared server endpoint and port and automatically matches device protocol to parse incoming messages.

- The tracker is configured to report to the shared Plaspy endpoint (d.plaspy.com / 54.85.159.138) on port 8888.
- Transport can be configured as UDP or TCP if the device requires an explicit selection.
- BLE is used locally for configuration, diagnostics, and OTA firmware updates; LoRaWAN uplinks are the primary telemetry path described by the manufacturer.
- Manufacturer-published SMS-style commands can be used by some installers to set server and APN fields when that configuration channel is supported.
- Once configured, Plaspy ingests periodic uplinks for mapping, alerts, and analytics; validate that telemetry arrives after configuration and restart.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, either the BLE field app or the published SMS command format.
2. In the configuration interface or commands, enter the Plaspy server as d.plaspy.com or the numeric IP 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection; both are supported by Plaspy.
5. Enter required network values such as APN, APN user, and APN password if you are using SMS or cellular-based configuration.
6. Apply or save the configuration and reboot the device if the manufacturer recommends it.
7. Validate that the device reports to Plaspy by checking device activity and the first uplink arrival in the Plaspy platform.

## Example Configuration Commands

The manufacturer has published example SMS-style commands for server configuration. These commands use placeholders and a checksum. Preserve and replace placeholders before sending.

- Placeholders:
  - {{imei}} — device IMEI number
  - {{apn}} — APN name for the SIM network
  - {{apnu}} — APN username if required
  - {{apnp}} — APN password if required
  - {{checksum}} and {{checksumreeboot}} — two digit hexadecimal XOR checksum computed over the command text before the asterisk

Setup command (replace placeholders and calculate checksum):
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command (optional, use when a restart is required to apply settings):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation (summary): compute an XOR checksum over every character from the start of the command up to but not including the '*' character, then format the result as two uppercase hexadecimal characters. The manufacturer example includes a simple XOR-to-hex routine used in their interface to produce the {{checksum}} values.

Note: the example uses the numeric Plaspy IP (E0=54.85.159.138) and the port (E1=8888). You may see device interfaces that accept the domain d.plaspy.com instead; follow the manufacturer tool guidance for supported formats.

## Configuration Notes

- Firmware differences can change supported command formats, checksum calculation, and field names; always verify the command syntax against the device firmware release notes.
- The device supports BLE for local configuration and LoRaWAN uplinks for telemetry as described by the manufacturer; SMS-based configuration commands are published by the vendor and can be used where supported.
- When a transport (UDP vs TCP) must be chosen, select the one recommended by your installation guide; Plaspy accepts both and detects protocol automatically.
- APN placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with the network operator values for your SIM if using SMS or cellular commands.
- After applying settings and rebooting, allow several reporting cycles and verify the device appears and updates correctly in Plaspy.

## Why Use Plaspy with This Configuration

Using the LT-520P with Plaspy provides durable, low-maintenance livestock telemetry that integrates GNSS-based location and aggregated activity events into a single backend for mapping, alerts, and analytics. The LT-520P’s BLE-based local configuration and LoRaWAN uplinks fit well with Plaspy’s ability to ingest periodic messages and present herd-level status and historical trends.

To learn more about Plaspy and supported device workflows, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the GlobalSat website https://www.globalsat.com.tw/.
