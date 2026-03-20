---
slug: /sinotrack/st_909l/configuration
id: st_909l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-909L Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure SinoTrack ST-909L for use with Plaspy server and shared settings
keywords:
  - SinoTrack ST-909L configuration
  - SinoTrack ST-909L setup
  - SinoTrack ST-909L Plaspy
  - ST-909L server configuration
  - ST-909L SMS configuration
  - SinoTrack GPS tracker configuration
  - ST-909L APN settings
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet tracking ST-909L
---

# SinoTrack - ST-909L Configuration

This page describes the public configuration context for using the SinoTrack ST-909L with Plaspy. It summarizes the practical, publicly available steps to point an ST-909L at Plaspy so the device can stream location and alarm telemetry into your Plaspy account. The content here is intended to help technicians and fleet operators prepare the device for Plaspy integration using manufacturer SMS commands and common configuration practices.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available, this page includes the ST-909L SMS commands that the manufacturer publishes for APN, server, and verification so you can apply the public Plaspy settings and validate connectivity.

## Configuration Overview

The goal of configuration is to prepare the ST-909L so it reliably communicates with Plaspy and reports real-time location, alarms, and status updates. Configuration typically involves setting the mobile data APN, pointing the device to the Plaspy server endpoint and port, selecting the transport type if required, and verifying the device reports successfully.

- Configure APN credentials so the device can use the vehicle SIM for GPRS reporting.
- Set the Plaspy server endpoint so telemetry is sent directly to Plaspy.
- Choose UDP or TCP transport on the device if prompted and set port 8888.
- Verify the device settings using the manufacturer verification command and check that data arrives in Plaspy.
- Confirm alarms and periodic updates appear in Plaspy for operational visibility.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the ST-909L:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered ST-909L installed or connected to vehicle power so the device can accept SMS commands and register on the mobile network.
- A compatible active SIM card with mobile data and correct APN credentials for the chosen mobile operator.
- Access to the device SMS configuration method or the official SinoTrack configuration tool if provided by the vendor.
- The Plaspy account ready to receive new device reports so you can validate registration and data arrival.
- Knowledge of the APN, APN username, and APN password required by your mobile operator.
- A test plan to confirm location updates, alarms, and periodic reporting after configuration.

## How This Tracker Connects to Plaspy

The ST-909L is configured to report location and alarm data to the shared Plaspy server endpoint and port. After applying the APN and server settings, the tracker opens a GPRS connection and streams telemetry to Plaspy for real-time map visibility and event processing.

- Device sends periodic GPS and status packets to the configured Plaspy server address.
- Alarm events such as geofence breaches and overspeed are forwarded to Plaspy as alerts.
- The ST-909L can be pointed at the Plaspy server using SMS commands to set APN and server IP/port.
- Plaspy receives data on the shared port 8888 and automatically detects the protocol used by the tracker.
- Once reporting, the device becomes visible in Plaspy for route history, live tracking, and alarm monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as provided by SinoTrack.
2. Enter the Plaspy server domain or IP address (d.plaspy.com or 54.85.159.138) in the device server settings.
3. Set the port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP transport on the device if the tracker requires selecting a transport type.
5. Apply or save the configuration on the tracker and, if using SMS, ensure the command responses confirm success.
6. Restart the device if required by the device firmware or after applying server/APN changes.
7. Validate that the device reports to Plaspy by checking device presence in the platform and confirming periodic updates and alarms arrive.

## Example Configuration Commands

The ST-909L supports SMS-based configuration. The following commands are the public SMS commands published by SinoTrack for configuring server, APN, and verification. Send these commands from the authorized phone number defined for the device.

- Optional initial or recovery step to restore factory settings (use only if needed):
```
RESET
```
- Set the device time zone to UTC 0:
```
8960000E00
```
- Set the APN for the mobile operator (placeholders must be replaced with your operator values):
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
  - {{apn}} is the APN name provided by the mobile operator.
  - {{apnu}} is the APN username if required, leave blank if none.
  - {{apnp}} is the APN password if required, leave blank if none.

- Configure the GPRS server to point to Plaspy by IP and port:
```
8040000 54.85.159.138 8888
```
  - This sets the device to report directly to Plaspy using the public IP and shared port 8888.
  - You may also use d.plaspy.com if the device accepts domain names in server commands.

- Set the upload interval for engine on state to 60 seconds:
```
8050000 60
```
- Set the upload interval for engine off state to 60 seconds:
```
8090000 60
```
- Switch the device to GPRS data mode:
```
7100000
```
- Verify current device configuration:
```
RCONF
```
  - The RCONF command returns the device configuration including the ID used by the device and current server/APN settings for verification.

## Configuration Notes

- The SMS commands above are the publicly available commands provided by SinoTrack. Exact behavior and responses can vary by firmware version and device revision.
- You can configure the device to use either UDP or TCP on port 8888; choose the transport if the device firmware requires explicit selection. Plaspy will automatically detect the protocol used.
- When using APN placeholders keep the curly braces as placeholders until you replace them with real operator values.
- If you use the RESET command, treat it as an initial or recovery step since it restores factory settings and may clear other custom parameters.
- SMS configuration is the supported public method for this device; consult SinoTrack support if your device supports additional configuration tools.

## Why Use Plaspy with This Configuration

Configuring the SinoTrack ST-909L to report to Plaspy provides centralized visibility for fleets and individual vehicles, consolidating real-time location, alarms, and route history in one platform. For organizations that require professional fleet monitoring, alarm handling, and historical analysis, pointing ST-909L devices at Plaspy enables streamlined operations without needing to change the device form factor or core installation.

Learn more about Plaspy and how it handles device telemetry and fleet management at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and manufacturer instructions verify the latest documentation from SinoTrack at https://www.sinotrackgps.com/
