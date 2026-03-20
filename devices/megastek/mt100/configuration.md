---
slug: /megastek/mt100/configuration
id: mt100-configuration
sidebar_label: Configuration
title: Megastek - MT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek MT100 with Plaspy server settings and example SMS commands
keywords:
  - Megastek MT100 configuration
  - Megastek MT100 setup
  - MT100 server configuration
  - MT100 Plaspy setup
  - Plaspy tracker configuration
  - MT100 GPS tracker configuration
  - Megastek tracker SMS commands
  - MT100 tracking software setup
  - MT100 telemetry integration
  - Plaspy device configuration
---

# Megastek - MT100 Configuration

This page covers the public configuration context for using the Megastek MT100 with Plaspy. It explains the shared server settings Plaspy requires and shows practical, publicly available setup commands for the MT100 where provided. Use this guide to prepare the device to communicate with Plaspy and to validate connectivity before adding devices to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer setup methods can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and steps below as public examples rather than exhaustive manufacturer guidance. The MT100 supports SMS based configuration in the public documentation and the example SMS commands on this page use the default device password 000000.

## Configuration Overview

The goal of configuration is to prepare the MT100 to send location and event data to Plaspy reliably and to validate that the device is visible in the platform. Configuration typically involves setting mobile network parameters, the device identifier, reporting intervals, and the server endpoint used by Plaspy.

- Set the device identifier using the IMEI so Plaspy can map incoming data to the correct device.
- Configure the SIM operator APN and credentials so the device can establish a GPRS connection.
- Point the MT100 to the Plaspy GPRS server and port so telemetry is delivered to Plaspy.
- Enable GPRS mode and configure reporting intervals to control how often the device sends updates to Plaspy.
- Validate connectivity and visibility in Plaspy once the device is configured and online.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged MT100 device with access to its SMS configuration interface or manufacturer configuration tool
- A SIM card with data and SMS enabled and the correct APN credentials for the mobile operator
- The device IMEI number available for device ID configuration
- Access to the official Megastek configuration method documentation or support tools
- A Plaspy account or administrator access so you can verify the device appears in the platform after configuration

## How This Tracker Connects to Plaspy

The MT100 sends GNSS fixes and device events to the Plaspy server endpoint so Plaspy can display real time location, alerts, and event history. The device can use cellular data (GPRS) and the configured APN to establish an outgoing connection to Plaspy on the shared port.

- The tracker is configured to report to the shared Plaspy server endpoint and port: either d.plaspy.com or 54.85.159.138 on port 8888
- Data can be sent over TCP or UDP depending on your device selection and firmware support
- Plaspy receives telemetry and event packets and automatically detects the tracker protocol for correct parsing
- Reporting intervals and alarms control how often the MT100 uploads position and event data to Plaspy
- After successful configuration the device becomes visible in Plaspy for live monitoring and historical playback

## Common Configuration Workflow

1. Access the official Megastek configuration method or software, or use SMS configuration if supported by your device and operator.
2. Enter the Plaspy server as d.plaspy.com or as the IP address 54.85.159.138 depending on what your device accepts.
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and your deployment prefers one over the other.
5. Configure the device APN and any required APN username or password for GPRS connectivity.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy and appears in the platform as expected.

## Example Configuration Commands

The MT100 public configuration examples include SMS based commands. The default device password used in these commands is 000000. Replace placeholders with your specific values before sending. Each SMS command begins with M000000 where 000000 is the default password.

- Note on placeholders
  - {{imei}} means the 15 digit IMEI of the device. Use the last 15 digits of the IMEI if required by your device.
  - {{apn}} is the mobile operator APN string.
  - {{apnu}} is the APN username when required, otherwise omit.
  - {{apnp}} is the APN password when required, otherwise omit.

1) Set the device ID using IMEI
```text
M000000,22,{{imei}}
```
Explanation: replace {{imei}} with the device IMEI (15 digits). This associates the device ID as expected by the tracker protocol.

2) Set the operator APN (optional username and password)
```text
M000000,23,{{apn}}
```
If your APN requires username and password include them like this:
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
Explanation: replace {{apn}}, {{apnu}}, and {{apnp}} with your operator values. If username and password are not required omit those fields.

3) Set the update interval to 60 seconds
```text
M000000,25,60
```
Explanation: this command sets the reporting interval to 60 seconds. Adjust the numeric value as needed per your monitoring requirements and battery considerations.

4) Set the GPRS server to the Plaspy endpoint (example uses IP)
```text
M000000,24,56 54.85.159.138,8888
```
Explanation: this command points the device to the Plaspy server IP and port. The example includes a leading parameter shown in the public command sequence. Where supported by device firmware you may be able to use the domain d.plaspy.com in place of the IP address if the device accepts hostnames.

5) Enable GPRS mode
```text
M000000,21,2
```
Explanation: this command enables the device GPRS mode so it can use the configured APN and server settings to connect to Plaspy.

## Configuration Notes

- The default SMS password shown in the public examples is 000000. Change or secure the device password where possible after initial setup.
- Firmware and regional variants can change the exact SMS command syntax or required parameters. Confirm syntax with the official Megastek documentation for your firmware revision.
- Some devices accept domain names and some require numeric IP addresses for the server field. If in doubt use the IP 54.85.159.138 or test with d.plaspy.com if your firmware supports DNS.
- Choose UDP or TCP in line with your network and operational needs. Plaspy supports both and automatically detects the protocol used by the device.
- SMS based configuration is useful for initial setup or remote changes but requires a working SMS path and may incur carrier charges.

## Why Use Plaspy with This Configuration

Using the MT100 with Plaspy provides a straightforward path to get personal tracker telemetry into a centralized monitoring and alerting platform. With the MT100 configured to report to the shared Plaspy server endpoint and port, organizations can gain live visibility, receive SOS and alarm events, and combine device data with Plaspy mapping and reporting tools.

To learn more about Plaspy and how it integrates with devices like the Megastek MT100 visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the Megastek site https://www.megastek.com/.
