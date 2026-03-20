---
slug: /topfly/solarguardx_110/configuration
id: solarguardx_110-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly SolarGuardX 110 integration with Plaspy using shared server settings and SMS commands
keywords:
  - TopFly SolarGuardX 110
  - SolarGuardX 110 configuration
  - TopFly tracker setup
  - Plaspy configuration
  - GPS tracker server settings
  - asset tracking setup
  - device SMS commands
  - fleet tracking configuration
  - server endpoint setup
  - tracker integration guide
---

# TopFly - SolarGuardX 110 Configuration

This page documents the public configuration context for using the TopFly SolarGuardX 110 with Plaspy. It focuses on the practical server settings and the manufacturer supplied SMS commands that are commonly used to point the device at Plaspy and enable data reporting. Use this guide to understand what you need to prepare before integrating the SolarGuardX 110 into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The SolarGuardX 110 supports SMS based configuration as shown below; however always cross check any device specific actions with official TopFly documentation for your firmware version.

## Configuration Overview

Configuring the SolarGuardX 110 for Plaspy prepares the device to send location and telemetry to Plaspy’s centralized endpoint and ensures the tracker can be monitored in the platform. The configuration process typically sets network parameters, the reporting destination, and the reporting cadence so Plaspy can ingest data reliably.

- Point the device to the Plaspy server endpoint so position and events route to your Plaspy account.
- Configure the device APN and network access so GPRS or LTE connectivity is available.
- Set the reporting interval and buffering so frequent updates and offline logging behave as expected.
- Validate transport settings and confirm the device successfully connects to Plaspy.
- Use the manufacturer recommended method such as SMS commands or the official tool to apply the configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device powered and charged with access to the integrated battery and solar charging if needed.
- Active Nano SIM card provisioned for data and SMS as required by your installation and carrier.
- Knowledge of the device configuration password; the SolarGuardX 110 default password in public commands is 0000.
- Access to the official TopFly configuration method such as SMS commands or vendor configuration software.
- Network coverage for LTE Cat 1 so the device can register with the mobile network and reach Plaspy.
- A record of the intended reporting cadence so you can set TIMER or interval values that meet your monitoring needs.

## How This Tracker Connects to Plaspy

The SolarGuardX 110 is configured to report position and telemetry to Plaspy’s shared server endpoint and port using the chosen transport. Once configured, the device sends location updates, buffered logs, and event messages to Plaspy where they become visible to operators and workflows.

- The tracker forwards position and telemetry to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device selection; Plaspy accepts either and detects the protocol automatically.
- Reporting cadence is controlled on the device so frequent updates arrive at Plaspy according to TIMER settings.
- Buffered logging on the device uploads stored points to Plaspy after connectivity resumes.
- Events such as movement, alarms, or I/O triggers are transmitted to Plaspy for alerting and monitoring.

## Common Configuration Workflow

1. Access the official TopFly configuration method such as SMS commands or the manufacturer tool for your firmware.
2. Enter the Plaspy server by specifying d.plaspy.com or the server IP 54.85.159.138 as provided here.
3. Set the destination port to 8888 which is the shared port used by Plaspy for all supported devices.
4. Choose UDP or TCP transport if the device prompts for a transport selection.
5. Configure the APN and any required network parameters to enable GPRS or LTE connectivity.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by monitoring device connectivity and incoming messages in the platform.

## Example Configuration Commands

The SolarGuardX 110 accepts SMS commands for configuration. The public example commands below use the device password 0000 which is the default. Replace the APN placeholders with your carrier values.

- Set the time zone to UTC 0
```sms
GMT,0000,0#
```

- Set the operator APN and optional APN auth placeholders
```sms
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is the access point name, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Leave username and password empty if your carrier does not require them.

- Set the GPRS server to Plaspy using the server IP and port 8888
```sms
IP,0000,54.85.159.138 8888#
```
Note: You may be able to use d.plaspy.com instead of the IP depending on device firmware and DNS support.

- Set the update interval to 60 seconds
```sms
TIMER,0000,60:60:0:0#
```
Explanation: This example sets the reporting cadence and related timer slots as shown in the device public command set. Adjust the interval to meet operational requirements.

## Configuration Notes

- SMS based configuration is publicly documented for this device but your installation may prefer the manufacturer tool or an OTA method depending on firmware.
- Firmware revisions and hardware variants can affect exact command syntax and DNS support for domain names such as d.plaspy.com.
- Choose UDP or TCP deliberately; both are supported but behavior can differ by network and device firmware.
- Plaspy uses the same port 8888 for all devices and automatically detects the tracker protocol so the server port does not need to change per device.
- Preserve the device password and replace the default 0000 where required by your security policy after confirming connectivity.

## Why Use Plaspy with This Configuration

Using the SolarGuardX 110 with Plaspy gives operations teams reliable remote visibility for outdoor assets with low maintenance thanks to solar augmented power and extensive buffering. Configuring the tracker to point at Plaspy enables centralized monitoring of location, events, and historical logs that support security and fleet management workflows.

Learn more about Plaspy and how it integrates with devices like the SolarGuardX 110 at https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior, and manufacturer details verify setup and documentation on the official TopFly website https://www.topflytech.com/.
