---
slug: /suntech/st4955/configuration
id: st4955-configuration
sidebar_label: Configuration
title: Suntech - ST4955 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Suntech ST4955 for Plaspy with server settings and example SMS commands for practical setup
keywords:
  - Suntech ST4955 configuration
  - Suntech ST4955 setup
  - Suntech ST4955 Plaspy
  - ST4955 tracker configuration
  - Suntech GPS tracker configuration
  - ST4955 server configuration
  - ST4955 telemetry setup
  - Suntech asset tracker setup
  - Suntech GPS platform setup
  - ST4955 integration
---

# Suntech - ST4955 Configuration

This page covers the public configuration context for using the Suntech ST4955 series with the Plaspy platform. It explains the Plaspy server settings you need to apply, summarizes the typical setup workflow, and reproduces the publicly available SMS command templates provided for ST4955 devices so you can prepare the tracker for Plaspy ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The ST4955 documentation and the SMS-based examples included here represent public guidance; verify device behavior with manufacturer documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the ST4955 so it can reliably send GNSS and sensor data to Plaspy, be visible in the platform, and report at the intervals you need for monitoring and alerts. For the ST4955 this typically means applying network settings, server endpoint and port, and a reporting interval — often via the manufacturer's SMS commands or configuration tool.

- Configure the device network APN and data settings so cellular telemetry is possible.
- Point the device to Plaspy server settings so packets arrive at the correct endpoint and port.
- Set a reporting interval and behavior appropriate to battery and solar charge planning.
- Validate connectivity and confirm the device appears on Plaspy after configuration.
- Use the ST4955 SMS templates or manufacturer software to apply settings when over the air provisioning is required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol so all devices use the same port

These server values are the public Plaspy endpoint settings to use when configuring the ST4955 for platform reporting.

## Typical Requirements Before Setup

- A charged ST4955 device with a known IMEI number so you can derive the device ID used in commands
- A cellular SIM with an active data plan and correct APN for the target mobile operator
- An SMS capable phone or the manufacturer's configuration tool to send SMS commands if using SMS-based provisioning
- Access to the ST4955 manufacturer documentation or installer tool for firmware specific instructions
- Basic knowledge of the device IMEI to calculate the device ID required by the SMS templates

## How This Tracker Connects to Plaspy

The ST4955 transmits GNSS fixes and sensor telemetry over cellular networks to the Plaspy server endpoint and port. Once configured to send packets to the Plaspy server, Plaspy ingests and decodes the telemetry so the device is visible on the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Data can be sent using either UDP or TCP depending on device selection; Plaspy automatically detects the protocol.
- Telemetry includes GNSS fixes and available sensor data so Plaspy can display location and events.
- Proper APN and GPRS settings must be applied so the device can connect using the cellular network.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software as provided by the device vendor or installer documentation.
2. Obtain the device IMEI and compute the device ID required by the SMS templates (see Example Configuration Commands).
3. Enter the Plaspy server address by specifying d.plaspy.com or 54.85.159.138 in the manufacturer tool or SMS command field.
4. Set the port to 8888 for the device server configuration.
5. Choose UDP or TCP as the transport if the device requires transport selection.
6. Apply or save the configuration using the vendor tool or by sending the SMS commands to the device.
7. Restart the device if required, then validate that the ST4955 reports to Plaspy and appears in the platform.

## Example Configuration Commands

The ST4955 public configuration examples use SMS commands. The device ID used in templates is derived from the IMEI: remove the final IMEI digit, then take the last 6 digits of the remaining string (for example, if IMEI is 123456789012345 then device ID becomes 901234).

- Placeholders:
  - {{apn}} = your mobile operator APN
  - {{apnu}} = APN username if required (leave blank or 0 if not used)
  - {{apnp}} = APN password if required (leave blank or 0 if not used)
  - <device_id> = computed device ID based on the IMEI as described above

Send the following SMS commands in order to set network, server, and reporting interval:

1) Set operator APN and GPRS server (replace <device_id>, {{apn}}, {{apnu}}, {{apnp}} as required)
```text
SA200NTW;<device_id>;02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
Notes:
- The example template in the device UI may include a flag to enable APN username/password fields. Set the fields accordingly.
- This command points the device at the Plaspy server IP 54.85.159.138 and port 8888. You can also use d.plaspy.com in manufacturer tools if the tool accepts hostnames.

2) Set the update/reporting interval to 60 seconds
```text
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
Notes:
- Adjust intervals to match your battery, solar charging, and monitoring requirements.

3) Verify or check settings using the device preset check command
```text
SA200CMD;<device_id>;02;PresetA
```
Notes:
- This command is a verification command to request a preset configuration summary from the device.

Keep the commands in the shown order when applying them for initial setup. If your manufacturer's tool accepts hostname d.plaspy.com you may substitute the IP with the domain when that tool or SMS syntax supports it.

## Configuration Notes

- Firmware and tool differences: SMS command syntax and behavior can vary by firmware version and vendor provisioning tools; always confirm with the device documentation if commands fail.
- SMS versus remote provisioning: The ST4955 supports SMS-based configuration examples shown here; many installers prefer an over-the-air or vendor tool for bulk provisioning where available.
- APN accuracy: Use the operator APN and credentials supplied by the SIM provider; incorrect APN prevents GPRS data sessions.
- TCP versus UDP: Choose UDP or TCP consistent with site or network requirements; Plaspy will accept either on port 8888 and auto detect protocol.
- Single Plaspy port: Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol, so use port 8888 in device configuration.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST4955 to report to Plaspy gives you centralized visibility of long-life, solar powered assets with GNSS fixes and environmental sensors presented together for monitoring, alerting, and reporting. The ST4955’s low-power modes and multi-network cellular capability pair well with Plaspy’s unified ingestion so teams can rely on consistent updates and event reporting.

Learn more about Plaspy and how your ST4955 deployments can be managed on the Plaspy website at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details confirm current documentation at the Suntech site http://www.suntechint.com/ .
