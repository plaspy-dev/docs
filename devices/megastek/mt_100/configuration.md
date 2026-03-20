---
slug: /megastek/mt_100/configuration
id: mt_100-configuration
sidebar_label: Configuration
title: Megastek - MT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT-100 to connect with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - Megastek MT-100 configuration
  - MT-100 setup Plaspy
  - Megastek tracker configuration
  - MT-100 server configuration
  - Megastek GPS platform setup
  - MT-100 GPRS SMS commands
  - Plaspy tracker setup
  - handheld GPS tracker configuration
  - vehicle and asset tracking setup
  - GPS tracker protocol detection
---

# Megastek - MT-100 Configuration

This page describes the public configuration context for using the Megastek MT-100 with the Plaspy platform. It focuses on the shared Plaspy server settings and the practical steps you can use to point the MT-100 at Plaspy so the device will report location and event data to the platform. The instructions below use publicly available configuration examples and show how SMS or GPRS settings can be applied for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps may vary by firmware version, hardware revision, installation type, and vendor tools. The MT-100 supports SMS and GPRS configuration methods in public documentation, and the sample SMS commands shown here reflect a common setup flow using the device default password where applicable.

## Configuration Overview

The goal of configuration is to prepare the MT-100 to communicate reliably with Plaspy and to validate that data arrives in your Plaspy account. The process typically configures the device identity, APN settings, server endpoint, transport, and reporting interval so Plaspy can receive regular updates.

- Set the device ID and verify the IMEI is known for platform registration.
- Configure the operator APN so the device can use GPRS data for reporting.
- Set the GPRS server to the Plaspy endpoint and port so the tracker sends telemetry to Plaspy.
- Choose UDP or TCP transport if required and enable GPRS reporting mode.
- Set an appropriate reporting interval and verify the device sends data to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on tracker capability
- Automatic protocol detection in Plaspy so the platform will identify the tracker protocol once data arrives

## Typical Requirements Before Setup

- A charged and operational MT-100 device with a known IMEI number.
- A SIM card with data and SMS capabilities inserted and active on the device.
- Access to the official Megastek configuration method for the MT-100 such as SMS commands or vendor configuration software.
- Knowledge of the operator APN and optional APN username and password if the SIM requires them.
- The device default password if using SMS configuration; in the example commands below the default password is 000000.
- A Plaspy account and knowledge that the device will report to the shared Plaspy server endpoint and port.

## How This Tracker Connects to Plaspy

The MT-100 is configured to send location and event data to the shared Plaspy server endpoint and port so Plaspy can display the tracker’s position and alerts. Once the device is pointing to the Plaspy server and GPRS mode is enabled, Plaspy will automatically detect the tracker protocol and begin ingesting messages.

- Device identifies itself using the configured device ID or IMEI so Plaspy associates reports with the correct tracker.
- GPRS data sessions are used to send position updates to the Plaspy server endpoint.
- The tracker sends periodic location reports at the configured interval so Plaspy can show live movement.
- Alarms and events such as SOS, geofence, or low battery are transmitted to Plaspy for notifications and logs.
- Plaspy’s automatic protocol detection analyzes incoming messages and handles the tracker without requiring manual protocol selection.

## Common Configuration Workflow

1. Access the official Megastek configuration method such as SMS commands or the manufacturer tool for the MT-100.
2. Ensure the device has a working SIM and know the APN, optional APN user, and APN password for the mobile operator.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration and enable GPRS reporting mode on the device.
6. Restart the device if required by the tracker firmware or as recommended by the manufacturer.
7. Validate that the device reports to Plaspy and that positions and events appear in your Plaspy account; confirm automatic protocol detection has identified the tracker.

## Example Configuration Commands

The MT-100 can be configured by sending SMS commands to the device. The following example commands are public examples and use the device default password 000000 in the sample text. Replace placeholders as described after each command.

1. Set the device ID (example uses a 15 digit identifier derived from IMEI)
```text
M000000,22,XXXXXXXXXXXXXXX
```
- Replace XXXXXXXXXXXXXXX with the 15 digit device ID or IMEI based identifier required by your deployment. The sample manufacturer flow shows building a 15 digit ID from the IMEI; send the exact 15 digit ID the device expects.

2. Set the operator APN (APN and optional APN user and password)
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if required by the operator; leave empty or omit if not used.
- {{apnp}} is the APN password if required; leave empty or omit if not used.

3. Set the update interval to 60 seconds
```text
M000000,25,60
```
- Sets periodic reporting interval to 60 seconds. Change the number to alter reporting frequency as needed.

4. Set the GPRS server to point to Plaspy using the server IP and port
```text
M000000,24,56 54.85.159.138,8888
```
- This command configures the device to send GPRS data to Plaspy via IP 54.85.159.138 on port 8888.
- If your device firmware supports DNS names in server settings you may be able to use d.plaspy.com instead of the IP; check the manufacturer documentation before changing this value.

5. Enable GPRS mode
```text
M000000,21,2
```
- Enables GPRS as the reporting transport mode on the tracker.

Notes on these commands
- The sample password shown in these public commands is 000000 which is the factory default in the example flow. If you have changed the password, replace 000000 with your device password.
- Maintain the command order when required by the device: typically set APN and server first, then enable GPRS and set reporting interval.
- If any command format differs on your firmware version, follow the official Megastek documentation supplied with your device.

## Configuration Notes

- Firmware and hardware revisions may change command formats and supported parameters; always confirm the exact SMS syntax with Megastek documentation for your MT-100 revision.
- The MT-100 supports both SMS and GPRS configuration in public examples; SMS commands are useful for remote setups but require a working SIM with SMS credit.
- When choosing transport, UDP is commonly used for lower overhead while TCP can provide session-based delivery depending on firmware support; Plaspy accepts either and automatically detects the protocol.
- Keep the device password secure and change factory defaults where appropriate after initial provisioning.
- If the device supports DNS for server settings, using d.plaspy.com can make future Plaspy server updates transparent to the device; otherwise use the provided IP.

## Why Use Plaspy with This Configuration

Using Plaspy with the Megastek MT-100 provides a straightforward way to centralize live tracking, alarms, and historical data from handheld trackers. Pointing the MT-100 at the shared Plaspy server endpoint and port allows Plaspy to automatically detect the tracker protocol and begin processing reports, reducing manual protocol configuration and simplifying deployment across many devices.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific commands, firmware notices, and manufacturer guidance verify current information at the Megastek website https://www.megastek.com/ as manufacturer specifications and setup methods can change over time.
