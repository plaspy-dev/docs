---
slug: /xirgo/xt31/configuration
id: xt31-configuration
sidebar_label: Configuration
title: Xirgo - XT31 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Xirgo XT31 to connect with Plaspy using shared server settings and SMS or vendor tools
keywords:
  - Xirgo XT31 configuration
  - Xirgo XT31 setup
  - XT31 Plaspy configuration
  - XT31 server configuration
  - XT31 GPS platform setup
  - Xirgo cargo gateway configuration
  - XT31 tracking software configuration
  - Plaspy tracker integration
  - trailer telematics setup
  - container monitoring configuration
---

# Xirgo - XT31 Configuration

This page covers the public configuration context for using the Xirgo XT31 with Plaspy. It summarizes the practical steps and server settings commonly used to direct XT31 telemetry and cargo data into the Plaspy platform, and it includes the public SMS commands that some installations use to provision network and server parameters.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide as a practical reference and confirm device specific procedures with Xirgo documentation or your installer before deploying.

## Configuration Overview

The goal of configuration is to prepare the XT31 to send its telemetry and cargo sensor data to Plaspy reliably, and to verify that the device appears in the platform for monitoring and reporting. Where available, the XT31 can be configured by SMS commands or by the vendor configuration tool. The public commands shown below are examples used to set APN and the Plaspy GPRS server information.

- Configure network APN so the device can use mobile data for telemetry.
- Point the XT31 to the Plaspy server endpoint and port for reporting.
- Choose the transport type if required and confirm the device will use port 8888.
- Validate connectivity and that the device is visible in Plaspy after setup.
- Use provided SMS commands or the manufacturer tool to apply settings depending on your installation.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the XT31. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

## Typical Requirements Before Setup

- A powered and reachable XT31 unit with the ability to accept SMS configuration or vendor software access.
- A valid mobile data SIM and correct APN details for the cellular provider.
- Access to the vendor configuration method used for your device version, for example SMS provisioning or the Xirgo configuration tool.
- Knowledge of the APN credentials and any required username or password for the mobile operator.
- Basic access to Plaspy account details so you can confirm device visibility after configuration.
- A plan to reboot the device after applying network and server settings if required.

## How This Tracker Connects to Plaspy

The XT31 is configured to report telemetry and cargo status to the shared Plaspy server endpoint and port. Plaspy ingests event driven updates and historical records to make the data available in dashboards and alerts, and it will detect the device protocol automatically when data arrives.

- The device sends GPRS data to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be configured as UDP or TCP depending on device requirements and network conditions.
- Plaspy receives event driven alerts and periodic telemetry for visibility and operational workflows.
- Historical records and sensor logs are forwarded to Plaspy for reporting and post trip analysis.
- The shared port 8888 is used for all Plaspy connected devices and simplifies multi device deployments.

## Common Configuration Workflow

1. Access the official Xirgo configuration method for your XT31 unit, such as SMS provisioning or the Xirgo configuration tool provided by the vendor.
2. Enter the Plaspy server destination using either the server domain d.plaspy.com or the server IP 54.85.159.138 as allowed by your device.
3. Set the reporting port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure APN and mobile credentials so the XT31 can establish GPRS connectivity.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy and appears in your Plaspy account with expected telemetry and events.

## Example Configuration Commands

The XT31 can be configured by SMS on installations that support SMS provisioning. The following public SMS commands are provided in manufacturer guidance for setting the operator APN and GPRS server. Preserve placeholders and replace them with your operator values where needed.

- Set the operator APN (replace placeholders with your operator values)
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation of placeholders
- {{apn}} the APN name provided by the mobile operator
- {{apnu}} APN username if required, otherwise leave blank or zero as per operator instructions
- {{apnp}} APN password if required, otherwise leave blank or zero as per operator instructions

- Set the GPRS server to Plaspy (this command uses the Plaspy server IP and port 8888)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes
- The second command configures port 8888 and the Plaspy server IP 54.85.159.138 with additional device parameters included by the manufacturer command format.
- If your device firmware accepts a hostname instead of an IP, you can enter d.plaspy.com and port 8888 using the manufacturer method that supports domain names.
- Send commands in the order shown when manufacturer documentation identifies an order dependency.

## Configuration Notes

- Firmware and regional variants of the XT31 may accept different SMS formats or vendor tool options; always check the device firmware notes before sending commands.
- The device supports configuration by SMS in many installations, but some deployments use vendor provisioning software or an installer tool instead.
- Choose UDP or TCP based on your network reliability and the device firmware guidance; Plaspy will automatically detect the tracker protocol upon receiving data.
- Keep APN credentials and SIM provisioning information handy; incorrect APN settings are a common reason devices fail to report.
- After applying settings, allow a short window for the device to register on the network and for Plaspy to ingest the first messages.

## Why Use Plaspy with This Configuration

Using the XT31 with Plaspy consolidates cargo telemetry, sensor events, and capacity assessments with fleet location and operational data in a single platform. This configuration lets operators monitor real time status, receive event driven alerts, and use historical records to inform routing and utilization decisions.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and manufacturer guidance verify details at the Xirgo website https://xirgo.com/ as vendor specifications and setup methods can change over time.
