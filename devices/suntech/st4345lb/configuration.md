---
slug: /suntech/st4345lb/configuration
id: st4345lb-configuration
sidebar_label: Configuration
title: Suntech - ST4345LB Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Suntech ST4345LB GPS tracker configuration with Plaspy server settings and example SMS commands
keywords:
  - Suntech ST4345LB configuration
  - Suntech ST4345LB setup
  - ST4345LB Plaspy
  - Suntech GPS tracker configuration
  - ST4345LB server settings
  - Suntech tracker setup guide
  - fleet tracking setup
  - GPS tracker SMS commands
  - vehicle tracking configuration
  - Plaspy device configuration
---

# Suntech - ST4345LB Configuration

This page documents the public configuration context for using the Suntech ST4345LB GPS tracker with Plaspy. It gathers the Plaspy server settings you must point the device to, explains the general setup workflow, and includes the publicly available SMS commands used by this model to set network and reporting parameters. Use this guide to prepare the tracker for Plaspy integration and validate connectivity in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices connect. Manufacturer side setup steps for the ST4345LB can vary by firmware, hardware revision, installer method and vendor tools. The public ST4345LB configuration shown here includes an SMS based setup pattern and an IMEI derived device ID as provided in the official public guidance.

## Configuration Overview

This configuration process prepares the ST4345LB to send location, sensor and event data to Plaspy so the device appears in your Plaspy account and streams telemetry reliably. The common public actions include setting the SIM APN and the server endpoint, selecting a reporting interval, and verifying that the device reports to Plaspy.

- Configure the device network APN and GPRS parameters so it has cellular data access.
- Point the device at the Plaspy server endpoint and port so telemetry is routed to Plaspy.
- Set a periodic reporting interval to control how often the tracker uploads location and events.
- Verify device identification using the IMEI based device ID required by ST4345LB SMS commands.
- Confirm the device reports successfully to Plaspy and appears in the platform.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that the server endpoint above is the public Plaspy destination for ST4345LB devices.

## Typical Requirements Before Setup

- A valid SIM card with a data plan and the correct APN values for your mobile operator.
- The tracker powered and accessible for configuration, or an installer able to send SMS commands to the device.
- The device IMEI number so you can derive the ST4345LB device ID required by the SMS commands.
- Access to the manufacturer configuration method for this model whether SMS or vendor software.
- Basic knowledge of whether the device should use UDP or TCP transport when sending to Plaspy.

## How This Tracker Connects to Plaspy

The ST4345LB is configured to report to the shared Plaspy server endpoint and port so Plaspy ingests telemetry and events for real time tracking, alerting, and historical reporting. Once configured with the correct APN and server settings the device will initiate connections and send periodic updates to the Plaspy endpoint.

- The tracker reports periodic location updates to the Plaspy server d.plaspy.com or 54.85.159.138 on port 8888.
- Transport selection can be UDP or TCP depending on tracker firmware or installer preference.
- Plaspy automatically detects the tracker protocol when the device connects to the shared port.
- BLE sensor, event and on‑device analytics data are forwarded as part of the device telemetry when enabled and supported.
- Visibility in Plaspy enables real time monitoring, alerts, and historical position reporting.

## Common Configuration Workflow

1. Access the official Suntech configuration method for the ST4345LB, typically the documented SMS commands or vendor configuration tool.
2. Determine the device ID from the IMEI and prepare your APN credentials for the SIM you will use.
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 depending on the command format you use.
4. Set the port to 8888 and choose UDP or TCP if the tracker requires explicit transport selection.
5. Send the APN and server configuration command and then send the reporting interval command as required.
6. Apply or save the configuration and restart the device if the manufacturer workflow recommends it.
7. Validate that the device reports to Plaspy and appears as an active device in the platform.

## Example Configuration Commands

The ST4345LB provides a public SMS based configuration pattern. The device requires a device ID derived from the IMEI. The device ID is the six digits immediately before the final IMEI digit. For example, given an IMEI of 123456789012345 the device ID is 901234 (the six digits before the final digit 5).

Important placeholder notes
- [apn] is the mobile operator APN name.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.
- Replace [deviceID] with the six digit ID derived from the IMEI as explained above.
- The net auth flag in the APN command should be 1 when you supply [apnu] or [apnp] and 0 when no APN username or password are used.

1. Set the operator APN and Plaspy GPRS server
```text
SA200NTW;[deviceID];02;[authFlag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Replace [deviceID] with the six digit device ID.
- Replace [authFlag] with 1 if you provide an APN username or password, otherwise 0.
- This command points the device at the Plaspy server IP 54.85.159.138 and port 8888. You can alternatively send d.plaspy.com in supported command formats if the device accepts domain names.

2. Set the update interval to 60 seconds
```text
SA200RPT;[deviceID];02;60;60;60;3;0;0;0;0;0
```
- This public example sets several reporting interval fields to 60 seconds as shown in the original manufacturer guidance.

3. Check device preset settings
```text
SA200CMD;[deviceID];02;PresetA
```
- Use this command to request current preset configuration values from the device.

Preserve the order above when following the public manufacturer guidance. If your installer tool accepts domain names instead of IP addresses you may use d.plaspy.com where applicable. All devices in Plaspy use port 8888 so ensure the port parameter is set accordingly.

## Configuration Notes

- Firmware and hardware revisions may change command formats or parameter ordering; always confirm the exact command syntax for your device firmware.
- The ST4345LB supports SMS based configuration as shown in the public guidance but vendor software or remote management tools may also be available for bulk provisioning.
- Choose UDP or TCP according to installer preference and network reliability; Plaspy supports both and automatically detects the tracker protocol.
- Verify APN credentials with your mobile operator before configuring the device to avoid connectivity issues.
- After applying configuration, a device restart may be required for changes to take effect and for the device to establish a new session to the Plaspy server.

## Why Use Plaspy with This Configuration

Using the ST4345LB with Plaspy gives operational teams centralized visibility into vehicle position, sensor data and event analytics. Pointing the tracker to the shared Plaspy endpoint streamlines telemetry ingestion and enables real time monitoring, alerts and reporting across mixed fleets and distributed assets.

Learn more about Plaspy at https://www.plaspy.com and verify device specific setup details and the latest command syntax on the official Suntech site http://www.suntechint.com/. Manufacturer configuration methods, firmware behavior and parameter formats can change over time so confirm the most current information on the manufacturer website.
