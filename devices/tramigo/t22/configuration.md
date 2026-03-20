---
slug: /tramigo/t22/configuration
id: t22-configuration
sidebar_label: Configuration
title: Tramigo - T22 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Tramigo T22 with Plaspy server settings and SMS commands for integration
keywords:
  - Tramigo T22
  - Tramigo T22 configuration
  - Tramigo T22 setup
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - GPRS tracker configuration
  - Tramigo server settings
  - tracker SMS commands
  - fleet management tracker
---

# Tramigo - T22 Configuration

This page covers the public configuration context for using the Tramigo T22 GPS tracker with the Plaspy platform. It collects the practical server settings and the commonly used SMS commands published for the T22 so you can prepare the device to communicate with Plaspy for tracking and monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public configuration values and SMS examples that are commonly used to connect a Tramigo T22 to Plaspy.

## Configuration Overview

The Tramigo T22 needs basic network and server settings so it can send position and event data to Plaspy. The configuration process prepares the device for GPRS connectivity, sets the Plaspy endpoint, and validates that the tracker reports correctly to the platform.

- Configure the device GPRS APN so it has mobile data access for reporting.
- Point the T22 to the Plaspy server endpoint and port so data is routed into your Plaspy account.
- Choose the transport method UDP or TCP as required by your installation and device firmware.
- Enable periodic reporting or event triggers so the tracker sends positions to Plaspy.
- Validate connectivity and confirm the tracker appears in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port 8888

## Typical Requirements Before Setup

- A powered Tramigo T22 with a working SIM card and GPRS enabled by the mobile operator.
- Access to the device SMS configuration method or the Tramigo configuration tool provided by the vendor.
- Correct APN, APN username, and APN password for the SIM operator to allow GPRS connectivity.
- Knowledge of whether your installation should use UDP or TCP transport and whether TCP is supported by the device firmware.
- A way to restart the tracker after configuration if required to apply new GPRS or server settings.
- Access to Plaspy and knowledge of the account context so you can verify the device after it registers.

## How This Tracker Connects to Plaspy

The Tramigo T22 uses GSM and GPRS to send location and event data to Plaspy. Once the device has a valid APN and server settings, it will open a connection to the Plaspy endpoint and begin reporting according to the configured reporting profile.

- The tracker is configured to report to the shared Plaspy server endpoint and port: d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device selection during setup.
- Plaspy detects the tracker protocol automatically so the platform interprets incoming messages without per device protocol selection.
- Regular position and event reports from the T22 become visible in Plaspy for monitoring and operational use.
- Verification is completed by confirming the device appears and updates in the Plaspy interface after configuration.

## Common Configuration Workflow

1. Access the official Tramigo configuration method or software or prepare to send configuration SMS commands as provided by Tramigo documentation.
2. Enter the Plaspy server using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Configure the device APN with your operator values so GPRS can connect.
6. Apply or save the configuration and restart the device if the firmware requires a reboot for changes to take effect.
7. Validate that the Tramigo T22 reports to Plaspy by checking for device registration and updates in your Plaspy account.

## Example Configuration Commands

The Tramigo T22 can be configured by sending SMS commands to the device. The commands below are public examples used to set APN, enable reporting, disable certain ACK responses, and point the tracker to the Plaspy server. Preserve placeholders when replacing with your operator values.

1. Set the operator APN
```text
GPRS,APN,[apn],[apnu],[apnp]
```
- [apn] is the operator APN name
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required by the operator

2. Turn on FIND reporting every 1 minute
```text
R,10,F,1,1,1,35
```
- This command is the public example for enabling periodic FIND reporting as shown by Tramigo documentation. Confirm timing parameters with manufacturer docs.

3. Set ACK Ping response off
```text
Set,GPRSPingResponse,0
```

4. Set message ACK response off
```text
Set,GPRSMsgResponse,0
```

5. Set the GPRS server to Plaspy using the provided IP and TCP transport
```text
GPRS,Connect,54.85.159.138,8888,tcp
```
- The example above uses the Plaspy server IP and TCP transport. You may instead point to d.plaspy.com if your device accepts domain names.

6. To check current settings
```text
Status
```
- Send the Status command to request the device to return its current configuration state if supported.

## Configuration Notes

- Tramigo T22 configuration can be performed by SMS as shown in the public commands above or by using Tramigo vendor tools; follow the option appropriate to your installation.
- Firmware and hardware revisions can change command syntax and supported parameters. If a command fails, confirm the correct syntax with Tramigo documentation for your firmware version.
- Choose TCP or UDP based on your networking needs and device support. Plaspy accepts either transport on port 8888 and will auto detect the incoming protocol.
- Keep APN credentials and any placeholders secure. Replace [apn], [apnu], and [apnp] with operator values before sending commands.
- If settings do not take effect immediately, a device restart or power cycle may be required to apply network and server changes.

## Why Use Plaspy with This Configuration

Using the Tramigo T22 with Plaspy provides a straightforward path to bring real time location and event visibility into a centralized fleet or asset management platform. With the shared Plaspy server settings and automatic protocol detection, you can standardize tracker configuration across multiple devices and focus on operational monitoring rather than per device protocol handling.

To learn more about Plaspy and how it integrates with supported trackers visit https://www.plaspy.com. For the latest Tramigo T22 specific firmware behavior and manufacturer setup details verify information on the Tramigo website http://www.tramigo.net/.
