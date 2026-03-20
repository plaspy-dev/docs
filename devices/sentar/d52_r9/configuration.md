---
slug: /sentar/d52_r9/configuration
id: d52_r9-configuration
sidebar_label: Configuration
title: Sentar - D52-R9 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Sentar D52 R9 smartwatch to send data to Plaspy using shared Plaspy server settings
keywords:
  - Sentar D52 R9 configuration
  - Sentar D52 R9 setup
  - Sentar D52 R9 Plaspy
  - Sentar smartwatch configuration
  - D52 R9 server configuration
  - D52 R9 GPS platform setup
  - D52 R9 tracking software configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - wearable GPS tracker setup
---

# Sentar - D52-R9 Configuration

This page documents the public configuration context for using the Sentar D52-R9 smartwatch with Plaspy. It explains the shared Plaspy server settings you will point the device to and presents the sample SMS commands that are commonly used with this device to prepare it for server communication. Use this guide as a practical checklist for connecting a D52-R9 to Plaspy while keeping manufacturer documentation in view.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to match a protocol manually on the server side. Manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and the vendor tools used to send configuration commands. The sample SMS commands below reflect a common public configuration flow and include placeholders for APN credentials and mobile network identifiers.

## Configuration Overview

The goal of configuration is to prepare the D52-R9 to report location and event telemetry to the Plaspy platform reliably. Typical public steps include setting the device time zone, confirming the mobile network identifiers, configuring the APN, directing the device to Plaspy server endpoints, and defining how often the device uploads data.

- Configure APN settings and verify operator details so the watch can use cellular data.
- Point the device to the Plaspy server endpoint so telemetry goes to Plaspy for mapping and alerts.
- Set update intervals to control how often the device uploads location and status.
- Validate connectivity and IMSI or MCC MNC details to confirm the SIM and carrier plan are correct.
- Optionally perform a factory reset if you need to clear prior settings before provisioning for Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices so you always configure port 8888 on the device side when sending data to Plaspy.

## Typical Requirements Before Setup

- A charged and powered D52-R9 unit available for configuration.
- A SIM card with data and SMS enabled and the correct APN details for the operator.
- Access to the device phone number or an SMS capable mobile to send configuration messages.
- Manufacturer documentation or configuration tool from Sentar so you can confirm SMS syntax and firmware specifics.
- Knowledge of the device default password if SMS commands are password protected; the sample commands below use the default password shown in public samples.

## How This Tracker Connects to Plaspy

The D52-R9 sends location and event telemetry over the cellular network to the shared Plaspy server endpoint and port so Plaspy can provide live mapping, history, and alerts. In practice, the tracker is configured to use the operator APN, then pointed at the Plaspy domain or IP and port.

- The device reports periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device settings; Plaspy supports both and auto detects the incoming protocol.
- Telemetry and geofence events are transmitted to Plaspy for mapping and alerting.
- Plaspy ingests event streams so operators or caregivers can view real time and historical data.
- Plaspy uses the same port for all devices so configuration is consistent across deployments.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D52-R9, typically SMS commands or an approved vendor tool, and confirm the device password.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
3. Set port 8888 on the device to match Plaspy.
4. If the device requires choosing a transport, select UDP or TCP according to installer preference or device capability.
5. Configure APN settings and any operator required MCC MNC values so the device has working data connectivity.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot.
7. Validate that the device reports to Plaspy by checking the device online status in Plaspy and by using available verification commands on the device.

## Example Configuration Commands

The D52-R9 can be configured by SMS using the following public command examples. These commands are provided here in the order given by public configuration samples. The sample device password shown in public examples is 123456. Use the device password that is valid for your unit if it differs.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the IMSI to view MCC and MNC
```text
pw,123456,imsi#
```

- Set operator APN where the APN fields contain placeholders and xxxyy is MCC plus MNC
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: [apn] is the APN name, [apnu] is APN username, [apnp] is APN password. Replace xxxyy with the mobile network code formed by MCC plus MNC, for example 310260 where 310 is MCC and 260 is MNC.

- Set the GPRS server to point to Plaspy by IP and port
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds
```text
pw123456,upload,300#
```

- Check current device settings
```text
pw,123456,ts#
```

Note on syntax: these commands are presented as public examples. Some firmware versions or regional variants may require slightly different separators or parameter order. Confirm exact SMS grammar against Sentar documentation before wide deployment.

## Configuration Notes

- Firmware and regional variants can change SMS command syntax and parameter order; always confirm with Sentar documentation for your device firmware.
- The D52-R9 sample configuration uses SMS commands and APN configuration to enable cellular data; ensure the SIM plan supports data and SMS.
- Plaspy supports both UDP and TCP and automatically detects the protocol the device uses; choose transport on the device if required by firmware.
- Plaspy uses the same port 8888 for all devices so you do not need per device port mapping on the server.
- If you perform a factory reset as shown in the example, treat it as an initial or troubleshooting step and not a routine operation for provisioned units.

## Why Use Plaspy with This Configuration

Connecting the Sentar D52-R9 to Plaspy gives caregivers and operators a single place to view live location, geofence events, and history for wearable trackers. This configuration approach standardizes the server endpoint and port so devices from multiple vendors can be provisioned consistently into Plaspy and begin sending telemetry for mapping and alerts.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time so verify the latest setup details and SMS command syntax on the Sentar official site http://www.sentarsmart.com/ before deploying at scale.
