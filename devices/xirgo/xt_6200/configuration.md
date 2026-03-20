---
slug: /xirgo/xt_6200/configuration
id: xt_6200-configuration
sidebar_label: Configuration
title: Xirgo - XT-6200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT 6200 to connect to Plaspy server d.plaspy.com using shared port 8888 and automatic protocol detection
keywords:
  - Xirgo XT 6200
  - XT 6200 configuration
  - Xirgo tracker setup
  - XT 6200 Plaspy
  - GPS tracker configuration
  - asset tracking setup
  - vehicle tracking configuration
  - server configuration Plaspy
  - XT 6200 SMS commands
  - tracker APN settings
---

# Xirgo - XT-6200 Configuration

This page documents the public configuration context for using the Xirgo XT-6200 tracker with Plaspy. It gathers the server settings and practical setup guidance you will need to point the XT-6200 at the Plaspy platform so the device can report location and status to Plaspy for monitoring and historical tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary with firmware, hardware revision, installation type, and vendor tools. The XT-6200 supports SMS based configuration as shown in the example commands below, and it also offers interfaces such as serial and USB that installers may use depending on their workflow.

## Configuration Overview

The goal of this configuration is to prepare the XT-6200 so it can establish a data session and send reports to Plaspy at the platform endpoint. That includes setting the device APN (if required by your SIM), configuring the device to use the Plaspy server endpoint, and validating that messages arrive in the Plaspy platform.

- Configure the operator APN so the device can open a data session if required by your SIM
- Set the GPRS server address or domain so the XT-6200 sends telemetry to Plaspy
- Choose transport and port settings so packets reach the Plaspy endpoint
- Validate connectivity and confirm the device appears in Plaspy reporting
- Use SMS or vendor configuration tools depending on your installer preference

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will detect the device protocol automatically when the tracker sends data to the server.

## Typical Requirements Before Setup

- A powered and accessible XT-6200 unit with adequate battery or external power
- A SIM card with an active data plan and SMS ability if you will use SMS commands to configure the device
- Operator APN details for your SIM provider (APN name and optional username and password)
- Access to the manufacturer configuration method or approved vendor toolchain for the XT-6200
- Basic connectivity checks such as cellular signal and GPS visibility at the installation site
- Permission to send SMS commands to the device telephone number if SMS configuration is used

## How This Tracker Connects to Plaspy

The XT-6200 is configured to report location and status data to the Plaspy platform by sending GPRS packets or TCP/UDP messages to the shared Plaspy server endpoint and port. Plaspy receives the data on port 8888 and automatically identifies the tracker protocol so data can be interpreted and displayed in the platform.

- Device sends telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Use either UDP or TCP transport depending on installer preference or device capability
- Plaspy detects the incoming protocol automatically to parse messages
- Successful connection allows Plaspy to show live location and event reports
- Platform visibility enables operational monitoring and historical playback

## Common Configuration Workflow

1. Access the official Xirgo configuration method such as the vendor SMS commands or the manufacturer software tool
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices)
4. Select UDP or TCP transport on the tracker if the device requires a transport choice
5. Configure the operator APN values so the device can establish GPRS data connectivity if needed
6. Apply or save the configuration and restart the device if the XT-6200 requires a reboot to apply changes
7. Validate that the device is reporting to Plaspy by checking for the tracker in the Plaspy platform and confirming inbound messages

## Example Configuration Commands

The XT-6200 supports SMS based configuration. The manufacturer provides public SMS commands to set APN and the GPRS server. Send these commands as SMS messages to the device phone number in the order shown.

- Set the operator APN. Replace placeholders with your operator values:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation of placeholders
- {{apn}} is the APN name provided by the mobile operator
- {{apnu}} is the APN username when required by the operator, otherwise leave blank if not required
- {{apnp}} is the APN password when required by the operator, otherwise leave blank if not required

- Set the GPRS server to Plaspy. This points the device to Plaspy using port 8888 and the Plaspy server IP:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```

Notes
- Send the APN command first, then the GPRS server command to ensure the device can open a data session.
- These commands are the public SMS commands extracted from the manufacturer documentation and are shown in the manufacturer order.

## Configuration Notes

- Firmware differences can change exact command formats and behavior; always confirm the correct command syntax for the installed firmware revision.
- When available, use the manufacturer toolchain or configuration service for bulk or field installs; SMS is useful for single device or remote updates.
- Choose UDP or TCP according to network reliability and your installation needs; Plaspy accepts both and will detect the protocol.
- Ensure APN credentials are correct for the SIM to allow data connectivity; incorrect APN settings will prevent GPRS connection.
- All devices in Plaspy use the same port 8888 so server port configuration is uniform across supported trackers.

## Why Use Plaspy with This Configuration

Using the Xirgo XT-6200 configured to report to Plaspy provides a straightforward path to bring remote asset telemetry into a single monitoring platform. With the Plaspy server endpoint and shared port configured on the device, organisations gain visibility into location and device activity that supports operational management and asset oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer details verify the official Xirgo documentation at https://xirgo.com/ as manufacturer specifications and setup methods can change over time.
