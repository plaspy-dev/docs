---
slug: /jointech/jt301a/configuration
id: jt301a-configuration
sidebar_label: Configuration
title: Jointech - JT301A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Jointech JT301A and Plaspy integration with practical server settings and SMS commands
keywords:
  - Jointech JT301A configuration
  - JT301A setup for Plaspy
  - Jointech asset tracker configuration
  - JT301A server configuration
  - JT301A SMS configuration
  - Plaspy tracker setup
  - JT301A APN settings
  - asset tracker Plaspy integration
  - JT301A timed LBS tracking
  - Jointech tracker documentation
---

# Jointech - JT301A Configuration

This page documents the public configuration context for using the Jointech JT301A asset tracker with Plaspy. It focuses on the practical, publicly available setup steps and the exact Plaspy server settings you need to apply so the JT301A can report telemetry and status into Plaspy dashboards and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer configuration steps can vary by firmware, hardware revision, installation type, and vendor tools, so this page explains the Plaspy-specific settings and includes the JT301A SMS commands that are publicly documented for configuring GPRS and APN values.

## Configuration Overview

The goal of JT301A configuration for Plaspy is to prepare the device to send scheduled LBS location updates and sensor status to the Plaspy ingestion endpoint so assets become visible and actionable in the platform.

- Configure the device to point at the Plaspy server so telemetry arrives at the correct endpoint.
- Provide APN and optional APN credentials so the tracker can use cellular data for timed reporting.
- Select the transport option if required and set the shared Plaspy port so messages are accepted.
- Validate connectivity and confirm the device begins reporting in Plaspy.
- Enable sensor reporting for door open and illumination events so Plaspy receives alerts and status changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and the same port 8888 is used for all supported devices

## Typical Requirements Before Setup

- A charged and powered JT301A unit ready for configuration.
- A working SIM card with data or SMS capability inserted if required by your deployment.
- The tracker device ID known and available for use in SMS commands or manufacturer tools.
- APN name and optional APN user and APN password information from your cellular provider.
- Access to an SMS capable phone or the official Jointech configuration tool to send configuration commands.
- Basic access to Plaspy account or platform contact so you can confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

The JT301A is configured to report scheduled LBS location fixes and sensor events to the shared Plaspy ingestion endpoint and port. Plaspy receives these timed messages, maps them to the device ID, and provides visibility, alerts, and historical playback in the platform.

- The tracker sends scheduled telemetry and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure the device to use UDP or TCP on port 8888; Plaspy will accept either and automatically determine the protocol.
- Sensor events such as door open or illumination changes are transmitted as status messages to Plaspy for alerting.
- Plaspy ingests the incoming messages and associates them with the device ID so data is visible in dashboards and reports.

## Common Configuration Workflow

1. Access the official Jointech configuration method for the JT301A such as SMS commands or the manufacturer software.
2. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Provide the APN and, if required, the APN user and APN password from your mobile provider.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking for the device ID and incoming telemetry on the platform.

## Example Configuration Commands

The JT301A can be configured using SMS messages. Send these public commands in the shown order. Replace placeholders with your actual values.

- Type or enter the device ID in the command as {{trackerID}} before sending.

1. Set the GPRS server, port, and APN
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```
- Replace {{trackerID}} with the device ID.
- Replace {{apn}} with your cellular provider APN name.
- This command sets the GPRS server IP, port 8888, and the APN used for data.

2. (Optional) Set APN user and password when your provider requires authentication
```text
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```
- Replace {{apnu}} with the APN username if required.
- Replace {{apnp}} with the APN password if required.
- Send this command only if your network operator requires APN authentication.

Notes on placeholders
- {{trackerID}} is the device identifier printed on the device or provided by the manufacturer.
- {{apn}} is the access point name string for your cellular provider.
- {{apnu}} and {{apnp}} are optional APN credentials required by some carriers.

These commands are the publicly documented SMS configuration pattern for JT301A GPRS and APN setup. After sending, allow the device to apply settings and restart if necessary.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or supported parameters; consult manufacturer documentation for your unit.
- APN username and password commands are optional and only needed when your operator requires authentication.
- Choose UDP or TCP according to network reliability and your installation needs. Plaspy supports both and will auto detect the protocol.
- The JT301A supports SMS based configuration in public documentation, so have an SMS capable phone available when following these commands.
- Always confirm that the device reports to Plaspy after configuration before deploying the asset in the field.

## Why Use Plaspy with This Configuration

Using the JT301A with Plaspy gives logistics teams economical, long-duration asset visibility with periodic LBS updates and sensor driven alerts. The combination of timed reporting, door and illumination detection, and Plaspy ingestion enables monitoring and event notification without the power and data cost of continuous GPS tracking.

Learn more about how Plaspy can ingest JT301A telemetry and provide dashboards and alerts at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer details verify setup guidance on the official Jointech site https://www.jointcontrols.com/
