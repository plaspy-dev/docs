---
slug: /topshine/pt50/configuration
id: pt50-configuration
sidebar_label: Configuration
title: TopShine - PT50 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TopShine PT50 GPS tracker showing Plaspy server settings, SMS commands and practical configuration workflow for integration
keywords:
  - TopShine PT50 configuration
  - TopShine PT50 setup
  - PT50 Plaspy configuration
  - PT50 server configuration
  - PT50 SMS commands
  - PT50 GPS tracker setup
  - Plaspy server settings
  - GPS tracker integration Plaspy
  - asset tracker PT50 configuration
  - fleet tracking PT50
---

# TopShine - PT50 Configuration

This page covers the public configuration context for using the TopShine PT50 tracker with the Plaspy platform. It focuses on the practical steps and publicly available SMS commands that prepare the device to report location and event data to Plaspy, and explains the server settings Plaspy requires for connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where public SMS commands are provided for the PT50 they are shown below; always confirm device behavior with the manufacturer documentation for your hardware revision.

## Configuration Overview

The configuration process prepares the PT50 to communicate reliably with Plaspy and to be visible in the platform for real time monitoring, alerts, and history playback. For PT50 deployments this typically means setting network APN values, pointing the device to the Plaspy server, selecting the transport mode, and validating that reports reach the platform.

- Configure the device APN so it can use cellular data for GPRS or 4G reporting.
- Point the tracker to the Plaspy server endpoint and set the shared Plaspy port.
- Select UDP or TCP transport on the device if required and save the configuration.
- Verify device identity and IMEI mapping so the tracker appears correctly in Plaspy.
- Validate reporting and alarms so location, movement, and SOS events are visible in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These settings are the public endpoint and port that the PT50 must be configured to send data to when used with Plaspy. Use the IP or the domain as supported by your device or firmware and set port 8888 for all Plaspy devices.

## Typical Requirements Before Setup

- A powered PT50 unit with battery or a temporary power source for initial configuration.
- A valid cellular SIM with data enabled and the correct APN credentials for the network operator.
- Access to the manufacturer configuration method for your PT50 model such as SMS commands or vendor software.
- Knowledge of the device IMEI and the device password (the public example below uses 000000 as the default password).
- A way to send and receive SMS messages from the device if using SMS based configuration.
- Access to the Plaspy account or device list to confirm the tracker appears after configuration.

## How This Tracker Connects to Plaspy

The PT50 reports location and event telemetry to the shared Plaspy server endpoint and port so that Plaspy can normalize and present the device data via dashboards and alerts. Communication typically flows from the device over the cellular network to the Plaspy endpoint so that updates and alarms are visible in real time.

- The device is configured to send GPRS or 4G telemetry to 54.85.159.138 on port 8888.
- If the device supports domain names, d.plaspy.com is the published Plaspy domain for the same endpoint.
- Choose UDP or TCP transport on the device as required; Plaspy supports both and automatically detects the protocol used.
- Once reporting begins, Plaspy maps the tracker by IMEI or device id so events and location appear in the platform.
- Alarms and geofence or SOS events sent by the PT50 are delivered to Plaspy for immediate processing.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PT50 (SMS commands or the vendor tool).
2. Configure the device APN using your mobile operator credentials so the tracker can connect via cellular data.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP on the device if it requires a transport selection.
5. Apply or save the configuration on the tracker and restart the device if the device or firmware requires a reboot.
6. Validate that the device reports to Plaspy and that the IMEI or device id appears in your Plaspy device list.
7. Test events such as movement or an SOS to confirm alerts arrive in Plaspy.

## Example Configuration Commands

The PT50 supports SMS based configuration. The public SMS command templates below are taken from manufacturer supplied content and preserved with placeholders. The sample setup uses the default device password 000000 in the examples. Replace placeholders before sending.

- Reset to factory settings (optional initial step)
```text
W000000,990,099###
```
Label: optional initial reset. The password portion in these commands is the device password, default shown as 000000 in public examples.

- Set the device id (use the first 14 digits from the IMEI where required)
```text
W000000,010,{{first14_IMEI}}
```
Note: The manufacturer example uses the first 14 IMEI digits in this command. Plaspy uses the full device IMEI as the platform identifier; confirm how you map IMEI to devices in Plaspy.

- Set the operator APN (placeholders)
```text
W000000,011,{{apn}}
```
If APN username and password are required by your operator, include them as:
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
Placeholders:
- {{apn}} = your network operator APN
- {{apnu}} = APN username if required
- {{apnp}} = APN password if required

- Set the GPRS server to Plaspy using the public IP and port
```text
W000000,012,54.85.159.138,8888
```
This command configures the device to report to the Plaspy server IP and port. If your device firmware accepts domain names you may be able to use d.plaspy.com instead of the IP; verify support in your PT50 firmware.

- Switch to GPRS mode
```text
W000000,013,2
```

- Set the update interval (example value)
```text
W000000,014,6
```
Adjust the last parameter to change the tracking interval as required by your deployment.

- Get device IMEI (verify identity)
```text
W000000,601
```
This command returns the IMEI so you can confirm the device identity before setting the device id or registering it in Plaspy.

## Configuration Notes

- SMS based configuration shown above uses the device password; public examples use 000000 as the factory default password. If possible, change the device password after initial setup.
- Firmware and regional variants can change the exact SMS syntax or support for domain names versus IPs. Confirm exact commands for your firmware build from the manufacturer.
- Choose UDP or TCP based on your network and device behavior. Plaspy supports both transports and will automatically detect the protocol when the device reports.
- Using the device IMEI consistently as the platform identifier simplifies mapping devices in Plaspy; follow the manufacturer instruction for setting device id when applicable.
- Keep a record of the APN and credential placeholders used so you can reproduce or troubleshoot deployments.

## Why Use Plaspy with This Configuration

Configuring the TopShine PT50 to report to Plaspy provides a straightforward path to real time location visibility, alarm processing, and historical route playback for long term asset monitoring. The combination of solar autonomy and cellular reporting makes the PT50 suitable for remote or unattended assets while Plaspy ingests telemetry and exposes it through dashboards and notification workflows.

To learn more about Plaspy and how it supports the PT50, visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer instructions at the TopShine website https://www.gztopshine.com/ to ensure you are using the correct commands for your hardware and firmware revision.
