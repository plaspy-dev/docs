---
slug: /topshine/ogt02/configuration
id: ogt02-configuration
sidebar_label: Configuration
title: TopShine - OGT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine OGT02 GPS tracker integration with Plaspy using shared server settings and SMS and GPRS commands
keywords:
  - TopShine OGT02 configuration
  - TopShine OGT02 setup
  - OGT02 Plaspy configuration
  - Plaspy server settings
  - OGT02 GPS tracker setup
  - OBD2 GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking OGT02
  - GPS platform setup Plaspy
  - TopShine OGT02 tutorial
---

# TopShine - OGT02 Configuration

This page documents the public configuration context for using the TopShine OGT02 with Plaspy. It explains the shared Plaspy server settings, the common workflow you can expect when preparing an OGT02 for Plaspy, and example SMS commands exposed by the device vendor that are commonly used to configure GPRS and reporting behavior.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while ingesting device data. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The examples below are based on the public configuration commands provided for the OGT02 and the Plaspy server settings that apply to all devices.

## Configuration Overview

The configuration process prepares the OGT02 to communicate reliably with Plaspy over the network and ensures the device reports position and telemetry to the platform. For OGT02 units this typically means setting the device identity, configuring operator APN settings, and pointing the tracker to the Plaspy server endpoint and port.

- Configure the device identity and IMEI mapping so Plaspy recognizes the unit
- Set operator APN and optional APN credentials so the tracker can use GPRS
- Point the device to Plaspy server settings to enable live reporting
- Choose UDP or TCP transport if the device requires an explicit transport selection
- Validate connectivity and confirm the device appears in Plaspy dashboards

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the OGT02. These values are the shared endpoint and port used by Plaspy for all supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can ingest the device data regardless of protocol variant

All Plaspy supported trackers use the same port and the platform detects the device protocol automatically when the unit reports.

## Typical Requirements Before Setup

- A powered OGT02 unit installed in the vehicle OBD II port and the vehicle ignition on as required
- A valid SIM card with data enabled and SMS support if you will use SMS configuration or fallback reporting
- Access to the device IMEI and any device password required for configuration (the OGT02 default password appears in public commands below)
- Access to the official TopShine configuration method for your unit such as SMS command interface or vendor software
- A Plaspy account or platform access to verify the device appears and reports correctly after configuration

## How This Tracker Connects to Plaspy

The OGT02 is configured to report location and OBD telemetry to the shared Plaspy server endpoint and port so Plaspy can provide real time tracking, alerts, and historical playback. Communication may use GPRS for data uplink and SMS as an alternative setup or fallback method.

- The tracker sends GPS position reports and available OBD telemetry to the Plaspy server endpoint
- Alerts and movement events (for example from the accelerometer) are delivered to Plaspy for notifications and rules processing
- Device identity is mapped so Plaspy can associate incoming reports with the correct vehicle and telemetry record
- The device points to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138 and uses port 8888 for reporting
- Plaspy automatically detects the tracker protocol when reports arrive so protocol selection is simplified for most deployments

## Common Configuration Workflow

1. Access the official TopShine configuration method for your OGT02 unit, such as SMS commands or the vendor configuration tool documented by the manufacturer.  
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888 which is the port used by all Plaspy devices.  
4. Choose the transport option UDP or TCP if the device requires explicit transport selection.  
5. Configure the operator APN and any APN username or password required by the SIM card.  
6. Apply or save the configuration on the tracker and restart the device if the device or firmware requires a reboot to apply settings.  
7. Validate that the device reports to Plaspy by confirming the unit appears and sends location updates in the Plaspy platform dashboards.

If you are using SMS commands for configuration, follow the sequence recommended by TopShine and verify IMEI and password values before sending commands.

## Example Configuration Commands

The OGT02 vendor provides public SMS commands for configuration. The sample commands below use the device default password 000000. If your device password has been changed, replace 000000 with the active device password.

Note on placeholders
- {{apn}} is the mobile operator APN string
- {{apnu}} is the APN username when required
- {{apnp}} is the APN password when required
- IMEI should be replaced with the device IMEI value when required

Commands in the order commonly used for initial setup:

1. Optional initial reset to factory settings (use only if you need to reset the device)
```
W000000,990,099###
```

2. Set the device ID. The vendor command uses the first 14 IMEI digits for the device Id while Plaspy associates the unit by its IMEI (15 digits). Replace IMEI14 with the first 14 digits derived from your IMEI.
```
W000000,010,IMEI14
```

3. Set the operator APN and optional APN credentials. Replace {{apn}} and optional {{apnu}} and {{apnp}} with your SIM operator values.
```
W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
```
(If no APN username or password is required, send only the APN. Brackets indicate optional fields.)

4. Set the GPRS server to the Plaspy server IP and port. This example uses the public Plaspy server IP and the shared port.
```
W000000,012,54.85.159.138,8888
```

5. Switch the device to GPRS working mode
```
W000000,013,2
```

6. Set the reporting update interval. The numeric value depends on the device firmware for interval codes. Example uses code 6 as demonstrated in vendor samples.
```
W000000,014,6
```

7. Query the device IMEI for verification
```
W000000,601
```

Preserve the order when that order is required by the device. Use the device password at the start of each command if the firmware expects the password prefixed to the command string.

## Configuration Notes

- The OGT02 supports both GPRS and SMS working modes in public documentation. SMS can be used for configuration or as a fallback when GPRS is unavailable.
- Firmware and hardware revisions may use slightly different command syntax or parameter codes. Always confirm commands against your device firmware documentation.
- The device vendor example sets the device Id using the first 14 IMEI digits while Plaspy typically identifies units by the full IMEI. Ensure the mapping used by your installer matches the Plaspy device record.
- Choose UDP or TCP according to your deployment needs; Plaspy accepts either transport and automatically detects the tracker protocol when reports arrive.
- The default device password shown in public commands is 000000. If the password has been changed in the field, use the active password when sending commands.

## Why Use Plaspy with This Configuration

Using the TopShine OGT02 with Plaspy provides a straightforward path to real time vehicle visibility and centralized fleet management without complex installation. The OBD II plug and play form factor reduces setup time, while configuring the unit to report to Plaspy at d.plaspy.com on port 8888 enables consistent ingestion of position and OBD telemetry for monitoring, alerts, and historical playback.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details please verify current information on the TopShine website https://www.gztopshine.com/ as manufacturer specifications and setup steps can change over time.
