---
slug: /coban/bn_401c/configuration
id: bn_401c-configuration
sidebar_label: Configuration
title: Coban - BN-401C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-401C and Plaspy compatibility with shared server settings
keywords:
  - Coban BN-401C configuration
  - BN-401C setup
  - Coban tracker configuration
  - Plaspy server configuration
  - GPS tracker setup
  - motorcycle tracker configuration
  - BN-401C Plaspy setup
  - fleet tracking configuration
  - GPS platform integration
  - device SMS configuration
---

# Coban - BN-401C Configuration

This page documents the public configuration context for using the Coban BN-401C tracker with Plaspy. It summarizes the practical steps and shared server settings required to direct BN-401C messages to Plaspy, and it collects the commonly used SMS configuration commands published for this model. Use this guide to prepare the device and validate connectivity before onboarding trackers into your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The BN-401C supports SMS and GPRS based configuration and can be set to report over TCP or UDP to the Plaspy endpoint shown below; follow manufacturer instructions when applying commands and verify firmware-specific behavior where needed.

## Configuration Overview

The goal of this configuration is to prepare the BN-401C so it reliably reports position and event messages to Plaspy over the shared server endpoint and port. Configuration commonly includes setting the device APN and credentials, assigning the Plaspy server address, choosing the transport protocol, and enabling an appropriate report interval so Plaspy receives timely location and alarm data.

- Configure the device APN and optional APN username and password for GPRS data.
- Point the tracker to the Plaspy server endpoint for real time reporting.
- Select TCP or UDP transport if the firmware requires an explicit choice.
- Set update intervals so position fixes are reported at the required frequency.
- Validate connectivity and confirm the device is visible in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices can send protocol-specific messages without per device protocol mapping

Note that Plaspy uses the same port 8888 for all supported devices and automatically detects the protocol used by each tracker.

## Typical Requirements Before Setup

- A SIM card with active data and SMS capability installed in the BN-401C and sufficient cellular coverage for GPRS or LTE.
- Knowledge of the APN settings supplied by your mobile operator (APN, APN username, and APN password).
- Access to an SMS capable phone or the manufacturer configuration tool to send configuration SMS commands to the device.
- Power applied to the tracker and a charged internal backup battery if testing without vehicle power.
- The device default SMS password if configuring by SMS; the public example commands below use the default password 123456.
- Access to official Coban documentation or support resources to verify any firmware differences.

## How This Tracker Connects to Plaspy

The BN-401C is configured to send GNSS fixes and event messages to the shared Plaspy server endpoint and port. Plaspy ingests the device messages over TCP, UDP, or SMS and maps location and alarm data into the platform for live monitoring and reporting.

- The tracker sends GPRS messages to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device firmware or configuration preference.
- Plaspy automatically detects the protocol of incoming tracker messages and processes data without per device protocol selection.
- Events such as SOS, movement, ACC changes, and low battery are forwarded to Plaspy for alerts and historical records.
- After configuration, validate that the BN-401C appears in Plaspy and updates position and status information.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the BN-401C, typically SMS commands or Coban supplied configuration tools.
2. Prepare the APN, APN username, and APN password provided by your mobile operator.
3. Enter d.plaspy.com or 54.85.159.138 as the device server address and set the server port to 8888.
4. Choose UDP or TCP transport if the device requires a transport selection, or leave default if the device auto-selects.
5. Apply or save the configuration on the device; for SMS setup this means sending the appropriate SMS commands.
6. Restart the device if required by the firmware or after server and APN changes.
7. Validate that the device reports to Plaspy by checking device connectivity and recent position updates in the platform.

## Example Configuration Commands

The BN-401C can be configured via SMS commands. The commands below are the public SMS command examples that have been published for this model. The default device password shown in these examples is 123456. Preserve and replace placeholders as described.

- Factory reset (optional initial setup)
```
begin123456
```

- Set the time zone to UTC 0
```
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN)
```
apn123456 {{apn}}
```

- Set the APN username and password (replace placeholders as required)
```
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port
```
adminip123456 54.85.159.138 8888
```
Note: You can also use the server domain in manufacturer tools if supported; Plaspy server domain is d.plaspy.com and Plaspy supports the same port 8888 for all devices.

- Set a regular location update interval (example pattern)
```
fix060s060s***n123456
```
Explanation: the exact timing tokens depend on device firmware. Use the manufacturer reference for custom intervals.

- Switch to GPRS mode and select transport (example variants)
```
gprs123456,1,1
```
or
```
gprs123456
```
Explanation: some firmware variants accept a compact gprs command; other versions require parameters to set mode and transport.

- Check current settings (verification)
```
check123456
```

- Enable extended protocol or digital sensor reporting (example to improve digital sensor transmission)
```
protocol123456 18
```

Placeholders explained:
- {{apn}} — your mobile operator APN string required for data.
- {{apnu}} — APN username if the operator requires one.
- {{apnp}} — APN password if the operator requires one.

Always verify the exact command syntax for your device firmware version and only send SMS commands from a trusted phone number.

## Configuration Notes

- Firmware differences matter: command syntax and supported parameters can vary by firmware revision. Confirm syntax with Coban documentation for your unit.
- SMS based setup is public and practical for remote installations, but confirm whether your carrier blocks configuration SMS or requires specific SMS sender numbers.
- TCP versus UDP: choose based on your installation needs and firmware support; Plaspy accepts both and detects the protocol automatically on port 8888.
- Keep the default password in mind: the public examples use 123456. Change default credentials if your workflow and firmware allow to improve operational security.
- Use the manufacturer supplied configuration tool or support guides when available for larger deployments or batch configuration.

## Why Use Plaspy with This Configuration

Using the BN-401C with Plaspy provides straightforward real time tracking and event visibility for motorcycle and small vehicle fleets. The device streams position and alarm messages to Plaspy where they can be monitored on live maps, used to trigger alerts, and included in historical reports for compliance and operational analysis.

Learn more about how Plaspy handles device ingestion and fleet management at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and device setup methods can change over time, so verify the most current device specific instructions on the Coban website at https://www.coban.net/.
