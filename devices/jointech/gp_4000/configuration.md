---
slug: /jointech/gp_4000/configuration
id: gp_4000-configuration
sidebar_label: Configuration
title: Jointech - GP 4000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech GP 4000 setup with Plaspy including server settings and example SMS commands
keywords:
  - Jointech GP 4000 configuration
  - Jointech GP 4000 setup
  - GP 4000 Plaspy
  - GP 4000 server configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - Jointech tracker setup
  - GP 4000 GPRS configuration
  - Plaspy tracker integration
---

# Jointech - GP 4000 Configuration

This page describes the public configuration context for using the Jointech GP 4000 with the Plaspy platform. It summarizes the server settings Plaspy requires, explains the practical setup flow, and provides the publicly available SMS configuration commands that are commonly used to point the GP 4000 to a remote tracking server.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The GP 4000 supports SMS and GPRS TCP or UDP communications, and the example commands below show how to set the GPRS server and APN via SMS as published in public configuration references.

## Configuration Overview

The goal of GP 4000 configuration for Plaspy is to prepare the tracker to establish a stable data link to the shared Plaspy endpoint and ensure the device is visible and reporting correctly in the platform. Configuration typically sets the server host and port, configures APN credentials if required, and validates that location and status updates reach Plaspy.

- Point the GP 4000 to the Plaspy server endpoint so it sends tracking data to Plaspy.
- Configure the APN and optional APN user and password to enable GPRS data.
- Choose UDP or TCP transport on port 8888 as supported by the device.
- Save or apply settings and restart the device when required.
- Validate the device appears and reports data in Plaspy.

## Plaspy Server Settings

Use these Plaspy server settings when configuring the Jointech GP 4000:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy so manual protocol selection is not required for protocol recognition

Note that all devices in Plaspy use the same port 8888 and Plaspy will automatically detect the tracker protocol when the device connects.

## Typical Requirements Before Setup

- A powered GP 4000 unit with a working SIM card provisioned for data if using GPRS
- Access to the device ID required by the GP 4000 SMS commands
- Knowledge of the network APN and optional APN username and password for the SIM
- Ability to send SMS commands to the device or access to the manufacturer configuration tool if available
- A means to restart or power cycle the device after configuration if recommended
- Confirmation of firmware version or hardware revision in case command formats differ

## How This Tracker Connects to Plaspy

The GP 4000 is configured to send location and device data over GPRS to the shared Plaspy server endpoint and port. Once the server host, port, and APN are set, the tracker establishes a TCP or UDP session to Plaspy and transmits periodic position and event data for monitoring in the platform.

- The device uses GPRS TCP or UDP to open a connection to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to the shared port
- Location updates, alarms, and status messages are forwarded to Plaspy for visibility
- Event reporting allows fleet managers to monitor vehicle activity in Plaspy
- If APN credentials are required, they must be set so the device can use mobile data

## Common Configuration Workflow

1. Access the official Jointech configuration method for the GP 4000, such as the manufacturer SMS command set or vendor configuration tool.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the server host.
3. Set the port to 8888 which is the common Plaspy port for all supported devices.
4. Choose UDP or TCP transport if the device requires selecting a transport protocol.
5. Configure the SIM APN, and if needed the APN user and APN password.
6. Apply or save the settings and restart or power cycle the device if recommended by the manufacturer.
7. Validate that the device successfully connects and reports to Plaspy by checking the device status in the platform.

If you are using SMS commands to configure the GP 4000, follow the manufacturer SMS workflow and ensure you include the device ID in each command as required.

## Example Configuration Commands

The publicly documented GP 4000 SMS commands for setting the GPRS server and APN are typically sent as SMS messages to the device phone number. Replace the placeholders with your device specific values.

1. Set the GPRS server and APN
```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
- [trackerID] is the device ID required by the tracker to accept commands.
- [apn] is the carrier APN string. Keep this placeholder and replace it with your SIM card APN.

2. Optional or conditional Set APN user and password
```
([trackerID],2,S24,129,1,[apnu],[apnp])
```
- [apnu] is the APN username if your carrier requires it.
- [apnp] is the APN password if your carrier requires it.
- Send this command only when your SIM requires APN credentials.

Notes on using the commands
- These SMS commands reflect the publicly available GP 4000 command format. Preserve the order when both server and APN commands are required.
- If your installation requires it, send the server APN command first, then the APN user/password command.
- If the device supports configuration via a vendor tool or USB, use that method following manufacturer guidance.

## Configuration Notes

- Firmware and command syntax can vary between hardware revisions; confirm the exact SMS format for your GP 4000 firmware version before sending commands.
- Choose TCP or UDP based on device behavior and network reliability; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- APN user and password fields are optional in many carriers; include the APN credentials only if your SIM provider requires them.
- SMS based configuration is supported by the GP 4000 per its public documentation, but manufacturer tools may offer a graphical alternative.
- Always confirm settings with the official Jointech documentation if available for your device revision.

## Why Use Plaspy with This Configuration

Using the Jointech GP 4000 with Plaspy provides a straightforward way to centralize vehicle location, status, and event reporting for fleet monitoring and operational oversight. With the GP 4000 pointed at Plaspy’s shared server endpoint and configured with the correct APN and transport, organizations gain real time visibility and consistent reporting in a single platform.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify current information at the Jointech website https://www.jointcontrols.com/ as setup details can change with firmware and hardware revisions.
