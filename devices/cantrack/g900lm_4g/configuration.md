---
slug: /cantrack/g900lm_4g/configuration
id: g900lm_4g-configuration
sidebar_label: Configuration
title: CanTrack - G900LM-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the CanTrack G900LM-4G and required Plaspy server settings for platform integration
keywords:
  - CanTrack G900LM-4G configuration
  - G900LM-4G setup
  - CanTrack tracker Plaspy
  - Plaspy tracker configuration
  - G900LM-4G server configuration
  - G900LM-4G GT06 setup
  - GPS tracker configuration guide
  - vehicle tracker setup Plaspy
  - fleet tracking G900LM-4G
  - CanTrack configuration guide
---

# CanTrack - G900LM-4G Configuration

This page explains the public configuration context for using the CanTrack G900LM-4G with Plaspy. It summarizes the required Plaspy server settings, the typical prerequisites for installation, and practical configuration guidance based on the device family features and published command set. Use this guide to prepare the device to communicate with Plaspy for real time tracking and fleet monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary depending on firmware version, hardware revision, installation wiring (4-pin or 8-pin), and vendor configuration tools. The G900LM-4G is a hard-wired LTE/GSM vehicle tracker with GT06-style protocol compatibility and remote command support; follow manufacturer documentation for device-specific command syntax and safety precautions.

## Configuration Overview

Configuring the G900LM-4G for Plaspy means preparing the tracker to report location and status to Plaspy’s shared server endpoint, validating network connectivity, and ensuring the device appears in the Plaspy platform for live maps and alerts. The objective is a reliable, repeatable setup that places the device on Plaspy’s common server and port while preserving the device’s alarm and relay functionality.

- Set the device to report to Plaspy’s shared server endpoint so telemetry flows into the platform.
- Configure the network access including APN and any SIM data settings required by the tracker.
- Select the transport mode the device requires (UDP or TCP) and set the Plaspy port.
- Validate reporting and alarms so live location and events appear in Plaspy.
- Save and, if required, restart the device so new settings take effect.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G900LM-4G to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public endpoint and port that Plaspy devices use. Enter either the domain or the IP as your tracker configuration allows, and ensure the tracker is set to use port 8888.

## Typical Requirements Before Setup

- A compatible SIM card with an active data plan and the correct APN settings for the cellular provider.
- Access to the device wiring (4-pin or 8-pin variant) and a stable power connection within the device operating voltage range.
- The manufacturer configuration method: SMS commands, local configuration tool, or vendor software as provided by CanTrack.
- Basic knowledge of the device command set and any placeholders required by those commands (for example APN values).
- A safe test environment to validate reporting to Plaspy before full deployment.
- Access to Plaspy credentials or account details so you can verify the device appears in the platform.

## How This Tracker Connects to Plaspy

The G900LM-4G sends location and status data to Plaspy over GPRS/TCP-IP using GT06-series style protocol compatibility. When configured to report to Plaspy’s server and port, telemetry and alarm packets arrive at Plaspy where the platform automatically detects the tracker protocol and interprets the messages for live tracking and event reporting.

- The tracker transmits periodic location packets to the Plaspy server endpoint.
- Alarms such as ignition, movement, speeding, and power cut report to Plaspy for immediate visibility.
- Remote relay control and command responses are sent through the same server endpoint and port.
- Plaspy receives telemetry on the shared port and maps the device messages to the correct protocol automatically.
- After configuration, device status and historical data become available in the Plaspy platform for monitoring and reporting.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by the manufacturer or vendor (SMS commands, PC tool, or mobile configuration utility).
2. Enter the Plaspy server address by specifying either d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 in the device configuration.
4. If the device requires a transport choice, select UDP or TCP and ensure it matches the device capability.
5. Configure APN and any SIM related values required by the tracker so it can register on the mobile network.
6. Apply or save the configuration and, if the device documentation instructs, restart the device for changes to take effect.
7. Validate that the device reports to Plaspy by checking for incoming location and status updates in the Plaspy platform.

## Example Configuration Commands

The G900LM-4G family commonly supports SMS and platform commands for APN, server, position queries, timers, relay control, and alarms. Exact command syntax can vary by firmware and regional firmware builds. The items below are representative command names and example forms drawn from the device family documentation; confirm exact syntax with the manufacturer documentation before use.

- Set APN (placeholder APN must be replaced with your carrier APN):
```
APN,{{apn}}
```
- Set server by domain or IP and port (replace placeholders with actual values if using a specific syntax required by your firmware):
```
SERVER,d.plaspy.com,8888
```
or
```
SERVER,54.85.159.138,8888
```
- Query current position (example query command name):
```
WHERE#
```
- Request device status or version:
```
STATUS#
```
- Configure reporting timers (example form):
```
TIMER,T1,T2#
```
- Remote relay control example (labelled RELAY command family in device docs):
```
RELAY,A#
```
- Alarm toggles and basic alarm commands (examples of available command labels):
```
SENALM#
POWERALM#
ACCALM#
```

Note: The exact command prefixes, delimiters, and terminators may differ by firmware. Use these examples as a reference and verify the exact SMS or tool command format against CanTrack documentation.

## Configuration Notes

- Firmware and regional hardware variants can change command syntax and supported features; always confirm with the current CanTrack documentation for your device variant.
- Choose UDP or TCP based on installer guidance and any network constraints; Plaspy accepts both on the shared port 8888 and detects the tracker protocol automatically.
- When using SMS-based setup, ensure the SIM has sufficient SMS permissions and that remote commands are enabled in device settings if required.
- Save changes and perform a controlled restart when instructed by the manufacturer to ensure settings take effect.
- Validate connectivity by monitoring the device entry and live updates in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the CanTrack G900LM-4G with Plaspy gives organizations continuous visibility into vehicle location, status, and alarm events through a single shared server endpoint. The tracker’s hard-wired installation options, GT06-series compatibility, and remote command capabilities pair well with Plaspy’s automatic protocol detection and centralized telemetry handling for fleet monitoring and anti-theft workflows.

To learn more about how Plaspy works with compatible trackers and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation instructions consult the official CanTrack documentation at https://www.cantrackgps.com/ to verify current setup details and manufacturer guidance.
