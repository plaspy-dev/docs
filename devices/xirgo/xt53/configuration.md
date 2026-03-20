---
slug: /xirgo/xt53/configuration
id: xt53-configuration
sidebar_label: Configuration
title: Xirgo - XT53 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT53 showing Plaspy server settings SMS commands and setup workflow for integration
keywords:
  - Xirgo XT53 configuration
  - Xirgo XT53 setup for Plaspy
  - XT53 GPS tracker configuration
  - XT53 server configuration
  - XT53 tracking software configuration
  - Xirgo asset tracker setup
  - Plaspy tracker configuration
  - GPS tracker server setup
  - asset tracking XT53
  - cellular tracker configuration
---

# Xirgo - XT53 Configuration

This page provides the public configuration context for using the Xirgo XT53 tracker with the Plaspy platform. It explains the server settings Plaspy requires, shows the published SMS commands that can be used to point an XT53 at Plaspy, and describes the practical steps installers typically follow to integrate the device into Plaspy for live tracking and reporting.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when a device reports. Manufacturer-side setup steps can vary by firmware version, hardware revision, and vendor tools; the XT53 supports SMS-based configuration as a documented option, so this guide includes the public SMS commands that are commonly used to configure the device to communicate with Plaspy.

## Configuration Overview

Configuring an XT53 for Plaspy prepares the device to send location and status uplinks to the platform so you can visualize and manage assets. The public configuration process focuses on establishing GPRS connectivity, pointing the tracker at Plaspy's server endpoint, and validating that the device successfully reports to the platform.

- Configure the device to use Plaspy as its GPRS server endpoint so uplinks reach d.plaspy.com or the Plaspy server IP.
- Provide the correct APN and, if required, APN credentials so the device can attach to the mobile data network.
- Ensure the device uses port 8888 and select UDP or TCP transport if the XT53 requires a transport choice.
- Save and apply the configuration, then verify the XT53 reports to Plaspy and appears in the platform.
- Use the published SMS commands when SMS provisioning is the chosen manufacturer-supported method.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

Note that Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically when the device begins reporting.

## Typical Requirements Before Setup

- A functional SIM card with data capability installed in the XT53 and SMS enabled if using SMS provisioning.
- APN values and any APN credentials required by the mobile operator (placeholders are used in commands where applicable).
- Access to the manufacturer configuration method or software such as the XT53 SMS command interface or vendor provisioning tools.
- A charged device or appropriate power connection so the XT53 can complete registration and GPRS attach procedures.
- A clear plan to test and validate device reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The XT53 sends periodic location uplinks and status messages over the cellular network to the Plaspy server endpoint and port so Plaspy can ingest the data, show positions on a map, and generate events and reports. Configuration points on the device instruct it to use Plaspy as its GPRS server and define the transport protocol and port for communication.

- The tracker is set to report to Plaspy using the shared endpoint d.plaspy.com or the server IP 54.85.159.138.
- Communications use port 8888 which is the standard port Plaspy accepts for all devices.
- The device may use UDP or TCP on port 8888 depending on the tracker settings; Plaspy will detect the protocol automatically.
- Once reporting is active, Plaspy converts uplinks into map positions, events, and telemetry visible in the platform.
- Validation in Plaspy confirms successful connectivity and that the device is reporting expected check-ins.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or software provided by the vendor (for the XT53 this commonly includes SMS commands).
2. Enter the Plaspy server address as either d.plaspy.com or the server IP 54.85.159.138 depending on the device entry field.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device firmware requires a transport selection.
5. Provide APN settings and any APN credentials required by the mobile operator.
6. Apply or save the configuration on the device and restart the tracker if the vendor documentation specifies a reboot is required.
7. Validate that the device reports to Plaspy by checking device activity and location updates in the Plaspy platform.

If you use SMS provisioning, sending the published commands in the correct order is usually sufficient to set the APN and GPRS server for Plaspy.

## Example Configuration Commands

The XT53 can be configured using SMS commands. The following public commands are presented in the same order they are commonly used. Preserve and replace placeholders where indicated.

- Set the operator APN (replace placeholders with your carrier values)
```
+XT:1002,[apnu],[apnp],[apn]
```
Explanation: [apnu] is the APN username if required, [apnp] is the APN password if required, and [apn] is the operator APN string. Provide empty values for username or password if your carrier does not require them.

- Set the GPRS server to point the device to Plaspy
```
+XT:1001,8888,54.85.159.138,4,0,0
```
Explanation: This command sets the device GPRS server and includes the port and the Plaspy server IP. The numeric flags at the end are device-specific parameters from the XT53 command set as published by the manufacturer; do not alter the order of fields.

Send these SMS commands from an authorized phone number or following the manufacturer procedure for SMS provisioning. Maintain the order shown when order is required by the firmware.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS syntax or available parameters; always confirm commands against the device documentation for your specific XT53 unit.
- The XT53 supports SMS-based provisioning in the public command set shown, but some installations may prefer vendor software or a provisioning service for bulk device setup.
- Where transport is selectable, choose UDP or TCP according to your network and integration plan; Plaspy accepts both on port 8888 and will auto detect the protocol on first connection.
- After applying configuration changes, restart the device if recommended by the manufacturer, then verify uplinks appear in Plaspy.
- Keep a record of APN and server settings used during provisioning to simplify troubleshooting and future deployments.

## Why Use Plaspy with This Configuration

Using the XT53 with Plaspy gives long-term deployed assets consistent, centralized visibility through a single server endpoint and port. The XT53's low-touch design and cellular connectivity make it suitable for deployments that require infrequent reporting and long battery life, while Plaspy handles protocol detection and ingests the device uplinks for mapping, alerts, and historical reporting.

To learn more about how Plaspy supports devices like the Xirgo XT53 and to explore platform features, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify current information with the manufacturer at https://xirgo.com/. Manufacturer specifications and setup methods can change over time so confirm details before large scale deployments.
