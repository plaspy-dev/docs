---
slug: /xirgo/xt63/configuration
id: xt63-configuration
sidebar_label: Configuration
title: Xirgo - XT63 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for the Xirgo XT63 showing Plaspy server settings and SMS commands for quick deployment
keywords:
  - Xirgo XT63 configuration
  - Xirgo XT63 setup
  - XT63 Plaspy configuration
  - XT63 server configuration
  - XT63 GPS tracker setup
  - Xirgo tracker configuration
  - Plaspy tracker setup
  - vehicle telematics XT63
  - XT63 SMS configuration
  - XT63 GPRS server settings
---

# Xirgo - XT63 Configuration

This page documents the public configuration context for connecting the Xirgo XT63 to the Plaspy platform. It focuses on the practical server settings and available SMS configuration commands used to point the tracker at Plaspy, and explains what you should prepare before integrating the device with the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The XT63 supports SMS and GPRS configuration methods that can be used to apply the Plaspy settings shown below.

## Configuration Overview

The goal of this configuration process is to prepare the XT63 so it can communicate reliably with Plaspy for live location, event reporting, and telemetry. Use the manufacturer configuration method you have available to set the APN and server endpoint, then validate the device reports into Plaspy.

- Configure the device APN so the tracker can access the mobile data network for GPRS or LTE.
- Point the tracker to the Plaspy server endpoint and port so telemetry is routed to your Plaspy account.
- Select transport type UDP or TCP if the device firmware asks for a transport choice.
- Save and restart the device so the new network and server settings take effect.
- Validate connectivity in Plaspy and confirm regular location and heartbeat messages are arriving.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so the XT63 is configured to use port 8888 like other supported units

## Typical Requirements Before Setup

- A powered XT63 installed or temporarily powered for configuration
- A working SIM card with data and SMS enabled as required for GPRS and SMS based configuration
- Knowledge of the mobile operator APN values for the SIM in use
- Access to the official Xirgo configuration method such as SMS commands or manufacturer tools
- Network coverage on the device and confirmation the carrier supports required data services
- The device firmware version or hardware revision information, because commands and parameters can vary by firmware

## How This Tracker Connects to Plaspy

The XT63 sends location updates and event telemetry to the shared Plaspy server endpoint and port so fleet managers can view vehicle status and alerts on the platform. Once configured with the APN and Plaspy endpoint, the tracker will report according to the device protocol, which Plaspy detects automatically.

- The tracker is configured to report to the Plaspy server domain or IP using port 8888
- Transport can be UDP or TCP depending on device settings and network requirements
- Plaspy automatically detects the tracker protocol and parses incoming messages for display
- Location updates, ignition and input events, and other telemetry are forwarded to your Plaspy account
- Regular heartbeat or status packets help Plaspy maintain device visibility on the platform

## Common Configuration Workflow

1. Access the official Xirgo XT63 configuration method you have available, for example SMS commands or a vendor configuration tool.
2. Set the operator APN so the device can use cellular data for GPRS or LTE.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server fields.
4. Set the server port to 8888 which is used by all devices on Plaspy.
5. Choose UDP or TCP if the XT63 firmware requires selecting a transport protocol.
6. Apply or save the configuration and restart the device if required by the firmware.
7. Validate the device reports to Plaspy by checking for location updates and heartbeats in the platform.

## Example Configuration Commands

The XT63 can be configured by SMS. The manufacturer provides the following public SMS commands to set APN and the GPRS server. Send these commands to the device number using a phone or SMS gateway that the device accepts configuration messages from.

1. Set the operator APN
```text
+XT:1002,[apnu],[apnp],[apn]
```
- Explanation of placeholders
  - [apn] is the operator access point name
  - [apnu] is the APN username where applicable
  - [apnp] is the APN password where applicable
- Fill each placeholder with the values provided by your SIM operator or leave username and password empty if not required

2. Set the GPRS server endpoint and transport parameters
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command contains the port 8888 and the Plaspy server IP 54.85.159.138 in the order required by the device firmware
- The trailing numeric flags are device specific parameters used by the XT63 firmware to define protocol or retries; refer to Xirgo documentation for exact meanings if you need to adjust them

## Configuration Notes

- Firmware variations may change SMS command syntax or parameter ordering; always confirm with the XT63 release notes or manual.
- The XT63 supports SMS based configuration which is useful in the field when no configuration tool is available.
- Choose UDP or TCP based on network reliability and carrier behavior; both transports use port 8888 for Plaspy.
- You can point the device to d.plaspy.com or to 54.85.159.138; using the domain allows DNS based routing while the IP is a direct endpoint.
- Keep a record of original settings before changing configuration so you can restore if needed.

## Why Use Plaspy with This Configuration

Using the XT63 with Plaspy gives fleet and asset managers consistent, platform level visibility into vehicle location, events, and telemetry. The shared Plaspy endpoint and automatic protocol detection simplify onboarding so you can deploy trackers at scale with a common server configuration and centralized monitoring.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and installation guidance verify details on the manufacturer website https://xirgo.com/ as specifications and methods can change over time.
