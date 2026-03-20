---
slug: /suntech/st4945s/configuration
id: st4945s-configuration
sidebar_label: Configuration
title: Suntech - ST4945(S) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4945 S showing how to set the device to report to Plaspy using SMS and server settings
keywords:
  - Suntech ST4945S configuration
  - Suntech ST4945S setup
  - ST4945S Plaspy configuration
  - Suntech GPS tracker setup
  - ST4945S server configuration
  - GPS platform setup Suntech
  - Plaspy tracker integration
  - ST4945S SMS commands
  - asset tracking Suntech configuration
  - vehicle tracking ST4945S
---

# Suntech - ST4945(S) Configuration

This page covers the public configuration context for using the Suntech ST4945(S) tracker with Plaspy. It explains the practical server settings and setup workflow you can apply publicly to point a device to Plaspy, and it includes the manufacturer style SMS commands shown in public configuration examples. Use this page as a practical reference for preparing a ST4945 or ST4945S device to communicate with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools. The ST4945(S) can be configured via SMS commands as shown in public model guidance, but exact parameter names and behavior may differ by firmware or supplier tool, so confirm device-specific details with the manufacturer when needed.

## Configuration Overview

The goal of configuring a ST4945(S) for Plaspy is to prepare the tracker so it reliably reaches the Plaspy ingestion endpoint, reports location and event data, and appears in your Plaspy fleet dashboard. Public commands for this model commonly set the network APN, GPRS server, reporting intervals, and verify preset settings by SMS.

- Set the device network parameters and GPRS server to point at Plaspy so data is routed to the platform.
- Configure reporting intervals and motion or periodic reporting rules to match your monitoring needs.
- Validate the device identity and APN settings so cellular data or SMS commands are accepted by the tracker.
- Confirm the tracker reaches the Plaspy server and appears in the platform, then adjust reporting cadence or alerts.
- Use the provided SMS command examples as a template and replace placeholders like the device id and APN values.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport supported UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all devices

These values are the public Plaspy endpoint information to enter on the device or in SMS configuration commands so the ST4945(S) reports to the correct server and port.

## Typical Requirements Before Setup

- A charged ST4945 or ST4945S device with access to its IMEI and basic controls.
- An active cellular SIM provisioned for data with a valid APN for the target mobile network.
- Ability to send SMS messages to the device for SMS based configuration or access to the manufacturer configuration tool if available.
- Knowledge of the device IMEI so you can derive the device id used in public SMS commands.
- Optional: a test environment or spare device to confirm settings before wide deployment.

## How This Tracker Connects to Plaspy

The ST4945(S) is configured to report its location and device telemetry to a shared Plaspy server endpoint and port so the platform can ingest and display the data. Reports and events are sent over the chosen transport to the Plaspy listener where the protocol is detected automatically.

- Device network settings point to d.plaspy.com or the Plaspy IP 54.85.159.138 and port 8888.
- The device sends periodic position and event packets to Plaspy using either UDP or TCP as configured.
- Plaspy ingests location and status updates and presents them in dashboards, alerts, and APIs for monitoring.
- Event reports such as SOS, ignition, or low battery are forwarded to Plaspy for alerting and workflow automation.
- Plaspy detects the tracker protocol automatically so you do not need to preselect a protocol on the platform side.

## Common Configuration Workflow

1. Access the manufacturer configuration method recommended for your unit, typically SMS commands or the vendor provisioning tool.
2. Determine the device id from the IMEI and have your APN details ready.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address or server domain in the device configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or send the configuration to the device and save the settings.
6. Restart or power cycle the tracker if the device requires a reboot to apply new network parameters.
7. Validate that the device reports to Plaspy by checking incoming connections or using the device verification command shown below.

## Example Configuration Commands

The ST4945(S) public configuration examples use SMS commands. First, determine the device id as shown in the public example: take the IMEI, remove the final IMEI check digit, then use the last six digits of the remaining string. Example: with IMEI 123456789012345, remove the last digit to get 12345678901234, then the device id is 901234.

Placeholders used below:
- {{device_id}} = the six digit device id derived from the IMEI as described above
- {{apn}} = your mobile network APN
- {{apnu}} = APN username if required by your carrier (leave empty if not used)
- {{apnp}} = APN password if required by your carrier (leave empty if not used)
- For fields that are conditional, set the indicator to 1 if a username or password is provided, otherwise set to 0

1) Set the operator APN and GPRS server to point to Plaspy
- Send this SMS to the device, replacing placeholders and setting the username flag to 1 if apnu or apnp is provided, otherwise 0.

```
SA200NTW;{{device_id}};02;<username_flag>;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

2) Set the reporting interval to 60 seconds (public example)
- This SMS configures periodic reporting cadence.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Verify current preset settings
- Use this SMS to request preset configuration A for review.

```
SA200CMD;{{device_id}};02;PresetA
```

Notes about placeholders and flags
- {{apn}} is required for data reporting. If your APN requires credentials supply {{apnu}} and {{apnp}} and set <username_flag> to 1. If no credentials are required set <username_flag> to 0.
- Replace {{device_id}} with the six digit id calculated from the IMEI as described above.
- These commands are public-format examples; adapt exact field ordering to match the firmware release on your unit and confirm the command syntax in the official Suntech documentation if unsure.

## Configuration Notes

- Firmware variations and regional hardware revisions can change command syntax or available fields; always confirm command formats against the device firmware level.
- SMS based setup is supported in the public examples above and is useful where direct software tools are not available, but consider secure provisioning tools for large deployments.
- When the device requires a choice between TCP and UDP, select the transport most appropriate for your environment; Plaspy accepts either on port 8888 and automatically detects protocol on its side.
- The device id derivation step is important for command targeting; ensure the correct digits are used or the tracker will ignore the SMS configuration.
- Manufacturer documentation may include additional optional parameters or maintenance server settings not covered in the public examples.

## Why Use Plaspy with This Configuration

Using the ST4945(S) with Plaspy gives you a concise, repeatable setup to send location, telemetry, and event messages to a single Plaspy ingestion endpoint. The public configuration commands shown here let you point devices to Plaspy quickly, validate connectivity, and standardize reporting intervals so assets become visible in your platform for monitoring, alerts, and operational workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so also verify the latest setup information and command syntax with the manufacturer at http://www.suntechint.com/ before large scale deployment.
