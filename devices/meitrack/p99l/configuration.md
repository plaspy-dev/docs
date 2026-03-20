---
slug: /meitrack/p99l/configuration
id: p99l-configuration
sidebar_label: Configuration
title: Meitrack - P99L Configuration
sidebar_class_name: menu_item_tracker
description: Public Meitrack P99L setup guide for use with Plaspy server d.plaspy.com using SMS commands and common network settings
keywords:
  - Meitrack P99L configuration
  - Meitrack P99L setup
  - P99L Plaspy configuration
  - P99L server settings
  - Meitrack GPS tracker configuration
  - P99L SMS configuration
  - Plaspy tracker setup
  - GPS tracker server configuration
  - Meitrack P99L APN settings
  - P99L network setup
---

# Meitrack - P99L Configuration

This page documents the public configuration context for using the Meitrack P99L with Plaspy. It explains the practical, manufacturer‑facing steps and SMS commands commonly used to point the P99L to Plaspy so the device can report location, battery status, and basic telemetry for real time monitoring and historical playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and workflow below as practical public guidance based on the available device configuration methods.

## Configuration Overview

The goal of this configuration process is to prepare the P99L so it reliably communicates with the Plaspy platform for tracking and telemetry. Typical tasks include setting the server endpoint, confirming transport and network parameters, and validating that the device reports to Plaspy.

- Configure the tracker to point at the Plaspy server endpoint and port so position and telemetry reach the platform.
- Set APN and optional SIM credentials so the P99L can establish a GPRS/4G data session.
- Choose the transport (UDP or TCP) if required by the device and save the setting.
- Verify device time zone and reporting interval to align location updates with Plaspy dashboards.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may allow selecting UDP or TCP)  
- Plaspy automatically detects the tracker protocol when devices connect

## Typical Requirements Before Setup

- A charged P99L device with access to SMS configuration or the manufacturer configuration tool.
- An active SIM card with mobile data and the correct APN for your mobile operator.
- Knowledge of the device password or the default password (default shown in the example commands is 0000).
- Access to the official Meitrack configuration guidance or support materials for the P99L.
- A phone capable of sending SMS commands to the device if using SMS based configuration.

## How This Tracker Connects to Plaspy

The P99L is configured to send location and basic telemetry to Plaspy by pointing the device to the shared Plaspy server endpoint and port. Once configured, Plaspy receives the device's reports and normalizes them for real time maps, history, and alerts.

- The device reports GNSS and assisted position fixes to Plaspy over the configured cellular data connection.
- Telemetry such as battery status and device health is uploaded to the Plaspy endpoint for monitoring.
- Events and periodic location updates are sent to the shared Plaspy server address and port.
- Plaspy detects the device protocol automatically and ingests the incoming messages without per device port changes.
- Device visibility and historical playback are available in Plaspy once the tracker successfully connects and sends data.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the P99L such as SMS commands or an approved configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device server address.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Provide the SIM APN and optional APN username and password as required by your mobile operator.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device presence and recent updates in the Plaspy platform.

## Example Configuration Commands

The P99L supports SMS based configuration. Below are public example SMS commands used to configure the device for Plaspy. The sample commands use the device default password 0000. Replace placeholders such as [apn], [apnu], and [apnp] with your operator APN and credentials.

- Optional initial factory reset or restore to known baseline (use only when required):
```text
0000,F11
```
- Set the GPRS server to use Plaspy by IP and port. Basic form with APN only:
```text
0000,A21,2,54.85.159.138,8888,[apn]
```
- Alternate server command including APN username and password placeholders:
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Set the time zone to UTC 0:
```text
0000,B36,0
```
- Set the position update interval to every 1 minute:
```text
0000,A12,6,0
```
- Set basic event reporting configuration:
```text
0000,C03,0
```

Notes on placeholders:
- [apn] — replace with your SIM operator APN.
- [apnu] — replace with the APN username if required by the operator; omit if not needed.
- [apnp] — replace with the APN password if required; omit if not needed.

## Configuration Notes

- SMS based setup is a common and supported method for Meitrack devices; firmware differences can change supported commands or parameter formats.
- Choose UDP or TCP based on your operational preference; Plaspy supports both and automatically detects the incoming protocol.
- Always confirm and replace placeholders like [apn], [apnu], and [apnp] with operator specific values.
- The default device password used in the examples is 0000; change the device password after initial setup for operational security.
- Regional firmware and radio variants may change the exact command syntax or available server parameters; consult manufacturer documentation when in doubt.

## Why Use Plaspy with This Configuration

Configuring the Meitrack P99L to report to Plaspy gives organizations a reliable way to capture hybrid positioning, device health, and event data from rugged portable trackers. Using the shared Plaspy server settings and the examples above helps get the P99L online quickly so teams can monitor location and telemetry, receive alerts, and review historical routes through Plaspy.

To learn more about Plaspy and supported tracking workflows visit https://www.plaspy.com. For the most current P99L device specific setup information, firmware details, and command reference verify the manufacturer documentation at https://www.meitrack.com/ as methods and parameters can change over time.
