---
slug: /xexun/u03/configuration
id: u03-configuration
sidebar_label: Configuration
title: Xexun - U03 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun U03 with Plaspy server settings and SMS setup commands
keywords:
  - Xexun U03 configuration
  - Xexun U03 setup
  - Xexun U03 Plaspy
  - U03 configuration guide
  - U03 server configuration
  - U03 SMS setup
  - Plaspy tracker configuration
  - indoor positioning badge setup
  - UWB badge Plaspy setup
  - U03 deployment instructions
---

# Xexun - U03 Configuration

This page covers the public configuration context for using the Xexun U03 with Plaspy. It explains the shared Plaspy server settings, the common SMS based commands found in public device configuration examples, and practical steps to get the tracker reporting to Plaspy. Use this guide together with the device hardware documentation and any vendor tools you have for your specific unit.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The U03 documentation and the commands shown here reflect public configuration examples; if your unit supports SMS or GPRS configuration, these commands are the public strings commonly used to point the device at Plaspy.

## Configuration Overview

The goal of configuration is to prepare the U03 so it can communicate with Plaspy and appear correctly in the platform for live monitoring, alerts, and reporting. For units that include SMS or GPRS setup, public commands allow you to set APN values, server endpoints, and reporting intervals.

- Configure the device to send data to the Plaspy server endpoint so the badge or tracker appears in your Plaspy account.
- Set any required APN and operator credentials when the device supports cellular data.
- Ensure the device is reachable by verifying transport and reporting intervals and then observing device checks in Plaspy.
- Validate telemetry such as battery, motion, and SOS messages are flowing into Plaspy for monitoring and alerts.
- Keep a note of the device password used for SMS commands and follow manufacturer instructions for firmware and tool usage.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888 depending on device requirement  
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol once traffic reaches the server

Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects to the server endpoint.

## Typical Requirements Before Setup

- Confirm the U03 unit is powered and accessible for configuration and testing.
- If using SMS GPRS configuration, ensure a working SIM card is inserted and SMS or data services are active.
- Know the device SMS control password; the public examples below use the default password 123456 when present.
- Have access to the official manufacturer configuration method such as SMS commands, a vendor configuration tool, or the device manual.
- Confirm the APN, APN username, and APN password for the operator if cellular data will be used.
- Prepare to reboot or power cycle the device after configuration where required.

## How This Tracker Connects to Plaspy

When configured for network reporting, the tracker is set to send its location and status to the shared Plaspy server endpoint and port. Plaspy receives those packets, automatically identifies the tracker protocol, and processes the telemetry for live mapping, alerts, and history.

- The tracker is configured to point its GPRS or reporting server to the Plaspy endpoint and port so messages arrive at Plaspy.
- Plaspy automatically detects the tracker protocol once messages are received at d.plaspy.com or the server IP and port.
- The device reports relevant telemetry such as location updates, SOS events, battery status, and motion or tamper events to Plaspy.
- Plaspy ingests the data for real time monitoring, historical playback, geofence events, and alerting workflows.
- Use the Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) in the device configuration so traffic is routed correctly.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for your U03 unit (SMS commands, vendor app, or device tool).
2. Enter the Plaspy server endpoint by supplying d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set port 8888 as the device reporting port. Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN, APN username, and APN password if the device sends data over cellular GPRS.
6. Apply or save the configuration and restart or power cycle the device if required.
7. Validate that the device reports to Plaspy by checking device connectivity and telemetry in your Plaspy deployment.

When SMS based setup is available, follow the public commands format shown below exactly and verify responses from the device before finishing the workflow.

## Example Configuration Commands

The following SMS command examples are public examples for devices that accept SMS configuration. The sample commands use the default device password 123456 where required. Use these in the order shown if performing an initial setup; the factory reset command is optional and should be used only when needed.

1. Optional initial factory reset command
```text
begin123456
```

2. Set the operator APN
```text
apn123456 {{apn}}
```
- Replace {{apn}} with your SIM operator APN string.

3. Set the APN username (optional)
```text
apnuser123456 {{apnu}}
```
- Replace {{apnu}} with the APN username if the operator requires one.

4. Set the APN password (optional)
```text
apnpasswd123456 {{apnp}}
```
- Replace {{apnp}} with the APN password if required.

5. Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```
- This uses the Plaspy server IP and port 8888 as published. If your device accepts a domain name instead of an IP, you can use d.plaspy.com 8888 where supported by the firmware.

6. Set the GPRS mode
```text
gprsmode123456
```
- Use the device-specific mode value if your firmware requires a parameter; the public example shows the mode command format.

7. Set the update interval to 60 seconds
```text
t060s***n123456
```
- This sets the device reporting interval to 60 seconds in the public example format. Confirm the exact interval syntax for your firmware.

Preserve the SMS control password in these commands. If your unit uses a different password than the public default 123456, replace it accordingly.

## Configuration Notes

- Firmware and regional variants may use different SMS command syntax or require supplementary parameters; always confirm the correct command set for your device firmware.
- Many Plaspy deployments accept either the server domain d.plaspy.com or the server IP 54.85.159.138; use the form supported by your firmware.
- Choose UDP or TCP based on device support and network considerations; Plaspy will detect the tracker protocol automatically once packets arrive at port 8888.
- SMS based configuration is commonly used for field devices that do not have a local UI. Keep a log of SMS responses from the device to confirm successful changes.
- If a factory reset is performed, reapply APN and server settings and verify reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the U03 with Plaspy brings the device into a unified visibility and monitoring environment where location, safety events, and telemetry are presented for operational use. Pointing the tracker at Plaspy using the shared server settings ensures data flows into the platform where you can configure alerts, mapping, geofencing, and reporting workflows.

To learn more about Plaspy and how this configuration fits into managed deployments, visit https://www.plaspy.com. Note that device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and command syntax on the manufacturer site https://www.xexun.com/ before applying configuration in production.
