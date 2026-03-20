---
slug: /cantrack/g900ls/configuration
id: g900ls-configuration
sidebar_label: Configuration
title: CanTrack - G900LS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the CanTrack G900LS to Plaspy with shared server settings and practical setup steps
keywords:
  - CanTrack G900LS configuration
  - CanTrack G900LS setup
  - CanTrack G900LS Plaspy
  - GPS tracker configuration
  - vehicle tracker setup
  - G900LS server configuration
  - Plaspy tracker integration
  - G900LS GPS platform setup
  - fleet tracker CanTrack
  - CanTrack GPS configuration
---

# CanTrack - G900LS Configuration

This page provides public configuration context for using the CanTrack G900LS with Plaspy. It summarizes the shared Plaspy server settings and practical setup steps that are commonly required to connect this model to the Plaspy platform while remaining aligned with manufacturer procedures and firmware differences.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and the vendor tools you use. Use this guide to prepare the G900LS for Plaspy and then confirm device-specific details with CanTrack documentation for the most current instructions.

## Configuration Overview

The goal of configuration is to point the G900LS to the Plaspy backend, confirm reliable connectivity, and enable the device to report location and events so it is visible in the Plaspy platform. This section highlights the practical outcomes you should expect when configuration is complete.

- Set the device server entry so the tracker sends data to Plaspy using the shared endpoint and port.
- Configure transport settings (UDP or TCP) if the device firmware requires an explicit selection.
- Verify cellular connectivity and APN settings so the G900LS can perform reliable LTE/GPRS IP sessions.
- Validate that the device appears in Plaspy and transmits the intended telemetry such as location, ignition state, and alarm events.
- Confirm reporting intervals and alarm settings to balance update frequency with data usage.

## Plaspy Server Settings

Use the following public settings when configuring the G900LS for Plaspy. Plaspy uses the same port for all supported devices and detects tracker protocols automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol, so the platform will interpret incoming device messages once they arrive on the shared port

## Typical Requirements Before Setup

- Ensure the G900LS is powered and installed according to CanTrack instructions for the chosen wiring variant.
- Confirm a working cellular service and a compatible SIM card with data enabled for LTE/GPRS connectivity.
- Obtain correct APN credentials from the mobile network operator for the installed SIM.
- Have access to the official CanTrack configuration tool or SMS command set provided by the manufacturer.
- Make note of device identifiers such as IMEI so you can locate the device in Plaspy after it begins reporting.
- Ensure you can restart the device after applying configuration if the firmware requires a reboot to activate changes.

## How This Tracker Connects to Plaspy

When configured, the G900LS opens an IP session and uploads position and telemetry data to the shared Plaspy endpoint and port. Plaspy receives messages on the same port for all devices and uses automatic protocol detection to parse incoming packets for the appropriate tracker protocol.

- The tracker is set to send data to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on firmware options and installer preference.
- Location updates, ignition (ACC) status, power cut and backup battery events, and alarm messages are transmitted to Plaspy for mapping and alerts.
- Plaspy correlates received messages with device identifiers so the device becomes visible in the platform and can be managed via rules and reports.
- After the initial configuration and connectivity check, confirm that telemetry frequency and alarm thresholds match your operational needs.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G900LS, for example the manufacturer’s configuration tool or supported SMS commands.
2. Enter the Plaspy server as d.plaspy.com or alternatively use the server IP 54.85.159.138 if required by the configuration interface.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Configure and verify APN settings for the installed SIM so the device can establish an IP connection.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to activate changes.
7. Validate that the device reports to Plaspy by checking for initial location and status messages in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and the method to send them will vary by CanTrack firmware and the management tool you use. Some installers use the official CanTrack PC tool, others use SMS-based commands or a vendor mobile app. In general terms, you will use those tools to set the server host to d.plaspy.com or 54.85.159.138 and the port to 8888, and to select UDP or TCP if required.

Typical values to enter in the manufacturer tool or SMS command include:
- Server host: d.plaspy.com
- Server IP: 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP
- APN and APN credentials as required by the network operator

Consult the CanTrack user manual for the exact command syntax or configuration file format for your G900LS firmware version.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available configuration options; always check CanTrack documentation for the specific device revision.
- TCP and UDP options are available; choose the transport that best fits your network reliability requirements. Plaspy accepts both on the shared port 8888.
- Plaspy uses the same port for all supported devices and applies automatic protocol detection to incoming messages, reducing the need for manual protocol selection in many cases.
- APN and cellular settings must be correct for IP reporting; incorrect APN is the most common cause of failed uploads.
- If you use SMS-based configuration, confirm the SMS command set and response behavior for your G900LS firmware before deploying devices.

## Why Use Plaspy with This Configuration

Pairing the CanTrack G900LS with Plaspy gives fleet and security teams a practical path to real time visibility, event-driven alerts, and historical reporting using a single shared backend endpoint. The combination of G900LS telemetry and Plaspy’s automatic protocol detection simplifies integration and helps reduce setup steps required to get devices reporting on the platform.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup and firmware details on the manufacturer site https://www.cantrackgps.com/ to ensure the configuration steps match your unit and firmware version.
