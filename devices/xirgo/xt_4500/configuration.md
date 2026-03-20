---
slug: /xirgo/xt_4500/configuration
id: xt_4500-configuration
sidebar_label: Configuration
title: Xirgo - XT-4500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT-4500 showing how to point the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Xirgo XT-4500 configuration
  - XT-4500 setup
  - Xirgo configuration Plaspy
  - XT-4500 GPS tracker setup
  - Xirgo server configuration
  - XT-4500 SMS commands
  - Plaspy tracker configuration
  - GPS tracker Plaspy setup
  - XT-4500 APN settings
  - asset tracking XT-4500
---

# Xirgo - XT-4500 Configuration

This page documents the public configuration context for using the Xirgo XT-4500 with Plaspy. It summarizes the practical server settings and the common steps used to point the device at the Plaspy backend so the tracker can report location and status. Where available, this guide includes example SMS configuration commands that are used with the XT-4500 in public manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware, hardware revision, installer practices, and vendor tools. The XT-4500 supports SMS based configuration commands in public documentation, and this page shows how those commands are used to set APN and the GPRS server that Plaspy requires.

## Configuration Overview

Preparing an XT-4500 for Plaspy integration focuses on configuring its network parameters and verifying the device can reach the Plaspy server endpoint and port. The public configuration flow commonly involves setting the mobile operator APN, registering the GPRS server settings, and confirming the device reports to the Plaspy endpoint.

- Configure the device operator APN so the XT-4500 can open a data session for reporting.
- Set the GPRS server address and port to point the device at Plaspy for telemetry delivery.
- Choose the transport mode supported by the device (UDP or TCP) and ensure it matches the network and installer preference.
- Save and apply settings, then validate connectivity so the device appears in Plaspy.
- Use SMS or manufacturer tools where supported to send configuration commands if field access is required.

## Plaspy Server Settings

Configure the XT-4500 to report to the shared Plaspy endpoint using the following public settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all devices supported on the platform. Use port 8888 when you configure the device server settings.

## Typical Requirements Before Setup

- A powered and reachable XT-4500 device with the ability to receive SMS commands or be configured using the official manufacturer tool.
- A valid SIM card with mobile data enabled and the correct APN values for the mobile operator.
- Access to the operator APN parameters and any authentication details required by the SIM.
- Administrative access to the device SMS number or configuration console used by your installer.
- Knowledge of whether you will use UDP or TCP for transport when the device requires an explicit selection.

## How This Tracker Connects to Plaspy

The XT-4500 is configured to send its location and status data to the Plaspy server endpoint and port so the platform can display the unit and its events. Once the device has the correct APN and GPRS server settings, it opens a connection to the Plaspy backend and begins reporting according to its firmware reporting behavior.

- The device is pointed at d.plaspy.com or the IP 54.85.159.138 on port 8888.
- The tracker uses either UDP or TCP transport as selected during configuration.
- Plaspy receives the tracker telemetry and automatically detects the specific tracker protocol.
- Once reporting begins the device becomes visible in Plaspy for monitoring and event reporting.
- Regular validation of device reporting confirms correct APN and server configuration.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or software provided by the device vendor or installer. For field devices, this is often SMS-based configuration.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and confirm settings were accepted.
6. Restart the device if the firmware requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The XT-4500 public configuration documentation includes SMS commands to set the operator APN and to set the GPRS server. Send these commands as individual SMS messages to the device number according to Xirgo instructions. Preserve the placeholders when you replace them with your operator values.

- Set the operator APN. Replace the placeholders with your operator values. The placeholders are:
  - [apnu] for APN username if required
  - [apnp] for APN password if required
  - [apn] for the operator APN name

```
+XT:1002,[apnu],[apnp],[apn]
```

- Set the GPRS server to Plaspy. This command sets the server IP or domain and the port the device will use to connect to Plaspy. The example uses port 8888 and the public Plaspy IP address.

```
+XT:1001,8888,54.85.159.138,4,0,0
```

Notes on these commands:
- Send the APN command first to ensure the device can establish a GPRS session when the server is set.
- Keep placeholders intact until you substitute your operator specific values.
- The second command includes parameters after the IP and port that are part of the device command syntax. Use the exact format shown when following public XT-4500 documentation.

## Configuration Notes

- Firmware and hardware revisions may change the exact command syntax or available parameters; always verify with current Xirgo documentation.
- The XT-4500 supports SMS based configuration in public examples, which is useful for remote or field installations without direct tool connectivity.
- Choose UDP or TCP based on network characteristics and installer preference; both transports are supported by Plaspy and the device.
- Plaspy uses the same port 8888 for all devices on the platform and automatically detects the tracker protocol, so use port 8888 when configuring the server.
- If a configuration change does not appear to take effect, confirm that SMS delivery succeeded and that the device was restarted if required by the firmware.

## Why Use Plaspy with This Configuration

Using the XT-4500 with Plaspy provides a straightforward path to bring low power asset tracking into a centralized monitoring platform. With the public SMS commands and the shared Plaspy server settings, installers can configure remote XT-4500 units to report reliably into the same backend used for other supported devices, simplifying fleet or asset overview and alerting.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance please verify details with Xirgo at https://xirgo.com/ as manufacturer specifications and setup procedures can change over time.
