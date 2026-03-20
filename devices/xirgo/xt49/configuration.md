---
slug: /xirgo/xt49/configuration
id: xt49-configuration
sidebar_label: Configuration
title: Xirgo - XT49 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the Xirgo XT49 tracker to Plaspy including server settings and example SMS commands
keywords:
  - Xirgo XT49 configuration
  - Xirgo XT49 setup
  - XT49 Plaspy integration
  - XT49 server configuration
  - XT49 GPS tracker setup
  - Xirgo tracker configuration
  - XT49 LTE tracker setup
  - XT49 asset tracking setup
  - Plaspy tracker configuration
  - Xirgo tracking platform setup
---

# Xirgo - XT49 Configuration

This page provides the public configuration context for using the Xirgo XT49 tracker with Plaspy. It focuses on the practical server settings and example commands that integrate the XT49 with Plaspy for real time tracking and telemetry. Use this guide alongside the device documentation from Xirgo when planning installation and deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The XT49 supports SMS based configuration as a common method; below we include the public SMS commands provided for APN and server setup and explain how to apply Plaspy settings.

## Configuration Overview

This configuration process prepares the XT49 to communicate with the Plaspy platform so location updates and device status are received reliably. The goal is to configure network access, point the tracker at Plaspy's endpoint, and verify that the device reports properly.

- Set the operator APN so the device can register on LTE and use data services for telemetry.
- Configure the device to send data to Plaspy by entering the shared Plaspy server endpoint and port.
- Choose the transport protocol (UDP or TCP) if required by the device and save the setting.
- Validate connectivity and confirm the XT49 appears in Plaspy for real time visibility and alerts.
- Use SMS or the supported Xirgo configuration tool depending on installer preference and firmware capability.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device is powered and accessible for configuration, including any required mounting checks.
- Active SIM card with data service that supports the device's LTE bands and an operator APN.
- Access to the manufacturer configuration method such as SMS commands or vendor software.
- Knowledge of the operator APN, and optional APN username and password if your carrier requires them.
- Basic account access to Plaspy to confirm device provisioning and visibility after configuration.

## How This Tracker Connects to Plaspy

The XT49 is configured to forward location and operational data to the shared Plaspy server endpoint and port so fleet managers can monitor assets centrally. Plaspy ingests the device telemetry and provides visibility, alerts, and historical reporting.

- The tracker uses the configured APN to establish a data connection over LTE.
- Device telemetry is sent to d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy accepts both on the same port.
- Plaspy automatically detects the tracker protocol and interprets incoming messages for mapping and event reporting.
- Once configured, the tracker appears in Plaspy for real time tracking, alerts, and history.

## Common Configuration Workflow

1. Access the official Xirgo configuration method for the XT49 such as SMS commands or vendor configuration software.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 for Plaspy communication.
4. Choose the transport protocol UDP or TCP if the XT49 requires explicit selection.
5. Configure the operator APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy and appears in the platform with expected telemetry.

## Example Configuration Commands

The XT49 supports SMS based configuration. The following public SMS commands are provided by the manufacturer for APN and GPRS server configuration. Send these commands to the device using the unit's SMS configuration method.

1. Set the operator APN
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} is the APN string required by your mobile operator.
- {{apnu}} is the APN username if required by the operator; leave empty if not used.
- {{apnp}} is the APN password if required by the operator; leave empty if not used.

2. Set the GPRS server for Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command sets the server IP to 54.85.159.138 and the port to 8888 for Plaspy.
- The parameters after the IP and port relate to device-specific server options; retain the provided order and values as shown in the public command.

Use the exact placeholder values when preparing SMS commands. Replace the placeholders only with values provided by your network operator or customer settings.

## Configuration Notes

- Firmware and hardware revisions can change command formats and available options; confirm command support with current Xirgo documentation before mass deployment.
- If the XT49 requires a transport choice, test both UDP and TCP as needed. Plaspy accepts both on port 8888 and automatically detects the protocol.
- SMS based setup is useful for remote or sealed deployments where physical access is limited; ensure the SIM can receive configuration SMS messages.
- Keep a record of APN credentials and server commands used during installation for troubleshooting and future maintenance.
- Always verify device visibility in Plaspy after configuration to confirm correct telemetry ingestion.

## Why Use Plaspy with This Configuration

Configuring the XT49 to send telemetry to Plaspy gives operators a single platform for real time tracking, event alerts, and historical reporting for remote and long duration assets. The combination of XT49 hardware designed for low maintenance deployments and Plaspy's shared server settings simplifies integration and ongoing operations.

To learn more about Plaspy and how it supports devices like the XT49 visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and full technical documentation, verify details with the manufacturer at https://xirgo.com/ since vendor specifications and configuration methods may change over time.
