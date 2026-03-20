---
slug: /megastek/mt400/configuration
id: mt400-configuration
sidebar_label: Configuration
title: Megastek - MT400 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Megastek MT400 for Plaspy with server settings, SMS commands, and practical integration guidance for reliable telemetry and location reporting
keywords:
  - Megastek MT400 configuration
  - MT400 setup Plaspy
  - Megastek MT400 server configuration
  - MT400 GPS tracker setup
  - Megastek MT400 SMS commands
  - MT400 GPRS configuration
  - Plaspy device configuration
  - wearable GPS tracker setup
  - MT400 platform integration
  - Megastek configuration guide
---

# Megastek - MT400 Configuration

This page covers the public configuration context for using the Megastek MT400 with Plaspy. It explains the shared Plaspy server settings, the typical preparation steps, and the practical SMS commands and workflow used to point an MT400 to the Plaspy platform. The guidance below uses the MT400 product description as the factual grounding and incorporates the publicly available SMS setup commands where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor tools. The MT400 supports SMS and GPRS configuration options described below; adapt steps as required for your device firmware and the management method provided by Megastek.

## Configuration Overview

The goal of configuration is to prepare the MT400 to communicate reliably with Plaspy so location and medical telemetry arrive on the platform for monitoring and alerts. This typically involves setting the device identity, APN for data, reporting intervals, and the GPRS server target so the watch sends its messages to Plaspy.

- Configure the device ID and IMEI so the device is identifiable in Plaspy.
- Set the operator APN and any APN username or password required for GPRS data.
- Configure the GPRS server to point to Plaspy and set the update/reporting interval.
- Enable GPRS data mode so the device actively pushes telemetry and location.
- Verify connectivity and confirm the device appears in Plaspy with live updates.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the MT400. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported on the device; choose the transport the device requires
- Protocol detection: Plaspy automatically detects the tracker protocol after the device reports

## Typical Requirements Before Setup

- A charged and functional MT400 device with the correct IMEI available.
- An active SIM card with a data plan and SMS capability if you will configure the device by SMS.
- Access to the manufacturer configuration method or software and any required installer credentials or default password.
- Knowledge of the operator APN and any APN username or password required for mobile data.
- A phone or management tool capable of sending SMS configuration commands if using SMS-based setup.
- Confirmation of the device default password if one is required for SMS commands (the sample default shown below is 000000).

## How This Tracker Connects to Plaspy

The Megastek MT400 is configured to send location and telemetry to the shared Plaspy server endpoint and port so the platform can ingest tracking messages and present them to users.

- The device uses GPRS data to connect to the configured Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device configuration; Plaspy accepts either and auto-detects the protocol.
- Once reporting is active, Plaspy receives position, status, and any supported telemetry for live monitoring and historical reporting.
- Plaspy displays device visibility, event reporting, and alerts based on incoming messages from the MT400.

## Common Configuration Workflow

1. Access the official Megastek configuration method for the MT400 (SMS commands, Megastek device manager, or vendor tool) as documented by the manufacturer.
2. Set the device ID or register the device identity using the device IMEI so it is identifiable when reporting.
3. Enter the Plaspy server on the device using either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set port 8888 for the server and choose UDP or TCP if the device requires an explicit transport selection.
5. Configure the operator APN and any APN username or password needed for GPRS connectivity.
6. Apply or save the configuration and restart the device if the device requires a restart to apply changes.
7. Validate that the device reports to Plaspy and appears in the platform with live updates.

## Example Configuration Commands

The MT400 supports SMS-based configuration. The sample commands below are adapted from the public manufacturer configuration content. The sample device password in these commands is 000000 (this is the default in the public sample). Replace placeholders with your actual values. Keep the command order when performing the initial setup.

- Notes on placeholders:
  - {{IMEI}} — replace with the device IMEI (use the device's 15-digit IMEI; some tools require the last 15 digits).
  - {{apn}} — the operator APN string required for your SIM card.
  - {{apnu}} and {{apnp}} — the optional APN username and APN password if required by the operator.

1) Set the device ID (replace {{IMEI}} with the device IMEI, last 15 digits if applicable)
```
M000000,22,{{IMEI}}
```

2) Set the operator APN (include APN username and password only if required)
```
M000000,23,{{apn}}
```
If your operator requires APN username and password:
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3) Set the update interval to 60 seconds
```
M000000,25,60
```

4) Set the GPRS server to Plaspy using the public server IP and port provided by Plaspy
```
M000000,24,56 54.85.159.138,8888
```
Note: The device may accept the domain name d.plaspy.com in place of the IP address depending on Megastek firmware. Plaspy supports both domain and IP targets but the exact supported syntax depends on device firmware.

5) Enable GPRS mode
```
M000000,21,2
```

Important: In these commands the prefix M000000 indicates the SMS command with the device password 000000. If your device password has been changed from the factory default, substitute the configured password in place of 000000.

## Configuration Notes

- SMS-based configuration is supported in the public sample commands; use the official Megastek method if you have a software or provisioning tool.
- Firmware and device tool versions can change command syntax and available parameters; always cross-check with Megastek documentation for your firmware revision.
- Choose UDP or TCP according to the device option; Plaspy accepts either and will auto-detect the protocol on first contact.
- Plaspy uses the same port 8888 for all supported devices, simplifying server configuration across a mixed deployment.
- Verify IMEI, device password, and APN settings before enabling GPRS so the device can authenticate and connect successfully.

## Why Use Plaspy with This Configuration

Using Plaspy with the Megastek MT400 centralizes location and medical telemetry into one monitoring platform, enabling caregivers and operations teams to see position, ECG events, and alerting in real time. The shared Plaspy server settings and automatic protocol detection simplify multi-device deployments and reduce per-device configuration complexity.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device-specific configuration methods, firmware behavior, and manufacturer details at Megastek https://www.megastek.com/. Device setup procedures and firmware commands can change over time, so confirm current instructions with the official manufacturer documentation before large scale deployment.
