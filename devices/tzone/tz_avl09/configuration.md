---
slug: /tzone/tz_avl09/configuration
id: tz_avl09-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL09 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the TZone TZ-AVL09 for use with Plaspy including server settings and SMS commands
keywords:
  - TZone TZ-AVL09 configuration
  - TZ-AVL09 setup Plaspy
  - TZone GPS tracker configuration
  - TZ-AVL09 server configuration
  - vehicle tracking Plaspy configuration
  - GPS tracker APN setup
  - GPRS tracker configuration
  - TZone tracker SMS commands
  - fleet management tracker setup
  - Plaspy device configuration
---

# TZone - TZ-AVL09 Configuration

This page documents the public configuration context for using the TZone TZ-AVL09 GPS tracker with Plaspy. It summarizes the server settings Plaspy requires, practical setup steps, and example SMS commands that are commonly used to configure the device to report to Plaspy. The content is intended to help technical users prepare the device for integration and confirm connectivity to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TZ-AVL09 supports GPRS TCP or UDP and SMS, and the example commands below show a typical SMS based configuration flow that sets APN, reporting interval, and the GPRS server for reporting to Plaspy.

## Configuration Overview

The configuration process prepares the TZ-AVL09 to send its location and event data to Plaspy and ensures the device can be seen and managed from the platform. Configuring the tracker typically includes setting mobile data parameters, selecting the server transport, and enabling GPRS reporting.

- Set the mobile operator APN and optional APN credentials so the device can use mobile data for GPRS reporting.
- Configure the reporting interval to control how often the tracker sends updates to Plaspy.
- Point the device at the Plaspy server endpoint and port so data is delivered to the correct platform endpoint.
- Enable GPRS mode on the tracker so it actively sends telemetry via TCP or UDP to Plaspy.
- Validate connectivity so the device appears in Plaspy and begins sending location updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

All Plaspy devices use the same port and Plaspy performs automatic protocol detection so the platform can accept data from a wide range of tracker protocols.

## Typical Requirements Before Setup

- A powered and accessible TZ-AVL09 tracker properly installed in the vehicle or test bench.
- A working SIM card with mobile data enabled and correct APN information for the mobile operator.
- Ability to send SMS commands to the device using the device admin phone number, or access to the manufacturer configuration tool if available.
- Basic knowledge of the device default SMS command password if one is required for configuration.
- A Plaspy account or access to the Plaspy platform to confirm the device appears and reports after configuration.
- Manufacturer documentation for the specific firmware revision to verify supported SMS command syntax and optional parameters.

## How This Tracker Connects to Plaspy

When configured for Plaspy the TZ-AVL09 uses GPRS to deliver location and event data to Plaspy over the shared server endpoint and port. Plaspy receives the connection on port 8888 and identifies the tracker protocol automatically so the device can begin reporting without manual protocol selection in the platform.

- The tracker sends GPRS data to the configured Plaspy server endpoint and port.
- Data can be transmitted using either UDP or TCP depending on the device configuration and network conditions.
- Plaspy uses automatic protocol detection so the platform will accept the tracker data format without extra platform configuration.
- Reporting intervals and alarm events determine how frequently the tracker pushes updates to Plaspy.
- Once the GPRS server and mode are set, the device should appear in Plaspy and start sending location and status messages.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TZ-AVL09, typically SMS commands or vendor software, and confirm the required admin SMS password or tool credentials.
2. Enter the Plaspy server endpoint by using either d.plaspy.com or the server IP 54.85.159.138 depending on what the device accepts.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP on the device if the tracker requires explicit transport selection; both transports are supported by Plaspy on port 8888.
5. Apply or save the configuration and enable GPRS mode on the tracker so it will start reporting.
6. Restart or power cycle the device if required by the tracker firmware to apply the new GPRS settings.
7. Validate that the device reports to Plaspy and is visible in the platform, confirming correct APN, server, transport, and interval settings.

## Example Configuration Commands

To set the TZ-AVL09 by SMS, send the following commands in the order shown. These examples preserve the tracker default admin prefix used by the manufacturer. Replace placeholders with your operator values.

1. Set the operator APN
   - Replace {{apn}} with your mobile operator APN
   - Optional {{apnu}} is the APN username and {{apnp}} is the APN password if required by your operator

```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

Note: If no APN username or password is required omit the ,{{apnu}},{{apnp}} portion so the command looks like:

```text
*000000,011,{{apn}}#
```

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```

3. Set the GPRS server to the Plaspy server IP and port
```text
*000000,015,0,54.85.159.138,8888#
```

If the tracker accepts a DNS name in place of the IP you can configure the server to use d.plaspy.com in the device interface or manufacturer tool instead of the numeric IP.

4. Activate GPRS mode
```text
*000000,016,1#
```

Send these commands from a phone number authorized to control the tracker and wait for confirmation SMS replies when applicable. Keep the commands in the given order where the APN and server must be set before activating GPRS reporting.

## Configuration Notes

- SMS based setup is supported for this model so you can perform initial configuration by sending commands from an authorized phone number.
- Firmware revisions and regional variants can change SMS syntax or command prefixes. Verify the specific command format for your device firmware before sending commands.
- When possible prefer using the domain d.plaspy.com if the device supports DNS names. Otherwise the server IP 54.85.159.138 is an accepted alternative.
- Plaspy accepts both TCP and UDP on port 8888 and the platform automatically detects the tracker protocol.
- Always confirm APN credentials with your mobile operator and test data connectivity before enabling continuous reporting.

## Why Use Plaspy with This Configuration

Using the TZ-AVL09 with Plaspy provides a straightforward path to centralize vehicle location, alarms, and status reporting in a single fleet management platform. With the shared Plaspy server settings and automatic protocol detection, organizations can standardize device provisioning and reduce per device platform configuration.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration guidance and firmware behavior with the manufacturer at http://www.tzonedigital.com/ since manufacturer setup methods and firmware features can change over time.
