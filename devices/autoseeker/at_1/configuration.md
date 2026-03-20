---
slug: /autoseeker/at_1/configuration
id: at_1-configuration
sidebar_label: Configuration
title: Autoseeker - AT-1 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Autoseeker AT-1 showing Plaspy server values and practical configuration steps for reliable tracking
keywords:
  - Autoseeker AT-1 configuration
  - Autoseeker AT-1 setup
  - AT-1 Plaspy configuration
  - Autoseeker GPS tracker configuration
  - AT-1 server configuration
  - personal GPS tracker setup
  - Plaspy tracker integration
  - LTE M tracker setup
  - NB IoT tracker configuration
  - Geofence and SOS tracker setup
---

# Autoseeker - AT-1 Configuration

This page describes the public configuration context for using the Autoseeker AT-1 4G Mini Micro GPS Tracker with Plaspy. It focuses on the practical server settings and the common setup workflow that allow the AT-1 to report location, SOS events, geofence triggers, and telemetry into the Plaspy platform. Use this guide alongside the device manufacturer documentation for device specific commands and firmware notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so device records can appear in the platform with minimal per-device protocol selection. Exact manufacturer side setup steps for the AT-1 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so always confirm any device level commands or interfaces against Autoseeker documentation.

## Configuration Overview

This configuration prepares the AT-1 to send its telemetry to the Plaspy ingestion endpoint so the device becomes visible in the Plaspy dashboard and APIs. The primary goal is to point the tracker at the Plaspy server, choose a transport where required, and verify that packets are received and parsed by Plaspy.

- Configure the device to report to the Plaspy server endpoint so location and events are routed into Plaspy.
- Select transport mode if the AT-1 interface requires UDP or TCP selection.
- Ensure cellular connectivity and reporting intervals are appropriate for battery life and monitoring needs.
- Validate the device is visible in the Plaspy platform and confirm SOS and geofence events are received.
- Save and, if necessary, restart the tracker so new server settings take effect.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AT-1. These are the shared values used by Plaspy for supported trackers.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration interface
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the AT-1 has a charged internal battery and is powered on.
- Verify the device has an active cellular connection on a supported network for LTE‑M, NB‑IoT, or GSM fallback.
- Obtain access to the official Autoseeker configuration method such as the manufacturer app, web tool, or SMS command list.
- Have any required credentials, device identifier, or IMEI available for device registration in Plaspy.
- Ensure you can apply and save settings on the tracker and perform a restart if required by the device firmware.
- Prepare a test plan to validate location, SOS, and geofence event visibility in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the AT-1 will send its telemetry and event packets to the shared Plaspy endpoint and port so the platform can ingest and display the data. Plaspy’s automatic protocol detection reduces the need for manual protocol selection in many cases, but transport selection (UDP or TCP) may still be required in the device settings.

- The tracker reports location fixes to d.plaspy.com or 54.85.159.138 at the configured reporting intervals.
- Telemetry such as battery status, SOS button events, and geofence triggers are included in the packets sent to Plaspy.
- Choosing UDP or TCP in the device configuration determines how packets are transported to port 8888.
- Plaspy automatically detects the tracker protocol once packets arrive on port 8888 so the device is parsed correctly in the platform.
- After successful setup the device becomes visible in Plaspy for real time monitoring, alerts, and history playback.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-1 such as the manufacturer app, web tool, or documented SMS/command interface.
2. Enter the Plaspy server host either as d.plaspy.com or as the IP address 54.85.159.138 according to the device tool preferences.
3. Set the device to use port 8888 for reporting to Plaspy.
4. Choose UDP or TCP if the device requires a transport selection before saving settings.
5. Apply or save the configuration on the tracker using the manufacturer tool or command interface.
6. Restart the device if the configuration procedure or firmware requires a reboot for new network settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility and sample telemetry in the Plaspy platform.

## Example Configuration Commands

The Autoseeker AT-1 model configuration commands vary by firmware and the vendor tool in use. The exact commands or message formats are provided by Autoseeker and may include SMS or serial commands for some firmware versions. Because commands and formats are manufacturer specific and were not supplied here, consult the Autoseeker documentation or the device configuration interface for the exact command syntax for pointing the device to d.plaspy.com or 54.85.159.138 on port 8888.

If you have a manufacturer command list from Autoseeker that includes example set server, set port, or verification commands, include those exact commands here when following your internal configuration process.

## Configuration Notes

- Firmware differences can change the configuration steps and the exact command syntax. Verify commands against the installed firmware version.
- Many devices allow selecting UDP or TCP. Choose based on the manufacturer guidance; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Installer practices vary by market and vendor. Use the official Autoseeker configuration tool or documentation for the most accurate steps.
- Confirm cellular network compatibility when using LTE‑M or NB‑IoT and check for GSM fallback behavior in areas where LTE‑M or NB‑IoT coverage is limited.
- After applying settings, validate reporting in Plaspy to confirm geofence, SOS, and telemetry are parsed as expected.

## Why Use Plaspy with This Configuration

Configuring the Autoseeker AT-1 to report to Plaspy gives caregivers and operations teams centralized visibility into location, SOS alerts, and geofence events in a single platform. The combination of the AT-1’s low power cellular links and Plaspy’s ingestion endpoint enables practical long duration monitoring with actionable alerts and history playback for incident review.

To learn more about Plaspy and how the platform integrates telemetry from devices like the AT-1 visit https://www.plaspy.com. For device specific command syntax, firmware notes, and the latest setup instructions confirm details on the manufacturer site https://autoseekergps.com/ as device behavior and configuration methods can change over time.
