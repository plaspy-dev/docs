---
slug: /minifinder/rex/configuration
id: rex-configuration
sidebar_label: Configuration
title: MiniFinder - Rex Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring MiniFinder Rex for Plaspy including required server settings SMS commands and practical setup steps
keywords:
  - MiniFinder Rex configuration
  - MiniFinder Rex setup
  - MiniFinder Rex Plaspy
  - Rex GPS tracker configuration
  - Rex server configuration
  - Plaspy tracker setup
  - MiniFinder tracker setup
  - Rex SMS configuration
  - GPS tracker integration Plaspy
  - Rex platform setup
---

# MiniFinder - Rex Configuration

This page describes the public configuration context for using the MiniFinder Rex tracker with the Plaspy platform. It compiles the practical server settings and example setup commands that are publicly available to prepare Rex for reporting to Plaspy. Use this guidance to configure connectivity and verify that the device appears in Plaspy once the device is correctly pointed at the platform.

Plaspy uses a shared server endpoint and consistent network settings across supported devices and automatically detects the tracker protocol once data reaches the server. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so follow the Rex manufacturer instructions where they differ from this general guidance.

## Configuration Overview

Configuring Rex for Plaspy focuses on preparing the device to send position and status data to Plaspy’s shared server endpoint and validating that the device is visible in the Plaspy platform. For Rex, public configuration methods include SMS-based commands that set timezone, APN, and the GPRS server address so the device can connect over cellular data.

- Point the tracker to the Plaspy server domain or IP so telemetry is routed to Plaspy.
- Configure the device APN so the tracker can use cellular data to reach Plaspy.
- Ensure the device transport is set to use UDP or TCP on the Plaspy port as required by the device.
- Validate the device reports GPS and status information to Plaspy and appears in the platform.
- Use manufacturer configuration tools or SMS commands provided by MiniFinder when available for Rex.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure UDP or TCP on port 8888 depending on device requirements
- Plaspy automatically detects the tracker protocol when data arrives at the server

Note: All devices in Plaspy use the same port 8888. Pointing a tracker at d.plaspy.com or the server IP on port 8888 is the expected public configuration for Plaspy compatibility.

## Typical Requirements Before Setup

- A charged and operational MiniFinder Rex device with access to the manufacturer configuration method (SMS, companion app, or configuration tool).
- An active cellular SIM with appropriate data and SMS capability and a correct APN for the mobile operator.
- Access to send SMS commands from a phone or the manufacturer tool if Rex is configured via SMS.
- Knowledge of the operator APN and any APN username or password fields required by the mobile provider.
- A stable workspace or field environment to verify GNSS reception and cellular connectivity.
- Administrative access to Plaspy so you can confirm device registration and telemetry visibility after configuration.

## How This Tracker Connects to Plaspy

MiniFinder Rex is configured to send location and status data over the cellular network to the shared Plaspy server endpoint and port. Once the device is pointed at Plaspy and cellular data is available, Plaspy will ingest the device messages and automatically determine the device protocol so telemetry can be shown on the platform.

- The tracker is configured to report to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Device transport can be set to UDP or TCP on port 8888 depending on the device configuration options.
- Location, battery status, signal level, and supported event notifications are forwarded to Plaspy for live mapping and alerts.
- Plaspy automatically detects the tracker protocol once messages reach the server, so separate protocol selection in Plaspy is not required.

## Common Configuration Workflow

1. Access the official MiniFinder configuration method for Rex (SMS commands, MiniFinder app, or support tool) as described in the manufacturer documentation.
2. Configure the device APN so the tracker can use cellular data to reach Plaspy (use your mobile operator APN values).
3. Enter the Plaspy server by hostname d.plaspy.com or by IP 54.85.159.138 depending on the device configuration interface.
4. Set the server port to 8888; remember Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP on port 8888 if the tracker requires explicit transport selection.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy and appears in the platform with location and status updates.

If Rex supports SMS-based configuration, sending the manufacturer SMS commands is a common method to perform these steps remotely. Follow the order recommended by the manufacturer for best results.

## Example Configuration Commands

The MiniFinder Rex supports SMS configuration. The public example commands for initial setup (sent as individual SMS messages) are:

- Set the time zone to UTC 0
```
tz+00
```

- Set the operator APN (replace placeholders with your operator values)
```
S1,[apn]{{apnu_and_apnp_if_required}}
```
Explanation: Replace [apn] with your operator APN. If your operator requires username and password, use the optional placeholders [apnu] and [apnp] where supported by the command syntax. The example shows how APN fields are represented; consult the manufacturer guide for exact formatted SMS if username or password must be supplied.

- Set the GPRS server to Plaspy by IP and port
```
IP1,54.85.159.138,8888
```

Notes on the commands above:
- Send each command as a separate SMS to the Rex device following the manufacturer SMS procedure.
- Preserve the order where recommended by the manufacturer (time zone, APN, then server settings) to ensure correct operation.
- The manufacturer syntax may allow specifying the server by hostname (d.plaspy.com) instead of the IP; use the method supported by your firmware.

## Configuration Notes

- Firmware and tool differences: exact SMS syntax and available fields can change between firmware versions and manufacturer tools; always verify against the latest MiniFinder Rex documentation.
- SMS versus software setup: Rex may support both SMS-based and app or PC-based configuration; use the method recommended for your firmware and installer workflow.
- Transport choice: choose UDP or TCP on port 8888 as required by your installation; Plaspy accepts both and auto-detects the protocol from incoming messages.
- Single port policy: Plaspy uses port 8888 for all supported devices, simplifying configuration across device models.
- APN placeholders: keep placeholders such as [apn], [apnu], and [apnp] when preparing SMS commands; replace them with your carrier values.

## Why Use Plaspy with This Configuration

Using MiniFinder Rex with Plaspy provides centralized visibility of tracking data, event alerts, and team coordination tools that are useful for handlers and organizations needing live situational awareness. Pointing Rex at Plaspy's shared server endpoint lets you ingest location, battery, and status updates into Plaspy’s mapping and reporting workflows so you can monitor devices in real time and review historical data.

To learn more about Plaspy and how it supports device integrations like MiniFinder Rex visit https://www.plaspy.com. For the most current device specific configuration methods and firmware details for MiniFinder Rex verify information on the manufacturer site https://minifinder.se/ since setup steps and command syntax can change with new firmware and revisions.
