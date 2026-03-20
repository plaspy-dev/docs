---
slug: /xirgo/xt_4700/configuration
id: xt_4700-configuration
sidebar_label: Configuration
title: Xirgo - XT-4700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Xirgo XT-4700 to Plaspy using shared server settings and SMS commands
keywords:
  - Xirgo XT-4700 configuration
  - Xirgo XT-4700 setup
  - XT-4700 Plaspy configuration
  - Xirgo GPS tracker configuration
  - XT-4700 server configuration
  - Plaspy tracker setup
  - GPS platform integration
  - tracker SMS setup
  - asset tracker configuration
  - vehicle tracking setup
---

# Xirgo - XT-4700 Configuration

This page covers the public configuration context for using the Xirgo XT-4700 tracker with Plaspy. It provides practical, manufacturer-visible steps and example SMS commands where available to prepare the device to report to Plaspy's shared server endpoint. Use this guide as a reference for the common setup tasks required to make the XT-4700 visible in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The XT-4700 supports cellular connectivity and the manufacturer provides SMS configuration commands for GPRS server and APN settings, which are included below as public examples.

## Configuration Overview

The goal of configuration is to point the XT-4700 at Plaspy's server and confirm reliable reporting so the device appears in Plaspy for monitoring and event reporting. For the XT-4700 this typically means setting the device APN and GPRS server information and verifying network registration and reporting.

- Configure the device APN so the unit can use cellular data for reporting
- Set the GPRS server address and port to direct telemetry to Plaspy
- Choose UDP or TCP transport where the device requires a selection
- Save and apply settings then restart or cycle power if recommended by the manufacturer
- Validate that the device is reporting to Plaspy and visible in the platform

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the XT-4700. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device sends data to the server

## Typical Requirements Before Setup

- A charged XT-4700 device physically installed or accessible for testing
- An active cellular SIM provisioned for data on the network where the device will be used
- Access to the device configuration method supported by the unit such as SMS commands or the manufacturer software
- Knowledge of the correct APN values for the SIM and mobile operator
- Basic network reachability to d.plaspy.com or 54.85.159.138 from the device network
- A test plan to confirm the device reports after configuration

## How This Tracker Connects to Plaspy

When configured, the XT-4700 will send its telemetry to the Plaspy server endpoint and port so the platform can ingest location and status updates. Plaspy handles protocol detection and routing once the device reaches the shared server.

- The device is configured to use the operator APN so cellular data sessions can be established
- The GPRS server is set to Plaspy using the shared server IP or domain and port 8888
- Transport is set to UDP or TCP depending on the device option and installer preference
- Once data is transmitted to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy detects the device protocol automatically
- Plaspy receives location and event reports and makes them visible in the platform for monitoring and alerting

## Common Configuration Workflow

1. Access the official Xirgo configuration method for the XT-4700 such as the manufacturer SMS commands or configuration software
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings
3. Set the server port to 8888 (Plaspy uses the same port for all devices)
4. Choose the transport protocol UDP or TCP if the device requires a transport selection
5. Configure the device APN with your operator settings so the tracker can use cellular data
6. Apply or save the configuration and restart the device if the manufacturer recommends it
7. Validate that the device reports to Plaspy by checking for incoming data on the platform or observing device status in Plaspy

## Example Configuration Commands

The XT-4700 manufacturer provides SMS commands for basic setup. Send these commands as SMS messages to the device in the order shown.

- Set the operator APN
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation: Replace the placeholders with your operator values. {{apn}} is the APN name, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. If your operator does not require username or password, leave those placeholders empty as appropriate.

- Set the GPRS server to Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Explanation: This command sets the device to report to Plaspy at IP 54.85.159.138 using port 8888. The remaining numeric parameters are device command fields as provided by the manufacturer and should be sent in the order shown. Send this SMS after the APN command so the device can open a data session to the configured server.

Note: The manufacturer indicates these commands are delivered by SMS. Preserve the order shown when applying both APN and server settings.

## Configuration Notes

- Firmware and hardware revisions may change command formats or behavior; always verify the exact SMS syntax for your device firmware
- The XT-4700 supports SMS based configuration as shown, but some installers prefer factory tools or provisioning software if provided by Xirgo
- Choose TCP or UDP based on your installation needs; Plaspy accepts both and will detect the protocol automatically after the device sends data
- Applying APN settings before the server configuration helps ensure the device can establish a GPRS session when the server address is applied
- Confirm network operator compatibility and data plan settings before wide deployment

## Why Use Plaspy with This Configuration

Using the Xirgo XT-4700 with Plaspy gives organizations a straightforward path to monitor remote assets with a ruggedized tracker that can be configured to report to a centralized platform. Pointing the device to Plaspy's shared server and verifying APN and connectivity enables timely location and status visibility for high-value assets.

Learn more about Plaspy and platform capabilities on the main website https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer guidance verify information on the official Xirgo site https://xirgo.com/ since setup methods and command syntax can change over time.
