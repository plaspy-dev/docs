---
slug: /trackerking/dk05/configuration
id: dk05-configuration
sidebar_label: Configuration
title: TrackerKing - DK05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the TrackerKing DK05 with Plaspy using shared Plaspy server settings
keywords:
  - TrackerKing DK05 configuration
  - TrackerKing DK05 setup
  - TrackerKing DK05 Plaspy
  - DK05 GPS tracker configuration
  - DK05 server setup for Plaspy
  - pet GPS tracker configuration
  - Plaspy tracker configuration
  - TrackerKing DK05 integration
  - DK05 collar tracker setup
  - GPS tracker Plaspy compatibility
---

# TrackerKing - DK05 Configuration

This page documents the public configuration context for using the TrackerKing DK05 with the Plaspy platform. It focuses on the practical settings and workflow needed to point a DK05 tracker at Plaspy so the device can deliver real time location, movement alerts, and telemetry to your Plaspy account. It does not replace manufacturer manuals but provides the Plaspy-specific server information and recommended steps for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the tracker reports to Plaspy. Exact manufacturer-side setup steps can vary depending on DK05 firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use this guide to prepare the DK05 for Plaspy and always confirm device-specific steps with the official TrackerKing documentation.

## Configuration Overview

This configuration process prepares the DK05 to communicate reliably with Plaspy, validates connectivity over cellular networks, and ensures the tracker appears in the Plaspy dashboard for live tracking and alerts.

- Configure the DK05 to report its GPS position and telemetry to the Plaspy server endpoint.
- Ensure the tracker has cellular connectivity and a usable power source during setup and testing.
- Choose and set the correct transport type if the device requires selecting UDP or TCP.
- Save and apply settings on the TrackerKing configuration tool or app, then verify the device registers in Plaspy.
- Validate telemetry, movement alerts, and battery reporting from the DK05 in the Plaspy interface.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects
- All devices in Plaspy use the same port 8888 for device reporting

## Typical Requirements Before Setup

- A powered DK05 with sufficient battery charge for configuration and initial testing.
- An active cellular connection appropriate for the DK05 4G and 2G Cat 1 quad band GSM hardware and a working SIM if the device requires one.
- Access to the official TrackerKing configuration method such as the manufacturer companion app or configuration portal.
- A Plaspy account and access to the Plaspy dashboard to confirm device appearance and telemetry after configuration.
- Knowledge of the device firmware version and any vendor-specific configuration steps required by that firmware.

## How This Tracker Connects to Plaspy

When configured, the DK05 sends GPS position and telemetry data over the cellular network to the shared Plaspy server endpoint and port. Plaspy receives those reports, automatically identifies the tracker protocol, and exposes position updates, alerts, and history in the Plaspy dashboard and mobile clients.

- The DK05 reports GPS location and movement telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- The device can be set to use UDP or TCP transport on port 8888 when required by the tracker configuration interface.
- Plaspy automatically detects the tracker protocol and translates device reports into live map positions and events.
- Event reporting such as movement alerts, geo fence breaches, and low battery notices are forwarded into Plaspy for notifications and history.
- After initial setup, operational monitoring and history playback are available from the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or software for the DK05, such as the manufacturer companion app or configuration portal.
2. In the device network or server settings, enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device reporting port to 8888 as required by Plaspy.
4. If the DK05 configuration requires a transport selection, choose UDP or TCP on port 8888 according to your preference or network conditions.
5. Apply or save the configuration changes in the TrackerKing tool or app.
6. Restart the DK05 if the manufacturer recommends a reboot for new settings to take effect.
7. Validate that the DK05 reports to Plaspy by checking device status and recent positions in the Plaspy dashboard.

## Example Configuration Commands

The DK05 model configuration content provided here does not include public console or SMS commands. Manufacturer configuration methods vary by firmware and toolset, and TrackerKing typically provides a companion app or web portal for device setup. Use the TrackerKing app or official configuration tool to enter the Plaspy server settings shown above. If you have device-specific command strings from TrackerKing, apply them following the vendor documentation and then confirm connectivity to d.plaspy.com or 54.85.159.138 on port 8888.

## Configuration Notes

- Firmware differences can affect where and how server settings are entered; always verify the correct procedure for your DK05 firmware revision.
- Choose UDP or TCP transport based on network reliability and your own testing; both transports are supported by Plaspy on port 8888 and Plaspy will auto detect the protocol.
- Ensure the SIM and cellular service are active and data is available for the DK05 to reach Plaspy over the cellular network.
- Test the device outdoors where GNSS reception is good to confirm accurate position reporting in Plaspy.
- Keep the TrackerKing companion app or configuration tool and the DK05 firmware up to date for the most reliable integration.

## Why Use Plaspy with This Configuration

Using the DK05 with Plaspy gives pet owners centralized visibility into real time location, movement alerts, and historical routes. The DK05 hardware is optimized for collar use and, when pointed at the shared Plaspy server endpoint and port, provides the telemetry Plaspy needs to deliver alerts, geo fence monitoring, and battery notifications from a single management platform.

To learn more about Plaspy and how it can centralize tracking for DK05 devices visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and manufacturer guidance for the DK05, review TrackerKing documentation at https://trackerking.cn/. Manufacturer specifications and setup methods can change over time so always confirm current instructions on the TrackerKing site.
