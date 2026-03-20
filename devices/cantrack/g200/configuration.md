---
slug: /cantrack/g200/configuration
id: g200-configuration
sidebar_label: Configuration
title: CanTrack - G200 Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for configuring the CanTrack G200 to report to Plaspy with the public server settings and workflow
keywords:
  - CanTrack G200 configuration
  - CanTrack G200 setup
  - CanTrack G200 server configuration
  - G200 Plaspy setup
  - G200 GPS tracker configuration
  - CanTrack GPS configuration
  - Plaspy tracker setup
  - vehicle tracking G200
  - asset tracking G200
  - GPRS GPS tracker setup
---

# CanTrack - G200 Configuration

This page describes the public configuration context for using the CanTrack G200 with Plaspy. It focuses on the practical server settings and workflow needed to prepare the device to report location and status to the Plaspy platform, using the documented shared server endpoint and port that Plaspy requires.

Plaspy uses a single shared server endpoint and port for supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The G200 communicates over GPS satellites and GSM GPRS networks and includes features such as ultra long standby, multiple positioning methods, anti tamper alarm, and memory storage which can affect how you configure reporting and power saving modes.

## Configuration Overview

The goal of configuring the G200 for Plaspy is to direct the tracker to the Plaspy server endpoint and confirm that it successfully reports position and event data. Configuration prepares the device to connect over the cellular network and ensures visibility in the Plaspy platform for live tracking, alerts, and history.

- Point the device at the Plaspy server endpoint and confirm transport protocol selection when required.
- Ensure mobile data settings such as APN are set so the GPRS link can carry tracking packets.
- Configure reporting intervals and power saving modes according to installation needs to balance battery life and location fidelity.
- Validate connectivity by confirming the device registers and sends data to the Plaspy platform.
- Test key events such as movement, geo fence, and tamper alarms to verify platform visibility.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint and port that the G200 must target for reporting to the platform.

## Typical Requirements Before Setup

- A powered and reachable CanTrack G200 device installed or temporarily accessible for configuration.
- Active GSM GPRS service on a SIM card with a working data plan and operator APN settings configured.
- Access to the official CanTrack configuration method or software for the G200 model.
- Basic information about desired reporting intervals and power saving modes to apply appropriate settings.
- A method to confirm device communications such as a temporary install, test bench, or vehicle with cellular coverage.
- Your CanTrack account or device identifier ready for use when validating the device in Plaspy.

## How This Tracker Connects to Plaspy

The CanTrack G200 sends its location and device data over the cellular GPRS network to the Plaspy server endpoint and port. Once configured to target the Plaspy server, the platform will receive telemetry and present it in the Plaspy interface for monitoring and alerts.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device firmware and configuration choice.
- Plaspy identifies the device protocol automatically once packets arrive at the shared port.
- Location updates, alerts, and stored data uploads are forwarded to the Plaspy platform for visualization and history.
- Visibility in Plaspy allows monitoring of movement, tamper events, and other supported alerts.

## Common Configuration Workflow

1. Access the official CanTrack G200 configuration method or software provided by the manufacturer.
2. In the server settings, enter the domain d.plaspy.com or the IP 54.85.159.138 as the destination.
3. Set the server port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose the transport protocol UDP or TCP if the device prompts for a selection.
5. Configure required network parameters such as APN for the SIM card so GPRS data is available.
6. Apply or save the configuration on the device through the official tool or command method.
7. Restart or power cycle the device if required by the manufacturer to apply new settings.
8. Validate that the device reports to Plaspy by checking the device list and recent positions in the Plaspy platform.

## Example Configuration Commands

The public model configuration content provided for the G200 does not include specific command strings for configuring server settings. Exact commands and their syntax can vary by firmware version and by the manufacturer configuration tool. Use the official CanTrack configuration software, mobile app, or documented command set for the G200 to apply the server domain or IP and port 8888, selecting UDP or TCP if prompted.

If you have manufacturer supplied command examples, put them into the official configuration tool or send them following the vendor instructions. For APN placeholders or similar, supply your operator APN values where required.

## Configuration Notes

- Firmware differences can change how server entries and transport choices are entered; follow the G200 firmware documentation for exact syntax.
- Selecting UDP or TCP can affect reliability and how packets are retried; choose the transport that matches your installation needs and the device firmware guidance.
- Ensure the device APN and mobile data are correctly configured before testing connectivity to d.plaspy.com or 54.85.159.138 on port 8888.
- If using memory and store and forward behavior, confirm how the G200 uploads historical data once a connection to Plaspy is established.
- Always verify the configuration process with CanTrack documentation or support for the G200 to account for vendor tools and revisions.

## Why Use Plaspy with This Configuration

Configuring the CanTrack G200 to report to Plaspy provides a simple and consistent endpoint for device telemetry, enabling centralized visibility and operational monitoring for vehicles and assets. Using the Plaspy shared server and automatic protocol detection reduces per device configuration complexity and helps teams standardize deployment across many trackers.

Learn more about Plaspy and its device compatibility at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer instructions confirm details on the official CanTrack site https://www.cantrackgps.com/.
