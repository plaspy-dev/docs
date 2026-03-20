---
slug: /goome/u9/configuration
id: u9-configuration
sidebar_label: Configuration
title: Goome - U9 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Goome U9 showing Plaspy server settings and SMS commands to connect the device to Plaspy
keywords:
  - Goome U9 configuration
  - Goome U9 setup
  - Goome U9 server configuration
  - U9 Plaspy setup
  - Goome GPS tracker
  - U9 SMS configuration
  - Goome tracking platform setup
  - vehicle tracking Goome U9
  - GPS tracker platform configuration
  - Goome U9 APN settings
---

# Goome - U9 Configuration

This page documents the public configuration context for using the Goome U9 GPS tracker with the Plaspy platform. It focuses on the practical server settings and SMS commands that are commonly used to point a U9 device at Plaspy for tracking and monitoring. Use this as guidance for configuring connectivity and verifying the device reports into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The Goome U9 supports SMS based configuration for core network settings and GPRS server configuration, so this page includes the SMS commands provided in the public configuration content.

## Configuration Overview

The goal of the configuration process is to prepare the Goome U9 so it can communicate reliably with the Plaspy tracking platform and appear in your Plaspy account. For the U9, manufacturer-provided SMS commands are a common and practical way to apply the network and server configuration needed for Plaspy compatibility.

- Point the device to the Plaspy server endpoint so the tracker can send location and event packets.
- Configure the device APN so the U9 can attach to a mobile data service for GPRS reporting.
- Set the shared Plaspy port so the server accepts connections from the device.
- Choose UDP or TCP transport on the device if required by the configuration interface.
- Validate connectivity by querying the device settings and checking status reports in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for supported devices

## Typical Requirements Before Setup

- A powered Goome U9 device installed according to the manufacturer instructions.
- An active SIM card with mobile data and correct APN information for the mobile operator.
- Ability to send SMS to the device for SMS based configuration or access to the official Goome configuration tool if available.
- The APN, and optionally APN username and password, from your mobile operator.
- Access to Plaspy and confirmation that the device IMEI or identifier will be registered or visible after configuration.
- Basic familiarity with sending SMS commands and verifying device responses.

## How This Tracker Connects to Plaspy

The Goome U9 is configured to report position and device events to the shared Plaspy server endpoint and port. Once the device GPRS server is set to the Plaspy address and the APN is correct, the U9 will initiate network connections (UDP or TCP) to Plaspy where the protocol is detected automatically.

- The tracker reports location updates and device status to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices so port configuration is consistent across deployments.
- The device may use either UDP or TCP transport depending on the device setting; select the transport supported by the installation if required.
- Plaspy automatically detects the tracker protocol and maps incoming data to the correct device session.
- Event reporting such as alarms, SOS, and telemetry become visible in Plaspy once the device successfully connects.

## Common Configuration Workflow

1. Access the official Goome U9 configuration method or software, or prepare to send SMS commands as documented by Goome.
2. Enter the Plaspy server address either as domain d.plaspy.com or the IP address 54.85.159.138 in the device server/GPRS settings.
3. Set the device port to 8888 which is the shared Plaspy port for all compatible trackers.
4. Choose UDP or TCP transport on the device if the configuration requires selecting a transport protocol.
5. Configure the operator APN and, if needed, APN username and password on the device.
6. Apply or save the configuration on the device and restart the tracker if required by the device workflow.
7. Validate that the device reports to Plaspy by checking device status responses and confirming visibility in the Plaspy platform.

## Example Configuration Commands

To set up the U9 via SMS, send the following commands in the order shown. Note that the factory reset is optional and should be used only when required.

1. Optional factory reset (only if needed for initial clean state)
```
FACTORY#
```

2. Set the operator APN. Replace {{apn}} with your operator APN. If your APN requires username or password, include {{apnu}} and {{apnp}} in order separated by commas.
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Explanation: {{apn}} is the mobile data APN string. {{apnu}} is the APN username placeholder. {{apnp}} is the APN password placeholder. If no username or password is required, you can omit the trailing placeholders when sending the SMS.

3. Set the GPRS server to Plaspy using the Plaspy server IP and port. This points the device to Plaspy on port 8888.
```
GPRSSET,54.85.159.138,8888#
```
- Alternative: If your device accepts a domain instead of IP, use d.plaspy.com in the device configuration UI or the equivalent SMS command if supported.

4. Set an update interval example to send position every 60 seconds
```
TIMER,60#
```

Verification commands

- To check the configured GPRS server on the device:
```
GPRSSET#
```

- To check general device status:
```
STATUS#
```

## Configuration Notes

- Firmware and hardware revisions may change SMS command behavior or available parameters; confirm the exact syntax with the Goome documentation for your device firmware.
- SMS based setup is commonly used for the U9 and is shown here because it is part of the public configuration guidance for this model.
- Choose TCP or UDP transport based on installation needs; both transports are supported and Plaspy will accept either on port 8888.
- Plaspy uses the same port for all supported devices and automatically detects the incoming tracker protocol, simplifying multi-model deployments.
- If you prefer using a manufacturer configuration tool or platform, the same server and port values (d.plaspy.com or 54.85.159.138 and port 8888) apply.

## Why Use Plaspy with This Configuration

Using the Goome U9 with Plaspy provides a straightforward way to consolidate tracking data into a single platform for monitoring and operations. The shared Plaspy server settings reduce configuration complexity across large fleets, and the automatic protocol detection helps minimize per-device protocol selection tasks.

To learn more about Plaspy and how it integrates with devices like the Goome U9, visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details on the official Goome website http://www.goomegpstracker.com as specifications and commands can change over time.
