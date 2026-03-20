---
slug: /istartek/pt60_l/configuration
id: pt60_l-configuration
sidebar_label: Configuration
title: iStartek - PT60-L Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the iStartek PT60 L tracker to work with Plaspy server settings
keywords:
 - iStartek PT60 L configuration
 - iStartek PT60 L setup
 - PT60 L Plaspy configuration
 - PT60 L server settings
 - PT60 L SMS commands
 - PT60 L GPS tracker setup
 - Plaspy tracker configuration
 - fleet tracking PT60 L
 - GPS tracker server configuration
 - asset tracking PT60 L
---

# iStartek - PT60-L Configuration

This page documents the public configuration context for using the iStartek PT60-L GPS tracker with Plaspy. It summarizes the practical server settings, common setup workflow, and publicly available configuration commands so you can prepare the device to report telemetry and location to the Plaspy platform.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when messages arrive. Manufacturer side setup steps for the PT60-L can vary by firmware version, hardware revision, installation type, and vendor tools, and this guide highlights the public SMS commands and workflow commonly used for initial configuration.

## Configuration Overview

Preparing the PT60-L for Plaspy connectivity focuses on configuring the device to reach Plaspy’s shared server endpoint and validating that the tracker is reporting correctly. The PT60-L supports SMS based configuration in the public guidance below and offers configurable reporting intervals to balance battery life and tracking responsiveness.

- Configure the device server to point to Plaspy using the public server domain or IP and the shared port.
- Set a correct APN and ensure the installed SIM supports data and outbound TCP or UDP connections.
- Choose the transport mode (UDP or TCP) where the tracker requires an explicit selection.
- Configure reporting interval or timer to match your tracking and battery life goals.
- Validate configuration with a parameter check and confirm location and telemetry appear in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on incoming connections

These exact values are the public Plaspy settings to apply to the PT60-L so the device can reach the platform and be identified by Plaspy.

## Typical Requirements Before Setup

- A charged PT60-L with sufficient battery or a power source during initial configuration.
- An active SIM card provisioned for data and SMS for the region and device variant.
- APN information from the cellular operator to configure GPRS data access.
- Access to the official iStartek configuration method or vendor SMS instructions for the PT60-L.
- A way to send SMS commands to the device from a known phone number if SMS-based setup is used.
- A Plaspy account and access to the platform to confirm device reporting after configuration.

## How This Tracker Connects to Plaspy

The PT60-L transmits GNSS location and device telemetry to Plaspy using the configured server endpoint and transport. Once the device is configured to use the Plaspy server and port, Plaspy ingests those messages and displays location, battery state, and alarms within the platform.

- The tracker reports to the shared Plaspy server endpoint using d.plaspy.com or the provided IP address.
- Messages are sent over the selected transport, either UDP or TCP, to port 8888.
- Plaspy receives the messages and automatically detects the device protocol to parse telemetry.
- Reporting intervals can be set to balance real time location needs with long standby battery life.
- Alarms and event reports from the PT60-L appear in Plaspy dashboards and history once the device is connected.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software as provided by iStartek, typically via SMS commands or vendor tools.
2. Ensure the device has an active SIM with a correct APN and is powered on.
3. Enter the Plaspy server as d.plaspy.com or alternatively the IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 as required by Plaspy.
5. Choose UDP or TCP if the tracker requires explicit transport selection.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking platform device status and using the device parameter check command if available.

If you are using SMS-based configuration, follow the manufacturer SMS syntax and order (reset first only when necessary), then set APN and server settings as shown in the example commands below.

## Example Configuration Commands

The PT60-L documents a set of SMS commands used for public configuration. Preserve the order when following an initial setup, and treat the factory reset command as optional for initial or recovery use.

- Optional factory reset for initial or recovery setup
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
Note: {{apn}} is the operator APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders when required by the operator.
```
APN,{{apn}}#
```
Or, when username and password are required:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy domain using the shared port
```
SERVER,1,d.plaspy.com,8888#
```

- Alternative server setting using the Plaspy IP and shared port
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to every 60 seconds
```
TIMER,60#
```

- Check current parameters and configuration
```
PARAM#
```

Send each command as a single SMS message to the device following iStartek SMS syntax. Replace the placeholders with the real APN details provided by your mobile operator.

## Configuration Notes

- SMS based setup is publicly documented for the PT60-L and is commonly used for remote provisioning when physical access is limited.
- Firmware revisions or region specific firmware may change exact command syntax or supported parameters; verify with the most recent iStartek documentation.
- Choose UDP or TCP based on your operational requirements and network reliability. Both transports are supported by Plaspy on port 8888.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so correct server and port settings are the critical elements for connectivity.
- Confirm APN settings and SIM operator restrictions before applying server configuration to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Using the PT60-L with Plaspy provides a straightforward path to bring long-life, installation free asset tracking into your fleet or asset program. The PT60-L’s configurable reporting intervals and telemetry capabilities combined with Plaspy’s automatic protocol detection and unified server endpoint let you manage many devices with a consistent server configuration.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specific configuration and firmware behavior on the manufacturer site https://istartek.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm current procedures on the official iStartek documentation before large scale deployments.
