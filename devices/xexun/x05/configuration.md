---
slug: /xexun/x05/configuration
id: x05-configuration
sidebar_label: Configuration
title: Xexun - X05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun X05 integration with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Xexun X05 configuration
  - Xexun X05 setup
  - Xexun X05 Plaspy
  - Xexun tracker configuration
  - X05 GPS setup
  - Xexun server configuration
  - pet GPS tracker setup
  - GPS tracker SMS commands
  - Plaspy server settings
  - tracker protocol detection
---

# Xexun - X05 Configuration

This page documents the public configuration context for using the Xexun X05 tracker with Plaspy. It explains the practical server settings, SMS commands, and recommended workflow that allow the X05 to report location and telemetry into the Plaspy platform. The content here is grounded on the X05 product description and the publicly available setup commands included below.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where applicable, this guide includes the common SMS commands used by the X05 and highlights the Plaspy server values you must apply for platform connectivity.

## Configuration Overview

This configuration process prepares the X05 to send its location and device telemetry to the Plaspy cloud endpoint so the device appears in Plaspy dashboards and mobile apps. The goal is to ensure reliable GPRS or cellular reporting to Plaspy using the shared server endpoint and port.

- Configure the device to use Plaspy as its remote server so location and telemetry data are directed to the correct endpoint.
- Set the device APN and, if required, APN username and password so the tracker can establish a data session.
- Apply the Plaspy server IP or domain and port so reports arrive at Plaspy in real time.
- Choose the transport mode (UDP or TCP) if the device requires a transport selection.
- Validate connectivity and reporting so the tracker becomes visible and manageable in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A charged X05 device with working battery and powered on.
- A valid cellular SIM with a data plan and correct APN settings for the network operator.
- Access to the device configuration method supported by the vendor such as SMS commands or official configuration software.
- Knowledge of the device password or default password 123456 for SMS based configuration.
- A Plaspy account and a place on the Plaspy platform to confirm the device is reporting after setup.
- A mobile phone able to send SMS to the tracker number when using SMS based setup.

## How This Tracker Connects to Plaspy

The X05 transmits location fixes and device telemetry over domestic cellular networks to the Plaspy endpoint. Once configured to point at the Plaspy server and port, the device reports according to its configured reporting interval so Plaspy can process and display the data.

- The tracker sends periodic location and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Data is sent over the selected transport mode, UDP or TCP, depending on the device configuration.
- Plaspy automatically detects the tracker protocol so no additional protocol selection is required in the platform.
- Successful reports allow real time visibility, alerting, and history playback in Plaspy.
- If connectivity is interrupted, the tracker may buffer data and retransmit when the network is restored.

## Common Configuration Workflow

1. Access the official Xexun configuration method for the X05, typically the vendor SMS command set or the manufacturer supplied tool.
2. Ensure the device has a working SIM and the correct APN for the mobile operator.
3. Enter the Plaspy server information using either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set port 8888 as the remote server port; Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the device requires a transport selection; Plaspy supports both and auto detects the tracker protocol.
6. Save or apply the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by monitoring the device list or live map in Plaspy.

## Example Configuration Commands

The X05 supports SMS based configuration. The sample command set below uses the device default password 123456. Send these commands in the order shown where order is important. Placeholders are preserved and should be replaced with your operator values.

- Optional initial factory restore command
```text
begin123456
```
- Set the operator APN
```text
apn123456 [apn]
```
- Set the APN username if required
```text
apnuser123456 [apnu]
```
- Set the APN password if required
```text
apnpasswd123456 [apnp]
```
- Set the GPRS server to Plaspy using the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set GPRS mode (use vendor default or confirm mode with manufacturer docs)
```text
gprsmode123456
```
- Set the update interval to 60 seconds
```text
t060s***n123456
```

Notes on placeholders and commands:
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] and [apnp] are optional APN username and APN password values used by some operators.
- The sample password 123456 is the device default in the public command examples. Replace with your device password if it has been changed.
- The restore factory command begin123456 is optional and only required if you need to reset device settings before configuration.

## Configuration Notes

- Firmware versions and hardware variants may use slightly different SMS command formats or require vendor software for some settings. Verify commands against current Xexun documentation.
- SMS based configuration is supported by the sample commands above; manufacturers also often provide configuration tools or PC utilities that perform the same changes.
- Choose UDP or TCP according to installation needs. Plaspy supports both transports on port 8888 and will detect the tracker protocol automatically.
- All Plaspy devices use the same port 8888 which simplifies server configuration across multiple tracker models.
- Confirm APN, APN user, and APN password values with the mobile operator and store them securely.

## Why Use Plaspy with This Configuration

Using the Xexun X05 with Plaspy provides centralized visibility and management for pet tracking and telemetry. With the device configured to report to Plaspy, organizations and pet owners gain access to real time location, geofence alerts, historical playback, and alert routing that supports operational oversight and rapid response.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific details including firmware variations and exact SMS command syntax consult the manufacturer documentation at https://www.xexun.com/ as methods and commands can change over time.
