---
slug: /xirgo/xt_2000/configuration
id: xt_2000-configuration
sidebar_label: Configuration
title: Xirgo - XT-2000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT-2000 compatibility with Plaspy server settings and SMS commands
keywords:
  - Xirgo XT-2000 configuration
  - XT-2000 Plaspy setup
  - Xirgo XT 2000 server configuration
  - XT-2000 GPS tracker configuration
  - XT-2000 OBD II setup
  - Plaspy device configuration
  - XT-2000 SMS configuration
  - Xirgo tracker setup guide
  - XT-2000 APN settings
  - Xirgo vehicle tracking configuration
---

# Xirgo - XT-2000 Configuration

This page documents the public configuration context for using the Xirgo XT-2000 with Plaspy. It covers the shared Plaspy server settings, the typical setup workflow, and the publicly available SMS configuration commands that are commonly used to point an XT-2000 device at Plaspy for data reporting.

Plaspy uses the same server and port across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary with firmware, hardware revision, installation type, and vendor tools. The XT-2000 supports SMS configuration and cellular data configuration methods, so this guide focuses on practical, public actions you can take to prepare the device for communication with Plaspy.

## Configuration Overview

The goal of configuring an XT-2000 for Plaspy is to ensure the device can establish a cellular data session or send messages to the shared Plaspy endpoint so vehicle location and OBD II parameters become visible in the platform. Where available, SMS commands can be used to set APN and server parameters quickly during installation.

- Configure the device APN and operator settings so the XT-2000 has cellular data access
- Point the device to the Plaspy server endpoint and port so data is routed into the platform
- Choose the transport protocol if required by the device firmware and save the configuration
- Validate connectivity and confirm the device reports to Plaspy so vehicle data appears in the platform
- Use SMS or manufacturer configuration tools as supported by the XT-2000 for initial provisioning

## Plaspy Server Settings

When configuring the XT-2000 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public endpoint and port that your XT-2000 should be configured to report to for visibility in Plaspy.

## Typical Requirements Before Setup

- A powered XT-2000 installed in the vehicle OBD II port so the device has power and access to vehicle data
- An active cellular SIM with a data plan and correct APN settings for the mobile operator
- Access to the manufacturer configuration method required for your device build such as SMS commands or Xirgo provisioning tools
- Knowledge of the operator APN and optional APN username or password if your SIM requires them
- A way to receive device status messages or confirmations during provisioning such as SMS or the device LED indicators
- Basic account or onboarding access to Plaspy so a tracked device can be observed after configuration

## How This Tracker Connects to Plaspy

The XT-2000 uses cellular connectivity and the device configuration to send vehicle and position information to the shared Plaspy endpoint. Once provisioned with the correct APN and server settings, the device will begin reporting to Plaspy on the platform port.

- The device establishes a cellular data connection using the configured APN and operator credentials
- The XT-2000 sends telemetry packets to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 using port 8888
- Transport can be configured to UDP or TCP depending on firmware options and installer preference
- Plaspy automatically detects the tracker protocol and ingests telemetry for mapping, events, and diagnostics
- Successful reporting makes vehicle location and OBD II parameters visible inside Plaspy for monitoring and reporting

## Common Configuration Workflow

1. Access the official Xirgo configuration method required for your device model such as SMS provisioning or the manufacturer configuration tool
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on the device input options
3. Set the server port to 8888 as required by Plaspy
4. Choose UDP or TCP if the device requires selection of a transport protocol
5. Configure the operator APN and any APN username or password placeholders the SIM requires
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes
7. Validate that the device reports to Plaspy by checking device status in the platform or confirming receipt of telemetry

If SMS provisioning is used, send the documented SMS commands from a registered installer or technician phone number according to Xirgo guidance.

## Example Configuration Commands

The XT-2000 supports SMS configuration. The following public SMS commands are provided by the device documentation for setting the operator APN and the GPRS server. Send these as SMS messages from an authorized phone to the device.

1) Set the operator APN
```text
+XT:1002,[apnu],[apnp],[apn]
```
- Explanation of placeholders
  - [apn] is the APN name provided by your mobile operator
  - [apnu] is the APN username if required by the operator; leave empty if not used
  - [apnp] is the APN password if required by the operator; leave empty if not used

2) Set the GPRS server and port for Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command sets the device to report to the Plaspy server IP 54.85.159.138 on port 8888. Preserve the parameter order as shown.
- If your provisioning workflow prefers a domain, configure d.plaspy.com in your manufacturer tool where domain input is supported instead of the IP.

Note: Keep the command order when provisioning; set APN first so the device has data connectivity before pointing the server settings.

## Configuration Notes

- Firmware and tool differences across XT-2000 revisions may change exact command syntax or available fields; always confirm with the device firmware release notes
- The XT-2000 supports both SMS based provisioning and software based provisioning; choose the method that matches your installation workflow and security policies
- Selecting TCP or UDP can affect message delivery behavior; test the chosen transport in your environment to confirm reliable reporting to Plaspy
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so server port consistency simplifies provisioning
- Preserve APN placeholders exactly as provided and replace only with operator supplied values during provisioning

## Why Use Plaspy with This Configuration

Using the Xirgo XT-2000 with Plaspy gives organizations a simple path to capture vehicle location and OBD II parameters through a consistent server configuration. Plaspy's shared server and port approach reduces per device configuration complexity and lets installers focus on APN and transport choices while the platform handles protocol detection and data ingestion.

To learn more about Plaspy and how it works with devices like the XT-2000 visit https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer configuration guidance verify the technical details on the Xirgo website https://xirgo.com/
