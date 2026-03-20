---
slug: /suntech/st4915lcbf/configuration
id: st4915lcbf-configuration
sidebar_label: Configuration
title: Suntech - ST4915LCBF Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Suntech ST4915LCBF and how to point the device to Plaspy servers for tracking
keywords:
  - Suntech ST4915LCBF
  - ST4915LCBF configuration
  - Suntech tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - asset tracking Suntech
  - Plaspy server configuration
  - ST4915LCBF setup guide
  - Suntech GPS platform integration
---

# Suntech - ST4915LCBF Configuration

This page covers the public configuration context for using the Suntech ST4915LCBF tracker with Plaspy. It describes the practical server settings and the public SMS command templates that are commonly used to point the device to Plaspy so the tracker can report position and telemetry to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while ingesting device data. Manufacturer side steps for configuring a device can vary by firmware version, hardware revision, installation type, or vendor tools. The example SMS commands and guidance on this page are drawn from public configuration material and should be applied together with official Suntech documentation and local installer practices.

## Configuration Overview

Preparing the ST4915LCBF for Plaspy integration means ensuring the device can reach Plaspy servers and report at the desired intervals. The configuration process typically sets network parameters, reporting intervals, and ensures the device identifies itself correctly to Plaspy.

- Configure the device network settings and APN so it can access cellular data and reach Plaspy.
- Point the tracker to Plaspy server endpoint and port so data arrives in the platform.
- Set reporting intervals and event rules so Plaspy receives timely location and telemetry updates.
- Verify device identity using the IMEI based device id format so Plaspy associates reports to the correct asset.
- Validate connectivity and reporting so the device appears in Plaspy maps and dashboards.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint details you will use in the device settings or SMS templates when configuring the tracker.

## Typical Requirements Before Setup

- A charged and functioning ST4915LCBF unit with access to the manufacturer configuration method or SMS control channel.
- A cellular SIM provisioned for data with the correct APN details for the local operator.
- Access to the device IMEI number to derive the device id used by the tracker for Plaspy registration.
- Ability to send SMS commands to the device if using SMS based setup and permission to configure APN and reporting settings.
- A terminal or device configuration tool if the manufacturer provides a USB or software interface for bulk or GUI configuration.

## How This Tracker Connects to Plaspy

The ST4915LCBF reports position and telemetry to the shared Plaspy server endpoint and port so the platform can provide real time maps, alerts, and logs. Plaspy accepts incoming TCP or UDP connections and determines the tracker protocol automatically so you do not need to select a protocol in the platform.

- The tracker is configured to send data to Plaspy at the server IP 54.85.159.138 or domain d.plaspy.com on port 8888.
- Use either UDP or TCP on the device when the device requires a transport selection; Plaspy accepts both and auto detects protocol.
- Periodic GNSS fixes and sensor telemetry are transmitted to Plaspy for real time visibility and historical reporting.
- Events and status updates reported by the device become operational alerts and dashboard metrics in Plaspy.
- Successful configuration results in the device appearing and reporting under its Plaspy device id derived from the IMEI.

## Common Configuration Workflow

1. Access the official Suntech configuration method or software, or use SMS configuration if supported by your device and installer practice.
2. In the device settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the destination.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP in the device configuration if transport selection is required by the tracker.
5. Apply or save the configuration and send any required SMS commands to program the device APN and server settings.
6. Restart the device if the configuration method or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy and appears with the correct device id in the platform maps and device list.

## Example Configuration Commands

The ST4915LCBF public configuration examples can be applied by SMS according to vendor guidance. The device uses a 6 digit device id derived from the IMEI for these commands. Device id generation rule The device id is the six digits from IMEI positions 9 through 14 (counting digits from 1), effectively omitting the final IMEI digit. For example if the IMEI is 123456789012345 the device id is 901234.

Use these SMS templates as shown. Replace {{device_id}} with the six digit id from the IMEI and keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as required.

1) Set the operator APN and GPRS server
- If APN requires username or password set the auth flag to 1, otherwise set it to 0.
- This command sets APN and points to the Plaspy server IP and port.

```
SA200NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Or when no APN username and password are needed

```
SA200NTW;{{device_id}};02;0;{{apn}};; ;54.85.159.138;8888;;;;
```

2) Set the update interval to 60 seconds
- This command configures periodic reporting intervals used by the device.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Check current settings
- Use the verification command to query the device preset.

```
SA200CMD;{{device_id}};02;PresetA
```

Placeholders explanation
- {{device_id}}: the six digit id derived from IMEI positions 9 through 14, omit the final IMEI digit.
- {{apn}}: your mobile operator APN string.
- {{apnu}}: APN username if required by your operator keep blank if none.
- {{apnp}}: APN password if required keep blank if none.

Note The example commands use the Plaspy server IP 54.85.159.138 and port 8888 as published. Some configuration tools accept the domain d.plaspy.com instead of the IP; use the form your device configuration method supports.

## Configuration Notes

- Firmware differences may change the exact SMS syntax or available fields. Always check the device firmware release notes before applying commands.
- The ST4915LCBF supports SMS based configuration examples above when the manufacturer documentation shows SMS as a supported method. Alternative configuration may be available via USB or configuration software.
- Choose UDP or TCP according to installation needs and the device options. Plaspy accepts both and auto detects protocol on connection.
- Keep APN credentials and operator details ready before sending network configuration commands to avoid connectivity delays.
- If the manufacturer provides a GUI configuration tool, prefer that for batch provisioning and to reduce SMS based typing errors.

## Why Use Plaspy with This Configuration

Using the ST4915LCBF with Plaspy provides a scalable way to collect GNSS fixes, BLE and Wi Fi augmented locations, and sensor telemetry for fleet and asset visibility. Pointing the tracker to Plaspy using the shared server settings ensures consistent ingestion of location and event data so operations teams can monitor devices centrally and respond to alerts or anomalies quickly.

To learn more about Plaspy and how it handles devices such as the ST4915LCBF visit https://www.plaspy.com. Manufacturer specifications and setup methods evolve over time so verify the latest device specific configuration steps and firmware details at the Suntech website http://www.suntechint.com/ before final deployment.
