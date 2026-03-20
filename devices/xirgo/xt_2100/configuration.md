---
slug: /xirgo/xt_2100/configuration
id: xt_2100-configuration
sidebar_label: Configuration
title: Xirgo - XT-2100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT 2100 showing Plaspy server settings and example SMS commands to connect the tracker
keywords:
  - Xirgo XT-2100 configuration
  - XT-2100 setup
  - Xirgo tracker Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - XT-2100 server configuration
  - tracker SMS commands
  - GPRS tracker setup
  - tracking platform integration
---

# Xirgo - XT-2100 Configuration

This page documents the public configuration context for using the Xirgo XT-2100 with Plaspy. It focuses on the practical server settings and the common setup flow required to direct the tracker to Plaspy so the device can report location and device data to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the manufacturer side setup can vary by firmware, hardware revision, installation type, and vendor tools. The XT-2100 supports GPRS and SMS configuration methods and the example SMS commands below show how to set the APN and GPRS server information for Plaspy.

## Configuration Overview

The goal of configuration is to prepare the XT-2100 to communicate reliably with Plaspy, validate connectivity from the field, and enable visibility of the device in the platform. For many installations the process is straightforward and consists of providing network credentials, configuring the server endpoint and port, choosing the transport type if required, and confirming successful reporting.

- Provide operator APN credentials so the device can use cellular data
- Configure the device to report to the Plaspy server endpoint and port
- Select UDP or TCP transport when the device requires an explicit choice
- Validate connectivity so the tracker appears in Plaspy and sends periodic updates
- Use SMS or the manufacturer tool depending on available access and firmware

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices on Plaspy use the same port and the platform will detect the tracker protocol automatically so the device needs only to be pointed at the Plaspy server endpoint on port 8888.

## Typical Requirements Before Setup

- A powered and installed XT-2100 with access to its configuration method such as SMS or the manufacturer software
- An active cellular SIM with a data plan and correct APN credentials for the network operator
- Access to the operator APN values including APN name and any username or password if required
- Permission to send SMS commands from an authorized phone number if SMS configuration is used
- A basic understanding of whether the installation requires UDP or TCP transport selection
- Knowledge of the device firmware version and access to manufacturer documentation for model specific behavior

## How This Tracker Connects to Plaspy

When configured, the XT-2100 sends location and device telemetry to the Plaspy server at the shared endpoint and port so fleet managers can monitor assets in real time. Plaspy receives the device data regardless of whether you point the tracker to d.plaspy.com or the numeric server IP.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Data is sent over the selected transport protocol using UDP or TCP as supported
- Plaspy automatically detects the device protocol so the same port is used for all supported devices
- Once reporting is active the device appears on the Plaspy platform for tracking and event monitoring
- Periodic position updates and device status messages enable operational oversight

## Common Configuration Workflow

1. Access the official Xirgo configuration method appropriate for your unit such as SMS commands or the manufacturer software tool
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138 as the device server address
3. Set the server port to 8888 which is used by all devices on Plaspy
4. Choose UDP or TCP transport if the device configuration requires an explicit selection
5. Apply or save the configuration on the device using the manufacturer method
6. Restart the device if required by the firmware or after applying settings
7. Validate that the XT-2100 reports to Plaspy by confirming the device appears and sends updates to the platform

If you are using SMS based setup, include the APN and server commands in the correct order before validating connectivity.

## Example Configuration Commands

The XT-2100 can be configured by SMS using the following public commands. Send each command as an SMS from an authorized phone number to the device. Preserve the placeholders and replace them with your operator values.

- Set the operator APN. Replace placeholders as needed
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation of placeholders
- {{apn}} the network APN name provided by your mobile operator
- {{apnu}} APN username if required by the operator, otherwise leave empty or use a placeholder as directed by the vendor
- {{apnp}} APN password if required by the operator, otherwise leave empty or use a placeholder as directed by the vendor

- Set the GPRS server to point the device to Plaspy on port 8888
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes
- The order of these commands matters for initial setup. Typically configure the APN first and then the GPRS server command.
- These commands are the publicly documented SMS configuration steps for the model. If you use the manufacturer software tool, follow the same server and port values there.

## Configuration Notes

- Firmware and hardware revisions may change SMS command behavior or parameter ordering. Verify commands against the device firmware release notes when possible
- The XT-2100 supports TCP, UDP, and FTP on the device side. For Plaspy point the tracker to d.plaspy.com or 54.85.159.138 and use port 8888
- SMS configuration is often used for remote installs where manufacturer software is not available on site
- If a device tool requires explicit transport selection choose UDP or TCP based on your environment and the tracker firmware capabilities
- Always confirm device reporting after configuration to ensure it appears in Plaspy

## Why Use Plaspy with This Configuration

Using the Xirgo XT-2100 with Plaspy gives organizations a practical way to centralize location, status, and event data from mobile assets. Pointing the tracker to the shared Plaspy server endpoint and port ensures consistent handling of device data and simplified onboarding across large fleets.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific instructions on the manufacturer site https://xirgo.com/ to ensure the latest firmware behavior and setup steps are followed.
