---
slug: /xirgo/xg37/configuration
id: xg37-configuration
sidebar_label: Configuration
title: Xirgo - XG37 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XG37 use with Plaspy including server settings SMS commands and practical setup steps
keywords:
  - Xirgo XG37 configuration
  - Xirgo XG37 setup
  - XG37 Plaspy setup
  - Xirgo GPS tracker configuration
  - Plaspy tracker configuration
  - XG37 server configuration
  - Xirgo fleet tracker setup
  - GPS tracker Plaspy integration
  - XG37 telemetry configuration
  - Xirgo XG37 SMS configuration
---

# Xirgo - XG37 Configuration

This page documents the public configuration context for using the Xirgo XG37 with Plaspy. It focuses on the practical server settings, common setup workflow, and the publicly available SMS configuration commands used to point the tracker at Plaspy. Use this guide to prepare the device for communication with Plaspy and to understand what you will need before integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The XG37 documentation and the example SMS commands shown here reflect common public options; always verify device-specific steps against the manufacturer documentation if your device behaves differently.

## Configuration Overview

The goal of configuration is to make the XG37 able to reach Plaspy and report location and telemetry reliably. For most deployments this means ensuring network connectivity, configuring APN and server endpoint, and validating that the device appears in Plaspy.

- Configure the mobile operator APN so the device has data connectivity for telemetry and SMS setup.
- Point the device to the Plaspy server domain or IP and set the shared Plaspy port.
- Choose the transport (UDP or TCP) if the device prompts for a protocol, or rely on Plaspy automatic detection.
- Apply settings and restart the tracker to establish a fresh session with Plaspy.
- Validate the tracker appears in Plaspy and that position and telemetry arrive as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all devices)  
- Transport support for UDP or TCP as required by the device or installer  
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A powered and reachable XG37 device with an active SIM card capable of data and SMS if SMS setup is used.  
- Operator APN details from the SIM provider for mobile data connectivity.  
- Access to the official Xirgo configuration method supported for your unit such as SMS commands or manufacturer configuration software.  
- Knowledge of whether your installation prefers UDP or TCP transport; Plaspy will auto detect protocol but the device may require a transport selection.  
- A test plan to confirm the device reports to Plaspy after configuration, including expected telemetry or position updates.  
- If available, check the device firmware version and release notes for any changes to configuration commands or behavior.

## How This Tracker Connects to Plaspy

The XG37 is configured to send its telemetry and position to the shared Plaspy endpoint so the platform can present live tracking, event alerts, and vehicle telemetry. Plaspy listens on the same port for all supported devices and will detect the incoming protocol automatically.

- The tracker must be configured to reach d.plaspy.com or 54.85.159.138 on port 8888.  
- Depending on the tracker configuration, transport can be UDP or TCP; choose the option required by your firmware or send configuration via SMS as supported.  
- Once connected the device will transmit the configured telemetry and events so Plaspy can map position and show telemetry.  
- Plaspy’s automatic protocol detection handles common tracker protocols when the device connects to the shared server endpoint.

## Common Configuration Workflow

1. Access the official Xirgo configuration method for your unit, for example SMS commands or the manufacturer's configuration tool.  
2. Enter the Plaspy server address by using the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 which is the shared port used by Plaspy for all supported devices.  
4. Choose UDP or TCP if the device requires a transport selection; otherwise rely on protocol auto detection by Plaspy.  
5. Apply or save the configuration on the device and send any required SMS commands where applicable.  
6. Restart the device if required by the configuration method to establish a new connection.  
7. Validate that the device reports to Plaspy by checking the platform for incoming position and telemetry data.

## Example Configuration Commands

The XG37 supports SMS based configuration. Below are the public SMS commands available in the manufacturer information. Send these as SMS messages to the tracker SIM number in the order shown.

- Set the operator APN. Replace placeholders with your operator values:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation of placeholders:
- {{apn}} — the APN name string provided by the mobile operator.  
- {{apnu}} — the APN username if required by the operator; leave empty if not required.  
- {{apnp}} — the APN password if required by the operator; leave empty if not required.

- Set the GPRS server to Plaspy using the server IP and Plaspy port 8888. This command configures the device server entry to point at Plaspy:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes:
- These commands are sent by SMS and applied in order. The first command configures the APN to ensure data connectivity. The second command registers the Plaspy server address and port.  
- If your workflow uses the Plaspy domain instead of the IP, enter d.plaspy.com in your manufacturer tool or configuration interface where supported. The manufacturer SMS commands above use the IP in the published example.

## Configuration Notes

- Firmware differences can change available SMS commands or parameter ordering; verify commands against your device firmware.  
- SMS based setup is supported by the public commands shown here, but many installers use the manufacturer configuration tool when available.  
- When given a choice, select UDP or TCP according to your firmware capability and network conditions; Plaspy will auto detect protocol on connection.  
- Plaspy uses the same port 8888 for all devices so the server port value is consistent across models.  
- Always confirm any placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator or installer before sending configuration SMS.

## Why Use Plaspy with This Configuration

Configuring the XG37 to report to Plaspy provides a straightforward path to real time location, vehicle telemetry, and compliance data in a single platform. With telemetry forwarded to Plaspy, fleet teams can monitor vehicle movement, receive geofence alerts, and consolidate CANBUS and other data streams for reporting and operational visibility.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior, and manufacturer instructions verify details with Xirgo at https://xirgo.com/.
