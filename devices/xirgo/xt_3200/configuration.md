---
slug: /xirgo/xt_3200/configuration
id: xt_3200-configuration
sidebar_label: Configuration
title: Xirgo - XT-3200 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Xirgo XT 3200 showing Plaspy server settings SMS commands and integration steps
keywords:
  - Xirgo XT 3200 configuration
  - Xirgo XT 3200 setup
  - XT 3200 Plaspy configuration
  - Xirgo tracker server configuration
  - XT 3200 SMS commands
  - OBDII GPS tracker setup
  - fleet tracking XT 3200
  - driver behavior tracker configuration
  - GPS platform integration Plaspy
  - XT 3200 APN settings
---

# Xirgo - XT-3200 Configuration

This page covers the public configuration context for using the Xirgo XT-3200 tracker with Plaspy. It describes the shared server settings Plaspy expects, the high level steps for preparing an XT-3200 for connectivity, and the example SMS commands that are commonly used with this model. The XT-3200 is a plug and play OBD II device with an embedded cellular antenna and accelerometer, designed for passenger and light duty vehicles and capable of reporting ignition status and driving events.

Plaspy uses a set of shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps for the XT-3200 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The XT-3200 supports SMS based configuration for APN and GPRS server parameters which is reflected in the example commands below.

## Configuration Overview

Preparing the XT-3200 for tracking with Plaspy focuses on configuring network access and the device reporting endpoint so the tracker can communicate reliably with the platform. Where available, the XT-3200 can be configured by SMS to set operator APN and the GPRS server that points to Plaspy.

- Set the mobile data APN so the device can use the carrier data connection.
- Configure the device to report to Plaspy using the shared server endpoint and port.
- Choose the transport type (UDP or TCP) if the tracker requires a transport selection.
- Apply and save settings, then restart the tracker if required to start reporting.
- Verify the device appears and reports data in Plaspy after configuration.

## Plaspy Server Settings

When configuring the XT-3200 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

These values are the central connection target for the XT-3200 to reach Plaspy.

## Typical Requirements Before Setup

- A working SIM card with mobile data and SMS capability installed in the device
- Access to the XT-3200 in-vehicle OBD II port and power so the tracker is operational
- The carrier APN values for the SIM to allow GPRS data connectivity
- Knowledge of the manufacturer SMS command format or access to the vendor tool
- A Plaspy account or account administrator available to confirm device visibility after setup

## How This Tracker Connects to Plaspy

The XT-3200 reports location and vehicle parameters to Plaspy by sending its data to the shared Plaspy server endpoint and port. Once the XT-3200 is pointed at Plaspy and has an active data connection, the platform will detect the protocol and begin ingesting device messages.

- The tracker is configured to send GPRS traffic to d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be set to UDP or TCP depending on device settings and installer preference
- The device transmits periodic position and vehicle status reports to Plaspy
- Plaspy automatically detects the device protocol and processes incoming messages for visibility and event reporting
- After successful configuration the device should be visible in Plaspy and report telemetry as allowed by its firmware

## Common Configuration Workflow

1. Access the official Xirgo configuration method for the XT-3200 such as the SMS command set or the manufacturer tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the XT-3200 requires a transport selection for GPRS reporting.
5. Configure the device APN using the carrier APN values if the device requires manual APN setup.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate that the XT-3200 reports to Plaspy and appears in the platform; confirm telemetry and event reporting.

## Example Configuration Commands

The XT-3200 supports SMS based configuration. The public SMS commands commonly used to set APN and the GPRS reporting server are shown below. Preserve the placeholders when replacing them with carrier values.

1. Set the operator APN
```
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- Explanation: Replace the placeholders with your carrier values. {{apn}} is typically the APN name. {{apnu}} and {{apnp}} represent optional APN username and password fields if required by your carrier.

2. Set the GPRS server to point to Plaspy
```
+XT:1001,8888,54.85.159.138,4,0,0
```
- Explanation: This command configures the tracker to use port 8888 and the Plaspy server IP 54.85.159.138. Additional numeric flags at the end are device specific; consult Xirgo documentation for detailed meanings before changing them.

Note on order: send the APN command first so the device can establish GPRS connectivity, then set the GPRS server command. If your installation uses a domain name instead of an IP you may use d.plaspy.com where supported by the device command syntax; consult Xirgo documentation for domain support.

## Configuration Notes

- Firmware differences may change exact SMS parameters and numeric flag meanings; always verify commands against your XT-3200 firmware documentation.
- The XT-3200 supports SMS based configuration as shown, but some installers prefer vendor tools or provisioning services; use the method appropriate to your environment.
- Choose UDP or TCP based on network reliability and the installer recommendations. Plaspy accepts both transports on the shared port.
- Plaspy uses the same port 8888 for all supported devices and will auto detect the device protocol, so confirm the device points to the Plaspy server endpoint.
- Test connectivity after applying settings by confirming the device reports to Plaspy and by checking for position and event messages in the platform.

## Why Use Plaspy with This Configuration

Using the XT-3200 with Plaspy gives organizations a straightforward way to gather vehicle location and certain vehicle status events using a common server configuration. The shared server settings and Plaspy automatic protocol detection reduce per device configuration complexity and let fleets focus on deployment, monitoring, and driver behavior insights.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Manufacturer specifications, SMS command syntax, and firmware behavior can change over time, so please verify the latest XT-3200 setup details and command references on the official Xirgo website https://xirgo.com/.
