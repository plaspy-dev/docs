---
slug: /sinotrack/st_906l/configuration
id: st_906l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-906L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SinoTrack ST 906L with Plaspy server settings SMS commands and setup steps
keywords:
  - SinoTrack ST 906L configuration
  - SinoTrack ST 906L setup
  - ST 906L Plaspy
  - SinoTrack configuration guide
  - ST 906L server configuration
  - Plaspy device setup
  - GPS tracker configuration
  - vehicle tracker setup
  - GPRS SMS configuration
  - Plaspy server settings
---

# SinoTrack - ST-906L Configuration

This page covers the public configuration context for using the SinoTrack ST-906L with Plaspy. It gathers the publicly available server settings and the common SMS commands used to prepare the tracker for connection to the Plaspy platform. Use this guide to understand what you must set on the device so Plaspy can receive tracker data and show devices in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ST-906L supports SMS and GPRS configuration, and this guide presents the practical commands and workflow commonly used to register the device with Plaspy.

## Configuration Overview

Preparing an ST-906L for Plaspy integration focuses on configuring network parameters, confirming connectivity, and enabling the device to report to Plaspy's shared server endpoint and port. The commands below reflect public SMS-based setup options common to SinoTrack devices.

- Configure the device APN and GPRS server so the tracker can open a data session to Plaspy.
- Set the server address and port so location and event data are sent to Plaspy for ingestion.
- Choose the transport method (UDP or TCP) if the device requires a transport selection and save the configuration.
- Validate connectivity with a configuration readback and confirm the unit appears in Plaspy.
- Enable reporting intervals and alarm inputs so telemetry and events are delivered to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com is the public Plaspy hostname you can use for server configuration.
- Server IP 54.85.159.138 is the alternative numeric endpoint used by Plaspy.
- Port 8888 is the single port Plaspy uses for all supported devices.
- The device may be configured to use UDP or TCP on port 8888 depending on device requirements.
- Plaspy automatically detects the tracker protocol so the platform can accept data from supported devices without per device protocol assignment.

## Typical Requirements Before Setup

- A powered and installed ST-906L with access to its configuration method, commonly SMS commands or the manufacturer tool.
- An active SIM card with data enabled and SMS service to send and receive configuration commands.
- Correct APN credentials from the mobile operator to allow GPRS/LTE data sessions.
- Knowledge of the device IMEI or device ID used by the platform to register and identify the tracker.
- Access to the installer manual or manufacturer documentation for device-specific SMS syntax and behavior.
- A tool or phone capable of sending plaintext SMS commands to the tracker phone number.

## How This Tracker Connects to Plaspy

When configured, the ST-906L opens a data connection and sends positioning and event messages to the Plaspy server endpoint at the configured server and port. Plaspy ingests these messages, applies automatic protocol detection, and surfaces the device in the platform dashboard for live tracking and alerts.

- The tracker is set to report to the shared Plaspy server endpoint and port so telemetry is centralized.
- Location updates and configured event messages are forwarded to Plaspy over GPRS/LTE transport.
- The platform receives alarm inputs such as power loss, SOS, overspeed, and geo-fence events for notification and history playback.
- Plaspy automatically determines the protocol used by the ST-906L so no manual protocol mapping is required in most cases.
- All devices use the same Plaspy port 8888 which simplifies mass provisioning and server entries.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, commonly SMS commands as documented by SinoTrack or via an approved configuration tool.
2. Enter the Plaspy server hostname d.plaspy.com or the IP 54.85.159.138 in the device server setting.
3. Set the server port to 8888 for the device to send data to Plaspy.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure APN credentials and any reporting intervals required for your deployment.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate that the ST-906L reports to Plaspy by checking the device status in the platform and by using the device verification command to read back settings.

## Example Configuration Commands

The ST-906L can be configured using SMS commands. The following commands are the public examples commonly used to prepare the device for Plaspy. Send these commands as SMS messages to the device phone number in the order shown when the order matters.

- Optional initial step to restore factory defaults when needed
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN of the operator
```text
8030000 {{apn}} {{apnu}} {{apnp}}
```
Explanation: replace {{apn}} with your carrier APN name, {{apnu}} with the APN username if required, and {{apnp}} with the APN password if required. If the operator does not require a username or password, those placeholders can usually be left empty depending on device SMS parsing rules.

- Set up the GPRS server to Plaspy using the Plaspy server IP and port
```text
8040000 54.85.159.138 8888
```
Note: Plaspy also supports the server domain d.plaspy.com. Use the IP shown here if your device requires a numeric address in the command syntax.

- Set the reporting interval when the unit is on
```text
8050000 60
```
- Set the reporting interval when the unit is off
```text
8090000 60
```

- Switch the device to GPRS mode
```text
7100000
```

- Read back current configuration to verify settings
```text
RCONF
```
Explanation: RCONF is the verification command that returns configured values including IDs and server entries. Use it to confirm the server, APN, and reporting intervals are applied.

## Configuration Notes

- Firmware and regional model variants can change SMS command behavior and available parameters. Always verify SMS syntax with the device documentation for your firmware revision.
- SMS based configuration is commonly supported but the exact command strings and response formats may vary by software version or vendor customization.
- Choose UDP or TCP based on installation needs and network characteristics. Plaspy accepts data either way and automatically detects the protocol.
- Keep APN credentials ready before setting the GPRS server. Incorrect APN settings will prevent the device from establishing a data session to Plaspy.
- When available, prefer using the device verification command RCONF after configuration to confirm server, APN, and reporting interval values are correctly applied.

## Why Use Plaspy with This Configuration

Using the SinoTrack ST-906L with Plaspy delivers centralized visibility of vehicle location and event telemetry for fleets or single vehicle monitoring. The ST-906L’s support for SMS and GPRS configuration makes it straightforward to provision devices in the field, while Plaspy’s automatic protocol detection and single shared server port simplify large scale deployment and platform ingestion.

Learn more about Plaspy and how it can centralize your tracking data at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify setup details on the official SinoTrack site https://www.sinotrackgps.com/ as manufacturer procedures and firmware behavior can change over time.
