---
slug: /goome/gmobd/configuration
id: gmobd-configuration
sidebar_label: Configuration
title: Goome - GMOBD Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Goome GMOBD tracker to report to Plaspy with practical SMS commands and server settings
keywords:
  - Goome GMOBD configuration
  - Goome GMOBD setup
  - GMOBD server configuration
  - GMOBD Plaspy setup
  - Goome OBD2 tracker configuration
  - GPS tracker server settings
  - fleet tracking GMOBD
  - GMOBD SMS configuration
  - vehicle tracking platform configuration
  - Plaspy tracker configuration
---

# Goome - GMOBD Configuration

This page documents the public configuration context for using the Goome GMOBD OBD2 GPS tracker with Plaspy. It summarizes the practical steps and public SMS commands used to point the device at Plaspy, explains required prerequisites, and shows how the tracker reports to the platform. The information here is drawn from the device description and the provided public commands for common setup flows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GMOBD supports SMS-based configuration and GPRS reporting via its built-in GSM module, so this guide focuses on the public SMS commands and server parameters you can use to connect the tracker to Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the GMOBD to communicate reliably with Plaspy so vehicle location, alerts, and OBD-derived events become visible in the platform. For GMOBD devices that support SMS and GPRS setup, sending the correct sequence of SMS commands configures the APN and GPRS server and validates connectivity.

- Point the tracker to Plaspy using the shared server endpoint or IP and the common port used by the platform.
- Configure the device APN so the built-in GSM module can establish GPRS data.
- Set the GPRS server parameters so the tracker reports its position and events to Plaspy.
- Adjust reporting interval (for example a 60 second timer) to control update frequency for real-time monitoring.
- Verify settings and device status using the provided verification SMS commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices report to the server

## Typical Requirements Before Setup

- A working SIM card installed in the GMOBD with an active data plan and the correct APN for the mobile operator.
- Access to the device for SMS configuration or to the official manufacturer configuration tool where applicable.
- Device powered and properly connected to the vehicle OBD2 port so the tracker has stable power during setup.
- Familiarity with the APN credentials required by the SIM operator; placeholders may be used in commands for username and password.
- Ability to receive and verify SMS responses from the tracker to confirm commands applied.
- Administrative access to Plaspy so you can confirm the device appears and sends telemetry after configuration.

## How This Tracker Connects to Plaspy

The GMOBD uses its GSM/GPRS capability to send location and event data to the Plaspy server endpoint and port shown above. Once configured, the tracker reports position, alarms, and status updates so the device becomes visible and manageable within Plaspy.

- The device is configured to use the Plaspy server endpoint (domain or IP) and port 8888 for GPRS reporting.
- Transport can be set to UDP or TCP depending on device firmware configuration options.
- Plaspy receives the incoming protocol and automatically detects the tracker protocol for parsing.
- Regular position updates and event reports allow Plaspy to present real-time tracking and playback.
- Verification commands are available to request current server and device status via SMS.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GMOBD (SMS commands or vendor tool) as described in the device documentation.
2. Configure the device APN using the APN command and include username and password if your operator requires them.
3. Enter the Plaspy server information by specifying either d.plaspy.com or the server IP 54.85.159.138 as the GPRS server.
4. Set the server port to 8888 and select UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device; for SMS-based setups this usually means sending the SMS command and awaiting a success response.
6. Restart or power cycle the device if required by the tracker firmware to apply network changes.
7. Validate that the device is reporting to Plaspy by checking device status responses and confirming visibility in Plaspy.

## Example Configuration Commands

The GMOBD can be configured by sending SMS commands to the device. The following public commands are provided in the device documentation. Preserve placeholders and send the commands in the order suggested for initial setup.

1. Optional initial factory reset (only if you need to reset device settings)
```
FACTORY#
```
2. Set the operator APN. Replace {{apn}} with your SIM operator APN. If required, include {{apnu}} and {{apnp}} for APN username and password.
```
APN,{{apn}}
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Use the second form if your APN requires username and password. Keep the placeholders as provided and substitute the operator credentials.)

3. Set the GPRS server to Plaspy using the provided server IP and port (this points the device to Plaspy).
```
GPRSSET,54.85.159.138,8888#
```
4. Set the position update interval (example: every 60 seconds)
```
TIMER,60#
```
5. To check the current GPRS server settings on the device
```
GPRSSET#
```
6. To check overall device status
```
STATUS#
```

Note: These commands are the public SMS-based configuration options supplied in the device documentation. Use the device responses to confirm each step was accepted.

## Configuration Notes

- Firmware and hardware revisions can change command formats or available features; always confirm your device accepts the commands shown here.
- The GMOBD supports SMS-based configuration according to the public commands above; some deployments may prefer vendor configuration tools or over the air updates.
- Choose UDP or TCP based on device firmware options and network reliability; Plaspy supports both transports on port 8888.
- Ensure the APN placeholders {{apn}}, {{apnu}}, and {{apnp}} are replaced with your operator credentials, or use the shorter APN form if no username or password is needed.
- If commands fail, check SIM connectivity, signal strength, and that the tracker has stable power before retrying.

## Why Use Plaspy with This Configuration

Configuring the Goome GMOBD to report to Plaspy provides a straightforward path to real-time vehicle visibility, event monitoring, and location playback for fleet or rental use cases. Using Plaspy's shared server endpoint and automatic protocol detection simplifies integration because the platform accepts reports from supported trackers without the need for device-specific server assignments.

To learn more about Plaspy and how to get started with fleet tracking, visit https://www.plaspy.com. For the most current manufacturer specific instructions, firmware notes, and device details verify the latest documentation at http://www.goomegpstracker.com. Manufacturer configuration methods and firmware behavior can change over time, so always cross-check commands and procedures against the official Goome documentation.
